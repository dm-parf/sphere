<div class="order-block">
  <h2 class="order-header">ЗАКАЗАТЬ</h2>
  <div class="order-subblock">
    <form class="popup__container" name="popup-edit" novalidate>
      <label class="popup__field">
        <input
          class="popup__input"
          data-lang="placeholder"
          placeholder="Имя"
          type="text"
          name="user-name"
          minlength="2"
          maxlength="40"
          required
        />
      </label>
      <label class="popup__field">
        <input
          class="popup__input"
          data-lang="placeholder"
          placeholder="Телефон"
          type="tel"
          pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
          name="user-tel"
          minlength="2"
          maxlength="40"
          required
        />
      </label>
      <label class="popup__field">
        <input
          class="popup__input"
          data-lang="placeholder"
          placeholder="Электронная почта"
          type="email"
          name="user-email"
          minlength="2"
          maxlength="40"
          required
        />
      </label>
      <button class="popup__submit" data-lang="popup-contact-sendBtn" type="submit">
        Отправить
      </button>
    </form>
    <div class="lead-text">
      <p class="order-text">
        Оставьте свои контактные данные&nbsp;— и&nbsp;мы&nbsp;обязательно
        свяжемся с&nbsp;вами, чтобы обсудить ваши потребности, детали
        и&nbsp;особенности будущего заказа.
      </p>
      <div class="order__contacts">
        <p class="first_child">
          <nobr class="phone"><a class="aphone" href="tel:+74959999999">+7 495 999-99-99 </a></nobr>
        </p>
        <p class="last_child">
          <a class="aemail" href="mailto:info@tdsphere.ru">sales@tdsphere.ru</a>
        </p>
      </div>
    </div>
  </div>
</div>

<style>
.order-block{
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items:center;
}

.order-subblock{
  display: flex;
  flex-direction: row;
  margin-top: 40px;
}

.order-header{
  font-size: 46px;
  margin: 0 auto;
}

.lead-text{
  max-width: 500px;
  margin-left: 100px;
}
.order-text{
  font-size: 24px;
  margin: 0 auto;
}

.popup__container{
    width: 430px;
    display: flex;
    flex-direction: column;
}

.popup__field{
  margin-top: 20px;
}
.popup__input{
    min-height: 45px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 17px;
    color: #000000;
    border: none;
    outline-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    padding: 0 0;
    width: 100%;
    text-indent: 5px;
}

.popup__submit{
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: white;
    min-height: 50px;
    margin: 48px 36px 36px;
    background-color: var(--mainBlueColor);
    border: none;
    outline-style: none;
    cursor: pointer;
    padding: 0 0;
    transition: opacity 1s linear;
    border-radius: 10px;
}

.order__contacts{
  margin-top: 45px;
}

.aphone, .aemail{
  font-size: 25px;
  color: var(--mainTextColor);
}
.aemail{
  color: var(--mainBlueColor);
}

@media screen and (max-width: 767px){
    .popup__submit {
        margin: 40px 22px 25px;
        min-height: 46px;
        font-size: 14px;
        line-height: 17px;
    }
    .order-subblock{
      flex-direction: column;
    }
  }

.popup__submit:hover{
    opacity: 0.8;
}

::-webkit-input-placeholder {
    color: #C4C4C4;
  }

@media screen and (max-width: 767px){
    .popup__container {
        width: 282px;
    }
    .order-header{
    font-size: 40px;
    }
    .order-subblock{
    align-items: center;
    margin-top: 10px;
    }
    .lead-text{
    max-width: 350px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
    .order-text{
    font-size: 18px;
    text-align: center;
    }
    .order__contacts{
    display: none;
    }
  }
</style>