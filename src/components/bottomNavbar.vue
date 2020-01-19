<template>
    <div class="row container-fluid" id="footer">
        <div class="col-3 col-sm-3 col-lg-3col-xl-3">
      <span><i class="fas fa-home fa-2x"></i>   </span>
  </div>
  <div class="col-3 col-sm-3 col-lg-3col-xl-3">
      <span><i class="fas fa-shopping-cart fa-2x"></i></span>
  </div>
  <div class="col-3 col-sm-3 col-lg-3col-xl-3">
      <span><i class="fas fa-user-alt fa-2x"></i></span>
  </div>
  <div class="col-3 col-sm-3 col-lg-3col-xl-3">
      <span><i class="fas fa-bars fa-2x"></i></span>
  </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 8%;
    background-color: #c8ccc9

}
.col-3{
    margin-top: 10px
}
i{
    color: #353436;
    cursor: pointer;
}
i:hover {
  color: orange
}
</style>>