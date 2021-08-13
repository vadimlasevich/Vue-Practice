<template>
  <div>
    <label class="todolist__task">
      <input class="task__input" type="checkbox" value="check-1" />
      <span class="task__text">Task 1</span>
      <ButtonClose />
    </label>
  </div>
</template>

<script>
import ButtonClose from "./ButtonClose";

export default {
  name: "Task",
  components: {
    ButtonClose,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/style.scss";
.todolist {
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
    background-image: url("../assets/images/Vector.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
}
.task {
  &__text {
    @include text;
    font-family: $Inter;
    color: #7f4b13;
  }
}
@media screen and (max-width: 500px) {
  .todolist {
    &__task {
      height: 5rem;
    }
  }
}
@media screen and (max-width: 450px) {
  .todolist {
    &__task {
      margin-bottom: 2rem;
      padding: 0.5rem 1rem;
    }
    &__task > span::before {
      margin-right: 0.5rem;
    }
  }
  .task {
    &__text {
      font-size: 1.8rem;
    }
  }
}
</style>