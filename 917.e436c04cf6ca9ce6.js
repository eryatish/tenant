"use strict";(self.webpackChunktenantUI=self.webpackChunktenantUI||[]).push([[917],{6217:(m,l,n)=>{n.d(l,{v:()=>g});const g="5.6.1"},3100:(m,l,n)=>{n.d(l,{t:()=>_});var g=n(6217),a=n(4476);const b=/^ng-|^_ng-/g;function _(i){if(!i)return;const h=i.tagName.toLowerCase(),{hostname:p,pathname:v}=window.location,d={version:g.v,selector:h,hostname:p,pathname:v},k=Array.from(i.attributes).slice(0,10);for(let o=0;o<k.length;o++){const t=k[o];let r=t.name;r=(0,a.e)(r),b.lastIndex=0,!b.test(r)&&(d[r]=t.value)}window.pendo&&window.pendo.isReady&&window.pendo.isReady()&&window.pendo.track(h,d)}},917:(m,l,n)=>{n.r(l),n.d(l,{ukg_page_content_navigation:()=>k});var g=n(5861),a=n(337),b=n(6964),_=n(94),i=n(4476),h=n(3100);n(267);const v=(o,t,r)=>{if(null==t)return void(o.isActive=!0);const e=t.shadowRoot.querySelector(".underline"),s=o.clientHeight/t.clientHeight,u=o.getBoundingClientRect(),c=t.getBoundingClientRect(),y=u.top-c.top,f=(0,b.g)(e),w=()=>{r(),e.style.transform="",e.removeEventListener(f,w)};e.addEventListener(f,w),e.style.transform=`translateY(${y}px) scaleY(${s})`},k=class{constructor(o){(0,a.r)(this,o),this.ukgPageContentNavItemSelected=(0,a.c)(this,"ukgPageContentNavItemSelected",7),this.ukgPageContentNavItemAnimationFinished=(0,a.c)(this,"ukgPageContentNavItemAnimationFinished",7),this.dlsLogger=(0,_.c)("page-content-navigation"),this.isAnimating=!1,this.mobileBreakpoint=i.G.XS,this.offset=0,this.navItems=[],this.getYPositionOfBreakpoint=(t,r=!1)=>{var e;let s=0;const u=t.breakpoint;if("string"==typeof u){const c=document.querySelector(`#${u}`);s=c?c.offsetTop:0,c&&this.scrollableParentElement&&(s=c.getBoundingClientRect().y,r&&c.scrollIntoView())}return s+(null===(e=this.scrollableParentElement)||void 0===e?void 0:e.scrollTop)},this.getSelectedItem=()=>this.navItems.find(t=>t.isActive),this.onAnimationCallback=t=>()=>{this.navItems.forEach(r=>{r.isActive=r===t}),this.isAnimating=!1,this.ukgPageContentNavItemAnimationFinished.emit()},this.mutationObserverCallBack=t=>{(0,i.f)(t,this.observer,this.el)}}onResize(){this.el.style.display=window.innerWidth<=this.mobileBreakpoint?"none":null}onScroll(){let o;const t=this.getSelectedItem(),r=this.scrollableParentElement?this.scrollableParentElement.scrollTop:window.pageYOffset;this.navItems.forEach(e=>{r>=this.getYPositionOfBreakpoint(e)&&(o=e)}),o&&!this.isAnimating&&v(o,t,this.onAnimationCallback(o))}onPageContentNavItemCreated(){this.navItems=Array.from(this.el.querySelectorAll("ukg-page-content-nav-item"))}onPageContentNavItemSelected(o){var t=this;return(0,g.Z)(function*(){const r=t.getSelectedItem(),e=o.target;e.isDisabled||e.isActive||(t.ukgPageContentNavItemSelected.emit({identifier:e.identifier?e.identifier:null,previous:r?.identifier?r.identifier:null}),e&&!t.isAnimating&&(t.isAnimating=!0,t.getYPositionOfBreakpoint(e,!0),v(e,r,t.onAnimationCallback(e))))})()}componentWillLoad(){this.onPageContentNavItemCreated(),0===this.navItems.length&&this.dlsLogger.warn("Must have at least one page-content-nav-item")}componentDidRender(){this.el.querySelectorAll("ukg-button").forEach(o=>{o.tabIndex=-1})}componentDidUpdate(){0===this.el.clientWidth&&"none"!==window.getComputedStyle(this.el).display&&setTimeout(()=>(0,a.f)(this.el),0)}componentDidLoad(){(0,h.t)(this.el),this.parentId&&(this.scrollableParentElement=document.querySelector(`#${this.parentId}`)),this.scrollableParentElement&&this.scrollableParentElement.addEventListener("scroll",()=>this.onScroll()),this.navHeader=document.querySelector("ukg-nav-header"),this.observer=new MutationObserver(this.mutationObserverCallBack),this.observer.observe(this.el,{attributes:!0})}disconnectedCallback(){var o;null===(o=this.observer)||void 0===o||o.disconnect()}forceRender(){var o=this;return(0,g.Z)(function*(){(0,a.f)(o.el)})()}render(){const o=(0,i.l)(this.el.parentElement);return(0,a.h)(a.a,{class:{"ukg-align-left":!0,"ukg-is-dark":(0,i.m)(o)}},(0,a.h)("div",{role:"tablist",class:"ukg-page-content-navigation-container"},(0,a.h)("slot",null)))}get el(){return(0,a.g)(this)}};k.style=".ukg-color-brand.sc-ukg-page-content-navigation-h{--ukg-color-base:var(--ukg-color-brand, #005151);--ukg-color-base-rgb:var(--ukg-color-brand-rgb, 0, 81, 81);--ukg-color-contrast:var(--ukg-color-brand-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-brand-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-brand-shade, #004747);--ukg-color-tint:var(--ukg-color-brand-tint, #1a6262)}.ukg-color-action.sc-ukg-page-content-navigation-h{--ukg-color-base:var(--ukg-color-action, #0176B2);--ukg-color-base-rgb:var(--ukg-color-action-rgb, 1, 118, 178);--ukg-color-contrast:var(--ukg-color-action-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-action-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-action-shade, #01689d);--ukg-color-tint:var(--ukg-color-action-tint, #1a84ba)}.ukg-color-important.sc-ukg-page-content-navigation-h{--ukg-color-base:var(--ukg-color-important, #DC0C22);--ukg-color-base-rgb:var(--ukg-color-important-rgb, 220, 12, 34);--ukg-color-contrast:var(--ukg-color-important-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-important-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-important-shade, #c20b1e);--ukg-color-tint:var(--ukg-color-important-tint, #e02438)}.ukg-color-medium.sc-ukg-page-content-navigation-h{--ukg-color-base:var(--ukg-color-medium, #F5F5F5);--ukg-color-base-rgb:var(--ukg-color-medium-rgb, 245, 245, 245);--ukg-color-contrast:var(--ukg-color-medium-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-medium-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-medium-shade, #d8d8d8);--ukg-color-tint:var(--ukg-color-medium-tint, #f6f6f6)}.ukg-color-success.sc-ukg-page-content-navigation-h{--ukg-color-base:var(--ukg-color-success, #008060);--ukg-color-base-rgb:var(--ukg-color-success-rgb, 0, 128, 96);--ukg-color-contrast:var(--ukg-color-success-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-success-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-success-shade, #007154);--ukg-color-tint:var(--ukg-color-success-tint, #1a8d70)}.ukg-color-warning.sc-ukg-page-content-navigation-h{--ukg-color-base:var(--ukg-color-warning, #CC7300);--ukg-color-base-rgb:var(--ukg-color-warning-rgb, 204, 115, 0);--ukg-color-contrast:var(--ukg-color-warning-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-warning-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-warning-shade, #b46500);--ukg-color-tint:var(--ukg-color-warning-tint, #d1811a)}*.sc-ukg-page-content-navigation::-webkit-scrollbar{width:16px;height:16px}*.sc-ukg-page-content-navigation::-webkit-scrollbar-thumb{border:5px solid rgba(0, 0, 0, 0);background-clip:padding-box;border-radius:50em;background-color:rgba(0, 0, 0, 0.42)}*.sc-ukg-page-content-navigation::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(0, 0, 0, 0.57)}*.sc-ukg-page-content-navigation::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(0, 0, 0, 0.72)}*.sc-ukg-page-content-navigation::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(0, 0, 0, 0.57)}*.sc-ukg-page-content-navigation::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-page-content-navigation::-webkit-scrollbar-thumb{background-color:rgba(0, 0, 0, 0)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-page-content-navigation:hover::-webkit-scrollbar-thumb{background-color:rgba(0, 0, 0, 0.42)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-page-content-navigation:hover::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(0, 0, 0, 0.57)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-page-content-navigation:hover::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-page-content-navigation:hover::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(0, 0, 0, 0.57)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-page-content-navigation:hover::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarDark.sc-ukg-page-content-navigation::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.43)}*.ukg_sys_helper_scrollbarDark.sc-ukg-page-content-navigation::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.sc-ukg-page-content-navigation::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.sc-ukg-page-content-navigation::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.sc-ukg-page-content-navigation::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-page-content-navigation::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-page-content-navigation:hover::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.43)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-page-content-navigation:hover::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-page-content-navigation:hover::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-page-content-navigation:hover::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-page-content-navigation:hover::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(255, 255, 255, 0.73)}.sc-ukg-page-content-navigation-h{overflow:hidden;display:-ms-flexbox;display:flex;min-height:3rem;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:end;justify-content:flex-end;position:-webkit-sticky;position:sticky;top:0;float:right}.sc-ukg-page-content-navigation-h .ukg-page-content-navigation-container.sc-ukg-page-content-navigation{overflow-x:scroll;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;scrollbar-width:none;-ms-overflow-style:none}.sc-ukg-page-content-navigation-h .ukg-page-content-navigation-container.sc-ukg-page-content-navigation::-webkit-scrollbar{display:none}.ukg-has-divider.ukg-is-dark.sc-ukg-page-content-navigation-h{border-bottom:1px solid var(--ukg_sys_color_divider_onDark, rgba(255, 255, 255, 0.15))}.sc-ukg-page-content-navigation-h:not(.ukg-align-left) .ukg-page-content-navigation-container.sc-ukg-page-content-navigation{-ms-flex-pack:center;justify-content:center}"}}]);