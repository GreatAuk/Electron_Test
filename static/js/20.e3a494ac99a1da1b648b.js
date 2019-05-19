webpackJsonp([20,32],{1074:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(722),a=i(807),n=i(222),o=i(541),s=i.n(o);e.default={components:{exportToExcel:function(t){return i.e(146).then(function(){var e=[i(546)];t.apply(null,e)}.bind(this)).catch(i.oe)},HistoryDialog:s.a},data:function(){return{projectList:JSON.parse(sessionStorage.getItem("proList")),childSysOptions:[],typeTreeData:[],alarmData:[],typeTreeProps:{label:"name",children:"Child"},alarmTableLoading:!1,total:0,currentPage:1,pageSize:10,exportTableData:[],exportLoading:!1,searchForm:{uid:JSON.parse(sessionStorage.getItem("userInfo")).uid,pid:this.$store.state.app.pid,page:1,num:10,cstime_cetime:[],cstime:"",cetime:"",area:this.$store.state.app.pid,child:"",acontent:"",level:"",type:"",typeLabel:""},searchPoint:null,searchHisForm:{interval:"10",starttime:new Date((new Date).getTime()-144e5),endtime:new Date},searchHisFormRules:{starttime:[{type:"date",required:!0,message:"请选择开始时间",trigger:"change"}],endtime:[{type:"date",required:!0,message:"请选择结束时间",trigger:"change"}],interval:[{required:!0,message:"请输入时间间隔",trigger:"blur"}]},currentVideoUrl:"",videoDialog:!1,formVisible:!1,pointTypeList:[]}},computed:{projectId:function(){return this.$store.state.app.project.id}},watch:{projectId:function(t){this.searchForm.pid=t,this.searchForm.area=t,this.searchForm.page=1,this.currentPage=1,this.fetchAlarmData(this.searchForm)}},mounted:function(){this.fetchAlarmData(this.searchForm),this.fetchChildSysOptions(),this.fetchPointTypeList(this.$store.state.app.project.id)},methods:{typeTreeClick:function(t){this.searchForm.type=t.id,this.searchForm.typeLabel=t.name},handleFormVisible:function(){this.formVisible=!this.formVisible},searchAlarm:function(){this.searchForm.cstime="",this.searchForm.cetime="",this.searchForm.num=10,this.searchForm.page=1,this.searchForm.cstime_cetime.length&&(this.searchForm.cstime=this.searchForm.cstime_cetime[0]&&this.searchForm.cstime_cetime[0].format("yyyy/MM/dd hh:mm"),this.searchForm.cetime=this.searchForm.cstime_cetime[1]&&this.searchForm.cstime_cetime[1].format("yyyy/MM/dd hh:mm")),1===this.currentPage?this.fetchAlarmData():this.currentPage=1},resetForm:function(){this.searchForm.cstime_cetime=[],this.searchForm.cstime="",this.searchForm.cetime="",this.searchForm.child="",this.searchForm.acontent="",this.searchForm.level="",this.searchForm.type="",this.searchForm.typeLabel="",this.searchForm.pid=[],this.fetchAlarmData()},clickExport:function(){var t=this;this.exportLoading=!0,this.searchForm.num=this.total,this.searchForm.page=1,this.searchForm.cstime="",this.searchForm.cetime="",this.searchForm.cstime_cetime.length&&(this.searchForm.cstime=this.searchForm.cstime_cetime[0]&&this.searchForm.cstime_cetime[0].format("yyyy/MM/dd hh:mm"),this.searchForm.cetime=this.searchForm.cstime_cetime[1]&&this.searchForm.cstime_cetime[1].format("yyyy/MM/dd hh:mm")),i.i(a.g)(this.searchForm).then(function(e){var i=JSON.parse(e.data);if(i.list.length>1e3)return t.$message({type:"info",message:"当前系统只支持导出1000条以内的报警数据"}),!1;i.success?(t.exportTableData=i.list,t.$nextTick(function(){t.$refs.exportToExcel.createExcel(document.querySelector("#export-table"))})):t.$message({type:"info",message:"该时间段内暂无数据可供导出！"})}).catch(function(e){t.$message.error("服务器错误")}).then(function(){t.exportLoading=!1})},changeStatus:function(t){var e=this;this.$confirm("确认该报警 ？（确认后请及时处理）","提示",{type:"warning"}).then(function(){t.status="1",i.i(a.c)(t.id).then(function(t){"00"===JSON.parse(t.data).flag?(e.$message({type:"success",message:"报警已确认"}),e.fetchAlarmData(e.searchForm)):e.$message.error("服务器错误，确认失败")}).catch(function(t){e.$message.error("服务器错误，确认失败")})})},handleSizeChange:function(t){this.searchForm.num=t,this.fetchAlarmData(this.searchForm)},handleCurrentChange:function(t){this.searchForm.page=t,this.fetchAlarmData(this.searchForm)},openHistoryDialog:function(t,e){this.searchPoint=[parseInt(t)],this.$refs.historyDialog.toggleDialog()},videoDialogClose:function(){this.currentVideoUrl=""},tableRowClassName:function(t){var e=t.row;t.rowIndex;return"记录"===e.levelname?"":"一般"===e.levelname?"primary-row":"重要"===e.levelname?"warning-row":"danger-row"},openVideoDialog:function(t){var e=this;this.currentVideoUrl=t,this.videoDialog=!0,this.$nextTick(function(){var t={container:"#video",variable:"player",flashplayer:!1,autoplay:!0,video:e.currentVideoUrl};new ckplayer(t)})},fetchAlarmData:function(){var t=this;this.alarmTableLoading=!0,i.i(a.g)(this.searchForm).then(function(e){var i=JSON.parse(e.data);i.success?(t.alarmData=i.list,t.total=parseInt(i.totalcount)):(t.alarmData=[],t.total=0)}).catch(function(e){t.$message.error("服务器错误")}).then(function(){t.alarmTableLoading=!1})},fetchChildSysOptions:function(){var t=this;i.i(n.c)().then(function(e){for(var i=JSON.parse(e.data),r=[],a=0;a<i.length;a++)r.push({id:i[a].ID,name:i[a].TypeName});t.childSysOptions=r}).catch(function(t){})},fetchPointTypeList:function(t){var e=this;i.i(r.e)(t).then(function(t){var i=JSON.parse(t.data);e.pointTypeList=[{label:"状态量",options:i.State},{label:"模拟量",options:i.Analog}]})}}}},1246:function(t,e,i){e=t.exports=i(539)(),e.push([t.i,".alarming{border-radius:4px;overflow:hidden}.alarming-content{padding:24px 32px}.alarmtable-icon{font-size:18px;margin-right:10px;vertical-align:middle}.alarmtable-icon:hover{color:#20a0ff;cursor:pointer}.alarming .el-pagination{text-align:center;padding:20px 0 30px}.alarming .history-wrap{display:-ms-flexbox;display:flex}.alarming .history-chart{-ms-flex:1;flex:1}.alarming .history-form{-ms-flex:0 0 300px;flex:0 0 300px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.alarmpage-type-select{display:none}.alarmpage-type-popover .typeTree{height:300px;overflow:auto;border:none}.video-dialog{width:900px;border-radius:4px;overflow:hidden}.video-dialog .el-dialog__body,.video-dialog .el-dialog__header{padding:0}.circlepoint{display:inline-block;width:.6em;height:.6em;margin-right:5px;border-radius:50%}.el-table .info-row{background:#f4f4f5}.el-table .primary-row{background:#ecf6ff}.el-table .warning-row{background:#fdf6ec}.el-table .danger-row{background:#fef0f0}",""])},1376:function(t,e,i){var r=i(1246);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i(540)("6bb7c066",r,!0)},1529:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"alarming bg-fff"},[i("div",{staticClass:"alarming-content"},[i("el-form",{ref:"searchForm",attrs:{model:t.searchForm,"label-width":"70px"}},[i("el-row",{attrs:{gutter:48}},[i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"报警等级"}},[i("el-select",{staticStyle:{display:"block"},attrs:{placeholder:"请选择",size:"small"},model:{value:t.searchForm.level,callback:function(e){t.$set(t.searchForm,"level",e)},expression:"searchForm.level"}},[i("el-option",{attrs:{label:"全部",value:"0"}}),t._v(" "),i("el-option",{attrs:{label:"紧急",value:"1"}}),t._v(" "),i("el-option",{attrs:{label:"重要",value:"2"}}),t._v(" "),i("el-option",{attrs:{label:"一般",value:"3"}}),t._v(" "),i("el-option",{attrs:{label:"记录",value:"4"}})],1)],1)],1),t._v(" "),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"子系统"}},[i("el-select",{staticStyle:{display:"block"},attrs:{size:"small",placeholder:"请选择"},model:{value:t.searchForm.child,callback:function(e){t.$set(t.searchForm,"child",e)},expression:"searchForm.child"}},t._l(t.childSysOptions,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1)],1),t._v(" "),i("el-col",{directives:[{name:"show",rawName:"v-show",value:t.formVisible,expression:"formVisible"}],attrs:{span:8}},[i("el-form-item",{attrs:{label:"报警内容"}},[i("el-input",{attrs:{size:"small"},model:{value:t.searchForm.acontent,callback:function(e){t.$set(t.searchForm,"acontent","string"==typeof e?e.trim():e)},expression:"searchForm.acontent"}})],1)],1),t._v(" "),i("el-col",{directives:[{name:"show",rawName:"v-show",value:t.formVisible,expression:"formVisible"}],attrs:{span:8}},[i("el-form-item",{attrs:{label:"报警类型"}},[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择点位类型",size:"small"},model:{value:t.searchForm.type,callback:function(e){t.$set(t.searchForm,"type",e)},expression:"searchForm.type"}},t._l(t.pointTypeList,function(e){return i("el-option-group",{key:e.label,attrs:{label:e.label}},t._l(e.options,function(r){return i("el-option",{key:r.ID,attrs:{label:r.TypeName,value:r.ID}},[i("span",{staticStyle:{float:"left","margin-right":"25px"}},[t._v(t._s(r.TypeName))]),t._v(" "),"状态量"===e.label?i("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v(t._s(r.Value))]):t._e()])}),1)}),1)],1)],1),t._v(" "),i("el-col",{directives:[{name:"show",rawName:"v-show",value:t.formVisible,expression:"formVisible"}],attrs:{span:8}},[i("el-form-item",{attrs:{label:"触发时间"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{clearable:!1,size:"small",type:"datetimerange",placeholder:"选择起始时间"},model:{value:t.searchForm.cstime_cetime,callback:function(e){t.$set(t.searchForm,"cstime_cetime",e)},expression:"searchForm.cstime_cetime"}})],1)],1),t._v(" "),i("el-col",{style:{float:t.formVisible?"right":""},attrs:{span:8}},[i("el-form-item",{staticClass:"alarm-handleBox"},[i("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-search"},nativeOn:{click:function(e){return t.searchAlarm(e)}}},[t._v("\n              搜索\n            ")]),t._v(" "),i("el-button",{attrs:{size:"small",type:"danger",icon:"el-icon-refresh"},nativeOn:{click:function(e){return t.resetForm(e)}}},[t._v("\n              重置\n            ")]),t._v(" "),i("el-button",{attrs:{icon:"el-icon-document",loading:t.exportLoading,size:"small"},nativeOn:{click:function(e){return t.clickExport(e)}}},[t._v("\n              导出\n            ")]),t._v(" "),i("el-button",{attrs:{icon:t.formVisible?"el-icon-arrow-up":"el-icon-arrow-down",size:"small",type:"text"},on:{click:t.handleFormVisible}},[t._v("\n              "+t._s(t.formVisible?"收起":"展开")+"\n            ")])],1)],1)],1)],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.alarmTableLoading,expression:"alarmTableLoading"}],staticStyle:{width:"100%"},attrs:{data:t.alarmData,"element-loading-text":"加载中..."}},[i("el-table-column",{attrs:{type:"index",label:"#",width:"70"}}),t._v(" "),i("el-table-column",{attrs:{prop:"acttime",sortable:"",label:"触发时间","min-width":"120px"}}),t._v(" "),i("el-table-column",{attrs:{prop:"area",label:"项目","min-width":"100"}}),t._v(" "),i("el-table-column",{attrs:{prop:"child",label:"子系统"}}),t._v(" "),i("el-table-column",{attrs:{prop:"acontent",label:"报警内容","min-width":"300px"}}),t._v(" "),i("el-table-column",{attrs:{prop:"tname",label:"报警类型","min-width":"90"}}),t._v(" "),i("el-table-column",{attrs:{prop:"levelname",label:"报警级别","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tag",{attrs:{size:"small",type:"一般"===e.row.levelname?"primary":"记录"===e.row.levelname?"info":"重要"===e.row.levelname?"wraning":"danger"}},[t._v("\n            "+t._s(e.row.levelname)+"\n          ")])]}}])}),t._v(">\n      "),i("el-table-column",{attrs:{label:"操作",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.camera?i("c-svg",{attrs:{name:"monitor","class-name":"alarmtable-icon"},nativeOn:{click:function(i){return t.openVideoDialog(e.row.camera)}}}):t._e(),t._v(" "),i("c-svg",{attrs:{name:"chart","class-name":"alarmtable-icon"},nativeOn:{click:function(i){return t.openHistoryDialog(e.row.point)}}}),t._v(" "),i("el-button",{attrs:{type:"text"},nativeOn:{click:function(i){return t.changeStatus(e.row)}}},[t._v("\n            确认\n          ")])]}}])})],1),t._v(" "),i("table",{staticStyle:{display:"none"},attrs:{id:"export-table"}},[t._m(0),t._v(" "),t._l(t.exportTableData,function(e,r){return i("tr",{key:r},[i("td",[t._v(t._s(r+1))]),t._v(" "),i("td",[t._v(t._s(e.acttime+"."))]),t._v(" "),i("td",[t._v(t._s(e.area))]),t._v(" "),i("td",[t._v(t._s(e.child))]),t._v(" "),i("td",[t._v(t._s(e.acontent))]),t._v(" "),i("td",[t._v(t._s(e.tname))]),t._v(" "),i("td",[t._v(t._s(e.levelname))])])})],2),t._v(" "),i("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-size":t.pageSize,"page-sizes":[10,20,50,100],layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),i("HistoryDialog",{ref:"historyDialog",attrs:{"point-ids":t.searchPoint}}),t._v(" "),i("el-dialog",{attrs:{visible:t.videoDialog,"show-close":!1,"custom-class":"video-dialog"},on:{"update:visible":function(e){t.videoDialog=e},close:t.videoDialogClose}},[i("div",{staticStyle:{width:"900px",height:"600px"},attrs:{id:"video"}})]),t._v(" "),i("export-to-excel",{ref:"exportToExcel"})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("th",[t._v("#")]),t._v(" "),i("th",[t._v("触发时间")]),t._v(" "),i("th",[t._v("项目")]),t._v(" "),i("th",[t._v("子系统")]),t._v(" "),i("th",[t._v("报警内容")]),t._v(" "),i("th",[t._v("报警类型")]),t._v(" "),i("th",[t._v("报警级别")])])}]}},541:function(t,e,i){i(708);var r=i(38)(i(706),i(709),null,null);t.exports=r.exports},573:function(t,e,i){i(1376);var r=i(38)(i(1074),i(1529),null,null);t.exports=r.exports},684:function(t,e,i){var r=i(133)("meta"),a=i(58),n=i(69),o=i(59).f,s=0,l=Object.isExtensible||function(){return!0},c=!i(68)(function(){return l(Object.preventExtensions({}))}),u=function(t){o(t,r,{value:{i:"O"+ ++s,w:{}}})},m=function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!n(t,r)){if(!l(t))return"F";if(!e)return"E";u(t)}return t[r].i},p=function(t,e){if(!n(t,r)){if(!l(t))return!0;if(!e)return!1;u(t)}return t[r].w},h=function(t){return c&&d.NEED&&l(t)&&!n(t,r)&&u(t),t},d=t.exports={KEY:r,NEED:!1,fastKey:m,getWeak:p,onFreeze:h}},685:function(t,e,i){var r=i(58);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},686:function(t,e,i){var r=i(70);t.exports=Array.isArray||function(t){return"Array"==r(t)}},687:function(t,e,i){t.exports={default:i(688),__esModule:!0}},688:function(t,e,i){i(215),i(134),i(213),i(698),i(701),i(700),i(699),t.exports=i(14).Set},689:function(t,e,i){var r=i(210);t.exports=function(t,e){var i=[];return r(t,!1,i.push,i,e),i}},690:function(t,e,i){var r=i(60),a=i(136),n=i(72),o=i(90),s=i(692);t.exports=function(t,e){var i=1==t,l=2==t,c=3==t,u=4==t,m=6==t,p=5==t||m,h=e||s;return function(e,s,d){for(var f,v,g=n(e),y=a(g),b=r(s,d,3),_=o(y.length),w=0,x=i?h(e,_):l?h(e,0):void 0;_>w;w++)if((p||w in y)&&(f=y[w],v=b(f,w,g),t))if(i)x[w]=v;else if(v)switch(t){case 3:return!0;case 5:return f;case 6:return w;case 2:x.push(f)}else if(u)return!1;return m?-1:c||u?u:x}}},691:function(t,e,i){var r=i(58),a=i(686),n=i(21)("species");t.exports=function(t){var e;return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)||(e=void 0),r(e)&&null===(e=e[n])&&(e=void 0)),void 0===e?Array:e}},692:function(t,e,i){var r=i(691);t.exports=function(t,e){return new(r(t))(e)}},693:function(t,e,i){"use strict";var r=i(59).f,a=i(214),n=i(212),o=i(60),s=i(211),l=i(210),c=i(137),u=i(216),m=i(217),p=i(61),h=i(684).fastKey,d=i(685),f=p?"_s":"size",v=function(t,e){var i,r=h(e);if("F"!==r)return t._i[r];for(i=t._f;i;i=i.n)if(i.k==e)return i};t.exports={getConstructor:function(t,e,i,c){var u=t(function(t,r){s(t,u,e,"_i"),t._t=e,t._i=a(null),t._f=void 0,t._l=void 0,t[f]=0,void 0!=r&&l(r,i,t[c],t)});return n(u.prototype,{clear:function(){for(var t=d(this,e),i=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete i[r.i];t._f=t._l=void 0,t[f]=0},delete:function(t){var i=d(this,e),r=v(i,t);if(r){var a=r.n,n=r.p;delete i._i[r.i],r.r=!0,n&&(n.n=a),a&&(a.p=n),i._f==r&&(i._f=a),i._l==r&&(i._l=n),i[f]--}return!!r},forEach:function(t){d(this,e);for(var i,r=o(t,arguments.length>1?arguments[1]:void 0,3);i=i?i.n:this._f;)for(r(i.v,i.k,this);i&&i.r;)i=i.p},has:function(t){return!!v(d(this,e),t)}}),p&&r(u.prototype,"size",{get:function(){return d(this,e)[f]}}),u},def:function(t,e,i){var r,a,n=v(t,e);return n?n.v=i:(t._l=n={i:a=h(e,!0),k:e,v:i,p:r=t._l,n:void 0,r:!1},t._f||(t._f=n),r&&(r.n=n),t[f]++,"F"!==a&&(t._i[a]=n)),t},getEntry:v,setStrong:function(t,e,i){c(t,e,function(t,i){this._t=d(t,e),this._k=i,this._l=void 0},function(){for(var t=this,e=t._k,i=t._l;i&&i.r;)i=i.p;return t._t&&(t._l=i=i?i.n:t._t._f)?"keys"==e?u(0,i.k):"values"==e?u(0,i.v):u(0,[i.k,i.v]):(t._t=void 0,u(1))},i?"entries":"values",!i,!0),m(e)}}},694:function(t,e,i){var r=i(135),a=i(689);t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return a(this)}}},695:function(t,e,i){"use strict";var r=i(15),a=i(39),n=i(684),o=i(68),s=i(52),l=i(212),c=i(210),u=i(211),m=i(58),p=i(89),h=i(59).f,d=i(690)(0),f=i(61);t.exports=function(t,e,i,v,g,y){var b=r[t],_=b,w=g?"set":"add",x=_&&_.prototype,S={};return f&&"function"==typeof _&&(y||x.forEach&&!o(function(){(new _).entries().next()}))?(_=e(function(e,i){u(e,_,t,"_c"),e._c=new b,void 0!=i&&c(i,g,e[w],e)}),d("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in x&&(!y||"clear"!=t)&&s(_.prototype,t,function(i,r){if(u(this,_,t),!e&&y&&!m(i))return"get"==t&&void 0;var a=this._c[t](0===i?0:i,r);return e?this:a})}),y||h(_.prototype,"size",{get:function(){return this._c.size}})):(_=v.getConstructor(e,t,g,w),l(_.prototype,i),n.NEED=!0),p(_,t),S[t]=_,a(a.G+a.W+a.F,S),y||v.setStrong(_,t,g),_}},696:function(t,e,i){"use strict";var r=i(39),a=i(71),n=i(60),o=i(210);t.exports=function(t){r(r.S,t,{from:function(t){var e,i,r,s,l=arguments[1];return a(this),e=void 0!==l,e&&a(l),void 0==t?new this:(i=[],e?(r=0,s=n(l,arguments[2],2),o(t,!1,function(t){i.push(s(t,r++))})):o(t,!1,i.push,i),new this(i))}})}},697:function(t,e,i){"use strict";var r=i(39);t.exports=function(t){r(r.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},698:function(t,e,i){"use strict";var r=i(693),a=i(685);t.exports=i(695)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(a(this,"Set"),t=0===t?0:t,t)}},r)},699:function(t,e,i){i(696)("Set")},700:function(t,e,i){i(697)("Set")},701:function(t,e,i){var r=i(39);r(r.P+r.R,"Set",{toJSON:i(694)("Set")})},702:function(t,e,i){var r,a=a||function(t){"use strict";if(!(void 0===t||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var e=t.document,i=function(){return t.URL||t.webkitURL||t},r=e.createElementNS("http://www.w3.org/1999/xhtml","a"),a="download"in r,n=function(t){var e=new MouseEvent("click");t.dispatchEvent(e)},o=/constructor/i.test(t.HTMLElement)||t.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent),l=function(e){(t.setImmediate||t.setTimeout)(function(){throw e},0)},c=function(t){var e=function(){"string"==typeof t?i().revokeObjectURL(t):t.remove()};setTimeout(e,4e4)},u=function(t,e,i){e=[].concat(e);for(var r=e.length;r--;){var a=t["on"+e[r]];if("function"==typeof a)try{a.call(t,i||t)}catch(t){l(t)}}},m=function(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t},p=function(e,l,p){p||(e=m(e));var h,d=this,f=e.type,v="application/octet-stream"===f,g=function(){u(d,"writestart progress write writeend".split(" "))};if(d.readyState=d.INIT,a)return h=i().createObjectURL(e),void setTimeout(function(){r.href=h,r.download=l,n(r),g(),c(h),d.readyState=d.DONE});!function(){if((s||v&&o)&&t.FileReader){var r=new FileReader;return r.onloadend=function(){var e=s?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");t.open(e,"_blank")||(t.location.href=e),e=void 0,d.readyState=d.DONE,g()},r.readAsDataURL(e),void(d.readyState=d.INIT)}if(h||(h=i().createObjectURL(e)),v)t.location.href=h;else{t.open(h,"_blank")||(t.location.href=h)}d.readyState=d.DONE,g(),c(h)}()},h=p.prototype,d=function(t,e,i){return new p(t,e||t.name||"download",i)};return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,i){return e=e||t.name||"download",i||(t=m(t)),navigator.msSaveOrOpenBlob(t,e)}:(h.abort=function(){},h.readyState=h.INIT=0,h.WRITING=1,h.DONE=2,h.error=h.onwritestart=h.onprogress=h.onwrite=h.onabort=h.onerror=h.onwriteend=null,d)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);void 0!==t&&t.exports?t.exports.saveAs=a:null!==i(703)&&null!==i(704)&&void 0!==(r=function(){return a}.call(e,i,e,t))&&(t.exports=r)},703:function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},704:function(t,e){(function(e){t.exports=e}).call(e,{})},705:function(t,e,i){"use strict";i.d(e,"b",function(){return o}),i.d(e,"a",function(){return s});var r=i(32),a=i(219),n=i.n(a),o=function(t){var e=t.companyId,i=t.waybillNumOrTagId,a=t.pageIndex,n=t.pageSize;return r.a.get(BASE_URI+"/api/Device/GetWaybillPage",{params:{companyId:e,waybillNumOrTagId:i,pageIndex:a,pageSize:n}})},s=function(t){var e=t.start,i=t.end,a=t.pointIdList,o=t.tmes;return r.a.get(BASE_URI+"/api/Device/GetPointData",{params:{start:e,end:i,pointIdList:a,tmes:o},paramsSerializer:function(t){return n.a.stringify(t,{indices:!1})}})}},706:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(218),a=i.n(r),n=i(220),o=i.n(n),s=i(687),l=i.n(s),c=i(132),u=i.n(c),m=i(705),p=i(702),h=(i.n(p),i(138));e.default={props:{type:{type:String,default:function(){""}},pointIds:{type:Array,default:function(){return[]}},interval:{type:Number,default:function(){return 5}},startTime:{type:Date,default:function(){return new Date((new Date).getTime()-864e5)}},endTime:{type:Date,default:function(){return new Date}}},data:function(){return{dialogVisible:!1,form:{interval:this.interval,startTime:this.startTime,endTime:this.endTime},formRules:{startTime:[{type:"date",required:!0,message:"选择开始时间",trigger:"change"}],endTime:[{type:"date",required:!0,message:"选择结束时间",trigger:"change"}],interval:[{required:!0,message:"输入时间间隔(整数)",type:"number",trigger:"blur"}]},pointType:0,showStatistical:!1,showThreshold:!1,pdfLoading:!1,chartLoading:!1}},computed:{industry:function(){return this.$store.state.app.company.industry}},watch:{pointIds:function(t){t&&t.length&&this.fetchChartSeries()},startTime:function(t){this.form.startTime=t},endTime:function(t){this.form.endTime=t},interval:function(t){this.form.interval=t},dialogVisible:function(t){var e=this;t&&this.$nextTick(function(){e.myChart=echarts.init(document.getElementById("echart-wrap"))})}},mounted:function(){this.chartSeries=null},beforeDestroy:function(){},methods:{toggleDialog:function(){this.dialogVisible=!this.dialogVisible},thresholdChang:function(t){this.drawChart()},statisticalChange:function(t){this.drawChart()},search:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.fetchChartSeries()})},downPDF:function(t){var e=this;this.$refs[t].validate(function(t){t&&(e.pdfLoading=!0,e.fetchChartSeries())})},downImg:function(){i.i(p.saveAs)(i.i(h.b)(this.myChart.getDataURL()),"chart.jpg")},downloadExcel:function(t){var e=this;this.$refs[t].validate(function(t){if(t){var i=e._dateFormat(e.form.startTime,"YYYY-MM-DD HH:mm"),r=e._dateFormat(e.form.endTime,"YYYY-MM-DD HH:mm");window.location.href=_host+"/api/Report/downHistoryData?id="+e.pointIds.join(",")+"&start="+i+"&end="+r+"&tmes="+e.form.interval}})},fetchChartSeries:function(){var t=this;this.chartLoading=!0,i.i(m.a)({start:this._dateFormat(this.form.startTime,"YYYY-MM-DD HH:mm"),end:this._dateFormat(this.form.endTime,"YYYY-MM-DD HH:mm"),pointIdList:this.pointIds,tmes:this.form.interval}).then(function(e){if(200===e.data.Code){t.dataSource=e.data.Data;var i=e.data.Data.PointList;if(!i)return t.$message("无点位数据"),!1;var r=i.map(function(t){return t.PointType});if(t.legends=i.map(function(t){return t.PointName}),1!==[].concat(u()(new l.a(r))).length)return t.$message({message:"选中的多个点位不是同一类型，无法合理显示",type:"info",duration:5e3}),!1;t.pointType=r[0],0===t.pointType&&(t.showStatistical=!0);var a=[];i.forEach(function(t){for(var e=0,i=t.DataList.length;e<i;e++)t.DataList[e]=[t.DataList[e].Time,t.DataList[e].Value];t.unitMap={},t.UnitMap&&t.UnitMap.forEach(function(e){t.unitMap[e.key]=e.value}),a.push({animation:!1,name:t.PointName,type:"line",unit:t.Unit,step:1===t.PointType?"start":"",smooth:!1,yAxisData:1===t.PointType?o()(t.unitMap).map(function(t){return parseInt(t)}):"",pointType:t.PointType,unitMap:t.unitMap,data:t.DataList,markLine:{data:[]},statisticalmarkLineData:[{type:"average",name:"",lineStyle:{type:"dashed"},label:{normal:{formatter:function(t){return t.value.toFixed(1)}}}}],ThresholdmarkLineData:function(){var e=[];return t.SuperLowerLimit&&e.push({yAxis:t.SuperLowerLimit,lineStyle:{color:"#B03A5B",type:"dotted"},label:{show:!0,position:"middle",formatter:function(e){return"下下限("+t.PointName+"): "+t.SuperLowerLimit}}}),t.SuperUpperLimit&&e.push({yAxis:t.SuperUpperLimit,lineStyle:{color:"#B03A5B",type:"dotted"},label:{show:!0,position:"middle",formatter:function(e){return"上上限("+t.PointName+"): "+t.SuperUpperLimit}}}),t.UpperLimit&&e.push({yAxis:t.UpperLimit,lineStyle:{color:"#B03A5B",type:"dotted"},label:{show:!0,position:"middle",formatter:function(e){return"上限("+t.PointName+"): "+t.UpperLimit}}}),t.LowerLimit&&e.push({yAxis:t.LowerLimit,lineStyle:{color:"#B03A5B",type:"dotted"},label:{show:!0,position:"middle",formatter:function(e){return"下限("+t.PointName+"): "+t.LowerLimit}}}),e}(),markPointCopy:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},superLowerLimit:t.SuperLowerLimit,superUpperLimit:t.SuperUpperLimit,upperLimit:t.UpperLimit,lowerLimit:t.LowerLimit})}),t.chartSeries=a,t.drawChart()}else t.$message.error("历史数据查询失败")}).catch(function(e){t.$message.error("历史数据查询失败")}).finally(function(){t.chartLoading=!1})},drawChart:function(){var t=this;this.myChart&&this.myChart.clear(),this.chartSeries.forEach(function(e){if(e.markLine.data=[],t.showStatistical){var i;e.markPoint=e.markPointCopy,(i=e.markLine.data).push.apply(i,u()(e.statisticalmarkLineData))}else delete e.markPoint;if(t.showThreshold){var r;e.ThresholdmarkLineData.length||(1===t.chartSeries.length?t.$message("选中点位没有设置阈值"):t.$message("存在点位没有设置阈值")),(r=e.markLine.data).push.apply(r,u()(e.ThresholdmarkLineData))}});var e={color:["#2297E8","#48CE38","#F8D156","#FD9827","#9764DC","#1FCA6A"],grid:{left:60,right:100,bottom:80,top:40},dataZoom:[{type:"slider",xAxisIndex:0,filterMode:"empty",handleIcon:"M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"90%"},{type:"inside",xAxisIndex:0,filterMode:"empty"}],legend:{show:!0},tooltip:{trigger:"axis",formatter:function(e){for(var i=t._dateFormat(e[0].axisValue,"YYYY-MM-DD HH:mm")+"<br/>",r=0;r<e.length;r++)i+=function(t){return'<i class="circlepoint" style="background: '+t+'"></i>'}(e[r].color)+" "+e[r].seriesName+"："+(null===e[r].value[1]?"无数据":e[r].value[1])+" <br/>";return i}},xAxis:{type:"time",axisLabel:{formatter:function(e,i){return t._dateFormat(e,"YYYY-MM-DD HH:mm")}},splitLine:{show:!1}},series:this.chartSeries},r={};if(r=this.chartSeries.length&&this.chartSeries[0].step?{yAxis:{type:"value",name:this.chartSeries[0].data.length?"单位:"+this.chartSeries[0].unit:"",boundaryGap:["20%","20%"],minInterval:1,axisLabel:{show:!0,formatter:function(e){if(t.chartSeries[0].unitMap[e])return t.chartSeries[0].unitMap[e]}}}}:{yAxis:{type:"value",name:this.chartSeries[0].data.length?"单位:"+this.chartSeries[0].unit:"",scale:!1,boundaryGap:["20%","20%"]}},1!==this.chartSeries[0].pointType&&e.dataZoom.push({type:"slider",yAxisIndex:0,filterMode:"empty",handleIcon:"M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"90%"}),this.myChart.setOption(a()(e,r)),!0===this.pdfLoading){this.dataSource.startTime=this._dateFormat(this.form.startTime,"YYYY-MM-DD HH:mm"),this.dataSource.endTime=this._dateFormat(this.form.endTime,"YYYY-MM-DD HH:mm");try{var n=i.i(h.c)(this.myChart.getDataURL(),this.dataSource),o=new URLSearchParams;o.append("html",n),fetch("https://sinocold.net:8443/api/Report/DownloadDataPDF",{method:"POST",body:o,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){return t.json()}).then(function(t){window.open("https://sinocold.net:8443"+t)}).catch(function(e){t.$message.error("导出失败")}).finally(function(){t.pdfLoading=!1})}catch(t){this.pdfLoading=!1,this.$message.error("导出失败")}}},historyDialogClose:function(){this.myChart&&this.myChart.clear(),this.chartSeries=[],this.showStatistical=!1,this.showThreshold=!1,this.form.interval=this.interval,this.form.startTime=new Date((new Date).getTime()-864e5),this.form.endTime=new Date}}}},707:function(t,e,i){e=t.exports=i(539)(),e.push([t.i,".history-dialog-wrap .circlepoint{display:inline-block;width:.6em;height:.6em;margin-right:5px;border-radius:50%}",""])},708:function(t,e,i){var r=i(707);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i(540)("060cc275",r,!0)},709:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{title:"历史数据",visible:t.dialogVisible,width:"1300px",top:"10vh"},on:{"update:visible":function(e){t.dialogVisible=e},close:t.historyDialogClose}},[i("div",{staticClass:"history-dialog-wrap"},[i("div",[i("el-form",{ref:"form",staticStyle:{"margin-left":"45px"},attrs:{model:t.form,rules:t.formRules,inline:"",size:"medium","hide-required-asterisk":!0}},[i("el-form-item",{attrs:{label:"时间范围：",prop:"startTime"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{format:"yyyy-MM-dd HH:mm",editable:!1,type:"datetime",placeholder:"选择日期"},model:{value:t.form.startTime,callback:function(e){t.$set(t.form,"startTime",e)},expression:"form.startTime"}})],1),t._v(" "),i("span",{staticStyle:{"margin-right":"10px",position:"relative",top:"9px"}},[t._v("-")]),t._v(" "),i("el-form-item",{attrs:{prop:"endTime"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{format:"yyyy-MM-dd HH:mm",editable:!1,type:"datetime",placeholder:"选择日期"},model:{value:t.form.endTime,callback:function(e){t.$set(t.form,"endTime",e)},expression:"form.endTime"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"间隔：",prop:"interval"}},[i("el-input",{attrs:{placeholder:"分钟"},model:{value:t.form.interval,callback:function(e){t.$set(t.form,"interval",t._n("string"==typeof e?e.trim():e))},expression:"form.interval"}})],1),t._v(" "),i("span",{staticStyle:{position:"relative",top:"9px"}},[t._v("分钟")]),t._v(" "),i("el-form-item",{staticStyle:{"margin-left":"20px"}},[i("el-button",{attrs:{loading:t.chartLoading,size:"medium",type:"primary"},nativeOn:{click:function(e){return t.search("form")}}},[t._v("\n            查看数据\n          ")])],1),t._v(" "),i("div",[i("el-form-item",{attrs:{label:"数据操作："}},[1!==t.industry?i("el-button",{attrs:{size:"medium"},nativeOn:{click:function(e){return t.downloadExcel("form")}}},[t._v("\n              下载excel\n            ")]):t._e(),t._v(" "),i("el-button",{attrs:{loading:t.pdfLoading,size:"medium"},nativeOn:{click:function(e){return t.downPDF("form")}}},[t._v("\n              下载pdf\n            ")]),t._v(" "),i("el-button",{attrs:{size:"medium"},nativeOn:{click:function(e){return t.downImg(e)}}},[t._v("\n              下载图表\n            ")])],1),t._v(" "),i("el-form-item",{staticStyle:{"margin-left":"15px"},attrs:{label:"显示统计"}},[i("el-switch",{staticStyle:{"margin-left":"10px",position:"relative",top:"-3px"},attrs:{disabled:1===t.pointType},on:{change:t.statisticalChange},model:{value:t.showStatistical,callback:function(e){t.showStatistical=e},expression:"showStatistical"}})],1),t._v(" "),i("el-form-item",{staticStyle:{"margin-left":"15px"},attrs:{label:"显示阈值"}},[i("el-switch",{staticStyle:{"margin-left":"10px",position:"relative",top:"-3px"},attrs:{disabled:1===t.pointType},on:{change:t.thresholdChang},model:{value:t.showThreshold,callback:function(e){t.showThreshold=e},expression:"showThreshold"}})],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"history-chart"},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.chartLoading,expression:"chartLoading"}],staticStyle:{"min-width":"400px",height:"450px"},attrs:{id:"echart-wrap","element-loading-text":"加载中..."}})])])])},staticRenderFns:[]}},722:function(t,e,i){"use strict";i.d(e,"c",function(){return a}),i.d(e,"e",function(){return n}),i.d(e,"a",function(){return o}),i.d(e,"b",function(){return s}),i.d(e,"d",function(){return l}),i.d(e,"g",function(){return c}),i.d(e,"h",function(){return u}),i.d(e,"i",function(){return m}),i.d(e,"j",function(){return p}),i.d(e,"f",function(){return h});var r=i(32),a=function(t){return r.a.post("/api/PointType/PointTypeInsert",t)},n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r.a.get("/api/PointType/PointTypeList",{params:{projectId:t,TypeName:e}})},o=function(t){return r.a.post("/api/PointType/PointTypeDelete",t)},s=function(t,e){return r.a.get("/api/PointType/PointTypeQuery",{params:{ID:t,projectId:e}})},l=function(t){return r.a.post("/api/PointType/PointTypeUpdate",t)},c=function(t){return r.a.post("/api/EditPoint/GetModePointType",t)},u=function(t){return r.a.post("/api/EditPoint/GetModePointUnit",t)},m=function(t){return r.a.post("/api/EditPoint/updateDmpSetS",t)},p=function(t){return r.a.post("/api/EditPoint/QueryModelSWList",t)},h=function(t){return r.a.post("/api/EditPoint/GetProjectdmpTable",t)}},807:function(t,e,i){"use strict";i.d(e,"d",function(){return a}),i.d(e,"b",function(){return n}),i.d(e,"g",function(){return o}),i.d(e,"f",function(){return s}),i.d(e,"e",function(){return l}),i.d(e,"c",function(){return c}),i.d(e,"a",function(){return u});var r=i(32),a=function(t){return r.a.post("/api/Alarm/getClearTable",t)},n=function(t){return r.a.post("/api/Alarm/getAckedTable",t)},o=function(t){return r.a.post("/api/Alarm/getActivTable",t)},s=function(t){return r.a.get("/api/Alarm/queryDetail",{params:{id:t}})},l=function(t){return r.a.post("/api/Alarm/upDetail",t)},c=function(t){return r.a.get("/api/Alarm/updateStatus",{params:{id:t}})},u=function(t,e,i,a){return r.a.get("/api/Report/dataInfo",{params:{id:t,start:e,end:i,tmes:a}})}}});