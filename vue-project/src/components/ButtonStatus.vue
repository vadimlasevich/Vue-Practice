<template>
  <div class="footer__buttons">
    <label class="footer__btn">
      <input class="footer__input" type="radio" name="footer-input" />
      <span>All</span>
    </label>
    <label class="footer__btn">
      <input class="footer__input" type="radio" name="footer-input" />
      <span>Active</span>
    </label>
    <label class="footer__btn">
      <input class="footer__input" type="radio" name="footer-input" />
      <span>Completed</span>
    </label>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/style.scss";
.footer {
  &__btn:not(:last-child) {
    margin-right: 2.5rem;
  }
  &__buttons {
    display: flex;
  }
  &__btn {
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
}
</style>