<template>
  <v-app>
    <v-main>
      <v-row justify="center">
        <v-col cols="4">
          <h2 class="text-center mt-10">Nuxt Sample App</h2>

          <ReservationCard :loading="loading" v-if="!result">
            <template #image>
              <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>
            </template>
            <template #title=""> My Other Restaurant Theme </template>
            <template #buttons>
              <v-chip-group
                v-model="selection"
                active-class="primary accent-4 white--text"
                color="accent"
                column
              >
                <v-chip v-for="item in items" :value="item">
                  {{ item }}
                </v-chip>
              </v-chip-group>
            </template>
            <template #card-action>
              <v-btn color="secondary lighten-2" text @click="runQuery()">
                Reserve
              </v-btn>
            </template>
          </ReservationCard>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    selection: null,
    loading: false,
    items: ["item 1", "item 2", "item 3", "item 4"],
  }),
  methods: {
    runQuery() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$router.push("inspire");
      }, 2000);
    },
  },
};
</script>
