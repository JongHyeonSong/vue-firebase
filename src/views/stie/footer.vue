<template>
  <v-footer app color="primary" dark absolute>
    <v-card flat tile class="indigo lighten-1 white--text text-center">
      <v-card-text class="white--text pt-0"> {{ footer }} </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() + footer }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  props: ["footer"],
};
</script>
