<template>
  <div>
    <div class="footer__block-left">
      <span class="block-left__number">1/3</span>
      <h3 class="block-left__text">left</h3>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";
.footer {
  &__block-left {
    display: flex;
    align-items: center;
  }
}
.block-left {
  &__number,
  &__text {
    @include text;
    font-family: $OpenSans;
    color: rgba(127, 75, 19, 0.42);
  }
  &__text {
    margin-left: 0.5rem;
  }
}
</style>