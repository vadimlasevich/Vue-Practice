<template>
  <div class="page" id="app">
    <div class="page-image"></div>
    <div class="todolist">
      <div class="todolist__header">
        <h1 class="todolist__title">to do list</h1>
      </div>
      <div class="todolist__items">
        <div class="todolist__list">
          <label class="todolist__task">
            <input class="task__input" type="checkbox" value="check-1" />
            <span class="task__text">Task 1</span>
            <button class="task__btn-close"></button>
          </label>
          <label class="todolist__task">
            <input class="task__input" type="checkbox" value="check-2" />
            <span class="task__text">Task 2</span>
            <button class="task__btn-close"></button>
          </label>
          <label class="todolist__task">
            <input class="task__input" type="checkbox" value="check-3" />
            <span class="task__text">Task 3</span>
            <button class="task__btn-close"></button>
          </label>
          <input
            class="todolist__btn-add"
            type="text"
            placeholder="Add a new task"
          />
        </div>
      </div>
      <div class="todolist__footer">
        <div class="footer__block-left">
          <span class="block-left__number">1/3</span>
          <h3 class="block-left__text">left</h3>
        </div>
        <div class="footer__buttons">
          <label class="footer__btn">
            <input class="footer__input" type="radio" name="footer-input" />
            <span>All</span>
          </label>
          <label class="footer__btn">
            <input class="footer__input" type="radio" name="footer-input" />
            <span>Active</span>
          </label>
          <label class="footer__btn">
            <input class="footer__input" type="radio" name="footer-input" />
            <span>Completed</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import "./assets/styles/style.scss";

.page {
  background: rgb(228, 53, 10);
  background: linear-gradient(
    90deg,
    rgba(228, 53, 10, 1) 0%,
    rgba(238, 142, 77, 0.8911939775910365) 100%
  );
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.todolist {
  position: relative;
  z-index: 5;
  margin: 0 3rem;
  width: 54rem;
  border: 2px solid #7f4b13;
  &__header {
    background: #ffca93;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__title {
    @include text;
    font-family: $OpenSans;
    color: #7f4b13;
  }
  &__items {
    background: #fff;
    padding: 3rem;
  }
  &__list {
    display: flex;
    flex-direction: column;
  }
  &__task {
    background: #ffdfbe;
    border-radius: 10px;
    margin-bottom: 3rem;
    padding: 1.3rem 2rem;
    display: flex;
    align-items: center;
  }
  &__task > input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  &__task > span {
    display: inline-flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    width: 90%;
  }
  &__task > span::before {
    content: "";
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    border: 1.5px solid #feb567;
    border-radius: 5px;
    margin-right: 2.3rem;
    padding-left: 2rem;
  }
  &__task > input:not(:disabled):not(:checked) + span:hover::before {
    border: 1.5px solid #e58622;
  }
  &__task > input:checked + span::before {
    display: block;
    background: #feb567;
    background-image: url("./assets/images/Vector.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  &__btn-add {
    @include text;
    font-family: $Inter;
    color: #7f4b13;
    background: #ffecd8;
    border: 1.5px dashed #ffca93;
    border-radius: 10px;
    padding: 1.1rem;
    transition: all 0.5s ease;
    &::placeholder {
      text-align: center;
      color: #ffca93;
    }
  }
  &__footer {
    background: #ffca93;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;
  }
}
.task {
  &__text {
    @include text;
    font-family: $Inter;
    color: #7f4b13;
  }
  &__btn-close {
    display: block;
    margin-left: auto;
    width: 2.4rem;
    height: 2.4rem;
    background: transparent;
    border: 1.5px solid #ffca93;
    border-radius: 5px;
    position: relative;
    transition: all 0.5s ease;
    &:hover {
      border: 1.5px solid #fc8f1a;
    }
    &:hover::before {
      background-color: #fc8f1a;
    }
    &:hover::after {
      background-color: #fc8f1a;
    }
  }
  &__btn-close:before,
  &__btn-close:after {
    position: absolute;
    content: " ";
    height: 1.3rem;
    width: 0.15rem;
    background-color: #ffca93;
    left: 0.95rem;
    top: 0.45rem;
    transition: all 0.5s ease;
  }
  &__btn-close:before {
    transform: rotate(45deg);
  }
  &__btn-close:after {
    transform: rotate(-45deg);
  }
}
.block-left {
  &__number,
  &__text {
    @include text;
    font-family: $OpenSans;
    color: rgba(127, 75, 19, 0.42);
  }
  &__text {
    margin-left: 0.5rem;
  }
}
.footer {
  &__block-left {
    display: flex;
    align-items: center;
  }
  &__btn:not(:last-child) {
    margin-right: 2.5rem;
  }
  &__buttons {
    display: flex;
  }
  &__btn {
    & > input {
      opacity: 0;
      position: absolute;
      z-index: -1;
    }
    & > span {
      @include footer-btn;
      user-select: none;
      cursor: pointer;
      border: none;
    }
    & > input:checked + span {
      border: 1px solid #c9955d;
      border-radius: 10px;
    }
  }
}
.button-active {
  border: 1px solid #c9955d;
  border-radius: 10px;
}
.page-image {
  position: fixed;
  margin-left: 53rem;
  z-index: 1;
  background-image: url("./assets/images/page-image.svg");
  width: 51.2rem;
  height: 51.2rem;
}

@media screen and (max-width: 950px) {
  .page-image {
    margin-left: 35rem;
  }
}
@media screen and (max-width: 760px) {
  .page-image {
    display: none;
  }
}
@media screen and (max-width: 500px) {
  .todolist {
    &__btn-active {
      margin: 0;
    }
    &__task {
      height: 10rem;
    }
    &__btn-add {
      height: 10rem;
    }
  }
  .footer {
    &__btn:not(:last-child) {
      margin-right: 1rem;
    }
  }
}
@media screen and (max-width: 450px) {
  .todolist {
    &__items {
      padding: 1rem;
    }
    &__task {
      margin-bottom: 2rem;
      padding: 0.5rem 1rem;
    }
    &__task > span::before {
      margin-right: 0.5rem;
    }
    &__footer {
      height: 10rem;
      padding: 0 1rem;
      flex-direction: column;
      justify-content: center;
      & button {
        font-size: 1.8rem;
      }
    }
  }
  .task {
    &__text {
      font-size: 1.8rem;
    }
  }
}
</style>
