webpackJsonp([0],{"G+mO":function(t,e){},Ge6E:function(t,e){},HwJ3:function(t,e,i){t.exports=i.p+"static/img/bg_video.16faad3.jpeg"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("MVMM"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=i("Z0/y")({name:"App",components:{}},a,!1,function(t){i("TUJt")},null,null).exports,s=i("zO6J"),r={name:"img-caption",props:{imgSrc:{type:String,default:"https://static1.squarespace.com/static/5300d507e4b0fa8137bdc65d/t/5a2b51a50d9297be55ef560b/1512788410501/Squarespace+Trucking+Website+Project?format=750w"},imgWidth:{type:Number,default:400},imgHeight:{type:Number,default:400},captionGroup:{type:String,default:"Project Group"},captionTitle:{type:String,default:"Project Title"},projectId:{type:String}},data:function(){return{imgSelected:!1,styleSize:{"max-width":String(this.imgWidth)+"px","max-height":String(this.imgHeight)+"px",width:String(this.imgWidth)+"px",height:String(this.imgHeight)+"px"}}},components:{},methods:{}},x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ctnr",style:t.styleSize},[i("div",{staticClass:"ctnr-caption",style:t.styleSize},[i("div",{staticClass:"ctnr-caption-holder"},[i("h2",{staticStyle:{color:"white","font-size":"1.5em","font-style":"italic","font-family":"adobe-garamond-pro"}},[t._v(t._s(t.captionGroup))]),t._v(" "),i("h1",{staticStyle:{color:"white","font-size":"2em"}},[i("b",[t._v(t._s(t.captionTitle))])]),t._v(" "),i("router-link",{staticClass:"caption-button",attrs:{tag:"button",to:{name:"project",params:{project_id:t.projectId}}}},[t._v("WATCH PROJECT")])],1)]),t._v(" "),i("div",{staticClass:"ctnr-mask",style:t.styleSize}),t._v(" "),i("img",{staticClass:"ctnr-img",style:t.styleSize,attrs:{src:t.imgSrc}})])},staticRenderFns:[]};var c=i("Z0/y")(r,x,!1,function(t){i("Ge6E")},null,null).exports,p={name:"annouce-bar",components:{},methods:{},props:{colorTheme:{type:String,default:"dark"}}},l={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:"annouce-bar-"+this.colorTheme},[this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"annouce-bar-text"},[e("p"),this._v(" "),e("p",[this._v("If you haven't already, check out my latest Vlog episode (EP09 - Get Out Of The Office).\n      "),e("a",{attrs:{target:"_blank",href:"https://youtu.be/QmNHsJgs9kQ"}},[this._v("Watch Video")])])])}]};var h=i("Z0/y")(p,l,!1,function(t){i("lPhA")},null,null).exports,m={name:"nav-bar",components:{},props:{colorTheme:{type:String,default:"dark"}},methods:{}},u={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"nav-bar-items"},[o("div",{staticClass:"nav-bar-name-icon"},["dark"==t.colorTheme?o("a",{staticClass:"name-icon",attrs:{href:"/"}},[o("img",{attrs:{src:i("ZvlS"),alt:"shawn3298317.com"}})]):o("a",{staticClass:"name-icon",attrs:{href:"/"}},[o("img",{attrs:{src:"https://static1.squarespace.com/static/5300d507e4b0fa8137bdc65d/t/597ba17ed7bdce94eb29e455/1538084688919/?format=1500w",alt:"shawn3298317.com"}})])]),t._v(" "),o("div",{staticClass:"nav-bar-links"},[o("nav",[o("div",{class:"nav-bar-links-inner-"+t.colorTheme},[o("a",{attrs:{href:""}},[t._v("Home")]),t._v(" "),o("a",{attrs:{href:""}},[t._v("Resume/CV")]),t._v(" "),o("a",{attrs:{href:""}},[t._v("About")]),t._v(" "),o("a",{attrs:{href:""}},[t._v("Portfolio")]),t._v(" "),o("a",{attrs:{href:""}},[t._v("Contact")])])])])])},staticRenderFns:[]};var d=i("Z0/y")(m,u,!1,function(t){i("zC/p")},null,null).exports,f={name:"main",components:{imgCaption:c,annouceBar:h,navBar:d},methods:{changeNavView:function(t){console.log(t+" "),console.log(this.children)}}},v={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main"},[o("annouceBar"),t._v(" "),o("div",{staticClass:"nav-bar",staticStyle:{overflow:"hidden"}},[o("img",{staticClass:"background-video2",staticStyle:{width:"1310.22px",height:"737px"},attrs:{src:i("HwJ3"),width:"560",height:"315"}}),t._v(" "),o("navBar"),t._v(" "),t._m(0)],1),t._v(" "),o("div",{staticClass:"project-bar"},[o("div",{staticClass:"project-bar-contents"},[o("h2",{staticStyle:{"font-size":"42px",color:"black","font-style":"normal","font-family":"adobe-garamond-pro","text-rendering":"optimizeLegibility"}},[t._v(" These are my latest projects!! ")]),t._v(" "),o("div",{staticClass:"project-items"},[o("imgCaption",{attrs:{projectId:0,imgSrc:"https://static1.squarespace.com/static/5300d507e4b0fa8137bdc65d/t/5a2b520a652dea32996c6415/1512788496834/squarespace-photographer-website-project.jpg",imgWidth:350,imgHeight:350,captionGroup:"NaturalLanguageProcessing",captionTitle:"Amap Learning2Rank"}}),t._v(" "),o("imgCaption",{attrs:{projectId:1,imgSrc:"https://static1.squarespace.com/static/5300d507e4b0fa8137bdc65d/t/584598f9d1758ec839a47e61/1512788537207/Squarespace+Personal+Brand+Website+Project?format=750w",imgWidth:350,imgHeight:350,captionGroup:"NaturalLanguageProcessing",captionTitle:"Her - Office Assistant Dialogue System"}}),t._v(" "),o("imgCaption",{attrs:{projectId:100,imgSrc:"https://static1.squarespace.com/static/5300d507e4b0fa8137bdc65d/t/5a2b51a50d9297be55ef560b/1512788410501/Squarespace+Trucking+Website+Project?format=750w",imgWidth:350,imgHeight:350,captionGroup:"Robotics/CV",captionTitle:"AlphaBot"}})],1),t._v(" "),t._m(1)])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav-intro",staticStyle:{"margin-top":"164px"}},[e("h2",{staticStyle:{color:"white","font-style":"italic","font-family":"adobe-garamond-pro"}},[this._v("I'm here to build best chatbots!!!")]),this._v(" "),e("h1",{staticStyle:{color:"white","text-transform":"uppercase","font-size":"72px"}},[e("b",[this._v("Let's build something amazing together")])]),this._v(" "),e("button",{staticClass:"white-button",attrs:{href:""}},[this._v("WATCH VIDEO")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"btn-container"},[e("button",{staticClass:"black-button",attrs:{href:""}},[this._v("VIEW MORE PROJECTS")])])}]};var g=i("Z0/y")(f,v,!1,function(t){i("G+mO")},null,null).exports,A={name:"project",components:{imgCaption:c,annouceBar:h,navBar:d},methods:{getProjectInfoFromAsset:function(){var t=i("WUZF"),e=t[0];return this.project_id in t&&(e=t[this.project_id]),console.log(this.project_id),console.log(e.projectName),console.log(e.info),console.log("video"in e.info),e},hasProjectVideo:function(){return console.log("has Project video"),console.log("video"in this.project_info.info),"video"in this.project_info.info}},props:{project_id:{type:String,default:"0"}},data:function(){return{project_info:this.getProjectInfoFromAsset()}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("annouceBar",{attrs:{colorTheme:"light"}}),t._v(" "),i("navBar",{attrs:{colorTheme:"light"}}),t._v(" "),i("div",{staticClass:"project-ctnr"},[i("div",{staticClass:"project-ctnr-pd"},[i("h2",{staticClass:"project-title"},[t._v(" "+t._s(t.project_info.projectName))]),t._v(" "),i("h2",{staticClass:"project-intro"},[t._v(t._s(t.project_info.intro))]),t._v(" "),t.hasProjectVideo()?i("iframe",{staticClass:"project-video",attrs:{width:"560",height:"315",src:t.project_info.info.video,frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}}):t._e(),t._v(" "),i("ul",{staticStyle:{position:"relative",top:"50px"}},t._l(t.project_info.info.summary,function(e){return i("li",{staticClass:"project-summary-item"},[t._v(t._s(e))])}))])])],1)},staticRenderFns:[]};var b=i("Z0/y")(A,_,!1,function(t){i("kuTw")},null,null).exports;o.a.use(s.a);var y=new s.a({routes:[{path:"/",name:"main",component:g},{path:"/project/:project_id",name:"project",component:b,props:!0}],scrollBehavior:function(t,e,i){return{x:0,y:0}}});o.a.config.productionTip=!1,new o.a({el:"#app",router:y,components:{App:n},template:"<App/>"})},TUJt:function(t,e){},WUZF:function(t,e){t.exports={0:{projectGroup:"NLP",projectName:"Amap Learning2Rank",intro:"Here are 2 sentences of introduction for this project.This is the first sentence, blah blah blah. And this is the second sentence. Yeah!",info:{pics:[],summary:["point 1: xxxxxxxxxxxxxxxxxxxx","point 2: xxxxxxxxxxxxxxxxxxxx","point 3: xxxxxxxxxxxxxxxxxxxx","point 4: xxxxxxxxxxxxxxxxxxxx"]}},1:{projectGroup:"NLP",projectName:"Her",intro:"Here are 2 sentences of introduction for this project.",info:{pics:[],summary:["point 1: xxxxxxxxxxxxxxxxxxxx","point 2: xxxxxxxxxxxxxxxxxxxx","point 3: xxxxxxxxxxxxxxxxxxxx","point 4: xxxxxxxxxxxxxxxxxxxx"]}},2:{projectGroup:"NLP",projectName:"Retail Burst Detection",intro:"Here are 2 sentences of introduction for this project.",info:{pics:[],summary:["point 1: xxxxxxxxxxxxxxxxxxxx","point 2: xxxxxxxxxxxxxxxxxxxx","point 3: xxxxxxxxxxxxxxxxxxxx","point 4: xxxxxxxxxxxxxxxxxxxx"]}},100:{projectGroup:"Robotics/CV",projectName:"AlphaBot",intro:"Here are 2 sentences of introduction for this project. This is the first sentence, blah blah blah. And this is the second sentence. Yeah!",info:{pics:[],summary:["point 1: xxxxxxxxxxxxxxxxxxxx","point 2: xxxxxxxxxxxxxxxxxxxx","point 3: xxxxxxxxxxxxxxxxxxxx","point 4: xxxxxxxxxxxxxxxxxxxx"],video:"https://www.youtube.com/embed/395eBJpKtUE"}}}},ZvlS:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABJCAYAAABxcwvcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAolJREFUeNrsm0FOw0AMRVPEHrhBlRNU6gVYcAXWhE2vAEcoO7asKFuu0A0HYBFu0BNUvUHwSDMihDSZpmP7O9SShZqm8ffrjMczopOqqjIweyYvyVcogs7BADkwd43X6nYGDOiVvDhBagd0T/4GBcrVJGVfVT9WRFwXd1RAUKCQAcGAQgcEAcoCIHVQVgCpgrIESA2UNUAqoCwCEgdlFZAoKMuAxOJYByQSbwyA2OOOBRBr/DEBYtMxNkAsesYIKLkuSSFz8jX51t+/9a/n6KAkAQV7J196QM5y9BElFTgAubE49aQChilmskZJBQoj6cUiKKkhO28UbFeTrqyAklwl8tqICvZgAZRGH5T7kRRsgQ5Ks1G89c/9RK9R2p10qFF99xWMGnrzlALU1lUv/PPXEYBUD+6kRlAYMc1ue9uzLZEA1Ju31BRb+tpTNYDlIIA680fdzReKOv5wOAGKAOUuTMl3/sKG/PKfA3I+q0Eq6xcDqFIJFBKgXyw63wQCFNtPJQfUtrppgIoZQRKQ9uZ+0M2KU4wbUmfOgz6kUIM4IfXmetSHE0AqqrR7vOSAYk4BEFY9LkjRuSV9mCFIB+XE8lBwSAfnwvpwQEiDchAJAgJpsHbRYIqQjtI8GfijwBn5B/kF+Rf5NfmO83dC/u9Ty3uP7Fq1vp0BI2mfsWvMtOa51mZV6/+TEEEl1QQpCk0LtDgUDSZEasc2JVYrpknR0rEyy+KlvgzL00BstFotqKJ1z+LKI74wWOthVFoMS82eWg9mZdug2s1b2F+pb3fQd+oQG2fkIw2YkwXUwzGoM6qhZ9yprXkOPRU8P+81FEhNUBkKIDRIdVAbFECIkDI/1XYogJx9CzAAYAuX3k80w9QAAAAASUVORK5CYII="},kuTw:function(t,e){},lPhA:function(t,e){},"zC/p":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4b25fd4d296a6b35541e.js.map