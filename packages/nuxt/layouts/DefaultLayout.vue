<template>
  <v-app>
    <!-- Main Content -->
    <v-main
      v-scroll="onScroll"
      class="main-layout text-center"
    >
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
export default {
  // layouts/default.vue
  head() {
    return {
      style: [{
        hid: "vuetifyTheme",
        type: "text/css",
        cssText: this.$vuetify.theme.generatedStyles,
      }],
      bodyAttrs: {
        class: ""
      },
    }
  },
  props: {
    banner: Boolean,
    headerFlat: Boolean,
    headerDark: Boolean,
    lockedOutFloater: Boolean,
    phone: {
      type: String,
      default: '1-800-539-7571',
    },
    headerOpacity: {
      type: Number,
      default: null,
    },
    headerStartingOpacity: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      offset: 0,
    }
  },
  computed: {
    headerHeight() {
      return this.$vuetify.breakpoint.mdAndUp ? 95 : 55
    },
    isScrolled() {
      return this.offset >= 0.75
    },
    opacity() {
      if (this.headerOpacity) return this.headerOpacity
      return this.offset < 0 ? 0 : this.offset > 1 ? 1 : this.offset
    },
  },
  methods: {
    onScroll(scroll) {
      this.offset =
        window.scrollY / this.headerHeight + this.headerStartingOpacity
    },
  },
}
</script>

<style lang="scss" scoped>
.main-layout {
  padding: 0 !important;
}
.banner-layout {
  transform: translateY(0px);
  left: 0px;
  right: 0px;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 5;
}
</style>