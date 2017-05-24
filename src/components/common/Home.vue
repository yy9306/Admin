<template>
  <div class="wrapper">
     <v-header></v-header>
     <side-bar></side-bar>
     <div class="content">
        <router-view></router-view>
     </div>
  </div>
</template>

<script>
import vHeader from '../../components/common/header'
import sideBar from '../../components/common/sidebar'
export default {
  data() {
     return {
         
     }
  },
  components: {
    vHeader,sideBar
  }
}
</script>

<style>
</style>
