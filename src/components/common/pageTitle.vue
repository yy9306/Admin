<template>
   <div class="pageTitle">
     <div class="pt-left">
        <h2>{{title.toUpperCase()}}</h2>
     </div>
     <div class="pt-right">
        <span class="pt-home"><router-link to="/DashBoard">Home</router-link></span>
        <span class="pt-line"> / </span>
        <span class="pt-page">{{title}}</span>
     </div>
   </div>
</template>

<script>
 export default{
   data() {
     return {

     }
   },
   props: {
     title: {
       type: String
     }
   }
 }
</script>

<style scoped>
.pageTitle{
    clear:both;
    height:55px;

}
.pt-left{
    float:left;
}
.pt-right{
    float:right;
}
.pt-Home{
    font-size:20px;
}
.pt-line{
    color:#ccc;
}
a{
    color:#209e91;
}
</style>
