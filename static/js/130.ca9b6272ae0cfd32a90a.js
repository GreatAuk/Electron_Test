webpackJsonp([130],{1030:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticStyle:{height:"300px"},attrs:{id:t.domId}})},staticRenderFns:[]}},560:function(t,e,n){var i=n(38)(n(888),n(1030),null,null);t.exports=i.exports},888:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{domId:{default:function(){return""},type:String},data:{type:Object,default:function(){return null}},typeId:{},loading:{type:Boolean,default:function(){return!0}}},watch:{loading:{handler:function(t){t?this.chart&&this.chart.showLoading({color:"#1890ff"}):this.chart&&this.chart.hideLoading()},immediate:!0},data:{handler:function(t){var e=this;if(!t)return!1;this.chart.setOption({color:["#1878ff","#1cbe24","#f8c312","#1a235f","#7024d8","#1cb7b5"],tooltip:{trigger:"item",formatter:function(t){return'\n                  <div style="margin-bottom: 6px;">\n                    <span>报警数量</span>\n                    '+(e.typeId?"":'\n                <a href="javascript:void(0);" style="float: right;color: #fff;margin-left: 30px;" onclick="drillDown(\''+t.dataIndex+'\')">\n                  <img style="width: 15px; cursor: pointer;" src="https://utopia-image-1252924295.cos.ap-shanghai.myqcloud.com/20190404140158.png" alt="">\n                  下钻\n                </a>\n              ')+'\n                  </div>\n                  <div>\n                    <span class="tooltip-point" style="background: '+t.color+'"></span>\n                    <span>'+t.name+"："+t.value+"（"+t.percent+"%）</span>\n                  </div>\n                "}},series:[{type:"pie",radius:["50%","70%"],center:["50%","50%"],data:this.data.data,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}),this.chart.hideLoading()},deep:!0}},mounted:function(){var t=this;this.chart=echarts.init(document.getElementById(this.domId)),this.chart.showLoading({color:"#1890ff"}),window.addEventListener("resize",this.chart.resize),this.chart.on("click",function(e){if(t.typeId)return!1;t.$emit("drillDown",e.data.Id)})},beforeDestroy:function(){window.removeEventListener("resize",this.chart.resize)}}}});