<template>
  <div class="anim_container">

      <div class="icon icon_phone"></div>

      <div class="plus one">+</div>

      <div class="icon icon_delivery"></div>

      <div class="equals">=</div>

      <div class="icon icon_pizza"></div>
    
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .anim_container {
    position: relative;
    height: 200px;
  }

  .icon {
    background-size: cover !important;
    position: absolute;
  }

  .plus {
    position: relative;
    font-size: 160px;
    color: #fff;
    top: 90px;
    left: -20%;
  }

  .equals {
    position: relative;
    font-size: 160px;
    color: #fff;
    top: 69px;
    left: 20%;
  }

  .icon_phone {
    background: url('../../assets/images/icons/icon-phone.png');
    width: 100px;
    height: 100px;
    top: 40px;
    left: 5%;
  }

  .icon_delivery {
    background: url('../../assets/images/icons/icon-delivery.png');
    width: 200px;
    height: 200px;
    top: -5px;
    right: 40%;
  }

    .icon_pizza {
    background: url('../../assets/images/icons/icon-pizza.png');
    width: 200px;
    height: 200px;
    top: -20px;
    right: 2%;
  }
  
</style>