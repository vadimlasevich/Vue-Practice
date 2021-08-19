<template>
  <div>
    <label :class="$style.todolistTask">
      <input
        type="checkbox"
        value="check-1"
        v-on:change="item.completed = !item.completed"
      />
      <span :class="$style.taskText">{{ item.taskText }}</span>
      <ButtonClose v-bind:item="item" v-on:remove-task="removeTask" />
    </label>
  </div>
</template>

<script>
import ButtonClose from "../atoms/ButtonClose";

export default {
  name: "Task",
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
  components: {
    ButtonClose,
  },
  methods: {
    removeTask(id) {
      this.$emit("remove-task", id);
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
.todolistTask {
  background: #ffdfbe;
  border-radius: 10px;
  margin-bottom: 3rem;
  padding: 1.3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.todolistTask > input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.todolistTask > span {
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  width: 90%;
}
.todolistTask > span::before {
  content: "";
  display: block;
  width: 2.4rem;
  height: 2.4rem;
  border: 1.5px solid #feb567;
  border-radius: 5px;
  margin-right: 2.3rem;
  padding-left: 2rem;
}
.todolistTask > input:not(:disabled):not(:checked) + span:hover::before {
  border: 1.5px solid #e58622;
}
.todolistTask > input:checked + span::before {
  display: block;
  background: #feb567;
  background-image: url("../../assets/images/Vector.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
.taskText {
  @include text;
  font-family: $Inter;
  color: #7f4b13;
}
@media screen and (max-width: 500px) {
  .todolistTask {
    height: 5rem;
  }
}

@media screen and (max-width: 450px) {
  .todolistTask {
    margin-bottom: 2rem;
    padding: 0.5rem 1rem;
  }
  .todolistTask > span::before {
    margin-right: 0.5rem;
  }
  .taskText {
    font-size: 1.8rem;
  }
}
</style>