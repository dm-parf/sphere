<script>
    import threem from '../images/partners/3m.png'
    import abb from '../images/partners/abb.png'
    import ceresit from '../images/partners/ceresit.png'
    import knauf from '../images/partners/knauf.png'
    import tikkurila from '../images/partners/tikkurila.png'
    import unis from '../images/partners/unis.png'
</script>

<div class="skills__container">
    <h2 class="section-heading" data-lang="skills">НАШИ ПАРТНЕРЫ</h2>
    <ul class="skills__program-zone">
        <li class="skills__program-item">
        <img
            src={threem}
            alt="Логотип threem"
            class="skills__program-icon"
        />
        </li>
        <li class="skills__program-item">
        <img
            src={abb}
            alt="Логотип abb"
            class="skills__program-icon"
        />
        </li>
        <li class="skills__program-item">
        <img
            src={ceresit}
            alt="Логотип ceresit"
            class="skills__program-icon"
        />
        </li>
        <li class="skills__program-item">
        <img
            src={knauf}
            alt="Логотип knauf"
            class="skills__program-icon"
        />
        </li>
        <li class="skills__program-item">
        <img
            src={tikkurila}
            alt="Логотип tikkurila"
            class="skills__program-icon"
        />
        </li>
        <li class="skills__program-item">
        <img
            src={unis}
            alt="Логотип unis"
            class="skills__program-icon"
        />
        </li>
        <li class="skills__program-item">
            <img
                src={threem}
                alt="Логотип threem"
                class="skills__program-icon"
            />
            </li>
            <li class="skills__program-item">
            <img
                src={abb}
                alt="Логотип abb"
                class="skills__program-icon"
            />
            </li>
            <li class="skills__program-item">
            <img
                src={ceresit}
                alt="Логотип ceresit"
                class="skills__program-icon"
            />
            </li>
            <li class="skills__program-item">
            <img
                src={knauf}
                alt="Логотип knauf"
                class="skills__program-icon"
            />
            </li>
            <li class="skills__program-item">
            <img
                src={tikkurila}
                alt="Логотип tikkurila"
                class="skills__program-icon"
            />
            </li>
            <li class="skills__program-item">
            <img
                src={unis}
                alt="Логотип unis"
                class="skills__program-icon"
            />
            </li>
    </ul>
</div>

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
.skills__container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 35px 20px 0 20px;
    min-height: 240px;
}

@media screen and (max-width: 767px){
    .skills__container{
        margin: 0 15px;
    }
}

.section-heading {
    width: fit-content;
    position: relative;
    margin: 15px auto 40px;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.24;
    text-align: center;
    user-select: none;
    z-index: 0;
    font-family: term;
    color: var(--grayTextColor);
}

.skills__program-icon{
    width: 100px;
    height: 100px;
    border-radius: 30%;
}

.skills__program-item{
    list-style-type: none;
    margin: 0 50px 50px 30px;
    transition: .3s linear .1s;
    filter: grayscale(80%);
    border-radius: 30%;
    box-shadow: 0px 0px 80px rgba(0, 0, 0, 0.2);
}

.skills__program-item:hover {
    filter: grayscale(0%);
    transform: scale(1.3); 
}

.skills__program-zone{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
    max-width: 1100px;
}

@media screen and (max-width: 767px){
    .skills__program-icon {
        width: 70px;
        height: 70px;
    }
    .skills__program-item{
    filter: none
    }
    .section-heading {
        font-size: 22px;
        margin-top: 35px;
    }
}

</style>