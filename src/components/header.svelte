<script>
    import { scrollTo } from 'svelte-scrolling'
    import { get } from 'svelte/store'
    import Logo from '../images/logo200.png'
    import { hmainofset, hcatalogofset, hpartnersofset, hthanksofset, horderofset, hcontactsofset } from '../stores/store';
    let burger_pushed = false;
    let current_header_link = 'main';
    let duration = 500;
    let Y = 0;
    let screenWidth;
    $: showy(Y)

function showy (yy){
    if(yy < get(hpartnersofset)) 
    {
    current_header_link = 'main'
    }
    else if(yy > get(hpartnersofset) & yy < get(hthanksofset))
    {
    current_header_link = 'partners'
    }
    else if(yy > get(hthanksofset) & yy < get(horderofset))
    {
    current_header_link = 'thanks'
    }
    else if(yy > get(horderofset) & (screenWidth>768 ? yy < get(hcontactsofset)-355 : yy < get(hcontactsofset)))
    {
    current_header_link = 'order'
    }
    else if(screenWidth>768 ? (yy > (get(hcontactsofset)-355)) : (yy > get(hcontactsofset)))
    {
    current_header_link = 'contacts'
    }
}

</script>

<svelte:window bind:scrollY={Y} bind:innerWidth={screenWidth} />

<header class="header">
    <a class="link header__link" href="/">
        <img src = {Logo} alt="Логотип Сфера" class="header__logo"/> 
    </a>
    <div class="header__container">
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
                        use:scrollTo={{ ref: 'main', duration: duration }}
                        class={current_header_link === 'main' ? "header__link header__link_active" : "header__link"}
                        on:click={() => burger_pushed = !burger_pushed}
                        target="_self"
                    >Главная</a>
                </li>
                <li class="header__link-element" style="display:none">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <a
                        data-lang="menu-catalog"
                        use:scrollTo={{ ref: 'catalog', duration: duration }}
                        class={current_header_link === 'catalog' ? "header__link header__link_active" : "header__link"}
                        on:click={() => burger_pushed = !burger_pushed}
                        target="_self"
                    >Каталог</a>
                </li>
                <li class="header__link-element">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <a
                        data-lang="menu-partners"
                        use:scrollTo={{ ref: 'partners', duration: duration }}
                        class={current_header_link === 'partners' ? "header__link header__link_active" : "header__link"}
                        on:click={() => burger_pushed = !burger_pushed}
                        target="_self">Партнеры</a>
                </li>
                <li class="header__link-element">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <a
                        data-lang="menu-thanks"
                        use:scrollTo={{ ref: 'thanks', duration: duration }}
                        class={current_header_link === 'thanks' ? "header__link header__link_active" : "header__link"}
                        on:click={() => burger_pushed = !burger_pushed}
                        target="_self">Благодарности</a>
                </li>
                <li class="header__link-element">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <a
                        data-lang="menu-order"
                        use:scrollTo={{ ref: 'order', duration: duration }}
                        class={current_header_link === 'order' ? "header__link header__link_active" : "header__link"}
                        on:click={() => burger_pushed = !burger_pushed}
                        target="_self">Заказать</a>
                </li>
                <li class="header__link-element">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <a
                        data-lang="menu-contacts"
                        use:scrollTo={{ ref: 'contacts', duration: duration }}
                        class={current_header_link === 'contacts' ? "header__link header__link_active" : "header__link"}
                        on:click={() => burger_pushed = !burger_pushed}
                        target="_self">Контакты</a>
                </li>
            </ul>
        </nav>
    </div>
</header>

<style>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 5;
        background-color: var(--mainColor);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .header__logo {
        height: 80px;
        width: 80px;
        margin-top: 12px;
        margin-left: 12px;
        border-radius: 50%;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
    .header__container {
        max-width: 945px;
        margin: 0 auto;
        padding: 0 25px;
        flex: 1;
    }


    @media (max-width: 767px) {
        .header{
            background-color: rgb(217, 222, 229);
        }
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
        .header__logo {
        height: 60px;
        width: 60px;
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
        .header__menu-icon {
            display: block;
            z-index: 5;
            position: relative;
            width: 30px;
            height: 18px;
            cursor: pointer;
            margin-left: auto;
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
