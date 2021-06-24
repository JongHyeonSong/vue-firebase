import Vue from "vue";
Vue.config.errorHandler = (e) => {
  console.error(e.message);
  Vue.prototype.$toast.error(e.message, {
    timeout: 10000,
    icon: "info",
    dismissable: false,
    showClose: true,
  });
};
