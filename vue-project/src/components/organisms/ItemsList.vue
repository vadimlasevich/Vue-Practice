<template>
  <div :class="$style.todolistItems">
    <div :class="$style.todolistList">
      <Task v-for="item of taskItem" :key="item.id" :item="item" />
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
        { id: 1, taskText: "Task 1.1", completed: false },
        { id: 2, taskText: "Task 2.2", completed: false },
        { id: 3, taskText: "Task 3.4", completed: false },
      ],
    };
  },
  components: {
    Task,
    ButtonAdd,
  },
  methods: {
    removeTask(id) {
      this.$emit("remove-task", id);
    },
    newTask(item) {
      this.taskItem.push(item);
    },
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