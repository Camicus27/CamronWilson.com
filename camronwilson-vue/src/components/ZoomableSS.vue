<script setup lang="ts">
import { ref, onMounted, onActivated, type Ref } from 'vue'

const imgPopup = ref(false)

defineProps<{
  imgSrc?: string,
  imgAlt?: string
}>()

onMounted(async () => {
  imgPopup.value = false;
})

onActivated(async () => {
  imgPopup.value = false;
})
</script>

<template>
  <a class="zoomable-img" @click="imgPopup = true">
    <img :src="imgSrc" :alt="imgAlt">
  </a>
  <v-dialog
    v-model="imgPopup"
    width="auto"
    height="85vw"
    >
    <v-btn
      class="close-btn"
      comfortable
      icon="mdi-close-thick"
      @click="imgPopup = false">
    </v-btn>
    <img class="zoomed-img" :src="imgSrc" :alt="imgAlt">
  </v-dialog>
</template>

<style scoped lang="scss">
@use '@/styles/components' as *;
@use '@/styles/meta' as *;

.zoomable-img {
  img {
    width: 100%;
    height: auto;
  }

  &:hover {
    cursor: zoom-in;
  }
}

.zoomed-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.close-btn {
  position: fixed;
  left: calc(100% + 1rem);

  @include responsive($mobile-size) {
    left: calc(100% - 3rem);
    bottom: calc(100% + 1rem);
  }
}
</style>