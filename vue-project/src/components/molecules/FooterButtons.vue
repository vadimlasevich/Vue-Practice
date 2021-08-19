<template>
  <div :class="$style.footerButtons">
    <ButtonStatus
      v-for="button of buttonStatus"
      :key="button.id"
      :button="button"
    />
  </div>
</template>

<script>
import ButtonStatus from "../atoms/ButtonStatus";
export default {
  props: ["buttonStatus"],
  components: {
    ButtonStatus,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
.footerButtons {
  display: flex;
}
</style>