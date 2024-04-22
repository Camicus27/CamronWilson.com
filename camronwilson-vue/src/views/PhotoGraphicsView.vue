<script setup lang="ts">
import PhotoCarousel from '@/components/PhotoCarousel.vue'
import GraphicsCarousel from '@/components/GraphicsCarousel.vue'
</script>

<template>
  <div class="wrapper">
    <h1>
      Photography & Graphic Design
    </h1>

    <div class="descr">
      <p>
        Since I was in elementary school I always loved art. I got my first iPod touch and it was the coolest invention ever as it had a camera! Ever since then I've loved photography, especially landscapes and nature photography. I later expanded that to graphic design, using some of the same principles I had learned from photography to express that in my art.
      </p>
      <p>
        Many of my design inspirations come from my wife who stays up late into the night with me brainstorming rough drafts and voicing opinions on final design choices. My skills helped both of us to have logos, banners, portraits, and other useful art in our careers and look beautiful as prints in our home.
      </p>
      <p>
        Today, that same passion presents itself through my UI/UX design for my software and websites that I work on. I have honed this skill with years of experience, learning, and research to make the best possible final products I can.
      </p>
    </div>
  </div>

  <h2>
    Photography
  </h2>
  <div class="carousel-wrapper photo">
    <PhotoCarousel />
  </div>

  <h2>
    Graphic Design Artwork
  </h2>
  <div class="carousel-wrapper graphics">
    <GraphicsCarousel />
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/components' as *;
@use '@/styles/meta' as *;

.carousel-wrapper {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.carousel {
  width: 70%;
  border-radius: 1rem;
  box-shadow: 3px 3px 6px $shadow;

  @include responsive($mobile-size) {
    width: 95%;
  }
}

.photo, .graphics {
  margin-bottom: 2rem;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  .descr {
    display: flex;
    flex-direction: column;
    width: 55%;
    margin-block: 2rem;

    p {
      margin-bottom: 1rem;
    }
  }
}
</style>