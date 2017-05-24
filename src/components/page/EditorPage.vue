<template>
 <div>
   <page-title title='EditorPage'></page-title>

   <quill-editor ref="myTextEditor"
               v-model="content"
               :config="editorOption"
               @blur="onEditorBlur($event)"
               @focus="onEditorFocus($event)"
               @ready="onEditorReady($event)">

   </quill-editor>
   <div class="html ql-editor" v-html="content"></div>
 </div>
</template>

<script>
import pageTitle from '../../components/common/pageTitle'
import { quillEditor } from 'vue-quill-editor';
 export default{
   components: {
      pageTitle,quillEditor
   },
   data() {
     return {
       content:'<h2>开始编辑</h3>',
       editorOption: {}
     }
   },
   methods: {
     onEditorBlur(editor) {
          console.log('editor blur!', editor)
     },
      onEditorFocus(editor) {
          console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
          console.log('editor ready!', editor)
      }
   },
   computed: {
       editor() {
           return this.$refs.myTextEditor.quillEditor;
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
.ql-container .ql-editor {
  min-height: 20em;
  padding-bottom: 1em;
  max-height: 25em;
}
.html {
  height: 9em;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-top: none;
  resize: vertical;
  background-color:#fff;
}

</style>
