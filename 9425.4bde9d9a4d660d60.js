"use strict";(self.webpackChunktenantUI=self.webpackChunktenantUI||[]).push([[9425],{6217:(i,g,t)=>{t.d(g,{v:()=>l});const l="5.6.1"},3100:(i,g,t)=>{t.d(g,{t:()=>h});var l=t(6217),b=t(4476);const s=/^ng-|^_ng-/g;function h(c){if(!c)return;const u=c.tagName.toLowerCase(),{hostname:a,pathname:o}=window.location,e={version:l.v,selector:u,hostname:a,pathname:o},r=Array.from(c.attributes).slice(0,10);for(let k=0;k<r.length;k++){const d=r[k];let n=d.name;n=(0,b.e)(n),s.lastIndex=0,!s.test(n)&&(e[n]=d.value)}window.pendo&&window.pendo.isReady&&window.pendo.isReady()&&window.pendo.track(u,e)}},9425:(i,g,t)=>{t.r(g),t.d(g,{ukg_button_toggle:()=>a});var l=t(337),b=t(3100),s=t(6191);t(4476),t(267);const a=class{constructor(o){(0,l.r)(this,o),this.ukgButtonToggled=(0,l.c)(this,"ukgButtonToggled",7),this.buttonTag="ukg-button",this.type="single"}onButtonClick({target:o}){(0,s.c)(o),(0,s.h)(o,"value")&&o.tagName.toUpperCase()===this.buttonTag.toUpperCase()&&("single"===this.type.toLowerCase()&&(this.handleSingleSelect(o.value),this.ukgButtonToggled.emit(this.currentSelectedButton.value)),"custom"===this.type.toLowerCase()&&this.ukgButtonToggled.emit(this.currentSelectedButton.value),"multiple"===this.type.toLowerCase()&&(this.handleMultiSelect(o.value),this.ukgButtonToggled.emit(this.currentSelectedButtons)))}handleSingleSelect(o){Array.from(this.el.querySelectorAll("ukg-button")).forEach(r=>{r.value===o?(r.selected=!0,this.currentSelectedButton=r):r.selected=!1})}handleMultiSelect(o){this.currentSelectedButtons=[],this.el.querySelectorAll("ukg-button").forEach(r=>{r.value===o&&(r.selected=!r.selected),r.selected&&this.currentSelectedButtons.push(r.value)})}componentDidLoad(){(0,b.t)(this.el);const o=Array.from(this.el.querySelectorAll("ukg-button.ukg-is-toggle")),e=[...o].filter(r=>r.classList.contains("ukg-selected"));o.length>0&&(o[0].classList.add("ukg-first-toggle-btn"),o[o.length-1].classList.add("ukg-last-toggle-btn")),e.length>1&&(this.currentSelectedButtons=e.map(r=>r.value)),1===e.length&&(this.currentSelectedButton=e[0])}componentDidRender(){this.el.getAttribute("role")||("single"===this.type.toLowerCase()?this.el.setAttribute("role","radiogroup"):this.el.setAttribute("role","group"))}get el(){return(0,l.g)(this)}};a.style=".ukg-color-brand.sc-ukg-button-toggle-h{--ukg-color-base:var(--ukg-color-brand, #005151);--ukg-color-base-rgb:var(--ukg-color-brand-rgb, 0, 81, 81);--ukg-color-contrast:var(--ukg-color-brand-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-brand-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-brand-shade, #004747);--ukg-color-tint:var(--ukg-color-brand-tint, #1a6262)}.ukg-color-action.sc-ukg-button-toggle-h{--ukg-color-base:var(--ukg-color-action, #0176B2);--ukg-color-base-rgb:var(--ukg-color-action-rgb, 1, 118, 178);--ukg-color-contrast:var(--ukg-color-action-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-action-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-action-shade, #01689d);--ukg-color-tint:var(--ukg-color-action-tint, #1a84ba)}.ukg-color-important.sc-ukg-button-toggle-h{--ukg-color-base:var(--ukg-color-important, #DC0C22);--ukg-color-base-rgb:var(--ukg-color-important-rgb, 220, 12, 34);--ukg-color-contrast:var(--ukg-color-important-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-important-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-important-shade, #c20b1e);--ukg-color-tint:var(--ukg-color-important-tint, #e02438)}.ukg-color-medium.sc-ukg-button-toggle-h{--ukg-color-base:var(--ukg-color-medium, #F5F5F5);--ukg-color-base-rgb:var(--ukg-color-medium-rgb, 245, 245, 245);--ukg-color-contrast:var(--ukg-color-medium-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-medium-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-medium-shade, #d8d8d8);--ukg-color-tint:var(--ukg-color-medium-tint, #f6f6f6)}.ukg-color-success.sc-ukg-button-toggle-h{--ukg-color-base:var(--ukg-color-success, #008060);--ukg-color-base-rgb:var(--ukg-color-success-rgb, 0, 128, 96);--ukg-color-contrast:var(--ukg-color-success-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-success-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-success-shade, #007154);--ukg-color-tint:var(--ukg-color-success-tint, #1a8d70)}.ukg-color-warning.sc-ukg-button-toggle-h{--ukg-color-base:var(--ukg-color-warning, #CC7300);--ukg-color-base-rgb:var(--ukg-color-warning-rgb, 204, 115, 0);--ukg-color-contrast:var(--ukg-color-warning-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-warning-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-warning-shade, #b46500);--ukg-color-tint:var(--ukg-color-warning-tint, #d1811a)}*.sc-ukg-button-toggle::-webkit-scrollbar{width:16px;height:16px}*.sc-ukg-button-toggle::-webkit-scrollbar-thumb{border:5px solid rgba(0, 0, 0, 0);background-clip:padding-box;border-radius:50em;background-color:rgba(0, 0, 0, 0.42)}*.sc-ukg-button-toggle::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(0, 0, 0, 0.57)}*.sc-ukg-button-toggle::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(0, 0, 0, 0.72)}*.sc-ukg-button-toggle::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(0, 0, 0, 0.57)}*.sc-ukg-button-toggle::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-button-toggle::-webkit-scrollbar-thumb{background-color:rgba(0, 0, 0, 0)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-button-toggle:hover::-webkit-scrollbar-thumb{background-color:rgba(0, 0, 0, 0.42)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-button-toggle:hover::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(0, 0, 0, 0.57)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-button-toggle:hover::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-button-toggle:hover::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(0, 0, 0, 0.57)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-button-toggle:hover::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarDark.sc-ukg-button-toggle::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.43)}*.ukg_sys_helper_scrollbarDark.sc-ukg-button-toggle::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.sc-ukg-button-toggle::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.sc-ukg-button-toggle::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.sc-ukg-button-toggle::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-button-toggle::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-button-toggle:hover::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.43)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-button-toggle:hover::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-button-toggle:hover::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-button-toggle:hover::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-button-toggle:hover::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(255, 255, 255, 0.73)}.sc-ukg-button-toggle-h{display:-ms-flexbox;display:flex}.sc-ukg-button-toggle-s>ukg-button{--ukg-border-top:1px solid;--ukg-border-bottom:1px solid;--ukg-border-left:1px solid;--ukg-button-toggle-left-padding:0.625rem;--ukg-button-toggle-right-padding:0.625rem}.sc-ukg-button-toggle-s>ukg-button:focus{z-index:1}.sc-ukg-button-toggle-s>ukg-button:first-of-type{--ukg-button-toggle-left-padding:0.875rem;--ukg-button-toggle-right-padding:0.625rem}.sc-ukg-button-toggle-s>ukg-button:last-of-type{--ukg-border-right:1px solid;--ukg-button-toggle-left-padding:0.625rem;--ukg-button-toggle-right-padding:0.875rem}"}}]);