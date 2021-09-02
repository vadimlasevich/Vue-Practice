<template>
  <div :class="$style.footer">
    <div :class="$style.blockLeft">
      <span :class="$style.blockLeftNumber"
        >{{ tasksCompleted }}/{{ tasksLength }}</span
      >
      <p :class="$style.blockLeftText">left</p>
    </div>
    <div :class="$style.footerButtons">
      <ButtonStatus
        v-for="button of footerButtons"
        :key="button.id"
        :id="button.id"
        :title="button.title"
        :completed="button.completed"
      />
    </div>
  </div>
</template>

<script>
import ButtonStatus from "../molecules/ButtonStatus";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["footerButtons", "tasksLength", "tasksCompleted"]),
  },
  components: {
    ButtonStatus,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style.scss";
.footer {
  background: #ffca93;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
}
.footerButtons {
  display: flex;
}
.blockLeft {
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
@media screen and (max-width: 450px) {
  .footer {
    height: 10rem;
    padding: 0 1rem;
    flex-direction: column;
    justify-content: center;
  }
}
</style>