webpackJsonp([75],{1171:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(731);e.default={data:function(){return{inputCompany:"",inputTeam:"",companiselist:!1,memberlist:!1,memberTable:[],phone:null,memberData:{},no_memb:!1,invite:!1,port:"https://sinocold.net:8443/Img/Person/",userInfo:{},repaircteam:[]}},mounted:function(){this.userInfo=JSON.parse(sessionStorage.getItem("userInfo")),this.MemberList(),this.User_RepairList()},methods:{closemember:function(){this.memberlist=!1,this.$refs.input.$el.querySelector("input").style.borderColor="#bfcbd9"},close_m_invite:function(){this.invite=!1},remove:function(t){var e=this;this.$confirm("此操作将永远删除该条数据，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){r.i(a.a)(t).then(function(t){JSON.parse(t.data)?(e.$message("删除成功"),e.MemberList(),e.User_RepairList()):e.$message.error("删除失败")}).catch(function(t){})})},updateremark:function(t){var e=this;this.$prompt("请输入备注内容","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(n){var i=n.value;r.i(a.b)({ID:t,Describe:i}).then(function(t){e.MemberList(),e.User_RepairList()}).catch(function(t){})})},searchMember:function(){var t=this;/[^0-9.]/g.test(this.inputTeam)||0===this.inputTeam.length?this.$refs.input.$el.querySelector("input").style.borderColor="red":(this.$refs.input.$el.querySelector("input").style.borderColor="#bfcbd9",this.memberlist=!0,r.i(a.c)(this.inputTeam).then(function(e){var r=JSON.parse(e.data);r?(t.memberData=r,t.no_memb=!0):t.no_memb=!1}).catch(function(t){}))},addMember:function(t){var e=this;r.i(a.d)({RepairUserID:t}).then(function(t){JSON.parse(t.data)?(e.$message("添加成功"),e.memberlist=!1,e.MemberList()):e.$message.error("添加失败")}).catch(function(t){})},MemberList:function(){var t=this;r.i(a.e)().then(function(e){t.memberTable=JSON.parse(e.data)}).catch(function(t){})},User_RepairList:function(){var t=this;r.i(a.f)().then(function(e){t.repaircteam=e.data}).catch(function(t){})},invites:function(){var t=this;r.i(a.g)(this.userInfo.nickname,this.inputTeam).then(function(e){JSON.parse(e.data)?r.i(a.h)({mobile:t.inputTeam}).then(function(e){JSON.parse(e.data)?(t.$message("邀请成功"),t.memberlist=!1,t.inputTeam=""):t.$message.error("邀请失败")}).catch(function(t){}):t.$message.error("邀请失败")}).catch(function(t){})}}}},1243:function(t,e,r){e=t.exports=r(539)(),e.push([t.i,".repairTeam{font-size:13px;color:#324057;margin-top:20px}.repairTeam .boxShadow{border-radius:4px;background:#fff}.repairTeam .mg-bot{margin-bottom:20px}.repairTeam .left{height:235px;box-sizing:border-box;float:left;background:#f6f6f6;width:70px;border-radius:12px}.repairTeam .left .left-content{width:30px;text-align:center;margin:0 auto}.repairTeam .left .left-content .leftImg{width:26px;height:26px;margin:28px 0 15px}.repairTeam .left .left-content .leftName{font-size:20px;color:#324057;line-height:36px}.repairTeam .right{height:235px;width:100%;margin-left:70px;width:calc(100% - 70px);box-sizing:border-box}.repairTeam .right .resultBox{height:130px;padding-top:10px}.repairTeam .right .resultBox .resultContent{height:80px;overflow-y:auto}.repairTeam .right .resultBox .resultContent .nodata{line-height:100%}.repairTeam .right .resultBox .record{line-height:40px}.repairTeam .right .resultBox .record .el-button{margin-left:20px}.repairTeam .right .resultBox .notice{color:#58abdf;text-decoration:underline;cursor:pointer}.repairTeam .right .invitationBox{height:177px;padding-top:25px}",""])},1373:function(t,e,r){var a=r(1243);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(540)("39e3fbce",a,!0)},1527:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-row",{staticClass:"repairTeam",attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("div",{staticClass:"left"},[r("div",{staticClass:"left-content"},[r("c-svg",{staticClass:"leftImg",attrs:{name:"team"}}),t._v(" "),r("div",{staticClass:"leftName"},[t._v("\n          我的团队\n        ")])],1)]),t._v(" "),r("div",{staticClass:"right"},[r("el-col",{attrs:{sm:8,md:8,lg:6}},[r("div",{staticClass:"mg-bot"},[r("el-input",{ref:"input",attrs:{placeholder:"输入成员手机号，搜索并添加",size:"large","suffix-icon":"el-icon-search",clearable:""},on:{clear:t.closemember},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchMember(e)}},model:{value:t.inputTeam,callback:function(e){t.inputTeam="string"==typeof e?e.trim():e},expression:"inputTeam"}})],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.memberlist,expression:"memberlist"}],staticClass:"mg-bot"},[r("div",{staticClass:"boxShadow resultBox"},[r("div",{staticStyle:{height:"15px"}},[r("c-svg",{staticStyle:{float:"right","margin-right":"15px"},attrs:{name:"close"},nativeOn:{click:function(e){return t.closemember(e)}}})],1),t._v(" "),r("div",{staticClass:"resultContent"},[r("el-col",{directives:[{name:"show",rawName:"v-show",value:!t.no_memb,expression:"!no_memb"}],staticClass:"nodata",attrs:{span:24}},[t._v("\n                暂无数据\n              ")]),t._v(" "),r("el-col",{directives:[{name:"show",rawName:"v-show",value:t.no_memb,expression:"no_memb"}],staticClass:"record",attrs:{span:24}},[r("span",[t._v(t._s(t.memberData.nickname))]),t._v(" "),r("el-button",{staticClass:"addCompany",attrs:{type:"primary",size:"small"},on:{click:function(e){return t.addMember(t.memberData.id)}}},[t._v("\n                  添加\n                ")])],1)],1),t._v(" "),r("el-col",{directives:[{name:"show",rawName:"v-show",value:!t.no_memb,expression:"!no_memb"}],staticClass:"record notice",attrs:{span:24},nativeOn:{click:function(e){return t.invites(e)}}},[t._v("\n              邀请该手机号主人开通\n            ")])],1)])]),t._v(" "),r("el-col",{attrs:{span:24}},[r("div",{staticClass:"boxShadow insideBox clearfix",staticStyle:{"padding-bottom":"15px"}},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.memberTable,"highlight-current-row":""}},[r("el-table-column",{attrs:{type:"index",label:"序号",width:"80"}}),t._v(" "),r("el-table-column",{attrs:{label:"照片",width:"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("img",{staticStyle:{width:"25px",height:"25px","margin-top":"8px"},attrs:{src:t.port+e.row.avatar}})]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"nickname",label:"姓名","min-width":"120"}}),t._v(" "),r("el-table-column",{attrs:{prop:"Describe",label:"维保范围备注","min-width":"150"}}),t._v(" "),r("el-table-column",{attrs:{prop:"mobile",label:"联系电话","min-width":"150"}}),t._v(" "),r("el-table-column",{attrs:{prop:"Email",label:"邮箱","min-width":"150"}}),t._v(" "),r("el-table-column",{attrs:{prop:"cname",label:"公司","min-width":"180"}}),t._v(" "),r("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{staticClass:"btn-danger",attrs:{size:"small",type:"text"},on:{click:function(r){return t.remove(e.row.id)}}},[t._v("\n                  移除\n                ")]),t._v(" "),r("el-button",{attrs:{size:"small",type:"text"},on:{click:function(r){return t.updateremark(e.row.id)}}},[t._v("\n                  修改备注\n                ")])]}}])})],1)],1)])],1)]),t._v(" "),r("el-col",{staticStyle:{"margin-top":"20px"},attrs:{span:24}},[r("div",{staticClass:"left"},[r("div",{staticClass:"left-content"},[r("c-svg",{staticClass:"leftImg",attrs:{name:"team"}}),t._v(" "),r("div",{staticClass:"leftName"},[t._v("\n          所属团队\n        ")])],1)]),t._v(" "),r("div",{staticClass:"right"},[r("el-col",{attrs:{span:24}},[r("div",{staticClass:"boxShadow insideBox clearfix",staticStyle:{"padding-bottom":"15px"}},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.repaircteam,"highlight-current-row":""}},[r("el-table-column",{attrs:{type:"index",label:"序号",width:"80"}}),t._v(" "),r("el-table-column",{attrs:{label:"照片",width:"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("img",{staticStyle:{width:"25px",height:"25px","margin-top":"8px"},attrs:{src:t.port+e.row.avatar}})]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"nickname",label:"姓名","min-width":"120"}}),t._v(" "),r("el-table-column",{attrs:{prop:"Describe",label:"描述","min-width":"150"}}),t._v(" "),r("el-table-column",{attrs:{prop:"mobile",label:"联系电话","min-width":"150"}}),t._v(" "),r("el-table-column",{attrs:{prop:"Email",label:"邮箱","min-width":"150"}}),t._v(" "),r("el-table-column",{attrs:{prop:"cname",label:"公司","min-width":"180"}}),t._v(" "),r("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{staticClass:"btn-danger",attrs:{size:"small",type:"text"},on:{click:function(r){return t.remove(e.row.id)}}},[t._v("\n                  退出\n                ")])]}}])})],1)],1)])],1)])],1)},staticRenderFns:[]}},676:function(t,e,r){r(1373);var a=r(38)(r(1171),r(1527),null,null);t.exports=a.exports},731:function(t,e,r){"use strict";r.d(e,"c",function(){return n}),r.d(e,"d",function(){return i}),r.d(e,"g",function(){return o}),r.d(e,"h",function(){return s}),r.d(e,"x",function(){return c}),r.d(e,"y",function(){return p}),r.d(e,"z",function(){return u}),r.d(e,"v",function(){return l}),r.d(e,"w",function(){return m}),r.d(e,"k",function(){return d}),r.d(e,"m",function(){return f}),r.d(e,"n",function(){return _}),r.d(e,"o",function(){return h}),r.d(e,"p",function(){return b}),r.d(e,"t",function(){return g}),r.d(e,"u",function(){return v}),r.d(e,"e",function(){return x}),r.d(e,"A",function(){return R}),r.d(e,"B",function(){return w}),r.d(e,"C",function(){return y}),r.d(e,"D",function(){return S}),r.d(e,"E",function(){return C}),r.d(e,"q",function(){return T}),r.d(e,"G",function(){return k}),r.d(e,"H",function(){return D}),r.d(e,"i",function(){return M}),r.d(e,"j",function(){return I}),r.d(e,"l",function(){return B}),r.d(e,"s",function(){return L}),r.d(e,"I",function(){return N}),r.d(e,"J",function(){return O}),r.d(e,"F",function(){return $}),r.d(e,"r",function(){return A}),r.d(e,"a",function(){return U}),r.d(e,"b",function(){return z}),r.d(e,"f",function(){return J});var a=r(32),n=function(t){return a.a.get("/api/Maintenance_team/QueryRepair_user",{params:{mobile:t}})},i=function(t){return a.a.post("/api/Maintenance_team/AddRepair_user",t)},o=function(t,e){return a.a.get("/api/SystemMsg/Register_sms",{params:{username:t,phone:e}})},s=function(t){return a.a.post("/api/Maintenance_team/InvitationRepair_user",t)},c=function(t){return a.a.post("/api/Upload_File/Upload_Repairimg",t,{headers:{"Content-Type":"multipart/form-data"}})},p=function(t,e,r){return a.a.get("/api/DeviceInfo/getDeviceByMtid",{params:{name:t,mtid:e,project:r}})},u=function(t){return a.a.post("/api/Repair_order/AddRepair_order",t)},l=function(){return a.a.get("/api/Repair_Statistical_Analysis/GetRepair_Order_Statistics")},m=function(t,e){return a.a.get("/api/Repair_Statistical_Analysis/GetRepair_Cost_Statistics",{params:{starttime:t,endtime:e}})},d=function(t){return a.a.get("/api/Repair_order/Repair_Delete",{params:{ID:t}})},f=function(t){return a.a.post("/api/Repair_order/Repair_Acceptance",t)},_=function(t){return a.a.post("/api/Repair_order/Repair_Dispatching",t)},h=function(t){return a.a.post("/api/Repair_order/Repair_Dispatching_Acceptance",t)},b=function(t){return a.a.post("/api/Repair_order/RemoteRepair_process_details",t)},g=function(t){return a.a.get("/api/Repair_order/Repair_ScheduleWebNew",{params:{repair_orderno:t}})},v=function(t){return a.a.get("/api/Repair_order/Repair_ScheduleLogWebNew",{params:{repair_orderno:t}})},x=function(){return a.a.get("/api/Maintenance_team/Repair_userList")},R=function(t){return a.a.post("/api/Repair_order/AddRepair_sparepart",t)},w=function(t){return a.a.post("/api/Repair_order/AddRepair_tool",t)},y=function(t){return a.a.post("/api/Repair_order/UpdateRepair_spareparts",t)},S=function(t){return a.a.post("/api/Repair_order/UpdateRepair_tool",t)},C=function(t){return a.a.get("/api/Repair_order/DeleteRepair_spareparts",{params:{ID:t}})},T=function(t){return a.a.post("/api/Repair_order/Repair_Check",t)},k=function(t,e){return a.a.get("/api/Repair_order/GetRepair_ProjectDevice",{params:{modelid:t,projectid:e}})},D=function(t){return a.a.post("/api/Repair_order/QueryRepair_order",t)},M=function(t){return a.a.get("/api/Repair_Statistical_Analysis/GetRepair_Statistical_TimeList",{params:{time:t}})},I=function(t){return a.a.get("/api/Repair_Statistical_Analysis/GetRepair_Statistical_EvaluateList",{params:{time:t}})},B=function(t){return a.a.post("/api/Repair_order/Repair_Status",t)},L=function(t){return a.a.get("/api/Repair_order/QueryRepair_orderReport",{params:{Repair_Orderno:t}})},N=function(t){return a.a.get("/api/Repair_order/Repair_sparepartList",{params:{Repair_Orderno:t}})},O=function(t){return a.a.get("/api/Repair_order/Repair_toolList",{params:{Repair_Orderno:t}})},$=function(t){return a.a.get("/api/Repair_order/DeleteRepair_tool?ID="+t)},A=function(t){return a.a.post("/api/Repair_order/Repair_Evaluate",t)},U=function(t){return a.a.get("/api/Maintenance_team/DeleteRepair_user",{params:{id:t}})},z=function(t){return a.a.post("/api/Maintenance_team/UpdateRepair_user",t)},J=function(t){return a.a.get("/api/Maintenance_team/User_RepairList",{params:{id:t}})}}});