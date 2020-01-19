<template>
    <div class="row text-center container-fluid">
    <loading :active.sync="visible" :can-cancel="true"></loading>
      <div 
          v-for="category in categorys" :key="category.category_id"
          class="col-4 col-4 col-md-3 col-lg-2 col-xl-2 divImages">
    <figure>          
    <img 
       :src="'http://file_server.maharah.neumtech.net/api/Storages/CategoryImages/download/'+category.images.main">
    <figcaption>{{category.category}}</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    data(){
        return{
            visible: false,
            categorys:[]
        }
    }, 
    components: {
    Loading
  },
  created(){
      this.visible = true
     axios.get('https://customer_server.maharah.neumtech.net/api/Customers/homeData?access_token=6w9gKvM9bos9AEbiEvHOhmfWhtP8Yi0XWF2JJ9taXSFdaHFgoDJgRpWYXMjOYoey')
   .then((res)=>{
     this.categorys=res.data.data.category
     this.visible = false
   })
    .catch((err)=>{
        console.log(err)
        this.visible = false
    })
  }
 }
</script>

<style scoped>
.divImages{
    border:1px solid black;
    border-bottom: 1px solid black;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 10px 10px 10px 0px;
    
    
}
img{
    margin-top: 10%
}
.divImages:hover{
background-color:orange
}
</style>