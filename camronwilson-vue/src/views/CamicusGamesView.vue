<script setup lang="ts">
import AllGames from '@/components/AllGames.vue'
</script>

<template>
  <div class="wrapper centered">
    <AllGames />
  </div>
</template>

<style lang="scss">
@use '@/styles/components' as *;
@use '@/styles/meta' as *;

.section-title {
  width: 95%;
  padding-bottom: .33rem;
  margin-bottom: .75rem;
  border-bottom: 2px solid $purple-darker;
  text-align: start;

  em {
      color: $purple-dark;
  }
}
</style>