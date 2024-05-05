<template>
  <!-- <iframe id="resume-pdf" src="Camron_Wilson_Resume.pdf" frameborder="0"></iframe> -->
  <object id="resume-pdf" data="Camron_Wilson_Resume.pdf" type="application/pdf" frameborder="0">
    <div style="display: flex; flex-direction: column; align-items: center;">
      <h2>Couldn't embed PDF, your browser may not support embedded PDFs!</h2>
      <v-btn
        style="padding: 0; margin-top: 1rem;"
        size="small"
        variant="text"
        append-icon="mdi-open-in-new"
        href="http://localhost:5173//Camron_Wilson_Resume.pdf"
        target="_blank"
        >
        View in new tab instead
      </v-btn>
      <!-- href="https://camronwilson.com/Camron_Wilson_Resume.pdf" -->
    </div>
  </object>
</template>

<style scoped lang="scss">
@use '@/styles/components' as *;
@use '@/styles/meta' as *;

#resume-pdf {
    width: 75%;
    height: 800px;
}
</style>