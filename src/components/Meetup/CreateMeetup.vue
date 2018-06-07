<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2>Create a new meetup</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field 
              name="title"
              label="Title"
              id="title"
              v-model="title"
              required></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field 
              name="location"
              label="Location"
              id="location"
              v-model="location"
              required></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field 
              name="imageUrl"
              label="Image Url"
              id="image-url"
              v-model="imageUrl"
              required></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="100">
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field 
              name="description"
              label="Description"
              id="description"
              v-model="description"
              multi-line
              required></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
              class="primary" 
              :disabled="!formIsValid"
              type="submit"
              >Create meeutp</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        location: '',
        imageUrl: '',
        description: ''
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' 
          && this.location !== ''
          && this.imageUrl !== '' 
          && this.description !== ''
      }
    },
    methods: {
      onCreateMeetup () {
        if (!this.formIsValid) {
          return 
        }
        const meetupData = {
          title: this.title,
          location: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          date: new Date()
        }
        this.$store.dispatch('createMeetup', meetupData)
        this.$router.push('/meetups')
      }
    }
  }
</script>