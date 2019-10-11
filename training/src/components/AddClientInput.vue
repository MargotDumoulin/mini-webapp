<template>
  <v-container>
    <v-layout>
      <v-content>
        <v-form
        class="f"
        ref="form"
        lazy-validation
      >
        <v-text-field
          v-model="firstname"
          label="Firstname"
          required
        ></v-text-field>

        <v-text-field
          v-model="lastname"
          label="Lastname"
          required
        ></v-text-field>


        <v-btn
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>

        <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          Reset Form
        </v-btn>


      </v-form>
      </v-content>

    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    firstname: '',
    lastname: ''
  }),

  methods: {
   validate () {
     if (this.$refs.form.validate()) {
      const client =  {
         firstname: this.firstname,
         lastname: this.lastname
       }

      axios.post('http://localhost:3000/register-client',client)
       .then(function (response) {
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
       })

       this.reset()
       console.log(client)
     }
    else {
      //show message in snackbar or put inputs in red
    }
   },
   reset () {
     this.$refs.form.reset()
   },
 },
};
</script>

<style>
.f {
  padding-right: 25%;
  }</style>
