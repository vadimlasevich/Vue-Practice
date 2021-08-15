<template>
  <div class="page" id="app">
    <div class="page-image"></div>
    <div class="todolist">
      <div class="todolist__header">
        <h1 class="todolist__title">to do list</h1>
      </div>
      <ItemsList />
      <Footer />
    </div>
  </div>
</template>

<script>
import ItemsList from "./components/organisms/ItemsList.vue";
import Footer from "./components/molecules/Footer.vue";

export default {
  name: "App",
  components: {
    ItemsList,
    Footer,
  },
};
</script>

<style lang="scss">
@import "./assets/styles/style.scss";

.page {
  background: rgb(228, 53, 10);
  background: linear-gradient(
    90deg,
    rgba(228, 53, 10, 1) 0%,
    rgba(238, 142, 77, 0.8911939775910365) 100%
  );
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.todolist {
  position: relative;
  z-index: 5;
  margin: 0 3rem;
  width: 54rem;
  border: 2px solid #7f4b13;
  &__header {
    background: #ffca93;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__title {
    @include text;
    font-family: $OpenSans;
    color: #7f4b13;
  }
}
.page-image {
  position: fixed;
  margin-left: 53rem;
  z-index: 1;
  background-image: url("./assets/images/page-image.svg");
  width: 51.2rem;
  height: 51.2rem;
}
@media screen and (max-width: 950px) {
  .page-image {
    margin-left: 35rem;
  }
}
@media screen and (max-width: 760px) {
  .page-image {
    display: none;
  }
}
</style>
