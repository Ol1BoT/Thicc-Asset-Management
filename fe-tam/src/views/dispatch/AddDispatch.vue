<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>New Dispatch</v-card-title>
          <v-card-subtitle>Select Person</v-card-subtitle>
          <v-card-text>
            <v-autocomplete label="Enter Persons Name"></v-autocomplete>
            <v-divider></v-divider>
            <v-row>
              <v-col v-for="(item, index) in items" :key="index" cols="12" md="4">
                <v-card outlined>
                  <v-card-title>Dispatch Asset #{{index+1}}</v-card-title>
                  <v-card-text>
                    <v-list>
                      <v-list-item>
                        <v-list-item-content>Asset Type:</v-list-item-content>
                        <v-list-item-action>
                          <v-text-field style="width:50%"></v-text-field>
                        </v-list-item-action>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>Barcode:</v-list-item-content>

                        <v-list-item-action>
                          <v-text-field></v-text-field>
                        </v-list-item-action>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>Condition:</v-list-item-content>
                        <v-list-item-action>
                          <v-combobox></v-combobox>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="error" @click="deleteAsset(index)">Delete Dispatch Asset</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn small color="secondary">Add New Asset</v-btn>
            <v-btn color="accent" small @click="addAnother">Add Another Dispatch</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="error" small @click="saveAndComplete">Cancel</v-btn>
            <v-btn color="primary" small @click="saveAndComplete">Save and Complete</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        {
          AssetType: "",
          AssetBarCode: "",
          AssetCondition: ""
        }
      ],
      AssetType: [
        {
          id: 1,
          name: "Dell Monitor"
        },
        {
          id: 2,
          name: "Dell Dock"
        }
      ]
    };
  },
  methods: {
    addAnother() {
      console.log("Click Acknowledged");
      this.items.push({
        AssetType: "",
        AssetBarCode: "",
        AssetCondition: ""
      });
      console.log(this.items);
    },
    saveAndComplete() {
      //POST
      this.$router.push({
        name: "Project",
        params: { project_id: this.$route.params.project_id }
      });
    },
    deleteAsset(pos) {
      this.items = this.items.filter((val, index) => {
        return index != pos;
      });
    }
  }
};
</script>

<style>
</style>