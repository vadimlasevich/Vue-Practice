<template>
  <div>
    <div :class="$style.footerBlockLeft">
      <span :class="$style.blockLeftNumber">1/3</span>
      <h3 :class="$style.blockLeftText">left</h3>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
.footerBlockLeft {
  display: flex;
  align-items: center;
}

.blockLeftNumber,
.blockLeftText {
  @include text;
  font-family: $OpenSans;
  color: rgba(127, 75, 19, 0.42);
}
.blockLeftText {
  margin-left: 0.5rem;
}
</style>