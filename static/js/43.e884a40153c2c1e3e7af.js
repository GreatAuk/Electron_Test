webpackJsonp([43,100,123],{1039:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"permission-select"},[n("el-alert",{directives:[{name:"show",rawName:"v-show",value:e.role&&0===e.role.CompanyId,expression:"role && role.CompanyId === 0"}],attrs:{title:'"系统角色"是默认角色，无法编辑，请到『关联人员』选项卡中选择角色关联的人员',type:"warning"}}),e._v(" "),e.role&&0!==e.role.CompanyId?n("div",{staticStyle:{margin:"15px 0"}},[n("el-radio-group",{attrs:{size:"small"},model:{value:e.groupType,callback:function(t){e.groupType=t},expression:"groupType"}},[n("el-radio-button",{attrs:{label:"business"}},[e._v("\n        业务平台\n      ")]),e._v(" "),n("el-radio-button",{attrs:{label:"data"}},[e._v("\n        数据平台\n      ")]),e._v(" "),n("el-radio-button",{attrs:{label:"dataScreen"}},[e._v("\n        数据大屏\n      ")])],1),e._v(" "),n("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},nativeOn:{click:function(t){return e.submit(t)}}},[e._v("\n      保存修改\n    ")])],1):e._e(),e._v(" "),n("el-tree",{directives:[{name:"show",rawName:"v-show",value:e.role&&0===e.role.CompanyId,expression:"role && role.CompanyId === 0"},{name:"loading",rawName:"v-loading",value:e.treeLoading,expression:"treeLoading"}],ref:"tree",staticStyle:{margin:"30px 40px"},attrs:{data:e.treeData,"show-checkbox":"","node-key":"FuncId","default-expand-all":"","default-checked-keys":e.defaultChecked,props:{children:"Children",label:"FuncName"}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.node;return n("span",{class:["custom-tree-node",3===a.level?"lv3-node":null]},[n("span",[e._v(e._s(a.label))])])}}])}),e._v(" "),n("el-tree",{directives:[{name:"show",rawName:"v-show",value:"business"===e.groupType&&e.role&&0!==e.role.CompanyId,expression:"groupType === 'business' && (role && role.CompanyId !== 0)"},{name:"loading",rawName:"v-loading",value:e.treeLoading,expression:"treeLoading"}],ref:"businessTree",staticStyle:{margin:"30px 40px"},attrs:{data:e.businessTreeData,"show-checkbox":"","node-key":"FuncId","default-expand-all":"","default-checked-keys":e.businessTreeChecked,props:{children:"Children",label:"FuncName"}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.node;return n("span",{class:["custom-tree-node",3===a.level?"lv3-node":null]},[n("span",[e._v(e._s(a.label))])])}}])}),e._v(" "),n("el-tree",{directives:[{name:"show",rawName:"v-show",value:"data"===e.groupType&&e.role&&0!==e.role.CompanyId,expression:"groupType === 'data' && (role && role.CompanyId !== 0)"},{name:"loading",rawName:"v-loading",value:e.treeLoading,expression:"treeLoading"}],ref:"dataTree",staticStyle:{margin:"50px"},attrs:{data:e.dataTreeData,"show-checkbox":"","node-key":"FuncId","default-expand-all":"","default-checked-keys":e.dataTreeChecked,props:{children:"Children",label:"FuncName"}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.node;return n("span",{class:["custom-tree-node",3===a.level?"lv3-node":null]},[n("span",[e._v(e._s(a.label))])])}}])}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"dataScreen"===e.groupType&&e.role&&0!==e.role.CompanyId,expression:"groupType === 'dataScreen' && (role && role.CompanyId !== 0)"}],staticStyle:{margin:"30px 40px"}},[n("el-checkbox",{staticStyle:{"font-size":"13px","font-weight":"normal"},model:{value:e.dataScreenChecked,callback:function(t){e.dataScreenChecked=t},expression:"dataScreenChecked"}},[e._v("\n      数据大屏\n    ")])],1)],1)},staticRenderFns:[]}},1046:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"member-connect"},[n("el-button",{attrs:{type:"primary",size:"small"},nativeOn:{click:function(t){return e.clickConnect(t)}}},[e._v("\n    关联成员\n  ")]),e._v(" "),n("el-button",{attrs:{type:"danger",size:"small"},nativeOn:{click:function(t){return e.remove(t)}}},[e._v("\n    批量移除\n  ")]),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%","margin-top":"25px"},attrs:{data:e.tableData},on:{"selection-change":function(t){return e.multipleSelection=t}}},[n("el-table-column",{attrs:{type:"selection",width:"50"}}),e._v(" "),n("el-table-column",{attrs:{type:"index",label:"#",width:"50px"}}),e._v(" "),n("el-table-column",{attrs:{prop:"Nickname",label:"负责人"}}),e._v(" "),n("el-table-column",{attrs:{prop:"Mobile",label:"联系电话"}}),e._v(" "),n("el-table-column",{attrs:{prop:"SubareaName",label:"服务范围"}})],1),e._v(" "),n("el-dialog",{attrs:{title:"关联用户",visible:e.connectDialog,width:"800px"},on:{"update:visible":function(t){e.connectDialog=t},close:function(){return e.connectMembers=[]}}},[n("el-transfer",{attrs:{filterable:"",titles:["可关联用户","关联用户"],"filter-placeholder":"通过用户名或所有分区查找",data:e.connectSource},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.option;return n("div",{staticClass:"member-item"},[n("img",{staticClass:"user-logo",attrs:{src:e.port+a.Avatar}}),e._v(" "),n("div",{staticClass:"member-info"},[n("div",[e._v(e._s(a.Nickname)+" - "+e._s(a.Mobile))]),e._v(" "),n("div",{staticStyle:{"font-size":"12px",color:"#b4b4b4 !important"}},[e._v("\n            "+e._s(a.SubareaName)+"\n          ")])])])}}]),model:{value:e.connectMembers,callback:function(t){e.connectMembers=t},expression:"connectMembers"}}),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"medium"},on:{click:function(t){e.connectDialog=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.handleConnect}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]}},1156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(569),o=n.n(a),r=n(568),i=n.n(r),l=n(838);t.default={components:{PermissionSelect:o.a,MemberConnect:i.a},data:function(){return{tabActive:"first",currentRole:null,systemRoles:[],customRoles:[]}},mounted:function(){this.fetchRoleList()},methods:{clickRole:function(e){this.currentRole=e},clickAdd:function(){var e=this;this.$prompt("添加角色","",{confirmButtonText:"确定",inputPlaceholder:"请输入角色名称",inputValidator:function(e){return!!(e.length>1&&e.length<15&&/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(e))||"角色名称长度（1至15之间），不可有特殊字符"},inputErrorMessage:"",cancelButtonText:"取消"}).then(function(t){var a=t.value;n.i(l.k)({RoleName:a,CompanyId:e.$store.state.app.company.id}).then(function(t){var n=t.data;200===n.Code?(e.$message.success("角色添加成功"),e.fetchRoleList()):e.$message.error(n.Message)}).catch(function(t){e.$message.error("角色添加失败")})}).catch(function(){})},clickDelete:function(e){var t=this;this.$confirm("确认要删除选中角色？","提示",{type:"warning"}).then(function(){n.i(l.l)({roleId:e}).then(function(e){200===e.data.Code?e.data.Data.IsSuccess?(t.$message.success("角色删除成功"),t.fetchRoleList()):t.$message.error("删除失败"):t.$message.error(e.data.Message)}).catch(function(e){t.$message.error("删除失败")})}).catch(function(){})},clickEdit:function(e){var t=this;this.$prompt("修改角色名称","",{inputValue:e.RoleName,confirmButtonText:"确定",inputValidator:function(e){return!!(e.length>1&&e.length<15&&/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(e))||"角色名称长度（1至15之间），不可有特殊字符"},inputErrorMessage:"",cancelButtonText:"取消"}).then(function(a){var o=a.value;n.i(l.m)({roleName:o,roleId:e.RoleId}).then(function(n){200===n.data.Code?(t.$message.success("角色名称修改成功"),e.RoleName=o):t.$message.error("角色名称修改失败")}).catch(function(e){t.$message.error("角色名称修改失败")})}).catch(function(){})},fetchRoleList:function(){var e=this;this.customRoles=[],this.systemRoles=[],n.i(l.j)({companyId:this.$store.state.app.company.id}).then(function(t){var n=t.data,a=[];n.Data.forEach(function(t){t.CompanyId?a.push(t):e.systemRoles.push(t)}),e.customRoles=a,e.currentRole=e.systemRoles[0]}).catch(function(e){})}}}},1284:function(e,t,n){t=e.exports=n(539)(),t.push([e.i,".permission-manage{display:-ms-flexbox;display:flex}.permission-manage .el-card__body{padding:0}.permission-manage .el-tabs__nav{transform:translateX(25px)!important}.permission-manage .el-tabs__nav-wrap:after{height:1px}.permission-manage .el-tabs__item{height:55px;line-height:55px}",""])},1285:function(e,t,n){t=e.exports=n(539)(),t.push([e.i,".permission-manage .left-wrap[data-v-7116d3e0]{-ms-flex:0 0 300px;flex:0 0 300px;margin-right:25px;padding-bottom:25px}.permission-manage .right-wrap[data-v-7116d3e0]{-ms-flex:1;flex:1}.permission-manage .right-wrap .el-tabs__item[data-v-7116d3e0]{height:55px;line-height:55px}.permission-manage .role-group-title[data-v-7116d3e0]{padding-left:20px;color:rgba(0,0,0,.45);font-size:14px;height:45px;line-height:45px}.permission-manage .role-list-item[data-v-7116d3e0]{padding:0 20px 0 40px;height:45px;line-height:45px;color:rgba(0,0,0,.65);cursor:pointer}.permission-manage .role-list-item.active[data-v-7116d3e0]{background:#e6f7ff;color:#1890ff}.permission-manage .role-list-item.active:hover .btn-wrap[data-v-7116d3e0]{display:inline-block}.permission-manage .role-list-item[data-v-7116d3e0]:hover{color:#1890ff}.permission-manage .role-list-item .btn-wrap[data-v-7116d3e0]{display:none;float:right;margin-top:3px}.permission-manage .role-list-item .btn-wrap i[data-v-7116d3e0]{color:red}",""])},1414:function(e,t,n){var a=n(1284);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(540)("4d25800e",a,!0)},1415:function(e,t,n){var a=n(1285);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(540)("079fba6a",a,!0)},1565:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pdg2 permission-manage"},[n("el-card",{staticClass:"left-wrap",attrs:{shadow:"never"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",{staticClass:"card-title"},[e._v("角色列表")]),e._v(" "),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{icon:"el-icon-plus",type:"text"},nativeOn:{click:function(t){return e.clickAdd(t)}}})],1),e._v(" "),n("div",{staticClass:"thin-scroll",staticStyle:{"margin-top":"10px"}},[n("div",{staticClass:"role-group-title"},[e._v("\n        系统角色\n      ")]),e._v(" "),e._l(e.systemRoles,function(t){return n("div",{key:t.RoleId,class:["role-list-item",e.currentRole.RoleId===t.RoleId?"active":null],on:{click:function(n){return e.clickRole(t)}}},[e._v("\n        "+e._s(t.RoleName)+"\n      ")])}),e._v(" "),n("div",{staticClass:"role-group-title"},[e._v("\n        自定义角色\n      ")]),e._v(" "),e._l(e.customRoles,function(t){return n("div",{key:t.RoleId,class:["role-list-item",e.currentRole.RoleId===t.RoleId?"active":null],on:{click:function(n){return e.clickRole(t)}}},[e._v("\n        "+e._s(t.RoleName)+"\n        "),n("div",{staticClass:"btn-wrap"},[n("el-button",{attrs:{type:"text",icon:"el-icon-setting"},nativeOn:{click:function(n){return e.clickEdit(t)}}}),e._v(" "),n("el-button",{staticStyle:{color:"red"},attrs:{type:"text",icon:"el-icon-delete"},nativeOn:{click:function(n){return e.clickDelete(t.RoleId)}}})],1)])})],2)]),e._v(" "),n("el-card",{staticClass:"right-wrap",attrs:{shadow:"never"}},[n("el-tabs",{model:{value:e.tabActive,callback:function(t){e.tabActive=t},expression:"tabActive"}},[n("el-tab-pane",{staticStyle:{padding:"5px 20px 20px 20px"},attrs:{label:"功能权限",name:"first"}},[n("permission-select",{attrs:{role:e.currentRole}})],1),e._v(" "),n("el-tab-pane",{staticStyle:{padding:"5px 20px 20px 20px"},attrs:{label:"关联人员",name:"second"}},[n("member-connect",{attrs:{role:e.currentRole}})],1)],1)],1)],1)},staticRenderFns:[]}},568:function(e,t,n){n(993);var a=n(38)(n(897),n(1046),null,null);e.exports=a.exports},569:function(e,t,n){var a=n(38)(n(898),n(1039),null,null);e.exports=a.exports},661:function(e,t,n){n(1415),n(1414);var a=n(38)(n(1156),n(1565),"data-v-7116d3e0",null);e.exports=a.exports},838:function(e,t,n){"use strict";n.d(t,"k",function(){return o}),n.d(t,"j",function(){return r}),n.d(t,"l",function(){return i}),n.d(t,"m",function(){return l}),n.d(t,"b",function(){return s}),n.d(t,"g",function(){return c}),n.d(t,"a",function(){return d}),n.d(t,"f",function(){return u}),n.d(t,"i",function(){return p}),n.d(t,"c",function(){return m}),n.d(t,"d",function(){return f}),n.d(t,"e",function(){return h}),n.d(t,"h",function(){return g});var a=n(32),o=function(e){var t=e.RoleName,n=e.CompanyId;return a.a.post(BASE_URI+"/api/Role/AddRole",{RoleName:t,CompanyId:n},{headers:{"Content-Type":"application/json"}})},r=function(e){var t=e.companyId;return a.a.get(BASE_URI+"/api/Role/GetCompany_RoleList",{params:{companyId:t}})},i=function(e){var t=e.roleId;return a.a.get(BASE_URI+"/api/Role/DaleteRole",{params:{roleId:t}})},l=function(e){var t=e.roleId,n=e.roleName;return a.a.get(BASE_URI+"/api/Role/UpdateRole",{params:{roleId:t,roleName:n}})},s=function(e){return a.a.get("/api/Role/getInfo",{params:{uid:e}})},c=function(e){return a.a.post("/api/Role/imgUrl",e,{headers:{"Content-Type":"multipart/form-data"}})},d=function(){return a.a.get("/api/Role/imgShow")},u=function(e,t){return a.a.get("/api/Role/updateImg",{params:{url:e,uid:t}})},p=function(e){return a.a.post("/api/Role/updateInfo",e)},m=function(e,t,n){return a.a.get("/api/Role/updateMobile",{params:{mobile:e,code:t,pwd:n}})},f=function(e,t){return a.a.get("/api/Role/exitEmail",{params:{email:e,pwd:t}})},h=function(e,t){return a.a.get("/api/Role/updatePwd",{params:{pwd:e,newpwd:t}})},g=function(e){return a.a.get("/api/Role/updateWChart",{params:{pwd:e}})}},897:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(229);t.default={props:{role:{type:Object,default:function(){return null}}},data:function(){return{tableLoading:!1,multipleSelection:[],tableData:[],connectDialog:!1,connectSource:[],connectMembers:[],port:_host+"/Img/Person/"}},watch:{role:{handler:function(e){var t=this;e&&(this.fetchMemeberList(),n.i(a.i)({companyId:this.$store.state.app.company.id,roleId:e.RoleId}).then(function(e){var n=e.data;200===n.Code?(n.Data.forEach(function(e){e.key=e.UserRoleSubareaId,e.label=e.Nickname+"-"+e.SubareaName}),t.connectSource=n.Data):t.connectSource=[]}).catch(function(e){t.connectSource=[],t.$message.error("用户角色获取失败")}))},immediate:!0}},methods:{clickConnect:function(){this.connectDialog=!0},remove:function(){var e=this;if(!this.multipleSelection.length)return void this.$message("至少选择一位要移除的成员");this.$confirm("确认要移除选定人员","确认",{type:"warning",distinguishCancelAndClose:!0,confirmButtonText:"确认",cancelButtonText:"取消"}).then(function(){n.i(a.j)({UserRoleIdS:e.multipleSelection.map(function(e){return e.User_roleId}).join(",")}).then(function(t){200===t.data.Code?(e.$message.success("人员移除成功"),e.fetchMemeberList()):e.$message.error("人员移除失败")}).catch(function(t){e.$message.error("人员移除失败")})}).catch(function(){})},handleConnect:function(){var e=this;if(!this.connectMembers.length)return this.$message("请至少选中一位要关联的用户"),!1;n.i(a.k)({RoleId:this.role.RoleId,UserRoleSubareaIds:this.connectMembers,CompanyId:this.$store.state.app.company.id}).then(function(t){200===t.data.Code?(e.$message.success("人员关联成功"),e.connectDialog=!1,e.fetchMemeberList()):e.$message.error("人员关联失败")}).catch(function(t){e.$message.error("人员关联失败")})},fetchMemeberList:function(){var e=this;this.tableLoading=!0,n.i(a.l)({RoleId:this.role.RoleId,companyId:this.$store.state.app.company.id}).then(function(t){var n=t.data;200===n.Code?e.tableData=n.Data:e.$message.error("已关联人员获取失败")}).catch(function(t){e.$message.error("已关联人员获取失败")}).finally(function(){e.tableLoading=!1})}}}},898:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(132),o=n.n(a),r=n(235);t.default={props:{role:{type:Object,default:function(){return null}}},data:function(){return{groupType:"business",treeLoading:!1,treeData:[],businessTreeData:[],dataTreeData:[],defaultChecked:[],businessTreeChecked:[],dataTreeChecked:[],dataScreenChecked:!1}},watch:{role:{handler:function(e){e&&this.drawTree()}}},methods:{submit:function(){var e=this,t=[].concat(o()(this.$refs.businessTree.getCheckedKeys()),o()(this.$refs.dataTree.getCheckedKeys()));this.dataScreenChecked&&t.push(40),n.i(r.a)({HalfSelection:[].concat(o()(this.$refs.businessTree.getHalfCheckedKeys()),o()(this.$refs.dataTree.getHalfCheckedKeys())),FuncIdS:t,RoleId:this.role.RoleId}).then(function(t){200===t.data.Code?e.$message.success("角色修改成功"):e.$message.error("角色修改失败")}).catch(function(t){e.$message.error("角色修改失败")})},drawTree:function(){var e=this;this.treeLoading=!0,this.defaultChecked=[],this.businessTreeChecked=[],this.dataTreeChecked=[],0===this.role.CompanyId?n.i(r.b)({roleId:this.role.RoleId,PlatformType:0}).then(function(t){var n=t.data;200===n.Code?(e.walk(n.Data,1,e.defaultChecked),e.treeData=n.Data,e.$nextTick(function(){e.changeDomStyle()})):e.treeData=[]}).catch(function(t){e.treeData=[]}).finally(function(){e.treeLoading=!1}):(n.i(r.b)({roleId:this.role.RoleId,PlatformType:1}).then(function(t){var n=t.data;200===n.Code?(e.walk(n.Data,2,e.businessTreeChecked),e.businessTreeData=n.Data,e.$nextTick(function(){e.changeDomStyle()})):e.treeData=[]}).catch(function(t){e.treeData=[]}).finally(function(){e.treeLoading=!1}),n.i(r.b)({roleId:this.role.RoleId,PlatformType:2}).then(function(t){var n=t.data;200===n.Code?(e.walk(n.Data,2,e.dataTreeChecked),e.dataTreeData=n.Data,e.$nextTick(function(){e.changeDomStyle()})):e.treeData=[]}).catch(function(t){e.treeData=[]}).finally(function(){e.treeLoading=!1}),n.i(r.b)({roleId:this.role.RoleId,PlatformType:4}).then(function(t){var n=t.data;200===n.Code?e.dataScreenChecked=n.Data[0].Checked:e.dataScreenChecked=!1}).catch(function(t){e.treeData=[]}))},walk:function(e,t,n){var a=this;1===t?e.forEach(function(e){e.disabled=!0,e.Checked&&n.push(e.FuncId),e.Children.length&&a.walk(e.Children,t,n)}):2===t&&e.forEach(function(e){1===e.HalfSelection&&n.push(e.FuncId),e.Children.length&&a.walk(e.Children,t,n)})},changeDomStyle:function(){document.querySelectorAll(".lv3-node").forEach(function(e){var t=e.parentNode.parentNode;t.style.display="inline-block",t.parentNode.cssText="overflow: visible;white-space: pre-wrap;"})}}}},929:function(e,t,n){t=e.exports=n(539)(),t.push([e.i,".member-connect .member-item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:15px}.member-connect .member-item img{-ms-flex:0 0 45px;flex:0 0 45px;width:45px;height:45px;margin-right:15px;border-radius:50%}.member-connect .el-transfer-panel__item{height:auto;line-height:auto}.member-connect .el-transfer-panel__item .el-checkbox__input{top:15px}.member-connect .el-transfer-panel{width:330px}.member-connect .el-transfer-panel__body{height:380px}.member-connect .el-transfer-panel__list.is-filterable{height:333px}.member-connect .el-transfer-panel__item.el-checkbox .el-checkbox__label{font-weight:400;line-height:20px}",""])},993:function(e,t,n){var a=n(929);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(540)("066bcb56",a,!0)}});