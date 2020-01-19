<template>
  <div class="container">
    <h2>Login</h2>
     <hr>
      <div class="text-left">
      <h3>Enter Phone No</h3>
      <p class="text-primary">Pease enter your phone no to login</p>
      
      <div>
        <vue-tel-input></vue-tel-input>
        <br>
        <button to="/home" 
        @click="showModal = true"
        class="btn btn-dark form-control">Proceed</button>
        <router-link to="register">Not a user click here to register</router-link>
      </div>
      </div>  

<div id="app">
  <div v-if="showModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Verify Mobole No</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" @click="showModal = false">&times;</span>
                </button>
              </div>
              <div class="modal-body">
               <input type="text"
               placeholder="Enter Otp"
                class="form-control">
              </div>
              <div class="modal-footer">
                
                <router-link 
                to="/home"
                type="button" class="btn btn-primary">Submit</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  
  </div>

    </div>
  </div>
</template>

<script>
import { VueTelInput } from 'vue-tel-input'

export default {
 components: {
    VueTelInput,
  },
   data() {
     return{
    showModal: false
     }
  },
  methods(){
    this.showModal=true
  }
  
}
</script>
<style>
h2{
  color: #133a01
}
hr{
  border-color: black
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
