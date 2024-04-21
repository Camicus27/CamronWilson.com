<script setup lang="ts">

</script>

<template>
  <div class="wrapper resume">
    <a class="download-btn" href="Camron_Wilson_Resume.pdf" download="">
      <button>Download Resume</button>
    </a>
    <iframe id="resume-pdf" src="Camron_Wilson_Resume.pdf" frameborder="0"></iframe>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/components' as *;
@use '@/styles/meta' as *;

.resume {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.download-btn {
  @include round-button($text-light, $purple-dark);

  margin-block: 1.5rem;
}

#resume-pdf {
    width: 75%;
    height: 800px;
}
</style>