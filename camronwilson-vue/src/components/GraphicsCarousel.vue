<script setup lang="ts">
import imgChild from '@/assets/graphics/child_fam.png'
import imgCouple1 from '@/assets/graphics/couple_1.png'
import imgCouple2 from '@/assets/graphics/couple_2.png'
import imgMeLaur from '@/assets/graphics/me_n_laur.png'
import imgFace from '@/assets/graphics/face.png'
import imgPops from '@/assets/graphics/pops.png'
import imgLaur from '@/assets/graphics/lauren.jpg'
import imgKg from '@/assets/graphics/kg.png'
import imgSunset from '@/assets/graphics/sunset.png'
import imgC27 from '@/assets/graphics/c27_mountains.png'

import { useDisplay } from 'vuetify'

const { width } = useDisplay()

const items = [
    {src: imgChild,},
    {src: imgCouple1,},
    {src: imgCouple2,},
    {src: imgMeLaur,},
    {src: imgFace,},
    {src: imgPops,},
    {src: imgLaur,},
    {src: imgKg,},
    {src: imgSunset,},
    {src: imgC27,}
]
</script>

<template>
  <!-- Mobile -->
  <v-carousel v-if="width < 800" class="carousel" height="235" hide-delimiters>
    <template v-slot:prev="{ props }">
      <v-btn
        aria-label="Previous Artwork"
        variant="elevated"
        elevation="8"
        size="small"
        density="compact"
        icon="mdi-arrow-left-thick"
        color="#663399"
        @click="props.onClick">
      </v-btn>
    </template>
    <template v-slot:next="{ props }">
      <v-btn
        aria-label="Next Artwork"
        variant="elevated"
        elevation="8"
        size="small"
        density="compact"
        icon="mdi-arrow-right-thick"
        color="#663399"
        @click="props.onClick">
      </v-btn>
    </template>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>

  <!-- Desktop -->
  <v-carousel v-else class="carousel" height="700">
    <template v-slot:prev="{ props }">
      <v-btn
        aria-label="Previous Artwork"
        variant="elevated"
        elevation="8"
        size="x-large"
        density="comfortable"
        icon="mdi-arrow-left-thick"
        color="#663399"
        @click="props.onClick">
      </v-btn>
    </template>
    <template v-slot:next="{ props }">
      <v-btn
        aria-label="Next Artwork"
        variant="elevated"
        elevation="8"
        size="x-large"
        density="comfortable"
        icon="mdi-arrow-right-thick"
        color="#663399"
        @click="props.onClick">
      </v-btn>
    </template>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<style scoped lang="scss">

</style>