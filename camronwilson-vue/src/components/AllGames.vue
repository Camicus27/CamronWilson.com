<script setup lang="ts">
import Game from '@/components/Game.vue'
</script>

<template>
  <h1 class="section-title">
    CamicusGames
    <v-btn
    style="padding: 0; margin-left: 1rem;"
    size="large"
    variant="text"
    append-icon="mdi-open-in-new"
    href="https://www.youtube.com/@CamicusGames"
    target="_blank"
    >
      <v-icon
        icon="mdi-youtube"
        size="x-large"
        color="red">
      </v-icon>
      YouTube Channel
    </v-btn>
  </h1>
  <div class="games-showcase">
    <Game>
      <template #title>Holey Shoot</template>
      <template #external-link>
        <v-btn
          style="padding: 0; margin-left: 1rem;"
          size="small"
          variant="text"
          append-icon="mdi-open-in-new"
          href="https://apps.apple.com/us/app/holey-shoot/id6450563743"
          target="_blank"
          >
          View AppStore Page
        </v-btn>
      </template>
      <template #tag-line>
        Take control of an endlessly hungry black hole to collect ammunition for fighting off hoards of enemies!
      </template>
      <template #description>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The goal is to collect as much ammo as you can before time is up.
        Once you've filled your arsenal, it's time to fight for your life! Defend yourself from many different enemies as they try to
        get you. Grow the hole to collect bigger and better weaponry for more damage and unique abilities.<br><br>

        I had an incredible amount of fun developing this game. I was the <strong>sole developer, designer, and publisher</strong> of Holey Shoot from its
        conception, to the design and implementation. It was built with the <strong>Unity game engine with C# and Illustrator for the game logic and
        UI design. </strong>I took the development through many stages of iteration through rough design ideas, basic implementations, game testing, then
        refinement of implementation to get the complete look and feel I had envisioned. I had extensive play testing through <strong>public betas that
        Apple provides through their TestFlight app.</strong> This allowed for the fine tuning of every aspect for the game based on the feedback I received.<br><br>

        Since launch I have had <strong>0 crash reports</strong> which is phenomenal, and have had nothing but good reviews. The game is healthy and I still continue
        to work on it from time to time to make small adjustments and improvements when necessary.
      </template>
      <template #screenshots>
        <img src="@/assets/games/holey-shoot-1.png" alt="Holey Shoot main menu area.">
        <img src="@/assets/games/holey-shoot-2.png" alt="Holey Shoot grassy plains level.">
        <img src="@/assets/games/holey-shoot-3.png" alt="Holey Shoot challenges menu.">
        <img src="@/assets/games/holey-shoot-4.jpg" alt="Holey Shoot AppStore page.">
      </template>
    </Game>
    <Game>
      <template #title>Camiquest</template>
      <template #external-link>
        <v-btn
          style="padding: 0; margin-left: 1rem;"
          size="small"
          variant="text"
          append-icon="mdi-open-in-new"
          href="https://camicus27.itch.io/camiquest"
          target="_blank"
          >
          View Itch.IO Page
        </v-btn>
      </template>
      <template #tag-line>
        Camiquest is a 2D RPG Adventure game following a warrior hungry for adventure.
      </template>
      <template #description>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I built this game using Unity to learn more about game
        development and was my first game project outside of schooling. It has roughly 2 hours of gameplay and although I did like the direction
        it was going, I left it as a demo in pursuit of other projects. I took it as a <strong>great learning adventure</strong>, as I learned
        a ton in terms of game development, from <strong>managing art assets, to writing a good story, to managing an ever increasingly complex code base</strong>.
      </template>
      <template #screenshots>
        <img src="@/assets/games/camiquest-1.jpg" alt="Camiquest itch.io page.">
        <img src="@/assets/games/camiquest-2.jpg" alt="Camiquest opening sequence.">
        <img src="@/assets/games/camiquest-3.jpg" alt="Camiquest NPC interaction.">
        <img src="@/assets/games/camiquest-4.jpg" alt="Camiquest battle scene.">
      </template>
    </Game>
    <Game>
      <template #title>Robo Defense (TweetTweet GameJam)</template>
      <template #external-link>
        <v-btn
          style="padding: 0; margin-left: 1rem;"
          size="small"
          variant="text"
          append-icon="mdi-open-in-new"
          href="https://camicus27.itch.io/robo-defense"
          target="_blank"
          >
          View Itch.IO Page
        </v-btn>
      </template>
      <template #tag-line>
        Transfer power from the charging station to your battery and collect as much power as you can. But be careful, little plugs are out to steal your charge!
      </template>
      <template #description>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This game was created for the TweetTweetJam 8 Game Jam. The challenge is to <strong>use 500 or less characters in your game code.</strong>
        Developing this game was a very fun and difficult challenge to compress everything down to only 500 characters, especially if made with Unity.
        There are some built in functions and overrides that are very helpful when it comes to Unity but a lot of them have long names
        like void OnTriggerEnter2D(Collider2D c) that take up a lot of characters and were basically unavoidable.<br><br>
        
        In the end I managed to squeeze in most of what I originally sought out to make, but a few features are missing that I just
        couldn't fit in the code at all. <strong>I only had 2 characters left</strong> by the end so it was very close. I had to use some outside the
        box thinking to get some of the features working.
      </template>
      <template #screenshots>
        <img src="@/assets/games/robo-1.jpg" alt="Robo Defense itch.io page.">
        <img src="@/assets/games/robo-2.jpg" alt="Robo Defense entire codebase.">
      </template>
    </Game>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/components' as *;
@use '@/styles/meta' as *;

.games-showcase {
  margin-left: 3rem;
}
</style>