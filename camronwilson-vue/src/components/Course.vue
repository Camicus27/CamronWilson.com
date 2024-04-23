<script setup lang="ts">



</script>

<template>
  <div class="course-container">
    <h3>
      <slot name="title"></slot>
    </h3>
    <h4>
      <slot name="course-number"></slot>
    </h4>
    <slot name="description"></slot>
    <v-expansion-panel>
      <v-expansion-panel-title>
        Course Description
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        This is the course description!
      </v-expansion-panel-text>
    </v-expansion-panel>
  </div>
</template>

<style scoped lang="scss">

</style>