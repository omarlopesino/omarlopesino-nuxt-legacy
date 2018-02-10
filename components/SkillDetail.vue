<template>
  <div class="skill-description">
    <p class="title">{{skill.label}}</p>
    <div class="content" v-html="skill.description">
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
