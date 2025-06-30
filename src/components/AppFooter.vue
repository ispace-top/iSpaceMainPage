<template>
  <footer id="contact">
    <div class="container">
      <div class="footer-content" id="about-us">
        <div class="footer-about">
          <img src="/imges/logo.png" alt="爱思培斯 Footer Logo" class="footer-logo">
          <div class="social-links">
            <a href="#" @click.prevent="showWeChat" aria-label="微信公众号"><i class="fab fa-weixin"></i></a>
            <a href="https://www.zhihu.com" target="_blank" rel="noopener noreferrer" aria-label="知乎"><i class="fab fa-zhihu"></i></a>
            <a href="https://www.bilibili.com" target="_blank" rel="noopener noreferrer" aria-label="Bilibili"><i class="fab fa-bilibili"></i></a>
          </div>
          <p>我们相信每个孩子都有无限的创造潜能。iSpace致力于提供最优质的科技教育，陪伴孩子一同成长，构筑属于他们的数字未来。</p>
        </div>
        <div class="footer-links">
          <h4>快速链接</h4>
          <ul>
            <li><a href="/#courses">核心课程</a></li>
            <li><a href="/#features">教学特色</a></li>
            <li><router-link to="/about#team">师资团队</router-link></li>
            <li><router-link to="/about#careers">加入我们</router-link></li>
          </ul>
        </div>
        <div class="footer-contact">
          <h4>联系我们</h4>
          <p><i class="fas fa-map-marker-alt"></i> [请在此处填写您的校区地址]</p>
          <p><i class="fas fa-envelope"></i> contact@ispace.top</p>
          <p><i class="fas fa-phone"></i> [请在此处填写您的联系电话]</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>
          &copy; 2025 爱思培斯 (iSpace). All Rights Reserved. | 
          <router-link to="/privacy-policy">隐私政策</router-link> | 
          <router-link to="/terms-of-service">服务条款</router-link> | 
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">京ICP备XXXXXXXX号-X</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { openModal } from '../store';
import WeChatQR from './WeChatQR.vue';

const showWeChat = () => {
  openModal('关注我们', WeChatQR);
}
</script>

<style scoped>
footer {
    background: #2c3e50;
    color: #bdc3c7;
    padding: 5rem 0 0 0;
    position: relative;
}
.footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    padding: 0 2rem 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}
.footer-about, .footer-links, .footer-contact {
    flex: 1;
    min-width: 250px;
}
.footer-about {
    flex-basis: 40%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.footer-logo {
    height: auto;
    width: 130px;
    margin-bottom: 1.5rem;
    order: 1;
}
.footer-about p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: #bdc3c7;
    order: 3;
    flex-basis: 100%;
}
footer h4 {
    color: var(--white-color);
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
}
.social-links {
    order: 2;
    margin-left: auto;
}
.social-links a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: #34495e;
    color: var(--white-color);
    font-size: 1.2rem;
    margin-right: 0.5rem;
    border-radius: 8px;
    transition: all 0.3s ease;
}
.social-links a:hover {
    background: var(--primary-color);
    color: var(--white-color);
    transform: translateY(-3px);
}
.footer-links ul {
    list-style: none;
    padding: 0;
}
.footer-links ul li {
    margin-bottom: 1rem;
}
.footer-links ul li a {
    color: #bdc3c7;
    padding-left: 0;
    transition: all 0.3s ease;
}
.footer-links ul li a:hover {
    color: var(--primary-color);
    padding-left: 10px;
}
.footer-contact p {
    color: #bdc3c7;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
}
.footer-contact i {
    background: var(--primary-color);
    color: var(--white-color);
    border-radius: 50%;
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    margin-right: 1rem;
    margin-top: 0;
    flex-shrink: 0;
}
.footer-bottom {
    background: #233a4c;
    padding: 1.5rem 0;
    text-align: center;
    color: #7f8c8d;
    font-size: 0.9rem;
}
.footer-bottom p {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem 1rem;
}
.footer-bottom a {
    color: #bdc3c7;
    font-weight: 500;
    text-decoration: none;
}
.footer-bottom a:hover {
    color: var(--primary-color);
}
</style>
