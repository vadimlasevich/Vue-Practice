<template>
  <div :class="$style.todolistFooter">
    <TasksLeft />
    <FooterButtons v-bind:buttonStatus="buttonStatus" />
  </div>
</template>

<script>
import TasksLeft from "../atoms/TasksLeft";
import FooterButtons from "../molecules/FooterButtons";
export default {
  props: ["buttonStatus"],
  components: {
    TasksLeft,
    FooterButtons,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
.todolistFooter {
  background: #ffca93;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
}

@media screen and (max-width: 450px) {
  .todolistFooter {
    height: 10rem;
    padding: 0 1rem;
    flex-direction: column;
    justify-content: center;
  }
}
</style>