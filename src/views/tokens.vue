<template>
  <section>
    <article v-for="(token, index) in tokens" :key="index">
      <h1>{{token.name}}</h1>
      <h2></h2>
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
          icon: "ethereum",
          short: "ETH",
          balance: "346",
          dollar: "92997.88"
        },
        {
          name: "Bitcoin",
          icon: "bitcoin",
          short: "BTC",
          balance: "403",
          dollar: "3704376.00"
        },
        {
          name: "Ripple",
          icon: "ripple",
          short: "XRP",
          balance: "670",
          dollar: "290.84"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
</style>