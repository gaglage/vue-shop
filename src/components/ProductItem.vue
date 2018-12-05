<template>
  <div>
    <b-card
      :title="product.name"
      :img-src="product.picture"
      :img-alt="product.name"
      img-top
      style="max-width:30rem"
      class="mb-2"
    ></b-card>
    <b-button block variant="warning" @click="$emit('addToCart', product)">Añadir al carrito</b-button>
  </div>
</template>

<script>
export default {
    props:{
        product:{
            type:Object,
            required:true

        }
    }
};
</script>

<style scoped>
</style>