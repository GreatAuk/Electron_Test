webpackJsonp([124],{1144:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{activeName:"",tabList:[{label:"卡片模式",routePath:"/monitor/empty/refrigerationCarTemplate/cardModel"},{label:"地图模式",routePath:"/monitor/empty/refrigerationCarTemplate/mapModel"}]}},methods:{clickItem:function(t){switch(t){case"卡片模式":this.$router.push({path:"cardModel"});break;case"地图模式":this.$router.push({path:"mapModel"})}}}}},1555:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"el-tabs",staticStyle:{height:"100%"}},[a("nav-tabs",{staticStyle:{"padding-left":"40px"},style:{"margin-bottom":"/monitor/empty/refrigerationCarTemplate/cardModel"===t.$route.path?"15px":"0"},attrs:{"tab-list":t.tabList},on:{clickItem:t.clickItem}}),t._v(" "),a("div",[a("router-view")],1)],1)},staticRenderFns:[]}},649:function(t,e,a){var r=a(38)(a(1144),a(1555),null,null);t.exports=r.exports}});