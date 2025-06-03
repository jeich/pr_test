const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./MarkdownRenderer-PeWyQREA.js","./index-CJfpB9a6.js","./index-C2_64T8F.css","./MarkdownRenderer-BS2aUxlg.css","./MarkdownTextarea-CT-fgBCX.js","./MarkdownTextarea-Cby7Tvsi.css"])))=>i.map(i=>d[i]);
import{f as pt,r as E,j as M,a as Ee,u as ie,b as ke,c as We,d as fn,B as Se,g as yt,e as He,h as Xn,P as re,i as ae,k as Qe,l as ft,p as el,m as nl,n as ll,o as tl,U as al,q as il,s as sl,t as ht,v as vt,w as rl,x as kt,y as Ft,z as Rt,S as je,A as Dn,C as Fe,D as Re,M as ol,E as Ne,F as $,G as ye,H as hn,I as te,_ as ul,J as d,L as Me,K,N as B,O as he,T as Q,Q as xe,R as qe,V as se,W as ge,X as dl,Y as Ze,Z as wt,$ as Ct,a0 as le,a1 as Z,a2 as pe,a3 as $e,a4 as bt,a5 as Ye,a6 as ne,a7 as Ge,a8 as vn,a9 as Tt,aa as Ae,ab as St,ac as _t,ad as cl,ae as kn,af as Kt,ag as Lt,ah as Fn,ai as ml,aj as Pt,ak as gl,al as Et,am as xt,an as ve,ao as pl,ap as yl,aq as qt,ar as At,as as Nn,at as fl,au as Je,av as It,aw as hl,ax as un,ay as vl,az as Mt,aA as kl,aB as Dt,aC as Nt,aD as $t,aE as zt,aF as Ut,aG as Ot}from"./index-CJfpB9a6.js";function Ht(l,n,e){var a;return e?Array.from(((a=pt(e,n))==null?void 0:a.querySelectorAll(l))||[]).findIndex(t=>t===e):null}function Bt({timeout:l=2e3}={}){const[n,e]=E.useState(null),[a,t]=E.useState(!1),[i,r]=E.useState(null),s=h=>{window.clearTimeout(i),r(window.setTimeout(()=>t(!1),l)),t(h)};return{copy:h=>{"clipboard"in navigator?navigator.clipboard.writeText(h).then(()=>s(!0)).catch(y=>e(y)):e(new Error("useClipboard: navigator.clipboard is not supported"))},reset:()=>{t(!1),e(null),window.clearTimeout(i)},error:n,copied:a}}function Fl({style:l,size:n=16,...e}){return M.jsx("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...l,width:Ee(n),height:Ee(n),display:"block"},...e,children:M.jsx("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}Fl.displayName="@mantine/core/AccordionChevron";const Vt={timeout:1e3};function Rl(l){const{children:n,timeout:e,value:a,...t}=ie("CopyButton",Vt,l),i=Bt({timeout:e}),r=()=>i.copy(a);return M.jsx(M.Fragment,{children:n({copy:r,copied:i.copied,...t})})}Rl.displayName="@mantine/core/CopyButton";var wl={root:"m_3eebeb36",label:"m_9e365f20"};const jt={orientation:"horizontal"},Gt=fn((l,{color:n,variant:e,size:a})=>({root:{"--divider-color":n?He(n,l):void 0,"--divider-border-style":e,"--divider-size":yt(a,"divider-size")}})),Rn=ke((l,n)=>{const e=ie("Divider",jt,l),{classNames:a,className:t,style:i,styles:r,unstyled:s,vars:m,color:k,orientation:h,label:y,labelPosition:c,mod:p,...w}=e,v=We({name:"Divider",classes:wl,props:e,className:t,style:i,classNames:a,styles:r,unstyled:s,vars:m,varsResolver:Gt});return M.jsx(Se,{ref:n,mod:[{orientation:h,"with-label":!!y},p],...v("root"),...w,role:"separator",children:y&&M.jsx(Se,{component:"span",mod:{position:c},...v("label"),children:y})})});Rn.classes=wl;Rn.displayName="@mantine/core/Divider";const[Wt,we]=Xn("Menu component was not found in the tree");var Ce={dropdown:"m_dc9b7c9f",label:"m_9bfac126",divider:"m_efdf90cb",item:"m_99ac2aa1",itemLabel:"m_5476e0d3",itemSection:"m_8b75e504",chevron:"m_b85b0bed"};const Qt={},wn=ke((l,n)=>{const{classNames:e,className:a,style:t,styles:i,vars:r,...s}=ie("MenuDivider",Qt,l),m=we();return M.jsx(Se,{ref:n,...m.getStyles("divider",{className:a,style:t,styles:i,classNames:e}),...s})});wn.classes=Ce;wn.displayName="@mantine/core/MenuDivider";const Zt={},Cn=ke((l,n)=>{const{classNames:e,className:a,style:t,styles:i,vars:r,onMouseEnter:s,onMouseLeave:m,onKeyDown:k,children:h,...y}=ie("MenuDropdown",Zt,l),c=E.useRef(null),p=we(),w=ae(k,T=>{var u,o;(T.key==="ArrowUp"||T.key==="ArrowDown")&&(T.preventDefault(),(o=(u=c.current)==null?void 0:u.querySelectorAll("[data-menu-item]:not(:disabled)")[0])==null||o.focus())}),v=ae(s,()=>(p.trigger==="hover"||p.trigger==="click-hover")&&p.openDropdown()),R=ae(m,()=>(p.trigger==="hover"||p.trigger==="click-hover")&&p.closeDropdown());return M.jsxs(re.Dropdown,{...y,onMouseEnter:v,onMouseLeave:R,role:"menu","aria-orientation":"vertical",ref:Qe(n,c),...p.getStyles("dropdown",{className:a,style:t,styles:i,classNames:e,withStaticClass:!1}),tabIndex:-1,"data-menu-dropdown":!0,onKeyDown:w,children:[p.withInitialFocusPlaceholder&&M.jsx("div",{tabIndex:-1,"data-autofocus":!0,"data-mantine-stop-propagation":!0,style:{outline:0}}),h]})});Cn.classes=Ce;Cn.displayName="@mantine/core/MenuDropdown";const[Yt,Xe]=ft(),Jt={},bn=el((l,n)=>{const{classNames:e,className:a,style:t,styles:i,vars:r,color:s,closeMenuOnClick:m,leftSection:k,rightSection:h,children:y,disabled:c,"data-disabled":p,...w}=ie("MenuItem",Jt,l),v=we(),R=Xe(),T=nl(),{dir:u}=ll(),o=E.useRef(null),f=w,F=ae(f.onClick,()=>{p||(typeof m=="boolean"?m&&v.closeDropdownImmediately():v.closeOnItemClick&&v.closeDropdownImmediately())}),g=s?T.variantColorResolver({color:s,theme:T,variant:"light"}):void 0,b=s?tl({color:s,theme:T}):null,_=ae(f.onKeyDown,C=>{C.key==="ArrowLeft"&&R&&(R.close(),R.focusParentItem())});return M.jsxs(al,{onMouseDown:C=>C.preventDefault(),...w,unstyled:v.unstyled,tabIndex:v.menuItemTabIndex,...v.getStyles("item",{className:a,style:t,styles:i,classNames:e}),ref:Qe(o,n),role:"menuitem",disabled:c,"data-menu-item":!0,"data-disabled":c||p||void 0,"data-mantine-stop-propagation":!0,onClick:F,onKeyDown:il({siblingSelector:"[data-menu-item]:not([data-disabled])",parentSelector:"[data-menu-dropdown]",activateOnFocus:!1,loop:v.loop,dir:u,orientation:"vertical",onKeyDown:_}),__vars:{"--menu-item-color":b!=null&&b.isThemeColor&&(b==null?void 0:b.shade)===void 0?`var(--mantine-color-${b.color}-6)`:g==null?void 0:g.color,"--menu-item-hover":g==null?void 0:g.hover},children:[k&&M.jsx("div",{...v.getStyles("itemSection",{styles:i,classNames:e}),"data-position":"left",children:k}),y&&M.jsx("div",{...v.getStyles("itemLabel",{styles:i,classNames:e}),children:y}),h&&M.jsx("div",{...v.getStyles("itemSection",{styles:i,classNames:e}),"data-position":"right",children:h})]})});bn.classes=Ce;bn.displayName="@mantine/core/MenuItem";const Xt={},Tn=ke((l,n)=>{const{classNames:e,className:a,style:t,styles:i,vars:r,...s}=ie("MenuLabel",Xt,l),m=we();return M.jsx(Se,{ref:n,...m.getStyles("label",{className:a,style:t,styles:i,classNames:e}),...s})});Tn.classes=Ce;Tn.displayName="@mantine/core/MenuLabel";const ea={},Sn=ke((l,n)=>{const{classNames:e,className:a,style:t,styles:i,vars:r,onMouseEnter:s,onMouseLeave:m,onKeyDown:k,children:h,...y}=ie("MenuSubDropdown",ea,l),c=E.useRef(null),p=we(),w=Xe(),v=ae(s,w==null?void 0:w.open),R=ae(m,w==null?void 0:w.close);return M.jsx(re.Dropdown,{...y,onMouseEnter:v,onMouseLeave:R,role:"menu","aria-orientation":"vertical",ref:Qe(n,c),...p.getStyles("dropdown",{className:a,style:t,styles:i,classNames:e,withStaticClass:!1}),tabIndex:-1,"data-menu-dropdown":!0,children:h})});Sn.classes=Ce;Sn.displayName="@mantine/core/MenuSubDropdown";const na={},_n=el((l,n)=>{const{classNames:e,className:a,style:t,styles:i,vars:r,color:s,leftSection:m,rightSection:k,children:h,disabled:y,"data-disabled":c,closeMenuOnClick:p,...w}=ie("MenuSubItem",na,l),v=we(),R=Xe(),T=nl(),{dir:u}=ll(),o=E.useRef(null),f=w,F=s?T.variantColorResolver({color:s,theme:T,variant:"light"}):void 0,g=s?tl({color:s,theme:T}):null,b=ae(f.onKeyDown,I=>{I.key==="ArrowRight"&&(R==null||R.open(),R==null||R.focusFirstItem()),I.key==="ArrowLeft"&&(R!=null&&R.parentContext)&&(R.parentContext.close(),R.parentContext.focusParentItem())}),_=ae(f.onClick,()=>{!c&&p&&v.closeDropdownImmediately()}),C=ae(f.onMouseEnter,R==null?void 0:R.open),P=ae(f.onMouseLeave,R==null?void 0:R.close);return M.jsxs(al,{onMouseDown:I=>I.preventDefault(),...w,unstyled:v.unstyled,tabIndex:v.menuItemTabIndex,...v.getStyles("item",{className:a,style:t,styles:i,classNames:e}),ref:Qe(o,n),role:"menuitem",disabled:y,"data-menu-item":!0,"data-sub-menu-item":!0,"data-disabled":y||c||void 0,"data-mantine-stop-propagation":!0,onMouseEnter:C,onMouseLeave:P,onClick:_,onKeyDown:il({siblingSelector:"[data-menu-item]:not([data-disabled])",parentSelector:"[data-menu-dropdown]",activateOnFocus:!1,loop:v.loop,dir:u,orientation:"vertical",onKeyDown:b}),__vars:{"--menu-item-color":g!=null&&g.isThemeColor&&(g==null?void 0:g.shade)===void 0?`var(--mantine-color-${g.color}-6)`:F==null?void 0:F.color,"--menu-item-hover":F==null?void 0:F.hover},children:[m&&M.jsx("div",{...v.getStyles("itemSection",{styles:i,classNames:e}),"data-position":"left",children:m}),h&&M.jsx("div",{...v.getStyles("itemLabel",{styles:i,classNames:e}),children:h}),M.jsx("div",{...v.getStyles("itemSection",{styles:i,classNames:e}),"data-position":"right",children:k||M.jsx(Fl,{...v.getStyles("chevron"),size:14})})]})});_n.classes=Ce;_n.displayName="@mantine/core/MenuSubItem";function Cl({children:l,refProp:n}){if(!sl(l))throw new Error("Menu.Sub.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");return we(),M.jsx(re.Target,{refProp:n,popupType:"menu",children:l})}Cl.displayName="@mantine/core/MenuSubTarget";const la={offset:0,position:"right-start",transitionProps:{duration:0}};function Le(l){const{children:n,closeDelay:e,...a}=ie("MenuSub",la,l),t=ht(),[i,{open:r,close:s}]=vt(!1),m=Xe(),{openDropdown:k,closeDropdown:h}=rl({open:r,close:s,closeDelay:e,openDelay:0}),y=()=>window.setTimeout(()=>{var p,w;(w=(p=document.getElementById(`${t}-dropdown`))==null?void 0:p.querySelectorAll("[data-menu-item]:not([data-disabled])")[0])==null||w.focus()},16),c=()=>window.setTimeout(()=>{var p;(p=document.getElementById(`${t}-target`))==null||p.focus()},16);return M.jsx(Yt,{value:{opened:i,close:h,open:k,focusFirstItem:y,focusParentItem:c,parentContext:m},children:M.jsx(re,{opened:i,...a,withinPortal:!1,id:t,children:n})})}Le.extend=l=>l;Le.displayName="@mantine/core/MenuSub";Le.Target=Cl;Le.Dropdown=Sn;Le.Item=_n;const ta={refProp:"ref"},bl=E.forwardRef((l,n)=>{const{children:e,refProp:a,...t}=ie("MenuTarget",ta,l);if(!sl(e))throw new Error("Menu.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");const i=we(),r=e.props,s=ae(r.onClick,()=>{i.trigger==="click"?i.toggleDropdown():i.trigger==="click-hover"&&(i.setOpenedViaClick(!0),i.opened||i.openDropdown())}),m=ae(r.onMouseEnter,()=>(i.trigger==="hover"||i.trigger==="click-hover")&&i.openDropdown()),k=ae(r.onMouseLeave,()=>{(i.trigger==="hover"||i.trigger==="click-hover"&&!i.openedViaClick)&&i.closeDropdown()});return M.jsx(re.Target,{refProp:a,popupType:"menu",ref:n,...t,children:E.cloneElement(e,{onClick:s,onMouseEnter:m,onMouseLeave:k,"data-expanded":i.opened?!0:void 0})})});bl.displayName="@mantine/core/MenuTarget";const aa={trapFocus:!0,closeOnItemClick:!0,withInitialFocusPlaceholder:!0,clickOutsideEvents:["mousedown","touchstart","keydown"],loop:!0,trigger:"click",openDelay:0,closeDelay:100,menuItemTabIndex:-1};function Y(l){const n=ie("Menu",aa,l),{children:e,onOpen:a,onClose:t,opened:i,defaultOpened:r,trapFocus:s,onChange:m,closeOnItemClick:k,loop:h,closeOnEscape:y,trigger:c,openDelay:p,closeDelay:w,classNames:v,styles:R,unstyled:T,variant:u,vars:o,menuItemTabIndex:f,keepMounted:F,withInitialFocusPlaceholder:g,...b}=n,_=We({name:"Menu",classes:Ce,props:n,classNames:v,styles:R,unstyled:T}),[C,P]=kt({value:i,defaultValue:r,finalValue:!1,onChange:m}),[I,A]=E.useState(!1),O=()=>{P(!1),A(!1),C&&(t==null||t())},D=()=>{P(!0),!C&&(a==null||a())},G=()=>{C?O():D()},{openDropdown:W,closeDropdown:J}=rl({open:D,close:O,closeDelay:w,openDelay:p}),z=V=>Ht("[data-menu-item]","[data-menu-dropdown]",V),{resolvedClassNames:S,resolvedStyles:q}=Ft({classNames:v,styles:R,props:n});return M.jsx(Wt,{value:{getStyles:_,opened:C,toggleDropdown:G,getItemIndex:z,openedViaClick:I,setOpenedViaClick:A,closeOnItemClick:k,closeDropdown:c==="click"?O:J,openDropdown:c==="click"?D:W,closeDropdownImmediately:O,loop:h,trigger:c,unstyled:T,menuItemTabIndex:f,withInitialFocusPlaceholder:g},children:M.jsx(re,{...b,opened:C,onChange:G,defaultOpened:r,trapFocus:F?!1:s,closeOnEscape:y,__staticSelector:"Menu",classNames:S,styles:q,unstyled:T,variant:u,keepMounted:F,children:e})})}Y.extend=l=>l;Y.withProps=Rt(Y);Y.classes=Ce;Y.displayName="@mantine/core/Menu";Y.Item=bn;Y.Label=Tn;Y.Dropdown=Cn;Y.Target=bl;Y.Divider=wn;Y.Sub=Le;const[ia,sa]=Xn("Table component was not found in the tree");var De={table:"m_b23fa0ef",th:"m_4e7aa4f3",tr:"m_4e7aa4fd",td:"m_4e7aa4ef",tbody:"m_b2404537",thead:"m_b242d975",caption:"m_9e5a3ac7",scrollContainer:"m_a100c15",scrollContainerInner:"m_62259741"};function ra(l,n){if(!n)return;const e={};return n.columnBorder&&l.withColumnBorders&&(e["data-with-column-border"]=!0),n.rowBorder&&l.withRowBorders&&(e["data-with-row-border"]=!0),n.striped&&l.striped&&(e["data-striped"]=l.striped),n.highlightOnHover&&l.highlightOnHover&&(e["data-hover"]=!0),n.captionSide&&l.captionSide&&(e["data-side"]=l.captionSide),n.stickyHeader&&l.stickyHeader&&(e["data-sticky"]=!0),e}function _e(l,n){const e=`Table${l.charAt(0).toUpperCase()}${l.slice(1)}`,a=ke((t,i)=>{const r=ie(e,{},t),{classNames:s,className:m,style:k,styles:h,...y}=r,c=sa();return M.jsx(Se,{component:l,ref:i,...ra(c,n),...c.getStyles(l,{className:m,classNames:s,style:k,styles:h,props:r}),...y})});return a.displayName=`@mantine/core/${e}`,a.classes=De,a}const dn=_e("th",{columnBorder:!0}),Tl=_e("td",{columnBorder:!0}),Be=_e("tr",{rowBorder:!0,striped:!0,highlightOnHover:!0}),Sl=_e("thead",{stickyHeader:!0}),_l=_e("tbody"),Kl=_e("tfoot"),Ll=_e("caption",{captionSide:!0});function Kn({data:l}){return M.jsxs(M.Fragment,{children:[l.caption&&M.jsx(Ll,{children:l.caption}),l.head&&M.jsx(Sl,{children:M.jsx(Be,{children:l.head.map((n,e)=>M.jsx(dn,{children:n},e))})}),l.body&&M.jsx(_l,{children:l.body.map((n,e)=>M.jsx(Be,{children:n.map((a,t)=>M.jsx(Tl,{children:a},t))},e))}),l.foot&&M.jsx(Kl,{children:M.jsx(Be,{children:l.foot.map((n,e)=>M.jsx(dn,{children:n},e))})})]})}Kn.displayName="@mantine/core/TableDataRenderer";const oa={type:"scrollarea"},ua=fn((l,{minWidth:n,maxHeight:e,type:a})=>({scrollContainer:{"--table-min-width":Ee(n),"--table-max-height":Ee(e),"--table-overflow":a==="native"?"auto":void 0}})),Ln=ke((l,n)=>{const e=ie("TableScrollContainer",oa,l),{classNames:a,className:t,style:i,styles:r,unstyled:s,vars:m,children:k,minWidth:h,maxHeight:y,type:c,scrollAreaProps:p,...w}=e,v=We({name:"TableScrollContainer",classes:De,props:e,className:t,style:i,classNames:a,styles:r,unstyled:s,vars:m,varsResolver:ua,rootSelector:"scrollContainer"});return M.jsx(Se,{component:c==="scrollarea"?je:"div",...c==="scrollarea"?y?{offsetScrollbars:"xy",...p}:{offsetScrollbars:"x",...p}:{},ref:n,...v("scrollContainer"),...w,children:M.jsx("div",{...v("scrollContainerInner"),children:k})})});Ln.classes=De;Ln.displayName="@mantine/core/TableScrollContainer";const da={withRowBorders:!0,verticalSpacing:7},ca=fn((l,{layout:n,captionSide:e,horizontalSpacing:a,verticalSpacing:t,borderColor:i,stripedColor:r,highlightOnHoverColor:s,striped:m,highlightOnHover:k,stickyHeaderOffset:h,stickyHeader:y})=>({table:{"--table-layout":n,"--table-caption-side":e,"--table-horizontal-spacing":Dn(a),"--table-vertical-spacing":Dn(t),"--table-border-color":i?He(i,l):void 0,"--table-striped-color":m&&r?He(r,l):void 0,"--table-highlight-on-hover-color":k&&s?He(s,l):void 0,"--table-sticky-header-offset":y?Ee(h):void 0}})),ue=ke((l,n)=>{const e=ie("Table",da,l),{classNames:a,className:t,style:i,styles:r,unstyled:s,vars:m,horizontalSpacing:k,verticalSpacing:h,captionSide:y,stripedColor:c,highlightOnHoverColor:p,striped:w,highlightOnHover:v,withColumnBorders:R,withRowBorders:T,withTableBorder:u,borderColor:o,layout:f,variant:F,data:g,children:b,stickyHeader:_,stickyHeaderOffset:C,mod:P,tabularNums:I,...A}=e,O=We({name:"Table",props:e,className:t,style:i,classes:De,classNames:a,styles:r,unstyled:s,rootSelector:"table",vars:m,varsResolver:ca});return M.jsx(ia,{value:{getStyles:O,stickyHeader:_,striped:w===!0?"odd":w||void 0,highlightOnHover:v,withColumnBorders:R,withRowBorders:T,captionSide:y||"bottom"},children:M.jsx(Se,{component:"table",variant:F,ref:n,mod:[{"data-with-table-border":u,"data-tabular-nums":I},P],...O("table"),...A,children:b||!!g&&M.jsx(Kn,{data:g})})})});ue.classes=De;ue.displayName="@mantine/core/Table";ue.Td=Tl;ue.Th=dn;ue.Tr=Be;ue.Thead=Sl;ue.Tbody=_l;ue.Tfoot=Kl;ue.Caption=Ll;ue.ScrollContainer=Ln;ue.DataRenderer=Kn;/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ma=Fe("outline","alert-circle","IconAlertCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 8v4",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ga=Fe("outline","checkbox","IconCheckbox",[["path",{d:"M9 11l3 3l8 -8",key:"svg-0"}],["path",{d:"M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var pa=Fe("outline","dots-vertical","IconDotsVertical",[["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ya=Fe("outline","exclamation-circle","IconExclamationCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 9v4",key:"svg-1"}],["path",{d:"M12 16v.01",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var fa=Fe("outline","git-commit","IconGitCommit",[["path",{d:"M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M12 3l0 6",key:"svg-1"}],["path",{d:"M12 15l0 6",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ha=Fe("outline","git-merge","IconGitMerge",[["path",{d:"M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M17 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-2"}],["path",{d:"M7 8l0 8",key:"svg-3"}],["path",{d:"M7 8a4 4 0 0 0 4 4h4",key:"svg-4"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var va=Fe("outline","message","IconMessage",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ka=Fe("outline","pencil-plus","IconPencilPlus",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}],["path",{d:"M16 19h6",key:"svg-2"}],["path",{d:"M19 16v6",key:"svg-3"}]]);const Pl=function(){var l={defaultValue:null,kind:"LocalArgument",name:"id"},n={defaultValue:null,kind:"LocalArgument",name:"includeTeam"},e={defaultValue:null,kind:"LocalArgument",name:"name"},a={defaultValue:null,kind:"LocalArgument",name:"owner"},t={alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},i=[t],r=[{kind:"Variable",name:"name",variableName:"name"},{kind:"Variable",name:"owner",variableName:"owner"}],s={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},m=[s],k=[{kind:"Variable",name:"number",variableName:"id"}],h={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},y=[t,h],c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},p={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[c,t,h],storageKey:null},w=[s,h],v={alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"defaultBranchRef",plural:!1,selections:w,storageKey:null},R={kind:"Literal",name:"first",value:30},T=[R],u={alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},F={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},b=[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},g],_={kind:"InlineFragment",selections:[h],type:"Node",abstractKey:"__isNode"},C={alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"ref",plural:!1,selections:w,storageKey:null},P=[o,h],I={alias:null,args:null,kind:"ScalarField",name:"committedDate",storageKey:null},A={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[c,t,_],storageKey:null},O={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},D={kind:"InlineFragment",selections:[{alias:"reviewState",args:null,kind:"ScalarField",name:"state",storageKey:null}],type:"PullRequestReviewComment",abstractKey:null},G={kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]},W=[{kind:"Literal",name:"first",value:20}],J={alias:null,args:null,kind:"ScalarField",name:"startLine",storageKey:null},z={alias:null,args:null,kind:"ScalarField",name:"line",storageKey:null};return{fragment:{argumentDefinitions:[l,n,e,a],kind:"Fragment",metadata:null,name:"PRReviewCommitsQuery",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"viewer",plural:!1,selections:i,storageKey:null},{alias:null,args:r,concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CommitsViewRepositoryFragment"},{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"defaultBranchRef",plural:!1,selections:m,storageKey:null},{alias:null,args:k,concreteType:"PullRequest",kind:"LinkedField",name:"pullRequest",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ActivityPanelFragment"},{args:null,kind:"FragmentSpread",name:"FooterPullRequestFragment"},{args:null,kind:"FragmentSpread",name:"CommitsViewPullRequestFragment"},{args:null,kind:"FragmentSpread",name:"SummaryPanelFragment"}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,e,l,n],kind:"Operation",name:"PRReviewCommitsQuery",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"viewer",plural:!1,selections:y,storageKey:null},{alias:null,args:r,concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[p,s,v,{alias:null,args:k,concreteType:"PullRequest",kind:"LinkedField",name:"pullRequest",plural:!1,selections:[h,{alias:null,args:null,kind:"ScalarField",name:"viewerCanUpdate",storageKey:null},{alias:null,args:T,concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[u,{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[c,{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[o,h,{alias:null,args:[{kind:"Literal",name:"first",value:2}],concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[o,h,f],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"},{alias:null,args:null,kind:"ScalarField",name:"messageHeadline",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"additions",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"deletions",storageKey:null},f],storageKey:null},h],storageKey:null}],storageKey:null}],storageKey:"commits(first:30)"},{alias:null,args:null,kind:"ScalarField",name:"mergeable",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerDidAuthor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanMergeAsAdmin",storageKey:null},{alias:null,args:null,concreteType:"Repository",kind:"LinkedField",name:"baseRepository",plural:!1,selections:[p,s,h],storageKey:null},{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"baseRef",plural:!1,selections:[s,h,{alias:null,args:null,concreteType:"BranchProtectionRule",kind:"LinkedField",name:"branchProtectionRule",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"requiresCodeOwnerReviews",storageKey:null},h],storageKey:null}],storageKey:null},F,{alias:"lastCommit",args:[{kind:"Literal",name:"last",value:1}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[o,h,{alias:null,args:null,concreteType:"StatusCheckRollup",kind:"LinkedField",name:"statusCheckRollup",plural:!1,selections:[g,{alias:null,args:[{kind:"Literal",name:"first",value:50}],concreteType:"StatusCheckRollupContextConnection",kind:"LinkedField",name:"contexts",plural:!1,selections:[u,{alias:null,args:null,concreteType:"CheckRunStateCount",kind:"LinkedField",name:"checkRunCountsByState",plural:!0,selections:b,storageKey:null},{alias:null,args:null,concreteType:"StatusContextStateCount",kind:"LinkedField",name:"statusContextCountsByState",plural:!0,selections:b,storageKey:null},{alias:null,args:null,concreteType:"StatusCheckRollupContextEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[c,{kind:"InlineFragment",selections:[h,{alias:null,args:null,kind:"ScalarField",name:"detailsUrl",storageKey:null},s,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"conclusion",storageKey:null}],type:"CheckRun",abstractKey:null},{kind:"InlineFragment",selections:[h,g,{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"context",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"avatarUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"targetUrl",storageKey:null}],type:"StatusContext",abstractKey:null},_],storageKey:null}],storageKey:null}],storageKey:"contexts(first:50)"},h],storageKey:null}],storageKey:null},h],storageKey:null}],storageKey:null}],storageKey:"commits(last:1)"},{alias:null,args:[R,{kind:"Literal",name:"itemTypes",value:["HEAD_REF_FORCE_PUSHED_EVENT","BASE_REF_FORCE_PUSHED_EVENT","BASE_REF_CHANGED_EVENT","PULL_REQUEST_COMMIT"]}],concreteType:"PullRequestTimelineItemsConnection",kind:"LinkedField",name:"timelineItems",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestTimelineItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[c,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[o,{alias:null,args:null,kind:"ScalarField",name:"authoredDate",storageKey:null},h],storageKey:null}],type:"PullRequestCommit",abstractKey:null},{kind:"InlineFragment",selections:[F,{alias:null,args:null,kind:"ScalarField",name:"previousRefName",storageKey:null}],type:"BaseRefChangedEvent",abstractKey:null},{kind:"InlineFragment",selections:[F,C],type:"BaseRefForcePushedEvent",abstractKey:null},{kind:"InlineFragment",selections:[F,C,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"afterCommit",plural:!1,selections:P,storageKey:null},{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"beforeCommit",plural:!1,selections:[o,I,h],storageKey:null}],type:"HeadRefForcePushedEvent",abstractKey:null},_],storageKey:null}],storageKey:null}],storageKey:'timelineItems(first:30,itemTypes:["HEAD_REF_FORCE_PUSHED_EVENT","BASE_REF_FORCE_PUSHED_EVENT","BASE_REF_CHANGED_EVENT","PULL_REQUEST_COMMIT"])'},{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"viewerLatestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[h,o],storageKey:null},h],storageKey:null},{alias:null,args:null,concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[v,h],storageKey:null},A,{alias:null,args:T,concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[h,g,O,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[c,t,_,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"location",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"company",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null}],type:"User",abstractKey:null}],storageKey:null},c,F,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:P,storageKey:null},{alias:null,args:[{kind:"Literal",name:"last",value:30}],concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[O,A,h],storageKey:null}],storageKey:null}],storageKey:"comments(last:30)"},{kind:"InlineFragment",selections:[D,G],type:"Comment",abstractKey:"__isComment"}],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"},{alias:null,args:W,concreteType:"PullRequestReviewThreadConnection",kind:"LinkedField",name:"reviewThreads",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"node",plural:!1,selections:[h,{alias:null,args:W,concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[h,O,J,z,G,{kind:"InlineFragment",selections:[A,F,D],type:"Comment",abstractKey:"__isComment"}],storageKey:null}],storageKey:null}],storageKey:"comments(first:20)"},z,J,{alias:null,args:null,kind:"ScalarField",name:"path",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isResolved",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanReply",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanResolve",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanUnresolve",storageKey:null},G],storageKey:null}],storageKey:null}],storageKey:"reviewThreads(first:20)"},{alias:null,args:T,concreteType:"IssueCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"IssueCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"IssueComment",kind:"LinkedField",name:"node",plural:!1,selections:[c,F,h,O,{kind:"InlineFragment",selections:[A,D,G],type:"Comment",abstractKey:"__isComment"}],storageKey:null}],storageKey:null}],storageKey:"comments(first:30)"},{alias:"timelineCommits",args:[R,{kind:"Literal",name:"itemTypes",value:["PULL_REQUEST_COMMIT"]}],concreteType:"PullRequestTimelineItemsConnection",kind:"LinkedField",name:"timelineItems",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestTimelineItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[c,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[h,I,f,{alias:null,args:null,concreteType:"GitActor",kind:"LinkedField",name:"author",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:y,storageKey:null}],storageKey:null}],storageKey:null}],type:"PullRequestCommit",abstractKey:null},_],storageKey:null}],storageKey:null}],storageKey:'timelineItems(first:30,itemTypes:["PULL_REQUEST_COMMIT"])'},c,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},O,{alias:null,args:null,kind:"ScalarField",name:"number",storageKey:null},{alias:null,args:T,concreteType:"ReviewRequestConnection",kind:"LinkedField",name:"reviewRequests",plural:!1,selections:[{alias:null,args:null,concreteType:"ReviewRequestEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"ReviewRequest",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"asCodeOwner",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"requestedReviewer",plural:!1,selections:[c,{kind:"InlineFragment",selections:i,type:"User",abstractKey:null},{condition:"includeTeam",kind:"Condition",passingValue:!0,selections:[{kind:"InlineFragment",selections:m,type:"Team",abstractKey:null}]},_],storageKey:null},h],storageKey:null}],storageKey:null}],storageKey:"reviewRequests(first:30)"}],storageKey:null},h],storageKey:null}]},params:{cacheID:"bdcc43c6c5c26a6014f7ae5a7e904b7f",id:null,metadata:{},name:"PRReviewCommitsQuery",operationKind:"query",text:`query PRReviewCommitsQuery(
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
  viewerCanMergeAsAdmin
  ...PRTitleFragment
  baseRef {
    branchProtectionRule {
      requiresCodeOwnerReviews
      id
    }
    id
  }
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
`}}}();Pl.hash="5e50bd2bc396d55adef999c71f1f99ac";const El=function(){var l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},n={kind:"Literal",name:"first",value:30},e=[n],a=[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],t={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},r={args:null,kind:"FragmentSpread",name:"CommentFragment"};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ActivityPanelFragment",selections:[l,{alias:null,args:null,kind:"ScalarField",name:"viewerCanUpdate",storageKey:null},{args:null,kind:"FragmentSpread",name:"FooterPullRequestFragment"},{alias:null,args:e,concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:a,storageKey:null},t,i,l,{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},r,{args:null,kind:"FragmentSpread",name:"ActivityPanelReviewFragment"}],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"},{alias:null,args:e,concreteType:"IssueCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"IssueCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"IssueComment",kind:"LinkedField",name:"node",plural:!1,selections:[t,i,r,l],storageKey:null}],storageKey:null}],storageKey:"comments(first:30)"},{alias:null,args:e,concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"commits(first:30)"},{alias:"timelineCommits",args:[n,{kind:"Literal",name:"itemTypes",value:["PULL_REQUEST_COMMIT"]}],concreteType:"PullRequestTimelineItemsConnection",kind:"LinkedField",name:"timelineItems",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestTimelineItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"committedDate",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},{alias:null,args:null,concreteType:"GitActor",kind:"LinkedField",name:"author",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:a,storageKey:null}],storageKey:null}],storageKey:null}],type:"PullRequestCommit",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:'timelineItems(first:30,itemTypes:["PULL_REQUEST_COMMIT"])'},{args:null,kind:"FragmentSpread",name:"useVersionHistoryFragment"}],type:"PullRequest",abstractKey:null}}();El.hash="f9f52d5fd47ea3dcb4b6d1d0db8fc3cf";const xl=function(){var l={alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ActivityPanelReviewFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"UserFragment"},l],storageKey:null},n,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CommentFragment"},{alias:null,args:[{kind:"Literal",name:"last",value:30}],concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[n,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[l],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"comments(last:30)"}],type:"PullRequestReview",abstractKey:null}}();xl.hash="d18ba5d809c6b447e654d4c984484e16";Re(new Map);const Pn=Re(null),en=Re(null),ql=Re(!1),nn=Re(ol()),ln=Re(ol()),Al=Re(null),Fa=Re(null),ze="edges",$n="node";class zn{constructor(n){this.obj=n}then(n){n(this.obj)}}class fe{constructor(n){this.record=n}setValues(n){console.debug(`setValues ${this.record.getDataID()} => ${JSON.stringify(n)}`);for(const[e,a]of Object.entries(n))this.record.setValue(a,e)}setLinkedRecord(n,e){this.record.setLinkedRecord(n.record,e)}setLinkedRecords(n,e){this.record.setLinkedRecords(n.map(a=>a.record),e)}getEdges(n,e){const a=this.record.getLinkedRecords(n,e);return a==null?(console.error(`unable to get edges ${n} from ${this.record.getDataID()} of type ${this.record.getType()}`),null):a.map(t=>new fe(t))}getNode(n,e){const a=this.record.getLinkedRecord(n,e);return a==null?(console.error(`unable to get node ${n} from ${this.record.getDataID()} of type ${this.record.getType()}`),null):new fe(a)}createAndAppendNodeToEdge(n,e,a,t,i,r,s){console.debug(`createAndAppendNodeToEdge ${e}`);let m=this.getNode(e,a);if(m==null){const w=n.create(Ne(),t);this.record.setLinkedRecord(w,e,a),m=new fe(w)}let k=m.getEdges(ze)??[];const h=Ne(),y=Ne(),c=new fe(n.create(h,i)),p=new fe(n.create(y,r));return p.setValues({...s,id:y}),c.setLinkedRecord(p,$n),k.push(c),m.setLinkedRecords(k,ze),new zn({edgeId:h,nodeId:y,node:p})}appendToEdge(n,e,a,t,i){console.debug(`appendToEdge ${e}`);const r=this.getNode(e,a);if(r==null)return;const s=r.getEdges(ze);if(s==null)return;const m=Ne(),k=new fe(n.create(m,t)),h=new Ke(n).get(i);if(h==null){console.error(`unable to find node with id ${i}`);return}return k.setLinkedRecord(h,$n),s.push(k),r.setLinkedRecords(s,ze),new zn({edgeId:m,nodeId:i})}}class Ke{constructor(n){this.store=n}get(n){if(console.debug(`getRecord ${n}`),n==null)return console.error("attempted to find null nodeId"),null;const e=this.store.get(n);return e==null?(console.error(`unable to find record ${n}`),null):new fe(e)}delete(n){n!=null&&this.store.delete(n)}}function Ra(){const l=$.useRelayEnvironment(),[n,e]=ye(Pn);return(a,t)=>{hn.commitLocalUpdate(l,i=>{var s,m,k;const r=new Ke(i);if(n!=null){(s=r.get(n))==null||s.setValues({isPending:!0,body:a,createdAt:te().toISOString()});return}(k=(m=r.get(t))==null?void 0:m.createAndAppendNodeToEdge(i,"reviews",{first:30},"PullRequestReviewConnection","PullRequestReviewEdge","PullRequestReview",{isPending:!0,body:a,createdAt:te().toISOString()}))==null||k.then(({nodeId:h})=>{e(h)})})}}const Il={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommentFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},{kind:"InlineFragment",selections:[{alias:"reviewState",args:null,kind:"ScalarField",name:"state",storageKey:null}],type:"PullRequestReviewComment",abstractKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],type:"Comment",abstractKey:"__isComment"};Il.hash="08730b47ba257692da11cc5d964ecfdc";const cn=E.lazy(()=>ul(()=>import("./MarkdownRenderer-PeWyQREA.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),wa=Il,Un=800;function Ca({comment:l,header:n="default",style:e=Ct,className:a,right:t=void 0,border:i=!0,bottomBorder:r=!1}){var p;const s=$.useFragment(wa,l),[m,k]=E.useState(!1),h=s.isPending||s.reviewState==="PENDING",y=E.useRef(null),c=K(ge,{gap:"xs",children:[K(B,{wrap:"nowrap",justify:"space-between",children:[K(B,{gap:0,children:[s.author!=null&&d(he,{capitalize:!0,login:s.author.login,size:"sm"}),d(Q,{span:!0,size:"sm",children:" commented "}),d(xe,{from:te(s.createdAt),prefix:null}),h&&d(qe,{variant:"light",color:"yellow.8",ml:"sm",radius:"sm",children:"Pending"})]}),K(B,{children:[(((p=y.current)==null?void 0:p.clientHeight)??0)>Un&&d(se,{size:"compact-xs",onClick:()=>k(!0),children:"..."}),t]})]}),d(cn,{ref:y,children:s.body})]});return K(le,{className:Ze("comment",a),css:dl({borderRadius:0,...e},"",""),mah:Un,withBorder:i,p:"xs",children:[n==="default"&&K(B,{justify:"space-between",children:[s.author!=null&&d(he,{login:s.author.login}),d(xe,{from:te(s.createdAt),prefix:null}),h&&d(qe,{c:"yellow",children:"Pending"})]}),c,m&&d(wt,{size:"lg",opened:!0,onClose:()=>k(!1),children:d(cn,{children:s.body})})]})}function En(l){return d(E.Suspense,{fallback:d(Me,{}),children:d(Ca,{...l})})}const Ml=function(){var l={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},n=[l],e={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},t=[a],i=[{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:t,storageKey:null}],storageKey:null}],storageKey:null}],r={kind:"Literal",name:"first",value:30},s={alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"ref",plural:!1,selections:n,storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useVersionHistoryFragment",selections:[{alias:null,args:null,concreteType:"Repository",kind:"LinkedField",name:"baseRepository",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],storageKey:null},l],storageKey:null},{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"baseRef",plural:!1,selections:n,storageKey:null},e,{alias:"lastCommit",args:[{kind:"Literal",name:"last",value:1}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:i,storageKey:"commits(last:1)"},{alias:null,args:[r,{kind:"Literal",name:"itemTypes",value:["HEAD_REF_FORCE_PUSHED_EVENT","BASE_REF_FORCE_PUSHED_EVENT","BASE_REF_CHANGED_EVENT","PULL_REQUEST_COMMIT"]}],concreteType:"PullRequestTimelineItemsConnection",kind:"LinkedField",name:"timelineItems",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestTimelineItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"authoredDate",storageKey:null}],storageKey:null}],type:"PullRequestCommit",abstractKey:null},{kind:"InlineFragment",selections:[e,{alias:null,args:null,kind:"ScalarField",name:"previousRefName",storageKey:null}],type:"BaseRefChangedEvent",abstractKey:null},{kind:"InlineFragment",selections:[e,s],type:"BaseRefForcePushedEvent",abstractKey:null},{kind:"InlineFragment",selections:[e,s,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"afterCommit",plural:!1,selections:t,storageKey:null},{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"beforeCommit",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"committedDate",storageKey:null}],storageKey:null}],type:"HeadRefForcePushedEvent",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:'timelineItems(first:30,itemTypes:["HEAD_REF_FORCE_PUSHED_EVENT","BASE_REF_FORCE_PUSHED_EVENT","BASE_REF_CHANGED_EVENT","PULL_REQUEST_COMMIT"])'},{alias:null,args:[r],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:i,storageKey:"commits(first:30)"},{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"viewerLatestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},a],storageKey:null}],storageKey:null}],type:"PullRequest",abstractKey:null}}();Ml.hash="f6d0a238f940ca721636bd35ebd7bb9b";const ba=Ml;function Dl(l){var c,p,w,v,R,T,u,o,f,F;const n=$.useFragment(ba,l),e=Z((c=n.timelineItems.edges)==null?void 0:c.map(g=>g==null?void 0:g.node)),a=E.useMemo(()=>new Map,[n]),t=E.useMemo(()=>new Map,[n]),i=E.useMemo(()=>new Map,[n]),r=E.useMemo(()=>new Map,[n]),s=E.useMemo(()=>new Map,[n]);E.useMemo(()=>{var C,P,I,A,O,D,G,W,J,z,S,q;let g=1,b=null,_=(C=n.baseRef)==null?void 0:C.name;if(n.baseRef==null||_==null)return null;for(const[V,N]of Array.from(e.entries()).reverse())i.set(e.length-1-V,_),N.__typename==="BaseRefChangedEvent"?_=N.previousRefName:N.__typename==="BaseRefForcePushedEvent"&&((P=N.ref)==null?void 0:P.name)!=null&&(_=(I=N.ref)==null?void 0:I.name);for(const[V,N]of e.entries()){if(_=i.get(V),_==null)throw new Error("unable to find baseRef for verison");N.__typename==="HeadRefForcePushedEvent"?(s.has((A=N.beforeCommit)==null?void 0:A.oid)||(a.set(g,(O=N.beforeCommit)==null?void 0:O.oid),t.set(g,_),r.set(g,(D=N.beforeCommit)==null?void 0:D.committedDate),s.set((G=N.afterCommit)==null?void 0:G.oid,g),g++),a.set(g,(W=N.afterCommit)==null?void 0:W.oid),t.set(g,_),r.set(g,N.createdAt),s.set((J=N.afterCommit)==null?void 0:J.oid,g),g++):N.__typename==="PullRequestCommit"&&(b=N.commit)}a.size>0&&b!=null&&a.set(g-1,b.oid),a.size===0&&(a.set(1,(S=pe((z=n.lastCommit.edges)==null?void 0:z.map(V=>V==null?void 0:V.node)))==null?void 0:S.commit.oid),t.set(1,$e((q=n.baseRef)==null?void 0:q.name)))},[t,i,n,e,s,r,a]);const m=E.useMemo(()=>Array.from(a.entries()).map(([g,b])=>({baseRef:t.get(g),headOid:b})).filter(g=>g.baseRef!=null),[t,a]),k=bt($e((w=(p=n.baseRepository)==null?void 0:p.owner)==null?void 0:w.login),$e((v=n.baseRepository)==null?void 0:v.name),m),h=(T=(R=n.viewerLatestReview)==null?void 0:R.commit)==null?void 0:T.oid;let y=null;return h!=null&&(y={oid:h,abbreviatedOid:h.slice(0,7),number:s.get(h)??null,nodeId:$e((o=(u=n.viewerLatestReview)==null?void 0:u.commit)==null?void 0:o.id)}),{viewerLastReview:y,versions:Z((F=(f=k==null?void 0:k.map(({data:g})=>g))==null?void 0:f.filter(g=>g!=null))==null?void 0:F.map((g,b)=>({commitOids:g.commits.map(_=>_.sha),number:b+1,headOid:g.commits[g.commits.length-1].sha,abbreviatedOid:g.commits[g.commits.length-1].sha.slice(0,7),baseRef:t.get(b+1),nodeIds:g.commits.map(_=>_.node_id),author:g.commits[g.commits.length-1].author.login,createdAt:r.get(b+1)==null?void 0:te(r.get(b+1))})))}}const Nl=E.lazy(()=>ul(()=>import("./MarkdownTextarea-CT-fgBCX.js"),__vite__mapDeps([4,1,2,0,3,5]),import.meta.url)),$l={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FooterPullRequestFragment",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:30}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null},{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:"commits(first:30)"},{alias:null,args:null,kind:"ScalarField",name:"mergeable",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerDidAuthor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanMergeAsAdmin",storageKey:null},{args:null,kind:"FragmentSpread",name:"VersionSelectorFragment"},{args:null,kind:"FragmentSpread",name:"SubmitReviewPanelFragment"}],type:"PullRequest",abstractKey:null};$l.hash="0a0f71df99f45ad6a99f371e951b963d";const zl=function(){var l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"SubmitReviewPanelFragment",selections:[l,{alias:null,args:null,kind:"ScalarField",name:"viewerCanUpdate",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:30}],concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"},{args:null,kind:"FragmentSpread",name:"reviewThreadCommentMutationPullRequestFragment"},{args:null,kind:"FragmentSpread",name:"addReviewMutationPullRequestFragment"}],type:"PullRequest",abstractKey:null}}();zl.hash="4aae75e425f298b1928b0d77f8bf260f";const Ul=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"input"}],n=[{kind:"Variable",name:"input",variableName:"input"}],e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},t=[e],i={alias:null,args:null,concreteType:"PullRequest",kind:"LinkedField",name:"pullRequest",plural:!1,selections:t,storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},m={kind:"InlineFragment",selections:t,type:"Node",abstractKey:"__isNode"},k={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"addReviewMutationAddPullRequestReviewMutation",selections:[{alias:null,args:n,concreteType:"AddPullRequestReviewPayload",kind:"LinkedField",name:"addPullRequestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"pullRequestReview",plural:!1,selections:[e,a,{args:null,kind:"FragmentSpread",name:"ActivityPanelReviewFragment"},i],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"addReviewMutationAddPullRequestReviewMutation",selections:[{alias:null,args:n,concreteType:"AddPullRequestReviewPayload",kind:"LinkedField",name:"addPullRequestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"pullRequestReview",plural:!1,selections:[e,a,{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[r,s,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"location",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"company",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null}],type:"User",abstractKey:null},m],storageKey:null},k,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},e],storageKey:null},{alias:null,args:[{kind:"Literal",name:"last",value:30}],concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[k,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[r,s,m],storageKey:null},e],storageKey:null}],storageKey:null}],storageKey:"comments(last:30)"},i,{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:"reviewState",args:null,kind:"ScalarField",name:"state",storageKey:null}],type:"PullRequestReviewComment",abstractKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],type:"Comment",abstractKey:"__isComment"}],storageKey:null}],storageKey:null}]},params:{cacheID:"892dd143fbc2949c120104e84d4d082b",id:null,metadata:{},name:"addReviewMutationAddPullRequestReviewMutation",operationKind:"mutation",text:`mutation addReviewMutationAddPullRequestReviewMutation(
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
`}}}();Ul.hash="1b670edaf89f4e6c6336b444750a644f";const Ol=function(){var l=[{kind:"Literal",name:"first",value:20}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"addReviewMutationPullRequestFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:l,concreteType:"PullRequestReviewThreadConnection",kind:"LinkedField",name:"reviewThreads",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"line",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startLine",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"path",storageKey:null},{alias:null,args:l,concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"comments(first:20)"},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],storageKey:null}],storageKey:null}],storageKey:"reviewThreads(first:20)"}],type:"PullRequest",abstractKey:null}}();Ol.hash="02e0476a2118e17c18ca51ea6e7604b5";const Ta=Ol,Sa=Ul;function _a(l){var k,h;const n=$.useFragment(Ta,l),e=Ye(Pn),a=ne(en),t=E.useCallback(()=>{var y;e(null),(y=a==null?void 0:a.current)==null||y.setMarkdown("")},[e,a]),i=Z((h=(k=n.reviewThreads.edges)==null?void 0:k.map(y=>y==null?void 0:y.node))==null?void 0:h.filter(y=>(y==null?void 0:y.isPending)===!0)).map(y=>{var p,w;const c=Ge((p=y.comments)==null?void 0:p.edges);return{body:((w=c==null?void 0:c.node)==null?void 0:w.body)??"",line:y.line,path:y.path,startLine:y.startLine}}),r=E.useCallback(y=>(c,p)=>{var v;y!=null&&c.delete(y),(v=new Ke(c).get(p.addPullRequestReview.pullRequestReview.pullRequest.id))==null||v.appendToEdge(c,"reviews",{first:30},"PullRequestReviewEdge",p.addPullRequestReview.pullRequestReview.id)},[]),[s,m]=$.useMutation(Sa);return[(y,c,p,w)=>{s({variables:{input:{pullRequestId:y,body:p??void 0,threads:i}},updater:r(c),onCompleted:v=>{t(),w(v.addPullRequestReview.pullRequestReview.id)}})},m]}function Hl(){const l=$.useRelayEnvironment(),[n,e]=ye(nn);return a=>{hn.commitLocalUpdate(l,t=>{const i=n.get(a);t.delete(i),e(r=>r.delete(a))})}}function Ka(){const l=$.useRelayEnvironment(),[n,e]=ye(nn);return(a,t)=>{hn.commitLocalUpdate(l,i=>{var k,h;const r=n.get(t),s=new Ke(i);if(r!=null){(k=s.get(r))==null||k.setValues({isPending:!0,body:a});return}const m=s.get(t);(h=m==null?void 0:m.createAndAppendNodeToEdge(i,"comments",{first:20},"PullRequestReviewCommentConnection","PullRequestReviewCommentEdge","PullRequestReviewComment",{isPending:!0,body:a}))==null||h.then(({nodeId:y})=>{e(c=>c.set(t,y))})})}}const Bl=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"input"}],n=[{kind:"Variable",name:"input",variableName:"input"}],e={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},t={alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"pullRequestReview",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"reviewThreadCommentMutation",selections:[{alias:null,args:n,concreteType:"AddPullRequestReviewThreadReplyPayload",kind:"LinkedField",name:"addPullRequestReviewThreadReply",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"comment",plural:!1,selections:[e,t],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"reviewThreadCommentMutation",selections:[{alias:null,args:n,concreteType:"AddPullRequestReviewThreadReplyPayload",kind:"LinkedField",name:"addPullRequestReviewThreadReply",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"comment",plural:!1,selections:[e,t,a],storageKey:null}],storageKey:null}]},params:{cacheID:"ad3c8be53dc8e93f5a4a9552df497c3f",id:null,metadata:{},name:"reviewThreadCommentMutation",operationKind:"mutation",text:`mutation reviewThreadCommentMutation(
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
`}}}();Bl.hash="4d31cec9ad6f78a3462eed3e5b22a64d";const Vl=function(){var l=[{kind:"Literal",name:"first",value:20}],n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"reviewThreadCommentMutationPullRequestFragment",selections:[{alias:null,args:l,concreteType:"PullRequestReviewThreadConnection",kind:"LinkedField",name:"reviewThreads",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"node",plural:!1,selections:[n,{alias:null,args:l,concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],storageKey:null}],storageKey:null}],storageKey:"comments(first:20)"}],storageKey:null}],storageKey:null}],storageKey:"reviewThreads(first:20)"}],type:"PullRequest",abstractKey:null}}();Vl.hash="741ce77b35e675bda0fe2fb031e951e9";const La=Vl,Pa=Bl;function Ea({pr:l}){const[n,e]=ye(nn),a=ne(ln),t=$.useFragment(La,l),i=E.useMemo(()=>{var p,w;const y=Z((w=(p=t.reviewThreads)==null?void 0:p.edges)==null?void 0:w.map(v=>v==null?void 0:v.node)),c=Z(y.map(v=>{var R,T;return(T=(R=v.comments)==null?void 0:R.edges)==null?void 0:T.map(u=>u==null?void 0:u.node)}).flat()).filter(v=>v.isPending===!0);return new Map(c.map(v=>[v.id,v.body]))},[t]),[r,s]=$.useMutation(Pa),m=E.useMemo(()=>new Set,[]),k=E.useCallback((y,c,p)=>{e(w=>w.delete(y)),m.delete(y),m.size===0&&p(c)},[e,m]),h=E.useCallback(y=>(c,p)=>{var R;const w=n.get(y);if(w==null)return;(R=new Ke(c).get(w))==null||R.setValues({isPending:!1}),e(T=>T.delete(y))},[n,e]);return[(y,c)=>{const p=n.filter((w,v)=>!a.has(v));for(const[w,v]of p){const R=i.get(v);m.add(w),r({variables:{input:{body:R,pullRequestReviewThreadId:w,pullRequestReviewId:y}},updater:h(w),onCompleted:T=>k(w,T.addPullRequestReviewThreadReply.comment.pullRequestReview.id,c)})}},s]}const jl=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"input"}],n=[{kind:"Variable",name:"input",variableName:"input"}],e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},t=[e],i={alias:null,args:null,concreteType:"PullRequest",kind:"LinkedField",name:"pullRequest",plural:!1,selections:t,storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},m={kind:"InlineFragment",selections:t,type:"Node",abstractKey:"__isNode"},k={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"submitReviewMutationSubmitPullRequestReviewMutation",selections:[{alias:null,args:n,concreteType:"SubmitPullRequestReviewPayload",kind:"LinkedField",name:"submitPullRequestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"pullRequestReview",plural:!1,selections:[e,a,i,{args:null,kind:"FragmentSpread",name:"ActivityPanelReviewFragment"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"submitReviewMutationSubmitPullRequestReviewMutation",selections:[{alias:null,args:n,concreteType:"SubmitPullRequestReviewPayload",kind:"LinkedField",name:"submitPullRequestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"pullRequestReview",plural:!1,selections:[e,a,i,{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[r,s,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"location",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"company",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null}],type:"User",abstractKey:null},m],storageKey:null},k,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},e],storageKey:null},{alias:null,args:[{kind:"Literal",name:"last",value:30}],concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[k,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[r,s,m],storageKey:null},e],storageKey:null}],storageKey:null}],storageKey:"comments(last:30)"},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:"reviewState",args:null,kind:"ScalarField",name:"state",storageKey:null}],type:"PullRequestReviewComment",abstractKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],type:"Comment",abstractKey:"__isComment"}],storageKey:null}],storageKey:null}]},params:{cacheID:"5b411c90078dba7eae29483db451a658",id:null,metadata:{},name:"submitReviewMutationSubmitPullRequestReviewMutation",operationKind:"mutation",text:`mutation submitReviewMutationSubmitPullRequestReviewMutation(
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
`}}}();jl.hash="9ca77642300be4c86e11175c0173e248";const xa=jl;function qa(){const[l,n]=ye(Pn),e=ne(en),a=E.useCallback(()=>{var r;n(null),(r=e==null?void 0:e.current)==null||r.setMarkdown("")},[n,e]),[t,i]=$.useMutation(xa);return[(r,s,m,k)=>{t({variables:{input:{pullRequestId:r,pullRequestReviewId:s,event:m,body:k??void 0}},onCompleted:()=>{a()}})},i]}const Aa=zl;function Ia({pr:l}){var F,g,b,_;const n=$.useFragment(Aa,l),[e]=ye(vn),a=ne(en),t=ne(ql),i=ne(nn),r=ne(ln),[s,m]=Ea({pr:n}),[k,h]=_a(n),[y,c]=qa(),p=pe(Z((g=(F=n.reviews)==null?void 0:F.edges)==null?void 0:g.map(C=>C==null?void 0:C.node)).filter(C=>C.state==="PENDING")),w=Hl(),v=h||c||m,[R,T]=i.partition((C,P)=>r.has(P)),u=(t?1:0)+i.size,o=E.useCallback(C=>P=>{var A;const I=(A=a==null?void 0:a.current)==null?void 0:A.getMarkdown();y(n.id,P,C,Tt(p==null?void 0:p.body,I))},[y,p==null?void 0:p.body,n.id,a]),f=E.useCallback(C=>{if(n.viewerCanUpdate){if(p!=null){o(C)(p.id);return}R.size>0?k(n.id,(p==null?void 0:p.id)??null,(p==null?void 0:p.body)??null,P=>{s(P,o(C))}):k(n.id,(p==null?void 0:p.id)??null,(p==null?void 0:p.body)??null,P=>{o(C)(P)})}},[n,p,R.size,k,s,o]);return K(Ae,{children:[K(se,{disabled:u<1||v,onClick:()=>{var C;for(const[P]of R)w(P);(C=a==null?void 0:a.current)==null||C.setMarkdown("")},size:"compact-sm",variant:"light",children:[d(Q,{inherit:!0,mr:"xs",children:"Abandon"}),d(St,{size:16,stroke:2})]}),d(se,{disabled:u<1||v,onClick:()=>{f("COMMENT")},size:"compact-sm",variant:"light",color:u>0?"yellow":void 0,children:u>0?`Comment (${u})`:"Comment"}),K(se,{disabled:((b=n.author)==null?void 0:b.login)===e,loading:v,onClick:()=>{f("REQUEST_CHANGES")},size:"compact-sm",color:"red",variant:"light",children:[d(Q,{mr:"xs",inherit:!0,children:"Reject"}),d(_t,{size:16,stroke:2})]}),K(se,{disabled:((_=n.author)==null?void 0:_.login)===e,loading:v,onClick:()=>{f("APPROVE")},size:"compact-sm",variant:"light",color:"green",children:[d(Q,{mr:"xs",inherit:!0,children:"Approve"}),d(cl,{size:16,stroke:2})]})]})}const Gl={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VersionSelectorFragment",selections:[{args:null,kind:"FragmentSpread",name:"useVersionHistoryFragment"},{alias:null,args:null,concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"defaultBranchRef",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}],storageKey:null}],type:"PullRequest",abstractKey:null};Gl.hash="4bdf88dee350ad2546728c39149b6c64";const Ma=Gl;function Da(l){return d(kn,{children:d(Na,{...l})})}function Na({fragment:l}){var i;const n=$.useFragment(Ma,l),{versions:e}=Dl(n),[a,t]=E.useState(e[e.length-1]);return K(re,{position:"bottom",withArrow:!0,shadow:"md",children:[d(re.Target,{children:K(se,{variant:"light",size:"compact-sm",children:["v",(i=e[e.length-1])==null?void 0:i.number]})}),d(re.Dropdown,{children:K(B,{style:{display:"flex",gap:"1rem"},children:[K(le,{shadow:"sm",padding:"lg",style:{flex:1},children:[d(Q,{size:"lg",mb:"md",style:{fontWeight:700},children:"Versions"}),d(je,{style:{height:400},children:e.map(r=>d(le,{shadow:"xs",padding:"sm",style:{marginBottom:"0.5rem",cursor:"pointer",backgroundColor:(a==null?void 0:a.number)===r.number?"#f0f0f0":"white"},onClick:()=>t(r),children:K(B,{style:{justifyContent:"space-between",alignItems:"center"},children:[K(Q,{children:[K("strong",{children:["v",r.number]})," - ",r.baseRef]}),K(qe,{color:"blue",children:[r.commitOids.length," commits"]})]})},r.number))})]}),K(le,{shadow:"sm",padding:"lg",style:{flex:2},children:[K(Q,{size:"lg",mb:"md",style:{fontWeight:700},children:["Commits for v",a==null?void 0:a.number]}),a?d(je,{style:{height:400},children:K(ue,{children:[d("thead",{children:K("tr",{children:[d("th",{children:"Commit Hash"}),d("th",{children:"Author"}),d("th",{children:"Date"})]})}),d("tbody",{children:a.commitOids.map(r=>K("tr",{children:[d("td",{children:r}),d("td",{children:a.author}),d("td",{children:a.createdAt?a.createdAt.format("D MMM YYYY HH:mm"):"Unknown"})]},r))})]})}):d(Q,{children:"No version selected."})]})]})})]})}const $a=$l;function za(l){return d(E.Suspense,{fallback:d(Kt,{}),children:d(Ua,{...l})})}function Ua({pr:l}){Lt(),ne(Fn);const n=$.useFragment($a,l);return ye(ml),K(B,{gap:"sm",justify:"flex-end",wrap:"nowrap",children:[n.mergeable==="MERGEABLE"&&(n.viewerDidAuthor||n.viewerCanMergeAsAdmin)&&d(se,{size:"compact-sm",right:"Merge",variant:"light",color:"violet",children:d(ha,{})}),d(Da,{fragment:n}),d(Ia,{pr:n})]})}const Oa=xl,Ha=El;function On({login:l,text:n,state:e,from:a,alreadySeen:t,leftIcon:i}){return K(B,{className:Ze(e,ve.secondaryText,t&&"already-seen-timeline-item","timeline-item"),justify:"space-between",children:[K(B,{gap:0,children:[i&&d(i,{size:16,stroke:1}),K(Q,{size:"sm",children:[l," ",n]})]}),d(Q,{size:"sm",children:d(xe,{from:a,prefix:null})})]})}function Ba({review:l,currentCommits:n,commits:e,alreadySeen:a}){var r,s,m,k,h;const t=$.useFragment(Oa,l);let i=null;if(t.state==="APPROVED"||t.state==="CHANGES_REQUESTED")i=d(On,{alreadySeen:a,from:te(t.createdAt),login:d(he,{capitalize:!0,login:(r=t.author)==null?void 0:r.login,reviewState:t.state}),state:ve.colorSuccess,text:t.state==="APPROVED"?"approved":"requested changes"});else if(t.state==="COMMENTED"&&pl(t.body)){const y=((s=t==null?void 0:t.commit)==null?void 0:s.oid)==null||n.has(t.commit.oid),c=e.get((m=t==null?void 0:t.commit)==null?void 0:m.oid),p=c!=null?` on v${c}`:y?"":` on a previous version (${(k=t==null?void 0:t.commit)==null?void 0:k.oid})`;i=d(On,{alreadySeen:a,from:te(t.createdAt),login:d(he,{capitalize:!0,login:(h=t.author)==null?void 0:h.login,size:"sm"}),text:"commented"+p,leftIcon:va})}else t.state==="COMMENTED"&&(i=d(En,{className:"timeline-item",comment:t,header:"none",variant:"small"}));return d("div",{className:Ze(t.state==null&&ve.colorWarning,a&&"already-seen-timeline-item","timeline-item"),children:i})}var Va={name:"ou8xsw",styles:"flex:0 0 auto"},ja={name:"ygnveb",styles:"overflow-y:auto;overflow-x:hidden;flex-grow:1"},Ga={name:"g0dsyy",styles:"float:left"};function Wa({pr:l}){var P,I,A,O,D,G,W,J,z;const n=$.useFragment(Ha,l),[e,a]=ye(en),t=Ye(ql),i=new Set(Z((I=(P=n.commits.edges)==null?void 0:P.map(S=>S==null?void 0:S.node))==null?void 0:I.map(S=>S==null?void 0:S.commit.oid))),r=ne(Pt),{versions:s}=Dl(n),m=new Map;for(const S of s.slice().reverse())for(const q of S.commitOids)m.set(q,S.number);const k=Ra();E.useCallback(S=>{k(S,n.id)},[k,n.id,a]);const h=E.useRef(null),[y,c]=E.useState(void 0),p=E.useRef(null),w=E.useCallback(S=>{S.preventDefault&&S.preventDefault(),c(window.innerWidth-S.x)},[]),v=E.useCallback(S=>{window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",v)},[w]),R=E.useCallback(S=>{S.preventDefault&&S.preventDefault(),window.addEventListener("mousemove",w),window.addEventListener("mouseup",v)},[v,w]);E.useEffect(()=>{p.current!=null&&(p.current.scrollTop=0)},[p,n]);const T=Z((O=(A=n.comments)==null?void 0:A.edges)==null?void 0:O.map(S=>S==null?void 0:S.node)).map(S=>({createdAt:te(S.createdAt),node:S,type:"comment"})),u=Z((G=(D=n.reviews)==null?void 0:D.edges)==null?void 0:G.map(S=>S==null?void 0:S.node)).map(S=>({createdAt:te(S.createdAt),node:S,type:"review"})),o=Z(s).filter(S=>S.createdAt!=null).map(S=>({createdAt:S.createdAt,node:S,type:"versionHistory"})),f=Z((W=n.timelineCommits.edges)==null?void 0:W.map(S=>S==null?void 0:S.node)).map(S=>{var q;return{createdAt:te((q=S.commit)==null?void 0:q.committedDate),node:S.commit,type:"commit"}}),F=[...T,...u,...o,...f],g=gl(Z((z=(J=n.reviews)==null?void 0:J.edges)==null?void 0:z.map(S=>S==null?void 0:S.node)).filter(S=>{var q;return((q=S.author)==null?void 0:q.login)===r})),b=F.sort((S,q)=>q.createdAt.diff(S.createdAt)).map(S=>{var q,V,N,X,j,L,x;if(S.type==="review"&&((q=S.node)==null?void 0:q.state)!=null){const U=S.node;return d(Ba,{alreadySeen:(S==null?void 0:S.createdAt)<(g==null?void 0:g.createdAt),commits:m,currentCommits:i,review:U},U.id)}else if(S.type==="comment"){const U=S.node;return d(En,{alreadySeen:(S==null?void 0:S.createdAt)<(g==null?void 0:g.createdAt),className:"timeline-item",comment:U,header:"none",variant:U.id===(g==null?void 0:g.id)?"normal":"small"},U.id)}else{if(S.type=="versionHistory")return d(Rn,{label:K(Ae,{children:[d(ka,{stroke:1,size:16}),K(Q,{ml:"xs",children:[d(he,{login:(V=S.node)==null?void 0:V.author})," updated to v",S.node.number]})]}),size:"lg",c:"dark",my:"sm"},S.node.id);if(S.type==="commit")return K(B,{gap:0,justify:"space-between",children:[K(B,{gap:0,align:"center",children:[d(fa,{stroke:1,css:Ga,size:16}),d(he,{login:(j=(X=(N=S.node)==null?void 0:N.author)==null?void 0:X.user)==null?void 0:j.login,size:"sm"}),d(Q,{span:!0,lineClamp:3,size:"sm",children:" added commit "}),d(Et,{children:(L=S.node)==null?void 0:L.message})]}),d(Q,{children:d(xe,{from:S.createdAt,prefix:""})})]},(x=S.node)==null?void 0:x.id)}}),[_,C]=xt();return K(Ae,{children:[d("div",{className:"side-panel-resizer",onMouseDown:S=>R(S)}),K(ge,{className:"side-panel",css:dl({overflowX:"hidden",width:y,flexBasis:"30vw",flexGrow:1,height:"100%"},"",""),gap:0,children:[d(za,{pr:n}),d(ge,{ref:p,css:ja,gap:"xs",mt:"xs",children:b}),d(ge,{css:Va,children:d(Nl,{instanceId:"activityPanel",isDisabled:n.viewerCanUpdate!==!0,rows:C?5:1,onChange:S=>{t(!S),a(h)},ref:_,converterRef:h})})]})]})}const Wl={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitsViewRepositoryFragment",selections:[{args:null,kind:"FragmentSpread",name:"CommitViewRepositoryFragment"}],type:"Repository",abstractKey:null};Wl.hash="166d8fb1bb219b363a07c5955453bf3e";const Ql=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"ids"}],n=[{kind:"Variable",name:"ids",variableName:"ids"}],e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},a=[{kind:"Literal",name:"first",value:2}],t={alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"CommitsViewSelectedCommitsQuery",selections:[{alias:null,args:n,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"CommitViewFragment"},e,{alias:null,args:a,concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[t],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"}],type:"Commit",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"CommitsViewSelectedCommitsQuery",selections:[{alias:null,args:n,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e,{kind:"InlineFragment",selections:[t,{alias:null,args:a,concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[t,e,i],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"},{alias:null,args:null,kind:"ScalarField",name:"messageHeadline",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"additions",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"deletions",storageKey:null},i],type:"Commit",abstractKey:null}],storageKey:null}]},params:{cacheID:"6b03dc487f67556e13b2b6138423938c",id:null,metadata:{},name:"CommitsViewSelectedCommitsQuery",operationKind:"query",text:`query CommitsViewSelectedCommitsQuery(
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
`}}}();Ql.hash="d8a74ab73e2d09ab3e0a74136deeb2e8";const Zl={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitsViewPullRequestFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"baseRef",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:30}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null},{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"CommitViewFragment"},{alias:null,args:[{kind:"Literal",name:"first",value:2}],concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"commits(first:30)"},{args:null,kind:"FragmentSpread",name:"CommitViewPullRequestFragment"}],type:"PullRequest",abstractKey:null};Zl.hash="b50d242b016895a40696393b7c59120b";const Yl={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitViewPullRequestFragment",selections:[{args:null,kind:"FragmentSpread",name:"CommitFileFragment"}],type:"PullRequest",abstractKey:null};Yl.hash="4ae6d86093d323d612422dcaccce08f5";const Jl={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitViewRepositoryFragment",selections:[{args:null,kind:"FragmentSpread",name:"CommitFileRepositoryFragment"}],type:"Repository",abstractKey:null};Jl.hash="506356fe21d3d2b2b49c594a56785cfb";const Xl=function(){var l={alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitViewFragment",selections:[{args:null,kind:"FragmentSpread",name:"CommitFileCommitFragment"},l,{alias:null,args:null,kind:"ScalarField",name:"messageHeadline",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"additions",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"deletions",storageKey:null},n,{alias:null,args:[{kind:"Literal",name:"first",value:2}],concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[l,n],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"}],type:"Commit",abstractKey:null}}();Xl.hash="4c16f91405370f5dc2e6dff906b2c33a";const et=function(){var l={alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitFileCommitFragment",selections:[l,{alias:null,args:[{kind:"Literal",name:"first",value:2}],concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[l],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"}],type:"Commit",abstractKey:null}}();et.hash="b0d4a9b9421f19d0929c3a59b9ddf06f";const nt=function(){var l={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitFileRepositoryFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],storageKey:null},l,{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"defaultBranchRef",plural:!1,selections:[l],storageKey:null}],type:"Repository",abstractKey:null}}();nt.hash="7daf2e7ee0a48811a456965015f24ee9";const lt={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitFileFragment",selections:[{args:null,kind:"FragmentSpread",name:"FileDifferFragment"}],type:"PullRequest",abstractKey:null};lt.hash="ba5fb6c52ee944430cc5f8131c9c5651";function Ue(l,n,e,a,t="blob"){return`https://github.com/${l}/${n}/${t}/${e}/${a}`}function Qa({owner:l,name:n,defaultBranchName:e,commitOid:a,parentCommitOid:t,filename:i}){return K(Y,{shadow:"md",width:200,children:[d(Y.Target,{children:d(yl,{variant:"transparent",children:d(pa,{stroke:1})})}),K(Y.Dropdown,{children:[e!=null&&d(Y.Item,{children:K("a",{href:Ue(l,n,e,i),target:"_blank",rel:"noreferrer",children:["View in ",e]})}),t!=null&&d(Y.Item,{children:d("a",{href:Ue(l,n,t,i),target:"_blank",rel:"noreferrer",children:"View in parent commit"})}),d(Y.Item,{children:d("a",{href:Ue(l,n,a,i),target:"_blank",rel:"noreferrer",children:"View in this commit"})}),d(Y.Divider,{}),e!=null&&d(Y.Item,{children:d("a",{href:Ue(l,n,e,i,"blame"),target:"_blank",rel:"noreferrer",children:"Blame"})})]})]})}var Za={name:"1bmnxg7",styles:"white-space:nowrap"};function Ya({path:l}){const n=l.split("/");return d(qt,{separatorMargin:"xxxs",children:n.map((e,a)=>{const t=n.slice(a).join("/");return d(Rl,{value:t,children:({copied:i,copy:r})=>d(At,{label:i?"Copied":`Copy ${t}`,withArrow:!0,position:"bottom",children:d(Q,{component:"a",css:Za,onClick:r,children:e})})},t)})})}const tt=function(){var l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FileDifferFragment",selections:[l,{alias:null,args:[{kind:"Literal",name:"first",value:20}],concreteType:"PullRequestReviewThreadConnection",kind:"LinkedField",name:"reviewThreads",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"node",plural:!1,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"path",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"line",storageKey:null},{args:null,kind:"FragmentSpread",name:"CommentThreadFragment"}],storageKey:null}],storageKey:null}],storageKey:"reviewThreads(first:20)"},{args:null,kind:"FragmentSpread",name:"CommentThreadPullRequestFragment"}],type:"PullRequest",abstractKey:null}}();tt.hash="8a4fc8d57a67064d4115060c8f334cec";function be(){}be.prototype={diff:function(n,e){var a,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.callback;typeof t=="function"&&(i=t,t={}),this.options=t;var r=this;function s(f){return i?(setTimeout(function(){i(void 0,f)},0),!0):f}n=this.castInput(n),e=this.castInput(e),n=this.removeEmpty(this.tokenize(n)),e=this.removeEmpty(this.tokenize(e));var m=e.length,k=n.length,h=1,y=m+k;t.maxEditLength&&(y=Math.min(y,t.maxEditLength));var c=(a=t.timeout)!==null&&a!==void 0?a:1/0,p=Date.now()+c,w=[{oldPos:-1,lastComponent:void 0}],v=this.extractCommon(w[0],e,n,0);if(w[0].oldPos+1>=k&&v+1>=m)return s([{value:this.join(e),count:e.length}]);var R=-1/0,T=1/0;function u(){for(var f=Math.max(R,-h);f<=Math.min(T,h);f+=2){var F=void 0,g=w[f-1],b=w[f+1];g&&(w[f-1]=void 0);var _=!1;if(b){var C=b.oldPos-f;_=b&&0<=C&&C<m}var P=g&&g.oldPos+1<k;if(!_&&!P){w[f]=void 0;continue}if(!P||_&&g.oldPos+1<b.oldPos?F=r.addToPath(b,!0,void 0,0):F=r.addToPath(g,void 0,!0,1),v=r.extractCommon(F,e,n,f),F.oldPos+1>=k&&v+1>=m)return s(Ja(r,F.lastComponent,e,n,r.useLongestToken));w[f]=F,F.oldPos+1>=k&&(T=Math.min(T,f-1)),v+1>=m&&(R=Math.max(R,f+1))}h++}if(i)(function f(){setTimeout(function(){if(h>y||Date.now()>p)return i();u()||f()},0)})();else for(;h<=y&&Date.now()<=p;){var o=u();if(o)return o}},addToPath:function(n,e,a,t){var i=n.lastComponent;return i&&i.added===e&&i.removed===a?{oldPos:n.oldPos+t,lastComponent:{count:i.count+1,added:e,removed:a,previousComponent:i.previousComponent}}:{oldPos:n.oldPos+t,lastComponent:{count:1,added:e,removed:a,previousComponent:i}}},extractCommon:function(n,e,a,t){for(var i=e.length,r=a.length,s=n.oldPos,m=s-t,k=0;m+1<i&&s+1<r&&this.equals(e[m+1],a[s+1]);)m++,s++,k++;return k&&(n.lastComponent={count:k,previousComponent:n.lastComponent}),n.oldPos=s,m},equals:function(n,e){return this.options.comparator?this.options.comparator(n,e):n===e||this.options.ignoreCase&&n.toLowerCase()===e.toLowerCase()},removeEmpty:function(n){for(var e=[],a=0;a<n.length;a++)n[a]&&e.push(n[a]);return e},castInput:function(n){return n},tokenize:function(n){return n.split("")},join:function(n){return n.join("")}};function Ja(l,n,e,a,t){for(var i=[],r;n;)i.push(n),r=n.previousComponent,delete n.previousComponent,n=r;i.reverse();for(var s=0,m=i.length,k=0,h=0;s<m;s++){var y=i[s];if(y.removed){if(y.value=l.join(a.slice(h,h+y.count)),h+=y.count,s&&i[s-1].added){var p=i[s-1];i[s-1]=i[s],i[s]=p}}else{if(!y.added&&t){var c=e.slice(k,k+y.count);c=c.map(function(v,R){var T=a[h+R];return T.length>v.length?T:v}),y.value=l.join(c)}else y.value=l.join(e.slice(k,k+y.count));k+=y.count,y.added||(h+=y.count)}}var w=i[m-1];return m>1&&typeof w.value=="string"&&(w.added||w.removed)&&l.equals("",w.value)&&(i[m-2].value+=w.value,i.pop()),i}var Hn=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,Bn=/\S/,xn=new be;xn.equals=function(l,n){return this.options.ignoreCase&&(l=l.toLowerCase(),n=n.toLowerCase()),l===n||this.options.ignoreWhitespace&&!Bn.test(l)&&!Bn.test(n)};xn.tokenize=function(l){for(var n=l.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/),e=0;e<n.length-1;e++)!n[e+1]&&n[e+2]&&Hn.test(n[e])&&Hn.test(n[e+2])&&(n[e]+=n[e+2],n.splice(e+1,2),e--);return n};function Xa(l,n,e){return xn.diff(l,n,e)}var at=new be;at.tokenize=function(l){this.options.stripTrailingCr&&(l=l.replace(/\r\n/g,`
`));var n=[],e=l.split(/(\n|\r\n)/);e[e.length-1]||e.pop();for(var a=0;a<e.length;a++){var t=e[a];a%2&&!this.options.newlineIsToken?n[n.length-1]+=t:(this.options.ignoreWhitespace&&(t=t.trim()),n.push(t))}return n};var ei=new be;ei.tokenize=function(l){return l.split(/(\S.+?[.!?])(?=\s+|$)/)};var ni=new be;ni.tokenize=function(l){return l.split(/([{}:;,]|\s+)/)};function Ve(l){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ve=function(n){return typeof n}:Ve=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ve(l)}var li=Object.prototype.toString,Ie=new be;Ie.useLongestToken=!0;Ie.tokenize=at.tokenize;Ie.castInput=function(l){var n=this.options,e=n.undefinedReplacement,a=n.stringifyReplacer,t=a===void 0?function(i,r){return typeof r>"u"?e:r}:a;return typeof l=="string"?l:JSON.stringify(mn(l,null,null,t),t,"  ")};Ie.equals=function(l,n){return be.prototype.equals.call(Ie,l.replace(/,([\r\n])/g,"$1"),n.replace(/,([\r\n])/g,"$1"))};function mn(l,n,e,a,t){n=n||[],e=e||[],a&&(l=a(t,l));var i;for(i=0;i<n.length;i+=1)if(n[i]===l)return e[i];var r;if(li.call(l)==="[object Array]"){for(n.push(l),r=new Array(l.length),e.push(r),i=0;i<l.length;i+=1)r[i]=mn(l[i],n,e,a,t);return n.pop(),e.pop(),r}if(l&&l.toJSON&&(l=l.toJSON()),Ve(l)==="object"&&l!==null){n.push(l),r={},e.push(r);var s=[],m;for(m in l)l.hasOwnProperty(m)&&s.push(m);for(s.sort(),i=0;i<s.length;i+=1)m=s[i],r[m]=mn(l[m],n,e,a,m);n.pop(),e.pop()}else r=l;return r}var gn=new be;gn.tokenize=function(l){return l.slice()};gn.join=gn.removeEmpty=function(l){return l};var tn={exports:{}},Vn;function ti(){return Vn||(Vn=1,function(l){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var e=function(a){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,r={},s={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function u(o){return o instanceof m?new m(o.type,u(o.content),o.alias):Array.isArray(o)?o.map(u):o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(u){return Object.prototype.toString.call(u).slice(8,-1)},objId:function(u){return u.__id||Object.defineProperty(u,"__id",{value:++i}),u.__id},clone:function u(o,f){f=f||{};var F,g;switch(s.util.type(o)){case"Object":if(g=s.util.objId(o),f[g])return f[g];F={},f[g]=F;for(var b in o)o.hasOwnProperty(b)&&(F[b]=u(o[b],f));return F;case"Array":return g=s.util.objId(o),f[g]?f[g]:(F=[],f[g]=F,o.forEach(function(_,C){F[C]=u(_,f)}),F);default:return o}},getLanguage:function(u){for(;u;){var o=t.exec(u.className);if(o)return o[1].toLowerCase();u=u.parentElement}return"none"},setLanguage:function(u,o){u.className=u.className.replace(RegExp(t,"gi"),""),u.classList.add("language-"+o)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(F){var u=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(F.stack)||[])[1];if(u){var o=document.getElementsByTagName("script");for(var f in o)if(o[f].src==u)return o[f]}return null}},isActive:function(u,o,f){for(var F="no-"+o;u;){var g=u.classList;if(g.contains(o))return!0;if(g.contains(F))return!1;u=u.parentElement}return!!f}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(u,o){var f=s.util.clone(s.languages[u]);for(var F in o)f[F]=o[F];return f},insertBefore:function(u,o,f,F){F=F||s.languages;var g=F[u],b={};for(var _ in g)if(g.hasOwnProperty(_)){if(_==o)for(var C in f)f.hasOwnProperty(C)&&(b[C]=f[C]);f.hasOwnProperty(_)||(b[_]=g[_])}var P=F[u];return F[u]=b,s.languages.DFS(s.languages,function(I,A){A===P&&I!=u&&(this[I]=b)}),b},DFS:function u(o,f,F,g){g=g||{};var b=s.util.objId;for(var _ in o)if(o.hasOwnProperty(_)){f.call(o,_,o[_],F||_);var C=o[_],P=s.util.type(C);P==="Object"&&!g[b(C)]?(g[b(C)]=!0,u(C,f,null,g)):P==="Array"&&!g[b(C)]&&(g[b(C)]=!0,u(C,f,_,g))}}},plugins:{},highlightAll:function(u,o){s.highlightAllUnder(document,u,o)},highlightAllUnder:function(u,o,f){var F={callback:f,container:u,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",F),F.elements=Array.prototype.slice.apply(F.container.querySelectorAll(F.selector)),s.hooks.run("before-all-elements-highlight",F);for(var g=0,b;b=F.elements[g++];)s.highlightElement(b,o===!0,F.callback)},highlightElement:function(u,o,f){var F=s.util.getLanguage(u),g=s.languages[F];s.util.setLanguage(u,F);var b=u.parentElement;b&&b.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(b,F);var _=u.textContent,C={element:u,language:F,grammar:g,code:_};function P(A){C.highlightedCode=A,s.hooks.run("before-insert",C),C.element.innerHTML=C.highlightedCode,s.hooks.run("after-highlight",C),s.hooks.run("complete",C),f&&f.call(C.element)}if(s.hooks.run("before-sanity-check",C),b=C.element.parentElement,b&&b.nodeName.toLowerCase()==="pre"&&!b.hasAttribute("tabindex")&&b.setAttribute("tabindex","0"),!C.code){s.hooks.run("complete",C),f&&f.call(C.element);return}if(s.hooks.run("before-highlight",C),!C.grammar){P(s.util.encode(C.code));return}if(o&&a.Worker){var I=new Worker(s.filename);I.onmessage=function(A){P(A.data)},I.postMessage(JSON.stringify({language:C.language,code:C.code,immediateClose:!0}))}else P(s.highlight(C.code,C.grammar,C.language))},highlight:function(u,o,f){var F={code:u,grammar:o,language:f};if(s.hooks.run("before-tokenize",F),!F.grammar)throw new Error('The language "'+F.language+'" has no grammar.');return F.tokens=s.tokenize(F.code,F.grammar),s.hooks.run("after-tokenize",F),m.stringify(s.util.encode(F.tokens),F.language)},tokenize:function(u,o){var f=o.rest;if(f){for(var F in f)o[F]=f[F];delete o.rest}var g=new y;return c(g,g.head,u),h(u,g,o,g.head,0),w(g)},hooks:{all:{},add:function(u,o){var f=s.hooks.all;f[u]=f[u]||[],f[u].push(o)},run:function(u,o){var f=s.hooks.all[u];if(!(!f||!f.length))for(var F=0,g;g=f[F++];)g(o)}},Token:m};a.Prism=s;function m(u,o,f,F){this.type=u,this.content=o,this.alias=f,this.length=(F||"").length|0}m.stringify=function u(o,f){if(typeof o=="string")return o;if(Array.isArray(o)){var F="";return o.forEach(function(P){F+=u(P,f)}),F}var g={type:o.type,content:u(o.content,f),tag:"span",classes:["token",o.type],attributes:{},language:f},b=o.alias;b&&(Array.isArray(b)?Array.prototype.push.apply(g.classes,b):g.classes.push(b)),s.hooks.run("wrap",g);var _="";for(var C in g.attributes)_+=" "+C+'="'+(g.attributes[C]||"").replace(/"/g,"&quot;")+'"';return"<"+g.tag+' class="'+g.classes.join(" ")+'"'+_+">"+g.content+"</"+g.tag+">"};function k(u,o,f,F){u.lastIndex=o;var g=u.exec(f);if(g&&F&&g[1]){var b=g[1].length;g.index+=b,g[0]=g[0].slice(b)}return g}function h(u,o,f,F,g,b){for(var _ in f)if(!(!f.hasOwnProperty(_)||!f[_])){var C=f[_];C=Array.isArray(C)?C:[C];for(var P=0;P<C.length;++P){if(b&&b.cause==_+","+P)return;var I=C[P],A=I.inside,O=!!I.lookbehind,D=!!I.greedy,G=I.alias;if(D&&!I.pattern.global){var W=I.pattern.toString().match(/[imsuy]*$/)[0];I.pattern=RegExp(I.pattern.source,W+"g")}for(var J=I.pattern||I,z=F.next,S=g;z!==o.tail&&!(b&&S>=b.reach);S+=z.value.length,z=z.next){var q=z.value;if(o.length>u.length)return;if(!(q instanceof m)){var V=1,N;if(D){if(N=k(J,S,u,O),!N||N.index>=u.length)break;var x=N.index,X=N.index+N[0].length,j=S;for(j+=z.value.length;x>=j;)z=z.next,j+=z.value.length;if(j-=z.value.length,S=j,z.value instanceof m)continue;for(var L=z;L!==o.tail&&(j<X||typeof L.value=="string");L=L.next)V++,j+=L.value.length;V--,q=u.slice(S,j),N.index-=S}else if(N=k(J,0,q,O),!N)continue;var x=N.index,U=N[0],H=q.slice(0,x),ee=q.slice(x+U.length),de=S+q.length;b&&de>b.reach&&(b.reach=de);var ce=z.prev;H&&(ce=c(o,ce,H),S+=H.length),p(o,ce,V);var Te=new m(_,A?s.tokenize(U,A):U,G,U);if(z=c(o,ce,Te),ee&&c(o,z,ee),V>1){var me={cause:_+","+P,reach:de};h(u,o,f,z.prev,S,me),b&&me.reach>b.reach&&(b.reach=me.reach)}}}}}}function y(){var u={value:null,prev:null,next:null},o={value:null,prev:u,next:null};u.next=o,this.head=u,this.tail=o,this.length=0}function c(u,o,f){var F=o.next,g={value:f,prev:o,next:F};return o.next=g,F.prev=g,u.length++,g}function p(u,o,f){for(var F=o.next,g=0;g<f&&F!==u.tail;g++)F=F.next;o.next=F,F.prev=o,u.length-=g}function w(u){for(var o=[],f=u.head.next;f!==u.tail;)o.push(f.value),f=f.next;return o}if(!a.document)return a.addEventListener&&(s.disableWorkerMessageHandler||a.addEventListener("message",function(u){var o=JSON.parse(u.data),f=o.language,F=o.code,g=o.immediateClose;a.postMessage(s.highlight(F,s.languages[f],f)),g&&a.close()},!1)),s;var v=s.util.currentScript();v&&(s.filename=v.src,v.hasAttribute("data-manual")&&(s.manual=!0));function R(){s.manual||s.highlightAll()}if(!s.manual){var T=document.readyState;T==="loading"||T==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",R):window.requestAnimationFrame?window.requestAnimationFrame(R):window.setTimeout(R,16)}return s}(n);l.exports&&(l.exports=e),typeof Nn<"u"&&(Nn.Prism=e),e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(t,i){var r={};r["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[i]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};s["language-"+i]={pattern:/[\s\S]+/,inside:e.languages[i]};var m={};m[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:s},e.languages.insertBefore("markup","cdata",m)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(a,t){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:e.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml,function(a){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var i=a.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))}(e),e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript,function(){if(typeof e>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var a="Loading…",t=function(v,R){return"✖ Error "+v+" while fetching file: "+R},i="✖ Error: File does not exist or is empty",r={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",m="loading",k="loaded",h="failed",y="pre[data-src]:not(["+s+'="'+k+'"]):not(['+s+'="'+m+'"])';function c(v,R,T){var u=new XMLHttpRequest;u.open("GET",v,!0),u.onreadystatechange=function(){u.readyState==4&&(u.status<400&&u.responseText?R(u.responseText):u.status>=400?T(t(u.status,u.statusText)):T(i))},u.send(null)}function p(v){var R=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(R){var T=Number(R[1]),u=R[2],o=R[3];return u?o?[T,Number(o)]:[T,void 0]:[T,T]}}e.hooks.add("before-highlightall",function(v){v.selector+=", "+y}),e.hooks.add("before-sanity-check",function(v){var R=v.element;if(R.matches(y)){v.code="",R.setAttribute(s,m);var T=R.appendChild(document.createElement("CODE"));T.textContent=a;var u=R.getAttribute("data-src"),o=v.language;if(o==="none"){var f=(/\.(\w+)$/.exec(u)||[,"none"])[1];o=r[f]||f}e.util.setLanguage(T,o),e.util.setLanguage(R,o);var F=e.plugins.autoloader;F&&F.loadLanguages(o),c(u,function(g){R.setAttribute(s,k);var b=p(R.getAttribute("data-range"));if(b){var _=g.split(/\r\n?|\n/g),C=b[0],P=b[1]==null?_.length:b[1];C<0&&(C+=_.length),C=Math.max(0,Math.min(C-1,_.length)),P<0&&(P+=_.length),P=Math.max(0,Math.min(P,_.length)),g=_.slice(C,P).join(`
`),R.hasAttribute("data-start")||R.setAttribute("data-start",String(C+1))}T.textContent=g,e.highlightElement(T)},function(g){R.setAttribute(s,h),T.textContent=g})}}),e.plugins.fileHighlight={highlight:function(R){for(var T=(R||document).querySelectorAll(y),u=0,o;o=T[u++];)e.highlightElement(o)}};var w=!1;e.fileHighlight=function(){w||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),w=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}()}(tn)),tn.exports}var ai=ti();const an=fl(ai);function ii(){const l=$.useRelayEnvironment(),n=Ye(ln);return e=>$.commitLocalUpdate(l,a=>{new Ke(a).delete(e),n(i=>i.delete(e))})}function si(){const l=$.useRelayEnvironment(),[n,e]=ye(ln);return(a,t,i,r)=>$.commitLocalUpdate(l,s=>{var y,c;const m=new Ke(s),k=n.findEntry((p,w)=>p.path===a&&p.line===t);if(k!=null){const[p,w]=k,v=m.get(p);v==null||v.setValues({isPending:!0,createdAt:te().toISOString(),viewerCanReply:!0});return}const h={isPending:!0,createdAt:te().toISOString(),startLine:r==null?null:t,line:r??t,path:a,viewerCanReply:!0};(c=(y=m.get(i))==null?void 0:y.createAndAppendNodeToEdge(s,"reviewThreads",{first:20},"PullRequestReviewThreadConnection","PullRequestReviewThreadEdge","PullRequestReviewThread",h))==null||c.then(({nodeId:p,node:w})=>{e(v=>v.set(p,h))})})}const it={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommentThreadPullRequestFragment",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:30}],concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"}],type:"PullRequest",abstractKey:null};it.hash="aa1f6a4d5384a0133128bd587d5501f7";const st=function(){var l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"line",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"startLine",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommentThreadFragment",selections:[l,{alias:null,args:null,kind:"ScalarField",name:"isResolved",storageKey:null},n,e,{alias:null,args:[{kind:"Literal",name:"first",value:20}],concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[l,e,n,{args:null,kind:"FragmentSpread",name:"CommentFragment"}],storageKey:null}],storageKey:null}],storageKey:"comments(first:20)"},{alias:null,args:null,kind:"ScalarField",name:"viewerCanReply",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanResolve",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanUnresolve",storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],type:"PullRequestReviewThread",abstractKey:null}}();st.hash="4c2440be5d1adaf049383892d868dc79";const rt=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"input"}],n=[{kind:"Variable",name:"input",variableName:"input"}],e={alias:null,args:null,kind:"ScalarField",name:"isResolved",storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"resolveMutationResolveReviewThreadMutation",selections:[{alias:null,args:n,concreteType:"ResolveReviewThreadPayload",kind:"LinkedField",name:"resolveReviewThread",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"thread",plural:!1,selections:[e],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"resolveMutationResolveReviewThreadMutation",selections:[{alias:null,args:n,concreteType:"ResolveReviewThreadPayload",kind:"LinkedField",name:"resolveReviewThread",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"thread",plural:!1,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:"641695ec9879785ab75cf16964a6790c",id:null,metadata:{},name:"resolveMutationResolveReviewThreadMutation",operationKind:"mutation",text:`mutation resolveMutationResolveReviewThreadMutation(
  $input: ResolveReviewThreadInput!
) {
  resolveReviewThread(input: $input) {
    thread {
      isResolved
      id
    }
  }
}
`}}}();rt.hash="f70941499b9849ac6ef09d817901d77e";const ri=rt;function oi(){const[l,n]=$.useMutation(ri);return[(e,a)=>l({variables:{input:{threadId:e}},onCompleted:a}),n]}const ot=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"input"}],n=[{kind:"Variable",name:"input",variableName:"input"}],e={alias:null,args:null,kind:"ScalarField",name:"isResolved",storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"unresolveMutationResolveReviewThreadMutation",selections:[{alias:null,args:n,concreteType:"UnresolveReviewThreadPayload",kind:"LinkedField",name:"unresolveReviewThread",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"thread",plural:!1,selections:[e],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"unresolveMutationResolveReviewThreadMutation",selections:[{alias:null,args:n,concreteType:"UnresolveReviewThreadPayload",kind:"LinkedField",name:"unresolveReviewThread",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"thread",plural:!1,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:"902dd181485f550cd286b893d80a18b4",id:null,metadata:{},name:"unresolveMutationResolveReviewThreadMutation",operationKind:"mutation",text:`mutation unresolveMutationResolveReviewThreadMutation(
  $input: UnresolveReviewThreadInput!
) {
  unresolveReviewThread(input: $input) {
    thread {
      isResolved
      id
    }
  }
}
`}}}();ot.hash="97e6df83e28c50be44d194ed35693ced";const ui=ot;function di(){const[l,n]=$.useMutation(ui);return[(e,a)=>l({variables:{input:{threadId:e}},onCompleted:a}),n]}const ci=st,mi=it;function gi({reviewThread:l,pr:n}){var C,P,I,A,O;const e=$.useFragment(ci,l),a=$.useFragment(mi,n);pe(Z((P=(C=a.reviews)==null?void 0:C.edges)==null?void 0:P.map(D=>D==null?void 0:D.node)).map(D=>D.state==null));const t=E.useRef(null),[i,r]=E.useState(!1),[s,m,k]=Je(e.isResolved,e.isResolved?12:16),h=Ka(),y=Hl(),c=ii(),p=E.useCallback(()=>{var G,W;const D=(G=t==null?void 0:t.current)==null?void 0:G.getMarkdown();h(D,e.id),(W=t==null?void 0:t.current)==null||W.setMarkdown("")},[e.id,h]),[w,v]=oi(),[R,T]=di(),[u,o]=E.useState(!0),f=Z((A=(I=e.comments)==null?void 0:I.edges)==null?void 0:A.map(D=>D==null?void 0:D.node)),F=!e.isPending&&d(se,{size:e.isResolved?"compact-xs":"compact-sm",variant:"default",disabled:!(e.viewerCanResolve||e.viewerCanUnresolve),loading:v||T,onClick:()=>{e.isResolved?(R(e.id),k(!1)):(w(e.id),k(!0))},children:K(B,{gap:"xxxs",children:[d(ga,{stroke:1,size:16}),e.isResolved?"Resolved":"Resolve"]})}),g=e.viewerCanReply&&!s,b=Ge(f);let _=null;return b!=null&&(b.startLine!=null?_=`${f.length} comment(s) on lines ${b.startLine}-${(O=Ge(f))==null?void 0:O.line}`:_=`${f.length} comment(s) on line ${b.line}`),e.isPending&&(e.startLine!=null?_=`are commenting on lines ${e.startLine}-${e.line}`:_=`are commenting on line ${e.line}`),K(le,{withBorder:!0,radius:0,className:"comment-thread",color:e.isPending?"yellow":void 0,children:[d(le.Section,{withBorder:!0,color:e.isPending?"yellow":void 0,children:K(B,{className:ve.secondaryText,mx:"sm",my:e.isResolved?2:6,children:[d(Q,{size:e.isResolved?"xs":"sm",children:_}),K(B,{align:"center",className:ve.floatRight,children:[F,!e.isPending&&m]})]})}),K(le.Section,{className:"thread-comment middle",children:[!s&&f.map((D,G)=>d(En,{comment:D,header:"none",bottomBorder:G!==f.length-1,border:!0},D.id)),g&&K(ge,{gap:0,children:[d(Nl,{converterRef:t,onChange:o,instanceId:e.id,m:0}),K(B,{justify:"space-between",m:"xs",mt:"xs",children:[d(se,{disabled:!e.isPending&&u,onClick:()=>{var D;y(e.id),(D=t==null?void 0:t.current)==null||D.setMarkdown(""),e.isPending&&c(e.id)},size:"compact-sm",variant:"secondary",children:"Cancel"}),K(B,{children:[d(se,{onClick:()=>r(!0),size:"compact-sm",variant:"secondary",disabled:u,children:"Suggest changes"}),d(se,{onClick:()=>p(),size:"compact-sm",disabled:u,children:"Save"})]})]})]})]})]})}function pi(l){return d(kn,{children:d(gi,{...l})})}const yi="_code-row_3ty0a_1",fi="_file-table_3ty0a_8",hi="_line-number_3ty0a_10",vi="_token-container_3ty0a_41",Oe={codeRow:yi,fileTable:fi,lineNumber:hi,tokenContainer:vi},jn=/^@@ ([\+\-0-9]+)(?:,([0-9]+))? ([\+\-0-9]+)(?:,([0-9]+))? @@/;new Set(".svg");const ki={bzl:"py",rs:"rust"},Fi=tt;function Ri(l){return d(E.Suspense,{fallback:d(Me,{text:"Loading file"}),children:d(wi,{...l})})}function wi({patch:l,filename:n,pr:e}){var b,_;const a=(l==null?void 0:l.split(`
`))??[],[t,i]=E.useState(a.length>2e3||l.length>2e4),r=new Map,s=$.useFragment(Fi,e),[m,k]=E.useState([null,null]),[h,y]=E.useState(!1),c=si(),p=E.useCallback(()=>{y(!1),k([null,null])},[]),w=E.useCallback(C=>{y(!0),k(P=>[C,P[1]]),window.addEventListener("mouseup",p)},[k,p]),v=E.useCallback((C,P)=>{y(!1),window.removeEventListener("mouseup",p),m[0]!=null&&(m[0]==P?c(n,P,s.id):c(n,m[0],s.id,P),k([null,null]),C.preventDefault&&C.preventDefault())},[c,n,m,s.id,p]),R=E.useCallback(C=>{h&&k(P=>[P[0],C])},[k,h]);if(t)return d("div",{onClick:()=>i(!1),children:K(Q,{pl:"sm",children:["This file is pretty big (",It(l.length*8),")! Click to load."]})});const T=Z((_=(b=s==null?void 0:s.reviewThreads)==null?void 0:b.edges)==null?void 0:_.map(C=>C==null?void 0:C.node).flat().filter(C=>(C==null?void 0:C.path)==n));let u;for(const C of a){if(jn.test(C)){u=C,r.set(u,[]);continue}u!=null&&r.get(u).push(C)}const o=Array.from(r.entries());let f=0;const F=o.map(([C,P],I)=>{const A=P.filter(q=>q!=="\\ No newline at end of file"),[O,D,G,W,J]=C.match(jn);f=Math.max(f,parseInt(W)+parseInt(J));const z=[];let S=0;for(let q=0;q<A.length;q++){const V=A[q],N=V.slice(1);let X=[];if(q<A.length-1&&A[q].startsWith("-")&&A[q+1].startsWith("+")&&(q==0||q>0&&A[q-1].startsWith(" "))&&(q===A.length-2||q<A.length-2&&A[q+2].startsWith(" "))){const j=Xa(N,A[q+1].slice(1),{});X=[[],[]],j.map(L=>{if(L.added===!0){X[1].push(d("span",{className:"added-line-emphasis",children:L.value},`added_${V}`));return}else if(L.removed===!0){X[0].push(d("span",{className:"removed-line-emphasis",children:L.value},`removed_${V}`));return}X[0].push(L.value),X[1].push(L.value)})}else{an.manual=!0;const j=n.substring(n.lastIndexOf(".")+1),L=ki[j]??j,x=an.languages[L]??null;let U=null;x!=null&&(U=an.highlight(N,x,j)),X=[[U==null?N:d("div",{className:Oe.tokenContainer,dangerouslySetInnerHTML:{__html:U}},0)]]}for(const[j,L]of X.entries()){const x=parseInt(W)+S,U=Ze(A[q+j].startsWith("+")&&"added-line",V.startsWith("-")&&"removed-line",m[0]!=null&&m[1]!=null&&x>=m[0]&&x<=m[1]&&"highlighted-line"),H=A[q+j].startsWith("-");z.push(K("tr",{className:U,children:[d("td",{className:Oe.lineNumber,onMouseDown:()=>w(x),onMouseEnter:()=>R(x),onMouseUp:ee=>v(ee,x),children:H?"":x}),d("td",{className:Oe.codeRow,children:L})]},`${q}_${j}_${H}`));for(const ee of T??[])ee.line==x&&!A[q+j].startsWith("-")&&z.push(d("tr",{className:"comment-container",children:d("td",{colSpan:2,children:d(pi,{pr:s,reviewThread:ee},`ct_${x}`)})}))}X.length>1&&q++,A[q].startsWith("-")||S++}return K(E.Fragment,{children:[z,I!=o.length-1?d("tr",{children:d("td",{className:ve.background,colSpan:2,style:{paddingLeft:"4ch",borderTop:"1px var(--bs-border-color-translucent) dashed",borderBottom:"1px var(--bs-border-color-translucent) dashed",backgroundColor:"var(--bs-light-bg-subtle)"},children:" "})}):null]},`${I}_line`)}),g=f.toString().length;return K("table",{className:Oe.fileTable,style:{flex:1,tableLayout:"fixed",borderCollapse:"collapse"},children:[d("thead",{children:K("tr",{children:[d("th",{style:{width:g+1+"ch",fontSize:"0.85rem"}}),d("th",{})]})}),d("tbody",{children:F})]})}const Ci=lt,bi=nt,Ti=et;function Si(l){return d(E.Suspense,{fallback:d(Me,{}),children:d(_i,{...l})})}function _i({pr:l,repo:n,commit:e,compareData:a}){var y,c;const t=$.useFragment(Ci,l),i=$.useFragment(bi,n),r=$.useFragment(Ti,e),s=pe((y=r.parents.edges)==null?void 0:y.map(p=>p==null?void 0:p.node)),[m,k,h]=Je();return K(le,{className:"file-header",mb:"md",withBorder:!0,children:[d(le.Section,{inheritPadding:!0,onMouseDown:p=>{p.detail>1&&p.preventDefault()},style:{top:-16},withBorder:!0,py:6,children:K(B,{align:"center",justify:"start",children:[d(Ya,{path:a.filename}),K(Q,{style:{whiteSpace:"pre"},children:[" ",K(Q,{span:!0,c:"green.8",children:["+",a.additions]})," ",K(Q,{span:!0,c:"red.8",children:["-",a.deletions]})]}),K(B,{align:"center",style:{marginLeft:"auto"},gap:"sm",children:[d(Qa,{commitOid:r.oid,defaultBranchName:(c=i.defaultBranchRef)==null?void 0:c.name,filename:a.filename,name:i.name,owner:i.owner.login,parentCommitOid:s==null?void 0:s.oid}),k]})]})}),!m&&d(le.Section,{style:{padding:0},children:a.patch==null?d(Q,{pl:"sm",children:"No diff for this file"}):d(B,{gap:0,children:d(Ri,{filename:a.filename,name:i.name,owner:i.owner.login,patch:a.patch,pr:t})})})]},a.filename)}const Ki=Xl,Li=Jl,Pi=Yl;function Gn({owner:l,name:n,commit:e,pr:a,repo:t,baseRef:i}){var R,T,u;const r=$.useFragment(Ki,e),s=$.useFragment(Li,t),m=$.useFragment(Pi,a),k=ne(Fn),h=Z(((T=(R=r==null?void 0:r.parents)==null?void 0:R.edges)==null?void 0:T.map(o=>o==null?void 0:o.node))??[]),y=pe(h),c=hl(l,n,i,r.oid,!k||y!=null),p=E.useRef(null),[w,v]=Je();return k&&(h==null?void 0:h.length)>1?d(un,{className:"commit-header",ref:p,variant:"info",children:r.message}):K(Ae,{children:[k?d(un,{className:"commit-header",ref:p,variant:"info",children:K(B,{children:[K("div",{children:["Commit: ",r.messageHeadline," -"," ",K("span",{className:ve.colorSuccess,children:["+",r.additions]})," ",K("span",{className:ve.colorDanger,children:["-",r.deletions]})]}),v]})}):null,!w&&((u=c==null?void 0:c.files)==null?void 0:u.map(o=>d(Si,{commit:r,compareData:o,pr:m,repo:s},o.filename)))]})}const Ei=Zl,xi=Ql,qi=Wl;function Ai({owner:l,name:n,pr:e,repo:a}){var R,T,u;const t=$.useFragment(Ei,e),i=$.useFragment(qi,a),r=ne(Fa),s=ne(Al),m=ne(Fn),k=hl(l,n,r==null?void 0:r.oid,s==null?void 0:s.headOid),h=$.useLazyLoadQuery(xi,{ids:(k==null?void 0:k.commits.map(o=>o.node_id))??(s==null?void 0:s.nodeIds)??[]},{fetchPolicy:s==null&&r==null?"store-only":"store-or-network",fetchKey:`${s==null?void 0:s.headOid}...${r==null?void 0:r.oid}`})??null,y=Z((R=t.commits.edges)==null?void 0:R.map(o=>{var f;return(f=o==null?void 0:o.node)==null?void 0:f.commit})),c=s==null?y:h.nodes??[],p=(((T=t.commits)==null?void 0:T.totalCount)??0)-c.length,w=gl(c);if(w==null)return null;if(!m)return d(Gn,{baseRef:(r==null?void 0:r.oid)??(s==null?void 0:s.baseRef)??((u=t.baseRef)==null?void 0:u.name),commit:w,name:n,owner:l,pr:t,repo:i});const v=c.map(o=>{var F,g;if(o==null||i==null)return null;const f=pe((g=(F=o.parents)==null?void 0:F.edges)==null?void 0:g.map(b=>b==null?void 0:b.node));return d(Gn,{baseRef:(r==null?void 0:r.oid)??(f==null?void 0:f.oid),commit:o,name:n,owner:l,pr:t,repo:i},o.id)});return K(Ae,{children:[p>0&&d(un,{variant:"warning",children:K("span",{children:[p," more commits and pagination is not implemented!"]})}),v]})}function Ii(l){return d(kn,{children:d(Ai,{...l})})}var sn,Wn;function Mi(){if(Wn)return sn;Wn=1;function l(n,e,a){var t,i,r,s,m;e==null&&(e=100);function k(){var y=Date.now()-s;y<e&&y>=0?t=setTimeout(k,e-y):(t=null,a||(m=n.apply(r,i),r=i=null))}var h=function(){r=this,i=arguments,s=Date.now();var y=a&&!t;return t||(t=setTimeout(k,e)),y&&(m=n.apply(r,i),r=i=null),m};return h.clear=function(){t&&(clearTimeout(t),t=null)},h.flush=function(){t&&(m=n.apply(r,i),r=i=null,clearTimeout(t),t=null)},h}return l.debounce=l,sn=l,sn}var Di=Mi();const Ni=fl(Di);let oe;typeof window<"u"?oe=window:typeof self<"u"?oe=self:oe=global;let pn=null,yn=null;const Qn=20,rn=oe.clearTimeout,Zn=oe.setTimeout,on=oe.cancelAnimationFrame||oe.mozCancelAnimationFrame||oe.webkitCancelAnimationFrame,Yn=oe.requestAnimationFrame||oe.mozRequestAnimationFrame||oe.webkitRequestAnimationFrame;on==null||Yn==null?(pn=rn,yn=function(n){return Zn(n,Qn)}):(pn=function([n,e]){on(n),rn(e)},yn=function(n){const e=Yn(function(){rn(a),n()}),a=Zn(function(){on(e),n()},Qn);return[e,a]});function $i(l){let n,e,a,t,i,r,s;const m=typeof document<"u"&&document.attachEvent;if(!m){r=function(T){const u=T.__resizeTriggers__,o=u.firstElementChild,f=u.lastElementChild,F=o.firstElementChild;f.scrollLeft=f.scrollWidth,f.scrollTop=f.scrollHeight,F.style.width=o.offsetWidth+1+"px",F.style.height=o.offsetHeight+1+"px",o.scrollLeft=o.scrollWidth,o.scrollTop=o.scrollHeight},i=function(T){return T.offsetWidth!==T.__resizeLast__.width||T.offsetHeight!==T.__resizeLast__.height},s=function(T){if(T.target.className&&typeof T.target.className.indexOf=="function"&&T.target.className.indexOf("contract-trigger")<0&&T.target.className.indexOf("expand-trigger")<0)return;const u=this;r(this),this.__resizeRAF__&&pn(this.__resizeRAF__),this.__resizeRAF__=yn(function(){i(u)&&(u.__resizeLast__.width=u.offsetWidth,u.__resizeLast__.height=u.offsetHeight,u.__resizeListeners__.forEach(function(F){F.call(u,T)}))})};let c=!1,p="";a="animationstart";const w="Webkit Moz O ms".split(" ");let v="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),R="";{const T=document.createElement("fakeelement");if(T.style.animationName!==void 0&&(c=!0),c===!1){for(let u=0;u<w.length;u++)if(T.style[w[u]+"AnimationName"]!==void 0){R=w[u],p="-"+R.toLowerCase()+"-",a=v[u],c=!0;break}}}e="resizeanim",n="@"+p+"keyframes "+e+" { from { opacity: 0; } to { opacity: 0; } } ",t=p+"animation: 1ms "+e+"; "}const k=function(c){if(!c.getElementById("detectElementResize")){const p=(n||"")+".resize-triggers { "+(t||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',w=c.head||c.getElementsByTagName("head")[0],v=c.createElement("style");v.id="detectElementResize",v.type="text/css",l!=null&&v.setAttribute("nonce",l),v.styleSheet?v.styleSheet.cssText=p:v.appendChild(c.createTextNode(p)),w.appendChild(v)}};return{addResizeListener:function(c,p){if(m)c.attachEvent("onresize",p);else{if(!c.__resizeTriggers__){const w=c.ownerDocument,v=oe.getComputedStyle(c);v&&v.position==="static"&&(c.style.position="relative"),k(w),c.__resizeLast__={},c.__resizeListeners__=[],(c.__resizeTriggers__=w.createElement("div")).className="resize-triggers";const R=w.createElement("div");R.className="expand-trigger",R.appendChild(w.createElement("div"));const T=w.createElement("div");T.className="contract-trigger",c.__resizeTriggers__.appendChild(R),c.__resizeTriggers__.appendChild(T),c.appendChild(c.__resizeTriggers__),r(c),c.addEventListener("scroll",s,!0),a&&(c.__resizeTriggers__.__animationListener__=function(o){o.animationName===e&&r(c)},c.__resizeTriggers__.addEventListener(a,c.__resizeTriggers__.__animationListener__))}c.__resizeListeners__.push(p)}},removeResizeListener:function(c,p){if(m)c.detachEvent("onresize",p);else if(c.__resizeListeners__.splice(c.__resizeListeners__.indexOf(p),1),!c.__resizeListeners__.length){c.removeEventListener("scroll",s,!0),c.__resizeTriggers__.__animationListener__&&(c.__resizeTriggers__.removeEventListener(a,c.__resizeTriggers__.__animationListener__),c.__resizeTriggers__.__animationListener__=null);try{c.__resizeTriggers__=!c.removeChild(c.__resizeTriggers__)}catch{}}}}}class zi extends E.Component{constructor(...n){super(...n),this.state={height:this.props.defaultHeight||0,width:this.props.defaultWidth||0},this._autoSizer=null,this._detectElementResize=null,this._didLogDeprecationWarning=!1,this._parentNode=null,this._resizeObserver=null,this._timeoutId=null,this._onResize=()=>{this._timeoutId=null;const{disableHeight:e,disableWidth:a,onResize:t}=this.props;if(this._parentNode){const i=window.getComputedStyle(this._parentNode)||{},r=parseFloat(i.paddingLeft||"0"),s=parseFloat(i.paddingRight||"0"),m=parseFloat(i.paddingTop||"0"),k=parseFloat(i.paddingBottom||"0"),h=this._parentNode.getBoundingClientRect(),y=h.height-m-k,c=h.width-r-s;if(!e&&this.state.height!==y||!a&&this.state.width!==c){this.setState({height:y,width:c});const p=()=>{this._didLogDeprecationWarning||(this._didLogDeprecationWarning=!0,console.warn("scaledWidth and scaledHeight parameters have been deprecated; use width and height instead"))};typeof t=="function"&&t({height:y,width:c,get scaledHeight(){return p(),y},get scaledWidth(){return p(),c}})}}},this._setRef=e=>{this._autoSizer=e}}componentDidMount(){const{nonce:n}=this.props,e=this._autoSizer?this._autoSizer.parentNode:null;if(e!=null&&e.ownerDocument&&e.ownerDocument.defaultView&&e instanceof e.ownerDocument.defaultView.HTMLElement){this._parentNode=e;const a=e.ownerDocument.defaultView.ResizeObserver;a!=null?(this._resizeObserver=new a(()=>{this._timeoutId=setTimeout(this._onResize,0)}),this._resizeObserver.observe(e)):(this._detectElementResize=$i(n),this._detectElementResize.addResizeListener(e,this._onResize)),this._onResize()}}componentWillUnmount(){this._parentNode&&(this._detectElementResize&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize),this._timeoutId!==null&&clearTimeout(this._timeoutId),this._resizeObserver&&this._resizeObserver.disconnect())}render(){const{children:n,defaultHeight:e,defaultWidth:a,disableHeight:t=!1,disableWidth:i=!1,doNotBailOutOnEmptyChildren:r=!1,nonce:s,onResize:m,style:k={},tagName:h="div",...y}=this.props,{height:c,width:p}=this.state,w={overflow:"visible"},v={};let R=!1;return t||(c===0&&(R=!0),w.height=0,v.height=c,v.scaledHeight=c),i||(p===0&&(R=!0),w.width=0,v.width=p,v.scaledWidth=p),r&&(R=!1),E.createElement(h,{ref:this._setRef,style:{...w,...k},...y},!R&&n(v))}}const Ui=[["commit-header","--bs-info",25],["comment-container","--bs-warning",20],["file-header","--bs-dark-bg-subtle",15]];function Oi({height:l,width:n}){const e=E.useRef(null),a=ne(Al);return E.useLayoutEffect(()=>{const t=e.current,i=t==null?void 0:t.getContext("2d");if(i==null)return;const r=document.getElementById("commits-container");if(r==null)return;const s=document.getElementById("scroller");if(s==null)return;const m=document.getElementById("scrollbar-container");if(m==null)return;const k=()=>{s.style.top=String(r.clientHeight*r.scrollTop/r.scrollHeight),s.style.height=String(r.clientHeight*r.clientHeight/r.scrollHeight)},h=R=>{R.preventDefault&&R.preventDefault(),R.buttons===1&&(r.scrollTop=R.clientY*r.scrollHeight/r.clientHeight-r.clientHeight/2)},y=R=>{document.removeEventListener("mousemove",h)},c=R=>{R.buttons===1&&(document.addEventListener("mousemove",h),document.addEventListener("mouseup",y),r.scrollTop=R.clientY*r.scrollHeight/r.clientHeight-r.clientHeight/2)},p=()=>{i.clearRect(0,0,n,l);for(const[R,T,u]of Ui)for(const o of Array.from(document.getElementsByClassName(R))){const f=o.getBoundingClientRect().top,F=l*f/r.scrollHeight;i.beginPath(),i.moveTo(25-u,F),i.lineTo(25,F),i.strokeStyle=getComputedStyle(r).getPropertyValue(T),i.stroke()}},w=Ni(p,500);p(),k(),r.addEventListener("scroll",k);const v=new ResizeObserver(w);return v.observe(r),m.addEventListener("mousedown",c),()=>{r.removeEventListener("scroll",k),v.disconnect(),m.removeEventListener("mousedown",c),document.removeEventListener("mouseup",y),document.removeEventListener("mousemove",h)}},[l,a,n]),d("canvas",{height:l,ref:e,width:n})}function Hi(){return K("div",{id:"scrollbar-container",style:{flex:1},children:[d(zi,{children:({height:l,width:n})=>isNaN(l)||isNaN(n)?null:d(Oi,{height:l,width:n})}),d("div",{id:"scroller",style:{width:10,backgroundColor:"var(--bs-secondary-bg)",position:"relative",left:15,borderRadius:3}})]})}const ut=function(){var l={defaultValue:null,kind:"LocalArgument",name:"id"},n={defaultValue:null,kind:"LocalArgument",name:"includeTeam"},e=[{kind:"Variable",name:"id",variableName:"id"}],a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},s=[{kind:"Literal",name:"first",value:30}],m={alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},k={kind:"InlineFragment",selections:[t],type:"Node",abstractKey:"__isNode"},h={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[a,m,k],storageKey:null},y={alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},p=[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},y];return{fragment:{argumentDefinitions:[l,n],kind:"Fragment",metadata:null,name:"SummaryPanelFragment2",selections:[{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"SummaryPanelFragment"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[n,l],kind:"Operation",name:"SummaryPanelFragment2",selections:[{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[a,t,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"mergeable",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},i,r,{alias:null,args:null,kind:"ScalarField",name:"viewerCanMergeAsAdmin",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"number",storageKey:null},{alias:null,args:s,concreteType:"IssueCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"IssueCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"IssueComment",kind:"LinkedField",name:"node",plural:!1,selections:[i,t],storageKey:null}],storageKey:null}],storageKey:"comments(first:30)"},{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"baseRef",plural:!1,selections:[{alias:null,args:null,concreteType:"BranchProtectionRule",kind:"LinkedField",name:"branchProtectionRule",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"requiresCodeOwnerReviews",storageKey:null},t],storageKey:null},t],storageKey:null},h,{alias:null,args:s,concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[y,r,h,t],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"},{alias:null,args:s,concreteType:"ReviewRequestConnection",kind:"LinkedField",name:"reviewRequests",plural:!1,selections:[{alias:null,args:null,concreteType:"ReviewRequestEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"ReviewRequest",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"asCodeOwner",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"requestedReviewer",plural:!1,selections:[a,{kind:"InlineFragment",selections:[m],type:"User",abstractKey:null},{condition:"includeTeam",kind:"Condition",passingValue:!0,selections:[{kind:"InlineFragment",selections:[c],type:"Team",abstractKey:null}]},k],storageKey:null},t],storageKey:null}],storageKey:null}],storageKey:"reviewRequests(first:30)"},{alias:"lastCommit",args:[{kind:"Literal",name:"last",value:1}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,concreteType:"StatusCheckRollup",kind:"LinkedField",name:"statusCheckRollup",plural:!1,selections:[y,{alias:null,args:[{kind:"Literal",name:"first",value:50}],concreteType:"StatusCheckRollupContextConnection",kind:"LinkedField",name:"contexts",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null},{alias:null,args:null,concreteType:"CheckRunStateCount",kind:"LinkedField",name:"checkRunCountsByState",plural:!0,selections:p,storageKey:null},{alias:null,args:null,concreteType:"StatusContextStateCount",kind:"LinkedField",name:"statusContextCountsByState",plural:!0,selections:p,storageKey:null},{alias:null,args:null,concreteType:"StatusCheckRollupContextEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[a,{kind:"InlineFragment",selections:[t,{alias:null,args:null,kind:"ScalarField",name:"detailsUrl",storageKey:null},c,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"conclusion",storageKey:null}],type:"CheckRun",abstractKey:null},{kind:"InlineFragment",selections:[t,y,{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"context",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"avatarUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"targetUrl",storageKey:null}],type:"StatusContext",abstractKey:null},k],storageKey:null}],storageKey:null}],storageKey:"contexts(first:50)"},t],storageKey:null},t],storageKey:null},t],storageKey:null}],storageKey:null}],storageKey:"commits(last:1)"}],type:"PullRequest",abstractKey:null}],storageKey:null}]},params:{cacheID:"277602225a581fda6dcd8422a6df6cbc",id:null,metadata:{},name:"SummaryPanelFragment2",operationKind:"query",text:`query SummaryPanelFragment2(
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
  viewerCanMergeAsAdmin
  ...PRTitleFragment
  baseRef {
    branchProtectionRule {
      requiresCodeOwnerReviews
      id
    }
    id
  }
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
`}}}();ut.hash="e5528ba0f7e19594c5a64a7f6a28cb19";const dt=function(){var l={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},n=[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],e={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:n,storageKey:null},a=[{kind:"Literal",name:"first",value:30}],t={alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},r=[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},t],s={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{kind:"RootArgument",name:"includeTeam"}],kind:"Fragment",metadata:{refetch:{connection:null,fragmentPathInResult:["node"],operation:ut,identifierInfo:{identifierField:"id",identifierQueryVariableName:"id"}}},name:"SummaryPanelFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"mergeable",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},l,{alias:null,args:null,kind:"ScalarField",name:"viewerCanMergeAsAdmin",storageKey:null},{args:null,kind:"FragmentSpread",name:"PRTitleFragment"},{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"baseRef",plural:!1,selections:[{alias:null,args:null,concreteType:"BranchProtectionRule",kind:"LinkedField",name:"branchProtectionRule",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"requiresCodeOwnerReviews",storageKey:null}],storageKey:null}],storageKey:null},e,{alias:null,args:a,concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[t,l,e],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"},{alias:null,args:a,concreteType:"ReviewRequestConnection",kind:"LinkedField",name:"reviewRequests",plural:!1,selections:[{alias:null,args:null,concreteType:"ReviewRequestEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"ReviewRequest",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"asCodeOwner",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"requestedReviewer",plural:!1,selections:[{kind:"InlineFragment",selections:n,type:"User",abstractKey:null},{condition:"includeTeam",kind:"Condition",passingValue:!0,selections:[{kind:"InlineFragment",selections:[i],type:"Team",abstractKey:null}]}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"reviewRequests(first:30)"},{alias:"lastCommit",args:[{kind:"Literal",name:"last",value:1}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,concreteType:"StatusCheckRollup",kind:"LinkedField",name:"statusCheckRollup",plural:!1,selections:[t,{alias:null,args:[{kind:"Literal",name:"first",value:50}],concreteType:"StatusCheckRollupContextConnection",kind:"LinkedField",name:"contexts",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null},{alias:null,args:null,concreteType:"CheckRunStateCount",kind:"LinkedField",name:"checkRunCountsByState",plural:!0,selections:r,storageKey:null},{alias:null,args:null,concreteType:"StatusContextStateCount",kind:"LinkedField",name:"statusContextCountsByState",plural:!0,selections:r,storageKey:null},{alias:null,args:null,concreteType:"StatusCheckRollupContextEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[s,m,{alias:null,args:null,kind:"ScalarField",name:"detailsUrl",storageKey:null},i,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"conclusion",storageKey:null}],type:"CheckRun",abstractKey:null},{kind:"InlineFragment",selections:[s,m,t,{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"context",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"avatarUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"targetUrl",storageKey:null}],type:"StatusContext",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:"contexts(first:50)"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"commits(last:1)"},m],type:"PullRequest",abstractKey:null}}();dt.hash="e5528ba0f7e19594c5a64a7f6a28cb19";const ct=function(){var l={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PRTitleFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},l,{alias:null,args:null,kind:"ScalarField",name:"number",storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:30}],concreteType:"IssueCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"IssueCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"IssueComment",kind:"LinkedField",name:"node",plural:!1,selections:[l],storageKey:null}],storageKey:null}],storageKey:"comments(first:30)"}],type:"PullRequest",abstractKey:null}}();ct.hash="727f30fbdea94ebff7ead1b5ebaae194";const mt=/Stack from \[ghstack\].+\(oldest at bottom\):\n(?:\*[^\n]+\n?)+/gm,gt=/#[0-9]{1,}/g;function Bi(l){var e;const n=l.match(mt);return((e=n==null?void 0:n.flatMap(a=>a.match(gt)??[]))==null?void 0:e.map(a=>parseInt(a.slice(1))))??[]}function Vi(l){const n=l.match(mt);return n&&n.length>0?l.replace(n[0],""):l}const ji=/(?:\*[\n]+\n)+This stack of pull requests is manged by \[Graphite\]/gm;function Gi(l){var e;const n=l.match(ji);return((e=n==null?void 0:n.flatMap(a=>a.match(gt)??[]))==null?void 0:e.map(a=>parseInt(a.slice(1))))??[]}const Wi=ct;function Qi(l,n,e){const a=Nt();return $t({queries:e.map(i=>({queryFn:()=>a(`repos/${l}/${n}/pulls/${i}`),queryKey:["GetPR",l,n,i],staleTime:1/0}))})}function Zi({pr:l}){var v,R,T,u;const n=$.useFragment(Wi,l),e=Bi(n.body)??((u=Ge((T=(R=(v=n.comments.edges)==null?void 0:v.map(o=>{var f;return(f=o==null?void 0:o.node)==null?void 0:f.body}))==null?void 0:R.map(o=>o==null?null:Gi(o)))==null?void 0:T.filter(o=>o!=null)))==null?void 0:u.reverse())??[],t=vl()["*"],[i,r]=(t==null?void 0:t.split("/"))??[],m=Qi(i,r,e).map(o=>o.data).filter(o=>o!=null),k=e==null?void 0:e.findIndex(o=>o===n.number),h=e.length===0?null:`[${k+1}/${e.length}]`,y=Mt(),[c,p]=E.useState(!1),w=K(kl,{size:"md",lineClamp:1,children:[h,n.title]});return e.length===0?w:K(re,{opened:c,onDismiss:()=>p(!1),onChange:p,children:[d(re.Target,{children:K(se,{variant:"subtle",p:0,color:"default",onClick:()=>p(o=>!o),children:[h&&d(Dt,{}),w]})}),d(re.Dropdown,{children:d(je,{h:500,children:d(ge,{align:"flex-start",children:m.map((o,f)=>K(se,{onClick:()=>{p(F=>!F),y(`/review/${i}/${r}/${o.number}`)},variant:"subtle",children:["[",f+1,"/",e.length,"]",o.title]},o.number))})})})]})}const Yi=dt;function Ji(l){return d(E.Suspense,{fallback:d(Me,{}),children:d(Xi,{...l})})}function Jn(l){switch(l){case"CHANGES_REQUESTED":return 50;case"APPROVED":return 40;case"COMMENTED":return 30;default:return 10}}function Xi({pr:l}){var R,T,u,o,f,F,g,b,_,C,P,I,A,O,D,G,W,J,z,S,q,V,N,X,j;const[n,e]=$.useRefetchableFragment(Yi,l),a=Vi(n.body).trim(),t=(T=pe(Z((R=n.lastCommit.edges)==null?void 0:R.map(L=>L==null?void 0:L.node))))==null?void 0:T.commit,i=Z((f=(o=(u=t==null?void 0:t.statusCheckRollup)==null?void 0:u.contexts)==null?void 0:o.edges)==null?void 0:f.map(L=>L==null?void 0:L.node)),r=ne(vn),s=(((_=pe((b=(g=(F=t==null?void 0:t.statusCheckRollup)==null?void 0:F.contexts)==null?void 0:g.checkRunCountsByState)==null?void 0:b.filter(L=>L.state==="SUCCESS")))==null?void 0:_.count)??0)+(((I=pe((P=(C=t==null?void 0:t.statusCheckRollup)==null?void 0:C.contexts.statusContextCountsByState)==null?void 0:P.filter(L=>L.state==="SUCCESS")))==null?void 0:I.count)??0),m=((O=(A=t==null?void 0:t.statusCheckRollup)==null?void 0:A.contexts)==null?void 0:O.totalCount)===s,[k,h]=Je(m),y=new Map,c=new Map;(G=(D=n.reviewRequests)==null?void 0:D.edges)==null||G.reduce((L,x)=>{var ee,de,ce,Te,me,Pe,qn,An,In,Mn;const U=(de=(ee=x==null?void 0:x.node)==null?void 0:ee.requestedReviewer)==null?void 0:de.login;U!=null&&L.set(U,{participated:!1,required:((ce=L.get(U))==null?void 0:ce.required)||((((Te=x==null?void 0:x.node)==null?void 0:Te.asCodeOwner)&&!n.viewerCanMergeAsAdmin&&((Pe=(me=n.baseRef)==null?void 0:me.branchProtectionRule)==null?void 0:Pe.requiresCodeOwnerReviews))??!1)});const H=(An=(qn=x==null?void 0:x.node)==null?void 0:qn.requestedReviewer)==null?void 0:An.name;return H!=null&&L.set(H,{participated:!1,required:((In=L.get(H))==null?void 0:In.required)||(((Mn=x==null?void 0:x.node)==null?void 0:Mn.asCodeOwner)??!1),isTeam:!0}),L},y),(J=(W=n.reviews)==null?void 0:W.edges)==null||J.reduce((L,x)=>{var ee,de,ce,Te,me,Pe;const U=(de=(ee=x==null?void 0:x.node)==null?void 0:ee.author)==null?void 0:de.login;if(U==null)return L;const H=L.get(U);return L.set(U,{participated:!0,required:(H==null?void 0:H.required)??!1}),(H==null||H.date==null||H.date<te((ce=x==null?void 0:x.node)==null?void 0:ce.createdAt)&&((Te=x==null?void 0:x.node)==null?void 0:Te.state)!=="COMMENTED")&&L.set(U,{participated:!0,required:(H==null?void 0:H.required)??!1,state:((me=x==null?void 0:x.node)==null?void 0:me.state)??(H==null?void 0:H.state),date:te((Pe=x==null?void 0:x.node)==null?void 0:Pe.createdAt)}),L},y);for(const[L,x]of c.entries()){const U=y.get(x);U!=null&&y.set(L,U)}const p=Array.from(y.entries());p.filter(([L,x])=>L!=r).sort(([L,{state:x}],[U,{state:H}])=>Jn(x)-Jn(H));const w=d(ge,{style:{maxHeight:200,overflow:"scroll",marginTop:16},children:Z(i).sort((L,x)=>-1).map(L=>{if(L.__typename!=="CheckRun"&&L.__typename!=="StatusContext")return null;const x=L.__typename==="CheckRun"?`${L.name}`:L.__typename==="StatusContext"?`${L.context}: ${L.description}`:"",U=L.__typename==="CheckRun"&&L.conclusion==="SUCCESS"||L.__typename==="StatusContext"&&L.state==="SUCCESS",H=L.__typename==="CheckRun"&&L.status==="IN_PROGRESS"||L.__typename==="StatusContext"&&L.state==="PENDING",ee=L.__typename==="StatusContext"?L.avatarUrl:null,de=L.__typename==="StatusContext"?L.targetUrl:L.__typename==="CheckRun"?L.detailsUrl:null;return d(ge,{children:K(B,{align:"center",children:[U?d(cl,{color:"var(--mantine-color-green-8)"}):H?d(ma,{color:"var(--mantine-color-yellow-8)"}):d(ya,{color:"var(--mantine-color-red-8)"}),ee!=null&&d("img",{src:ee,style:{width:16,marginRight:4,objectFit:"contain"}}),x,d("div",{className:"float-right",children:d("a",{href:de,rel:"noreferrer",target:"_blank",children:"Details"})})]})},L.id)})}),v=K(le.Section,{withBorder:!0,inheritPadding:!0,p:"xs",children:[K(B,{justify:"space-between",children:[K(B,{children:[d(qe,{radius:"sm",color:n.mergeable==="MERGEABLE"?"green.8":n.mergeable==="CONFLICTING"?"red":"gray",style:{marginRight:8},children:n.mergeable==="MERGEABLE"?"Mergeable":n.mergeable==="CONFLICTING"?"Merge Conflicts":"Unknown merge state"}),(((S=(z=t==null?void 0:t.statusCheckRollup)==null?void 0:z.contexts)==null?void 0:S.totalCount)??0)>0&&K(qe,{radius:"sm",color:((q=t==null?void 0:t.statusCheckRollup)==null?void 0:q.state)==="SUCCESS"?"green.8":((V=t==null?void 0:t.statusCheckRollup)==null?void 0:V.state)==="FAILURE"?"red":"yellow.7",style:{marginRight:8},children:["CI (",s,"/",(X=(N=t==null?void 0:t.statusCheckRollup)==null?void 0:N.contexts)==null?void 0:X.totalCount,")"]})]}),m&&h]}),!k&&w]});return K(le,{mb:"md",withBorder:!0,px:"md",children:[K(le.Section,{inheritPadding:!0,p:"xs",withBorder:!0,children:[K(B,{justify:"space-between",align:"center",wrap:"nowrap",children:[d(Zi,{pr:n}),d(B,{justify:"flex-end",align:"center",children:d(yl,{component:"a",variant:"default",href:n.url,target:"_blank",children:d(zt,{stroke:1})})})]}),K(Q,{size:"sm",lineClamp:1,span:!0,children:[d(xe,{from:te(n.createdAt),prefix:"Created "})," ","by ",d(he,{login:(j=n.author)==null?void 0:j.login,size:"sm"})]})]}),d(le.Section,{withBorder:!0,inheritPadding:!0,py:"xs",children:d(cn,{children:a==null||pl(a)?"*No description provided*":a})}),d(le.Section,{withBorder:!0,inheritPadding:!0,p:"xs",children:K(B,{children:[d(kl,{size:"sm",children:"Reviewers"}),d(B,{children:Array.from(p).map(([L,{participated:x,required:U,state:H}])=>d(he,{size:"sm",login:L,reviewState:H??(x?"COMMENTED":"requested"),required:U},L))})]})}),v]})}const es=Pl;function ns(){return d(E.Suspense,{fallback:d(Me,{text:"Loading PR"}),children:d(ts,{})})}var ls={name:"1wjgngc",styles:"height:100vh;overflow-y:hidden;flex-wrap:nowrap"};function ts(){var R,T,u;const n=vl()["*"],[e,a,t,i,r]=(n==null?void 0:n.split("/"))??[],s=Ye(vn),m=ne(ml),k=Ut(),h=$.useLazyLoadQuery(es,{owner:e,name:a,id:parseInt(t),includeTeam:k.has(Ot.READ_ORG)},{fetchPolicy:"store-and-network",networkCacheConfig:{poll:1e3*60*5}});s(h.viewer.login);const y=(R=h.repository)==null?void 0:R.pullRequest,c=E.useRef(null),p=E.useRef(null),w=h.repository,v=(u=(T=h.repository)==null?void 0:T.defaultBranchRef)==null?void 0:u.name;return w==null||n==null||y==null||v==null?null:K(B,{css:ls,gap:0,p:"sm",children:[K("div",{id:"commits-container",ref:p,style:{flexBasis:"60vw",overflowY:"auto",height:"100%"},children:[d(Ji,{pr:y}),d("div",{ref:c}),d(Ii,{defaultBranchName:v,name:a,owner:e,pr:y,repo:w})]}),d(ge,{style:{width:25},gap:0,children:d(Hi,{})}),m==="timeline"&&d(Wa,{pr:y})]})}function is(){return d(ns,{})}export{is as Component};
