webpackJsonp([76],{1170:function(r,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(731);e.default={data:function(){return{data:[],list:[],efficiencytime:1,evaluatetime:1,wrap:!0}},mounted:function(){this.GetRepair_Statistical_TimeList(),this.GetRepair_Statistical_EvaluateList()},methods:{handleEfficiency:function(){this.wrap=!0},handleEvaluate:function(){this.wrap=!1},handletype:function(r){this.efficiencytime=r,this.GetRepair_Statistical_TimeList()},handletime:function(r){this.evaluatetime=r,this.GetRepair_Statistical_EvaluateList()},GetRepair_Statistical_TimeList:function(){var r=this;a.i(i.i)(this.efficiencytime).then(function(e){r.data=JSON.parse(e.data)}).catch(function(r){})},GetRepair_Statistical_EvaluateList:function(){var r=this;a.i(i.j)(this.evaluatetime).then(function(e){r.list=JSON.parse(e.data)}).catch(function(r){})}}}},1304:function(r,e,a){e=r.exports=a(539)(),e.push([r.i,'.groupBtns{margin-top:-4px;float:right}.repair-wrapper .el-row{margin:0}.repair-wrapper .boxShadow{border-radius:4px;box-shadow:0 0 3px rgba(0,0,0,.4);background:#fff;overflow:hidden}.repair-wrapper .descript .el-textarea__inner{padding:0 7px}.repair-wrapper .user-dialog{width:386px}.repair-wrapper .user-dialog .el-dialog__header{padding:0}.repair-wrapper .user-dialog .search-result{margin-top:15px;padding:10px;border:1px solid #ccc;height:200px;border-radius:4px;overflow-y:auto}.repair-wrapper .user-dialog .result-item{display:inline-block;width:140px;height:50px;border:1px dashed #ccc;padding:5px;position:relative;font-size:14px;background:#fff;margin:0 5px 10px;cursor:pointer}.repair-wrapper .user-dialog .is-member{cursor:not-allowed}.repair-wrapper .user-dialog .cont{margin-top:5px}.repair-wrapper .user-dialog .cont:after{content:"";display:block;clear:both}.repair-wrapper .user-dialog .avatar{width:40px;height:40px;vertical-align:middle;float:left}.repair-wrapper .user-dialog .disc{margin-left:5px;float:left}.repair-wrapper .user-dialog .discname{display:block;width:95px;height:20px;overflow:hidden;text-overflow:ellipsis}.repair-wrapper .user-dialog .discname:last-child{color:#999}.repair-wrapper .user-dialog .invite{color:#58abdf;text-decoration:underline;cursor:pointer}.repair-wrapper .projectinfo *{box-sizing:border-box}.repair-wrapper .projectinfo .area-wrap,.repair-wrapper .projectinfo .equipment-wrap{box-shadow:0 0 2px rgba(0,0,0,.4);border-radius:4px;overflow:hidden}.repair-wrapper .projectinfo .area-wrap .handle-wrap{float:right;cursor:pointer}.repair-wrapper .projectinfo .area-wrap .handle-wrap .edit-btn{margin:0 3px;cursor:pointer}.repair-wrapper .projectinfo .area-wrap .handle-wrap .append-btn{padding:4px;border-radius:50%;border:2px solid;color:#fff;background-color:#1e91f0;border-color:#1e91f0}.repair-wrapper .projectinfo .area-wrap .handle-wrap .remove-btn{padding:4px;border-radius:50%;border:2px solid;color:#fff;background:#fb7070;border-color:#fb7070}.repair-wrapper .projectinfo .area-wrap .handle-wrap .edit-btn{padding:4px;border-radius:50%;border:2px solid;color:#1bc980;border-color:#1bc980}.repair-wrapper .projectinfo .area-content{overflow-y:auto;padding:15px;height:400px}.repair-wrapper .projectinfo .area-content .append-btn,.repair-wrapper .projectinfo .area-content .edit-btn,.repair-wrapper .projectinfo .area-content .remove-btn{margin:0 3px}.repair-wrapper .projectinfo .area-content .append-btn{padding:4px;border-radius:50%;border:2px solid;color:#fff;background-color:#1e91f0;border-color:#1e91f0}.repair-wrapper .projectinfo .area-content .remove-btn{padding:4px;border-radius:50%;border:2px solid;color:#fff;background:#fb7070;border-color:#fb7070}.repair-wrapper .projectinfo .area-content .edit-btn{padding:4px;border-radius:50%;border:2px solid;color:#1bc980;border-color:#1bc980}.repair-wrapper .projectinfo .area-content .label-input{width:80px;height:25px;border-radius:3px;outline:none;border:1px solid #bfc7d9;padding:0 4px}.repair-wrapper .projectinfo .area-content .editOk-btn{border:none;outline:none;background:none;color:#20a0ff;border-radius:4px;margin-left:4px;cursor:pointer}.repair-wrapper .projectinfo .area-content .addNodeDialog{width:400px}.repair-wrapper .projectinfo .area-content .el-dialog__body{padding-bottom:0}.repair-wrapper .projectinfo .area-content .el-tree{height:370px;overflow:auto}.repair-wrapper .projectinfo .area-content .el-tree .icon{width:16px;height:16px;margin-right:5px}.repair-wrapper .projectinfo .equipment-content{padding:15px;height:400px;overflow:auto}.repair-wrapper .projectinfo .el-tree{border:none}.repair-wrapper .projectinfo .margin6{margin-right:6px}.repair-wrapper .projectinfo .icon-devices{color:red;font-size:18px}.repair-wrapper .projectinfo .el-dialog--small{width:80%;padding-bottom:20px}.repair-wrapper .addNodeDialoginner .el-dialog--small{width:20%}.repairCommonBtn .button_group{margin-bottom:20px;display:inline-block;width:17%}.repairCommonBtn .button_group .subBtn{width:100%;font-size:20px;color:#324057;font-weight:700;border:none;cursor:pointer;font-family:Helvetica Neue,Helvetica,microsoft yahei,arial,STHeiTi,sans-serif}.repairCommonBtn .button_group .subBtn .repair_sub_button{line-height:44px}.repairCommonBtn .button_group .subBtn .repair_sub_button img{margin-right:10px;vertical-align:middle}.repairCommonBtn .repair_button{height:44px;padding:0 15px;font-size:18px;color:#fff;font-weight:700;border:none;border-radius:4px;box-shadow:0 0 6px rgba(0,0,0,.4);cursor:pointer;font-family:Helvetica Neue,Helvetica,microsoft yahei,arial,STHeiTi,sans-serif;background:#90d800;background:-moz-linear-gradient(top,#90d800,#339300);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#90D800",endColorstr="#339300")}.repairCommonBtn .repair_button .repair_sub_button{line-height:44px}.repairCommonBtn .repair_button .repair_sub_button img{margin-right:10px;vertical-align:middle}@media (max-width:1380px){.repairCommonBtn .button_group{width:25%}}@media (max-width:1080px){.repairCommonBtn .button_group{width:45%}}.repair{font-size:13px;color:#324057}.repair .clearfix:after{content:"";display:block;clear:both}.repair .boxpanel .adaption_col{width:calc(50% - 20px)}.repair .inputNum{height:42px;border:1px solid #bfcbd9;border-radius:4px;padding-left:10px}.repair .notic{line-height:26px;margin-left:30px;font-size:13px;font-weight:400;float:left}.repair .box .adaption_col{width:calc(50% - 20px)}.repair .box .el-input__inner{height:44px;line-height:2}.repair .box .el-form-item__label{font-weight:700}.repair .box .el-upload--picture-card{height:70px;width:70px;line-height:70px}.repair .box .el-upload-list{float:left}.repair .box .el-upload-list--picture-card .el-upload-list__item{height:70px;width:70px}.repair .box .el-upload-list--picture-card .el-upload-list__item-status-label i{margin-top:11px}.repair .box .el-form-item{margin-bottom:42px}.repair .box .el-form-item .el-form-item{margin-bottom:0}.repair .user-dialog{width:386px}.repair .user-dialog .el-dialog__header{padding:0}.repair .user-dialog .search-result{margin-top:15px;padding:10px;border:1px solid #ccc;height:200px;border-radius:4px;overflow-y:auto}.repair .user-dialog .result-item{display:inline-block;width:140px;height:50px;border:1px dashed #ccc;padding:5px;position:relative;font-size:14px;background:#fff;margin:0 5px 10px;cursor:pointer}.repair .user-dialog .is-member{cursor:not-allowed}.repair .user-dialog .cont{margin-top:5px}.repair .user-dialog .cont:after{content:"";display:block;clear:both}.repair .user-dialog .avatar{width:40px;height:40px;vertical-align:middle;float:left}.repair .user-dialog .disc{margin-left:5px;float:left}.repair .user-dialog .discname{display:block;width:95px;height:20px;overflow:hidden;text-overflow:ellipsis}.repair .user-dialog .discname:last-child{color:#999}.repair .user-dialog .invite{color:#58abdf;text-decoration:underline;cursor:pointer}.repair .projectinfo *{box-sizing:border-box}.repair .projectinfo .area-wrap,.repair .projectinfo .equipment-wrap{box-shadow:0 0 2px rgba(0,0,0,.4);border-radius:4px;overflow:hidden}.repair .projectinfo .area-wrap .handle-wrap{float:right;cursor:pointer}.repair .projectinfo .area-wrap .handle-wrap .edit-btn{margin:0 3px;cursor:pointer}.repair .projectinfo .area-wrap .handle-wrap .append-btn{padding:4px;border-radius:50%;border:2px solid;color:#fff;background-color:#1e91f0;border-color:#1e91f0}.repair .projectinfo .area-wrap .handle-wrap .remove-btn{padding:4px;border-radius:50%;border:2px solid;color:#fff;background:#fb7070;border-color:#fb7070}.repair .projectinfo .area-wrap .handle-wrap .edit-btn{padding:4px;border-radius:50%;border:2px solid;color:#1bc980;border-color:#1bc980}.repair .projectinfo .area-content{overflow-y:auto;padding:15px;height:400px}.repair .projectinfo .area-content .append-btn,.repair .projectinfo .area-content .edit-btn,.repair .projectinfo .area-content .remove-btn{margin:0 3px}.repair .projectinfo .area-content .append-btn{padding:4px;border-radius:50%;border:2px solid;color:#fff;background-color:#1e91f0;border-color:#1e91f0}.repair .projectinfo .area-content .remove-btn{padding:4px;border-radius:50%;border:2px solid;color:#fff;background:#fb7070;border-color:#fb7070}.repair .projectinfo .area-content .edit-btn{padding:4px;border-radius:50%;border:2px solid;color:#1bc980;border-color:#1bc980}.repair .projectinfo .area-content .label-input{width:80px;height:25px;border-radius:3px;outline:none;border:1px solid #bfc7d9;padding:0 4px}.repair .projectinfo .area-content .editOk-btn{border:none;outline:none;background:none;color:#20a0ff;border-radius:4px;margin-left:4px;cursor:pointer}.repair .projectinfo .area-content .addNodeDialog{width:400px}.repair .projectinfo .area-content .el-dialog__body{padding-bottom:0}.repair .projectinfo .area-content .el-tree{height:370px;overflow:auto}.repair .projectinfo .area-content .el-tree .icon{width:16px;height:16px;margin-right:5px}.repair .projectinfo .equipment-content{padding:15px;height:400px;overflow:auto}.repair .projectinfo .el-tree{border:none}.repair .projectinfo .margin6{margin-right:6px}.repair .projectinfo .icon-devices{color:red;font-size:18px}.repair .projectinfo .el-dialog--small{width:80%;padding-bottom:20px}.repair .el-form-item__label{text-align:center}.repair .linkBtn{border:1px solid #bfd7d9;color:#333999;padding:13px 10px;border-radius:4px}.repair .calc{width:calc(100% - 42px)}.repair .calc1{width:calc(100% - 105px)}.repair .calc2{width:calc(100% - 40px)}.repair .planPanel{padding-top:40px}.repair .planPanel .pl_top{text-align:center;margin-bottom:60px}.repair .planPanel .pl_top span{display:inline-block;height:40px;line-height:40px;padding:0 30px;border:1px solid #2795db;border-radius:20px}.repair .planPanel .pl_top i{color:#2795db;margin-left:3px}.repair .planPanel .upload-contract{margin-top:50px;position:relative;height:40px;width:50%;border:1px solid #bfcbd9;border-radius:4px}.repair .planPanel .upload-contract .el-upload--text{width:auto;height:auto;border:none;position:absolute;top:-50px}.repair .planPanel .upload_model .el-upload--text{width:auto;height:auto;border:none}.repair .planPanel .upload_model .el-upload-list{display:none}.repair .commonWrapper{color:#324057}.repair .commonWrapper .commonBox{border-radius:4px;margin-bottom:20px}.repair .commonWrapper .commonBox .commonHeader{height:46px;padding:10px;color:#324057;border-bottom:1px solid #dedfe0}.repair .commonWrapper .commonBox .commonHeader .commonImg{float:left;margin-right:5px;height:20px;width:20px}.repair .commonWrapper .commonBox .commonHeader .squareDown{float:right;margin-top:12px;margin-right:10px;height:20px;width:20px;cursor:pointer}.repair .commonWrapper .commonBox .commonHeader .squareDown .commonIcon{float:left}.repair .commonWrapper .commonBox .commonHeader .commonTitle{float:left;height:26px;line-height:26px;font-size:15px;font-weight:700}.repair .commonWrapper .commonBox .commonContent .el-form{margin:50px 5% 20px}.repair .commonWrapper .commonBox .commonContent .subBtn{margin-bottom:20px;text-align:center}.repair .left{width:160px;float:left;box-sizing:border-box}.repair .left .changeBtn{width:100%;color:#fff;margin:0 0 10px}.repair .left .btncolor{width:100%;color:#324057;margin:0 0 10px}.repair .right{margin-left:170px}.repair .right .changeBtn1{height:26px;border:1px solid #6ec1ff;border-radius:4px;float:right}.repairIndex{padding:24px 32px;box-sizing:border-box;background:#fff;overflow:hidden;border-radius:4px}.repairIndex .clearfix:after{content:"";display:block;clear:both}.repairIndex .tableBtn{margin:5px 0}.repairIndex .actives{background:#399;color:#fff;border-color:#399}.repairIndex .dialogBox .el-dialog{width:600px}.repairIndex .dialogBox .el-dialog .el-input,.repairIndex .dialogBox .el-dialog .el-select{width:100%}.repairIndex .dialogBox .el-dialog .ct{margin:0 10px 12px 0;display:inline-block}.repairIndex .dialogBox .el-dialog .cm{margin:12px 10px 12px 0;display:inline-block}.repairIndex .dialogBox .el-dialog .passBtn{text-align:center;margin-bottom:10px}.repairIndex .notic{line-height:30px;margin-left:30px;font-size:13px;font-weight:400;float:left}.repairIndex .floatBtn{float:right}.repairIndex .floatBtn span{font-weight:400}.repairIndex .button{height:28px;margin-left:10px;font-size:13px;vertical-align:middle}.repairIndex .placeholder_margin_left::-webkit-input-placeholder{padding-left:10px}.repairIndex .placeholder_margin_left:-moz-placeholder,.repairIndex .placeholder_margin_left::-moz-placeholder{padding-left:10px}.repairIndex .placeholder_margin_left:-ms-input-placeholder{padding-left:10px}.repairIndex .formrefuse .el-form-item__content{margin-left:0!important}.repairIndex .el-table .el-table__row td:last-child .cell{padding-left:5px;padding-right:5px}.HeaderBtn .cell-input,.repair .cell-input,.repairIndex .cell-input{display:none}.HeaderBtn .cell-input input,.repair .cell-input input,.repairIndex .cell-input input{padding-left:7px;background-color:#fff;background-image:none;border-radius:4px;border:1px solid #bfcbd9;box-sizing:border-box;color:#1f2d3d;font-size:inherit;line-height:1;outline:none;transition:border-color .2s cubic-bezier(.645,.045,.355,1);width:100%;height:25px}.HeaderBtn .cell-input input:focus,.repair .cell-input input:focus,.repairIndex .cell-input input:focus{outline:none;border-color:#20a0ff}@media (max-width:1540px){.repair .commonWrapper .commonBox .commonContent .el-form{margin:22px 5% 20px}.repair .box .el-form-item{margin-bottom:22px}.repair .box .el-form-item .el-form-item{margin-bottom:0}}@media (max-width:1360px){.repair .adaption{width:100%}.repair .adaption_exp{width:calc(100% - 40px)}.repair .adaption_col{width:calc(100% - 40px)!important}}@media (max-width:810px){.repair .notic{display:none}}',""])},1434:function(r,e,a){var i=a(1304);"string"==typeof i&&(i=[[r.i,i,""]]),i.locals&&(r.exports=i.locals);a(540)("fa6afbc6",i,!0)},1580:function(r,e){r.exports={render:function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("el-row",{staticClass:"repair",attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"left"},[a("el-button",{class:{"el-button--primary changeBtn":r.wrap,btncolor:!r.wrap},attrs:{size:"small"},on:{click:r.handleEfficiency}},[r._v("\n        效率排名\n      ")]),r._v(" "),a("el-button",{class:{"el-button--primary changeBtn":!r.wrap,btncolor:r.wrap},attrs:{size:"small"},on:{click:r.handleEvaluate}},[r._v("\n        满意度排名\n      ")])],1),r._v(" "),a("div",{staticClass:"right"},[a("el-col",{directives:[{name:"show",rawName:"v-show",value:r.wrap,expression:"wrap"}],staticClass:"commonWrapper",attrs:{span:24}},[a("div",{staticClass:"commonBox insideBox clearfix bg-fff"},[a("el-col",{staticClass:"commonHeader",attrs:{span:24}},[a("c-svg",{attrs:{name:"table","class-name":"commonImg"}}),r._v(" "),a("span",{staticClass:"commonTitle"},[r._v("受理效率排名")]),r._v(" "),a("div",{staticClass:"groupBtns"},[a("el-button",{class:{"el-button--primary":1==r.efficiencytime},attrs:{size:"small",plain:""},on:{click:function(e){return r.handletype(1)}}},[r._v("\n                本年\n              ")]),r._v(" "),a("el-button",{class:{"el-button--primary":2==r.efficiencytime},attrs:{size:"small",plain:""},on:{click:function(e){return r.handletype(2)}}},[r._v("\n                本月\n              ")])],1)],1),r._v(" "),a("el-col",{attrs:{span:24}},[a("div",{staticClass:"clearfix",staticStyle:{padding:"15px 5px"}},[a("el-table",{attrs:{data:r.data,"highlight-current-row":""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80"}}),r._v(" "),a("el-table-column",{attrs:{prop:"nickname",label:"承修方","min-width":"200"}}),r._v(" "),a("el-table-column",{attrs:{prop:"repair_count",label:"维修次数（次）","min-width":"150",align:"right"}}),r._v(" "),a("el-table-column",{attrs:{prop:"ResponseTime",label:"平均响应时间（分）","min-width":"180",align:"right"}}),r._v(" "),a("el-table-column",{attrs:{prop:"AcceptanceTime",label:"平均受理时间（分）","min-width":"180",align:"right"}}),r._v(" "),a("el-table-column",{attrs:{prop:"CompleteTime",label:"完成平均用时（时）","min-width":"180",align:"right"}})],1)],1)])],1)]),r._v(" "),a("el-col",{directives:[{name:"show",rawName:"v-show",value:!r.wrap,expression:"!wrap"}],staticClass:"commonWrapper",attrs:{span:24}},[a("div",{staticClass:"commonBox insideBox clearfix bg-fff"},[a("el-col",{staticClass:"commonHeader",attrs:{span:24}},[a("c-svg",{attrs:{name:"table","class-name":"commonImg"}}),r._v(" "),a("span",{staticClass:"commonTitle"},[r._v("满意度排名")]),r._v(" "),a("div",{staticClass:"groupBtns"},[a("el-button",{class:{"el-button--primary":1==r.evaluatetime},attrs:{size:"small",plain:""},on:{click:function(e){return r.handletime(1)}}},[r._v("\n                本年\n              ")]),r._v(" "),a("el-button",{class:{"el-button--primary":2==r.evaluatetime},attrs:{size:"small",plain:""},on:{click:function(e){return r.handletime(2)}}},[r._v("\n                本月\n              ")])],1)],1),r._v(" "),a("el-col",{attrs:{span:24}},[a("div",{staticClass:"clearfix",staticStyle:{padding:"15px 5px"}},[a("el-table",{attrs:{data:r.list,"highlight-current-row":""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80"}}),r._v(" "),a("el-table-column",{attrs:{prop:"nickname",label:"承修方","min-width":"220"}}),r._v(" "),a("el-table-column",{attrs:{prop:"Evaluate_count",label:"评价次数","min-width":"200",align:"right"}}),r._v(" "),a("el-table-column",{attrs:{prop:"SumScore",label:"总分值","min-width":"200",align:"right"}}),r._v(" "),a("el-table-column",{attrs:{prop:"AvgScore",label:"平均分","min-width":"200",align:"right"}})],1)],1)])],1)])],1)])],1)},staticRenderFns:[]}},675:function(r,e,a){a(1434);var i=a(38)(a(1170),a(1580),null,null);r.exports=i.exports},731:function(r,e,a){"use strict";a.d(e,"c",function(){return t}),a.d(e,"d",function(){return o}),a.d(e,"g",function(){return n}),a.d(e,"h",function(){return p}),a.d(e,"x",function(){return l}),a.d(e,"y",function(){return d}),a.d(e,"z",function(){return c}),a.d(e,"v",function(){return s}),a.d(e,"w",function(){return u}),a.d(e,"k",function(){return f}),a.d(e,"m",function(){return m}),a.d(e,"n",function(){return x}),a.d(e,"o",function(){return g}),a.d(e,"p",function(){return b}),a.d(e,"t",function(){return h}),a.d(e,"u",function(){return _}),a.d(e,"e",function(){return w}),a.d(e,"A",function(){return v}),a.d(e,"B",function(){return R}),a.d(e,"C",function(){return j}),a.d(e,"D",function(){return y}),a.d(e,"E",function(){return B}),a.d(e,"q",function(){return k}),a.d(e,"G",function(){return C}),a.d(e,"H",function(){return I}),a.d(e,"i",function(){return z}),a.d(e,"j",function(){return S}),a.d(e,"l",function(){return D}),a.d(e,"s",function(){return H}),a.d(e,"I",function(){return T}),a.d(e,"J",function(){return W}),a.d(e,"F",function(){return A}),a.d(e,"r",function(){return L}),a.d(e,"a",function(){return E}),a.d(e,"b",function(){return G}),a.d(e,"f",function(){return N});var i=a(32),t=function(r){return i.a.get("/api/Maintenance_team/QueryRepair_user",{params:{mobile:r}})},o=function(r){return i.a.post("/api/Maintenance_team/AddRepair_user",r)},n=function(r,e){return i.a.get("/api/SystemMsg/Register_sms",{params:{username:r,phone:e}})},p=function(r){return i.a.post("/api/Maintenance_team/InvitationRepair_user",r)},l=function(r){return i.a.post("/api/Upload_File/Upload_Repairimg",r,{headers:{"Content-Type":"multipart/form-data"}})},d=function(r,e,a){return i.a.get("/api/DeviceInfo/getDeviceByMtid",{params:{name:r,mtid:e,project:a}})},c=function(r){return i.a.post("/api/Repair_order/AddRepair_order",r)},s=function(){return i.a.get("/api/Repair_Statistical_Analysis/GetRepair_Order_Statistics")},u=function(r,e){return i.a.get("/api/Repair_Statistical_Analysis/GetRepair_Cost_Statistics",{params:{starttime:r,endtime:e}})},f=function(r){return i.a.get("/api/Repair_order/Repair_Delete",{params:{ID:r}})},m=function(r){return i.a.post("/api/Repair_order/Repair_Acceptance",r)},x=function(r){return i.a.post("/api/Repair_order/Repair_Dispatching",r)},g=function(r){return i.a.post("/api/Repair_order/Repair_Dispatching_Acceptance",r)},b=function(r){return i.a.post("/api/Repair_order/RemoteRepair_process_details",r)},h=function(r){return i.a.get("/api/Repair_order/Repair_ScheduleWebNew",{params:{repair_orderno:r}})},_=function(r){return i.a.get("/api/Repair_order/Repair_ScheduleLogWebNew",{params:{repair_orderno:r}})},w=function(){return i.a.get("/api/Maintenance_team/Repair_userList")},v=function(r){return i.a.post("/api/Repair_order/AddRepair_sparepart",r)},R=function(r){return i.a.post("/api/Repair_order/AddRepair_tool",r)},j=function(r){return i.a.post("/api/Repair_order/UpdateRepair_spareparts",r)},y=function(r){return i.a.post("/api/Repair_order/UpdateRepair_tool",r)},B=function(r){return i.a.get("/api/Repair_order/DeleteRepair_spareparts",{params:{ID:r}})},k=function(r){return i.a.post("/api/Repair_order/Repair_Check",r)},C=function(r,e){return i.a.get("/api/Repair_order/GetRepair_ProjectDevice",{params:{modelid:r,projectid:e}})},I=function(r){return i.a.post("/api/Repair_order/QueryRepair_order",r)},z=function(r){return i.a.get("/api/Repair_Statistical_Analysis/GetRepair_Statistical_TimeList",{params:{time:r}})},S=function(r){return i.a.get("/api/Repair_Statistical_Analysis/GetRepair_Statistical_EvaluateList",{params:{time:r}})},D=function(r){return i.a.post("/api/Repair_order/Repair_Status",r)},H=function(r){return i.a.get("/api/Repair_order/QueryRepair_orderReport",{params:{Repair_Orderno:r}})},T=function(r){return i.a.get("/api/Repair_order/Repair_sparepartList",{params:{Repair_Orderno:r}})},W=function(r){return i.a.get("/api/Repair_order/Repair_toolList",{params:{Repair_Orderno:r}})},A=function(r){return i.a.get("/api/Repair_order/DeleteRepair_tool?ID="+r)},L=function(r){return i.a.post("/api/Repair_order/Repair_Evaluate",r)},E=function(r){return i.a.get("/api/Maintenance_team/DeleteRepair_user",{params:{id:r}})},G=function(r){return i.a.post("/api/Maintenance_team/UpdateRepair_user",r)},N=function(r){return i.a.get("/api/Maintenance_team/User_RepairList",{params:{id:r}})}}});