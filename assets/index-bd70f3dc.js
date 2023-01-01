import{j as z,r as c,R as Z}from"./react-95444d27.js";import{c as V}from"./react-dom-aec6493c.js";import{L as ee,B as te}from"./react-router-dom-2aaf9843.js";import{q as ne,W as P}from"./react-helmet-async-862f3f71.js";import{s as d,W as ie}from"./styled-components-49ba3070.js";import{G as re,L as oe,B as ae,a as se,T as ce,A as le,R as de,S as pe,C as he,P as ue,b as me}from"./react-bootstrap-icons-1dca9ad3.js";import{i as fe,o as ge,G as N,g as xe,s as ye,A as j,U as F,a as be,O as ve,K as we,T as O,B as $,b as M,f as U,h as H,c as ke}from"./@firebase-fe145d92.js";import"./firebase-8b32cf63.js";import{a as T,O as Ce,d as J,N as B,e as Le,f as w}from"./react-router-962aae85.js";import{d as Se}from"./react-timer-hook-fc587190.js";import"./hoist-non-react-statics-b763826a.js";import"./scheduler-04ce0582.js";import"./@remix-run-39a87ed7.js";import"./prop-types-4d501b15.js";import"./react-fast-compare-8dea2db9.js";import"./invariant-c4c304c3.js";import"./shallowequal-6a8ebf1c.js";import"./react-is-d0c61868.js";import"./@emotion-3c1bd611.js";import"./tslib-4b8363ab.js";import"./idb-f62f60ab.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const L=z.Fragment,e=z.jsx,i=z.jsxs,S=({children:t})=>e(Ae,{children:t}),Ae=d.div`
  width: 100%;
  max-width: 1280px;
`,Re=d.footer`
  padding: 10px;
  background: var(--bg-0);
  color: #fff;
  display: flex;
  justify-content: center;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    div,
    a {
      display: flex;
      gap: 5px;
      align-items: center;
    }
  }

  p {
    text-align: center;
  }

  a {
    font-size: 1.2rem;
  }
`,Ie=()=>e(Re,{children:i(S,{children:[i("p",{children:["Adriel Santos, ",new Date().getFullYear()]}),i("div",{children:[e("a",{href:"https://github.com/br-adriel",target:"_blank",rel:"noopener noreferrer",title:"Github",children:e(re,{})}),e("a",{href:"https://linkedin.com/in/adriel-fsantos",target:"_blank",rel:"noopener noreferrer",title:"Linkedin",children:e(oe,{})})]})]})}),Ge=ie`
  :root {
    font-size: 14px;
    --bg-0: #22223B;
    --bg-1: #339989;
    --bg-2: #A63A50;
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Hind', sans-serif;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
  }

  button {
    background: var(--bg-1);
    color: #fff;
    padding: 6px 8px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: ease .3s all;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 1rem;

    svg {
      font-size: 1rem;
    }
    
    :hover {
      background: var(--bg-2);
    }
  }

  a {
    color: inherit;
    opacity: .9;
    text-decoration: none;

    :hover {
      opacity: 1;
      text-decoration: underline;
    }
  }
`,Pe={apiKey:"AIzaSyBQsTlTFuNInU1aJpYqY2ZA3xYRy8mquA8",authDomain:"find-them-b0798.firebaseapp.com",projectId:"find-them-b0798",storageBucket:"find-them-b0798.appspot.com",messagingSenderId:"331857989457",appId:"1:331857989457:web:c9e37411667aba9f3bcd70"},K=fe(Pe),k=ge(K),A=c.createContext({signInGoogle:()=>{},signOutGoogle:()=>{},user:null}),Te=({children:t})=>{const[n,s]=c.useState(null);c.useEffect(()=>{(()=>{const l=sessionStorage.getItem("@AuthFirebase:token"),g=sessionStorage.getItem("@AuthFirebase:user");l&&g&&s(JSON.parse(g))})()},[]);const a=new N,r=xe(K),o=()=>{ye(r,a).then(async p=>{const l=N.credentialFromResult(p),g=l==null?void 0:l.accessToken,x=p.user;if(s(x),g){sessionStorage.setItem("@AuthFirebase:token",g),sessionStorage.setItem("@AuthFirebase:user",JSON.stringify(x));const R={name:x.displayName},W=j(k,"users",x.uid);await F(W,R,{merge:!0})}}).catch(p=>{p.code,p.message,p.customData.email,N.credentialFromError(p)})},h=()=>{be(r).then(()=>{sessionStorage.removeItem("@AuthFirebase:token"),sessionStorage.removeItem("@AuthFirebase:user"),s(null)}).catch(p=>{})};return e(A.Provider,{value:{user:n,signInGoogle:o,signOutGoogle:h},children:t})},je=d.header`
  background: var(--bg-0);
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #fff;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-family: 'Bungee', cursive;
      font-size: 2rem;
      line-height: 0.5rem;
    }

    div {
      display: flex;
      gap: 8px;

      img {
        width: 30px;
        height: 30px;
        border-radius: 5px;
      }
    }
  }
`,Fe=d(ee)`
  opacity: 1 !important;
  text-decoration: none !important;
`,$e=()=>{const{user:t,signInGoogle:n,signOutGoogle:s}=c.useContext(A),a=T();return e(je,{children:i(S,{children:[e(Fe,{to:"/",children:e("h1",{children:"FindThem!"})}),i("div",{children:[t?i("div",{children:[e("img",{src:t.photoURL?t.photoURL:"",alt:"Profile picture",title:"Your profile picture",referrerPolicy:"no-referrer"}),e("button",{type:"button",onClick:()=>s(),title:"Sign out",children:e(ae,{})})]}):e("button",{type:"button",onClick:()=>n(),title:"Sign in with google",children:e(se,{})}),e("button",{type:"button",onClick:()=>a("/ranking"),title:"Ranking",children:e(ce,{})})]})]})})},We="/react-find-them/assets/level_complete-10b7950a.mp3",Ne="/react-find-them/assets/right-120e0f61.mp3",Oe="/react-find-them/assets/wrong-14761451.mp3",f=c.createContext({levels:[],selectedLevel:null,setLevels:()=>{},setSelectedLevel:()=>{},clickLevelImage:()=>{},timer:{},match:{},resetGame:()=>{}}),ze=({children:t})=>{const[n,s]=c.useState(null),[a,r]=c.useState([]),o=Se.useStopwatch({autoStart:!1}),[h,p]=c.useState({points:0,finished:!1}),{user:l}=c.useContext(A),g=new Audio(We),x=new Audio(Ne),R=new Audio(Oe),W=()=>{s(null),p({finished:!1,points:0})},Q=async()=>{if(o.pause(),p(m=>({...m,finished:!0})),l&&n){await F(j(k,"matches",`${l.uid}-${n.id}`),{points:h.points,level:{id:n.id,name:n.name},player:l==null?void 0:l.displayName,time:{minutes:o.minutes,seconds:o.seconds}});const m=j(k,"users",l.uid,"highscores",n.id),y=await ve(m);y.exists()?y.data().points<h.points&&await we(m,{points:h.points,time:{minutes:o.minutes,seconds:o.seconds}}):(await F(m,{level:{id:n==null?void 0:n.id,name:n==null?void 0:n.name},points:h.points}),await F(j(k,"matches",`${l.uid}-${n.id}`),{points:h.points,time:{minutes:o.minutes,seconds:o.seconds},level:{id:n==null?void 0:n.id,name:n==null?void 0:n.name},player:l==null?void 0:l.displayName}))}g.play()},X=(m,y)=>{if(n&&n.characters){let b=o.minutes*60+o.seconds,C=!1,I=!1;b>200&&(b=200);for(let u of n.characters)u.position.start.x<=m&&m<=u.position.end.x&&u.position.start.y<=y&&y<=u.position.end.y&&(C=!0,I=u.found,s(G=>G?{...G,characters:G==null?void 0:G.characters.map(_=>_.id===u.id?(u.found=!0,u):_)}:null));let v=0;C&&!I?(x.play(),v=1500+200-b):(R.play(),v=-150-b),p(u=>({...u,points:u.points+v}))}};return c.useEffect(()=>{const m=async b=>{const C=O(k,"levels",b,"characters");return(await $(C)).docs.map(u=>({...u.data(),id:u.id,found:!1}))};(async()=>{const b=O(k,"levels"),C=await $(b),I=await Promise.all(C.docs.map(async v=>{const u=await m(v.id);return{...v.data(),id:v.id,characters:u}}));r(I)})()},[]),c.useEffect(()=>{if(n){let m=!0;for(let y of n.characters)if(!y.found){m=!1;break}m&&Q()}},[n]),e(f.Provider,{value:{levels:a,selectedLevel:n,setLevels:r,setSelectedLevel:s,clickLevelImage:X,timer:o,match:h,resetGame:W},children:t})};function Be(){return i(ne,{children:[e(Ge,{}),e(Te,{children:i(ze,{children:[e($e,{}),e("main",{children:e(Ce,{})}),e(Ie,{})]})})]})}async function Ee(t="all"){const n=O(k,"matches");if(t==="all"){const o=M(n,H("points","desc"),U(30));return(await $(o)).docs.map(l=>({...l.data(),id:l.id}))}const s=M(n,ke("level.id","==",t),H("points","desc"),U(30));return(await $(s)).docs.map(o=>({...o.data(),id:o.id}))}const q=d.div`
  width: 100%;
  background: var(--bg-0);
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 10px;
`,_e=d.div`
  max-width: 100%;
  overflow-x: auto;
`,Me=d.table`
  background: var(--bg-0);
  color: #fff;
  border-radius: 5px;
  font-size: 1.1rem;
  overflow-x: scroll;
  min-width: 100%;
  border-collapse: collapse;

  td,
  th {
    padding: 6px 10px;
    align: middle;
    border: 1px solid var(--bg-1);
    text-align: center;
    white-space: nowrap;

    svg {
      font-size: 2rem;
    }
  }

  tbody tr {
    opacity: 0.9;
  }

  tr:first-child th {
    border-top: 0;
  }
  tr:last-child td {
    border-bottom: 0;
  }
  tr td:first-child,
  tr th:first-child {
    border-left: 0;
  }
  tr td:last-child,
  tr th:last-child {
    border-right: 0;
  }

  tbody tr td:nth-of-type(1) {
    position: relative;
    top: 0;
    left: 0;

    span {
      position: absolute;
      width: 100%;
      top: 8px;
      left: 0;
      font-size: 12px;
    }
  }

  tbody tr:nth-of-type(1) td:nth-of-type(1) {
    color: #ffd700;
  }

  tbody tr:nth-of-type(2) td:nth-of-type(1) {
    color: #808080;
  }

  tbody tr:nth-of-type(3) td:nth-of-type(1) {
    color: #c77b30;
  }

  tbody tr:hover {
    opacity: 1;
  }
`,E=({levelId:t})=>{const[n,s]=c.useState(null);return c.useEffect(()=>{(async()=>{const r=await Ee(t);s(r)})()},[t]),n?n.length?e(_e,{children:i(Me,{children:[e("thead",{children:i("tr",{children:[e("th",{title:"position",children:"#"}),e("th",{children:"Name"}),e("th",{children:"Level"}),e("th",{children:"Points"}),e("th",{children:"Time"})]})}),e("tbody",{children:n.map((a,r)=>i("tr",{children:[i("td",{children:[e(le,{}),e("span",{children:r+1})]}),e("td",{children:a.player}),e("td",{children:a.level.name}),e("td",{children:a.points}),i("td",{children:[a.time.minutes<10?"0":null,a.time.minutes,":",a.time.seconds<10?"0":null,a.time.seconds]})]},a.id))})]})}):e(q,{children:e("h2",{children:"No games played yet"})}):e(q,{children:e("h2",{children:"Loading..."})})},Ue="/react-find-them/assets/gamer-3f4bfe84.svg",He=()=>{const{user:t,signInGoogle:n}=c.useContext(A),s=T();return i(qe,{children:[e("h2",{children:"Can you find the characters fast?"}),e("p",{children:"Play some levels and make your way up the leaderboard"}),e("img",{src:Ue,alt:"",width:"70%"}),t?e("button",{onClick:()=>s("/play"),children:"Play a level"}):e("button",{onClick:()=>n(),children:"Sign in with Google"})]})},qe=d.div`
  display: flex;
  flex-direction: column;
  background: var(--bg-0);
  color: #fff;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  align-items: center;

  img {
    margin-top: 10px;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`,De=()=>{const{resetGame:t}=c.useContext(f);return c.useEffect(()=>{t()},[]),i(L,{children:[i(P,{children:[e("title",{children:"FindThem!"}),e("meta",{name:"description",content:"Game where you need to find characters on a image, similar to Where's Wally?"})]}),";",e(S,{children:i(Ye,{children:[e(He,{}),e(E,{levelId:"all"})]})})]})},Ye=d.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 2fr 4fr;
  }
`,Je=()=>i(L,{children:[i(P,{children:[e("title",{children:"Page not found"}),e("meta",{name:"description",content:"The page you're looking for could not be found"})]}),e(Ke,{children:i("div",{children:[e(de,{}),e("h2",{children:"Page not found"}),e("p",{children:"Try another URL"})]})})]}),Ke=d.div`
  width: 100%;
  padding: 40px 20px;
  background: var(--bg-0);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  svg {
    font-size: 140px;
  }

  h2,
  p {
    text-transform: uppercase;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`,D=d.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% -20px);
  gap: 10px;
  background: var(--bg-0);
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  flex-grow: 1;
`,Qe=d.img`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  ${t=>t.found?null:"filter: grayscale(100%);"}
`,Xe=()=>{const{selectedLevel:t}=c.useContext(f);return t?e(D,{children:t.characters.map(n=>e(Qe,{found:n.found,src:n.image,alt:""},n.id))}):e(D,{children:e("h2",{children:t===void 0?"Level not found":"Loading..."})})},Ze=()=>{const{selectedLevel:t,clickLevelImage:n,timer:s}=c.useContext(f),a=r=>{const o=r.nativeEvent.offsetX,h=r.nativeEvent.offsetY,p=r.target,l=p.width,g=p.height,x=Math.trunc(o*1e3/l),R=Math.trunc(h*3e3/g);n(x,R)};return t?e(Ve,{src:t.image,alt:"",onClick:a,timerRunning:s.isRunning}):null},Ve=d.img`
  width: 100%;
  border-radius: 5px;
  cursor: crosshair;
  ${t=>t.timerRunning?null:"display: none;"}
`,et=()=>{const{match:t,timer:n}=c.useContext(f),s=T(),a=()=>{s("/play")};return i(tt,{children:[e("h3",{children:"Level finished!"}),i("div",{children:[i(nt,{children:[i("h4",{children:[e(pe,{})," ",t.points," points"]}),i("h4",{children:[e(he,{}),n.minutes<10?"0":null,n.minutes,":",n.seconds<10?"0":null,n.seconds]})]}),e("button",{type:"button",onClick:a,children:"Play another level"})]})]})},tt=d.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: var(--bg-0);
  color: #fff;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border-radius: 5px;
  gap: 10px;

  & > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }

  h3 {
    font-size: 2rem;
    line-height: 2rem;
  }

  @media screen and (min-width: 576px) {
    align-items: center;
    text-align: center;

    & > div {
      align-items: stretch;

      button {
        display: flex;
        justify-content: center;
      }
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,nt=d.div`
  display: flex;
  gap: 10px;
  flex-direction: column;

  h4 {
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: 1.3rem;
    line-height: 1.3rem;
  }

  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`,it=()=>{const{timer:t}=c.useContext(f),n=()=>{t.isRunning?t.pause():t.start()};return i(rt,{children:[i("p",{children:[t.minutes<10?"0":null,t.minutes,":",t.seconds<10?"0":null,t.seconds]}),e("button",{onClick:n,children:t.isRunning?e(ue,{}):e(me,{})})]})},rt=d.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;

  p,
  button {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: inherit;
    }
  }

  p {
    padding: 8px;
    border-radius: 5px;
    background: var(--bg-0);
    color: #fff;
    flex-grow: 1;
  }
`,ot=()=>{const{levels:t,setSelectedLevel:n,match:s,timer:a,selectedLevel:r}=c.useContext(f),{user:o}=c.useContext(A),{levelId:h}=J();return c.useEffect(()=>{const p=t.filter(l=>l.id===h)[0];p===void 0&&t.length===0?n(null):n(JSON.parse(JSON.stringify(p))),a.reset()},[t]),o?i(L,{children:[i(P,{children:[e("title",{children:`Playing ${r==null?void 0:r.name}`}),e("meta",{name:"description",content:"Find all the characters of this level"})]}),e(S,{children:s.finished?i(st,{children:[e(et,{}),e(E,{levelId:h})]}):i(L,{children:[i(at,{children:[e(Xe,{}),e(it,{})]}),e(Ze,{})]})})]}):e(B,{to:"/"})},at=d.div`
  display: flex;
  width: calc(100% -20px);
  gap: 10px;
  position: sticky;
  top: 0;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: stretch;
`,st=d.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Y=({level:t,current:n})=>{const s=T();return e(ct,{type:"button",onClick:()=>{s(`/ranking/${t.id}`)},current:n,children:t.name})},ct=d.button`
  background: ${t=>t.current?"var(--bg-1)":"var(--bg-0)"};
`,lt=({currentId:t})=>{const{levels:n}=c.useContext(f);return i(dt,{children:[e(Y,{level:{name:"All",id:"all"},current:t==="all"}),n.map(s=>e(Y,{level:s,current:t===s.id},s.id))]})},dt=d.div`
  display: flex;
  width: 100%;
  gap: 4px;
  flex-wrap: wrap;
`,pt=()=>{let{levelId:t}=J();return t||(t=" "),i(L,{children:[i(P,{children:[e("title",{children:"Leaderboard"}),e("meta",{name:"description",content:"Ranking with the best players of each level"})]}),e(S,{children:i(ht,{children:[e(lt,{currentId:t}),e(E,{levelId:t})]})})]})},ht=d.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,ut=d.div`
  padding: 10px;
  border-radius: 5px;
  background: var(--bg-0);
  color: #fff;

  img {
    width: 100%;
    border-radius: 5px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
  }
`,mt=({level:t,onClick:n})=>i(ut,{children:[i("div",{children:[i("div",{children:[e("h3",{children:t.name}),i("p",{children:[t.characters.length," characters to find"]})]}),e("button",{onClick:()=>n(),children:"Play"})]}),e("img",{src:t.image,alt:`Level ${t.name} image`})]}),ft=d.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,gt=()=>{const{levels:t}=c.useContext(f),n=T(),s=a=>{n(`/play/${a.id}`)};return e(ft,{children:t.map(a=>e(mt,{level:a,onClick:()=>s(a)},a.id))})},xt=()=>{const{resetGame:t}=c.useContext(f),{user:n}=c.useContext(A);return c.useEffect(()=>{t()},[]),n?i(L,{children:[i(P,{children:[e("title",{children:"Select a level"}),e("meta",{name:"description",content:"Select a level to start playing"})]}),e(S,{children:e(gt,{})})]}):e(B,{to:"/"})},yt=()=>e(te,{basename:"/react-find-them/",children:e(Le,{children:i(w,{path:"/",element:e(Be,{}),children:[e(w,{path:"",element:e(De,{})}),e(w,{path:"play",element:e(xt,{})}),e(w,{path:"play/:levelId",element:e(ot,{})}),e(w,{path:"ranking",element:e(B,{to:"/ranking/all"})}),e(w,{path:"ranking/:levelId",element:e(pt,{})}),e(w,{path:"*",element:e(Je,{})})]})})});V.createRoot(document.getElementById("root")).render(e(Z.StrictMode,{children:e(yt,{})}));
