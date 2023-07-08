<script>
    import Submenu from './submenu.svelte'
    export let subMenu;
    export let innerWidth;
    let menuheight;
    let subdropdownOpen = false;

    function navhover(el)
    {
        if (el !== undefined) menuheight = el.srcElement.parentElement.offsetHeight;
        if(innerWidth > 768)
        {
            subdropdownOpen = !subdropdownOpen;
        }
    }
    function navclick()
    {
        if(innerWidth <= 768)
        {
            subdropdownOpen = !subdropdownOpen;
        }
    }
</script>

<li on:mouseenter={(el) => navhover(el)} on:mouseleave={() => navhover()} class="sub-dropdown">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div >
        <div on:click={() => navclick()} class="string">
            <span>- {subMenu.subDropdown}</span>
            <span>{subMenu.subMenuLinks.length != 0 ? `>` : ''}</span>
        </div> 
    </div>
    <Submenu {subMenu} {subdropdownOpen} {menuheight} {innerWidth} />  
    <hr class="hr-line">  
</li>

<style>
    .sub-dropdown > div {
        padding: 0.8em;
        position: relative;
        font-size: 13px;
    }
    .hr-line{
        margin: 0px 0px;
        margin-top: 5px;
        padding: 0;
        height: 0;
        border: none;
        border-top: 1px solid #80828e;
    }
    .string{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    @media screen and (min-width: 767px){
        .sub-dropdown:hover > div {
            background: rgb(253, 253, 253);
            border-radius: 10px;
            font-weight: 600;
        }
    }   
    @media screen and (max-width: 767px){
        .sub-dropdown > div {
            display: block;
            z-index: 7;
        }
        .hr-line{
        margin: 0px 10px;
        border-top: 1px solid #dfe1e6;
    }
    }
</style>