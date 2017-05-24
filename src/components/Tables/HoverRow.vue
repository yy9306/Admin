<template>
  <div class="hoverRow">
     <el-table  :data="tableData" style="width: 100%">
       <el-table-column prop="Browser" label="Browser"></el-table-column>
       <el-table-column prop="Visits" label="Visits"></el-table-column>
       <el-table-column prop="Purchases" label="Purchases"></el-table-column>
       <el-table-column prop="co" label="%"  align="right"></el-table-column>
     </el-table>
  </div>
</template>

<script>
export default{
  data() {
    return {
      tableData: [{
        Browser: 'Google Chrome',
        Visits: '13,392',
        Purchases: '4,214',
        co:'50%'
      }, {
        Browser: 'Mozilla Firefox',
        Visits: '7,873',
        Purchases: '3,031',
        co:'28%'
      }, {
       Browser: 'Internet Explorer',
        Visits: '5,890',
        Purchases: '2,102',
        co:'17%'
      }, {
        Browser: 'Safari',
        Visits: '4,001',
        Purchases: '1,001',
        co:'14%'
      }]
    }
  }
}
</script>

<style scoped>

</style>
