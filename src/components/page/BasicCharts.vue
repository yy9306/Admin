<template>
  <div class="">
     <page-title title='BasicCharts'></page-title>
     <el-row :gutter="20">
       <el-col :xs="24" :sm="24" :md="8" :lg="8">
         <el-card class="box-card">
           <bar-chart></bar-chart>
         </el-card>
       </el-col>
       <el-col :xs="24" :sm="24" :md="8" :lg="8">
         <el-card class="box-card">
            <line-chart></line-chart>
         </el-card>
       </el-col>
       <el-col :xs="24" :sm="24" :md="8" :lg="8">
         <el-card class="box-card">
            <redar-chart></redar-chart>
         </el-card>
       </el-col>
     </el-row>

     <el-row :gutter="20">
       <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <el-card class="box-card">
              <pie-chart></pie-chart>
          </el-card>
       </el-col>
       <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <el-card class="box-card">
             <funnel-chart></funnel-chart>
          </el-card>
       </el-col>
     </el-row>
  </div>
</template>

<script>
 import pageTitle from '../../components/common/pageTitle'
 import lineChart from '../../components/charts/lineChart'
 import barChart from '../../components/charts/barChart'
 import redarChart from '../../components/charts/redarChart'
 import pieChart from '../../components/charts/pieChart'
 import funnelChart from '../../components/charts/funnelChart'
 export default{
   components: {pageTitle,lineChart,barChart,redarChart,pieChart,funnelChart}
 }
</script>

<style scoped>
.el-col{
  margin-bottom:16px;
}
.material-icons{
  font-size:80px;
  color:#ddd;
}
.cart-string{
  height:100px;
  padding-top:10px;
  font-size:1.1rem;
}
</style>
