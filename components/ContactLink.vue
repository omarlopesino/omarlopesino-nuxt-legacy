<template>
  <div class="contact">
    <a aria-hidden="true" v-bind:target="contact.options.attributes.target" class="level-item social-link" v-bind:class="contact.options.attributes.class" v-bind:href="contact.uri">
      {{contact.title}}
    </a>
    <noscript v-if="contact.uri.indexOf('mailto') == 0">
      Sorry, you need Javascript on to email me.
    </noscript>
  </div>
</template>

<script>
export default {
  props: {
    contact: {type: Object, default: function() {
      return {};
    }}
  }
}
</script>

<style lang="scss">
  .contact {
    display: inline-block;
  }
  .social-link {
    color: black;
    margin-left: 1em;
    &:before {
      line-height: 80px;
      font-size: 4.5em;
      display: block;
    }
  }
</style>
