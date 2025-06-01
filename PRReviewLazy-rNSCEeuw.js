const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./MarkdownRenderer-DrxBpsAM.js","./index-Cyjut40K.js","./index-C2_64T8F.css","./MarkdownTextarea-CxH0XdsE.js","./MarkdownTextarea-Cby7Tvsi.css"])))=>i.map(i=>d[i]);
import{f as gt,r as E,j as M,a as Pe,u as se,b as ke,c as Qe,d as hn,B as Te,g as pt,e as Ve,h as Jn,P as oe,i as ie,k as Ze,l as yt,p as Xn,m as el,n as nl,o as ll,U as tl,q as al,s as il,t as ft,v as ht,w as sl,x as vt,y as kt,z as Ft,S as Ge,A as In,C as Fe,D as Re,M as rl,E as $,F as ye,G as vn,H as ae,_ as ol,I as d,L as Ie,J as K,K as V,N as he,T as Q,O as Ee,Q as xe,R as re,V as ge,W as ul,X as Ye,Y as Rt,Z as wt,$ as te,a0 as Z,a1 as pe,a2 as Ne,a3 as Ct,a4 as Je,a5 as le,a6 as We,a7 as kn,a8 as bt,a9 as qe,aa as Tt,ab as St,ac as dl,ad as Fn,ae as _t,af as Kt,ag as Rn,ah as cl,ai as Lt,aj as ml,ak as Pt,al as Et,am as ve,an as gl,ao as pl,ap as xt,aq as qt,ar as Mn,as as yl,at as Xe,au as At,av as fl,aw as dn,ax as hl,ay as It,az as vl,aA as Mt,aB as Dt,aC as Nt,aD as $t,aE as zt,aF as Ut}from"./index-Cyjut40K.js";function Ot(l,e,n){var a;return n?Array.from(((a=gt(n,e))==null?void 0:a.querySelectorAll(l))||[]).findIndex(t=>t===n):null}function Ht({timeout:l=2e3}={}){const[e,n]=E.useState(null),[a,t]=E.useState(!1),[i,r]=E.useState(null),s=h=>{window.clearTimeout(i),r(window.setTimeout(()=>t(!1),l)),t(h)};return{copy:h=>{"clipboard"in navigator?navigator.clipboard.writeText(h).then(()=>s(!0)).catch(y=>n(y)):n(new Error("useClipboard: navigator.clipboard is not supported"))},reset:()=>{t(!1),n(null),window.clearTimeout(i)},error:e,copied:a}}function kl({style:l,size:e=16,...n}){return M.jsx("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...l,width:Pe(e),height:Pe(e),display:"block"},...n,children:M.jsx("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}kl.displayName="@mantine/core/AccordionChevron";const Vt={timeout:1e3};function Fl(l){const{children:e,timeout:n,value:a,...t}=se("CopyButton",Vt,l),i=Ht({timeout:n}),r=()=>i.copy(a);return M.jsx(M.Fragment,{children:e({copy:r,copied:i.copied,...t})})}Fl.displayName="@mantine/core/CopyButton";var Rl={root:"m_3eebeb36",label:"m_9e365f20"};const Bt={orientation:"horizontal"},jt=hn((l,{color:e,variant:n,size:a})=>({root:{"--divider-color":e?Ve(e,l):void 0,"--divider-border-style":n,"--divider-size":pt(a,"divider-size")}})),wn=ke((l,e)=>{const n=se("Divider",Bt,l),{classNames:a,className:t,style:i,styles:r,unstyled:s,vars:m,color:k,orientation:h,label:y,labelPosition:c,mod:p,...w}=n,v=Qe({name:"Divider",classes:Rl,props:n,className:t,style:i,classNames:a,styles:r,unstyled:s,vars:m,varsResolver:jt});return M.jsx(Te,{ref:e,mod:[{orientation:h,"with-label":!!y},p],...v("root"),...w,role:"separator",children:y&&M.jsx(Te,{component:"span",mod:{position:c},...v("label"),children:y})})});wn.classes=Rl;wn.displayName="@mantine/core/Divider";const[Gt,we]=Jn("Menu component was not found in the tree");var Ce={dropdown:"m_dc9b7c9f",label:"m_9bfac126",divider:"m_efdf90cb",item:"m_99ac2aa1",itemLabel:"m_5476e0d3",itemSection:"m_8b75e504",chevron:"m_b85b0bed"};const Wt={},Cn=ke((l,e)=>{const{classNames:n,className:a,style:t,styles:i,vars:r,...s}=se("MenuDivider",Wt,l),m=we();return M.jsx(Te,{ref:e,...m.getStyles("divider",{className:a,style:t,styles:i,classNames:n}),...s})});Cn.classes=Ce;Cn.displayName="@mantine/core/MenuDivider";const Qt={},bn=ke((l,e)=>{const{classNames:n,className:a,style:t,styles:i,vars:r,onMouseEnter:s,onMouseLeave:m,onKeyDown:k,children:h,...y}=se("MenuDropdown",Qt,l),c=E.useRef(null),p=we(),w=ie(k,S=>{var u,o;(S.key==="ArrowUp"||S.key==="ArrowDown")&&(S.preventDefault(),(o=(u=c.current)==null?void 0:u.querySelectorAll("[data-menu-item]:not(:disabled)")[0])==null||o.focus())}),v=ie(s,()=>(p.trigger==="hover"||p.trigger==="click-hover")&&p.openDropdown()),R=ie(m,()=>(p.trigger==="hover"||p.trigger==="click-hover")&&p.closeDropdown());return M.jsxs(oe.Dropdown,{...y,onMouseEnter:v,onMouseLeave:R,role:"menu","aria-orientation":"vertical",ref:Ze(e,c),...p.getStyles("dropdown",{className:a,style:t,styles:i,classNames:n,withStaticClass:!1}),tabIndex:-1,"data-menu-dropdown":!0,onKeyDown:w,children:[p.withInitialFocusPlaceholder&&M.jsx("div",{tabIndex:-1,"data-autofocus":!0,"data-mantine-stop-propagation":!0,style:{outline:0}}),h]})});bn.classes=Ce;bn.displayName="@mantine/core/MenuDropdown";const[Zt,en]=yt(),Yt={},Tn=Xn((l,e)=>{const{classNames:n,className:a,style:t,styles:i,vars:r,color:s,closeMenuOnClick:m,leftSection:k,rightSection:h,children:y,disabled:c,"data-disabled":p,...w}=se("MenuItem",Yt,l),v=we(),R=en(),S=el(),{dir:u}=nl(),o=E.useRef(null),f=w,F=ie(f.onClick,()=>{p||(typeof m=="boolean"?m&&v.closeDropdownImmediately():v.closeOnItemClick&&v.closeDropdownImmediately())}),g=s?S.variantColorResolver({color:s,theme:S,variant:"light"}):void 0,b=s?ll({color:s,theme:S}):null,_=ie(f.onKeyDown,C=>{C.key==="ArrowLeft"&&R&&(R.close(),R.focusParentItem())});return M.jsxs(tl,{onMouseDown:C=>C.preventDefault(),...w,unstyled:v.unstyled,tabIndex:v.menuItemTabIndex,...v.getStyles("item",{className:a,style:t,styles:i,classNames:n}),ref:Ze(o,e),role:"menuitem",disabled:c,"data-menu-item":!0,"data-disabled":c||p||void 0,"data-mantine-stop-propagation":!0,onClick:F,onKeyDown:al({siblingSelector:"[data-menu-item]:not([data-disabled])",parentSelector:"[data-menu-dropdown]",activateOnFocus:!1,loop:v.loop,dir:u,orientation:"vertical",onKeyDown:_}),__vars:{"--menu-item-color":b!=null&&b.isThemeColor&&(b==null?void 0:b.shade)===void 0?`var(--mantine-color-${b.color}-6)`:g==null?void 0:g.color,"--menu-item-hover":g==null?void 0:g.hover},children:[k&&M.jsx("div",{...v.getStyles("itemSection",{styles:i,classNames:n}),"data-position":"left",children:k}),y&&M.jsx("div",{...v.getStyles("itemLabel",{styles:i,classNames:n}),children:y}),h&&M.jsx("div",{...v.getStyles("itemSection",{styles:i,classNames:n}),"data-position":"right",children:h})]})});Tn.classes=Ce;Tn.displayName="@mantine/core/MenuItem";const Jt={},Sn=ke((l,e)=>{const{classNames:n,className:a,style:t,styles:i,vars:r,...s}=se("MenuLabel",Jt,l),m=we();return M.jsx(Te,{ref:e,...m.getStyles("label",{className:a,style:t,styles:i,classNames:n}),...s})});Sn.classes=Ce;Sn.displayName="@mantine/core/MenuLabel";const Xt={},_n=ke((l,e)=>{const{classNames:n,className:a,style:t,styles:i,vars:r,onMouseEnter:s,onMouseLeave:m,onKeyDown:k,children:h,...y}=se("MenuSubDropdown",Xt,l),c=E.useRef(null),p=we(),w=en(),v=ie(s,w==null?void 0:w.open),R=ie(m,w==null?void 0:w.close);return M.jsx(oe.Dropdown,{...y,onMouseEnter:v,onMouseLeave:R,role:"menu","aria-orientation":"vertical",ref:Ze(e,c),...p.getStyles("dropdown",{className:a,style:t,styles:i,classNames:n,withStaticClass:!1}),tabIndex:-1,"data-menu-dropdown":!0,children:h})});_n.classes=Ce;_n.displayName="@mantine/core/MenuSubDropdown";const ea={},Kn=Xn((l,e)=>{const{classNames:n,className:a,style:t,styles:i,vars:r,color:s,leftSection:m,rightSection:k,children:h,disabled:y,"data-disabled":c,closeMenuOnClick:p,...w}=se("MenuSubItem",ea,l),v=we(),R=en(),S=el(),{dir:u}=nl(),o=E.useRef(null),f=w,F=s?S.variantColorResolver({color:s,theme:S,variant:"light"}):void 0,g=s?ll({color:s,theme:S}):null,b=ie(f.onKeyDown,I=>{I.key==="ArrowRight"&&(R==null||R.open(),R==null||R.focusFirstItem()),I.key==="ArrowLeft"&&(R!=null&&R.parentContext)&&(R.parentContext.close(),R.parentContext.focusParentItem())}),_=ie(f.onClick,()=>{!c&&p&&v.closeDropdownImmediately()}),C=ie(f.onMouseEnter,R==null?void 0:R.open),P=ie(f.onMouseLeave,R==null?void 0:R.close);return M.jsxs(tl,{onMouseDown:I=>I.preventDefault(),...w,unstyled:v.unstyled,tabIndex:v.menuItemTabIndex,...v.getStyles("item",{className:a,style:t,styles:i,classNames:n}),ref:Ze(o,e),role:"menuitem",disabled:y,"data-menu-item":!0,"data-sub-menu-item":!0,"data-disabled":y||c||void 0,"data-mantine-stop-propagation":!0,onMouseEnter:C,onMouseLeave:P,onClick:_,onKeyDown:al({siblingSelector:"[data-menu-item]:not([data-disabled])",parentSelector:"[data-menu-dropdown]",activateOnFocus:!1,loop:v.loop,dir:u,orientation:"vertical",onKeyDown:b}),__vars:{"--menu-item-color":g!=null&&g.isThemeColor&&(g==null?void 0:g.shade)===void 0?`var(--mantine-color-${g.color}-6)`:F==null?void 0:F.color,"--menu-item-hover":F==null?void 0:F.hover},children:[m&&M.jsx("div",{...v.getStyles("itemSection",{styles:i,classNames:n}),"data-position":"left",children:m}),h&&M.jsx("div",{...v.getStyles("itemLabel",{styles:i,classNames:n}),children:h}),M.jsx("div",{...v.getStyles("itemSection",{styles:i,classNames:n}),"data-position":"right",children:k||M.jsx(kl,{...v.getStyles("chevron"),size:14})})]})});Kn.classes=Ce;Kn.displayName="@mantine/core/MenuSubItem";function wl({children:l,refProp:e}){if(!il(l))throw new Error("Menu.Sub.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");return we(),M.jsx(oe.Target,{refProp:e,popupType:"menu",children:l})}wl.displayName="@mantine/core/MenuSubTarget";const na={offset:0,position:"right-start",transitionProps:{duration:0}};function Le(l){const{children:e,closeDelay:n,...a}=se("MenuSub",na,l),t=ft(),[i,{open:r,close:s}]=ht(!1),m=en(),{openDropdown:k,closeDropdown:h}=sl({open:r,close:s,closeDelay:n,openDelay:0}),y=()=>window.setTimeout(()=>{var p,w;(w=(p=document.getElementById(`${t}-dropdown`))==null?void 0:p.querySelectorAll("[data-menu-item]:not([data-disabled])")[0])==null||w.focus()},16),c=()=>window.setTimeout(()=>{var p;(p=document.getElementById(`${t}-target`))==null||p.focus()},16);return M.jsx(Zt,{value:{opened:i,close:h,open:k,focusFirstItem:y,focusParentItem:c,parentContext:m},children:M.jsx(oe,{opened:i,...a,withinPortal:!1,id:t,children:e})})}Le.extend=l=>l;Le.displayName="@mantine/core/MenuSub";Le.Target=wl;Le.Dropdown=_n;Le.Item=Kn;const la={refProp:"ref"},Cl=E.forwardRef((l,e)=>{const{children:n,refProp:a,...t}=se("MenuTarget",la,l);if(!il(n))throw new Error("Menu.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");const i=we(),r=n.props,s=ie(r.onClick,()=>{i.trigger==="click"?i.toggleDropdown():i.trigger==="click-hover"&&(i.setOpenedViaClick(!0),i.opened||i.openDropdown())}),m=ie(r.onMouseEnter,()=>(i.trigger==="hover"||i.trigger==="click-hover")&&i.openDropdown()),k=ie(r.onMouseLeave,()=>{(i.trigger==="hover"||i.trigger==="click-hover"&&!i.openedViaClick)&&i.closeDropdown()});return M.jsx(oe.Target,{refProp:a,popupType:"menu",ref:e,...t,children:E.cloneElement(n,{onClick:s,onMouseEnter:m,onMouseLeave:k,"data-expanded":i.opened?!0:void 0})})});Cl.displayName="@mantine/core/MenuTarget";const ta={trapFocus:!0,closeOnItemClick:!0,withInitialFocusPlaceholder:!0,clickOutsideEvents:["mousedown","touchstart","keydown"],loop:!0,trigger:"click",openDelay:0,closeDelay:100,menuItemTabIndex:-1};function Y(l){const e=se("Menu",ta,l),{children:n,onOpen:a,onClose:t,opened:i,defaultOpened:r,trapFocus:s,onChange:m,closeOnItemClick:k,loop:h,closeOnEscape:y,trigger:c,openDelay:p,closeDelay:w,classNames:v,styles:R,unstyled:S,variant:u,vars:o,menuItemTabIndex:f,keepMounted:F,withInitialFocusPlaceholder:g,...b}=e,_=Qe({name:"Menu",classes:Ce,props:e,classNames:v,styles:R,unstyled:S}),[C,P]=vt({value:i,defaultValue:r,finalValue:!1,onChange:m}),[I,A]=E.useState(!1),O=()=>{P(!1),A(!1),C&&(t==null||t())},D=()=>{P(!0),!C&&(a==null||a())},G=()=>{C?O():D()},{openDropdown:W,closeDropdown:J}=sl({open:D,close:O,closeDelay:w,openDelay:p}),z=B=>Ot("[data-menu-item]","[data-menu-dropdown]",B),{resolvedClassNames:T,resolvedStyles:q}=kt({classNames:v,styles:R,props:e});return M.jsx(Gt,{value:{getStyles:_,opened:C,toggleDropdown:G,getItemIndex:z,openedViaClick:I,setOpenedViaClick:A,closeOnItemClick:k,closeDropdown:c==="click"?O:J,openDropdown:c==="click"?D:W,closeDropdownImmediately:O,loop:h,trigger:c,unstyled:S,menuItemTabIndex:f,withInitialFocusPlaceholder:g},children:M.jsx(oe,{...b,opened:C,onChange:G,defaultOpened:r,trapFocus:F?!1:s,closeOnEscape:y,__staticSelector:"Menu",classNames:T,styles:q,unstyled:S,variant:u,keepMounted:F,children:n})})}Y.extend=l=>l;Y.withProps=Ft(Y);Y.classes=Ce;Y.displayName="@mantine/core/Menu";Y.Item=Tn;Y.Label=Sn;Y.Dropdown=bn;Y.Target=Cl;Y.Divider=Cn;Y.Sub=Le;const[aa,ia]=Jn("Table component was not found in the tree");var Me={table:"m_b23fa0ef",th:"m_4e7aa4f3",tr:"m_4e7aa4fd",td:"m_4e7aa4ef",tbody:"m_b2404537",thead:"m_b242d975",caption:"m_9e5a3ac7",scrollContainer:"m_a100c15",scrollContainerInner:"m_62259741"};function sa(l,e){if(!e)return;const n={};return e.columnBorder&&l.withColumnBorders&&(n["data-with-column-border"]=!0),e.rowBorder&&l.withRowBorders&&(n["data-with-row-border"]=!0),e.striped&&l.striped&&(n["data-striped"]=l.striped),e.highlightOnHover&&l.highlightOnHover&&(n["data-hover"]=!0),e.captionSide&&l.captionSide&&(n["data-side"]=l.captionSide),e.stickyHeader&&l.stickyHeader&&(n["data-sticky"]=!0),n}function Se(l,e){const n=`Table${l.charAt(0).toUpperCase()}${l.slice(1)}`,a=ke((t,i)=>{const r=se(n,{},t),{classNames:s,className:m,style:k,styles:h,...y}=r,c=ia();return M.jsx(Te,{component:l,ref:i,...sa(c,e),...c.getStyles(l,{className:m,classNames:s,style:k,styles:h,props:r}),...y})});return a.displayName=`@mantine/core/${n}`,a.classes=Me,a}const cn=Se("th",{columnBorder:!0}),bl=Se("td",{columnBorder:!0}),Be=Se("tr",{rowBorder:!0,striped:!0,highlightOnHover:!0}),Tl=Se("thead",{stickyHeader:!0}),Sl=Se("tbody"),_l=Se("tfoot"),Kl=Se("caption",{captionSide:!0});function Ln({data:l}){return M.jsxs(M.Fragment,{children:[l.caption&&M.jsx(Kl,{children:l.caption}),l.head&&M.jsx(Tl,{children:M.jsx(Be,{children:l.head.map((e,n)=>M.jsx(cn,{children:e},n))})}),l.body&&M.jsx(Sl,{children:l.body.map((e,n)=>M.jsx(Be,{children:e.map((a,t)=>M.jsx(bl,{children:a},t))},n))}),l.foot&&M.jsx(_l,{children:M.jsx(Be,{children:l.foot.map((e,n)=>M.jsx(cn,{children:e},n))})})]})}Ln.displayName="@mantine/core/TableDataRenderer";const ra={type:"scrollarea"},oa=hn((l,{minWidth:e,maxHeight:n,type:a})=>({scrollContainer:{"--table-min-width":Pe(e),"--table-max-height":Pe(n),"--table-overflow":a==="native"?"auto":void 0}})),Pn=ke((l,e)=>{const n=se("TableScrollContainer",ra,l),{classNames:a,className:t,style:i,styles:r,unstyled:s,vars:m,children:k,minWidth:h,maxHeight:y,type:c,scrollAreaProps:p,...w}=n,v=Qe({name:"TableScrollContainer",classes:Me,props:n,className:t,style:i,classNames:a,styles:r,unstyled:s,vars:m,varsResolver:oa,rootSelector:"scrollContainer"});return M.jsx(Te,{component:c==="scrollarea"?Ge:"div",...c==="scrollarea"?y?{offsetScrollbars:"xy",...p}:{offsetScrollbars:"x",...p}:{},ref:e,...v("scrollContainer"),...w,children:M.jsx("div",{...v("scrollContainerInner"),children:k})})});Pn.classes=Me;Pn.displayName="@mantine/core/TableScrollContainer";const ua={withRowBorders:!0,verticalSpacing:7},da=hn((l,{layout:e,captionSide:n,horizontalSpacing:a,verticalSpacing:t,borderColor:i,stripedColor:r,highlightOnHoverColor:s,striped:m,highlightOnHover:k,stickyHeaderOffset:h,stickyHeader:y})=>({table:{"--table-layout":e,"--table-caption-side":n,"--table-horizontal-spacing":In(a),"--table-vertical-spacing":In(t),"--table-border-color":i?Ve(i,l):void 0,"--table-striped-color":m&&r?Ve(r,l):void 0,"--table-highlight-on-hover-color":k&&s?Ve(s,l):void 0,"--table-sticky-header-offset":y?Pe(h):void 0}})),de=ke((l,e)=>{const n=se("Table",ua,l),{classNames:a,className:t,style:i,styles:r,unstyled:s,vars:m,horizontalSpacing:k,verticalSpacing:h,captionSide:y,stripedColor:c,highlightOnHoverColor:p,striped:w,highlightOnHover:v,withColumnBorders:R,withRowBorders:S,withTableBorder:u,borderColor:o,layout:f,variant:F,data:g,children:b,stickyHeader:_,stickyHeaderOffset:C,mod:P,tabularNums:I,...A}=n,O=Qe({name:"Table",props:n,className:t,style:i,classes:Me,classNames:a,styles:r,unstyled:s,rootSelector:"table",vars:m,varsResolver:da});return M.jsx(aa,{value:{getStyles:O,stickyHeader:_,striped:w===!0?"odd":w||void 0,highlightOnHover:v,withColumnBorders:R,withRowBorders:S,captionSide:y||"bottom"},children:M.jsx(Te,{component:"table",variant:F,ref:e,mod:[{"data-with-table-border":u,"data-tabular-nums":I},P],...O("table"),...A,children:b||!!g&&M.jsx(Ln,{data:g})})})});de.classes=Me;de.displayName="@mantine/core/Table";de.Td=bl;de.Th=cn;de.Tr=Be;de.Thead=Tl;de.Tbody=Sl;de.Tfoot=_l;de.Caption=Kl;de.ScrollContainer=Pn;de.DataRenderer=Ln;/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ca=Fe("outline","alert-circle","IconAlertCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 8v4",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ma=Fe("outline","checkbox","IconCheckbox",[["path",{d:"M9 11l3 3l8 -8",key:"svg-0"}],["path",{d:"M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ga=Fe("outline","dots-vertical","IconDotsVertical",[["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var pa=Fe("outline","exclamation-circle","IconExclamationCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 9v4",key:"svg-1"}],["path",{d:"M12 16v.01",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ya=Fe("outline","git-commit","IconGitCommit",[["path",{d:"M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M12 3l0 6",key:"svg-1"}],["path",{d:"M12 15l0 6",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var fa=Fe("outline","git-merge","IconGitMerge",[["path",{d:"M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M17 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-2"}],["path",{d:"M7 8l0 8",key:"svg-3"}],["path",{d:"M7 8a4 4 0 0 0 4 4h4",key:"svg-4"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ha=Fe("outline","message","IconMessage",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var va=Fe("outline","pencil-plus","IconPencilPlus",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}],["path",{d:"M16 19h6",key:"svg-2"}],["path",{d:"M19 16v6",key:"svg-3"}]]);const Ll=function(){var l={defaultValue:null,kind:"LocalArgument",name:"id"},e={defaultValue:null,kind:"LocalArgument",name:"includeTeam"},n={defaultValue:null,kind:"LocalArgument",name:"name"},a={defaultValue:null,kind:"LocalArgument",name:"owner"},t={alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},i=[t],r=[{kind:"Variable",name:"name",variableName:"name"},{kind:"Variable",name:"owner",variableName:"owner"}],s={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},m=[s],k=[{kind:"Variable",name:"number",variableName:"id"}],h={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},y=[t,h],c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},p={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[c,t,h],storageKey:null},w=[s,h],v={alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"defaultBranchRef",plural:!1,selections:w,storageKey:null},R={kind:"Literal",name:"first",value:30},S=[R],u={alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},F={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},b=[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},g],_={kind:"InlineFragment",selections:[h],type:"Node",abstractKey:"__isNode"},C={alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"ref",plural:!1,selections:w,storageKey:null},P=[o,h],I={alias:null,args:null,kind:"ScalarField",name:"committedDate",storageKey:null},A={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[c,t,_],storageKey:null},O={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},D={kind:"InlineFragment",selections:[{alias:"reviewState",args:null,kind:"ScalarField",name:"state",storageKey:null}],type:"PullRequestReviewComment",abstractKey:null},G={kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]},W=[{kind:"Literal",name:"first",value:20}],J={alias:null,args:null,kind:"ScalarField",name:"startLine",storageKey:null},z={alias:null,args:null,kind:"ScalarField",name:"line",storageKey:null};return{fragment:{argumentDefinitions:[l,e,n,a],kind:"Fragment",metadata:null,name:"PRReviewCommitsQuery",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"viewer",plural:!1,selections:i,storageKey:null},{alias:null,args:r,concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CommitsViewRepositoryFragment"},{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"defaultBranchRef",plural:!1,selections:m,storageKey:null},{alias:null,args:k,concreteType:"PullRequest",kind:"LinkedField",name:"pullRequest",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ActivityPanelFragment"},{args:null,kind:"FragmentSpread",name:"FooterPullRequestFragment"},{args:null,kind:"FragmentSpread",name:"CommitsViewPullRequestFragment"},{args:null,kind:"FragmentSpread",name:"SummaryPanelFragment"}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,n,l,e],kind:"Operation",name:"PRReviewCommitsQuery",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"viewer",plural:!1,selections:y,storageKey:null},{alias:null,args:r,concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[p,s,v,{alias:null,args:k,concreteType:"PullRequest",kind:"LinkedField",name:"pullRequest",plural:!1,selections:[h,{alias:null,args:null,kind:"ScalarField",name:"viewerCanUpdate",storageKey:null},{alias:null,args:S,concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[u,{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[c,{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[o,h,{alias:null,args:[{kind:"Literal",name:"first",value:2}],concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[o,h,f],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"},{alias:null,args:null,kind:"ScalarField",name:"messageHeadline",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"additions",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"deletions",storageKey:null},f],storageKey:null},h],storageKey:null}],storageKey:null}],storageKey:"commits(first:30)"},{alias:null,args:null,kind:"ScalarField",name:"mergeable",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerDidAuthor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanMergeAsAdmin",storageKey:null},{alias:null,args:null,concreteType:"Repository",kind:"LinkedField",name:"baseRepository",plural:!1,selections:[p,s,h],storageKey:null},{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"baseRef",plural:!1,selections:w,storageKey:null},F,{alias:"lastCommit",args:[{kind:"Literal",name:"last",value:1}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[o,h,{alias:null,args:null,concreteType:"StatusCheckRollup",kind:"LinkedField",name:"statusCheckRollup",plural:!1,selections:[g,{alias:null,args:[{kind:"Literal",name:"first",value:50}],concreteType:"StatusCheckRollupContextConnection",kind:"LinkedField",name:"contexts",plural:!1,selections:[u,{alias:null,args:null,concreteType:"CheckRunStateCount",kind:"LinkedField",name:"checkRunCountsByState",plural:!0,selections:b,storageKey:null},{alias:null,args:null,concreteType:"StatusContextStateCount",kind:"LinkedField",name:"statusContextCountsByState",plural:!0,selections:b,storageKey:null},{alias:null,args:null,concreteType:"StatusCheckRollupContextEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[c,{kind:"InlineFragment",selections:[h,{alias:null,args:null,kind:"ScalarField",name:"detailsUrl",storageKey:null},s,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"conclusion",storageKey:null}],type:"CheckRun",abstractKey:null},{kind:"InlineFragment",selections:[h,g,{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"context",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"avatarUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"targetUrl",storageKey:null}],type:"StatusContext",abstractKey:null},_],storageKey:null}],storageKey:null}],storageKey:"contexts(first:50)"},h],storageKey:null}],storageKey:null},h],storageKey:null}],storageKey:null}],storageKey:"commits(last:1)"},{alias:null,args:[R,{kind:"Literal",name:"itemTypes",value:["HEAD_REF_FORCE_PUSHED_EVENT","BASE_REF_FORCE_PUSHED_EVENT","BASE_REF_CHANGED_EVENT","PULL_REQUEST_COMMIT"]}],concreteType:"PullRequestTimelineItemsConnection",kind:"LinkedField",name:"timelineItems",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestTimelineItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[c,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[o,{alias:null,args:null,kind:"ScalarField",name:"authoredDate",storageKey:null},h],storageKey:null}],type:"PullRequestCommit",abstractKey:null},{kind:"InlineFragment",selections:[F,{alias:null,args:null,kind:"ScalarField",name:"previousRefName",storageKey:null}],type:"BaseRefChangedEvent",abstractKey:null},{kind:"InlineFragment",selections:[F,C],type:"BaseRefForcePushedEvent",abstractKey:null},{kind:"InlineFragment",selections:[F,C,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"afterCommit",plural:!1,selections:P,storageKey:null},{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"beforeCommit",plural:!1,selections:[o,I,h],storageKey:null}],type:"HeadRefForcePushedEvent",abstractKey:null},_],storageKey:null}],storageKey:null}],storageKey:'timelineItems(first:30,itemTypes:["HEAD_REF_FORCE_PUSHED_EVENT","BASE_REF_FORCE_PUSHED_EVENT","BASE_REF_CHANGED_EVENT","PULL_REQUEST_COMMIT"])'},{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"viewerLatestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[h,o],storageKey:null},h],storageKey:null},{alias:null,args:null,concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[v,h],storageKey:null},A,{alias:null,args:S,concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[h,g,O,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[c,t,_,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"location",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"company",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null}],type:"User",abstractKey:null}],storageKey:null},c,F,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:P,storageKey:null},{alias:null,args:[{kind:"Literal",name:"last",value:30}],concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[O,A,h],storageKey:null}],storageKey:null}],storageKey:"comments(last:30)"},{kind:"InlineFragment",selections:[D,G],type:"Comment",abstractKey:"__isComment"}],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"},{alias:null,args:W,concreteType:"PullRequestReviewThreadConnection",kind:"LinkedField",name:"reviewThreads",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"node",plural:!1,selections:[h,{alias:null,args:W,concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[h,O,J,z,G,{kind:"InlineFragment",selections:[A,F,D],type:"Comment",abstractKey:"__isComment"}],storageKey:null}],storageKey:null}],storageKey:"comments(first:20)"},z,J,{alias:null,args:null,kind:"ScalarField",name:"path",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isResolved",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanReply",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanResolve",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanUnresolve",storageKey:null},G],storageKey:null}],storageKey:null}],storageKey:"reviewThreads(first:20)"},{alias:null,args:S,concreteType:"IssueCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"IssueCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"IssueComment",kind:"LinkedField",name:"node",plural:!1,selections:[c,F,h,O,{kind:"InlineFragment",selections:[A,D,G],type:"Comment",abstractKey:"__isComment"}],storageKey:null}],storageKey:null}],storageKey:"comments(first:30)"},{alias:"timelineCommits",args:[R,{kind:"Literal",name:"itemTypes",value:["PULL_REQUEST_COMMIT"]}],concreteType:"PullRequestTimelineItemsConnection",kind:"LinkedField",name:"timelineItems",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestTimelineItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[c,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[h,I,f,{alias:null,args:null,concreteType:"GitActor",kind:"LinkedField",name:"author",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:y,storageKey:null}],storageKey:null}],storageKey:null}],type:"PullRequestCommit",abstractKey:null},_],storageKey:null}],storageKey:null}],storageKey:'timelineItems(first:30,itemTypes:["PULL_REQUEST_COMMIT"])'},c,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},O,{alias:null,args:null,kind:"ScalarField",name:"number",storageKey:null},{alias:null,args:S,concreteType:"ReviewRequestConnection",kind:"LinkedField",name:"reviewRequests",plural:!1,selections:[{alias:null,args:null,concreteType:"ReviewRequestEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"ReviewRequest",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"asCodeOwner",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"requestedReviewer",plural:!1,selections:[c,{kind:"InlineFragment",selections:i,type:"User",abstractKey:null},{condition:"includeTeam",kind:"Condition",passingValue:!0,selections:[{kind:"InlineFragment",selections:m,type:"Team",abstractKey:null}]},_],storageKey:null},h],storageKey:null}],storageKey:null}],storageKey:"reviewRequests(first:30)"}],storageKey:null},h],storageKey:null}]},params:{cacheID:"c7b7c232f3afc1290f2da94952b8d513",id:null,metadata:{},name:"PRReviewCommitsQuery",operationKind:"query",text:`query PRReviewCommitsQuery(
  $owner: String!
  $name: String!
  $id: Int!
  $includeTeam: Boolean!
) {
  viewer {
    login
    id
  }
  repository(owner: $owner, name: $name) {
    ...CommitsViewRepositoryFragment
    defaultBranchRef {
      name
      id
    }
    pullRequest(number: $id) {
      ...ActivityPanelFragment
      ...FooterPullRequestFragment
      ...CommitsViewPullRequestFragment
      ...SummaryPanelFragment
      id
    }
    id
  }
}

fragment ActivityPanelFragment on PullRequest {
  id
  viewerCanUpdate
  ...FooterPullRequestFragment
  reviews(first: 30) {
    edges {
      node {
        author {
          __typename
          login
          ... on Node {
            __isNode: __typename
            id
          }
        }
        __typename
        createdAt
        id
        state
        ...CommentFragment
        ...ActivityPanelReviewFragment
      }
    }
  }
  comments(first: 30) {
    edges {
      node {
        __typename
        createdAt
        ...CommentFragment
        id
      }
    }
  }
  commits(first: 30) {
    edges {
      node {
        commit {
          oid
          id
        }
        id
      }
    }
  }
  timelineCommits: timelineItems(itemTypes: [PULL_REQUEST_COMMIT], first: 30) {
    edges {
      node {
        __typename
        ... on PullRequestCommit {
          commit {
            id
            committedDate
            message
            author {
              user {
                login
                id
              }
            }
          }
        }
        ... on Node {
          __isNode: __typename
          id
        }
      }
    }
  }
  ...useVersionHistoryFragment
}

fragment ActivityPanelReviewFragment on PullRequestReview {
  id
  state
  createdAt
  author {
    __typename
    ...UserFragment
    login
    ... on Node {
      __isNode: __typename
      id
    }
  }
  body
  commit {
    oid
    id
  }
  ...CommentFragment
  comments(last: 30) {
    edges {
      node {
        body
        author {
          __typename
          login
          ... on Node {
            __isNode: __typename
            id
          }
        }
        id
      }
    }
  }
}

fragment CommentFragment on Comment {
  __isComment: __typename
  body
  author {
    __typename
    login
    ... on Node {
      __isNode: __typename
      id
    }
  }
  createdAt
  ... on PullRequestReviewComment {
    reviewState: state
  }
}

fragment CommentThreadFragment on PullRequestReviewThread {
  id
  isResolved
  line
  startLine
  comments(first: 20) {
    edges {
      node {
        id
        startLine
        line
        ...CommentFragment
      }
    }
  }
  viewerCanReply
  viewerCanResolve
  viewerCanUnresolve
}

fragment CommentThreadPullRequestFragment on PullRequest {
  reviews(first: 30) {
    edges {
      node {
        id
        state
      }
    }
  }
}

fragment CommitFileCommitFragment on Commit {
  oid
  parents(first: 2) {
    edges {
      node {
        oid
        id
      }
    }
  }
}

fragment CommitFileFragment on PullRequest {
  ...FileDifferFragment
}

fragment CommitFileRepositoryFragment on Repository {
  owner {
    __typename
    login
    id
  }
  name
  defaultBranchRef {
    name
    id
  }
}

fragment CommitViewFragment on Commit {
  ...CommitFileCommitFragment
  oid
  messageHeadline
  additions
  deletions
  message
  parents(first: 2) {
    edges {
      node {
        oid
        message
        id
      }
    }
  }
}

fragment CommitViewPullRequestFragment on PullRequest {
  ...CommitFileFragment
}

fragment CommitViewRepositoryFragment on Repository {
  ...CommitFileRepositoryFragment
}

fragment CommitsViewPullRequestFragment on PullRequest {
  __typename
  baseRef {
    name
    id
  }
  commits(first: 30) {
    totalCount
    edges {
      node {
        commit {
          id
          ...CommitViewFragment
          parents(first: 2) {
            edges {
              node {
                oid
                message
                id
              }
            }
          }
        }
        id
      }
    }
  }
  ...CommitViewPullRequestFragment
}

fragment CommitsViewRepositoryFragment on Repository {
  ...CommitViewRepositoryFragment
}

fragment FileDifferFragment on PullRequest {
  id
  reviewThreads(first: 20) {
    edges {
      node {
        id
        path
        line
        ...CommentThreadFragment
      }
    }
  }
  ...CommentThreadPullRequestFragment
}

fragment FooterPullRequestFragment on PullRequest {
  commits(first: 30) {
    totalCount
    edges {
      __typename
    }
  }
  mergeable
  viewerDidAuthor
  viewerCanMergeAsAdmin
  ...VersionSelectorFragment
  ...SubmitReviewPanelFragment
}

fragment PRTitleFragment on PullRequest {
  title
  body
  number
  comments(first: 30) {
    edges {
      node {
        body
        id
      }
    }
  }
}

fragment SubmitReviewPanelFragment on PullRequest {
  id
  viewerCanUpdate
  author {
    __typename
    login
    ... on Node {
      __isNode: __typename
      id
    }
  }
  reviews(first: 30) {
    edges {
      node {
        id
        state
        body
      }
    }
  }
  ...reviewThreadCommentMutationPullRequestFragment
  ...addReviewMutationPullRequestFragment
}

fragment SummaryPanelFragment on PullRequest {
  mergeable
  url
  title
  body
  createdAt
  ...PRTitleFragment
  author {
    __typename
    login
    ... on Node {
      __isNode: __typename
      id
    }
  }
  reviews(first: 30) {
    edges {
      node {
        state
        createdAt
        author {
          __typename
          login
          ... on Node {
            __isNode: __typename
            id
          }
        }
        id
      }
    }
  }
  reviewRequests(first: 30) {
    edges {
      node {
        asCodeOwner
        requestedReviewer {
          __typename
          ... on User {
            login
          }
          ... on Team @include(if: $includeTeam) {
            name
          }
          ... on Node {
            __isNode: __typename
            id
          }
        }
        id
      }
    }
  }
  lastCommit: commits(last: 1) {
    edges {
      node {
        commit {
          statusCheckRollup {
            state
            contexts(first: 50) {
              totalCount
              checkRunCountsByState {
                count
                state
              }
              statusContextCountsByState {
                count
                state
              }
              edges {
                node {
                  __typename
                  ... on CheckRun {
                    __typename
                    id
                    detailsUrl
                    name
                    status
                    conclusion
                  }
                  ... on StatusContext {
                    __typename
                    id
                    state
                    description
                    context
                    avatarUrl
                    targetUrl
                  }
                  ... on Node {
                    __isNode: __typename
                    id
                  }
                }
              }
            }
            id
          }
          id
        }
        id
      }
    }
  }
  id
}

fragment UserFragment on User {
  login
  location
  company
  email
}

fragment VersionSelectorFragment on PullRequest {
  ...useVersionHistoryFragment
  repository {
    defaultBranchRef {
      name
      id
    }
    id
  }
}

fragment addReviewMutationPullRequestFragment on PullRequest {
  id
  reviewThreads(first: 20) {
    edges {
      node {
        line
        startLine
        path
        comments(first: 20) {
          edges {
            node {
              body
              id
            }
          }
        }
        id
      }
    }
  }
}

fragment reviewThreadCommentMutationPullRequestFragment on PullRequest {
  reviewThreads(first: 20) {
    edges {
      node {
        id
        comments(first: 20) {
          edges {
            node {
              id
              body
            }
          }
        }
      }
    }
  }
}

fragment useVersionHistoryFragment on PullRequest {
  baseRepository {
    owner {
      __typename
      login
      id
    }
    name
    id
  }
  baseRef {
    name
    id
  }
  createdAt
  lastCommit: commits(last: 1) {
    edges {
      node {
        commit {
          oid
          id
        }
        id
      }
    }
  }
  timelineItems(first: 30, itemTypes: [HEAD_REF_FORCE_PUSHED_EVENT, BASE_REF_FORCE_PUSHED_EVENT, BASE_REF_CHANGED_EVENT, PULL_REQUEST_COMMIT]) {
    edges {
      node {
        __typename
        ... on PullRequestCommit {
          commit {
            oid
            authoredDate
            id
          }
        }
        ... on BaseRefChangedEvent {
          __typename
          createdAt
          previousRefName
        }
        ... on BaseRefForcePushedEvent {
          __typename
          createdAt
          ref {
            name
            id
          }
        }
        ... on HeadRefForcePushedEvent {
          __typename
          createdAt
          ref {
            name
            id
          }
          afterCommit {
            oid
            id
          }
          beforeCommit {
            oid
            committedDate
            id
          }
        }
        ... on Node {
          __isNode: __typename
          id
        }
      }
    }
  }
  commits(first: 30) {
    edges {
      node {
        commit {
          oid
          id
        }
        id
      }
    }
  }
  viewerLatestReview {
    commit {
      id
      oid
    }
    id
  }
}
`}}}();Ll.hash="5e50bd2bc396d55adef999c71f1f99ac";const Pl=function(){var l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e={kind:"Literal",name:"first",value:30},n=[e],a=[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],t={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},r={args:null,kind:"FragmentSpread",name:"CommentFragment"};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ActivityPanelFragment",selections:[l,{alias:null,args:null,kind:"ScalarField",name:"viewerCanUpdate",storageKey:null},{args:null,kind:"FragmentSpread",name:"FooterPullRequestFragment"},{alias:null,args:n,concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:a,storageKey:null},t,i,l,{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},r,{args:null,kind:"FragmentSpread",name:"ActivityPanelReviewFragment"}],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"},{alias:null,args:n,concreteType:"IssueCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"IssueCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"IssueComment",kind:"LinkedField",name:"node",plural:!1,selections:[t,i,r,l],storageKey:null}],storageKey:null}],storageKey:"comments(first:30)"},{alias:null,args:n,concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"commits(first:30)"},{alias:"timelineCommits",args:[e,{kind:"Literal",name:"itemTypes",value:["PULL_REQUEST_COMMIT"]}],concreteType:"PullRequestTimelineItemsConnection",kind:"LinkedField",name:"timelineItems",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestTimelineItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"committedDate",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},{alias:null,args:null,concreteType:"GitActor",kind:"LinkedField",name:"author",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:a,storageKey:null}],storageKey:null}],storageKey:null}],type:"PullRequestCommit",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:'timelineItems(first:30,itemTypes:["PULL_REQUEST_COMMIT"])'},{args:null,kind:"FragmentSpread",name:"useVersionHistoryFragment"}],type:"PullRequest",abstractKey:null}}();Pl.hash="f9f52d5fd47ea3dcb4b6d1d0db8fc3cf";const El=function(){var l={alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ActivityPanelReviewFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"UserFragment"},l],storageKey:null},e,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CommentFragment"},{alias:null,args:[{kind:"Literal",name:"last",value:30}],concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[e,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[l],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"comments(last:30)"}],type:"PullRequestReview",abstractKey:null}}();El.hash="d18ba5d809c6b447e654d4c984484e16";Re(new Map);const En=Re(null),nn=Re(null),xl=Re(!1),ln=Re(rl()),tn=Re(rl()),ql=Re(null),ka=Re(null);let $e;const Fa=new Uint8Array(16);function Ra(){if(!$e&&($e=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!$e))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return $e(Fa)}const X=[];for(let l=0;l<256;++l)X.push((l+256).toString(16).slice(1));function wa(l,e=0){return X[l[e+0]]+X[l[e+1]]+X[l[e+2]]+X[l[e+3]]+"-"+X[l[e+4]]+X[l[e+5]]+"-"+X[l[e+6]]+X[l[e+7]]+"-"+X[l[e+8]]+X[l[e+9]]+"-"+X[l[e+10]]+X[l[e+11]]+X[l[e+12]]+X[l[e+13]]+X[l[e+14]]+X[l[e+15]]}const Ca=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Dn={randomUUID:Ca};function ze(l,e,n){if(Dn.randomUUID&&!l)return Dn.randomUUID();l=l||{};const a=l.random||(l.rng||Ra)();return a[6]=a[6]&15|64,a[8]=a[8]&63|128,wa(a)}const Ue="edges",Nn="node";class $n{constructor(e){this.obj=e}then(e){e(this.obj)}}class fe{constructor(e){this.record=e}setValues(e){console.debug(`setValues ${this.record.getDataID()} => ${JSON.stringify(e)}`);for(const[n,a]of Object.entries(e))this.record.setValue(a,n)}setLinkedRecord(e,n){this.record.setLinkedRecord(e.record,n)}setLinkedRecords(e,n){this.record.setLinkedRecords(e.map(a=>a.record),n)}getEdges(e,n){const a=this.record.getLinkedRecords(e,n);return a==null?(console.error(`unable to get edges ${e} from ${this.record.getDataID()} of type ${this.record.getType()}`),null):a.map(t=>new fe(t))}getNode(e,n){const a=this.record.getLinkedRecord(e,n);return a==null?(console.error(`unable to get node ${e} from ${this.record.getDataID()} of type ${this.record.getType()}`),null):new fe(a)}createAndAppendNodeToEdge(e,n,a,t,i,r,s){console.debug(`createAndAppendNodeToEdge ${n}`);let m=this.getNode(n,a);if(m==null){const w=e.create(ze(),t);this.record.setLinkedRecord(w,n,a),m=new fe(w)}let k=m.getEdges(Ue)??[];const h=ze(),y=ze(),c=new fe(e.create(h,i)),p=new fe(e.create(y,r));return p.setValues({...s,id:y}),c.setLinkedRecord(p,Nn),k.push(c),m.setLinkedRecords(k,Ue),new $n({edgeId:h,nodeId:y,node:p})}appendToEdge(e,n,a,t,i){console.debug(`appendToEdge ${n}`);const r=this.getNode(n,a);if(r==null)return;const s=r.getEdges(Ue);if(s==null)return;const m=ze(),k=new fe(e.create(m,t)),h=new _e(e).get(i);if(h==null){console.error(`unable to find node with id ${i}`);return}return k.setLinkedRecord(h,Nn),s.push(k),r.setLinkedRecords(s,Ue),new $n({edgeId:m,nodeId:i})}}class _e{constructor(e){this.store=e}get(e){if(console.debug(`getRecord ${e}`),e==null)return console.error("attempted to find null nodeId"),null;const n=this.store.get(e);return n==null?(console.error(`unable to find record ${e}`),null):new fe(n)}delete(e){e!=null&&this.store.delete(e)}}function ba(){const l=$.useRelayEnvironment(),[e,n]=ye(En);return(a,t)=>{vn.commitLocalUpdate(l,i=>{var s,m,k;const r=new _e(i);if(e!=null){(s=r.get(e))==null||s.setValues({isPending:!0,body:a,createdAt:ae().toISOString()});return}(k=(m=r.get(t))==null?void 0:m.createAndAppendNodeToEdge(i,"reviews",{first:30},"PullRequestReviewConnection","PullRequestReviewEdge","PullRequestReview",{isPending:!0,body:a,createdAt:ae().toISOString()}))==null||k.then(({nodeId:h})=>{n(h)})})}}const Al={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommentFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},{kind:"InlineFragment",selections:[{alias:"reviewState",args:null,kind:"ScalarField",name:"state",storageKey:null}],type:"PullRequestReviewComment",abstractKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],type:"Comment",abstractKey:"__isComment"};Al.hash="08730b47ba257692da11cc5d964ecfdc";const mn=E.lazy(()=>ol(()=>import("./MarkdownRenderer-DrxBpsAM.js"),__vite__mapDeps([0,1,2]),import.meta.url)),Ta=Al,zn=800;function Sa({comment:l,header:e="default",style:n=wt,className:a,right:t=void 0,border:i=!0}){var c;const r=$.useFragment(Ta,l),[s,m]=E.useState(!1),k=r.isPending||r.reviewState==="PENDING",h=E.useRef(null),y=K(ge,{gap:"xs",children:[K(V,{wrap:"nowrap",justify:"space-between",children:[K(V,{gap:0,children:[r.author!=null&&d(he,{capitalize:!0,login:r.author.login,size:"sm"}),d(Q,{span:!0,size:"sm",children:" commented "}),d(Ee,{from:ae(r.createdAt),prefix:null}),k&&d(xe,{variant:"light",color:"yellow.8",ml:"sm",radius:"sm",children:"Pending"})]}),K(V,{children:[(((c=h.current)==null?void 0:c.clientHeight)??0)>zn&&d(re,{size:"compact-xs",onClick:()=>m(!0),children:"..."}),t]})]}),d(mn,{ref:h,children:r.body})]});return K(te,{className:Ye("comment",a),css:ul({borderRadius:0,...n},"",""),mah:zn,withBorder:i,p:"xs",children:[e==="default"&&K(V,{justify:"space-between",children:[r.author!=null&&d(he,{login:r.author.login}),d(Ee,{from:ae(r.createdAt),prefix:null}),k&&d(xe,{c:"yellow",children:"Pending"})]}),y,s&&d(Rt,{size:"lg",opened:!0,onClose:()=>m(!1),children:d(mn,{children:r.body})})]})}function xn(l){return d(E.Suspense,{fallback:d(Ie,{}),children:d(Sa,{...l})})}const Il=function(){var l={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},e=[l],n={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},t=[a],i=[{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:t,storageKey:null}],storageKey:null}],storageKey:null}],r={kind:"Literal",name:"first",value:30},s={alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"ref",plural:!1,selections:e,storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useVersionHistoryFragment",selections:[{alias:null,args:null,concreteType:"Repository",kind:"LinkedField",name:"baseRepository",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],storageKey:null},l],storageKey:null},{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"baseRef",plural:!1,selections:e,storageKey:null},n,{alias:"lastCommit",args:[{kind:"Literal",name:"last",value:1}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:i,storageKey:"commits(last:1)"},{alias:null,args:[r,{kind:"Literal",name:"itemTypes",value:["HEAD_REF_FORCE_PUSHED_EVENT","BASE_REF_FORCE_PUSHED_EVENT","BASE_REF_CHANGED_EVENT","PULL_REQUEST_COMMIT"]}],concreteType:"PullRequestTimelineItemsConnection",kind:"LinkedField",name:"timelineItems",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestTimelineItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"authoredDate",storageKey:null}],storageKey:null}],type:"PullRequestCommit",abstractKey:null},{kind:"InlineFragment",selections:[n,{alias:null,args:null,kind:"ScalarField",name:"previousRefName",storageKey:null}],type:"BaseRefChangedEvent",abstractKey:null},{kind:"InlineFragment",selections:[n,s],type:"BaseRefForcePushedEvent",abstractKey:null},{kind:"InlineFragment",selections:[n,s,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"afterCommit",plural:!1,selections:t,storageKey:null},{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"beforeCommit",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"committedDate",storageKey:null}],storageKey:null}],type:"HeadRefForcePushedEvent",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:'timelineItems(first:30,itemTypes:["HEAD_REF_FORCE_PUSHED_EVENT","BASE_REF_FORCE_PUSHED_EVENT","BASE_REF_CHANGED_EVENT","PULL_REQUEST_COMMIT"])'},{alias:null,args:[r],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:i,storageKey:"commits(first:30)"},{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"viewerLatestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},a],storageKey:null}],storageKey:null}],type:"PullRequest",abstractKey:null}}();Il.hash="f6d0a238f940ca721636bd35ebd7bb9b";const _a=Il;function Ml(l){var c,p,w,v,R,S,u,o,f,F;const e=$.useFragment(_a,l),n=Z((c=e.timelineItems.edges)==null?void 0:c.map(g=>g==null?void 0:g.node)),a=E.useMemo(()=>new Map,[e]),t=E.useMemo(()=>new Map,[e]),i=E.useMemo(()=>new Map,[e]),r=E.useMemo(()=>new Map,[e]),s=E.useMemo(()=>new Map,[e]);E.useMemo(()=>{var C,P,I,A,O,D,G,W,J,z,T,q;let g=1,b=null,_=(C=e.baseRef)==null?void 0:C.name;if(e.baseRef==null||_==null)return null;for(const[B,N]of Array.from(n.entries()).reverse())i.set(n.length-1-B,_),N.__typename==="BaseRefChangedEvent"?_=N.previousRefName:N.__typename==="BaseRefForcePushedEvent"&&((P=N.ref)==null?void 0:P.name)!=null&&(_=(I=N.ref)==null?void 0:I.name);for(const[B,N]of n.entries()){if(_=i.get(B),_==null)throw new Error("unable to find baseRef for verison");N.__typename==="HeadRefForcePushedEvent"?(s.has((A=N.beforeCommit)==null?void 0:A.oid)||(a.set(g,(O=N.beforeCommit)==null?void 0:O.oid),t.set(g,_),r.set(g,(D=N.beforeCommit)==null?void 0:D.committedDate),s.set((G=N.afterCommit)==null?void 0:G.oid,g),g++),a.set(g,(W=N.afterCommit)==null?void 0:W.oid),t.set(g,_),r.set(g,N.createdAt),s.set((J=N.afterCommit)==null?void 0:J.oid,g),g++):N.__typename==="PullRequestCommit"&&(b=N.commit)}a.size>0&&b!=null&&a.set(g-1,b.oid),a.size===0&&(a.set(1,(T=pe((z=e.lastCommit.edges)==null?void 0:z.map(B=>B==null?void 0:B.node)))==null?void 0:T.commit.oid),t.set(1,Ne((q=e.baseRef)==null?void 0:q.name)))},[t,i,e,n,s,r,a]);const m=E.useMemo(()=>Array.from(a.entries()).map(([g,b])=>({baseRef:t.get(g),headOid:b})).filter(g=>g.baseRef!=null),[t,a]),k=Ct(Ne((w=(p=e.baseRepository)==null?void 0:p.owner)==null?void 0:w.login),Ne((v=e.baseRepository)==null?void 0:v.name),m),h=(S=(R=e.viewerLatestReview)==null?void 0:R.commit)==null?void 0:S.oid;let y=null;return h!=null&&(y={oid:h,abbreviatedOid:h.slice(0,7),number:s.get(h)??null,nodeId:Ne((o=(u=e.viewerLatestReview)==null?void 0:u.commit)==null?void 0:o.id)}),{viewerLastReview:y,versions:Z((F=(f=k==null?void 0:k.map(({data:g})=>g))==null?void 0:f.filter(g=>g!=null))==null?void 0:F.map((g,b)=>({commitOids:g.commits.map(_=>_.sha),number:b+1,headOid:g.commits[g.commits.length-1].sha,abbreviatedOid:g.commits[g.commits.length-1].sha.slice(0,7),baseRef:t.get(b+1),nodeIds:g.commits.map(_=>_.node_id),author:g.commits[g.commits.length-1].author.login,createdAt:r.get(b+1)==null?void 0:ae(r.get(b+1))})))}}const Dl=E.lazy(()=>ol(()=>import("./MarkdownTextarea-CxH0XdsE.js"),__vite__mapDeps([3,1,2,0,4]),import.meta.url)),Nl={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FooterPullRequestFragment",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:30}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null},{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:"commits(first:30)"},{alias:null,args:null,kind:"ScalarField",name:"mergeable",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerDidAuthor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanMergeAsAdmin",storageKey:null},{args:null,kind:"FragmentSpread",name:"VersionSelectorFragment"},{args:null,kind:"FragmentSpread",name:"SubmitReviewPanelFragment"}],type:"PullRequest",abstractKey:null};Nl.hash="0a0f71df99f45ad6a99f371e951b963d";const $l=function(){var l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"SubmitReviewPanelFragment",selections:[l,{alias:null,args:null,kind:"ScalarField",name:"viewerCanUpdate",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:30}],concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"},{args:null,kind:"FragmentSpread",name:"reviewThreadCommentMutationPullRequestFragment"},{args:null,kind:"FragmentSpread",name:"addReviewMutationPullRequestFragment"}],type:"PullRequest",abstractKey:null}}();$l.hash="4aae75e425f298b1928b0d77f8bf260f";const zl=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"input"}],e=[{kind:"Variable",name:"input",variableName:"input"}],n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},t=[n],i={alias:null,args:null,concreteType:"PullRequest",kind:"LinkedField",name:"pullRequest",plural:!1,selections:t,storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},m={kind:"InlineFragment",selections:t,type:"Node",abstractKey:"__isNode"},k={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"addReviewMutationAddPullRequestReviewMutation",selections:[{alias:null,args:e,concreteType:"AddPullRequestReviewPayload",kind:"LinkedField",name:"addPullRequestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"pullRequestReview",plural:!1,selections:[n,a,{args:null,kind:"FragmentSpread",name:"ActivityPanelReviewFragment"},i],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"addReviewMutationAddPullRequestReviewMutation",selections:[{alias:null,args:e,concreteType:"AddPullRequestReviewPayload",kind:"LinkedField",name:"addPullRequestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"pullRequestReview",plural:!1,selections:[n,a,{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[r,s,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"location",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"company",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null}],type:"User",abstractKey:null},m],storageKey:null},k,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},n],storageKey:null},{alias:null,args:[{kind:"Literal",name:"last",value:30}],concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[k,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[r,s,m],storageKey:null},n],storageKey:null}],storageKey:null}],storageKey:"comments(last:30)"},i,{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:"reviewState",args:null,kind:"ScalarField",name:"state",storageKey:null}],type:"PullRequestReviewComment",abstractKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],type:"Comment",abstractKey:"__isComment"}],storageKey:null}],storageKey:null}]},params:{cacheID:"892dd143fbc2949c120104e84d4d082b",id:null,metadata:{},name:"addReviewMutationAddPullRequestReviewMutation",operationKind:"mutation",text:`mutation addReviewMutationAddPullRequestReviewMutation(
  $input: AddPullRequestReviewInput!
) {
  addPullRequestReview(input: $input) {
    pullRequestReview {
      id
      createdAt
      ...ActivityPanelReviewFragment
      pullRequest {
        id
      }
    }
  }
}

fragment ActivityPanelReviewFragment on PullRequestReview {
  id
  state
  createdAt
  author {
    __typename
    ...UserFragment
    login
    ... on Node {
      __isNode: __typename
      id
    }
  }
  body
  commit {
    oid
    id
  }
  ...CommentFragment
  comments(last: 30) {
    edges {
      node {
        body
        author {
          __typename
          login
          ... on Node {
            __isNode: __typename
            id
          }
        }
        id
      }
    }
  }
}

fragment CommentFragment on Comment {
  __isComment: __typename
  body
  author {
    __typename
    login
    ... on Node {
      __isNode: __typename
      id
    }
  }
  createdAt
  ... on PullRequestReviewComment {
    reviewState: state
  }
}

fragment UserFragment on User {
  login
  location
  company
  email
}
`}}}();zl.hash="1b670edaf89f4e6c6336b444750a644f";const Ul=function(){var l=[{kind:"Literal",name:"first",value:20}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"addReviewMutationPullRequestFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:l,concreteType:"PullRequestReviewThreadConnection",kind:"LinkedField",name:"reviewThreads",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"line",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startLine",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"path",storageKey:null},{alias:null,args:l,concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"comments(first:20)"},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],storageKey:null}],storageKey:null}],storageKey:"reviewThreads(first:20)"}],type:"PullRequest",abstractKey:null}}();Ul.hash="02e0476a2118e17c18ca51ea6e7604b5";const Ka=Ul,La=zl;function Pa(l){var k,h;const e=$.useFragment(Ka,l),n=Je(En),a=le(nn),t=E.useCallback(()=>{var y;n(null),(y=a==null?void 0:a.current)==null||y.setMarkdown("")},[n,a]),i=Z((h=(k=e.reviewThreads.edges)==null?void 0:k.map(y=>y==null?void 0:y.node))==null?void 0:h.filter(y=>(y==null?void 0:y.isPending)===!0)).map(y=>{var p,w;const c=We((p=y.comments)==null?void 0:p.edges);return{body:((w=c==null?void 0:c.node)==null?void 0:w.body)??"",line:y.line,path:y.path,startLine:y.startLine}}),r=E.useCallback(y=>(c,p)=>{var v;y!=null&&c.delete(y),(v=new _e(c).get(p.addPullRequestReview.pullRequestReview.pullRequest.id))==null||v.appendToEdge(c,"reviews",{first:30},"PullRequestReviewEdge",p.addPullRequestReview.pullRequestReview.id)},[]),[s,m]=$.useMutation(La);return[(y,c,p,w)=>{s({variables:{input:{pullRequestId:y,body:p??void 0,threads:i}},updater:r(c),onCompleted:v=>{t(),w(v.addPullRequestReview.pullRequestReview.id)}})},m]}function Ol(){const l=$.useRelayEnvironment(),[e,n]=ye(ln);return a=>{vn.commitLocalUpdate(l,t=>{const i=e.get(a);t.delete(i),n(r=>r.delete(a))})}}function Ea(){const l=$.useRelayEnvironment(),[e,n]=ye(ln);return(a,t)=>{vn.commitLocalUpdate(l,i=>{var k,h;const r=e.get(t),s=new _e(i);if(r!=null){(k=s.get(r))==null||k.setValues({isPending:!0,body:a});return}const m=s.get(t);(h=m==null?void 0:m.createAndAppendNodeToEdge(i,"comments",{first:20},"PullRequestReviewCommentConnection","PullRequestReviewCommentEdge","PullRequestReviewComment",{isPending:!0,body:a}))==null||h.then(({nodeId:y})=>{n(c=>c.set(t,y))})})}}const Hl=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"input"}],e=[{kind:"Variable",name:"input",variableName:"input"}],n={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},t={alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"pullRequestReview",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"reviewThreadCommentMutation",selections:[{alias:null,args:e,concreteType:"AddPullRequestReviewThreadReplyPayload",kind:"LinkedField",name:"addPullRequestReviewThreadReply",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"comment",plural:!1,selections:[n,t],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"reviewThreadCommentMutation",selections:[{alias:null,args:e,concreteType:"AddPullRequestReviewThreadReplyPayload",kind:"LinkedField",name:"addPullRequestReviewThreadReply",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"comment",plural:!1,selections:[n,t,a],storageKey:null}],storageKey:null}]},params:{cacheID:"ad3c8be53dc8e93f5a4a9552df497c3f",id:null,metadata:{},name:"reviewThreadCommentMutation",operationKind:"mutation",text:`mutation reviewThreadCommentMutation(
  $input: AddPullRequestReviewThreadReplyInput!
) {
  addPullRequestReviewThreadReply(input: $input) {
    comment {
      body
      pullRequestReview {
        id
        state
      }
      id
    }
  }
}
`}}}();Hl.hash="4d31cec9ad6f78a3462eed3e5b22a64d";const Vl=function(){var l=[{kind:"Literal",name:"first",value:20}],e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"reviewThreadCommentMutationPullRequestFragment",selections:[{alias:null,args:l,concreteType:"PullRequestReviewThreadConnection",kind:"LinkedField",name:"reviewThreads",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"node",plural:!1,selections:[e,{alias:null,args:l,concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],storageKey:null}],storageKey:null}],storageKey:"comments(first:20)"}],storageKey:null}],storageKey:null}],storageKey:"reviewThreads(first:20)"}],type:"PullRequest",abstractKey:null}}();Vl.hash="741ce77b35e675bda0fe2fb031e951e9";const xa=Vl,qa=Hl;function Aa({pr:l}){const[e,n]=ye(ln),a=le(tn),t=$.useFragment(xa,l),i=E.useMemo(()=>{var p,w;const y=Z((w=(p=t.reviewThreads)==null?void 0:p.edges)==null?void 0:w.map(v=>v==null?void 0:v.node)),c=Z(y.map(v=>{var R,S;return(S=(R=v.comments)==null?void 0:R.edges)==null?void 0:S.map(u=>u==null?void 0:u.node)}).flat()).filter(v=>v.isPending===!0);return new Map(c.map(v=>[v.id,v.body]))},[t]),[r,s]=$.useMutation(qa),m=E.useMemo(()=>new Set,[]),k=E.useCallback((y,c,p)=>{n(w=>w.delete(y)),m.delete(y),m.size===0&&p(c)},[n,m]),h=E.useCallback(y=>(c,p)=>{var R;const w=e.get(y);if(w==null)return;(R=new _e(c).get(w))==null||R.setValues({isPending:!1}),n(S=>S.delete(y))},[e,n]);return[(y,c)=>{const p=e.filter((w,v)=>!a.has(v));for(const[w,v]of p){const R=i.get(v);m.add(w),r({variables:{input:{body:R,pullRequestReviewThreadId:w,pullRequestReviewId:y}},updater:h(w),onCompleted:S=>k(w,S.addPullRequestReviewThreadReply.comment.pullRequestReview.id,c)})}},s]}const Bl=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"input"}],e=[{kind:"Variable",name:"input",variableName:"input"}],n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},t=[n],i={alias:null,args:null,concreteType:"PullRequest",kind:"LinkedField",name:"pullRequest",plural:!1,selections:t,storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},m={kind:"InlineFragment",selections:t,type:"Node",abstractKey:"__isNode"},k={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"submitReviewMutationSubmitPullRequestReviewMutation",selections:[{alias:null,args:e,concreteType:"SubmitPullRequestReviewPayload",kind:"LinkedField",name:"submitPullRequestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"pullRequestReview",plural:!1,selections:[n,a,i,{args:null,kind:"FragmentSpread",name:"ActivityPanelReviewFragment"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"submitReviewMutationSubmitPullRequestReviewMutation",selections:[{alias:null,args:e,concreteType:"SubmitPullRequestReviewPayload",kind:"LinkedField",name:"submitPullRequestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"pullRequestReview",plural:!1,selections:[n,a,i,{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[r,s,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"location",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"company",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null}],type:"User",abstractKey:null},m],storageKey:null},k,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},n],storageKey:null},{alias:null,args:[{kind:"Literal",name:"last",value:30}],concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[k,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[r,s,m],storageKey:null},n],storageKey:null}],storageKey:null}],storageKey:"comments(last:30)"},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:"reviewState",args:null,kind:"ScalarField",name:"state",storageKey:null}],type:"PullRequestReviewComment",abstractKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],type:"Comment",abstractKey:"__isComment"}],storageKey:null}],storageKey:null}]},params:{cacheID:"5b411c90078dba7eae29483db451a658",id:null,metadata:{},name:"submitReviewMutationSubmitPullRequestReviewMutation",operationKind:"mutation",text:`mutation submitReviewMutationSubmitPullRequestReviewMutation(
  $input: SubmitPullRequestReviewInput!
) {
  submitPullRequestReview(input: $input) {
    pullRequestReview {
      id
      createdAt
      pullRequest {
        id
      }
      ...ActivityPanelReviewFragment
    }
  }
}

fragment ActivityPanelReviewFragment on PullRequestReview {
  id
  state
  createdAt
  author {
    __typename
    ...UserFragment
    login
    ... on Node {
      __isNode: __typename
      id
    }
  }
  body
  commit {
    oid
    id
  }
  ...CommentFragment
  comments(last: 30) {
    edges {
      node {
        body
        author {
          __typename
          login
          ... on Node {
            __isNode: __typename
            id
          }
        }
        id
      }
    }
  }
}

fragment CommentFragment on Comment {
  __isComment: __typename
  body
  author {
    __typename
    login
    ... on Node {
      __isNode: __typename
      id
    }
  }
  createdAt
  ... on PullRequestReviewComment {
    reviewState: state
  }
}

fragment UserFragment on User {
  login
  location
  company
  email
}
`}}}();Bl.hash="9ca77642300be4c86e11175c0173e248";const Ia=Bl;function Ma(){const[l,e]=ye(En),n=le(nn),a=E.useCallback(()=>{var r;e(null),(r=n==null?void 0:n.current)==null||r.setMarkdown("")},[e,n]),[t,i]=$.useMutation(Ia);return[(r,s,m,k)=>{console.log("submit"),t({variables:{input:{pullRequestId:r,pullRequestReviewId:s,event:m,body:k??void 0}},onCompleted:()=>{a()}})},i]}const Da=$l;function Na({pr:l}){var F,g,b,_;const e=$.useFragment(Da,l),[n]=ye(kn),a=le(nn),t=le(xl),i=le(ln),r=le(tn),[s,m]=Aa({pr:e}),[k,h]=Pa(e),[y,c]=Ma(),p=pe(Z((g=(F=e.reviews)==null?void 0:F.edges)==null?void 0:g.map(C=>C==null?void 0:C.node)).filter(C=>C.state==="PENDING")),w=Ol(),v=h||c||m,[R,S]=i.partition((C,P)=>r.has(P)),u=(t?1:0)+i.size,o=E.useCallback(C=>P=>{var A;const I=(A=a==null?void 0:a.current)==null?void 0:A.getMarkdown();y(e.id,P,C,bt(p==null?void 0:p.body,I))},[y,p==null?void 0:p.body,e.id,a]),f=E.useCallback(C=>{if(e.viewerCanUpdate){if(p!=null){o(C)(p.id);return}R.size>0?k(e.id,(p==null?void 0:p.id)??null,(p==null?void 0:p.body)??null,P=>{s(P,o(C))}):k(e.id,(p==null?void 0:p.id)??null,(p==null?void 0:p.body)??null,P=>{o(C)(P)})}},[e,p,R.size,k,s,o]);return K(qe,{children:[K(re,{disabled:u<1||v,onClick:()=>{var C;for(const[P]of R)w(P);(C=a==null?void 0:a.current)==null||C.setMarkdown("")},size:"compact-sm",variant:"light",children:[d(Q,{inherit:!0,mr:"xs",children:"Abandon"}),d(Tt,{size:16,stroke:2})]}),d(re,{disabled:u<1||v,onClick:()=>{f("COMMENT")},size:"compact-sm",variant:"light",color:u>0?"yellow":void 0,children:u>0?`Comment (${u})`:"Comment"}),K(re,{disabled:((b=e.author)==null?void 0:b.login)===n,loading:v,onClick:()=>{f("REQUEST_CHANGES")},size:"compact-sm",color:"red",variant:"light",children:[d(Q,{mr:"xs",inherit:!0,children:"Reject"}),d(St,{size:16,stroke:2})]}),K(re,{disabled:((_=e.author)==null?void 0:_.login)===n,loading:v,onClick:()=>{f("APPROVE")},size:"compact-sm",variant:"light",color:"green",children:[d(Q,{mr:"xs",inherit:!0,children:"Approve"}),d(dl,{size:16,stroke:2})]})]})}const jl={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VersionSelectorFragment",selections:[{args:null,kind:"FragmentSpread",name:"useVersionHistoryFragment"},{alias:null,args:null,concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"defaultBranchRef",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}],storageKey:null}],type:"PullRequest",abstractKey:null};jl.hash="4bdf88dee350ad2546728c39149b6c64";const $a=jl;function za(l){return d(Fn,{children:d(Ua,{...l})})}function Ua({fragment:l}){var i;const e=$.useFragment($a,l),{versions:n}=Ml(e),[a,t]=E.useState(n[n.length-1]);return K(oe,{position:"bottom",withArrow:!0,shadow:"md",children:[d(oe.Target,{children:K(re,{variant:"light",size:"compact-sm",children:["v",(i=n[n.length-1])==null?void 0:i.number]})}),d(oe.Dropdown,{children:K(V,{style:{display:"flex",gap:"1rem"},children:[K(te,{shadow:"sm",padding:"lg",style:{flex:1},children:[d(Q,{size:"lg",mb:"md",style:{fontWeight:700},children:"Versions"}),d(Ge,{style:{height:400},children:n.map(r=>d(te,{shadow:"xs",padding:"sm",style:{marginBottom:"0.5rem",cursor:"pointer",backgroundColor:(a==null?void 0:a.number)===r.number?"#f0f0f0":"white"},onClick:()=>t(r),children:K(V,{style:{justifyContent:"space-between",alignItems:"center"},children:[K(Q,{children:[K("strong",{children:["v",r.number]})," - ",r.baseRef]}),K(xe,{color:"blue",children:[r.commitOids.length," commits"]})]})},r.number))})]}),K(te,{shadow:"sm",padding:"lg",style:{flex:2},children:[K(Q,{size:"lg",mb:"md",style:{fontWeight:700},children:["Commits for v",a==null?void 0:a.number]}),a?d(Ge,{style:{height:400},children:K(de,{children:[d("thead",{children:K("tr",{children:[d("th",{children:"Commit Hash"}),d("th",{children:"Author"}),d("th",{children:"Date"})]})}),d("tbody",{children:a.commitOids.map(r=>K("tr",{children:[d("td",{children:r}),d("td",{children:a.author}),d("td",{children:a.createdAt?a.createdAt.format("D MMM YYYY HH:mm"):"Unknown"})]},r))})]})}):d(Q,{children:"No version selected."})]})]})})]})}const Oa=Nl;function Ha(l){return d(E.Suspense,{fallback:d(_t,{}),children:d(Va,{...l})})}function Va({pr:l}){Kt(),le(Rn);const e=$.useFragment(Oa,l);return ye(cl),K(V,{gap:"sm",justify:"flex-end",wrap:"nowrap",children:[e.mergeable==="MERGEABLE"&&(e.viewerDidAuthor||e.viewerCanMergeAsAdmin)&&d(re,{size:"compact-sm",right:"Merge",variant:"light",color:"violet",children:d(fa,{})}),d(za,{fragment:e}),d(Na,{pr:e})]})}const Ba=El,ja=Pl;function Un({login:l,text:e,state:n,from:a,alreadySeen:t,leftIcon:i}){return K(V,{className:Ye(n,ve.secondaryText,t&&"already-seen-timeline-item","timeline-item"),justify:"space-between",children:[K(V,{gap:0,children:[i&&d(i,{size:16,stroke:1}),K(Q,{size:"sm",children:[l," ",e]})]}),d(Q,{size:"sm",children:d(Ee,{from:a,prefix:null})})]})}function Ga({review:l,currentCommits:e,commits:n,alreadySeen:a}){var r,s,m,k,h;const t=$.useFragment(Ba,l);let i=null;if(t.state==="APPROVED"||t.state==="CHANGES_REQUESTED")i=d(Un,{alreadySeen:a,from:ae(t.createdAt),login:d(he,{capitalize:!0,login:(r=t.author)==null?void 0:r.login,reviewState:t.state}),state:ve.colorSuccess,text:t.state==="APPROVED"?"approved":"requested changes"});else if(t.state==="COMMENTED"&&gl(t.body)){const y=((s=t==null?void 0:t.commit)==null?void 0:s.oid)==null||e.has(t.commit.oid),c=n.get((m=t==null?void 0:t.commit)==null?void 0:m.oid),p=c!=null?` on v${c}`:y?"":` on a previous version (${(k=t==null?void 0:t.commit)==null?void 0:k.oid})`;i=d(Un,{alreadySeen:a,from:ae(t.createdAt),login:d(he,{capitalize:!0,login:(h=t.author)==null?void 0:h.login,size:"sm"}),text:"commented"+p,leftIcon:ha})}else t.state==="COMMENTED"&&(i=d(xn,{className:"timeline-item",comment:t,header:"none",variant:"small"}));return d("div",{className:Ye(t.state==null&&ve.colorWarning,a&&"already-seen-timeline-item","timeline-item"),children:i})}var Wa={name:"ou8xsw",styles:"flex:0 0 auto"},Qa={name:"ygnveb",styles:"overflow-y:auto;overflow-x:hidden;flex-grow:1"},Za={name:"g0dsyy",styles:"float:left"};function Ya({pr:l}){var P,I,A,O,D,G,W,J,z;const e=$.useFragment(ja,l),[n,a]=ye(nn),t=Je(xl),i=new Set(Z((I=(P=e.commits.edges)==null?void 0:P.map(T=>T==null?void 0:T.node))==null?void 0:I.map(T=>T==null?void 0:T.commit.oid))),r=le(Lt),{versions:s}=Ml(e),m=new Map;for(const T of s.slice().reverse())for(const q of T.commitOids)m.set(q,T.number);const k=ba();E.useCallback(T=>{k(T,e.id)},[k,e.id,a]);const h=E.useRef(null),[y,c]=E.useState(void 0),p=E.useRef(null),w=E.useCallback(T=>{T.preventDefault&&T.preventDefault(),c(window.innerWidth-T.x)},[]),v=E.useCallback(T=>{window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",v)},[w]),R=E.useCallback(T=>{T.preventDefault&&T.preventDefault(),window.addEventListener("mousemove",w),window.addEventListener("mouseup",v)},[v,w]);E.useEffect(()=>{p.current!=null&&(p.current.scrollTop=0)},[p,e]);const S=Z((O=(A=e.comments)==null?void 0:A.edges)==null?void 0:O.map(T=>T==null?void 0:T.node)).map(T=>({createdAt:ae(T.createdAt),node:T,type:"comment"})),u=Z((G=(D=e.reviews)==null?void 0:D.edges)==null?void 0:G.map(T=>T==null?void 0:T.node)).map(T=>({createdAt:ae(T.createdAt),node:T,type:"review"})),o=Z(s).filter(T=>T.createdAt!=null).map(T=>({createdAt:T.createdAt,node:T,type:"versionHistory"})),f=Z((W=e.timelineCommits.edges)==null?void 0:W.map(T=>T==null?void 0:T.node)).map(T=>{var q;return{createdAt:ae((q=T.commit)==null?void 0:q.committedDate),node:T.commit,type:"commit"}}),F=[...S,...u,...o,...f],g=ml(Z((z=(J=e.reviews)==null?void 0:J.edges)==null?void 0:z.map(T=>T==null?void 0:T.node)).filter(T=>{var q;return((q=T.author)==null?void 0:q.login)===r})),b=F.sort((T,q)=>q.createdAt.diff(T.createdAt)).map(T=>{var q,B,N,ee,j,L,x;if(T.type==="review"&&((q=T.node)==null?void 0:q.state)!=null){const U=T.node;return d(Ga,{alreadySeen:(T==null?void 0:T.createdAt)<(g==null?void 0:g.createdAt),commits:m,currentCommits:i,review:U},U.id)}else if(T.type==="comment"){const U=T.node;return d(xn,{alreadySeen:(T==null?void 0:T.createdAt)<(g==null?void 0:g.createdAt),className:"timeline-item",comment:U,header:"none",variant:U.id===(g==null?void 0:g.id)?"normal":"small"},U.id)}else{if(T.type=="versionHistory")return d(wn,{label:K(qe,{children:[d(va,{stroke:1,size:16}),K(Q,{ml:"xs",children:[d(he,{login:(B=T.node)==null?void 0:B.author})," updated to v",T.node.number]})]}),size:"lg",c:"dark",my:"sm"},T.node.id);if(T.type==="commit")return K(V,{gap:0,justify:"space-between",children:[K(V,{gap:0,align:"center",children:[d(ya,{stroke:1,css:Za,size:16}),d(he,{login:(j=(ee=(N=T.node)==null?void 0:N.author)==null?void 0:ee.user)==null?void 0:j.login,size:"sm"}),d(Q,{span:!0,lineClamp:3,size:"sm",children:" added commit "}),d(Pt,{children:(L=T.node)==null?void 0:L.message})]}),d(Q,{children:d(Ee,{from:T.createdAt,prefix:""})})]},(x=T.node)==null?void 0:x.id)}}),[_,C]=Et();return K(qe,{children:[d("div",{className:"side-panel-resizer",onMouseDown:T=>R(T)}),K(ge,{className:"side-panel",css:ul({overflowX:"hidden",width:y,flexBasis:"30vw",flexGrow:1,height:"100%"},"",""),gap:0,children:[d(Ha,{pr:e}),d(ge,{ref:p,css:Qa,gap:"xs",mt:"xs",children:b}),d(ge,{css:Wa,children:d(Dl,{instanceId:"activityPanel",isDisabled:e.viewerCanUpdate!==!0,rows:C?5:1,onChange:T=>{console.log(T),t(!T),a(h)},ref:_,converterRef:h})})]})]})}const Gl={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitsViewRepositoryFragment",selections:[{args:null,kind:"FragmentSpread",name:"CommitViewRepositoryFragment"}],type:"Repository",abstractKey:null};Gl.hash="166d8fb1bb219b363a07c5955453bf3e";const Wl=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"ids"}],e=[{kind:"Variable",name:"ids",variableName:"ids"}],n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},a=[{kind:"Literal",name:"first",value:2}],t={alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"CommitsViewSelectedCommitsQuery",selections:[{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"CommitViewFragment"},n,{alias:null,args:a,concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[t],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"}],type:"Commit",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"CommitsViewSelectedCommitsQuery",selections:[{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},n,{kind:"InlineFragment",selections:[t,{alias:null,args:a,concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[t,n,i],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"},{alias:null,args:null,kind:"ScalarField",name:"messageHeadline",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"additions",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"deletions",storageKey:null},i],type:"Commit",abstractKey:null}],storageKey:null}]},params:{cacheID:"6b03dc487f67556e13b2b6138423938c",id:null,metadata:{},name:"CommitsViewSelectedCommitsQuery",operationKind:"query",text:`query CommitsViewSelectedCommitsQuery(
  $ids: [ID!]!
) {
  nodes(ids: $ids) {
    __typename
    ... on Commit {
      ...CommitViewFragment
      id
      parents(first: 2) {
        edges {
          node {
            oid
            id
          }
        }
      }
    }
    id
  }
}

fragment CommitFileCommitFragment on Commit {
  oid
  parents(first: 2) {
    edges {
      node {
        oid
        id
      }
    }
  }
}

fragment CommitViewFragment on Commit {
  ...CommitFileCommitFragment
  oid
  messageHeadline
  additions
  deletions
  message
  parents(first: 2) {
    edges {
      node {
        oid
        message
        id
      }
    }
  }
}
`}}}();Wl.hash="d8a74ab73e2d09ab3e0a74136deeb2e8";const Ql={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitsViewPullRequestFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"baseRef",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:30}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null},{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"CommitViewFragment"},{alias:null,args:[{kind:"Literal",name:"first",value:2}],concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"commits(first:30)"},{args:null,kind:"FragmentSpread",name:"CommitViewPullRequestFragment"}],type:"PullRequest",abstractKey:null};Ql.hash="b50d242b016895a40696393b7c59120b";const Zl={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitViewPullRequestFragment",selections:[{args:null,kind:"FragmentSpread",name:"CommitFileFragment"}],type:"PullRequest",abstractKey:null};Zl.hash="4ae6d86093d323d612422dcaccce08f5";const Yl={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitViewRepositoryFragment",selections:[{args:null,kind:"FragmentSpread",name:"CommitFileRepositoryFragment"}],type:"Repository",abstractKey:null};Yl.hash="506356fe21d3d2b2b49c594a56785cfb";const Jl=function(){var l={alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitViewFragment",selections:[{args:null,kind:"FragmentSpread",name:"CommitFileCommitFragment"},l,{alias:null,args:null,kind:"ScalarField",name:"messageHeadline",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"additions",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"deletions",storageKey:null},e,{alias:null,args:[{kind:"Literal",name:"first",value:2}],concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[l,e],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"}],type:"Commit",abstractKey:null}}();Jl.hash="4c16f91405370f5dc2e6dff906b2c33a";const Xl=function(){var l={alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitFileCommitFragment",selections:[l,{alias:null,args:[{kind:"Literal",name:"first",value:2}],concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[l],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"}],type:"Commit",abstractKey:null}}();Xl.hash="b0d4a9b9421f19d0929c3a59b9ddf06f";const et=function(){var l={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitFileRepositoryFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],storageKey:null},l,{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"defaultBranchRef",plural:!1,selections:[l],storageKey:null}],type:"Repository",abstractKey:null}}();et.hash="7daf2e7ee0a48811a456965015f24ee9";const nt={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitFileFragment",selections:[{args:null,kind:"FragmentSpread",name:"FileDifferFragment"}],type:"PullRequest",abstractKey:null};nt.hash="ba5fb6c52ee944430cc5f8131c9c5651";function Oe(l,e,n,a,t="blob"){return`https://github.com/${l}/${e}/${t}/${n}/${a}`}function Ja({owner:l,name:e,defaultBranchName:n,commitOid:a,parentCommitOid:t,filename:i}){return K(Y,{shadow:"md",width:200,children:[d(Y.Target,{children:d(pl,{variant:"transparent",children:d(ga,{stroke:1})})}),K(Y.Dropdown,{children:[n!=null&&d(Y.Item,{children:K("a",{href:Oe(l,e,n,i),target:"_blank",rel:"noreferrer",children:["View in ",n]})}),t!=null&&d(Y.Item,{children:d("a",{href:Oe(l,e,t,i),target:"_blank",rel:"noreferrer",children:"View in parent commit"})}),d(Y.Item,{children:d("a",{href:Oe(l,e,a,i),target:"_blank",rel:"noreferrer",children:"View in this commit"})}),d(Y.Divider,{}),n!=null&&d(Y.Item,{children:d("a",{href:Oe(l,e,n,i,"blame"),target:"_blank",rel:"noreferrer",children:"Blame"})})]})]})}var Xa={name:"1bmnxg7",styles:"white-space:nowrap"};function ei({path:l}){const e=l.split("/");return d(xt,{separatorMargin:"xxxs",children:e.map((n,a)=>{const t=e.slice(a).join("/");return d(Fl,{value:t,children:({copied:i,copy:r})=>d(qt,{label:i?"Copied":`Copy ${t}`,withArrow:!0,position:"bottom",children:d(Q,{component:"a",css:Xa,onClick:r,children:n})})},t)})})}const lt=function(){var l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FileDifferFragment",selections:[l,{alias:null,args:[{kind:"Literal",name:"first",value:20}],concreteType:"PullRequestReviewThreadConnection",kind:"LinkedField",name:"reviewThreads",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"node",plural:!1,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"path",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"line",storageKey:null},{args:null,kind:"FragmentSpread",name:"CommentThreadFragment"}],storageKey:null}],storageKey:null}],storageKey:"reviewThreads(first:20)"},{args:null,kind:"FragmentSpread",name:"CommentThreadPullRequestFragment"}],type:"PullRequest",abstractKey:null}}();lt.hash="8a4fc8d57a67064d4115060c8f334cec";function be(){}be.prototype={diff:function(e,n){var a,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.callback;typeof t=="function"&&(i=t,t={}),this.options=t;var r=this;function s(f){return i?(setTimeout(function(){i(void 0,f)},0),!0):f}e=this.castInput(e),n=this.castInput(n),e=this.removeEmpty(this.tokenize(e)),n=this.removeEmpty(this.tokenize(n));var m=n.length,k=e.length,h=1,y=m+k;t.maxEditLength&&(y=Math.min(y,t.maxEditLength));var c=(a=t.timeout)!==null&&a!==void 0?a:1/0,p=Date.now()+c,w=[{oldPos:-1,lastComponent:void 0}],v=this.extractCommon(w[0],n,e,0);if(w[0].oldPos+1>=k&&v+1>=m)return s([{value:this.join(n),count:n.length}]);var R=-1/0,S=1/0;function u(){for(var f=Math.max(R,-h);f<=Math.min(S,h);f+=2){var F=void 0,g=w[f-1],b=w[f+1];g&&(w[f-1]=void 0);var _=!1;if(b){var C=b.oldPos-f;_=b&&0<=C&&C<m}var P=g&&g.oldPos+1<k;if(!_&&!P){w[f]=void 0;continue}if(!P||_&&g.oldPos+1<b.oldPos?F=r.addToPath(b,!0,void 0,0):F=r.addToPath(g,void 0,!0,1),v=r.extractCommon(F,n,e,f),F.oldPos+1>=k&&v+1>=m)return s(ni(r,F.lastComponent,n,e,r.useLongestToken));w[f]=F,F.oldPos+1>=k&&(S=Math.min(S,f-1)),v+1>=m&&(R=Math.max(R,f+1))}h++}if(i)(function f(){setTimeout(function(){if(h>y||Date.now()>p)return i();u()||f()},0)})();else for(;h<=y&&Date.now()<=p;){var o=u();if(o)return o}},addToPath:function(e,n,a,t){var i=e.lastComponent;return i&&i.added===n&&i.removed===a?{oldPos:e.oldPos+t,lastComponent:{count:i.count+1,added:n,removed:a,previousComponent:i.previousComponent}}:{oldPos:e.oldPos+t,lastComponent:{count:1,added:n,removed:a,previousComponent:i}}},extractCommon:function(e,n,a,t){for(var i=n.length,r=a.length,s=e.oldPos,m=s-t,k=0;m+1<i&&s+1<r&&this.equals(n[m+1],a[s+1]);)m++,s++,k++;return k&&(e.lastComponent={count:k,previousComponent:e.lastComponent}),e.oldPos=s,m},equals:function(e,n){return this.options.comparator?this.options.comparator(e,n):e===n||this.options.ignoreCase&&e.toLowerCase()===n.toLowerCase()},removeEmpty:function(e){for(var n=[],a=0;a<e.length;a++)e[a]&&n.push(e[a]);return n},castInput:function(e){return e},tokenize:function(e){return e.split("")},join:function(e){return e.join("")}};function ni(l,e,n,a,t){for(var i=[],r;e;)i.push(e),r=e.previousComponent,delete e.previousComponent,e=r;i.reverse();for(var s=0,m=i.length,k=0,h=0;s<m;s++){var y=i[s];if(y.removed){if(y.value=l.join(a.slice(h,h+y.count)),h+=y.count,s&&i[s-1].added){var p=i[s-1];i[s-1]=i[s],i[s]=p}}else{if(!y.added&&t){var c=n.slice(k,k+y.count);c=c.map(function(v,R){var S=a[h+R];return S.length>v.length?S:v}),y.value=l.join(c)}else y.value=l.join(n.slice(k,k+y.count));k+=y.count,y.added||(h+=y.count)}}var w=i[m-1];return m>1&&typeof w.value=="string"&&(w.added||w.removed)&&l.equals("",w.value)&&(i[m-2].value+=w.value,i.pop()),i}var On=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,Hn=/\S/,qn=new be;qn.equals=function(l,e){return this.options.ignoreCase&&(l=l.toLowerCase(),e=e.toLowerCase()),l===e||this.options.ignoreWhitespace&&!Hn.test(l)&&!Hn.test(e)};qn.tokenize=function(l){for(var e=l.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/),n=0;n<e.length-1;n++)!e[n+1]&&e[n+2]&&On.test(e[n])&&On.test(e[n+2])&&(e[n]+=e[n+2],e.splice(n+1,2),n--);return e};function li(l,e,n){return qn.diff(l,e,n)}var tt=new be;tt.tokenize=function(l){this.options.stripTrailingCr&&(l=l.replace(/\r\n/g,`
`));var e=[],n=l.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(var a=0;a<n.length;a++){var t=n[a];a%2&&!this.options.newlineIsToken?e[e.length-1]+=t:(this.options.ignoreWhitespace&&(t=t.trim()),e.push(t))}return e};var ti=new be;ti.tokenize=function(l){return l.split(/(\S.+?[.!?])(?=\s+|$)/)};var ai=new be;ai.tokenize=function(l){return l.split(/([{}:;,]|\s+)/)};function je(l){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?je=function(e){return typeof e}:je=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},je(l)}var ii=Object.prototype.toString,Ae=new be;Ae.useLongestToken=!0;Ae.tokenize=tt.tokenize;Ae.castInput=function(l){var e=this.options,n=e.undefinedReplacement,a=e.stringifyReplacer,t=a===void 0?function(i,r){return typeof r>"u"?n:r}:a;return typeof l=="string"?l:JSON.stringify(gn(l,null,null,t),t,"  ")};Ae.equals=function(l,e){return be.prototype.equals.call(Ae,l.replace(/,([\r\n])/g,"$1"),e.replace(/,([\r\n])/g,"$1"))};function gn(l,e,n,a,t){e=e||[],n=n||[],a&&(l=a(t,l));var i;for(i=0;i<e.length;i+=1)if(e[i]===l)return n[i];var r;if(ii.call(l)==="[object Array]"){for(e.push(l),r=new Array(l.length),n.push(r),i=0;i<l.length;i+=1)r[i]=gn(l[i],e,n,a,t);return e.pop(),n.pop(),r}if(l&&l.toJSON&&(l=l.toJSON()),je(l)==="object"&&l!==null){e.push(l),r={},n.push(r);var s=[],m;for(m in l)l.hasOwnProperty(m)&&s.push(m);for(s.sort(),i=0;i<s.length;i+=1)m=s[i],r[m]=gn(l[m],e,n,a,m);e.pop(),n.pop()}else r=l;return r}var pn=new be;pn.tokenize=function(l){return l.slice()};pn.join=pn.removeEmpty=function(l){return l};var an={exports:{}},Vn;function si(){return Vn||(Vn=1,function(l){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(a){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,r={},s={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function u(o){return o instanceof m?new m(o.type,u(o.content),o.alias):Array.isArray(o)?o.map(u):o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(u){return Object.prototype.toString.call(u).slice(8,-1)},objId:function(u){return u.__id||Object.defineProperty(u,"__id",{value:++i}),u.__id},clone:function u(o,f){f=f||{};var F,g;switch(s.util.type(o)){case"Object":if(g=s.util.objId(o),f[g])return f[g];F={},f[g]=F;for(var b in o)o.hasOwnProperty(b)&&(F[b]=u(o[b],f));return F;case"Array":return g=s.util.objId(o),f[g]?f[g]:(F=[],f[g]=F,o.forEach(function(_,C){F[C]=u(_,f)}),F);default:return o}},getLanguage:function(u){for(;u;){var o=t.exec(u.className);if(o)return o[1].toLowerCase();u=u.parentElement}return"none"},setLanguage:function(u,o){u.className=u.className.replace(RegExp(t,"gi"),""),u.classList.add("language-"+o)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(F){var u=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(F.stack)||[])[1];if(u){var o=document.getElementsByTagName("script");for(var f in o)if(o[f].src==u)return o[f]}return null}},isActive:function(u,o,f){for(var F="no-"+o;u;){var g=u.classList;if(g.contains(o))return!0;if(g.contains(F))return!1;u=u.parentElement}return!!f}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(u,o){var f=s.util.clone(s.languages[u]);for(var F in o)f[F]=o[F];return f},insertBefore:function(u,o,f,F){F=F||s.languages;var g=F[u],b={};for(var _ in g)if(g.hasOwnProperty(_)){if(_==o)for(var C in f)f.hasOwnProperty(C)&&(b[C]=f[C]);f.hasOwnProperty(_)||(b[_]=g[_])}var P=F[u];return F[u]=b,s.languages.DFS(s.languages,function(I,A){A===P&&I!=u&&(this[I]=b)}),b},DFS:function u(o,f,F,g){g=g||{};var b=s.util.objId;for(var _ in o)if(o.hasOwnProperty(_)){f.call(o,_,o[_],F||_);var C=o[_],P=s.util.type(C);P==="Object"&&!g[b(C)]?(g[b(C)]=!0,u(C,f,null,g)):P==="Array"&&!g[b(C)]&&(g[b(C)]=!0,u(C,f,_,g))}}},plugins:{},highlightAll:function(u,o){s.highlightAllUnder(document,u,o)},highlightAllUnder:function(u,o,f){var F={callback:f,container:u,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",F),F.elements=Array.prototype.slice.apply(F.container.querySelectorAll(F.selector)),s.hooks.run("before-all-elements-highlight",F);for(var g=0,b;b=F.elements[g++];)s.highlightElement(b,o===!0,F.callback)},highlightElement:function(u,o,f){var F=s.util.getLanguage(u),g=s.languages[F];s.util.setLanguage(u,F);var b=u.parentElement;b&&b.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(b,F);var _=u.textContent,C={element:u,language:F,grammar:g,code:_};function P(A){C.highlightedCode=A,s.hooks.run("before-insert",C),C.element.innerHTML=C.highlightedCode,s.hooks.run("after-highlight",C),s.hooks.run("complete",C),f&&f.call(C.element)}if(s.hooks.run("before-sanity-check",C),b=C.element.parentElement,b&&b.nodeName.toLowerCase()==="pre"&&!b.hasAttribute("tabindex")&&b.setAttribute("tabindex","0"),!C.code){s.hooks.run("complete",C),f&&f.call(C.element);return}if(s.hooks.run("before-highlight",C),!C.grammar){P(s.util.encode(C.code));return}if(o&&a.Worker){var I=new Worker(s.filename);I.onmessage=function(A){P(A.data)},I.postMessage(JSON.stringify({language:C.language,code:C.code,immediateClose:!0}))}else P(s.highlight(C.code,C.grammar,C.language))},highlight:function(u,o,f){var F={code:u,grammar:o,language:f};if(s.hooks.run("before-tokenize",F),!F.grammar)throw new Error('The language "'+F.language+'" has no grammar.');return F.tokens=s.tokenize(F.code,F.grammar),s.hooks.run("after-tokenize",F),m.stringify(s.util.encode(F.tokens),F.language)},tokenize:function(u,o){var f=o.rest;if(f){for(var F in f)o[F]=f[F];delete o.rest}var g=new y;return c(g,g.head,u),h(u,g,o,g.head,0),w(g)},hooks:{all:{},add:function(u,o){var f=s.hooks.all;f[u]=f[u]||[],f[u].push(o)},run:function(u,o){var f=s.hooks.all[u];if(!(!f||!f.length))for(var F=0,g;g=f[F++];)g(o)}},Token:m};a.Prism=s;function m(u,o,f,F){this.type=u,this.content=o,this.alias=f,this.length=(F||"").length|0}m.stringify=function u(o,f){if(typeof o=="string")return o;if(Array.isArray(o)){var F="";return o.forEach(function(P){F+=u(P,f)}),F}var g={type:o.type,content:u(o.content,f),tag:"span",classes:["token",o.type],attributes:{},language:f},b=o.alias;b&&(Array.isArray(b)?Array.prototype.push.apply(g.classes,b):g.classes.push(b)),s.hooks.run("wrap",g);var _="";for(var C in g.attributes)_+=" "+C+'="'+(g.attributes[C]||"").replace(/"/g,"&quot;")+'"';return"<"+g.tag+' class="'+g.classes.join(" ")+'"'+_+">"+g.content+"</"+g.tag+">"};function k(u,o,f,F){u.lastIndex=o;var g=u.exec(f);if(g&&F&&g[1]){var b=g[1].length;g.index+=b,g[0]=g[0].slice(b)}return g}function h(u,o,f,F,g,b){for(var _ in f)if(!(!f.hasOwnProperty(_)||!f[_])){var C=f[_];C=Array.isArray(C)?C:[C];for(var P=0;P<C.length;++P){if(b&&b.cause==_+","+P)return;var I=C[P],A=I.inside,O=!!I.lookbehind,D=!!I.greedy,G=I.alias;if(D&&!I.pattern.global){var W=I.pattern.toString().match(/[imsuy]*$/)[0];I.pattern=RegExp(I.pattern.source,W+"g")}for(var J=I.pattern||I,z=F.next,T=g;z!==o.tail&&!(b&&T>=b.reach);T+=z.value.length,z=z.next){var q=z.value;if(o.length>u.length)return;if(!(q instanceof m)){var B=1,N;if(D){if(N=k(J,T,u,O),!N||N.index>=u.length)break;var x=N.index,ee=N.index+N[0].length,j=T;for(j+=z.value.length;x>=j;)z=z.next,j+=z.value.length;if(j-=z.value.length,T=j,z.value instanceof m)continue;for(var L=z;L!==o.tail&&(j<ee||typeof L.value=="string");L=L.next)B++,j+=L.value.length;B--,q=u.slice(T,j),N.index-=T}else if(N=k(J,0,q,O),!N)continue;var x=N.index,U=N[0],H=q.slice(0,x),ne=q.slice(x+U.length),ce=T+q.length;b&&ce>b.reach&&(b.reach=ce);var me=z.prev;H&&(me=c(o,me,H),T+=H.length),p(o,me,B);var De=new m(_,A?s.tokenize(U,A):U,G,U);if(z=c(o,me,De),ne&&c(o,z,ne),B>1){var Ke={cause:_+","+P,reach:ce};h(u,o,f,z.prev,T,Ke),b&&Ke.reach>b.reach&&(b.reach=Ke.reach)}}}}}}function y(){var u={value:null,prev:null,next:null},o={value:null,prev:u,next:null};u.next=o,this.head=u,this.tail=o,this.length=0}function c(u,o,f){var F=o.next,g={value:f,prev:o,next:F};return o.next=g,F.prev=g,u.length++,g}function p(u,o,f){for(var F=o.next,g=0;g<f&&F!==u.tail;g++)F=F.next;o.next=F,F.prev=o,u.length-=g}function w(u){for(var o=[],f=u.head.next;f!==u.tail;)o.push(f.value),f=f.next;return o}if(!a.document)return a.addEventListener&&(s.disableWorkerMessageHandler||a.addEventListener("message",function(u){var o=JSON.parse(u.data),f=o.language,F=o.code,g=o.immediateClose;a.postMessage(s.highlight(F,s.languages[f],f)),g&&a.close()},!1)),s;var v=s.util.currentScript();v&&(s.filename=v.src,v.hasAttribute("data-manual")&&(s.manual=!0));function R(){s.manual||s.highlightAll()}if(!s.manual){var S=document.readyState;S==="loading"||S==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",R):window.requestAnimationFrame?window.requestAnimationFrame(R):window.setTimeout(R,16)}return s}(e);l.exports&&(l.exports=n),typeof Mn<"u"&&(Mn.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(t,i){var r={};r["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[i]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};s["language-"+i]={pattern:/[\s\S]+/,inside:n.languages[i]};var m={};m[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:s},n.languages.insertBefore("markup","cdata",m)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(a,t){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:n.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(a){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var i=a.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var a="Loading…",t=function(v,R){return"✖ Error "+v+" while fetching file: "+R},i="✖ Error: File does not exist or is empty",r={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",m="loading",k="loaded",h="failed",y="pre[data-src]:not(["+s+'="'+k+'"]):not(['+s+'="'+m+'"])';function c(v,R,S){var u=new XMLHttpRequest;u.open("GET",v,!0),u.onreadystatechange=function(){u.readyState==4&&(u.status<400&&u.responseText?R(u.responseText):u.status>=400?S(t(u.status,u.statusText)):S(i))},u.send(null)}function p(v){var R=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(R){var S=Number(R[1]),u=R[2],o=R[3];return u?o?[S,Number(o)]:[S,void 0]:[S,S]}}n.hooks.add("before-highlightall",function(v){v.selector+=", "+y}),n.hooks.add("before-sanity-check",function(v){var R=v.element;if(R.matches(y)){v.code="",R.setAttribute(s,m);var S=R.appendChild(document.createElement("CODE"));S.textContent=a;var u=R.getAttribute("data-src"),o=v.language;if(o==="none"){var f=(/\.(\w+)$/.exec(u)||[,"none"])[1];o=r[f]||f}n.util.setLanguage(S,o),n.util.setLanguage(R,o);var F=n.plugins.autoloader;F&&F.loadLanguages(o),c(u,function(g){R.setAttribute(s,k);var b=p(R.getAttribute("data-range"));if(b){var _=g.split(/\r\n?|\n/g),C=b[0],P=b[1]==null?_.length:b[1];C<0&&(C+=_.length),C=Math.max(0,Math.min(C-1,_.length)),P<0&&(P+=_.length),P=Math.max(0,Math.min(P,_.length)),g=_.slice(C,P).join(`
`),R.hasAttribute("data-start")||R.setAttribute("data-start",String(C+1))}S.textContent=g,n.highlightElement(S)},function(g){R.setAttribute(s,h),S.textContent=g})}}),n.plugins.fileHighlight={highlight:function(R){for(var S=(R||document).querySelectorAll(y),u=0,o;o=S[u++];)n.highlightElement(o)}};var w=!1;n.fileHighlight=function(){w||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),w=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()}(an)),an.exports}var ri=si();const sn=yl(ri);function oi(){const l=$.useRelayEnvironment(),e=Je(tn);return n=>$.commitLocalUpdate(l,a=>{new _e(a).delete(n),e(i=>i.delete(n))})}function ui(){const l=$.useRelayEnvironment(),[e,n]=ye(tn);return(a,t,i,r)=>$.commitLocalUpdate(l,s=>{var y,c;const m=new _e(s),k=e.findEntry((p,w)=>p.path===a&&p.line===t);if(k!=null){const[p,w]=k,v=m.get(p);v==null||v.setValues({isPending:!0,createdAt:ae().toISOString(),viewerCanReply:!0});return}const h={isPending:!0,createdAt:ae().toISOString(),startLine:r==null?null:t,line:r??t,path:a,viewerCanReply:!0};(c=(y=m.get(i))==null?void 0:y.createAndAppendNodeToEdge(s,"reviewThreads",{first:20},"PullRequestReviewThreadConnection","PullRequestReviewThreadEdge","PullRequestReviewThread",h))==null||c.then(({nodeId:p,node:w})=>{n(v=>v.set(p,h))})})}const at={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommentThreadPullRequestFragment",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:30}],concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"}],type:"PullRequest",abstractKey:null};at.hash="aa1f6a4d5384a0133128bd587d5501f7";const it=function(){var l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"line",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"startLine",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommentThreadFragment",selections:[l,{alias:null,args:null,kind:"ScalarField",name:"isResolved",storageKey:null},e,n,{alias:null,args:[{kind:"Literal",name:"first",value:20}],concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[l,n,e,{args:null,kind:"FragmentSpread",name:"CommentFragment"}],storageKey:null}],storageKey:null}],storageKey:"comments(first:20)"},{alias:null,args:null,kind:"ScalarField",name:"viewerCanReply",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanResolve",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanUnresolve",storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],type:"PullRequestReviewThread",abstractKey:null}}();it.hash="4c2440be5d1adaf049383892d868dc79";const st=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"input"}],e=[{kind:"Variable",name:"input",variableName:"input"}],n={alias:null,args:null,kind:"ScalarField",name:"isResolved",storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"resolveMutationResolveReviewThreadMutation",selections:[{alias:null,args:e,concreteType:"ResolveReviewThreadPayload",kind:"LinkedField",name:"resolveReviewThread",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"thread",plural:!1,selections:[n],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"resolveMutationResolveReviewThreadMutation",selections:[{alias:null,args:e,concreteType:"ResolveReviewThreadPayload",kind:"LinkedField",name:"resolveReviewThread",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"thread",plural:!1,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:"641695ec9879785ab75cf16964a6790c",id:null,metadata:{},name:"resolveMutationResolveReviewThreadMutation",operationKind:"mutation",text:`mutation resolveMutationResolveReviewThreadMutation(
  $input: ResolveReviewThreadInput!
) {
  resolveReviewThread(input: $input) {
    thread {
      isResolved
      id
    }
  }
}
`}}}();st.hash="f70941499b9849ac6ef09d817901d77e";const di=st;function ci(){const[l,e]=$.useMutation(di);return[(n,a)=>l({variables:{input:{threadId:n}},onCompleted:a}),e]}const rt=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"input"}],e=[{kind:"Variable",name:"input",variableName:"input"}],n={alias:null,args:null,kind:"ScalarField",name:"isResolved",storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"unresolveMutationResolveReviewThreadMutation",selections:[{alias:null,args:e,concreteType:"UnresolveReviewThreadPayload",kind:"LinkedField",name:"unresolveReviewThread",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"thread",plural:!1,selections:[n],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"unresolveMutationResolveReviewThreadMutation",selections:[{alias:null,args:e,concreteType:"UnresolveReviewThreadPayload",kind:"LinkedField",name:"unresolveReviewThread",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"thread",plural:!1,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:"902dd181485f550cd286b893d80a18b4",id:null,metadata:{},name:"unresolveMutationResolveReviewThreadMutation",operationKind:"mutation",text:`mutation unresolveMutationResolveReviewThreadMutation(
  $input: UnresolveReviewThreadInput!
) {
  unresolveReviewThread(input: $input) {
    thread {
      isResolved
      id
    }
  }
}
`}}}();rt.hash="97e6df83e28c50be44d194ed35693ced";const mi=rt;function gi(){const[l,e]=$.useMutation(mi);return[(n,a)=>l({variables:{input:{threadId:n}},onCompleted:a}),e]}const pi=it,yi=at;function fi({reviewThread:l,pr:e}){var C,P,I,A,O;const n=$.useFragment(pi,l),a=$.useFragment(yi,e);pe(Z((P=(C=a.reviews)==null?void 0:C.edges)==null?void 0:P.map(D=>D==null?void 0:D.node)).map(D=>D.state==null));const t=E.useRef(null),[i,r]=E.useState(!1),[s,m,k]=Xe(n.isResolved,n.isResolved?12:16),h=Ea(),y=Ol(),c=oi(),p=E.useCallback(()=>{var G,W;const D=(G=t==null?void 0:t.current)==null?void 0:G.getMarkdown();h(D,n.id),(W=t==null?void 0:t.current)==null||W.setMarkdown("")},[n.id,h]),[w,v]=ci(),[R,S]=gi(),[u,o]=E.useState(!0),f=Z((A=(I=n.comments)==null?void 0:I.edges)==null?void 0:A.map(D=>D==null?void 0:D.node)),F=!n.isPending&&d(re,{size:n.isResolved?"compact-xs":"compact-sm",variant:"default",disabled:!(n.viewerCanResolve||n.viewerCanUnresolve),loading:v||S,onClick:()=>{n.isResolved?(R(n.id),k(!1)):(w(n.id),k(!0))},children:K(V,{gap:"xxxs",children:[d(ma,{stroke:1,size:16}),n.isResolved?"Resolved":"Resolve"]})}),g=n.viewerCanReply&&!s,b=We(f);let _=null;return b!=null&&(b.startLine!=null?_=`${f.length} comment(s) on lines ${b.startLine}-${(O=We(f))==null?void 0:O.line}`:_=`${f.length} comment(s) on line ${b.line}`),n.isPending&&(n.startLine!=null?_=`are commenting on lines ${n.startLine}-${n.line}`:_=`are commenting on line ${n.line}`),K(te,{withBorder:!0,radius:0,className:"comment-thread",color:n.isPending?"yellow":void 0,children:[d(te.Section,{withBorder:!0,color:n.isPending?"yellow":void 0,children:K(V,{className:ve.secondaryText,mx:"sm",my:n.isResolved?2:6,children:[d(Q,{size:n.isResolved?"xs":"sm",children:_}),K(V,{align:"center",className:ve.floatRight,children:[F,!n.isPending&&m]})]})}),K(te.Section,{className:"thread-comment middle",children:[!s&&f.map((D,G)=>d(xn,{comment:D,header:"none",isMiddle:G>0},D.id)),g&&K(ge,{gap:0,children:[d(Dl,{converterRef:t,onChange:o,instanceId:n.id}),K(V,{justify:"space-between",m:"xs",mt:"xs",children:[d(re,{disabled:!n.isPending&&u,onClick:()=>{var D;y(n.id),(D=t==null?void 0:t.current)==null||D.setMarkdown(""),n.isPending&&c(n.id)},size:"compact-sm",variant:"secondary",children:"Cancel"}),K(V,{children:[d(re,{onClick:()=>r(!0),size:"compact-sm",variant:"secondary",disabled:u,children:"Suggest changes"}),d(re,{onClick:()=>p(),size:"compact-sm",disabled:u,children:"Save"})]})]})]})]})]})}function hi(l){return d(Fn,{children:d(fi,{...l})})}const vi="_code-row_3ty0a_1",ki="_file-table_3ty0a_8",Fi="_line-number_3ty0a_10",Ri="_token-container_3ty0a_41",He={codeRow:vi,fileTable:ki,lineNumber:Fi,tokenContainer:Ri},Bn=/^@@ ([\+\-0-9]+)(?:,([0-9]+))? ([\+\-0-9]+)(?:,([0-9]+))? @@/;new Set(".svg");const wi={bzl:"py",rs:"rust"},Ci=lt;function bi(l){return d(E.Suspense,{fallback:d(Ie,{text:"Loading file"}),children:d(Ti,{...l})})}function Ti({patch:l,filename:e,pr:n}){var b,_;const a=(l==null?void 0:l.split(`
`))??[],[t,i]=E.useState(a.length>2e3||l.length>2e4),r=new Map,s=$.useFragment(Ci,n),[m,k]=E.useState([null,null]),[h,y]=E.useState(!1),c=ui(),p=E.useCallback(()=>{y(!1),k([null,null])},[]),w=E.useCallback(C=>{y(!0),k(P=>[C,P[1]]),window.addEventListener("mouseup",p)},[k,p]),v=E.useCallback((C,P)=>{y(!1),window.removeEventListener("mouseup",p),m[0]!=null&&(m[0]==P?c(e,P,s.id):c(e,m[0],s.id,P),k([null,null]),C.preventDefault&&C.preventDefault())},[c,e,m,s.id,p]),R=E.useCallback(C=>{h&&k(P=>[P[0],C])},[k,h]);if(t)return d("div",{onClick:()=>i(!1),children:K(Q,{pl:"sm",children:["This file is pretty big (",At(l.length*8),")! Click to load."]})});const S=Z((_=(b=s==null?void 0:s.reviewThreads)==null?void 0:b.edges)==null?void 0:_.map(C=>C==null?void 0:C.node).flat().filter(C=>(C==null?void 0:C.path)==e));let u;for(const C of a){if(Bn.test(C)){u=C,r.set(u,[]);continue}u!=null&&r.get(u).push(C)}const o=Array.from(r.entries());let f=0;const F=o.map(([C,P],I)=>{const A=P.filter(q=>q!=="\\ No newline at end of file"),[O,D,G,W,J]=C.match(Bn);f=Math.max(f,parseInt(W)+parseInt(J));const z=[];let T=0;for(let q=0;q<A.length;q++){const B=A[q],N=B.slice(1);let ee=[];if(q<A.length-1&&A[q].startsWith("-")&&A[q+1].startsWith("+")&&(q==0||q>0&&A[q-1].startsWith(" "))&&(q===A.length-2||q<A.length-2&&A[q+2].startsWith(" "))){const j=li(N,A[q+1].slice(1),{});ee=[[],[]],j.map(L=>{if(L.added===!0){ee[1].push(d("span",{className:"added-line-emphasis",children:L.value},`added_${B}`));return}else if(L.removed===!0){ee[0].push(d("span",{className:"removed-line-emphasis",children:L.value},`removed_${B}`));return}ee[0].push(L.value),ee[1].push(L.value)})}else{sn.manual=!0;const j=e.substring(e.lastIndexOf(".")+1),L=wi[j]??j,x=sn.languages[L]??null;let U=null;x!=null&&(U=sn.highlight(N,x,j)),ee=[[U==null?N:d("div",{className:He.tokenContainer,dangerouslySetInnerHTML:{__html:U}},0)]]}for(const[j,L]of ee.entries()){const x=parseInt(W)+T,U=Ye(A[q+j].startsWith("+")&&"added-line",B.startsWith("-")&&"removed-line",m[0]!=null&&m[1]!=null&&x>=m[0]&&x<=m[1]&&"highlighted-line"),H=A[q+j].startsWith("-");z.push(K("tr",{className:U,children:[d("td",{className:He.lineNumber,onMouseDown:()=>w(x),onMouseEnter:()=>R(x),onMouseUp:ne=>v(ne,x),children:H?"":x}),d("td",{className:He.codeRow,children:L})]},`${q}_${j}_${H}`));for(const ne of S??[])ne.line==x&&!A[q+j].startsWith("-")&&z.push(d("tr",{className:"comment-container",children:d("td",{colSpan:2,children:d(hi,{pr:s,reviewThread:ne},`ct_${x}`)})}))}ee.length>1&&q++,A[q].startsWith("-")||T++}return K(E.Fragment,{children:[z,I!=o.length-1?d("tr",{children:d("td",{className:ve.background,colSpan:2,style:{paddingLeft:"4ch",borderTop:"1px var(--bs-border-color-translucent) dashed",borderBottom:"1px var(--bs-border-color-translucent) dashed",backgroundColor:"var(--bs-light-bg-subtle)"},children:" "})}):null]},`${I}_line`)}),g=f.toString().length;return K("table",{className:He.fileTable,style:{flex:1,tableLayout:"fixed",borderCollapse:"collapse"},children:[d("thead",{children:K("tr",{children:[d("th",{style:{width:g+1+"ch",fontSize:"0.85rem"}}),d("th",{})]})}),d("tbody",{children:F})]})}const Si=nt,_i=et,Ki=Xl;function Li(l){return d(E.Suspense,{fallback:d(Ie,{}),children:d(Pi,{...l})})}function Pi({pr:l,repo:e,commit:n,compareData:a}){var y,c;const t=$.useFragment(Si,l),i=$.useFragment(_i,e),r=$.useFragment(Ki,n),s=pe((y=r.parents.edges)==null?void 0:y.map(p=>p==null?void 0:p.node)),[m,k,h]=Xe();return K(te,{className:"file-header",mb:"md",withBorder:!0,children:[d(te.Section,{inheritPadding:!0,onMouseDown:p=>{p.detail>1&&p.preventDefault()},style:{top:-16},withBorder:!0,py:6,children:K(V,{align:"center",justify:"start",children:[d(ei,{path:a.filename}),K(Q,{style:{whiteSpace:"pre"},children:[" ",K(Q,{span:!0,c:"green.8",children:["+",a.additions]})," ",K(Q,{span:!0,c:"red.8",children:["-",a.deletions]})]}),K(V,{align:"center",style:{marginLeft:"auto"},gap:"sm",children:[d(Ja,{commitOid:r.oid,defaultBranchName:(c=i.defaultBranchRef)==null?void 0:c.name,filename:a.filename,name:i.name,owner:i.owner.login,parentCommitOid:s==null?void 0:s.oid}),k]})]})}),!m&&d(te.Section,{style:{padding:0},children:a.patch==null?d(Q,{pl:"sm",children:"No diff for this file"}):d(V,{gap:0,children:d(bi,{filename:a.filename,name:i.name,owner:i.owner.login,patch:a.patch,pr:t})})})]},a.filename)}const Ei=Jl,xi=Yl,qi=Zl;function jn({owner:l,name:e,commit:n,pr:a,repo:t,baseRef:i}){var R,S,u;const r=$.useFragment(Ei,n),s=$.useFragment(xi,t),m=$.useFragment(qi,a),k=le(Rn),h=Z(((S=(R=r==null?void 0:r.parents)==null?void 0:R.edges)==null?void 0:S.map(o=>o==null?void 0:o.node))??[]),y=pe(h),c=fl(l,e,i,r.oid,!k||y!=null),p=E.useRef(null),[w,v]=Xe();return k&&(h==null?void 0:h.length)>1?d(dn,{className:"commit-header",ref:p,variant:"info",children:r.message}):K(qe,{children:[k?d(dn,{className:"commit-header",ref:p,variant:"info",children:K(V,{children:[K("div",{children:["Commit: ",r.messageHeadline," -"," ",K("span",{className:ve.colorSuccess,children:["+",r.additions]})," ",K("span",{className:ve.colorDanger,children:["-",r.deletions]})]}),v]})}):null,!w&&((u=c==null?void 0:c.files)==null?void 0:u.map(o=>d(Li,{commit:r,compareData:o,pr:m,repo:s},o.filename)))]})}const Ai=Ql,Ii=Wl,Mi=Gl;function Di({owner:l,name:e,pr:n,repo:a}){var R,S,u;const t=$.useFragment(Ai,n),i=$.useFragment(Mi,a),r=le(ka),s=le(ql),m=le(Rn),k=fl(l,e,r==null?void 0:r.oid,s==null?void 0:s.headOid),h=$.useLazyLoadQuery(Ii,{ids:(k==null?void 0:k.commits.map(o=>o.node_id))??(s==null?void 0:s.nodeIds)??[]},{fetchPolicy:s==null&&r==null?"store-only":"store-or-network",fetchKey:`${s==null?void 0:s.headOid}...${r==null?void 0:r.oid}`})??null,y=Z((R=t.commits.edges)==null?void 0:R.map(o=>{var f;return(f=o==null?void 0:o.node)==null?void 0:f.commit})),c=s==null?y:h.nodes??[],p=(((S=t.commits)==null?void 0:S.totalCount)??0)-c.length,w=ml(c);if(w==null)return null;if(!m)return d(jn,{baseRef:(r==null?void 0:r.oid)??(s==null?void 0:s.baseRef)??((u=t.baseRef)==null?void 0:u.name),commit:w,name:e,owner:l,pr:t,repo:i});const v=c.map(o=>{var F,g;if(o==null||i==null)return null;const f=pe((g=(F=o.parents)==null?void 0:F.edges)==null?void 0:g.map(b=>b==null?void 0:b.node));return d(jn,{baseRef:(r==null?void 0:r.oid)??(f==null?void 0:f.oid),commit:o,name:e,owner:l,pr:t,repo:i},o.id)});return K(qe,{children:[p>0&&d(dn,{variant:"warning",children:K("span",{children:[p," more commits and pagination is not implemented!"]})}),v]})}function Ni(l){return d(Fn,{children:d(Di,{...l})})}var rn,Gn;function $i(){if(Gn)return rn;Gn=1;function l(e,n,a){var t,i,r,s,m;n==null&&(n=100);function k(){var y=Date.now()-s;y<n&&y>=0?t=setTimeout(k,n-y):(t=null,a||(m=e.apply(r,i),r=i=null))}var h=function(){r=this,i=arguments,s=Date.now();var y=a&&!t;return t||(t=setTimeout(k,n)),y&&(m=e.apply(r,i),r=i=null),m};return h.clear=function(){t&&(clearTimeout(t),t=null)},h.flush=function(){t&&(m=e.apply(r,i),r=i=null,clearTimeout(t),t=null)},h}return l.debounce=l,rn=l,rn}var zi=$i();const Ui=yl(zi);let ue;typeof window<"u"?ue=window:typeof self<"u"?ue=self:ue=global;let yn=null,fn=null;const Wn=20,on=ue.clearTimeout,Qn=ue.setTimeout,un=ue.cancelAnimationFrame||ue.mozCancelAnimationFrame||ue.webkitCancelAnimationFrame,Zn=ue.requestAnimationFrame||ue.mozRequestAnimationFrame||ue.webkitRequestAnimationFrame;un==null||Zn==null?(yn=on,fn=function(e){return Qn(e,Wn)}):(yn=function([e,n]){un(e),on(n)},fn=function(e){const n=Zn(function(){on(a),e()}),a=Qn(function(){un(n),e()},Wn);return[n,a]});function Oi(l){let e,n,a,t,i,r,s;const m=typeof document<"u"&&document.attachEvent;if(!m){r=function(S){const u=S.__resizeTriggers__,o=u.firstElementChild,f=u.lastElementChild,F=o.firstElementChild;f.scrollLeft=f.scrollWidth,f.scrollTop=f.scrollHeight,F.style.width=o.offsetWidth+1+"px",F.style.height=o.offsetHeight+1+"px",o.scrollLeft=o.scrollWidth,o.scrollTop=o.scrollHeight},i=function(S){return S.offsetWidth!==S.__resizeLast__.width||S.offsetHeight!==S.__resizeLast__.height},s=function(S){if(S.target.className&&typeof S.target.className.indexOf=="function"&&S.target.className.indexOf("contract-trigger")<0&&S.target.className.indexOf("expand-trigger")<0)return;const u=this;r(this),this.__resizeRAF__&&yn(this.__resizeRAF__),this.__resizeRAF__=fn(function(){i(u)&&(u.__resizeLast__.width=u.offsetWidth,u.__resizeLast__.height=u.offsetHeight,u.__resizeListeners__.forEach(function(F){F.call(u,S)}))})};let c=!1,p="";a="animationstart";const w="Webkit Moz O ms".split(" ");let v="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),R="";{const S=document.createElement("fakeelement");if(S.style.animationName!==void 0&&(c=!0),c===!1){for(let u=0;u<w.length;u++)if(S.style[w[u]+"AnimationName"]!==void 0){R=w[u],p="-"+R.toLowerCase()+"-",a=v[u],c=!0;break}}}n="resizeanim",e="@"+p+"keyframes "+n+" { from { opacity: 0; } to { opacity: 0; } } ",t=p+"animation: 1ms "+n+"; "}const k=function(c){if(!c.getElementById("detectElementResize")){const p=(e||"")+".resize-triggers { "+(t||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',w=c.head||c.getElementsByTagName("head")[0],v=c.createElement("style");v.id="detectElementResize",v.type="text/css",l!=null&&v.setAttribute("nonce",l),v.styleSheet?v.styleSheet.cssText=p:v.appendChild(c.createTextNode(p)),w.appendChild(v)}};return{addResizeListener:function(c,p){if(m)c.attachEvent("onresize",p);else{if(!c.__resizeTriggers__){const w=c.ownerDocument,v=ue.getComputedStyle(c);v&&v.position==="static"&&(c.style.position="relative"),k(w),c.__resizeLast__={},c.__resizeListeners__=[],(c.__resizeTriggers__=w.createElement("div")).className="resize-triggers";const R=w.createElement("div");R.className="expand-trigger",R.appendChild(w.createElement("div"));const S=w.createElement("div");S.className="contract-trigger",c.__resizeTriggers__.appendChild(R),c.__resizeTriggers__.appendChild(S),c.appendChild(c.__resizeTriggers__),r(c),c.addEventListener("scroll",s,!0),a&&(c.__resizeTriggers__.__animationListener__=function(o){o.animationName===n&&r(c)},c.__resizeTriggers__.addEventListener(a,c.__resizeTriggers__.__animationListener__))}c.__resizeListeners__.push(p)}},removeResizeListener:function(c,p){if(m)c.detachEvent("onresize",p);else if(c.__resizeListeners__.splice(c.__resizeListeners__.indexOf(p),1),!c.__resizeListeners__.length){c.removeEventListener("scroll",s,!0),c.__resizeTriggers__.__animationListener__&&(c.__resizeTriggers__.removeEventListener(a,c.__resizeTriggers__.__animationListener__),c.__resizeTriggers__.__animationListener__=null);try{c.__resizeTriggers__=!c.removeChild(c.__resizeTriggers__)}catch{}}}}}class Hi extends E.Component{constructor(...e){super(...e),this.state={height:this.props.defaultHeight||0,width:this.props.defaultWidth||0},this._autoSizer=null,this._detectElementResize=null,this._didLogDeprecationWarning=!1,this._parentNode=null,this._resizeObserver=null,this._timeoutId=null,this._onResize=()=>{this._timeoutId=null;const{disableHeight:n,disableWidth:a,onResize:t}=this.props;if(this._parentNode){const i=window.getComputedStyle(this._parentNode)||{},r=parseFloat(i.paddingLeft||"0"),s=parseFloat(i.paddingRight||"0"),m=parseFloat(i.paddingTop||"0"),k=parseFloat(i.paddingBottom||"0"),h=this._parentNode.getBoundingClientRect(),y=h.height-m-k,c=h.width-r-s;if(!n&&this.state.height!==y||!a&&this.state.width!==c){this.setState({height:y,width:c});const p=()=>{this._didLogDeprecationWarning||(this._didLogDeprecationWarning=!0,console.warn("scaledWidth and scaledHeight parameters have been deprecated; use width and height instead"))};typeof t=="function"&&t({height:y,width:c,get scaledHeight(){return p(),y},get scaledWidth(){return p(),c}})}}},this._setRef=n=>{this._autoSizer=n}}componentDidMount(){const{nonce:e}=this.props,n=this._autoSizer?this._autoSizer.parentNode:null;if(n!=null&&n.ownerDocument&&n.ownerDocument.defaultView&&n instanceof n.ownerDocument.defaultView.HTMLElement){this._parentNode=n;const a=n.ownerDocument.defaultView.ResizeObserver;a!=null?(this._resizeObserver=new a(()=>{this._timeoutId=setTimeout(this._onResize,0)}),this._resizeObserver.observe(n)):(this._detectElementResize=Oi(e),this._detectElementResize.addResizeListener(n,this._onResize)),this._onResize()}}componentWillUnmount(){this._parentNode&&(this._detectElementResize&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize),this._timeoutId!==null&&clearTimeout(this._timeoutId),this._resizeObserver&&this._resizeObserver.disconnect())}render(){const{children:e,defaultHeight:n,defaultWidth:a,disableHeight:t=!1,disableWidth:i=!1,doNotBailOutOnEmptyChildren:r=!1,nonce:s,onResize:m,style:k={},tagName:h="div",...y}=this.props,{height:c,width:p}=this.state,w={overflow:"visible"},v={};let R=!1;return t||(c===0&&(R=!0),w.height=0,v.height=c,v.scaledHeight=c),i||(p===0&&(R=!0),w.width=0,v.width=p,v.scaledWidth=p),r&&(R=!1),E.createElement(h,{ref:this._setRef,style:{...w,...k},...y},!R&&e(v))}}const Vi=[["commit-header","--bs-info",25],["comment-container","--bs-warning",20],["file-header","--bs-dark-bg-subtle",15]];function Bi({height:l,width:e}){const n=E.useRef(null),a=le(ql);return E.useLayoutEffect(()=>{const t=n.current,i=t==null?void 0:t.getContext("2d");if(i==null)return;const r=document.getElementById("commits-container");if(r==null)return;const s=document.getElementById("scroller");if(s==null)return;const m=document.getElementById("scrollbar-container");if(m==null)return;const k=()=>{s.style.top=String(r.clientHeight*r.scrollTop/r.scrollHeight),s.style.height=String(r.clientHeight*r.clientHeight/r.scrollHeight)},h=R=>{R.preventDefault&&R.preventDefault(),R.buttons===1&&(r.scrollTop=R.clientY*r.scrollHeight/r.clientHeight-r.clientHeight/2)},y=R=>{document.removeEventListener("mousemove",h)},c=R=>{R.buttons===1&&(document.addEventListener("mousemove",h),document.addEventListener("mouseup",y),r.scrollTop=R.clientY*r.scrollHeight/r.clientHeight-r.clientHeight/2)},p=()=>{i.clearRect(0,0,e,l);for(const[R,S,u]of Vi)for(const o of Array.from(document.getElementsByClassName(R))){const f=o.getBoundingClientRect().top,F=l*f/r.scrollHeight;i.beginPath(),i.moveTo(25-u,F),i.lineTo(25,F),i.strokeStyle=getComputedStyle(r).getPropertyValue(S),i.stroke()}},w=Ui(p,500);p(),k(),r.addEventListener("scroll",k);const v=new ResizeObserver(w);return v.observe(r),m.addEventListener("mousedown",c),()=>{r.removeEventListener("scroll",k),v.disconnect(),m.removeEventListener("mousedown",c),document.removeEventListener("mouseup",y),document.removeEventListener("mousemove",h)}},[l,a,e]),d("canvas",{height:l,ref:n,width:e})}function ji(){return K("div",{id:"scrollbar-container",style:{flex:1},children:[d(Hi,{children:({height:l,width:e})=>isNaN(l)||isNaN(e)?null:d(Bi,{height:l,width:e})}),d("div",{id:"scroller",style:{width:10,backgroundColor:"var(--bs-secondary-bg)",position:"relative",left:15,borderRadius:3}})]})}const ot=function(){var l={defaultValue:null,kind:"LocalArgument",name:"id"},e={defaultValue:null,kind:"LocalArgument",name:"includeTeam"},n=[{kind:"Variable",name:"id",variableName:"id"}],a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},s=[{kind:"Literal",name:"first",value:30}],m={alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},k={kind:"InlineFragment",selections:[t],type:"Node",abstractKey:"__isNode"},h={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[a,m,k],storageKey:null},y={alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},p=[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},y];return{fragment:{argumentDefinitions:[l,e],kind:"Fragment",metadata:null,name:"SummaryPanelFragment2",selections:[{alias:null,args:n,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"SummaryPanelFragment"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[e,l],kind:"Operation",name:"SummaryPanelFragment2",selections:[{alias:null,args:n,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[a,t,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"mergeable",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},i,r,{alias:null,args:null,kind:"ScalarField",name:"number",storageKey:null},{alias:null,args:s,concreteType:"IssueCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"IssueCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"IssueComment",kind:"LinkedField",name:"node",plural:!1,selections:[i,t],storageKey:null}],storageKey:null}],storageKey:"comments(first:30)"},h,{alias:null,args:s,concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[y,r,h,t],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"},{alias:null,args:s,concreteType:"ReviewRequestConnection",kind:"LinkedField",name:"reviewRequests",plural:!1,selections:[{alias:null,args:null,concreteType:"ReviewRequestEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"ReviewRequest",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"asCodeOwner",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"requestedReviewer",plural:!1,selections:[a,{kind:"InlineFragment",selections:[m],type:"User",abstractKey:null},{condition:"includeTeam",kind:"Condition",passingValue:!0,selections:[{kind:"InlineFragment",selections:[c],type:"Team",abstractKey:null}]},k],storageKey:null},t],storageKey:null}],storageKey:null}],storageKey:"reviewRequests(first:30)"},{alias:"lastCommit",args:[{kind:"Literal",name:"last",value:1}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,concreteType:"StatusCheckRollup",kind:"LinkedField",name:"statusCheckRollup",plural:!1,selections:[y,{alias:null,args:[{kind:"Literal",name:"first",value:50}],concreteType:"StatusCheckRollupContextConnection",kind:"LinkedField",name:"contexts",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null},{alias:null,args:null,concreteType:"CheckRunStateCount",kind:"LinkedField",name:"checkRunCountsByState",plural:!0,selections:p,storageKey:null},{alias:null,args:null,concreteType:"StatusContextStateCount",kind:"LinkedField",name:"statusContextCountsByState",plural:!0,selections:p,storageKey:null},{alias:null,args:null,concreteType:"StatusCheckRollupContextEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[a,{kind:"InlineFragment",selections:[t,{alias:null,args:null,kind:"ScalarField",name:"detailsUrl",storageKey:null},c,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"conclusion",storageKey:null}],type:"CheckRun",abstractKey:null},{kind:"InlineFragment",selections:[t,y,{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"context",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"avatarUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"targetUrl",storageKey:null}],type:"StatusContext",abstractKey:null},k],storageKey:null}],storageKey:null}],storageKey:"contexts(first:50)"},t],storageKey:null},t],storageKey:null},t],storageKey:null}],storageKey:null}],storageKey:"commits(last:1)"}],type:"PullRequest",abstractKey:null}],storageKey:null}]},params:{cacheID:"65bce0aa34508256dff18f4f3727f990",id:null,metadata:{},name:"SummaryPanelFragment2",operationKind:"query",text:`query SummaryPanelFragment2(
  $includeTeam: Boolean!
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...SummaryPanelFragment
    id
  }
}

fragment PRTitleFragment on PullRequest {
  title
  body
  number
  comments(first: 30) {
    edges {
      node {
        body
        id
      }
    }
  }
}

fragment SummaryPanelFragment on PullRequest {
  mergeable
  url
  title
  body
  createdAt
  ...PRTitleFragment
  author {
    __typename
    login
    ... on Node {
      __isNode: __typename
      id
    }
  }
  reviews(first: 30) {
    edges {
      node {
        state
        createdAt
        author {
          __typename
          login
          ... on Node {
            __isNode: __typename
            id
          }
        }
        id
      }
    }
  }
  reviewRequests(first: 30) {
    edges {
      node {
        asCodeOwner
        requestedReviewer {
          __typename
          ... on User {
            login
          }
          ... on Team @include(if: $includeTeam) {
            name
          }
          ... on Node {
            __isNode: __typename
            id
          }
        }
        id
      }
    }
  }
  lastCommit: commits(last: 1) {
    edges {
      node {
        commit {
          statusCheckRollup {
            state
            contexts(first: 50) {
              totalCount
              checkRunCountsByState {
                count
                state
              }
              statusContextCountsByState {
                count
                state
              }
              edges {
                node {
                  __typename
                  ... on CheckRun {
                    __typename
                    id
                    detailsUrl
                    name
                    status
                    conclusion
                  }
                  ... on StatusContext {
                    __typename
                    id
                    state
                    description
                    context
                    avatarUrl
                    targetUrl
                  }
                  ... on Node {
                    __isNode: __typename
                    id
                  }
                }
              }
            }
            id
          }
          id
        }
        id
      }
    }
  }
  id
}
`}}}();ot.hash="cde161daabf09c150daa44066188d77f";const ut=function(){var l={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},e=[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],n={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:e,storageKey:null},a=[{kind:"Literal",name:"first",value:30}],t={alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},r=[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},t],s={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{kind:"RootArgument",name:"includeTeam"}],kind:"Fragment",metadata:{refetch:{connection:null,fragmentPathInResult:["node"],operation:ot,identifierInfo:{identifierField:"id",identifierQueryVariableName:"id"}}},name:"SummaryPanelFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"mergeable",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},l,{args:null,kind:"FragmentSpread",name:"PRTitleFragment"},n,{alias:null,args:a,concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[t,l,n],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"},{alias:null,args:a,concreteType:"ReviewRequestConnection",kind:"LinkedField",name:"reviewRequests",plural:!1,selections:[{alias:null,args:null,concreteType:"ReviewRequestEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"ReviewRequest",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"asCodeOwner",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"requestedReviewer",plural:!1,selections:[{kind:"InlineFragment",selections:e,type:"User",abstractKey:null},{condition:"includeTeam",kind:"Condition",passingValue:!0,selections:[{kind:"InlineFragment",selections:[i],type:"Team",abstractKey:null}]}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"reviewRequests(first:30)"},{alias:"lastCommit",args:[{kind:"Literal",name:"last",value:1}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,concreteType:"StatusCheckRollup",kind:"LinkedField",name:"statusCheckRollup",plural:!1,selections:[t,{alias:null,args:[{kind:"Literal",name:"first",value:50}],concreteType:"StatusCheckRollupContextConnection",kind:"LinkedField",name:"contexts",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null},{alias:null,args:null,concreteType:"CheckRunStateCount",kind:"LinkedField",name:"checkRunCountsByState",plural:!0,selections:r,storageKey:null},{alias:null,args:null,concreteType:"StatusContextStateCount",kind:"LinkedField",name:"statusContextCountsByState",plural:!0,selections:r,storageKey:null},{alias:null,args:null,concreteType:"StatusCheckRollupContextEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[s,m,{alias:null,args:null,kind:"ScalarField",name:"detailsUrl",storageKey:null},i,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"conclusion",storageKey:null}],type:"CheckRun",abstractKey:null},{kind:"InlineFragment",selections:[s,m,t,{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"context",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"avatarUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"targetUrl",storageKey:null}],type:"StatusContext",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:"contexts(first:50)"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"commits(last:1)"},m],type:"PullRequest",abstractKey:null}}();ut.hash="cde161daabf09c150daa44066188d77f";const dt=function(){var l={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PRTitleFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},l,{alias:null,args:null,kind:"ScalarField",name:"number",storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:30}],concreteType:"IssueCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"IssueCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"IssueComment",kind:"LinkedField",name:"node",plural:!1,selections:[l],storageKey:null}],storageKey:null}],storageKey:"comments(first:30)"}],type:"PullRequest",abstractKey:null}}();dt.hash="727f30fbdea94ebff7ead1b5ebaae194";const ct=/Stack from \[ghstack\].+\(oldest at bottom\):\n(?:\*[^\n]+\n?)+/gm,mt=/#[0-9]{1,}/g;function Gi(l){var n;const e=l.match(ct);return((n=e==null?void 0:e.flatMap(a=>a.match(mt)??[]))==null?void 0:n.map(a=>parseInt(a.slice(1))))??[]}function Wi(l){const e=l.match(ct);return e&&e.length>0?l.replace(e[0],""):l}const Qi=/(?:\*[\n]+\n)+This stack of pull requests is manged by \[Graphite\]/gm;function Zi(l){var n;const e=l.match(Qi);return((n=e==null?void 0:e.flatMap(a=>a.match(mt)??[]))==null?void 0:n.map(a=>parseInt(a.slice(1))))??[]}const Yi=dt;function Ji(l,e,n){const a=Dt();return Nt({queries:n.map(i=>({queryFn:()=>a(`repos/${l}/${e}/pulls/${i}`),queryKey:["GetPR",l,e,i],staleTime:1/0}))})}function Xi({pr:l}){var v,R,S,u;const e=$.useFragment(Yi,l),n=Gi(e.body)??((u=We((S=(R=(v=e.comments.edges)==null?void 0:v.map(o=>{var f;return(f=o==null?void 0:o.node)==null?void 0:f.body}))==null?void 0:R.map(o=>o==null?null:Zi(o)))==null?void 0:S.filter(o=>o!=null)))==null?void 0:u.reverse())??[],t=hl()["*"],[i,r]=(t==null?void 0:t.split("/"))??[],m=Ji(i,r,n).map(o=>o.data).filter(o=>o!=null),k=n==null?void 0:n.findIndex(o=>o===e.number),h=n.length===0?null:`[${k+1}/${n.length}]`,y=It(),[c,p]=E.useState(!1),w=K(vl,{size:"md",lineClamp:1,children:[h,e.title]});return n.length===0?w:K(oe,{opened:c,onDismiss:()=>p(!1),onChange:p,children:[d(oe.Target,{children:K(re,{variant:"subtle",p:0,color:"default",onClick:()=>p(o=>!o),children:[h&&d(Mt,{}),w]})}),d(oe.Dropdown,{children:d(Ge,{h:500,children:d(ge,{align:"flex-start",children:m.map((o,f)=>K(re,{onClick:()=>{p(F=>!F),y(`/review/${i}/${r}/${o.number}`)},variant:"subtle",children:["[",f+1,"/",n.length,"]",o.title]},o.number))})})})]})}const es=ut;function ns(l){return d(E.Suspense,{fallback:d(Ie,{}),children:d(ls,{...l})})}function Yn(l){switch(l){case"CHANGES_REQUESTED":return 50;case"APPROVED":return 40;case"COMMENTED":return 30;default:return 10}}function ls({pr:l}){var R,S,u,o,f,F,g,b,_,C,P,I,A,O,D,G,W,J,z,T,q,B,N,ee,j;const[e,n]=$.useRefetchableFragment(es,l),a=Wi(e.body).trim(),t=(S=pe(Z((R=e.lastCommit.edges)==null?void 0:R.map(L=>L==null?void 0:L.node))))==null?void 0:S.commit,i=Z((f=(o=(u=t==null?void 0:t.statusCheckRollup)==null?void 0:u.contexts)==null?void 0:o.edges)==null?void 0:f.map(L=>L==null?void 0:L.node)),r=le(kn),s=(((_=pe((b=(g=(F=t==null?void 0:t.statusCheckRollup)==null?void 0:F.contexts)==null?void 0:g.checkRunCountsByState)==null?void 0:b.filter(L=>L.state==="SUCCESS")))==null?void 0:_.count)??0)+(((I=pe((P=(C=t==null?void 0:t.statusCheckRollup)==null?void 0:C.contexts.statusContextCountsByState)==null?void 0:P.filter(L=>L.state==="SUCCESS")))==null?void 0:I.count)??0),m=((O=(A=t==null?void 0:t.statusCheckRollup)==null?void 0:A.contexts)==null?void 0:O.totalCount)===s,[k,h]=Xe(m),y=new Map,c=new Map;(G=(D=e.reviewRequests)==null?void 0:D.edges)==null||G.reduce((L,x)=>{var H,ne,ce,me;const U=(ne=(H=x==null?void 0:x.node)==null?void 0:H.requestedReviewer)==null?void 0:ne.login;return U==null||L.set(U,{participated:!1,required:((ce=L.get(U))==null?void 0:ce.required)||(((me=x==null?void 0:x.node)==null?void 0:me.asCodeOwner)??!1)}),L},y),(J=(W=e.reviews)==null?void 0:W.edges)==null||J.reduce((L,x)=>{var ne,ce,me,De,Ke,An;const U=(ce=(ne=x==null?void 0:x.node)==null?void 0:ne.author)==null?void 0:ce.login;if(U==null)return L;const H=L.get(U);return L.set(U,{participated:!0,required:(H==null?void 0:H.required)??!1}),(H==null||H.date==null||H.date<ae((me=x==null?void 0:x.node)==null?void 0:me.createdAt)&&((De=x==null?void 0:x.node)==null?void 0:De.state)!=="COMMENTED")&&L.set(U,{participated:!0,required:(H==null?void 0:H.required)??!1,state:((Ke=x==null?void 0:x.node)==null?void 0:Ke.state)??(H==null?void 0:H.state),date:ae((An=x==null?void 0:x.node)==null?void 0:An.createdAt)}),L},y);for(const[L,x]of c.entries()){const U=y.get(x);U!=null&&y.set(L,U)}const p=Array.from(y.entries());p.filter(([L,x])=>L!=r).sort(([L,{state:x}],[U,{state:H}])=>Yn(x)-Yn(H));const w=d(ge,{style:{maxHeight:200,overflow:"scroll",marginTop:16},children:Z(i).sort((L,x)=>-1).map(L=>{if(L.__typename!=="CheckRun"&&L.__typename!=="StatusContext")return null;const x=L.__typename==="CheckRun"?`${L.name}`:L.__typename==="StatusContext"?`${L.context}: ${L.description}`:"",U=L.__typename==="CheckRun"&&L.conclusion==="SUCCESS"||L.__typename==="StatusContext"&&L.state==="SUCCESS",H=L.__typename==="CheckRun"&&L.status==="IN_PROGRESS"||L.__typename==="StatusContext"&&L.state==="PENDING",ne=L.__typename==="StatusContext"?L.avatarUrl:null,ce=L.__typename==="StatusContext"?L.targetUrl:L.__typename==="CheckRun"?L.detailsUrl:null;return d(ge,{children:K(V,{align:"center",children:[U?d(dl,{color:"var(--mantine-color-green-8)"}):H?d(ca,{color:"var(--mantine-color-yellow-8)"}):d(pa,{color:"var(--mantine-color-red-8)"}),ne!=null&&d("img",{src:ne,style:{width:16,marginRight:4,objectFit:"contain"}}),x,d("div",{className:"float-right",children:d("a",{href:ce,rel:"noreferrer",target:"_blank",children:"Details"})})]})},L.id)})}),v=K(te.Section,{withBorder:!0,inheritPadding:!0,p:"xs",children:[K(V,{justify:"space-between",children:[K(V,{children:[d(xe,{radius:"sm",color:e.mergeable==="MERGEABLE"?"green.8":e.mergeable==="CONFLICTING"?"red":"gray",style:{marginRight:8},children:e.mergeable==="MERGEABLE"?"Mergeable":e.mergeable==="CONFLICTING"?"Merge Conflicts":"Unknown merge state"}),(((T=(z=t==null?void 0:t.statusCheckRollup)==null?void 0:z.contexts)==null?void 0:T.totalCount)??0)>0&&K(xe,{radius:"sm",color:((q=t==null?void 0:t.statusCheckRollup)==null?void 0:q.state)==="SUCCESS"?"green.8":((B=t==null?void 0:t.statusCheckRollup)==null?void 0:B.state)==="FAILURE"?"red":"yellow.7",style:{marginRight:8},children:["CI (",s,"/",(ee=(N=t==null?void 0:t.statusCheckRollup)==null?void 0:N.contexts)==null?void 0:ee.totalCount,")"]})]}),m&&h]}),!k&&w]});return K(te,{mb:"md",withBorder:!0,px:"md",children:[K(te.Section,{inheritPadding:!0,p:"xs",withBorder:!0,children:[K(V,{justify:"space-between",align:"center",wrap:"nowrap",children:[d(Xi,{pr:e}),d(V,{justify:"flex-end",align:"center",children:d(pl,{component:"a",variant:"default",href:e.url,target:"_blank",children:d($t,{stroke:1})})})]}),K(Q,{size:"sm",lineClamp:1,span:!0,children:[d(Ee,{from:ae(e.createdAt),prefix:"Created "})," ","by ",d(he,{login:(j=e.author)==null?void 0:j.login,size:"sm"})]})]}),d(te.Section,{withBorder:!0,inheritPadding:!0,py:"xs",children:d(mn,{children:a==null||gl(a)?"*No description provided*":a})}),d(te.Section,{withBorder:!0,inheritPadding:!0,p:"xs",children:K(V,{children:[d(vl,{size:"sm",children:"Reviewers"}),d(V,{children:Array.from(p).map(([L,{participated:x,required:U,state:H}])=>d(he,{size:"sm",login:L,reviewState:H??(x?"COMMENTED":"requested"),required:U},L))})]})}),v]})}const ts=Ll;function as(){return d(E.Suspense,{fallback:d(Ie,{text:"Loading PR"}),children:d(ss,{})})}var is={name:"1wjgngc",styles:"height:100vh;overflow-y:hidden;flex-wrap:nowrap"};function ss(){var R,S,u;const e=hl()["*"],[n,a,t,i,r]=(e==null?void 0:e.split("/"))??[],s=Je(kn),m=le(cl),k=zt(),h=$.useLazyLoadQuery(ts,{owner:n,name:a,id:parseInt(t),includeTeam:k.has(Ut.READ_ORG)},{fetchPolicy:"store-and-network"});s(h.viewer.login);const y=(R=h.repository)==null?void 0:R.pullRequest,c=E.useRef(null),p=E.useRef(null),w=h.repository,v=(u=(S=h.repository)==null?void 0:S.defaultBranchRef)==null?void 0:u.name;return w==null||e==null||y==null||v==null?null:K(V,{css:is,gap:0,m:"sm",children:[K("div",{id:"commits-container",ref:p,style:{flexBasis:"60vw",overflowY:"auto",height:"100%"},children:[d(ns,{pr:y}),d("div",{ref:c}),d(Ni,{defaultBranchName:v,name:a,owner:n,pr:y,repo:w})]}),d(ge,{style:{width:25},gap:0,children:d(ji,{})}),m==="timeline"&&d(Ya,{pr:y})]})}function os(){return d(as,{})}export{os as Component};
