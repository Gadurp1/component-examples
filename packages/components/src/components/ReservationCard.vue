<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12 white--text"
    max-width="374"
    color="primary"
  >
    <template slot="progress">
      <v-progress-linear
        color="secondary"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <slot name="image" />
    <v-card-title>
      <slot name="title" />
    </v-card-title>
    <v-card-text class="white--text">
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="white"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
        <div class="grey--text ml-4">4.5/5</div>
      </v-row>

      <v-row class="text-left px-4">
        <div class="subtitle-1">$ • Italian, Cafe</div>
        <div>
          <slot name="description" />
        </div>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-title>Tonight's availability</v-card-title>
    <v-card-text>
      <slot name="buttons" />
    </v-card-text>
    <v-card-actions>
      <slot name="card-action" />
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    selection: null,
  }),
  props: {
    loading: Boolean,
    result: String
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>