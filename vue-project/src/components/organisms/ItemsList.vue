<template>
  <div :class="$style.todolistItems">
    <div :class="$style.todolistList">
      <Task
        v-for="task of showTasks"
        :key="task.id"
        :task="task"
        :id="task.id"
        :taskText="task.task"
        :taskCompleted="task.completed"
      />
      <form @submit.prevent="submit">
        <input
          :class="$style.buttonAdd"
          type="text"
          placeholder="Add a new task"
          v-model="newTask"
        />
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import Task from "../molecules/Task";

export default {
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    ...mapMutations(["addTask"]),
    submit() {
      this.addTask(this.newTask);
      this.newTask = "";
    },
  },
  mounted() {
    this.$store.dispatch("STORAGE");
  },
  computed: {
    ...mapGetters(["showTasks"]),
  },
  components: {
    Task,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
.todolistItems {
  background: #fff;
  padding: 3rem;
  .todolistList {
    display: flex;
    flex-direction: column;
    .buttonAdd {
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
}

@media screen and (max-width: 500px) {
  .buttonAdd {
    height: 5rem;
  }
}
@media screen and (max-width: 450px) {
  .todolistItems {
    padding: 2rem;
  }
}
</style>