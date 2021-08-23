<template>
  <div :class="$style.footer">
    <TasksLeft />
    <div :class="$style.footerButtons">
      <ButtonStatus
        v-for="button of buttonStatus"
        :key="button.id"
        :buttonTitle="button.title"
        :buttonCompleted="button.completed"
      />
    </div>
  </div>
</template>

<script>
import TasksLeft from "../atoms/TasksLeft";
import ButtonStatus from "../molecules/ButtonStatus";
export default {
  data() {
    return {
      buttonStatus: [
        { id: 1, title: "All", completed: true },
        { id: 2, title: "Active", completed: false },
        { id: 3, title: "Completed", completed: false },
      ],
    };
  },
  components: {
    TasksLeft,
    ButtonStatus,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
.footer {
  background: #ffca93;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
}
.footerButtons {
  display: flex;
}
@media screen and (max-width: 450px) {
  .footer {
    height: 10rem;
    padding: 0 1rem;
    flex-direction: column;
    justify-content: center;
  }
}
</style>