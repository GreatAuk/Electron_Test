webpackJsonp([60],{1145:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t(710);a.default={data:function(){return{activeName:null,tabList:[],deviceName:"",deviceList:[],deviceTable:[],radio:"列表模式",mname:null,port:_host,tableParams:{page:1,num:10,project:JSON.parse(sessionStorage.getItem("project")).id,sid:null,mname:"",pname:"",stime:"",etime:"",status:-2},tableTotal:0,cardParams:{page:1,num:12,total:0},tabLoading:!0,videoDialog:!1,videoUrl:"",searchForm:{deviceName:""}}},mounted:function(){this.$route.query.sid?(this.tableParams.sid=this.$route.query.sid,sessionStorage.setItem("subsystemId",this.$route.query.sid),this.fetchtab()):(this.tableParams.sid=sessionStorage.setItem("subsystemId"),this.fetchtab())},methods:{fetchtab:function(){var e=this;t.i(i.b)(this.tableParams.project,this.tableParams.sid).then(function(a){e.tabList=JSON.parse(a.data),e.tabList.forEach(function(e){e.id=e.id.toString()}),e.activeName=e.tabList[0].id,e.mname=e.tabList[0].mname,e.fetchdeviceCard(),e.fetchdeviceTable()}).catch(function(e){})},fetchdeviceCard:function(){var e=this;this.tabLoading=!0,t.i(i.c)(this.tableParams.project,this.tableParams.sid,this.activeName,this.searchForm.deviceName,this.cardParams.page,this.cardParams.num).then(function(a){JSON.parse(a.data).success?(e.deviceList=JSON.parse(a.data).list,e.cardParams.total=JSON.parse(a.data).totalcount,e.tabLoading=!1):(e.deviceList=[],e.tabLoading=!1)}).catch(function(e){})},fetchdeviceTable:function(){var e=this;this.tabLoading=!0,this.tableParams.pname=this.searchForm.deviceName,t.i(i.a)(this.tableParams).then(function(a){JSON.parse(a.data).success?(e.deviceTable=JSON.parse(a.data).list,e.tableTotal=Number(JSON.parse(a.data).total),e.tabLoading=!1):(e.deviceTable=[],e.tableTotal=0,e.tabLoading=!1)})},searchDevice:function(){"卡片模式"===this.radio?this.fetchdeviceCard():this.fetchdeviceTable()},switchModel:function(e){"卡片模式"===e?this.fetchdeviceCard():this.fetchdeviceTable()},tableheaderClass:function(e,a){return"header-row"},resetForm:function(){this.searchForm.deviceName="","卡片模式"===this.radio?this.fetchdeviceCard():this.fetchdeviceTable()},getsubId:function(e,a){this.searchForm.deviceName="",this.cardParams.page=1,this.cardParams.num=12,this.fetchdeviceCard(),this.tableParams.page=1,this.tableParams.num=10,this.fetchdeviceTable()},handleSizeChange2:function(e){this.tableParams.num=e,this.fetchdeviceTable()},handleCurrentChange2:function(e){this.tableParams.page=e,this.fetchdeviceTable()},handleCurrentChange:function(e){this.cardParams.page=e,this.fetchdeviceCard()},handleSizeChange:function(e){this.cardParams.num=e,this.fetchdeviceCard()},openVideo:function(e){var a=this;this.videoUrl=e,this.videoDialog=!0,this.$nextTick(function(){var e={container:"#video",variable:"player",flashplayer:!1,autoplay:!0,video:a.videoUrl};new ckplayer(e)})}}}},1306:function(e,a,t){a=e.exports=t(539)(),a.push([e.i,'.device-container{position:relative}.device-container .device-wrap{box-sizing:border-box;background:#fff;padding:24px 32px;overflow:hidden;border-radius:4px}.device-container .device-wrap .handleWrapper{position:relative;margin-top:3px}.device-container .searchWrap{position:absolute;right:0;top:0}.device-container .searchWrap .el-input{width:75%;float:left}.device-container .searchWrap .el-button{width:20%;float:right}.device-container .el-tabs__content{overflow:inherit}.device-container .el-tabs__nav-scroll{padding-left:40px;background:#fff}.device-container .device-btn-wrap{position:absolute;top:0;right:0}.device-container .device-btn-wrap .searchcardWrap{float:right}.device-container .device-btn-wrap .searchcardWrap .el-input{width:75%;float:left}.device-container .device-btn-wrap .searchcardWrap .el-button{width:20%;float:right}.device-container .device-btn-wrap .searchtableWrap{float:right}.device-container .device-btn-wrap .searchtableWrap .el-input{width:29%;float:left}.device-container .device-btn-wrap .searchtableWrap .el-select{width:29%;float:left;margin:0 10px}.device-container .device-btn-wrap .searchtableWrap .el-button{float:right}.device-container .device-btn-wrap .switchWrap{float:left;margin-right:10px;margin-top:1px}.device-container .device-card{box-sizing:border-box;padding:10px}@media (max-width:1380px){.device-container .device-card{width:25%}}@media (max-width:1000px){.device-container .device-card{width:33.33333%}}.device-container .device-card .deviceLink{color:#303133;display:block}.device-container .device-card .deviceLink .device-pic{width:100%;height:120px;display:block;background:#dedde0;text-align:center}.device-container .device-card .deviceLink .device-pic img{height:100%;width:auto}.device-container .device-card .deviceLink .device-pic .active{height:50%;vertical-align:middle}.device-container .device-card .deviceLink .device-pic .noimg{width:0;height:100%;display:inline-block;vertical-align:middle}.device-container .device-card .deviceLink .device-card_name{font-size:18px;margin-bottom:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.device-container .device-card .deviceLink .device-card_params{height:100px;width:100%;padding:10px 0;box-sizing:border-box}.device-container .device-card .deviceLink .device-card_params .point-param{line-height:20px}.device-container .device-card .deviceLink .device-card_params .point-param .point-param_title{float:left;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.device-container .device-card .deviceLink .device-card_params .point-param .point-param_value{float:right;width:20%;text-align:right}.device-container .device-card .deviceLink .device-card_title{line-height:25px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.device-container .device-card .deviceLink .device-card_btnwrapper{display:block}.device-container .device-card .deviceLink .device-card_btnwrapper:after,.device-container .device-card .deviceLink .device-card_btnwrapper:before{display:table;content:""}.device-container .device-card .deviceLink .device-card_btnwrapper:after{clear:both}.device-container .device-card .deviceLink .device-card_btnwrapper .device-card_button{float:right}.device-container .el-table .danger-row{background:#fef0f0}.device-container .el-table .header-row th{background:#f2f6fc}.device-container .online:before{background:green}.device-container .offline:before,.device-container .online:before{content:"";display:inline-block;width:.6em;height:.6em;margin-right:6px;border-radius:50%}.device-container .offline:before{background:#dbdbdb}.device-container .normal{color:#1890ff}.device-container .active{color:#f56c6c}.device-container .currentValue,.device-container .device-card_a{color:#1890ff}',""])},1307:function(e,a,t){a=e.exports=t(539)(),a.push([e.i,".device-container[data-v-ab6a0b4a]{padding-top:0}.device-container .device-wrapper[data-v-ab6a0b4a]{padding-top:40px}.device-container .searchBtn[data-v-ab6a0b4a]{position:absolute;top:10px;left:48%}.device-container .switchWrap[data-v-ab6a0b4a]{position:absolute;top:6px;right:10px}.device-container .params-container[data-v-ab6a0b4a]{border-radius:4px}.device-container .params-container .params-content[data-v-ab6a0b4a]{padding:15px;background:#fff}.device-container .params-container .params-content .searchBtn[data-v-ab6a0b4a]{position:absolute;top:10px;left:48%}.device-container .searchcardWrap[data-v-ab6a0b4a]{float:left;margin-right:10px}.device-container .searchcardWrap .el-input[data-v-ab6a0b4a]{width:75%;float:left}.device-container .searchcardWrap .el-button[data-v-ab6a0b4a]{width:20%;float:right}.device-container .video-wrapper[data-v-ab6a0b4a]{text-align:center;overflow:hidden}",""])},1436:function(e,a,t){var i=t(1306);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(540)("773c21e3",i,!0)},1437:function(e,a,t){var i=t(1307);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(540)("56fe03aa",i,!0)},1582:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"device-container"},[t("el-tabs",{directives:[{name:"loading",rawName:"v-loading",value:e.tabLoading,expression:"tabLoading"}],staticClass:"device-tab",attrs:{"element-loading-text":"加载中..."},on:{"tab-click":e.getsubId},model:{value:e.activeName,callback:function(a){e.activeName=a},expression:"activeName"}},e._l(e.tabList,function(a){return t("el-tab-pane",{key:a.index,staticClass:"pdg",attrs:{name:a.id,label:a.mname}},[t("div",{staticClass:"device-wrap"},[t("el-form",{ref:"searchForm",refInFor:!0,attrs:{model:e.searchForm,"label-width":"70px"}},[t("el-row",{attrs:{gutter:48}},[t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"设备名称"}},[t("el-input",{attrs:{size:"small",placeholder:"请输入"},model:{value:e.searchForm.deviceName,callback:function(a){e.$set(e.searchForm,"deviceName","string"==typeof a?a.trim():a)},expression:"searchForm.deviceName"}})],1)],1),e._v(" "),t("el-col",{staticClass:"handleWrapper",attrs:{span:8}},[t("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-search"},on:{click:e.searchDevice}},[e._v("\n                搜索\n              ")]),e._v(" "),t("el-button",{attrs:{size:"small",icon:"el-icon-refresh",type:"danger"},on:{click:e.resetForm}},[e._v("\n                重置\n              ")])],1)],1)],1),e._v(" "),t("el-row",{staticClass:"mgb20"},[t("el-col",{attrs:{xs:24,sm:8,md:6,lg:4}},[t("el-radio-group",{attrs:{size:"small"},on:{change:e.switchModel},model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[t("el-radio-button",{attrs:{label:"列表模式"}}),e._v(" "),t("el-radio-button",{attrs:{label:"卡片模式"}})],1)],1)],1),e._v(" "),"卡片模式"===e.radio?t("el-row",e._l(e.deviceList,function(a){return t("el-col",{key:a.mtid,staticClass:"device-card",attrs:{xs:24,sm:8,md:6,lg:4}},[t("router-link",{staticClass:"deviceLink",attrs:{to:{path:"/monitor/videoTable",query:{mtid:a.mtid,sid:e.$route.query.sid}}}},[t("div",{staticClass:"deviceLink"},[t("el-card",{attrs:{"body-style":{padding:"0px"}}},[t("div",{staticStyle:{padding:"14px"}},[t("div",{staticClass:"device-card_name"},[e._v("\n                      "+e._s(a.name)+"\n                    ")]),e._v(" "),t("div",{staticClass:"device-card_title"},[e._v("\n                      位置："+e._s(a.area)+"\n                    ")]),e._v(" "),t("div",{staticClass:"device-card_title",staticStyle:{"padding-top":"10px"}},[e._v("\n                      数量：\n                      "),t("span",{staticStyle:{float:"right",color:"#1890ff"}},[e._v(e._s(a.num))])])])])],1)])],1)}),1):t("el-row",[t("el-col",{attrs:{span:24}},[t("el-table",{attrs:{data:e.deviceTable,fit:"","header-row-class-name":e.tableheaderClass}},[t("el-table-column",{attrs:{type:"index",label:"序号"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(e.tableParams.num*(e.tableParams.page-1)+1+a.$index))])]}}],null,!0)}),e._v(" "),t("el-table-column",{attrs:{prop:"name",label:"名称"}}),e._v(" "),t("el-table-column",{attrs:{prop:"area",label:"位置"}}),e._v(" "),t("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(0===a.row.status?"离线":"在线"))])]}}],null,!0)}),e._v(" "),t("el-table-column",{attrs:{prop:"utime",label:"更新时间",sortable:""}}),e._v(" "),t("el-table-column",{attrs:{label:"视频连接"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("c-svg",{staticStyle:{width:"20px",height:"18px",cursor:"pointer"},attrs:{name:"monitor"},nativeOn:{click:function(t){return e.openVideo(a.row.camera)}}})]}}],null,!0)})],1)],1)],1),e._v(" "),"卡片模式"===e.radio?t("div",{staticClass:"paginationBox"},[t("el-pagination",{attrs:{background:"","current-page":e.cardParams.page,"page-sizes":[12,24,48],"page-size":e.cardParams.num,layout:"total, sizes, prev, pager, next, jumper",total:e.cardParams.total},on:{"update:currentPage":function(a){return e.$set(e.cardParams,"page",a)},"update:current-page":function(a){return e.$set(e.cardParams,"page",a)},"size-change":e.handleSizeChange2,"current-change":e.handleCurrentChange}})],1):t("div",{staticClass:"paginationBox"},[t("el-pagination",{attrs:{background:"","page-sizes":[10,20,50,100],"page-size":e.tableParams.num,"current-page-sync":e.tableParams.page,layout:"total, sizes, prev, pager, next, jumper",total:e.tableTotal},on:{"size-change":e.handleSizeChange2,"current-change":e.handleCurrentChange2}})],1)],1)])}),1),e._v(" "),t("el-dialog",{attrs:{visible:e.videoDialog,"show-close":!1,"custom-class":"video-dialog"},on:{"update:visible":function(a){e.videoDialog=a}}},[e.videoDialog?t("div",{staticClass:"video-wrapper"},[t("div",{staticStyle:{width:"100%",height:"540px"},attrs:{id:"video"}})]):e._e()])],1)},staticRenderFns:[]}},650:function(e,a,t){t(1437),t(1436);var i=t(38)(t(1145),t(1582),"data-v-ab6a0b4a",null);e.exports=i.exports},710:function(e,a,t){"use strict";t.d(a,"y",function(){return r}),t.d(a,"x",function(){return n}),t.d(a,"m",function(){return c}),t.d(a,"b",function(){return o}),t.d(a,"h",function(){return d}),t.d(a,"c",function(){return s}),t.d(a,"w",function(){return l}),t.d(a,"a",function(){return p}),t.d(a,"l",function(){return u}),t.d(a,"i",function(){return v}),t.d(a,"j",function(){return m}),t.d(a,"k",function(){return h}),t.d(a,"e",function(){return f}),t.d(a,"f",function(){return b}),t.d(a,"d",function(){return g}),t.d(a,"g",function(){return w}),t.d(a,"n",function(){return x}),t.d(a,"o",function(){return _}),t.d(a,"p",function(){return k}),t.d(a,"q",function(){return y}),t.d(a,"r",function(){return C}),t.d(a,"s",function(){return L}),t.d(a,"t",function(){return P}),t.d(a,"u",function(){return T}),t.d(a,"v",function(){return S});var i=t(32),r=function(e){return i.a.get("/api/model/getchild",{params:{project:e}})},n=function(e,a,t,r,n,c){return i.a.get("/api/model/queryDeviceInfo",{params:{project:e,sid:a,model:t,inp:r,num:n,page:c}})},c=function(e,a,t,r,n,c,o){return i.a.get("/api/model/getTableList",{params:{project:e,sid:a,mname:t,model:r,page:n,num:c,pname:o}})},o=function(e,a){return i.a.get("/api/model/getTab",{params:{project:e,sid:a}})},d=function(e,a,t,r){return i.a.get("/api/Report/dataInfo",{params:{id:e,start:a,end:t,tmes:r}})},s=function(e,a,t,r,n,c){return i.a.get("/api/model/getCard",{params:{project:e,sid:a,model:t,inp:r,page:n,num:c}})},l=function(e){return i.a.post("/api/model/alarmTable",e)},p=function(e){return i.a.post("/api/model/showTable",e)},u=function(e){return i.a.post("/api/model/queryPoint",e)},v=function(e,a,t,r,n){return i.a.get("/api/model/GetDmplist",{params:{project:e,sid:a,startTime:t,endTime:r,type:n}})},m=function(e,a,t,r){return i.a.get("/api/model/GetArealist",{params:{project:e,sid:a,startTime:t,endTime:r}})},h=function(e,a,t,r,n){return i.a.get("/api/model/GetPersonlist",{params:{project:e,sid:a,startTime:t,endTime:r,type:n}})},f=function(e){return i.a.post("/api/car/getCarList",e)},b=function(e){return i.a.get("/api/car/getCarInfo",{params:{id:e}})},g=function(e){return i.a.get("/api/car/getdataInfo",{params:{id:e}})},w=function(e){return i.a.post("/api/car/updateCarInfo",e)},x=function(e){return i.a.get("/api/model/getSymbol",{params:{mtid:e}})},_=function(e){return i.a.get("/api/model/deviceInfo",{params:{mtid:e}})},k=function(e){return i.a.get("/api/model/contact",{params:{mtid:e}})},y=function(e,a){return i.a.get("/api/model/normal",{params:{pid:e,mtid:a}})},C=function(e,a,t,r){return i.a.get("/api/Report/dataInfo",{params:{pid:e,start:a,end:t,tmes:r}})},L=function(e){return i.a.post("/api/alarm/",e)},P=function(e){return i.a.get("/api/DeviceInfo/QueryModbus",{params:{Id:e}})},T=function(e){return i.a.post("/api/DeviceInfo/saveModbus",e)},S=function(e,a){return i.a.get("/api/model/updateSymbol",{params:{sid:e,write:a}})}}});