<template>
  <div class="">
      <page-title title='forminput'></page-title>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <el-card class="box-card">
            STANDARD FIELDS
            <hr>
            Text
            <el-input placeholder="请输入内容"></el-input>
            With Icon
            <el-input placeholder="带图标的输入框"  icon="search"></el-input>
            Disabled Input
            <el-input placeholder="请输入内容" :disabled="true"></el-input>
            Textarea
            <el-input placeholder="请输入内容" type="textarea" :rows="2"></el-input>
            Small Input
            <el-input placeholder="请输入内容" size="small"></el-input>
            Large Input
            <el-input placeholder="请输入内容" size="large"></el-input>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <el-card class="box-card">
            EXAMPLE FORM<hr>
            <el-form ref="form" label-width="80px" :model="form">
              <el-form-item label="活动名称">
                 <el-input></el-input>
              </el-form-item>
              <el-form-item label="活动时间">
                <el-col  :span="12">
                   <el-date-picker type="date" v-model="form.date1" placeholder="选择日期"  style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col :span="12">
                  <el-time-picker type="fixed-time" v-model="form.date2" placeholder="选择时间"  style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="活动性质">
                 <el-checkbox-group v-model="form.type">
                   <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                   <el-checkbox label="地推活动" name="type"></el-checkbox>
                 </el-checkbox-group>
              </el-form-item>
              <el-form-item>
                 <el-button type="primary" @click="onSubmit">立即创建</el-button>
                 <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <el-card class="box-card">
            Time PICKER<hr>
            <el-time-select style="width:100%; margin-bottom:20px" v-model="value1" placeholder="选择时间"  :picker-options="{start: '08:30',step: '00:15',end: '18:30'}">
            </el-time-select>
            <el-time-select
                placeholder="起始时间"
                style="width: 49%;"
                v-model="startTime"
                :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
                }">
            </el-time-select>
            <el-time-select
                placeholder="结束时间"
                v-model="endTime"
                style="width: 49%;"
                :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30',
                minTime: startTime
                }">
            </el-time-select><br/><br/>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <el-card class="box-card">
             SELECTS <hr>
              正常选项
             <el-select v-model="value4"  placeholder="请选择" style="width:100%">
               <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
             </el-select>
             有禁用项
             <el-select v-model="value2"  placeholder="请选择" style="width: 100%">
               <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled">
                </el-option>
             </el-select>
             禁用状态
             <el-select v-model="value2" disabled placeholder="请选择" style="width: 100%">
               <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled">
                </el-option>
             </el-select>
             多选状态
             <el-select v-model="value2" multiple  placeholder="请选择" style="width: 100%">
               <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled">
                </el-option>
             </el-select>
             分组
             <el-select v-model="value7" placeholder="请选择" style="width:100%">
                <el-option-group
                  v-for="group in options3"
                  :key="group.label"
                  :label="group.label">
                    <el-option
                      v-for="item in group.options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-option-group>
              </el-select>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <el-card class="box-card">
             INPUT GROUPS <hr>
             <el-input placeholder="请输入内容" v-model="input3">
                <template slot="prepend">Http://</template>
             </el-input>
             <el-input placeholder="请输入内容" v-model="input4" style="margin-top:15px">
                <template slot="append">.com</template>
             </el-input>
             <el-input placeholder="请输入内容" v-model="input5" style="margin-top:15px">
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                  <el-option label="餐厅名" value="1"></el-option>
                  <el-option label="订单号" value="2"></el-option>
                  <el-option label="用户电话" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="search"></el-button>
              </el-input>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <el-card class="box-card">
             RATE <hr>
             用户打分
             <el-rate
                v-model="value8"
                show-text>
             </el-rate>
              半星
              <el-rate
                v-model="value5"
                disabled
                show-text
                text-color="#ff9900"
                text-template="{value}">
              </el-rate>
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
       form: {
         date1: '',
         date2: '',
         type: []
       },
       value1: '',
       startTime: '',
       endTime: '',
       options: [{
           value: '选项1',
           label: '黄金糕'
         }, {
           value: '选项2',
           label: '双皮奶'
         }, {
           value: '选项3',
           label: '蚵仔煎'
         }, {
           value: '选项4',
           label: '龙须面'
         }, {
           value: '选项5',
           label: '北京烤鸭'
         }],
         options1: [{
             value: '选项1',
             label: '黄金糕'
           }, {
             value: '选项2',
             label: '双皮奶',
             disabled: true
           }, {
             value: '选项3',
             label: '蚵仔煎'
           }, {
             value: '选项4',
             label: '龙须面'
           }, {
             value: '选项5',
             label: '北京烤鸭'
           }],
           options3: [{
              label: '热门城市',
              options: [{
                value: 'Shanghai',
                label: '上海'
              }, {
                value: 'Beijing',
                label: '北京'
              }]
            }, {
              label: '城市名',
              options: [{
                value: 'Chengdu',
                label: '成都'
              }, {
                value: 'Shenzhen',
                label: '深圳'
              }, {
                value: 'Guangzhou',
                label: '广州'
              }, {
                value: 'Dalian',
                label: '大连'
              }]
            }],
         value4: "",
         value2: "",
         value5: 3.7,
         value7: "",
         value8: null,
         input3: '',
         input4: '',
         input5: '',
         select: ""
     }
   },
   methods: {
     onSubmit() {
       console.log(1222)
     }
   }
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
.box-card{
  font-size:12px;
  line-height:26px;
}
.box-card hr{
  height:1px;
  border:none;
  border-top:1px  dashed #ccc;
  margin-bottom:10px;
}
.el-select .el-input {
  width: 140px;
 }
</style>
