(function(e){function t(t){for(var n,s,r=t[0],l=t[1],c=t[2],u=0,v=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&v.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(v.length)v.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,r=1;r<i.length;r++){var l=i[r];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=i[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";i("85ec")},"56d7":function(e,t,i){"use strict";i.r(t);var n=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("AppBar",{on:{"click-nav":function(t){e.drawer=!0}}},[i("v-tabs",{attrs:{grow:"","center-active":"",centered:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[i("v-tab",[e._v("Event")]),i("v-tab",[e._v("Category")])],1)],1),i("v-main",[i("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[i("v-tab-item",{attrs:{eager:""}},[i("Event")],1),i("v-tab-item",{attrs:{eager:""}},[i("Category")],1)],1)],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app-bar",{attrs:{app:"",color:"primary",dark:""},scopedSlots:e._u([{key:"extension",fn:function(){return[e._t("default")]},proxy:!0}],null,!0)},[i("v-app-bar-nav-icon",{on:{click:e.emitClickNav}}),i("v-toolbar-title",[e._v("Time Recorder")])],1)},r=[],l={methods:{emitClickNav(){this.$emit("click-nav")}}},c=l,d=i("2877"),u=i("6544"),v=i.n(u),m=i("40dc"),f=i("5bc1"),g=i("2a7f"),b=Object(d["a"])(c,s,r,!1,null,null,null),h=b.exports;v()(b,{VAppBar:m["a"],VAppBarNavIcon:f["a"],VToolbarTitle:g["a"]});var p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{staticClass:"v-container--board"},[i("v-slide-x-transition",{attrs:{group:""}},e._l(e.dates,(function(t){return i("v-card-text",{key:t.date,staticClass:"py-0"},[i("div",{staticClass:"text-subtitle-1"},[e._v(e._s(t.date))]),i("v-timeline",{attrs:{"align-top":"",dense:""}},[i("v-slide-x-transition",{attrs:{group:""}},e._l(t.events,(function(t){return i("v-timeline-item",{key:t.id,attrs:{color:t.color,icon:t.icon,"fill-dot":""}},[i("v-row",{staticClass:"pt-1 flex-nowrap"},[i("v-col",{attrs:{cols:"3"}},[i("strong",[e._v(e._s(t.beginTime))])]),i("v-col",[i("strong",[e._v(e._s(t.summary))]),i("div",{staticClass:"text-caption"},[e._v(" "+e._s(e._f("getDurationString")(t))+" ")])]),i("v-col",{attrs:{cols:"auto"}},[i("v-btn",{attrs:{outlined:"","x-small":"",fab:"",color:"indigo"},on:{click:function(i){return e.openModifyEventSheet(t)}}},[i("v-icon",[e._v("mdi-pencil")])],1)],1)],1)],1)})),1)],1)],1)})),1),0===e.dates.length?i("span",[e._v("No Events.")]):e._e(),i("v-btn",{staticClass:"v-btn--action",attrs:{fab:"",dark:"",color:"indigo"},on:{click:e.openAddEventSheet}},[i("v-icon",{attrs:{dark:""}},[e._v(" mdi-plus ")])],1),i("v-bottom-sheet",{attrs:{eager:""},model:{value:e.addEvent,callback:function(t){e.addEvent=t},expression:"addEvent"}},[i("AddEvent",{ref:"addEvent",on:{close:e.closeAddEventSheet}})],1),i("v-bottom-sheet",{attrs:{eager:""},model:{value:e.modifyEvent,callback:function(t){e.modifyEvent=t},expression:"modifyEvent"}},[i("ModifyEvent",{ref:"modifyEvent",on:{close:e.closeModifyEventSheet}})],1)],1)},y=[],x=i("ec26");const T="TIME_RECORDER",C=T+"_EVENT",_=()=>JSON.parse(localStorage.getItem(C)||"[]"),k=e=>{localStorage.setItem(C,JSON.stringify(e))},E=_(),D=({beginDate:e,beginTime:t,endDate:i,endTime:n})=>{const a=Date.parse(`${e}T${t}:00`),o=Date.parse(`${i}T${n}:00`);return Math.floor((o-a)/6e4)},S=({beginDate:e,beginTime:t,endDate:i,endTime:n})=>{const a=D({beginDate:e,beginTime:t,endDate:i,endTime:n}),o=String(Math.floor(a/60)).padStart(2,"0"),s=String(Math.floor(a%60)).padStart(2,"0");return`${o}H ${s}M`},V=({category:e,summary:t,beginDate:i,beginTime:n,endDate:a,endTime:o})=>{E.push({id:Object(x["a"])(),category:e,summary:t,beginDate:i,beginTime:n,endDate:a,endTime:o}),k(E)},M=e=>E.find(t=>t.id===e),w=({id:e,category:t,summary:i,beginDate:n,beginTime:a,endDate:o,endTime:s})=>{const r=M(e);r&&(r.category=t,r.summary=i,r.beginDate=n,r.beginTime=a,r.endDate=o,r.endTime=s,k(E))},$=e=>{const t=E.findIndex(t=>t.id===e);t>-1&&(E.splice(t,1),k(E))};var O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-sheet",{staticClass:"text-center pa-4"},[i("v-row",[i("v-col",{staticClass:"d-flex justify-start"},[i("span",{staticClass:"text-h6"},[e._v(e._s(e.sheetTitle))])]),i("v-col",{attrs:{cols:"auto"}},[i("v-btn",{attrs:{fab:"","x-small":"",text:""},on:{click:e.emitClose}},[i("v-icon",[e._v("mdi-close")])],1)],1)],1),i("v-form",{ref:"form",staticClass:"mt-2",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-row",[i("v-col",[i("v-select",{attrs:{items:e.categoryList,"item-text":"title","item-value":"id",rules:e.categoryRules,"validate-on-blur":"",label:"Category",required:"",autofocus:""},scopedSlots:e._u([{key:"item",fn:function(t){var n=t.item;return[i("v-icon",{domProps:{textContent:e._s(n.icon)}}),i("span",{staticClass:"ml-2"},[e._v(e._s(n.title))])]}}]),model:{value:e.category,callback:function(t){e.category=t},expression:"category"}})],1),i("v-col",{staticClass:"d-flex align-center",attrs:{cols:"auto"}},[i("v-avatar",{attrs:{color:e.categoryInfo.color,size:"38"}},[i("v-icon",{attrs:{dark:""},domProps:{textContent:e._s(e.categoryInfo.icon)}})],1)],1)],1),i("v-row",[i("v-col",[i("v-text-field",{attrs:{counter:20,rules:e.summaryRules,"validate-on-blur":"",label:"Summary",required:""},model:{value:e.summary,callback:function(t){e.summary=t},expression:"summary"}})],1)],1),i("v-row",[i("v-col",[i("v-dialog",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[i("v-text-field",e._g(e._b({attrs:{label:"Begin Date","append-icon":"mdi-calendar",readonly:""},model:{value:e.beginDate,callback:function(t){e.beginDate=t},expression:"beginDate"}},"v-text-field",a,!1),n))]}}]),model:{value:e.beginDateMenu,callback:function(t){e.beginDateMenu=t},expression:"beginDateMenu"}},[i("v-date-picker",{on:{input:function(t){e.beginDateMenu=!1}},model:{value:e.beginDate,callback:function(t){e.beginDate=t},expression:"beginDate"}})],1)],1),i("v-col",[i("v-dialog",{ref:"beginTimeMenu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.beginTime,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){e.beginTime=t},"update:return-value":function(t){e.beginTime=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[i("v-text-field",e._g(e._b({attrs:{label:"Begin Time","append-icon":"mdi-clock-time-four-outline",readonly:""},model:{value:e.beginTime,callback:function(t){e.beginTime=t},expression:"beginTime"}},"v-text-field",a,!1),n))]}}]),model:{value:e.beginTimeMenu,callback:function(t){e.beginTimeMenu=t},expression:"beginTimeMenu"}},[e.beginTimeMenu?i("v-time-picker",{attrs:{"full-width":""},on:{"click:minute":function(t){return e.$refs.beginTimeMenu.save(e.beginTime)}},model:{value:e.beginTime,callback:function(t){e.beginTime=t},expression:"beginTime"}}):e._e()],1)],1)],1),i("v-row",[i("v-col",{staticClass:"py-0"},[i("span",{staticClass:"text-subtitle-1 font-weight-black"},[e._v(e._s(e.duration))])])],1),i("v-row",[i("v-col",[i("v-dialog",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[i("v-text-field",e._g(e._b({attrs:{label:"End Date","append-icon":"mdi-calendar",readonly:""},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}},"v-text-field",a,!1),n))]}}]),model:{value:e.endDateMenu,callback:function(t){e.endDateMenu=t},expression:"endDateMenu"}},[i("v-date-picker",{on:{input:function(t){e.endDateMenu=!1}},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1)],1),i("v-col",[i("v-dialog",{ref:"endTimeMenu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.endTime,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){e.endTime=t},"update:return-value":function(t){e.endTime=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[i("v-text-field",e._g(e._b({attrs:{label:"End Time","append-icon":"mdi-clock-time-four-outline",readonly:""},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}},"v-text-field",a,!1),n))]}}]),model:{value:e.endTimeMenu,callback:function(t){e.endTimeMenu=t},expression:"endTimeMenu"}},[e.endTimeMenu?i("v-time-picker",{attrs:{"full-width":""},on:{"click:minute":function(t){return e.$refs.endTimeMenu.save(e.endTime)}},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}}):e._e()],1)],1)],1)],1),e.sheetBtns.length>0?i("v-row",{staticClass:"mt-2"},e._l(e.sheetBtns,(function(t,n){return i("v-col",{key:n},[i("v-btn",{attrs:{block:"",color:t.color},on:{click:t.event}},[e._v(" "+e._s(t.label)+" ")])],1)})),1):e._e()],1)},A=[];const B=T+"_CATEGORY",j=()=>JSON.parse(localStorage.getItem(B)||"[]"),I=e=>{localStorage.setItem(B,JSON.stringify(e))},R=j(),L=({icon:e,title:t,color:i})=>{R.push({id:Object(x["a"])(),icon:e,title:t,color:i||"primary"}),I(R)},P=e=>R.find(t=>t.id===e),N=({id:e,icon:t,title:i,color:n})=>{const a=P(e);a&&(a.icon=t,a.title=i,a.color=n||"primary",I(R))},z=e=>{const t=R.findIndex(t=>t.id===e);t>-1&&(R.splice(t,1),I(R))};var q={data:()=>({valid:!0,summaryRules:[e=>!!e||"Event summary is required"],categoryRules:[e=>!!e||"Event category is required"],categoryList:R,category:"",summary:"",beginDate:"",beginTime:"",endDate:"",endTime:"",beginDateMenu:!1,beginTimeMenu:!1,endDateMenu:!1,endTimeMenu:!1,sheetTitle:"Title",sheetBtns:[]}),computed:{duration(){return S(this)},categoryInfo(){return P(this.category)||{}}},methods:{emitClose(){this.$emit("close")},saveEvent(){this.emitClose()}}},F=q,J=i("8212"),H=i("8336"),Y=i("62ad"),G=i("2e4b"),U=i("169a"),X=i("4bd4"),K=i("132d"),Q=i("0fd9"),W=i("b974"),Z=i("8dd9"),ee=i("8654"),te=i("c964"),ie=Object(d["a"])(F,O,A,!1,null,null,null),ne=ie.exports;v()(ie,{VAvatar:J["a"],VBtn:H["a"],VCol:Y["a"],VDatePicker:G["a"],VDialog:U["a"],VForm:X["a"],VIcon:K["a"],VRow:Q["a"],VSelect:W["a"],VSheet:Z["a"],VTextField:ee["a"],VTimePicker:te["a"]});var ae,oe,se,re,le={extends:ne,data:()=>({sheetTitle:"Add Event",saveBtnLabel:"ADD EVENT"}),created(){this.sheetBtns.push({label:"SAVE",color:"primary",event:this.saveEvent})},methods:{saveEvent(){this.$refs.form.validate()&&(V({summary:this.summary,beginDate:this.beginDate,beginTime:this.beginTime,endDate:this.endDate,endTime:this.endTime,category:this.category}),this.emitClose())},initialize(e){this.$refs.form.resetValidation(),this.summary="",this.category="";const t=new Date(Date.now()),i=String(t.getFullYear()),n=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0"),o=String(t.getHours()).padStart(2,"0"),s=String(t.getMinutes()).padStart(2,"0");if(this.endDate=`${i}-${n}-${a}`,this.endTime=`${o}:${s}`,e)this.beginDate=e.endDate,this.beginTime=e.endTime;else{const e=new Date(t.valueOf()-36e5),i=String(e.getFullYear()),n=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0"),o=String(e.getHours()).padStart(2,"0"),s=String(e.getMinutes()).padStart(2,"0");this.beginDate=`${i}-${n}-${a}`,this.beginTime=`${o}:${s}`}}}},ce=le,de=Object(d["a"])(ce,ae,oe,!1,null,null,null),ue=de.exports,ve={extends:ne,data:()=>({sheetTitle:"Modify Event",id:""}),created(){this.sheetBtns.push({label:"DELETE",color:"normal",event:this.deleteEvent}),this.sheetBtns.push({label:"UPDATE",color:"primary",event:this.saveEvent})},methods:{saveEvent(){this.$refs.form.validate()&&(w({id:this.id,summary:this.summary,beginDate:this.beginDate,beginTime:this.beginTime,endDate:this.endDate,endTime:this.endTime,category:this.category}),this.emitClose())},deleteEvent(){this.id&&($(this.id),this.emitClose())},setEvent(e){return!!e.id&&(this.$refs.form.resetValidation(),this.id=e.id,this.summary=e.summary,this.category=e.category,this.beginDate=e.beginDate,this.beginTime=e.beginTime,this.endDate=e.endDate,this.endTime=e.endTime,!0)}}},me=ve,fe=Object(d["a"])(me,se,re,!1,null,null,null),ge=fe.exports,be={filters:{getDurationString:S},data:()=>({eventList:E,addEvent:!1,modifyEvent:!1}),computed:{sortedEventList(){return this.eventList.sort((e,t)=>`${e.beginDate} ${e.beginTime}`<`${t.beginDate} ${t.beginTime}`?1:-1)},dates(){const e=[];let t;return this.sortedEventList.forEach(i=>{t=e.find(e=>e.date===i.beginDate),t||(t={date:i.beginDate,events:[]},e.push(t)),t.events.push({...i,...P(i.category)})}),e}},methods:{openAddEventSheet(){this.$refs.addEvent.initialize(this.sortedEventList[0]),this.addEvent=!0},closeAddEventSheet(){this.addEvent=!1},openModifyEventSheet(e){this.$refs.modifyEvent.setEvent(e)?this.modifyEvent=!0:alert("ERROR!!")},closeModifyEventSheet(){this.modifyEvent=!1}},components:{AddEvent:ue,ModifyEvent:ge}},he=be,pe=(i("928e"),i("288c")),ye=i("99d9"),xe=i("a523"),Te=i("0789"),Ce=i("8414"),_e=i("1e06"),ke=Object(d["a"])(he,p,y,!1,null,null,null),Ee=ke.exports;v()(ke,{VBottomSheet:pe["a"],VBtn:H["a"],VCardText:ye["a"],VCol:Y["a"],VContainer:xe["a"],VIcon:K["a"],VRow:Q["a"],VSlideXTransition:Te["e"],VTimeline:Ce["a"],VTimelineItem:_e["a"]});var De=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{staticClass:"v-container--board"},[e._l(e.categoryList,(function(t){return i("v-list-item",{key:t.id},[i("v-list-item-icon",[i("v-avatar",{attrs:{color:t.color,size:"38"}},[i("v-icon",{attrs:{dark:""},domProps:{textContent:e._s(t.icon)}})],1)],1),i("v-list-item-content",{staticClass:"flex-row"},[i("v-row",[i("v-col",{staticClass:"d-flex align-center"},[i("v-list-item-title",[e._v(e._s(t.title))])],1),i("v-col",{attrs:{cols:"auto"}},[i("v-btn",{attrs:{outlined:"","x-small":"",fab:"",color:"indigo"},on:{click:function(i){return e.openModifyCategorySheet(t)}}},[i("v-icon",[e._v("mdi-pencil")])],1)],1)],1)],1)],1)})),0===e.categoryList.length?i("span",[e._v("No Categories.")]):e._e(),i("v-btn",{staticClass:"v-btn--action",attrs:{fab:"",dark:"",color:"indigo"},on:{click:e.openAddCategorySheet}},[i("v-icon",{attrs:{dark:""}},[e._v(" mdi-plus ")])],1),i("v-bottom-sheet",{attrs:{eager:""},model:{value:e.addCategory,callback:function(t){e.addCategory=t},expression:"addCategory"}},[i("AddCategory",{ref:"addCategory",on:{close:e.closeAddCategorySheet}})],1),i("v-bottom-sheet",{attrs:{eager:""},model:{value:e.modifyCategory,callback:function(t){e.modifyCategory=t},expression:"modifyCategory"}},[i("ModifyCategory",{ref:"modifyCategory",on:{close:e.closeModifyCategorySheet}})],1)],2)},Se=[],Ve=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-sheet",{staticClass:"text-center pa-4"},[i("v-row",[i("v-col",{staticClass:"d-flex justify-start"},[i("span",{staticClass:"text-h6"},[e._v(e._s(e.sheetTitle))])]),i("v-col",{attrs:{cols:"auto"}},[i("v-btn",{attrs:{fab:"","x-small":"",text:""},on:{click:e.emitClose}},[i("v-icon",[e._v("mdi-close")])],1)],1)],1),i("v-form",{ref:"form",staticClass:"mt-2",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-row",[i("v-col",[i("v-text-field",{attrs:{counter:10,rules:e.titleRules,"validate-on-blur":"",label:"Title",required:""},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1)],1),i("v-row",[i("v-col",[i("v-select",{attrs:{items:e.iconList,"item-text":"text","item-value":"value",rules:e.iconRules,"validate-on-blur":"",label:"Icon",required:"",autofocus:""},scopedSlots:e._u([{key:"item",fn:function(t){var n=t.item;return[i("v-icon",{domProps:{textContent:e._s(n.value)}}),i("span",{staticClass:"ml-2"},[e._v(e._s(n.text))])]}}]),model:{value:e.icon,callback:function(t){e.icon=t},expression:"icon"}})],1),i("v-col",{staticClass:"d-flex align-center",attrs:{cols:"auto"}},[i("v-avatar",{attrs:{color:e.color,size:"38"}},[i("v-icon",{attrs:{dark:""},domProps:{textContent:e._s(e.icon)}})],1)],1)],1),i("v-row",[i("v-col",{staticClass:"d-flex justify-center"},[i("v-color-picker",{attrs:{"hide-canvas":"","hide-inputs":"","hide-sliders":"","show-swatches":""},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}})],1)],1)],1),e.sheetBtns.length>0?i("v-row",{staticClass:"mt-2"},e._l(e.sheetBtns,(function(t,n){return i("v-col",{key:n},[i("v-btn",{attrs:{block:"",color:t.color},on:{click:t.event}},[e._v(" "+e._s(t.label)+" ")])],1)})),1):e._e()],1)},Me=[],we={data:()=>({valid:!0,titleRules:[e=>!!e||"Category title is required"],iconRules:[e=>!!e||"Category icon is required"],iconList:[{value:"mdi-food-fork-drink",text:"Food"},{value:"mdi-bed",text:"Bed"},{value:"mdi-cart",text:"Cart"},{value:"mdi-baby-bottle",text:"Baby Bottle"},{value:"mdi-book-open-page-variant",text:"Book"},{value:"mdi-domain",text:"Company"},{value:"mdi-dumbbell",text:"Dumbbell"},{value:"mdi-account-multiple",text:"Meeting"},{value:"mdi-music",text:"Music"},{value:"mdi-train-car",text:"Transports"},{value:"mdi-airplane",text:"Airplane"},{value:"mdi-bicycle",text:"Bicycle"}],title:"",icon:"",color:"#1976d2",sheetTitle:"Title",sheetBtns:[]}),methods:{emitClose(){this.$emit("close")},saveEvent(){this.emitClose()}}},$e=we,Oe=i("03a4"),Ae=Object(d["a"])($e,Ve,Me,!1,null,null,null),Be=Ae.exports;v()(Ae,{VAvatar:J["a"],VBtn:H["a"],VCol:Y["a"],VColorPicker:Oe["a"],VForm:X["a"],VIcon:K["a"],VRow:Q["a"],VSelect:W["a"],VSheet:Z["a"],VTextField:ee["a"]});var je,Ie,Re,Le,Pe={extends:Be,data:()=>({sheetTitle:"Add Category"}),created(){this.sheetBtns.push({label:"SAVE",color:"primary",event:this.saveEvent})},methods:{saveEvent(){this.$refs.form.validate()&&(L({title:this.title,icon:this.icon,color:this.color}),this.emitClose())},initialize(){this.$refs.form.resetValidation(),this.title="",this.icon="",this.color="#1976d2"}}},Ne=Pe,ze=Object(d["a"])(Ne,je,Ie,!1,null,null,null),qe=ze.exports,Fe={extends:Be,data:()=>({sheetTitle:"Modify Category",id:""}),created(){this.sheetBtns.push({label:"DELETE",color:"normal",event:this.deleteEvent}),this.sheetBtns.push({label:"SAVE",color:"primary",event:this.saveEvent})},methods:{saveEvent(){this.$refs.form.validate()&&(N({id:this.id,title:this.title,icon:this.icon,color:this.color}),this.emitClose())},deleteEvent(){this.id&&(z(this.id),this.emitClose())},setCategory(e){return!!e.id&&(this.$refs.form.resetValidation(),this.id=e.id,this.title=e.title,this.icon=e.icon,this.color=e.color,!0)}}},Je=Fe,He=Object(d["a"])(Je,Re,Le,!1,null,null,null),Ye=He.exports,Ge={data:()=>({categoryList:R,addCategory:!1,modifyCategory:!1}),methods:{openAddCategorySheet(){this.$refs.addCategory.initialize(),this.addCategory=!0},closeAddCategorySheet(){this.addCategory=!1},openModifyCategorySheet(e){this.$refs.modifyCategory.setCategory(e),this.modifyCategory=!0},closeModifyCategorySheet(){this.modifyCategory=!1}},components:{AddCategory:qe,ModifyCategory:Ye}},Ue=Ge,Xe=i("da13"),Ke=i("5d23"),Qe=i("34c3"),We=Object(d["a"])(Ue,De,Se,!1,null,null,null),Ze=We.exports;v()(We,{VAvatar:J["a"],VBottomSheet:pe["a"],VBtn:H["a"],VCol:Y["a"],VContainer:xe["a"],VIcon:K["a"],VListItem:Xe["a"],VListItemContent:Ke["a"],VListItemIcon:Qe["a"],VListItemTitle:Ke["b"],VRow:Q["a"]});var et={name:"App",data:()=>({drawer:!1,tab:null}),components:{AppBar:h,Event:Ee,Category:Ze}},tt=et,it=(i("034f"),i("7496")),nt=i("f6c4"),at=i("71a3"),ot=i("c671"),st=i("fe57"),rt=i("aac8"),lt=Object(d["a"])(tt,a,o,!1,null,null,null),ct=lt.exports;v()(lt,{VApp:it["a"],VMain:nt["a"],VTab:at["a"],VTabItem:ot["a"],VTabs:st["a"],VTabsItems:rt["a"]});var dt=i("f309");n["a"].use(dt["a"]);var ut=new dt["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:ut,render:function(e){return e(ct)}}).$mount("#app")},"85ec":function(e,t,i){},"928e":function(e,t,i){"use strict";i("b261")},b261:function(e,t,i){}});
//# sourceMappingURL=app.e131b645.js.map