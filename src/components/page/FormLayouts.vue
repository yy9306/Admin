<template>
  <div class="">
      <page-title title='formlayouts'></page-title>
      <el-row>
        <el-col :span="24">
            <el-card class="box-card">
                InlineForm-行布局
                <hr>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="审批人">
                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                  </el-form-item>
                  <el-form-item label="活动区域">
                    <el-select v-model="formInline.region" placeholder="活动区域">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item><el-form-item>
                    <el-button type="success" @click="onSubmit">查询</el-button>
                  </el-form-item>
                </el-form>
            </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="8" :lg="8">
            <el-card class="box-card card-a">
                Right Layout Form
                <hr>
                <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" style="margin-top:30px;">
                  <el-form-item label="名称">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                  <el-form-item label="活动区域">
                    <el-input v-model="formLabelAlign.region"></el-input>
                  </el-form-item>
                  <el-form-item label="活动形式">
                    <el-input v-model="formLabelAlign.type"></el-input>
                  </el-form-item>
                </el-form>
            </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8">
            <el-card class="box-card card-a">
                Right Layout Form
                <hr>
                <el-form :label-position="labelPosition1" label-width="80px" :model="formLabelAlign" style="margin-top:30px;">
                  <el-form-item label="名称">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                  <el-form-item label="活动区域">
                    <el-input v-model="formLabelAlign.region"></el-input>
                  </el-form-item>
                  <el-form-item label="活动形式">
                    <el-input v-model="formLabelAlign.type"></el-input>
                  </el-form-item>
                </el-form>
            </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8">
            <el-card class="box-card card-a">
                Right Layout Form
                <hr>
                <el-form :label-position="labelPosition2" label-width="80px" :model="formLabelAlign">
                  <el-form-item label="名称">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                  <el-form-item label="活动区域">
                    <el-input v-model="formLabelAlign.region"></el-input>
                  </el-form-item>
                  <el-form-item label="活动形式">
                    <el-input v-model="formLabelAlign.type"></el-input>
                  </el-form-item>
                </el-form>
            </el-card>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import pageTitle from '../../components/common/pageTitle'
 export default{
   components: {pageTitle},
   data() {
     return {
       formInline: {
          user: '',
          region: ''
        },
        labelPosition: 'right',
        labelPosition1: 'left',
        labelPosition2: 'top',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
     }
   },
   methods: {
     onSubmit() {
       console.log('submit!');
     }
   }
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
.card-a{
  height:300px;
}
</style>
