<script setup lang="ts">

</script>

<template>
  <div class="wrapper home">
    <div class="image-container">
      <img src="@/assets/photos/me_and_laur_0.jpg" alt="A photo of me and my wife.">
    </div>
    <div class="text-container">
      <h1>I am Camron Wilson</h1>
      <div class="bio">
        <p>
          A dedicated software engineer, recently graduated from the University of Utah with a BS in Computer 
          Science, with a passion for software and game development.
        </p>

        <p>
          Throughout my academic journey, I've not only excelled in my coursework but also led numerous 
          projects that showcase my proficiency and creativity, most notably my senior capstone project 
          <a class="link" href="https://paddletraffic.net" target="_blank">PaddleTraffic</a>. I take immense pride in my diverse
          portfolio, which includes both my personal and academic projects.
        </p>

        <p>
          My most recent achievement is the development of Holey Shoot, an endlessly fun mobile game now available 
          on both the <a class="link" href="https://apps.apple.com/us/app/holey-shoot/id6450563743" target="_blank">App Store</a> 
          and soon to be on the <a class="link" href="https://play.google.com/store/" target="_blank">Google Play Store</a>. This 
          project reflects my commitment to delivering high-quality, entertaining experiences to a global audience.
        </p>
        
        <p>
          For a closer look into my endeavors, feel free to explore my <RouterLink to="/portfolio" class="link">Portfolio</RouterLink>, 
          where I showcase a range of projects. Additionally, you can learn more about my indie games development journey, 
          <RouterLink to="/camicus-games" class="link">Camicus Games</RouterLink> to gain insights into the process of creating 
          games that have captured my dedication and expertise.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/components' as *;
@use '@/styles/meta' as *;

.image-container {
  display: block;
  float: left;
  margin: 0 1.25rem 0 0;
  width: 30%;

  @include responsive($mobile-size) {
    margin-right: .75rem;
    width: 45%;
  }

  img {
    width: 100%;
  }
}

h1 {
  font-size: 5rem;
  line-height: 6rem;
  margin-bottom: 2rem;
  text-align: start;

  @include responsive($mobile-size) {
    font-size: 2.5rem;
    line-height: 3rem;
    margin-bottom: 1rem;
  }
}

.bio p {
  font-size: 1.75rem;
  line-height: 2rem;
  padding-bottom: 1rem;

  @include responsive($mobile-size) {
    font-size: 1rem;
    line-height: 1.5rem;
    padding-bottom: 0.9rem;
  }
}
</style>