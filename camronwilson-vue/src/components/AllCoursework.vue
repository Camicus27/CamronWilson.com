<script setup lang="ts">
import Coursework from '@/components/Coursework.vue'
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
          <img src="@/assets/assignments/TankWars1.jpg" alt="Tank Wars screenshot 1.">
          <img src="@/assets/assignments/TankWars2.jpg" alt="Tank Wars screenshot 2.">
          <img src="@/assets/assignments/TankWars3.jpg" alt="Tank Wars screenshot 3.">
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
          <img src="@/assets/assignments/dynamic-programming.jpg" alt="Dynamic programming flow example.">
          <img src="@/assets/assignments/mincut-maxflow.jpg" alt="A minimum cut maximum flow graph example.">
          <img src="@/assets/assignments/kruskal.jpg" alt="Kruskal's algorithm example.">
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
            href="https://github.com/Camicus27/TankWars"
            target="_blank"
            >
            View project on GitHub
          </v-btn>
        </template>
        <template #description>
          A learning management system developed using Django with a SQLite database. The website boasts assignment submission and grading, authorizing users, and some javascript used to give extra functionality to tables and other views.
        </template>
        <template #screenshots>
          <img src="@/assets/assignments/hypo-grades.jpg" alt="Javascript used to hypothesize grades with input fields.">
          <img src="@/assets/assignments/assign-submiss.jpg" alt="An example assignment page with option to submit assignments.">
          <img src="@/assets/assignments/assign-list.jpg" alt="Listing all current assignments pulled from database.">
          <img src="@/assets/assignments/grading.jpg" alt="Instructor view for grading assignment submissions.">
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
            href="https://paddletraffic.net"
            target="_blank"
            >
            Visit project's landing page
          </v-btn>
        </template>
        <template #description>
          A website designed to help Pickleball players find open courts near them. Find information about the courts in your area and see what courts are available in real time! Designed to remove the frustration of showing up to court only for it to be packed. You can also find players in your area to team up with or schedule matches.
        </template>
        <template #screenshots>
          <img src="@/assets/assignments/paddletraffic-poster.png" alt="PaddleTraffic's pitch poster.">
          <img src="@/assets/assignments/paddletraffic-map.png" alt="PaddleTraffic's pickleball court map.">
          <img src="@/assets/assignments/paddletraffic-matchmaking.png" alt="PaddleTraffic's matchmaking services.">
          <img src="@/assets/assignments/paddletraffic-profile.png" alt="PaddleTraffic's customizable profile page.">
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
}
</style>