<template>
    <div>
 <carousel-3d>
    <slide v-for="(slide, i) in packages" :key="slide.package_id" :index="i">
      <img :src="'https://file_server.maharah.neumtech.net/api/Storages/Packages/download/'+slide.file_name" alt="55">
    </slide>
  </carousel-3d>
    </div>
</template>

<script>
import axios from 'axios'
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
    data(){
      return{
      packages:[],
      visible: false,
      }
    },
  components: {
  Carousel3d,
  Slide
  },
  created(){
  this.visible= true,
  axios.get('http://customer_server.maharah.neumtech.net/api/Customers/homeData?access_token=6w9gKvM9bos9AEbiEvHOhmfWhtP8Yi0XWF2JJ9taXSFdaHFgoDJgRpWYXMjOYoey')
  .then((res)=>{
    
    this.packages = res.data.data.packages
    this.visible= false
    //this.categorys=res.data.data.category
  })
  .catch((err) =>
  {
    console.log(err)
    this.visible= false
  })
  
  }

}
</script>

<style scoped>

</style>