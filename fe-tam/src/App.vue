<template>
  <v-app dark :style="{background: $vuetify.theme.themes[theme].background}">
    <v-app-bar app color="primary" dark>
      THICC ASSET MANAGEMENT
      <v-spacer></v-spacer>
      <v-btn @click="changeTheme" text>{{theme}} Theme</v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
  methods: {
    changeTheme() {
      return (this.$vuetify.theme.dark = !this.$vuetify.theme.dark);
    }
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  }
};
</script>
