"use strict";(self.webpackChunktenantUI=self.webpackChunktenantUI||[]).push([[1210],{1210:(h,a,s)=>{s.r(a),s.d(a,{ukg_th:()=>n});var i=s(5861),r=s(337),e=s(4476),c=s(6191);s(267);const n=class{constructor(t){(0,r.r)(this,t),this.ukgDataTableSortChanged=(0,r.c)(this,"ukgDataTableSortChanged",7),this.ukgDataTableCheckboxChanged=(0,r.c)(this,"ukgDataTableCheckboxChanged",7),this.attrs={scope:null,headers:null},this.stickyLeftClass="ukg-is-sticky--left",this.stickyRightClass="ukg-is-sticky--right",this.sortableHeaders=[],this.type="default",this.opens=null,this.sortable=!1,this.initialSortDirection="none",this.sticky=!1,this.align="left",this.visible=!0,this.sortDirection=this.initialSortDirection}onSortDirectionChanged(){this.sortDirection=this.initialSortDirection}setParentCheckbox(t){var o=this;return(0,i.Z)(function*(){o.checkboxParent.checked=t})()}setSortDirection(t="none"){var o=this;return(0,i.Z)(function*(){o.sortDirection=t})()}componentWillRender(){this.attrs=(0,e.b)(this.attrs,this.el),null===this.attrs.scope&&(this.attrs.scope="col");const t=this.el.parentElement;"TH"===t?.tagName.toUpperCase()&&t.classList.add("ukg-no-padding")}componentWillLoad(){"parent-checkbox-menu"===this.type&&this.opens&&(this.menu=this.el.querySelector(`#${this.opens}`))}componentDidLoad(){this.sortableHeaders=[];let t=this.el.parentNode.firstChild,o=0;for(;t;)(0,c.n)(t)&&(0,c.d)(t,"ukg-th")&&t.sortable&&(t===this.el&&(this.currentColumnIndex=o),o++,this.sortableHeaders.push(t)),t=t.nextSibling}preventScrollOnSpace(t){t.keyCode===e.K.SPACE&&t.preventDefault()}handleOnClick(){this.sortable&&(this.setSortedColumn(),this.ukgDataTableSortChanged.emit({key:this.sortKey?this.sortKey:this.el.innerText,isAsc:"none"===this.sortDirection?"none":"asc"===this.sortDirection}))}handleKeyDown(t){if(this.sortable){if(t.keyCode===e.K.SPACE||t.keyCode===e.K.ENTER)return void this.setSortedColumn();t.keyCode===e.K.TAB&&this.el.classList.remove("ukg-sort-focus"),(t.keyCode===e.K.LEFT||t.keyCode===e.K.RIGHT)&&(this.el.classList.remove("ukg-sort-focus"),t.preventDefault(),this.navigateSortableHeaders(t.keyCode===e.K.RIGHT?"right":"left"))}}setSortedColumn(){this.sortDirection="none"===this.sortDirection?"asc":"asc"===this.sortDirection?"desc":"none",this.sortableHeaders.forEach(t=>{t!==this.el&&t.setSortDirection("none")})}navigateSortableHeaders(t){"left"===t&&this.currentColumnIndex>0?this.sortableHeaders[this.currentColumnIndex-1].focus():"left"!==t||0!==this.currentColumnIndex?"right"===t&&this.currentColumnIndex<this.sortableHeaders.length-1?this.sortableHeaders[this.currentColumnIndex+1].focus():"right"!==t||this.currentColumnIndex!==this.sortableHeaders.length-1||this.sortableHeaders[0].focus():this.sortableHeaders[this.sortableHeaders.length-1].focus()}handleKeyUp(){this.el.classList.add("ukg-sort-focus")}handleMouseDown(){this.el.classList.remove("ukg-sort-focus")}setAriaSort(){return"asc"===this.sortDirection?"ascending":"desc"===this.sortDirection?"descending":"none"}setSortArrow(){return"asc"===this.sortDirection?(0,r.h)("ukg-icon",{class:"column-icon",customSize:.75,icon:"go-up"}):"desc"===this.sortDirection?(0,r.h)("ukg-icon",{class:"column-icon",customSize:.75,icon:"go-down"}):""}renderHeader(){switch(this.type){case"parent-checkbox":return this.renderParentCheckbox();case"parent-checkbox-menu":return this.renderParentCheckboxWithMenu();case"default":return this.renderDefaultHeader()}}renderParentCheckbox(){return(0,r.h)("ukg-button",{class:"ukg-data-table-checkbox-button",role:"checkbox",iconOnly:!0,onKeyDown:t=>this.preventScrollOnSpace(t)},(0,r.h)("ukg-checkbox-icon",{id:`ukg-table-checkbox-parent-${this.el.id?this.el.id:"id"}`,ref:t=>{this.checkboxParent=t},onUkgCheckboxChanged:()=>this.ukgDataTableCheckboxChanged.emit(),slot:"icon-only",value:"parent",tabIndex:-1}))}renderParentCheckboxWithMenu(){if(!this.menu)throw new Error("Ukg-th: A ukg-menu must inside the ukg-th component to use the 'parent-checkbox-menu' type");return(0,r.h)("ukg-button",{class:"ukg-data-table-checkbox-button",onUkgMenuTrigger:o=>this.menu.present(o),emphasis:"low",role:"checkbox",childIcon:"menu-caret-down",onKeyDown:o=>this.preventScrollOnSpace(o)},(0,r.h)("ukg-checkbox-icon",{id:`ukg-table-checkbox-parent-${this.el.id?this.el.id:"id"}`,ref:o=>{this.checkboxParent=o},onUkgCheckboxChanged:()=>this.ukgDataTableCheckboxChanged.emit(),slot:"icon-only",value:"parent",tabIndex:-1,parent:!0,stopEmission:!0}))}renderDefaultHeader(){const t="asc"===this.sortDirection||"desc"===this.sortDirection;return(0,r.h)("div",{class:`column-container align-${this.align}`},"left"===this.align?(0,r.h)("slot",null):null,t?(0,r.h)("div",{class:"icon-container"},"center"!==this.align?this.setSortArrow():null):null,"left"!==this.align?(0,r.h)("slot",null):null,t&&"center"===this.align?(0,r.h)("div",{class:"icon-container"},this.setSortArrow()):null)}render(){return(0,r.h)(r.a,Object.assign({class:{"ukg-table-column-checkbox ukg-toolbar":"parent-checkbox"===this.type||"parent-checkbox-menu"===this.type,"ukg-table-column-avatar-header":"empty"===this.type,"data-cell":!0,"ukg-sort":this.sortable,"ukg-is-sticky":"left"===this.sticky||"right"===this.sticky,"ukg-is-sticky--left":"left"===this.sticky,"ukg-is-sticky--right":"right"===this.sticky},onClick:()=>{this.handleOnClick()},onMouseDown:()=>{this.handleMouseDown()},onKeyDown:t=>{this.handleKeyDown(t)},onKeyUp:()=>{this.handleKeyUp()},tabIndex:this.sortable?0:-1,"aria-sort":this.sortable?this.setAriaSort():null},this.attrs,{role:"columnheader"}),this.renderHeader())}get el(){return(0,r.g)(this)}static get watchers(){return{initialSortDirection:["onSortDirectionChanged"]}}};n.style='.ukg-color-brand.sc-ukg-th-h{--ukg-color-base:var(--ukg-color-brand, #005151);--ukg-color-base-rgb:var(--ukg-color-brand-rgb, 0, 81, 81);--ukg-color-contrast:var(--ukg-color-brand-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-brand-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-brand-shade, #004747);--ukg-color-tint:var(--ukg-color-brand-tint, #1a6262)}.ukg-color-action.sc-ukg-th-h{--ukg-color-base:var(--ukg-color-action, #0176B2);--ukg-color-base-rgb:var(--ukg-color-action-rgb, 1, 118, 178);--ukg-color-contrast:var(--ukg-color-action-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-action-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-action-shade, #01689d);--ukg-color-tint:var(--ukg-color-action-tint, #1a84ba)}.ukg-color-important.sc-ukg-th-h{--ukg-color-base:var(--ukg-color-important, #DC0C22);--ukg-color-base-rgb:var(--ukg-color-important-rgb, 220, 12, 34);--ukg-color-contrast:var(--ukg-color-important-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-important-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-important-shade, #c20b1e);--ukg-color-tint:var(--ukg-color-important-tint, #e02438)}.ukg-color-medium.sc-ukg-th-h{--ukg-color-base:var(--ukg-color-medium, #F5F5F5);--ukg-color-base-rgb:var(--ukg-color-medium-rgb, 245, 245, 245);--ukg-color-contrast:var(--ukg-color-medium-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-medium-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-medium-shade, #d8d8d8);--ukg-color-tint:var(--ukg-color-medium-tint, #f6f6f6)}.ukg-color-success.sc-ukg-th-h{--ukg-color-base:var(--ukg-color-success, #008060);--ukg-color-base-rgb:var(--ukg-color-success-rgb, 0, 128, 96);--ukg-color-contrast:var(--ukg-color-success-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-success-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-success-shade, #007154);--ukg-color-tint:var(--ukg-color-success-tint, #1a8d70)}.ukg-color-warning.sc-ukg-th-h{--ukg-color-base:var(--ukg-color-warning, #CC7300);--ukg-color-base-rgb:var(--ukg-color-warning-rgb, 204, 115, 0);--ukg-color-contrast:var(--ukg-color-warning-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-warning-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-warning-shade, #b46500);--ukg-color-tint:var(--ukg-color-warning-tint, #d1811a)}*.sc-ukg-th::-webkit-scrollbar{width:16px;height:16px}*.sc-ukg-th::-webkit-scrollbar-thumb{border:5px solid rgba(0, 0, 0, 0);background-clip:padding-box;border-radius:50em;background-color:rgba(0, 0, 0, 0.42)}*.sc-ukg-th::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(0, 0, 0, 0.57)}*.sc-ukg-th::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(0, 0, 0, 0.72)}*.sc-ukg-th::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(0, 0, 0, 0.57)}*.sc-ukg-th::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-th::-webkit-scrollbar-thumb{background-color:rgba(0, 0, 0, 0)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-th:hover::-webkit-scrollbar-thumb{background-color:rgba(0, 0, 0, 0.42)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-th:hover::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(0, 0, 0, 0.57)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-th:hover::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-th:hover::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(0, 0, 0, 0.57)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-th:hover::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarDark.sc-ukg-th::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.43)}*.ukg_sys_helper_scrollbarDark.sc-ukg-th::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.sc-ukg-th::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.sc-ukg-th::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.sc-ukg-th::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-th::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-th:hover::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.43)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-th:hover::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-th:hover::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-th:hover::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-th:hover::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(255, 255, 255, 0.73)}.sc-ukg-th-h{display:table-cell;vertical-align:middle;text-align:left;outline:none;height:3.5rem;padding:0 1rem;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1rem;font-family:"Noto Sans Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;color:var(--ukg_sys_color_text_highEmphasis_onLight, rgba(0, 0, 0, 0.87));font-weight:500;font-size:0.875rem}.ukg-sort.sc-ukg-th-h{outline:none;position:relative}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){.ukg-sort.sc-ukg-th-h:hover{line-height:1rem;font-family:"Noto Sans Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;color:var(--ukg_sys_color_text_highEmphasis_onLight, rgba(0, 0, 0, 0.87));font-weight:500;font-size:0.875rem}}@media not screen and (pointer: coarse){.ukg-sort.sc-ukg-th-h:hover{line-height:1rem;font-family:"Noto Sans Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;color:var(--ukg_sys_color_text_highEmphasis_onLight, rgba(0, 0, 0, 0.87));font-weight:500;font-size:0.875rem}}@media not all and (hover: none){.ukg-sort.sc-ukg-th-h:hover>div.sc-ukg-th:before{top:0.5rem;left:0.12rem;position:absolute;display:block;background-color:var(--ukg_sys_color_hover_onLight, rgba(0, 0, 0, 0.05));width:calc(100% - 0.125rem - 0.125rem);height:2.5rem;border-radius:0.375rem;content:"";cursor:pointer;z-index:2}}.ukg-sort.ukg-sort-focus.focus-visible.sc-ukg-th-h::after{height:calc(100% - 1.375rem);content:"";position:absolute;top:0.5rem;left:0.125rem;right:0.125rem;bottom:0;border:3px solid var(--ukg_sys_color_focusBorder_onLight, #3C96C3);border-radius:0.375rem}.ukg-is-sticky--left.sc-ukg-th-h{position:-webkit-sticky;position:sticky;background-color:white;background-clip:padding-box;z-index:calc(2 + 1)}.ukg-is-sticky--left.sc-ukg-th-h .ukg-data-table-checkbox-button.sc-ukg-th,.sc-ukg-th-h.ukg-is-sticky--left.sc-ukg-th-s>ukg-button{z-index:calc(2 + 3)}.ukg-is-sticky--left.ukg-is-last-sticky.sc-ukg-th-h{-webkit-box-shadow:inset -1px 0px 0px 0px var(--ukg_sys_color_icon_disabled_onLight, rgba(0, 0, 0, 0.2));box-shadow:inset -1px 0px 0px 0px var(--ukg_sys_color_icon_disabled_onLight, rgba(0, 0, 0, 0.2))}.ukg-is-sticky--left.ukg-is-last-sticky.sc-ukg-th-h:before{content:"";top:0;position:absolute;width:0.5rem;height:100%;right:-0.5rem;background:-webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.06)), to(rgba(0, 0, 0, 0)));background:linear-gradient(90deg, rgba(0, 0, 0, 0.06) 0%, rgba(0, 0, 0, 0) 100%)}.ukg-is-sticky--right.sc-ukg-th-h{position:-webkit-sticky;position:sticky;background-color:white;background-clip:padding-box;z-index:calc(2 + 1)}.ukg-is-sticky--right.sc-ukg-th-h .ukg-data-table-checkbox-button.sc-ukg-th,.sc-ukg-th-h.ukg-is-sticky--right.sc-ukg-th-s>ukg-button{z-index:calc(2 + 3)}.ukg-is-sticky--right.ukg-is-last-sticky.sc-ukg-th-h{-webkit-box-shadow:inset 1px 0px 0px 0px var(--ukg_sys_color_icon_disabled_onLight, rgba(0, 0, 0, 0.2));box-shadow:inset 1px 0px 0px 0px var(--ukg_sys_color_icon_disabled_onLight, rgba(0, 0, 0, 0.2))}.ukg-is-sticky--right.ukg-is-last-sticky.sc-ukg-th-h:before{content:"";top:0;position:absolute;width:0.5rem;height:100%;left:-0.5rem;background:rgb(0, 0, 0);background:-webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.06)));background:linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.06) 100%)}.ukg-data-table-checkbox-button.sc-ukg-th{margin:0.25rem 0.5rem}.checkbox-selector-parent.sc-ukg-th{margin-left:-0.5rem}.column-container.sc-ukg-th{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.column-icon.sc-ukg-th{display:-ms-flexbox;display:flex;pointer-events:none}.icon-container.sc-ukg-th{width:0.75rem;height:0.75rem;margin-left:1px;color:var(--ukg_sys_color_text_lowEmphasis_onLight, rgba(0, 0, 0, 0.6))}.ukg-sentence-case.sc-ukg-th{text-transform:capitalize}.align-center.sc-ukg-th{-ms-flex-pack:center;justify-content:center}.align-right.sc-ukg-th{-ms-flex-pack:end;justify-content:flex-end}.ukg-column-highlight.sc-ukg-th-h .sc-ukg-th::after{content:"";position:absolute;background-color:var(--ukg_sys_color_tableCellHighlight_midEmphasis, rgba(0, 0, 0, 0.03));left:0;top:-5000px;height:10000px;width:100%;z-index:1}'}}]);