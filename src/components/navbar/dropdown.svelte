<script>
    export let link;
    export let innerWidth;
    let dropdownOpen = false;
    import Menu from './menu.svelte'


function navhover()
{
    if(innerWidth > 768)
    {
        dropdownOpen = !dropdownOpen;
    }
}
function navclick()
{
    if(innerWidth <= 768)
    {
        dropdownOpen = !dropdownOpen;
    }
}

</script>

<li on:mouseenter={() => navhover()} on:mouseleave={() => navhover()} class="dropdown">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div  >
        <div on:click={() => navclick()} class="box-menu">
            <img class="img-menu" src="{link.img}" alt="">
            <span class="txt-menu">{link.dropdown}</span>
        </div>
    </div>
    <Menu {link} {dropdownOpen} {innerWidth}/>
</li>


<style>
    .dropdown > div {
        padding: 0.8em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.5em;
        position: relative;
        font-size: 16px;
    }

    .box-menu{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content:flex-start;
        user-select: none;
    }
    .img-menu{
        height: 25px;
        width: 25px;
        margin-right: 10px;
    }
    .txt-menu{
        margin-top: 5px;
        color: white;
        font-weight: 600;
    }

    @media screen and (min-width: 767px){
        .dropdown:hover > div {
            background: rgb(42, 42, 50);
            border-radius: 10px;
        }
    }

    @media screen and (max-width: 767px){
        .dropdown > div {
            display: block;
            user-select: none;
        }
        .txt-menu{
        color:  var(--mainBlueColor);
    }
    }
</style>


<!-- on:mouseleave={() => dropdownOpen = !dropdownOpen} -->