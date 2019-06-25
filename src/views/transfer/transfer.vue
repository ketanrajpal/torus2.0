<template>
  <section>
    <div v-for="(token, index) in tokenValue" :key="index" :class="token.slug" class="token">
      <div class="image">
        <img :src="getimg(token.slug)">
      </div>
      <h1>{{token.name}}</h1>
      <h2>
        <span>{{token.short}}</span>
        {{token.balance}}
      </h2>
      <h3>&dollar; {{token.dollar}}</h3>
    </div>
    <div class="transfer">
      <form>
        <fieldset>
          <label>Enter Email address / wallet address</label>
          <input type="text" class="simple">
        </fieldset>
        <div class="x2">
          <fieldset>
            <label>Enter amount to transfer</label>
            <div class="selectInput">
              <input type="text">
              <div :class="cryptoTransfer" v-on:click="toCryptoTransfer($event)">
                <span class="fab fa-ethereum"></span>
              </div>
              <div :class="currencyTransfer" v-on:click="toCurrencyTransfer($event)">
                <span class="fas fa-dollar-sign"></span>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <label>Transaction fee</label>
            <div class="selectInput">
              <input type="text" readonly>
              <div :class="cryptoFee" v-on:click="toCryptoFee($event)">
                <span class="fab fa-ethereum"></span>
              </div>
              <div :class="currencyFee" v-on:click="toCurrencyFee($event)">
                <span class="fas fa-dollar-sign"></span>
              </div>
            </div>
          </fieldset>
        </div>
        <fieldset class="rightWrong">
          <label>Make the transaction faster 0.07 USD / 0.00040 ETH</label>
          <div>
            <div>
              <span class="fas fa-check"></span>
            </div>
            <div>
              <span class="fas fa-times"></span>
            </div>
          </div>
          <div></div>
        </fieldset>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "transfer",
  computed: {
    tokenValue: function() {
      let tokenParam = this.$route.params.token;
      if (typeof tokenParam == "undefined") {
        tokenParam = "ethereum";
      }
      if (tokenParam)
        return this.tokens.filter(function(token) {
          if (tokenParam === token.slug) {
            return true;
          } else {
            return false;
          }
        });
    }
  },
  methods: {
    getimg: function(name) {
      return "../assets/images/" + name + ".svg";
    },
    toCryptoTransfer: function() {
      this.cryptoTransfer = "active";
      this.currencyTransfer = "";
    },
    toCurrencyTransfer: function() {
      this.cryptoTransfer = "";
      this.currencyTransfer = "active";
    },
    toCryptoFee: function() {
      this.cryptoFee = "active";
      this.currencyFee = "";
    },
    toCurrencyFee: function() {
      this.cryptoFee = "";
      this.currencyFee = "active";
    }
  },
  data: function() {
    return {
      currencyTransfer: "",
      cryptoTransfer: "active",
      currencyFee: "",
      cryptoFee: "active",
      tokenParam: this.$route.params.token,
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
@import "transfer";
</style>