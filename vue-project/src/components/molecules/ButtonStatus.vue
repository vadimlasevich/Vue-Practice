<template>
  <label :class="$style.footerBtn">
    <input
      type="radio"
      name="footer-input"
      @click="change"
      :checked="completed"
    />
    <span>{{ title }}</span>
  </label>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    id: Number,
    title: String,
    completed: Boolean,
  },
  methods: {
    ...mapMutations(["changeBtnStatus", "changeBtnName"]),
    change() {
      this.changeBtnStatus(this.id);
      this.changeBtnName(this.title);
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
.footerBtn {
  margin-left: 2.5rem;
  & > input {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }
  & > span {
    @include footer-btn;
    user-select: none;
    cursor: pointer;
    border: none;
  }
  & > input:checked + span {
    border: 1px solid #c9955d;
    border-radius: 10px;
  }
}
</style>