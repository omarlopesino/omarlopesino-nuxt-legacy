<template>
  <div class="skill-detail">
    <p class="title">{{skill.label}}</p>
    <div class="content" v-html="skill.description.value">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skill: {type: Object, default: function() {
      return {};
    }}
  }
}
</script>

<style lang="scss">
  
  .skill-detail {
    .content {
      margin-top: 1em;
      transition: all .5s ease;
    }
  }
</style>