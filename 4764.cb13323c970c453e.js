"use strict";(self.webpackChunktenantUI=self.webpackChunktenantUI||[]).push([[4764],{6217:(d,c,t)=>{t.d(c,{v:()=>o});const o="5.6.1"},3100:(d,c,t)=>{t.d(c,{t:()=>b});var o=t(6217),e=t(4476);const n=/^ng-|^_ng-/g;function b(u){if(!u)return;const i=u.tagName.toLowerCase(),{hostname:h,pathname:k}=window.location,r={version:o.v,selector:i,hostname:h,pathname:k},a=Array.from(u.attributes).slice(0,10);for(let l=0;l<a.length;l++){const s=a[l];let g=s.name;g=(0,e.e)(g),n.lastIndex=0,!n.test(g)&&(r[g]=s.value)}window.pendo&&window.pendo.isReady&&window.pendo.isReady()&&window.pendo.track(i,r)}},4764:(d,c,t)=>{t.r(c),t.d(c,{ukg_avatar:()=>i,ukg_avatar_group:()=>k});var o=t(337),e=t(4476),n=t(267),b=t(3100);const i=class{constructor(r){(0,o.r)(this,r),this.ukgImgDidLoad=(0,o.c)(this,"ukgImgDidLoad",7),this.ukgError=(0,o.c)(this,"ukgError",7),this.ukgFocus=(0,o.c)(this,"ukgFocus",7),this.ukgBlur=(0,o.c)(this,"ukgBlur",7),this.href=null,this.size="m",this.initials="",this.loading="auto",this.decoding="async",this.avatarAriaLabel="",this.onError=()=>{this.ukgError.emit()},this.imgLoad=()=>{this.ukgImgDidLoad.emit(this.el)}}srcChanged(){this.addIO()}colorChanged(r){this.checkColor(r)}onFocus(r){this.atag&&((0,e.d)(r,this.atag)||this.ukgFocus.emit())}onBlur(){this.ukgBlur.emit()}keyUpHandler(r){r.keyCode===e.K.SPACE&&this.atag.click()}handleClick(r){this.atag&&(0,e.o)(r,this.atag)}componentDidLoad(){(0,n.a)(this.el.shadowRoot,!0),(0,b.t)(this.el)}componentWillLoad(){this.addIO(),this.checkColor(this.color)}addIO(){void 0!==this.src&&("IntersectionObserver"in window?(this.removeIO(),this.io=new IntersectionObserver(r=>{r[0].isIntersecting&&(this.load(),this.removeIO())}),this.io.observe(this.el)):setTimeout(()=>this.load(),200))}checkColor(r){const a={purple:"3",blue:"1",teal:"5",green:"4",yellow:"6",orange:"7",pink:"2"};if(r){const l=parseInt(r,10);isNaN(l)&&a.hasOwnProperty(r)&&console.warn(`The color '${r}' set to an avatar component is deprecated and will be removed in the next major release, consider replace it with '${a[r]}'.`)}}load(){this.loadError=this.onError,this.loadSrc=this.src}removeIO(){this.io&&(this.io.disconnect(),this.io=void 0)}getAvatarWidth(r){return"xl"===r?String(96):"l"===r?String(72):"m"===r?String(40):"s"===r?String(32):"xs"===r?String(24):void 0}getAvatar(){var r;const a=this.getAvatarWidth(this.size);return this.src?(0,o.h)("div",{class:"avatar-img"},(0,o.h)("img",{decoding:this.decoding,src:this.loadSrc,loading:this.loading,width:a,height:a,onLoad:this.imgLoad,onError:this.loadError,alt:""})):(0,o.h)("div",{class:"avatar-initials"},null===(r=this.initials)||void 0===r?void 0:r.toUpperCase())}render(){const r=(0,e.l)(this.el.parentElement),a=!!this.href,l=this.getAvatar();return(0,o.h)(o.a,{role:a?null:"presentation",class:{[`ukg-avatar--${this.size}`]:!0,"ukg-avatar--displayInitial":void 0===this.src,[`ukg-avatar-${this.color}`]:void 0!==this.color,"ukg-focus-on-light":(0,e.k)(r),"ukg-focus-on-dark":(0,e.m)(r)}},a?(0,o.h)("a",{ref:s=>this.atag=s,href:this.href,"aria-label":this.avatarAriaLabel},l):l)}static get delegatesFocus(){return!0}get el(){return(0,o.g)(this)}static get watchers(){return{src:["srcChanged"],color:["colorChanged"]}}};i.style=':host(.ukg-color-brand){--ukg-color-base:var(--ukg-color-brand, #005151);--ukg-color-base-rgb:var(--ukg-color-brand-rgb, 0, 81, 81);--ukg-color-contrast:var(--ukg-color-brand-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-brand-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-brand-shade, #004747);--ukg-color-tint:var(--ukg-color-brand-tint, #1a6262)}:host(.ukg-color-action){--ukg-color-base:var(--ukg-color-action, #0176B2);--ukg-color-base-rgb:var(--ukg-color-action-rgb, 1, 118, 178);--ukg-color-contrast:var(--ukg-color-action-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-action-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-action-shade, #01689d);--ukg-color-tint:var(--ukg-color-action-tint, #1a84ba)}:host(.ukg-color-important){--ukg-color-base:var(--ukg-color-important, #DC0C22);--ukg-color-base-rgb:var(--ukg-color-important-rgb, 220, 12, 34);--ukg-color-contrast:var(--ukg-color-important-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-important-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-important-shade, #c20b1e);--ukg-color-tint:var(--ukg-color-important-tint, #e02438)}:host(.ukg-color-medium){--ukg-color-base:var(--ukg-color-medium, #F5F5F5);--ukg-color-base-rgb:var(--ukg-color-medium-rgb, 245, 245, 245);--ukg-color-contrast:var(--ukg-color-medium-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-medium-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-medium-shade, #d8d8d8);--ukg-color-tint:var(--ukg-color-medium-tint, #f6f6f6)}:host(.ukg-color-success){--ukg-color-base:var(--ukg-color-success, #008060);--ukg-color-base-rgb:var(--ukg-color-success-rgb, 0, 128, 96);--ukg-color-contrast:var(--ukg-color-success-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-success-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-success-shade, #007154);--ukg-color-tint:var(--ukg-color-success-tint, #1a8d70)}:host(.ukg-color-warning){--ukg-color-base:var(--ukg-color-warning, #CC7300);--ukg-color-base-rgb:var(--ukg-color-warning-rgb, 204, 115, 0);--ukg-color-contrast:var(--ukg-color-warning-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-warning-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-warning-shade, #b46500);--ukg-color-tint:var(--ukg-color-warning-tint, #d1811a)}*::-webkit-scrollbar{width:16px;height:16px}*::-webkit-scrollbar-thumb{border:5px solid rgba(0, 0, 0, 0);background-clip:padding-box;border-radius:50em;background-color:rgba(0, 0, 0, 0.42)}*::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(0, 0, 0, 0.57)}*::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(0, 0, 0, 0.72)}*::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(0, 0, 0, 0.57)}*::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarShowOnHover::-webkit-scrollbar-thumb{background-color:rgba(0, 0, 0, 0)}*.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb{background-color:rgba(0, 0, 0, 0.42)}*.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(0, 0, 0, 0.57)}*.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(0, 0, 0, 0.57)}*.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarDark::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.43)}*.ukg_sys_helper_scrollbarDark::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.43)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(255, 255, 255, 0.73)}:host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:50em;border:2px solid var(--ukg_sys_color_surface_light, #FFFFFF);background-color:var(--ukg_sys_color_surface_lightDarker, #F5F5F5);margin:-2px;color:var(--ukg_sys_color_text_highEmphasis_onLight, rgba(0, 0, 0, 0.87));line-height:1;font-family:"Volte Rounded", "Noto Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;-ms-flex-negative:0;flex-shrink:0}:host(:focus){outline:none}:host(.ukg-avatar--xl){font-size:2.5rem;font-weight:400;width:6rem;height:6rem}:host(.ukg-avatar--l){font-size:1.875rem;font-weight:400;width:4.5rem;height:4.5rem}:host(.ukg-avatar--m){font-size:1rem;font-weight:500;width:2.5rem;height:2.5rem}:host(.ukg-avatar--s){font-size:0.75rem;font-weight:500;width:2rem;height:2rem}:host(.ukg-avatar--xs){font-size:0.625rem;font-weight:500;width:1.5rem;height:1.5rem}:host(.ukg-avatar-1){background-color:var(--ukg_sys_color_avatar_01, #D6EAFF)}:host(.ukg-avatar-2){background-color:var(--ukg_sys_color_avatar_02, #FFDBFA)}:host(.ukg-avatar-3){background-color:var(--ukg_sys_color_avatar_03, #EFE0FF)}:host(.ukg-avatar-4){background-color:var(--ukg_sys_color_avatar_04, #CFEFC2)}:host(.ukg-avatar-5){background-color:var(--ukg_sys_color_avatar_05, #BEF4ED)}:host(.ukg-avatar-6){background-color:var(--ukg_sys_color_avatar_06, #FFE68F)}:host(.ukg-avatar-7){background-color:var(--ukg_sys_color_avatar_07, #F0BBAC)}:host(.ukg-avatar-8){background-color:var(--ukg_sys_color_avatar_08, #F4CAAD)}:host(.ukg-avatar-default){background-color:var(--ukg_sys_color_surface_lightDarker, #F5F5F5)}:host(.ukg-avatar-purple){background-color:#d9e9fd}:host(.ukg-avatar-blue){background-color:#e1f5f8}:host(.ukg-avatar-teal){background-color:#ddf6ef}:host(.ukg-avatar-green){background-color:#dff5d0}:host(.ukg-avatar-yellow){background-color:#edf4de}:host(.ukg-avatar-orange){background-color:#fcf0d5}:host(.ukg-avatar-pink){background-color:#faeae3}:host .avatar-initials{max-height:100%;max-width:100%;overflow:hidden;color:inherit}:host .avatar-img{border-radius:50em;overflow:hidden;display:block;height:100%;width:100%}:host img{-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;min-height:100%;width:100%}:host a{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;position:relative;width:100%;height:100%;text-decoration:none;color:inherit;outline:none}:host a.focus-visible::after{content:"";display:block;position:absolute;inset:-5px;border-radius:50em;border:3px solid var(--ukg_sys_color_focusBorder_onLight, #3C96C3);padding:2px;background-color:transparent;z-index:1}:host(.ukg-focus-on-dark) a.focus-visible::after{border-color:var(--ukg_sys_color_focusBorder_onDark, rgba(255, 255, 255, 0.65))}';const k=class{constructor(r){(0,o.r)(this,r),this.ukgFocus=(0,o.c)(this,"ukgFocus",7),this.ukgBlur=(0,o.c)(this,"ukgBlur",7),this.maxItems=5,this.compact=!1,this.itemCount=0}compactGroupChanged(r){this.maxItems=r?3:5}focusHandler(r){!this.atag||(0,e.d)(r,this.atag)||this.ukgFocus.emit()}onBlur(){this.ukgBlur.emit()}keyUpHandler(r){this.atag&&r.keyCode===e.K.SPACE&&this.atag.click()}handleClick(r){!this.atag||(0,e.o)(r,this.atag)}componentDidLoad(){(0,n.a)(this.el.shadowRoot,!0),this.alignAvatarProps(),(0,b.t)(this.el)}componentWillLoad(){this.compactGroupChanged(this.compact),this.itemCount=this.el.childElementCount}slotChanged(){this.itemCount=this.el.childElementCount,this.alignAvatarProps()}renderPlusItem(){if(this.itemCount>this.maxItems){const r=this.itemCount-this.maxItems;return(0,o.h)("div",{"aria-hidden":"true",class:"ukg-avatar-group-counter"},r>=100?"99+":`+${r}`)}return null}alignAvatarProps(){this.el.querySelectorAll("ukg-avatar").forEach(a=>{a.setAttribute("aria-hidden","true"),a.size="s",a.href=null})}render(){var r;const a=null!==(r=this.el.getAttribute("aria-label"))&&void 0!==r?r:null,l=typeof this.href<"u",s=[(0,o.h)("slot",{onSlotchange:()=>this.slotChanged()}),this.renderPlusItem()];return(0,o.h)(o.a,{role:l?null:"presentation",class:{"ukg-avatar-group-compact":this.compact}},l?(0,o.h)("a",{class:"avatar-group-wrapper",ref:g=>this.atag=g,href:this.href,"aria-label":a},s):(0,o.h)("div",{class:"avatar-group-wrapper"},s))}static get delegatesFocus(){return!0}get el(){return(0,o.g)(this)}static get watchers(){return{compact:["compactGroupChanged"]}}};k.style=':host(.ukg-color-brand){--ukg-color-base:var(--ukg-color-brand, #005151);--ukg-color-base-rgb:var(--ukg-color-brand-rgb, 0, 81, 81);--ukg-color-contrast:var(--ukg-color-brand-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-brand-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-brand-shade, #004747);--ukg-color-tint:var(--ukg-color-brand-tint, #1a6262)}:host(.ukg-color-action){--ukg-color-base:var(--ukg-color-action, #0176B2);--ukg-color-base-rgb:var(--ukg-color-action-rgb, 1, 118, 178);--ukg-color-contrast:var(--ukg-color-action-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-action-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-action-shade, #01689d);--ukg-color-tint:var(--ukg-color-action-tint, #1a84ba)}:host(.ukg-color-important){--ukg-color-base:var(--ukg-color-important, #DC0C22);--ukg-color-base-rgb:var(--ukg-color-important-rgb, 220, 12, 34);--ukg-color-contrast:var(--ukg-color-important-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-important-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-important-shade, #c20b1e);--ukg-color-tint:var(--ukg-color-important-tint, #e02438)}:host(.ukg-color-medium){--ukg-color-base:var(--ukg-color-medium, #F5F5F5);--ukg-color-base-rgb:var(--ukg-color-medium-rgb, 245, 245, 245);--ukg-color-contrast:var(--ukg-color-medium-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-medium-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-medium-shade, #d8d8d8);--ukg-color-tint:var(--ukg-color-medium-tint, #f6f6f6)}:host(.ukg-color-success){--ukg-color-base:var(--ukg-color-success, #008060);--ukg-color-base-rgb:var(--ukg-color-success-rgb, 0, 128, 96);--ukg-color-contrast:var(--ukg-color-success-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-success-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-success-shade, #007154);--ukg-color-tint:var(--ukg-color-success-tint, #1a8d70)}:host(.ukg-color-warning){--ukg-color-base:var(--ukg-color-warning, #CC7300);--ukg-color-base-rgb:var(--ukg-color-warning-rgb, 204, 115, 0);--ukg-color-contrast:var(--ukg-color-warning-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-warning-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-warning-shade, #b46500);--ukg-color-tint:var(--ukg-color-warning-tint, #d1811a)}*::-webkit-scrollbar{width:16px;height:16px}*::-webkit-scrollbar-thumb{border:5px solid rgba(0, 0, 0, 0);background-clip:padding-box;border-radius:50em;background-color:rgba(0, 0, 0, 0.42)}*::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(0, 0, 0, 0.57)}*::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(0, 0, 0, 0.72)}*::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(0, 0, 0, 0.57)}*::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarShowOnHover::-webkit-scrollbar-thumb{background-color:rgba(0, 0, 0, 0)}*.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb{background-color:rgba(0, 0, 0, 0.42)}*.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(0, 0, 0, 0.57)}*.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(0, 0, 0, 0.57)}*.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarDark::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.43)}*.ukg_sys_helper_scrollbarDark::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.43)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(255, 255, 255, 0.73)}:host(.ukg-color-brand){--ukg-color-base:var(--ukg-color-brand, #005151);--ukg-color-base-rgb:var(--ukg-color-brand-rgb, 0, 81, 81);--ukg-color-contrast:var(--ukg-color-brand-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-brand-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-brand-shade, #004747);--ukg-color-tint:var(--ukg-color-brand-tint, #1a6262)}:host(.ukg-color-action){--ukg-color-base:var(--ukg-color-action, #0176B2);--ukg-color-base-rgb:var(--ukg-color-action-rgb, 1, 118, 178);--ukg-color-contrast:var(--ukg-color-action-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-action-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-action-shade, #01689d);--ukg-color-tint:var(--ukg-color-action-tint, #1a84ba)}:host(.ukg-color-important){--ukg-color-base:var(--ukg-color-important, #DC0C22);--ukg-color-base-rgb:var(--ukg-color-important-rgb, 220, 12, 34);--ukg-color-contrast:var(--ukg-color-important-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-important-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-important-shade, #c20b1e);--ukg-color-tint:var(--ukg-color-important-tint, #e02438)}:host(.ukg-color-medium){--ukg-color-base:var(--ukg-color-medium, #F5F5F5);--ukg-color-base-rgb:var(--ukg-color-medium-rgb, 245, 245, 245);--ukg-color-contrast:var(--ukg-color-medium-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-medium-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-medium-shade, #d8d8d8);--ukg-color-tint:var(--ukg-color-medium-tint, #f6f6f6)}:host(.ukg-color-success){--ukg-color-base:var(--ukg-color-success, #008060);--ukg-color-base-rgb:var(--ukg-color-success-rgb, 0, 128, 96);--ukg-color-contrast:var(--ukg-color-success-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-success-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-success-shade, #007154);--ukg-color-tint:var(--ukg-color-success-tint, #1a8d70)}:host(.ukg-color-warning){--ukg-color-base:var(--ukg-color-warning, #CC7300);--ukg-color-base-rgb:var(--ukg-color-warning-rgb, 204, 115, 0);--ukg-color-contrast:var(--ukg-color-warning-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-warning-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-warning-shade, #b46500);--ukg-color-tint:var(--ukg-color-warning-tint, #d1811a)}*::-webkit-scrollbar{width:16px;height:16px}*::-webkit-scrollbar-thumb{border:5px solid rgba(0, 0, 0, 0);background-clip:padding-box;border-radius:50em;background-color:rgba(0, 0, 0, 0.42)}*::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(0, 0, 0, 0.57)}*::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(0, 0, 0, 0.72)}*::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(0, 0, 0, 0.57)}*::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarShowOnHover::-webkit-scrollbar-thumb{background-color:rgba(0, 0, 0, 0)}*.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb{background-color:rgba(0, 0, 0, 0.42)}*.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(0, 0, 0, 0.57)}*.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(0, 0, 0, 0.57)}*.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarDark::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.43)}*.ukg_sys_helper_scrollbarDark::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.43)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover:hover::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(255, 255, 255, 0.73)}:host{display:table}.avatar-group-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row-reverse;flex-direction:row-reverse;padding:0.375rem;-ms-flex-pack:start;justify-content:flex-start;border-radius:50em;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;text-decoration:none;outline:none}.avatar-group-wrapper.focus-visible::after{content:"";display:block;position:absolute;pointer-events:none;inset:0;border-radius:50em;background-color:transparent;border:3px solid var(--ukg_sys_color_focusBorder_onLight, #3C96C3)}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){:host(:hover) a.avatar-group-wrapper,:host(:active) a.avatar-group-wrapper{background-color:var(--ukg_sys_color_hover_onLight, rgba(0, 0, 0, 0.05));cursor:pointer}}@media not screen and (pointer: coarse){:host(:hover) a.avatar-group-wrapper,:host(:active) a.avatar-group-wrapper{background-color:var(--ukg_sys_color_hover_onLight, rgba(0, 0, 0, 0.05));cursor:pointer}}:host(:focus){outline:none}::slotted(ukg-avatar){position:relative;pointer-events:none}::slotted(:nth-last-child(5)){z-index:1}::slotted(:nth-last-child(4)){z-index:2}::slotted(:nth-last-child(3)){z-index:3}::slotted(:nth-last-child(2)){z-index:4}::slotted(:nth-last-child(1)){z-index:5}::slotted(:not(:nth-last-child(-n+5))){display:none}:host(.ukg-avatar-group-compact) ::slotted(:not(:nth-last-child(-n+3))){display:none}.ukg-avatar-group-counter{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;position:relative;border-radius:50em;border:2px solid var(--ukg_sys_color_surface_light, #FFFFFF);margin:-2px;background-color:var(--ukg_sys_color_surface_dark, #4A4A4A);line-height:1.125rem;font-family:"Noto Sans Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;color:var(--ukg_sys_color_text_highEmphasis_onDark, rgb(255, 255, 255));font-weight:400;font-size:0.875rem;z-index:0;-ms-flex-order:-1;order:-1;width:2rem}'}}]);