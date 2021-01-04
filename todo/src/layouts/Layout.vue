<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Awsome Todo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-toolbar>
        <q-tabs>
          <q-route-tab
            v-for="link in essentialLinks"
            :key="link.title"
            :icon="link.icon"
            :label="link.title"
            :to="link.link"
            exact
          />
        </q-tabs>
      </q-toolbar>
    </q-footer>

    <q-drawer
      :breakpoint="767"
      :width="250"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header class="text-grey-4">
          Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "Todo",
    caption: "my todos",
    icon: "list",
    link: "/"
  },
  {
    title: "Settings",
    caption: "my Settings",
    icon: "settings",
    link: "/settings"
  }
];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    };
  }
};
</script>

<style lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
.q-drawer {
  .q-router-link--exact-active {
    color: white !important;
  }
}
</style>
