"use strict";(self.webpackChunktenantUI=self.webpackChunktenantUI||[]).push([[9104],{9104:(h,u,r)=>{r.r(u),r.d(u,{ukg_accordion_panel:()=>k});var i=r(5861),a=r(337),c=r(4476);r(267);const k=class{constructor(n){(0,a.r)(this,n),this.ukgAccordionPanelTriggered=(0,a.c)(this,"ukgAccordionPanelTriggered",7),this.ukgAccordionPanelWillOpen=(0,a.c)(this,"ukgAccordionPanelWillOpen",7),this.ukgAccordionPanelDidOpen=(0,a.c)(this,"ukgAccordionPanelDidOpen",7),this.ukgAccordionPanelWillClose=(0,a.c)(this,"ukgAccordionPanelWillClose",7),this.ukgAccordionPanelDidClose=(0,a.c)(this,"ukgAccordionPanelDidClose",7),this.ukgAccordionPanelWillLoad=(0,a.c)(this,"ukgAccordionPanelWillLoad",7),this.expansionPanelID=(0,c.h)("expansion-panel"),this.expansionButtonID=(0,c.h)("expansion-panel-trigger"),this.attrs={role:"group"},this.disabled=!1,this.active=!1,this.noContentPadding=!1,this.headingLevel="2",this.headingStyle="regular",this.leadingIcon=!1,this.fullWidth=!1,this.grayBg=!1,this.removeDivider=!0,this.mousedown=!1,this.handleClick=()=>{this.el.classList.remove("ukg-accordion-panel-has-focus"),this.disabled||this.togglePanel()},this.handleKeyDown=o=>{["Enter"," "].includes(o.key)&&(o.preventDefault(),this.disabled||this.togglePanel()),["ArrowUp","ArrowDown"].includes(o.key)&&(o.preventDefault(),this.handleArrows(o)),["Home","End"].includes(o.key)&&(o.preventDefault(),this.handleHomeEnd(o))},this.handleArrows=({key:o})=>{"ArrowDown"===o&&this.focusNextPanel(),"ArrowUp"===o&&this.focusPreviousPanel()},this.handleHomeEnd=({key:o})=>{"Home"===o&&this.focusFirstPanel(),"End"===o&&this.focusLastPanel()},this.focusNextPanel=()=>{const o=this.el.nextElementSibling;o?this.getNativeButton(o)?.focus():this.focusFirstPanel()},this.focusPreviousPanel=()=>{const o=this.el.previousElementSibling;o?this.getNativeButton(o)?.focus():this.focusLastPanel()},this.focusFirstPanel=()=>{const o=this.el.closest("ukg-accordion").firstElementChild;this.getNativeButton(o)?.focus()},this.focusLastPanel=()=>{const o=this.el.closest("ukg-accordion").lastElementChild;this.getNativeButton(o)?.focus()},this.handleHoverEvent=o=>{o.stopPropagation(),!this.disabled&&("mouseover"===o.type?this.el.classList.add("ukg-accordion-panel-has-hover"):this.el.classList.remove("ukg-accordion-panel-has-hover"))},this.handleFocusEvent=o=>{o.stopPropagation(),!this.disabled&&("focus"!==o.type||this.mousedown?this.el.classList.remove("ukg-accordion-panel-has-focus"):this.el.classList.add("ukg-accordion-panel-has-focus"))},this.onExpansionContentCollapsing=o=>{o.stopPropagation(),this.arrowIcon.classList.remove("ukg-icon-accordion-expanded"),this.arrowIcon.classList.add("ukg-icon-accordion-collapsed")},this.onExpansionContentExpanding=o=>{o.stopPropagation(),this.arrowIcon.classList.remove("ukg-icon-accordion-collapsed"),this.arrowIcon.classList.add("ukg-icon-accordion-expanded")},this.onExpansionContentTriggered=()=>{this.active?this.ukgAccordionPanelDidOpen.emit():this.ukgAccordionPanelDidClose.emit()}}mouseDownHandler(){this.mousedown=!0}mouseUpHandler(){this.mousedown=!1}setState(n){var o=this;return(0,i.Z)(function*(){const{leadingIcon:e,fullWidth:t,grayBg:s,removeDivider:l,headingLevel:g,headingStyle:d}=n;o.leadingIcon=e??o.leadingIcon,o.fullWidth=t??o.fullWidth,o.headingLevel=g??o.headingLevel,o.headingStyle=d??o.headingStyle,o.grayBg=s??o.grayBg,o.removeDivider=l??o.removeDivider})()}togglePanel(){var n=this;return(0,i.Z)(function*(){n.active=!n.active,n.emitTrigger()})()}expandPanel(){var n=this;return(0,i.Z)(function*(){(yield n.expansionContent.isOpen())||(n.active=!0,n.emitTrigger())})()}collapsePanel(){var n=this;return(0,i.Z)(function*(){(yield n.expansionContent.isOpen())&&(n.active=!1,n.emitTrigger())})()}onExpansionContentWillTrigger(n){const o=!n.detail.open;this.buttonEl.setAttribute("aria-expanded",o.toString()),o?this.ukgAccordionPanelWillOpen.emit():this.ukgAccordionPanelWillClose.emit()}componentWillLoad(){this.ukgAccordionPanelWillLoad.emit()}componentWillRender(){this.attrs=(0,c.b)(this.attrs,this.el,{removeFromElement:!0,camelCaseAttrs:!0})}emitTrigger(){this.ukgAccordionPanelTriggered.emit({isExpanded:this.active})}getNativeButton(n){return n.querySelector("button")}renderCustomHeading(){return(0,a.h)(`h${this.headingLevel}`,{class:{"ukg-accordion-heading-wrapper":!0,[`ukg-accordion-heading-${this.headingStyle}`]:!0,"ukg-accordion-icon-left":this.leadingIcon,[`${this.headingStyle}`]:"regular"!==this.headingStyle&&"small"!==this.headingStyle}},(0,a.h)("button",{class:{"ukg-accordion-panel-button":!0,"ukg-accordion-panel-button-padding":this.fullWidth,"ukg-accordion-panel-button-disabled":this.disabled},type:"button",ref:o=>{this.buttonEl=o},onClick:this.handleClick,onKeyDown:this.handleKeyDown,onFocus:this.handleFocusEvent,onBlur:this.handleFocusEvent,onMouseOver:this.handleHoverEvent,onMouseOut:this.handleHoverEvent,"aria-disabled":this.disabled.toString(),"aria-expanded":this.active.toString(),"aria-controls":this.expansionPanelID,tabindex:this.disabled?"-1":"0",id:this.expansionButtonID},(0,a.h)("span",{class:{"ukg-accordion-panel-header-text":!0,"ukg-accordino-panel-header-with-prop":!!this.header}},(0,a.h)("slot",{name:"header"},this.header)),(0,a.h)("ukg-icon",{ref:o=>this.arrowIcon=o,class:{"ukg-accordion-panel-header-icon":!0,"ukg-accordion-panel-header-icon-disabled":this.disabled},name:this.leadingIcon?"paginate-right":"expand-more"})))}render(){return(0,a.h)(a.a,{class:{"ukg-accordion-panel":!0,"ukg-accordion-panel-full-width":this.fullWidth,"ukg-accordion-panel-gray-bg":this.grayBg,"ukg-accordion-panel-disabled":this.disabled,"ukg-accordion-panel-no-padding":this.noContentPadding}},(0,a.h)("ukg-expansion-panel",{id:this.expansionPanelID,expanded:this.active,class:{"ukg-expansion-panel-gray-bg":this.grayBg}},(0,a.h)("div",{class:{"ukg-accordion-panel-container":!0,"ukg-accordion-panel-container-icon-left":this.leadingIcon},ref:n=>this.panelContainer=n},this.renderCustomHeading(),(0,a.h)("div",{class:{"ukg-accordion-header-secondary":!0,"ukg-accordion-header-secondary-icon-right":!this.leadingIcon}},(0,a.h)("slot",{name:"secondary"}))),(0,a.h)("ukg-expansion-content",{ref:n=>this.expansionContent=n,onUkgExpansionContentIsCollapsing:this.onExpansionContentCollapsing,onUkgExpansionContentIsExpanding:this.onExpansionContentExpanding,onUkgExpansionContentWasTriggered:this.onExpansionContentTriggered},(0,a.h)("div",Object.assign({class:{"ukg-accordion-expansion-content":!0,"ukg-accordion-expansion-content-icon-left":this.leadingIcon,"ukg-accordion-expansion-content-full-width":this.fullWidth,"ukg-accordion-expansion-content-gray-bg":this.grayBg}},{role:this.attrs.role},{"aria-labelledby":"region"===this.attrs.role?this.expansionButtonID:null}),(0,a.h)("slot",null))),this.removeDivider||(0,a.h)("ukg-divider",{hasMargin:!1})))}get el(){return(0,a.g)(this)}};k.style='.ukg-color-brand.sc-ukg-accordion-panel-h{--ukg-color-base:var(--ukg-color-brand, #005151);--ukg-color-base-rgb:var(--ukg-color-brand-rgb, 0, 81, 81);--ukg-color-contrast:var(--ukg-color-brand-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-brand-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-brand-shade, #004747);--ukg-color-tint:var(--ukg-color-brand-tint, #1a6262)}.ukg-color-action.sc-ukg-accordion-panel-h{--ukg-color-base:var(--ukg-color-action, #0176B2);--ukg-color-base-rgb:var(--ukg-color-action-rgb, 1, 118, 178);--ukg-color-contrast:var(--ukg-color-action-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-action-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-action-shade, #01689d);--ukg-color-tint:var(--ukg-color-action-tint, #1a84ba)}.ukg-color-important.sc-ukg-accordion-panel-h{--ukg-color-base:var(--ukg-color-important, #DC0C22);--ukg-color-base-rgb:var(--ukg-color-important-rgb, 220, 12, 34);--ukg-color-contrast:var(--ukg-color-important-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-important-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-important-shade, #c20b1e);--ukg-color-tint:var(--ukg-color-important-tint, #e02438)}.ukg-color-medium.sc-ukg-accordion-panel-h{--ukg-color-base:var(--ukg-color-medium, #F5F5F5);--ukg-color-base-rgb:var(--ukg-color-medium-rgb, 245, 245, 245);--ukg-color-contrast:var(--ukg-color-medium-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-medium-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-medium-shade, #d8d8d8);--ukg-color-tint:var(--ukg-color-medium-tint, #f6f6f6)}.ukg-color-success.sc-ukg-accordion-panel-h{--ukg-color-base:var(--ukg-color-success, #008060);--ukg-color-base-rgb:var(--ukg-color-success-rgb, 0, 128, 96);--ukg-color-contrast:var(--ukg-color-success-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-success-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-success-shade, #007154);--ukg-color-tint:var(--ukg-color-success-tint, #1a8d70)}.ukg-color-warning.sc-ukg-accordion-panel-h{--ukg-color-base:var(--ukg-color-warning, #CC7300);--ukg-color-base-rgb:var(--ukg-color-warning-rgb, 204, 115, 0);--ukg-color-contrast:var(--ukg-color-warning-contrast, #fff);--ukg-color-contrast-rgb:var(--ukg-color-warning-contrast-rgb, 255, 255, 255);--ukg-color-shade:var(--ukg-color-warning-shade, #b46500);--ukg-color-tint:var(--ukg-color-warning-tint, #d1811a)}*.sc-ukg-accordion-panel::-webkit-scrollbar{width:16px;height:16px}*.sc-ukg-accordion-panel::-webkit-scrollbar-thumb{border:5px solid rgba(0, 0, 0, 0);background-clip:padding-box;border-radius:50em;background-color:rgba(0, 0, 0, 0.42)}*.sc-ukg-accordion-panel::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(0, 0, 0, 0.57)}*.sc-ukg-accordion-panel::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(0, 0, 0, 0.72)}*.sc-ukg-accordion-panel::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(0, 0, 0, 0.57)}*.sc-ukg-accordion-panel::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-accordion-panel::-webkit-scrollbar-thumb{background-color:rgba(0, 0, 0, 0)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-accordion-panel:hover::-webkit-scrollbar-thumb{background-color:rgba(0, 0, 0, 0.42)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-accordion-panel:hover::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(0, 0, 0, 0.57)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-accordion-panel:hover::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-accordion-panel:hover::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(0, 0, 0, 0.57)}*.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-accordion-panel:hover::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(0, 0, 0, 0.72)}*.ukg_sys_helper_scrollbarDark.sc-ukg-accordion-panel::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.43)}*.ukg_sys_helper_scrollbarDark.sc-ukg-accordion-panel::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.sc-ukg-accordion-panel::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.sc-ukg-accordion-panel::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.sc-ukg-accordion-panel::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-accordion-panel::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-accordion-panel:hover::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.43)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-accordion-panel:hover::-webkit-scrollbar-thumb:vertical:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-accordion-panel:hover::-webkit-scrollbar-thumb:vertical:active{background-color:rgba(255, 255, 255, 0.73)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-accordion-panel:hover::-webkit-scrollbar-thumb:horizontal:hover{background-color:rgba(255, 255, 255, 0.58)}*.ukg_sys_helper_scrollbarDark.ukg_sys_helper_scrollbarShowOnHover.sc-ukg-accordion-panel:hover::-webkit-scrollbar-thumb:horizontal:active{background-color:rgba(255, 255, 255, 0.73)}.sc-ukg-accordion-panel-h{display:block}.ukg-accordion-panel.sc-ukg-accordion-panel-h>ukg-expansion-panel.sc-ukg-accordion-panel>div.ukg-accordion-panel-container.sc-ukg-accordion-panel{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;min-height:var(--ukg-accordion-panel-height, 2rem);padding-block:0.375rem;-webkit-margin-start:-0.5rem;margin-inline-start:-0.5rem;-webkit-margin-end:-0.5rem;margin-inline-end:-0.5rem;-webkit-padding-start:0.5rem;padding-inline-start:0.5rem;-webkit-padding-end:0.25rem;padding-inline-end:0.25rem;-webkit-box-sizing:content-box;box-sizing:content-box;border-radius:0.375rem}.ukg-expansion-panel-gray-bg.sc-ukg-accordion-panel{-webkit-margin-after:var(--ukg-accordion-gray-bg-margin, 0.5rem);margin-block-end:var(--ukg-accordion-gray-bg-margin, 0.5rem)}.ukg-accordion-panel-gray-bg.ukg-accordion-panel-full-width.sc-ukg-accordion-panel-h>ukg-expansion-panel.ukg-expansion-panel-gray-bg.sc-ukg-accordion-panel{-webkit-margin-after:var(--ukg-accordion-gray-bg-margin, 0);margin-block-end:var(--ukg-accordion-gray-bg-margin, 0)}.ukg-accordion-panel-gray-bg.sc-ukg-accordion-panel-h>ukg-expansion-panel.sc-ukg-accordion-panel>div.ukg-accordion-panel-container.sc-ukg-accordion-panel{background-color:var(--ukg_sys_color_surface_lightDarker, #F5F5F5);margin:0}.ukg-accordion-panel-has-hover.sc-ukg-accordion-panel-h>ukg-expansion-panel.sc-ukg-accordion-panel>div.ukg-accordion-panel-container.sc-ukg-accordion-panel{position:relative}.ukg-accordion-panel-has-hover.sc-ukg-accordion-panel-h>ukg-expansion-panel.sc-ukg-accordion-panel>div.ukg-accordion-panel-container.sc-ukg-accordion-panel::before{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border-radius:0.375rem;background-color:var(--ukg_sys_color_hover_onLight, rgba(0, 0, 0, 0.05));content:""}.ukg-accordion-panel-has-hover.ukg-accordion-panel-full-width.sc-ukg-accordion-panel-h>ukg-expansion-panel.sc-ukg-accordion-panel>div.ukg-accordion-panel-container.sc-ukg-accordion-panel::before{border-radius:0}.ukg-accordion-panel-button.sc-ukg-accordion-panel{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background:transparent;border:none;padding:0;cursor:pointer;text-align:start;font-weight:inherit;font-size:inherit;font-family:inherit;color:inherit}.ukg-accordion-panel-button.sc-ukg-accordion-panel:focus{outline:none}.ukg-accordion-panel-button.sc-ukg-accordion-panel .ukg-icon-accordion-collapsed.sc-ukg-accordion-panel{-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:-webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;transition:-webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms}.ukg-accordion-panel-button-disabled.sc-ukg-accordion-panel{cursor:unset}.ukg-accordion-heading-wrapper.sc-ukg-accordion-panel:not(.ukg-accordion-icon-left) .ukg-accordion-panel-button.sc-ukg-accordion-panel .ukg-icon-accordion-expanded.sc-ukg-accordion-panel{-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:-webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;transition:-webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms}.ukg-accordion-icon-left.sc-ukg-accordion-panel{min-width:0}.ukg-accordion-icon-left.sc-ukg-accordion-panel .ukg-accordion-panel-header-icon.sc-ukg-accordion-panel{-ms-flex-order:-1;order:-1;-webkit-margin-end:0;margin-inline-end:0;-webkit-margin-start:-0.375rem;margin-inline-start:-0.375rem}.ukg-accordion-icon-left.sc-ukg-accordion-panel .ukg-accordion-panel-button.sc-ukg-accordion-panel .ukg-icon-accordion-expanded.sc-ukg-accordion-panel{-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:-webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;transition:-webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms}.ukg-accordion-heading-regular.sc-ukg-accordion-panel{line-height:1.5rem;font-family:"Volte Rounded", "Noto Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;color:var(--ukg_sys_color_text_highEmphasis_onLight, rgba(0, 0, 0, 0.87));margin-bottom:0px;margin-top:0px;font-weight:600;font-size:1.25rem}.ukg-accordion-heading-small.sc-ukg-accordion-panel{line-height:1.5rem;font-family:"Noto Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;color:var(--ukg_sys_color_text_highEmphasis_onLight, rgba(0, 0, 0, 0.87));margin-bottom:1.5rem;margin-top:1rem;font-weight:400;max-width:37.5rem;font-size:1rem;font-weight:bold;max-width:none}.ukg-accordion-heading-wrapper.sc-ukg-accordion-panel{width:100%;margin:0}.ukg-accordion-panel-header-text.sc-ukg-accordion-panel{-ms-flex-positive:1;flex-grow:1;-webkit-margin-end:0.25rem;margin-inline-end:0.25rem}.ukg-accordion-panel-header-text.ukg-accordino-panel-header-with-prop.sc-ukg-accordion-panel{overflow:hidden;text-overflow:ellipsis}.ukg-accordion-panel-header-icon.sc-ukg-accordion-panel{-webkit-margin-end:-0.125rem;margin-inline-end:-0.125rem}.ukg-accordion-panel-header-icon-disabled.sc-ukg-accordion-panel{opacity:0}.ukg-accordion-panel-full-width.sc-ukg-accordion-panel-h>ukg-expansion-panel.sc-ukg-accordion-panel>div.ukg-accordion-panel-container.sc-ukg-accordion-panel,.ukg-accordion-panel-gray-bg.sc-ukg-accordion-panel-h>ukg-expansion-panel.sc-ukg-accordion-panel>div.ukg-accordion-panel-container.sc-ukg-accordion-panel{-webkit-padding-start:1rem;padding-inline-start:1rem;-webkit-padding-end:0.625rem;padding-inline-end:0.625rem}.ukg-accordion-panel-full-width.sc-ukg-accordion-panel-h>ukg-expansion-panel.sc-ukg-accordion-panel>div.ukg-accordion-panel-container.ukg-accordion-panel-container-icon-left.sc-ukg-accordion-panel,.ukg-accordion-panel-gray-bg.sc-ukg-accordion-panel-h>ukg-expansion-panel.sc-ukg-accordion-panel>div.ukg-accordion-panel-container.ukg-accordion-panel-container-icon-left.sc-ukg-accordion-panel{-webkit-padding-start:0.5rem;padding-inline-start:0.5rem;-webkit-padding-end:1rem;padding-inline-end:1rem}.ukg-accordion-panel-full-width.sc-ukg-accordion-panel-h>ukg-expansion-panel.sc-ukg-accordion-panel>div.ukg-accordion-panel-container.ukg-accordion-panel-container-icon-left.sc-ukg-accordion-panel div.ukg-accordion-header-secondary.sc-ukg-accordion-panel,.ukg-accordion-panel-gray-bg.sc-ukg-accordion-panel-h>ukg-expansion-panel.sc-ukg-accordion-panel>div.ukg-accordion-panel-container.ukg-accordion-panel-container-icon-left.sc-ukg-accordion-panel div.ukg-accordion-header-secondary.sc-ukg-accordion-panel{-webkit-margin-end:-0.375rem;margin-inline-end:-0.375rem}.ukg-accordion-panel-full-width.sc-ukg-accordion-panel-h>ukg-expansion-panel.sc-ukg-accordion-panel>div.ukg-accordion-panel-container.sc-ukg-accordion-panel{margin:0;border-radius:0}.ukg-accordion-panel-has-focus.sc-ukg-accordion-panel-h>ukg-expansion-panel.sc-ukg-accordion-panel>div.ukg-accordion-panel-container.sc-ukg-accordion-panel{outline:none;-webkit-box-shadow:inset 0px 0px 0px 3px var(--ukg_sys_color_focusBorder_onLight, #3C96C3);box-shadow:inset 0px 0px 0px 3px var(--ukg_sys_color_focusBorder_onLight, #3C96C3);border-radius:0.375rem}.sc-ukg-accordion-panel-h:not(.ukg-accordion-panel-no-padding) .ukg-accordion-expansion-content.sc-ukg-accordion-panel{-webkit-padding-before:0.5rem;padding-block-start:0.5rem;-webkit-padding-after:1rem;padding-block-end:1rem}.sc-ukg-accordion-panel-h:not(.ukg-accordion-panel-no-padding) .ukg-accordion-expansion-content-icon-left.sc-ukg-accordion-panel{-webkit-padding-start:1.125rem;padding-inline-start:1.125rem;-webkit-padding-end:1rem;padding-inline-end:1rem}.sc-ukg-accordion-panel-h:not(.ukg-accordion-panel-no-padding) .ukg-accordion-expansion-content-full-width.sc-ukg-accordion-panel,.sc-ukg-accordion-panel-h:not(.ukg-accordion-panel-no-padding) .ukg-accordion-expansion-content-gray-bg.sc-ukg-accordion-panel{-webkit-padding-start:1rem;padding-inline-start:1rem}.sc-ukg-accordion-panel-h:not(.ukg-accordion-panel-no-padding) .ukg-accordion-expansion-content-full-width.ukg-accordion-expansion-content-icon-left.sc-ukg-accordion-panel,.sc-ukg-accordion-panel-h:not(.ukg-accordion-panel-no-padding) .ukg-accordion-expansion-content-gray-bg.ukg-accordion-expansion-content-icon-left.sc-ukg-accordion-panel{-webkit-padding-start:2rem;padding-inline-start:2rem}.ukg-accordion-header-secondary.sc-ukg-accordion-panel{display:-ms-flexbox;display:flex;-webkit-margin-start:0.25rem;margin-inline-start:0.25rem;-webkit-margin-end:-0.125rem;margin-inline-end:-0.125rem;line-height:1.375rem;font-family:"Noto Sans Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;color:var(--ukg_sys_color_text_highEmphasis_onLight, rgba(0, 0, 0, 0.87));font-weight:400;font-size:1rem}.ukg-accordion-header-secondary-icon-right.sc-ukg-accordion-panel{display:none}'}}]);