<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Assets
            <v-spacer></v-spacer>
            <v-btn
              @click="btnViewValue= !btnViewValue"
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
  }
};
</script>

<style>
</style>