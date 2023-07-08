<script>
  import {scrollRef} from 'svelte-scrolling'
  import { onMount } from 'svelte';

  import { hbodyofset, hmainofset, hcatalogofset, hpartnersofset, hthanksofset, horderofset, hcontactsofset } from '../stores/store';

  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
  import Main from "../components/main.svelte";
  import Catalog from "../components/catalog.svelte";
  import Partners from "../components/partners.svelte";
  import Thanks from "../components/thanks.svelte";
  import Order from "../components/order.svelte";
  import Contacts from "../components/contacts.svelte";

  let hbody;
  let hmain;
  let hcatalog;
  let hpartners;
  let hthanks;
  let horder;
  let hcontacts;
  let preload = true;

  onMount(async () => {
    hbodyofset.update(n => hbody.offsetHeight);
		hmainofset.update(n => hmain.offsetTop );
    // hcatalogofset.update(n => hcatalog.offsetTop );
    hpartnersofset.update(n => hpartners.offsetTop );
    // hthanksofset.update(n => hthanks.offsetTop );
    horderofset.update(n => horder.offsetTop);
    hcontactsofset.update(n => hcontacts.offsetTop);
    setTimeout(()=>{preload=false},1000);
	});

</script>


<body bind:this={hbody} class="page">
  <div style="display: {preload ? "box" : "none"};" class="preloader">
    <figure>
      <div class="dot white"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </figure>
  </div>
  <Header />
    <div class="content">
      <section bind:this={hmain} class="main" use:scrollRef={'main'}><Main /></section>
      <!-- <section bind:this={hcatalog}  class="section" use:scrollRef={'catalog'}><Catalog /></section> -->
      <section bind:this={hpartners} id='partners' class="section" use:scrollRef={'partners'}><Partners /></section>
      <!-- <section bind:this={hthanks} class="section" use:scrollRef={'thanks'}><Thanks /></section> -->
      <section bind:this={horder} class="section" use:scrollRef={'order'}><Order /></section>
      <section bind:this={hcontacts} class="section" use:scrollRef={'contacts'}><Contacts /></section>
    </div> 
  <Footer />
</body>


<style>
.page{
  font-family: Gilroy;font-family: Gilroy;
  position: relative;
}

.main:before {
	display: block;
	content: "";
	height: 150px;
}

.section:before {
  display: block;
	content: "";
	height: 150px;
	margin: -150px 0 0;
}
@media screen and (max-width: 767px){
    .main:before {
    height: 149px;
  }
  .section:before {
    height: 149px;
    margin: -149px 0 0;
  }
}

@font-face {
  src: url(../fonts/Gilroy-Medium.woff2) format('woff2'),
      url(../fonts/Gilroy-Medium.woff) format('woff');
  font-family: Gilroy;
  font-weight: 500;
}

@font-face {
  src: url(../fonts/Gilroy-Bold.woff2) format('woff2'),
  url(../fonts/Gilroy-Bold.woff) format('woff');
  font-family: Gilroy;
  font-weight: 700;
}


  .page {
    font-family: Gilroy, Arial, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    min-width: 320px;
    margin: 0 auto;
  }
  :global(:root) {
    --mainColor: #f6f6f6;
    --secondaryColor: #1f2029;
    --mainTextColor: #1f2029;
    --secondaryTextColor: #828282;
    --lightTextColor: #fefefe;
    --grayTextColor: rgb(44, 44, 49);
    /* --mainBlueColor: #1E9D7B; */
    --mainBlueColor:  #373d79;
  }

.preloader{
  z-index: 2000;
  width: 100vw;
  height: 100vh;
  position:fixed;
  background-color: rgb(231, 243, 255);
}

figure { 
  position: absolute;
  margin: auto;
  top: 0; bottom: 0; left: 0; right: 0;
  width: 6.250em; height: 6.250em;
  animation: rotate 2.4s linear infinite;
  z-index: 2000;

}
.white { 
  top: 0; bottom: 0; left: 0; right: 0; 
  background: white; 
  animation: flash 2.4s linear infinite;
  opacity: 0;
}
.dot {
  position: absolute;
  margin: auto;
  width: 2.4em; height: 2.4em;
  border-radius: 100%;
  transition: all 1s ease;
}
.dot:nth-child(2) { top: 0; bottom: 0; left: 0; background: #cfd4fd; animation: dotsY 2.4s linear infinite; }
.dot:nth-child(3) { left: 0; right: 0; top: 0; background: #c2f5ff; animation: dotsX 2.4s linear infinite; }
.dot:nth-child(4) { top: 0; bottom: 0; right: 0; background: #00b1cc; animation: dotsY 2.4s linear infinite; }
.dot:nth-child(5) { left: 0; right: 0; bottom: 0; background: #788b92; animation: dotsX 2.4s linear infinite; }

@keyframes rotate {
  0% { transform: rotate( 0 ); }
  10% { width: 6.250em; height: 6.250em; }
  66% { width: 2.4em; height: 2.4em; }
  100%{ transform: rotate(360deg); width: 6.250em; height: 6.250em; }
}

@keyframes dotsY {
  66% { opacity: .1; width: 2.4em; }
  77%{ opacity: 1; width: 0; }
}
@keyframes dotsX {
  66% { opacity: .1; height: 2.4em;}
  77%{ opacity: 1; height: 0; }
}

@keyframes flash {
  33% { opacity: 0; border-radius: 0%; }
  55%{ opacity: .6; border-radius: 100%; }
  66%{ opacity: 0; }
}
</style>
