<script setup lang="ts">
import Course from '@/components/Course.vue'
</script>

<template>
  <div class="course-descr-wrapper centered">
    <h1 class="section-title">Completed <em>University of Utah</em> Computer Science Courses</h1>
    <div class="courses">
      <Course>
        <template #title>Object-Oriented Programming</template>
        <template #course-number>CS 1410</template>
        <template #description>
          An introduction to the engineering and mathematical skills required to effectively program computers while introducing the paradigm of object-oriented programming.
        </template>
      </Course>
      <Course>
        <template #title>Intro to Algorithms and Data Structures</template>
        <template #course-number>CS 2420</template>
        <template #description>
          A comprehensive study of the problem of engineering computational efficiency into programs. Students learn about <strong>classical algorithms</strong> (including sorting, searching, and graph traversal), <strong>data structures</strong> (including stacks, queues, linked lists, trees, hash tables, and graphs), and <strong>analysis of program space and time requirements</strong>. Students complete extensive programming exercises that require the application of elementary techniques from software engineering.
        </template>
      </Course>
      <Course>
        <template #title>Software Practice</template>
        <template #course-number>CS 3500</template>
        <template #external-link>
          <v-btn
            style="padding: 0; margin-left: 1rem;"
            size="small"
            variant="text"
            append-icon="mdi-open-in-new"
            href="https://github.com/Camicus27/TankWars"
            target="_blank"
            >
            View coursework on GitHub
          </v-btn>
        </template>
        <template #description>
          Practical exposure to the process of creating large software systems, including <strong>requirements specifications, design, implementation, testing, and maintenance</strong>. Emphasis on <strong>software process, software tools</strong> (debuggers, profilers, source code repositories, test harnesses), <strong>software engineering techniques</strong> (time management, code, and documentation standards, source code management, object-oriented analysis and design), and <strong>team development practice</strong>. Much of the work is in groups and involves modifying preexisting software systems. The final project was making a full online multiplayer game, which took the form of
          <a class="link" href="https://github.com/Camicus27/TankWars" target="_blank">Tank Wars.</a>
        </template>
      </Course>
      <Course>
        <template #title>Software Practice II</template>
        <template #course-number>CS 3505</template>
        <template #description>
          An in-depth study of <strong>traditional software development</strong> (using UML) from inception through implementation. The entire class is team-based, and includes a large project that uses an agile process.
        </template>
      </Course>
      <Course>
        <template #title>Designing Human-Centered Experiences</template>
        <template #course-number>CS 3540</template>
        <template #description>
          A careful look into how to identify human needs and goals that technologies might address and the intricacies of <strong>Human Computer Interaction</strong> (HCI). Students learn to iteratively design technologies that support those goals and promote <strong>positive user experiences</strong>. Students identify <strong>user needs, frame problems, brainstorm solutions, design low-fidelity prototypes, evaluate usability, and communicate the reasoning behind a design</strong>. Multiple group projects allows students to apply principles of <strong>user-centered design</strong>.
        </template>
      </Course>
      <Course>
        <template #title>Web Software Development</template>
        <template #external-link>
          <v-btn
            style="padding: 0; margin-left: 1rem;"
            size="small"
            variant="text"
            append-icon="mdi-open-in-new"
            href="https://github.com/Camicus27/WebDev"
            target="_blank"
            >
            View coursework on GitHub
          </v-btn>
        </template>
        <template #course-number>CS 3550</template>
        <template #description>
          An introduction to web software development. Students come to understand the fundamental protocols and systems that make the modern web possible. They will then explore the <strong>full stack of web software</strong> technology from the back end to the front end, including <strong>fundamental web security issues, database integration, and client-side page manipulation</strong>. Using modern software architectures, programming models, and languages, students will create <strong>a complete web application</strong>.
        </template>
      </Course>
      <Course>
        <template #title>Computer Organization</template>
        <template #course-number>CS 3810</template>
        <template #description>
          A study of computer architecture and design, including topics such as <strong>RISC and CISC instruction set architectures, CPU organizations, pipelining, memory systems, input/output, and parallel machines</strong>. Emphasis is placed on <strong>performance measures and compilation issues</strong>.
        </template>
      </Course>
      <Course>
        <template #title>Senior Capstone Design</template>
        <template #course-number>CS 4000</template>
        <template #description>
          During their last two semesters, senior Computer Science students form teams to develop <strong>significant software projects</strong>. Seniors will work on <strong>team formation, project identification, project planning</strong> (including UI design, software architecture, testing methods, scheduling, etc.), and <strong>completion of a system prototype</strong>. This course will provide teams with time and guidance to effectively plan their projects, as well as <strong>emphasizing the written and oral communications necessary to succeed in industry</strong>.
        </template>
      </Course>
      <Course>
        <template #title>Advanced Algorithms</template>
        <template #course-number>CS 4150</template>
        <template #external-link>
          <v-btn
            style="padding: 0; margin-left: 1rem;"
            size="small"
            variant="text"
            append-icon="mdi-open-in-new"
            href="https://github.com/Camicus27/Advanced-Algorithms"
            target="_blank"
            >
            View coursework on GitHub
          </v-btn>
        </template>
        <template #description>
          Study of algorithms, data structures, and complexity analysis beyond the basic algorithmic understandings. Areas of study include <strong>balanced trees, heaps, hash tables, string matching, graph algorithms, external sorting and searching, dynamic programming, and exhaustive search</strong>. More theoretical algorithm concepts are also explored including <strong>space and time complexity, derivation and solution of recurrence relations, complexity hierarchies, reducibility, and NP completeness</strong>.
        </template>
      </Course>
      <Course>
        <template #title>Computer Systems</template>
        <template #course-number>CS 4400</template>
        <template #description>
          An in-depth study of computer systems from a programmer's point of view. Areas include machine level representations of programs in <strong>x86</strong>, optimizing program performance, <strong>memory hierarchy, virtual memory, dynamic memory allocation</strong>, linking, exceptional control flow, measuring program performance, <strong>concurrent programming with threads, and network programming</strong>.
        </template>
      </Course>
      <Course>
        <template #title>Computer Security</template>
        <template #course-number>CS 4440</template>
        <template #description>
          In this course we cover the basics of computer security and privacy. Topics include <strong>symmetric and asymmetric cryptography, threat modeling, authentication, injection attacks, access control, and usability</strong>. Students form an understanding of designing safe and secure software and identifying threats to security in existing software.
        </template>
      </Course>
      <Course>
        <template #title>Senior Capstone Project</template>
        <template #course-number>CS 4500</template>
        <template #description>
          This course is the capstone experience for graduating Computer Science seniors. It involves the <strong>development of significant software systems by small, self-selected student teams, with emphasis on applying sound, disciplined software engineering practice</strong>. Projects are defined and selected at the beginning of the semester, after which progress is demonstrated through <strong>documentation, meetings, and demos.</strong> The class culminates in a Demo Day at which <strong>students present their projects to faculty, students and project sponsors.</strong>
        </template>
      </Course>
      <Course>
        <template #title>Mobile App Programming</template>
        <template #course-number>CS 4530</template>
        <template #description>
          An introduction to the theory and practice of application development for mobile phones and tablets, including a focus on general program organizational techniques. Topics include <strong>native language foundations, automatic UI layout techniques, custom views and controls, data persistence, data driven user interfaces, application lifecycle, application architectural models like Model-View-Adapter, internet service interaction, RESTful web services, and 2D OpenGL rendering</strong>. Students will complete several programming projects during the course to explore these topics. A final project of the student's own design will make up a large part of the class.
        </template>
      </Course>
      <Course>
        <template #title>Web Software Development II</template>
        <template #course-number>CS 4550</template>
        <template #description>
          This course explores advanced topics in web software development including <strong>REST APIs, testing infrastructure, cloud deployment, certificates, secure sessions, user accounts and permissions, authentication, and ethical considerations in web software</strong>. Students will create an advanced web application utilizing these topics.
        </template>
      </Course>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/components' as *;
@use '@/styles/meta' as *;

.course-descr-wrapper {
  margin-bottom: 2rem;

  .courses {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    width: 80%;
  }
}
</style>