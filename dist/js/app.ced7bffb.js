(function(t){function a(a){for(var n,c,i=a[0],l=a[1],s=a[2],u=0,v=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&v.push(r[c][0]),r[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(a);while(v.length)v.shift()();return o.push.apply(o,s||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,i=1;i<e.length;i++){var l=e[i];0!==r[l]&&(n=!1)}n&&(o.splice(a--,1),t=c(c.s=e[0]))}return t}var n={},r={app:0},o=[];function c(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=n,c.d=function(t,a,e){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)c.d(e,n,function(a){return t[a]}.bind(null,n));return e},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=a,i=i.slice();for(var s=0;s<i.length;s++)a(i[s]);var d=l;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},1:function(t,a){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{staticStyle:{"background-Color":"#E3F2FD"}},[e("NavBar"),e("v-content",[e("router-view")],1),e("Footer")],1)},o=[],c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",[e("v-toolbar",{staticClass:"elevation-1 grey darken-4",attrs:{text:"",cols:"12",sm:"5"}},[e("v-toolbar-title",{staticClass:"text-uppercase"},[e("v-btn",{staticClass:"font-weight-light yellow--text",attrs:{height:"30",width:"10",outlined:"",to:"/"}},[t._v("Home")])],1),e("v-spacer"),e("v-toolbar-title",{staticClass:"font-weight-light yellow--text text-align:center",staticStyle:{"font-size":"13px"},attrs:{outlined:"",to:"/",align:"center"}},[t._v(" GYM 全年無休 營業時間: "),e("br"),t._v("PM12:00-AM3:00 ")]),e("v-spacer"),e("v-btn",{attrs:{text:"",color:"yellow",href:"http://gym.gym141.com/api/admin",height:"30",width:"10"}},[e("span",[t._v("登入")]),e("v-icon",{attrs:{right:""}},[t._v("mdi-exit-to-app")])],1)],1)],1)},i=[],l={data:function(){return{}}},s=l,d=e("2877"),u=e("6544"),v=e.n(u),m=e("8336"),f=e("132d"),p=e("2fa4"),_=e("71d9"),h=e("2a7f"),b=Object(d["a"])(s,c,i,!1,null,null,null),g=b.exports;v()(b,{VBtn:m["a"],VIcon:f["a"],VSpacer:p["a"],VToolbar:_["a"],VToolbarTitle:h["a"]});var y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-footer",{attrs:{dark:"",padless:""}},[e("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[e("v-card-title",{staticClass:"teal"},[e("strong",{staticClass:"subheading"},[t._v("Welcome to GYM")]),e("v-spacer"),t._l(t.icons,(function(a){return e("v-btn",{key:a,staticClass:"mx-4",attrs:{dark:"",icon:""},on:{click:function(e){return t.footer_click(a)}}},[e("span",{staticClass:"iconify",attrs:{"data-icon":a,"data-inline":"false"}})])}))],2),e("v-card-text",{staticClass:"py-2 white--text text-center"},[t._v(" "+t._s((new Date).getFullYear())+" ")])],1)],1)},k=[],C=(e("caad"),e("ac1f"),e("2532"),e("5319"),{data:function(){return{wechat_info:"",line_info:"",icons:["mdi-wechat","fa-brands:line"]}},mounted:function(){var t=this,a="http://gym.gym141.com/api/offo";this.axios.get("".concat(a)).then((function(a){t.wechat_info=a.data[0].wechat_info,t.line_info=a.data[0].line_info})).catch((function(){}))},methods:{footer_click:function(t){t.includes("line")?""!=this.line_info&&window.location.replace(this.line_info):""!=this.wechat_info&&window.location.replace(this.wechat_info)}}}),w=C,x=(e("760c"),e("b0af")),V=e("99d9"),j=e("553a"),O=Object(d["a"])(w,y,k,!1,null,null,null),S=O.exports;v()(O,{VBtn:m["a"],VCard:x["a"],VCardText:V["c"],VCardTitle:V["d"],VFooter:j["a"],VSpacer:p["a"]});var T={name:"App",components:{NavBar:g,Footer:S},data:function(){return{}}},D=T,E=e("7496"),B=e("a75b"),L=Object(d["a"])(D,r,o,!1,null,null,null),$=L.exports;v()(L,{VApp:E["a"],VContent:B["a"]});var P=e("8c4f"),H=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{staticClass:"blue lighten-5"},[e("loading",{attrs:{active:t.isLoading,"is-full-page":"",height:t.loader_height,width:t.loader_width,color:"#039BE5"},on:{"update:active":function(a){t.isLoading=a}}}),e("Bottom_area",{attrs:{callback:t.btn_event}}),e("TabItems",{attrs:{money_data:t.money,callback:t.tab_event}}),e("Card",{attrs:{card_data:t.card}})],1)},I=[],F=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-row",{attrs:{row:"",wrap:""}},t._l(t.area_data,(function(a){return e("v-col",{key:a.name,attrs:{align:"center",justify:"center"}},[a.clicked?e("div",[e("v-btn",{staticClass:"white--text",attrs:{large:"",color:t.clicked_color},on:{click:function(e){return t.btn_click(a)}}},[t._v(t._s(a.name))])],1):e("div",[e("v-btn",{staticClass:"white--text",attrs:{large:"",color:t.default_color},on:{click:function(e){return t.btn_click(a)}}},[t._v(t._s(a.name))])],1)])})),1)],1)},A=[],M=(e("d81d"),e("b0c0"),{data:function(){return{default_color:"blue darken-3",clicked_color:"#039BE5",area_data:[{name:"台北",clicked:!0},{name:"新北",clicked:!1},{name:"桃園",clicked:!1},{name:"新竹",clicked:!1},{name:"苗栗",clicked:!1},{name:"台中",clicked:!1},{name:"南投",clicked:!1},{name:"彰化",clicked:!1},{name:"雲林",clicked:!1},{name:"嘉義",clicked:!1},{name:"台南",clicked:!1},{name:"高雄",clicked:!1},{name:"屏東",clicked:!1},{name:"台東",clicked:!1},{name:"花蓮",clicked:!1},{name:"宜蘭",clicked:!1},{name:"基隆",clicked:!1},{name:"澎湖",clicked:!1},{name:"金門",clicked:!1}]}},props:{callback:{type:Function}},methods:{btn_click:function(t){this.area_data=this.area_data.map((function(t){return t.clicked&&(t.clicked=!1),t})),this.callback&&(this.callback(t.name),t.clicked=!0,this.current_click=t)}}}),G=M,R=e("62ad"),q=e("a523"),Q=e("0fd9"),Y=Object(d["a"])(G,F,A,!1,null,null,null),z=Y.exports;v()(Y,{VBtn:m["a"],VCol:R["a"],VContainer:q["a"],VRow:Q["a"]});var J=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",[e("v-tabs",{attrs:{centered:"",dark:"","background-color":"blue darken-3","show-arrows":""}},[e("v-tabs-slider",{attrs:{color:"teal lighten-3"}}),t._l(t.money_data,(function(a){return e("v-tab",{key:a.money,on:{click:function(e){return t.tab_click(a)}}},[t._v(t._s(a.money))])}))],2)],1)},N=[],W={data:function(){return{}},props:{money_data:{type:Array,required:!0},callback:{type:Function}},methods:{tab_click:function(t){this.callback&&this.callback(t.money)}}},K=W,U=e("71a3"),X=e("fe57"),Z=e("9a96"),tt=Object(d["a"])(K,J,N,!1,null,null,null),at=tt.exports;v()(tt,{VCard:x["a"],VTab:U["a"],VTabs:X["a"],VTabsSlider:Z["a"]});var et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.card_data,(function(a){return e("v-flex",{key:a.name,attrs:{xl2:"",lg2:"",md3:"",sm3:"",xs6:""}},[e("v-card",{staticClass:"mx-auto"},[e("v-img",{attrs:{src:a.img1,"aspect-ratio":"0.9"}}),e("v-card-title",[t._v(t._s(a.name))]),e("v-card-subtitle",[t._v(t._s(a.cost))]),e("v-card-actions",[e("v-btn",{attrs:{color:"green",text:"",to:"/Infopage?id="+a.id}},[t._v("去看看")]),e("v-spacer")],1)],1)],1)})),1)],1)},nt=[],rt={props:{card_data:{type:Array,required:!0}}},ot=rt,ct=e("0e8f"),it=e("adda"),lt=e("a722"),st=Object(d["a"])(ot,et,nt,!1,null,null,null),dt=st.exports;v()(st,{VBtn:m["a"],VCard:x["a"],VCardActions:V["a"],VCardSubtitle:V["b"],VCardTitle:V["d"],VContainer:q["a"],VFlex:ct["a"],VImg:it["a"],VLayout:lt["a"],VSpacer:p["a"]});var ut=e("9062"),vt=e.n(ut),mt=(e("e40d"),{name:"DeliveryHomepage",components:{Bottom_area:z,TabItems:at,Card:dt,Loading:vt.a},data:function(){return{money:[{money:"4000~5000"},{money:"7000~8000"},{money:"10000~12000"},{money:"15000~20000"},{money:"20000 ↑"}],card:[],current_area:"台北",current_money:"4000~5000",isLoading:!1,loader_height:128,loader_width:128}},methods:{btn_event:function(t){this.current_area=t,this.getData()},tab_event:function(t){this.current_money=t,this.getData()},getData:function(){var t=this;this.isLoading=!0;var a="http://gym.gym141.com/api/info";this.axios.post("".concat(a),this.Qs.stringify({stay_or_delivery:"1",area:this.current_area,cost:this.current_money})).then((function(a){t.card=a.data,t.isLoading=!1})).catch((function(){}))}},mounted:function(){this.getData()}}),ft=mt,pt=Object(d["a"])(ft,H,I,!1,null,null,null),_t=pt.exports;v()(pt,{VApp:E["a"]});var ht=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"blue lighten-5",attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"4",md:"4"}},[e("v-img",{attrs:{src:this.avatar,"aspect-ratio":"1"}})],1),e("v-col",[e("div",[e("div",{staticClass:"display-1"},[t._v(t._s(this.name))]),e("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead"),e("tbody",t._l(t.desserts,(function(a){return e("tr",{key:a.name},[e("td",[t._v(t._s(a.name))]),e("td",[t._v(t._s(a.calories))])])})),0)]},proxy:!0}])})],1)])],1),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-card",[e("v-container",{attrs:{fluid:""}},[e("v-row",t._l(t.imgs,(function(a){return e("v-col",{key:a.url,staticClass:"d-flex child-flex",attrs:{cols:"4"}},[e("v-card",{staticClass:"d-flex",attrs:{flat:"",tile:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},[e("viewer",[e("img",{staticStyle:{width:"100%",height:"100%","max-width":"100%","max-height":"100%"},attrs:{src:a.url}})])],1)],1)})),1)],1)],1)],1)],1),e("v-row",{attrs:{justify:"space-around"}},[e("v-col",[e("video-player",{ref:"videoPlayer",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:{sources:[{type:"video/mp4",src:this.video}]}}})],1)],1)],1)},bt=[],gt=e("d6d3"),yt=(e("fda2"),e("451f"),{components:{videoPlayer:gt["videoPlayer"]},data:function(){return{desserts:[],name:"",avatar:"",video:"",imgs:[]}},mounted:function(){var t=this,a="http://gym.gym141.com/api/info/"+this.$route.query.id;this.axios.get("".concat(a)).then((function(a){t.name=a.data.name,t.avatar=a.data.img1,t.video=a.data.video,t.desserts=[{name:"年紀",calories:a.data.age},{name:"條件(身高/胸圍)",calories:a.data.condition},{name:"價格(固定)",calories:a.data.cost},{name:"服務地區",calories:a.data.area_name},{name:"服務內容",calories:a.data.note},{name:"定點或外送",calories:a.data.type_value}],t.imgs=[{url:a.data.img2},{url:a.data.img3},{url:a.data.img4}]})).catch((function(){}))}}),kt=yt,Ct=e("490a"),wt=e("1f4f"),xt=Object(d["a"])(kt,ht,bt,!1,null,null,null),Vt=xt.exports;v()(xt,{VCard:x["a"],VCol:R["a"],VContainer:q["a"],VImg:it["a"],VProgressCircular:Ct["a"],VRow:Q["a"],VSimpleTable:wt["a"]});var jt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{"justify-space-around":""}},[e("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"12"}},[e("v-btn",{staticClass:"btn",attrs:{height:"150",block:"",rounded:"",color:"primary",to:"/DeliveryHomepage"}},[t._v("外送教練 "),e("br"),t._v(" Delivery coach")])],1),e("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"12"}},[e("v-btn",{staticClass:"btn",attrs:{height:"150",block:"",rounded:"",color:"amber darken-3",dark:"",to:"/StayHomepage"}},[t._v("定點教練 "),e("br"),t._v("Designated coach")])],1),e("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"12"}},[e("v-btn",{staticClass:"btn",attrs:{height:"150",block:"",rounded:"",color:"pink darken-1",dark:"",to:"/GameRule"}},[t._v("遊戲規則 "),e("br"),t._v("Game rules")])],1)],1)},Ot=[],St={},Tt=Object(d["a"])(St,jt,Ot,!1,null,null,null),Dt=Tt.exports;v()(Tt,{VBtn:m["a"],VCol:R["a"],VContainer:q["a"]});var Et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{staticClass:"blue lighten-5"},[e("loading",{attrs:{active:t.isLoading,"is-full-page":"",height:t.loader_height,width:t.loader_width,color:"#039BE5"},on:{"update:active":function(a){t.isLoading=a}}}),e("Bottom_area",{attrs:{callback:t.btn_event}}),e("TabItems",{attrs:{money_data:t.money,callback:t.tab_event}}),e("Card",{attrs:{card_data:t.card}})],1)},Bt=[],Lt={name:"StayHomepage",components:{Bottom_area:z,TabItems:at,Card:dt,Loading:vt.a},data:function(){return{money:[{money:"4500~5000"},{money:"6000 ↑"}],card:[],current_area:"台北",current_money:"4500~5000",isLoading:!1,loader_height:128,loader_width:128}},methods:{btn_event:function(t){this.current_area=t,this.getData()},tab_event:function(t){this.current_money=t,this.getData()},getData:function(){var t=this;this.isLoading=!0;var a="http://gym.gym141.com/api/info";this.axios.post("".concat(a),this.Qs.stringify({stay_or_delivery:"2",area:this.current_area,cost:this.current_money})).then((function(a){t.card=a.data,t.isLoading=!1})).catch((function(){this.isLoading=!1}))}},mounted:function(){this.getData()}},$t=Lt,Pt=Object(d["a"])($t,Et,Bt,!1,null,null,null),Ht=Pt.exports;v()(Pt,{VApp:E["a"]});var It=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"blue lighten-5"},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:"",align:"center"}},[t._v("遊戲規則")])],1),e("v-col",{attrs:{cols:"12"}},[e("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:"",align:"center"}},[t._v(" 美女外約~全年無休 "),e("br"),t._v("工作時間13:00~03:00 🔞洗吹做全套服務🔞 "),e("br"),t._v("親愛的 哥哥~ 因為我們每天、每個時段出來的女孩子，人都不一樣（女孩子都是兼職的妹妹） "),e("br"),t._v("💘請先告訴我您在那個城市？喜歡的類型？ "),e("br"),t._v("預算價位？住的酒店電話？房間號碼？ "),e("br"),t._v("你的名字？（😗女孩子越漂亮價錢越高😗） "),e("br"),t._v("一次50分~60分鐘，女孩子都可以看滿意再做唷！💘 "),e("br"),e("br"),e("br"),t._v("定點 價格區分 "),e("br"),e("br"),t._v("4500~5000 "),e("br"),e("br"),t._v("6000以上 "),e("br"),e("br"),e("br"),t._v("外送 價格區分 "),e("br"),e("br"),t._v("4000~5000 "),e("br"),e("br"),t._v("7000~8000 "),e("br"),e("br"),t._v("10000~12000 "),e("br"),e("br"),t._v("15000~20000 "),e("br"),e("br"),t._v("20000以上 ")])],1),e("v-col",{attrs:{cols:"12"}},[e("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:"",align:"center"}},[t._v("👙制服店👙")])],1),e("v-col",{attrs:{cols:"12"}},[e("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:"",align:"center"}},[t._v(" 妹妹條件比較一般，但是脫衣陪酒不回穿。 "),e("br"),t._v("敢玩敢秀，熱情主動，唱歌喝酒。摸摸，親親，吸吸，玩遊戲都是可以的。 "),e("br"),t._v("（ 制服店也有👚領檯妹妹 👚不脫衣 但是條件也不錯 也會跳艷舞） 如果哥哥們人多 去這種酒店會比較好玩刺激。 "),e("br"),t._v("🔞1800一小時一個妹妹，基本要坐2小時以上，啤酒50一瓶，洋酒大概1500~2000左右（看喝什麼酒）， "),e("br"),t._v("包間小費500、少爺小費1000。全包1500只要付一次。💋💋💋💋💋💋💋💋💋💋 ")])],1),e("v-col",{attrs:{cols:"12"}},[e("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:"",align:"center"}},[t._v("👠禮服店👠")])],1),e("v-col",{attrs:{cols:"12"}},[e("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:"",align:"center"}},[t._v(" 妹妹比較年輕漂亮（高顏質美眉）會英文日文的都有，可以帶老闆或者客戶去玩。 "),e("br"),t._v("不脫不秀舞，單純陪老闆們，唱歌，喝酒，親親，抱抱，玩遊戲，甜美可愛。 "),e("br"),t._v("🔞2000一小時一個妹妹，基本要坐2小時以上，啤酒50一瓶，洋酒大概2000~3000左右（看喝什麼酒）， "),e("br"),t._v("包間小費500，少爺小費1000。全包1500只要付一次。 ")])],1),e("v-col",{attrs:{cols:"12"}},[e("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:"",align:"center"}},[t._v("❣️制服夜總會❣️禮服夜總會❣️")])],1),e("v-col",{attrs:{cols:"12"}},[e("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:"",align:"center"}},[t._v(" 兩種不同的型態,哥哥選擇哪一種提早告訴我 "),e("br"),t._v("我會用心安排，一般入場時間是晚上7點，妹妹大概9點陸陸續續上班。 "),e("br"),t._v("不要太晚進去夜總會，才會有好的女孩，選擇也比較多，帳單明確，不需要擔心。 "),e("br"),t._v("來台灣就是要嘗試不同又好玩的美女。😗😗等你唷! ")])],1)],1)],1)},Ft=[],At={},Mt=Object(d["a"])(At,It,Ft,!1,null,null,null),Gt=Mt.exports;v()(Mt,{VCard:x["a"],VCol:R["a"],VContainer:q["a"],VRow:Q["a"]}),n["a"].use(P["a"]);var Rt=[{path:"/",name:"Home",component:Dt},{path:"/StayHomepage",name:"StayHomepage",component:Ht},{path:"/DeliveryHomepage",name:"DeliveryHomepage",component:_t},{path:"/GameRule",name:"GameRule",component:Gt},{path:"/Infopage",name:"Infopage",component:Vt}],qt=new P["a"]({mode:"history",base:"/",routes:Rt}),Qt=qt,Yt=e("f309");n["a"].use(Yt["a"]);var zt=new Yt["a"]({}),Jt=e("bc3a"),Nt=e.n(Jt),Wt=e("a7fe"),Kt=e.n(Wt),Ut=e("4328"),Xt=e.n(Ut),Zt=e("6944"),ta=e.n(Zt);e("0808");n["a"].use(ta.a),ta.a.setDefaults({Options:{inline:!0,button:!0,navbar:!0,title:!0,toolbar:!0,tooltip:!0,movable:!0,zoomable:!0,rotatable:!0,scalable:!0,transition:!0,fullscreen:!0,keyboard:!0,url:"data-source"}}),n["a"].config.productionTip=!1,n["a"].prototype.Qs=Xt.a,n["a"].use(Kt.a,Nt.a),n["a"].config.productionTip=!1,new n["a"]({router:Qt,vuetify:zt,render:function(t){return t($)}}).$mount("#app")},"760c":function(t,a,e){"use strict";var n=e("a4bc"),r=e.n(n);r.a},a4bc:function(t,a,e){}});
//# sourceMappingURL=app.ced7bffb.js.map