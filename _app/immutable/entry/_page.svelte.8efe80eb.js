import{H as K,J as Ve,K as It,S as ze,i as Re,s as Qe,L as bt,k as s,a as g,q as N,l as a,m as r,h as l,c as A,r as O,M as oe,n as t,N as ne,p as Rt,b as Oe,G as e,O as me,P as at,Q as Qt,y as qe,z as De,A as Ue,R as He,g as Be,d as xe,B as Ne,o as qt,w as Xe}from"../chunks/index.e707a1ab.js";import{w as Fe}from"../chunks/index.b874ab2f.js";function Dt(_){return _<.5?4*_*_*_:.5*Math.pow(2*_-2,3)+1}const lt=Fe([]),Ut=Fe({offset:0,duration:500,easing:Dt,onStart:K,onDone:K}),Bt=Ve(Ut),wt=()=>Bt,Lt=_=>_.replace(/[^A-Z0-9]/gi,"").toLowerCase(),xt=(_,n)=>{const c=_.filter(f=>f.reference===n);return c.length?c[0].node:null},Nt=_=>_.offsetTop,Ot=(_,n,c,f,u)=>c>f?n:_+(n-_)*u(c/f),Ft=async(_,n)=>new Promise(c=>{const{start:f,end:u,duration:o,easing:d}=_,E=It(),v=()=>{const I=It()-E,b=Ot(f,u,I,o,d);if(n(b),I>o)return c();window.requestAnimationFrame(v)};window.requestAnimationFrame(v)}),Wt=wt(),Tt=async(_,n)=>{const{duration:c,easing:f,offset:u}=Object.assign(Wt,n),o=window.pageYOffset,d=_+u;await Ft({start:o,end:d,duration:c,easing:f},E=>{window.scroll(0,E)})};Ve(lt);const je=(_,n)=>{if(!n)throw new Error("scrollRef require a reference");const c=Ve(lt);return c.push({node:_,reference:Lt(n)}),{destroy(){c.length=0}}},St=wt(),Pt=async(_,n)=>{if(!_||typeof _!="string")throw new Error("scrollElement require a reference valid");const c=Object.assign(St,n),f=Lt(_),{duration:u,offset:o,onStart:d,onDone:E}=c,v=Ve(lt),I=xt(v,f);if(!I)throw new Error(`Element reference '${f}' not found`);const b=Nt(I);d&&d({element:I,offset:o,duration:u,endPosition:b}),await Tt(b,c),E&&E({element:I,offset:o,duration:u,endPosition:b})},Zt=Fe(0),Mt=Fe(0),tt=Fe(0),st=Fe(0),yt=Fe(0),Gt=Fe(0),Ht=""+new URL("../assets/logo200.6f863e35.png",import.meta.url).href;const{scrollTo:Xt}=Qt;function jt(_){let n=!1,c=()=>{n=!1},f,u,o,d,E,v,I,b,p,q,W,k,i,D,y,m,L,R,B,w,C,T,P,x,h,V,Q,U,M,z,H,S,F,Z,Y,ce,$,le,te,J,ee,re,j,ie,fe;return bt(_[5]),bt(_[6]),{c(){u=s("header"),o=s("a"),d=s("img"),v=g(),I=s("div"),b=s("div"),p=s("span"),W=g(),k=s("nav"),i=s("ul"),D=s("li"),y=s("a"),m=N("Главная"),R=g(),B=s("li"),w=s("a"),C=N("Каталог"),P=g(),x=s("li"),h=s("a"),V=N("Партнеры"),U=g(),M=s("li"),z=s("a"),H=N("Благодарности"),F=g(),Z=s("li"),Y=s("a"),ce=N("Заказать"),le=g(),te=s("li"),J=s("a"),ee=N("Контакты"),this.h()},l(X){u=a(X,"HEADER",{class:!0});var G=r(u);o=a(G,"A",{class:!0,href:!0});var be=r(o);d=a(be,"IMG",{src:!0,alt:!0,class:!0}),be.forEach(l),v=A(G),I=a(G,"DIV",{class:!0});var he=r(I);b=a(he,"DIV",{class:!0});var se=r(b);p=a(se,"SPAN",{class:!0}),r(p).forEach(l),se.forEach(l),W=A(he),k=a(he,"NAV",{class:!0});var ve=r(k);i=a(ve,"UL",{class:!0});var ae=r(i);D=a(ae,"LI",{class:!0});var de=r(D);y=a(de,"A",{"data-lang":!0,class:!0,target:!0});var ge=r(y);m=O(ge,"Главная"),ge.forEach(l),de.forEach(l),R=A(ae),B=a(ae,"LI",{class:!0,style:!0});var ue=r(B);w=a(ue,"A",{"data-lang":!0,class:!0,target:!0});var ke=r(w);C=O(ke,"Каталог"),ke.forEach(l),ue.forEach(l),P=A(ae),x=a(ae,"LI",{class:!0});var Ae=r(x);h=a(Ae,"A",{"data-lang":!0,class:!0,target:!0});var Le=r(h);V=O(Le,"Партнеры"),Le.forEach(l),Ae.forEach(l),U=A(ae),M=a(ae,"LI",{class:!0});var ye=r(M);z=a(ye,"A",{"data-lang":!0,class:!0,target:!0});var _e=r(z);H=O(_e,"Благодарности"),_e.forEach(l),ye.forEach(l),F=A(ae),Z=a(ae,"LI",{class:!0});var Ce=r(Z);Y=a(Ce,"A",{"data-lang":!0,class:!0,target:!0});var Ie=r(Y);ce=O(Ie,"Заказать"),Ie.forEach(l),Ce.forEach(l),le=A(ae),te=a(ae,"LI",{class:!0});var Ee=r(te);J=a(Ee,"A",{"data-lang":!0,class:!0,target:!0});var we=r(J);ee=O(we,"Контакты"),we.forEach(l),Ee.forEach(l),ae.forEach(l),ve.forEach(l),he.forEach(l),G.forEach(l),this.h()},h(){oe(d.src,E=Ht)||t(d,"src",E),t(d,"alt","Логотип Сфера"),t(d,"class","header__logo svelte-xdf6g7"),t(o,"class","link header__link svelte-xdf6g7"),t(o,"href","/"),t(p,"class","svelte-xdf6g7"),t(b,"class",q=ne(_[1]?"header__menu-icon header__menu-icon_active":"header__menu-icon")+" svelte-xdf6g7"),t(y,"data-lang","menu-main"),t(y,"class",L=ne(_[2]==="main"?"header__link header__link_active":"header__link")+" svelte-xdf6g7"),t(y,"target","_self"),t(D,"class","header__link-element svelte-xdf6g7"),t(w,"data-lang","menu-catalog"),t(w,"class",T=ne(_[2]==="catalog"?"header__link header__link_active":"header__link")+" svelte-xdf6g7"),t(w,"target","_self"),t(B,"class","header__link-element svelte-xdf6g7"),Rt(B,"display","none"),t(h,"data-lang","menu-partners"),t(h,"class",Q=ne(_[2]==="partners"?"header__link header__link_active":"header__link")+" svelte-xdf6g7"),t(h,"target","_self"),t(x,"class","header__link-element svelte-xdf6g7"),t(z,"data-lang","menu-thanks"),t(z,"class",S=ne(_[2]==="thanks"?"header__link header__link_active":"header__link")+" svelte-xdf6g7"),t(z,"target","_self"),t(M,"class","header__link-element svelte-xdf6g7"),t(Y,"data-lang","menu-order"),t(Y,"class",$=ne(_[2]==="order"?"header__link header__link_active":"header__link")+" svelte-xdf6g7"),t(Y,"target","_self"),t(Z,"class","header__link-element svelte-xdf6g7"),t(J,"data-lang","menu-contacts"),t(J,"class",re=ne(_[2]==="contacts"?"header__link header__link_active":"header__link")+" svelte-xdf6g7"),t(J,"target","_self"),t(te,"class","header__link-element svelte-xdf6g7"),t(i,"class","header__links svelte-xdf6g7"),t(k,"class",j=ne(_[1]?"header__menu header__menu_active":"header__menu")+" svelte-xdf6g7"),t(I,"class","header__container svelte-xdf6g7"),t(u,"class","header svelte-xdf6g7")},m(X,G){Oe(X,u,G),e(u,o),e(o,d),e(u,v),e(u,I),e(I,b),e(b,p),e(I,W),e(I,k),e(k,i),e(i,D),e(D,y),e(y,m),e(i,R),e(i,B),e(B,w),e(w,C),e(i,P),e(i,x),e(x,h),e(h,V),e(i,U),e(i,M),e(M,z),e(z,H),e(i,F),e(i,Z),e(Z,Y),e(Y,ce),e(i,le),e(i,te),e(te,J),e(J,ee),ie||(fe=[me(window,"scroll",()=>{n=!0,clearTimeout(f),f=setTimeout(c,100),_[5]()}),me(window,"resize",_[6]),me(b,"click",_[7]),me(y,"click",_[8]),me(w,"click",_[9]),me(h,"click",_[10]),me(z,"click",_[11]),me(Y,"click",_[12]),me(J,"click",_[13])],ie=!0)},p(X,[G]){G&1&&!n&&(n=!0,clearTimeout(f),Xt(window.pageXOffset,X[0]),f=setTimeout(c,100)),G&2&&q!==(q=ne(X[1]?"header__menu-icon header__menu-icon_active":"header__menu-icon")+" svelte-xdf6g7")&&t(b,"class",q),G&4&&L!==(L=ne(X[2]==="main"?"header__link header__link_active":"header__link")+" svelte-xdf6g7")&&t(y,"class",L),G&4&&T!==(T=ne(X[2]==="catalog"?"header__link header__link_active":"header__link")+" svelte-xdf6g7")&&t(w,"class",T),G&4&&Q!==(Q=ne(X[2]==="partners"?"header__link header__link_active":"header__link")+" svelte-xdf6g7")&&t(h,"class",Q),G&4&&S!==(S=ne(X[2]==="thanks"?"header__link header__link_active":"header__link")+" svelte-xdf6g7")&&t(z,"class",S),G&4&&$!==($=ne(X[2]==="order"?"header__link header__link_active":"header__link")+" svelte-xdf6g7")&&t(Y,"class",$),G&4&&re!==(re=ne(X[2]==="contacts"?"header__link header__link_active":"header__link")+" svelte-xdf6g7")&&t(J,"class",re),G&2&&j!==(j=ne(X[1]?"header__menu header__menu_active":"header__menu")+" svelte-xdf6g7")&&t(k,"class",j)},i:K,o:K,d(X){X&&l(u),ie=!1,at(fe)}}}let Jt=500;function Yt(_,n,c){let f=!1,u="main",o=0,d;function E(m){console.log(m),m<Ve(tt)?c(2,u="main"):m>=Ve(tt)&m<Ve(st)?c(2,u="partners"):m>Ve(st)&m<Ve(yt)?c(2,u="thanks"):(d>768?m>1506&m<1627:m>2547&m<3045)?c(2,u="order"):(d>768?m>1627:m>3045)&&c(2,u="contacts")}function v(m){c(1,f=!f),Pt(m,Jt)}function I(){c(0,o=window.pageYOffset)}function b(){c(3,d=window.innerWidth)}const p=()=>c(1,f=!f),q=()=>v("main"),W=()=>v("catalog"),k=()=>v("partners"),i=()=>v("thanks"),D=()=>v("order"),y=()=>v("contacts");return _.$$.update=()=>{_.$$.dirty&1&&E(o)},[o,f,u,d,v,I,b,p,q,W,k,i,D,y]}class Kt extends ze{constructor(n){super(),Re(this,n,Yt,jt,Qe,{})}}function $t(_){let n,c,f;return{c(){n=s("div"),c=s("p"),f=N('© 2023, ООО "ТД СФЕРА"'),this.h()},l(u){n=a(u,"DIV",{class:!0});var o=r(n);c=a(o,"P",{class:!0});var d=r(c);f=O(d,'© 2023, ООО "ТД СФЕРА"'),d.forEach(l),o.forEach(l),this.h()},h(){t(c,"class","footer__author svelte-68d07l"),t(n,"class","footer svelte-68d07l")},m(u,o){Oe(u,n,o),e(n,c),e(c,f)},p:K,i:K,o:K,d(u){u&&l(n)}}}class es extends ze{constructor(n){super(),Re(this,n,null,$t,Qe,{})}}const et=""+new URL("../assets/kran.75ef93e3.png",import.meta.url).href,ts=""+new URL("../assets/h1111.0a78f6b9.png",import.meta.url).href;function ss(_){let n,c,f,u,o,d,E,v,I,b,p,q,W,k,i,D,y,m,L,R,B,w,C,T,P,x,h,V,Q,U,M,z,H,S,F,Z,Y,ce,$,le,te,J,ee,re,j,ie,fe,X,G,be;return{c(){n=s("div"),c=s("img"),u=g(),o=s("div"),d=s("p"),E=N("Компания, специализирующийся на сегменте поставок строительных материалов.  Образовалась в 2015 году."),v=g(),I=s("p"),b=N("Снабжение строительных объектов, комплектация строительства под ключ – основное и приоритетное  направление деятельности нашей компании. Работать с нами действительно комфортно."),p=g(),q=s("p"),W=N("Мы работаем с самыми разными производителями и этот список постоянно пополняется!"),k=g(),i=s("div"),D=s("div"),y=s("div"),m=s("img"),R=g(),B=s("div"),w=s("h2"),C=N("индивидуальный подход"),T=g(),P=s("div"),x=s("div"),h=s("img"),Q=g(),U=s("div"),M=s("h2"),z=N("большой опыт работы"),H=g(),S=s("div"),F=s("div"),Z=s("img"),ce=g(),$=s("div"),le=s("h2"),te=N("широкий ассортимент товаров"),J=g(),ee=s("div"),re=s("div"),j=s("img"),fe=g(),X=s("div"),G=s("h2"),be=N("надежный партнер"),this.h()},l(he){n=a(he,"DIV",{class:!0});var se=r(n);c=a(se,"IMG",{class:!0,src:!0,alt:!0}),u=A(se),o=a(se,"DIV",{class:!0});var ve=r(o);d=a(ve,"P",{class:!0});var ae=r(d);E=O(ae,"Компания, специализирующийся на сегменте поставок строительных материалов.  Образовалась в 2015 году."),ae.forEach(l),v=A(ve),I=a(ve,"P",{class:!0});var de=r(I);b=O(de,"Снабжение строительных объектов, комплектация строительства под ключ – основное и приоритетное  направление деятельности нашей компании. Работать с нами действительно комфортно."),de.forEach(l),p=A(ve),q=a(ve,"P",{class:!0});var ge=r(q);W=O(ge,"Мы работаем с самыми разными производителями и этот список постоянно пополняется!"),ge.forEach(l),ve.forEach(l),k=A(se),i=a(se,"DIV",{class:!0});var ue=r(i);D=a(ue,"DIV",{class:!0});var ke=r(D);y=a(ke,"DIV",{class:!0});var Ae=r(y);m=a(Ae,"IMG",{class:!0,src:!0,alt:!0}),Ae.forEach(l),R=A(ke),B=a(ke,"DIV",{class:!0});var Le=r(B);w=a(Le,"H2",{class:!0,"data-lang":!0});var ye=r(w);C=O(ye,"индивидуальный подход"),ye.forEach(l),Le.forEach(l),ke.forEach(l),T=A(ue),P=a(ue,"DIV",{class:!0});var _e=r(P);x=a(_e,"DIV",{class:!0});var Ce=r(x);h=a(Ce,"IMG",{class:!0,src:!0,alt:!0}),Ce.forEach(l),Q=A(_e),U=a(_e,"DIV",{class:!0});var Ie=r(U);M=a(Ie,"H2",{class:!0,"data-lang":!0});var Ee=r(M);z=O(Ee,"большой опыт работы"),Ee.forEach(l),Ie.forEach(l),_e.forEach(l),H=A(ue),S=a(ue,"DIV",{class:!0});var we=r(S);F=a(we,"DIV",{class:!0});var We=r(F);Z=a(We,"IMG",{class:!0,src:!0,alt:!0}),We.forEach(l),ce=A(we),$=a(we,"DIV",{class:!0});var pe=r($);le=a(pe,"H2",{class:!0,"data-lang":!0});var Je=r(le);te=O(Je,"широкий ассортимент товаров"),Je.forEach(l),pe.forEach(l),we.forEach(l),J=A(ue),ee=a(ue,"DIV",{class:!0});var Te=r(ee);re=a(Te,"DIV",{class:!0});var Ye=r(re);j=a(Ye,"IMG",{class:!0,src:!0,alt:!0}),Ye.forEach(l),fe=A(Te),X=a(Te,"DIV",{class:!0});var Se=r(X);G=a(Se,"H2",{class:!0,"data-lang":!0});var Ke=r(G);be=O(Ke,"надежный партнер"),Ke.forEach(l),Se.forEach(l),Te.forEach(l),ue.forEach(l),se.forEach(l),this.h()},h(){t(c,"class","intro__title svelte-1pvp62o"),oe(c.src,f=ts)||t(c,"src",f),t(c,"alt","1"),t(d,"class","section-paragraph svelte-1pvp62o"),t(I,"class","section-paragraph svelte-1pvp62o"),t(q,"class","section-paragraph svelte-1pvp62o"),t(o,"class","about__container svelte-1pvp62o"),t(m,"class","card__image svelte-1pvp62o"),oe(m.src,L=et)||t(m,"src",L),t(m,"alt","1"),t(y,"class","card__image-container svelte-1pvp62o"),t(w,"class","card__name"),t(w,"data-lang","card-name-alyona"),t(B,"class","card__details"),t(D,"class","card"),t(h,"class","card__image svelte-1pvp62o"),oe(h.src,V=et)||t(h,"src",V),t(h,"alt","2"),t(x,"class","card__image-container svelte-1pvp62o"),t(M,"class","card__name"),t(M,"data-lang","card-name-alyona"),t(U,"class","card__details"),t(P,"class","card"),t(Z,"class","card__image svelte-1pvp62o"),oe(Z.src,Y=et)||t(Z,"src",Y),t(Z,"alt","3"),t(F,"class","card__image-container svelte-1pvp62o"),t(le,"class","card__name"),t(le,"data-lang","card-name-alyona"),t($,"class","card__details"),t(S,"class","card"),t(j,"class","card__image svelte-1pvp62o"),oe(j.src,ie=et)||t(j,"src",ie),t(j,"alt","3"),t(re,"class","card__image-container svelte-1pvp62o"),t(G,"class","card__name"),t(G,"data-lang","card-name-alyona"),t(X,"class","card__details"),t(ee,"class","card"),t(i,"class","intro__cards svelte-1pvp62o"),t(n,"class","main svelte-1pvp62o")},m(he,se){Oe(he,n,se),e(n,c),e(n,u),e(n,o),e(o,d),e(d,E),e(o,v),e(o,I),e(I,b),e(o,p),e(o,q),e(q,W),e(n,k),e(n,i),e(i,D),e(D,y),e(y,m),e(D,R),e(D,B),e(B,w),e(w,C),e(i,T),e(i,P),e(P,x),e(x,h),e(P,Q),e(P,U),e(U,M),e(M,z),e(i,H),e(i,S),e(S,F),e(F,Z),e(S,ce),e(S,$),e($,le),e(le,te),e(i,J),e(i,ee),e(ee,re),e(re,j),e(ee,fe),e(ee,X),e(X,G),e(G,be)},p:K,i:K,o:K,d(he){he&&l(n)}}}class as extends ze{constructor(n){super(),Re(this,n,null,ss,Qe,{})}}class ls extends ze{constructor(n){super(),Re(this,n,null,null,Qe,{})}}const rs=""+new URL("../assets/3m.042ca1cb.png",import.meta.url).href,ns="data:image/png;base64,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",cs="data:image/png;base64,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",os=""+new URL("../assets/knauf.4581d133.png",import.meta.url).href,is=""+new URL("../assets/tikkurila.a90f666c.png",import.meta.url).href,ds=""+new URL("../assets/unis.80f38dba.png",import.meta.url).href;function us(_){let n,c,f,u,o,d,E,v,I,b,p,q,W,k,i,D,y,m,L,R,B,w,C,T,P,x,h,V;return{c(){n=s("div"),c=s("h2"),f=N("НАШИ ПАРТНЕРЫ"),u=g(),o=s("ul"),d=s("li"),E=s("img"),I=g(),b=s("li"),p=s("img"),W=g(),k=s("li"),i=s("img"),y=g(),m=s("li"),L=s("img"),B=g(),w=s("li"),C=s("img"),P=g(),x=s("li"),h=s("img"),this.h()},l(Q){n=a(Q,"DIV",{class:!0});var U=r(n);c=a(U,"H2",{class:!0,"data-lang":!0});var M=r(c);f=O(M,"НАШИ ПАРТНЕРЫ"),M.forEach(l),u=A(U),o=a(U,"UL",{class:!0});var z=r(o);d=a(z,"LI",{class:!0});var H=r(d);E=a(H,"IMG",{src:!0,alt:!0,class:!0}),H.forEach(l),I=A(z),b=a(z,"LI",{class:!0});var S=r(b);p=a(S,"IMG",{src:!0,alt:!0,class:!0}),S.forEach(l),W=A(z),k=a(z,"LI",{class:!0});var F=r(k);i=a(F,"IMG",{src:!0,alt:!0,class:!0}),F.forEach(l),y=A(z),m=a(z,"LI",{class:!0});var Z=r(m);L=a(Z,"IMG",{src:!0,alt:!0,class:!0}),Z.forEach(l),B=A(z),w=a(z,"LI",{class:!0});var Y=r(w);C=a(Y,"IMG",{src:!0,alt:!0,class:!0}),Y.forEach(l),P=A(z),x=a(z,"LI",{class:!0});var ce=r(x);h=a(ce,"IMG",{src:!0,alt:!0,class:!0}),ce.forEach(l),z.forEach(l),U.forEach(l),this.h()},h(){t(c,"class","section-heading svelte-1h03mzy"),t(c,"data-lang","skills"),oe(E.src,v=rs)||t(E,"src",v),t(E,"alt","Логотип threem"),t(E,"class","skills__program-icon svelte-1h03mzy"),t(d,"class","skills__program-item svelte-1h03mzy"),oe(p.src,q=ns)||t(p,"src",q),t(p,"alt","Логотип abb"),t(p,"class","skills__program-icon svelte-1h03mzy"),t(b,"class","skills__program-item svelte-1h03mzy"),oe(i.src,D=cs)||t(i,"src",D),t(i,"alt","Логотип ceresit"),t(i,"class","skills__program-icon svelte-1h03mzy"),t(k,"class","skills__program-item svelte-1h03mzy"),oe(L.src,R=os)||t(L,"src",R),t(L,"alt","Логотип knauf"),t(L,"class","skills__program-icon svelte-1h03mzy"),t(m,"class","skills__program-item svelte-1h03mzy"),oe(C.src,T=is)||t(C,"src",T),t(C,"alt","Логотип tikkurila"),t(C,"class","skills__program-icon svelte-1h03mzy"),t(w,"class","skills__program-item svelte-1h03mzy"),oe(h.src,V=ds)||t(h,"src",V),t(h,"alt","Логотип unis"),t(h,"class","skills__program-icon svelte-1h03mzy"),t(x,"class","skills__program-item svelte-1h03mzy"),t(o,"class","skills__program-zone svelte-1h03mzy"),t(n,"class","skills__container svelte-1h03mzy")},m(Q,U){Oe(Q,n,U),e(n,c),e(c,f),e(n,u),e(n,o),e(o,d),e(d,E),e(o,I),e(o,b),e(b,p),e(o,W),e(o,k),e(k,i),e(o,y),e(o,m),e(m,L),e(o,B),e(o,w),e(w,C),e(o,P),e(o,x),e(x,h)},p:K,i:K,o:K,d(Q){Q&&l(n)}}}class _s extends ze{constructor(n){super(),Re(this,n,null,us,Qe,{})}}const Ct=""+new URL("../assets/test.badb4fea.jpg",import.meta.url).href,Vt=""+new URL("../assets/test1.44ecbdcf.jpg",import.meta.url).href,zt=""+new URL("../assets/test2.e2899ede.jpg",import.meta.url).href;function hs(_){let n,c,f,u,o,d,E,v,I,b,p,q,W,k,i,D,y,m,L,R,B,w,C,T,P,x;return{c(){n=s("div"),c=s("h2"),f=N("БЛАГОДАРНОСТЬ КЛИЕНТОВ"),u=g(),o=s("ul"),d=s("li"),E=s("img"),I=g(),b=s("li"),p=s("img"),W=g(),k=s("li"),i=s("img"),y=g(),m=s("div"),L=s("form"),R=s("button"),B=g(),w=s("img"),this.h()},l(h){n=a(h,"DIV",{class:!0});var V=r(n);c=a(V,"H2",{id:!0,class:!0,"data-lang":!0});var Q=r(c);f=O(Q,"БЛАГОДАРНОСТЬ КЛИЕНТОВ"),Q.forEach(l),u=A(V),o=a(V,"UL",{class:!0});var U=r(o);d=a(U,"LI",{class:!0});var M=r(d);E=a(M,"IMG",{src:!0,alt:!0,class:!0}),M.forEach(l),I=A(U),b=a(U,"LI",{class:!0});var z=r(b);p=a(z,"IMG",{src:!0,alt:!0,class:!0}),z.forEach(l),W=A(U),k=a(U,"LI",{class:!0});var H=r(k);i=a(H,"IMG",{src:!0,alt:!0,class:!0}),H.forEach(l),U.forEach(l),y=A(V),m=a(V,"DIV",{class:!0});var S=r(m);L=a(S,"FORM",{class:!0,name:!0});var F=r(L);R=a(F,"BUTTON",{class:!0,type:!0}),r(R).forEach(l),B=A(F),w=a(F,"IMG",{class:!0,src:!0,alt:!0}),F.forEach(l),S.forEach(l),V.forEach(l),this.h()},h(){t(c,"id","skills"),t(c,"class","section-heading svelte-3mx44f"),t(c,"data-lang","skills"),oe(E.src,v=Ct)||t(E,"src",v),t(E,"alt","Благодарность 1"),t(E,"class","skills__program-icon svelte-3mx44f"),t(d,"class","skills__program-item svelte-3mx44f"),oe(p.src,q=Vt)||t(p,"src",q),t(p,"alt","Благодарность 2"),t(p,"class","skills__program-icon svelte-3mx44f"),t(b,"class","skills__program-item svelte-3mx44f"),oe(i.src,D=zt)||t(i,"src",D),t(i,"alt","Благодарность 3"),t(i,"class","skills__program-icon svelte-3mx44f"),t(k,"class","skills__program-item svelte-3mx44f"),t(o,"class","skills__program-zone svelte-3mx44f"),t(R,"class","popup__close svelte-3mx44f"),t(R,"type","button"),t(w,"class","popup__image"),oe(w.src,C=_[0])||t(w,"src",C),t(w,"alt","-"),t(L,"class","popup__container popup__container_type_image svelte-3mx44f"),t(L,"name","popup-image"),t(m,"class",T=ne(_[1]?"popup popup_type_image popup_opened":"popup popup_type_image")+" svelte-3mx44f"),t(n,"class","skills__container svelte-3mx44f")},m(h,V){Oe(h,n,V),e(n,c),e(c,f),e(n,u),e(n,o),e(o,d),e(d,E),e(o,I),e(o,b),e(b,p),e(o,W),e(o,k),e(k,i),e(n,y),e(n,m),e(m,L),e(L,R),e(L,B),e(L,w),P||(x=[me(E,"click",_[2]),me(p,"click",_[3]),me(i,"click",_[4]),me(R,"click",_[5])],P=!0)},p(h,[V]){V&1&&!oe(w.src,C=h[0])&&t(w,"src",C),V&2&&T!==(T=ne(h[1]?"popup popup_type_image popup_opened":"popup popup_type_image")+" svelte-3mx44f")&&t(m,"class",T)},i:K,o:K,d(h){h&&l(n),P=!1,at(x)}}}function fs(_,n,c){let f="",u=!1;return[f,u,()=>{c(1,u=!u),c(0,f=Ct)},()=>{c(1,u=!u),c(0,f=Vt)},()=>{c(1,u=!u),c(0,f=zt)},()=>{c(1,u=!u),c(0,f="")}]}class vs extends ze{constructor(n){super(),Re(this,n,fs,hs,Qe,{})}}function ps(_){let n,c,f,u,o,d,E,v,I,b,p,q,W,k,i,D,y,m,L,R,B,w,C,T,P,x,h,V,Q,U,M;return{c(){n=s("div"),c=s("h2"),f=N("ЗАКАЗАТЬ"),u=g(),o=s("div"),d=s("form"),E=s("label"),v=s("input"),I=g(),b=s("label"),p=s("input"),q=g(),W=s("label"),k=s("input"),i=g(),D=s("button"),y=N("Отправить"),m=g(),L=s("div"),R=s("p"),B=N(`Оставьте свои контактные данные — и мы обязательно
        свяжемся с вами, чтобы обсудить ваши потребности, детали
        и особенности будущего заказа.`),w=g(),C=s("div"),T=s("p"),P=s("nobr"),x=s("a"),h=N("+7 495 999-99-99"),V=g(),Q=s("p"),U=s("a"),M=N("sales@tdsphere.ru"),this.h()},l(z){n=a(z,"DIV",{class:!0});var H=r(n);c=a(H,"H2",{class:!0});var S=r(c);f=O(S,"ЗАКАЗАТЬ"),S.forEach(l),u=A(H),o=a(H,"DIV",{class:!0});var F=r(o);d=a(F,"FORM",{class:!0,name:!0});var Z=r(d);E=a(Z,"LABEL",{class:!0});var Y=r(E);v=a(Y,"INPUT",{class:!0,"data-lang":!0,placeholder:!0,type:!0,name:!0,minlength:!0,maxlength:!0}),Y.forEach(l),I=A(Z),b=a(Z,"LABEL",{class:!0});var ce=r(b);p=a(ce,"INPUT",{class:!0,"data-lang":!0,placeholder:!0,type:!0,pattern:!0,name:!0,minlength:!0,maxlength:!0}),ce.forEach(l),q=A(Z),W=a(Z,"LABEL",{class:!0});var $=r(W);k=a($,"INPUT",{class:!0,"data-lang":!0,placeholder:!0,type:!0,name:!0,minlength:!0,maxlength:!0}),$.forEach(l),i=A(Z),D=a(Z,"BUTTON",{class:!0,"data-lang":!0,type:!0});var le=r(D);y=O(le,"Отправить"),le.forEach(l),Z.forEach(l),m=A(F),L=a(F,"DIV",{class:!0});var te=r(L);R=a(te,"P",{class:!0});var J=r(R);B=O(J,`Оставьте свои контактные данные — и мы обязательно
        свяжемся с вами, чтобы обсудить ваши потребности, детали
        и особенности будущего заказа.`),J.forEach(l),w=A(te),C=a(te,"DIV",{class:!0});var ee=r(C);T=a(ee,"P",{class:!0});var re=r(T);P=a(re,"NOBR",{class:!0});var j=r(P);x=a(j,"A",{class:!0,href:!0});var ie=r(x);h=O(ie,"+7 495 999-99-99"),ie.forEach(l),j.forEach(l),re.forEach(l),V=A(ee),Q=a(ee,"P",{class:!0});var fe=r(Q);U=a(fe,"A",{class:!0,href:!0});var X=r(U);M=O(X,"sales@tdsphere.ru"),X.forEach(l),fe.forEach(l),ee.forEach(l),te.forEach(l),F.forEach(l),H.forEach(l),this.h()},h(){t(c,"class","order-header svelte-15ym8zm"),t(v,"class","popup__input svelte-15ym8zm"),t(v,"data-lang","placeholder"),t(v,"placeholder","Имя"),t(v,"type","text"),t(v,"name","user-name"),t(v,"minlength","2"),t(v,"maxlength","40"),v.required=!0,t(E,"class","popup__field svelte-15ym8zm"),t(p,"class","popup__input svelte-15ym8zm"),t(p,"data-lang","placeholder"),t(p,"placeholder","Телефон"),t(p,"type","tel"),t(p,"pattern","[0-9]4-[0-9]3-[0-9]4"),t(p,"name","user-tel"),t(p,"minlength","2"),t(p,"maxlength","40"),p.required=!0,t(b,"class","popup__field svelte-15ym8zm"),t(k,"class","popup__input svelte-15ym8zm"),t(k,"data-lang","placeholder"),t(k,"placeholder","Электронная почта"),t(k,"type","email"),t(k,"name","user-email"),t(k,"minlength","2"),t(k,"maxlength","40"),k.required=!0,t(W,"class","popup__field svelte-15ym8zm"),t(D,"class","popup__submit svelte-15ym8zm"),t(D,"data-lang","popup-contact-sendBtn"),t(D,"type","submit"),t(d,"class","popup__container svelte-15ym8zm"),t(d,"name","popup-edit"),d.noValidate=!0,t(R,"class","order-text svelte-15ym8zm"),t(x,"class","aphone svelte-15ym8zm"),t(x,"href","tel:+74959999999"),t(P,"class","phone svelte-15ym8zm"),t(T,"class","first_child svelte-15ym8zm"),t(U,"class","aemail svelte-15ym8zm"),t(U,"href","mailto:info@tdsphere.ru"),t(Q,"class","last_child svelte-15ym8zm"),t(C,"class","order__contacts svelte-15ym8zm"),t(L,"class","lead-text svelte-15ym8zm"),t(o,"class","order-subblock svelte-15ym8zm"),t(n,"class","order-block svelte-15ym8zm")},m(z,H){Oe(z,n,H),e(n,c),e(c,f),e(n,u),e(n,o),e(o,d),e(d,E),e(E,v),e(d,I),e(d,b),e(b,p),e(d,q),e(d,W),e(W,k),e(d,i),e(d,D),e(D,y),e(o,m),e(o,L),e(L,R),e(R,B),e(L,w),e(L,C),e(C,T),e(T,P),e(P,x),e(x,h),e(C,V),e(C,Q),e(Q,U),e(U,M)},p:K,i:K,o:K,d(z){z&&l(n)}}}class ms extends ze{constructor(n){super(),Re(this,n,null,ps,Qe,{})}}function gs(_){let n,c,f,u,o,d,E,v,I,b,p,q,W,k,i,D,y,m,L,R,B,w,C,T,P,x,h,V,Q,U,M,z,H,S,F,Z,Y,ce,$,le,te,J,ee,re,j,ie,fe,X,G,be,he,se,ve,ae,de,ge,ue,ke,Ae,Le,ye,_e,Ce;return{c(){n=s("div"),c=s("h1"),f=N("КОНТАКТЫ"),u=g(),o=s("div"),d=s("div"),E=s("div"),v=s("p"),I=N("Офис: г. Москва, Пресненская наб., 12. Башня Федерация, 54 этаж, офис 1000 (м. Деловой центр)."),b=g(),p=s("p"),q=s("span"),W=s("span"),k=N("ИНН 9715448206, "),i=s("span"),D=N("КПП 771501001"),y=g(),m=s("div"),L=s("nobr"),R=s("a"),B=N("+7 495 999-99-99"),w=g(),C=s("div"),T=s("a"),P=N("sales@tdsphere.ru"),x=g(),h=s("div"),V=s("p"),Q=N("Режим работы: "),U=s("br"),M=N(`
                    ПН–ПТ 9:00 до 18:00`),z=g(),H=s("div"),S=s("ul"),F=s("li"),Z=s("div"),Y=N("Генеральный директор"),ce=g(),$=s("p"),le=N("Ягодкина Виктория"),te=g(),J=s("a"),ee=N("yagodkina@tdsphere.ru"),re=g(),j=s("li"),ie=s("div"),fe=N("Главный ультраменеджер"),X=g(),G=s("p"),be=N("Яковенко Олег"),he=g(),se=s("a"),ve=N("yakovenko@tdsphere.ru"),ae=g(),de=s("li"),ge=s("div"),ue=N("Менеджер по продажам"),ke=g(),Ae=s("p"),Le=N("Банная Анастасия"),ye=g(),_e=s("a"),Ce=N("bannaya@tdsphere.ru"),this.h()},l(Ie){n=a(Ie,"DIV",{class:!0});var Ee=r(n);c=a(Ee,"H1",{class:!0});var we=r(c);f=O(we,"КОНТАКТЫ"),we.forEach(l),u=A(Ee),o=a(Ee,"DIV",{class:!0});var We=r(o);d=a(We,"DIV",{class:!0});var pe=r(d);E=a(pe,"DIV",{class:!0});var Je=r(E);v=a(Je,"P",{class:!0});var Te=r(v);I=O(Te,"Офис: г. Москва, Пресненская наб., 12. Башня Федерация, 54 этаж, офис 1000 (м. Деловой центр)."),Te.forEach(l),Je.forEach(l),b=A(pe),p=a(pe,"P",{class:!0});var Ye=r(p);q=a(Ye,"SPAN",{});var Se=r(q);W=a(Se,"SPAN",{});var Ke=r(W);k=O(Ke,"ИНН 9715448206, "),Ke.forEach(l),i=a(Se,"SPAN",{});var rt=r(i);D=O(rt,"КПП 771501001"),rt.forEach(l),Se.forEach(l),Ye.forEach(l),y=A(pe),m=a(pe,"DIV",{});var nt=r(m);L=a(nt,"NOBR",{class:!0});var ct=r(L);R=a(ct,"A",{class:!0,href:!0});var ot=r(R);B=O(ot,"+7 495 999-99-99"),ot.forEach(l),ct.forEach(l),nt.forEach(l),w=A(pe),C=a(pe,"DIV",{});var it=r(C);T=a(it,"A",{class:!0,href:!0});var dt=r(T);P=O(dt,"sales@tdsphere.ru"),dt.forEach(l),it.forEach(l),x=A(pe),h=a(pe,"DIV",{class:!0});var ut=r(h);V=a(ut,"P",{class:!0});var $e=r(V);Q=O($e,"Режим работы: "),U=a($e,"BR",{}),M=O($e,`
                    ПН–ПТ 9:00 до 18:00`),$e.forEach(l),ut.forEach(l),pe.forEach(l),z=A(We),H=a(We,"DIV",{class:!0});var _t=r(H);S=a(_t,"UL",{class:!0});var Pe=r(S);F=a(Pe,"LI",{class:!0});var Ze=r(F);Z=a(Ze,"DIV",{class:!0});var ht=r(Z);Y=O(ht,"Генеральный директор"),ht.forEach(l),ce=A(Ze),$=a(Ze,"P",{class:!0});var ft=r($);le=O(ft,"Ягодкина Виктория"),ft.forEach(l),te=A(Ze),J=a(Ze,"A",{class:!0,href:!0});var vt=r(J);ee=O(vt,"yagodkina@tdsphere.ru"),vt.forEach(l),Ze.forEach(l),re=A(Pe),j=a(Pe,"LI",{class:!0});var Me=r(j);ie=a(Me,"DIV",{class:!0});var pt=r(ie);fe=O(pt,"Главный ультраменеджер"),pt.forEach(l),X=A(Me),G=a(Me,"P",{class:!0});var mt=r(G);be=O(mt,"Яковенко Олег"),mt.forEach(l),he=A(Me),se=a(Me,"A",{class:!0,href:!0});var gt=r(se);ve=O(gt,"yakovenko@tdsphere.ru"),gt.forEach(l),Me.forEach(l),ae=A(Pe),de=a(Pe,"LI",{class:!0});var Ge=r(de);ge=a(Ge,"DIV",{class:!0});var At=r(ge);ue=O(At,"Менеджер по продажам"),At.forEach(l),ke=A(Ge),Ae=a(Ge,"P",{class:!0});var Et=r(Ae);Le=O(Et,"Банная Анастасия"),Et.forEach(l),ye=A(Ge),_e=a(Ge,"A",{class:!0,href:!0});var kt=r(_e);Ce=O(kt,"bannaya@tdsphere.ru"),kt.forEach(l),Ge.forEach(l),Pe.forEach(l),_t.forEach(l),We.forEach(l),Ee.forEach(l),this.h()},h(){t(c,"class","contacts__header svelte-1fthgxs"),t(v,"class","contacts__txt svelte-1fthgxs"),t(E,"class","adress_box svelte-1fthgxs"),t(p,"class","contacts__txt svelte-1fthgxs"),t(R,"class","aphone svelte-1fthgxs"),t(R,"href","tel:+74959999999"),t(L,"class","phone"),t(T,"class","aemail svelte-1fthgxs"),t(T,"href","mailto:info@tdsphere.ru"),t(V,"class","contacts__txt svelte-1fthgxs"),t(h,"class","last_child comment"),t(d,"class","contacts__address svelte-1fthgxs"),t(Z,"class","person__position svelte-1fthgxs"),t($,"class","person__name svelte-1fthgxs"),t(J,"class","aemail svelte-1fthgxs"),t(J,"href","mailto:yagodkina@tdsphere.ru"),t(F,"class","contaclts__elem svelte-1fthgxs"),t(ie,"class","person__position svelte-1fthgxs"),t(G,"class","person__name svelte-1fthgxs"),t(se,"class","aemail svelte-1fthgxs"),t(se,"href","mailto:yakovenko@tdsphere.ru"),t(j,"class","contaclts__elem svelte-1fthgxs"),t(ge,"class","person__position svelte-1fthgxs"),t(Ae,"class","person__name svelte-1fthgxs"),t(_e,"class","aemail svelte-1fthgxs"),t(_e,"href","mailto:bannaya@tdsphere.ru"),t(de,"class","contaclts__elem svelte-1fthgxs"),t(S,"class","contaclts__list svelte-1fthgxs"),t(H,"class","contacts__persons svelte-1fthgxs"),t(o,"class","contacts__box svelte-1fthgxs"),t(n,"class","section svelte-1fthgxs")},m(Ie,Ee){Oe(Ie,n,Ee),e(n,c),e(c,f),e(n,u),e(n,o),e(o,d),e(d,E),e(E,v),e(v,I),e(d,b),e(d,p),e(p,q),e(q,W),e(W,k),e(q,i),e(i,D),e(d,y),e(d,m),e(m,L),e(L,R),e(R,B),e(d,w),e(d,C),e(C,T),e(T,P),e(d,x),e(d,h),e(h,V),e(V,Q),e(V,U),e(V,M),e(o,z),e(o,H),e(H,S),e(S,F),e(F,Z),e(Z,Y),e(F,ce),e(F,$),e($,le),e(F,te),e(F,J),e(J,ee),e(S,re),e(S,j),e(j,ie),e(ie,fe),e(j,X),e(j,G),e(G,be),e(j,he),e(j,se),e(se,ve),e(S,ae),e(S,de),e(de,ge),e(ge,ue),e(de,ke),e(de,Ae),e(Ae,Le),e(de,ye),e(de,_e),e(_e,Ce)},p:K,i:K,o:K,d(Ie){Ie&&l(n)}}}class As extends ze{constructor(n){super(),Re(this,n,null,gs,Qe,{})}}function Es(_){let n,c,f,u,o,d,E,v,I,b,p,q,W,k,i,D,y,m,L,R,B,w,C,T,P,x;return c=new Kt({}),d=new as({}),I=new ls({}),q=new _s({}),i=new vs({}),m=new ms({}),B=new As({}),C=new es({}),{c(){n=s("body"),qe(c.$$.fragment),f=g(),u=s("div"),o=s("section"),qe(d.$$.fragment),E=g(),v=s("section"),qe(I.$$.fragment),b=g(),p=s("section"),qe(q.$$.fragment),W=g(),k=s("section"),qe(i.$$.fragment),D=g(),y=s("section"),qe(m.$$.fragment),L=g(),R=s("section"),qe(B.$$.fragment),w=g(),qe(C.$$.fragment),this.h()},l(h){n=a(h,"BODY",{class:!0});var V=r(n);De(c.$$.fragment,V),f=A(V),u=a(V,"DIV",{class:!0});var Q=r(u);o=a(Q,"SECTION",{class:!0});var U=r(o);De(d.$$.fragment,U),U.forEach(l),E=A(Q),v=a(Q,"SECTION",{class:!0});var M=r(v);De(I.$$.fragment,M),M.forEach(l),b=A(Q),p=a(Q,"SECTION",{class:!0});var z=r(p);De(q.$$.fragment,z),z.forEach(l),W=A(Q),k=a(Q,"SECTION",{class:!0});var H=r(k);De(i.$$.fragment,H),H.forEach(l),D=A(Q),y=a(Q,"SECTION",{class:!0});var S=r(y);De(m.$$.fragment,S),S.forEach(l),L=A(Q),R=a(Q,"SECTION",{class:!0});var F=r(R);De(B.$$.fragment,F),F.forEach(l),Q.forEach(l),w=A(V),De(C.$$.fragment,V),V.forEach(l),this.h()},h(){t(o,"class","main svelte-1677apy"),t(v,"class","section svelte-1677apy"),t(p,"class","section svelte-1677apy"),t(k,"class","section svelte-1677apy"),t(y,"class","section svelte-1677apy"),t(R,"class","section svelte-1677apy"),t(u,"class","content"),t(n,"class","page svelte-1677apy")},m(h,V){Oe(h,n,V),Ue(c,n,null),e(n,f),e(n,u),e(u,o),Ue(d,o,null),_[6](o),e(u,E),e(u,v),Ue(I,v,null),_[7](v),e(u,b),e(u,p),Ue(q,p,null),_[8](p),e(u,W),e(u,k),Ue(i,k,null),_[9](k),e(u,D),e(u,y),Ue(m,y,null),_[10](y),e(u,L),e(u,R),Ue(B,R,null),_[11](R),e(n,w),Ue(C,n,null),T=!0,P||(x=[He(je.call(null,o,"main")),He(je.call(null,v,"catalog")),He(je.call(null,p,"partners")),He(je.call(null,k,"thanks")),He(je.call(null,y,"order")),He(je.call(null,R,"contacts"))],P=!0)},p:K,i(h){T||(Be(c.$$.fragment,h),Be(d.$$.fragment,h),Be(I.$$.fragment,h),Be(q.$$.fragment,h),Be(i.$$.fragment,h),Be(m.$$.fragment,h),Be(B.$$.fragment,h),Be(C.$$.fragment,h),T=!0)},o(h){xe(c.$$.fragment,h),xe(d.$$.fragment,h),xe(I.$$.fragment,h),xe(q.$$.fragment,h),xe(i.$$.fragment,h),xe(m.$$.fragment,h),xe(B.$$.fragment,h),xe(C.$$.fragment,h),T=!1},d(h){h&&l(n),Ne(c),Ne(d),_[6](null),Ne(I),_[7](null),Ne(q),_[8](null),Ne(i),_[9](null),Ne(m),_[10](null),Ne(B),_[11](null),Ne(C),P=!1,at(x)}}}function ks(_,n,c){let f,u,o,d,E,v;qt(async()=>{Zt.update(i=>f.offsetTop),Mt.update(i=>u.offsetTop),tt.update(i=>o.offsetTop),st.update(i=>d.offsetTop),yt.update(i=>E.offsetTop),Gt.update(i=>v.offsetTop)});function I(i){Xe[i?"unshift":"push"](()=>{f=i,c(0,f)})}function b(i){Xe[i?"unshift":"push"](()=>{u=i,c(1,u)})}function p(i){Xe[i?"unshift":"push"](()=>{o=i,c(2,o)})}function q(i){Xe[i?"unshift":"push"](()=>{d=i,c(3,d)})}function W(i){Xe[i?"unshift":"push"](()=>{E=i,c(4,E)})}function k(i){Xe[i?"unshift":"push"](()=>{v=i,c(5,v)})}return[f,u,o,d,E,v,I,b,p,q,W,k]}class ws extends ze{constructor(n){super(),Re(this,n,ks,Es,Qe,{})}}export{ws as default};
