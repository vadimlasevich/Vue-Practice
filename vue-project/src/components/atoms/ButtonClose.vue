<template>
  <div>
    <button :class="$style.taskBtnClose"></button>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" module>
.taskBtnClose {
  display: block;
  margin-left: auto;
  width: 2.4rem;
  height: 2.4rem;
  background: transparent;
  border: 1.5px solid #ffca93;
  border-radius: 5px;
  position: relative;
  transition: all 0.5s ease;
}
.taskBtnClose:hover {
  border: 1.5px solid #fc8f1a;
}
.taskBtnClose:hover::before {
  background-color: #fc8f1a;
}
.taskBtnClose:hover::after {
  background-color: #fc8f1a;
}
.taskBtnClose:before,
.taskBtnClose:after {
  position: absolute;
  content: " ";
  height: 1.3rem;
  width: 0.15rem;
  background-color: #ffca93;
  left: 0.95rem;
  top: 0.45rem;
  transition: all 0.5s ease;
}
.taskBtnClose:before {
  transform: rotate(45deg);
}
.taskBtnClose:after {
  transform: rotate(-45deg);
}
</style>