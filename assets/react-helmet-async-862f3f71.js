import{R as A,r as z}from"./react-95444d27.js";import{p as l}from"./prop-types-4d501b15.js";import{r as te}from"./react-fast-compare-8dea2db9.js";import{b as G}from"./invariant-c4c304c3.js";import{s as re}from"./shallowequal-6a8ebf1c.js";function h(){return h=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},h.apply(this,arguments)}function F(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,B(t,n)}function B(t,n){return B=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r},B(t,n)}function W(t,n){if(t==null)return{};var r,e,i={},a=Object.keys(t);for(e=0;e<a.length;e++)n.indexOf(r=a[e])>=0||(i[r]=t[r]);return i}var c={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},ne={rel:["amphtml","canonical","alternate"]},ie={type:["application/ld+json"]},oe={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},J=Object.keys(c).map(function(t){return c[t]}),j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ae=Object.keys(j).reduce(function(t,n){return t[j[n]]=n,t},{}),S=function(t,n){for(var r=t.length-1;r>=0;r-=1){var e=t[r];if(Object.prototype.hasOwnProperty.call(e,n))return e[n]}return null},se=function(t){var n=S(t,c.TITLE),r=S(t,"titleTemplate");if(Array.isArray(n)&&(n=n.join("")),r&&n)return r.replace(/%s/g,function(){return n});var e=S(t,"defaultTitle");return n||e||void 0},ce=function(t){return S(t,"onChangeClientState")||function(){}},R=function(t,n){return n.filter(function(r){return r[t]!==void 0}).map(function(r){return r[t]}).reduce(function(r,e){return h({},r,e)},{})},ue=function(t,n){return n.filter(function(r){return r[c.BASE]!==void 0}).map(function(r){return r[c.BASE]}).reverse().reduce(function(r,e){if(!r.length)for(var i=Object.keys(e),a=0;a<i.length;a+=1){var s=i[a].toLowerCase();if(t.indexOf(s)!==-1&&e[s])return r.concat(e)}return r},[])},I=function(t,n,r){var e={};return r.filter(function(i){return!!Array.isArray(i[t])||(i[t]!==void 0&&console&&typeof console.warn=="function"&&console.warn("Helmet: "+t+' should be of type "Array". Instead found type "'+typeof i[t]+'"'),!1)}).map(function(i){return i[t]}).reverse().reduce(function(i,a){var s={};a.filter(function(d){for(var p,g=Object.keys(d),T=0;T<g.length;T+=1){var m=g[T],v=m.toLowerCase();n.indexOf(v)===-1||p==="rel"&&d[p].toLowerCase()==="canonical"||v==="rel"&&d[v].toLowerCase()==="stylesheet"||(p=v),n.indexOf(m)===-1||m!=="innerHTML"&&m!=="cssText"&&m!=="itemprop"||(p=m)}if(!p||!d[p])return!1;var C=d[p].toLowerCase();return e[p]||(e[p]={}),s[p]||(s[p]={}),!e[p][C]&&(s[p][C]=!0,!0)}).reverse().forEach(function(d){return i.push(d)});for(var o=Object.keys(s),u=0;u<o.length;u+=1){var f=o[u],y=h({},e[f],s[f]);e[f]=y}return i},[]).reverse()},le=function(t,n){if(Array.isArray(t)&&t.length){for(var r=0;r<t.length;r+=1)if(t[r][n])return!0}return!1},$=function(t){return Array.isArray(t)?t.join(""):t},D=function(t,n){return Array.isArray(t)?t.reduce(function(r,e){return function(i,a){for(var s=Object.keys(i),o=0;o<s.length;o+=1)if(a[s[o]]&&a[s[o]].includes(i[s[o]]))return!0;return!1}(e,n)?r.priority.push(e):r.default.push(e),r},{priority:[],default:[]}):{default:t}},Q=function(t,n){var r;return h({},t,((r={})[n]=void 0,r))},pe=[c.NOSCRIPT,c.SCRIPT,c.STYLE],U=function(t,n){return n===void 0&&(n=!0),n===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(t){return Object.keys(t).reduce(function(n,r){var e=t[r]!==void 0?r+'="'+t[r]+'"':""+r;return n?n+" "+e:e},"")},X=function(t,n){return n===void 0&&(n={}),Object.keys(t).reduce(function(r,e){return r[j[e]||e]=t[e],r},n)},L=function(t,n){return n.map(function(r,e){var i,a=((i={key:e})["data-rh"]=!0,i);return Object.keys(r).forEach(function(s){var o=j[s]||s;o==="innerHTML"||o==="cssText"?a.dangerouslySetInnerHTML={__html:r.innerHTML||r.cssText}:a[o]=r[s]}),A.createElement(t,a)})},b=function(t,n,r){switch(t){case c.TITLE:return{toComponent:function(){return i=n.titleAttributes,(a={key:e=n.title})["data-rh"]=!0,s=X(i,a),[A.createElement(c.TITLE,s,e)];var e,i,a,s},toString:function(){return function(e,i,a,s){var o=V(a),u=$(i);return o?"<"+e+' data-rh="true" '+o+">"+U(u,s)+"</"+e+">":"<"+e+' data-rh="true">'+U(u,s)+"</"+e+">"}(t,n.title,n.titleAttributes,r)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return X(n)},toString:function(){return V(n)}};default:return{toComponent:function(){return L(t,n)},toString:function(){return function(e,i,a){return i.reduce(function(s,o){var u=Object.keys(o).filter(function(d){return!(d==="innerHTML"||d==="cssText")}).reduce(function(d,p){var g=o[p]===void 0?p:p+'="'+U(o[p],a)+'"';return d?d+" "+g:g},""),f=o.innerHTML||o.cssText||"",y=pe.indexOf(e)===-1;return s+"<"+e+' data-rh="true" '+u+(y?"/>":">"+f+"</"+e+">")},"")}(t,n,r)}}}},K=function(t){var n=t.baseTag,r=t.bodyAttributes,e=t.encode,i=t.htmlAttributes,a=t.noscriptTags,s=t.styleTags,o=t.title,u=o===void 0?"":o,f=t.titleAttributes,y=t.linkTags,d=t.metaTags,p=t.scriptTags,g={toComponent:function(){},toString:function(){return""}};if(t.prioritizeSeoTags){var T=function(m){var v=m.linkTags,C=m.scriptTags,E=m.encode,k=D(m.metaTags,oe),H=D(v,ne),N=D(C,ie);return{priorityMethods:{toComponent:function(){return[].concat(L(c.META,k.priority),L(c.LINK,H.priority),L(c.SCRIPT,N.priority))},toString:function(){return b(c.META,k.priority,E)+" "+b(c.LINK,H.priority,E)+" "+b(c.SCRIPT,N.priority,E)}},metaTags:k.default,linkTags:H.default,scriptTags:N.default}}(t);g=T.priorityMethods,y=T.linkTags,d=T.metaTags,p=T.scriptTags}return{priority:g,base:b(c.BASE,n,e),bodyAttributes:b("bodyAttributes",r,e),htmlAttributes:b("htmlAttributes",i,e),link:b(c.LINK,y,e),meta:b(c.META,d,e),noscript:b(c.NOSCRIPT,a,e),script:b(c.SCRIPT,p,e),style:b(c.STYLE,s,e),title:b(c.TITLE,{title:u,titleAttributes:f},e)}},P=[],_=function(t,n){var r=this;n===void 0&&(n=typeof document<"u"),this.instances=[],this.value={setHelmet:function(e){r.context.helmet=e},helmetInstances:{get:function(){return r.canUseDOM?P:r.instances},add:function(e){(r.canUseDOM?P:r.instances).push(e)},remove:function(e){var i=(r.canUseDOM?P:r.instances).indexOf(e);(r.canUseDOM?P:r.instances).splice(i,1)}}},this.context=t,this.canUseDOM=n,n||(t.helmet=K({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},ee=A.createContext({}),fe=l.shape({setHelmet:l.func,helmetInstances:l.shape({get:l.func,add:l.func,remove:l.func})}),de=typeof document<"u",x=function(t){function n(r){var e;return(e=t.call(this,r)||this).helmetData=new _(e.props.context,n.canUseDOM),e}return F(n,t),n.prototype.render=function(){return A.createElement(ee.Provider,{value:this.helmetData.value},this.props.children)},n}(z.Component);x.canUseDOM=de,x.propTypes={context:l.shape({helmet:l.shape()}),children:l.node.isRequired},x.defaultProps={context:{}},x.displayName="HelmetProvider";var O=function(t,n){var r,e=document.head||document.querySelector(c.HEAD),i=e.querySelectorAll(t+"[data-rh]"),a=[].slice.call(i),s=[];return n&&n.length&&n.forEach(function(o){var u=document.createElement(t);for(var f in o)Object.prototype.hasOwnProperty.call(o,f)&&(f==="innerHTML"?u.innerHTML=o.innerHTML:f==="cssText"?u.styleSheet?u.styleSheet.cssText=o.cssText:u.appendChild(document.createTextNode(o.cssText)):u.setAttribute(f,o[f]===void 0?"":o[f]));u.setAttribute("data-rh","true"),a.some(function(y,d){return r=d,u.isEqualNode(y)})?a.splice(r,1):s.push(u)}),a.forEach(function(o){return o.parentNode.removeChild(o)}),s.forEach(function(o){return e.appendChild(o)}),{oldTags:a,newTags:s}},q=function(t,n){var r=document.getElementsByTagName(t)[0];if(r){for(var e=r.getAttribute("data-rh"),i=e?e.split(","):[],a=[].concat(i),s=Object.keys(n),o=0;o<s.length;o+=1){var u=s[o],f=n[u]||"";r.getAttribute(u)!==f&&r.setAttribute(u,f),i.indexOf(u)===-1&&i.push(u);var y=a.indexOf(u);y!==-1&&a.splice(y,1)}for(var d=a.length-1;d>=0;d-=1)r.removeAttribute(a[d]);i.length===a.length?r.removeAttribute("data-rh"):r.getAttribute("data-rh")!==s.join(",")&&r.setAttribute("data-rh",s.join(","))}},Z=function(t,n){var r=t.baseTag,e=t.htmlAttributes,i=t.linkTags,a=t.metaTags,s=t.noscriptTags,o=t.onChangeClientState,u=t.scriptTags,f=t.styleTags,y=t.title,d=t.titleAttributes;q(c.BODY,t.bodyAttributes),q(c.HTML,e),function(m,v){m!==void 0&&document.title!==m&&(document.title=$(m)),q(c.TITLE,v)}(y,d);var p={baseTag:O(c.BASE,r),linkTags:O(c.LINK,i),metaTags:O(c.META,a),noscriptTags:O(c.NOSCRIPT,s),scriptTags:O(c.SCRIPT,u),styleTags:O(c.STYLE,f)},g={},T={};Object.keys(p).forEach(function(m){var v=p[m],C=v.newTags,E=v.oldTags;C.length&&(g[m]=C),E.length&&(T[m]=p[m].oldTags)}),n&&n(),o(t,g,T)},w=null,M=function(t){function n(){for(var e,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))||this).rendered=!1,e}F(n,t);var r=n.prototype;return r.shouldComponentUpdate=function(e){return!re(e,this.props)},r.componentDidUpdate=function(){this.emitChange()},r.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},r.emitChange=function(){var e,i,a=this.props.context,s=a.setHelmet,o=null,u=(e=a.helmetInstances.get().map(function(f){var y=h({},f.props);return delete y.context,y}),{baseTag:ue(["href"],e),bodyAttributes:R("bodyAttributes",e),defer:S(e,"defer"),encode:S(e,"encodeSpecialCharacters"),htmlAttributes:R("htmlAttributes",e),linkTags:I(c.LINK,["rel","href"],e),metaTags:I(c.META,["name","charset","http-equiv","property","itemprop"],e),noscriptTags:I(c.NOSCRIPT,["innerHTML"],e),onChangeClientState:ce(e),scriptTags:I(c.SCRIPT,["src","innerHTML"],e),styleTags:I(c.STYLE,["cssText"],e),title:se(e),titleAttributes:R("titleAttributes",e),prioritizeSeoTags:le(e,"prioritizeSeoTags")});x.canUseDOM?(i=u,w&&cancelAnimationFrame(w),i.defer?w=requestAnimationFrame(function(){Z(i,function(){w=null})}):(Z(i),w=null)):K&&(o=K(u)),s(o)},r.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},r.render=function(){return this.init(),null},n}(z.Component);M.propTypes={context:fe.isRequired},M.displayName="HelmetDispatcher";var he=["children"],me=["children"],Y=function(t){function n(){return t.apply(this,arguments)||this}F(n,t);var r=n.prototype;return r.shouldComponentUpdate=function(e){return!te(Q(this.props,"helmetData"),Q(e,"helmetData"))},r.mapNestedChildrenToProps=function(e,i){if(!i)return null;switch(e.type){case c.SCRIPT:case c.NOSCRIPT:return{innerHTML:i};case c.STYLE:return{cssText:i};default:throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},r.flattenArrayTypeChildren=function(e){var i,a=e.child,s=e.arrayTypeChildren;return h({},s,((i={})[a.type]=[].concat(s[a.type]||[],[h({},e.newChildProps,this.mapNestedChildrenToProps(a,e.nestedChildren))]),i))},r.mapObjectTypeChildren=function(e){var i,a,s=e.child,o=e.newProps,u=e.newChildProps,f=e.nestedChildren;switch(s.type){case c.TITLE:return h({},o,((i={})[s.type]=f,i.titleAttributes=h({},u),i));case c.BODY:return h({},o,{bodyAttributes:h({},u)});case c.HTML:return h({},o,{htmlAttributes:h({},u)});default:return h({},o,((a={})[s.type]=h({},u),a))}},r.mapArrayTypeChildrenToProps=function(e,i){var a=h({},i);return Object.keys(e).forEach(function(s){var o;a=h({},a,((o={})[s]=e[s],o))}),a},r.warnOnInvalidChildren=function(e,i){return G(J.some(function(a){return e.type===a}),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+J.join(", ")+" are allowed. Helmet does not support rendering <"+e.type+"> elements. Refer to our API for more information."),G(!i||typeof i=="string"||Array.isArray(i)&&!i.some(function(a){return typeof a!="string"}),"Helmet expects a string as a child of <"+e.type+">. Did you forget to wrap your children in braces? ( <"+e.type+">{``}</"+e.type+"> ) Refer to our API for more information."),!0},r.mapChildrenToProps=function(e,i){var a=this,s={};return A.Children.forEach(e,function(o){if(o&&o.props){var u=o.props,f=u.children,y=W(u,he),d=Object.keys(y).reduce(function(g,T){return g[ae[T]||T]=y[T],g},{}),p=o.type;switch(typeof p=="symbol"?p=p.toString():a.warnOnInvalidChildren(o,f),p){case c.FRAGMENT:i=a.mapChildrenToProps(f,i);break;case c.LINK:case c.META:case c.NOSCRIPT:case c.SCRIPT:case c.STYLE:s=a.flattenArrayTypeChildren({child:o,arrayTypeChildren:s,newChildProps:d,nestedChildren:f});break;default:i=a.mapObjectTypeChildren({child:o,newProps:i,newChildProps:d,nestedChildren:f})}}}),this.mapArrayTypeChildrenToProps(s,i)},r.render=function(){var e=this.props,i=e.children,a=W(e,me),s=h({},a),o=a.helmetData;return i&&(s=this.mapChildrenToProps(i,s)),!o||o instanceof _||(o=new _(o.context,o.instances)),o?A.createElement(M,h({},s,{context:o.value,helmetData:void 0})):A.createElement(ee.Consumer,null,function(u){return A.createElement(M,h({},s,{context:u}))})},n}(z.Component);Y.propTypes={base:l.object,bodyAttributes:l.object,children:l.oneOfType([l.arrayOf(l.node),l.node]),defaultTitle:l.string,defer:l.bool,encodeSpecialCharacters:l.bool,htmlAttributes:l.object,link:l.arrayOf(l.object),meta:l.arrayOf(l.object),noscript:l.arrayOf(l.object),onChangeClientState:l.func,script:l.arrayOf(l.object),style:l.arrayOf(l.object),title:l.string,titleAttributes:l.object,titleTemplate:l.string,prioritizeSeoTags:l.bool,helmetData:l.object},Y.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},Y.displayName="Helmet";export{Y as W,x as q};
