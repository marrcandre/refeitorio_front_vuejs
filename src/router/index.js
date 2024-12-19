import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CardapioView from "../views/CardapioView.vue";
import CardapioCardView from "../views/CardapioCardView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import UsuarioView from "../views/UsuarioView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cardapios",
      name: "cardapios",
      component: CardapioView,
    },
    {
      path: "/cardapioCard",
      name: "cardapioCard",
      component: CardapioCardView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/usuario",
      name: "usuario",
      component: UsuarioView,
    },
    {
      path: "/logout",
      name: "logout",
      component: LogoutView,
    }
  ],
});

export default router;
