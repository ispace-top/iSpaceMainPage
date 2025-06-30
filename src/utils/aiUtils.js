// This utility handles AI-powered content generation, like avatars.

// In-memory cache to store generated image data
const imageCache = new Map();

/**
 * Generates an avatar image using an AI model.
 * It first checks a local cache to avoid re-generating the same image.
 * @param {string} prompt A descriptive prompt for the avatar.
 * @returns {Promise<string>} A promise that resolves to a Base64 data URI of the generated image.
 */
export async function generateAvatar(prompt) {
  if (imageCache.has(prompt)) {
    return imageCache.get(prompt);
  }

  try {
    const payload = {
      instances: [{ prompt }],
      parameters: { "sampleCount": 1 }
    };
    
    // NOTE: In a real application, you would secure your API key.
    // Here, we assume the environment handles the key injection.
    const apiKey = ""; 
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${apiKey}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.predictions && result.predictions.length > 0 && result.predictions[0].bytesBase64Encoded) {
      const imageUrl = `data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`;
      imageCache.set(prompt, imageUrl); // Cache the result
      return imageUrl;
    } else {
      throw new Error("Invalid response structure from AI API.");
    }
  } catch (error) {
    console.error("Error generating AI avatar:", error);
    // Return a placeholder or default image on error
    return 'https://placehold.co/100x100/CCCCCC/FFFFFF?text=Error';
  }
}
