webpackJsonp([132],{1038:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticStyle:{height:"300px"},attrs:{id:t.domId}})},staticRenderFns:[]}},555:function(t,e,i){var n=i(38)(i(883),i(1038),null,null);t.exports=n.exports},883:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{domId:{default:function(){return""},type:String},data:{type:Object,default:function(){return null}},loading:{type:Boolean,default:function(){return!0}}},data:function(){return{}},watch:{loading:{handler:function(t){t?this.chart&&this.chart.showLoading({color:"#1890ff"}):this.chart&&this.chart.hideLoading()},immediate:!0},data:{handler:function(t){if(!t)return!1;this.chart.setOption({color:["#1878ff","#1cbe24"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:this.data.xAxis,axisLabel:{color:"#000",interval:0,formatter:function(t){return t.length>6?t.substring(0,6)+"...":t}}},series:[{type:"bar",data:this.data.data}]}),this.chart.hideLoading()},deep:!0}},mounted:function(){this.chart=echarts.init(document.getElementById(this.domId)),window.addEventListener("resize",this.chart.resize),this.chart.showLoading({color:"#1890ff"})},beforeDestroy:function(){window.removeEventListener("resize",this.chart.resize)}}}});