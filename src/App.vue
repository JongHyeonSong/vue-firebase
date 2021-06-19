<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <site-title :title="title"></site-title>

      <v-spacer></v-spacer>

      <v-btn icon to="/about">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon to="/">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <site-menu></site-menu>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>

    <site-footer :footer="footer"></site-footer>
  </v-app>
</template>

<script>
import SiteTitle from "@/views/stie/title";
import SiteFooter from "@/views/stie/footer";
import SiteMenu from "@/views/stie/menu";

export default {
  components: { SiteTitle, SiteFooter, SiteMenu },
  name: "App",

  data: () => ({
    //
    drawer: true,
    title: "ff",
    footer: "ffii",
  }),
};
</script>
