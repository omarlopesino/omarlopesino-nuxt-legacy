<template>
  <div class="contact">
    <a aria-hidden="true" v-bind:target="contact.target" class="level-item social-link" v-bind:class="contact.class" v-bind:href="contact.url">
      {{contact.name}}
    </a>
    <span v-html="contact.suffix"></span>
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
