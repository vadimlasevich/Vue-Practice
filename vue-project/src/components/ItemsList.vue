<template>
  <div class="todolist__items">
    <div class="todolist__list">
      <Task />
      <Task />
      <Task />
      <ButtonAdd />
    </div>
  </div>
</template>

<script>
import Task from "./Task";
import ButtonAdd from "./ButtonAdd";
export default {
  components: {
    Task,
    ButtonAdd,
  },
};
</script>

<style lang="scss" scoped>
.todolist {
  &__items {
    background: #fff;
    padding: 3rem;
  }
  &__list {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 450px) {
  .todolist {
    &__items {
      padding: 2rem;
    }
  }
}
</style>