<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Dispatches
            <v-btn color="accent" small @click="goToNewDispatch">New Dispatch</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              @click="btnViewValue= !btnViewValue"
              small
            >{{ btnViewValue ? 'Show Active Only' : 'Show All' }}</v-btn>
          </v-card-title>
          <v-card-text>
            <v-data-table></v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      btnViewValue: false
    };
  },
  methods: {
    goToNewDispatch() {
      console.log(this.$route.params.project_id);
      this.$router.push({
        name: "DispatchAdd",
        params: { project_id: this.$route.params.project_id }
      });
    }
  }
};
</script>

<style>
</style>