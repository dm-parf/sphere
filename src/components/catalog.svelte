<script>
    import { catalogdata } from '../stores/store';
    import Dropdown from './navbar/dropdown.svelte';
    let innerWidth;

</script>

<svelte:window bind:innerWidth />

<nav class="navbar" >
    <h1  class="nav-header">КАТАЛОГ</h1>
    <hr class="hr-line">
    <div class="menu-container" >
        <ul class="mega-menu" >
            {#each $catalogdata as link, i(i)}
                <Dropdown {link} {innerWidth}/>
            {/each}
        </ul>
    </div>
</nav>

<style>
    :global(ul){
        list-style: none;
        cursor: pointer;
    }
    @font-face {
    src: url(../fonts/terminatorcyr.ttf) format('truetype');
    font-family: term;
    font-weight: 700;
    }

    .navbar{
        background: #373d79;
        position:relative;
        transition: width 1s, height 1s;
        z-index: 4;
        opacity: 97%;
        border-radius: 10px;
        /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6); */
        min-width: 325px;
        height: 400px;
    }
    .mega-menu{
        padding-left: 0;
    }
    .nav-header{
        padding-left: 90px;
        font-size: 30px;
        padding-bottom: 0;
        margin-bottom: 0;
        margin-top: 15px;
        color: white;
    }
    .hr-line{
        margin: 10px 20px;
        padding: 0;
        height: 0;
        border: none;
        border-top: 2px dotted #6c7190;
    }

    @media screen and (max-width: 767px){

    .navbar{
            position:relative;
            top:0;
            left: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 0;
            background: #fdfdff;
        }

    .menu-container{
            width: 100%;
            background: #fdfdff;
        }
    .nav-header{
            font-family: term;
            font-size: 22px;
            padding-left: 0;
        }
    .nav-header{
        color: rgb(0, 0, 0);
    }
    .hr-line{
        display: none;
    }
    }

</style>