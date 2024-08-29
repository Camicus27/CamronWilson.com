<script setup lang="ts">
import CommonHeader from '@/components/CommonHeader.vue';
import { RouterView } from 'vue-router'
import './styles/globals/_index.scss'
</script>

<template>
  <v-app>
    <v-main>
      <CommonHeader />
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">
.main-wrapper {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>