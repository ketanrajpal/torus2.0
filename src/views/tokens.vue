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
@import "../assets/scss/variables.scss";

section.tokens {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  letter-spacing: 0.5px;
  article {
    background: #ffffff;
    box-shadow: 0 0 3px #cccccc;
    border-radius: 5px;
    display: block;
    background-repeat: no-repeat;
    background-size: auto 30px;
    background-position: 95% 10%;
    @each $token in $tokens {
      &.#{$token} {
        background-image: cryptoicon($token);
      }
    }
    h1 {
      font-size: 18px;
      font-weight: 400;
      color: #e95380;
      display: block;
      padding: 20px;
      padding-bottom: 0px;
    }
    div {
      display: grid;
      grid-template-columns: auto auto;
      &.amount {
        padding: 0 20px;
        margin: 20px 0;
        h2 {
          font-size: 15px;
          font-weight: 400;
          span {
            font-weight: 500;
          }
        }
        h3 {
          font-size: 15px;
          font-weight: 400;
          text-align: right;
          opacity: 0.6;
        }
      }
      &.button {
        @include gradient_dark();
        border-radius: 0px 0px 5px 5px;
        a {
          display: block;
          color: #ffffff;
          text-align: center;
          font-size: 14px;
          padding: 12px 0;
          box-sizing: border-box;
          transition: all 0.5s ease;
          &:first-child {
            border-radius: 0px 0px 0px 5px;
            border-right: 1px solid rgba(255, 255, 255, 0.3);
          }
          &:last-child {
            border-radius: 0px 0px 5px 0px;
          }
          &:hover {
            @include gradient_light();
          }
          svg {
            margin-right: 7px;
          }
        }
      }
    }
  }
}
</style>