"use strict";(self.webpackChunktenantUI=self.webpackChunktenantUI||[]).push([[1549],{8173:(P,O,m)=>{m.d(O,{B:()=>u,a:()=>C,b:()=>e,c:()=>y,e:()=>i,g:()=>$,p:()=>w});var k=m(5861),b=m(6191);const w=(t=>({create:(s,n)=>S(t,s,n),dismiss:(s,n,l)=>x(document,s,n,t,l),getTop:()=>(0,k.Z)(function*(){return y(document,t)})()}))("ukg-interactive-popover"),S=(t,s,n)=>customElements.whenDefined(t).then(()=>{const l=document,c=l.createElement(t);return c.classList.add("overlay-hidden"),n&&c.classList.add("ukg-overlay-controller"),Object.assign(c,s),(0,b.h)(s,"scrollingElementId")&&s.scrollingElementId?o(l).querySelector(`#${s.scrollingElementId}`).append(c):o(l).appendChild(c),c.componentOnReady()}),x=(t,s,n,l,c)=>{const h=y(t,l,c);return h?(h.classList.remove("ukg-overlay-presented"),h.dismiss(s,n)):Promise.reject("overlay does not exist")},$=(t,s)=>(void 0===s&&(s="ukg-dialog,ukg-modal,ukg-interactive-popover,ukg-popover"),Array.from(t.querySelectorAll(s)).filter(n=>{const l=n.tagName.toLowerCase();return"ukg-interactive-popover"===l||"ukg-dialog"===l||"ukg-modal"===l?n.classList.contains("ukg-overlay-presented")&&n.overlayIndex>-1:n.overlayIndex>-1})),y=(t,s,n)=>{const l=$(t,s);return void 0===n?l[l.length-1]:l.find(c=>c.id===n)};function C(t,s,n,l){return D.apply(this,arguments)}function D(){return(D=(0,k.Z)(function*(t,s,n,l){if(t.presented)return;t.presented=!0,t.el.classList.add("ukg-overlay-presented"),t.willPresent.emit();const c=t.enterAnimation?t.enterAnimation:s;(yield g(t,c,t.el,{targetSource:n,scrollingElementId:l,position:t.position,mobileBreakpoint:t.mobileBreakpoint}))&&t.didPresent.emit()})).apply(this,arguments)}function e(t,s,n,l,c,h){return r.apply(this,arguments)}function r(){return(r=(0,k.Z)(function*(t,s,n,l,c,h){const p=y(document,t.el.tagName.toLowerCase(),t.el.id);if(p&&t.el.id!==p.id||!t.presented)return!1;t.presented=!1;try{t.willDismiss.emit({data:s,role:n});const f=t.leaveAnimation?t.leaveAnimation:l;yield g(t,f,t.el,c),t.didDismiss.emit({data:s,role:n})}catch(f){console.error(f)}return h||t.el.remove(),!0})).apply(this,arguments)}function o(t){return t.querySelector("ukg-app")||t.body}function g(t,s,n,l){return a.apply(this,arguments)}function a(){return(a=(0,k.Z)(function*(t,s,n,l){if(t.animation&&(t.animation.destroy(),"UKG-TOOLTIP"!==t.el.tagName))return t.animation=void 0,!1;n.classList.remove("overlay-hidden");const c=n.shadowRoot||t.el,h=t.animation=yield m.e(3625).then(m.bind(m,3625)).then(f=>f.create(s,c,l));t.animation=h,t.animated||h.duration(0),yield h.playAsync();const p=h.hasCompleted;return h.destroy(),t.animation=void 0,p})).apply(this,arguments)}function i(t,s){let n;const l=new Promise(c=>n=c);return function d(t,s,n){const l=c=>{t.removeEventListener(s,l),n(c)};t.addEventListener(s,l)}(t,s,c=>{n(c.detail)}),l}const u="backdrop"},1549:(P,O,m)=>{m.r(O),m.d(O,{ukg_date_range_selector:()=>C});var k=m(5861),b=m(337),v=m(4476),I=m(8173);function _(e,r){const o=v.j.get("moment"),a=function w(e){const a=[{month:e.indexOf("M")},{day:e.indexOf("D")},{year:e.indexOf("Y")}];return a.sort((i,d)=>Object.values(i)[0]>Object.values(d)[0]?1:-1),a.map(i=>Object.keys(i)[0])}(o.localeData().longDateFormat("ll")),i=o(e,"YYYY-MM-DD"),d=i.format("MMM"),u=i.format("D"),t=i.format("YYYY"),s={month:d,day:u,year:t};if(!r||e===r){let p="";return a.forEach(f=>{p+=` ${s[f]}`}),p.trim()}const n=o(r,"YYYY-MM-DD"),l=n.format("MMM"),c=n.format("D"),h=n.format("YYYY");if(i.month()===n.month()&&i.year()===n.year()){if("month"===a[0]&&"day"===a[1])return`${d} ${u} - ${c} ${h}`;if("day"===a[0]&&"month"===a[1])return`${u} - ${c} ${d} ${h}`;if("year"===a[0]&&"month"===a[1])return` ${h} ${d} ${u} - ${c} `;if("year"===a[0]&&"day"===a[1])return` ${h} ${u} - ${c} ${d}`}if(i.year()===n.year()){if("month"===a[0]&&"day"===a[1])return`${d} ${u} - ${l} ${c} ${h}`;if("day"===a[0]&&"month"===a[1])return`${u} ${d} - ${c} ${l}  ${h}`;if("year"===a[0]&&"month"===a[1])return`${h} ${d} ${u} - ${l} ${c}`;if("year"===a[0]&&"day"===a[1])return`${h} ${u} ${d} - ${c} ${l}`}return"month"===a[0]&&"day"===a[1]?`${d} ${u} ${t} - ${l} ${c} ${h}`:"day"===a[0]&&"month"===a[1]?`${u} ${d} ${t} - ${c} ${l} ${h}`:"year"===a[0]&&"month"===a[1]?`${t} ${d} ${u} - ${h} ${l} ${c}`:"year"===a[0]&&"day"===a[1]?`${t} ${u} ${d} - ${h} ${c} ${l} `:void 0}m(267);const S=".popover-content";function x(e,r,o){var g;const{targetSource:a}=o,i=a.getBoundingClientRect(),d=r.ownerDocument,u=r.querySelector(S);Object.assign(u.style,{top:`${i.bottom}px`,left:`${i.left}px`,transformOrigin:"top left",minWidth:`${i.width}px`,overflowY:"hidden"}),"ukg-button"===(null===(g=a?.tagName)||void 0===g?void 0:g.toLowerCase())&&(u.style.top=i.bottom-4+"px"),i.left>8&&i.left+u.offsetWidth+8+1>d.defaultView.innerWidth&&Object.assign(u.style,{left:null,right:"1rem",transformOrigin:"top right"});const n=d.defaultView.innerHeight-i.bottom-u.offsetHeight-16;return n<=0&&(i.bottom+n>i.top?u.style.top=`${i.top}px`:d.defaultView.innerHeight-u.offsetHeight<16?Object.assign(u.style,{top:"1rem",height:"calc(100% - 2rem)"}):u.style.top=`${i.bottom+n}px`),u.style.position="fixed",function $(e,r){const o=new e,g=new e;g.addElement(r.querySelector("ukg-backdrop")),g.fromTo("opacity",.01,.32);const a=new e;a.addElement(r.querySelector(".popover-wrapper")),a.fromTo("opacity",1,1);const i=new e;i.addElement(r.querySelector(".popover-content")),i.fromTo("scale",1,1);const d=new e;return d.addElement(r.querySelector(".popover-viewport")),d.fromTo("opacity",.01,1),Promise.resolve(o.addElement(r).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).afterAddClass("ukg-overlay-presented").add(g).add(a).add(d))}(e,r)}const C=class{constructor(e){(0,b.r)(this,e),this.ukgPresented=(0,b.c)(this,"ukgPresented",7),this.ukgDismissed=(0,b.c)(this,"ukgDismissed",7),this.ukgFocus=(0,b.c)(this,"ukgFocus",7),this.ukgChange=(0,b.c)(this,"ukgChange",7),this.ukgStyle=(0,b.c)(this,"ukgStyle",7),this.screenWidthBreakpoint=768,this.clickedCustomDateOption=!1,this.customDateId="custom-date",this.rangeItems=null,this.noCustomOption=!1,this.targetSource=null,this.dateRangePickerProps=null,this.items=D(this.rangeItems),this.selectedRangeItem=null,this.menuPresent=!1,this.isExpanded=!1,this.hasFocus=!1,this.getAriaLabel=()=>{var r,o;return this.ariaLabelledBy?null!==(r=document.querySelector(`#${this.ariaLabelledBy}`)?.innerText)&&void 0!==r?r:"":null!==(o=this.ariaLabel)&&void 0!==o?o:""}}updateItems(e,r){JSON.stringify(e)!==JSON.stringify(r)&&(this.items=D(e))}selectedRangeItemChange(e){var r;this.ukgChange.emit(e?{value:{id:e.id,label:null!==(r=e.label)&&void 0!==r?r:_(e.value.startDate,e.value.endDate),value:e.value}}:{value:null})}onClick(e){var r=this;return(0,k.Z)(function*(){r.isExpanded||(e.stopPropagation(),r.menuPresent=!0,r.open())})()}keyDownHandler(e){[v.K.ENTER,v.K.DOWN,v.K.UP,v.K.SPACE].includes(e.keyCode)&&(e.preventDefault(),this.open())}onExternalFocus(){this.hasFocus=!0,this.emitStyle(),this.ukgFocus.emit()}onExternalBlur(){this.hasFocus=!1,this.emitStyle()}componentWillLoad(){this.ariaLabelledBy=this.el.getAttribute("aria-labelledby"),this.ariaLabel=this.el.getAttribute("aria-label")}componentDidRender(){this.emitStyle()}clear(){var e=this;return(0,k.Z)(function*(){(e.customDate?[...e.items,e.customDate]:e.items).forEach(o=>{o.selected=!1}),e.selectedRangeItem=null})()}setSelected(e){var r=this;return(0,k.Z)(function*(){r.updateRangeItemsAndValue(e)})()}getValue(){var e=this;return(0,k.Z)(function*(){var r,o;return{id:null===(r=e.selectedRangeItem)||void 0===r?void 0:r.id,value:null===(o=e.selectedRangeItem)||void 0===o?void 0:o.value}})()}open(){var e=this;return(0,k.Z)(function*(){if(!e.isExpanded)return e.isExpanded=!0,e.overlay=yield e.createOverlay(),e.overlay.onDidPresent().then((0,k.Z)(function*(){setTimeout((0,k.Z)(function*(){yield e.setUpMenuContainerOnPresent()}))})),e.overlay.onDidDismiss().then(r=>{var o;const g=null===(o=r?.data)||void 0===o?void 0:o.value;e.updateRangeItemsAndValue(g),e.overlay=void 0,e.menuPresent=!1,e.isExpanded=!1,(e.targetSource||e.el).focus(),e.ukgDismissed.emit(),e.clickedCustomDateOption&&(e.openDateRangePicker(),e.clickedCustomDateOption=!1)}),yield e.overlay.present(),e.overlay})()}emitStyle(){this.ukgStyle.emit({interactive:!0,select:!0,"has-value":this.hasValue()})}hasValue(){return!!this.selectedRangeItem}updateRangeItemsAndValue(e){e&&(this.customDate?[...this.items,this.customDate]:this.items).forEach(o=>{o.selected=o.id===e,o.selected&&(this.selectedRangeItem=o)})}openDateRangePicker(){var e,r;const o=null!==(e=this.targetSource)&&void 0!==e?e:this.el.closest("ukg-input-container"),g=Object.assign(Object.assign({},this.dateRangePickerProps),{isRange:!0,useModal:!1});null===(r=this.datePickerController)||void 0===r||r.present(g,{onWillClose:i=>{var d,u;const t=null===(d=i?.data)||void 0===d?void 0:d.data[0],s=null===(u=i?.data)||void 0===u?void 0:u.data[1];t&&(this.updateRangeItemsAndValue(this.customDateId),this.selectedRangeItem=this.customDate={id:this.customDateId,label:_(t,s),value:{startDate:t,endDate:s},selected:!0,noMetaLabel:!0}),(this.targetSource||this.el).focus()}},{target:o},null,!0)}setUpMenuContainerOnPresent(){var e=this;return(0,k.Z)(function*(){const r=yield e.overlay.querySelector("ukg-menu-container");e.ukgPresented.emit(),"UKG-INTERACTIVE-POPOVER"===e.overlay.tagName&&(yield r?.lockSize());const o=e.overlay.querySelector("ukg-select-item-group");yield o?.focusOnChild()})()}createOverlay(){var e=this;return(0,k.Z)(function*(){const r=e.getOverlayConfig();return I.p.create(r,!0)})()}getOverlayConfig(){var e;const r=this.customDate?[...this.items,this.customDate]:this.items;let o;this.menuOptions=r.map(t=>{var s,n,l;return{label:null!==(s=t.label)&&void 0!==s?s:_(t.value.startDate,t.value.endDate),metaLabel:t.noMetaLabel?null:_(t.value.startDate,t.value.endDate),value:t.id,id:t.id,selected:null!==(n=t.selected)&&void 0!==n&&n,disabled:null!==(l=t.disabled)&&void 0!==l&&l,attributes:{role:"menuitem"}}}),this.noCustomOption||(o={label:"Custom Date...",id:"ukg-custom-date-range",selected:!1,divider:!0,icon:"calendar",attributes:{role:"menuitem"},onClick:()=>this.clickedCustomDateOption=!0});const i={items:this.menuOptions,dateSelectorFooter:o,selectable:!0,selectRef:this.el,attrs:{role:"menu"}};let d=null;return window.innerWidth>=this.screenWidthBreakpoint&&(d=x),{targetSource:null!==(e=this.targetSource)&&void 0!==e?e:this.el.closest("ukg-input-container"),component:"ukg-menu-container",contentType:"select",enterAnimation:d,cssClass:["ukg-menu","ukg-match-width"],maxWidth:"calc(100vw - 1rem)",componentProps:i}}render(){var e,r,o;const a=`${null!==(e=(0,v.a9)(this.el)?.innerText)&&void 0!==e?e:this.getAriaLabel()}${this.selectedRangeItem?` ${this.selectedRangeItem.label}`:""}`;return(0,b.h)(b.a,{role:"button","aria-label":a,"aria-haspopup":"menu","aria-expanded":this.isExpanded?"true":null,tabIndex:0,class:{"ukg-date-range-custom":!!this.targetSource}},(0,b.h)("div",{class:"ukg-date-range-selector-value","data-selected-counter":null===(r=this.selectedRangeItem)||void 0===r?void 0:r.label},null===(o=this.selectedRangeItem)||void 0===o?void 0:o.label),!this.noCustomOption&&(0,b.h)("ukg-date-picker-controller",{ref:i=>this.datePickerController=i}))}get el(){return(0,b.g)(this)}static get watchers(){return{rangeItems:["updateItems"],selectedRangeItem:["selectedRangeItemChange"]}}};function D(e){return e?.map(r=>{var o;return Object.assign(Object.assign({},r),{label:null!==(o=r.label)&&void 0!==o?o:_(r.value.startDate,r.value.endDate),noMetaLabel:r.noMetaLabel||!r.label})})}C.style='.ukg-color-brand.sc-ukg-date-range-selector-h{--ukg-color-base:var(--ukg-color-brand, #005151);--ukg-color-base-rgb:var(--ukg-color-brand-rgb, 0, 81, 81);--ukg-color-contrast:var(--ukg-color-brand-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-brand-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-brand-shade, #004747);--ukg-color-tint:var(--ukg-color-brand-tint, #1a6262)}.ukg-color-action.sc-ukg-date-range-selector-h{--ukg-color-base:var(--ukg-color-action, #0176B2);--ukg-color-base-rgb:var(--ukg-color-action-rgb, 1, 118, 178);--ukg-color-contrast:var(--ukg-color-action-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-action-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-action-shade, #01689d);--ukg-color-tint:var(--ukg-color-action-tint, #1a84ba)}.ukg-color-important.sc-ukg-date-range-selector-h{--ukg-color-base:var(--ukg-color-important, #DC0C22);--ukg-color-base-rgb:var(--ukg-color-important-rgb, 220, 12, 34);--ukg-color-contrast:var(--ukg-color-important-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-important-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-important-shade, #c20b1e);--ukg-color-tint:var(--ukg-color-important-tint, #e02438)}.ukg-color-medium.sc-ukg-date-range-selector-h{--ukg-color-base:var(--ukg-color-medium, #F5F5F5);--ukg-color-base-rgb:var(--ukg-color-medium-rgb, 245, 245, 245);--ukg-color-contrast:var(--ukg-color-medium-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-medium-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-medium-shade, #d8d8d8);--ukg-color-tint:var(--ukg-color-medium-tint, #f6f6f6)}.ukg-color-success.sc-ukg-date-range-selector-h{--ukg-color-base:var(--ukg-color-success, #008060);--ukg-color-base-rgb:var(--ukg-color-success-rgb, 0, 128, 96);--ukg-color-contrast:var(--ukg-color-success-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-success-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-success-shade, #007154);--ukg-color-tint:var(--ukg-color-success-tint, #1a8d70)}.ukg-color-warning.sc-ukg-date-range-selector-h{--ukg-color-base:var(--ukg-color-warning, #CC7300);--ukg-color-base-rgb:var(--ukg-color-warning-rgb, 204, 115, 0);--ukg-color-contrast:var(--ukg-color-warning-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-warning-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-warning-shade, #b46500);--ukg-color-tint:var(--ukg-color-warning-tint, #d1811a)}*.sc-ukg-date-range-selector::-webkit-scrollbar{width:16px;height:16px}*.sc-ukg-date-range-selector::-webkit-scrollbar-thumb{border:5px solid rgba(0, 0, 0, 0);background-clip:padding-box;border-radius:50em;background-color:rgba(0, 0, 0, 0.42)}*.sc-ukg-date-range-selector::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(0, 0, 0, 0.57)}*.sc-ukg-date-range-selector::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(0, 0, 0, 0.72)}*.sc-ukg-date-range-selector::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(0, 0, 0, 0.57)}*.sc-ukg-date-range-selector::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-date-range-selector::-webkit-scrollbar-thumb{background-color:rgba(0, 0, 0, 0)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-date-range-selector:hover::-webkit-scrollbar-thumb{background-color:rgba(0, 0, 0, 0.42)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-date-range-selector:hover::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(0, 0, 0, 0.57)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-date-range-selector:hover::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-date-range-selector:hover::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(0, 0, 0, 0.57)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-date-range-selector:hover::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarDark.sc-ukg-date-range-selector::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.43)}*.ukg_sys_helper_scrollbarDark.sc-ukg-date-range-selector::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.sc-ukg-date-range-selector::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.sc-ukg-date-range-selector::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.sc-ukg-date-range-selector::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-date-range-selector::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-date-range-selector:hover::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.43)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-date-range-selector:hover::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-date-range-selector:hover::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-date-range-selector:hover::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-date-range-selector:hover::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(255, 255, 255, 0.73)}.sc-ukg-date-range-selector-h{display:block;outline:none;height:1.5rem;line-height:1.5rem;font-family:"Noto Sans Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;color:var(--ukg_sys_color_text_highEmphasis_onLight, rgba(0, 0, 0, 0.87));font-weight:400;font-size:1rem}.ukg-date-range-custom.sc-ukg-date-range-selector-h{display:none}.sc-ukg-date-range-selector-h .ukg-date-range-selector-value.sc-ukg-date-range-selector{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'}}]);