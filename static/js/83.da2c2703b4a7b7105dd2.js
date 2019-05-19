webpackJsonp([83],{1129:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__=__webpack_require__(220),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__),__WEBPACK_IMPORTED_MODULE_1__api_map_js__=__webpack_require__(1185),__WEBPACK_IMPORTED_MODULE_2__utils_index__=__webpack_require__(138);__webpack_exports__.default={data:function(){return{map:"",search:"",storeInfo:null,userInfo:null,opts:{width:250,height:122,enableMessage:!0}}},computed:{searchData:function(){var e=this.search;return e?this.storeInfo.filter(function(t){return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(t).some(function(r){return String(t[r]).toLowerCase().indexOf(e)>-1})}):this.storeInfo},subarea:function(){return this.$store.state.app.subarea},industry:function(){return this.$store.state.app.company.industry}},mounted:function(){var e=this;this.map=new BMap.Map("map-container",{enableMapClick:!1}),this.map.setMapStyle({style:"googlelite"});var t=new BMap.Point(121.429116,31.153208);this.map.centerAndZoom(t,12),this.map.enableScrollWheelZoom(!0);var r={anchor:BMAP_ANCHOR_TOP_RIGHT};this.map.addControl(new BMap.NavigationControl(r)),this.map.addControl(new BMap.ScaleControl),setTimeout(function(){e.mapInit()},100)},methods:{mapInit:function mapInit(){var _this3=this;this.userInfo=JSON.parse(sessionStorage.getItem("userInfo")),__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_map_js__.a)({uid:this.userInfo.uid,companyId:this.$store.state.app.company.id}).then(function(res){_this3.storeInfo=JSON.parse(res.data).list;var myGeo=new BMap.Geocoder,self=_this3,markers=[],marker=null,points=[];_this3.storeInfo.forEach(function(e){var t=e.adresss.split(";")[1]+e.adresss.split(";")[2];e.adresss=e.adresss.split(";")[1]+e.adresss.split(";")[2],myGeo.getPoint(t,function(r){if(points.push(r),r){if(Number(e.DeviceCount)>0){var a=new BMap.Icon("https://webapi.amap.com/theme/v1.3/markers/n/mark_rs.png",new BMap.Size(23,30));marker=new BMap.Marker(r,{icon:a}),self.map.addOverlay(marker),markers.push(marker)}else{var i=new BMap.Icon("https://webapi.amap.com/theme/v1.3/markers/n/mark_bs.png",new BMap.Size(23,30));marker=new BMap.Marker(r,{icon:i}),self.map.addOverlay(marker),markers.push(marker)}var o='<div style="position:relative;box-sizing:border-box;cursor:pointer;z-index: 1000" class="goStore" siteId=\''+e.id+'\'>\n                                <p style="padding:0;margin-bottom:5px;color:#184B8D;font-size:16px;margin-top:0;font-weight:bold;text-overflow:ellipsis;overflow:hidden;white-space:nowrap">'+e.pname+'</p>\n                                <p class="showAlarm" style="color:#F76464;margin-bottom:7px;display:flex;align-items:center;"><img src="static/img/alarm.png" style="margin-right:5px"><span class="alarmNum">当前报警&nbsp;'+e.DeviceCount+'</span></p>\n                                <p style="padding:0;margin:0 0 7px 0;text-overflow:ellipsis;overflow:hidden;white-space:nowrap">\n                                <img src="static/img/marker.png" style="float:left;margin-right:5px;">'+t+'</p>\n                                <p style="margin:0 0 7px 0;height:20px;"><img src="static/img/man.png" style="float:left;margin-right:5px;">'+e.cname+'</p>\n                                <p style="margin:0;"><img src="static/img/phone.png" style="float:left;margin-right:5px;">'+e.mobile+"</p>\n                                <div siteId='"+e.id+'\' class="goStore-cover" style="position: absolute;top:0;left: 0; bottom:0;right:0;"></div>\n                              </div>';self.addClickHandler(o,marker)}})}),setTimeout(function(){var view=_this3.map.getViewport(eval(points)),mapZoom=view.zoom,centerPoint=view.center;_this3.map.centerAndZoom(centerPoint,mapZoom);var markerClusterer=new BMapLib.MarkerClusterer(_this3.map,{markers:markers})},1e3)}).catch(function(e){})},addClickHandler:function(e,t){var r=this;t.addEventListener("click",function(t){r.openInfo(e,t)})},openInfo:function(e,t){var r=document.createElement("div");r.innerHTML=e,0===r.querySelector(".alarmNum").innerHTML?r.querySelector(".showAlarm").style.cssText="display:none":r.querySelector(".showAlarm").style.cssText="display:inline;color:#F76464";var a=t.target,i=new BMap.Point(a.getPosition().lng,a.getPosition().lat),o=new BMap.InfoWindow(e,this.opts);this.map.openInfoWindow(o,i);var s=this;setTimeout(function(){document.querySelector(".goStore-cover").addEventListener("click",function(e){var t=Number(e.target.getAttribute("siteId"));s.$store.commit("CHANGE_PROJECT",{id:t});var r=[];s.subarea.forEach(function(e){__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_index__.a)(t,e,function(e){r=e})}),s.$store.commit("UPDATE_PROJECT_PATH",r),1===s.industry?s.$router.push({name:"monitorRedirect"}):s.$router.push({name:"monitorDashboard"})})},100)},setCenter:function(e){var t=new BMap.Geocoder,r=this;t.getPoint(e.adresss,function(t){if(t){r.map.setCenter(t);var a='<div style="position:relative;box-sizing:border-box;cursor:pointer" class="goStore" siteId=\''+e.id+'\'>\n                    <p style="padding:0;margin-bottom:5px;color:#184B8D;font-size:16px;margin-top:0;font-weight:bold;text-overflow:ellipsis;overflow:hidden;white-space:nowrap">'+e.pname+'</p>\n                    <p class="showAlarm" style="color:#F76464;margin-bottom:7px;display:flex;align-items:center;"><img src="static/img/alarm.png" style="margin-right:5px"><span class="alarmNum">当前报警&nbsp;'+e.DeviceCount+'</span></p>\n                    <p style="padding:0;margin:0 0 7px 0;text-overflow:ellipsis;overflow:hidden;white-space:nowrap">\n                        <img src="static/img/marker.png" style="float:left;margin-right:5px;">'+e.adresss+'</p>\n                        <p style="margin:0 0 7px 0;height:20px;"><img src="static/img/man.png" style="float:left;margin-right:5px;">'+e.cname+'</p>\n                        <p style="margin:0;"><img src="static/img/phone.png" style="float:left;margin-right:5px;">'+e.mobile+"</p>\n                        <div siteId='"+e.id+'\' class="goStore-cover" style="position: absolute;top:0;left: 0; bottom:0;right:0;"></div>\n                      </div>',i=new BMap.InfoWindow(a,r.opts);setTimeout(function(){document.querySelector(".goStore-cover").addEventListener("click",function(e){var t=Number(e.target.getAttribute("siteid"));r.$store.commit("CHANGE_PROJECT",{id:t});var a=[];r.subarea.forEach(function(e){__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_index__.a)(t,e,function(e){a=e})}),r.$store.commit("UPDATE_PROJECT_PATH",a),1===r.industry?r.$router.push({name:"monitorRedirect"}):r.$router.push({name:"monitorDashboard"})})},100),r.map.openInfoWindow(i,t)}})}}}},1185:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var a=r(32),i=function(e){var t=e.uid,r=e.companyId;return a.a.get("/api/menu/mapInfo",{params:{uid:t,companyId:r}})}},1233:function(e,t,r){t=e.exports=r(539)(),t.push([e.i,"#amap-cointainer[data-v-34cdcbf0]{height:100%;position:relative}#map-container[data-v-34cdcbf0]{width:100%;height:100%}.project-wrapper[data-v-34cdcbf0]{height:90%;position:absolute;top:50px;left:50px;border-radius:10px;background-color:rgba(74,74,74,.9);width:18%;min-width:230px}.project-wrapper .search[data-v-34cdcbf0]{margin:5%;width:90%}.project-wrapper .project-list[data-v-34cdcbf0]{height:87%;width:90%;margin-left:5%;overflow:auto;border-top:2px solid #999}.project-wrapper .project-list .project-item[data-v-34cdcbf0]{border-bottom:1px solid #999;padding:20px 0}.project-wrapper .project-list .project-item .has-alarm[data-v-34cdcbf0]{background:#ff8757;border-color:#ff8757}.project-wrapper .project-list .project-item .project-name[data-v-34cdcbf0]{overflow:hidden}.project-wrapper .project-list .project-item .project-name .el-button[data-v-34cdcbf0]{float:left}.project-wrapper .project-list .project-item .project-name .project-alarm[data-v-34cdcbf0]{float:left;color:#fff;margin:9px 0 0 10px}.project-wrapper .project-list .project-item .project-name .project-alarm .svg-icon[data-v-34cdcbf0]{margin-right:5px;color:#fff;width:17px;height:17px;vertical-align:-.3em}.project-wrapper .project-list .project-item .project-address[data-v-34cdcbf0]{margin-top:20px}.project-wrapper .project-list .project-item .project-address .svg-icon[data-v-34cdcbf0]{color:red;width:17px;height:17px;margin-right:5px;vertical-align:-.3em}.project-wrapper .project-list .project-item .project-message[data-v-34cdcbf0]{font-size:13px;color:#fff;line-height:20px}.project-wrapper .project-list .project-item .project-phone[data-v-34cdcbf0]{margin-top:10px}.project-wrapper .project-list .project-item .project-phone .svg-icon[data-v-34cdcbf0]{color:#fff;width:15px;height:15px;margin-right:7px;vertical-align:-.3em}",""])},1363:function(e,t,r){var a=r(1233);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(540)("bdaaaa50",a,!0)},1521:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mymap",attrs:{id:"amap-cointainer"}},[r("div",{attrs:{id:"map-container"}}),e._v(" "),r("div",{staticClass:"project-container"},[r("div",{staticClass:"project-wrapper"},[r("el-input",{staticClass:"search",attrs:{placeholder:"查找门店",icon:"search",clearable:""},model:{value:e.search,callback:function(t){e.search="string"==typeof t?t.trim():t},expression:"search"}}),e._v(" "),r("div",{staticClass:"project-list thin-scroll"},e._l(e.searchData,function(t){return r("div",{key:t.id,staticClass:"project-item"},[r("div",{staticClass:"project-name"},[r("el-button",{class:"0"===t.DeviceCount?"no-alarm":"has-alarm",attrs:{type:"primary"},on:{click:function(r){return e.setCenter(t)}}},[e._v("\n              "+e._s(t.pname)+"\n            ")]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:"0"!==t.DeviceCount,expression:"item.DeviceCount !== '0'"}],staticClass:"project-alarm",staticStyle:{float:"left"}},[r("c-svg",{staticStyle:{color:"#F76464"},attrs:{name:"msnui-alarm-inverse"}}),e._v("\n              "+e._s(t.DeviceCount)+"\n            ")],1)],1),e._v(" "),r("div",{staticClass:"project-address"},[r("c-svg",{attrs:{name:"icon"}}),e._v(" "),r("span",{staticClass:"project-message"},[e._v(e._s(t.adresss))])],1),e._v(" "),r("div",{staticClass:"project-phone"},[r("c-svg",{attrs:{name:"icon32206"}}),e._v(" "),r("span",{staticClass:"project-message"},[e._v(e._s(t.mobile))])],1)])}),0)],1)])])},staticRenderFns:[]}},629:function(e,t,r){r(1363);var a=r(38)(r(1129),r(1521),"data-v-34cdcbf0",null);e.exports=a.exports}});