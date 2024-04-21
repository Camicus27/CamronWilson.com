<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router'
import { useDisplay } from 'vuetify'

const { width } = useDisplay()

onMounted(async () => {
  
})
</script>

<template>
  <header>
    <RouterLink to="/" class="logo">
      <img src="@/assets/icons/C27.png" alt="Camicus27 Logo">
    </RouterLink>

    <!-- Mobile -->
    <v-menu transition="slide-y-transition" v-if="width < 1000">
      <template v-slot:activator="{ props }">
        <v-btn
          class="hamburger"
          density="compact"
          size="x-large"
          icon="mdi-menu"
          v-bind="props">
        </v-btn>
      </template>

      <div class="burger-contents">
        <div class="nav-buttons-burger">
          <RouterLink to="/" class="nav-button">Home</RouterLink>
          <RouterLink to="/portfolio" class="nav-button">Portfolio</RouterLink>
          <RouterLink to="/photo-graphics" class="nav-button">Photography & Graphics</RouterLink>
          <RouterLink to="/camicus-games" class="nav-button">CamicusGames</RouterLink>
          <RouterLink to="/contact" class="nav-button">Contact Me</RouterLink>
        </div>
        <div class="info-buttons-burger">
          <RouterLink to="/resume" class="nav-button">Resume</RouterLink>
          <a class="nav-button" href="https://www.linkedin.com/in/camron-wilson/" target="_blank">LinkedIn</a>
          <a class="nav-button" href="https://github.com/Camicus27" target="_blank">GitHub</a>
        </div>
      </div>
    </v-menu>

    <!-- Desktop -->
    <nav v-else>
      <div class="nav-buttons">
        <RouterLink to="/" class="nav-button">Home</RouterLink>
        <RouterLink to="/portfolio" class="nav-button">Portfolio</RouterLink>
        <RouterLink to="/photo-graphics" class="nav-button">Photography & Graphics</RouterLink>
        <RouterLink to="/camicus-games" class="nav-button">CamicusGames</RouterLink>
        <RouterLink to="/contact" class="nav-button">Contact Me</RouterLink>
      </div>
      <div class="info-buttons">
        <RouterLink to="/resume" class="nav-button">
          <img src="@/assets/icons/doc.png" class="icon-small" alt="Document icon" width="16" height="16">
          Resume
        </RouterLink>
        <a class="nav-button" href="https://www.linkedin.com/in/camron-wilson/" target="_blank">
          <img src="@/assets/icons/linkedin.png" class="icon-small" alt="LinkedIn icon" width="16" height="16">
          LinkedIn
        </a>
        <a class="nav-button" href="https://github.com/Camicus27" target="_blank">
          <img src="@/assets/icons/github.png" class="icon-small" alt="Github icon" width="16" height="16">
          GitHub
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@use '@/styles/components' as *;
@use '@/styles/meta' as *;

header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: .33rem 2.25rem;
  width: 100%;
  border-bottom: 2px solid $purple-dark;
  background-image: linear-gradient(to top, $accent, $purple);
  flex: 0 1 auto;

  @include responsive($mobile-size) {
    padding: .5rem 1.5rem;
  }
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  box-shadow: 1px 1px 3px $purple-dark;
  transition: .2s ease-in-out;

  &:hover {
    box-shadow: 0 0 5px #b9a0d4, 0 0 25px #b9a0d4, 0 0 50px #b9a0d4;

    @include responsive($mobile-size) {
      box-shadow: 1px 1px 3px $purple-dark;
    }
  }

  &:active {
    box-shadow: 1px 1px 3px $purple-dark;
  }

  img {
    width: 96px;
    height: 96px;

    @include responsive($mobile-size) {
      width: 64px;
      height: 64px;
    }
  }
}

.hamburger {
  border-radius: 0;
  background-color: transparent;
  box-shadow: none !important;
  transition: background-color 0.3 ease;

  &:hover {
    box-shadow: none;
  }

  &:active {
    box-shadow: none;
  }
}

.burger-contents {
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to bottom, $tint, darken($tint, 10));
  padding: 0.75rem 0.33rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px $shadow;

  a {
    font-size: 1.5rem;
    line-height: 1.75rem;
    padding: 0;
  }

  @include responsive($mobile-size) {
    padding-block: 0.3rem;
    border-radius: 4px;

    a {
      font-size: 1.25rem;
      line-height: 1.5rem;
    }
  }

  .nav-buttons-burger {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .info-buttons-burger {
    margin-top: .66rem;
    padding-top: .66rem;
    border-top: 1px solid $purple-darker;
  }
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;

  @include responsive($mobile-size) {
    width: 100%;
    justify-content: space-around;
  }

  .nav-buttons {
    display: flex;
    flex-direction: row;
  }
  .info-buttons {
    display: flex;
    flex-direction: column;
    border-left: 2px solid $purple-darker;

    a {
      padding-block: .25rem;
      margin-block: .2rem;
    }
  }
}
</style>