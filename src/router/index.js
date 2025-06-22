import { createRouter, createWebHistory } from "vue-router";
// Defina suas rotas aqui
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/pages/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/pages/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../components/pages/Register.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../components/pages/ForgotPassword.vue"),
  },
  {
    path: "/category/:name",
    name: "Category",
    component: () => import("../components/pages/Category.vue"),
  },
  {
    path: "/product/:name",
    name: "Product",
    component: () => import("../components/pages/Product.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../components/pages/Cart.vue"),
  },
  {
    path: "/payment",
    name: "Payment",
    component: () => import("../components/pages/Payment.vue"),
  },
  {
    path: "/confirm-payment",
    name: "ConfirmPayment",
    component: () => import("../components/pages/ConfirmPayment.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});


router.beforeEach((to, from, next) => {
  // Se a nova rota for 'confirm-payment' e a anterior NÃO for 'payment'
  if (to.path.includes("confirm-payment") && !from.path.includes("payment")) {
    // Bloqueia a navegação, por exemplo redireciona para pagamento
    return next('/cart');
  }

  next(); // Libera a navegação normalmente
});

export default router;