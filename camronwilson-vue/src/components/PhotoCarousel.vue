<script setup lang="ts">
import imgMe from '@/assets/photos/me.jpg'
import imgLaur from '@/assets/photos/laur.jpg'
import imgBison from '@/assets/photos/bison.jpg'
import imgBee from '@/assets/photos/bee.jpg'
import imgHeart from '@/assets/photos/heart.jpg'
import imgGlacier from '@/assets/photos/glacier.jpg'
import imgWaterfall from '@/assets/photos/waterfall.jpg'
import imgSaltFalls from '@/assets/photos/salt_falls.jpg'
import imgTwinRock from '@/assets/photos/twin_rock.jpg'
import imgColosseum from '@/assets/photos/colosseum.jpg'
import imgVenice from '@/assets/photos/venice.jpg'
import imgPhonebooth from '@/assets/photos/phonebooth.jpg'

import { useDisplay } from 'vuetify'

const { width } = useDisplay()

const items = [
    {src: imgMe,},
    {src: imgLaur,},
    {src: imgBison,},
    {src: imgBee,},
    {src: imgHeart,},
    {src: imgGlacier,},
    {src: imgWaterfall,},
    {src: imgSaltFalls,},
    {src: imgTwinRock,},
    {src: imgColosseum,},
    {src: imgVenice,},
    {src: imgPhonebooth,}
]
</script>

<template>
  <!-- Mobile -->
  <v-carousel v-if="width < 800" class="carousel" height="235" hide-delimiters>
    <template v-slot:prev="{ props }">
      <v-btn
        aria-label="Previous Photo"
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
        aria-label="Next Photo"
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
      cover
    ></v-carousel-item>
  </v-carousel>

  <!-- Desktop -->
  <v-carousel v-else class="carousel" height="800">
    <template v-slot:prev="{ props }">
      <v-btn
        aria-label="Previous Photo"
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
        aria-label="Next Photo"
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
      cover
    ></v-carousel-item>
  </v-carousel>
</template>

<style scoped lang="scss">

</style>