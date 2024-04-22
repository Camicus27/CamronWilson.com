<script setup lang="ts">

const items = [
    {
        src: '@/assets/photos/me.jpg',
    },
    {
        src: '@/assets/photos/laur.jpg',
    },
    {
        src: '@/assets/photos/bison.jpg',
    },
    {
        src: '@/assets/photos/bee.jpg',
    },
    {
        src: '@/assets/photos/heart.jpg',
    },
    {
        src: '@/assets/photos/waterfall.jpg',
    },
]
</script>

<template>
  <div>
    <v-carousel class="">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        cover
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<style scoped lang="scss">

</style>