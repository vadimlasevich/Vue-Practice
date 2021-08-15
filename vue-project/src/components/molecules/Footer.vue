<template>
  <div class="todolist__footer">
    <TasksLeft />
    <ButtonStatus />
  </div>
</template>

<script>
import TasksLeft from "../atoms/TasksLeft";
import ButtonStatus from "../atoms/ButtonStatus";
export default {
  components: {
    TasksLeft,
    ButtonStatus,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";
.todolist {
  &__footer {
    background: #ffca93;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;
  }
}
@media screen and (max-width: 500px) {
  .footer {
    &__btn:not(:last-child) {
      margin-right: 1rem;
    }
  }
}
@media screen and (max-width: 450px) {
  .todolist {
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
  .footer {
    &__buttons {
      margin-top: 1rem;
    }
  }
}
</style>