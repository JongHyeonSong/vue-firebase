import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import { VSnackbar, VBtn, VIcon } from "vuetify/lib";
import VuetifyToast from "vuetify-toast-snackbar";

Vue.use(Vuetify, {
  components: {
    VSnackbar,
    VBtn,
    VIcon,
  },
});

const vueObj = new Vuetify({
  x: "left", // default
  y: "bottom", // default
  color: "info", // default
  icon: "mdi-clock",
  iconColor: "", // default
  classes: ["body-2"],
  timeout: 1000, // default
  dismissable: true, // default
  multiLine: false, // default
  vertical: false, // default
  queueable: false, // default
  showClose: false, // default
  closeText: "sdfg", // default
  closeIcon: "close", // default
  closeColor: "", // default
  slot: [], //default
  shorts: {
    custom: {
      color: "purple",
    },
  },
  property: "$toast", // default
});

Vue.use(VuetifyToast, { $vuetify: vueObj.framework });

export default vueObj;

// import Vue from "vue";
// import Vuetify from "vuetify/lib/framework";
// import { VSnackbar, VBtn, VIcon } from "vuetify/lib";
// import VuetifyToast from "vuetify-toast-snackbar";

// Vue.use(Vuetify, {
//   components: {
//     VSnackbar,
//     VBtn,
//     VIcon,
//   },
// });

// Vue.use(VuetifyToast, );
// export default new Vuetify({});
