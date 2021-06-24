<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <site-title :title="site.title"></site-title>

      <v-spacer></v-spacer>
      <v-btn icon @click="save">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon @click="read">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon @click="readOne">
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
      <site-menu :items="site.menu"></site-menu>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>

    <site-footer :footer="site.footer"></site-footer>
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
    drawer: true,

    site: {
      title: "ff",
      footer: "ffii",
      menu: [],
    },
  }),
  created() {
    this.subscribe();
  },
  mounted() {
    // console.log(this.$firebase);
  },
  methods: {
    subscribe() {
      this.$firebase
        .database()
        .ref()
        .child("abcd")
        .on(
          "value",
          (sn) => {
            const v = sn.val();
            if (!v) {
              this.$firebase.database().ref().child("site").set(this.site);
              return;
            }
            this.site = v;
          },
          (e) => {
            console.log(e.message);
          }
        );
    },
    save() {
      this.$firebase
        .database()
        .ref()
        .child("abcd")
        .set({
          title: "HIHI",
          title2: "HIHI2" + Date.now(),
        });
    },
    read() {
      //리드는 1.한번만 읽나, 2.파이프로 계쏙읽냐
      this.$firebase
        .database()
        .ref()
        .child("abcd")
        .on("value", (sn) => {
          console.log(sn);
          console.log(sn.val());
        });
    },
    async readOne() {
      //리드는 1.한번만 읽나, 2.파이프로 계쏙읽냐
      const sn = await this.$firebase
        .database()
        .ref()
        .child("abcd")
        .once("value");
      console.log(sn.val());
    },
  },
};
</script>
