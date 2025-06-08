const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./MarkdownRenderer-TJoW_UbC.js","./index-B_E0A_xn.js","./index-BCQ-irV0.css","./MarkdownRenderer-BS2aUxlg.css","./MarkdownTextarea-CcgKEQgb.js","./MarkdownTextarea-Cby7Tvsi.css"])))=>i.map(i=>d[i]);
var bt=Object.defineProperty;var St=(l,e,n)=>e in l?bt(l,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[e]=n;var xe=(l,e,n)=>St(l,typeof e!="symbol"?e+"":e,n);import{f as Tt,r as b,j as I,a as je,u as ne,b as ke,c as an,d as Sn,B as Ke,g as Kt,e as Xe,h as ol,P as re,i as ee,k as sn,l as Pt,p as ul,m as dl,n as cl,o as ml,U as gl,q as pl,s as yl,t as Lt,v as _t,w as fl,x as xt,y as qt,z as Et,S as ln,A as Jn,C as ve,D as Mt,E as It,F as At,G as Dt,H as Re,M as hl,I as He,J as $,K as me,L as Tn,N as J,_ as kl,O as o,Q as Kn,R,T as U,V as he,W as H,X as Oe,Y as Te,Z as ae,$ as ce,a0 as Nt,a1 as X,a2 as G,a3 as pe,a4 as Ge,a5 as $t,a6 as rn,a7 as Y,a8 as tn,a9 as Pn,aa as Ut,ab as Ee,ac as jt,ad as Ot,ae as vl,af as Ln,ag as Bt,ah as Vt,ai as _n,aj as Rl,ak as zt,al as Fl,am as Ht,an as Pe,ao as wl,ap as qe,aq as Cl,ar as Gt,as as Qt,at as on,au as Wt,av as mn,aw as bl,ax as kn,ay as Sl,az as Jt,aA as Tl,aB as Xt,aC as Yt,aD as Zt,aE as ea,aF as na,aG as la,aH as ta,aI as gn}from"./index-B_E0A_xn.js";function aa(l,e,n){var t;return n?Array.from(((t=Tt(n,e))==null?void 0:t.querySelectorAll(l))||[]).findIndex(a=>a===n):null}function sa({timeout:l=2e3}={}){const[e,n]=b.useState(null),[t,a]=b.useState(!1),[s,i]=b.useState(null),r=d=>{window.clearTimeout(s),i(window.setTimeout(()=>a(!1),l)),a(d)};return{copy:d=>{"clipboard"in navigator?navigator.clipboard.writeText(d).then(()=>r(!0)).catch(m=>n(m)):n(new Error("useClipboard: navigator.clipboard is not supported"))},reset:()=>{a(!1),n(null),window.clearTimeout(s)},error:e,copied:t}}function Kl({style:l,size:e=16,...n}){return I.jsx("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...l,width:je(e),height:je(e),display:"block"},...n,children:I.jsx("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}Kl.displayName="@mantine/core/AccordionChevron";const ia={timeout:1e3};function Pl(l){const{children:e,timeout:n,value:t,...a}=ne("CopyButton",ia,l),s=sa({timeout:n}),i=()=>s.copy(t);return I.jsx(I.Fragment,{children:e({copy:i,copied:s.copied,...a})})}Pl.displayName="@mantine/core/CopyButton";var Ll={root:"m_3eebeb36",label:"m_9e365f20"};const ra={orientation:"horizontal"},oa=Sn((l,{color:e,variant:n,size:t})=>({root:{"--divider-color":e?Xe(e,l):void 0,"--divider-border-style":n,"--divider-size":Kt(t,"divider-size")}})),xn=ke((l,e)=>{const n=ne("Divider",ra,l),{classNames:t,className:a,style:s,styles:i,unstyled:r,vars:u,color:g,orientation:d,label:m,labelPosition:p,mod:c,...y}=n,f=an({name:"Divider",classes:Ll,props:n,className:a,style:s,classNames:t,styles:i,unstyled:r,vars:u,varsResolver:oa});return I.jsx(Ke,{ref:e,mod:[{orientation:d,"with-label":!!m},c],...f("root"),...y,role:"separator",children:m&&I.jsx(Ke,{component:"span",mod:{position:p},...f("label"),children:m})})});xn.classes=Ll;xn.displayName="@mantine/core/Divider";const[ua,Fe]=ol("Menu component was not found in the tree");var we={dropdown:"m_dc9b7c9f",label:"m_9bfac126",divider:"m_efdf90cb",item:"m_99ac2aa1",itemLabel:"m_5476e0d3",itemSection:"m_8b75e504",chevron:"m_b85b0bed"};const da={},qn=ke((l,e)=>{const{classNames:n,className:t,style:a,styles:s,vars:i,...r}=ne("MenuDivider",da,l),u=Fe();return I.jsx(Ke,{ref:e,...u.getStyles("divider",{className:t,style:a,styles:s,classNames:n}),...r})});qn.classes=we;qn.displayName="@mantine/core/MenuDivider";const ca={},En=ke((l,e)=>{const{classNames:n,className:t,style:a,styles:s,vars:i,onMouseEnter:r,onMouseLeave:u,onKeyDown:g,children:d,...m}=ne("MenuDropdown",ca,l),p=b.useRef(null),c=Fe(),y=ee(g,K=>{var P,v;(K.key==="ArrowUp"||K.key==="ArrowDown")&&(K.preventDefault(),(v=(P=p.current)==null?void 0:P.querySelectorAll("[data-menu-item]:not(:disabled)")[0])==null||v.focus())}),f=ee(r,()=>(c.trigger==="hover"||c.trigger==="click-hover")&&c.openDropdown()),k=ee(u,()=>(c.trigger==="hover"||c.trigger==="click-hover")&&c.closeDropdown());return I.jsxs(re.Dropdown,{...m,onMouseEnter:f,onMouseLeave:k,role:"menu","aria-orientation":"vertical",ref:sn(e,p),...c.getStyles("dropdown",{className:t,style:a,styles:s,classNames:n,withStaticClass:!1}),tabIndex:-1,"data-menu-dropdown":!0,onKeyDown:y,children:[c.withInitialFocusPlaceholder&&I.jsx("div",{tabIndex:-1,"data-autofocus":!0,"data-mantine-stop-propagation":!0,style:{outline:0}}),d]})});En.classes=we;En.displayName="@mantine/core/MenuDropdown";const[ma,un]=Pt(),ga={},Mn=ul((l,e)=>{const{classNames:n,className:t,style:a,styles:s,vars:i,color:r,closeMenuOnClick:u,leftSection:g,rightSection:d,children:m,disabled:p,"data-disabled":c,...y}=ne("MenuItem",ga,l),f=Fe(),k=un(),K=dl(),{dir:P}=cl(),v=b.useRef(null),S=y,L=ee(S.onClick,()=>{c||(typeof u=="boolean"?u&&f.closeDropdownImmediately():f.closeOnItemClick&&f.closeDropdownImmediately())}),F=r?K.variantColorResolver({color:r,theme:K,variant:"light"}):void 0,T=r?ml({color:r,theme:K}):null,M=ee(S.onKeyDown,q=>{q.key==="ArrowLeft"&&k&&(k.close(),k.focusParentItem())});return I.jsxs(gl,{onMouseDown:q=>q.preventDefault(),...y,unstyled:f.unstyled,tabIndex:f.menuItemTabIndex,...f.getStyles("item",{className:t,style:a,styles:s,classNames:n}),ref:sn(v,e),role:"menuitem",disabled:p,"data-menu-item":!0,"data-disabled":p||c||void 0,"data-mantine-stop-propagation":!0,onClick:L,onKeyDown:pl({siblingSelector:"[data-menu-item]:not([data-disabled])",parentSelector:"[data-menu-dropdown]",activateOnFocus:!1,loop:f.loop,dir:P,orientation:"vertical",onKeyDown:M}),__vars:{"--menu-item-color":T!=null&&T.isThemeColor&&(T==null?void 0:T.shade)===void 0?`var(--mantine-color-${T.color}-6)`:F==null?void 0:F.color,"--menu-item-hover":F==null?void 0:F.hover},children:[g&&I.jsx("div",{...f.getStyles("itemSection",{styles:s,classNames:n}),"data-position":"left",children:g}),m&&I.jsx("div",{...f.getStyles("itemLabel",{styles:s,classNames:n}),children:m}),d&&I.jsx("div",{...f.getStyles("itemSection",{styles:s,classNames:n}),"data-position":"right",children:d})]})});Mn.classes=we;Mn.displayName="@mantine/core/MenuItem";const pa={},In=ke((l,e)=>{const{classNames:n,className:t,style:a,styles:s,vars:i,...r}=ne("MenuLabel",pa,l),u=Fe();return I.jsx(Ke,{ref:e,...u.getStyles("label",{className:t,style:a,styles:s,classNames:n}),...r})});In.classes=we;In.displayName="@mantine/core/MenuLabel";const ya={},An=ke((l,e)=>{const{classNames:n,className:t,style:a,styles:s,vars:i,onMouseEnter:r,onMouseLeave:u,onKeyDown:g,children:d,...m}=ne("MenuSubDropdown",ya,l),p=b.useRef(null),c=Fe(),y=un(),f=ee(r,y==null?void 0:y.open),k=ee(u,y==null?void 0:y.close);return I.jsx(re.Dropdown,{...m,onMouseEnter:f,onMouseLeave:k,role:"menu","aria-orientation":"vertical",ref:sn(e,p),...c.getStyles("dropdown",{className:t,style:a,styles:s,classNames:n,withStaticClass:!1}),tabIndex:-1,"data-menu-dropdown":!0,children:d})});An.classes=we;An.displayName="@mantine/core/MenuSubDropdown";const fa={},Dn=ul((l,e)=>{const{classNames:n,className:t,style:a,styles:s,vars:i,color:r,leftSection:u,rightSection:g,children:d,disabled:m,"data-disabled":p,closeMenuOnClick:c,...y}=ne("MenuSubItem",fa,l),f=Fe(),k=un(),K=dl(),{dir:P}=cl(),v=b.useRef(null),S=y,L=r?K.variantColorResolver({color:r,theme:K,variant:"light"}):void 0,F=r?ml({color:r,theme:K}):null,T=ee(S.onKeyDown,O=>{O.key==="ArrowRight"&&(k==null||k.open(),k==null||k.focusFirstItem()),O.key==="ArrowLeft"&&(k!=null&&k.parentContext)&&(k.parentContext.close(),k.parentContext.focusParentItem())}),M=ee(S.onClick,()=>{!p&&c&&f.closeDropdownImmediately()}),q=ee(S.onMouseEnter,k==null?void 0:k.open),D=ee(S.onMouseLeave,k==null?void 0:k.close);return I.jsxs(gl,{onMouseDown:O=>O.preventDefault(),...y,unstyled:f.unstyled,tabIndex:f.menuItemTabIndex,...f.getStyles("item",{className:t,style:a,styles:s,classNames:n}),ref:sn(v,e),role:"menuitem",disabled:m,"data-menu-item":!0,"data-sub-menu-item":!0,"data-disabled":m||p||void 0,"data-mantine-stop-propagation":!0,onMouseEnter:q,onMouseLeave:D,onClick:M,onKeyDown:pl({siblingSelector:"[data-menu-item]:not([data-disabled])",parentSelector:"[data-menu-dropdown]",activateOnFocus:!1,loop:f.loop,dir:P,orientation:"vertical",onKeyDown:T}),__vars:{"--menu-item-color":F!=null&&F.isThemeColor&&(F==null?void 0:F.shade)===void 0?`var(--mantine-color-${F.color}-6)`:L==null?void 0:L.color,"--menu-item-hover":L==null?void 0:L.hover},children:[u&&I.jsx("div",{...f.getStyles("itemSection",{styles:s,classNames:n}),"data-position":"left",children:u}),d&&I.jsx("div",{...f.getStyles("itemLabel",{styles:s,classNames:n}),children:d}),I.jsx("div",{...f.getStyles("itemSection",{styles:s,classNames:n}),"data-position":"right",children:g||I.jsx(Kl,{...f.getStyles("chevron"),size:14})})]})});Dn.classes=we;Dn.displayName="@mantine/core/MenuSubItem";function _l({children:l,refProp:e}){if(!yl(l))throw new Error("Menu.Sub.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");return Fe(),I.jsx(re.Target,{refProp:e,popupType:"menu",children:l})}_l.displayName="@mantine/core/MenuSubTarget";const ha={offset:0,position:"right-start",transitionProps:{duration:0}};function Me(l){const{children:e,closeDelay:n,...t}=ne("MenuSub",ha,l),a=Lt(),[s,{open:i,close:r}]=_t(!1),u=un(),{openDropdown:g,closeDropdown:d}=fl({open:i,close:r,closeDelay:n,openDelay:0}),m=()=>window.setTimeout(()=>{var c,y;(y=(c=document.getElementById(`${a}-dropdown`))==null?void 0:c.querySelectorAll("[data-menu-item]:not([data-disabled])")[0])==null||y.focus()},16),p=()=>window.setTimeout(()=>{var c;(c=document.getElementById(`${a}-target`))==null||c.focus()},16);return I.jsx(ma,{value:{opened:s,close:d,open:g,focusFirstItem:m,focusParentItem:p,parentContext:u},children:I.jsx(re,{opened:s,...t,withinPortal:!1,id:a,children:e})})}Me.extend=l=>l;Me.displayName="@mantine/core/MenuSub";Me.Target=_l;Me.Dropdown=An;Me.Item=Dn;const ka={refProp:"ref"},xl=b.forwardRef((l,e)=>{const{children:n,refProp:t,...a}=ne("MenuTarget",ka,l);if(!yl(n))throw new Error("Menu.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");const s=Fe(),i=n.props,r=ee(i.onClick,()=>{s.trigger==="click"?s.toggleDropdown():s.trigger==="click-hover"&&(s.setOpenedViaClick(!0),s.opened||s.openDropdown())}),u=ee(i.onMouseEnter,()=>(s.trigger==="hover"||s.trigger==="click-hover")&&s.openDropdown()),g=ee(i.onMouseLeave,()=>{(s.trigger==="hover"||s.trigger==="click-hover"&&!s.openedViaClick)&&s.closeDropdown()});return I.jsx(re.Target,{refProp:t,popupType:"menu",ref:e,...a,children:b.cloneElement(n,{onClick:r,onMouseEnter:u,onMouseLeave:g,"data-expanded":s.opened?!0:void 0})})});xl.displayName="@mantine/core/MenuTarget";const va={trapFocus:!0,closeOnItemClick:!0,withInitialFocusPlaceholder:!0,clickOutsideEvents:["mousedown","touchstart","keydown"],loop:!0,trigger:"click",openDelay:0,closeDelay:100,menuItemTabIndex:-1};function Q(l){const e=ne("Menu",va,l),{children:n,onOpen:t,onClose:a,opened:s,defaultOpened:i,trapFocus:r,onChange:u,closeOnItemClick:g,loop:d,closeOnEscape:m,trigger:p,openDelay:c,closeDelay:y,classNames:f,styles:k,unstyled:K,variant:P,vars:v,menuItemTabIndex:S,keepMounted:L,withInitialFocusPlaceholder:F,...T}=e,M=an({name:"Menu",classes:we,props:e,classNames:f,styles:k,unstyled:K}),[q,D]=xt({value:s,defaultValue:i,finalValue:!1,onChange:u}),[O,C]=b.useState(!1),_=()=>{D(!1),C(!1),q&&(a==null||a())},E=()=>{D(!0),!q&&(t==null||t())},w=()=>{q?_():E()},{openDropdown:A,closeDropdown:B}=fl({open:E,close:_,closeDelay:y,openDelay:c}),h=W=>aa("[data-menu-item]","[data-menu-dropdown]",W),{resolvedClassNames:j,resolvedStyles:Z}=qt({classNames:f,styles:k,props:e});return I.jsx(ua,{value:{getStyles:M,opened:q,toggleDropdown:w,getItemIndex:h,openedViaClick:O,setOpenedViaClick:C,closeOnItemClick:g,closeDropdown:p==="click"?_:B,openDropdown:p==="click"?E:A,closeDropdownImmediately:_,loop:d,trigger:p,unstyled:K,menuItemTabIndex:S,withInitialFocusPlaceholder:F},children:I.jsx(re,{...T,opened:q,onChange:w,defaultOpened:i,trapFocus:L?!1:r,closeOnEscape:m,__staticSelector:"Menu",classNames:j,styles:Z,unstyled:K,variant:P,keepMounted:L,children:n})})}Q.extend=l=>l;Q.withProps=Et(Q);Q.classes=we;Q.displayName="@mantine/core/Menu";Q.Item=Mn;Q.Label=In;Q.Dropdown=En;Q.Target=xl;Q.Divider=qn;Q.Sub=Me;const[Ra,Fa]=ol("Table component was not found in the tree");var Ve={table:"m_b23fa0ef",th:"m_4e7aa4f3",tr:"m_4e7aa4fd",td:"m_4e7aa4ef",tbody:"m_b2404537",thead:"m_b242d975",caption:"m_9e5a3ac7",scrollContainer:"m_a100c15",scrollContainerInner:"m_62259741"};function wa(l,e){if(!e)return;const n={};return e.columnBorder&&l.withColumnBorders&&(n["data-with-column-border"]=!0),e.rowBorder&&l.withRowBorders&&(n["data-with-row-border"]=!0),e.striped&&l.striped&&(n["data-striped"]=l.striped),e.highlightOnHover&&l.highlightOnHover&&(n["data-hover"]=!0),e.captionSide&&l.captionSide&&(n["data-side"]=l.captionSide),e.stickyHeader&&l.stickyHeader&&(n["data-sticky"]=!0),n}function Le(l,e){const n=`Table${l.charAt(0).toUpperCase()}${l.slice(1)}`,t=ke((a,s)=>{const i=ne(n,{},a),{classNames:r,className:u,style:g,styles:d,...m}=i,p=Fa();return I.jsx(Ke,{component:l,ref:s,...wa(p,e),...p.getStyles(l,{className:u,classNames:r,style:g,styles:d,props:i}),...m})});return t.displayName=`@mantine/core/${n}`,t.classes=Ve,t}const vn=Le("th",{columnBorder:!0}),ql=Le("td",{columnBorder:!0}),Ye=Le("tr",{rowBorder:!0,striped:!0,highlightOnHover:!0}),El=Le("thead",{stickyHeader:!0}),Ml=Le("tbody"),Il=Le("tfoot"),Al=Le("caption",{captionSide:!0});function Nn({data:l}){return I.jsxs(I.Fragment,{children:[l.caption&&I.jsx(Al,{children:l.caption}),l.head&&I.jsx(El,{children:I.jsx(Ye,{children:l.head.map((e,n)=>I.jsx(vn,{children:e},n))})}),l.body&&I.jsx(Ml,{children:l.body.map((e,n)=>I.jsx(Ye,{children:e.map((t,a)=>I.jsx(ql,{children:t},a))},n))}),l.foot&&I.jsx(Il,{children:I.jsx(Ye,{children:l.foot.map((e,n)=>I.jsx(vn,{children:e},n))})})]})}Nn.displayName="@mantine/core/TableDataRenderer";const Ca={type:"scrollarea"},ba=Sn((l,{minWidth:e,maxHeight:n,type:t})=>({scrollContainer:{"--table-min-width":je(e),"--table-max-height":je(n),"--table-overflow":t==="native"?"auto":void 0}})),$n=ke((l,e)=>{const n=ne("TableScrollContainer",Ca,l),{classNames:t,className:a,style:s,styles:i,unstyled:r,vars:u,children:g,minWidth:d,maxHeight:m,type:p,scrollAreaProps:c,...y}=n,f=an({name:"TableScrollContainer",classes:Ve,props:n,className:a,style:s,classNames:t,styles:i,unstyled:r,vars:u,varsResolver:ba,rootSelector:"scrollContainer"});return I.jsx(Ke,{component:p==="scrollarea"?ln:"div",...p==="scrollarea"?m?{offsetScrollbars:"xy",...c}:{offsetScrollbars:"x",...c}:{},ref:e,...f("scrollContainer"),...y,children:I.jsx("div",{...f("scrollContainerInner"),children:g})})});$n.classes=Ve;$n.displayName="@mantine/core/TableScrollContainer";const Sa={withRowBorders:!0,verticalSpacing:7},Ta=Sn((l,{layout:e,captionSide:n,horizontalSpacing:t,verticalSpacing:a,borderColor:s,stripedColor:i,highlightOnHoverColor:r,striped:u,highlightOnHover:g,stickyHeaderOffset:d,stickyHeader:m})=>({table:{"--table-layout":e,"--table-caption-side":n,"--table-horizontal-spacing":Jn(t),"--table-vertical-spacing":Jn(a),"--table-border-color":s?Xe(s,l):void 0,"--table-striped-color":u&&i?Xe(i,l):void 0,"--table-highlight-on-hover-color":g&&r?Xe(r,l):void 0,"--table-sticky-header-offset":m?je(d):void 0}})),oe=ke((l,e)=>{const n=ne("Table",Sa,l),{classNames:t,className:a,style:s,styles:i,unstyled:r,vars:u,horizontalSpacing:g,verticalSpacing:d,captionSide:m,stripedColor:p,highlightOnHoverColor:c,striped:y,highlightOnHover:f,withColumnBorders:k,withRowBorders:K,withTableBorder:P,borderColor:v,layout:S,variant:L,data:F,children:T,stickyHeader:M,stickyHeaderOffset:q,mod:D,tabularNums:O,...C}=n,_=an({name:"Table",props:n,className:a,style:s,classes:Ve,classNames:t,styles:i,unstyled:r,rootSelector:"table",vars:u,varsResolver:Ta});return I.jsx(Ra,{value:{getStyles:_,stickyHeader:M,striped:y===!0?"odd":y||void 0,highlightOnHover:f,withColumnBorders:k,withRowBorders:K,captionSide:m||"bottom"},children:I.jsx(Ke,{component:"table",variant:L,ref:e,mod:[{"data-with-table-border":P,"data-tabular-nums":O},D],..._("table"),...C,children:T||!!F&&I.jsx(Nn,{data:F})})})});oe.classes=Ve;oe.displayName="@mantine/core/Table";oe.Td=ql;oe.Th=vn;oe.Tr=Ye;oe.Thead=El;oe.Tbody=Ml;oe.Tfoot=Il;oe.Caption=Al;oe.ScrollContainer=$n;oe.DataRenderer=Nn;/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ka=ve("outline","alert-circle","IconAlertCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 8v4",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Pa=ve("outline","checkbox","IconCheckbox",[["path",{d:"M9 11l3 3l8 -8",key:"svg-0"}],["path",{d:"M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var La=ve("outline","dots-vertical","IconDotsVertical",[["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var _a=ve("outline","exclamation-circle","IconExclamationCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 9v4",key:"svg-1"}],["path",{d:"M12 16v.01",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var xa=ve("outline","git-commit","IconGitCommit",[["path",{d:"M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M12 3l0 6",key:"svg-1"}],["path",{d:"M12 15l0 6",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Dl=ve("outline","git-merge","IconGitMerge",[["path",{d:"M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M17 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-2"}],["path",{d:"M7 8l0 8",key:"svg-3"}],["path",{d:"M7 8a4 4 0 0 0 4 4h4",key:"svg-4"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var qa=ve("outline","message","IconMessage",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ea=ve("outline","pencil-plus","IconPencilPlus",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}],["path",{d:"M16 19h6",key:"svg-2"}],["path",{d:"M19 16v6",key:"svg-3"}]]);const Nl=function(){var l={defaultValue:null,kind:"LocalArgument",name:"id"},e={defaultValue:null,kind:"LocalArgument",name:"includeTeam"},n={defaultValue:null,kind:"LocalArgument",name:"name"},t={defaultValue:null,kind:"LocalArgument",name:"owner"},a={alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},s=[a],i=[{kind:"Variable",name:"name",variableName:"name"},{kind:"Variable",name:"owner",variableName:"owner"}],r={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},u=[r],g=[{kind:"Variable",name:"number",variableName:"id"}],d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},m=[a,d],p={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[p,a,d],storageKey:null},y=[r,d],f={alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"defaultBranchRef",plural:!1,selections:y,storageKey:null},k={kind:"InlineFragment",selections:[d],type:"Node",abstractKey:"__isNode"},K=[p,a,k],P={kind:"Literal",name:"first",value:30},v=[P],S={alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null},L={alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},F={alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},T={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},M={alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},q=[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},M],D={alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"ref",plural:!1,selections:y,storageKey:null},O=[L,d],C={alias:null,args:null,kind:"ScalarField",name:"committedDate",storageKey:null},_={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:K,storageKey:null},E={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},w={kind:"InlineFragment",selections:[{alias:"reviewState",args:null,kind:"ScalarField",name:"state",storageKey:null}],type:"PullRequestReviewComment",abstractKey:null},A={kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]},B=[{kind:"Literal",name:"first",value:20}],h={alias:null,args:null,kind:"ScalarField",name:"startLine",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"line",storageKey:null};return{fragment:{argumentDefinitions:[l,e,n,t],kind:"Fragment",metadata:null,name:"PRReviewCommitsQuery",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"viewer",plural:!1,selections:s,storageKey:null},{alias:null,args:i,concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CommitsViewRepositoryFragment"},{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"defaultBranchRef",plural:!1,selections:u,storageKey:null},{alias:null,args:g,concreteType:"PullRequest",kind:"LinkedField",name:"pullRequest",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ActivityPanelFragment"},{args:null,kind:"FragmentSpread",name:"FooterPullRequestFragment"},{args:null,kind:"FragmentSpread",name:"CommitsViewPullRequestFragment"},{args:null,kind:"FragmentSpread",name:"SummaryPanelFragment"}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[t,n,l,e],kind:"Operation",name:"PRReviewCommitsQuery",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"viewer",plural:!1,selections:m,storageKey:null},{alias:null,args:i,concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[c,r,f,{alias:null,args:g,concreteType:"PullRequest",kind:"LinkedField",name:"pullRequest",plural:!1,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"viewerCanUpdate",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mergedAt",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"mergedBy",plural:!1,selections:K,storageKey:null},{alias:null,args:v,concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[S,{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[p,{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[L,d,{alias:null,args:[{kind:"Literal",name:"first",value:2}],concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[L,d,F],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"},{alias:null,args:null,kind:"ScalarField",name:"messageHeadline",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"additions",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"deletions",storageKey:null},F],storageKey:null},d],storageKey:null}],storageKey:null}],storageKey:"commits(first:30)"},{alias:null,args:null,kind:"ScalarField",name:"mergeable",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerDidAuthor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanMergeAsAdmin",storageKey:null},{alias:null,args:null,concreteType:"Repository",kind:"LinkedField",name:"baseRepository",plural:!1,selections:[c,r,d],storageKey:null},{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"baseRef",plural:!1,selections:[r,d,{alias:null,args:null,concreteType:"BranchProtectionRule",kind:"LinkedField",name:"branchProtectionRule",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"requiresCodeOwnerReviews",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"requiredApprovingReviewCount",storageKey:null},d],storageKey:null}],storageKey:null},T,{alias:"lastCommit",args:[{kind:"Literal",name:"last",value:1}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[L,d,{alias:null,args:null,concreteType:"StatusCheckRollup",kind:"LinkedField",name:"statusCheckRollup",plural:!1,selections:[M,{alias:null,args:[{kind:"Literal",name:"first",value:50}],concreteType:"StatusCheckRollupContextConnection",kind:"LinkedField",name:"contexts",plural:!1,selections:[S,{alias:null,args:null,concreteType:"CheckRunStateCount",kind:"LinkedField",name:"checkRunCountsByState",plural:!0,selections:q,storageKey:null},{alias:null,args:null,concreteType:"StatusContextStateCount",kind:"LinkedField",name:"statusContextCountsByState",plural:!0,selections:q,storageKey:null},{alias:null,args:null,concreteType:"StatusCheckRollupContextEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[p,{kind:"InlineFragment",selections:[d,{alias:null,args:null,kind:"ScalarField",name:"detailsUrl",storageKey:null},r,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"conclusion",storageKey:null}],type:"CheckRun",abstractKey:null},{kind:"InlineFragment",selections:[d,M,{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"context",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"avatarUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"targetUrl",storageKey:null}],type:"StatusContext",abstractKey:null},k],storageKey:null}],storageKey:null}],storageKey:"contexts(first:50)"},d],storageKey:null}],storageKey:null},d],storageKey:null}],storageKey:null}],storageKey:"commits(last:1)"},{alias:null,args:[P,{kind:"Literal",name:"itemTypes",value:["HEAD_REF_FORCE_PUSHED_EVENT","BASE_REF_FORCE_PUSHED_EVENT","BASE_REF_CHANGED_EVENT","PULL_REQUEST_COMMIT"]}],concreteType:"PullRequestTimelineItemsConnection",kind:"LinkedField",name:"timelineItems",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestTimelineItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[p,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[L,{alias:null,args:null,kind:"ScalarField",name:"authoredDate",storageKey:null},d],storageKey:null}],type:"PullRequestCommit",abstractKey:null},{kind:"InlineFragment",selections:[T,{alias:null,args:null,kind:"ScalarField",name:"previousRefName",storageKey:null}],type:"BaseRefChangedEvent",abstractKey:null},{kind:"InlineFragment",selections:[T,D],type:"BaseRefForcePushedEvent",abstractKey:null},{kind:"InlineFragment",selections:[T,D,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"afterCommit",plural:!1,selections:O,storageKey:null},{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"beforeCommit",plural:!1,selections:[L,C,d],storageKey:null}],type:"HeadRefForcePushedEvent",abstractKey:null},k],storageKey:null}],storageKey:null}],storageKey:'timelineItems(first:30,itemTypes:["HEAD_REF_FORCE_PUSHED_EVENT","BASE_REF_FORCE_PUSHED_EVENT","BASE_REF_CHANGED_EVENT","PULL_REQUEST_COMMIT"])'},{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"viewerLatestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[d,L],storageKey:null},d],storageKey:null},{alias:null,args:null,concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[f,d],storageKey:null},_,{alias:null,args:v,concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[d,M,E,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[p,a,k,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"location",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"company",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null}],type:"User",abstractKey:null}],storageKey:null},p,T,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:O,storageKey:null},{alias:null,args:[{kind:"Literal",name:"last",value:30}],concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[E,_,d],storageKey:null}],storageKey:null}],storageKey:"comments(last:30)"},{kind:"InlineFragment",selections:[w,A],type:"Comment",abstractKey:"__isComment"}],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"},{alias:null,args:B,concreteType:"PullRequestReviewThreadConnection",kind:"LinkedField",name:"reviewThreads",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"node",plural:!1,selections:[d,{alias:null,args:B,concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[d,E,h,j,A,{kind:"InlineFragment",selections:[_,T,w],type:"Comment",abstractKey:"__isComment"}],storageKey:null}],storageKey:null}],storageKey:"comments(first:20)"},j,h,{alias:null,args:null,kind:"ScalarField",name:"path",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isResolved",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanReply",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanResolve",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanUnresolve",storageKey:null},A],storageKey:null}],storageKey:null}],storageKey:"reviewThreads(first:20)"},{alias:null,args:v,concreteType:"IssueCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"IssueCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"IssueComment",kind:"LinkedField",name:"node",plural:!1,selections:[p,T,d,E,{kind:"InlineFragment",selections:[_,w,A],type:"Comment",abstractKey:"__isComment"}],storageKey:null}],storageKey:null}],storageKey:"comments(first:30)"},{alias:"timelineCommits",args:[P,{kind:"Literal",name:"itemTypes",value:["PULL_REQUEST_COMMIT"]}],concreteType:"PullRequestTimelineItemsConnection",kind:"LinkedField",name:"timelineItems",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestTimelineItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[p,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[d,C,F,{alias:null,args:null,concreteType:"GitActor",kind:"LinkedField",name:"author",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:m,storageKey:null}],storageKey:null}],storageKey:null}],type:"PullRequestCommit",abstractKey:null},k],storageKey:null}],storageKey:null}],storageKey:'timelineItems(first:30,itemTypes:["PULL_REQUEST_COMMIT"])'},p,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"closed",storageKey:null},E,{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"number",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isDraft",storageKey:null},M,{alias:null,args:null,kind:"ScalarField",name:"mergeStateStatus",storageKey:null},{alias:null,args:v,concreteType:"ReviewRequestConnection",kind:"LinkedField",name:"reviewRequests",plural:!1,selections:[{alias:null,args:null,concreteType:"ReviewRequestEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"ReviewRequest",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"asCodeOwner",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"requestedReviewer",plural:!1,selections:[p,{kind:"InlineFragment",selections:s,type:"User",abstractKey:null},{condition:"includeTeam",kind:"Condition",passingValue:!0,selections:[{kind:"InlineFragment",selections:u,type:"Team",abstractKey:null}]},k],storageKey:null},d],storageKey:null}],storageKey:null}],storageKey:"reviewRequests(first:30)"}],storageKey:null},d],storageKey:null}]},params:{cacheID:"c88d8f5d4fbec2285ab52c1457ee036d",id:null,metadata:{},name:"PRReviewCommitsQuery",operationKind:"query",text:`query PRReviewCommitsQuery(
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
  mergedAt
  mergedBy {
    __typename
    login
    ... on Node {
      __isNode: __typename
      id
    }
  }
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

fragment CommentThreadPullRequestReviewFragment on PullRequestReviewThread {
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
  ...FileDiffer2Fragment
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

fragment FileDiffer2Fragment on PullRequest {
  id
  ...CommentThreadPullRequestFragment
  reviewThreads(first: 20) {
    edges {
      node {
        id
        path
        line
        ...CommentThreadPullRequestReviewFragment
      }
    }
  }
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

fragment PRStatusBadgeFragment on PullRequest {
  state
  isDraft
}

fragment PRTitleFragment on PullRequest {
  title
  body
  number
  isDraft
  state
  mergeStateStatus
  ...PRStatusBadgeFragment
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
  closed
  body
  createdAt
  viewerCanMergeAsAdmin
  ...PRTitleFragment
  baseRef {
    branchProtectionRule {
      requiresCodeOwnerReviews
      requiredApprovingReviewCount
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
`}}}();Nl.hash="5e50bd2bc396d55adef999c71f1f99ac";const $l=function(){var l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e=[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],n={kind:"Literal",name:"first",value:30},t=[n],a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},i={args:null,kind:"FragmentSpread",name:"CommentFragment"};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ActivityPanelFragment",selections:[l,{alias:null,args:null,kind:"ScalarField",name:"viewerCanUpdate",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mergedAt",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"mergedBy",plural:!1,selections:e,storageKey:null},{args:null,kind:"FragmentSpread",name:"FooterPullRequestFragment"},{alias:null,args:t,concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:e,storageKey:null},a,s,l,{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},i,{args:null,kind:"FragmentSpread",name:"ActivityPanelReviewFragment"}],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"},{alias:null,args:t,concreteType:"IssueCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"IssueCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"IssueComment",kind:"LinkedField",name:"node",plural:!1,selections:[a,s,i,l],storageKey:null}],storageKey:null}],storageKey:"comments(first:30)"},{alias:null,args:t,concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"commits(first:30)"},{alias:"timelineCommits",args:[n,{kind:"Literal",name:"itemTypes",value:["PULL_REQUEST_COMMIT"]}],concreteType:"PullRequestTimelineItemsConnection",kind:"LinkedField",name:"timelineItems",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestTimelineItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"committedDate",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},{alias:null,args:null,concreteType:"GitActor",kind:"LinkedField",name:"author",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:e,storageKey:null}],storageKey:null}],storageKey:null}],type:"PullRequestCommit",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:'timelineItems(first:30,itemTypes:["PULL_REQUEST_COMMIT"])'},{args:null,kind:"FragmentSpread",name:"useVersionHistoryFragment"}],type:"PullRequest",abstractKey:null}}();$l.hash="dfeb8ac801f60732512d36ccf529125a";const Ul=function(){var l={alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ActivityPanelReviewFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"UserFragment"},l],storageKey:null},e,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CommentFragment"},{alias:null,args:[{kind:"Literal",name:"last",value:30}],concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[e,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[l],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"comments(last:30)"}],type:"PullRequestReview",abstractKey:null}}();Ul.hash="d18ba5d809c6b447e654d4c984484e16";var Xn=function(e,n){var t=arguments;if(n==null||!It.call(n,"css"))return b.createElement.apply(void 0,t);var a=t.length,s=new Array(a);s[0]=At,s[1]=Dt(e,n);for(var i=2;i<a;i++)s[i]=t[i];return b.createElement.apply(null,s)};(function(l){var e;e||(e=l.JSX||(l.JSX={}))})(Xn||(Xn={}));function Ma(){for(var l=arguments.length,e=new Array(l),n=0;n<l;n++)e[n]=arguments[n];return Mt(e)}Re(new Map);const Un=Re(null),dn=Re(null),jl=Re(!1),ze=Re(hl()),cn=Re(hl()),Ia=Re(null),Aa=Re(null),Qe="edges",Yn="node";class Zn{constructor(e){this.obj=e}then(e){e(this.obj)}}class fe{constructor(e){this.record=e}setValues(e){console.debug(`setValues ${this.record.getDataID()} => ${JSON.stringify(e)}`);for(const[n,t]of Object.entries(e))this.record.setValue(t,n)}setLinkedRecord(e,n){this.record.setLinkedRecord(e.record,n)}setLinkedRecords(e,n){this.record.setLinkedRecords(e.map(t=>t.record),n)}getEdges(e){const n=this.record.getLinkedRecords(Qe,e);return n==null?(console.log(`unable to get edges from ${this.record.getDataID()} of type ${this.record.getType()}`),null):n.map(t=>new fe(t))}getNode(e,n){const t=this.record.getLinkedRecord(e,n);return t==null?(console.log(`unable to get node ${e} from ${this.record.getDataID()} of type ${this.record.getType()}`),null):new fe(t)}createAndAppendNodeToEdge(e,n,t,a,s,i,r){console.debug(`createAndAppendNodeToEdge ${n} ${t}`);let u=this.getNode(n,t);if(u==null){const y=e.create(He(),a);console.log(`could't find field ${n} on record ${this.record.getDataID()}, creating...`),this.record.setLinkedRecord(y,n,t),u=new fe(y)}let g=u.getEdges()??null;g==null&&(console.log(`could't find field edges on record ${u.record.getDataID()}, creating...`),u.record.setLinkedRecords([],Qe),g=[]);const d=He(),m=He(),p=new fe(e.create(d,s)),c=new fe(e.create(m,i));return c.setValues({...r,id:m}),p.setLinkedRecord(c,Yn),g.push(p),u.setLinkedRecords(g,Qe),console.log(`created edge ${d}`),new Zn({edgeId:d,nodeId:m,node:c})}appendToEdge(e,n,t,a,s){console.debug(`appendToEdge ${n}`);const i=this.getNode(n,t);if(i==null)return;const r=i.getEdges();if(r==null)return;const u=He(),g=new fe(e.create(u,a)),d=new _e(e).get(s);if(d==null){console.error(`unable to find node with id ${s}`);return}return g.setLinkedRecord(d,Yn),r.push(g),i.setLinkedRecords(r,Qe),new Zn({edgeId:u,nodeId:s})}}class _e{constructor(e){this.store=e}get(e){if(console.debug(`getRecord ${e}`),e==null)return console.error("attempted to find null nodeId"),null;const n=this.store.get(e);return n==null?(console.error(`unable to find record ${e}`),null):new fe(n)}delete(e){e!=null&&this.store.delete(e)}}function Da(){const l=$.useRelayEnvironment(),[e,n]=me(Un);return(t,a)=>{Tn.commitLocalUpdate(l,s=>{var r,u,g;const i=new _e(s);if(e!=null){(r=i.get(e))==null||r.setValues({isPending:!0,body:t,createdAt:J().toISOString()});return}(g=(u=i.get(a))==null?void 0:u.createAndAppendNodeToEdge(s,"reviews",{first:30},"PullRequestReviewConnection","PullRequestReviewEdge","PullRequestReview",{isPending:!0,body:t,createdAt:J().toISOString()}))==null||g.then(({nodeId:d})=>{n(d)})})}}const Ol={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommentFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},{kind:"InlineFragment",selections:[{alias:"reviewState",args:null,kind:"ScalarField",name:"state",storageKey:null}],type:"PullRequestReviewComment",abstractKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],type:"Comment",abstractKey:"__isComment"};Ol.hash="08730b47ba257692da11cc5d964ecfdc";const Rn=b.lazy(()=>kl(()=>import("./MarkdownRenderer-TJoW_UbC.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),Na=Ol,el=500;function $a({comment:l,header:e="default",right:n=void 0,border:t=!0}){var d;const a=$.useFragment(Na,l),[s,i]=b.useState(!1),r=a.isPending||a.reviewState==="PENDING",u=b.useRef(null),g=R(ce,{gap:"xs",children:[R(U,{wrap:"nowrap",justify:"space-between",children:[R(U,{gap:0,children:[a.author!=null&&o(he,{capitalize:!0,login:a.author.login,size:"sm"}),o(H,{span:!0,size:"sm",children:" commented "}),o(Oe,{from:J(a.createdAt),prefix:null}),r&&o(Te,{variant:"light",color:"yellow.8",ml:"sm",radius:"sm",children:"Pending"})]}),R(U,{children:[(((d=u.current)==null?void 0:d.clientHeight)??0)>el&&o(ae,{size:"compact-xs",onClick:()=>i(!0),children:"..."}),n]})]}),o(Rn,{ref:u,children:a.body})]});return R(X,{mah:el,withBorder:t,p:"xs",radius:0,style:{flexShrink:0},children:[e==="default"&&R(U,{justify:"space-between",children:[a.author!=null&&o(he,{login:a.author.login}),o(Oe,{from:J(a.createdAt),prefix:null}),r&&o(Te,{c:"yellow",children:"Pending"})]}),g,s&&o(Nt,{size:"lg",opened:!0,onClose:()=>i(!1),children:o(Rn,{children:a.body})})]})}function jn(l){return o(b.Suspense,{fallback:o(Kn,{}),children:o($a,{...l})})}const Bl=function(){var l={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},e=[l],n={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},a=[t],s=[{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:a,storageKey:null}],storageKey:null}],storageKey:null}],i={kind:"Literal",name:"first",value:30},r={alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"ref",plural:!1,selections:e,storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useVersionHistoryFragment",selections:[{alias:null,args:null,concreteType:"Repository",kind:"LinkedField",name:"baseRepository",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],storageKey:null},l],storageKey:null},{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"baseRef",plural:!1,selections:e,storageKey:null},n,{alias:"lastCommit",args:[{kind:"Literal",name:"last",value:1}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:s,storageKey:"commits(last:1)"},{alias:null,args:[i,{kind:"Literal",name:"itemTypes",value:["HEAD_REF_FORCE_PUSHED_EVENT","BASE_REF_FORCE_PUSHED_EVENT","BASE_REF_CHANGED_EVENT","PULL_REQUEST_COMMIT"]}],concreteType:"PullRequestTimelineItemsConnection",kind:"LinkedField",name:"timelineItems",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestTimelineItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[t,{alias:null,args:null,kind:"ScalarField",name:"authoredDate",storageKey:null}],storageKey:null}],type:"PullRequestCommit",abstractKey:null},{kind:"InlineFragment",selections:[n,{alias:null,args:null,kind:"ScalarField",name:"previousRefName",storageKey:null}],type:"BaseRefChangedEvent",abstractKey:null},{kind:"InlineFragment",selections:[n,r],type:"BaseRefForcePushedEvent",abstractKey:null},{kind:"InlineFragment",selections:[n,r,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"afterCommit",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"beforeCommit",plural:!1,selections:[t,{alias:null,args:null,kind:"ScalarField",name:"committedDate",storageKey:null}],storageKey:null}],type:"HeadRefForcePushedEvent",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:'timelineItems(first:30,itemTypes:["HEAD_REF_FORCE_PUSHED_EVENT","BASE_REF_FORCE_PUSHED_EVENT","BASE_REF_CHANGED_EVENT","PULL_REQUEST_COMMIT"])'},{alias:null,args:[i],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:s,storageKey:"commits(first:30)"},{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"viewerLatestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},t],storageKey:null}],storageKey:null}],type:"PullRequest",abstractKey:null}}();Bl.hash="f6d0a238f940ca721636bd35ebd7bb9b";const Ua=Bl;function Vl(l){var p,c,y,f,k,K,P,v,S,L;const e=$.useFragment(Ua,l),n=G((p=e.timelineItems.edges)==null?void 0:p.map(F=>F==null?void 0:F.node)),t=b.useMemo(()=>new Map,[e]),a=b.useMemo(()=>new Map,[e]),s=b.useMemo(()=>new Map,[e]),i=b.useMemo(()=>new Map,[e]),r=b.useMemo(()=>new Map,[e]);b.useMemo(()=>{var q,D,O,C,_,E,w,A,B,h,j,Z;let F=1,T=null,M=(q=e.baseRef)==null?void 0:q.name;if(e.baseRef==null||M==null)return null;for(const[W,V]of Array.from(n.entries()).reverse())s.set(n.length-1-W,M),V.__typename==="BaseRefChangedEvent"?M=V.previousRefName:V.__typename==="BaseRefForcePushedEvent"&&((D=V.ref)==null?void 0:D.name)!=null&&(M=(O=V.ref)==null?void 0:O.name);for(const[W,V]of n.entries()){if(M=s.get(W),M==null)throw new Error("unable to find baseRef for verison");V.__typename==="HeadRefForcePushedEvent"?(r.has((C=V.beforeCommit)==null?void 0:C.oid)||(t.set(F,(_=V.beforeCommit)==null?void 0:_.oid),a.set(F,M),i.set(F,(E=V.beforeCommit)==null?void 0:E.committedDate),r.set((w=V.afterCommit)==null?void 0:w.oid,F),F++),t.set(F,(A=V.afterCommit)==null?void 0:A.oid),a.set(F,M),i.set(F,V.createdAt),r.set((B=V.afterCommit)==null?void 0:B.oid,F),F++):V.__typename==="PullRequestCommit"&&(T=V.commit)}t.size>0&&T!=null&&t.set(F-1,T.oid),t.size===0&&(t.set(1,(j=pe((h=e.lastCommit.edges)==null?void 0:h.map(W=>W==null?void 0:W.node)))==null?void 0:j.commit.oid),a.set(1,Ge((Z=e.baseRef)==null?void 0:Z.name)))},[a,s,e,n,r,i,t]);const u=b.useMemo(()=>Array.from(t.entries()).map(([F,T])=>({baseRef:a.get(F),headOid:T})).filter(F=>F.baseRef!=null),[a,t]),g=$t(Ge((y=(c=e.baseRepository)==null?void 0:c.owner)==null?void 0:y.login),Ge((f=e.baseRepository)==null?void 0:f.name),u),d=(K=(k=e.viewerLatestReview)==null?void 0:k.commit)==null?void 0:K.oid;let m=null;return d!=null&&(m={oid:d,abbreviatedOid:d.slice(0,7),number:r.get(d)??null,nodeId:Ge((v=(P=e.viewerLatestReview)==null?void 0:P.commit)==null?void 0:v.id)}),{viewerLastReview:m,versions:G((L=(S=g==null?void 0:g.map(({data:F})=>F))==null?void 0:S.filter(F=>F!=null))==null?void 0:L.map((F,T)=>({commitOids:F.commits.map(M=>M.sha),number:T+1,headOid:F.commits[F.commits.length-1].sha,abbreviatedOid:F.commits[F.commits.length-1].sha.slice(0,7),baseRef:a.get(T+1),nodeIds:F.commits.map(M=>M.node_id),author:F.commits[F.commits.length-1].author.login,createdAt:i.get(T+1)==null?void 0:J(i.get(T+1))})))}}const zl=b.lazy(()=>kl(()=>import("./MarkdownTextarea-CcgKEQgb.js"),__vite__mapDeps([4,1,2,0,3,5]),import.meta.url)),Hl={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FooterPullRequestFragment",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:30}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null},{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:"commits(first:30)"},{alias:null,args:null,kind:"ScalarField",name:"mergeable",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerDidAuthor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanMergeAsAdmin",storageKey:null},{args:null,kind:"FragmentSpread",name:"VersionSelectorFragment"},{args:null,kind:"FragmentSpread",name:"SubmitReviewPanelFragment"}],type:"PullRequest",abstractKey:null};Hl.hash="0a0f71df99f45ad6a99f371e951b963d";const Gl=function(){var l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"SubmitReviewPanelFragment",selections:[l,{alias:null,args:null,kind:"ScalarField",name:"viewerCanUpdate",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:30}],concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"},{args:null,kind:"FragmentSpread",name:"reviewThreadCommentMutationPullRequestFragment"},{args:null,kind:"FragmentSpread",name:"addReviewMutationPullRequestFragment"}],type:"PullRequest",abstractKey:null}}();Gl.hash="4aae75e425f298b1928b0d77f8bf260f";const Ql=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"input"}],e=[{kind:"Variable",name:"input",variableName:"input"}],n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},a=[n],s={alias:null,args:null,concreteType:"PullRequest",kind:"LinkedField",name:"pullRequest",plural:!1,selections:a,storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},u={kind:"InlineFragment",selections:a,type:"Node",abstractKey:"__isNode"},g={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"addReviewMutationAddPullRequestReviewMutation",selections:[{alias:null,args:e,concreteType:"AddPullRequestReviewPayload",kind:"LinkedField",name:"addPullRequestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"pullRequestReview",plural:!1,selections:[n,t,{args:null,kind:"FragmentSpread",name:"ActivityPanelReviewFragment"},s],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"addReviewMutationAddPullRequestReviewMutation",selections:[{alias:null,args:e,concreteType:"AddPullRequestReviewPayload",kind:"LinkedField",name:"addPullRequestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"pullRequestReview",plural:!1,selections:[n,t,{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[i,r,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"location",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"company",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null}],type:"User",abstractKey:null},u],storageKey:null},g,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},n],storageKey:null},{alias:null,args:[{kind:"Literal",name:"last",value:30}],concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[g,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[i,r,u],storageKey:null},n],storageKey:null}],storageKey:null}],storageKey:"comments(last:30)"},s,{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:"reviewState",args:null,kind:"ScalarField",name:"state",storageKey:null}],type:"PullRequestReviewComment",abstractKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],type:"Comment",abstractKey:"__isComment"}],storageKey:null}],storageKey:null}]},params:{cacheID:"892dd143fbc2949c120104e84d4d082b",id:null,metadata:{},name:"addReviewMutationAddPullRequestReviewMutation",operationKind:"mutation",text:`mutation addReviewMutationAddPullRequestReviewMutation(
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
`}}}();Ql.hash="1b670edaf89f4e6c6336b444750a644f";const Wl=function(){var l=[{kind:"Literal",name:"first",value:20}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"addReviewMutationPullRequestFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:l,concreteType:"PullRequestReviewThreadConnection",kind:"LinkedField",name:"reviewThreads",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"line",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startLine",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"path",storageKey:null},{alias:null,args:l,concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"comments(first:20)"},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],storageKey:null}],storageKey:null}],storageKey:"reviewThreads(first:20)"}],type:"PullRequest",abstractKey:null}}();Wl.hash="02e0476a2118e17c18ca51ea6e7604b5";const ja=Wl,Oa=Ql;function Ba(l){var g,d;const e=$.useFragment(ja,l),n=rn(Un),t=Y(dn),a=b.useCallback(()=>{var m;n(null),(m=t==null?void 0:t.current)==null||m.setMarkdown("")},[n,t]),s=G((d=(g=e.reviewThreads.edges)==null?void 0:g.map(m=>m==null?void 0:m.node))==null?void 0:d.filter(m=>(m==null?void 0:m.isPending)===!0)).map(m=>{var c,y;const p=tn((c=m.comments)==null?void 0:c.edges);return{body:((y=p==null?void 0:p.node)==null?void 0:y.body)??"",line:m.line,path:m.path,startLine:m.startLine}}),i=b.useCallback(m=>(p,c)=>{var f;m!=null&&p.delete(m),(f=new _e(p).get(c.addPullRequestReview.pullRequestReview.pullRequest.id))==null||f.appendToEdge(p,"reviews",{first:30},"PullRequestReviewEdge",c.addPullRequestReview.pullRequestReview.id)},[]),[r,u]=$.useMutation(Oa);return[(m,p,c,y)=>{r({variables:{input:{pullRequestId:m,body:c??void 0,threads:s}},updater:i(p),onCompleted:f=>{a(),y(f.addPullRequestReview.pullRequestReview.id)}})},u]}function Jl(){const l=$.useRelayEnvironment(),[e,n]=me(ze);return t=>{Tn.commitLocalUpdate(l,a=>{const s=e.get(t);a.delete(s),n(i=>i.delete(t))})}}function Va(){const l=$.useRelayEnvironment(),[e,n]=me(ze);return(t,a)=>{Tn.commitLocalUpdate(l,s=>{var g,d;const i=e.get(a),r=new _e(s);if(i!=null){(g=r.get(i))==null||g.setValues({isPending:!0,body:t});return}const u=r.get(a);(d=u==null?void 0:u.createAndAppendNodeToEdge(s,"comments",{first:20},"PullRequestReviewCommentConnection","PullRequestReviewCommentEdge","PullRequestReviewComment",{isPending:!0,body:t}))==null||d.then(({nodeId:m})=>{n(p=>p.set(a,m))})})}}const Xl=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"input"}],e=[{kind:"Variable",name:"input",variableName:"input"}],n={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},a={alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"pullRequestReview",plural:!1,selections:[t,{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"reviewThreadCommentMutation",selections:[{alias:null,args:e,concreteType:"AddPullRequestReviewThreadReplyPayload",kind:"LinkedField",name:"addPullRequestReviewThreadReply",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"comment",plural:!1,selections:[n,a],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"reviewThreadCommentMutation",selections:[{alias:null,args:e,concreteType:"AddPullRequestReviewThreadReplyPayload",kind:"LinkedField",name:"addPullRequestReviewThreadReply",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"comment",plural:!1,selections:[n,a,t],storageKey:null}],storageKey:null}]},params:{cacheID:"ad3c8be53dc8e93f5a4a9552df497c3f",id:null,metadata:{},name:"reviewThreadCommentMutation",operationKind:"mutation",text:`mutation reviewThreadCommentMutation(
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
`}}}();Xl.hash="4d31cec9ad6f78a3462eed3e5b22a64d";const Yl=function(){var l=[{kind:"Literal",name:"first",value:20}],e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"reviewThreadCommentMutationPullRequestFragment",selections:[{alias:null,args:l,concreteType:"PullRequestReviewThreadConnection",kind:"LinkedField",name:"reviewThreads",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"node",plural:!1,selections:[e,{alias:null,args:l,concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],storageKey:null}],storageKey:null}],storageKey:"comments(first:20)"}],storageKey:null}],storageKey:null}],storageKey:"reviewThreads(first:20)"}],type:"PullRequest",abstractKey:null}}();Yl.hash="741ce77b35e675bda0fe2fb031e951e9";const za=Yl,Ha=Xl;function Ga({pr:l}){const[e,n]=me(ze),t=Y(cn),a=$.useFragment(za,l),s=b.useMemo(()=>{var c,y;const m=G((y=(c=a.reviewThreads)==null?void 0:c.edges)==null?void 0:y.map(f=>f==null?void 0:f.node)),p=G(m.map(f=>{var k,K;return(K=(k=f.comments)==null?void 0:k.edges)==null?void 0:K.map(P=>P==null?void 0:P.node)}).flat()).filter(f=>f.isPending===!0);return new Map(p.map(f=>[f.id,f.body]))},[a]),[i,r]=$.useMutation(Ha),u=b.useMemo(()=>new Set,[]),g=b.useCallback((m,p,c)=>{n(y=>y.delete(m)),u.delete(m),u.size===0&&c(p)},[n,u]),d=b.useCallback(m=>(p,c)=>{var k;const y=e.get(m);if(y==null)return;(k=new _e(p).get(y))==null||k.setValues({isPending:!1}),n(K=>K.delete(m))},[e,n]);return[(m,p)=>{const c=e.filter((y,f)=>!t.has(f));for(const[y,f]of c){const k=s.get(f);u.add(y),i({variables:{input:{body:k,pullRequestReviewThreadId:y,pullRequestReviewId:m}},updater:d(y),onCompleted:K=>g(y,K.addPullRequestReviewThreadReply.comment.pullRequestReview.id,p)})}},r]}const Zl=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"input"}],e=[{kind:"Variable",name:"input",variableName:"input"}],n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},a=[n],s={alias:null,args:null,concreteType:"PullRequest",kind:"LinkedField",name:"pullRequest",plural:!1,selections:a,storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},u={kind:"InlineFragment",selections:a,type:"Node",abstractKey:"__isNode"},g={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"submitReviewMutationSubmitPullRequestReviewMutation",selections:[{alias:null,args:e,concreteType:"SubmitPullRequestReviewPayload",kind:"LinkedField",name:"submitPullRequestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"pullRequestReview",plural:!1,selections:[n,t,s,{args:null,kind:"FragmentSpread",name:"ActivityPanelReviewFragment"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"submitReviewMutationSubmitPullRequestReviewMutation",selections:[{alias:null,args:e,concreteType:"SubmitPullRequestReviewPayload",kind:"LinkedField",name:"submitPullRequestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"pullRequestReview",plural:!1,selections:[n,t,s,{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[i,r,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"location",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"company",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null}],type:"User",abstractKey:null},u],storageKey:null},g,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},n],storageKey:null},{alias:null,args:[{kind:"Literal",name:"last",value:30}],concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[g,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[i,r,u],storageKey:null},n],storageKey:null}],storageKey:null}],storageKey:"comments(last:30)"},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:"reviewState",args:null,kind:"ScalarField",name:"state",storageKey:null}],type:"PullRequestReviewComment",abstractKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],type:"Comment",abstractKey:"__isComment"}],storageKey:null}],storageKey:null}]},params:{cacheID:"5b411c90078dba7eae29483db451a658",id:null,metadata:{},name:"submitReviewMutationSubmitPullRequestReviewMutation",operationKind:"mutation",text:`mutation submitReviewMutationSubmitPullRequestReviewMutation(
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
`}}}();Zl.hash="9ca77642300be4c86e11175c0173e248";const Qa=Zl;function Wa(){const[l,e]=me(Un),n=Y(dn),t=b.useCallback(()=>{var i;e(null),(i=n==null?void 0:n.current)==null||i.setMarkdown("")},[e,n]),[a,s]=$.useMutation(Qa);return[(i,r,u,g)=>{a({variables:{input:{pullRequestId:i,pullRequestReviewId:r,event:u,body:g??void 0}},onCompleted:()=>{t()}})},s]}const Ja=Gl;function Xa({pr:l}){var L,F,T,M;const e=$.useFragment(Ja,l),[n]=me(Pn),t=Y(dn),a=Y(jl),s=Y(ze),i=Y(cn),[r,u]=Ga({pr:e}),[g,d]=Ba(e),[m,p]=Wa(),c=pe(G((F=(L=e.reviews)==null?void 0:L.edges)==null?void 0:F.map(q=>q==null?void 0:q.node)).filter(q=>q.state==="PENDING")),y=Jl(),f=d||p||u,[k,K]=s.partition((q,D)=>i.has(D)),P=(a?1:0)+s.size,v=b.useCallback(q=>D=>{var C;const O=(C=t==null?void 0:t.current)==null?void 0:C.getMarkdown();m(e.id,D,q,Ut(c==null?void 0:c.body,O))},[m,c==null?void 0:c.body,e.id,t]),S=b.useCallback(q=>{if(e.viewerCanUpdate){if(c!=null){v(q)(c.id);return}k.size>0?g(e.id,(c==null?void 0:c.id)??null,(c==null?void 0:c.body)??null,D=>{r(D,v(q))}):g(e.id,(c==null?void 0:c.id)??null,(c==null?void 0:c.body)??null,D=>{v(q)(D)})}},[e,c,k.size,g,r,v]);return R(Ee,{children:[R(ae,{disabled:P<1||f,onClick:()=>{var q;for(const[D]of k)y(D);(q=t==null?void 0:t.current)==null||q.setMarkdown("")},size:"compact-sm",variant:"light",children:[o(H,{inherit:!0,mr:"xs",children:"Abandon"}),o(jt,{size:16,stroke:2})]}),o(ae,{disabled:P<1||f,onClick:()=>{S("COMMENT")},size:"compact-sm",variant:"light",color:P>0?"yellow":void 0,children:P>0?`Comment (${P})`:"Comment"}),R(ae,{disabled:((T=e.author)==null?void 0:T.login)===n,loading:f,onClick:()=>{S("REQUEST_CHANGES")},size:"compact-sm",color:"red",variant:"light",children:[o(H,{mr:"xs",inherit:!0,children:"Reject"}),o(Ot,{size:16,stroke:2})]}),R(ae,{disabled:((M=e.author)==null?void 0:M.login)===n,loading:f,onClick:()=>{S("APPROVE")},size:"compact-sm",variant:"light",color:"green",children:[o(H,{mr:"xs",inherit:!0,children:"Approve"}),o(vl,{size:16,stroke:2})]})]})}const et={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VersionSelectorFragment",selections:[{args:null,kind:"FragmentSpread",name:"useVersionHistoryFragment"},{alias:null,args:null,concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"defaultBranchRef",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}],storageKey:null}],type:"PullRequest",abstractKey:null};et.hash="4bdf88dee350ad2546728c39149b6c64";const Ya=et;function Za(l){return o(Ln,{children:o(es,{...l})})}function es({fragment:l}){var s;const e=$.useFragment(Ya,l),{versions:n}=Vl(e),[t,a]=b.useState(n[n.length-1]);return R(re,{position:"bottom",withArrow:!0,shadow:"md",children:[o(re.Target,{children:R(ae,{variant:"light",size:"compact-sm",children:["v",(s=n[n.length-1])==null?void 0:s.number]})}),o(re.Dropdown,{children:R(U,{style:{display:"flex",gap:"1rem"},children:[R(X,{shadow:"sm",padding:"lg",style:{flex:1},children:[o(H,{size:"lg",mb:"md",style:{fontWeight:700},children:"Versions"}),o(ln,{style:{height:400},children:n.map(i=>o(X,{shadow:"xs",padding:"sm",style:{marginBottom:"0.5rem",cursor:"pointer",backgroundColor:(t==null?void 0:t.number)===i.number?"#f0f0f0":"white"},onClick:()=>a(i),children:R(U,{style:{justifyContent:"space-between",alignItems:"center"},children:[R(H,{children:[R("strong",{children:["v",i.number]})," - ",i.baseRef]}),R(Te,{color:"blue",children:[i.commitOids.length," commits"]})]})},i.number))})]}),R(X,{shadow:"sm",padding:"lg",style:{flex:2},children:[R(H,{size:"lg",mb:"md",style:{fontWeight:700},children:["Commits for v",t==null?void 0:t.number]}),t?o(ln,{style:{height:400},children:R(oe,{children:[o("thead",{children:R("tr",{children:[o("th",{children:"Commit Hash"}),o("th",{children:"Author"}),o("th",{children:"Date"})]})}),o("tbody",{children:t.commitOids.map(i=>R("tr",{children:[o("td",{children:i}),o("td",{children:t.author}),o("td",{children:t.createdAt?t.createdAt.format("D MMM YYYY HH:mm"):"Unknown"})]},i))})]})}):o(H,{children:"No version selected."})]})]})})]})}const ns=Hl;function ls(l){return o(b.Suspense,{fallback:o(Bt,{}),children:o(ts,{...l})})}function ts({pr:l}){Vt(),Y(_n);const e=$.useFragment(ns,l);return me(Rl),R(U,{gap:"sm",justify:"flex-end",wrap:"nowrap",children:[e.mergeable==="MERGEABLE"&&(e.viewerDidAuthor||e.viewerCanMergeAsAdmin)&&o(ae,{size:"compact-sm",right:"Merge",variant:"light",color:"violet",children:o(Dl,{})}),o(Za,{fragment:e}),o(Xa,{pr:e})]})}const as=Ul,ss=$l;function Fn({login:l,text:e,state:n,from:t,color:a,alreadySeen:s,leftIcon:i}){return R(U,{className:qe(n,Pe.secondaryText,s&&"already-seen-timeline-item","timeline-item"),justify:"space-between",children:[R(U,{gap:0,children:[i&&o(i,{size:16,stroke:1}),R(H,{size:"sm",c:a,children:[l," ",e]})]}),o(H,{size:"sm",children:o(Oe,{from:t,prefix:null})})]})}function is({review:l,currentCommits:e,commits:n,alreadySeen:t}){var i,r,u,g,d;const a=$.useFragment(as,l);let s=null;if(a.state==="APPROVED"||a.state==="CHANGES_REQUESTED")s=o(Fn,{alreadySeen:t,from:J(a.createdAt),login:o(he,{capitalize:!0,login:(i=a.author)==null?void 0:i.login,reviewState:a.state,size:"sm"}),state:Pe.colorSuccess,text:a.state==="APPROVED"?"approved":"requested changes"});else if(a.state==="COMMENTED"&&wl(a.body)){const m=((r=a==null?void 0:a.commit)==null?void 0:r.oid)==null||e.has(a.commit.oid),p=n.get((u=a==null?void 0:a.commit)==null?void 0:u.oid),c=p!=null?` on v${p}`:m?"":` on a previous version (${(g=a==null?void 0:a.commit)==null?void 0:g.oid})`;s=o(Fn,{alreadySeen:t,from:J(a.createdAt),login:o(he,{capitalize:!0,login:(d=a.author)==null?void 0:d.login,size:"sm"}),text:"commented"+c,leftIcon:qa})}else a.state==="COMMENTED"&&(s=o(jn,{className:"timeline-item",comment:a,header:"none",variant:"small"}));return o("div",{className:qe(a.state==null&&Pe.colorWarning,t&&"already-seen-timeline-item","timeline-item"),children:s})}var rs={name:"ou8xsw",styles:"flex:0 0 auto"},os={name:"ygnveb",styles:"overflow-y:auto;overflow-x:hidden;flex-grow:1"},us={name:"g0dsyy",styles:"float:left"};function ds({pr:l}){var q,D,O,C,_,E,w,A,B;const e=$.useFragment(ss,l),[n,t]=me(dn),a=rn(jl),s=new Set(G((D=(q=e.commits.edges)==null?void 0:q.map(h=>h==null?void 0:h.node))==null?void 0:D.map(h=>h==null?void 0:h.commit.oid))),i=Y(zt),{versions:r}=Vl(e),u=new Map;for(const h of r.slice().reverse())for(const j of h.commitOids)u.set(j,h.number);const g=Da();b.useCallback(h=>{g(h,e.id)},[g,e.id,t]);const d=b.useRef(null),[m,p]=b.useState(void 0),c=b.useRef(null),y=b.useCallback(h=>{h.preventDefault&&h.preventDefault(),p(window.innerWidth-h.x)},[]),f=b.useCallback(h=>{window.removeEventListener("mousemove",y),window.removeEventListener("mouseup",f)},[y]),k=b.useCallback(h=>{h.preventDefault&&h.preventDefault(),window.addEventListener("mousemove",y),window.addEventListener("mouseup",f)},[f,y]);b.useEffect(()=>{c.current!=null&&(c.current.scrollTop=0)},[c,e]);const K=G((C=(O=e.comments)==null?void 0:O.edges)==null?void 0:C.map(h=>h==null?void 0:h.node)).map(h=>({createdAt:J(h.createdAt),node:h,type:"comment"})),P=G((E=(_=e.reviews)==null?void 0:_.edges)==null?void 0:E.map(h=>h==null?void 0:h.node)).map(h=>({createdAt:J(h.createdAt),node:h,type:"review"})),v=G(r).filter(h=>h.createdAt!=null).map(h=>({createdAt:h.createdAt,node:h,type:"versionHistory"})),S=G((w=e.timelineCommits.edges)==null?void 0:w.map(h=>h==null?void 0:h.node)).map(h=>{var j;return{createdAt:J((j=h.commit)==null?void 0:j.committedDate),node:h.commit,type:"commit"}}),L=e.mergedAt==null?null:{createdAt:J(e.mergedAt),node:e.mergedBy,type:"merge"},F=[...K,...P,...v,...S,L],T=Fl(G((B=(A=e.reviews)==null?void 0:A.edges)==null?void 0:B.map(h=>h==null?void 0:h.node)).filter(h=>{var j;return((j=h.author)==null?void 0:j.login)===i})),M=G(F).sort((h,j)=>j.createdAt.diff(h.createdAt)).map(h=>{var j,Z,W,V,ue,be,Ie,Ae;if(h.type==="review"&&((j=h.node)==null?void 0:j.state)!=null){const ge=h.node;return o(is,{alreadySeen:(h==null?void 0:h.createdAt)<(T==null?void 0:T.createdAt),commits:u,currentCommits:s,review:ge},ge.id)}else if(h.type==="comment"){const ge=h.node;return o(jn,{alreadySeen:(h==null?void 0:h.createdAt)<(T==null?void 0:T.createdAt),className:"timeline-item",comment:ge,header:"none",variant:ge.id===(T==null?void 0:T.id)?"normal":"small"},ge.id)}else{if(h.type=="versionHistory")return o(xn,{label:R(Ee,{children:[o(Ea,{stroke:1,size:16}),R(H,{ml:"xs",children:[o(he,{login:(Z=h.node)==null?void 0:Z.author,color:"dark.3"})," updated to v",h.node.number]})]}),size:"lg",c:"dark",my:"sm"},h.node.id);if(h.type==="commit")return R(ce,{gap:0,children:[R(U,{gap:0,align:"center",justify:"space-between",children:[R(U,{gap:0,children:[o(xa,{stroke:1,css:us,size:16}),o(he,{login:(ue=(V=(W=h.node)==null?void 0:W.author)==null?void 0:V.user)==null?void 0:ue.login,size:"sm"}),o(H,{span:!0,lineClamp:3,size:"sm",children:" added commit "})]}),o(H,{children:o(Oe,{from:h.createdAt,prefix:""})})]}),o(Ht,{style:{"--text-line-clamp":3},children:(be=h.node)==null?void 0:be.message})]},(Ie=h.node)==null?void 0:Ie.id);if(h.type==="merge")return o(Fn,{leftIcon:Dl,color:"violet",text:`${h.node.login} merged`,from:h==null?void 0:h.createdAt},(Ae=h.node)==null?void 0:Ae.login)}});return R(Ee,{children:[o("div",{className:"side-panel-resizer",onMouseDown:h=>k(h)}),R(ce,{className:"side-panel",css:Ma({overflowX:"hidden",width:m},"",""),gap:0,children:[o(ls,{pr:e}),o(ce,{ref:c,css:os,gap:"xs",mt:"xs",children:M}),o(ce,{css:rs,children:o(zl,{instanceId:"activityPanel",isDisabled:e.viewerCanUpdate!==!0,onChange:h=>{a(!h),t(d)},converterRef:d})})]})]})}const nt={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitsViewRepositoryFragment",selections:[{args:null,kind:"FragmentSpread",name:"CommitViewRepositoryFragment"}],type:"Repository",abstractKey:null};nt.hash="166d8fb1bb219b363a07c5955453bf3e";const lt=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"ids"}],e=[{kind:"Variable",name:"ids",variableName:"ids"}],n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},t=[{kind:"Literal",name:"first",value:2}],a={alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"CommitsViewSelectedCommitsQuery",selections:[{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"CommitViewFragment"},n,{alias:null,args:t,concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[a],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"}],type:"Commit",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"CommitsViewSelectedCommitsQuery",selections:[{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},n,{kind:"InlineFragment",selections:[a,{alias:null,args:t,concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[a,n,s],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"},{alias:null,args:null,kind:"ScalarField",name:"messageHeadline",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"additions",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"deletions",storageKey:null},s],type:"Commit",abstractKey:null}],storageKey:null}]},params:{cacheID:"6b03dc487f67556e13b2b6138423938c",id:null,metadata:{},name:"CommitsViewSelectedCommitsQuery",operationKind:"query",text:`query CommitsViewSelectedCommitsQuery(
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
`}}}();lt.hash="d8a74ab73e2d09ab3e0a74136deeb2e8";const tt={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitsViewPullRequestFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"baseRef",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:30}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null},{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"CommitViewFragment"},{alias:null,args:[{kind:"Literal",name:"first",value:2}],concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"commits(first:30)"},{args:null,kind:"FragmentSpread",name:"CommitViewPullRequestFragment"}],type:"PullRequest",abstractKey:null};tt.hash="b50d242b016895a40696393b7c59120b";const at={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitViewPullRequestFragment",selections:[{args:null,kind:"FragmentSpread",name:"CommitFileFragment"}],type:"PullRequest",abstractKey:null};at.hash="4ae6d86093d323d612422dcaccce08f5";const st={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitViewRepositoryFragment",selections:[{args:null,kind:"FragmentSpread",name:"CommitFileRepositoryFragment"}],type:"Repository",abstractKey:null};st.hash="506356fe21d3d2b2b49c594a56785cfb";const it=function(){var l={alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitViewFragment",selections:[{args:null,kind:"FragmentSpread",name:"CommitFileCommitFragment"},l,{alias:null,args:null,kind:"ScalarField",name:"messageHeadline",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"additions",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"deletions",storageKey:null},e,{alias:null,args:[{kind:"Literal",name:"first",value:2}],concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[l,e],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"}],type:"Commit",abstractKey:null}}();it.hash="4c16f91405370f5dc2e6dff906b2c33a";const rt=function(){var l={alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitFileCommitFragment",selections:[l,{alias:null,args:[{kind:"Literal",name:"first",value:2}],concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[l],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"}],type:"Commit",abstractKey:null}}();rt.hash="b0d4a9b9421f19d0929c3a59b9ddf06f";const ot=function(){var l={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitFileRepositoryFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],storageKey:null},l,{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"defaultBranchRef",plural:!1,selections:[l],storageKey:null}],type:"Repository",abstractKey:null}}();ot.hash="7daf2e7ee0a48811a456965015f24ee9";const ut={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitFileFragment",selections:[{args:null,kind:"FragmentSpread",name:"FileDiffer2Fragment"}],type:"PullRequest",abstractKey:null};ut.hash="8e82c9bf67c52235d50c587272befcab";function We(l,e,n,t,a="blob"){return`https://github.com/${l}/${e}/${a}/${n}/${t}`}function cs({owner:l,name:e,defaultBranchName:n,commitOid:t,parentCommitOid:a,filename:s}){return R(Q,{shadow:"md",width:200,children:[o(Q.Target,{children:o(Cl,{variant:"transparent",children:o(La,{stroke:1})})}),R(Q.Dropdown,{children:[n!=null&&o(Q.Item,{children:R("a",{href:We(l,e,n,s),target:"_blank",rel:"noreferrer",children:["View in ",n]})}),a!=null&&o(Q.Item,{children:o("a",{href:We(l,e,a,s),target:"_blank",rel:"noreferrer",children:"View in parent commit"})}),o(Q.Item,{children:o("a",{href:We(l,e,t,s),target:"_blank",rel:"noreferrer",children:"View in this commit"})}),o(Q.Divider,{}),n!=null&&o(Q.Item,{children:o("a",{href:We(l,e,n,s,"blame"),target:"_blank",rel:"noreferrer",children:"Blame"})})]})]})}var ms={name:"1bmnxg7",styles:"white-space:nowrap"};function gs({path:l}){const e=l.split("/");return o(Gt,{separatorMargin:"xxxs",style:{lineClamp:1,overflowX:"hidden"},children:e.map((n,t)=>{const a=e.slice(t).join("/");return o(Pl,{value:a,children:({copied:s,copy:i})=>o(Qt,{label:s?"Copied":`Copy ${a}`,withArrow:!0,position:"bottom",children:o(H,{component:"a",css:ms,onClick:i,children:n})})},a)})})}const dt=function(){var l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FileDiffer2Fragment",selections:[l,{args:null,kind:"FragmentSpread",name:"CommentThreadPullRequestFragment"},{alias:null,args:[{kind:"Literal",name:"first",value:20}],concreteType:"PullRequestReviewThreadConnection",kind:"LinkedField",name:"reviewThreads",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"node",plural:!1,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"path",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"line",storageKey:null},{args:null,kind:"FragmentSpread",name:"CommentThreadPullRequestReviewFragment"}],storageKey:null}],storageKey:null}],storageKey:"reviewThreads(first:20)"}],type:"PullRequest",abstractKey:null}}();dt.hash="c71f21962d45c117190f3ca5b142f414";var wn=new Map,Je=new WeakMap,nl=0,ps=void 0;function ys(l){return l?(Je.has(l)||(nl+=1,Je.set(l,nl.toString())),Je.get(l)):"0"}function fs(l){return Object.keys(l).sort().filter(e=>l[e]!==void 0).map(e=>`${e}_${e==="root"?ys(l.root):l[e]}`).toString()}function hs(l){const e=fs(l);let n=wn.get(e);if(!n){const t=new Map;let a;const s=new IntersectionObserver(i=>{i.forEach(r=>{var u;const g=r.isIntersecting&&a.some(d=>r.intersectionRatio>=d);l.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=g),(u=t.get(r.target))==null||u.forEach(d=>{d(g,r)})})},l);a=s.thresholds||(Array.isArray(l.threshold)?l.threshold:[l.threshold||0]),n={id:e,observer:s,elements:t},wn.set(e,n)}return n}function ks(l,e,n={},t=ps){if(typeof window.IntersectionObserver>"u"&&t!==void 0){const u=l.getBoundingClientRect();return e(t,{isIntersecting:t,target:l,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:a,observer:s,elements:i}=hs(n),r=i.get(l)||[];return i.has(l)||i.set(l,r),r.push(e),s.observe(l),function(){r.splice(r.indexOf(e),1),r.length===0&&(i.delete(l),s.unobserve(l)),i.size===0&&(s.disconnect(),wn.delete(a))}}function vs({threshold:l,delay:e,trackVisibility:n,rootMargin:t,root:a,triggerOnce:s,skip:i,initialInView:r,fallbackInView:u,onChange:g}={}){var d;const[m,p]=b.useState(null),c=b.useRef(g),[y,f]=b.useState({inView:!!r,entry:void 0});c.current=g,b.useEffect(()=>{if(i||!m)return;let v;return v=ks(m,(S,L)=>{f({inView:S,entry:L}),c.current&&c.current(S,L),L.isIntersecting&&s&&v&&(v(),v=void 0)},{root:a,rootMargin:t,threshold:l,trackVisibility:n,delay:e},u),()=>{v&&v()}},[Array.isArray(l)?l.toString():l,m,a,t,s,i,n,u,e]);const k=(d=y.entry)==null?void 0:d.target,K=b.useRef(void 0);!m&&k&&!s&&!i&&K.current!==k&&(K.current=k,f({inView:!!r,entry:void 0}));const P=[p,y.inView,y.entry];return P.ref=P[0],P.inView=P[1],P.entry=P[2],P}var pn=class Ze{constructor(e,n){this.parent=e,this.scopeName=n}static push(e,n){for(const t of n)e=new Ze(e,t);return e}static from(...e){let n=null;for(let t=0;t<e.length;t++)n=new Ze(n,e[t]);return n}push(e){return new Ze(this,e)}getSegments(){let e=this;const n=[];for(;e;)n.push(e.scopeName),e=e.parent;return n.reverse(),n}toString(){return this.getSegments().join(" ")}extends(e){return this===e?!0:this.parent===null?!1:this.parent.extends(e)}getExtensionIfDefined(e){const n=[];let t=this;for(;t&&t!==e;)n.push(t.scopeName),t=t.parent;return t===e?n.reverse():void 0}},en=(l=>(l[l.NotSet=-1]="NotSet",l[l.None=0]="None",l[l.Italic=1]="Italic",l[l.Bold=2]="Bold",l[l.Underline=4]="Underline",l[l.Strikethrough=8]="Strikethrough",l))(en||{}),Rs=class se{static toBinaryStr(e){return e.toString(2).padStart(32,"0")}static print(e){const n=se.getLanguageId(e),t=se.getTokenType(e),a=se.getFontStyle(e),s=se.getForeground(e),i=se.getBackground(e);console.log({languageId:n,tokenType:t,fontStyle:a,foreground:s,background:i})}static getLanguageId(e){return(e&255)>>>0}static getTokenType(e){return(e&768)>>>8}static containsBalancedBrackets(e){return(e&1024)!==0}static getFontStyle(e){return(e&30720)>>>11}static getForeground(e){return(e&16744448)>>>15}static getBackground(e){return(e&4278190080)>>>24}static set(e,n,t,a,s,i,r){let u=se.getLanguageId(e),g=se.getTokenType(e),d=se.containsBalancedBrackets(e)?1:0,m=se.getFontStyle(e),p=se.getForeground(e),c=se.getBackground(e);return n!==0&&(u=n),t!==8&&(g=t),a!==null&&(d=a?1:0),s!==-1&&(m=s),i!==0&&(p=i),r!==0&&(c=r),(u<<0|g<<8|d<<10|m<<11|p<<15|c<<24)>>>0}};var yn=class de{constructor(e,n,t){this.parent=e,this.scopePath=n,this.tokenAttributes=t}static fromExtension(e,n){let t=e,a=(e==null?void 0:e.scopePath)??null;for(const s of n)a=pn.push(a,s.scopeNames),t=new de(t,a,s.encodedTokenAttributes);return t}static createRoot(e,n){return new de(null,new pn(null,e),n)}static createRootAndLookUpScopeName(e,n,t){const a=t.getMetadataForScope(e),s=new pn(null,e),i=t.themeProvider.themeMatch(s),r=de.mergeAttributes(n,a,i);return new de(null,s,r)}get scopeName(){return this.scopePath.scopeName}toString(){return this.getScopeNames().join(" ")}equals(e){return de.equals(this,e)}static equals(e,n){do{if(e===n||!e&&!n)return!0;if(!e||!n||e.scopeName!==n.scopeName||e.tokenAttributes!==n.tokenAttributes)return!1;e=e.parent,n=n.parent}while(!0)}static mergeAttributes(e,n,t){let a=-1,s=0,i=0;return t!==null&&(a=t.fontStyle,s=t.foregroundId,i=t.backgroundId),Rs.set(e,n.languageId,n.tokenType,null,a,s,i)}pushAttributed(e,n){if(e===null)return this;if(e.indexOf(" ")===-1)return de._pushAttributed(this,e,n);const t=e.split(/ /g);let a=this;for(const s of t)a=de._pushAttributed(a,s,n);return a}static _pushAttributed(e,n,t){const a=t.getMetadataForScope(n),s=e.scopePath.push(n),i=t.themeProvider.themeMatch(s),r=de.mergeAttributes(e.tokenAttributes,a,i);return new de(e,s,r)}getScopeNames(){return this.scopePath.getSegments()}getExtensionIfDefined(e){var a;const n=[];let t=this;for(;t&&t!==e;)n.push({encodedTokenAttributes:t.tokenAttributes,scopeNames:t.scopePath.getExtensionIfDefined(((a=t.parent)==null?void 0:a.scopePath)??null)}),t=t.parent;return t===e?n.reverse():void 0}},ie,Fs=(ie=class{constructor(e,n,t,a,s,i,r,u){xe(this,"_stackElementBrand");xe(this,"_enterPos");xe(this,"_anchorPos");xe(this,"depth");this.parent=e,this.ruleId=n,this.beginRuleCapturedEOL=s,this.endRule=i,this.nameScopesList=r,this.contentNameScopesList=u,this.depth=this.parent?this.parent.depth+1:1,this._enterPos=t,this._anchorPos=a}equals(e){return e===null?!1:ie._equals(this,e)}static _equals(e,n){return e===n?!0:this._structuralEquals(e,n)?yn.equals(e.contentNameScopesList,n.contentNameScopesList):!1}static _structuralEquals(e,n){do{if(e===n||!e&&!n)return!0;if(!e||!n||e.depth!==n.depth||e.ruleId!==n.ruleId||e.endRule!==n.endRule)return!1;e=e.parent,n=n.parent}while(!0)}clone(){return this}static _reset(e){for(;e;)e._enterPos=-1,e._anchorPos=-1,e=e.parent}reset(){ie._reset(this)}pop(){return this.parent}safePop(){return this.parent?this.parent:this}push(e,n,t,a,s,i,r){return new ie(this,e,n,t,a,s,i,r)}getEnterPos(){return this._enterPos}getAnchorPos(){return this._anchorPos}getRule(e){return e.getRule(this.ruleId)}toString(){const e=[];return this._writeString(e,0),"["+e.join(",")+"]"}_writeString(e,n){var t,a;return this.parent&&(n=this.parent._writeString(e,n)),e[n++]=`(${this.ruleId}, ${(t=this.nameScopesList)==null?void 0:t.toString()}, ${(a=this.contentNameScopesList)==null?void 0:a.toString()})`,n}withContentNameScopesList(e){return this.contentNameScopesList===e?this:this.parent.push(this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,this.endRule,this.nameScopesList,e)}withEndRule(e){return this.endRule===e?this:new ie(this.parent,this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,e,this.nameScopesList,this.contentNameScopesList)}hasSameRuleAs(e){let n=this;for(;n&&n._enterPos===e._enterPos;){if(n.ruleId===e.ruleId)return!0;n=n.parent}return!1}toStateStackFrame(){var e,n,t;return{ruleId:this.ruleId,beginRuleCapturedEOL:this.beginRuleCapturedEOL,endRule:this.endRule,nameScopesList:((n=this.nameScopesList)==null?void 0:n.getExtensionIfDefined(((e=this.parent)==null?void 0:e.nameScopesList)??null))??[],contentNameScopesList:((t=this.contentNameScopesList)==null?void 0:t.getExtensionIfDefined(this.nameScopesList))??[]}}static pushFrame(e,n){const t=yn.fromExtension((e==null?void 0:e.nameScopesList)??null,n.nameScopesList);return new ie(e,n.ruleId,n.enterPos??-1,n.anchorPos??-1,n.beginRuleCapturedEOL,n.endRule,t,yn.fromExtension(t,n.contentNameScopesList))}},xe(ie,"NULL",new ie(null,0,0,0,!1,null,null,null)),ie);Fs.NULL;function Ce(){}Ce.prototype={diff:function(e,n){var t,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=a.callback;typeof a=="function"&&(s=a,a={}),this.options=a;var i=this;function r(S){return s?(setTimeout(function(){s(void 0,S)},0),!0):S}e=this.castInput(e),n=this.castInput(n),e=this.removeEmpty(this.tokenize(e)),n=this.removeEmpty(this.tokenize(n));var u=n.length,g=e.length,d=1,m=u+g;a.maxEditLength&&(m=Math.min(m,a.maxEditLength));var p=(t=a.timeout)!==null&&t!==void 0?t:1/0,c=Date.now()+p,y=[{oldPos:-1,lastComponent:void 0}],f=this.extractCommon(y[0],n,e,0);if(y[0].oldPos+1>=g&&f+1>=u)return r([{value:this.join(n),count:n.length}]);var k=-1/0,K=1/0;function P(){for(var S=Math.max(k,-d);S<=Math.min(K,d);S+=2){var L=void 0,F=y[S-1],T=y[S+1];F&&(y[S-1]=void 0);var M=!1;if(T){var q=T.oldPos-S;M=T&&0<=q&&q<u}var D=F&&F.oldPos+1<g;if(!M&&!D){y[S]=void 0;continue}if(!D||M&&F.oldPos+1<T.oldPos?L=i.addToPath(T,!0,void 0,0):L=i.addToPath(F,void 0,!0,1),f=i.extractCommon(L,n,e,S),L.oldPos+1>=g&&f+1>=u)return r(ws(i,L.lastComponent,n,e,i.useLongestToken));y[S]=L,L.oldPos+1>=g&&(K=Math.min(K,S-1)),f+1>=u&&(k=Math.max(k,S+1))}d++}if(s)(function S(){setTimeout(function(){if(d>m||Date.now()>c)return s();P()||S()},0)})();else for(;d<=m&&Date.now()<=c;){var v=P();if(v)return v}},addToPath:function(e,n,t,a){var s=e.lastComponent;return s&&s.added===n&&s.removed===t?{oldPos:e.oldPos+a,lastComponent:{count:s.count+1,added:n,removed:t,previousComponent:s.previousComponent}}:{oldPos:e.oldPos+a,lastComponent:{count:1,added:n,removed:t,previousComponent:s}}},extractCommon:function(e,n,t,a){for(var s=n.length,i=t.length,r=e.oldPos,u=r-a,g=0;u+1<s&&r+1<i&&this.equals(n[u+1],t[r+1]);)u++,r++,g++;return g&&(e.lastComponent={count:g,previousComponent:e.lastComponent}),e.oldPos=r,u},equals:function(e,n){return this.options.comparator?this.options.comparator(e,n):e===n||this.options.ignoreCase&&e.toLowerCase()===n.toLowerCase()},removeEmpty:function(e){for(var n=[],t=0;t<e.length;t++)e[t]&&n.push(e[t]);return n},castInput:function(e){return e},tokenize:function(e){return e.split("")},join:function(e){return e.join("")}};function ws(l,e,n,t,a){for(var s=[],i;e;)s.push(e),i=e.previousComponent,delete e.previousComponent,e=i;s.reverse();for(var r=0,u=s.length,g=0,d=0;r<u;r++){var m=s[r];if(m.removed){if(m.value=l.join(t.slice(d,d+m.count)),d+=m.count,r&&s[r-1].added){var c=s[r-1];s[r-1]=s[r],s[r]=c}}else{if(!m.added&&a){var p=n.slice(g,g+m.count);p=p.map(function(f,k){var K=t[d+k];return K.length>f.length?K:f}),m.value=l.join(p)}else m.value=l.join(n.slice(g,g+m.count));g+=m.count,m.added||(d+=m.count)}}var y=s[u-1];return u>1&&typeof y.value=="string"&&(y.added||y.removed)&&l.equals("",y.value)&&(s[u-2].value+=y.value,s.pop()),s}var ll=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,tl=/\S/,On=new Ce;On.equals=function(l,e){return this.options.ignoreCase&&(l=l.toLowerCase(),e=e.toLowerCase()),l===e||this.options.ignoreWhitespace&&!tl.test(l)&&!tl.test(e)};On.tokenize=function(l){for(var e=l.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/),n=0;n<e.length-1;n++)!e[n+1]&&e[n+2]&&ll.test(e[n])&&ll.test(e[n+2])&&(e[n]+=e[n+2],e.splice(n+1,2),n--);return e};function al(l,e,n){return On.diff(l,e,n)}var ct=new Ce;ct.tokenize=function(l){this.options.stripTrailingCr&&(l=l.replace(/\r\n/g,`
`));var e=[],n=l.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(var t=0;t<n.length;t++){var a=n[t];t%2&&!this.options.newlineIsToken?e[e.length-1]+=a:(this.options.ignoreWhitespace&&(a=a.trim()),e.push(a))}return e};var Cs=new Ce;Cs.tokenize=function(l){return l.split(/(\S.+?[.!?])(?=\s+|$)/)};var bs=new Ce;bs.tokenize=function(l){return l.split(/([{}:;,]|\s+)/)};function nn(l){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?nn=function(e){return typeof e}:nn=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},nn(l)}var Ss=Object.prototype.toString,Be=new Ce;Be.useLongestToken=!0;Be.tokenize=ct.tokenize;Be.castInput=function(l){var e=this.options,n=e.undefinedReplacement,t=e.stringifyReplacer,a=t===void 0?function(s,i){return typeof i>"u"?n:i}:t;return typeof l=="string"?l:JSON.stringify(Cn(l,null,null,a),a,"  ")};Be.equals=function(l,e){return Ce.prototype.equals.call(Be,l.replace(/,([\r\n])/g,"$1"),e.replace(/,([\r\n])/g,"$1"))};function Cn(l,e,n,t,a){e=e||[],n=n||[],t&&(l=t(a,l));var s;for(s=0;s<e.length;s+=1)if(e[s]===l)return n[s];var i;if(Ss.call(l)==="[object Array]"){for(e.push(l),i=new Array(l.length),n.push(i),s=0;s<l.length;s+=1)i[s]=Cn(l[s],e,n,t,a);return e.pop(),n.pop(),i}if(l&&l.toJSON&&(l=l.toJSON()),nn(l)==="object"&&l!==null){e.push(l),i={},n.push(i);var r=[],u;for(u in l)l.hasOwnProperty(u)&&r.push(u);for(r.sort(),s=0;s<r.length;s+=1)u=r[s],i[u]=Cn(l[u],e,n,t,u);e.pop(),n.pop()}else i=l;return i}var bn=new Ce;bn.tokenize=function(l){return l.slice()};bn.join=bn.removeEmpty=function(l){return l};const Ts="_code-cell_p4786_1",Ks="_block-header_p4786_9",Ps="_file-table_p4786_21",Ls="_line-number_p4786_23",_s="_line-number-right_p4786_37",xs="_line-number-comment_p4786_51",qs="_removed-line_p4786_107",Es="_added-line_p4786_110",Ms="_context-line_p4786_113",Is="_intraline-removed_p4786_116",As="_intraline-added_p4786_121",te={codeCell:Ts,blockHeader:Ks,fileTable:Ps,lineNumber:Ls,lineNumberRight:_s,lineNumberComment:xs,removedLine:qs,addedLine:Es,contextLine:Ms,intralineRemoved:Is,intralineAdded:As};var Ds={programming:[["abap",{extensions:[".abap"]}],["ada",{extensions:[".adb",".ada",".ads"]}],["apex",{extensions:[".cls"]}],["apl",{extensions:[".apl",".dyalog"]}],["applescript",{extensions:[".applescript",".scpt"]}],["asm",{extensions:[".asm",".a51",".i",".inc",".nasm"]}],["awk",{extensions:[".awk",".auk",".gawk",".mawk",".nawk"]}],["ballerina",{extensions:[".bal"]}],["bat",{extensions:[".bat",".cmd"]}],["c",{extensions:[".c",".cats",".h",".idc"]}],["clojure",{extensions:[".clj",".boot",".cl2",".cljc",".cljs",".cljs.hl",".cljscm",".cljx",".hic"],filenames:["riemann.config"]}],["cobol",{extensions:[".cob",".cbl",".ccp",".cobol",".cpy"]}],["coffee",{extensions:[".coffee","._coffee",".cake",".cjsx",".iced"],filenames:["Cakefile"]}],["cpp",{extensions:[".cpp",".c++",".cc",".cp",".cxx",".h",".h++",".hh",".hpp",".hxx",".inc",".inl",".ino",".ipp",".re",".tcc",".tpp"]}],["crystal",{extensions:[".cr"]}],["csharp",{extensions:[".cs",".cake",".csx",".linq"]}],["d",{extensions:[".d",".di"]}],["dart",{extensions:[".dart"]}],["elixir",{extensions:[".ex",".exs"],filenames:["mix.lock"]}],["elm",{extensions:[".elm"]}],["erlang",{extensions:[".erl",".app.src",".es",".escript",".hrl",".xrl",".yrl"],filenames:["Emakefile","rebar.config","rebar.config.lock","rebar.lock"]}],["fish",{extensions:[".fish"]}],["fsharp",{extensions:[".fs",".fsi",".fsx"]}],["gherkin",{extensions:[".feature",".story"]}],["gnuplot",{extensions:[".gp",".gnu",".gnuplot",".p",".plot",".plt"]}],["go",{extensions:[".go"]}],["groovy",{extensions:[".groovy",".grt",".gtpl",".gvy"],filenames:["Jenkinsfile"]}],["hack",{extensions:[".hack",".hh",".hhi",".php"]}],["haskell",{extensions:[".hs",".hs-boot",".hsc"]}],["hcl",{extensions:[".hcl",".nomad",".tf",".tfvars",".workflow"]}],["hlsl",{extensions:[".hlsl",".cginc",".fx",".fxh",".hlsli"]}],["java",{extensions:[".java",".jav"]}],["javascript",{extensions:[".js","._js",".bones",".cjs",".es",".es6",".frag",".gs",".jake",".javascript",".jsb",".jscad",".jsfl",".jsm",".jss",".jsx",".mjs",".njs",".pac",".sjs",".ssjs",".xsjs",".xsjslib"],filenames:["Jakefile"]}],["jsonnet",{extensions:[".jsonnet",".libsonnet"]}],["julia",{extensions:[".jl"]}],["kotlin",{extensions:[".kt",".ktm",".kts"]}],["lisp",{extensions:[".lisp",".asd",".cl",".l",".lsp",".ny",".podsl",".sexp"]}],["lua",{extensions:[".lua",".fcgi",".nse",".p8",".pd_lua",".rbxs",".rockspec",".wlua"],filenames:[".luacheckrc"]}],["make",{extensions:[".mak",".d",".make",".makefile",".mk",".mkfile"],filenames:["BSDmakefile","GNUmakefile","Kbuild","Makefile","Makefile.am","Makefile.boot","Makefile.frag","Makefile.in","Makefile.inc","Makefile.wat","makefile","makefile.sco","mkfile"]}],["matlab",{extensions:[".matlab",".m"]}],["nim",{extensions:[".nim",".nim.cfg",".nimble",".nimrod",".nims"],filenames:["nim.cfg"]}],["nix",{extensions:[".nix"]}],["objective-c",{extensions:[".m",".h"]}],["ocaml",{extensions:[".ml",".eliom",".eliomi",".ml4",".mli",".mll",".mly"]}],["pascal",{extensions:[".pas",".dfm",".dpr",".inc",".lpr",".pascal",".pp"]}],["perl",{extensions:[".pl",".al",".cgi",".fcgi",".perl",".ph",".plx",".pm",".psgi",".t"],filenames:["Makefile.PL","Rexfile","ack","cpanfile"]}],["php",{extensions:[".php",".aw",".ctp",".fcgi",".inc",".php3",".php4",".php5",".phps",".phpt"],filenames:[".php",".php_cs",".php_cs.dist","Phakefile"]}],["plsql",{extensions:[".pls",".bdy",".ddl",".fnc",".pck",".pkb",".pks",".plb",".plsql",".prc",".spc",".sql",".tpb",".tps",".trg",".vw"]}],["powershell",{extensions:[".ps1",".psd1",".psm1"]}],["prolog",{extensions:[".pl",".pro",".prolog",".yap"]}],["puppet",{extensions:[".pp"],filenames:["Modulefile"]}],["purescript",{extensions:[".purs"]}],["python",{extensions:[".py",".cgi",".fcgi",".gyp",".gypi",".lmi",".py3",".pyde",".pyi",".pyp",".pyt",".pyw",".rpy",".smk",".spec",".tac",".wsgi",".xpy"],filenames:[".gclient","DEPS","SConscript","SConstruct","Snakefile","wscript"]}],["r",{extensions:[".r",".rd",".rsx"],filenames:[".Rprofile","expr-dist"]}],["raku",{extensions:[".6pl",".6pm",".nqp",".p6",".p6l",".p6m",".pl",".pl6",".pm",".pm6",".raku",".rakumod",".t"]}],["ruby",{extensions:[".rb",".builder",".eye",".fcgi",".gemspec",".god",".jbuilder",".mspec",".pluginspec",".podspec",".prawn",".rabl",".rake",".rbi",".rbuild",".rbw",".rbx",".ru",".ruby",".spec",".thor",".watchr"],filenames:[".irbrc",".pryrc",".simplecov","Appraisals","Berksfile","Brewfile","Buildfile","Capfile","Dangerfile","Deliverfile","Fastfile","Gemfile","Guardfile","Jarfile","Mavenfile","Podfile","Puppetfile","Rakefile","Snapfile","Thorfile","Vagrantfile","buildfile"]}],["rust",{extensions:[".rs",".rs.in"]}],["sas",{extensions:[".sas"]}],["scala",{extensions:[".scala",".kojo",".sbt",".sc"]}],["scheme",{extensions:[".scm",".sch",".sld",".sls",".sps",".ss"]}],["shaderlab",{extensions:[".shader"]}],["smalltalk",{extensions:[".st",".cs"]}],["solidity",{extensions:[".sol"]}],["swift",{extensions:[".swift"]}],["tcl",{extensions:[".tcl",".adp",".tcl.in",".tm"],filenames:["owh","starfield"]}],["tsx",{extensions:[".tsx"]}],["typescript",{extensions:[".ts"]}],["verilog",{extensions:[".v",".veo"]}],["vhdl",{extensions:[".vhdl",".vhd",".vhf",".vhi",".vho",".vhs",".vht",".vhw"]}],["viml",{extensions:[".vim",".vba",".vmb"],filenames:[".exrc",".gvimrc",".nvimrc",".vimrc","_vimrc","gvimrc","nvimrc","vimrc"]}],["wasm",{extensions:[".wast",".wat"]}],["xsl",{extensions:[".xslt",".xsl"]}]],markup:[["astro",{extensions:[".astro"]}],["css",{extensions:[".css"]}],["erb",{extensions:[".erb",".erb.deface",".rhtml"]}],["haml",{extensions:[".haml",".haml.deface"]}],["handlebars",{extensions:[".handlebars",".hbs"]}],["html",{extensions:[".html",".hta",".htm",".html.hl",".inc",".xht",".xhtml"]}],["latex",{extensions:[".tex",".aux",".bbx",".cbx",".cls",".dtx",".ins",".lbx",".ltx",".mkii",".mkiv",".mkvi",".sty",".toc"]}],["less",{extensions:[".less"]}],["postcss",{extensions:[".pcss",".postcss"]}],["pug",{extensions:[".jade",".pug"]}],["razor",{extensions:[".cshtml",".razor"]}],["sass",{extensions:[".sass"]}],["scss",{extensions:[".scss"]}],["stylus",{extensions:[".styl"]}],["svelte",{extensions:[".svelte"]}],["tex",{extensions:[".tex",".aux",".bbx",".cbx",".cls",".dtx",".ins",".lbx",".ltx",".mkii",".mkiv",".mkvi",".sty",".toc"]}],["twig",{extensions:[".twig"]}],["vue",{extensions:[".vue"]}]],data:[["apache",{extensions:[".apacheconf",".vhost"],filenames:[".htaccess","apache2.conf","httpd.conf"]}],["diff",{extensions:[".diff",".patch"]}],["graphql",{extensions:[".graphql",".gql",".graphqls"]}],["ini",{extensions:[".ini",".cfg",".dof",".lektorproject",".prefs",".pro",".properties"],filenames:["buildozer.spec"]}],["json",{extensions:[".json",".avsc",".geojson",".gltf",".har",".ice",".JSON-tmLanguage",".jsonl",".mcmeta",".tfstate",".tfstate.backup",".topojson",".webapp",".webmanifest",".yy",".yyp"],filenames:[".arcconfig",".auto-changelog",".c8rc",".htmlhintrc",".imgbotconfig",".nycrc",".tern-config",".tern-project",".watchmanconfig","Pipfile.lock","composer.lock","mcmod.info"]}],["jsonc",{extensions:[".jsonc",".sublime-build",".sublime-commands",".sublime-completions",".sublime-keymap",".sublime-macro",".sublime-menu",".sublime-mousemap",".sublime-project",".sublime-settings",".sublime-theme",".sublime-workspace",".sublime_metrics",".sublime_session"],filenames:[".babelrc",".eslintrc.json",".jscsrc",".jshintrc",".jslintrc","api-extractor.json","devcontainer.json","jsconfig.json","language-configuration.json","tsconfig.json","tslint.json"]}],["nginx",{extensions:[".nginx",".nginxconf",".vhost"],filenames:["nginx.conf"]}],["prisma",{extensions:[".prisma"]}],["sparql",{extensions:[".sparql",".rq"]}],["sql",{extensions:[".sql",".cql",".ddl",".inc",".mysql",".prc",".tab",".udf",".viw"]}],["toml",{extensions:[".toml"],filenames:["Cargo.lock","Gopkg.lock","Pipfile","poetry.lock"]}],["turtle",{extensions:[".ttl"]}],["xml",{extensions:[".xml",".adml",".admx",".ant",".axml",".builds",".ccproj",".ccxml",".clixml",".cproject",".cscfg",".csdef",".csl",".csproj",".ct",".depproj",".dita",".ditamap",".ditaval",".dll.config",".dotsettings",".filters",".fsproj",".fxml",".glade",".gml",".gmx",".grxml",".gst",".iml",".ivy",".jelly",".jsproj",".kml",".launch",".mdpolicy",".mjml",".mm",".mod",".mxml",".natvis",".ncl",".ndproj",".nproj",".nuspec",".odd",".osm",".pkgproj",".pluginspec",".proj",".props",".ps1xml",".psc1",".pt",".rdf",".res",".resx",".rs",".rss",".sch",".scxml",".sfproj",".shproj",".srdf",".storyboard",".sublime-snippet",".targets",".tml",".ts",".tsx",".ui",".urdf",".ux",".vbproj",".vcxproj",".vsixmanifest",".vssettings",".vstemplate",".vxml",".wixproj",".workflow",".wsdl",".wsf",".wxi",".wxl",".wxs",".x3d",".xacro",".xaml",".xib",".xlf",".xliff",".xmi",".xml.dist",".xmp",".xproj",".xsd",".xspec",".xul",".zcml"],filenames:[".classpath",".cproject",".project","App.config","NuGet.config","Settings.StyleCop","Web.Debug.config","Web.Release.config","Web.config","packages.config"]}],["yaml",{extensions:[".yml",".mir",".reek",".rviz",".sublime-syntax",".syntax",".yaml",".yaml-tmlanguage",".yaml.sed",".yml.mysql"],filenames:[".clang-format",".clang-tidy",".gemrc","CITATION.cff","glide.lock","yarn.lock"]}]],prose:[["markdown",{extensions:[".md",".markdown",".mdown",".mdwn",".mdx",".mkd",".mkdn",".mkdown",".ronn",".scd",".workbook"],filenames:["contents.lr"]}]]},Ns=(l,e)=>{var n,t;return!!((n=l.extensions)!=null&&n.find(a=>e.endsWith(a))||(t=l.filenames)!=null&&t.includes(e))},$s=l=>{for(const e of Object.values(Ds)){const n=e.find(([,t])=>Ns(t,l));if(n)return n[0]}};function Us(){const l=$.useRelayEnvironment(),e=rn(cn);return n=>$.commitLocalUpdate(l,t=>{new _e(t).delete(n),e(s=>s.delete(n))})}function js(){const l=$.useRelayEnvironment(),[e,n]=me(cn);return me(ze),(t,a,s,i)=>$.commitLocalUpdate(l,r=>{var m,p;const u=new _e(r),g=e.findEntry((c,y)=>c.path===t&&c.line===a);if(g!=null){const[c,y]=g,f=u.get(c);f==null||f.setValues({isPending:!0,createdAt:J().toISOString(),viewerCanReply:!0});return}const d={isPending:!0,createdAt:J().toISOString(),startLine:i==null?null:a,line:i??a,path:t,viewerCanReply:!0};(p=(m=u.get(s))==null?void 0:m.createAndAppendNodeToEdge(r,"reviewThreads",{first:20},"PullRequestReviewThreadConnection","PullRequestReviewThreadEdge","PullRequestReviewThread",d))==null||p.then(({nodeId:c,node:y})=>{n(f=>f.set(c,d))})})}const mt={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommentThreadPullRequestFragment",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:30}],concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"}],type:"PullRequest",abstractKey:null};mt.hash="aa1f6a4d5384a0133128bd587d5501f7";const gt=function(){var l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"line",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"startLine",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommentThreadPullRequestReviewFragment",selections:[l,{alias:null,args:null,kind:"ScalarField",name:"isResolved",storageKey:null},e,n,{alias:null,args:[{kind:"Literal",name:"first",value:20}],concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[l,n,e,{args:null,kind:"FragmentSpread",name:"CommentFragment"}],storageKey:null}],storageKey:null}],storageKey:"comments(first:20)"},{alias:null,args:null,kind:"ScalarField",name:"viewerCanReply",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanResolve",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanUnresolve",storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],type:"PullRequestReviewThread",abstractKey:null}}();gt.hash="fdad2bca9cc9fa29e9ba28f0528953d1";const pt=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"input"}],e=[{kind:"Variable",name:"input",variableName:"input"}],n={alias:null,args:null,kind:"ScalarField",name:"isResolved",storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"resolveMutationResolveReviewThreadMutation",selections:[{alias:null,args:e,concreteType:"ResolveReviewThreadPayload",kind:"LinkedField",name:"resolveReviewThread",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"thread",plural:!1,selections:[n],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"resolveMutationResolveReviewThreadMutation",selections:[{alias:null,args:e,concreteType:"ResolveReviewThreadPayload",kind:"LinkedField",name:"resolveReviewThread",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"thread",plural:!1,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:"641695ec9879785ab75cf16964a6790c",id:null,metadata:{},name:"resolveMutationResolveReviewThreadMutation",operationKind:"mutation",text:`mutation resolveMutationResolveReviewThreadMutation(
  $input: ResolveReviewThreadInput!
) {
  resolveReviewThread(input: $input) {
    thread {
      isResolved
      id
    }
  }
}
`}}}();pt.hash="f70941499b9849ac6ef09d817901d77e";const Os=pt;function Bs(){const[l,e]=$.useMutation(Os);return[(n,t)=>l({variables:{input:{threadId:n}},onCompleted:t}),e]}const yt=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"input"}],e=[{kind:"Variable",name:"input",variableName:"input"}],n={alias:null,args:null,kind:"ScalarField",name:"isResolved",storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"unresolveMutationResolveReviewThreadMutation",selections:[{alias:null,args:e,concreteType:"UnresolveReviewThreadPayload",kind:"LinkedField",name:"unresolveReviewThread",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"thread",plural:!1,selections:[n],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"unresolveMutationResolveReviewThreadMutation",selections:[{alias:null,args:e,concreteType:"UnresolveReviewThreadPayload",kind:"LinkedField",name:"unresolveReviewThread",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"thread",plural:!1,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:"902dd181485f550cd286b893d80a18b4",id:null,metadata:{},name:"unresolveMutationResolveReviewThreadMutation",operationKind:"mutation",text:`mutation unresolveMutationResolveReviewThreadMutation(
  $input: UnresolveReviewThreadInput!
) {
  unresolveReviewThread(input: $input) {
    thread {
      isResolved
      id
    }
  }
}
`}}}();yt.hash="97e6df83e28c50be44d194ed35693ced";const Vs=yt;function zs(){const[l,e]=$.useMutation(Vs);return[(n,t)=>l({variables:{input:{threadId:n}},onCompleted:t}),e]}const Hs=gt,Gs=mt;function Qs({reviewThread:l,pr:e}){var D,O,C,_,E;const n=$.useFragment(Hs,l),t=$.useFragment(Gs,e),a=pe(G((O=(D=t.reviews)==null?void 0:D.edges)==null?void 0:O.map(w=>w==null?void 0:w.node)).map(w=>w.state==null||w.state==="PENDING"));console.log(a);const s=b.useRef(null),[i,r]=b.useState(!1),[u,g,d]=on(n.isResolved,n.isResolved?12:16),m=Va(),p=Jl(),c=Us(),y=b.useCallback(()=>{var A,B;const w=(A=s==null?void 0:s.current)==null?void 0:A.getMarkdown();w!=null&&(m(w,n.id),(B=s==null?void 0:s.current)==null||B.setMarkdown(""))},[n.id,m]),[f,k]=Bs(),[K,P]=zs(),[v,S]=b.useState(!0),L=G((_=(C=n.comments)==null?void 0:C.edges)==null?void 0:_.map(w=>w==null?void 0:w.node)),F=!n.isPending&&o(ae,{size:n.isResolved?"compact-xs":"compact-sm",variant:"default",disabled:!(n.viewerCanResolve||n.viewerCanUnresolve),loading:k||P,onClick:()=>{n.isResolved?(K(n.id),d(!1)):(f(n.id),d(!0))},children:R(U,{gap:"xxxs",children:[o(Pa,{stroke:1,size:16}),n.isResolved?"Resolved":"Resolve"]})}),T=n.viewerCanReply&&!u,M=tn(L);let q=null;return M!=null&&(M.startLine!=null?q=`${L.length} comment(s) on lines ${M.startLine}-${(E=tn(L))==null?void 0:E.line}`:q=`${L.length} comment(s) on line ${M.line}`),n.isPending&&(n.startLine!=null?q=`are commenting on lines ${n.startLine}-${n.line}`:q=`are commenting on line ${n.line}`),R(X,{withBorder:!0,radius:0,className:"comment-thread",color:n.isPending?"yellow":void 0,children:[o(X.Section,{withBorder:!0,color:n.isPending?"yellow":void 0,children:R(U,{className:Pe.secondaryText,mx:"sm",my:n.isResolved?2:6,children:[o(H,{size:n.isResolved?"xs":"sm",children:q}),R(U,{align:"center",className:Pe.floatRight,children:[F,!n.isPending&&g]})]})}),R(X.Section,{className:"thread-comment middle",children:[!u&&L.map((w,A)=>o(jn,{comment:w,header:"none",bottomBorder:A!==L.length-1,border:!0},w.id)),T&&R(ce,{gap:0,children:[o(zl,{converterRef:s,onChange:S,instanceId:n.id,m:0}),R(U,{justify:"space-between",m:"xs",mt:"xs",children:[o(ae,{disabled:!n.isPending&&v,onClick:()=>{var w;p(n.id),(w=s==null?void 0:s.current)==null||w.setMarkdown(""),n.isPending&&c(n.id)},size:"compact-sm",variant:"secondary",children:"Cancel"}),R(U,{children:[o(ae,{onClick:()=>r(!0),size:"compact-sm",variant:"secondary",disabled:v,children:"Suggest changes"}),o(ae,{onClick:()=>y(),size:"compact-sm",disabled:v,children:"Save"})]})]})]})]})]})}function Ws(l){return console.log(l),o(Ln,{children:o(Qs,{...l})})}const fn=new Worker(new URL(""+new URL("highlightWorker-D3ItMxCH.js",import.meta.url).href,import.meta.url),{type:"module"}),ft=(l,e)=>{const n={color:l.color||e};return l.fontStyle&&(l.fontStyle&en.Italic&&(n.fontStyle="italic"),l.fontStyle&en.Bold&&(n.fontWeight="bold"),l.fontStyle&en.Underline&&(n.textDecoration="underline")),n},hn=l=>l.added?te.intralineAdded:l.removed?te.intralineRemoved:"";function Js(l,e,n,t){const a=[];let s=0,i=0,r=0;if(!l||l.length===0){for(const u of e)n==="del"&&u.added||n==="add"&&u.removed||u.value&&a.push(o("span",{className:hn(u),style:t?{color:t}:{},children:u.value},`no-shiki-${r++}`));return a}for(const u of e){if(n==="del"&&u.added||n==="add"&&u.removed)continue;let g=u.value;for(;g.length>0;){if(s>=l.length){g&&a.push(o("span",{className:hn(u),style:t?{color:t}:{},children:g},`trailing-${r++}`));break}const d=l[s],p=(d.content||"").substring(i);if(p.length===0){s++,i=0;continue}const c=Math.min(p.length,g.length),y=p.substring(0,c);y&&a.push(o("span",{style:ft(d,t),className:hn(u),children:y},`${r++}-${s}-${i}`)),i+=c,g=g.substring(c)}}return a}function Xs(l){const e=l.split(`
`),n=new Map;let t=[],a=-1;for(const[s,i]of e.entries())i.startsWith("@@")?(t.length>0&&a!==-1&&n.set(a,t.join(`
`)),t=[i],a=s):t.push(i);return t.length>0&&a!==-1&&n.set(a,t.join(`
`)),n}function Ys(l,e){var g,d,m;const n=l.split(`
`),t=[];let a,s=0,i=0;if(n.length>0&&n[0].startsWith("@@")){const p=/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@(.*)/.exec(n[0]);p&&(s=parseInt(p[1],10),i=parseInt(p[3],10),a=p[5]?p[5].trim():void 0)}let r=s,u=i;for(let p=1;p<n.length;p++){const c=n[p];c.startsWith("+")?t.push({oldNumber:null,newNumber:u++,type:"add",content:c.slice(1)}):c.startsWith("-")?t.push({oldNumber:r++,newNumber:null,type:"del",content:c.slice(1)}):c.startsWith(" ")?t.push({oldNumber:r++,newNumber:u++,type:"context",content:c.slice(1)}):(c.startsWith("\\")||c.trim()==="")&&c.trim()===""&&((g=n[p-1])!=null&&g.startsWith("+")||(d=n[p-1])!=null&&d.startsWith("-")||(m=n[p-1])!=null&&m.startsWith(" "))}return{lines:t,lineStart:e,header:a}}const Zs=dt;function ei({patch:l,fileName:e,pr:n}){var M,q,D,O;const{colorScheme:t}=Wt(),[a,s]=mn({}),{ref:i}=vs({rootMargin:"1000px"}),r=!0,u=$.useFragment(Zs,n),g=b.useMemo(()=>{if(!l)return[];const C=Xs(l);return Array.from(C.entries()).map(([_,E])=>Ys(E,_))},[r,l]),d=b.useMemo(()=>new Set(g.map(C=>`${e}_${C.lineStart}`)),[g,e,r]),[m,p]=b.useState(!1),[c,y]=mn([null,null]),[f,k]=mn(new Set),K=js(),P=b.useCallback(()=>{p(!1),y([null,null])},[y]),v=b.useCallback(C=>{var E,w;const _=parseInt((w=(E=C.target)==null?void 0:E.parentElement)==null?void 0:w.getAttribute("data-line"));p(!0),y(A=>[_,A[1]]),window.addEventListener("mouseup",P)},[y,P]),S=G((O=(D=(q=(M=u==null?void 0:u.reviewThreads)==null?void 0:M.edges)==null?void 0:q.map(C=>C==null?void 0:C.node))==null?void 0:D.flat())==null?void 0:O.filter(C=>C!=null&&(C==null?void 0:C.path)==e)).reduce((C,_)=>{var A;const E=_.line,w=_;return C.has(E)?(A=C.get(E))==null||A.push(w):C.set(E,[w]),C},new Map),L=b.useCallback(C=>{var B,h,j;const _=parseInt((h=(B=C.target)==null?void 0:B.parentElement)==null?void 0:h.getAttribute("data-line"));p(!1),window.removeEventListener("mouseup",P);const[E,w]=c,A=new Set(((j=S.get(_))==null?void 0:j.map(Z=>Z.startLine??_))??[]);E!=null&&(A.has(_??null)||(E==_?K(e,_,u.id):K(e,E,u.id,_),y([null,null]),C.preventDefault&&C.preventDefault()))},[P,S,c,y,K,e,u.id]),F=b.useCallback(C=>{var E,w;const _=parseInt((w=(E=C.target)==null?void 0:E.parentElement)==null?void 0:w.getAttribute("data-line"));m&&y(A=>[A[0],_])},[y,m]);b.useEffect(()=>{g.length!==0&&g.forEach(({lines:C,lineStart:_})=>{const E=C.map(w=>w.content);if(E.length>0){const w=$s(e)||"plaintext";fn.postMessage({type:"highlight",id:`${e}_${_}`,code:E.join(`
`),lang:w,dark:t==="dark"})}})},[e,t,r,g]),b.useEffect(()=>{const C=_=>{_.data.type==="result"&&d.has(_.data.id)&&s(E=>({...E,[_.data.id]:_.data.tokens}))};return fn.addEventListener("message",C),()=>fn.removeEventListener("message",C)},[d,s]);const T=b.useCallback(C=>{var w,A;const _=(A=(w=C.target)==null?void 0:w.parentElement)==null?void 0:A.getAttribute("data-line");if(_==null)return;const E=parseInt(_);k(B=>{B.has(E)?B.delete(E):B.add(E)})},[k]);return o("div",{ref:i,children:g.map(C=>{const _=a[`${e}_${C.lineStart}`],E=_==null?void 0:_.fg;return R("div",{children:[C.header&&o("div",{className:te.blockHeader,children:C.header}),o("table",{className:te.fileTable,children:o("tbody",{children:C.lines.map((w,A)=>{var W,V;const B=(W=_==null?void 0:_.tokens)==null?void 0:W[A];let h=null,j=!1;w.type==="del"&&A+1<C.lines.length&&C.lines[A+1].type==="add"?(h=al(w.content,C.lines[A+1].content),j=!0):w.type==="add"&&A>0&&C.lines[A-1].type==="del"&&(h=al(C.lines[A-1].content,w.content),j=!0);const Z=(w.type==="add"||w.type==="del")&&j&&h;return R(Ee,{children:[R("tr",{className:qe(w.type==="add"&&te.addedLine,w.type==="del"&&te.removedLine),"data-line":w.newNumber,children:[o("td",{className:qe(te.lineNumber,S.has(w.newNumber)&&te.lineNumberComment),onClick:T,children:w.oldNumber??""}),o("td",{className:qe(te.lineNumber,te.lineNumberRight,S.has(w.newNumber)&&te.lineNumberComment),"data-line":w.newNumber,onMouseDown:v,onMouseEnter:F,onMouseUp:L,onClick:T,children:w.newNumber??""}),o("td",{className:qe(te.codeCell,w.type==="context"&&te.contextLine),children:Z?Js(B,h,w.type,E):B&&B.length>0?B.map((ue,be)=>o("span",{style:ft(ue,E),children:ue.content},be)):o("span",{style:{whiteSpace:"pre-wrap",color:E||"inherit"},children:w.content})})]},`${C.lineStart}_${w.oldNumber}_${w.newNumber}`),f.has(w.newNumber)&&((V=S.get(w.newNumber))==null?void 0:V.map(ue=>o("tr",{className:"comment-container",children:o("td",{colSpan:3,children:o(Ws,{pr:u,reviewThread:ue})})},ue.id)))]})})})})]},`${e}_${C.lineStart}`)})})}const ni=ut,li=ot,ti=rt;function ai(l){return o(b.Suspense,{fallback:o(Kn,{}),children:o(si,{...l})})}function si({pr:l,repo:e,commit:n,compareData:t}){var m,p;const a=$.useFragment(ni,l),s=$.useFragment(li,e),i=$.useFragment(ti,n),r=pe((m=i.parents.edges)==null?void 0:m.map(c=>c==null?void 0:c.node)),[u,g,d]=on();return R(X,{className:"file-header",mb:"md",withBorder:!0,children:[o(X.Section,{inheritPadding:!0,onMouseDown:c=>{c.detail>1&&c.preventDefault()},style:{top:-16},withBorder:!0,py:6,children:R(U,{align:"center",justify:"start",wrap:"nowrap",children:[o(gs,{path:t.filename}),R(H,{style:{whiteSpace:"pre"},children:[" ",R(H,{span:!0,c:"green.8",children:["+",t.additions]})," ",R(H,{span:!0,c:"red.8",children:["-",t.deletions]})]}),R(U,{align:"center",style:{marginLeft:"auto"},gap:"sm",children:[o(cs,{commitOid:i.oid,defaultBranchName:(p=s.defaultBranchRef)==null?void 0:p.name,filename:t.filename,name:s.name,owner:s.owner.login,parentCommitOid:r==null?void 0:r.oid}),g]})]})}),!u&&o(X.Section,{style:{padding:0},children:t.patch==null?o(H,{pl:"sm",children:"No diff for this file"}):o(ei,{fileName:t.filename,patch:t.patch,pr:a})})]},t.filename)}const ii=it,ri=st,oi=at;function sl({owner:l,name:e,commit:n,pr:t,repo:a,baseRef:s}){var k,K,P;const i=$.useFragment(ii,n),r=$.useFragment(ri,a),u=$.useFragment(oi,t),g=Y(_n),d=G(((K=(k=i==null?void 0:i.parents)==null?void 0:k.edges)==null?void 0:K.map(v=>v==null?void 0:v.node))??[]),m=pe(d),p=bl(l,e,s,i.oid,!g||m!=null),c=b.useRef(null),[y,f]=on();return g&&(d==null?void 0:d.length)>1?o(kn,{className:"commit-header",ref:c,variant:"info",children:i.message}):R(Ee,{children:[g?o(kn,{className:"commit-header",ref:c,variant:"info",children:R(U,{children:[R("div",{children:["Commit: ",i.messageHeadline," -"," ",R("span",{className:Pe.colorSuccess,children:["+",i.additions]})," ",R("span",{className:Pe.colorDanger,children:["-",i.deletions]})]}),f]})}):null,!y&&((P=p==null?void 0:p.files)==null?void 0:P.map(v=>o(ai,{commit:i,compareData:v,pr:u,repo:r},v.filename)))]})}const ui=tt,di=lt,ci=nt;function mi({owner:l,name:e,pr:n,repo:t}){var k,K,P;const a=$.useFragment(ui,n),s=$.useFragment(ci,t),i=Y(Aa),r=Y(Ia),u=Y(_n),g=bl(l,e,i==null?void 0:i.oid,r==null?void 0:r.headOid),d=$.useLazyLoadQuery(di,{ids:(g==null?void 0:g.commits.map(v=>v.node_id))??(r==null?void 0:r.nodeIds)??[]},{fetchPolicy:r==null&&i==null?"store-only":"store-or-network",fetchKey:`${r==null?void 0:r.headOid}...${i==null?void 0:i.oid}`})??null,m=G((k=a.commits.edges)==null?void 0:k.map(v=>{var S;return(S=v==null?void 0:v.node)==null?void 0:S.commit})),p=r==null?m:d.nodes??[],c=(((K=a.commits)==null?void 0:K.totalCount)??0)-p.length,y=Fl(p);if(y==null)return null;if(!u)return o(sl,{baseRef:(i==null?void 0:i.oid)??(r==null?void 0:r.baseRef)??((P=a.baseRef)==null?void 0:P.name),commit:y,name:e,owner:l,pr:a,repo:s});const f=p.map(v=>{var L,F;if(v==null||s==null)return null;const S=pe((F=(L=v.parents)==null?void 0:L.edges)==null?void 0:F.map(T=>T==null?void 0:T.node));return o(sl,{baseRef:(i==null?void 0:i.oid)??(S==null?void 0:S.oid),commit:v,name:e,owner:l,pr:a,repo:s},v.id)});return R(Ee,{children:[c>0&&o(kn,{variant:"warning",children:R("span",{children:[c," more commits and pagination is not implemented!"]})}),f]})}function gi(l){return o(Ln,{children:o(mi,{...l})})}const ht=function(){var l={defaultValue:null,kind:"LocalArgument",name:"id"},e={defaultValue:null,kind:"LocalArgument",name:"includeTeam"},n=[{kind:"Variable",name:"id",variableName:"id"}],t={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},u=[{kind:"Literal",name:"first",value:30}],g={alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},d={kind:"InlineFragment",selections:[a],type:"Node",abstractKey:"__isNode"},m={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[t,g,d],storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},c=[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},r];return{fragment:{argumentDefinitions:[l,e],kind:"Fragment",metadata:null,name:"SummaryPanelFragment2",selections:[{alias:null,args:n,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"SummaryPanelFragment"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[e,l],kind:"Operation",name:"SummaryPanelFragment2",selections:[{alias:null,args:n,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[t,a,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"mergeable",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"closed",storageKey:null},s,i,{alias:null,args:null,kind:"ScalarField",name:"viewerCanMergeAsAdmin",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"number",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isDraft",storageKey:null},r,{alias:null,args:null,kind:"ScalarField",name:"mergeStateStatus",storageKey:null},{alias:null,args:u,concreteType:"IssueCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"IssueCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"IssueComment",kind:"LinkedField",name:"node",plural:!1,selections:[s,a],storageKey:null}],storageKey:null}],storageKey:"comments(first:30)"},{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"baseRef",plural:!1,selections:[{alias:null,args:null,concreteType:"BranchProtectionRule",kind:"LinkedField",name:"branchProtectionRule",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"requiresCodeOwnerReviews",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"requiredApprovingReviewCount",storageKey:null},a],storageKey:null},a],storageKey:null},m,{alias:null,args:u,concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[r,i,m,a],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"},{alias:null,args:u,concreteType:"ReviewRequestConnection",kind:"LinkedField",name:"reviewRequests",plural:!1,selections:[{alias:null,args:null,concreteType:"ReviewRequestEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"ReviewRequest",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"asCodeOwner",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"requestedReviewer",plural:!1,selections:[t,{kind:"InlineFragment",selections:[g],type:"User",abstractKey:null},{condition:"includeTeam",kind:"Condition",passingValue:!0,selections:[{kind:"InlineFragment",selections:[p],type:"Team",abstractKey:null}]},d],storageKey:null},a],storageKey:null}],storageKey:null}],storageKey:"reviewRequests(first:30)"},{alias:"lastCommit",args:[{kind:"Literal",name:"last",value:1}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,concreteType:"StatusCheckRollup",kind:"LinkedField",name:"statusCheckRollup",plural:!1,selections:[r,{alias:null,args:[{kind:"Literal",name:"first",value:50}],concreteType:"StatusCheckRollupContextConnection",kind:"LinkedField",name:"contexts",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null},{alias:null,args:null,concreteType:"CheckRunStateCount",kind:"LinkedField",name:"checkRunCountsByState",plural:!0,selections:c,storageKey:null},{alias:null,args:null,concreteType:"StatusContextStateCount",kind:"LinkedField",name:"statusContextCountsByState",plural:!0,selections:c,storageKey:null},{alias:null,args:null,concreteType:"StatusCheckRollupContextEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[t,{kind:"InlineFragment",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"detailsUrl",storageKey:null},p,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"conclusion",storageKey:null}],type:"CheckRun",abstractKey:null},{kind:"InlineFragment",selections:[a,r,{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"context",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"avatarUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"targetUrl",storageKey:null}],type:"StatusContext",abstractKey:null},d],storageKey:null}],storageKey:null}],storageKey:"contexts(first:50)"},a],storageKey:null},a],storageKey:null},a],storageKey:null}],storageKey:null}],storageKey:"commits(last:1)"}],type:"PullRequest",abstractKey:null}],storageKey:null}]},params:{cacheID:"bc50d3613f650e98dad800e6d0479b4e",id:null,metadata:{},name:"SummaryPanelFragment2",operationKind:"query",text:`query SummaryPanelFragment2(
  $includeTeam: Boolean!
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...SummaryPanelFragment
    id
  }
}

fragment PRStatusBadgeFragment on PullRequest {
  state
  isDraft
}

fragment PRTitleFragment on PullRequest {
  title
  body
  number
  isDraft
  state
  mergeStateStatus
  ...PRStatusBadgeFragment
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
  closed
  body
  createdAt
  viewerCanMergeAsAdmin
  ...PRTitleFragment
  baseRef {
    branchProtectionRule {
      requiresCodeOwnerReviews
      requiredApprovingReviewCount
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
`}}}();ht.hash="13cfaa9eaf6ee99f5d4d75d5c669c431";const kt=function(){var l={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},e=[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],n={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:e,storageKey:null},t=[{kind:"Literal",name:"first",value:30}],a={alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},i=[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},a],r={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{kind:"RootArgument",name:"includeTeam"}],kind:"Fragment",metadata:{refetch:{connection:null,fragmentPathInResult:["node"],operation:ht,identifierInfo:{identifierField:"id",identifierQueryVariableName:"id"}}},name:"SummaryPanelFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"mergeable",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"closed",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},l,{alias:null,args:null,kind:"ScalarField",name:"viewerCanMergeAsAdmin",storageKey:null},{args:null,kind:"FragmentSpread",name:"PRTitleFragment"},{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"baseRef",plural:!1,selections:[{alias:null,args:null,concreteType:"BranchProtectionRule",kind:"LinkedField",name:"branchProtectionRule",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"requiresCodeOwnerReviews",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"requiredApprovingReviewCount",storageKey:null}],storageKey:null}],storageKey:null},n,{alias:null,args:t,concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[a,l,n],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"},{alias:null,args:t,concreteType:"ReviewRequestConnection",kind:"LinkedField",name:"reviewRequests",plural:!1,selections:[{alias:null,args:null,concreteType:"ReviewRequestEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"ReviewRequest",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"asCodeOwner",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"requestedReviewer",plural:!1,selections:[{kind:"InlineFragment",selections:e,type:"User",abstractKey:null},{condition:"includeTeam",kind:"Condition",passingValue:!0,selections:[{kind:"InlineFragment",selections:[s],type:"Team",abstractKey:null}]}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"reviewRequests(first:30)"},{alias:"lastCommit",args:[{kind:"Literal",name:"last",value:1}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,concreteType:"StatusCheckRollup",kind:"LinkedField",name:"statusCheckRollup",plural:!1,selections:[a,{alias:null,args:[{kind:"Literal",name:"first",value:50}],concreteType:"StatusCheckRollupContextConnection",kind:"LinkedField",name:"contexts",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null},{alias:null,args:null,concreteType:"CheckRunStateCount",kind:"LinkedField",name:"checkRunCountsByState",plural:!0,selections:i,storageKey:null},{alias:null,args:null,concreteType:"StatusContextStateCount",kind:"LinkedField",name:"statusContextCountsByState",plural:!0,selections:i,storageKey:null},{alias:null,args:null,concreteType:"StatusCheckRollupContextEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[r,u,{alias:null,args:null,kind:"ScalarField",name:"detailsUrl",storageKey:null},s,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"conclusion",storageKey:null}],type:"CheckRun",abstractKey:null},{kind:"InlineFragment",selections:[r,u,a,{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"context",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"avatarUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"targetUrl",storageKey:null}],type:"StatusContext",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:"contexts(first:50)"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"commits(last:1)"},u],type:"PullRequest",abstractKey:null}}();kt.hash="13cfaa9eaf6ee99f5d4d75d5c669c431";const vt=function(){var l={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PRTitleFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},l,{alias:null,args:null,kind:"ScalarField",name:"number",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isDraft",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mergeStateStatus",storageKey:null},{args:null,kind:"FragmentSpread",name:"PRStatusBadgeFragment"},{alias:null,args:[{kind:"Literal",name:"first",value:30}],concreteType:"IssueCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"IssueCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"IssueComment",kind:"LinkedField",name:"node",plural:!1,selections:[l],storageKey:null}],storageKey:null}],storageKey:"comments(first:30)"}],type:"PullRequest",abstractKey:null}}();vt.hash="c563ed8283e34fa9818e891c36a72247";const Rt=/Stack from \[ghstack\].+?\(oldest at bottom\):\r?\n(?:\*[^\n]+\r?\n?)+/gm,Ft=/#[0-9]{1,}/g;function pi(l){var n;const e=l.match(Rt);return((n=e==null?void 0:e.flatMap(t=>t.match(Ft)??[]))==null?void 0:n.map(t=>parseInt(t.slice(1))))??[]}function yi(l){const e=l.match(Rt);return e&&e.length>0?l.replace(e[0],""):l}const fi=/(?:\*[\n]+\n)+This stack of pull requests is manged by \[Graphite\]/gm;function hi(l){var n;const e=l.match(fi);return((n=e==null?void 0:e.flatMap(t=>t.match(Ft)??[]))==null?void 0:n.map(t=>parseInt(t.slice(1))))??[]}const wt={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PRStatusBadgeFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isDraft",storageKey:null}],type:"PullRequest",abstractKey:null};wt.hash="e3aa488abf6e8c6299c2ed67a962d20c";const ki=wt;function vi({pr:l}){const{state:e,isDraft:n}=$.useFragment(ki,l);let t=null,a=null;if(n)t="Draft",a="light";else if(e==="MERGED")t="Merged",a="violet";else if(e==="CLOSED")t="Closed",a="red";else return;return o(Te,{variant:"light",color:a,ml:"sm",radius:"sm",children:t})}const Ri=vt;function Fi(l,e,n){const t=Yt();return Zt({queries:n.map(s=>({queryFn:()=>t(`repos/${l}/${e}/pulls/${s}`),queryKey:["GetPR",l,e,s],staleTime:1/0}))})}function wi({pr:l}){var f,k,K,P;const e=$.useFragment(Ri,l),n=pi(e.body)??((P=tn((K=(k=(f=e.comments.edges)==null?void 0:f.map(v=>{var S;return(S=v==null?void 0:v.node)==null?void 0:S.body}))==null?void 0:k.map(v=>v==null?null:hi(v)))==null?void 0:K.filter(v=>v!=null)))==null?void 0:P.reverse())??[],a=Sl()["*"],[s,i]=(a==null?void 0:a.split("/"))??[],u=Fi(s,i,n).map(v=>v.data).filter(v=>v!=null),g=n==null?void 0:n.findIndex(v=>v===e.number),d=n.length===0?null:`[${g+1}/${n.length}]`,m=Jt(),[p,c]=b.useState(!1),y=R(Tl,{size:"md",lineClamp:1,children:[d,e.title,o(vi,{pr:e})]});return n.length===0?y:R(re,{opened:p,onDismiss:()=>c(!1),onChange:c,children:[o(re.Target,{children:R(ae,{variant:"subtle",p:0,color:"default",onClick:()=>c(v=>!v),children:[d&&o(Xt,{}),y]})}),o(re.Dropdown,{children:o(ln,{h:500,children:o(ce,{align:"flex-start",gap:"xs",children:u.map((v,S)=>o(ae,{onClick:()=>{c(L=>!L),setTimeout(()=>{m(`/review/${s}/${i}/${v.number}`)},0)},variant:"subtle",children:R(ce,{gap:0,children:["[",S+1,"/",n.length,"]",v.title,o(U,{children:v.state})]})},v.number))})})})]})}const Ci=kt;function bi(l){return o(b.Suspense,{fallback:o(Kn,{}),children:o(Si,{...l})})}function il(l){if(l==null)return 0;if(l.__typename==="CheckRun")return l.conclusion==="FAILURE"?50:l.conclusion==="TIMED_OUT"||l.conclusion==="STARTUP_FAILURE"?40:l.status==="IN_PROGRESS"?30:l.status!=="COMPLETED"?20:10;if(l.__typename==="StatusContext")switch(l.state){case"FAILURE":return 50;case"ERROR":return 40;case"SUCCESS":return 10;default:return 20}return 0}function rl(l){switch(l){case"CHANGES_REQUESTED":return 50;case"APPROVED":return 40;case"COMMENTED":return 30;default:return 10}}function Si({pr:l}){var y,f,k,K,P,v,S,L,F,T,M,q,D,O,C,_,E,w,A,B,h,j,Z,W,V,ue,be,Ie,Ae,ge,Bn;console.log("asdfs");const[e]=$.useRefetchableFragment(Ci,l),n=yi(e.body).trim(),t=(f=pe(G((y=e.lastCommit.edges)==null?void 0:y.map(x=>x==null?void 0:x.node))))==null?void 0:f.commit,a=G((P=(K=(k=t==null?void 0:t.statusCheckRollup)==null?void 0:k.contexts)==null?void 0:K.edges)==null?void 0:P.map(x=>x==null?void 0:x.node)),s=Y(Pn),i=(((F=pe((L=(S=(v=t==null?void 0:t.statusCheckRollup)==null?void 0:v.contexts)==null?void 0:S.checkRunCountsByState)==null?void 0:L.filter(x=>x.state==="SUCCESS")))==null?void 0:F.count)??0)+(((q=pe((M=(T=t==null?void 0:t.statusCheckRollup)==null?void 0:T.contexts.statusContextCountsByState)==null?void 0:M.filter(x=>x.state==="SUCCESS")))==null?void 0:q.count)??0),r=((O=(D=t==null?void 0:t.statusCheckRollup)==null?void 0:D.contexts)==null?void 0:O.totalCount)===i,[u,g]=on(r),d=new Map;(_=(C=e.reviewRequests)==null?void 0:C.edges)==null||_.reduce((x,N)=>{var ye,Se,De,Ne,$e,Ue,Vn,zn,Hn,Gn,Qn,Wn;const le=(Se=(ye=N==null?void 0:N.node)==null?void 0:ye.requestedReviewer)==null?void 0:Se.login;le!=null&&x.set(le,{participated:!1,required:((De=x.get(le))==null?void 0:De.required)||((((Ne=N==null?void 0:N.node)==null?void 0:Ne.asCodeOwner)&&!e.viewerCanMergeAsAdmin&&((Ue=($e=e.baseRef)==null?void 0:$e.branchProtectionRule)==null?void 0:Ue.requiresCodeOwnerReviews))??!1)});const z=(zn=(Vn=N==null?void 0:N.node)==null?void 0:Vn.requestedReviewer)==null?void 0:zn.name;return z!=null&&x.set(z,{participated:!1,required:((Hn=x.get(z))==null?void 0:Hn.required)||((((Gn=N==null?void 0:N.node)==null?void 0:Gn.asCodeOwner)&&!e.viewerCanMergeAsAdmin&&((Wn=(Qn=e.baseRef)==null?void 0:Qn.branchProtectionRule)==null?void 0:Wn.requiresCodeOwnerReviews))??!1),isTeam:!0}),x},d),(w=(E=e.reviews)==null?void 0:E.edges)==null||w.reduce((x,N)=>{var ye,Se,De,Ne,$e,Ue;const le=(Se=(ye=N==null?void 0:N.node)==null?void 0:ye.author)==null?void 0:Se.login;if(le==null)return x;const z=x.get(le);return x.set(le,{participated:!0,required:(z==null?void 0:z.required)??!1}),(z==null||z.date==null||z.date<J((De=N==null?void 0:N.node)==null?void 0:De.createdAt)&&((Ne=N==null?void 0:N.node)==null?void 0:Ne.state)!=="COMMENTED")&&x.set(le,{participated:!0,required:(z==null?void 0:z.required)??!1,state:(($e=N==null?void 0:N.node)==null?void 0:$e.state)??(z==null?void 0:z.state),date:J((Ue=N==null?void 0:N.node)==null?void 0:Ue.createdAt)}),x},d);const m=Array.from(d.entries());m.filter(([x,N])=>x!=s).sort(([x,{state:N}],[le,{state:z}])=>rl(N)-rl(z)),console.log("asdfsdf"),console.log(a);const p=o(ce,{style:{minHeight:30,maxHeight:200,overflow:"scroll",marginTop:16},children:G(a).sort((x,N)=>il(N)-il(x)).map(x=>{if(x.__typename!=="CheckRun"&&x.__typename!=="StatusContext")return null;const N=x.__typename==="CheckRun"?`${x.name}`:x.__typename==="StatusContext"?`${x.context}: ${x.description}`:"",le=x.__typename==="CheckRun"&&x.conclusion==="SUCCESS"||x.__typename==="StatusContext"&&x.state==="SUCCESS",z=x.__typename==="CheckRun"&&x.status==="IN_PROGRESS"||x.__typename==="StatusContext"&&x.state==="PENDING",ye=x.__typename==="StatusContext"?x.avatarUrl:null,Se=x.__typename==="StatusContext"?x.targetUrl:x.__typename==="CheckRun"?x.detailsUrl:null;return o(ce,{children:R(U,{align:"center",justify:"space-between",children:[R(U,{gap:"xs",children:[le?o(vl,{color:"var(--mantine-color-green-8)",size:16}):z?o(Ka,{color:"var(--mantine-color-yellow-8)",size:16}):o(_a,{color:"var(--mantine-color-red-8)",size:16}),ye!=null&&o("img",{src:ye,style:{width:16,marginRight:4,objectFit:"contain"}}),N,x.isRequired&&o(Te,{variant:"light",children:"Required"})]}),o("a",{href:Se,rel:"noreferrer",target:"_blank",children:"Details"})]})},x.id)})}),c=R(X.Section,{withBorder:!0,inheritPadding:!0,p:"xs",children:[R(U,{justify:"space-between",children:[R(U,{children:[o(Te,{radius:"sm",color:e.mergeable==="MERGEABLE"?"green.8":e.mergeable==="CONFLICTING"?"red":"gray",variant:"light",style:{marginRight:8},children:!e.closed&&e.mergeable==="MERGEABLE"?"Mergeable":e.mergeable==="CONFLICTING"?"Merge Conflicts":"Unknown merge state"}),(((B=(A=t==null?void 0:t.statusCheckRollup)==null?void 0:A.contexts)==null?void 0:B.totalCount)??0)>0&&R(Te,{radius:"sm",color:((h=t==null?void 0:t.statusCheckRollup)==null?void 0:h.state)==="SUCCESS"?"green.8":((j=t==null?void 0:t.statusCheckRollup)==null?void 0:j.state)==="FAILURE"?"red":"yellow.7",variant:"light",style:{marginRight:8},children:["CI (",i,"/",(W=(Z=t==null?void 0:t.statusCheckRollup)==null?void 0:Z.contexts)==null?void 0:W.totalCount,")"]})]}),g]}),!u&&p]});return R(X,{mb:"md",withBorder:!0,px:"md",children:[R(X.Section,{inheritPadding:!0,p:"xs",withBorder:!0,children:[R(U,{justify:"space-between",align:"center",wrap:"nowrap",children:[o(wi,{pr:e}),o(U,{justify:"flex-end",align:"center",children:o(Cl,{component:"a",variant:"default",href:e.url,target:"_blank",children:o(ea,{stroke:1})})})]}),R(H,{size:"sm",lineClamp:1,span:!0,children:[o(Oe,{from:J(e.createdAt),prefix:"Created "})," by"," ",o(he,{login:(V=e.author)==null?void 0:V.login,size:"sm"})]})]}),o(X.Section,{withBorder:!0,inheritPadding:!0,py:"xs",children:o(Rn,{children:n==null||wl(n)?"*No description provided*":n})}),o(X.Section,{withBorder:!0,inheritPadding:!0,p:"xs",children:R(U,{children:[o(Tl,{size:"sm",children:"Reviewers"}),R(U,{gap:0,justify:"space-between",children:[o(U,{children:Array.from(m).map(([x,{participated:N,required:le,state:z}])=>o(he,{size:"sm",login:x,reviewState:z??(N?"COMMENTED":"requested"),required:le},x))}),R(U,{gap:0,children:[((be=(ue=e.baseRef)==null?void 0:ue.branchProtectionRule)==null?void 0:be.requiresCodeOwnerReviews)&&e.viewerCanMergeAsAdmin&&o(H,{children:"Codeowners are required"}),((Ae=(Ie=e.baseRef)==null?void 0:Ie.branchProtectionRule)==null?void 0:Ae.requiredApprovingReviewCount)!=null&&R(H,{children:["Requires ",(Bn=(ge=e.baseRef)==null?void 0:ge.branchProtectionRule)==null?void 0:Bn.requiredApprovingReviewCount," approvals"]})]})]})]})}),c]})}const Ti=Nl;function Ki(){return o(Ct,{summaryPanel:o(gn,{h:"30vh",mb:"md"}),commitsView:o(gn,{h:"50vh",style:{flexGrow:1}}),sidePanel:o(gn,{h:"80vh"})})}function Pi(){return o(b.Suspense,{fallback:o(Ki,{}),children:o(na,{children:o(_i,{})})})}var Li={name:"1wjgngc",styles:"height:100vh;overflow-y:hidden;flex-wrap:nowrap"};function Ct({summaryPanel:l,commitsView:e,sidePanel:n}){return R(U,{css:Li,gap:"sm",p:"sm",children:[R("div",{id:"commits-container",style:{flexBasis:"60vw",overflowY:"auto",height:"100%"},children:[l,e]}),o("div",{style:{flexBasis:"30vw",flexGrow:1,height:"100%",overflowX:"hidden"},children:n})]})}function _i(){var y,f,k;const e=Sl()["*"],[n,t,a,s,i]=(e==null?void 0:e.split("/"))??[],r=rn(Pn),u=Y(Rl),g=la(),d=$.useLazyLoadQuery(Ti,{owner:n,name:t,id:parseInt(a),includeTeam:g.has(ta.READ_ORG)},{fetchPolicy:"store-and-network"});r(d.viewer.login);const m=(y=d.repository)==null?void 0:y.pullRequest,p=d.repository,c=(k=(f=d.repository)==null?void 0:f.defaultBranchRef)==null?void 0:k.name;return p==null||e==null||m==null||c==null?null:o(Ct,{summaryPanel:o(bi,{pr:m}),commitsView:o(gi,{defaultBranchName:c,name:t,owner:n,pr:m,repo:p}),sidePanel:u==="timeline"&&o(ds,{pr:m})})}function xi(){return o(Pi,{})}const Mi=Object.freeze(Object.defineProperty({__proto__:null,Component:xi},Symbol.toStringTag,{value:"Module"}));export{Mi as P,Ma as c};
//# sourceMappingURL=PRReviewLazy-CZcb7i0L.js.map
