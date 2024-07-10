(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5188:function(e,i,l){Promise.resolve().then(l.bind(l,105)),Promise.resolve().then(l.bind(l,5604)),Promise.resolve().then(l.bind(l,1886))},105:function(e,i,l){"use strict";l.r(i);var t=l(5559),a=l(6763);let s=(0,a.memo)(e=>{let i=(0,a.useRef)(null);return(0,t.jsx)("li",{ref:i,className:"event"+(e.slim?" event_slim":""),children:(0,t.jsxs)("button",{className:"event__button",children:[(0,t.jsx)("span",{className:"event__icon event__icon_".concat(e.icon),role:"img","aria-label":e.iconLabel}),(0,t.jsx)("h4",{className:"event__title",children:e.title}),e.subtitle&&(0,t.jsx)("span",{className:"event__subtitle",children:e.subtitle})]})})});i.default=s},5604:function(e,i,l){"use strict";var t=l(5559),a=l(6763);i.default=function(){let[e,i]=(0,a.useState)(null),l=(0,a.useCallback)(()=>{i(e=>!e)},[]);return(0,t.jsxs)("header",{className:"header",children:[(0,t.jsx)("a",{href:"/",className:"header__logo","aria-label":"Яндекс.Дом"}),(0,t.jsx)("button",{className:"header__menu","aria-expanded":e?"true":"false",onClick:l,children:(0,t.jsx)("span",{className:"header__menu-text a11y-hidden",children:e?"Закрыть меню":"Открыть меню"})}),(0,t.jsxs)("ul",{className:"header__links"+(null===e?"":e?" header__links_opened":" header__links-toggled"),children:[(0,t.jsx)("li",{className:"header__item",children:(0,t.jsx)("a",{className:"header__link header__link_current",href:"/","aria-current":"page",children:"Сводка"})}),(0,t.jsx)("li",{className:"header__item",children:(0,t.jsx)("a",{className:"header__link",href:"/devices",children:"Устройства"})}),(0,t.jsx)("li",{className:"header__item",children:(0,t.jsx)("a",{className:"header__link",href:"/scripts",children:"Сценарии"})})]})]})}},1886:function(e,i,l){"use strict";l.d(i,{default:function(){return o}});var t=l(5559),a=l(6763);let s={all:{title:"Все",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]},kitchen:{title:"Кухня",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"}]},hall:{title:"Зал",items:[{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Выключено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Выключено"}]},lights:{title:"Лампочки",items:[{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"}]},cameras:{title:"Камеры",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]}};for(let e=0;e<6;++e)s.all.items=[...s.all.items,...s.all.items];let n=Object.keys(s);var c=l(105),r=e=>{let{setActiveTab:i,activeTab:l}=e;return(0,t.jsxs)("div",{className:"section__title",children:[(0,t.jsx)("h2",{className:"section__title-header",children:"Избранные устройства"}),(0,t.jsx)("select",{className:"section__select",defaultValue:"all",onChange:e=>i(e.target.value),children:n.map(e=>(0,t.jsx)("option",{value:e,children:s[e].title},e))}),(0,t.jsx)("ul",{role:"tablist",className:"section__tabs",children:n.map(e=>(0,t.jsx)("li",{role:"tab","aria-selected":e===l?"true":"false",tabIndex:e===l?0:void 0,className:"section__tab"+(e===l?" section__tab_active":""),id:"tab_".concat(e),"aria-controls":"panel_".concat(e),onClick:()=>i(e),children:s[e].title},e))})]})},o=()=>{var e;let[i,l]=(0,a.useState)(null!==(e=new URLSearchParams((0,window.location.search)).get("tab"))&&void 0!==e?e:"all"),n=(0,a.useRef)(null),[o,u]=(0,a.useState)(!1);(0,a.useEffect)(()=>{var e,i,l,t,a;let s=(null!==(t=null===(i=n.current)||void 0===i?void 0:null===(e=i.querySelector('div[aria-hidden="false"] ul'))||void 0===e?void 0:e.scrollWidth)&&void 0!==t?t:-1)>(null!==(a=null===(l=n.current)||void 0===l?void 0:l.offsetWidth)&&void 0!==a?a:1/0);s!==o&&u(s)},[i,o]);let h=(0,a.useCallback)(()=>{var e;let i=null===(e=n.current)||void 0===e?void 0:e.querySelector(".section__panel:not(.section__panel_hidden)");i&&i.scrollTo({left:i.scrollLeft+400,behavior:"smooth"})},[]),d=s[i].items;return(0,t.jsxs)("section",{className:"section main__devices",children:[(0,t.jsx)(r,{activeTab:i,setActiveTab:l}),(0,t.jsxs)("div",{className:"section__panel-wrapper",ref:n,children:[(0,t.jsx)("div",{role:"tabpanel",className:"section__panel","aria-hidden":i==i?"false":"true",id:"panel_".concat(i),"aria-labelledby":"tab_".concat(i),children:(0,t.jsx)("ul",{className:"section__panel-list",children:d.map((e,i)=>(0,t.jsx)(c.default,{...e},i))})},i),o&&(0,t.jsx)("div",{className:"section__arrow",onClick:h})]})]})}}},function(e){e.O(0,[192,221,744],function(){return e(e.s=5188)}),_N_E=e.O()}]);