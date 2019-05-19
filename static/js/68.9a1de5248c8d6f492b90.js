webpackJsonp([68],{1028:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"point-type"},[n("span",[t._v("所属项目：")]),t._v(" "),n("el-select",{attrs:{placeholder:"请选择项目",size:"small"},on:{change:t.changeProject},model:{value:t.currentProject,callback:function(e){t.currentProject=e},expression:"currentProject"}},t._l(t.proList,function(t){return n("el-option",{key:t.id,attrs:{value:t.id,label:t.label}})}),1),t._v(" "),n("el-input",{staticStyle:{float:"right",width:"190px"},attrs:{size:"small",clearable:"",placeholder:"请输入类型名称（回车）"},on:{clear:t.fetchPointTypeList},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.fetchPointTypeList(e)}},model:{value:t.filterText,callback:function(e){t.filterText="string"==typeof e?e.trim():e},expression:"filterText"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},slot:"suffix"})]),t._v(" "),n("div",{staticStyle:{marginTop:"25px"}},[n("el-button",{attrs:{size:"small",type:"primary"},nativeOn:{click:function(e){return t.openEditDialog(-1)}}},[t._v("\n      新增\n    ")]),t._v(" "),n("el-button",{attrs:{size:"small",type:"danger"},nativeOn:{click:function(e){return t.handleDelete(e)}}},[t._v("\n      删除\n    ")])],1),t._v(" "),n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],attrs:{"element-loading-text":"加载中..."}},[n("div",{staticClass:"table-title"},[t._v("\n      状态量：\n    ")]),t._v(" "),n("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData1},on:{"selection-change":t.handleSelectionChange1}},[n("el-table-column",{attrs:{type:"selection",width:"55",selectable:function(t,e){return 0!==t.Edit}}}),t._v(" "),n("el-table-column",{attrs:{prop:"TypeName",label:"类型名称"}}),t._v(" "),n("el-table-column",{attrs:{prop:"Value",label:"状态值"}}),t._v(" "),n("el-table-column",{attrs:{prop:"UpdateTime",label:"最后修改时间"}}),t._v(" "),n("el-table-column",{attrs:{prop:"Operator",label:"修改人"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[0!==e.row.Edit?n("el-button",{attrs:{size:"small",type:"text"},nativeOn:{click:function(n){return t.openEditDialog(e.row.ID)}}},[t._v("\n            编辑\n          ")]):t._e()]}}])})],1),t._v(" "),n("div",{staticClass:"table-title"},[t._v("\n      模拟量：\n    ")]),t._v(" "),n("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData2},on:{"selection-change":t.handleSelectionChange2}},[n("el-table-column",{attrs:{type:"selection",width:"55",selectable:function(t,e){return 0!==t.Edit}}}),t._v(" "),n("el-table-column",{attrs:{prop:"TypeName",label:"类型名称"}}),t._v(" "),n("el-table-column",{attrs:{prop:"Value",label:"单位"}}),t._v(" "),n("el-table-column",{attrs:{prop:"UpdateTime",label:"最后修改时间"}}),t._v(" "),n("el-table-column",{attrs:{prop:"Operator",label:"修改人"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[0!==e.row.Edit?n("el-button",{attrs:{size:"small",type:"text"},nativeOn:{click:function(n){return t.openEditDialog(e.row.ID)}}},[t._v("\n            编辑\n          ")]):t._e()]}}])})],1)],1),t._v(" "),n("el-dialog",{attrs:{title:"新增/修改点位类型",visible:t.dialogVisible,width:"450px"},on:{"update:visible":function(e){t.dialogVisible=e},close:t.dialogClose}},[n("el-form",{ref:"form",staticStyle:{margin:"0 20px"},attrs:{model:t.form,rules:t.formRules,size:"medium","label-width":"80px"}},[n("el-form-item",{attrs:{label:"类型名称",prop:"name"}},[n("el-input",{staticStyle:{width:"200px"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name","string"==typeof e?e.trim():e)},expression:"form.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"数值类型",prop:"type"}},[n("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择数值类型"},on:{change:t.changeValueType},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[n("el-option",{attrs:{label:"状态量",value:1}}),t._v(" "),n("el-option",{attrs:{label:"模拟量",value:2}})],1)],1),t._v(" "),2===t.form.type?n("div",[n("el-form-item",{attrs:{label:"单位"}},[n("el-button",{attrs:{type:"text"},nativeOn:{click:function(e){return t.addFormItem(e)}}},[t._v("\n            添加\n          ")])],1),t._v(" "),t._l(t.form.list,function(e,i){return n("el-form-item",{key:e.key,staticClass:"custom-form-item1",attrs:{rules:{required:!0,message:"请输入单位",trigger:"blur"},prop:"list."+i+".unit"}},[n("el-input",{model:{value:e.unit,callback:function(n){t.$set(e,"unit","string"==typeof n?n.trim():n)},expression:"item.unit"}}),t._v(" "),n("el-button",{staticClass:"btn-danger",attrs:{type:"text"},nativeOn:{click:function(e){return t.delFormItem(i)}}},[t._v("\n            删除\n          ")])],1)})],2):t._e(),t._v(" "),1===t.form.type?n("div",[n("el-form-item",{attrs:{label:"状态值"}},[n("el-button",{attrs:{type:"text"},nativeOn:{click:function(e){return t.addFormItem(e)}}},[t._v("\n            添加\n          ")])],1),t._v(" "),t._l(t.form.list,function(e,i){return n("div",{key:i,staticClass:"custom-form-item2"},[n("el-form-item",{attrs:{rules:{validator:t.checkValue,trigger:"blur"},prop:"list."+i+".value","label-width":"0"}},[n("el-input",{attrs:{placeholder:"数值"},model:{value:e.value,callback:function(n){t.$set(e,"value","string"==typeof n?n.trim():n)},expression:"state.value"}})],1),t._v(" "),n("span",[t._v(":")]),t._v(" "),n("el-form-item",{attrs:{rules:[{required:!0,message:"请输入状态描述",trigger:"blur"},{validator:t.checkLabel,trigger:"blur"}],prop:"list."+i+".showvalue","label-width":"0"}},[n("el-input",{attrs:{placeholder:"状态描述"},model:{value:e.showvalue,callback:function(n){t.$set(e,"showvalue","string"==typeof n?n.trim():n)},expression:"state.showvalue"}})],1),t._v(" "),n("el-button",{staticClass:"btn-danger",attrs:{type:"text"},nativeOn:{click:function(e){return t.delFormItem(i)}}},[t._v("\n            删除\n          ")])],1)})],2):t._e()],1),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"small"},nativeOn:{click:function(e){return t.submit(e)}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]}},565:function(t,e,n){n(983),n(982);var i=n(38)(n(893),n(1028),"data-v-2c3ed75c",null);t.exports=i.exports},722:function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"e",function(){return a}),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return l}),n.d(e,"d",function(){return s}),n.d(e,"g",function(){return c}),n.d(e,"h",function(){return u}),n.d(e,"i",function(){return p}),n.d(e,"j",function(){return f}),n.d(e,"f",function(){return m});var i=n(32),r=function(t){return i.a.post("/api/PointType/PointTypeInsert",t)},a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return i.a.get("/api/PointType/PointTypeList",{params:{projectId:t,TypeName:e}})},o=function(t){return i.a.post("/api/PointType/PointTypeDelete",t)},l=function(t,e){return i.a.get("/api/PointType/PointTypeQuery",{params:{ID:t,projectId:e}})},s=function(t){return i.a.post("/api/PointType/PointTypeUpdate",t)},c=function(t){return i.a.post("/api/EditPoint/GetModePointType",t)},u=function(t){return i.a.post("/api/EditPoint/GetModePointUnit",t)},p=function(t){return i.a.post("/api/EditPoint/updateDmpSetS",t)},f=function(t){return i.a.post("/api/EditPoint/QueryModelSWList",t)},m=function(t){return i.a.post("/api/EditPoint/GetProjectdmpTable",t)}},893:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(132),r=n.n(i),a=n(722);e.default={data:function(){var t=this,e=function(e,n,i){var r=t.isInteger(n);if(r.res){var a=t.form.list.map(function(t){return t.value.toString()});a.indexOf(n)!==a.lastIndexOf(n)?i(new Error("值不可重复")):i()}else i(new Error(r.msg))},n=function(e,n,i){var r=t.form.list.map(function(t){return t.showvalue.toString()});r.indexOf(n)!==r.lastIndexOf(n)?i(new Error("描述不可重复")):i()};return{currentProject:"0"===this.$store.state.app.pid?this.$store.state.app.proList[0].id:this.$store.state.app.pid,pointType:"",filterText:"",tableData1:[],tableData2:[],multipleSelection1:[],multipleSelection2:[],tableLoading:!1,currentTypeId:-1,dialogVisible:!1,form:{name:"",type:1,list:[]},formRules:{name:[{required:!0,message:"请输入类型名称",trigger:"blur"},{min:1,max:25,message:"长度在 1 到 25 个字符",trigger:"blur"}],type:[{required:!0,message:"请选择数值类型",trigger:"change"}]},checkValue:e,checkLabel:n}},computed:{proList:function(){return this.$store.state.app.proList},project:function(t){return this.$store.state.app.pid}},watch:{project:function(t){this.currentProject=t,this.fetchPointTypeList()}},mounted:function(){this.fetchPointTypeList()},methods:{changeProject:function(t){this.currentProject=t,this.fetchPointTypeList()},handleSelectionChange1:function(t){this.multipleSelection1=t},handleSelectionChange2:function(t){this.multipleSelection2=t},handleDelete:function(){var t=this;this.$confirm("确认要删除选中的点位类型？","提示",{type:"warning"}).then(function(){var e={},i=[].concat(r()(t.multipleSelection1.map(function(t){return t.ID})),r()(t.multipleSelection2.map(function(t){return t.ID})));e.projectId=t.currentProject,e.ID=i,n.i(a.a)(e).then(function(e){0===e.data?t.$message.error("点位类型删除失败"):1===e.data?(t.$message.success("点位类型删除成功"),t.fetchPointTypeList()):t.$message("选中的点位类型中某些已被使用，点位类型不可删除")}).catch(function(e){t.$message.error("删除失败")})})},openEditDialog:function(t){var e=this;this.currentTypeId=t,-1!==t&&n.i(a.b)(t,this.currentProject).then(function(t){var n=JSON.parse(t.data);e.form.name=n.TypeName,e.form.type=n.type,e.form.list=n.list}).catch(function(t){}),this.dialogVisible=!0},changeValueType:function(t){this.form.list=[]},addFormItem:function(){2===this.form.type?this.form.list.push({unit:"",key:Date.now()}):this.form.list.push({showvalue:"",value:""})},delFormItem:function(t){this.form.type,this.form.list.splice(t,1)},submit:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;if(!t.form.list.length)return 1===t.form.type?t.$message("请至少添加一个状态值"):t.$message("请至少添加一个单位"),!1;var i={};i.TypeName=t.form.name,i.type=t.form.type,i.projectId=t.currentProject,i.list=t.form.list,i.ID=-1===t.currentTypeId?"":t.currentTypeId,-1===t.currentTypeId?n.i(a.c)(i).then(function(e){e.data?(t.$message.success("点位类型添加成功"),t.fetchPointTypeList()):t.$message.error("添加失败"),t.fetchPointTypeList()}).catch(function(t){}).finally(function(){t.dialogVisible=!1}):n.i(a.d)(i).then(function(e){e.data?(t.$message.success("点位类型修改成功"),t.fetchPointTypeList()):t.$message.error("修改失败"),t.fetchPointTypeList()}).catch(function(t){}).finally(function(){t.dialogVisible=!1})})},dialogClose:function(){this.form.name="",this.form.type=1,this.form.list=[]},fetchPointTypeList:function(){var t=this;this.tableLoading=!0,n.i(a.e)(this.currentProject,this.filterText).then(function(e){var n=JSON.parse(e.data);t.tableData2=n.Analog,t.tableData1=n.State}).catch(function(t){}).finally(function(){t.tableLoading=!1})},isInteger:function(t){return""===t?{res:!1,msg:"必填"}:parseInt(t,10)!=t?{res:!1,msg:"必须是整数"}:{res:!0}}}}},918:function(t,e,n){e=t.exports=n(539)(),e.push([t.i,".point-type .custom-form-item1 .el-form-item__content{display:-ms-flexbox;display:flex}.point-type .custom-form-item1 .el-input{-ms-flex:0 0 200px;flex:0 0 200px}.point-type .custom-form-item1 .el-button{-ms-flex:0 0 60px;flex:0 0 60px}.point-type .custom-form-item2{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;margin-left:80px}.point-type .custom-form-item2>span{-ms-flex:0 0 20px;flex:0 0 20px;text-align:center;margin-top:10px}.point-type .custom-form-item2 .el-button{-ms-flex:0 0 50px;flex:0 0 50px}.point-type .custom-form-item2 div:first-child{-ms-flex:2;flex:2}.point-type .custom-form-item2 div:nth-child(3){-ms-flex:3;flex:3}",""])},919:function(t,e,n){e=t.exports=n(539)(),e.push([t.i,".point-type[data-v-2c3ed75c]{background:#fff;padding:24px 32px}.table-title[data-v-2c3ed75c]{font-weight:700;font-size:15px;margin-top:25px}",""])},982:function(t,e,n){var i=n(918);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(540)("03cffbc1",i,!0)},983:function(t,e,n){var i=n(919);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(540)("439f7232",i,!0)}});