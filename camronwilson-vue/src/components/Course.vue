<script setup lang="ts">

</script>

<template>
  <div class="course-container">
    <div class="course-info">
      <h3>
        <slot name="title"></slot>
      </h3>
      <h4>
        <slot name="course-number"></slot>
        <slot name="external-link"></slot>
      </h4>
    </div>
    <v-expansion-panels flat tile>
      <v-expansion-panel class="panel">
        <v-expansion-panel-title class="panel-title">
          <strong>View Course Description</strong>
        </v-expansion-panel-title>
        <v-expansion-panel-text class="panel-text">
          <slot name="description"></slot>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<style lang="scss">
@use '@/styles/components' as *;
@use '@/styles/meta' as *;

.course-container {
  background-image: linear-gradient(to top, $tint, darken($tint, 10));

  .course-info {
    margin-inline: 1rem;
    margin-top: .75rem;
  
    h3 {
      font-size: 1.33rem;
      line-height: 2rem;
    }
  
    h4 {
      font-size: 1rem;
      line-height: 2rem;
    }
  }
  
  .panel {
    padding: .33rem;
    background: transparent;
    width: 100%;
  
    .panel-title {
      padding: .33rem;
      font-size: 1rem;
    }
  
    .panel-text {
      
      & > * {
        padding: 0;
        padding-left: .75rem;
        font-size: .85rem;
      }
    }
  }
}
</style>