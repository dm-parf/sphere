<script>
    import construct from '../images/kran.png'
    import tdsphere from '../images/h1111.png'
</script>

<style>
    @font-face {
    src: url(../fonts/Gilroy-Medium.woff2) format('woff2');
    font-family: Gilroy;
    font-weight: 400;
}

.main {
    padding-top: 30px;
    width: 100%;
    /* background-color: var(--mainColor); */
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background: url("../images/back.jpg"); 
}

.intro__title {
    width: 50%;
    margin: 0 auto 40px;
    padding: 0;
    user-select: none;
}

.about__container {
    max-width: 700px;
    margin: 0 auto;
    padding: 0;
}

.section-paragraph {
    margin: 0 auto 50px;
    font-size: 18px;
    font-family: Gilroy;
    line-height: 1.5;
    text-align: center;
    color: var(--mainTextColor);
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
    /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); */
}

@media screen and (max-width: 767px) {
    .intro__title{
        width: 90%;
        margin-bottom: 25px;
    }
    .section-paragraph {
    font-size: calc(14px + 4 * ((100vw - 320px) / 447));
    margin: 0 auto 20px;
    }
    .intro__cards {
    flex-direction: column;
    align-items: center;
    }
    .about__container {
    margin: 0 15px;
    }
    .card__image {
        height: 35px;
        width: 35px;
    }
}

@media screen and (max-width: 320px) {
    .section-paragraph {
    font-size: 16px;
    }
}

</style>

<div class="main">
    <img
        class="intro__title"
        src= {tdsphere}
        alt="1"
    />
    <div class="about__container">
        <p class="section-paragraph">
            Компания, специализирующийся на сегменте поставок строительных материалов.  Образовалась в 2015 году.
        </p>
        <p class="section-paragraph">
            Снабжение строительных объектов, комплектация строительства под ключ – основное и приоритетное  направление деятельности нашей компании. Работать с нами действительно комфортно.
        </p>
        <p class="section-paragraph">
        Мы работаем с самыми разными производителями и этот список постоянно пополняется!
        </p>
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
                <h2 class="card__name" data-lang="card-name-alyona">широкий ассортимент товаров</h2>
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
    </div>

</div>