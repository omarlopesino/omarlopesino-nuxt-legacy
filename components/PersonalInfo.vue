<template>
  <div class="container has-text-centered">
    <p class="image">
      <img src="~/assets/images/me.jpeg" class="img is-rounded photo" :alt="info.name" :title="info.name"/>
    </p>
    <h1 class="title">{{info.title}}</h1>
    <h2 class="subtitle" v-html="info.subtitle"></h2>
    <div class="content" v-html="info.content">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      info: {
        type: Object,
        default: function() {
          return {};
        }
      }
    }
  }
</script>

<style lang="scss">
    
  .title {
    margin-top: .3em;
  }

  .container {
    position: relative;
    .title, .subtitle , .content p {
      color: white;
    }
  }

</style>