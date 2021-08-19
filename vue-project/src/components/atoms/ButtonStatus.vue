<template>
  <div>
    <label :class="$style.footerBtn">
      <input type="radio" name="footer-input" :button="button" />
      <span>{{ button.buttonText }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    button: {
      type: Object,
      require: true,
    },
  },
  components: {},
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
.footerBtn {
  margin-left: 2.5rem;
}
.footerBtn {
  input {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }
  span {
    @include footer-btn;
    user-select: none;
    cursor: pointer;
    border: none;
  }
  input:checked + span {
    border: 1px solid #c9955d;
    border-radius: 10px;
  }
}
</style>