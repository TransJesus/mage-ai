"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4846],{65597:function(e,n,t){t.d(n,{f:function(){return l}});var r=t(9518),i=t(23831),o=t(49125),c=t(73942),l=r.default.div.withConfig({displayName:"Tablestyle__PopupContainerStyle",componentId:"sc-8ammqd-0"})(["position:absolute;max-height:","px;z-index:10;border-radius:","px;padding:","px;"," "," "," ",""],58*o.iI,c.TR,2*o.iI,(function(e){return"\n    box-shadow: ".concat((e.theme.shadow||i.Z.shadow).popup,";\n    background-color: ").concat((e.theme.interactive||i.Z.interactive).defaultBackground,";\n  ")}),(function(e){return e.leftOffset&&"\n    left: ".concat(e.leftOffset,"px;\n  ")}),(function(e){return e.topOffset&&"\n    top: ".concat(e.topOffset,"px;\n  ")}),(function(e){return e.width&&"\n    width: ".concat(e.width,"px;\n  ")}))},97496:function(e,n,t){var r=t(75582),i=t(12691),o=t.n(i),c=t(34376),l=t.n(c),u=t(82684),s=t(83455),a=t(60328),d=t(47999),p=t(93461),f=t(67971),h=t(10919),g=t(47409),j=t(86673),b=t(54283),x=t(87815),m=t(19711),Z=t(82531),v=t(23831),O=t(73942),_=t(10503),C=t(65597),I=t(93348),w=t(45838),E=t(49125),P=t(19395),y=t(96510),k=t(28598);function D(e){var n=e.cancelingRunId,t=e.isLoadingCancelPipeline,i=e.onCancel,o=e.onSuccess,c=e.pipelineRun,l=e.setCancelingRunId,p=c||{},h=p.id,x=p.pipeline_schedule_id,w=p.pipeline_schedule_token,P=p.pipeline_schedule_type,D=p.status,N=t&&h===n&&g.V.RUNNING===D,L=(0,s.Db)(I.Xm.API===P&&w?Z.ZP.pipeline_runs.pipeline_schedules.useCreateWithParent(x,w):Z.ZP.pipeline_runs.pipeline_schedules.useCreate(x),{onSuccess:function(e){return(0,y.wD)(e,{callback:function(){o()},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;console.log(t,r)}})}}),A=(0,r.Z)(L,1)[0],S=(0,u.useState)(),T=S[0],R=S[1],V=(0,u.useCallback)((function(){R(!1),A({pipeline_run:{execution_date:null===c||void 0===c?void 0:c.execution_date,pipeline_schedule_id:null===c||void 0===c?void 0:c.pipeline_schedule_id,pipeline_uuid:null===c||void 0===c?void 0:c.pipeline_uuid,variables:null===c||void 0===c?void 0:c.variables}})}),[A,c]),U=(0,u.useCallback)((function(){R(!1),l(h),i({id:h,status:g.V.CANCELLED})}),[i,c]);return(0,k.jsxs)("div",{style:{position:"relative"},children:[(0,k.jsx)(a.Z,{backgroundColor:N&&v.Z.accent.yellow,beforeIcon:g.V.INITIAL!==D&&(0,k.jsxs)(k.Fragment,{children:[g.V.COMPLETED===D&&(0,k.jsx)(_.Jr,{size:2*E.iI}),[g.V.FAILED,g.V.CANCELLED].includes(D)&&(0,k.jsx)(_.Py,{inverted:g.V.CANCELLED===D,size:2*E.iI}),[g.V.RUNNING].includes(D)&&(0,k.jsx)(b.Z,{color:N?v.Z.status.negative:v.Z.monotone.white,small:!0})]}),borderRadius:O.D7,danger:g.V.FAILED===D,default:g.V.INITIAL===D,loading:!c,onClick:function(){return R(!0)},padding:"6px",primary:g.V.RUNNING===D&&!N,warning:g.V.CANCELLED===D,children:N?"Canceling":g.D[D]}),(0,k.jsx)(d.Z,{onClickOutside:function(){return R(!1)},open:T,children:(0,k.jsxs)(C.f,{children:[[g.V.RUNNING,g.V.INITIAL].includes(D)&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(m.ZP,{bold:!0,color:"#9ECBFF",children:"Run is in progress"}),(0,k.jsx)(j.Z,{mb:1}),(0,k.jsxs)(m.ZP,{children:["This pipeline run is currently ongoing. Retrying will cancel",(0,k.jsx)("br",{}),"the current pipeline run."]}),(0,k.jsx)(m.ZP,{}),(0,k.jsx)(j.Z,{mt:1,children:(0,k.jsxs)(f.Z,{children:[(0,k.jsx)(a.Z,{onClick:function(){U(),V()},children:"Retry run"}),(0,k.jsx)(j.Z,{ml:1}),(0,k.jsx)(a.Z,{onClick:U,children:"Cancel run"})]})})]}),[g.V.CANCELLED,g.V.FAILED,g.V.COMPLETED].includes(D)&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(m.ZP,{bold:!0,color:"#9ECBFF",children:["Run ",D]}),(0,k.jsx)(j.Z,{mb:1}),(0,k.jsx)(m.ZP,{children:"Retry the run with changes you have made to the pipeline."}),(0,k.jsx)(j.Z,{mb:1}),(0,k.jsx)(a.Z,{onClick:V,children:"Retry run"})]})]})})]})}n.Z=function(e){var n=e.fetchPipelineRuns,t=e.onClickRow,i=e.pipelineRuns,c=e.selectedRun,d=(0,u.useState)(null),b=d[0],v=d[1],C=(0,s.Db)((function(e){var n=e.id,t=e.status;return Z.ZP.pipeline_runs.useUpdate(n)({pipeline_run:{status:t}})}),{onSuccess:function(e){return(0,y.wD)(e,{callback:function(){v(null),n()},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;v(null),console.log(t,r)}})}}),I=(0,r.Z)(C,2),N=I[0],L=I[1].isLoading,A=[null,1,2,1,1,null],S=[{uuid:"Status"},{uuid:"Pipeline UUID"},{uuid:"Date"},{uuid:"Trigger"},{uuid:"Block runs"},{uuid:"Completed"},{uuid:"Logs"}];return t&&(A.push(null),S.push({label:function(){return""},uuid:"action"})),(0,k.jsx)(w.cl,{minHeight:30*E.iI,children:0===i.length?(0,k.jsx)(j.Z,{px:3,py:1,children:(0,k.jsx)(m.ZP,{bold:!0,default:!0,monospace:!0,muted:!0,children:"No runs available"})}):(0,k.jsx)(x.Z,{columnFlex:A,columns:S,isSelectedRow:function(e){return i[e].id===(null===c||void 0===c?void 0:c.id)},onClickRow:t,rowVerticalPadding:6,rows:i.map((function(e,r){var c=e.block_runs_count,u=e.completed_at,s=e.execution_date,d=e.id,x=e.pipeline_schedule_id,Z=e.pipeline_schedule_name,C=e.pipeline_uuid,I=e.status,w=[];return w=r>0&&i[r-1].execution_date===e.execution_date&&i[r-1].pipeline_schedule_id===e.pipeline_schedule_id?[(0,k.jsx)(j.Z,{ml:1,children:(0,k.jsxs)(f.Z,{alignItems:"center",children:[(0,k.jsx)(_.TT,{size:2*E.iI,useStroke:!0}),(0,k.jsx)(a.Z,{borderRadius:O.D7,notClickable:!0,padding:"6px",children:(0,k.jsx)(m.ZP,{muted:!0,children:g.D[I]})})]})},"row_status"),(0,k.jsx)(m.ZP,{default:!0,monospace:!0,muted:!0,children:C},"row_pipeline_uuid"),(0,k.jsx)(m.ZP,{default:!0,monospace:!0,muted:!0,children:"-"},"row_date_retry"),(0,k.jsx)(m.ZP,{default:!0,monospace:!0,muted:!0,children:"-"},"row_trigger_retry"),(0,k.jsx)(o(),{as:"/pipelines/".concat(C,"/runs/").concat(d),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,k.jsx)(h.Z,{bold:!0,muted:!0,children:"See block runs (".concat(c,")")})},"row_block_runs"),(0,k.jsx)(m.ZP,{monospace:!0,muted:!0,children:u&&(0,P.eI)(u).toISOString().split(".")[0]||"-"},"row_completed"),(0,k.jsx)(a.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return l().push("/pipelines/".concat(C,"/logs?pipeline_run_id[]=").concat(d))},children:(0,k.jsx)(_.B4,{default:!0,size:2*E.iI})},"row_logs")]:[(0,k.jsx)(D,{cancelingRunId:b,isLoadingCancelPipeline:L,onCancel:N,onSuccess:n,pipelineRun:e,setCancelingRunId:v},"row_retry_button"),(0,k.jsx)(m.ZP,{default:!0,monospace:!0,children:C},"row_pipeline_uuid"),(0,k.jsx)(m.ZP,{default:!0,monospace:!0,children:s&&(0,P.eI)(s).toISOString().split(".")[0]||"-"},"row_date"),(0,k.jsx)(o(),{as:"/pipelines/".concat(C,"/triggers/").concat(x),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,k.jsx)(h.Z,{bold:!0,sameColorAsText:!0,children:Z})},"row_trigger"),(0,k.jsx)(o(),{as:"/pipelines/".concat(C,"/runs/").concat(d),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,k.jsx)(h.Z,{bold:!0,sameColorAsText:!0,children:"See block runs (".concat(c,")")})},"row_block_runs"),(0,k.jsx)(m.ZP,{default:!0,monospace:!0,children:u&&(0,P.eI)(u).toISOString().split(".")[0]||"-"},"row_completed"),(0,k.jsx)(a.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return l().push("/pipelines/".concat(C,"/logs?pipeline_run_id[]=").concat(d))},children:(0,k.jsx)(_.B4,{default:!0,size:2*E.iI})},"row_item_13")],t&&w.push((0,k.jsx)(p.Z,{flex:1,justifyContent:"flex-end",children:(0,k.jsx)(_._Q,{default:!0,size:2*E.iI})})),w})),uuid:"pipeline-runs"})})}},19395:function(e,n,t){t.d(n,{IJ:function(){return a},Vx:function(){return p},eI:function(){return d},gU:function(){return h},tL:function(){return f},vJ:function(){return g}});var r,i,o=t(82394),c=t(92083),l=t.n(c);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){var t=n.block_uuid,r=n.completed_at,i=n.started_at,c=n.status,u=null;i&&r&&(u=l()(r).valueOf()-l()(i).valueOf());return s(s({},e),{},(0,o.Z)({},t,{runtime:u,status:c}))}),{})}function d(e){if(!e)return null;var n=new Date(l()(e).valueOf()),t=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds());return new Date(t)}function p(e){return d(e).toISOString().split(".")[0]}!function(e){e.DAY="day",e.HOUR="hour",e.MINUTE="minute",e.SECOND="second"}(i||(i={}));var f=(r={},(0,o.Z)(r,i.DAY,86400),(0,o.Z)(r,i.HOUR,3600),(0,o.Z)(r,i.MINUTE,60),(0,o.Z)(r,i.SECOND,1),r);function h(e){var n=i.SECOND,t=e;return e%86400===0?(t/=86400,n=i.DAY):e%3600===0?(t/=3600,n=i.HOUR):e%60===0&&(t/=60,n=i.MINUTE),{time:t,unit:n}}function g(e,n){return e*f[n]}},51099:function(e,n,t){t.d(n,{Q:function(){return a}});t(82684);var r=t(60328),i=t(67971),o=t(86673),c=t(10503),l=t(73899),u=t(49125),s=t(28598),a=22;n.Z=function(e){var n=e.page,t=e.maxPages,a=e.onUpdate,d=e.totalPages,p=[],f=t;if(f>d)p=Array.from({length:d},(function(e,n){return n}));else{var h=Math.floor(f/2),g=n-h;n+h>=d?(g=d-f+2,f-=2):n-h<=0?(g=0,f-=2):(f-=4,g=n-Math.floor(f/2)),p=Array.from({length:f},(function(e,n){return n+g}))}return(0,s.jsx)(s.Fragment,{children:d>0&&(0,s.jsxs)(i.Z,{alignItems:"center",children:[(0,s.jsx)(r.Z,{disabled:0===n,onClick:function(){return a(n-1)},children:(0,s.jsx)(c.Hd,{size:1.5*u.iI,stroke:"#AEAEAE"})}),!p.includes(0)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{onClick:function(){return a(0)},borderLess:!0,noBackground:!0,children:1})},0),!p.includes(1)&&(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{notClickable:!0,noBackground:!0,noPadding:!0,children:"..."})},0)]}),p.map((function(e){return(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{onClick:function(){e!==n&&a(e)},notClickable:e===n,backgroundColor:e===n&&l.a$,borderLess:!0,noBackground:!0,children:e+1})},e)})),!p.includes(d-1)&&(0,s.jsxs)(s.Fragment,{children:[!p.includes(d-2)&&(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{notClickable:!0,noBackground:!0,noPadding:!0,children:"..."})},0),(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{onClick:function(){return a(d-1)},borderLess:!0,noBackground:!0,children:d})},d-1)]}),(0,s.jsx)(o.Z,{ml:1}),(0,s.jsx)(r.Z,{disabled:n===d-1,onClick:function(){return a(n+1)},children:(0,s.jsx)(c.Kw,{size:1.5*u.iI,stroke:"#AEAEAE"})})]})})}},47409:function(e,n,t){t.d(n,{D:function(){return c},V:function(){return o}});var r,i=t(82394),o=t(66050).V,c=(r={},(0,i.Z)(r,o.CANCELLED,"Cancelled"),(0,i.Z)(r,o.COMPLETED,"Done"),(0,i.Z)(r,o.FAILED,"Failed"),(0,i.Z)(r,o.INITIAL,"Ready"),(0,i.Z)(r,o.RUNNING,"Running"),r)},93348:function(e,n,t){t.d(n,{TR:function(){return d},U5:function(){return u},Xm:function(){return o},Z4:function(){return a},fq:function(){return l},kJ:function(){return s}});var r,i,o,c=t(82394);!function(e){e.API="api",e.EVENT="event",e.TIME="time"}(o||(o={}));var l,u,s,a=(r={},(0,c.Z)(r,o.API,(function(){return"API"})),(0,c.Z)(r,o.EVENT,(function(){return"event"})),(0,c.Z)(r,o.TIME,(function(){return"schedule"})),r);!function(e){e.ACTIVE="active",e.INACTIVE="inactive"}(l||(l={})),function(e){e.ONCE="@once",e.HOURLY="@hourly",e.DAILY="@daily",e.WEEKLY="@weekly",e.MONTHLY="@monthly"}(u||(u={})),function(e){e.CREATED_AT="created_at",e.NAME="name",e.PIPELINE="pipeline_uuid",e.STATUS="status",e.TYPE="schedule_type"}(s||(s={}));var d=(i={},(0,c.Z)(i,s.CREATED_AT,"Created at"),(0,c.Z)(i,s.NAME,"Name"),(0,c.Z)(i,s.PIPELINE,"Pipeline"),(0,c.Z)(i,s.STATUS,"Status"),(0,c.Z)(i,s.TYPE,"Type"),i)},55378:function(e,n,t){var r=t(82394),i=t(26304),o=t(82684),c=t(9518),l=t(69898),u=t(31969),s=t(49125),a=t(28598),d=["beforeIcon","children","label","placeholder"];function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var h=c.default.select.withConfig({displayName:"Select__SelectStyle",componentId:"sc-q6ezu2-0"})(["",' background-image:url("data:image/svg+xml;utf8,','");background-repeat:no-repeat;background-position:-webkit-calc(100% - ',"px) center;background-position:calc(100% - ","px) center;padding-right:","px;&:hover{cursor:pointer;}"," "," "," ",""],l.p,"\n  <svg width='12' height='12' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>\n    <path\n      clip-rule='evenodd'\n      d='M8.0015 11.7109L14.0022 5.71017L12.588 4.29597L7.99485 8.88914L3.40754 4.34482L2 5.76567L8.0015 11.7109Z'\n      fill='%23B4B8C0'\n      fill-rule='evenodd'\n    />\n  </svg>",s.iI,s.iI,2.5*s.iI,(function(e){return!e.hasContent&&!e.showPlaceholder&&"\n    color: ".concat((e.theme.content||u.Z.content).muted,";\n  ")}),(function(e){return e.backgroundColor&&"\n    background-color: ".concat(e.backgroundColor,";\n  ")}),(function(e){return e.color&&"\n    color: ".concat(e.color,";\n  ")}),(function(e){return e.showPlaceholder&&"\n    color: ".concat((e.theme.content||u.Z.content).inverted,";\n  ")})),g=function(e,n){var t=e.beforeIcon,r=e.children,o=e.label,c=e.placeholder,u=(0,i.Z)(e,d);return(0,a.jsx)(l.Z,f(f({},u),{},{beforeIcon:t,input:(0,a.jsxs)(h,f(f({},u),{},{children:[(o||c)&&(0,a.jsx)("option",{disabled:!0,selected:!0,value:"",children:o||c}),r]})),label:o,placeholder:c,ref:n,setContentOnMount:!0,showLabelRequirement:function(e){return!!e.content}}))};n.Z=o.forwardRef(g)},33766:function(e,n,t){t.d(n,{u:function(){return a}});var r=t(75582),i=t(82394),o=t(34376),c=t.n(o),l=t(59e3);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.replaceParams,o=t.pushHistory,u=i?{}:(0,l.iV)();n=window.location.pathname;var a=o?c().push:c().replace,d=s(s({},u),e);Object.entries(e).forEach((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1];"undefined"!==typeof i&&null!==i||delete d[t]}));var p=(0,l.uM)(d);p.length>=1&&(p="?".concat(p));var f="".concat(n.split("?")[0]).concat(p);return a(c().router.pathname,f,{shallow:!0})}}}]);