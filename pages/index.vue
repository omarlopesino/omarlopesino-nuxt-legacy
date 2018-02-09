<!-- pages/index.vue -->

<template>
  <div>
    <section class="section header">
      <div class="container has-text-centered">
        <p class="image">
          <img src="~/assets/images/me.jpeg" class="img is-rounded photo" />
        </p>
        <h1 class="title">Hi! I'm Omar Lopesino</h1>
        <h2 class="subtitle">Drupal developer at <a href="//metadrop.net" title="Metadrop" class="metadrop-link" target="_blank">Metadrop.</a></h2>
      </div>
    </section>
    <section class="section section_skills">
      <div class="container level">
        <ul class="skills level-left">
          <li class="level-item is-mobile skill" v-bind:class="skill.id" v-for="skill in skills" :key="skill.id">
            #{{skill.label}}
          </li>
        </ul>
        <div class="skills level-left">
          <div class="skill-description level-item">@TODO</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  components: {
    Navbar
  },
  data () {
    return {
      skills: [
        {
          "id": "php",
          "label": "PHP"
        },
        {
          "id": "css",
          "label": "CSS"
        },
        {
          "id": "scss",
          "label": "SCSS"
        },
        {
          "id": "javascript",
          "label": "JS"
        },
        {
          "id": "behat",
          "label": "Behat"
        },
        {
          "id": "bdd",
          "label": "BDD"
        },
        {
          "id": "Angular",
          "label": "Angular"
        },
        {
          "id": "drupal",
          "label": "Drupal"
        },
        {
          "id": "unity3d",
          "label": "Unity 3d"
        },
        {
          "id": "linux",
          "label": "Linux"
        },
        {
          "id": "restful",
          "label": "Restful web services"
        },
        {
          "id": "git",
          "label": "Git"
        },
        {
          "id": "composer",
          "label": "Composer"
        }
      ]
    }
  },
  methods: {
    addTodo () {
      var value = this.todo && this.todo.trim()
      if (value) {
        this.$store.dispatch('addTodo', { title: value, completed: this.$route.params.slug === 'completed' })
        this.todo = ''
      }
    }
  }
}
</script>
