<script setup lang="ts">
import { ref, onActivated } from 'vue'
import type { VForm } from 'vuetify/components';
import axios from 'axios'

const submissionError = ref(false)
const waitingForSubmission = ref(false)
const submissionSuccess = ref(false)

const contactForm = ref<VForm | undefined>()

const eventForm = ref({
  _honey: "",
  _captcha: false,
  _subject: "Contact Form Submission",
  name: "",
  email: "",
  message: ""
})

onActivated(() => {
  submissionError.value = false;
  waitingForSubmission.value = false;
  submissionSuccess.value = false;
  clearForm()
})

async function submitForm() {
  try {
    if (!contactForm.value) {
      return;
    }
  }
  catch {
    submissionError.value = true;
    return;
  }

  submissionError.value = false;
  waitingForSubmission.value = true;
  submissionSuccess.value = false;

  contactForm.value.validate().then(validation => {
    if (!validation.valid) {
      waitingForSubmission.value = false;
      return;
    }

    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post(`https://formsubmit.co/e324ce3114628fd724590749ae194f33`, eventForm.value)
    .then(response => {
      submissionSuccess.value = true;
      waitingForSubmission.value = false;
    })
    .catch(error => {
      submissionError.value = true;
      waitingForSubmission.value = false;
    })
  })
}

function clearForm() {
  eventForm.value._honey = ''
  eventForm.value.name = ''
  eventForm.value.email = ''
  eventForm.value.message = ''
}
</script>

<template>
  <div class="wrapper centered">
    <h1 class="section-title">
      Contact Me!
    </h1>
    <h5>
      Feel free to submit any questions, feedback, or other inquiries you may directly to my email!
    </h5>

    <v-form ref="contactForm" class="contact-form" validate-on="lazy submit" @submit.prevent="submitForm">
      <v-text-field
        v-model="eventForm._honey"
        style="display:none">
      </v-text-field>

      <v-text-field
        class="field"
        bg-color="white"
        v-model="eventForm.name"
        :rules="[(v) => !!v || 'A name is required.']"
        :disabled="waitingForSubmission || submissionSuccess"
        label="Name"
        :focused="true"
        :autofocus="true"
        tabindex="0"
        required>
      </v-text-field>

      <v-text-field
        class="field"
        bg-color="white"
        v-model="eventForm.email"
        :rules="[(v) => !!v || 'A reply-to email is required.', (v) => /^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(v) || 'Must be a valid email.']"
        :disabled="waitingForSubmission || submissionSuccess"
        label="Email"
        tabindex="1"
        required>
      </v-text-field>

      <v-textarea
        class="area"
        bg-color="white"
        v-model="eventForm.message"
        :rules="[(v) => !!v || 'A message is required.']"
        :disabled="waitingForSubmission || submissionSuccess"
        label="Message"
        tabindex="2"
        required>
      </v-textarea>

      <v-btn v-if="waitingForSubmission"
        class="submit-btn"
        variant="elevated"
        color="#663399"
        size="x-large"
        :disabled="waitingForSubmission"
        >
          <v-progress-circular
            color="grey-lighten-4"
            indeterminate
          ></v-progress-circular>
      </v-btn>
      <v-btn v-else-if="!waitingForSubmission && !submissionSuccess"
        class="submit-btn"
        prepend-icon="mdi-email-fast-outline"
        variant="elevated"
        color="#663399"
        size="x-large"
        tabindex="3"
        type="submit"
        >
          Submit
      </v-btn>
      <p v-else-if="!waitingForSubmission && submissionSuccess" class="success-msg">
        Successfully submitted!
      </p>
    </v-form>

    <v-dialog
      v-model="submissionError"
      width="auto"
      >
      <v-card
        max-width="75vw"
        prepend-icon="mdi-email-alert-outline"
        text="There was an error submitting your message. Please try again later."
        title="Submission Error">
        <v-card-actions style="justify-content: end;">
          <v-btn
            text="Close"
            prepend-icon="mdi-close-thick"
            color="error"
            @click="submissionError = false">
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/components' as *;
@use '@/styles/meta' as *;

h5 {
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 2.5rem;

  @include responsive($mobile-size) {
    font-size: 1rem;
    line-height: 1.25rem;
    margin-bottom: 1rem;
  }
}

h1, h5 {
  width: 100%;
}

.success-msg {
  color: #008000;
  font-weight: bold;
  font-size: 1.33rem;
  line-height: 1.8rem;

  @include responsive($mobile-size) {
    font-size: .9rem;
    line-height: 1.15rem;
  }
}

form {
  & > * {
    margin-bottom: 1rem;
  }

  .submit-btn {
    padding: 0;
    width: 33%;
    margin-left: 6rem;

    @include responsive($mobile-size) {
      margin-left: 2rem;
      width: 60%;
    }
  }

  .field {
    width: 60%;

    @include responsive($mobile-size) {
      width: 80%;
    }
  }

  .area {
    width: 75%;

    @include responsive($mobile-size) {
      width: 100%;
    }
  }
}
</style>