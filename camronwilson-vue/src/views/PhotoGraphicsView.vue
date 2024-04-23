<script setup lang="ts">
import PhotoCarousel from '@/components/PhotoCarousel.vue'
import GraphicsCarousel from '@/components/GraphicsCarousel.vue'
</script>

<template>
  <div class="wrapper photo-graphics">
    <h1>
      Photography & Graphic Design
    </h1>

    <div class="descr-container">
      <div class="image-container">
        <img src="@/assets/photos/me_and_laur_1.png" alt="A photo of me and my wife.">
      </div>
      <div class="descr">
        <p>
          <strong>I am an aesthete,</strong> especially when it comes to photography and vector art. I got my first iPod touch in elementary school and thought it was the coolest invention ever as it had a camera! I could take it anywhere and photograph anything, seemingly without end.
        </p>
        <p>
          Ever since then I've loved photography, especially landscapes and nature photography. I always bring my (now much better DSLR) camera with me on every adventure. I later expanded that passion to graphic design in highschool, using some of the same principles I had learned from photography to express that in my art.
        </p>
        <p>
          Many of my design inspirations come from my wife who stays up late into the night with me brainstorming rough drafts and voicing opinions on final design choices. My skills helped both of us to have logos, banners, portraits, and other useful art in our careers and look beautiful as prints in our home.
        </p>
        <p>
          Today, that same passion presents itself through my UI/UX design for my software and websites that I work on. I have honed this skill with years of experience, learning, and research to make the best possible final products I can.
        </p>
      </div>
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

.photo-graphics {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.descr-container {
  margin-block: 2rem;
  width: 80%;

  @include responsive($mobile-size) {
    width: 100%;
  }

  .descr p {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    line-height: 1.75rem;

    strong {
      font-size: 2.5rem;
      line-height: 3rem;

      @include responsive($mobile-size) {
        font-size: 1.75rem;
        line-height: 2.25rem;
      }
    }

    @include responsive($mobile-size) {
      font-size: 1.15rem;
      line-height: 1.65rem;
    }
  }

  .image-container {
    display: block;
    float: left;
    margin: 0;
    margin-right: 1rem;
    width: 30%;

    @include responsive($mobile-size) {
      margin-right: .75rem;
      width: 50%;
    }

    img {
      width: 100%;
      border-radius: 4px;
    }
  }
}
</style>