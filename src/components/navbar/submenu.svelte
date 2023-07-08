<script>
    export let subMenu;
    export let subdropdownOpen;
    export let menuheight;
    export let innerWidth;
</script>

<ul style="min-height: {subMenu.subMenuLinks.length > 0 & innerWidth > 767 ?  menuheight : 0}px" class="subMenu {subdropdownOpen && 'subMenu-show'}">
    {#each subMenu.subMenuLinks as subMenuLink, i (i)}
        <li>- {subMenuLink}</li>
        <hr class="hr-line">  
    {/each}
</ul>

<style>
    .subMenu{
        display: none;
        padding-left: 0;
        border-radius: 10px;
        
    }
    .hr-line{
        margin: 0px 15px;
        margin-top: 5px;
        padding: 0;
        height: 0;
        border: none;
        border-top: 1px solid #9fa0ab;
        opacity: 0.5;
    }
    .subMenu-show{
        display: block;
        position: absolute;
        right: -401px;
        top: 0;
        width: 400px;
        background: #fbfbff;
        /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6); */
    }
    .subMenu > li {
        padding: 0.8em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.8em;
        font-size: 14px;
        font-weight: 600;
    }

    @media screen and (min-width: 767px){
        li:hover {
            background: rgb(124, 132, 174);
            border-radius: 10px;
        }
    }

    @media screen and (max-width: 767px){
        .subMenu-show{
            position: relative;
            right: auto;
            width: auto;
            box-shadow: none;
            background: rgb(255, 255, 255);
        }
    }
</style>