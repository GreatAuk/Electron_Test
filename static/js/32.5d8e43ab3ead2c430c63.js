webpackJsonp([32],{541:function(t,e,i){i(708);var n=i(38)(i(706),i(709),null,null);t.exports=n.exports},684:function(t,e,i){var n=i(133)("meta"),r=i(58),a=i(69),o=i(59).f,s=0,c=Object.isExtensible||function(){return!0},u=!i(68)(function(){return c(Object.preventExtensions({}))}),l=function(t){o(t,n,{value:{i:"O"+ ++s,w:{}}})},f=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,n)){if(!c(t))return"F";if(!e)return"E";l(t)}return t[n].i},d=function(t,e){if(!a(t,n)){if(!c(t))return!0;if(!e)return!1;l(t)}return t[n].w},p=function(t){return u&&h.NEED&&c(t)&&!a(t,n)&&l(t),t},h=t.exports={KEY:n,NEED:!1,fastKey:f,getWeak:d,onFreeze:p}},685:function(t,e,i){var n=i(58);t.exports=function(t,e){if(!n(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},686:function(t,e,i){var n=i(70);t.exports=Array.isArray||function(t){return"Array"==n(t)}},687:function(t,e,i){t.exports={default:i(688),__esModule:!0}},688:function(t,e,i){i(215),i(134),i(213),i(698),i(701),i(700),i(699),t.exports=i(14).Set},689:function(t,e,i){var n=i(210);t.exports=function(t,e){var i=[];return n(t,!1,i.push,i,e),i}},690:function(t,e,i){var n=i(60),r=i(136),a=i(72),o=i(90),s=i(692);t.exports=function(t,e){var i=1==t,c=2==t,u=3==t,l=4==t,f=6==t,d=5==t||f,p=e||s;return function(e,s,h){for(var m,v,y=a(e),g=r(y),w=n(s,h,3),S=o(g.length),x=0,_=i?p(e,S):c?p(e,0):void 0;S>x;x++)if((d||x in g)&&(m=g[x],v=w(m,x,y),t))if(i)_[x]=v;else if(v)switch(t){case 3:return!0;case 5:return m;case 6:return x;case 2:_.push(m)}else if(l)return!1;return f?-1:u||l?l:_}}},691:function(t,e,i){var n=i(58),r=i(686),a=i(21)("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)||(e=void 0),n(e)&&null===(e=e[a])&&(e=void 0)),void 0===e?Array:e}},692:function(t,e,i){var n=i(691);t.exports=function(t,e){return new(n(t))(e)}},693:function(t,e,i){"use strict";var n=i(59).f,r=i(214),a=i(212),o=i(60),s=i(211),c=i(210),u=i(137),l=i(216),f=i(217),d=i(61),p=i(684).fastKey,h=i(685),m=d?"_s":"size",v=function(t,e){var i,n=p(e);if("F"!==n)return t._i[n];for(i=t._f;i;i=i.n)if(i.k==e)return i};t.exports={getConstructor:function(t,e,i,u){var l=t(function(t,n){s(t,l,e,"_i"),t._t=e,t._i=r(null),t._f=void 0,t._l=void 0,t[m]=0,void 0!=n&&c(n,i,t[u],t)});return a(l.prototype,{clear:function(){for(var t=h(this,e),i=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete i[n.i];t._f=t._l=void 0,t[m]=0},delete:function(t){var i=h(this,e),n=v(i,t);if(n){var r=n.n,a=n.p;delete i._i[n.i],n.r=!0,a&&(a.n=r),r&&(r.p=a),i._f==n&&(i._f=r),i._l==n&&(i._l=a),i[m]--}return!!n},forEach:function(t){h(this,e);for(var i,n=o(t,arguments.length>1?arguments[1]:void 0,3);i=i?i.n:this._f;)for(n(i.v,i.k,this);i&&i.r;)i=i.p},has:function(t){return!!v(h(this,e),t)}}),d&&n(l.prototype,"size",{get:function(){return h(this,e)[m]}}),l},def:function(t,e,i){var n,r,a=v(t,e);return a?a.v=i:(t._l=a={i:r=p(e,!0),k:e,v:i,p:n=t._l,n:void 0,r:!1},t._f||(t._f=a),n&&(n.n=a),t[m]++,"F"!==r&&(t._i[r]=a)),t},getEntry:v,setStrong:function(t,e,i){u(t,e,function(t,i){this._t=h(t,e),this._k=i,this._l=void 0},function(){for(var t=this,e=t._k,i=t._l;i&&i.r;)i=i.p;return t._t&&(t._l=i=i?i.n:t._t._f)?"keys"==e?l(0,i.k):"values"==e?l(0,i.v):l(0,[i.k,i.v]):(t._t=void 0,l(1))},i?"entries":"values",!i,!0),f(e)}}},694:function(t,e,i){var n=i(135),r=i(689);t.exports=function(t){return function(){if(n(this)!=t)throw TypeError(t+"#toJSON isn't generic");return r(this)}}},695:function(t,e,i){"use strict";var n=i(15),r=i(39),a=i(684),o=i(68),s=i(52),c=i(212),u=i(210),l=i(211),f=i(58),d=i(89),p=i(59).f,h=i(690)(0),m=i(61);t.exports=function(t,e,i,v,y,g){var w=n[t],S=w,x=y?"set":"add",_=S&&S.prototype,L={};return m&&"function"==typeof S&&(g||_.forEach&&!o(function(){(new S).entries().next()}))?(S=e(function(e,i){l(e,S,t,"_c"),e._c=new w,void 0!=i&&u(i,y,e[x],e)}),h("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in _&&(!g||"clear"!=t)&&s(S.prototype,t,function(i,n){if(l(this,S,t),!e&&g&&!f(i))return"get"==t&&void 0;var r=this._c[t](0===i?0:i,n);return e?this:r})}),g||p(S.prototype,"size",{get:function(){return this._c.size}})):(S=v.getConstructor(e,t,y,x),c(S.prototype,i),a.NEED=!0),d(S,t),L[t]=S,r(r.G+r.W+r.F,L),g||v.setStrong(S,t,y),S}},696:function(t,e,i){"use strict";var n=i(39),r=i(71),a=i(60),o=i(210);t.exports=function(t){n(n.S,t,{from:function(t){var e,i,n,s,c=arguments[1];return r(this),e=void 0!==c,e&&r(c),void 0==t?new this:(i=[],e?(n=0,s=a(c,arguments[2],2),o(t,!1,function(t){i.push(s(t,n++))})):o(t,!1,i.push,i),new this(i))}})}},697:function(t,e,i){"use strict";var n=i(39);t.exports=function(t){n(n.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},698:function(t,e,i){"use strict";var n=i(693),r=i(685);t.exports=i(695)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return n.def(r(this,"Set"),t=0===t?0:t,t)}},n)},699:function(t,e,i){i(696)("Set")},700:function(t,e,i){i(697)("Set")},701:function(t,e,i){var n=i(39);n(n.P+n.R,"Set",{toJSON:i(694)("Set")})},702:function(t,e,i){var n,r=r||function(t){"use strict";if(!(void 0===t||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var e=t.document,i=function(){return t.URL||t.webkitURL||t},n=e.createElementNS("http://www.w3.org/1999/xhtml","a"),r="download"in n,a=function(t){var e=new MouseEvent("click");t.dispatchEvent(e)},o=/constructor/i.test(t.HTMLElement)||t.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent),c=function(e){(t.setImmediate||t.setTimeout)(function(){throw e},0)},u=function(t){var e=function(){"string"==typeof t?i().revokeObjectURL(t):t.remove()};setTimeout(e,4e4)},l=function(t,e,i){e=[].concat(e);for(var n=e.length;n--;){var r=t["on"+e[n]];if("function"==typeof r)try{r.call(t,i||t)}catch(t){c(t)}}},f=function(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t},d=function(e,c,d){d||(e=f(e));var p,h=this,m=e.type,v="application/octet-stream"===m,y=function(){l(h,"writestart progress write writeend".split(" "))};if(h.readyState=h.INIT,r)return p=i().createObjectURL(e),void setTimeout(function(){n.href=p,n.download=c,a(n),y(),u(p),h.readyState=h.DONE});!function(){if((s||v&&o)&&t.FileReader){var n=new FileReader;return n.onloadend=function(){var e=s?n.result:n.result.replace(/^data:[^;]*;/,"data:attachment/file;");t.open(e,"_blank")||(t.location.href=e),e=void 0,h.readyState=h.DONE,y()},n.readAsDataURL(e),void(h.readyState=h.INIT)}if(p||(p=i().createObjectURL(e)),v)t.location.href=p;else{t.open(p,"_blank")||(t.location.href=p)}h.readyState=h.DONE,y(),u(p)}()},p=d.prototype,h=function(t,e,i){return new d(t,e||t.name||"download",i)};return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,i){return e=e||t.name||"download",i||(t=f(t)),navigator.msSaveOrOpenBlob(t,e)}:(p.abort=function(){},p.readyState=p.INIT=0,p.WRITING=1,p.DONE=2,p.error=p.onwritestart=p.onprogress=p.onwrite=p.onabort=p.onerror=p.onwriteend=null,h)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);void 0!==t&&t.exports?t.exports.saveAs=r:null!==i(703)&&null!==i(704)&&void 0!==(n=function(){return r}.call(e,i,e,t))&&(t.exports=n)},703:function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},704:function(t,e){(function(e){t.exports=e}).call(e,{})},705:function(t,e,i){"use strict";i.d(e,"b",function(){return o}),i.d(e,"a",function(){return s});var n=i(32),r=i(219),a=i.n(r),o=function(t){var e=t.companyId,i=t.waybillNumOrTagId,r=t.pageIndex,a=t.pageSize;return n.a.get(BASE_URI+"/api/Device/GetWaybillPage",{params:{companyId:e,waybillNumOrTagId:i,pageIndex:r,pageSize:a}})},s=function(t){var e=t.start,i=t.end,r=t.pointIdList,o=t.tmes;return n.a.get(BASE_URI+"/api/Device/GetPointData",{params:{start:e,end:i,pointIdList:r,tmes:o},paramsSerializer:function(t){return a.a.stringify(t,{indices:!1})}})}},706:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(218),r=i.n(n),a=i(220),o=i.n(a),s=i(687),c=i.n(s),u=i(132),l=i.n(u),f=i(705),d=i(702),p=(i.n(d),i(138));e.default={props:{type:{type:String,default:function(){""}},pointIds:{type:Array,default:function(){return[]}},interval:{type:Number,default:function(){return 5}},startTime:{type:Date,default:function(){return new Date((new Date).getTime()-864e5)}},endTime:{type:Date,default:function(){return new Date}}},data:function(){return{dialogVisible:!1,form:{interval:this.interval,startTime:this.startTime,endTime:this.endTime},formRules:{startTime:[{type:"date",required:!0,message:"选择开始时间",trigger:"change"}],endTime:[{type:"date",required:!0,message:"选择结束时间",trigger:"change"}],interval:[{required:!0,message:"输入时间间隔(整数)",type:"number",trigger:"blur"}]},pointType:0,showStatistical:!1,showThreshold:!1,pdfLoading:!1,chartLoading:!1}},computed:{industry:function(){return this.$store.state.app.company.industry}},watch:{pointIds:function(t){t&&t.length&&this.fetchChartSeries()},startTime:function(t){this.form.startTime=t},endTime:function(t){this.form.endTime=t},interval:function(t){this.form.interval=t},dialogVisible:function(t){var e=this;t&&this.$nextTick(function(){e.myChart=echarts.init(document.getElementById("echart-wrap"))})}},mounted:function(){this.chartSeries=null},beforeDestroy:function(){},methods:{toggleDialog:function(){this.dialogVisible=!this.dialogVisible},thresholdChang:function(t){this.drawChart()},statisticalChange:function(t){this.drawChart()},search:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.fetchChartSeries()})},downPDF:function(t){var e=this;this.$refs[t].validate(function(t){t&&(e.pdfLoading=!0,e.fetchChartSeries())})},downImg:function(){i.i(d.saveAs)(i.i(p.b)(this.myChart.getDataURL()),"chart.jpg")},downloadExcel:function(t){var e=this;this.$refs[t].validate(function(t){if(t){var i=e._dateFormat(e.form.startTime,"YYYY-MM-DD HH:mm"),n=e._dateFormat(e.form.endTime,"YYYY-MM-DD HH:mm");window.location.href=_host+"/api/Report/downHistoryData?id="+e.pointIds.join(",")+"&start="+i+"&end="+n+"&tmes="+e.form.interval}})},fetchChartSeries:function(){var t=this;this.chartLoading=!0,i.i(f.a)({start:this._dateFormat(this.form.startTime,"YYYY-MM-DD HH:mm"),end:this._dateFormat(this.form.endTime,"YYYY-MM-DD HH:mm"),pointIdList:this.pointIds,tmes:this.form.interval}).then(function(e){if(200===e.data.Code){t.dataSource=e.data.Data;var i=e.data.Data.PointList;if(!i)return t.$message("无点位数据"),!1;var n=i.map(function(t){return t.PointType});if(t.legends=i.map(function(t){return t.PointName}),1!==[].concat(l()(new c.a(n))).length)return t.$message({message:"选中的多个点位不是同一类型，无法合理显示",type:"info",duration:5e3}),!1;t.pointType=n[0],0===t.pointType&&(t.showStatistical=!0);var r=[];i.forEach(function(t){for(var e=0,i=t.DataList.length;e<i;e++)t.DataList[e]=[t.DataList[e].Time,t.DataList[e].Value];t.unitMap={},t.UnitMap&&t.UnitMap.forEach(function(e){t.unitMap[e.key]=e.value}),r.push({animation:!1,name:t.PointName,type:"line",unit:t.Unit,step:1===t.PointType?"start":"",smooth:!1,yAxisData:1===t.PointType?o()(t.unitMap).map(function(t){return parseInt(t)}):"",pointType:t.PointType,unitMap:t.unitMap,data:t.DataList,markLine:{data:[]},statisticalmarkLineData:[{type:"average",name:"",lineStyle:{type:"dashed"},label:{normal:{formatter:function(t){return t.value.toFixed(1)}}}}],ThresholdmarkLineData:function(){var e=[];return t.SuperLowerLimit&&e.push({yAxis:t.SuperLowerLimit,lineStyle:{color:"#B03A5B",type:"dotted"},label:{show:!0,position:"middle",formatter:function(e){return"下下限("+t.PointName+"): "+t.SuperLowerLimit}}}),t.SuperUpperLimit&&e.push({yAxis:t.SuperUpperLimit,lineStyle:{color:"#B03A5B",type:"dotted"},label:{show:!0,position:"middle",formatter:function(e){return"上上限("+t.PointName+"): "+t.SuperUpperLimit}}}),t.UpperLimit&&e.push({yAxis:t.UpperLimit,lineStyle:{color:"#B03A5B",type:"dotted"},label:{show:!0,position:"middle",formatter:function(e){return"上限("+t.PointName+"): "+t.UpperLimit}}}),t.LowerLimit&&e.push({yAxis:t.LowerLimit,lineStyle:{color:"#B03A5B",type:"dotted"},label:{show:!0,position:"middle",formatter:function(e){return"下限("+t.PointName+"): "+t.LowerLimit}}}),e}(),markPointCopy:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},superLowerLimit:t.SuperLowerLimit,superUpperLimit:t.SuperUpperLimit,upperLimit:t.UpperLimit,lowerLimit:t.LowerLimit})}),t.chartSeries=r,t.drawChart()}else t.$message.error("历史数据查询失败")}).catch(function(e){t.$message.error("历史数据查询失败")}).finally(function(){t.chartLoading=!1})},drawChart:function(){var t=this;this.myChart&&this.myChart.clear(),this.chartSeries.forEach(function(e){if(e.markLine.data=[],t.showStatistical){var i;e.markPoint=e.markPointCopy,(i=e.markLine.data).push.apply(i,l()(e.statisticalmarkLineData))}else delete e.markPoint;if(t.showThreshold){var n;e.ThresholdmarkLineData.length||(1===t.chartSeries.length?t.$message("选中点位没有设置阈值"):t.$message("存在点位没有设置阈值")),(n=e.markLine.data).push.apply(n,l()(e.ThresholdmarkLineData))}});var e={color:["#2297E8","#48CE38","#F8D156","#FD9827","#9764DC","#1FCA6A"],grid:{left:60,right:100,bottom:80,top:40},dataZoom:[{type:"slider",xAxisIndex:0,filterMode:"empty",handleIcon:"M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"90%"},{type:"inside",xAxisIndex:0,filterMode:"empty"}],legend:{show:!0},tooltip:{trigger:"axis",formatter:function(e){for(var i=t._dateFormat(e[0].axisValue,"YYYY-MM-DD HH:mm")+"<br/>",n=0;n<e.length;n++)i+=function(t){return'<i class="circlepoint" style="background: '+t+'"></i>'}(e[n].color)+" "+e[n].seriesName+"："+(null===e[n].value[1]?"无数据":e[n].value[1])+" <br/>";return i}},xAxis:{type:"time",axisLabel:{formatter:function(e,i){return t._dateFormat(e,"YYYY-MM-DD HH:mm")}},splitLine:{show:!1}},series:this.chartSeries},n={};if(n=this.chartSeries.length&&this.chartSeries[0].step?{yAxis:{type:"value",name:this.chartSeries[0].data.length?"单位:"+this.chartSeries[0].unit:"",boundaryGap:["20%","20%"],minInterval:1,axisLabel:{show:!0,formatter:function(e){if(t.chartSeries[0].unitMap[e])return t.chartSeries[0].unitMap[e]}}}}:{yAxis:{type:"value",name:this.chartSeries[0].data.length?"单位:"+this.chartSeries[0].unit:"",scale:!1,boundaryGap:["20%","20%"]}},1!==this.chartSeries[0].pointType&&e.dataZoom.push({type:"slider",yAxisIndex:0,filterMode:"empty",handleIcon:"M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"90%"}),this.myChart.setOption(r()(e,n)),!0===this.pdfLoading){this.dataSource.startTime=this._dateFormat(this.form.startTime,"YYYY-MM-DD HH:mm"),this.dataSource.endTime=this._dateFormat(this.form.endTime,"YYYY-MM-DD HH:mm");try{var a=i.i(p.c)(this.myChart.getDataURL(),this.dataSource),o=new URLSearchParams;o.append("html",a),fetch("https://sinocold.net:8443/api/Report/DownloadDataPDF",{method:"POST",body:o,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){return t.json()}).then(function(t){window.open("https://sinocold.net:8443"+t)}).catch(function(e){t.$message.error("导出失败")}).finally(function(){t.pdfLoading=!1})}catch(t){this.pdfLoading=!1,this.$message.error("导出失败")}}},historyDialogClose:function(){this.myChart&&this.myChart.clear(),this.chartSeries=[],this.showStatistical=!1,this.showThreshold=!1,this.form.interval=this.interval,this.form.startTime=new Date((new Date).getTime()-864e5),this.form.endTime=new Date}}}},707:function(t,e,i){e=t.exports=i(539)(),e.push([t.i,".history-dialog-wrap .circlepoint{display:inline-block;width:.6em;height:.6em;margin-right:5px;border-radius:50%}",""])},708:function(t,e,i){var n=i(707);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(540)("060cc275",n,!0)},709:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{title:"历史数据",visible:t.dialogVisible,width:"1300px",top:"10vh"},on:{"update:visible":function(e){t.dialogVisible=e},close:t.historyDialogClose}},[i("div",{staticClass:"history-dialog-wrap"},[i("div",[i("el-form",{ref:"form",staticStyle:{"margin-left":"45px"},attrs:{model:t.form,rules:t.formRules,inline:"",size:"medium","hide-required-asterisk":!0}},[i("el-form-item",{attrs:{label:"时间范围：",prop:"startTime"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{format:"yyyy-MM-dd HH:mm",editable:!1,type:"datetime",placeholder:"选择日期"},model:{value:t.form.startTime,callback:function(e){t.$set(t.form,"startTime",e)},expression:"form.startTime"}})],1),t._v(" "),i("span",{staticStyle:{"margin-right":"10px",position:"relative",top:"9px"}},[t._v("-")]),t._v(" "),i("el-form-item",{attrs:{prop:"endTime"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{format:"yyyy-MM-dd HH:mm",editable:!1,type:"datetime",placeholder:"选择日期"},model:{value:t.form.endTime,callback:function(e){t.$set(t.form,"endTime",e)},expression:"form.endTime"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"间隔：",prop:"interval"}},[i("el-input",{attrs:{placeholder:"分钟"},model:{value:t.form.interval,callback:function(e){t.$set(t.form,"interval",t._n("string"==typeof e?e.trim():e))},expression:"form.interval"}})],1),t._v(" "),i("span",{staticStyle:{position:"relative",top:"9px"}},[t._v("分钟")]),t._v(" "),i("el-form-item",{staticStyle:{"margin-left":"20px"}},[i("el-button",{attrs:{loading:t.chartLoading,size:"medium",type:"primary"},nativeOn:{click:function(e){return t.search("form")}}},[t._v("\n            查看数据\n          ")])],1),t._v(" "),i("div",[i("el-form-item",{attrs:{label:"数据操作："}},[1!==t.industry?i("el-button",{attrs:{size:"medium"},nativeOn:{click:function(e){return t.downloadExcel("form")}}},[t._v("\n              下载excel\n            ")]):t._e(),t._v(" "),i("el-button",{attrs:{loading:t.pdfLoading,size:"medium"},nativeOn:{click:function(e){return t.downPDF("form")}}},[t._v("\n              下载pdf\n            ")]),t._v(" "),i("el-button",{attrs:{size:"medium"},nativeOn:{click:function(e){return t.downImg(e)}}},[t._v("\n              下载图表\n            ")])],1),t._v(" "),i("el-form-item",{staticStyle:{"margin-left":"15px"},attrs:{label:"显示统计"}},[i("el-switch",{staticStyle:{"margin-left":"10px",position:"relative",top:"-3px"},attrs:{disabled:1===t.pointType},on:{change:t.statisticalChange},model:{value:t.showStatistical,callback:function(e){t.showStatistical=e},expression:"showStatistical"}})],1),t._v(" "),i("el-form-item",{staticStyle:{"margin-left":"15px"},attrs:{label:"显示阈值"}},[i("el-switch",{staticStyle:{"margin-left":"10px",position:"relative",top:"-3px"},attrs:{disabled:1===t.pointType},on:{change:t.thresholdChang},model:{value:t.showThreshold,callback:function(e){t.showThreshold=e},expression:"showThreshold"}})],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"history-chart"},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.chartLoading,expression:"chartLoading"}],staticStyle:{"min-width":"400px",height:"450px"},attrs:{id:"echart-wrap","element-loading-text":"加载中..."}})])])])},staticRenderFns:[]}}});