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
@import "../assets/scss/variables.scss";
header {
  background-color: #ffffff;
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 25px 20px;
  font-size: 13px;
  line-height: 13px;
  letter-spacing: 0.5px;
  box-shadow: 0 3px 3px -2px #cccccc;
  nav {
    svg {
      color: map-get($color, 2);
      margin: 0px 7px;
    }
    ul {
      li {
        a {
          color: map-get($color, 4);
        }
      }
    }
  }
  nav.breadcrumb {
    ul {
      display: grid;
      grid-template-columns: auto auto auto;
    }
  }
  nav.navigation {
    ul {
      display: grid;
      grid-template-columns: auto auto;
      li {
        margin-right: 20px;
        &:last-child {
          margin: 0px;
        }
      }
    }
  }
}
</style>
