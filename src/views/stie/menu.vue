<template>
  <div>
    <v-list-item v-for="item in items" :key="item.title" :to="item.to">
      <v-list-item-content>
        {{ item.title }}
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  props: ["footer"],
  data: () => ({
    items: [
      { title: "t1", to: "/" },
      { title: "t2", to: "/1" },
      { title: "t3", to: "/2" },
    ],
  }),
};
</script>
