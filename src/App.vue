<template>
  <div id="app">
    <shop-layout>
      <template slot="product-list">
          <product-list></product-list>
      </template>
      <template slot="cart">
          Carrito
      </template>
    </shop-layout>
  </div>
</template>

<script>
import ShopLayout from "@/components/ShopLayout";
import ProductList from "@/components/ProductList";

export default {
  name: "app",
  components: {
    ShopLayout,
    ProductList
  }
};
</script>


