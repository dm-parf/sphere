<script>
    import test from '../images/thanks/test.jpg'
    import test1 from '../images/thanks/test1.jpg'
    import test2 from '../images/thanks/test2.jpg'

    let currentimg = "";
    let imgclicked = false;
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="skills__container">
    <h2 id="skills" class="section-heading" data-lang="skills">БЛАГОДАРНОСТЬ КЛИЕНТОВ</h2>
    <ul class="skills__program-zone">
        <li class="skills__program-item">
        <img
            src={test}
            alt="Благодарность 1"
            class="skills__program-icon"
            on:click={() => {imgclicked = !imgclicked; currentimg = test}}
        />
        </li>
        <li class="skills__program-item">
        <img
            src={test1}
            alt="Благодарность 2"
            class="skills__program-icon"
            on:click={() => {imgclicked = !imgclicked; currentimg = test1}}
        />
        </li>
        <li class="skills__program-item">
        <img
            src={test2}
            alt="Благодарность 3"
            class="skills__program-icon"
            on:click={() => {imgclicked = !imgclicked; currentimg = test2}}
        />
        </li>
    </ul>
    <div class={!imgclicked ? "popup popup_type_image" : "popup popup_type_image popup_opened"}>
        <form class="popup__container popup__container_type_image" name="popup-image">
        <button class="popup__close" type="button" on:click={() => {imgclicked = !imgclicked; currentimg = ""}}></button>
        <img class="popup__image" src={currentimg} alt="-">
        </form>
    </div>
</div>

<style>
.skills__container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 20px 0 20px;
    background: url("../images/back.jpg");
}

@media screen and (max-width: 767px){
    .skills__container{
        margin: 0 auto;
    }
}

.section-heading {
    width: fit-content;
    position: relative;
    margin: 40px auto 40px;
    font-weight: 700;
    font-size: 46px;
    line-height: 1.24;
    text-align: center;
    user-select: none;
    z-index: 0;
}

.skills__program-icon{
    width: 250px;
}

.skills__program-item{
    list-style-type: none;
    margin: 0 30px 30px 30px;
    box-shadow: 0px 0px 80px rgba(0, 0, 0, 0.2);
}

.popup{
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 300;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.5s, opacity 0.5s linear;
}

.popup__close{
    border: none;
    min-width: 50px;
    min-height: 50px;
    background-image: url(../images/CloseIcon.svg);
    background-size: 56.6px 56.6px;
    padding: 0 0;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    right:-45px;
    top: -45px;
    background-color: transparent;
    outline-style: none;
    cursor: pointer;
    transition: opacity 1s linear;
}

.popup__close:hover{
    opacity: 0.6;
}

.popup__container{
    position: fixed;
    width: 430px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.6);
}

.popup__container_type_image{
    border: none;
    background-color: transparent;
    padding: 0 0;
    outline-style: none;
    border-radius: 0;
    width: auto;
}

.popup_opened{
    visibility: visible;
    opacity: 1;
}

.skills__program-zone{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
}

@media screen and (max-width: 767px){
    .popup__container {
        width: 340px;
    }

    .popup__close {
        right: 2px;
        top: -46px;
        background-size: 36.8px 36.8px;
        min-width: 30px;
        min-height: 30px;
    }

    .skills__program-icon {
        width: 270px;
    }
    .section-heading {
        font-size: 34px;
    }
}
</style>