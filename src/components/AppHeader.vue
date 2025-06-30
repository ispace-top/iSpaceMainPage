<template>
  <header id="main-header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <router-link to="/" class="logo">
        <img src="/images/logo.png" alt="爱思培斯 iSpace Logo">
      </router-link>
      <nav class="main-nav">
        <ul>
          <li><a href="/#courses">核心课程</a></li>
          <li><a href="/#features">教学特色</a></li>
          <li><a href="/#testimonials">学员评价</a></li>
          <li><router-link to="/about">关于我们</router-link></li>
        </ul>
      </nav>
      <a href="#" @click.prevent="showBookingModal" class="btn btn-primary">预约免费试听</a>
      <button id="mobile-menu-toggle" @click="toggleMobileMenu">
        <i class="fas" :class="isMobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
      </button>
    </div>
  </header>
  <div id="mobile-nav" :class="{ 'open': isMobileMenuOpen }">
    <a href="/#courses" @click="closeMobileMenu">核心课程</a>
    <a href="/#features" @click="closeMobileMenu">教学特色</a>
    <a href="/#testimonials" @click="closeMobileMenu">学员评价</a>
    <router-link to="/about" @click="closeMobileMenu">关于我们</router-link>
    <a href="#" @click.prevent="showBookingModal" class="btn btn-primary">预约免费试听</a>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { openModal } from '../store';
import BookingForm from './BookingForm.vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const showBookingModal = () => {
  closeMobileMenu();
  openModal('预约免费试听课', BookingForm);
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Scoped styles for header and mobile nav */
#main-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    border-bottom: 1px solid transparent;
}
#main-header.scrolled {
    background-color: var(--white-color);
    border-bottom-color: var(--border-color);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}
#main-header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
}
.logo img {
    height: 60px;
    width: auto;
}
.main-nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}
.main-nav ul li { margin-left: 2.5rem; }
.main-nav ul li a {
    color: var(--dark-color);
    font-weight: 700;
    padding: 0.5rem 0;
    position: relative;
}
.main-nav ul li a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px;
    background: var(--primary-color);
    transition: width 0.3s ease;
}
.main-nav ul li a:hover::after { width: 100%; }

#mobile-menu-toggle { display: none; }
#mobile-nav { display: none; }

@media (max-width: 992px) {
    .main-nav, #main-header .btn { display: none; }
    #mobile-menu-toggle {
        display: block;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--dark-color);
    }
    #mobile-nav {
        display: flex;
        flex-direction: column;
        background-color: var(--white-color);
        position: fixed;
        top: 80px;
        left: 0;
        width: 100%;
        padding: 1rem 0;
        box-shadow: 0 5px 10px rgba(0,0,0,0.1);
        transform: translateY(-150%);
        transition: transform 0.3s ease-in-out;
        z-index: 999;
    }
    #mobile-nav.open { transform: translateY(0); }
    #mobile-nav a {
        padding: 1rem 1.5rem;
        color: var(--dark-color);
        font-weight: 700;
    }
    #mobile-nav .btn {
        margin: 1rem 1.5rem;
        text-align: center;
        display: block;
    }
}
</style>
