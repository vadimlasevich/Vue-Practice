<template>
  <div :class="$style.todolistItems">
    <div :class="$style.todolistList">
      <Task
        v-for="task of taskItem"
        :key="task.id"
        :taskText="task.task"
        :taskCompleted="task.completed"
      />
      <ButtonAdd />
    </div>
  </div>
</template>

<script>
import Task from "../molecules/Task";
import ButtonAdd from "../atoms/ButtonAdd";

export default {
  data() {
    return {
      taskItem: [
        { id: 1, task: "Task 1", completed: false },
        { id: 2, task: "Task 2", completed: false },
        { id: 3, task: "Task 3", completed: false },
      ],
    };
  },
  components: {
    Task,
    ButtonAdd,
  },
};
</script>

<style lang="scss" module>
.todolistItems {
  background: #fff;
  padding: 3rem;
}
.todolistList {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 450px) {
  .todolistItems {
    padding: 2rem;
  }
}
</style>