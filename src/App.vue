<template>
  <!-- Wrap router-view in a transition -->
  <transition name="fade-slide" mode="out-in">
    <router-view />
  </transition>
</template>

<style>
/* Transition classes for fade + slide */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

<script>
export default {
  name: 'App',
}
</script>
