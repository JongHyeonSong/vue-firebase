<template>
  <v-list>
    <v-list-group
      v-for="(item, i) in list"
      :key="i"
      v-model="item.active"
      :prepend-icon="item.action"
      no-action
    >
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item
        v-for="subItem in item.subItems"
        :key="subItem.title"
        :to="subItem.to"
      >
        <v-list-item-content>
          <v-list-item-title v-text="subItem.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return { list: this.items };
  },
  mounted() {},
};
</script>
