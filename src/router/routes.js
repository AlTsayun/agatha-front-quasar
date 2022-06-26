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
        path: "account",
        component: () => import("pages/AccountPage.vue"),
      },
      {
        path: "dashboard",
        component: () => import("pages/DashboardPage.vue"),
      },
      {
        path: "catalog/",
        component: () => import("layouts/CatalogLayout.vue"),
        children: [
          {
            path: "",
            redirect: (to) => {
              return { path: "/catalog/plugins" };
            },
          },
          {
            path: "plugins",
            component: () => import("pages/PluginsCatalogPage.vue"),
          },
          {
            path: "sensors",
            component: () => import("pages/SensorsCatalogPage.vue"),
          },
          {
            path: "plugins/:id",
            component: () => import("pages/PluginsCatalogPage.vue"),
          },
          {
            path: "sensors/:id",
            component: () => import("pages/SensorsCatalogPage.vue"),
          },
        ],
      },
      {
        path: "mediums/",
        component: () => import("layouts/MediumsLayout.vue"),
        children: [
          {
            path: "",
            redirect: (to) => {
              return { path: "/mediums/1" };
            },
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
