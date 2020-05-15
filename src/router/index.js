import Vue from "vue";
import Router from "vue-router";

import Landing from "@/components/Landing";
import Educate from "@/components/Educate";
import RazeScanner from "@/components/RazeScanner";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
      {
        path: "*",
        redirect: "/landing"
      },
      {
        path: "/landing",
        name: "Landing",
        component: Landing
      },
      {
        path: "/educate",
        name: "Educate",
        component: Educate
      },
      {
        path: "/razescanner",
        name: "RazeScanner",
        component: RazeScanner
      },
    ]
  });
  
  export default router;
  