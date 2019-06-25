<template>
  <header>
    <nav class="breadcrumb">
      <ul>
        <li>
          <router-link to="/">
            <span class="fa fa-briefcase"></span> Dashboard
          </router-link>
        </li>

        <li v-if="breadcrumb() !=null">
          <span class="fa fa-chevron-right"></span>
        </li>
        <li>
          <router-link to="/">{{breadcrumb()}}</router-link>
        </li>
      </ul>
    </nav>
    <nav></nav>
    <nav class="navigation">
      <ul>
        <li v-for="(link, index) in nav" :key="index">
          <router-link :to="{ path: link.path}">
            <span :class="link.icon"></span>
            {{link.label}}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Panel",
  methods: {
    breadcrumb: function() {
      return this.$route.meta.breadcrumb.name;
    }
  },
  data: () => {
    return {
      nav: [
        {
          label: "Settings",
          icon: "fa fa-wrench",
          path: "/settings"
        },
        {
          label: "Logout",
          icon: "fa fa-sign-out-alt",
          path: "/logout"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "panel";
</style>
