const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "login",
        component: () => import("pages/LoginPage.vue"),
      },
      {
        path: "signup",
        component: () => import("pages/SignupPage.vue"),
      },
      {
        path: "dashboard",
        component: () => import("pages/DashboardPage.vue"),
      },
      {
        path: "mediums/",
        component: () => import("layouts/MediumsLayout.vue"),
        children: [
          {
            path: "",
            component: () => import("pages/MediumsPage.vue"),
          },
          {
            path: ":mediumId",
            component: () => import("pages/MediumsPage.vue"),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
