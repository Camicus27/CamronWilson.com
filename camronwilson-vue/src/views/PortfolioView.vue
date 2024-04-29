<script setup lang="ts">
import AllCourses from '@/components/AllCourses.vue'
import AllCoursework from '@/components/AllCoursework.vue'
</script>

<template>
  <div class="centered">
    <router-link to="#coursework" v-scroll-to="'#coursework'" class="link skip-to">
      Skip to Notable Coursework
      <v-icon
        color="purple"
        icon="mdi-debug-step-over"
        size="small"
        style="padding-bottom: 4px"
        >
      </v-icon>
    </router-link>
  </div>
  <AllCourses />
  <AllCoursework />
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
      color: #cc0000;
  }
}

.skip-to {
  width: 95%;
}
</style>