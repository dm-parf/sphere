<script>
    import construct from '../images/check3.png'
    import Catalog from "../components/catalog.svelte";
    let Y = 0;
    let sphwidthstart = 75;
    let sphwidth = 75;
    $: showy(Y)

    function showy (yy){
        sphwidth = sphwidthstart - yy;
    }
    
</script>

<svelte:window bind:scrollY={Y} />

<style>
    @font-face {
    src: url(../fonts/Gilroy-Medium.woff2) format('woff2');
    font-family: Gilroy;
    font-weight: 400;
}

@font-face {
    src: url(../fonts/terminatorcyr.ttf) format('truetype');
    font-family: term;
    font-weight: 700;
}

.mainbox {
    width: 100%;
    /* background-color: var(--mainColor); */
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background: url("../images/back.jpg");
    margin-top: 30px;
}

.firstpart{
    display: flex;
    flex-direction: row;
    padding-left: 120px;
    padding-right: 120px;
    margin-top: 30px;
}

.header_title {
    font-family: term;
    font-size: 25px;
    color: var(--grayTextColor);
    text-align:center;
}

.about__container {
    max-width: 70%;
    margin-left: 70px;
    padding: 0;
}

.section-paragraph {
    margin: 0 auto 50px;
    font-size: 18px;
    font-family: Gilroy;
    line-height: 1.5;
    color: var(--mainTextColor);
    text-align: justify;
}

.intro__cards {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}

.card__image-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card__image {
    height: 45px;
    width: 45px;
    border-radius: 50%;
}

.card__name{
        font-family: Gilroy;
    }

 @media screen and (min-width: 2500px) {
    .firstpart{
        margin-bottom: 40px;
    }
 }

@media screen and (max-width: 1024px) {
    .firstpart{
    padding-left: 50px;
    padding-right: 50px;
    }
    .middle-paragraph{
        display: none;
    }
}

@media screen and (max-width: 767px) {
    .firstpart{
        padding-left: 0;
        padding-right: 0;
        flex-direction: column;
    }
    .section-paragraph {
    font-size: calc(14px + 4 * ((100vw - 320px) / 447));
    margin: 0 30px 30px;
    }
    .intro__cards {
    flex-direction: column;
    align-items: center;
    }
    .about__container {
    max-width: 100%;
    margin-left: 0;
    margin-top: 40px;
    }
    .card__image {
        height: 35px;
        width: 35px;
    }
    .card__name{
        font-size: 14px;
    }
}

@media screen and (max-width: 320px) {
    .section-paragraph {
    font-size: 16px;
    }
}

</style>

<div class="mainbox">
    <h1 class="header_title">СНАБЖЕНИЕ СТРОИТЕЛЬНЫХ ОБЪЕКТОВ В МОСКВЕ И МО</h1>
    <div class="firstpart">
        <Catalog />
        <div class="about__container">
            <p class="section-paragraph">
                Снабжение строительных объектов является важным элементом успешного строительства. Мы понимаем, что оно должно быть организовано грамотно и профессионально, чтобы обеспечить бесперебойную работу на объекте и минимизировать возможные риски.
                Торговый дом «Сфера» имеет большой опыт работы в данной области и предлагает нашим клиентам высококачественные услуги по подбору и поставке строительных материалов.
                Мы гарантируем быструю и надежную доставку, а также индивидуальный подход к каждому клиенту. 
            </p>
            <p class="section-paragraph middle-paragraph">
                В нашей команде работают специалисты с многолетним стажем в строительной сфере, которые не только обработают и оформят ваш заказ, но и окажут консультации по выбору материалов и оборудования, подбору аналогов для экономии вашего времени и средств. 
                Широкий выбор товаров по низким ценам позволяет удовлетворить потребности любого строительного проекта.            
            </p>
            <p class="section-paragraph">
                Торговый дом «Сфера» пока еще молодая компания, мы образовались в 2023 году, но именно это считаем своим преимуществом.   Мы более гибкие и адаптивные, что позволяет быстрее реагировать на изменения в рынке и адаптироваться к новым возможностям. 
                Если вы ищете надежного поставщика строительных материалов и оборудования, то мы готовы предложить свои услуги. Свяжитесь с нами, и мы поможем вам обеспечить успешный ход вашего строительного проекта!            
            </p>
        </div>
    </div>
    <div class="intro__cards">
        <div class="card">
            <div class="card__image-container">
                <img
                class="card__image"
                src= {construct}
                alt="1"
                />
            </div>
            <div class="card__details">
                <h2 class="card__name" data-lang="card-name-alyona">индивидуальный подход</h2>
            </div>
        </div>
        <div class="card">
            <div class="card__image-container">
                <img
                class="card__image"
                src= {construct}
                alt="2"
                />
            </div>
            <div class="card__details">
                <h2 class="card__name" data-lang="card-name-alyona">большой опыт работы</h2>
            </div>
        </div>
        <div class="card">
            <div class="card__image-container">
                <img
                class="card__image"
                src= {construct}
                alt="3"
                />
            </div>
            <div class="card__details">
                <h2 class="card__name" data-lang="card-name-alyona">надежный партнер</h2>
            </div>
        </div>
        <div class="card">
            <div class="card__image-container">
                <img
                class="card__image"
                src= {construct}
                alt="3"
                />
            </div>
            <div class="card__details">
                <h2 class="card__name" data-lang="card-name-alyona">широкий ассортимент товаров</h2>
            </div>
        </div>
    </div>

</div>