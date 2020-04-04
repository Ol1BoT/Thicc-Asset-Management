<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" v-for="_ in projects" :key="_.id">
        <v-card :to="'/project/'+_.id">
          <v-card-title>{{_.title}}</v-card-title>
          <v-card-text>
            <p>Asset Types: {{_.numAssetTypes}}</p>
            <p>Number of Assets: {{_.numAssets}}</p>
            <p>Number of Assets Dispatched: {{_.numAssetsDispatched}}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  data: () => {
    return {
      projects: [
        {
          id: 1,
          title: "Maintenance Assets",
          numAssetTypes: "35",
          numAssets: "1035",
          numAssetsDispatched: "1026",
          imageURL: ""
        },
        {
          id: 2,
          title: "ICT Assets",
          numAssetTypes: "12",
          numAssets: "700",
          numAssetsDispatched: "560",
          imageURL: ""
        }
      ]
    };
  },
  name: "Home",
  components: {}
};
</script>
