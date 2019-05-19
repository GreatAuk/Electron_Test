webpackJsonp([73],{1103:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=t(839),a=t(773);r.default={data:function(){var e=this,r=function(e,r,o){t.i(a.a)({account:r}).then(function(e){e.data?o(new Error("该用户名已存在")):o()})};return{registerType:"phone",time:120,canSent:!0,areaCode:"+86",form:{userName:"",realName:"",phone:"",company:"",pwd:"",checkPwd:"",checkCode:""},formRules:{userName:[{required:!0,message:"请输入用户名",trigger:"blur"},{pattern:/^[a-zA-Z0-9_-]{4,16}$/,message:"4到16位（字母，数字，下划线，减号）",trigger:"blur"},{validator:r,trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:function(r,n,i){if(!t.i(o.a)(e.areaCode,n))return i(new Error("手机号格式错误")),!1;t.i(a.a)({mobile:n}).then(function(e){e.data?i(new Error("该手机号已被注册")):i()})},trigger:"blur"}],realName:[{required:!0,message:"请输入您的真实姓名",trigger:"blur"}],company:[{required:!0,message:"请输入公司名",trigger:"blur"}],pwd:[{validator:function(r,t,o){""===t?o(new Error("请输入密码")):(""!==e.form.checkPwd&&e.$refs.form.validateField("checkPwd"),o())},trigger:"blur"},{pattern:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,message:"8到16位（由字母和数字组成）"}],checkPwd:[{validator:function(r,t,o){""===t?o(new Error("请再次输入密码")):t!==e.form.pwd?o(new Error("两次输入密码不一致!")):o()},trigger:"blur"}]},form2:{userName:"",email:"",pwd:"",rePwd:""},form2Rules:{userName:[{required:!0,message:"请输入用户名",trigger:"blur"},{pattern:/^[a-zA-Z0-9_-]{4,16}$/,message:"4到16位（字母，数字，下划线，减号）",trigger:"blur"},{validator:r,trigger:"blur"}],email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur"}],pwd:[{validator:function(r,t,o){""===t?o(new Error("请输入密码")):(""!==e.form2.checkPwd&&e.$refs.form2.validateField("checkPwd"),o())},trigger:"blur"},{pattern:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,message:"8到16位（由字母和数字组成）"}],checkPwd:[{validator:function(r,t,o){""===t?o(new Error("请再次输入密码")):t!==e.form2.pwd?o(new Error("两次输入密码不一致!")):o()},trigger:"blur"}]}}},methods:{queryCompnay:function(e,r){if(""===e)return!1;t.i(a.c)(e).then(function(e){var t=JSON.parse(e.data);r(t.result)}).catch(function(e){})},sendMsg:function(){this.form.phone||this.$message("请填写手机号"),this.canSent=!1,this.countDown(),t.i(a.b)(this.form.phone).catch(function(e){})},registerByPhone:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return!1;t.i(a.d)(r.form.phone,r.form.checkCode).then(function(e){if(!e.data)return r.$message({message:"验证码错误",type:"info"}),!1;var o={account:r.form.userName,nickname:r.form.realName,pwd:r.form.pwd,mobile:"+86"===r.areaCode?r.form.phone:r.areaCode+phone,code:r.form.checkCode,company:r.form.company};t.i(a.e)(o).then(function(e){e.data?(r.$message({message:"注册成功",type:"success"}),setTimeout(function(){r.$router.push("/login")},3e3)):r.$message({message:"注册失败",type:"error"})}).catch(function(e){})})})},registerByEmail:function(e){this.$refs[e].validate(function(e){if(!e)return!1})},countDown:function(){var e=this;0===this.time?(this.canSent=!0,this.time=120):(this.time--,setTimeout(function(){e.countDown()},1e3))},changeType:function(){this.registerType="phone"===this.registerType?"email":"phone"}}}},1224:function(e,r,t){r=e.exports=t(539)(),r.push([e.i,".register-page{min-height:100%;background:#324157}.register-page .register-title{text-align:center;font-size:28px;color:#fff;padding-top:150px;padding-bottom:15px}.register-page .register-wrap{width:320px;margin:0 auto 25px;padding:25px;border-radius:5px;background:#fff}.register-page .send-msg-btn:hover{color:#13ce66}.register-page .el-input-group__append,.register-page .el-input-group__prepend{background:#fff}.register-page .input-phone .el-input-group__prepend{width:45px}",""])},1354:function(e,r,t){var o=t(1224);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(540)("1d6a9e24",o,!0)},1515:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"register-page"},[t("div",{staticClass:"register-title"},[e._v("\n    CoolCare\n  ")]),e._v(" "),t("div",{staticClass:"register-wrap"},[t("el-form",{directives:[{name:"show",rawName:"v-show",value:"phone"===e.registerType,expression:"registerType === 'phone'"}],ref:"form",attrs:{model:e.form,rules:e.formRules}},[t("el-form-item",{attrs:{error:"",prop:"userName"}},[t("el-input",{attrs:{placeholder:"用户名（注册后无法修改）"},model:{value:e.form.userName,callback:function(r){e.$set(e.form,"userName","string"==typeof r?r.trim():r)},expression:"form.userName"}})],1),e._v(" "),t("el-form-item",{staticClass:"input-phone",attrs:{prop:"phone"}},[t("el-input",{attrs:{placeholder:"手机号"},model:{value:e.form.phone,callback:function(r){e.$set(e.form,"phone","string"==typeof r?r.trim():r)},expression:"form.phone"}},[t("el-select",{attrs:{slot:"prepend"},slot:"prepend",model:{value:e.areaCode,callback:function(r){e.areaCode=r},expression:"areaCode"}},[t("el-option",{attrs:{label:"+86",value:"+86"}}),e._v(" "),t("el-option",{attrs:{label:"+886",value:"+886"}})],1)],1)],1),e._v(" "),t("el-form-item",{attrs:{prop:"realName"}},[t("el-input",{attrs:{placeholder:"姓名"},model:{value:e.form.realName,callback:function(r){e.$set(e.form,"realName","string"==typeof r?r.trim():r)},expression:"form.realName"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"company"}},[t("el-autocomplete",{staticStyle:{width:"100%"},attrs:{"value-key":"companyName","fetch-suggestions":e.queryCompnay,debounce:1e3,placeholder:"注册公司"},model:{value:e.form.company,callback:function(r){e.$set(e.form,"company",r)},expression:"form.company"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"pwd"}},[t("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.form.pwd,callback:function(r){e.$set(e.form,"pwd","string"==typeof r?r.trim():r)},expression:"form.pwd"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"checkPwd"}},[t("el-input",{attrs:{type:"password",placeholder:"确认密码"},model:{value:e.form.checkPwd,callback:function(r){e.$set(e.form,"checkPwd","string"==typeof r?r.trim():r)},expression:"form.checkPwd"}})],1),e._v(" "),t("el-form-item",[t("el-input",{attrs:{placeholder:"短信验证码",maxlength:4,minlength:4},model:{value:e.form.checkCode,callback:function(r){e.$set(e.form,"checkCode","string"==typeof r?r.trim():r)},expression:"form.checkCode"}},[t("template",{slot:"append"},[t("el-button",{staticClass:"send-msg-btn",attrs:{disabled:!e.canSent},nativeOn:{click:function(r){return e.sendMsg(r)}}},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.canSent,expression:"canSent"}]},[e._v("发送短信")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.canSent,expression:"!canSent"}]},[e._v(e._s(e.time)+" S")])])],1)],2)],1),e._v(" "),t("el-form-item",[t("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},nativeOn:{click:function(r){return e.registerByPhone("form")}}},[e._v("\n          注 册\n        ")])],1)],1),e._v(" "),t("el-form",{directives:[{name:"show",rawName:"v-show",value:"email"===e.registerType,expression:"registerType === 'email'"}],ref:"form2",attrs:{model:e.form2,rules:e.form2Rules}},[t("el-form-item",{attrs:{error:"",prop:"userName"}},[t("el-input",{attrs:{placeholder:"用户名（注册后无法修改）"},model:{value:e.form2.userName,callback:function(r){e.$set(e.form2,"userName","string"==typeof r?r.trim():r)},expression:"form2.userName"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"email"}},[t("el-input",{attrs:{placeholder:"邮箱"},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email","string"==typeof r?r.trim():r)},expression:"form.email"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"pwd"}},[t("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.form2.pwd,callback:function(r){e.$set(e.form2,"pwd","string"==typeof r?r.trim():r)},expression:"form2.pwd"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"checkPwd"}},[t("el-input",{attrs:{type:"password",placeholder:"确认密码"},model:{value:e.form2.checkPwd,callback:function(r){e.$set(e.form2,"checkPwd","string"==typeof r?r.trim():r)},expression:"form2.checkPwd"}})],1),e._v(" "),t("el-form-item",[t("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},nativeOn:{click:function(r){return e.registerByEmail("form2")}}},[e._v("\n          注 册\n        ")])],1)],1),e._v(" "),t("div",[t("a",{staticStyle:{color:"#20a0ff",cursor:"pointer",display:"none"},on:{click:e.changeType}},[e._v(e._s("phone"===e.registerType?"邮箱注册":"手机注册"))]),e._v(" "),t("router-link",{staticStyle:{float:"right",color:"#20a0ff"},attrs:{to:"/login"}},[e._v("\n        已有帐号?马上登录\n      ")])],1)],1)])},staticRenderFns:[]}},602:function(e,r,t){t(1354);var o=t(38)(t(1103),t(1515),null,null);e.exports=o.exports},773:function(e,r,t){"use strict";t.d(r,"a",function(){return a}),t.d(r,"e",function(){return n}),t.d(r,"b",function(){return i}),t.d(r,"d",function(){return s}),t.d(r,"f",function(){return c}),t.d(r,"g",function(){return l}),t.d(r,"c",function(){return p});var o=t(32),a=function(e){return o.a.post("/api/user/Exists",e)},n=function(e){return o.a.post("/api/user/AddUser",e)},i=function(e){return o.a.get("/api/user/MobileCode",{params:{mobile:e}})},s=function(e,r){return o.a.get("/api/user/CheckCode",{params:{mobile:e,code:r}})},c=function(e){return o.a.post("/api/user/ForgetPwd",e)},l=function(e){return o.a.get("/api/user/InvitationUser",{params:{mobile:e}})},p=function(e){return o.a.get("/api/user/GetCompanyName",{params:{companyName:e}})}},839:function(e,r,t){"use strict";t.d(r,"b",function(){return o}),t.d(r,"a",function(){return a});var o=function(e){return/^\+886\d{1,}/.test(e)?{phone:e.replace("+886",""),areaCode:"+886"}:/^\+852\d{1,}/.test(e)?{phone:e.replace("+852",""),areaCode:"+852"}:/^\+853\d{1,}/.test(e)?{phone:e.replace("+853",""),areaCode:"+853"}:{phone:e,areaCode:"+86"}},a=function(e,r){var t=!0;switch(e){case"+86":/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(r)||(t=!1);break;case"+886":/^9[0-9]{8}$/.test(r)||(t=!1)}return t}}});