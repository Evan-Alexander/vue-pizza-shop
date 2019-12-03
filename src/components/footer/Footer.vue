<template>
  <footer>
    <div class="container">
      <div>
        <img :src="logoIcon">
        <div>Call Us</div>
        <div>123-456-1818</div>
      </div>
    </div>
  </footer>
</template>

<script>
  import Logo from '../../assets/images/logo.png';

  export default {
    data() {
      return {
        logoIcon: Logo
      }
    }
  }
</script>