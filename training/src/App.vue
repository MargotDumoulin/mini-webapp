<template>
  <div>
    <v-app>
      <v-navigation-drawer v-model="drawer" app clipped>
        <v-list rounded>
          <v-list-item >
            <router-link class="x-router-link whitetext" to="/addclient">Ajouter un client</router-link>
          </v-list-item>
          <v-list-item>
            <router-link class="x-router-link whitetext" to="/showclients">Afficher les clients</router-link>
          </v-list-item>



        </v-list>
      </v-navigation-drawer>
      <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Gestion des clients</v-toolbar-title>
      </v-app-bar>
      <v-content>
        <router-view />
      </v-content>
      <v-footer app>
          <span>&copy; 2019</span>
        </v-footer>
    </v-app>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    //
  },
  data: () => ({
    drawer: null
  })
};
</script>

<style>
.x-router-link {
    text-decoration: none;
    text-decoration-color: white;

  }
  .whitetext {
    caret-color: white !important;
    color: white !important;
  }


</style>
