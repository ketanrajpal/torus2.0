<template>
  <div class="navigation">
    <header>
      <img src="../../assets/images/logo.svg">
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
@import "navigation";
</style>
