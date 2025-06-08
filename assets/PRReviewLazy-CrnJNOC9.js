const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./MarkdownRenderer-CbB46xux.js","./index-BfonfuaK.js","./index-BCQ-irV0.css","./MarkdownRenderer-BS2aUxlg.css","./MarkdownTextarea-BJXm9WNf.js","./MarkdownTextarea-Cby7Tvsi.css"])))=>i.map(i=>d[i]);
var St=Object.defineProperty;var Tt=(l,e,n)=>e in l?St(l,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[e]=n;var _e=(l,e,n)=>Tt(l,typeof e!="symbol"?e+"":e,n);import{f as Kt,r as b,j as I,a as Ue,u as ne,b as Re,c as an,B as Ke,d as Sn,g as Pt,e as Xe,h as rl,P as re,i as Z,k as sn,l as Lt,p as ol,m as ul,n as dl,o as cl,U as ml,q as gl,s as pl,t as xt,v as _t,w as yl,x as Et,y as qt,z as Mt,S as ln,A as Wn,C as ye,D as It,E as At,F as Dt,G as Nt,H as Fe,M as fl,I as He,J as $,K as pe,L as Tn,N as Y,_ as hl,O as o,Q as Kn,R,T as j,V as ve,W as z,X as Oe,Y as qe,Z as ae,$ as ce,a0 as $t,a1 as X,a2 as G,a3 as ge,a4 as Ge,a5 as jt,a6 as rn,a7 as ee,a8 as tn,a9 as Pn,aa as Ut,ab as Me,ac as Ot,ad as Bt,ae as kl,af as Ln,ag as Vt,ah as vl,ai as zt,aj as Rl,ak as Ht,al as Pe,am as Fl,an as Ee,ao as wl,ap as Gt,aq as Qt,ar as on,as as Wt,at as mn,au as Cl,av as bl,aw as kn,ax as Sl,ay as Tl,az as Jt,aA as Xt,aB as Yt,aC as Zt,aD as ea,aE as na,aF as la,aG as ta,aH as gn}from"./index-BfonfuaK.js";function aa(l,e,n){var t;return n?Array.from(((t=Kt(n,e))==null?void 0:t.querySelectorAll(l))||[]).findIndex(a=>a===n):null}function sa({timeout:l=2e3}={}){const[e,n]=b.useState(null),[t,a]=b.useState(!1),[s,i]=b.useState(null),r=d=>{window.clearTimeout(s),i(window.setTimeout(()=>a(!1),l)),a(d)};return{copy:d=>{"clipboard"in navigator?navigator.clipboard.writeText(d).then(()=>r(!0)).catch(g=>n(g)):n(new Error("useClipboard: navigator.clipboard is not supported"))},reset:()=>{a(!1),n(null),window.clearTimeout(s)},error:e,copied:t}}function ia(){const l=b.useRef(null),[e,n]=b.useState(!1);return{ref:b.useCallback(a=>{var s,i;typeof IntersectionObserver<"u"&&(a&&!l.current?l.current=new IntersectionObserver(r=>n(r.some(u=>u.isIntersecting))):(s=l.current)==null||s.disconnect(),a?(i=l.current)==null||i.observe(a):n(!1))},[]),inViewport:e}}function Kl({style:l,size:e=16,...n}){return I.jsx("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...l,width:Ue(e),height:Ue(e),display:"block"},...n,children:I.jsx("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}Kl.displayName="@mantine/core/AccordionChevron";const ra={timeout:1e3};function Pl(l){const{children:e,timeout:n,value:t,...a}=ne("CopyButton",ra,l),s=sa({timeout:n}),i=()=>s.copy(t);return I.jsx(I.Fragment,{children:e({copy:i,copied:s.copied,...a})})}Pl.displayName="@mantine/core/CopyButton";var Ll={root:"m_3eebeb36",label:"m_9e365f20"};const oa={orientation:"horizontal"},ua=Sn((l,{color:e,variant:n,size:t})=>({root:{"--divider-color":e?Xe(e,l):void 0,"--divider-border-style":n,"--divider-size":Pt(t,"divider-size")}})),xn=Re((l,e)=>{const n=ne("Divider",oa,l),{classNames:t,className:a,style:s,styles:i,unstyled:r,vars:u,color:m,orientation:d,label:g,labelPosition:p,mod:c,...y}=n,f=an({name:"Divider",classes:Ll,props:n,className:a,style:s,classNames:t,styles:i,unstyled:r,vars:u,varsResolver:ua});return I.jsx(Ke,{ref:e,mod:[{orientation:d,"with-label":!!g},c],...f("root"),...y,role:"separator",children:g&&I.jsx(Ke,{component:"span",mod:{position:p},...f("label"),children:g})})});xn.classes=Ll;xn.displayName="@mantine/core/Divider";const[da,we]=rl("Menu component was not found in the tree");var Ce={dropdown:"m_dc9b7c9f",label:"m_9bfac126",divider:"m_efdf90cb",item:"m_99ac2aa1",itemLabel:"m_5476e0d3",itemSection:"m_8b75e504",chevron:"m_b85b0bed"};const ca={},_n=Re((l,e)=>{const{classNames:n,className:t,style:a,styles:s,vars:i,...r}=ne("MenuDivider",ca,l),u=we();return I.jsx(Ke,{ref:e,...u.getStyles("divider",{className:t,style:a,styles:s,classNames:n}),...r})});_n.classes=Ce;_n.displayName="@mantine/core/MenuDivider";const ma={},En=Re((l,e)=>{const{classNames:n,className:t,style:a,styles:s,vars:i,onMouseEnter:r,onMouseLeave:u,onKeyDown:m,children:d,...g}=ne("MenuDropdown",ma,l),p=b.useRef(null),c=we(),y=Z(m,P=>{var T,v;(P.key==="ArrowUp"||P.key==="ArrowDown")&&(P.preventDefault(),(v=(T=p.current)==null?void 0:T.querySelectorAll("[data-menu-item]:not(:disabled)")[0])==null||v.focus())}),f=Z(r,()=>(c.trigger==="hover"||c.trigger==="click-hover")&&c.openDropdown()),k=Z(u,()=>(c.trigger==="hover"||c.trigger==="click-hover")&&c.closeDropdown());return I.jsxs(re.Dropdown,{...g,onMouseEnter:f,onMouseLeave:k,role:"menu","aria-orientation":"vertical",ref:sn(e,p),...c.getStyles("dropdown",{className:t,style:a,styles:s,classNames:n,withStaticClass:!1}),tabIndex:-1,"data-menu-dropdown":!0,onKeyDown:y,children:[c.withInitialFocusPlaceholder&&I.jsx("div",{tabIndex:-1,"data-autofocus":!0,"data-mantine-stop-propagation":!0,style:{outline:0}}),d]})});En.classes=Ce;En.displayName="@mantine/core/MenuDropdown";const[ga,un]=Lt(),pa={},qn=ol((l,e)=>{const{classNames:n,className:t,style:a,styles:s,vars:i,color:r,closeMenuOnClick:u,leftSection:m,rightSection:d,children:g,disabled:p,"data-disabled":c,...y}=ne("MenuItem",pa,l),f=we(),k=un(),P=ul(),{dir:T}=dl(),v=b.useRef(null),w=y,q=Z(w.onClick,()=>{c||(typeof u=="boolean"?u&&f.closeDropdownImmediately():f.closeOnItemClick&&f.closeDropdownImmediately())}),F=r?P.variantColorResolver({color:r,theme:P,variant:"light"}):void 0,K=r?cl({color:r,theme:P}):null,M=Z(w.onKeyDown,E=>{E.key==="ArrowLeft"&&k&&(k.close(),k.focusParentItem())});return I.jsxs(ml,{onMouseDown:E=>E.preventDefault(),...y,unstyled:f.unstyled,tabIndex:f.menuItemTabIndex,...f.getStyles("item",{className:t,style:a,styles:s,classNames:n}),ref:sn(v,e),role:"menuitem",disabled:p,"data-menu-item":!0,"data-disabled":p||c||void 0,"data-mantine-stop-propagation":!0,onClick:q,onKeyDown:gl({siblingSelector:"[data-menu-item]:not([data-disabled])",parentSelector:"[data-menu-dropdown]",activateOnFocus:!1,loop:f.loop,dir:T,orientation:"vertical",onKeyDown:M}),__vars:{"--menu-item-color":K!=null&&K.isThemeColor&&(K==null?void 0:K.shade)===void 0?`var(--mantine-color-${K.color}-6)`:F==null?void 0:F.color,"--menu-item-hover":F==null?void 0:F.hover},children:[m&&I.jsx("div",{...f.getStyles("itemSection",{styles:s,classNames:n}),"data-position":"left",children:m}),g&&I.jsx("div",{...f.getStyles("itemLabel",{styles:s,classNames:n}),children:g}),d&&I.jsx("div",{...f.getStyles("itemSection",{styles:s,classNames:n}),"data-position":"right",children:d})]})});qn.classes=Ce;qn.displayName="@mantine/core/MenuItem";const ya={},Mn=Re((l,e)=>{const{classNames:n,className:t,style:a,styles:s,vars:i,...r}=ne("MenuLabel",ya,l),u=we();return I.jsx(Ke,{ref:e,...u.getStyles("label",{className:t,style:a,styles:s,classNames:n}),...r})});Mn.classes=Ce;Mn.displayName="@mantine/core/MenuLabel";const fa={},In=Re((l,e)=>{const{classNames:n,className:t,style:a,styles:s,vars:i,onMouseEnter:r,onMouseLeave:u,onKeyDown:m,children:d,...g}=ne("MenuSubDropdown",fa,l),p=b.useRef(null),c=we(),y=un(),f=Z(r,y==null?void 0:y.open),k=Z(u,y==null?void 0:y.close);return I.jsx(re.Dropdown,{...g,onMouseEnter:f,onMouseLeave:k,role:"menu","aria-orientation":"vertical",ref:sn(e,p),...c.getStyles("dropdown",{className:t,style:a,styles:s,classNames:n,withStaticClass:!1}),tabIndex:-1,"data-menu-dropdown":!0,children:d})});In.classes=Ce;In.displayName="@mantine/core/MenuSubDropdown";const ha={},An=ol((l,e)=>{const{classNames:n,className:t,style:a,styles:s,vars:i,color:r,leftSection:u,rightSection:m,children:d,disabled:g,"data-disabled":p,closeMenuOnClick:c,...y}=ne("MenuSubItem",ha,l),f=we(),k=un(),P=ul(),{dir:T}=dl(),v=b.useRef(null),w=y,q=r?P.variantColorResolver({color:r,theme:P,variant:"light"}):void 0,F=r?cl({color:r,theme:P}):null,K=Z(w.onKeyDown,O=>{O.key==="ArrowRight"&&(k==null||k.open(),k==null||k.focusFirstItem()),O.key==="ArrowLeft"&&(k!=null&&k.parentContext)&&(k.parentContext.close(),k.parentContext.focusParentItem())}),M=Z(w.onClick,()=>{!p&&c&&f.closeDropdownImmediately()}),E=Z(w.onMouseEnter,k==null?void 0:k.open),D=Z(w.onMouseLeave,k==null?void 0:k.close);return I.jsxs(ml,{onMouseDown:O=>O.preventDefault(),...y,unstyled:f.unstyled,tabIndex:f.menuItemTabIndex,...f.getStyles("item",{className:t,style:a,styles:s,classNames:n}),ref:sn(v,e),role:"menuitem",disabled:g,"data-menu-item":!0,"data-sub-menu-item":!0,"data-disabled":g||p||void 0,"data-mantine-stop-propagation":!0,onMouseEnter:E,onMouseLeave:D,onClick:M,onKeyDown:gl({siblingSelector:"[data-menu-item]:not([data-disabled])",parentSelector:"[data-menu-dropdown]",activateOnFocus:!1,loop:f.loop,dir:T,orientation:"vertical",onKeyDown:K}),__vars:{"--menu-item-color":F!=null&&F.isThemeColor&&(F==null?void 0:F.shade)===void 0?`var(--mantine-color-${F.color}-6)`:q==null?void 0:q.color,"--menu-item-hover":q==null?void 0:q.hover},children:[u&&I.jsx("div",{...f.getStyles("itemSection",{styles:s,classNames:n}),"data-position":"left",children:u}),d&&I.jsx("div",{...f.getStyles("itemLabel",{styles:s,classNames:n}),children:d}),I.jsx("div",{...f.getStyles("itemSection",{styles:s,classNames:n}),"data-position":"right",children:m||I.jsx(Kl,{...f.getStyles("chevron"),size:14})})]})});An.classes=Ce;An.displayName="@mantine/core/MenuSubItem";function xl({children:l,refProp:e}){if(!pl(l))throw new Error("Menu.Sub.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");return we(),I.jsx(re.Target,{refProp:e,popupType:"menu",children:l})}xl.displayName="@mantine/core/MenuSubTarget";const ka={offset:0,position:"right-start",transitionProps:{duration:0}};function Ie(l){const{children:e,closeDelay:n,...t}=ne("MenuSub",ka,l),a=xt(),[s,{open:i,close:r}]=_t(!1),u=un(),{openDropdown:m,closeDropdown:d}=yl({open:i,close:r,closeDelay:n,openDelay:0}),g=()=>window.setTimeout(()=>{var c,y;(y=(c=document.getElementById(`${a}-dropdown`))==null?void 0:c.querySelectorAll("[data-menu-item]:not([data-disabled])")[0])==null||y.focus()},16),p=()=>window.setTimeout(()=>{var c;(c=document.getElementById(`${a}-target`))==null||c.focus()},16);return I.jsx(ga,{value:{opened:s,close:d,open:m,focusFirstItem:g,focusParentItem:p,parentContext:u},children:I.jsx(re,{opened:s,...t,withinPortal:!1,id:a,children:e})})}Ie.extend=l=>l;Ie.displayName="@mantine/core/MenuSub";Ie.Target=xl;Ie.Dropdown=In;Ie.Item=An;const va={refProp:"ref"},_l=b.forwardRef((l,e)=>{const{children:n,refProp:t,...a}=ne("MenuTarget",va,l);if(!pl(n))throw new Error("Menu.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");const s=we(),i=n.props,r=Z(i.onClick,()=>{s.trigger==="click"?s.toggleDropdown():s.trigger==="click-hover"&&(s.setOpenedViaClick(!0),s.opened||s.openDropdown())}),u=Z(i.onMouseEnter,()=>(s.trigger==="hover"||s.trigger==="click-hover")&&s.openDropdown()),m=Z(i.onMouseLeave,()=>{(s.trigger==="hover"||s.trigger==="click-hover"&&!s.openedViaClick)&&s.closeDropdown()});return I.jsx(re.Target,{refProp:t,popupType:"menu",ref:e,...a,children:b.cloneElement(n,{onClick:r,onMouseEnter:u,onMouseLeave:m,"data-expanded":s.opened?!0:void 0})})});_l.displayName="@mantine/core/MenuTarget";const Ra={trapFocus:!0,closeOnItemClick:!0,withInitialFocusPlaceholder:!0,clickOutsideEvents:["mousedown","touchstart","keydown"],loop:!0,trigger:"click",openDelay:0,closeDelay:100,menuItemTabIndex:-1};function Q(l){const e=ne("Menu",Ra,l),{children:n,onOpen:t,onClose:a,opened:s,defaultOpened:i,trapFocus:r,onChange:u,closeOnItemClick:m,loop:d,closeOnEscape:g,trigger:p,openDelay:c,closeDelay:y,classNames:f,styles:k,unstyled:P,variant:T,vars:v,menuItemTabIndex:w,keepMounted:q,withInitialFocusPlaceholder:F,...K}=e,M=an({name:"Menu",classes:Ce,props:e,classNames:f,styles:k,unstyled:P}),[E,D]=Et({value:s,defaultValue:i,finalValue:!1,onChange:u}),[O,S]=b.useState(!1),x=()=>{D(!1),S(!1),E&&(a==null||a())},C=()=>{D(!0),!E&&(t==null||t())},A=()=>{E?x():C()},{openDropdown:_,closeDropdown:B}=yl({open:C,close:x,closeDelay:y,openDelay:c}),h=W=>aa("[data-menu-item]","[data-menu-dropdown]",W),{resolvedClassNames:U,resolvedStyles:J}=qt({classNames:f,styles:k,props:e});return I.jsx(da,{value:{getStyles:M,opened:E,toggleDropdown:A,getItemIndex:h,openedViaClick:O,setOpenedViaClick:S,closeOnItemClick:m,closeDropdown:p==="click"?x:B,openDropdown:p==="click"?C:_,closeDropdownImmediately:x,loop:d,trigger:p,unstyled:P,menuItemTabIndex:w,withInitialFocusPlaceholder:F},children:I.jsx(re,{...K,opened:E,onChange:A,defaultOpened:i,trapFocus:q?!1:r,closeOnEscape:g,__staticSelector:"Menu",classNames:U,styles:J,unstyled:P,variant:T,keepMounted:q,children:n})})}Q.extend=l=>l;Q.withProps=Mt(Q);Q.classes=Ce;Q.displayName="@mantine/core/Menu";Q.Item=qn;Q.Label=Mn;Q.Dropdown=En;Q.Target=_l;Q.Divider=_n;Q.Sub=Ie;const[Fa,wa]=rl("Table component was not found in the tree");var Ve={table:"m_b23fa0ef",th:"m_4e7aa4f3",tr:"m_4e7aa4fd",td:"m_4e7aa4ef",tbody:"m_b2404537",thead:"m_b242d975",caption:"m_9e5a3ac7",scrollContainer:"m_a100c15",scrollContainerInner:"m_62259741"};function Ca(l,e){if(!e)return;const n={};return e.columnBorder&&l.withColumnBorders&&(n["data-with-column-border"]=!0),e.rowBorder&&l.withRowBorders&&(n["data-with-row-border"]=!0),e.striped&&l.striped&&(n["data-striped"]=l.striped),e.highlightOnHover&&l.highlightOnHover&&(n["data-hover"]=!0),e.captionSide&&l.captionSide&&(n["data-side"]=l.captionSide),e.stickyHeader&&l.stickyHeader&&(n["data-sticky"]=!0),n}function Le(l,e){const n=`Table${l.charAt(0).toUpperCase()}${l.slice(1)}`,t=Re((a,s)=>{const i=ne(n,{},a),{classNames:r,className:u,style:m,styles:d,...g}=i,p=wa();return I.jsx(Ke,{component:l,ref:s,...Ca(p,e),...p.getStyles(l,{className:u,classNames:r,style:m,styles:d,props:i}),...g})});return t.displayName=`@mantine/core/${n}`,t.classes=Ve,t}const vn=Le("th",{columnBorder:!0}),El=Le("td",{columnBorder:!0}),Ye=Le("tr",{rowBorder:!0,striped:!0,highlightOnHover:!0}),ql=Le("thead",{stickyHeader:!0}),Ml=Le("tbody"),Il=Le("tfoot"),Al=Le("caption",{captionSide:!0});function Dn({data:l}){return I.jsxs(I.Fragment,{children:[l.caption&&I.jsx(Al,{children:l.caption}),l.head&&I.jsx(ql,{children:I.jsx(Ye,{children:l.head.map((e,n)=>I.jsx(vn,{children:e},n))})}),l.body&&I.jsx(Ml,{children:l.body.map((e,n)=>I.jsx(Ye,{children:e.map((t,a)=>I.jsx(El,{children:t},a))},n))}),l.foot&&I.jsx(Il,{children:I.jsx(Ye,{children:l.foot.map((e,n)=>I.jsx(vn,{children:e},n))})})]})}Dn.displayName="@mantine/core/TableDataRenderer";const ba={type:"scrollarea"},Sa=Sn((l,{minWidth:e,maxHeight:n,type:t})=>({scrollContainer:{"--table-min-width":Ue(e),"--table-max-height":Ue(n),"--table-overflow":t==="native"?"auto":void 0}})),Nn=Re((l,e)=>{const n=ne("TableScrollContainer",ba,l),{classNames:t,className:a,style:s,styles:i,unstyled:r,vars:u,children:m,minWidth:d,maxHeight:g,type:p,scrollAreaProps:c,...y}=n,f=an({name:"TableScrollContainer",classes:Ve,props:n,className:a,style:s,classNames:t,styles:i,unstyled:r,vars:u,varsResolver:Sa,rootSelector:"scrollContainer"});return I.jsx(Ke,{component:p==="scrollarea"?ln:"div",...p==="scrollarea"?g?{offsetScrollbars:"xy",...c}:{offsetScrollbars:"x",...c}:{},ref:e,...f("scrollContainer"),...y,children:I.jsx("div",{...f("scrollContainerInner"),children:m})})});Nn.classes=Ve;Nn.displayName="@mantine/core/TableScrollContainer";const Ta={withRowBorders:!0,verticalSpacing:7},Ka=Sn((l,{layout:e,captionSide:n,horizontalSpacing:t,verticalSpacing:a,borderColor:s,stripedColor:i,highlightOnHoverColor:r,striped:u,highlightOnHover:m,stickyHeaderOffset:d,stickyHeader:g})=>({table:{"--table-layout":e,"--table-caption-side":n,"--table-horizontal-spacing":Wn(t),"--table-vertical-spacing":Wn(a),"--table-border-color":s?Xe(s,l):void 0,"--table-striped-color":u&&i?Xe(i,l):void 0,"--table-highlight-on-hover-color":m&&r?Xe(r,l):void 0,"--table-sticky-header-offset":g?Ue(d):void 0}})),oe=Re((l,e)=>{const n=ne("Table",Ta,l),{classNames:t,className:a,style:s,styles:i,unstyled:r,vars:u,horizontalSpacing:m,verticalSpacing:d,captionSide:g,stripedColor:p,highlightOnHoverColor:c,striped:y,highlightOnHover:f,withColumnBorders:k,withRowBorders:P,withTableBorder:T,borderColor:v,layout:w,variant:q,data:F,children:K,stickyHeader:M,stickyHeaderOffset:E,mod:D,tabularNums:O,...S}=n,x=an({name:"Table",props:n,className:a,style:s,classes:Ve,classNames:t,styles:i,unstyled:r,rootSelector:"table",vars:u,varsResolver:Ka});return I.jsx(Fa,{value:{getStyles:x,stickyHeader:M,striped:y===!0?"odd":y||void 0,highlightOnHover:f,withColumnBorders:k,withRowBorders:P,captionSide:g||"bottom"},children:I.jsx(Ke,{component:"table",variant:q,ref:e,mod:[{"data-with-table-border":T,"data-tabular-nums":O},D],...x("table"),...S,children:K||!!F&&I.jsx(Dn,{data:F})})})});oe.classes=Ve;oe.displayName="@mantine/core/Table";oe.Td=El;oe.Th=vn;oe.Tr=Ye;oe.Thead=ql;oe.Tbody=Ml;oe.Tfoot=Il;oe.Caption=Al;oe.ScrollContainer=Nn;oe.DataRenderer=Dn;/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Pa=ye("outline","alert-circle","IconAlertCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 8v4",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var La=ye("outline","checkbox","IconCheckbox",[["path",{d:"M9 11l3 3l8 -8",key:"svg-0"}],["path",{d:"M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var xa=ye("outline","chevron-left","IconChevronLeft",[["path",{d:"M15 6l-6 6l6 6",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var _a=ye("outline","dots-vertical","IconDotsVertical",[["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ea=ye("outline","exclamation-circle","IconExclamationCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 9v4",key:"svg-1"}],["path",{d:"M12 16v.01",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var qa=ye("outline","git-commit","IconGitCommit",[["path",{d:"M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M12 3l0 6",key:"svg-1"}],["path",{d:"M12 15l0 6",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Dl=ye("outline","git-merge","IconGitMerge",[["path",{d:"M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M17 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-2"}],["path",{d:"M7 8l0 8",key:"svg-3"}],["path",{d:"M7 8a4 4 0 0 0 4 4h4",key:"svg-4"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ma=ye("outline","message","IconMessage",[["path",{d:"M8 9h8",key:"svg-0"}],["path",{d:"M8 13h6",key:"svg-1"}],["path",{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ia=ye("outline","pencil-plus","IconPencilPlus",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}],["path",{d:"M16 19h6",key:"svg-2"}],["path",{d:"M19 16v6",key:"svg-3"}]]);const Nl=function(){var l={defaultValue:null,kind:"LocalArgument",name:"id"},e={defaultValue:null,kind:"LocalArgument",name:"includeTeam"},n={defaultValue:null,kind:"LocalArgument",name:"name"},t={defaultValue:null,kind:"LocalArgument",name:"owner"},a={alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},s=[a],i=[{kind:"Variable",name:"name",variableName:"name"},{kind:"Variable",name:"owner",variableName:"owner"}],r={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},u=[r],m=[{kind:"Variable",name:"number",variableName:"id"}],d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},g=[a,d],p={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[p,a,d],storageKey:null},y=[r,d],f={alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"defaultBranchRef",plural:!1,selections:y,storageKey:null},k={kind:"InlineFragment",selections:[d],type:"Node",abstractKey:"__isNode"},P=[p,a,k],T={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},v={alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},w={alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null},F=[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},w],K={kind:"Literal",name:"first",value:30},M={alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"ref",plural:!1,selections:y,storageKey:null},E=[v,d],D={alias:null,args:null,kind:"ScalarField",name:"committedDate",storageKey:null},O=[K],S={alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},x={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:P,storageKey:null},C={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},A={kind:"InlineFragment",selections:[{alias:"reviewState",args:null,kind:"ScalarField",name:"state",storageKey:null}],type:"PullRequestReviewComment",abstractKey:null},_={kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]},B=[{kind:"Literal",name:"first",value:20}],h={alias:null,args:null,kind:"ScalarField",name:"startLine",storageKey:null},U={alias:null,args:null,kind:"ScalarField",name:"line",storageKey:null};return{fragment:{argumentDefinitions:[l,e,n,t],kind:"Fragment",metadata:null,name:"PRReviewCommitsQuery",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"viewer",plural:!1,selections:s,storageKey:null},{alias:null,args:i,concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CommitsViewRepositoryFragment"},{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"defaultBranchRef",plural:!1,selections:u,storageKey:null},{alias:null,args:m,concreteType:"PullRequest",kind:"LinkedField",name:"pullRequest",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ActivityPanelFragment"},{args:null,kind:"FragmentSpread",name:"FooterPullRequestFragment"},{args:null,kind:"FragmentSpread",name:"CommitsViewPullRequestFragment"},{args:null,kind:"FragmentSpread",name:"SummaryPanelFragment"}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[t,n,l,e],kind:"Operation",name:"PRReviewCommitsQuery",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"viewer",plural:!1,selections:g,storageKey:null},{alias:null,args:i,concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[c,r,f,{alias:null,args:m,concreteType:"PullRequest",kind:"LinkedField",name:"pullRequest",plural:!1,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"viewerCanUpdate",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mergedAt",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"mergedBy",plural:!1,selections:P,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mergeable",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerDidAuthor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanMergeAsAdmin",storageKey:null},{alias:null,args:null,concreteType:"Repository",kind:"LinkedField",name:"baseRepository",plural:!1,selections:[c,r,d],storageKey:null},{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"baseRef",plural:!1,selections:[r,d,{alias:null,args:null,concreteType:"BranchProtectionRule",kind:"LinkedField",name:"branchProtectionRule",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"requiresCodeOwnerReviews",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"requiredApprovingReviewCount",storageKey:null},d],storageKey:null}],storageKey:null},T,{alias:"lastCommit",args:[{kind:"Literal",name:"last",value:1}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[v,d,{alias:null,args:null,concreteType:"StatusCheckRollup",kind:"LinkedField",name:"statusCheckRollup",plural:!1,selections:[w,{alias:null,args:[{kind:"Literal",name:"first",value:50}],concreteType:"StatusCheckRollupContextConnection",kind:"LinkedField",name:"contexts",plural:!1,selections:[q,{alias:null,args:null,concreteType:"CheckRunStateCount",kind:"LinkedField",name:"checkRunCountsByState",plural:!0,selections:F,storageKey:null},{alias:null,args:null,concreteType:"StatusContextStateCount",kind:"LinkedField",name:"statusContextCountsByState",plural:!0,selections:F,storageKey:null},{alias:null,args:null,concreteType:"StatusCheckRollupContextEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[p,{kind:"InlineFragment",selections:[d,{alias:null,args:null,kind:"ScalarField",name:"detailsUrl",storageKey:null},r,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"conclusion",storageKey:null}],type:"CheckRun",abstractKey:null},{kind:"InlineFragment",selections:[d,w,{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"context",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"avatarUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"targetUrl",storageKey:null}],type:"StatusContext",abstractKey:null},k],storageKey:null}],storageKey:null}],storageKey:"contexts(first:50)"},d],storageKey:null}],storageKey:null},d],storageKey:null}],storageKey:null}],storageKey:"commits(last:1)"},{alias:null,args:[K,{kind:"Literal",name:"itemTypes",value:["HEAD_REF_FORCE_PUSHED_EVENT","BASE_REF_FORCE_PUSHED_EVENT","BASE_REF_CHANGED_EVENT","PULL_REQUEST_COMMIT"]}],concreteType:"PullRequestTimelineItemsConnection",kind:"LinkedField",name:"timelineItems",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestTimelineItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[p,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[v,{alias:null,args:null,kind:"ScalarField",name:"authoredDate",storageKey:null},d],storageKey:null}],type:"PullRequestCommit",abstractKey:null},{kind:"InlineFragment",selections:[T,{alias:null,args:null,kind:"ScalarField",name:"previousRefName",storageKey:null}],type:"BaseRefChangedEvent",abstractKey:null},{kind:"InlineFragment",selections:[T,M],type:"BaseRefForcePushedEvent",abstractKey:null},{kind:"InlineFragment",selections:[T,M,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"afterCommit",plural:!1,selections:E,storageKey:null},{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"beforeCommit",plural:!1,selections:[v,D,d],storageKey:null}],type:"HeadRefForcePushedEvent",abstractKey:null},k],storageKey:null}],storageKey:null}],storageKey:'timelineItems(first:30,itemTypes:["HEAD_REF_FORCE_PUSHED_EVENT","BASE_REF_FORCE_PUSHED_EVENT","BASE_REF_CHANGED_EVENT","PULL_REQUEST_COMMIT"])'},{alias:null,args:O,concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[v,d,{alias:null,args:[{kind:"Literal",name:"first",value:2}],concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[v,d,S],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"},{alias:null,args:null,kind:"ScalarField",name:"messageHeadline",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"additions",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"deletions",storageKey:null},S],storageKey:null},d],storageKey:null}],storageKey:null},q],storageKey:"commits(first:30)"},{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"viewerLatestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[d,v],storageKey:null},d],storageKey:null},{alias:null,args:null,concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[f,d],storageKey:null},x,{alias:null,args:O,concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[d,w,C,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[p,a,k,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"location",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"company",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null}],type:"User",abstractKey:null}],storageKey:null},p,T,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:E,storageKey:null},{alias:null,args:[{kind:"Literal",name:"last",value:30}],concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[C,x,d],storageKey:null}],storageKey:null}],storageKey:"comments(last:30)"},{kind:"InlineFragment",selections:[A,_],type:"Comment",abstractKey:"__isComment"}],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"},{alias:null,args:B,concreteType:"PullRequestReviewThreadConnection",kind:"LinkedField",name:"reviewThreads",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"node",plural:!1,selections:[d,{alias:null,args:B,concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[d,C,h,U,_,{kind:"InlineFragment",selections:[x,T,A],type:"Comment",abstractKey:"__isComment"}],storageKey:null}],storageKey:null}],storageKey:"comments(first:20)"},U,h,{alias:null,args:null,kind:"ScalarField",name:"path",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isResolved",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanReply",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanResolve",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanUnresolve",storageKey:null},_],storageKey:null}],storageKey:null}],storageKey:"reviewThreads(first:20)"},{alias:null,args:O,concreteType:"IssueCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"IssueCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"IssueComment",kind:"LinkedField",name:"node",plural:!1,selections:[p,T,d,C,{kind:"InlineFragment",selections:[x,A,_],type:"Comment",abstractKey:"__isComment"}],storageKey:null}],storageKey:null}],storageKey:"comments(first:30)"},{alias:"timelineCommits",args:[K,{kind:"Literal",name:"itemTypes",value:["PULL_REQUEST_COMMIT"]}],concreteType:"PullRequestTimelineItemsConnection",kind:"LinkedField",name:"timelineItems",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestTimelineItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[p,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[d,D,S,{alias:null,args:null,concreteType:"GitActor",kind:"LinkedField",name:"author",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:g,storageKey:null}],storageKey:null}],storageKey:null}],type:"PullRequestCommit",abstractKey:null},k],storageKey:null}],storageKey:null}],storageKey:'timelineItems(first:30,itemTypes:["PULL_REQUEST_COMMIT"])'},p,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"closed",storageKey:null},C,{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"number",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isDraft",storageKey:null},w,{alias:null,args:null,kind:"ScalarField",name:"mergeStateStatus",storageKey:null},{alias:null,args:O,concreteType:"ReviewRequestConnection",kind:"LinkedField",name:"reviewRequests",plural:!1,selections:[{alias:null,args:null,concreteType:"ReviewRequestEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"ReviewRequest",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"asCodeOwner",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"requestedReviewer",plural:!1,selections:[p,{kind:"InlineFragment",selections:s,type:"User",abstractKey:null},{condition:"includeTeam",kind:"Condition",passingValue:!0,selections:[{kind:"InlineFragment",selections:u,type:"Team",abstractKey:null}]},k],storageKey:null},d],storageKey:null}],storageKey:null}],storageKey:"reviewRequests(first:30)"}],storageKey:null},d],storageKey:null}]},params:{cacheID:"05a43be1794766153e22cacce3a35640",id:null,metadata:{},name:"PRReviewCommitsQuery",operationKind:"query",text:`query PRReviewCommitsQuery(
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
`}}}();Nl.hash="5e50bd2bc396d55adef999c71f1f99ac";const $l=function(){var l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e=[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],n={kind:"Literal",name:"first",value:30},t=[n],a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},i={args:null,kind:"FragmentSpread",name:"CommentFragment"};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ActivityPanelFragment",selections:[l,{alias:null,args:null,kind:"ScalarField",name:"viewerCanUpdate",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mergedAt",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"mergedBy",plural:!1,selections:e,storageKey:null},{args:null,kind:"FragmentSpread",name:"FooterPullRequestFragment"},{alias:null,args:t,concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:e,storageKey:null},a,s,l,{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},i,{args:null,kind:"FragmentSpread",name:"ActivityPanelReviewFragment"}],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"},{alias:null,args:t,concreteType:"IssueCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"IssueCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"IssueComment",kind:"LinkedField",name:"node",plural:!1,selections:[a,s,i,l],storageKey:null}],storageKey:null}],storageKey:"comments(first:30)"},{alias:null,args:t,concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"commits(first:30)"},{alias:"timelineCommits",args:[n,{kind:"Literal",name:"itemTypes",value:["PULL_REQUEST_COMMIT"]}],concreteType:"PullRequestTimelineItemsConnection",kind:"LinkedField",name:"timelineItems",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestTimelineItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"committedDate",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null},{alias:null,args:null,concreteType:"GitActor",kind:"LinkedField",name:"author",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:e,storageKey:null}],storageKey:null}],storageKey:null}],type:"PullRequestCommit",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:'timelineItems(first:30,itemTypes:["PULL_REQUEST_COMMIT"])'},{args:null,kind:"FragmentSpread",name:"useVersionHistoryFragment"}],type:"PullRequest",abstractKey:null}}();$l.hash="dfeb8ac801f60732512d36ccf529125a";const jl=function(){var l={alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ActivityPanelReviewFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"UserFragment"},l],storageKey:null},e,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CommentFragment"},{alias:null,args:[{kind:"Literal",name:"last",value:30}],concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[e,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[l],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"comments(last:30)"}],type:"PullRequestReview",abstractKey:null}}();jl.hash="d18ba5d809c6b447e654d4c984484e16";var Jn=function(e,n){var t=arguments;if(n==null||!At.call(n,"css"))return b.createElement.apply(void 0,t);var a=t.length,s=new Array(a);s[0]=Dt,s[1]=Nt(e,n);for(var i=2;i<a;i++)s[i]=t[i];return b.createElement.apply(null,s)};(function(l){var e;e||(e=l.JSX||(l.JSX={}))})(Jn||(Jn={}));function Aa(){for(var l=arguments.length,e=new Array(l),n=0;n<l;n++)e[n]=arguments[n];return It(e)}Fe(new Map);const $n=Fe(null),dn=Fe(null),Ul=Fe(!1),ze=Fe(fl()),cn=Fe(fl()),Da=Fe(null),Na=Fe(null),Qe="edges",Xn="node";class Yn{constructor(e){this.obj=e}then(e){e(this.obj)}}class ke{constructor(e){this.record=e}setValues(e){for(const[n,t]of Object.entries(e))this.record.setValue(t,n)}setLinkedRecord(e,n){this.record.setLinkedRecord(e.record,n)}setLinkedRecords(e,n){this.record.setLinkedRecords(e.map(t=>t.record),n)}getEdges(e){const n=this.record.getLinkedRecords(Qe,e);return n==null?null:n.map(t=>new ke(t))}getNode(e,n){const t=this.record.getLinkedRecord(e,n);return t==null?null:new ke(t)}createAndAppendNodeToEdge(e,n,t,a,s,i,r){let u=this.getNode(n,t);if(u==null){const y=e.create(He(),a);this.record.setLinkedRecord(y,n,t),u=new ke(y)}let m=u.getEdges()??null;m==null&&(u.record.setLinkedRecords([],Qe),m=[]);const d=He(),g=He(),p=new ke(e.create(d,s)),c=new ke(e.create(g,i));return c.setValues({...r,id:g}),p.setLinkedRecord(c,Xn),m.push(p),u.setLinkedRecords(m,Qe),new Yn({edgeId:d,nodeId:g,node:c})}appendToEdge(e,n,t,a,s){const i=this.getNode(n,t);if(i==null)return;const r=i.getEdges();if(r==null)return;const u=He(),m=new ke(e.create(u,a)),d=new xe(e).get(s);if(d!=null)return m.setLinkedRecord(d,Xn),r.push(m),i.setLinkedRecords(r,Qe),new Yn({edgeId:u,nodeId:s})}}class xe{constructor(e){this.store=e}get(e){if(e==null)return null;const n=this.store.get(e);return n==null?null:new ke(n)}delete(e){e!=null&&this.store.delete(e)}}function $a(){const l=$.useRelayEnvironment(),[e,n]=pe($n);return(t,a)=>{Tn.commitLocalUpdate(l,s=>{var r,u,m;const i=new xe(s);if(e!=null){(r=i.get(e))==null||r.setValues({isPending:!0,body:t,createdAt:Y().toISOString()});return}(m=(u=i.get(a))==null?void 0:u.createAndAppendNodeToEdge(s,"reviews",{first:30},"PullRequestReviewConnection","PullRequestReviewEdge","PullRequestReview",{isPending:!0,body:t,createdAt:Y().toISOString()}))==null||m.then(({nodeId:d})=>{n(d)})})}}const Ol={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommentFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},{kind:"InlineFragment",selections:[{alias:"reviewState",args:null,kind:"ScalarField",name:"state",storageKey:null}],type:"PullRequestReviewComment",abstractKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],type:"Comment",abstractKey:"__isComment"};Ol.hash="08730b47ba257692da11cc5d964ecfdc";const Rn=b.lazy(()=>hl(()=>import("./MarkdownRenderer-CbB46xux.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)),ja=Ol,Zn=500;function Ua({comment:l,header:e="default",right:n=void 0,border:t=!0}){var d;const a=$.useFragment(ja,l),[s,i]=b.useState(!1),r=a.isPending||a.reviewState==="PENDING",u=b.useRef(null),m=R(ce,{gap:"xs",children:[R(j,{wrap:"nowrap",justify:"space-between",children:[R(j,{gap:0,children:[a.author!=null&&o(ve,{capitalize:!0,login:a.author.login,size:"sm"}),o(z,{span:!0,size:"sm",children:" commented "}),o(Oe,{from:Y(a.createdAt),prefix:null}),r&&o(qe,{variant:"light",color:"yellow.8",ml:"sm",radius:"sm",children:"Pending"})]}),R(j,{children:[(((d=u.current)==null?void 0:d.clientHeight)??0)>Zn&&o(ae,{size:"compact-xs",onClick:()=>i(!0),children:"..."}),n]})]}),o(Rn,{ref:u,children:a.body})]});return R(X,{mah:Zn,withBorder:t,p:"xs",radius:0,style:{flexShrink:0},children:[e==="default"&&R(j,{justify:"space-between",children:[a.author!=null&&o(ve,{login:a.author.login}),o(Oe,{from:Y(a.createdAt),prefix:null}),r&&o(qe,{c:"yellow",children:"Pending"})]}),m,s&&o($t,{size:"lg",opened:!0,onClose:()=>i(!1),children:o(Rn,{children:a.body})})]})}function jn(l){return o(b.Suspense,{fallback:o(Kn,{}),children:o(Ua,{...l})})}const Bl=function(){var l={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},e=[l],n={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},a=[t],s=[{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:a,storageKey:null}],storageKey:null}],storageKey:null}],i={kind:"Literal",name:"first",value:30},r={alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"ref",plural:!1,selections:e,storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useVersionHistoryFragment",selections:[{alias:null,args:null,concreteType:"Repository",kind:"LinkedField",name:"baseRepository",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],storageKey:null},l],storageKey:null},{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"baseRef",plural:!1,selections:e,storageKey:null},n,{alias:"lastCommit",args:[{kind:"Literal",name:"last",value:1}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:s,storageKey:"commits(last:1)"},{alias:null,args:[i,{kind:"Literal",name:"itemTypes",value:["HEAD_REF_FORCE_PUSHED_EVENT","BASE_REF_FORCE_PUSHED_EVENT","BASE_REF_CHANGED_EVENT","PULL_REQUEST_COMMIT"]}],concreteType:"PullRequestTimelineItemsConnection",kind:"LinkedField",name:"timelineItems",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestTimelineItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[t,{alias:null,args:null,kind:"ScalarField",name:"authoredDate",storageKey:null}],storageKey:null}],type:"PullRequestCommit",abstractKey:null},{kind:"InlineFragment",selections:[n,{alias:null,args:null,kind:"ScalarField",name:"previousRefName",storageKey:null}],type:"BaseRefChangedEvent",abstractKey:null},{kind:"InlineFragment",selections:[n,r],type:"BaseRefForcePushedEvent",abstractKey:null},{kind:"InlineFragment",selections:[n,r,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"afterCommit",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"beforeCommit",plural:!1,selections:[t,{alias:null,args:null,kind:"ScalarField",name:"committedDate",storageKey:null}],storageKey:null}],type:"HeadRefForcePushedEvent",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:'timelineItems(first:30,itemTypes:["HEAD_REF_FORCE_PUSHED_EVENT","BASE_REF_FORCE_PUSHED_EVENT","BASE_REF_CHANGED_EVENT","PULL_REQUEST_COMMIT"])'},{alias:null,args:[i],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:s,storageKey:"commits(first:30)"},{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"viewerLatestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},t],storageKey:null}],storageKey:null}],type:"PullRequest",abstractKey:null}}();Bl.hash="f6d0a238f940ca721636bd35ebd7bb9b";const Oa=Bl;function Vl(l){var p,c,y,f,k,P,T,v,w,q;const e=$.useFragment(Oa,l),n=G((p=e.timelineItems.edges)==null?void 0:p.map(F=>F==null?void 0:F.node)),t=b.useMemo(()=>new Map,[e]),a=b.useMemo(()=>new Map,[e]),s=b.useMemo(()=>new Map,[e]),i=b.useMemo(()=>new Map,[e]),r=b.useMemo(()=>new Map,[e]);b.useMemo(()=>{var E,D,O,S,x,C,A,_,B,h,U,J;let F=1,K=null,M=(E=e.baseRef)==null?void 0:E.name;if(e.baseRef==null||M==null)return null;for(const[W,V]of Array.from(n.entries()).reverse())s.set(n.length-1-W,M),V.__typename==="BaseRefChangedEvent"?M=V.previousRefName:V.__typename==="BaseRefForcePushedEvent"&&((D=V.ref)==null?void 0:D.name)!=null&&(M=(O=V.ref)==null?void 0:O.name);for(const[W,V]of n.entries()){if(M=s.get(W),M==null)throw new Error("unable to find baseRef for verison");V.__typename==="HeadRefForcePushedEvent"?(r.has((S=V.beforeCommit)==null?void 0:S.oid)||(t.set(F,(x=V.beforeCommit)==null?void 0:x.oid),a.set(F,M),i.set(F,(C=V.beforeCommit)==null?void 0:C.committedDate),r.set((A=V.afterCommit)==null?void 0:A.oid,F),F++),t.set(F,(_=V.afterCommit)==null?void 0:_.oid),a.set(F,M),i.set(F,V.createdAt),r.set((B=V.afterCommit)==null?void 0:B.oid,F),F++):V.__typename==="PullRequestCommit"&&(K=V.commit)}t.size>0&&K!=null&&t.set(F-1,K.oid),t.size===0&&(t.set(1,(U=ge((h=e.lastCommit.edges)==null?void 0:h.map(W=>W==null?void 0:W.node)))==null?void 0:U.commit.oid),a.set(1,Ge((J=e.baseRef)==null?void 0:J.name)))},[a,s,e,n,r,i,t]);const u=b.useMemo(()=>Array.from(t.entries()).map(([F,K])=>({baseRef:a.get(F),headOid:K})).filter(F=>F.baseRef!=null),[a,t]),m=jt(Ge((y=(c=e.baseRepository)==null?void 0:c.owner)==null?void 0:y.login),Ge((f=e.baseRepository)==null?void 0:f.name),u),d=(P=(k=e.viewerLatestReview)==null?void 0:k.commit)==null?void 0:P.oid;let g=null;return d!=null&&(g={oid:d,abbreviatedOid:d.slice(0,7),number:r.get(d)??null,nodeId:Ge((v=(T=e.viewerLatestReview)==null?void 0:T.commit)==null?void 0:v.id)}),{viewerLastReview:g,versions:G((q=(w=m==null?void 0:m.map(({data:F})=>F))==null?void 0:w.filter(F=>F!=null))==null?void 0:q.map((F,K)=>({commitOids:F.commits.map(M=>M.sha),number:K+1,headOid:F.commits[F.commits.length-1].sha,abbreviatedOid:F.commits[F.commits.length-1].sha.slice(0,7),baseRef:a.get(K+1),nodeIds:F.commits.map(M=>M.node_id),author:F.commits[F.commits.length-1].author.login,createdAt:i.get(K+1)==null?void 0:Y(i.get(K+1))})))}}const zl=b.lazy(()=>hl(()=>import("./MarkdownTextarea-BJXm9WNf.js"),__vite__mapDeps([4,1,2,0,3,5]),import.meta.url)),Hl={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FooterPullRequestFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"mergeable",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerDidAuthor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanMergeAsAdmin",storageKey:null},{args:null,kind:"FragmentSpread",name:"VersionSelectorFragment"},{args:null,kind:"FragmentSpread",name:"SubmitReviewPanelFragment"}],type:"PullRequest",abstractKey:null};Hl.hash="186e58ed5f61a86c0d4c7480ee045daa";const Gl=function(){var l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"SubmitReviewPanelFragment",selections:[l,{alias:null,args:null,kind:"ScalarField",name:"viewerCanUpdate",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:30}],concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"},{args:null,kind:"FragmentSpread",name:"reviewThreadCommentMutationPullRequestFragment"},{args:null,kind:"FragmentSpread",name:"addReviewMutationPullRequestFragment"}],type:"PullRequest",abstractKey:null}}();Gl.hash="4aae75e425f298b1928b0d77f8bf260f";const Ql=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"input"}],e=[{kind:"Variable",name:"input",variableName:"input"}],n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},a=[n],s={alias:null,args:null,concreteType:"PullRequest",kind:"LinkedField",name:"pullRequest",plural:!1,selections:a,storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},u={kind:"InlineFragment",selections:a,type:"Node",abstractKey:"__isNode"},m={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"addReviewMutationAddPullRequestReviewMutation",selections:[{alias:null,args:e,concreteType:"AddPullRequestReviewPayload",kind:"LinkedField",name:"addPullRequestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"pullRequestReview",plural:!1,selections:[n,t,{args:null,kind:"FragmentSpread",name:"ActivityPanelReviewFragment"},s],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"addReviewMutationAddPullRequestReviewMutation",selections:[{alias:null,args:e,concreteType:"AddPullRequestReviewPayload",kind:"LinkedField",name:"addPullRequestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"pullRequestReview",plural:!1,selections:[n,t,{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[i,r,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"location",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"company",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null}],type:"User",abstractKey:null},u],storageKey:null},m,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},n],storageKey:null},{alias:null,args:[{kind:"Literal",name:"last",value:30}],concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[m,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[i,r,u],storageKey:null},n],storageKey:null}],storageKey:null}],storageKey:"comments(last:30)"},s,{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:"reviewState",args:null,kind:"ScalarField",name:"state",storageKey:null}],type:"PullRequestReviewComment",abstractKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],type:"Comment",abstractKey:"__isComment"}],storageKey:null}],storageKey:null}]},params:{cacheID:"892dd143fbc2949c120104e84d4d082b",id:null,metadata:{},name:"addReviewMutationAddPullRequestReviewMutation",operationKind:"mutation",text:`mutation addReviewMutationAddPullRequestReviewMutation(
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
`}}}();Ql.hash="1b670edaf89f4e6c6336b444750a644f";const Wl=function(){var l=[{kind:"Literal",name:"first",value:20}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"addReviewMutationPullRequestFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:l,concreteType:"PullRequestReviewThreadConnection",kind:"LinkedField",name:"reviewThreads",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"line",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startLine",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"path",storageKey:null},{alias:null,args:l,concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"comments(first:20)"},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],storageKey:null}],storageKey:null}],storageKey:"reviewThreads(first:20)"}],type:"PullRequest",abstractKey:null}}();Wl.hash="02e0476a2118e17c18ca51ea6e7604b5";const Ba=Wl,Va=Ql;function za(l){var m,d;const e=$.useFragment(Ba,l),n=rn($n),t=ee(dn),a=b.useCallback(()=>{var g;n(null),(g=t==null?void 0:t.current)==null||g.setMarkdown("")},[n,t]),s=G((d=(m=e.reviewThreads.edges)==null?void 0:m.map(g=>g==null?void 0:g.node))==null?void 0:d.filter(g=>(g==null?void 0:g.isPending)===!0)).map(g=>{var c,y;const p=tn((c=g.comments)==null?void 0:c.edges);return{body:((y=p==null?void 0:p.node)==null?void 0:y.body)??"",line:g.line,path:g.path,startLine:g.startLine}}),i=b.useCallback(g=>(p,c)=>{var f;g!=null&&p.delete(g),(f=new xe(p).get(c.addPullRequestReview.pullRequestReview.pullRequest.id))==null||f.appendToEdge(p,"reviews",{first:30},"PullRequestReviewEdge",c.addPullRequestReview.pullRequestReview.id)},[]),[r,u]=$.useMutation(Va);return[(g,p,c,y)=>{r({variables:{input:{pullRequestId:g,body:c??void 0,threads:s}},updater:i(p),onCompleted:f=>{a(),y(f.addPullRequestReview.pullRequestReview.id)}})},u]}function Jl(){const l=$.useRelayEnvironment(),[e,n]=pe(ze);return t=>{Tn.commitLocalUpdate(l,a=>{const s=e.get(t);a.delete(s),n(i=>i.delete(t))})}}function Ha(){const l=$.useRelayEnvironment(),[e,n]=pe(ze);return(t,a)=>{Tn.commitLocalUpdate(l,s=>{var m,d;const i=e.get(a),r=new xe(s);if(i!=null){(m=r.get(i))==null||m.setValues({isPending:!0,body:t});return}const u=r.get(a);(d=u==null?void 0:u.createAndAppendNodeToEdge(s,"comments",{first:20},"PullRequestReviewCommentConnection","PullRequestReviewCommentEdge","PullRequestReviewComment",{isPending:!0,body:t}))==null||d.then(({nodeId:g})=>{n(p=>p.set(a,g))})})}}const Xl=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"input"}],e=[{kind:"Variable",name:"input",variableName:"input"}],n={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},a={alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"pullRequestReview",plural:!1,selections:[t,{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null}],storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"reviewThreadCommentMutation",selections:[{alias:null,args:e,concreteType:"AddPullRequestReviewThreadReplyPayload",kind:"LinkedField",name:"addPullRequestReviewThreadReply",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"comment",plural:!1,selections:[n,a],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"reviewThreadCommentMutation",selections:[{alias:null,args:e,concreteType:"AddPullRequestReviewThreadReplyPayload",kind:"LinkedField",name:"addPullRequestReviewThreadReply",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"comment",plural:!1,selections:[n,a,t],storageKey:null}],storageKey:null}]},params:{cacheID:"ad3c8be53dc8e93f5a4a9552df497c3f",id:null,metadata:{},name:"reviewThreadCommentMutation",operationKind:"mutation",text:`mutation reviewThreadCommentMutation(
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
`}}}();Xl.hash="4d31cec9ad6f78a3462eed3e5b22a64d";const Yl=function(){var l=[{kind:"Literal",name:"first",value:20}],e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"reviewThreadCommentMutationPullRequestFragment",selections:[{alias:null,args:l,concreteType:"PullRequestReviewThreadConnection",kind:"LinkedField",name:"reviewThreads",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"node",plural:!1,selections:[e,{alias:null,args:l,concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[e,{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],storageKey:null}],storageKey:null}],storageKey:"comments(first:20)"}],storageKey:null}],storageKey:null}],storageKey:"reviewThreads(first:20)"}],type:"PullRequest",abstractKey:null}}();Yl.hash="741ce77b35e675bda0fe2fb031e951e9";const Ga=Yl,Qa=Xl;function Wa({pr:l}){const[e,n]=pe(ze),t=ee(cn),a=$.useFragment(Ga,l),s=b.useMemo(()=>{var c,y;const g=G((y=(c=a.reviewThreads)==null?void 0:c.edges)==null?void 0:y.map(f=>f==null?void 0:f.node)),p=G(g.map(f=>{var k,P;return(P=(k=f.comments)==null?void 0:k.edges)==null?void 0:P.map(T=>T==null?void 0:T.node)}).flat()).filter(f=>f.isPending===!0);return new Map(p.map(f=>[f.id,f.body]))},[a]),[i,r]=$.useMutation(Qa),u=b.useMemo(()=>new Set,[]),m=b.useCallback((g,p,c)=>{n(y=>y.delete(g)),u.delete(g),u.size===0&&c(p)},[n,u]),d=b.useCallback(g=>(p,c)=>{var k;const y=e.get(g);if(y==null)return;(k=new xe(p).get(y))==null||k.setValues({isPending:!1}),n(P=>P.delete(g))},[e,n]);return[(g,p)=>{const c=e.filter((y,f)=>!t.has(f));for(const[y,f]of c){const k=s.get(f);u.add(y),i({variables:{input:{body:k,pullRequestReviewThreadId:y,pullRequestReviewId:g}},updater:d(y),onCompleted:P=>m(y,P.addPullRequestReviewThreadReply.comment.pullRequestReview.id,p)})}},r]}const Zl=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"input"}],e=[{kind:"Variable",name:"input",variableName:"input"}],n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},a=[n],s={alias:null,args:null,concreteType:"PullRequest",kind:"LinkedField",name:"pullRequest",plural:!1,selections:a,storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},u={kind:"InlineFragment",selections:a,type:"Node",abstractKey:"__isNode"},m={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"submitReviewMutationSubmitPullRequestReviewMutation",selections:[{alias:null,args:e,concreteType:"SubmitPullRequestReviewPayload",kind:"LinkedField",name:"submitPullRequestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"pullRequestReview",plural:!1,selections:[n,t,s,{args:null,kind:"FragmentSpread",name:"ActivityPanelReviewFragment"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"submitReviewMutationSubmitPullRequestReviewMutation",selections:[{alias:null,args:e,concreteType:"SubmitPullRequestReviewPayload",kind:"LinkedField",name:"submitPullRequestReview",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"pullRequestReview",plural:!1,selections:[n,t,s,{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[i,r,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"location",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"company",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null}],type:"User",abstractKey:null},u],storageKey:null},m,{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},n],storageKey:null},{alias:null,args:[{kind:"Literal",name:"last",value:30}],concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[m,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[i,r,u],storageKey:null},n],storageKey:null}],storageKey:null}],storageKey:"comments(last:30)"},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{alias:"reviewState",args:null,kind:"ScalarField",name:"state",storageKey:null}],type:"PullRequestReviewComment",abstractKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],type:"Comment",abstractKey:"__isComment"}],storageKey:null}],storageKey:null}]},params:{cacheID:"5b411c90078dba7eae29483db451a658",id:null,metadata:{},name:"submitReviewMutationSubmitPullRequestReviewMutation",operationKind:"mutation",text:`mutation submitReviewMutationSubmitPullRequestReviewMutation(
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
`}}}();Zl.hash="9ca77642300be4c86e11175c0173e248";const Ja=Zl;function Xa(){const[l,e]=pe($n),n=ee(dn),t=b.useCallback(()=>{var i;e(null),(i=n==null?void 0:n.current)==null||i.setMarkdown("")},[e,n]),[a,s]=$.useMutation(Ja);return[(i,r,u,m)=>{a({variables:{input:{pullRequestId:i,pullRequestReviewId:r,event:u,body:m??void 0}},onCompleted:()=>{t()}})},s]}const Ya=Gl;function Za({pr:l}){var q,F,K,M;const e=$.useFragment(Ya,l),[n]=pe(Pn),t=ee(dn),a=ee(Ul),s=ee(ze),i=ee(cn),[r,u]=Wa({pr:e}),[m,d]=za(e),[g,p]=Xa(),c=ge(G((F=(q=e.reviews)==null?void 0:q.edges)==null?void 0:F.map(E=>E==null?void 0:E.node)).filter(E=>E.state==="PENDING")),y=Jl(),f=d||p||u,[k,P]=s.partition((E,D)=>i.has(D)),T=(a?1:0)+s.size,v=b.useCallback(E=>D=>{var S;const O=(S=t==null?void 0:t.current)==null?void 0:S.getMarkdown();g(e.id,D,E,Ut(c==null?void 0:c.body,O))},[g,c==null?void 0:c.body,e.id,t]),w=b.useCallback(E=>{if(e.viewerCanUpdate){if(c!=null){v(E)(c.id);return}k.size>0?m(e.id,(c==null?void 0:c.id)??null,(c==null?void 0:c.body)??null,D=>{r(D,v(E))}):m(e.id,(c==null?void 0:c.id)??null,(c==null?void 0:c.body)??null,D=>{v(E)(D)})}},[e,c,k.size,m,r,v]);return R(Me,{children:[R(ae,{disabled:T<1||f,onClick:()=>{var E;for(const[D]of k)y(D);(E=t==null?void 0:t.current)==null||E.setMarkdown("")},size:"compact-sm",variant:"light",children:[o(z,{inherit:!0,mr:"xs",children:"Abandon"}),o(Ot,{size:16,stroke:2})]}),o(ae,{disabled:T<1||f,onClick:()=>{w("COMMENT")},size:"compact-sm",variant:"light",color:T>0?"yellow":void 0,children:T>0?`Comment (${T})`:"Comment"}),R(ae,{disabled:((K=e.author)==null?void 0:K.login)===n,loading:f,onClick:()=>{w("REQUEST_CHANGES")},size:"compact-sm",color:"red",variant:"light",children:[o(z,{mr:"xs",inherit:!0,children:"Reject"}),o(Bt,{size:16,stroke:2})]}),R(ae,{disabled:((M=e.author)==null?void 0:M.login)===n,loading:f,onClick:()=>{w("APPROVE")},size:"compact-sm",variant:"light",color:"green",children:[o(z,{mr:"xs",inherit:!0,children:"Approve"}),o(kl,{size:16,stroke:2})]})]})}const et={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VersionSelectorFragment",selections:[{args:null,kind:"FragmentSpread",name:"useVersionHistoryFragment"},{alias:null,args:null,concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"defaultBranchRef",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null}],storageKey:null}],type:"PullRequest",abstractKey:null};et.hash="4bdf88dee350ad2546728c39149b6c64";const es=et;function ns(l){return o(Ln,{children:o(ls,{...l})})}function ls({fragment:l}){var s;const e=$.useFragment(es,l),{versions:n}=Vl(e),[t,a]=b.useState(n[n.length-1]);return R(re,{position:"bottom",withArrow:!0,shadow:"md",children:[o(re.Target,{children:R(ae,{variant:"light",size:"compact-sm",children:["v",(s=n[n.length-1])==null?void 0:s.number]})}),o(re.Dropdown,{children:R(j,{style:{display:"flex",gap:"1rem"},children:[R(X,{shadow:"sm",padding:0,style:{flex:1},children:[o(z,{size:"lg",mb:"md",style:{fontWeight:700},children:"Versions"}),o(ln,{style:{height:400},children:n.map(i=>o(X,{shadow:"xs",padding:"xs",style:{marginBottom:"0.5rem",cursor:"pointer",backgroundColor:"var(--mantine-color-dark-7)"},onClick:()=>a(i),children:R(j,{style:{justifyContent:"space-between",alignItems:"center"},children:[R(z,{children:[R("strong",{children:["v",i.number]})," - ",i.baseRef]}),R(qe,{variant:"light",radius:"xs",color:"blue",children:[i.commitOids.length," commits"]})]})},i.number))})]}),R(X,{shadow:"sm",padding:0,style:{flex:2},children:[R(z,{size:"lg",mb:"md",style:{fontWeight:700},children:["Commits for v",t==null?void 0:t.number]}),t?o(ln,{style:{height:400},children:R(oe,{children:[o("thead",{children:R("tr",{children:[o("th",{children:"Commit Hash"}),o("th",{children:"Author"}),o("th",{children:"Date"})]})}),o("tbody",{children:t.commitOids.map(i=>R("tr",{children:[o("td",{children:i}),o("td",{children:t.author}),o("td",{children:t.createdAt?t.createdAt.format("D MMM YYYY HH:mm"):"Unknown"})]},i))})]})}):o(z,{children:"No version selected."})]})]})})]})}const ts=Hl;function as(l){return o(b.Suspense,{fallback:o(Vt,{}),children:o(ss,{...l})})}function ss({pr:l}){const e=$.useFragment(ts,l),n=vl();return R(j,{gap:"sm",justify:"flex-end",wrap:"nowrap",children:[o(ae,{size:"compact-sm",variant:"light",onClick:()=>n("/"),children:o(xa,{})}),e.mergeable==="MERGEABLE"&&(e.viewerDidAuthor||e.viewerCanMergeAsAdmin)&&o(ae,{size:"compact-sm",right:"Merge",variant:"light",color:"violet",children:o(Dl,{})}),o(ns,{fragment:e}),o(Za,{pr:e})]})}const is=jl,rs=$l;function Fn({login:l,text:e,state:n,from:t,color:a,alreadySeen:s,leftIcon:i}){return R(j,{className:Ee(n,Pe.secondaryText,s&&"already-seen-timeline-item","timeline-item"),justify:"space-between",children:[R(j,{gap:0,children:[i&&o(i,{size:16,stroke:1}),R(z,{size:"sm",c:a,children:[l," ",e]})]}),o(z,{size:"sm",children:o(Oe,{from:t,prefix:null})})]})}function os({review:l,currentCommits:e,commits:n,alreadySeen:t}){var i,r,u,m,d;const a=$.useFragment(is,l);let s=null;if(a.state==="APPROVED"||a.state==="CHANGES_REQUESTED")s=o(Fn,{alreadySeen:t,from:Y(a.createdAt),login:o(ve,{capitalize:!0,login:(i=a.author)==null?void 0:i.login,reviewState:a.state,size:"sm"}),state:Pe.colorSuccess,text:a.state==="APPROVED"?"approved":"requested changes"});else if(a.state==="COMMENTED"&&Fl(a.body)){const g=((r=a==null?void 0:a.commit)==null?void 0:r.oid)==null||e.has(a.commit.oid),p=n.get((u=a==null?void 0:a.commit)==null?void 0:u.oid),c=p!=null?` on v${p}`:g?"":` on a previous version (${(m=a==null?void 0:a.commit)==null?void 0:m.oid})`;s=o(Fn,{alreadySeen:t,from:Y(a.createdAt),login:o(ve,{capitalize:!0,login:(d=a.author)==null?void 0:d.login,size:"sm"}),text:"commented"+c,leftIcon:Ma})}else a.state==="COMMENTED"&&(s=o(jn,{className:"timeline-item",comment:a,header:"none",variant:"small"}));return o("div",{className:Ee(a.state==null&&Pe.colorWarning,t&&"already-seen-timeline-item","timeline-item"),children:s})}var us={name:"ou8xsw",styles:"flex:0 0 auto"},ds={name:"ygnveb",styles:"overflow-y:auto;overflow-x:hidden;flex-grow:1"},cs={name:"g0dsyy",styles:"float:left"};function ms({pr:l}){var E,D,O,S,x,C,A,_,B;const e=$.useFragment(rs,l),[n,t]=pe(dn),a=rn(Ul),s=new Set(G((D=(E=e.commits.edges)==null?void 0:E.map(h=>h==null?void 0:h.node))==null?void 0:D.map(h=>h==null?void 0:h.commit.oid))),i=ee(zt),{versions:r}=Vl(e),u=new Map;for(const h of r.slice().reverse())for(const U of h.commitOids)u.set(U,h.number);const m=$a();b.useCallback(h=>{m(h,e.id)},[m,e.id,t]);const d=b.useRef(null),[g,p]=b.useState(void 0),c=b.useRef(null),y=b.useCallback(h=>{h.preventDefault&&h.preventDefault(),p(window.innerWidth-h.x)},[]),f=b.useCallback(h=>{window.removeEventListener("mousemove",y),window.removeEventListener("mouseup",f)},[y]),k=b.useCallback(h=>{h.preventDefault&&h.preventDefault(),window.addEventListener("mousemove",y),window.addEventListener("mouseup",f)},[f,y]);b.useEffect(()=>{c.current!=null&&(c.current.scrollTop=0)},[c,e]);const P=G((S=(O=e.comments)==null?void 0:O.edges)==null?void 0:S.map(h=>h==null?void 0:h.node)).map(h=>({createdAt:Y(h.createdAt),node:h,type:"comment"})),T=G((C=(x=e.reviews)==null?void 0:x.edges)==null?void 0:C.map(h=>h==null?void 0:h.node)).map(h=>({createdAt:Y(h.createdAt),node:h,type:"review"})),v=G(r).filter(h=>h.createdAt!=null).map(h=>({createdAt:h.createdAt,node:h,type:"versionHistory"})),w=G((A=e.timelineCommits.edges)==null?void 0:A.map(h=>h==null?void 0:h.node)).map(h=>{var U;return{createdAt:Y((U=h.commit)==null?void 0:U.committedDate),node:h.commit,type:"commit"}}),q=e.mergedAt==null?null:{createdAt:Y(e.mergedAt),node:e.mergedBy,type:"merge"},F=[...P,...T,...v,...w,q],K=Rl(G((B=(_=e.reviews)==null?void 0:_.edges)==null?void 0:B.map(h=>h==null?void 0:h.node)).filter(h=>{var U;return((U=h.author)==null?void 0:U.login)===i})),M=G(F).sort((h,U)=>U.createdAt.diff(h.createdAt)).map(h=>{var U,J,W,V,fe,ue,Se,Ae;if(h.type==="review"&&((U=h.node)==null?void 0:U.state)!=null){const me=h.node;return o(os,{alreadySeen:(h==null?void 0:h.createdAt)<(K==null?void 0:K.createdAt),commits:u,currentCommits:s,review:me},me.id)}else if(h.type==="comment"){const me=h.node;return o(jn,{alreadySeen:(h==null?void 0:h.createdAt)<(K==null?void 0:K.createdAt),className:"timeline-item",comment:me,header:"none",variant:me.id===(K==null?void 0:K.id)?"normal":"small"},me.id)}else{if(h.type=="versionHistory")return o(xn,{label:R(j,{gap:"xxxs",children:[o(Ia,{stroke:1,size:16}),o(ve,{size:"sm",login:(J=h.node)==null?void 0:J.author,color:"dark.3"}),R(z,{size:"sm",children:["updated to v",h.node.number]})]}),size:"md",c:"dark",my:"xxs"},h.node.id);if(h.type==="commit")return R(ce,{gap:0,children:[R(j,{gap:0,align:"center",justify:"space-between",children:[R(j,{gap:0,children:[o(qa,{stroke:1,css:cs,size:16}),o(ve,{login:(fe=(V=(W=h.node)==null?void 0:W.author)==null?void 0:V.user)==null?void 0:fe.login,size:"sm"}),o(z,{span:!0,lineClamp:3,size:"sm",children:" added commit "})]}),o(z,{children:o(Oe,{from:h.createdAt,prefix:""})})]}),o(Ht,{style:{"--text-line-clamp":3},children:(ue=h.node)==null?void 0:ue.message})]},(Se=h.node)==null?void 0:Se.id);if(h.type==="merge")return o(Fn,{leftIcon:Dl,color:"violet",text:`${h.node.login} merged`,from:h==null?void 0:h.createdAt},(Ae=h.node)==null?void 0:Ae.login)}});return R(Me,{children:[o("div",{className:"side-panel-resizer",onMouseDown:h=>k(h)}),R(ce,{className:"side-panel",css:Aa({overflowX:"hidden",width:g},"",""),gap:0,children:[o(as,{pr:e}),o(ce,{ref:c,css:ds,gap:"xs",mt:"xs",children:M}),o(ce,{css:us,children:o(zl,{instanceId:"activityPanel",isDisabled:e.viewerCanUpdate!==!0,onChange:h=>{a(!h),t(d)},converterRef:d})})]})]})}const nt={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitsViewRepositoryFragment",selections:[{args:null,kind:"FragmentSpread",name:"CommitViewRepositoryFragment"}],type:"Repository",abstractKey:null};nt.hash="166d8fb1bb219b363a07c5955453bf3e";const lt=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"ids"}],e=[{kind:"Variable",name:"ids",variableName:"ids"}],n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},t=[{kind:"Literal",name:"first",value:2}],a={alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"CommitsViewSelectedCommitsQuery",selections:[{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"CommitViewFragment"},n,{alias:null,args:t,concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[a],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"}],type:"Commit",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"CommitsViewSelectedCommitsQuery",selections:[{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},n,{kind:"InlineFragment",selections:[a,{alias:null,args:t,concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[a,n,s],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"},{alias:null,args:null,kind:"ScalarField",name:"messageHeadline",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"additions",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"deletions",storageKey:null},s],type:"Commit",abstractKey:null}],storageKey:null}]},params:{cacheID:"6b03dc487f67556e13b2b6138423938c",id:null,metadata:{},name:"CommitsViewSelectedCommitsQuery",operationKind:"query",text:`query CommitsViewSelectedCommitsQuery(
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
`}}}();lt.hash="d8a74ab73e2d09ab3e0a74136deeb2e8";const tt={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitsViewPullRequestFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"baseRef",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:30}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null},{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"CommitViewFragment"},{alias:null,args:[{kind:"Literal",name:"first",value:2}],concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"commits(first:30)"},{args:null,kind:"FragmentSpread",name:"CommitViewPullRequestFragment"}],type:"PullRequest",abstractKey:null};tt.hash="b50d242b016895a40696393b7c59120b";const at={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitViewPullRequestFragment",selections:[{args:null,kind:"FragmentSpread",name:"CommitFileFragment"}],type:"PullRequest",abstractKey:null};at.hash="4ae6d86093d323d612422dcaccce08f5";const st={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitViewRepositoryFragment",selections:[{args:null,kind:"FragmentSpread",name:"CommitFileRepositoryFragment"}],type:"Repository",abstractKey:null};st.hash="506356fe21d3d2b2b49c594a56785cfb";const it=function(){var l={alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"message",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitViewFragment",selections:[{args:null,kind:"FragmentSpread",name:"CommitFileCommitFragment"},l,{alias:null,args:null,kind:"ScalarField",name:"messageHeadline",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"additions",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"deletions",storageKey:null},e,{alias:null,args:[{kind:"Literal",name:"first",value:2}],concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[l,e],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"}],type:"Commit",abstractKey:null}}();it.hash="4c16f91405370f5dc2e6dff906b2c33a";const rt=function(){var l={alias:null,args:null,kind:"ScalarField",name:"oid",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitFileCommitFragment",selections:[l,{alias:null,args:[{kind:"Literal",name:"first",value:2}],concreteType:"CommitConnection",kind:"LinkedField",name:"parents",plural:!1,selections:[{alias:null,args:null,concreteType:"CommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"node",plural:!1,selections:[l],storageKey:null}],storageKey:null}],storageKey:"parents(first:2)"}],type:"Commit",abstractKey:null}}();rt.hash="b0d4a9b9421f19d0929c3a59b9ddf06f";const ot=function(){var l={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitFileRepositoryFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],storageKey:null},l,{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"defaultBranchRef",plural:!1,selections:[l],storageKey:null}],type:"Repository",abstractKey:null}}();ot.hash="7daf2e7ee0a48811a456965015f24ee9";const ut={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommitFileFragment",selections:[{args:null,kind:"FragmentSpread",name:"FileDiffer2Fragment"}],type:"PullRequest",abstractKey:null};ut.hash="8e82c9bf67c52235d50c587272befcab";function We(l,e,n,t,a="blob"){return`https://github.com/${l}/${e}/${a}/${n}/${t}`}function gs({owner:l,name:e,defaultBranchName:n,commitOid:t,parentCommitOid:a,filename:s}){return R(Q,{shadow:"md",width:200,children:[o(Q.Target,{children:o(wl,{variant:"transparent",children:o(_a,{stroke:1})})}),R(Q.Dropdown,{children:[n!=null&&o(Q.Item,{children:R("a",{href:We(l,e,n,s),target:"_blank",rel:"noreferrer",children:["View in ",n]})}),a!=null&&o(Q.Item,{children:o("a",{href:We(l,e,a,s),target:"_blank",rel:"noreferrer",children:"View in parent commit"})}),o(Q.Item,{children:o("a",{href:We(l,e,t,s),target:"_blank",rel:"noreferrer",children:"View in this commit"})}),o(Q.Divider,{}),n!=null&&o(Q.Item,{children:o("a",{href:We(l,e,n,s,"blame"),target:"_blank",rel:"noreferrer",children:"Blame"})})]})]})}var ps={name:"1bmnxg7",styles:"white-space:nowrap"};function ys({path:l}){const e=l.split("/");return o(Gt,{separatorMargin:"xxxs",style:{overflowX:"hidden",whiteSpace:"nowrap",flexWrap:"nowrap"},children:e.map((n,t)=>{const a=e.slice(t).join("/");return o(Pl,{value:a,children:({copied:s,copy:i})=>o(Qt,{label:s?"Copied":`Copy ${a}`,withArrow:!0,position:"bottom",children:o(z,{component:"a",css:ps,onClick:i,children:n})})},a)})})}const dt=function(){var l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FileDiffer2Fragment",selections:[l,{args:null,kind:"FragmentSpread",name:"CommentThreadPullRequestFragment"},{alias:null,args:[{kind:"Literal",name:"first",value:20}],concreteType:"PullRequestReviewThreadConnection",kind:"LinkedField",name:"reviewThreads",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThreadEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"node",plural:!1,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"path",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"line",storageKey:null},{args:null,kind:"FragmentSpread",name:"CommentThreadPullRequestReviewFragment"}],storageKey:null}],storageKey:null}],storageKey:"reviewThreads(first:20)"}],type:"PullRequest",abstractKey:null}}();dt.hash="c71f21962d45c117190f3ca5b142f414";var wn=new Map,Je=new WeakMap,el=0,fs=void 0;function hs(l){return l?(Je.has(l)||(el+=1,Je.set(l,el.toString())),Je.get(l)):"0"}function ks(l){return Object.keys(l).sort().filter(e=>l[e]!==void 0).map(e=>`${e}_${e==="root"?hs(l.root):l[e]}`).toString()}function vs(l){const e=ks(l);let n=wn.get(e);if(!n){const t=new Map;let a;const s=new IntersectionObserver(i=>{i.forEach(r=>{var u;const m=r.isIntersecting&&a.some(d=>r.intersectionRatio>=d);l.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=m),(u=t.get(r.target))==null||u.forEach(d=>{d(m,r)})})},l);a=s.thresholds||(Array.isArray(l.threshold)?l.threshold:[l.threshold||0]),n={id:e,observer:s,elements:t},wn.set(e,n)}return n}function Rs(l,e,n={},t=fs){if(typeof window.IntersectionObserver>"u"&&t!==void 0){const u=l.getBoundingClientRect();return e(t,{isIntersecting:t,target:l,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:a,observer:s,elements:i}=vs(n),r=i.get(l)||[];return i.has(l)||i.set(l,r),r.push(e),s.observe(l),function(){r.splice(r.indexOf(e),1),r.length===0&&(i.delete(l),s.unobserve(l)),i.size===0&&(s.disconnect(),wn.delete(a))}}function Fs({threshold:l,delay:e,trackVisibility:n,rootMargin:t,root:a,triggerOnce:s,skip:i,initialInView:r,fallbackInView:u,onChange:m}={}){var d;const[g,p]=b.useState(null),c=b.useRef(m),[y,f]=b.useState({inView:!!r,entry:void 0});c.current=m,b.useEffect(()=>{if(i||!g)return;let v;return v=Rs(g,(w,q)=>{f({inView:w,entry:q}),c.current&&c.current(w,q),q.isIntersecting&&s&&v&&(v(),v=void 0)},{root:a,rootMargin:t,threshold:l,trackVisibility:n,delay:e},u),()=>{v&&v()}},[Array.isArray(l)?l.toString():l,g,a,t,s,i,n,u,e]);const k=(d=y.entry)==null?void 0:d.target,P=b.useRef(void 0);!g&&k&&!s&&!i&&P.current!==k&&(P.current=k,f({inView:!!r,entry:void 0}));const T=[p,y.inView,y.entry];return T.ref=T[0],T.inView=T[1],T.entry=T[2],T}var pn=class Ze{constructor(e,n){this.parent=e,this.scopeName=n}static push(e,n){for(const t of n)e=new Ze(e,t);return e}static from(...e){let n=null;for(let t=0;t<e.length;t++)n=new Ze(n,e[t]);return n}push(e){return new Ze(this,e)}getSegments(){let e=this;const n=[];for(;e;)n.push(e.scopeName),e=e.parent;return n.reverse(),n}toString(){return this.getSegments().join(" ")}extends(e){return this===e?!0:this.parent===null?!1:this.parent.extends(e)}getExtensionIfDefined(e){const n=[];let t=this;for(;t&&t!==e;)n.push(t.scopeName),t=t.parent;return t===e?n.reverse():void 0}},en=(l=>(l[l.NotSet=-1]="NotSet",l[l.None=0]="None",l[l.Italic=1]="Italic",l[l.Bold=2]="Bold",l[l.Underline=4]="Underline",l[l.Strikethrough=8]="Strikethrough",l))(en||{}),ws=class se{static toBinaryStr(e){return e.toString(2).padStart(32,"0")}static print(e){const n=se.getLanguageId(e),t=se.getTokenType(e),a=se.getFontStyle(e),s=se.getForeground(e),i=se.getBackground(e)}static getLanguageId(e){return(e&255)>>>0}static getTokenType(e){return(e&768)>>>8}static containsBalancedBrackets(e){return(e&1024)!==0}static getFontStyle(e){return(e&30720)>>>11}static getForeground(e){return(e&16744448)>>>15}static getBackground(e){return(e&4278190080)>>>24}static set(e,n,t,a,s,i,r){let u=se.getLanguageId(e),m=se.getTokenType(e),d=se.containsBalancedBrackets(e)?1:0,g=se.getFontStyle(e),p=se.getForeground(e),c=se.getBackground(e);return n!==0&&(u=n),t!==8&&(m=t),a!==null&&(d=a?1:0),s!==-1&&(g=s),i!==0&&(p=i),r!==0&&(c=r),(u<<0|m<<8|d<<10|g<<11|p<<15|c<<24)>>>0}};var yn=class de{constructor(e,n,t){this.parent=e,this.scopePath=n,this.tokenAttributes=t}static fromExtension(e,n){let t=e,a=(e==null?void 0:e.scopePath)??null;for(const s of n)a=pn.push(a,s.scopeNames),t=new de(t,a,s.encodedTokenAttributes);return t}static createRoot(e,n){return new de(null,new pn(null,e),n)}static createRootAndLookUpScopeName(e,n,t){const a=t.getMetadataForScope(e),s=new pn(null,e),i=t.themeProvider.themeMatch(s),r=de.mergeAttributes(n,a,i);return new de(null,s,r)}get scopeName(){return this.scopePath.scopeName}toString(){return this.getScopeNames().join(" ")}equals(e){return de.equals(this,e)}static equals(e,n){do{if(e===n||!e&&!n)return!0;if(!e||!n||e.scopeName!==n.scopeName||e.tokenAttributes!==n.tokenAttributes)return!1;e=e.parent,n=n.parent}while(!0)}static mergeAttributes(e,n,t){let a=-1,s=0,i=0;return t!==null&&(a=t.fontStyle,s=t.foregroundId,i=t.backgroundId),ws.set(e,n.languageId,n.tokenType,null,a,s,i)}pushAttributed(e,n){if(e===null)return this;if(e.indexOf(" ")===-1)return de._pushAttributed(this,e,n);const t=e.split(/ /g);let a=this;for(const s of t)a=de._pushAttributed(a,s,n);return a}static _pushAttributed(e,n,t){const a=t.getMetadataForScope(n),s=e.scopePath.push(n),i=t.themeProvider.themeMatch(s),r=de.mergeAttributes(e.tokenAttributes,a,i);return new de(e,s,r)}getScopeNames(){return this.scopePath.getSegments()}getExtensionIfDefined(e){var a;const n=[];let t=this;for(;t&&t!==e;)n.push({encodedTokenAttributes:t.tokenAttributes,scopeNames:t.scopePath.getExtensionIfDefined(((a=t.parent)==null?void 0:a.scopePath)??null)}),t=t.parent;return t===e?n.reverse():void 0}},ie,Cs=(ie=class{constructor(e,n,t,a,s,i,r,u){_e(this,"_stackElementBrand");_e(this,"_enterPos");_e(this,"_anchorPos");_e(this,"depth");this.parent=e,this.ruleId=n,this.beginRuleCapturedEOL=s,this.endRule=i,this.nameScopesList=r,this.contentNameScopesList=u,this.depth=this.parent?this.parent.depth+1:1,this._enterPos=t,this._anchorPos=a}equals(e){return e===null?!1:ie._equals(this,e)}static _equals(e,n){return e===n?!0:this._structuralEquals(e,n)?yn.equals(e.contentNameScopesList,n.contentNameScopesList):!1}static _structuralEquals(e,n){do{if(e===n||!e&&!n)return!0;if(!e||!n||e.depth!==n.depth||e.ruleId!==n.ruleId||e.endRule!==n.endRule)return!1;e=e.parent,n=n.parent}while(!0)}clone(){return this}static _reset(e){for(;e;)e._enterPos=-1,e._anchorPos=-1,e=e.parent}reset(){ie._reset(this)}pop(){return this.parent}safePop(){return this.parent?this.parent:this}push(e,n,t,a,s,i,r){return new ie(this,e,n,t,a,s,i,r)}getEnterPos(){return this._enterPos}getAnchorPos(){return this._anchorPos}getRule(e){return e.getRule(this.ruleId)}toString(){const e=[];return this._writeString(e,0),"["+e.join(",")+"]"}_writeString(e,n){var t,a;return this.parent&&(n=this.parent._writeString(e,n)),e[n++]=`(${this.ruleId}, ${(t=this.nameScopesList)==null?void 0:t.toString()}, ${(a=this.contentNameScopesList)==null?void 0:a.toString()})`,n}withContentNameScopesList(e){return this.contentNameScopesList===e?this:this.parent.push(this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,this.endRule,this.nameScopesList,e)}withEndRule(e){return this.endRule===e?this:new ie(this.parent,this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,e,this.nameScopesList,this.contentNameScopesList)}hasSameRuleAs(e){let n=this;for(;n&&n._enterPos===e._enterPos;){if(n.ruleId===e.ruleId)return!0;n=n.parent}return!1}toStateStackFrame(){var e,n,t;return{ruleId:this.ruleId,beginRuleCapturedEOL:this.beginRuleCapturedEOL,endRule:this.endRule,nameScopesList:((n=this.nameScopesList)==null?void 0:n.getExtensionIfDefined(((e=this.parent)==null?void 0:e.nameScopesList)??null))??[],contentNameScopesList:((t=this.contentNameScopesList)==null?void 0:t.getExtensionIfDefined(this.nameScopesList))??[]}}static pushFrame(e,n){const t=yn.fromExtension((e==null?void 0:e.nameScopesList)??null,n.nameScopesList);return new ie(e,n.ruleId,n.enterPos??-1,n.anchorPos??-1,n.beginRuleCapturedEOL,n.endRule,t,yn.fromExtension(t,n.contentNameScopesList))}},_e(ie,"NULL",new ie(null,0,0,0,!1,null,null,null)),ie);Cs.NULL;function be(){}be.prototype={diff:function(e,n){var t,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=a.callback;typeof a=="function"&&(s=a,a={}),this.options=a;var i=this;function r(w){return s?(setTimeout(function(){s(void 0,w)},0),!0):w}e=this.castInput(e),n=this.castInput(n),e=this.removeEmpty(this.tokenize(e)),n=this.removeEmpty(this.tokenize(n));var u=n.length,m=e.length,d=1,g=u+m;a.maxEditLength&&(g=Math.min(g,a.maxEditLength));var p=(t=a.timeout)!==null&&t!==void 0?t:1/0,c=Date.now()+p,y=[{oldPos:-1,lastComponent:void 0}],f=this.extractCommon(y[0],n,e,0);if(y[0].oldPos+1>=m&&f+1>=u)return r([{value:this.join(n),count:n.length}]);var k=-1/0,P=1/0;function T(){for(var w=Math.max(k,-d);w<=Math.min(P,d);w+=2){var q=void 0,F=y[w-1],K=y[w+1];F&&(y[w-1]=void 0);var M=!1;if(K){var E=K.oldPos-w;M=K&&0<=E&&E<u}var D=F&&F.oldPos+1<m;if(!M&&!D){y[w]=void 0;continue}if(!D||M&&F.oldPos+1<K.oldPos?q=i.addToPath(K,!0,void 0,0):q=i.addToPath(F,void 0,!0,1),f=i.extractCommon(q,n,e,w),q.oldPos+1>=m&&f+1>=u)return r(bs(i,q.lastComponent,n,e,i.useLongestToken));y[w]=q,q.oldPos+1>=m&&(P=Math.min(P,w-1)),f+1>=u&&(k=Math.max(k,w+1))}d++}if(s)(function w(){setTimeout(function(){if(d>g||Date.now()>c)return s();T()||w()},0)})();else for(;d<=g&&Date.now()<=c;){var v=T();if(v)return v}},addToPath:function(e,n,t,a){var s=e.lastComponent;return s&&s.added===n&&s.removed===t?{oldPos:e.oldPos+a,lastComponent:{count:s.count+1,added:n,removed:t,previousComponent:s.previousComponent}}:{oldPos:e.oldPos+a,lastComponent:{count:1,added:n,removed:t,previousComponent:s}}},extractCommon:function(e,n,t,a){for(var s=n.length,i=t.length,r=e.oldPos,u=r-a,m=0;u+1<s&&r+1<i&&this.equals(n[u+1],t[r+1]);)u++,r++,m++;return m&&(e.lastComponent={count:m,previousComponent:e.lastComponent}),e.oldPos=r,u},equals:function(e,n){return this.options.comparator?this.options.comparator(e,n):e===n||this.options.ignoreCase&&e.toLowerCase()===n.toLowerCase()},removeEmpty:function(e){for(var n=[],t=0;t<e.length;t++)e[t]&&n.push(e[t]);return n},castInput:function(e){return e},tokenize:function(e){return e.split("")},join:function(e){return e.join("")}};function bs(l,e,n,t,a){for(var s=[],i;e;)s.push(e),i=e.previousComponent,delete e.previousComponent,e=i;s.reverse();for(var r=0,u=s.length,m=0,d=0;r<u;r++){var g=s[r];if(g.removed){if(g.value=l.join(t.slice(d,d+g.count)),d+=g.count,r&&s[r-1].added){var c=s[r-1];s[r-1]=s[r],s[r]=c}}else{if(!g.added&&a){var p=n.slice(m,m+g.count);p=p.map(function(f,k){var P=t[d+k];return P.length>f.length?P:f}),g.value=l.join(p)}else g.value=l.join(n.slice(m,m+g.count));m+=g.count,g.added||(d+=g.count)}}var y=s[u-1];return u>1&&typeof y.value=="string"&&(y.added||y.removed)&&l.equals("",y.value)&&(s[u-2].value+=y.value,s.pop()),s}var nl=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,ll=/\S/,Un=new be;Un.equals=function(l,e){return this.options.ignoreCase&&(l=l.toLowerCase(),e=e.toLowerCase()),l===e||this.options.ignoreWhitespace&&!ll.test(l)&&!ll.test(e)};Un.tokenize=function(l){for(var e=l.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/),n=0;n<e.length-1;n++)!e[n+1]&&e[n+2]&&nl.test(e[n])&&nl.test(e[n+2])&&(e[n]+=e[n+2],e.splice(n+1,2),n--);return e};function tl(l,e,n){return Un.diff(l,e,n)}var ct=new be;ct.tokenize=function(l){this.options.stripTrailingCr&&(l=l.replace(/\r\n/g,`
`));var e=[],n=l.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(var t=0;t<n.length;t++){var a=n[t];t%2&&!this.options.newlineIsToken?e[e.length-1]+=a:(this.options.ignoreWhitespace&&(a=a.trim()),e.push(a))}return e};var Ss=new be;Ss.tokenize=function(l){return l.split(/(\S.+?[.!?])(?=\s+|$)/)};var Ts=new be;Ts.tokenize=function(l){return l.split(/([{}:;,]|\s+)/)};function nn(l){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?nn=function(e){return typeof e}:nn=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},nn(l)}var Ks=Object.prototype.toString,Be=new be;Be.useLongestToken=!0;Be.tokenize=ct.tokenize;Be.castInput=function(l){var e=this.options,n=e.undefinedReplacement,t=e.stringifyReplacer,a=t===void 0?function(s,i){return typeof i>"u"?n:i}:t;return typeof l=="string"?l:JSON.stringify(Cn(l,null,null,a),a,"  ")};Be.equals=function(l,e){return be.prototype.equals.call(Be,l.replace(/,([\r\n])/g,"$1"),e.replace(/,([\r\n])/g,"$1"))};function Cn(l,e,n,t,a){e=e||[],n=n||[],t&&(l=t(a,l));var s;for(s=0;s<e.length;s+=1)if(e[s]===l)return n[s];var i;if(Ks.call(l)==="[object Array]"){for(e.push(l),i=new Array(l.length),n.push(i),s=0;s<l.length;s+=1)i[s]=Cn(l[s],e,n,t,a);return e.pop(),n.pop(),i}if(l&&l.toJSON&&(l=l.toJSON()),nn(l)==="object"&&l!==null){e.push(l),i={},n.push(i);var r=[],u;for(u in l)l.hasOwnProperty(u)&&r.push(u);for(r.sort(),s=0;s<r.length;s+=1)u=r[s],i[u]=Cn(l[u],e,n,t,u);e.pop(),n.pop()}else i=l;return i}var bn=new be;bn.tokenize=function(l){return l.slice()};bn.join=bn.removeEmpty=function(l){return l};const Ps="_code-cell_p4786_1",Ls="_block-header_p4786_9",xs="_file-table_p4786_21",_s="_line-number_p4786_23",Es="_line-number-right_p4786_37",qs="_line-number-comment_p4786_51",Ms="_removed-line_p4786_107",Is="_added-line_p4786_110",As="_context-line_p4786_113",Ds="_intraline-removed_p4786_116",Ns="_intraline-added_p4786_121",te={codeCell:Ps,blockHeader:Ls,fileTable:xs,lineNumber:_s,lineNumberRight:Es,lineNumberComment:qs,removedLine:Ms,addedLine:Is,contextLine:As,intralineRemoved:Ds,intralineAdded:Ns};var $s={programming:[["abap",{extensions:[".abap"]}],["ada",{extensions:[".adb",".ada",".ads"]}],["apex",{extensions:[".cls"]}],["apl",{extensions:[".apl",".dyalog"]}],["applescript",{extensions:[".applescript",".scpt"]}],["asm",{extensions:[".asm",".a51",".i",".inc",".nasm"]}],["awk",{extensions:[".awk",".auk",".gawk",".mawk",".nawk"]}],["ballerina",{extensions:[".bal"]}],["bat",{extensions:[".bat",".cmd"]}],["c",{extensions:[".c",".cats",".h",".idc"]}],["clojure",{extensions:[".clj",".boot",".cl2",".cljc",".cljs",".cljs.hl",".cljscm",".cljx",".hic"],filenames:["riemann.config"]}],["cobol",{extensions:[".cob",".cbl",".ccp",".cobol",".cpy"]}],["coffee",{extensions:[".coffee","._coffee",".cake",".cjsx",".iced"],filenames:["Cakefile"]}],["cpp",{extensions:[".cpp",".c++",".cc",".cp",".cxx",".h",".h++",".hh",".hpp",".hxx",".inc",".inl",".ino",".ipp",".re",".tcc",".tpp"]}],["crystal",{extensions:[".cr"]}],["csharp",{extensions:[".cs",".cake",".csx",".linq"]}],["d",{extensions:[".d",".di"]}],["dart",{extensions:[".dart"]}],["elixir",{extensions:[".ex",".exs"],filenames:["mix.lock"]}],["elm",{extensions:[".elm"]}],["erlang",{extensions:[".erl",".app.src",".es",".escript",".hrl",".xrl",".yrl"],filenames:["Emakefile","rebar.config","rebar.config.lock","rebar.lock"]}],["fish",{extensions:[".fish"]}],["fsharp",{extensions:[".fs",".fsi",".fsx"]}],["gherkin",{extensions:[".feature",".story"]}],["gnuplot",{extensions:[".gp",".gnu",".gnuplot",".p",".plot",".plt"]}],["go",{extensions:[".go"]}],["groovy",{extensions:[".groovy",".grt",".gtpl",".gvy"],filenames:["Jenkinsfile"]}],["hack",{extensions:[".hack",".hh",".hhi",".php"]}],["haskell",{extensions:[".hs",".hs-boot",".hsc"]}],["hcl",{extensions:[".hcl",".nomad",".tf",".tfvars",".workflow"]}],["hlsl",{extensions:[".hlsl",".cginc",".fx",".fxh",".hlsli"]}],["java",{extensions:[".java",".jav"]}],["javascript",{extensions:[".js","._js",".bones",".cjs",".es",".es6",".frag",".gs",".jake",".javascript",".jsb",".jscad",".jsfl",".jsm",".jss",".jsx",".mjs",".njs",".pac",".sjs",".ssjs",".xsjs",".xsjslib"],filenames:["Jakefile"]}],["jsonnet",{extensions:[".jsonnet",".libsonnet"]}],["julia",{extensions:[".jl"]}],["kotlin",{extensions:[".kt",".ktm",".kts"]}],["lisp",{extensions:[".lisp",".asd",".cl",".l",".lsp",".ny",".podsl",".sexp"]}],["lua",{extensions:[".lua",".fcgi",".nse",".p8",".pd_lua",".rbxs",".rockspec",".wlua"],filenames:[".luacheckrc"]}],["make",{extensions:[".mak",".d",".make",".makefile",".mk",".mkfile"],filenames:["BSDmakefile","GNUmakefile","Kbuild","Makefile","Makefile.am","Makefile.boot","Makefile.frag","Makefile.in","Makefile.inc","Makefile.wat","makefile","makefile.sco","mkfile"]}],["matlab",{extensions:[".matlab",".m"]}],["nim",{extensions:[".nim",".nim.cfg",".nimble",".nimrod",".nims"],filenames:["nim.cfg"]}],["nix",{extensions:[".nix"]}],["objective-c",{extensions:[".m",".h"]}],["ocaml",{extensions:[".ml",".eliom",".eliomi",".ml4",".mli",".mll",".mly"]}],["pascal",{extensions:[".pas",".dfm",".dpr",".inc",".lpr",".pascal",".pp"]}],["perl",{extensions:[".pl",".al",".cgi",".fcgi",".perl",".ph",".plx",".pm",".psgi",".t"],filenames:["Makefile.PL","Rexfile","ack","cpanfile"]}],["php",{extensions:[".php",".aw",".ctp",".fcgi",".inc",".php3",".php4",".php5",".phps",".phpt"],filenames:[".php",".php_cs",".php_cs.dist","Phakefile"]}],["plsql",{extensions:[".pls",".bdy",".ddl",".fnc",".pck",".pkb",".pks",".plb",".plsql",".prc",".spc",".sql",".tpb",".tps",".trg",".vw"]}],["powershell",{extensions:[".ps1",".psd1",".psm1"]}],["prolog",{extensions:[".pl",".pro",".prolog",".yap"]}],["puppet",{extensions:[".pp"],filenames:["Modulefile"]}],["purescript",{extensions:[".purs"]}],["python",{extensions:[".py",".cgi",".fcgi",".gyp",".gypi",".lmi",".py3",".pyde",".pyi",".pyp",".pyt",".pyw",".rpy",".smk",".spec",".tac",".wsgi",".xpy"],filenames:[".gclient","DEPS","SConscript","SConstruct","Snakefile","wscript"]}],["r",{extensions:[".r",".rd",".rsx"],filenames:[".Rprofile","expr-dist"]}],["raku",{extensions:[".6pl",".6pm",".nqp",".p6",".p6l",".p6m",".pl",".pl6",".pm",".pm6",".raku",".rakumod",".t"]}],["ruby",{extensions:[".rb",".builder",".eye",".fcgi",".gemspec",".god",".jbuilder",".mspec",".pluginspec",".podspec",".prawn",".rabl",".rake",".rbi",".rbuild",".rbw",".rbx",".ru",".ruby",".spec",".thor",".watchr"],filenames:[".irbrc",".pryrc",".simplecov","Appraisals","Berksfile","Brewfile","Buildfile","Capfile","Dangerfile","Deliverfile","Fastfile","Gemfile","Guardfile","Jarfile","Mavenfile","Podfile","Puppetfile","Rakefile","Snapfile","Thorfile","Vagrantfile","buildfile"]}],["rust",{extensions:[".rs",".rs.in"]}],["sas",{extensions:[".sas"]}],["scala",{extensions:[".scala",".kojo",".sbt",".sc"]}],["scheme",{extensions:[".scm",".sch",".sld",".sls",".sps",".ss"]}],["shaderlab",{extensions:[".shader"]}],["smalltalk",{extensions:[".st",".cs"]}],["solidity",{extensions:[".sol"]}],["swift",{extensions:[".swift"]}],["tcl",{extensions:[".tcl",".adp",".tcl.in",".tm"],filenames:["owh","starfield"]}],["tsx",{extensions:[".tsx"]}],["typescript",{extensions:[".ts"]}],["verilog",{extensions:[".v",".veo"]}],["vhdl",{extensions:[".vhdl",".vhd",".vhf",".vhi",".vho",".vhs",".vht",".vhw"]}],["viml",{extensions:[".vim",".vba",".vmb"],filenames:[".exrc",".gvimrc",".nvimrc",".vimrc","_vimrc","gvimrc","nvimrc","vimrc"]}],["wasm",{extensions:[".wast",".wat"]}],["xsl",{extensions:[".xslt",".xsl"]}]],markup:[["astro",{extensions:[".astro"]}],["css",{extensions:[".css"]}],["erb",{extensions:[".erb",".erb.deface",".rhtml"]}],["haml",{extensions:[".haml",".haml.deface"]}],["handlebars",{extensions:[".handlebars",".hbs"]}],["html",{extensions:[".html",".hta",".htm",".html.hl",".inc",".xht",".xhtml"]}],["latex",{extensions:[".tex",".aux",".bbx",".cbx",".cls",".dtx",".ins",".lbx",".ltx",".mkii",".mkiv",".mkvi",".sty",".toc"]}],["less",{extensions:[".less"]}],["postcss",{extensions:[".pcss",".postcss"]}],["pug",{extensions:[".jade",".pug"]}],["razor",{extensions:[".cshtml",".razor"]}],["sass",{extensions:[".sass"]}],["scss",{extensions:[".scss"]}],["stylus",{extensions:[".styl"]}],["svelte",{extensions:[".svelte"]}],["tex",{extensions:[".tex",".aux",".bbx",".cbx",".cls",".dtx",".ins",".lbx",".ltx",".mkii",".mkiv",".mkvi",".sty",".toc"]}],["twig",{extensions:[".twig"]}],["vue",{extensions:[".vue"]}]],data:[["apache",{extensions:[".apacheconf",".vhost"],filenames:[".htaccess","apache2.conf","httpd.conf"]}],["diff",{extensions:[".diff",".patch"]}],["graphql",{extensions:[".graphql",".gql",".graphqls"]}],["ini",{extensions:[".ini",".cfg",".dof",".lektorproject",".prefs",".pro",".properties"],filenames:["buildozer.spec"]}],["json",{extensions:[".json",".avsc",".geojson",".gltf",".har",".ice",".JSON-tmLanguage",".jsonl",".mcmeta",".tfstate",".tfstate.backup",".topojson",".webapp",".webmanifest",".yy",".yyp"],filenames:[".arcconfig",".auto-changelog",".c8rc",".htmlhintrc",".imgbotconfig",".nycrc",".tern-config",".tern-project",".watchmanconfig","Pipfile.lock","composer.lock","mcmod.info"]}],["jsonc",{extensions:[".jsonc",".sublime-build",".sublime-commands",".sublime-completions",".sublime-keymap",".sublime-macro",".sublime-menu",".sublime-mousemap",".sublime-project",".sublime-settings",".sublime-theme",".sublime-workspace",".sublime_metrics",".sublime_session"],filenames:[".babelrc",".eslintrc.json",".jscsrc",".jshintrc",".jslintrc","api-extractor.json","devcontainer.json","jsconfig.json","language-configuration.json","tsconfig.json","tslint.json"]}],["nginx",{extensions:[".nginx",".nginxconf",".vhost"],filenames:["nginx.conf"]}],["prisma",{extensions:[".prisma"]}],["sparql",{extensions:[".sparql",".rq"]}],["sql",{extensions:[".sql",".cql",".ddl",".inc",".mysql",".prc",".tab",".udf",".viw"]}],["toml",{extensions:[".toml"],filenames:["Cargo.lock","Gopkg.lock","Pipfile","poetry.lock"]}],["turtle",{extensions:[".ttl"]}],["xml",{extensions:[".xml",".adml",".admx",".ant",".axml",".builds",".ccproj",".ccxml",".clixml",".cproject",".cscfg",".csdef",".csl",".csproj",".ct",".depproj",".dita",".ditamap",".ditaval",".dll.config",".dotsettings",".filters",".fsproj",".fxml",".glade",".gml",".gmx",".grxml",".gst",".iml",".ivy",".jelly",".jsproj",".kml",".launch",".mdpolicy",".mjml",".mm",".mod",".mxml",".natvis",".ncl",".ndproj",".nproj",".nuspec",".odd",".osm",".pkgproj",".pluginspec",".proj",".props",".ps1xml",".psc1",".pt",".rdf",".res",".resx",".rs",".rss",".sch",".scxml",".sfproj",".shproj",".srdf",".storyboard",".sublime-snippet",".targets",".tml",".ts",".tsx",".ui",".urdf",".ux",".vbproj",".vcxproj",".vsixmanifest",".vssettings",".vstemplate",".vxml",".wixproj",".workflow",".wsdl",".wsf",".wxi",".wxl",".wxs",".x3d",".xacro",".xaml",".xib",".xlf",".xliff",".xmi",".xml.dist",".xmp",".xproj",".xsd",".xspec",".xul",".zcml"],filenames:[".classpath",".cproject",".project","App.config","NuGet.config","Settings.StyleCop","Web.Debug.config","Web.Release.config","Web.config","packages.config"]}],["yaml",{extensions:[".yml",".mir",".reek",".rviz",".sublime-syntax",".syntax",".yaml",".yaml-tmlanguage",".yaml.sed",".yml.mysql"],filenames:[".clang-format",".clang-tidy",".gemrc","CITATION.cff","glide.lock","yarn.lock"]}]],prose:[["markdown",{extensions:[".md",".markdown",".mdown",".mdwn",".mdx",".mkd",".mkdn",".mkdown",".ronn",".scd",".workbook"],filenames:["contents.lr"]}]]},js=(l,e)=>{var n,t;return!!((n=l.extensions)!=null&&n.find(a=>e.endsWith(a))||(t=l.filenames)!=null&&t.includes(e))},Us=l=>{for(const e of Object.values($s)){const n=e.find(([,t])=>js(t,l));if(n)return n[0]}};function Os(){const l=$.useRelayEnvironment(),e=rn(cn);return n=>$.commitLocalUpdate(l,t=>{new xe(t).delete(n),e(s=>s.delete(n))})}function Bs(){const l=$.useRelayEnvironment(),[e,n]=pe(cn);return pe(ze),(t,a,s,i)=>$.commitLocalUpdate(l,r=>{var g,p;const u=new xe(r),m=e.findEntry((c,y)=>c.path===t&&c.line===a);if(m!=null){const[c,y]=m,f=u.get(c);f==null||f.setValues({isPending:!0,createdAt:Y().toISOString(),viewerCanReply:!0});return}const d={isPending:!0,createdAt:Y().toISOString(),startLine:i==null?null:a,line:i??a,path:t,viewerCanReply:!0};(p=(g=u.get(s))==null?void 0:g.createAndAppendNodeToEdge(r,"reviewThreads",{first:20},"PullRequestReviewThreadConnection","PullRequestReviewThreadEdge","PullRequestReviewThread",d))==null||p.then(({nodeId:c,node:y})=>{n(f=>f.set(c,d))})})}const mt={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommentThreadPullRequestFragment",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:30}],concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"}],type:"PullRequest",abstractKey:null};mt.hash="aa1f6a4d5384a0133128bd587d5501f7";const gt=function(){var l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"line",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"startLine",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CommentThreadPullRequestReviewFragment",selections:[l,{alias:null,args:null,kind:"ScalarField",name:"isResolved",storageKey:null},e,n,{alias:null,args:[{kind:"Literal",name:"first",value:20}],concreteType:"PullRequestReviewCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReviewComment",kind:"LinkedField",name:"node",plural:!1,selections:[l,n,e,{args:null,kind:"FragmentSpread",name:"CommentFragment"}],storageKey:null}],storageKey:null}],storageKey:"comments(first:20)"},{alias:null,args:null,kind:"ScalarField",name:"viewerCanReply",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanResolve",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewerCanUnresolve",storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isPending",storageKey:null}]}],type:"PullRequestReviewThread",abstractKey:null}}();gt.hash="fdad2bca9cc9fa29e9ba28f0528953d1";const pt=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"input"}],e=[{kind:"Variable",name:"input",variableName:"input"}],n={alias:null,args:null,kind:"ScalarField",name:"isResolved",storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"resolveMutationResolveReviewThreadMutation",selections:[{alias:null,args:e,concreteType:"ResolveReviewThreadPayload",kind:"LinkedField",name:"resolveReviewThread",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"thread",plural:!1,selections:[n],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"resolveMutationResolveReviewThreadMutation",selections:[{alias:null,args:e,concreteType:"ResolveReviewThreadPayload",kind:"LinkedField",name:"resolveReviewThread",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"thread",plural:!1,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:"641695ec9879785ab75cf16964a6790c",id:null,metadata:{},name:"resolveMutationResolveReviewThreadMutation",operationKind:"mutation",text:`mutation resolveMutationResolveReviewThreadMutation(
  $input: ResolveReviewThreadInput!
) {
  resolveReviewThread(input: $input) {
    thread {
      isResolved
      id
    }
  }
}
`}}}();pt.hash="f70941499b9849ac6ef09d817901d77e";const Vs=pt;function zs(){const[l,e]=$.useMutation(Vs);return[(n,t)=>l({variables:{input:{threadId:n}},onCompleted:t}),e]}const yt=function(){var l=[{defaultValue:null,kind:"LocalArgument",name:"input"}],e=[{kind:"Variable",name:"input",variableName:"input"}],n={alias:null,args:null,kind:"ScalarField",name:"isResolved",storageKey:null};return{fragment:{argumentDefinitions:l,kind:"Fragment",metadata:null,name:"unresolveMutationResolveReviewThreadMutation",selections:[{alias:null,args:e,concreteType:"UnresolveReviewThreadPayload",kind:"LinkedField",name:"unresolveReviewThread",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"thread",plural:!1,selections:[n],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"unresolveMutationResolveReviewThreadMutation",selections:[{alias:null,args:e,concreteType:"UnresolveReviewThreadPayload",kind:"LinkedField",name:"unresolveReviewThread",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewThread",kind:"LinkedField",name:"thread",plural:!1,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:"902dd181485f550cd286b893d80a18b4",id:null,metadata:{},name:"unresolveMutationResolveReviewThreadMutation",operationKind:"mutation",text:`mutation unresolveMutationResolveReviewThreadMutation(
  $input: UnresolveReviewThreadInput!
) {
  unresolveReviewThread(input: $input) {
    thread {
      isResolved
      id
    }
  }
}
`}}}();yt.hash="97e6df83e28c50be44d194ed35693ced";const Hs=yt;function Gs(){const[l,e]=$.useMutation(Hs);return[(n,t)=>l({variables:{input:{threadId:n}},onCompleted:t}),e]}const Qs=gt,Ws=mt;function Js({reviewThread:l,pr:e}){var E,D,O,S,x;const n=$.useFragment(Qs,l),t=$.useFragment(Ws,e);ge(G((D=(E=t.reviews)==null?void 0:E.edges)==null?void 0:D.map(C=>C==null?void 0:C.node)).map(C=>C.state==null||C.state==="PENDING"));const a=b.useRef(null),[s,i]=b.useState(!1),[r,u,m]=on(n.isResolved,n.isResolved?12:16),d=Ha(),g=Jl(),p=Os(),c=b.useCallback(()=>{var A,_;const C=(A=a==null?void 0:a.current)==null?void 0:A.getMarkdown();C!=null&&(d(C,n.id),(_=a==null?void 0:a.current)==null||_.setMarkdown(""))},[n.id,d]),[y,f]=zs(),[k,P]=Gs(),[T,v]=b.useState(!0),w=G((S=(O=n.comments)==null?void 0:O.edges)==null?void 0:S.map(C=>C==null?void 0:C.node)),q=!n.isPending&&o(ae,{size:n.isResolved?"compact-xs":"compact-sm",variant:"default",disabled:!(n.viewerCanResolve||n.viewerCanUnresolve),loading:f||P,onClick:()=>{n.isResolved?(k(n.id),m(!1)):(y(n.id),m(!0))},children:R(j,{gap:"xxxs",children:[o(La,{stroke:1,size:16}),n.isResolved?"Resolved":"Resolve"]})}),F=n.viewerCanReply&&!r,K=tn(w);let M=null;return K!=null&&(K.startLine!=null?M=`${w.length} comment(s) on lines ${K.startLine}-${(x=tn(w))==null?void 0:x.line}`:M=`${w.length} comment(s) on line ${K.line}`),n.isPending&&(n.startLine!=null?M=`are commenting on lines ${n.startLine}-${n.line}`:M=`are commenting on line ${n.line}`),R(X,{withBorder:!0,radius:0,className:"comment-thread",color:n.isPending?"yellow":void 0,children:[o(X.Section,{withBorder:!0,color:n.isPending?"yellow":void 0,children:R(j,{className:Pe.secondaryText,mx:"sm",my:n.isResolved?2:6,children:[o(z,{size:n.isResolved?"xs":"sm",children:M}),R(j,{align:"center",className:Pe.floatRight,children:[q,!n.isPending&&u]})]})}),R(X.Section,{className:"thread-comment middle",children:[!r&&w.map((C,A)=>o(jn,{comment:C,header:"none",bottomBorder:A!==w.length-1,border:!0},C.id)),F&&R(ce,{gap:0,children:[o(zl,{converterRef:a,onChange:v,instanceId:n.id,m:0}),R(j,{justify:"space-between",m:"xs",mt:"xs",children:[o(ae,{disabled:!n.isPending&&T,onClick:()=>{var C;g(n.id),(C=a==null?void 0:a.current)==null||C.setMarkdown(""),n.isPending&&p(n.id)},size:"compact-sm",variant:"secondary",children:"Cancel"}),R(j,{children:[o(ae,{onClick:()=>i(!0),size:"compact-sm",variant:"secondary",disabled:T,children:"Suggest changes"}),o(ae,{onClick:()=>c(),size:"compact-sm",disabled:T,children:"Save"})]})]})]})]})]})}function Xs(l){return o(Ln,{children:o(Js,{...l})})}const fn=new Worker(new URL(""+new URL("highlightWorker-BOwX-a7M.js",import.meta.url).href,import.meta.url),{type:"module"}),ft=(l,e)=>{const n={color:l.color||e};return l.fontStyle&&(l.fontStyle&en.Italic&&(n.fontStyle="italic"),l.fontStyle&en.Bold&&(n.fontWeight="bold"),l.fontStyle&en.Underline&&(n.textDecoration="underline")),n},hn=l=>l.added?te.intralineAdded:l.removed?te.intralineRemoved:"";function Ys(l,e,n,t){const a=[];let s=0,i=0,r=0;if(!l||l.length===0){for(const u of e)n==="del"&&u.added||n==="add"&&u.removed||u.value&&a.push(o("span",{className:hn(u),style:t?{color:t}:{},children:u.value},`no-shiki-${r++}`));return a}for(const u of e){if(n==="del"&&u.added||n==="add"&&u.removed)continue;let m=u.value;for(;m.length>0;){if(s>=l.length){m&&a.push(o("span",{className:hn(u),style:t?{color:t}:{},children:m},`trailing-${r++}`));break}const d=l[s],p=(d.content||"").substring(i);if(p.length===0){s++,i=0;continue}const c=Math.min(p.length,m.length),y=p.substring(0,c);y&&a.push(o("span",{style:ft(d,t),className:hn(u),children:y},`${r++}-${s}-${i}`)),i+=c,m=m.substring(c)}}return a}function Zs(l){const e=l.split(`
`),n=new Map;let t=[],a=-1;for(const[s,i]of e.entries())i.startsWith("@@")?(t.length>0&&a!==-1&&n.set(a,t.join(`
`)),t=[i],a=s):t.push(i);return t.length>0&&a!==-1&&n.set(a,t.join(`
`)),n}function ei(l,e){var m,d,g;const n=l.split(`
`),t=[];let a,s=0,i=0;if(n.length>0&&n[0].startsWith("@@")){const p=/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@(.*)/.exec(n[0]);p&&(s=parseInt(p[1],10),i=parseInt(p[3],10),a=p[5]?p[5].trim():void 0)}let r=s,u=i;for(let p=1;p<n.length;p++){const c=n[p];c.startsWith("+")?t.push({oldNumber:null,newNumber:u++,type:"add",content:c.slice(1)}):c.startsWith("-")?t.push({oldNumber:r++,newNumber:null,type:"del",content:c.slice(1)}):c.startsWith(" ")?t.push({oldNumber:r++,newNumber:u++,type:"context",content:c.slice(1)}):(c.startsWith("\\")||c.trim()==="")&&c.trim()===""&&((m=n[p-1])!=null&&m.startsWith("+")||(d=n[p-1])!=null&&d.startsWith("-")||(g=n[p-1])!=null&&g.startsWith(" "))}return{lines:t,lineStart:e,header:a}}const ni=dt;function li({patch:l,fileName:e,pr:n}){var M,E,D,O;const{colorScheme:t}=Wt(),[a,s]=mn({}),{ref:i}=Fs({rootMargin:"1000px"}),r=!0,u=$.useFragment(ni,n),m=b.useMemo(()=>{if(!l)return[];const S=Zs(l);return Array.from(S.entries()).map(([x,C])=>ei(C,x))},[r,l]),d=b.useMemo(()=>new Set(m.map(S=>`${e}_${S.lineStart}`)),[m,e,r]),[g,p]=b.useState(!1),[c,y]=mn([null,null]),[f,k]=mn(new Set),P=Bs(),T=b.useCallback(()=>{p(!1),y([null,null])},[y]),v=b.useCallback(S=>{var C,A;const x=parseInt((A=(C=S.target)==null?void 0:C.parentElement)==null?void 0:A.getAttribute("data-line"));p(!0),y(_=>[x,_[1]]),window.addEventListener("mouseup",T)},[y,T]),w=G((O=(D=(E=(M=u==null?void 0:u.reviewThreads)==null?void 0:M.edges)==null?void 0:E.map(S=>S==null?void 0:S.node))==null?void 0:D.flat())==null?void 0:O.filter(S=>S!=null&&(S==null?void 0:S.path)==e)).reduce((S,x)=>{var _;const C=x.line,A=x;return S.has(C)?(_=S.get(C))==null||_.push(A):S.set(C,[A]),S},new Map),q=b.useCallback(S=>{var B,h,U;const x=parseInt((h=(B=S.target)==null?void 0:B.parentElement)==null?void 0:h.getAttribute("data-line"));p(!1),window.removeEventListener("mouseup",T);const[C,A]=c,_=new Set(((U=w.get(x))==null?void 0:U.map(J=>J.startLine??x))??[]);C!=null&&(_.has(x??null)||(C==x?P(e,x,u.id):P(e,C,u.id,x),y([null,null]),S.preventDefault&&S.preventDefault()))},[T,w,c,y,P,e,u.id]),F=b.useCallback(S=>{var C,A;const x=parseInt((A=(C=S.target)==null?void 0:C.parentElement)==null?void 0:A.getAttribute("data-line"));g&&y(_=>[_[0],x])},[y,g]);b.useEffect(()=>{m.length!==0&&m.forEach(({lines:S,lineStart:x})=>{const C=S.map(A=>A.content);if(C.length>0){const A=Us(e)||"plaintext";fn.postMessage({type:"highlight",id:`${e}_${x}`,code:C.join(`
`),lang:A,dark:t==="dark"})}})},[e,t,r,m]),b.useEffect(()=>{const S=x=>{x.data.type==="result"&&d.has(x.data.id)&&s(C=>({...C,[x.data.id]:x.data.tokens}))};return fn.addEventListener("message",S),()=>fn.removeEventListener("message",S)},[d,s]);const K=b.useCallback(S=>{var A,_;const x=(_=(A=S.target)==null?void 0:A.parentElement)==null?void 0:_.getAttribute("data-line");if(x==null)return;const C=parseInt(x);k(B=>{B.has(C)?B.delete(C):B.add(C)})},[k]);return o("div",{ref:i,children:m.map((S,x)=>{const C=a[`${e}_${S.lineStart}`],A=C==null?void 0:C.fg;return R("div",{children:[S.header&&o("div",{className:te.blockHeader,style:x===0?{borderTop:"none"}:void 0,children:S.header}),o("table",{className:te.fileTable,children:o("tbody",{children:S.lines.map((_,B)=>{var V,fe;const h=(V=C==null?void 0:C.tokens)==null?void 0:V[B];let U=null,J=!1;_.type==="del"&&B+1<S.lines.length&&S.lines[B+1].type==="add"?(U=tl(_.content,S.lines[B+1].content),J=!0):_.type==="add"&&B>0&&S.lines[B-1].type==="del"&&(U=tl(S.lines[B-1].content,_.content),J=!0);const W=(_.type==="add"||_.type==="del")&&J&&U;return R(Me,{children:[R("tr",{className:Ee(_.type==="add"&&te.addedLine,_.type==="del"&&te.removedLine),"data-line":_.newNumber,children:[o("td",{className:Ee(te.lineNumber,w.has(_.newNumber)&&te.lineNumberComment),onClick:K,children:_.oldNumber??""}),o("td",{className:Ee(te.lineNumber,te.lineNumberRight,w.has(_.newNumber)&&te.lineNumberComment),"data-line":_.newNumber,onMouseDown:v,onMouseEnter:F,onMouseUp:q,onClick:K,children:_.newNumber??""}),o("td",{className:Ee(te.codeCell,_.type==="context"&&te.contextLine),children:W?Ys(h,U,_.type,A):h&&h.length>0?h.map((ue,Se)=>o("span",{style:ft(ue,A),children:ue.content},Se)):o("span",{style:{whiteSpace:"pre-wrap",color:A||"inherit"},children:_.content})})]},`${S.lineStart}_${_.oldNumber}_${_.newNumber}`),f.has(_.newNumber)&&((fe=w.get(_.newNumber))==null?void 0:fe.map(ue=>o("tr",{className:"comment-container",children:o("td",{colSpan:3,children:o(Xs,{pr:u,reviewThread:ue})})},ue.id)))]})})})})]},`${e}_${S.lineStart}`)})})}const ti=ut,ai=ot,si=rt;function ii(l){return o(b.Suspense,{fallback:o(Kn,{}),children:o(ri,{...l})})}function ri({pr:l,repo:e,commit:n,compareData:t}){var c,y;const a=$.useFragment(ti,l),s=$.useFragment(ai,e),i=$.useFragment(si,n),r=ge((c=i.parents.edges)==null?void 0:c.map(f=>f==null?void 0:f.node)),[u,m,d]=on(),{ref:g,inViewport:p}=ia();return R(Me,{children:[o(X,{className:"file-header",mb:"md",withBorder:!0,style:p?{position:"sticky",top:0,zIndex:50,borderBottomLeftRadius:0,borderBottomRightRadius:0}:void 0,children:o(X.Section,{inheritPadding:!0,onMouseDown:f=>{f.detail>1&&f.preventDefault()},style:{top:-16},withBorder:!0,py:6,children:R(j,{align:"center",justify:"space-between",wrap:"nowrap",children:[o(ys,{path:t.filename}),R(j,{wrap:"nowrap",children:[R(z,{span:!0,c:"green.8",children:["+",t.additions]})," ",R(z,{span:!0,c:"red.8",children:["-",t.deletions]}),R(j,{align:"center",style:{marginLeft:"auto"},gap:"sm",wrap:"nowrap",children:[o(gs,{commitOid:i.oid,defaultBranchName:(y=s.defaultBranchRef)==null?void 0:y.name,filename:t.filename,name:s.name,owner:s.owner.login,parentCommitOid:r==null?void 0:r.oid}),m]})]})]})})},t.filename),o(X,{ref:g,style:{marginTop:"calc(-1 * var(--mantine-spacing-md))",borderTop:"none"},children:!u&&o(X.Section,{style:{padding:0},children:t.patch==null?o(z,{pl:"sm",children:"No diff for this file"}):o(li,{fileName:t.filename,patch:t.patch,pr:a})})})]})}const oi=it,ui=st,di=at;function al({owner:l,name:e,commit:n,pr:t,repo:a,baseRef:s}){var k,P,T;const i=$.useFragment(oi,n),r=$.useFragment(ui,a),u=$.useFragment(di,t),m=ee(Cl),d=G(((P=(k=i==null?void 0:i.parents)==null?void 0:k.edges)==null?void 0:P.map(v=>v==null?void 0:v.node))??[]),g=ge(d),p=bl(l,e,s,i.oid,!m||g!=null),c=b.useRef(null),[y,f]=on();return m&&(d==null?void 0:d.length)>1?o(kn,{className:"commit-header",ref:c,variant:"info",children:i.message}):R(Me,{children:[m?o(kn,{className:"commit-header",ref:c,variant:"info",children:R(j,{children:[R("div",{children:["Commit: ",i.messageHeadline," -"," ",R("span",{className:Pe.colorSuccess,children:["+",i.additions]})," ",R("span",{className:Pe.colorDanger,children:["-",i.deletions]})]}),f]})}):null,!y&&((T=p==null?void 0:p.files)==null?void 0:T.map(v=>o(ii,{commit:i,compareData:v,pr:u,repo:r},v.filename)))]})}const ci=tt,mi=lt,gi=nt;function pi({owner:l,name:e,pr:n,repo:t}){var k,P,T;const a=$.useFragment(ci,n),s=$.useFragment(gi,t),i=ee(Na),r=ee(Da),u=ee(Cl),m=bl(l,e,i==null?void 0:i.oid,r==null?void 0:r.headOid),d=$.useLazyLoadQuery(mi,{ids:(m==null?void 0:m.commits.map(v=>v.node_id))??(r==null?void 0:r.nodeIds)??[]},{fetchPolicy:r==null&&i==null?"store-only":"store-or-network",fetchKey:`${r==null?void 0:r.headOid}...${i==null?void 0:i.oid}`})??null,g=G((k=a.commits.edges)==null?void 0:k.map(v=>{var w;return(w=v==null?void 0:v.node)==null?void 0:w.commit})),p=r==null?g:d.nodes??[],c=(((P=a.commits)==null?void 0:P.totalCount)??0)-p.length,y=Rl(p);if(y==null)return null;if(!u)return o(al,{baseRef:(i==null?void 0:i.oid)??(r==null?void 0:r.baseRef)??((T=a.baseRef)==null?void 0:T.name),commit:y,name:e,owner:l,pr:a,repo:s});const f=p.map(v=>{var q,F;if(v==null||s==null)return null;const w=ge((F=(q=v.parents)==null?void 0:q.edges)==null?void 0:F.map(K=>K==null?void 0:K.node));return o(al,{baseRef:(i==null?void 0:i.oid)??(w==null?void 0:w.oid),commit:v,name:e,owner:l,pr:a,repo:s},v.id)});return R(Me,{children:[c>0&&o(kn,{variant:"warning",children:R("span",{children:[c," more commits and pagination is not implemented!"]})}),f]})}function yi(l){return o(Ln,{children:o(pi,{...l})})}const ht=function(){var l={defaultValue:null,kind:"LocalArgument",name:"id"},e={defaultValue:null,kind:"LocalArgument",name:"includeTeam"},n=[{kind:"Variable",name:"id",variableName:"id"}],t={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},u=[{kind:"Literal",name:"first",value:30}],m={alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},d={kind:"InlineFragment",selections:[a],type:"Node",abstractKey:"__isNode"},g={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[t,m,d],storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},c=[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},r];return{fragment:{argumentDefinitions:[l,e],kind:"Fragment",metadata:null,name:"SummaryPanelFragment2",selections:[{alias:null,args:n,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"SummaryPanelFragment"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[e,l],kind:"Operation",name:"SummaryPanelFragment2",selections:[{alias:null,args:n,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[t,a,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"mergeable",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"closed",storageKey:null},s,i,{alias:null,args:null,kind:"ScalarField",name:"viewerCanMergeAsAdmin",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"number",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isDraft",storageKey:null},r,{alias:null,args:null,kind:"ScalarField",name:"mergeStateStatus",storageKey:null},{alias:null,args:u,concreteType:"IssueCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"IssueCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"IssueComment",kind:"LinkedField",name:"node",plural:!1,selections:[s,a],storageKey:null}],storageKey:null}],storageKey:"comments(first:30)"},{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"baseRef",plural:!1,selections:[{alias:null,args:null,concreteType:"BranchProtectionRule",kind:"LinkedField",name:"branchProtectionRule",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"requiresCodeOwnerReviews",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"requiredApprovingReviewCount",storageKey:null},a],storageKey:null},a],storageKey:null},g,{alias:null,args:u,concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[r,i,g,a],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"},{alias:null,args:u,concreteType:"ReviewRequestConnection",kind:"LinkedField",name:"reviewRequests",plural:!1,selections:[{alias:null,args:null,concreteType:"ReviewRequestEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"ReviewRequest",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"asCodeOwner",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"requestedReviewer",plural:!1,selections:[t,{kind:"InlineFragment",selections:[m],type:"User",abstractKey:null},{condition:"includeTeam",kind:"Condition",passingValue:!0,selections:[{kind:"InlineFragment",selections:[p],type:"Team",abstractKey:null}]},d],storageKey:null},a],storageKey:null}],storageKey:null}],storageKey:"reviewRequests(first:30)"},{alias:"lastCommit",args:[{kind:"Literal",name:"last",value:1}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,concreteType:"StatusCheckRollup",kind:"LinkedField",name:"statusCheckRollup",plural:!1,selections:[r,{alias:null,args:[{kind:"Literal",name:"first",value:50}],concreteType:"StatusCheckRollupContextConnection",kind:"LinkedField",name:"contexts",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null},{alias:null,args:null,concreteType:"CheckRunStateCount",kind:"LinkedField",name:"checkRunCountsByState",plural:!0,selections:c,storageKey:null},{alias:null,args:null,concreteType:"StatusContextStateCount",kind:"LinkedField",name:"statusContextCountsByState",plural:!0,selections:c,storageKey:null},{alias:null,args:null,concreteType:"StatusCheckRollupContextEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[t,{kind:"InlineFragment",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"detailsUrl",storageKey:null},p,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"conclusion",storageKey:null}],type:"CheckRun",abstractKey:null},{kind:"InlineFragment",selections:[a,r,{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"context",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"avatarUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"targetUrl",storageKey:null}],type:"StatusContext",abstractKey:null},d],storageKey:null}],storageKey:null}],storageKey:"contexts(first:50)"},a],storageKey:null},a],storageKey:null},a],storageKey:null}],storageKey:null}],storageKey:"commits(last:1)"}],type:"PullRequest",abstractKey:null}],storageKey:null}]},params:{cacheID:"bc50d3613f650e98dad800e6d0479b4e",id:null,metadata:{},name:"SummaryPanelFragment2",operationKind:"query",text:`query SummaryPanelFragment2(
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
`}}}();ht.hash="13cfaa9eaf6ee99f5d4d75d5c669c431";const kt=function(){var l={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},e=[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],n={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:e,storageKey:null},t=[{kind:"Literal",name:"first",value:30}],a={alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},i=[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},a],r={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{kind:"RootArgument",name:"includeTeam"}],kind:"Fragment",metadata:{refetch:{connection:null,fragmentPathInResult:["node"],operation:ht,identifierInfo:{identifierField:"id",identifierQueryVariableName:"id"}}},name:"SummaryPanelFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"mergeable",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"closed",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},l,{alias:null,args:null,kind:"ScalarField",name:"viewerCanMergeAsAdmin",storageKey:null},{args:null,kind:"FragmentSpread",name:"PRTitleFragment"},{alias:null,args:null,concreteType:"Ref",kind:"LinkedField",name:"baseRef",plural:!1,selections:[{alias:null,args:null,concreteType:"BranchProtectionRule",kind:"LinkedField",name:"branchProtectionRule",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"requiresCodeOwnerReviews",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"requiredApprovingReviewCount",storageKey:null}],storageKey:null}],storageKey:null},n,{alias:null,args:t,concreteType:"PullRequestReviewConnection",kind:"LinkedField",name:"reviews",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestReviewEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestReview",kind:"LinkedField",name:"node",plural:!1,selections:[a,l,n],storageKey:null}],storageKey:null}],storageKey:"reviews(first:30)"},{alias:null,args:t,concreteType:"ReviewRequestConnection",kind:"LinkedField",name:"reviewRequests",plural:!1,selections:[{alias:null,args:null,concreteType:"ReviewRequestEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"ReviewRequest",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"asCodeOwner",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"requestedReviewer",plural:!1,selections:[{kind:"InlineFragment",selections:e,type:"User",abstractKey:null},{condition:"includeTeam",kind:"Condition",passingValue:!0,selections:[{kind:"InlineFragment",selections:[s],type:"Team",abstractKey:null}]}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"reviewRequests(first:30)"},{alias:"lastCommit",args:[{kind:"Literal",name:"last",value:1}],concreteType:"PullRequestCommitConnection",kind:"LinkedField",name:"commits",plural:!1,selections:[{alias:null,args:null,concreteType:"PullRequestCommitEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"PullRequestCommit",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:"Commit",kind:"LinkedField",name:"commit",plural:!1,selections:[{alias:null,args:null,concreteType:"StatusCheckRollup",kind:"LinkedField",name:"statusCheckRollup",plural:!1,selections:[a,{alias:null,args:[{kind:"Literal",name:"first",value:50}],concreteType:"StatusCheckRollupContextConnection",kind:"LinkedField",name:"contexts",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null},{alias:null,args:null,concreteType:"CheckRunStateCount",kind:"LinkedField",name:"checkRunCountsByState",plural:!0,selections:i,storageKey:null},{alias:null,args:null,concreteType:"StatusContextStateCount",kind:"LinkedField",name:"statusContextCountsByState",plural:!0,selections:i,storageKey:null},{alias:null,args:null,concreteType:"StatusCheckRollupContextEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[r,u,{alias:null,args:null,kind:"ScalarField",name:"detailsUrl",storageKey:null},s,{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"conclusion",storageKey:null}],type:"CheckRun",abstractKey:null},{kind:"InlineFragment",selections:[r,u,a,{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"context",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"avatarUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"targetUrl",storageKey:null}],type:"StatusContext",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:"contexts(first:50)"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:"commits(last:1)"},u],type:"PullRequest",abstractKey:null}}();kt.hash="13cfaa9eaf6ee99f5d4d75d5c669c431";const vt=function(){var l={alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PRTitleFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},l,{alias:null,args:null,kind:"ScalarField",name:"number",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isDraft",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mergeStateStatus",storageKey:null},{args:null,kind:"FragmentSpread",name:"PRStatusBadgeFragment"},{alias:null,args:[{kind:"Literal",name:"first",value:30}],concreteType:"IssueCommentConnection",kind:"LinkedField",name:"comments",plural:!1,selections:[{alias:null,args:null,concreteType:"IssueCommentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"IssueComment",kind:"LinkedField",name:"node",plural:!1,selections:[l],storageKey:null}],storageKey:null}],storageKey:"comments(first:30)"}],type:"PullRequest",abstractKey:null}}();vt.hash="c563ed8283e34fa9818e891c36a72247";const Rt=/Stack from \[ghstack\].+?\(oldest at bottom\):\r?\n(?:\*[^\n]+\r?\n?)+/gm,Ft=/#[0-9]{1,}/g;function fi(l){var n,t;const e=l.match(Rt);return((t=(n=e==null?void 0:e.flatMap(a=>a.match(Ft)??[]))==null?void 0:n.map(a=>parseInt(a.slice(1))))==null?void 0:t.reverse())??[]}function hi(l){const e=l.match(Rt);return e&&e.length>0?l.replace(e[0],""):l}const ki=/(?:\*[\n]+\n)+This stack of pull requests is manged by \[Graphite\]/gm;function vi(l){var n;const e=l.match(ki);return((n=e==null?void 0:e.flatMap(t=>t.match(Ft)??[]))==null?void 0:n.map(t=>parseInt(t.slice(1))))??[]}const wt={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PRStatusBadgeFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isDraft",storageKey:null}],type:"PullRequest",abstractKey:null};wt.hash="e3aa488abf6e8c6299c2ed67a962d20c";const Ri=wt;function Ct({color:l,text:e}){return o(qe,{variant:"light",color:l,ml:"sm",radius:"sm",children:e})}function Fi({pr:l,...e}){let n=null,t=null;if(l.draft)n="Draft",t="light";else if(l.state==="MERGED")n="Merged",t="violet";else if(l.state==="CLOSED")n="Closed",t="red";else if(l.state==="open")n="Open",t="green";else return;return o(Ct,{color:t,text:n,...e})}function wi({pr:l,...e}){const{state:n,isDraft:t}=$.useFragment(Ri,l);let a=null,s=null;if(t)a="Draft",s="light";else if(n==="MERGED")a="Merged",s="violet";else if(n==="CLOSED")a="Closed",s="red";else return;return o(Ct,{color:s,text:a,...e})}const Ci=vt;function bi(l,e,n){const t=Xt();return Yt({queries:n.map(s=>({queryFn:()=>t(`repos/${l}/${e}/pulls/${s}`),queryKey:["GetPR",l,e,s],staleTime:1/0}))})}var Si={name:"1xz380v",styles:"flex-grow:1;&:hover{background-color:var(--mantine-color-default-hover);cursor:pointer;}"};function Ti({pr:l}){var f,k,P,T;const e=$.useFragment(Ci,l),n=fi(e.body)??((T=tn((P=(k=(f=e.comments.edges)==null?void 0:f.map(v=>{var w;return(w=v==null?void 0:v.node)==null?void 0:w.body}))==null?void 0:k.map(v=>v==null?null:vi(v)))==null?void 0:P.filter(v=>v!=null)))==null?void 0:T.reverse())??[],a=Sl()["*"],[s,i]=(a==null?void 0:a.split("/"))??[],u=bi(s,i,n).map(v=>v.data).filter(v=>v!=null),m=n==null?void 0:n.findIndex(v=>v===e.number),d=n.length===0?null:`[${m+1}/${n.length}]`,g=vl(),[p,c]=b.useState(!1),y=R(Tl,{size:"md",lineClamp:1,children:[d,e.title,o(wi,{pr:e})]});return n.length===0?y:R(re,{opened:p,onDismiss:()=>c(!1),onChange:c,width:"target",children:[o(re.Target,{children:R(ae,{variant:"subtle",p:0,color:"default",onClick:()=>c(v=>!v),children:[d&&o(Jt,{}),y]})}),o(re.Dropdown,{children:o(ln,{h:500,children:o(ce,{align:"stretch",gap:"xxxs",justify:"flex-start",children:u.map((v,w)=>R(ce,{onClick:()=>{c(q=>!q),setTimeout(()=>{g(`/review/${s}/${i}/${v.number}`)},0)},css:Si,justify:"stretch",gap:0,children:[R(z,{size:"sm",lineClamp:1,children:["[",w+1,"/",n.length,"]",v.title]}),o(Fi,{pr:v,m:0})]},v.number))})})})]})}const Ki=kt;function Pi(l){return o(b.Suspense,{fallback:o(Kn,{}),children:o(Li,{...l})})}function sl(l){if(l==null)return 0;if(l.__typename==="CheckRun")return l.conclusion==="FAILURE"?50:l.conclusion==="TIMED_OUT"||l.conclusion==="STARTUP_FAILURE"?40:l.status==="IN_PROGRESS"?30:l.status!=="COMPLETED"?20:10;if(l.__typename==="StatusContext")switch(l.state){case"FAILURE":return 50;case"ERROR":return 40;case"SUCCESS":return 10;default:return 20}return 0}function il(l){switch(l){case"CHANGES_REQUESTED":return 50;case"APPROVED":return 40;case"COMMENTED":return 30;default:return 10}}function Li({pr:l}){var y,f,k,P,T,v,w,q,F,K,M,E,D,O,S,x,C,A,_,B,h,U,J,W,V,fe,ue,Se,Ae,me,On;const[e]=$.useRefetchableFragment(Ki,l),n=hi(e.body).trim(),t=(f=ge(G((y=e.lastCommit.edges)==null?void 0:y.map(L=>L==null?void 0:L.node))))==null?void 0:f.commit,a=G((T=(P=(k=t==null?void 0:t.statusCheckRollup)==null?void 0:k.contexts)==null?void 0:P.edges)==null?void 0:T.map(L=>L==null?void 0:L.node)),s=ee(Pn),i=(((F=ge((q=(w=(v=t==null?void 0:t.statusCheckRollup)==null?void 0:v.contexts)==null?void 0:w.checkRunCountsByState)==null?void 0:q.filter(L=>L.state==="SUCCESS")))==null?void 0:F.count)??0)+(((E=ge((M=(K=t==null?void 0:t.statusCheckRollup)==null?void 0:K.contexts.statusContextCountsByState)==null?void 0:M.filter(L=>L.state==="SUCCESS")))==null?void 0:E.count)??0),r=((O=(D=t==null?void 0:t.statusCheckRollup)==null?void 0:D.contexts)==null?void 0:O.totalCount)===i,[u,m]=on(r),d=new Map;(x=(S=e.reviewRequests)==null?void 0:S.edges)==null||x.reduce((L,N)=>{var he,Te,De,Ne,$e,je,Bn,Vn,zn,Hn,Gn,Qn;const le=(Te=(he=N==null?void 0:N.node)==null?void 0:he.requestedReviewer)==null?void 0:Te.login;le!=null&&L.set(le,{participated:!1,required:((De=L.get(le))==null?void 0:De.required)||((((Ne=N==null?void 0:N.node)==null?void 0:Ne.asCodeOwner)&&!e.viewerCanMergeAsAdmin&&((je=($e=e.baseRef)==null?void 0:$e.branchProtectionRule)==null?void 0:je.requiresCodeOwnerReviews))??!1)});const H=(Vn=(Bn=N==null?void 0:N.node)==null?void 0:Bn.requestedReviewer)==null?void 0:Vn.name;return H!=null&&L.set(H,{participated:!1,required:((zn=L.get(H))==null?void 0:zn.required)||((((Hn=N==null?void 0:N.node)==null?void 0:Hn.asCodeOwner)&&!e.viewerCanMergeAsAdmin&&((Qn=(Gn=e.baseRef)==null?void 0:Gn.branchProtectionRule)==null?void 0:Qn.requiresCodeOwnerReviews))??!1),isTeam:!0}),L},d),(A=(C=e.reviews)==null?void 0:C.edges)==null||A.reduce((L,N)=>{var he,Te,De,Ne,$e,je;const le=(Te=(he=N==null?void 0:N.node)==null?void 0:he.author)==null?void 0:Te.login;if(le==null)return L;const H=L.get(le);return L.set(le,{participated:!0,required:(H==null?void 0:H.required)??!1}),(H==null||H.date==null||H.date<Y((De=N==null?void 0:N.node)==null?void 0:De.createdAt)&&((Ne=N==null?void 0:N.node)==null?void 0:Ne.state)!=="COMMENTED")&&L.set(le,{participated:!0,required:(H==null?void 0:H.required)??!1,state:(($e=N==null?void 0:N.node)==null?void 0:$e.state)??(H==null?void 0:H.state),date:Y((je=N==null?void 0:N.node)==null?void 0:je.createdAt)}),L},d);const g=Array.from(d.entries());g.filter(([L,N])=>L!=s).sort(([L,{state:N}],[le,{state:H}])=>il(N)-il(H));const p=o(ce,{style:{minHeight:30,maxHeight:200,overflow:"scroll",marginTop:16},children:G(a).sort((L,N)=>sl(N)-sl(L)).map(L=>{if(L.__typename!=="CheckRun"&&L.__typename!=="StatusContext")return null;const N=L.__typename==="CheckRun"?`${L.name}`:L.__typename==="StatusContext"?`${L.context}: ${L.description}`:"",le=L.__typename==="CheckRun"&&L.conclusion==="SUCCESS"||L.__typename==="StatusContext"&&L.state==="SUCCESS",H=L.__typename==="CheckRun"&&L.status==="IN_PROGRESS"||L.__typename==="StatusContext"&&L.state==="PENDING",he=L.__typename==="StatusContext"?L.avatarUrl:null,Te=L.__typename==="StatusContext"?L.targetUrl:L.__typename==="CheckRun"?L.detailsUrl:null;return o(ce,{children:R(j,{align:"center",justify:"space-between",wrap:"nowrap",children:[R(j,{gap:"xs",wrap:"nowrap",children:[le?o(kl,{color:"var(--mantine-color-green-8)",size:16}):H?o(Pa,{color:"var(--mantine-color-yellow-8)",size:16}):o(Ea,{color:"var(--mantine-color-red-8)",size:16}),he!=null&&o("img",{src:he,style:{width:16,marginRight:4,objectFit:"contain"}}),o(z,{size:"sm",lineClamp:1,children:N})]}),o(z,{size:"sm",component:"a",href:Te,rel:"noreferrer",target:"_blank",children:"Details"})]})},L.id)})}),c=R(X.Section,{withBorder:!0,inheritPadding:!0,p:"xs",children:[R(j,{justify:"space-between",wrap:"nowrap",children:[R(j,{wrap:"nowrap",children:[o(qe,{radius:"sm",color:e.mergeable==="MERGEABLE"?"green.8":e.mergeable==="CONFLICTING"?"red":"gray",variant:"light",style:{marginRight:8},children:!e.closed&&e.mergeable==="MERGEABLE"?"Mergeable":e.mergeable==="CONFLICTING"?"Merge Conflicts":"Unknown merge state"}),(((B=(_=t==null?void 0:t.statusCheckRollup)==null?void 0:_.contexts)==null?void 0:B.totalCount)??0)>0&&R(qe,{radius:"sm",color:((h=t==null?void 0:t.statusCheckRollup)==null?void 0:h.state)==="SUCCESS"?"green.8":((U=t==null?void 0:t.statusCheckRollup)==null?void 0:U.state)==="FAILURE"?"red":"yellow.7",variant:"light",style:{marginRight:8},children:["CI (",i,"/",(W=(J=t==null?void 0:t.statusCheckRollup)==null?void 0:J.contexts)==null?void 0:W.totalCount,")"]})]}),m]}),!u&&p]});return R(X,{mb:"md",withBorder:!0,px:"md",children:[R(X.Section,{inheritPadding:!0,p:"xs",withBorder:!0,children:[R(j,{justify:"space-between",align:"center",wrap:"nowrap",children:[o(Ti,{pr:e}),o(j,{justify:"flex-end",align:"center",children:o(wl,{component:"a",variant:"default",href:e.url,target:"_blank",children:o(Zt,{stroke:1})})})]}),R(z,{size:"sm",lineClamp:1,span:!0,children:[o(Oe,{from:Y(e.createdAt),prefix:"Created "})," by"," ",o(ve,{login:(V=e.author)==null?void 0:V.login,size:"sm"})]})]}),o(X.Section,{withBorder:!0,inheritPadding:!0,py:"xs",children:o(Rn,{children:n==null||Fl(n)?"*No description provided*":n})}),o(X.Section,{withBorder:!0,inheritPadding:!0,p:"xs",children:R(j,{children:[o(Tl,{size:"sm",children:"Reviewers"}),R(j,{gap:0,justify:"space-between",children:[o(j,{children:Array.from(g).map(([L,{participated:N,required:le,state:H}])=>o(ve,{size:"sm",login:L,reviewState:H??(N?"COMMENTED":"requested"),required:le},L))}),R(j,{gap:0,children:[((ue=(fe=e.baseRef)==null?void 0:fe.branchProtectionRule)==null?void 0:ue.requiresCodeOwnerReviews)&&e.viewerCanMergeAsAdmin&&o(z,{children:"Codeowners are required"}),((Ae=(Se=e.baseRef)==null?void 0:Se.branchProtectionRule)==null?void 0:Ae.requiredApprovingReviewCount)!=null&&R(z,{children:["Requires ",(On=(me=e.baseRef)==null?void 0:me.branchProtectionRule)==null?void 0:On.requiredApprovingReviewCount," approvals"]})]})]})]})}),c]})}const xi=Nl;function _i(){return o(bt,{summaryPanel:o(gn,{h:"30vh",mb:"md"}),commitsView:o(gn,{h:"50vh",style:{flexGrow:1}}),sidePanel:o(gn,{h:"80vh"})})}function Ei(){return o(b.Suspense,{fallback:o(_i,{}),children:o(ea,{children:o(Mi,{})})})}var qi={name:"1wjgngc",styles:"height:100vh;overflow-y:hidden;flex-wrap:nowrap"};function bt({summaryPanel:l,commitsView:e,sidePanel:n}){return R(j,{css:qi,gap:"sm",p:"sm",children:[R("div",{id:"commits-container",style:{flexBasis:"60vw",overflowY:"auto",height:"100%"},children:[l,e]}),o("div",{style:{flexBasis:"30vw",flexGrow:1,height:"100%",overflowX:"hidden"},children:n})]})}function Mi(){var y,f,k;const e=Sl()["*"],[n,t,a,s,i]=(e==null?void 0:e.split("/"))??[],r=rn(Pn),u=ee(na),m=la(),d=$.useLazyLoadQuery(xi,{owner:n,name:t,id:parseInt(a),includeTeam:m.has(ta.READ_ORG)},{fetchPolicy:"store-and-network"});r(d.viewer.login);const g=(y=d.repository)==null?void 0:y.pullRequest,p=d.repository,c=(k=(f=d.repository)==null?void 0:f.defaultBranchRef)==null?void 0:k.name;return p==null||e==null||g==null||c==null?null:o(bt,{summaryPanel:o(Pi,{pr:g}),commitsView:o(yi,{defaultBranchName:c,name:t,owner:n,pr:g,repo:p}),sidePanel:u==="timeline"&&o(ms,{pr:g})})}function Ii(){return o(Ei,{})}const Ni=Object.freeze(Object.defineProperty({__proto__:null,Component:Ii},Symbol.toStringTag,{value:"Module"}));export{Ni as P,Aa as c};
