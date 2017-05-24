<template>
  <div class="">
     <page-title title='DashBoard'></page-title>
     <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <el-card class="box-card">
            <todo-list></todo-list>
          </el-card>
        </el-col>
     </el-row>
  </div>
</template>

<script>
import pageTitle from '../../components/common/pageTitle'
import TodoList from '../../components/TodoList/TodoList'
export default{
  components: {
    TodoList,pageTitle
  }
}
</script>

<style scoped>
.el-col{
    margin-bottom:16px;
}
</style>
