"use strict";(self.webpackChunktenantUI=self.webpackChunktenantUI||[]).push([[3982],{6217:(c,a,r)=>{r.d(a,{v:()=>o});const o="5.6.1"},3100:(c,a,r)=>{r.d(a,{t:()=>s});var o=r(6217),i=r(4476);const n=/^ng-|^_ng-/g;function s(e){if(!e)return;const l=e.tagName.toLowerCase(),{hostname:t,pathname:u}=window.location,h={version:o.v,selector:l,hostname:t,pathname:u},k=Array.from(e.attributes).slice(0,10);for(let b=0;b<k.length;b++){const m=k[b];let g=m.name;g=(0,i.e)(g),n.lastIndex=0,!n.test(g)&&(h[g]=m.value)}window.pendo&&window.pendo.isReady&&window.pendo.isReady()&&window.pendo.track(l,h)}},3982:(c,a,r)=>{r.r(a),r.d(a,{ukg_image_button:()=>l});var o=r(337),i=r(4476),n=r(267),s=r(3100);const l=class{constructor(t){(0,o.r)(this,t),this.noBackground=!1,this.horizontal=!1,this.disabled=!1,this.enableFluidSize=!1}onFocus(t){this.disabled&&!this.href||(0,i.d)(t,this.button)}onClick(t){(0,i.o)(t,this.button)}componentDidLoad(){(0,n.a)(this.el.shadowRoot,!0),(0,s.t)(this.el)}componentWillRender(){this.href&&this.disabled&&console.warn("HTML Anchor element cannot be disabled.",this.el)}render(){return(0,o.h)(o.a,null,(0,o.h)(this.href?"a":"button",{ref:u=>this.button=u,class:{"ukg-image-button":!0,"ukg-image-button-nobg":this.noBackground,"ukg-image-button-horizontal":this.horizontal,"ukg-image-button-enable-fluid-size":this.enableFluidSize},disabled:this.disabled&&!this.href,href:this.href,type:this.href?null:"button"},(0,o.h)("span",{class:"ukg-image-button-image","aria-hidden":"true"},(0,o.h)("span",{part:"image"},(0,o.h)("slot",{name:"image"}))),(0,o.h)("span",{class:"ukg-image-button-label"},(0,o.h)("span",{part:"label"},(0,o.h)("slot",{name:"label"}),(0,o.h)("slot",null)))))}static get delegatesFocus(){return!0}get el(){return(0,o.g)(this)}};l.style=':host(.ukg-color-brand){--ukg-color-base:var(--ukg-color-brand, #005151);--ukg-color-base-rgb:var(--ukg-color-brand-rgb, 0, 81, 81);--ukg-color-contrast:var(--ukg-color-brand-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-brand-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-brand-shade, #004747);--ukg-color-tint:var(--ukg-color-brand-tint, #1a6262)}:host(.ukg-color-action){--ukg-color-base:var(--ukg-color-action, #0176B2);--ukg-color-base-rgb:var(--ukg-color-action-rgb, 1, 118, 178);--ukg-color-contrast:var(--ukg-color-action-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-action-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-action-shade, #01689d);--ukg-color-tint:var(--ukg-color-action-tint, #1a84ba)}:host(.ukg-color-important){--ukg-color-base:var(--ukg-color-important, #DC0C22);--ukg-color-base-rgb:var(--ukg-color-important-rgb, 220, 12, 34);--ukg-color-contrast:var(--ukg-color-important-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-important-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-important-shade, #c20b1e);--ukg-color-tint:var(--ukg-color-important-tint, #e02438)}:host(.ukg-color-medium){--ukg-color-base:var(--ukg-color-medium, #F5F5F5);--ukg-color-base-rgb:var(--ukg-color-medium-rgb, 245, 245, 245);--ukg-color-contrast:var(--ukg-color-medium-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-medium-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-medium-shade, #d8d8d8);--ukg-color-tint:var(--ukg-color-medium-tint, #f6f6f6)}:host(.ukg-color-success){--ukg-color-base:var(--ukg-color-success, #008060);--ukg-color-base-rgb:var(--ukg-color-success-rgb, 0, 128, 96);--ukg-color-contrast:var(--ukg-color-success-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-success-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-success-shade, #007154);--ukg-color-tint:var(--ukg-color-success-tint, #1a8d70)}:host(.ukg-color-warning){--ukg-color-base:var(--ukg-color-warning, #CC7300);--ukg-color-base-rgb:var(--ukg-color-warning-rgb, 204, 115, 0);--ukg-color-contrast:var(--ukg-color-warning-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-warning-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-warning-shade, #b46500);--ukg-color-tint:var(--ukg-color-warning-tint, #d1811a)}*::-webkit-scrollbar{width:16px;height:16px}*::-webkit-scrollbar-thumb{border:5px solid rgba(0, 0, 0, 0);background-clip:padding-box;border-radius:50em;background-color:rgba(0, 0, 0, 0.42)}*::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(0, 0, 0, 0.57)}*::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(0, 0, 0, 0.72)}*::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(0, 0, 0, 0.57)}*::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarShowOnHover::-webkit-scrollbar-thumb{background-color:rgba(0, 0, 0, 0)}*.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb{background-color:rgba(0, 0, 0, 0.42)}*.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(0, 0, 0, 0.57)}*.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(0, 0, 0, 0.57)}*.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarDark::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.43)}*.ukg_sys_helper_scrollbarDark::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.43)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(255, 255, 255, 0.73)}:host{display:inline}:host .ukg-image-button{position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;border-radius:0.75rem;background-color:transparent;border:0;padding:0;min-width:var(--ukg-image-button-horizontal-min-width, 6.375rem);min-height:var(--ukg-image-button-horizontal-min-height, 3.5rem);cursor:pointer;overflow:hidden;outline:none;text-decoration:none}:host .ukg-image-button:hover:not([disabled]){background-color:var(--ukg_sys_color_hover_onLight, rgba(0, 0, 0, 0.05))}:host .ukg-image-button.focus-visible:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;border:3px solid var(--ukg_sys_color_focusBorder_onLight, #3C96C3);border-radius:0.75rem;z-index:1}:host .ukg-image-button[disabled]{cursor:default}:host .ukg-image-button[disabled] .ukg-image-button-image{-webkit-filter:grayscale(100%);filter:grayscale(100%);opacity:0.3}:host .ukg-image-button[disabled] .ukg-image-button-label{color:var(--ukg_sys_color_text_disabled_onLight, rgba(0, 0, 0, 0.3))}:host .ukg-image-button-image{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;width:var(--ukg-image-button-horizontal-img-width, 3rem);height:var(--ukg-image-button-horizontal-img-height, 3.5rem);-ms-flex:0 0 var(--ukg-image-button-horizontal-img-basis, 3rem);flex:0 0 var(--ukg-image-button-horizontal-img-basis, 3rem);border-top-left-radius:0.75rem;border-bottom-left-radius:0.75rem;-webkit-clip-path:inset(0);clip-path:inset(0)}:host .ukg-image-button-label{line-height:1.125rem;font-family:"Noto Sans Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;color:var(--ukg_sys_color_text_highEmphasis_onLight, rgba(0, 0, 0, 0.87));font-weight:400;font-size:0.875rem;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;padding:0.625rem 1rem 0.625rem 0.5rem;-ms-flex:0 1 var(--ukg-image-button-horizontal-label-basis, auto);flex:0 1 var(--ukg-image-button-horizontal-label-basis, auto)}:host .ukg-image-button-label span[part=label]{text-align:start;overflow:hidden;display:-webkit-box;-webkit-line-clamp:var(--ukg-image-button-label-line-clamp, 0);-webkit-box-orient:vertical}:host .ukg-image-button:not(.ukg-image-button-nobg){background-color:var(--ukg_sys_color_surface_light, #FFFFFF);-webkit-box-shadow:0 3px 8px 0 rgba(0, 0, 0, 0.1), 0 0 4px 0 rgba(0, 0, 0, 0.13);box-shadow:0 3px 8px 0 rgba(0, 0, 0, 0.1), 0 0 4px 0 rgba(0, 0, 0, 0.13)}:host .ukg-image-button:not(.ukg-image-button-nobg):hover:not([disabled]){background-color:var(--ukg_sys_color_surface_light, #FFFFFF);-webkit-box-shadow:0 12px 30px 0 rgba(0, 0, 0, 0.09), 0 0 18px 0 rgba(0, 0, 0, 0.08);box-shadow:0 12px 30px 0 rgba(0, 0, 0, 0.09), 0 0 18px 0 rgba(0, 0, 0, 0.08)}:host .ukg-image-button:not(.ukg-image-button-horizontal){-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch;min-width:0;width:var(--ukg-image-button-vertical-width, 8.375rem);min-height:var(--ukg-image-button-vertical-min-height, 8.375rem)}:host .ukg-image-button:not(.ukg-image-button-horizontal).ukg-image-button-enable-fluid-size{width:var(--ukg-image-button-vertical-width, 100%)}:host .ukg-image-button:not(.ukg-image-button-horizontal).ukg-image-button-enable-fluid-size .ukg-image-button-image{max-height:var(--ukg-image-button-vertical-img-height, none)}:host .ukg-image-button:not(.ukg-image-button-horizontal).ukg-image-button-enable-fluid-size .ukg-image-button-label span[part=label]{-webkit-line-clamp:var(--ukg-image-button-label-line-clamp, 0)}:host .ukg-image-button:not(.ukg-image-button-horizontal) .ukg-image-button-image{-ms-flex-align:end;align-items:flex-end;-ms-flex-pack:center;justify-content:center;width:var(--ukg-image-button-vertical-img-width, 100%);min-height:var(--ukg-image-button-vertical-img-height, 4.1875rem);max-height:var(--ukg-image-button-vertical-img-height, 4.1875rem);-ms-flex:0 0 var(--ukg-image-button-vertical-img-basis, 50%);flex:0 0 var(--ukg-image-button-vertical-img-basis, 50%);border-top-right-radius:0.75rem;border-bottom-left-radius:0}:host .ukg-image-button:not(.ukg-image-button-horizontal) .ukg-image-button-label{-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center;min-height:4.1875rem;padding:0.5rem 0.625rem 0.625rem;-ms-flex:0 0 var(--ukg-image-button-vertical-label-basis, 50%);flex:0 0 var(--ukg-image-button-vertical-label-basis, 50%)}:host .ukg-image-button:not(.ukg-image-button-horizontal) .ukg-image-button-label span[part=label]{text-align:center;-webkit-line-clamp:var(--ukg-image-button-label-line-clamp, 2)}'}}]);