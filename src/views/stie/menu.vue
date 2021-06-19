<template>
  <v-list>
    <v-list-group
      v-for="item in items"
      :key="item.title"
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
  props: ["footer"],
  data: () => ({
    items: [
      {
        action: "mdi-ticket",
        subItems: [{ title: "List Item" }],
        title: "Attractions",
      },
      {
        action: "mdi-silverware-fork-knife",
        active: true,
        subItems: [
          { title: "Breakfast & brunch", to: "/" },
          { title: "New American", to: "/about" },
          { title: "Sushi", to: "/" },
        ],
        title: "Dining",
      },
      {
        action: "mdi-school",
        subItems: [{ title: "List Item" }],
        title: "Education",
      },
    ],
  }),
};
</script>
