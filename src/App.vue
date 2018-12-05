<template>
  <div id="app">
    <shop-layout>
      <template slot="product-list">
          <product-list></product-list>
      </template>
      <template slot="cart">
          <cart></cart>
      </template>
    </shop-layout>
  </div>
</template>

<script>
import Cart from "@/components/Cart";
import ProductList from "@/components/ProductList";
import ShopLayout from "@/components/ShopLayout";

export default {
  name: "app",
  components: {
    Cart,
    ProductList,
    ShopLayout
  }
};
</script>


