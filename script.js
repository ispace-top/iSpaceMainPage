document.addEventListener('DOMContentLoaded', () => {

    // 1. 导航栏滚动效果
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. 移动端菜单切换
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            // 切换汉堡菜单图标
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }
    
    // 点击移动端导航链接后关闭菜单
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // 3. 元素滚动进入视口动画
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // 4. 英雄区域动态背景
    const bgContainer = document.querySelector('.hero-bg-shapes');
    if (bgContainer) {
        const shapes = ['circle', 'square', 'triangle'];
        // 更新颜色数组以匹配新的、活泼的配色方案
        const colors = ['#FF7A59', '#00C49A', '#FFC107', '#6C63FF'];
        
        for (let i = 0; i < 20; i++) {
            const shape = document.createElement('div');
            const size = Math.random() * 80 + 20; // 20px to 100px
            
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;
            shape.style.position = 'absolute';
            shape.style.left = `${Math.random() * 100}%`;
            shape.style.top = `${Math.random() * 100}%`;
            shape.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            shape.style.opacity = '0.15';
            shape.style.animation = `float ${Math.random() * 20 + 10}s infinite linear`;

            const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
            if (shapeType === 'circle') {
                shape.style.borderRadius = '50%';
            } else if (shapeType === 'triangle') {
                shape.style.backgroundColor = 'transparent';
                shape.style.width = '0';
                shape.style.height = '0';
                shape.style.borderLeft = `${size/2}px solid transparent`;
                shape.style.borderRight = `${size/2}px solid transparent`;
                shape.style.borderBottom = `${size}px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
            }
            
            bgContainer.appendChild(shape);
        }
    }
});

// 将动画关键帧注入到样式表中
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes float {
    0% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
    100% { transform: translateY(0) rotate(360deg); }
}
`;
document.head.appendChild(styleSheet);
