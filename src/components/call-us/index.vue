<template>
  <div class="call_us_container">
    <div class="container">
      <div class="first" v-scroll-reveal.reset="{delay:200, scarle: 2}">
        <h1>Hungry ?</h1>
      </div>
      <div class="second">
        <comp-animation />  
      </div>
      <div class="third" v-scroll-reveal.reset="{delay:600, scarle: 2}">
        <span>Give us a call </span><span>010-123-0101</span>
      </div>
    </div>
  </div>
</template>

<script>
  import compAnimation from './animation.vue';

  export default {
    components: {
      compAnimation
    }
  }
</script>