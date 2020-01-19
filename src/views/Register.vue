<template>
  <div class="container">
    <h2>Register</h2>
     <hr>
      <div class="text-left">
      <h3>Create an Account</h3>
      <p class="text-primary">Enter some basic details</p>
      <form>
          <div class="form-group">
              <input type="text" 
              class="form-control"
              placeholder="Enter Full Name">
          </div>
          <div class="form-group">
        <vue-tel-input></vue-tel-input>
          </div>
        
        <div class="form-group">
              <input type="email" 
              class="form-control"
              placeholder="Enter Email Id">
          </div>

        <router-link to="/home" class="btn btn-dark form-control">Proceed</router-link>
        <router-link to="/login">Login</router-link>
      </form>
      </div>
      </div>  
    
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>