<div class="section">
    <h1 class="contacts__header">Контактная информация</h1>
    <div class="contacts__box">
        <div class="contacts__address">
            <div>
                <nobr class="phone">
                    <a class="aphone" href="tel:+74957785310">
                        +7-495-778-53-10
                    </a></nobr>
            </div>
            <div class="mailbox">
                <a class="aemail" href="mailto:sales@tdsphere.ru"
                    >sales@tdsphere.ru</a>
            </div>
            <div class="adress_box">
                <p class="contacts__txt">
                    Офис:<br>г. Москва, Пресненская наб.,&nbsp;12. Башня&nbsp;Федерация, 58&nbsp;этаж, офис&nbsp;5810 (м.&nbsp;Деловой&nbsp;центр).
                </p>
            </div>
            <div class="last_child comment">
                <p class="contacts__txt">
                    Режим работы: <br />
                    ПН–ПТ 9:00 до&nbsp;18:00
                </p>
            </div>
        </div>
        <div class="contacts__persons">
            <h2 class="company_header">Реквизиты компании</h2>
            <p class="requisites">Полное наименование:<br>Общество с ограниченной ответственностью «ТД Сфера»</p>
            <p class="requisites">Сокращенное наименование:<br>ООО «ТД СФЕРА»</p>
            <p class="requisites">Юр.адрес:<br>127410 , г.Москва вн.тер.г.Муниципальный округ Алтуфьевский .ш.Алтуфьевское . д79А стр.25, пом.4/1</p>
            <p class="requisites">ИНН/КПП: 9715448206/771501001</p>
            <p class="requisites">ОГРН: 1237700292785</p>
            <p class="requisites">ОКПО: 98246052</p>
            <p class="requisites">Расчетный счет: 40702810320000007342</p>
            <p class="requisites">Корреспондентский счет: 30101810745374525104</p>
            <p class="requisites">БИК: 044525104</p>
            <p class="requisites">Банк: ООО "Банк Точка"</p>
            <p class="requisites">Генеральный директор:<br>Ягодкина Виктория Андреевна</p>
            <p class="requisites">Тел. 8-495-778-53-10</p>
            <p class="requisites">Email: sales@tdsphere.ru</p>
        </div>
    </div>
</div>

<style>
    @font-face {
    src: url(../fonts/terminatorcyr.ttf) format('truetype');
    font-family: term;
    font-weight: 700;
    }
    .section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        background: url("../images/back.jpg");
    }

    .contacts__box{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: start;
        margin-top: 30px;
        position: relative; 
    }

    .contacts__header {
        font-weight: 700;
        font-size: 40px;
        line-height: 1.24;
        text-align: center;
        user-select: none;
        margin: 40px auto 0;
        font-family: term;
        color: var(--grayTextColor);
    }

    .requisites{
        font-weight: 500;
        font-size: 18px;
        margin: 8px auto;
    }

    .aphone,
    .aemail,
    .contacts__txt
    {
        color: var(--mainTextColor);
        font-size: 20px;
    }

    .aemail {
        color: var(--mainBlueColor);
        font-size: 20px;
    }

    .mailbox {
        margin-top: 20px;
    }

    .aphone,
    .aemail
    {
        font-size: 35px;
        font-weight: 600;
    }

    .adress_box {
        max-width: 500px;
    }

    .contacts__persons{
        margin-left: 150px;
        max-width: 30%;
    }

    .company_header{
        margin: 0 auto;
        font-size: 22px;
    }

    @media screen and (max-width: 1024px){
        .contacts__persons{
        margin-left: 50px;
        max-width: 40%;
        }
    }

    @media screen and (max-width: 767px){
        .contacts__header{
        font-size: 22px;
        }
        .contacts__box{
            flex-direction: column;
            margin-top: 0px;
        }
        .contacts__txt{
            text-align: center;
            margin: 20px 25px;
        }
        .contacts__address{
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .contacts__persons{
            margin: 0 auto;
            max-width: 90%;
            margin-top: 40px;
        }
        .aemail, .aphone{
            font-size: 24px;
        }
        .contacts__box{
            margin-top: 30px;
        }
        .company_header{
        text-align: center;
    }
    }
</style>
