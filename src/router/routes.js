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
            path: "sensors/",
            component: () => import("pages/PluginsCatalogPage.vue"),
          },
          {
            path: "plugins/",
            component: () => import("pages/PluginsCatalogPage.vue"),
          },
        ],
      },
      {
        path: "/catalog/plugins/:pluginId",
        component: () => import("pages/PluginsCatalogPage.vue"),
      },
      {
        path: "/catalog/sensors/:sensorId",
        component: () => import("pages/PluginsCatalogPage.vue"),
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
