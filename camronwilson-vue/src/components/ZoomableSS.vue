<script setup lang="ts">
import { ref } from 'vue'

const imgPopup = ref(false)

defineProps<{
  imgSrc?: string,
  imgAlt: string
}>()
</script>

<template>
  <v-dialog :close-on-content-click="true">
    <template v-slot:activator="{ props }">
      <div>
        <img class="img-thumbnail":src="imgSrc" :alt="imgAlt" v-bind="props">
        <v-icon
          class="thumbnail-hint"
          icon="mdi-magnify-expand"
          size="small"
          color="white"
          v-bind="props">
        </v-icon>
      </div>
    </template>
    <template v-slot:default="{ isActive }">
      <img :src="imgSrc" :alt="imgAlt">
    </template>
  </v-dialog>
</template>

<style scoped lang="scss">
@use '@/styles/components' as *;
@use '@/styles/meta' as *;

.img-thumbnail {
  width: 95%;
  height: auto;

  &:hover {
    cursor: zoom-in;
    box-shadow: 3px 3px 4px black;
    width: 100%;
  }
}

.thumbnail-hint {
  position: relative;
  bottom: 2rem;
  left: .33rem;
  text-shadow: 1px 3px 2px black;
}
</style>