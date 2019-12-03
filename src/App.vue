<template>

<div>
  <comp-header />
  <div>
    <comp-featured />
    <comp-menu />
  </div>
  <comp-footer />
</div>

</template>

<script>
import compHeader from './components/header/Header.vue'
import compFooter from './components/footer/Footer.vue'
import compFeatured from './components/featured/index.vue'
import compMenu from './components/menu/index.vue'

export default {
  name: 'app',
  components: {
    compHeader,
    compFooter,
    compFeatured,
    compMenu
  }
}
</script>

<style>
  @import './assets/style.css';
</style>
