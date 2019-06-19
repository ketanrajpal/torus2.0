<template>
  <div class="navigation">
    <header>
      <img src="../assets/logo.svg">
    </header>
    <nav>
      <ul>
        <li v-for="(link, index) in nav" :key="index">
          <router-link :to="{ path: link.path}">
            <span :class="link.icon"></span>
            {{link.label}}
          </router-link>
        </li>
      </ul>
    </nav>
    <footer>
      Check our
      <router-link to="/terms-and-conditions">Terms and Conditions</router-link>&nbsp;and
      <router-link to="/privacy-policy">Privacy Policy</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data: () => {
    return {
      nav: [
        {
          label: "Dashboard",
          icon: "fa fa-briefcase",
          path: "/"
        },
        {
          label: "Tokens",
          icon: "fa fa-coins",
          path: "/tokens"
        },
        {
          label: "Transfer",
          icon: "fa fa-exchange-alt",
          path: "/transfer"
        },
        {
          label: "Topup",
          icon: "fa fa-credit-card",
          path: "/topup"
        },
        {
          label: "Contacts",
          icon: "fa fa-address-card",
          path: "/contacts"
        },
        {
          label: "Transactions",
          icon: "fa fa-list-alt",
          path: "/transactions"
        },
        {
          label: "Settings",
          icon: "fa fa-wrench",
          path: "/settings"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.navigation {
  @include gradient_dark();
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  letter-spacing: 1px;
  header {
    box-sizing: border-box;
    text-align: center;
    padding: 30px 0;
    img {
      width: 100px;
    }
  }
  nav {
    align-self: center;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    ul {
      margin-left: 15%;
      li {
        a {
          text-decoration: none;
          color: #ffffff;
          display: block;
          line-height: 18px;
          padding: 20px 30px;
          border-radius: 30px 0 0 30px;
          svg {
            opacity: 0.5;
            margin-right: 18px;
            font-size: 18px;
            line-height: 18px;
          }
          &.current,
          &.router-link-exact-active {
            background-color: map-get($color, 2) !important;
          }
          &:hover {
            background-color: rgba(255, 255, 255, 0.2);
          }
        }
      }
    }
  }
  footer {
    box-sizing: border-box;
    padding: 20px 30px;
    font-size: 13px;
    color: #ffffff;
    text-align: center;
    line-height: 150%;
    a {
      color: #ffffff;
      text-decoration: underline;
    }
  }
}
</style>
