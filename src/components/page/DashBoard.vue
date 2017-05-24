<template>
   <div class="DashBoard">
      <page-title title='DashBoard'></page-title>
      <div class="clear"></div>
      <el-row :gutter="20">
         <el-col :xs="12" :sm="12" :md="12" :lg="6">
             <el-card class="box-card">
                <el-row :gutter="6">
                  <el-col :xs="24" :sm="8" :md="8" :lg="8">
                     <el-progress type="circle" :percentage="60" :width="80"></el-progress>
                  </el-col>
                  <el-col :xs="24" :sm="11" :md="12" :lg="12">
                      <div class="cart-string">
                          <span>New Visits</span>
                          <span><h2>5,563</h2></span>
                      </div>
                  </el-col>
                  <el-col :xs="24" :sm="5" :md="4" :lg="4">
                     <div>
                         <i class="material-icons">person_outline</i>
                     </div>
                  </el-col>
                </el-row>
             </el-card>
         </el-col>
         <el-col :xs="12" :sm="12" :md="12" :lg="6">
             <el-card class="box-card">
                <el-row :gutter="6">
                  <el-col :xs="24" :sm="8" :md="8" :lg="8">
                     <el-progress type="circle" :percentage="60" :width="80"></el-progress>
                  </el-col>
                  <el-col :xs="24" :sm="11" :md="12" :lg="12">
                      <div class="cart-string">
                          <span>New Visits</span>
                          <span><h2>5,563</h2></span>
                      </div>
                  </el-col>
                  <el-col :xs="24" :sm="5" :md="4" :lg="4">
                    <div>
                        <i class="material-icons">attach_money</i>
                    </div>
                  </el-col>
                </el-row>
             </el-card>
         </el-col>
         <el-col :xs="12" :sm="12" :md="12" :lg="6">
             <el-card class="box-card">
                <el-row :gutter="6">
                  <el-col :xs="24" :sm="8" :md="8" :lg="8">
                      <el-progress type="circle" :percentage="60" :width="80"></el-progress>
                  </el-col>
                  <el-col :xs="24" :sm="11" :md="12" :lg="12">
                      <div class="cart-string">
                          <span>New Visits</span>
                          <span><h2>5,563</h2></span>
                      </div>
                  </el-col>
                  <el-col :xs="24" :sm="5" :md="4" :lg="4">
                      <div>
                          <i class="material-icons">touch_app</i>
                      </div>
                  </el-col>
                </el-row>
             </el-card>
         </el-col>
         <el-col :xs="12" :sm="12" :md="12" :lg="6">
             <el-card class="box-card">
                <el-row :gutter="6">
                  <el-col :xs="24" :sm="8" :md="8" :lg="8">
                      <el-progress type="circle" :percentage="60" :width="80"></el-progress>
                  </el-col>
                  <el-col :xs="24" :sm="11" :md="12" :lg="12">
                      <div class="cart-string">
                          <span>New Visits</span>
                          <span><h2>5,563</h2></span>
                      </div>
                  </el-col>
                  <el-col :xs="24" :sm="5" :md="4" :lg="4">
                      <div>
                          <i class="material-icons">replay</i>
                      </div>
                  </el-col>
                </el-row>
             </el-card>
         </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="24" :lg="12">
          <el-card class="box-chart">
             <pie-chart></pie-chart>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="12">
          <el-card class="box-chart">
             <line-chart></line-chart>
          </el-card>
        </el-col>
      </el-row>

      <!--todoList  & mail & table-->
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="24" :lg="8">
          <el-card class="box-list">
            To Do List<hr>
            <todo-list></todo-list>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8">
          <el-card class="box-list">
            BORDERED TABLE<hr>
            <border-table></border-table>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8">
          <el-card class="box-list">
            Message List<hr>
            <message-list></message-list>
          </el-card>
        </el-col>
      </el-row>
   </div>
</template>

<script>
 import pageTitle from '../../components/common/pageTitle'
 import TodoList from '../../components/TodoList/TodoList'
 import borderTable from '../../components/tables/borderTable'
 import MessageList from '../../components/MessageList/MessageList'
 import pieChart from '../../components/charts/pieChart'
 import lineChart from '../../components/charts/lineChart'
  export default{
   components: {
     pageTitle,TodoList,borderTable,MessageList,pieChart,lineChart
   }
  }
</script>

<style scoped>
.el-col{
    margin-bottom:16px;
    text-align:center;
}
.material-icons{
    font-size:80px;
    color:#ddd;
}
.box-card{
    height:110px;
}
.cart-string{
    height:100px;
    padding-top:10px;
    font-size:1.1rem;

}
.box-chart{
    height:420px;
}
.box-list{
    height:auto;
    text-align:left;
}
.box-list hr{
    height:1px;
    border:none;
    border-top:1px  dashed #ccc;
    margin-bottom:5px;
    margin-top:6px;

}
</style>
