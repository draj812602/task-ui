<template>

    <div>  
    <div>
        <Navbar /><br>
        <Packages />
        <Category />
    </div>  
       <br>
       <br>
       <br>
       <br>
   <bottomNavbar>
   </bottomNavbar>

</div>
</template>
<script>

import Navbar from '../components/Navbar'
import Category from '../components/category'
import Packages from '../components/Package'
import bottomNavbar from '../components/bottomNavbar'
export default {
    
    components:{
     Navbar,
     Category,
     Packages,
     bottomNavbar
    },
  
}
</script>
<style scoped>

</style>