<template>
  <div>
    <input class="todolist__btn-add" type="text" placeholder="Add a new task" />
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";
.todolist {
  &__btn-add {
    @include text;
    font-family: $Inter;
    color: #7f4b13;
    background: #ffecd8;
    border: 1.5px dashed #ffca93;
    border-radius: 10px;
    padding: 1.1rem;
    transition: all 0.5s ease;
    width: 100%;
    &::placeholder {
      text-align: center;
      color: #ffca93;
    }
  }
}
@media screen and (max-width: 500px) {
  .todolist {
    &__btn-add {
      height: 5rem;
    }
  }
}
</style>