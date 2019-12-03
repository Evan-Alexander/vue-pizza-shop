<template>

<div>
  <comp-header />
  <div>
    <comp-featured />
  </div>
  <comp-footer />
</div>

</template>

<script>
import compHeader from './components/header/Header.vue'
import compFooter from './components/footer/Footer.vue'
import compFeatured from './components/featured/index.vue'

export default {
  name: 'app',
  components: {
    compHeader,
    compFooter,
    compFeatured
  }
}
</script>

<style>
  @import './assets/style.css';
</style>
