<script setup lang="ts">
import Resume from '@/components/Resume.vue'
</script>

<template>
  <div class="wrapper centered">
    <a class="download-btn" href="Camron_Wilson_Resume.pdf" download="">
      <button>Download Resume</button>
    </a>
    <Resume />
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/components' as *;
@use '@/styles/meta' as *;

.download-btn {
  @include round-button($text-light, $purple-dark);

  margin-block: 1.5rem;
}
</style>