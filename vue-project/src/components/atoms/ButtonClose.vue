<template>
  <button :class="$style.buttonClose" @click="deleteTask(task.id)"></button>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    task: {},
  },
  methods: {
    ...mapMutations(["deleteTask"]),
  },
};
</script>

<style lang="scss" module>
.buttonClose {
  display: block;
  margin-left: auto;
  width: 2.4rem;
  height: 2.4rem;
  background: transparent;
  border: 1.5px solid #ffca93;
  border-radius: 5px;
  position: relative;
  transition: all 0.5s ease;

  &:hover {
    border: 1.5px solid #fc8f1a;
  }
  &:hover::before {
    background-color: #fc8f1a;
  }
  &:hover::after {
    background-color: #fc8f1a;
  }
  &:before,
  &:after {
    position: absolute;
    content: " ";
    height: 1.3rem;
    width: 0.15rem;
    background-color: #ffca93;
    left: 0.95rem;
    top: 0.45rem;
    transition: all 0.5s ease;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
}
</style>