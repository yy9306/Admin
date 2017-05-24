<template>
  <div class="">
    <page-title title='BasicTables'></page-title>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-card class="box-card">
          HOVER ROWS<hr>
          <hover-row></hover-row>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-card class="box-card">
          STRIPED  ROWS<hr>
          <striped-row></striped-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-card class="box-card">
          BORDERED TABLE<hr>
          <border-table></border-table>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-card class="box-card">
          CONDENSED TABLE<hr>
          <condensed-table></condensed-table>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-card class="box-card">
          FIXED HEADER TABLE<hr>
          <fixed-header-table></fixed-header-table>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <el-card class="box-card">
          FIXED COLUMN TABLE<hr>
          <fixed-column-table></fixed-column-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
 import pageTitle from '../../components/common/pageTitle'
 import HoverRow from '../../components/tables/HoverRow'
 import StripedRow from '../../components/tables/StripedRow'
 import borderTable from '../../components/tables/borderTable'
 import CondensedTable from '../../components/tables/CondensedTable'
 import FixedHeaderTable from '../../components/tables/FixedHenderTable'
 import FixedColumnTable from '../../components/tables/FixedColumnTable'
 export default{
   components: {pageTitle,HoverRow,StripedRow,borderTable,CondensedTable,FixedHeaderTable,FixedColumnTable}
 }
</script>

<style scoped>
.el-col{
    margin-bottom:16px;
}
.box-card{
    font-size:12px;
}
.box-card hr{
    height:1px;
    border:none;
    border-top:1px  dashed #ccc;
    margin-bottom:10px;
    margin-top:6px;
}
</style>
