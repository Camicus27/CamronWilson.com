<script setup lang="ts">
import Coursework from '@/components/Coursework.vue'
import ZoomableSS from '@/components/ZoomableSS.vue'

import tankWarsSS1 from '@/assets/assignments/TankWars1.jpg'
import tankWarsSS2 from '@/assets/assignments/TankWars2.jpg'
import tankWarsSS3 from '@/assets/assignments/TankWars3.jpg'
import algorithmsSS1 from '@/assets/assignments/dynamic-programming.jpg'
import algorithmsSS2 from '@/assets/assignments/mincut-maxflow.jpg'
import algorithmsSS3 from '@/assets/assignments/kruskal.jpg'
import webDevSS1 from '@/assets/assignments/hypo-grades.jpg'
import webDevSS2 from '@/assets/assignments/assign-submiss.jpg'
import webDevSS3 from '@/assets/assignments/assign-list.jpg'
import webDevSS4 from '@/assets/assignments/grading.jpg'
import paddleTrafficSS1 from '@/assets/assignments/paddletraffic-poster.png'
import paddleTrafficSS2 from '@/assets/assignments/paddletraffic-map.png'
import paddleTrafficSS3 from '@/assets/assignments/paddletraffic-matchmaking.png'
import paddleTrafficSS4 from '@/assets/assignments/paddletraffic-profile.png'
</script>

<template>
  <div class="coursework-wrapper centered">
    <h1 id="coursework" class="section-title">Relevant Coursework</h1>
    <div class="coursework-showcase">
      <Coursework>
        <template #title>Tank Wars</template>
        <template #external-link>
          <v-btn
            style="padding: 0; margin-left: 1rem;"
            size="small"
            variant="text"
            append-icon="mdi-open-in-new"
            href="https://github.com/Camicus27/TankWars"
            target="_blank"
            >
            View project on GitHub
          </v-btn>
        </template>
        <template #description>
          A top-down tank battle arena. You choose your tank and fight against other players in the server for the highest score! Collect power ups for a high powered laser shot. This project required a server/client structure with standard JSON to communicate information. It was created over a semester for Software Practice (CS3500) and was built from scratch using .NET and Windows Forms to create the executables.
        </template>
        <template #screenshots>
          <ZoomableSS :img-src="tankWarsSS1" img-alt="Tank Wars gameplay of firing a bullet."/>
          <ZoomableSS :img-src="tankWarsSS2" img-alt="Tank Wars idling in an arena."/>
          <ZoomableSS :img-src="tankWarsSS3" img-alt="Tank Wars select a tank color menu."/>
        </template>
      </Coursework>
      <Coursework>
        <template #title>Advanced Algorithmic Problem Solving</template>
        <template #external-link>
          <v-btn
            style="padding: 0; margin-left: 1rem;"
            size="small"
            variant="text"
            append-icon="mdi-open-in-new"
            href="https://github.com/Camicus27/Advanced-Algorithms"
            target="_blank"
            >
            View project on GitHub
          </v-btn>
        </template>
        <template #description>
          A collection of algorithmic code I wrote to solve various scenarios using advanced Computer Science topics such as Dynamic Programming, Memoization, and Graph theory (DFS, BFS, WFS, Dijkstra's Algorithm, etc.).
        </template>
        <template #screenshots>
          <ZoomableSS :img-src="algorithmsSS1" img-alt="Dynamic programming flow example."/>
          <ZoomableSS :img-src="algorithmsSS2" img-alt="A minimum cut maximum flow graph example."/>
          <ZoomableSS :img-src="algorithmsSS3" img-alt="Kruskal's algorithm example."/>
        </template>
      </Coursework>
      <Coursework>
        <template #title>Web Development</template>
        <template #external-link>
          <v-btn
            style="padding: 0; margin-left: 1rem;"
            size="small"
            variant="text"
            append-icon="mdi-open-in-new"
            href="https://github.com/Camicus27/WebDev"
            target="_blank"
            >
            View project on GitHub
          </v-btn>
        </template>
        <template #description>
          A learning management system developed using Django with a SQLite database. The website boasts assignment submission and grading, authorizing users, and some javascript used to give extra functionality to tables and other views.
        </template>
        <template #screenshots>
          <ZoomableSS :img-src="webDevSS1" img-alt="Javascript used to hypothesize grades with input fields."/>
          <ZoomableSS :img-src="webDevSS2" img-alt="An example assignment page with option to submit assignments."/>
          <ZoomableSS :img-src="webDevSS3" img-alt="Listing all current assignments pulled from database."/>
          <ZoomableSS :img-src="webDevSS4" img-alt="Instructor view for grading assignment submissions."/>
        </template>
      </Coursework>
      <Coursework>
        <template #title>PaddleTraffic (Senior Capstone Project)</template>
        <template #external-link>
          <v-btn
            style="padding: 0; margin-left: 1rem;"
            size="small"
            variant="text"
            append-icon="mdi-open-in-new"
            href="https://github.com/Camicus27/PaddleTraffic"
            target="_blank"
            >
            View project on GitHub
          </v-btn>
        </template>
        <template #description>
          A website designed to help Pickleball players find open courts near them. Find information about the courts in your area and see what courts are available in real time! Designed to remove the frustration of showing up to court only for it to be packed. You can also find players in your area to team up with or schedule matches.
        </template>
        <template #screenshots>
          <ZoomableSS :img-src="paddleTrafficSS1" img-alt="PaddleTraffic's pitch poster."/>
          <ZoomableSS :img-src="paddleTrafficSS2" img-alt="PaddleTraffic's pickleball court map."/>
          <ZoomableSS :img-src="paddleTrafficSS3" img-alt="PaddleTraffic's matchmaking services."/>
          <ZoomableSS :img-src="paddleTrafficSS4" img-alt="PaddleTraffic's customizable profile page."/>
        </template>
      </Coursework>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/components' as *;
@use '@/styles/meta' as *;

.coursework-showcase {
  margin-left: 3rem;

  @include responsive($mobile-size) {
    margin: 0;
    width: 95%;
  }
}
</style>