(function(e){function t(t){for(var i,s,r=t[0],l=t[1],c=t[2],u=0,v=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&v.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(v.length)v.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],i=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var i={},n={app:0},o=[];function s(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=i,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(a,i,function(t){return e[t]}.bind(null,i));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"56d7":function(e,t,a){"use strict";a.r(t);var i=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("AppBar",{on:{"click-nav":function(t){e.drawer=!0},"open-data-sync":function(t){e.dataSync=!0}}},[a("v-tabs",{attrs:{grow:"","center-active":"",centered:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-tab",[e._v("Event")]),a("v-tab",[e._v("Category")])],1)],1),a("v-main",[a("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-tab-item",{attrs:{eager:""}},[a("Event")],1),a("v-tab-item",{attrs:{eager:""}},[a("Category")],1)],1)],1),a("v-overlay",{attrs:{dark:!1},model:{value:e.dataSync,callback:function(t){e.dataSync=t},expression:"dataSync"}},[a("DataSync",{on:{close:function(t){e.dataSync=!1}}})],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{app:"",color:"primary",dark:""},scopedSlots:e._u([{key:"extension",fn:function(){return[e._t("default")]},proxy:!0}],null,!0)},[a("v-toolbar-title",[e._v("Time Recorder")]),a("v-spacer"),a("v-menu",{attrs:{left:"",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,n=t.attrs;return[a("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",n,!1),i),[a("v-icon",[e._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",[a("v-list-item",{on:{click:function(){e.$emit("open-data-sync")}}},[a("v-list-item-title",[e._v("Data Sync")])],1)],1)],1)],1)},r=[],l={methods:{emitClickNav(){this.$emit("click-nav")}}},c=l,d=a("2877"),u=a("6544"),v=a.n(u),m=a("40dc"),f=a("8336"),h=a("132d"),g=a("8860"),b=a("da13"),p=a("5d23"),y=a("e449"),x=a("2fa4"),D=a("2a7f"),T=Object(d["a"])(c,s,r,!1,null,null,null),S=T.exports;v()(T,{VAppBar:m["a"],VBtn:f["a"],VIcon:h["a"],VList:g["a"],VListItem:b["a"],VListItemTitle:p["b"],VMenu:y["a"],VSpacer:x["a"],VToolbarTitle:D["a"]});var C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"v-container--board"},[a("v-btn",{staticClass:"mb-4",attrs:{block:"",outlined:"",large:"",color:"primary"},on:{click:e.openAddEventSheet}},[e._v("Add New Event")]),a("v-slide-x-transition",{attrs:{group:""}},e._l(e.dates,(function(t){return a("v-card-text",{key:t.date,staticClass:"py-0 px-0 v-card--date"},[a("v-card",{staticClass:"my-2"},[a("v-card-title",[e._v(" "+e._s(t.dateString)+" ")]),t.summary?a("v-card-subtitle",[a("pre",[e._v(e._s(t.summary))])]):e._e(),a("v-card-actions",[a("v-btn",{attrs:{icon:""},on:{click:function(a){e.showDetailDate=e.showDetailDate===t.date?"":t.date}}},[a("v-icon",[e._v(e._s(e.showDetailDate===t.date?"mdi-chevron-up":"mdi-chevron-down"))])],1),a("v-spacer"),a("v-btn",{attrs:{color:"primary lighten-1",text:""},on:{click:function(a){return e.openEditDateSheet(t)}}},[e._v(" Edit Summary ")])],1)],1),e.showDetailDate===t.date?a("v-timeline",{attrs:{"align-top":"",dense:""}},e._l(t.events,(function(t){return a("v-timeline-item",{key:t.id,attrs:{color:t.color,icon:t.icon,"fill-dot":""}},[a("v-row",{staticClass:"pt-1 flex-nowrap"},[a("v-col",{attrs:{cols:"3"}},[a("strong",[e._v(e._s(t.beginTime))])]),a("v-col",[a("strong",[e._v(e._s(t.summary))]),a("div",{staticClass:"text-caption"},[e._v(" "+e._s(e._f("getDurationString")(t))+" ")])]),a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{outlined:"","x-small":"",fab:"",color:"indigo"},on:{click:function(a){return e.openModifyEventSheet(t)}}},[a("v-icon",[e._v("mdi-pencil")])],1)],1)],1)],1)})),1):e._e()],1)})),1),0===e.dates.length?a("span",[e._v("No Events.")]):e._e(),a("v-bottom-sheet",{attrs:{eager:""},model:{value:e.addEvent,callback:function(t){e.addEvent=t},expression:"addEvent"}},[a("AddEvent",{ref:"addEvent",on:{close:e.closeAddEventSheet}})],1),a("v-bottom-sheet",{attrs:{eager:""},model:{value:e.modifyEvent,callback:function(t){e.modifyEvent=t},expression:"modifyEvent"}},[a("ModifyEvent",{ref:"modifyEvent",on:{close:e.closeModifyEventSheet}})],1),a("v-bottom-sheet",{attrs:{eager:""},model:{value:e.editDate,callback:function(t){e.editDate=t},expression:"editDate"}},[a("EditDate",{ref:"editDate",on:{close:e.closeEditDateSheet}})],1)],1)},_=[],E=a("ec26");const k="TIME_RECORDER",V=k+"_EVENT",w=()=>localStorage.getItem(V)||"[]",M=()=>JSON.parse(w()),$=e=>{localStorage.setItem(V,JSON.stringify(e))},A=[],O=()=>{A.splice(0,A.length),A.push(...M())};O();const I=({beginDate:e,beginTime:t,endDate:a,endTime:i})=>{const n=Date.parse(`${e}T${t}:00`),o=Date.parse(`${a}T${i}:00`);return Math.floor((o-n)/6e4)},B=({beginDate:e,beginTime:t,endDate:a,endTime:i})=>{const n=I({beginDate:e,beginTime:t,endDate:a,endTime:i}),o=String(Math.floor(n/60)).padStart(2,"0"),s=String(Math.floor(n%60)).padStart(2,"0");return`${o}H ${s}M`},L=({category:e,summary:t,beginDate:a,beginTime:i,endDate:n,endTime:o})=>{A.push({id:Object(E["a"])(),category:e,summary:t,beginDate:a,beginTime:i,endDate:n,endTime:o}),$(A)},R=e=>A.find(t=>t.id===e),j=({id:e,category:t,summary:a,beginDate:i,beginTime:n,endDate:o,endTime:s})=>{const r=R(e);r&&(r.category=t,r.summary=a,r.beginDate=i,r.beginTime=n,r.endDate=o,r.endTime=s,$(A))},P=e=>{const t=A.findIndex(t=>t.id===e);t>-1&&(A.splice(t,1),$(A))};var N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-sheet",{staticClass:"text-center pa-4"},[a("v-row",[a("v-col",{staticClass:"d-flex justify-start"},[a("span",{staticClass:"text-h6"},[e._v(e._s(e.sheetTitle))])]),a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{fab:"","x-small":"",text:""},on:{click:e.emitClose}},[a("v-icon",[e._v("mdi-close")])],1)],1)],1),a("v-form",{ref:"form",staticClass:"mt-2",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-row",[a("v-col",[a("v-select",{attrs:{items:e.categoryList,"item-text":"title","item-value":"id",rules:e.categoryRules,"validate-on-blur":"",label:"Category",required:""},scopedSlots:e._u([{key:"item",fn:function(t){var i=t.item;return[a("v-icon",{domProps:{textContent:e._s(i.icon)}}),a("span",{staticClass:"ml-2"},[e._v(e._s(i.title))])]}}]),model:{value:e.category,callback:function(t){e.category=t},expression:"category"}})],1),a("v-col",{staticClass:"d-flex align-center",attrs:{cols:"auto"}},[a("v-avatar",{attrs:{color:e.categoryInfo.color,size:"38"}},[a("v-icon",{attrs:{dark:""},domProps:{textContent:e._s(e.categoryInfo.icon)}})],1)],1)],1),a("v-row",[a("v-col",[a("v-text-field",{attrs:{counter:20,rules:e.summaryRules,"validate-on-blur":"",label:"Summary",required:""},model:{value:e.summary,callback:function(t){e.summary=t},expression:"summary"}})],1)],1),a("v-row",[a("v-col",[a("v-dialog",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,n=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{label:"Begin Date","append-icon":"mdi-calendar",readonly:""},model:{value:e.beginDate,callback:function(t){e.beginDate=t},expression:"beginDate"}},"v-text-field",n,!1),i))]}}]),model:{value:e.beginDateMenu,callback:function(t){e.beginDateMenu=t},expression:"beginDateMenu"}},[a("v-date-picker",{on:{input:function(t){e.beginDateMenu=!1}},model:{value:e.beginDate,callback:function(t){e.beginDate=t},expression:"beginDate"}})],1)],1),a("v-col",[a("v-dialog",{ref:"beginTimeMenu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.beginTime,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){e.beginTime=t},"update:return-value":function(t){e.beginTime=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,n=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{label:"Begin Time","append-icon":"mdi-clock-time-four-outline",readonly:""},model:{value:e.beginTime,callback:function(t){e.beginTime=t},expression:"beginTime"}},"v-text-field",n,!1),i))]}}]),model:{value:e.beginTimeMenu,callback:function(t){e.beginTimeMenu=t},expression:"beginTimeMenu"}},[e.beginTimeMenu?a("v-time-picker",{attrs:{"full-width":""},on:{"click:minute":function(t){return e.$refs.beginTimeMenu.save(e.beginTime)}},model:{value:e.beginTime,callback:function(t){e.beginTime=t},expression:"beginTime"}}):e._e()],1)],1)],1),a("v-row",[a("v-col",{staticClass:"py-0"},[a("span",{staticClass:"text-subtitle-1 font-weight-black"},[e._v(e._s(e.duration))])])],1),a("v-row",[a("v-col",[a("v-dialog",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,n=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{label:"End Date","append-icon":"mdi-calendar",readonly:""},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}},"v-text-field",n,!1),i))]}}]),model:{value:e.endDateMenu,callback:function(t){e.endDateMenu=t},expression:"endDateMenu"}},[a("v-date-picker",{on:{input:function(t){e.endDateMenu=!1}},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1)],1),a("v-col",[a("v-dialog",{ref:"endTimeMenu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.endTime,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){e.endTime=t},"update:return-value":function(t){e.endTime=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,n=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{label:"End Time","append-icon":"mdi-clock-time-four-outline",readonly:""},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}},"v-text-field",n,!1),i))]}}]),model:{value:e.endTimeMenu,callback:function(t){e.endTimeMenu=t},expression:"endTimeMenu"}},[e.endTimeMenu?a("v-time-picker",{attrs:{"full-width":""},on:{"click:minute":function(t){return e.$refs.endTimeMenu.save(e.endTime)}},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}}):e._e()],1)],1)],1)],1),e.sheetBtns.length>0?a("v-row",{staticClass:"mt-2"},e._l(e.sheetBtns,(function(t,i){return a("v-col",{key:i},[a("v-btn",{attrs:{block:"",color:t.color},on:{click:t.event}},[e._v(" "+e._s(t.label)+" ")])],1)})),1):e._e()],1)},F=[];const U=k+"_CATEGORY",q=()=>localStorage.getItem(U)||"[]",z=()=>JSON.parse(q()),J=e=>{localStorage.setItem(U,JSON.stringify(e))},H=[],Y=()=>{H.splice(0,H.length),H.push(...z())};Y();const Q=({icon:e,title:t,color:a})=>{H.push({id:Object(E["a"])(),icon:e,title:t,color:a||"primary"}),J(H)},G=e=>H.find(t=>t.id===e)||{},K=({id:e,icon:t,title:a,color:i})=>{const n=G(e);n&&(n.icon=t,n.title=a,n.color=i||"primary",J(H))},W=e=>{const t=H.findIndex(t=>t.id===e);t>-1&&(H.splice(t,1),J(H))};var X={data:()=>({valid:!0,summaryRules:[e=>!!e||"Event summary is required"],categoryRules:[e=>!!e||"Event category is required"],categoryList:H,category:"",summary:"",beginDate:"",beginTime:"",endDate:"",endTime:"",beginDateMenu:!1,beginTimeMenu:!1,endDateMenu:!1,endTimeMenu:!1,sheetTitle:"Title",sheetBtns:[]}),computed:{duration(){return B(this)},categoryInfo(){return G(this.category)||{}}},methods:{emitClose(){this.$emit("close")},saveEvent(){this.emitClose()}}},Z=X,ee=a("8212"),te=a("62ad"),ae=a("2e4b"),ie=a("169a"),ne=a("4bd4"),oe=a("0fd9"),se=a("b974"),re=a("8dd9"),le=a("8654"),ce=a("c964"),de=Object(d["a"])(Z,N,F,!1,null,null,null),ue=de.exports;v()(de,{VAvatar:ee["a"],VBtn:f["a"],VCol:te["a"],VDatePicker:ae["a"],VDialog:ie["a"],VForm:ne["a"],VIcon:h["a"],VRow:oe["a"],VSelect:se["a"],VSheet:re["a"],VTextField:le["a"],VTimePicker:ce["a"]});var ve,me,fe,he,ge={extends:ue,data:()=>({sheetTitle:"Add Event",saveBtnLabel:"ADD EVENT"}),created(){this.sheetBtns.push({label:"SAVE",color:"primary",event:this.saveEvent})},methods:{saveEvent(){this.$refs.form.validate()&&(L({summary:this.summary,beginDate:this.beginDate,beginTime:this.beginTime,endDate:this.endDate,endTime:this.endTime,category:this.category}),this.emitClose())},initialize(e){this.$refs.form.resetValidation(),this.summary="",this.category="";const t=new Date(Date.now()),a=String(t.getFullYear()),i=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0"),o=String(t.getHours()).padStart(2,"0"),s=String(t.getMinutes()).padStart(2,"0");if(this.endDate=`${a}-${i}-${n}`,this.endTime=`${o}:${s}`,e)this.beginDate=e.endDate,this.beginTime=e.endTime;else{const e=new Date(t.valueOf()-36e5),a=String(e.getFullYear()),i=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0"),o=String(e.getHours()).padStart(2,"0"),s=String(e.getMinutes()).padStart(2,"0");this.beginDate=`${a}-${i}-${n}`,this.beginTime=`${o}:${s}`}}}},be=ge,pe=Object(d["a"])(be,ve,me,!1,null,null,null),ye=pe.exports,xe={extends:ue,data:()=>({sheetTitle:"Modify Event",id:""}),created(){this.sheetBtns.push({label:"DELETE",color:"normal",event:this.deleteEvent}),this.sheetBtns.push({label:"UPDATE",color:"primary",event:this.saveEvent})},methods:{saveEvent(){this.$refs.form.validate()&&(j({id:this.id,summary:this.summary,beginDate:this.beginDate,beginTime:this.beginTime,endDate:this.endDate,endTime:this.endTime,category:this.category}),this.emitClose())},deleteEvent(){this.id&&(P(this.id),this.emitClose())},setEvent(e){return!!e.id&&(this.$refs.form.resetValidation(),this.id=e.id,this.summary=e.summary,this.category=e.category,this.beginDate=e.beginDate,this.beginTime=e.beginTime,this.endDate=e.endDate,this.endTime=e.endTime,!0)}}},De=xe,Te=Object(d["a"])(De,fe,he,!1,null,null,null),Se=Te.exports,Ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-sheet",{staticClass:"text-center pa-4"},[a("v-row",[a("v-col",{staticClass:"d-flex justify-start"},[a("span",{staticClass:"text-h6"},[e._v(e._s(e.sheetTitle))])]),a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{fab:"","x-small":"",text:""},on:{click:e.emitClose}},[a("v-icon",[e._v("mdi-close")])],1)],1)],1),a("v-form",{ref:"form",staticClass:"mt-2",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-row",[a("v-col",[a("v-textarea",{attrs:{counter:500,label:"Summary"},model:{value:e.summary,callback:function(t){e.summary=t},expression:"summary"}})],1)],1)],1),e.sheetBtns.length>0?a("v-row",{staticClass:"mt-2"},e._l(e.sheetBtns,(function(t,i){return a("v-col",{key:i},[a("v-btn",{attrs:{block:"",color:t.color},on:{click:t.event}},[e._v(" "+e._s(t.label)+" ")])],1)})),1):e._e()],1)},_e=[];const Ee=k+"_DATE",ke=()=>localStorage.getItem(Ee)||"[]",Ve=()=>JSON.parse(ke()),we=e=>{localStorage.setItem(Ee,JSON.stringify(e))},Me=[],$e=()=>{Me.splice(0,Me.length),Me.push(...Ve())};$e();const Ae=({date:e,summary:t})=>{const a=Oe(e);a?a.summary=t:Me.push({date:e,summary:t}),we(Me)},Oe=e=>Me.find(t=>t.date===e);var Ie={data:()=>({valid:!0,date:"",summary:"",sheetTitle:"Title",sheetBtns:[]}),created(){this.sheetBtns.push({label:"SAVE",color:"primary",event:this.saveEvent})},methods:{setTargetDate({date:e,dateString:t,summary:a}){this.date=e,this.summary=a,this.sheetTitle=t},emitClose(){this.$emit("close")},saveEvent(){Ae({date:this.date,summary:this.summary}),this.emitClose()}}},Be=Ie,Le=a("a844"),Re=Object(d["a"])(Be,Ce,_e,!1,null,null,null),je=Re.exports;v()(Re,{VBtn:f["a"],VCol:te["a"],VForm:ne["a"],VIcon:h["a"],VRow:oe["a"],VSheet:re["a"],VTextarea:Le["a"]});const Pe=()=>{const e=new Date(Date.now()),t=String(e.getFullYear()),a=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${i}`};var Ne={filters:{getDurationString:B},data:()=>({dateList:Me,eventList:A,showDetailDate:Pe(),addEvent:!1,modifyEvent:!1,editDate:!1}),computed:{sortedEventList(){return this.eventList.sort((e,t)=>`${e.beginDate} ${e.beginTime}`<`${t.beginDate} ${t.beginTime}`?1:-1)},dates(){const e=[];let t;return this.sortedEventList.forEach(a=>{if(t=e.find(e=>e.date===a.beginDate),!t){const i=this.dateList.find(e=>e.date===a.beginDate);t={date:a.beginDate,dateString:this.getDateString(a.beginDate),summary:i?i.summary:"",events:[]},e.push(t)}const{icon:i,color:n}=G(a.category);t.events.push({...a,icon:i,color:n})}),e}},methods:{getDateString(e){const t=new Date(e+"T00:00:00");return t.toLocaleDateString("ko-KR",{weekday:"short",year:"numeric",month:"numeric",day:"numeric"})},openAddEventSheet(){this.$refs.addEvent.initialize(this.sortedEventList[0]),this.addEvent=!0},closeAddEventSheet(){this.addEvent=!1},openModifyEventSheet(e){this.$refs.modifyEvent.setEvent(e)?this.modifyEvent=!0:alert("ERROR!!")},closeModifyEventSheet(){this.modifyEvent=!1},openEditDateSheet(e){e&&(this.$refs.editDate.setTargetDate(e),this.editDate=!0)},closeEditDateSheet(){this.editDate=!1}},components:{AddEvent:ye,ModifyEvent:Se,EditDate:je}},Fe=Ne,Ue=(a("928e"),a("288c")),qe=a("b0af"),ze=a("99d9"),Je=a("a523"),He=a("0789"),Ye=a("8414"),Qe=a("1e06"),Ge=Object(d["a"])(Fe,C,_,!1,null,null,null),Ke=Ge.exports;v()(Ge,{VBottomSheet:Ue["a"],VBtn:f["a"],VCard:qe["a"],VCardActions:ze["a"],VCardSubtitle:ze["b"],VCardText:ze["c"],VCardTitle:ze["d"],VCol:te["a"],VContainer:Je["a"],VIcon:h["a"],VRow:oe["a"],VSlideXTransition:He["e"],VSpacer:x["a"],VTimeline:Ye["a"],VTimelineItem:Qe["a"]});var We=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"v-container--board"},[a("v-btn",{staticClass:"mb-4",attrs:{block:"",outlined:"",large:"",color:"primary"},on:{click:e.openAddCategorySheet}},[e._v("Add New Category")]),e._l(e.categoryList,(function(t){return a("v-list-item",{key:t.id},[a("v-list-item-icon",[a("v-avatar",{attrs:{color:t.color,size:"38"}},[a("v-icon",{attrs:{dark:""},domProps:{textContent:e._s(t.icon)}})],1)],1),a("v-list-item-content",{staticClass:"flex-row"},[a("v-row",[a("v-col",{staticClass:"d-flex align-center"},[a("v-list-item-title",[e._v(e._s(t.title))])],1),a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{outlined:"","x-small":"",fab:"",color:"indigo"},on:{click:function(a){return e.openModifyCategorySheet(t)}}},[a("v-icon",[e._v("mdi-pencil")])],1)],1)],1)],1)],1)})),0===e.categoryList.length?a("span",[e._v("No Categories.")]):e._e(),a("v-bottom-sheet",{attrs:{eager:""},model:{value:e.addCategory,callback:function(t){e.addCategory=t},expression:"addCategory"}},[a("AddCategory",{ref:"addCategory",on:{close:e.closeAddCategorySheet}})],1),a("v-bottom-sheet",{attrs:{eager:""},model:{value:e.modifyCategory,callback:function(t){e.modifyCategory=t},expression:"modifyCategory"}},[a("ModifyCategory",{ref:"modifyCategory",on:{close:e.closeModifyCategorySheet}})],1)],2)},Xe=[],Ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-sheet",{staticClass:"text-center pa-4"},[a("v-row",[a("v-col",{staticClass:"d-flex justify-start"},[a("span",{staticClass:"text-h6"},[e._v(e._s(e.sheetTitle))])]),a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{fab:"","x-small":"",text:""},on:{click:e.emitClose}},[a("v-icon",[e._v("mdi-close")])],1)],1)],1),a("v-form",{ref:"form",staticClass:"mt-2",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-row",[a("v-col",[a("v-text-field",{attrs:{counter:10,rules:e.titleRules,"validate-on-blur":"",label:"Title",required:""},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1)],1),a("v-row",[a("v-col",[a("v-select",{attrs:{items:e.iconList,"item-text":"text","item-value":"value",rules:e.iconRules,"validate-on-blur":"",label:"Icon",required:""},scopedSlots:e._u([{key:"item",fn:function(t){var i=t.item;return[a("v-icon",{domProps:{textContent:e._s(i.value)}}),a("span",{staticClass:"ml-2"},[e._v(e._s(i.text))])]}}]),model:{value:e.icon,callback:function(t){e.icon=t},expression:"icon"}})],1),a("v-col",{staticClass:"d-flex align-center",attrs:{cols:"auto"}},[a("v-avatar",{attrs:{color:e.color,size:"38"}},[a("v-icon",{attrs:{dark:""},domProps:{textContent:e._s(e.icon)}})],1)],1)],1),a("v-row",[a("v-col",{staticClass:"d-flex justify-center"},[a("v-color-picker",{attrs:{"hide-canvas":"","hide-inputs":"","hide-sliders":"","show-swatches":""},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}})],1)],1)],1),e.sheetBtns.length>0?a("v-row",{staticClass:"mt-2"},e._l(e.sheetBtns,(function(t,i){return a("v-col",{key:i},[a("v-btn",{attrs:{block:"",color:t.color},on:{click:t.event}},[e._v(" "+e._s(t.label)+" ")])],1)})),1):e._e()],1)},et=[],tt={data:()=>({valid:!0,titleRules:[e=>!!e||"Category title is required"],iconRules:[e=>!!e||"Category icon is required"],iconList:[{value:"mdi-food-fork-drink",text:"Food"},{value:"mdi-bed",text:"Bed"},{value:"mdi-cart",text:"Cart"},{value:"mdi-baby-bottle",text:"Baby Bottle"},{value:"mdi-book-open-page-variant",text:"Book"},{value:"mdi-domain",text:"Company"},{value:"mdi-dumbbell",text:"Dumbbell"},{value:"mdi-account-multiple",text:"Meeting"},{value:"mdi-music",text:"Music"},{value:"mdi-train-car",text:"Transports"},{value:"mdi-airplane",text:"Airplane"},{value:"mdi-bicycle",text:"Bicycle"}],title:"",icon:"",color:"#1976d2",sheetTitle:"Title",sheetBtns:[]}),methods:{emitClose(){this.$emit("close")},saveEvent(){this.emitClose()}}},at=tt,it=a("03a4"),nt=Object(d["a"])(at,Ze,et,!1,null,null,null),ot=nt.exports;v()(nt,{VAvatar:ee["a"],VBtn:f["a"],VCol:te["a"],VColorPicker:it["a"],VForm:ne["a"],VIcon:h["a"],VRow:oe["a"],VSelect:se["a"],VSheet:re["a"],VTextField:le["a"]});var st,rt,lt,ct,dt={extends:ot,data:()=>({sheetTitle:"Add Category"}),created(){this.sheetBtns.push({label:"SAVE",color:"primary",event:this.saveEvent})},methods:{saveEvent(){this.$refs.form.validate()&&(Q({title:this.title,icon:this.icon,color:this.color}),this.emitClose())},initialize(){this.$refs.form.resetValidation(),this.title="",this.icon="",this.color="#1976d2"}}},ut=dt,vt=Object(d["a"])(ut,st,rt,!1,null,null,null),mt=vt.exports,ft={extends:ot,data:()=>({sheetTitle:"Modify Category",id:""}),created(){this.sheetBtns.push({label:"DELETE",color:"normal",event:this.deleteEvent}),this.sheetBtns.push({label:"SAVE",color:"primary",event:this.saveEvent})},methods:{saveEvent(){this.$refs.form.validate()&&(K({id:this.id,title:this.title,icon:this.icon,color:this.color}),this.emitClose())},deleteEvent(){this.id&&(W(this.id),this.emitClose())},setCategory(e){return!!e.id&&(this.$refs.form.resetValidation(),this.id=e.id,this.title=e.title,this.icon=e.icon,this.color=e.color,!0)}}},ht=ft,gt=Object(d["a"])(ht,lt,ct,!1,null,null,null),bt=gt.exports,pt={data:()=>({categoryList:H,addCategory:!1,modifyCategory:!1}),methods:{openAddCategorySheet(){this.$refs.addCategory.initialize(),this.addCategory=!0},closeAddCategorySheet(){this.addCategory=!1},openModifyCategorySheet(e){this.$refs.modifyCategory.setCategory(e),this.modifyCategory=!0},closeModifyCategorySheet(){this.modifyCategory=!1}},components:{AddCategory:mt,ModifyCategory:bt}},yt=pt,xt=a("34c3"),Dt=Object(d["a"])(yt,We,Xe,!1,null,null,null),Tt=Dt.exports;v()(Dt,{VAvatar:ee["a"],VBottomSheet:Ue["a"],VBtn:f["a"],VCol:te["a"],VContainer:Je["a"],VIcon:h["a"],VListItem:b["a"],VListItemContent:p["a"],VListItemIcon:xt["a"],VListItemTitle:p["b"],VRow:oe["a"]});var St=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"pa-4",attrs:{"min-width":"300"}},[a("v-row",[a("v-col",[a("span",{staticClass:"text-h6"},[e._v("Data Sync")])]),a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{attrs:{fab:"","x-small":"",text:""},on:{click:function(){e.$emit("close")}}},[a("v-icon",[e._v("mdi-close")])],1)],1)],1),a("v-row",[a("v-col",{staticClass:"py-0"},[a("v-text-field",{attrs:{"validate-on-blur":"",label:"Sync server URL",required:""},model:{value:e.serverUrl,callback:function(t){e.serverUrl=t},expression:"serverUrl"}})],1)],1),a("v-row",[a("v-col",{staticClass:"py-0"},[a("v-text-field",{attrs:{"validate-on-blur":"",label:"ID",required:""},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}})],1)],1),a("v-row",[a("v-col",[a("v-btn",{attrs:{block:"",text:""},on:{click:e.getData}},[e._v("LOAD")])],1),a("v-col",[a("v-btn",{attrs:{block:"",color:"primary"},on:{click:e.postData}},[e._v("SAVE")])],1)],1)],1)},Ct=[],_t=a("bc3a"),Et=a.n(_t),kt={data:()=>({serverUrl:"",id:""}),methods:{getData(){Et.a.get("api/data/"+this.id,{baseURL:this.serverUrl}).then(e=>{const{data:t}=e,{events:a,categories:i,dates:n}=t;a&&i&&n?(J(i),$(a),we(n),Y(),O(),$e()):alert("REQUEST LOAD DATA IS FINISHED BUT WRONG FORMAT")}).catch(e=>{alert("REQUEST LOAD DATA IS FAILED")})},postData(){const e={events:M(),categories:z(),dates:Ve()};Et.a.post("api/data/"+this.id,e,{baseURL:this.serverUrl}).catch(e=>{alert("REQUEST SAVE DATA IS FAILED")})}}},Vt=kt,wt=Object(d["a"])(Vt,St,Ct,!1,null,null,null),Mt=wt.exports;v()(wt,{VBtn:f["a"],VCard:qe["a"],VCol:te["a"],VIcon:h["a"],VRow:oe["a"],VTextField:le["a"]});var $t={name:"App",data:()=>({drawer:!1,tab:null,dataSync:!1}),components:{AppBar:S,Event:Ke,Category:Tt,DataSync:Mt}},At=$t,Ot=(a("034f"),a("7496")),It=a("f6c4"),Bt=a("a797"),Lt=a("71a3"),Rt=a("c671"),jt=a("fe57"),Pt=a("aac8"),Nt=Object(d["a"])(At,n,o,!1,null,null,null),Ft=Nt.exports;v()(Nt,{VApp:Ot["a"],VMain:It["a"],VOverlay:Bt["a"],VTab:Lt["a"],VTabItem:Rt["a"],VTabs:jt["a"],VTabsItems:Pt["a"]});var Ut=a("f309");i["a"].use(Ut["a"]);var qt=new Ut["a"]({});i["a"].config.productionTip=!1,new i["a"]({vuetify:qt,render:function(e){return e(Ft)}}).$mount("#app")},"85ec":function(e,t,a){},"928e":function(e,t,a){"use strict";a("b261")},b261:function(e,t,a){}});
//# sourceMappingURL=app.de056aab.js.map