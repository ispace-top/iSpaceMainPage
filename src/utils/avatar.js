export const createAvatar = (initial) => {
  if (!initial) return '';
  const char = initial.charAt(0).toUpperCase();
  let hash = 0;
  for (let i = 0; i < char.length; i++) {
    hash = char.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xFF;
    color += ('00' + Math.floor((value + 150) / 2).toString(16)).substr(-2);
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="${color}" /><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-family="Manrope, Noto Sans SC, sans-serif" font-size="50" font-weight="700" fill="#FFFFFF">${char}</text></svg>`;
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
};