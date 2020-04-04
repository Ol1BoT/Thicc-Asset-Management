<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Asset Types</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="accent" small>Add Asset Type</v-btn>
            <v-btn color="accent" small @click="goToViewAssetTypes">View Asset Types</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Assets</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="accent" small>Add Assets</v-btn>
            <v-btn color="accent" small @click="goToViewAssets">View Assets</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Assets Dispatch</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="accent" small @click="goToNewDispatch">New Dispatch</v-btn>
            <v-btn color="accent" small @click="goToViewDispatch">View Dispaches</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-divider></v-divider>
    </v-row>
    <v-row>
      <v-col>
        <v-btn color="secondary" to="/">Back to Projects</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    goToNewDispatch() {
      console.log(this.$route.params.project_id);
      this.$router.push({
        name: "DispatchAdd",
        params: { project_id: this.$route.params.project_id }
      });
    },
    goToViewDispatch() {
      console.log(this.$route.params.project_id);
      this.$router.push({
        name: "DispatchView",
        params: { project_id: this.$route.params.project_id }
      });
    },
    goToViewAssets() {
      console.log(this.$route.params.project_id);
      this.$router.push({
        name: "AssetView",
        params: { project_id: this.$route.params.project_id }
      });
    },
    goToViewAssetTypes() {
      console.log(this.$route.params.project_id);
      this.$router.push({
        name: "AssetTypeView",
        params: { project_id: this.$route.params.project_id }
      });
    }
  }
};
</script>

<style>
</style>