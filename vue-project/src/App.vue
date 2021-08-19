<template>
  <div class="page" id="app">
    <div class="pageImage"></div>
    <div class="todolist">
      <div class="todolistHeader">
        <h1 class="todolistTitle">to do list</h1>
      </div>
      <ItemsList />
      <Footer />
    </div>
  </div>
</template>

<script>
import ItemsList from "./components/organisms/ItemsList.vue";
import Footer from "./components/organisms/Footer.vue";

export default {
  name: "App",
  methods: {},
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
}
.todolistHeader {
  background: #ffca93;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.todolistTitle {
  @include text;
  font-family: $OpenSans;
  color: #7f4b13;
}
.pageImage {
  position: fixed;
  margin-left: 53rem;
  z-index: 1;
  background-image: url("./assets/images/page-image.svg");
  width: 51.2rem;
  height: 51.2rem;
}
@media screen and (max-width: 950px) {
  .pageImage {
    margin-left: 35rem;
  }
}
@media screen and (max-width: 760px) {
  .pageImage {
    display: none;
  }
}
</style>
