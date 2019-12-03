<template>

<div>
  <comp-header />
  <div>
    <comp-featured />
    <comp-menu />
    <comp-callUs />
    <comp-newsletter />
  </div>
  <comp-footer />
</div>

</template>

<script>
import compHeader from './components/header/Header.vue'
import compFooter from './components/footer/Footer.vue'
import compFeatured from './components/featured/index.vue'
import compMenu from './components/menu/index.vue'
import compCallUs from './components/call-us/index.vue'
import compNewsletter from './components/newsletter/index.vue'

export default {
  name: 'app',
  components: {
    compHeader,
    compFooter,
    compFeatured,
    compMenu,
    compCallUs,
    compNewsletter
  }
}
</script>

<style>
  @import './assets/style.css';
</style>
