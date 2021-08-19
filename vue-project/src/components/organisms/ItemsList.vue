<template>
  <div :class="$style.todolistItems">
    <div :class="$style.todolistList">
      <Task
        v-for="item of taskItem"
        :key="item.taskText"
        v-bind:item="item"
        v-on:remove-task="removeTask"
      />
      <ButtonAdd v-on:new-task="newTask" />
    </div>
  </div>
</template>

<script>
import Task from "../molecules/Task";
import ButtonAdd from "../atoms/ButtonAdd";

export default {
  props: ["taskItem"],
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