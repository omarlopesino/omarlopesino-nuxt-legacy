<template>
  <li class="skill has-text-centered" v-bind:class="skill.id" v-on:click="emitSelect">
    #{{skill.label}}
  </li>
</template>

<script>
export default {
  props: {
    skill: {type: Object, default: function() {
      return {};
    }}
  },
  methods: {
    emitSelect: function() {
      this.$emit('select');
    }
  }
}
</script>

<style lang="scss">
  .skill {
    cursor: pointer;
    font-weight: bold;
    display: inline-block;
    border-radius: 5px;
    padding: .5em;
    background-color: #e0de78;
    color:black;
    margin-right: 1em;
    margin-top: .5em;
    color: black;

    &:hover, &:active {
      background-color: lightgray;
    }
  }
</style>