<div class="section">
    <h1 class="contacts__header">КОНТАКТЫ</h1>
    <div class="contacts__box">
        <div class="contacts__address">
            <div class="adress_box">
                <p class="contacts__txt">
                    Офис: г. Москва, Пресненская наб.,&nbsp;12. Башня&nbsp;Федерация, 54&nbsp;этаж, офис&nbsp;1000 (м.&nbsp;Деловой&nbsp;центр).
                </p>
            </div>
            <p class="contacts__txt">
                <span
                    ><span>ИНН 9715448206, </span><span>КПП 771501001</span
                    ></span
                >
            </p>
            <div>
                <nobr class="phone"
                    ><a class="aphone" href="tel:+74959999999"
                        >+7 495 999-99-99
                    </a></nobr
                >
            </div>
            <div>
                <a class="aemail" href="mailto:info@tdsphere.ru"
                    >sales@tdsphere.ru</a
                >
            </div>
            <div class="last_child comment">
                <p class="contacts__txt">
                    Режим работы: <br />
                    ПН–ПТ 9:00 до&nbsp;18:00
                </p>
            </div>
        </div>
        <div class="contacts__persons">
            <ul class="contaclts__list">
                <li class="contaclts__elem">
                    <div class="person__position">Генеральный директор</div>
                    <p class="person__name">Ягодкина Виктория</p>
                    <a class="aemail" href="mailto:yagodkina@tdsphere.ru">yagodkina@tdsphere.ru</a>
                </li>
                <li class="contaclts__elem">
                    <div class="person__position">Главный ультраменеджер</div>
                    <p class="person__name">Яковенко Олег</p>
                    <a class="aemail" href="mailto:yakovenko@tdsphere.ru">yakovenko@tdsphere.ru</a>
                </li>
                <li class="contaclts__elem">
                    <div class="person__position">Менеджер по продажам</div>
                    <p class="person__name">Банная Анастасия</p>
                    <a class="aemail" href="mailto:bannaya@tdsphere.ru">bannaya@tdsphere.ru</a>
                </li>
            </ul>
        </div>
    </div>
</div>

<style>
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
        align-items: center;
        margin-top: 30px;
    }

    .contacts__header {
        font-weight: 700;
        font-size: 46px;
        line-height: 1.24;
        text-align: center;
        user-select: none;
        margin: 40px auto 0;
    }

    .contaclts__list{
        list-style: none;
    }

    .contaclts__elem{
        margin-top: 25px;
    }

    .aphone,
    .aemail,
    .contacts__txt {
        color: var(--mainTextColor);
        font-size: 20px;
    }

    .aemail {
        color: var(--mainBlueColor);
    }

    .person__position{
        color: var(--mainTextColor);
        font-size: 15px;
        margin-bottom: 5px;
    }

    .person__name{
        color: var(--mainTextColor);
        font-size: 22px;
        margin: 0 auto;
    }

    .adress_box {
        max-width: 500px;
    }

    .contacts__persons{
        margin-left: 100px;
    }

    @media screen and (max-width: 767px){
        .contacts__header{
        font-size: 34px;
        }
        .contacts__box{
            flex-direction: column;
            margin-top: 0px;
        }
        .contacts__txt{
            text-align: center;
        }
        .contacts__address{
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .contacts__persons{
            margin: 0 auto;
        }
        .contaclts__list{
            padding-left: 0px;
        }
        .person__position{
            font-size: 13px;
        }
        .person__name{
            font-size: 18px;
        }
        .aemail, .aphone{
            font-size: 18px;
        }
    }
</style>
