<script setup lang="ts">

</script>

<template>
  <div class="game-container">
    <div class="game-info">
      <div class="game-title">
        <h3>
          <slot name="title"></slot>
        </h3>
        <h4>
          <slot name="external-link"></slot>
        </h4>
      </div>
      <div class="game-description">
        <h5>
          <slot name="tag-line"></slot>
        </h5>
        <slot name="description"></slot>
      </div>
    </div>
    <div class="screenshots">
      <slot name="screenshots"></slot>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/styles/components' as *;
@use '@/styles/meta' as *;

.game-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 3rem;

  .game-info {
    margin-inline: 1rem;
    margin-top: .75rem;

    .game-title {
      display: flex;
      flex-direction: row;
      padding-bottom: .1rem;
      margin-bottom: .75rem;
      width: 75%;
      border-bottom: 2px solid $purple-darker;

      h3 {
        font-size: 1.33rem;
        font-weight: 600;
        line-height: 2rem;
      }
    
      h4 {
        font-size: 1rem;
        line-height: 2rem;
      }
    }
  
    .game-description {
      width: 75%;

      h5 {
        font-size: 1rem;
        line-height: 1.25rem;
        margin-bottom: 1rem;
      }
    }
  }
  
  .screenshots {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 1rem;
    margin-left: 3rem;
    margin-top: 1.25rem;
    width: 60%;
  }
}
</style>