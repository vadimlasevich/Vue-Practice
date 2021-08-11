<template>
  <div class="page" id="app">
    <div class="image"></div>
    <div class="container">
      <div class="todolist">
        <div class="todolist__header">
          <h1 class="todolist__title">to do list</h1>
        </div>
        <div class="todolist__items">
          <ul class="todolist__list">
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
            <button class="todolist__btn-add">Add a new task</button>
          </ul>
        </div>
        <div class="todolist__footer">
          <div class="todolist__block-left">
            <span class="block-left__number-active">1</span>
            <span class="block-left__line">/</span>
            <span class="block-left__number-amount">3</span>
            <h3 class="block-left__text">left</h3>
          </div>
          <div class="todolist__footer-buttons">
            <button class="todolist__btn-all button-active">All</button>
            <button class="todolist__btn-active">Active</button>
            <button class="todolist__btn-completed">Completed</button>
          </div>
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
@import "./styles/style.scss";

.page {
  background: wheat;
  min-height: 100vh;
}
.container {
  max-width: 126rem;
  margin: 0 auto;
  padding: 0 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.todolist {
  padding: 0 3rem;
  &__header {
    background: #ffca93;
    width: 54rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__title {
    font-family: $OpenSans;
    font-size: 2rem;
    line-height: 2.8rem;
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
    justify-content: space-between;
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
  }
  &__task > span::before {
    content: "";
    display: inline-block;
    width: 2.4rem;
    height: 2.4rem;
    border: 1.5px solid #feb567;
    border-radius: 5px;
    margin-right: 2.3rem;
  }
  &__task > input:not(:disabled):not(:checked) + span:hover::before {
    border: 1.5px solid #e58622;
  }
  &__task > input:checked + span::before {
    background: #feb567;
    background-image: url("./assets/images/Vector.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  &__btn-add {
    font-family: $Inter;
    font-size: 2rem;
    line-height: 2.8rem;
    color: #ffca93;
    background: #ffecd8;
    border: 1.5px dashed #ffca93;
    border-radius: 10px;
    padding: 1.1rem 0;
    transition: all 0.5s ease;
    &:hover {
      color: #7f4b13;
    }
  }
  &__footer {
    background: #ffca93;
    width: 54rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;
  }
  &__block-left {
    display: flex;
    align-items: center;
  }
  &__btn-all {
    @include footer-btn;
    &:hover {
      color: #e58622;
    }
  }
  &__btn-active {
    @include footer-btn;
    &:hover {
      color: #e58622;
    }
    margin: 0 2.5rem;
  }
  &__btn-completed {
    @include footer-btn;
    &:hover {
      color: #e58622;
    }
  }
}
.task {
  &__text {
    font-family: $Inter;
    font-size: 2rem;
    line-height: 2.8rem;
    color: #7f4b13;
  }
  &__btn-close {
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
  }
  &__btn-close:before,
  &__btn-close:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 1.2rem;
    width: 0.15rem;
    background-color: #ffca93;
    left: 0.9rem;
    top: 0.45rem;
    transition: all 0.5s ease;
    &:hover::before,
    &:hover::after {
      background-color: #fc8f1a;
    }
  }
  &__btn-close:before {
    transform: rotate(45deg);
  }
  &__btn-close:after {
    transform: rotate(-45deg);
  }
}
.block-left {
  &__number-active,
  &__line,
  &__number-amount,
  &__text {
    font-family: $OpenSans;
    font-size: 2rem;
    line-height: 2.8rem;
    color: rgba(127, 75, 19, 0.42);
  }
  &__text {
    margin-left: 0.5rem;
  }
}
.button-active {
  border: 1px solid #c9955d;
  border-radius: 10px;
}

@media screen and (max-width: 850px) {
}
</style>
