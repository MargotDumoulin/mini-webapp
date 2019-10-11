import Vue from "vue";
import Router from "vue-router";
import AddClient from "./views/AddClient.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/addclient",
      name: "addclient",
      component: AddClient
    },
    {
      path: "/showclients",
      name: "showclients",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ShowClients.vue")
    }
  ]
});
