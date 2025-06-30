<template>
  <AppHeader />
  <main>
    <router-view />
  </main>
  <AppFooter />
  <GlobalModal />
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import GlobalModal from './components/GlobalModal.vue'
</script>
