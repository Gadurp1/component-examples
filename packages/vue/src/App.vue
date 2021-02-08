<template>
  <v-app>
    <v-content>
      <v-row justify="center">
        <v-col cols="4" class="text-center my-4 ">
          <h2>Vue Sample App</h2>
          <v-alert outlined color="primary" class="mt-10" v-if="result">
            <div class="title text-uppercase">
              {{ result }}
            </div>
            <div>
              Maecenas ullamcorper, dui et placerat feugiat, eros pede varius
              nisi, condimentum viverra felis nunc et lorem. Duis vel nibh at
              velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean
              posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu
              sollicitudin urna dolor sagittis lacus. Etiam sollicitudin, ipsum
              eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis
              ante odio sit amet eros.
            </div>
            <v-btn class="primary" @click="result = null">
              Back
            </v-btn>
          </v-alert>
          <ReservationCard :loading="loading" v-if="!result">
            <template #image>
              <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>
            </template>
            <template #title=""> My Blue Restaurant Theme </template>
            <template #buttons>
              <v-chip-group
                v-model="selection"
                active-class="primary accent-4 white--text"
                color="accent"
                column
              >
                <v-chip v-for="item in items" :value="item">
                  {{item}}
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
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    selection: null,
    loading: false,
    items: [
      'item 1',
      'item 2',
      'item 3',
      'item 4'
    ],
    result: null
  }),
  methods: {
    runQuery() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.result = `You clicked ${this.selection}`;
      }, 2000);
    },
  },
};
</script>
