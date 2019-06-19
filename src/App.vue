<template>
  <div id="app">
    <section class="navigation">
      <Navigation></Navigation>
    </section>
    <section class="content">
      <Panel></Panel>
      <section class="content">
        <router-view></router-view>
      </section>
    </section>
  </div>
</template>

<script>
import Navigation from "./components/navigation";
import Panel from "./components/panel";

export default {
  components: {
    Navigation,
    Panel
  }
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
body,
html {
  height: 100%;
  width: 100%;
}
body {
  font-family: "Roboto", sans-serif;
}

#app {
  background-color: #fafafa;
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 300px 1fr;
  border: 2px solid #ededed;
  section {
    &.content {
      section.content {
        padding: 30px;
      }
    }
  }
}
</style>
