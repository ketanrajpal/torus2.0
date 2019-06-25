<template>
  <section class="tokens">
    <article v-for="(token, index) in tokens" :key="index" :class="token.slug">
      <h1>{{token.name}}</h1>
      <div class="amount">
        <h2>
          <span>{{token.short}}</span>
          {{token.balance}}
        </h2>
        <h3>&dollar; {{token.dollar}}</h3>
      </div>

      <div class="button">
        <router-link :to="{ path: '/transfer/'+token.slug}">
          <span class="fa fa-paper-plane"></span>
          Send
        </router-link>
        <router-link :to="{ path: '/topup/'+token.slug}">
          <span class="fa fa-credit-card"></span>
          Topup
        </router-link>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "Tokens",
  data: () => {
    return {
      tokens: [
        {
          name: "Ethereum",
          slug: "ethereum",
          short: "ETH",
          balance: "346",
          dollar: "92,997.88"
        },
        {
          name: "Bitcoin",
          slug: "bitcoin",
          short: "BTC",
          balance: "403",
          dollar: "3,704,376.00"
        },
        {
          name: "Ripple",
          slug: "ripple",
          short: "XRP",
          balance: "670",
          dollar: "290.84"
        },
        {
          name: "Litecoin",
          slug: "litecoin",
          short: "LTC",
          balance: "670",
          dollar: "290.84"
        },
        {
          name: "Zcash",
          slug: "zcash",
          short: "ZEC",
          balance: "670",
          dollar: "290.84"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "tokens";
</style>