<template>
   <div class="">
      <el-table :data="tableData" border stripe width="100%">
        <el-table-column prop="id" label="ID" width="80" ></el-table-column>
        <el-table-column prop="userName" label="Name" width="100"></el-table-column>
        <el-table-column prop="age" label="AGE" width="80"></el-table-column>
        <el-table-column prop="ability" label="ABILITY" width="120"></el-table-column>
        <el-table-column prop="value" label="VALUE"></el-table-column>
      </el-table>
   </div>
</template>


<script>
export default{
  data() {
    return {
      tableData: [{
        id:1,
        userName: 'Xuyang',
        age: '26',
        ability: 'HTML5,PHP',
        value:'80%'
      }, {
        id:2,
        userName: 'Xubo',
        age: '30',
        ability: 'PHP',
        value:'70%'
      }, {
        id:3,
        userName: 'Yangyanen',
        age: '30',
        ability: 'PHP,MySql',
        value:'60%'
      }, {
        id:4,
        userName: 'Xiaotang',
        age: '29',
        ability: 'PHP,DB',
        value:'80%'
      }, {
        id:3,
        userName: 'Wangman',
        age: '24',
        ability: 'PHP,MySql',
        value:'60%'
      }, {
        id:4,
        userName: 'HaiPu',
        age: '35',
        ability: 'Web,DB',
        value:'80%'
      }, {
        id:3,
        userName: 'Panda',
        age: '30',
        ability: 'PHP,MySql',
        value:'60%'
      }]
    }
  }
}
</script>

<style scoped>

</style>
