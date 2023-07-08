<script>
    import { scrollElement, scrollTo } from 'svelte-scrolling'
    import tdsphere from '../images/h1111.png'
    import { get } from 'svelte/store'
    import Logo from '../images/logo200.png'
    import { hbodyofset, hmainofset, hcatalogofset, hpartnersofset, hthanksofset, horderofset, hcontactsofset } from '../stores/store';
    let burger_pushed = false;
    let current_header_link = 'main';
    let duration = 500;
    let Y = 0;
    let screenHeight;

    let sphwidthstart = 50;
    let sphwidth = 50;

    $: showy(Y)

function showy (yy){
    sphwidth = yy < sphwidthstart ? yy : sphwidthstart;

    // console.log("!-----")
    // console.log(`hbodyofset ${get(hbodyofset) }`)
    // console.log(`screenHeight ${screenHeight}`)
    // console.log(`partn ${get(hmainofset) }`)
    // console.log(`partn ${get(hpartnersofset)}`)
    // console.log(`thnks ${get(hthanksofset)}`)
    // console.log(`ordr ${get(horderofset) }`)
    // console.log(`cntc ${get(hcontactsofset) }`)
    // console.log("-----")
    // console.log(yy)
    // console.log("-----  --")

    if(yy < get(hpartnersofset)) 
    {
        current_header_link = 'main'
    }
        if(yy >= get(hpartnersofset) & yy < get(horderofset))
    {
        current_header_link = 'partners'
    }
        if(yy >= get(horderofset) & yy < get(hcontactsofset))
    {
        current_header_link = 'order'
    }
        if(yy!=0 & yy >= get(hcontactsofset))
    {
        current_header_link = 'contacts'
    }
    if(screenHeight + yy >= get(hbodyofset))
    {
        current_header_link = 'contacts'
    }

}

function linkclick(elem)
{
    burger_pushed = !burger_pushed;
    scrollElement(elem, duration);
}

</script>

<svelte:window bind:scrollY={Y}  bind:innerHeight={screenHeight} />

<header class="header">
    <div class="first_container">
        <a class="link header__link" href="/">
            <img src = {Logo} alt="Логотип Сфера" class="header__logo"/> 
        </a>
        <div class="img_container">
            <img
            class="intro__title"
            src= {tdsphere}
            alt="1"
            />
        </div>
        <div class="contact_container">
            <p class="first_child">
                <svg width="36" height="28" viewBox="4 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_3619_1801" fill="white">
                    <path d="M23.1975 29.3357C22.9055 29.3349 22.6144 29.3029 22.3292 29.2402C16.8997 28.117 11.8976 25.4836 7.89878 21.6429C3.98526 17.7939 1.27102 12.8932 0.0844682 7.53376C-0.0554415 6.86582 -0.0211021 6.17312 0.184183 5.52229C0.389468 4.87146 0.758789 4.28441 1.25662 3.81762L4.72964 0.474835C4.90703 0.307078 5.11781 0.178612 5.3482 0.097823C5.5786 0.017034 5.82345 -0.0142622 6.06676 0.00597678C6.31904 0.0322962 6.5625 0.113565 6.78 0.244069C6.99751 0.374573 7.18379 0.551142 7.32573 0.76136L11.667 7.17778C11.8298 7.42674 11.9084 7.72139 11.8912 8.01837C11.874 8.31534 11.762 8.59895 11.5715 8.82747L9.39218 11.4322C10.2601 13.3532 11.4893 15.0894 13.0128 16.5463C14.5264 18.056 16.3155 19.2615 18.2831 20.0974L20.9834 17.9528C21.2102 17.7736 21.4862 17.6676 21.7747 17.649C22.0631 17.6304 22.3504 17.7 22.5984 17.8487L29.1537 22.0857C29.3787 22.2201 29.5703 22.4035 29.7143 22.6224C29.8583 22.8413 29.9509 23.09 29.9851 23.3497C30.0193 23.6095 29.9944 23.8736 29.912 24.1224C29.8297 24.3711 29.6922 24.598 29.5097 24.786L26.1235 28.1375C25.7388 28.5203 25.2823 28.8232 24.7801 29.0288C24.278 29.2344 23.7401 29.3387 23.1975 29.3357V29.3357ZM5.92784 1.72513L2.45481 5.06791C2.17475 5.32887 1.96745 5.65822 1.85327 6.02359C1.73909 6.38895 1.72198 6.77775 1.80362 7.15173C2.90693 12.1808 5.44311 16.7827 9.10566 20.4013C12.8689 24.0146 17.576 26.4916 22.6852 27.5471C23.0719 27.6279 23.4727 27.6116 23.8515 27.4994C24.2303 27.3873 24.5754 27.1829 24.8558 26.9046L28.242 23.5531L21.9124 19.4636L19.0125 21.7732C18.9014 21.861 18.7706 21.9204 18.6314 21.9462C18.4922 21.9719 18.3488 21.9632 18.2137 21.9208C15.8057 21.0336 13.6236 19.6253 11.8233 17.7966C9.9612 16.0576 8.51578 13.9207 7.59489 11.5451C7.55593 11.4013 7.55464 11.2499 7.59113 11.1054C7.62763 10.961 7.70068 10.8283 7.80327 10.7203L10.1476 7.9158L5.92784 1.72513Z"/>
                    </mask>
                    <path d="M22.3292 29.2402L23.4025 24.3567L23.3723 24.3501L23.3421 24.3438L22.3292 29.2402ZM7.89878 21.6429L4.39272 25.2077L4.41389 25.2285L4.43531 25.2491L7.89878 21.6429ZM0.0844682 7.53376L-4.80933 8.55884L-4.80348 8.58674L-4.79732 8.61458L0.0844682 7.53376ZM1.25662 3.81762L4.67661 7.46504L4.70043 7.4427L4.72396 7.42006L1.25662 3.81762ZM4.72964 0.474835L1.29412 -3.15796L1.27814 -3.14285L1.2623 -3.1276L4.72964 0.474835ZM6.06676 0.00597678L6.58556 -4.96703L6.53345 -4.97247L6.48123 -4.97681L6.06676 0.00597678ZM7.32573 0.76136L3.18192 3.55937L3.18454 3.56325L7.32573 0.76136ZM11.667 7.17778L15.8517 4.44135L15.8302 4.40845L15.8082 4.37589L11.667 7.17778ZM11.5715 8.82747L15.4063 12.0359L15.4125 12.0285L11.5715 8.82747ZM9.39218 11.4322L5.55737 8.22378L3.54342 10.6309L4.8357 13.491L9.39218 11.4322ZM13.0128 16.5463L16.5438 13.0062L16.5065 12.969L16.4685 12.9326L13.0128 16.5463ZM18.2831 20.0974L16.328 24.6993L19.0645 25.862L21.3928 24.0128L18.2831 20.0974ZM20.9834 17.9528L17.8832 14.03L17.8738 14.0375L20.9834 17.9528ZM22.5984 17.8487L25.3126 13.6495L25.2415 13.6035L25.1689 13.56L22.5984 17.8487ZM29.1537 22.0857L26.4395 26.2849L26.5142 26.3332L26.5905 26.3787L29.1537 22.0857ZM29.5097 24.786L33.027 28.3397L33.0628 28.3042L33.0979 28.268L29.5097 24.786ZM26.1235 28.1375L22.6062 24.5838L22.5967 24.5933L26.1235 28.1375ZM5.92784 1.72513L10.0593 -1.09102L6.72536 -5.98224L2.46049 -1.87731L5.92784 1.72513ZM2.45481 5.06791L5.8634 8.72599L5.893 8.69841L5.92215 8.67035L2.45481 5.06791ZM1.80362 7.15173L-3.08136 8.21807L-3.08023 8.22319L1.80362 7.15173ZM9.10566 20.4013L5.59152 23.9581L5.61692 23.9832L5.64269 24.008L9.10566 20.4013ZM22.6852 27.5471L23.7084 22.6529L23.6968 22.6505L22.6852 27.5471ZM24.8558 26.9046L21.3386 23.3509L21.3336 23.3558L24.8558 26.9046ZM28.242 23.5531L31.7593 27.1068L36.1815 22.7299L30.9554 19.3534L28.242 23.5531ZM21.9124 19.4636L24.6258 15.2639L21.608 13.3141L18.7975 15.5524L21.9124 19.4636ZM19.0125 21.7732L22.1155 25.6938L22.1214 25.6891L22.1274 25.6844L19.0125 21.7732ZM18.2137 21.9208L16.4851 26.6125L16.5999 26.6548L16.7167 26.6914L18.2137 21.9208ZM11.8233 17.7966L15.3864 14.2888L15.3127 14.2139L15.2359 14.1422L11.8233 17.7966ZM7.59489 11.5451L2.76884 12.8525L2.83771 13.1067L2.93292 13.3523L7.59489 11.5451ZM7.80327 10.7203L11.4293 14.1629L11.5381 14.0483L11.6395 13.927L7.80327 10.7203ZM10.1476 7.9158L13.9838 11.1226L16.4078 8.2227L14.2791 5.09965L10.1476 7.9158ZM23.2114 24.3357C23.2756 24.3359 23.3397 24.3429 23.4025 24.3567L21.256 34.1236C21.8891 34.2628 22.5353 34.3339 23.1835 34.3357L23.2114 24.3357ZM23.3421 24.3438C18.8346 23.4114 14.682 21.2252 11.3623 18.0368L4.43531 25.2491C9.11326 29.742 14.9648 32.8226 21.3163 34.1365L23.3421 24.3438ZM11.4048 18.0782C8.1803 14.9067 5.94391 10.8688 4.96626 6.45295L-4.79732 8.61458C-3.40187 14.9175 -0.209785 20.681 4.39272 25.2077L11.4048 18.0782ZM4.97826 6.50869C5.01427 6.68058 5.00543 6.85885 4.9526 7.02634L-4.58424 4.01823C-5.04764 5.48738 -5.12515 7.05106 -4.80933 8.55884L4.97826 6.50869ZM4.9526 7.02634C4.89977 7.19384 4.80472 7.34491 4.67661 7.46504L-2.16338 0.17021C-3.28715 1.22391 -4.12084 2.54908 -4.58424 4.01823L4.9526 7.02634ZM4.72396 7.42006L8.19699 4.07727L1.2623 -3.1276L-2.21073 0.21519L4.72396 7.42006ZM8.16517 4.10763C7.83179 4.4229 7.43568 4.66433 7.00269 4.81616L3.69372 -4.62051C2.79993 -4.30711 1.98228 -3.80875 1.29412 -3.15796L8.16517 4.10763ZM7.00269 4.81616C6.56969 4.96799 6.10955 5.0268 5.65228 4.98877L6.48123 -4.97681C5.53735 -5.05533 4.58751 -4.93392 3.69372 -4.62051L7.00269 4.81616ZM5.54795 4.97899C5.07383 4.92952 4.61629 4.77679 4.20753 4.53153L9.35248 -4.0434C8.5087 -4.54966 7.56426 -4.86493 6.58556 -4.96703L5.54795 4.97899ZM4.20753 4.53153C3.79876 4.28627 3.44869 3.95444 3.18192 3.55937L11.4695 -2.03665C10.9189 -2.85216 10.1963 -3.53713 9.35248 -4.0434L4.20753 4.53153ZM3.18454 3.56325L7.52583 9.97966L15.8082 4.37589L11.4669 -2.04053L3.18454 3.56325ZM7.48229 9.91421C7.05914 9.2671 6.85488 8.50126 6.89957 7.72938L16.8829 8.30736C16.9619 6.94153 16.6005 5.58639 15.8517 4.44135L7.48229 9.91421ZM6.89957 7.72938C6.94426 6.9575 7.23553 6.22034 7.73053 5.62639L15.4125 12.0285C16.2884 10.9776 16.8038 9.67318 16.8829 8.30736L6.89957 7.72938ZM7.7367 5.61901L5.55737 8.22378L13.227 14.6407L15.4063 12.0359L7.7367 5.61901ZM4.8357 13.491C5.96755 15.996 7.57047 18.2601 9.55718 20.1599L16.4685 12.9326C15.4082 11.9187 14.5527 10.7104 13.9487 9.37348L4.8357 13.491ZM9.48185 20.0864C11.4481 22.0475 13.7721 23.6134 16.328 24.6993L20.2383 15.4956C18.859 14.9095 17.6048 14.0645 16.5438 13.0062L9.48185 20.0864ZM21.3928 24.0128L24.093 21.8682L17.8738 14.0375L15.1735 16.1821L21.3928 24.0128ZM24.0837 21.8757C23.5141 22.3258 22.821 22.5919 22.0966 22.6387L21.4527 12.6594C20.1513 12.7434 18.9063 13.2214 17.8832 14.03L24.0837 21.8757ZM22.0966 22.6387C21.3721 22.6854 20.6506 22.5105 20.0279 22.1373L25.1689 13.56C24.0503 12.8895 22.7541 12.5754 21.4527 12.6594L22.0966 22.6387ZM19.8842 22.0478L26.4395 26.2849L31.8679 17.8866L25.3126 13.6495L19.8842 22.0478ZM26.5905 26.3787C26.1677 26.1263 25.8075 25.7815 25.5369 25.3701L33.8917 19.8748C33.3331 19.0256 32.5897 18.3138 31.717 17.7928L26.5905 26.3787ZM25.5369 25.3701C25.2664 24.9587 25.0924 24.4915 25.028 24.0033L34.9422 22.6962C34.8094 21.6885 34.4502 20.724 33.8917 19.8748L25.5369 25.3701ZM25.028 24.0033C24.9636 23.5151 25.0106 23.0187 25.1653 22.5512L34.6588 25.6935C34.9782 24.7286 35.0751 23.7039 34.9422 22.6962L25.028 24.0033ZM25.1653 22.5512C25.32 22.0837 25.5785 21.6574 25.9214 21.304L33.0979 28.268C33.8058 27.5386 34.3394 26.6585 34.6588 25.6935L25.1653 22.5512ZM25.9924 21.2323L22.6062 24.5838L29.6408 31.6912L33.027 28.3397L25.9924 21.2323ZM22.5967 24.5933C22.6793 24.511 22.7775 24.4459 22.8854 24.4017L26.6749 33.6559C27.7871 33.2004 28.7984 32.5295 29.6503 31.6817L22.5967 24.5933ZM22.8854 24.4017C22.9933 24.3575 23.1089 24.3351 23.2255 24.3358L23.1694 34.3356C24.3713 34.3424 25.5627 34.1113 26.6749 33.6559L22.8854 24.4017ZM2.46049 -1.87731L-1.01253 1.46548L5.92215 8.67035L9.39518 5.32756L2.46049 -1.87731ZM-0.953782 1.40984C-1.86877 2.26243 -2.54609 3.3385 -2.91913 4.53221L6.62567 7.51496C6.48098 7.97795 6.21828 8.39531 5.8634 8.72599L-0.953782 1.40984ZM-2.91913 4.53221C-3.29217 5.72593 -3.34807 6.99619 -3.08135 8.21807L6.68859 6.08539C6.79204 6.5593 6.77035 7.05198 6.62567 7.51496L-2.91913 4.53221ZM-3.08023 8.22319C-1.76996 14.1956 1.24195 19.6607 5.59152 23.9581L12.6198 16.8445C9.64426 13.9047 7.58382 10.166 6.68747 6.08028L-3.08023 8.22319ZM5.64269 24.008C10.0852 28.2735 15.6422 31.1977 21.6736 32.4437L23.6968 22.6505C19.5099 21.7855 15.6525 19.7557 12.5686 16.7947L5.64269 24.008ZM21.662 32.4413C22.8586 32.6914 24.0985 32.6408 25.2706 32.2938L22.4324 22.705C22.8468 22.5824 23.2853 22.5644 23.7084 22.6529L21.662 32.4413ZM25.2706 32.2938C26.4428 31.9468 27.5105 31.3144 28.3781 30.4533L21.3336 23.3558C21.6403 23.0514 22.0179 22.8277 22.4324 22.705L25.2706 32.2938ZM28.3731 30.4583L31.7593 27.1068L24.7248 19.9994L21.3386 23.3509L28.3731 30.4583ZM30.9554 19.3534L24.6258 15.2639L19.1991 23.6633L25.5287 27.7528L30.9554 19.3534ZM18.7975 15.5524L15.8976 17.862L22.1274 25.6844L25.0273 23.3748L18.7975 15.5524ZM15.9095 17.8525C16.4378 17.4344 17.0603 17.1518 17.7229 17.0294L19.5399 26.8629C20.4809 26.689 21.3651 26.2877 22.1155 25.6938L15.9095 17.8525ZM17.7229 17.0294C18.3854 16.907 19.0678 16.9484 19.7107 17.1501L16.7167 26.6914C17.6297 26.9779 18.5989 27.0368 19.5399 26.8629L17.7229 17.0294ZM19.9423 17.2291C18.2256 16.5966 16.6699 15.5926 15.3864 14.2888L8.26018 21.3043C10.5773 23.658 13.3859 25.4706 16.4851 26.6125L19.9423 17.2291ZM15.2359 14.1422C13.924 12.9171 12.9057 11.4115 12.2569 9.73788L2.93292 13.3523C4.12591 16.4298 5.9984 19.1982 8.41069 21.4509L15.2359 14.1422ZM12.4209 10.2377C12.6063 10.9221 12.6125 11.6427 12.4388 12.3301L2.74344 9.88074C2.49678 10.8571 2.50553 11.8805 2.76884 12.8525L12.4209 10.2377ZM12.4388 12.3301C12.2652 13.0175 11.9175 13.6487 11.4293 14.1629L4.17722 7.27763C3.48385 8.00794 2.99009 8.90439 2.74344 9.88074L12.4388 12.3301ZM11.6395 13.927L13.9838 11.1226L6.31133 4.70904L3.96704 7.51351L11.6395 13.927ZM14.2791 5.09965L10.0593 -1.09102L1.79633 4.54127L6.01606 10.7319L14.2791 5.09965Z" fill="#FFAF37" mask="url(#path-1-inside-1_3619_1801)"/>
                </svg>               
                <a class="aphone" href="tel:+74957785310">+7-495-778-53-10 </a>
            </p>
            <p class="last_child">
                <svg width="30" height="22.5" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V16.5C0 16.8978 0.158035 17.2794 0.43934 17.5607C0.720644 17.842 1.10218 18 1.5 18H22.5C22.8978 18 23.2794 17.842 23.5607 17.5607C23.842 17.2794 24 16.8978 24 16.5V1.5C24 1.10218 23.842 0.720644 23.5607 0.43934C23.2794 0.158035 22.8978 0 22.5 0ZM21.345 16.5H2.745L7.995 11.07L6.915 10.0275L1.5 15.63V2.64L10.8225 11.9175C11.1035 12.1969 11.4837 12.3537 11.88 12.3537C12.2763 12.3537 12.6565 12.1969 12.9375 11.9175L22.5 2.4075V15.5325L16.98 10.0125L15.9225 11.07L21.345 16.5ZM2.4825 1.5H21.285L11.88 10.8525L2.4825 1.5Z" fill="#FFAF37"/>
                </svg>
                <a class="aemail" href="mailto:info@tdsphere.ru">sales@tdsphere.ru</a>
            </p>
        </div>
    </div>
    <div class="header__container">
        <div class="img_mobcontainer">
            <img
            class="intro__title"
            src= {tdsphere}
            alt="1"
            />
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class={!burger_pushed ? "header__menu-icon" : "header__menu-icon header__menu-icon_active"} 
            on:click={() => burger_pushed = !burger_pushed}>
            <span />
        </div>
        <nav  class={!burger_pushed ? "header__menu" : "header__menu header__menu_active"}>
            <ul class="header__links">
                <li  class="header__link-element">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <a
                        data-lang="menu-main"
                        class={current_header_link === 'main' ? "header__link header__link_active" : "header__link"}
                        target="_self"
                        on:click={() => linkclick('main')}
                    >О нас</a>
                </li>
                <li class="header__link-element">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <a
                        data-lang="menu-catalog"
                        class={current_header_link === 'catalog' ? "header__link header__link_active" : "header__link"}
                        on:click={() => linkclick('main')}
                        target="_self"
                    >Каталог</a>
                </li>
                <li class="header__link-element">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <a
                        data-lang="menu-partners"
                        class={current_header_link === 'partners' ? "header__link header__link_active" : "header__link"}
                        on:click={() => linkclick('partners')}
                        target="_self">Партнеры</a>
                </li>
                <li class="header__link-element">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <a
                        data-lang="menu-order"
                        class={current_header_link === 'order' ? "header__link header__link_active" : "header__link"}
                        on:click={() => linkclick('order')}
                        target="_self">Заказать</a>
                </li>
                <li class="header__link-element">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <a
                        data-lang="menu-contacts"
                        class={current_header_link === 'contacts' ? "header__link header__link_active" : "header__link"}
                        on:click={() => linkclick('contacts')}
                        target="_self">Контакты</a>
                </li>
            </ul>
        </nav>
    </div>
</header>

<style>
    @font-face {
    src: url(../fonts/Gilroy-Bold.woff2) format('woff2'),
    url(../fonts/Gilroy-Bold.woff) format('woff');
    font-family: Gilroy;
    font-weight: 700;
    }

    @font-face {
    src: url(../fonts/terminatorcyr.ttf) format('truetype');
    font-family: term;
    font-weight: 700;
    }

    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 5;
        background-color: var(--mainColor);
        display: flex;
        flex-direction: column;
        background-color: rgb(216, 228, 244);
    }

    .link{
        position: absolute;
    }
    .img_container{
        height: 80px;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: absolute;
        margin-left: 100px;
    }
    .img_mobcontainer{
        display: none;
    }
    .header__logo {
        height: 70px;
        width: 70px;
        margin-top: 12px;
        margin-left: 12px;
        border-radius: 50%;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }

    .intro__title {
        padding: 0;
        user-select: none;
        transition: 0.3s ease;
        height: 100%;
        margin-left: 20px;
    }

    .first_container{
        height: 90px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 15px;
        background: rgb(255, 255, 255);
    }

    .header__container {
        min-height: 40px;
        margin-left: 250px;
        margin-right: 250px; 
        margin-top: 20px;
        /* max-width: 945px; */
        /* margin: 0 auto; */
        flex: 1;
    }

    .contact_container{
        margin-right: 30px;
        position: absolute;
        right: 0;
    }

    .first_child, .last_child{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .aphone, .aemail{
        color: rgb(55, 58, 88);
        font-size: 22px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        text-decoration: none;
        margin-left: 20px;
    }

    @media (max-width: 1600px) {
        .header__container {
        margin-left: 150px;
        margin-right: 150px;
        }
    }

    @media (max-width: 1260px) {
        .header__container {
        margin-left: 100px;
        margin-right: 100px;
        }
    }

    @media (max-width: 980px) {
        .img_container{
            display:flex;
            height: 78px;
        }
        .header__logo {
        height: 60px;
        width: 60px;
        }
        .contact_container{
            margin-top: 0;
        }
    }

    @media (max-width: 767px) {
        .header__menu {
            position: fixed;
            top: 0;
            left: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            padding: 100px 30px 30px 30px;
            transition: left 0.3s ease 0s;
            overflow: auto;
        }
        
        .header__container {
            margin: 0 auto;
        }

        .first_container{
            /* display: none; */
        }

        .img_container{
            display: none;
        }
        .img_mobcontainer{
            display: block;
            height: 50px;
            position: absolute;
            margin-top: -15px;
        }
    }

    

    @media (max-width: 767px) {
        .header__menu_active {
            background-color: var(--mainColor);
            left: 0;
        }
    }

    .header__menu-icon {
        display: none;
    }

    @media (max-width: 767px) {
        .header{
            display: block;
        }
        .header__menu-icon {
            display: block;
            z-index: 5;
            position: relative;
            width: 30px;
            height: 18px;
            cursor: pointer;
            margin-left: auto;
            margin-top: 20px;
            margin-right: 20px;
        }

        .header__menu-icon span,
        .header__menu-icon::before,
        .header__menu-icon::after {
            left: 0;
            position: absolute;
            height: 10%;
            width: 100%;
            transition: all 0.3s ease 0s;
            background-color: var(--mainTextColor);
        }
        .header__menu-icon::before,
        .header__menu-icon::after {
            content: "";
        }
        .header__menu-icon::before {
            top: 0;
        }
        .header__menu-icon::after {
            bottom: 0;
        }
        .header__menu-icon span {
            top: 50%;
            transform: scale(1) translate(0px, -50%);
        }
    }

    .header__menu-icon_active span {
        transform: scale(0) translate(0, -50%);
    }

    .header__menu-icon_active::before {
        top: 50%;
        transform: rotate(-45deg) translate(0, -50%);
    }

    .header__menu-icon_active::after {
        bottom: 50%;
        transform: rotate(45deg) translate(0, 50%);
    }

    .header__links {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    @media (min-width: 767px) {
        .header__links {
            display: flex;
            justify-content: space-between;
        }
    }

    .header__link {
        text-decoration: none;
        font-size: 18px;
        line-height: 22px;
        font-weight: 700;
        color: var(--secondaryTextColor);
        cursor: pointer;
        font-family: Gilroy;
    }

    .header__link_active {
        color: var(--mainTextColor);
    }

    @media (max-width: 767px) {
        .header__link-element {
            margin-top: 30px;
        }
    }
</style>
