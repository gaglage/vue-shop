<template>
  <div>{{products.length}}</div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  mounted() {
    this.fetchProducts();
  },
  data(){
      return {
          paginate: ['products'],
          perPage: 3
      }
  },
  computed: {
    ...mapState("products", ["products"])
  },
  methods: {
    ...mapActions("products", ["fetchProducts"])
  }
};
</script>

<style scoped>
</style>