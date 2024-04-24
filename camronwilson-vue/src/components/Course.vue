<script setup lang="ts">

</script>

<template>
  <v-expansion-panels class="course-container">
    <v-expansion-panel class="panel">
      <h3>
        <slot name="title"></slot>
      </h3>
      <h4>
        <slot name="course-number"></slot>
      </h4>
      <slot name="external-link"></slot>
      <v-expansion-panel-title class="panel-title">
        <strong>View Course Description</strong>
      </v-expansion-panel-title>
      <v-expansion-panel-text class="panel-text">
        <slot name="description"></slot>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped lang="scss">
@use '@/styles/components' as *;
@use '@/styles/meta' as *;

.course-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 48rem;
  border-radius: 4px;
  margin: .5rem;

  h3 {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  h4 {
    font-size: 1rem;
    line-height: 2rem;
  }
}

.panel {
  padding: 1rem;
  background-image: linear-gradient(to top, $tint, darken($tint, 10));
  width: 100%;

  .panel-title {
    padding: .33rem;
  }

  .panel-text {
    
    & > * {
      padding: 0;
      padding-left: .75rem;
      font-size: 1rem;
    }
  }
}
</style>