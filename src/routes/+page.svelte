<script>
  import {scrollRef} from 'svelte-scrolling'
  import { afterUpdate } from 'svelte';

  import { hmainofset, hcatalogofset, hpartnersofset, hthanksofset, horderofset, hcontactsofset } from '../stores/store';

  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
  import Main from "../components/main.svelte";
  import Catalog from "../components/catalog.svelte";
  import Partners from "../components/partners.svelte";
  import Thanks from "../components/thanks.svelte";
  import Order from "../components/order.svelte";
  import Contacts from "../components/contacts.svelte";

  let hmain;
  let hcatalog;
  let hpartners;
  let hthanks;
  let horder;
  let hcontacts;


afterUpdate(() => {
  hmainofset.update(n => hmain.offsetTop);
  hcatalogofset.update(n => hcatalog.offsetTop);
  hpartnersofset.update(n => hpartners.offsetTop);
  hthanksofset.update(n => hthanks.offsetTop);
  horderofset.update(n => horder.offsetTop);
  hcontactsofset.update(n => hcontacts.offsetTop);
});

</script>

<body class="page">
  <Header />
    <div class="content">
      <section bind:this={hmain} class="main" use:scrollRef={'main'}><Main /></section>
      <section bind:this={hcatalog} class="section" use:scrollRef={'catalog'} style="margin-top: 30px;"><Catalog /></section>
      <section bind:this={hpartners} class="section" use:scrollRef={'partners'}><Partners /></section>
      <section bind:this={hthanks} class="section" use:scrollRef={'thanks'}><Thanks /></section>
      <section bind:this={horder} class="section" use:scrollRef={'order'}><Order /></section>
      <section bind:this={hcontacts} class="section" use:scrollRef={'contacts'}><Contacts /></section>
    </div> 
  <Footer />
</body>


<style>

.main:before {
	display: block;
	content: "";
	height: 98px;
}

.section:before {
  display: block;
	content: "";
	height: 98px;
	margin: -98px 0 0;
}
@media screen and (max-width: 767px){
    .main:before {
    height: 78px;
  }
  .section:before {
    height: 78px;
    margin: -78px 0 0;
  }
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
    /* --mainBlueColor: #1E9D7B; */
    --mainBlueColor: #3c3997;
  }
</style>
