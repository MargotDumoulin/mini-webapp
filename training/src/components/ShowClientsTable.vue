<template>
  <div>
    <v-data-table
    :headers="headers"
    :items="clients"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    drawer: null,
    headers: [
         {
           text: 'Id',
           align: 'left',
           sortable: false,
           value: 'id',
         },
         { text: 'Firstname', value: 'firstname' },
         { text: 'Lastname', value: 'name' },

       ],
    clients: []
  }),

  mounted () {
    this.retrieve()
  },

  methods : {
    retrieve () {
      axios.get('http://localhost:3000/retrieve-clients')
        .then((response) => {
            console.log('response', response.data)
            console.log('client', this.clients)
            this.clients = response.data

        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
    }

  }
};
</script>
