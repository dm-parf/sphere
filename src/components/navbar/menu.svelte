<script>
    export let link;
    export let dropdownOpen;
    export let innerWidth;
    import Subdropdown from "./subdropdown.svelte";
</script>

<ul style="{innerWidth > 767 ? "min-height: 381px;" : ""}" class="menu {dropdownOpen && 'menu-show'}">
    <div class="menu-header">
        <img class="img-menu" src="{link.img}" alt="">
        <p class="txt-menu">{link.dropdown}</p>
    </div>
    <hr class="hr-line">
    {#each link.subMenus as subMenu (subMenu.id)}
        <Subdropdown {subMenu} {innerWidth} />
    {/each}
</ul>    


<style>
    .menu{
        display: none;
        opacity: 0;
        padding-left: 0;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 10px;
        transition: opacity 0.5s ease-in-out;
        
    }

    .menu-header{
        display: flex;
        flex-direction: row;
        justify-content: left;
        
    }

    .hr-line{
        margin: 0 20px;
        padding: 0;
        height: 0;
        border: none;
        border-top: 2px dotted #cbcbcb;
        margin-bottom: 15px;
    }

    .img-menu{
        height: 25px;
        width: 25px;
        margin-left: 15px;
    }
    .txt-menu{
        margin-top: 5px;
        margin-left: 5px;
        color: rgb(9, 11, 82);
        font-size: 20px;
        margin-bottom: 10px;
        font-weight: 600;
    }

    .menu-show{
        display: block;
        position: absolute;
        right: -400px;
        top: 0;
        width: 400px;
        background: #8595b9;
        opacity: 1;
        /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6); */
    }

    @media screen and (max-width: 767px){
        .menu-show{
            position: relative;
            right: auto;
            width: auto;
            box-shadow: none;
            background: rgb(255, 255, 255);
        }
        .menu-header{
            display: none;
        }
    }
</style>