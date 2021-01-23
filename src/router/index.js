import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
// import Home from "../views/Home.vue";
import Register from "../views/Register";
import Login from "../views/Login";
import Index from "../views/Index";
import Admin from "../views/Admin";
import Users from '../views/admin/allUsers';


Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/vue_auth/register",
    name: "Register",
    component: Register,
    meta: { guest: true },
  },
  {
    path: "/vue_auth/login",
    name: "Login",
    component: Login,
    meta: { guest: true },
  },
  {
    path: "/vue_auth/",
    name: "Index",
    component: Index,
    meta: { requiresAuth: true,
   },
  },
  {
    path: "/vue_auth/admin",
    name: "Admin",
    component: Admin,
    meta: { requiresAuth: true,
    permission:"admin" },
  },
  {
    path: "/vue_auth/admin/allusers",
    name: "Users",
    component: Users,
    meta: { requiresAuth: true,
    permission:"admin" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated ) {
    
      next();
      return;
    }
    next("/vue_auth/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      
      next("/vue_auth/");
      
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
