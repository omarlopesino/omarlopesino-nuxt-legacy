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
        <div class="content">
          <p>I'm a web developer focused in backend, building Drupal modules in my work.</p>
          <p>I love develop software, mainly websites, REST API's for mobile applications, games...</p>
        </div>
      </div>
    </section>
    <section class="section section_skills has-text-centered">
      <p class="title">Skills / Interests</p>
      <div class="tile is-ancestor level-item">
        <div class="tile is-3 is-vertical is-parent is-center">
          <div class="tile is-child box">
            <ul class="skills">
              <li v-on:click="setCurrentSkill(skill)" class="skill has-text-centered" v-bind:class="skill.id" v-for="skill in skills" :key="skill.id">
                #{{skill.label}}
              </li>
            </ul>
          </div>
        </div>
        <div class="tile is-parent is-3 is-center">
            <div class="tile is-child box skill-description">
              <p class="title">{{currentSkill.label}}</p>
              <div class="content" v-html="currentSkill.description">
              </div>
            </div>
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
      skills: this.getSkills(),
      currentSkill: this.getDefaultSkill()
    }
  },
  methods: {
    getDefaultSkill() {
      return this.getSkills()[0];
    },
    getSkillByName(skill_name) {
      var skill_selected = null, skills = this.getSkills();
      skills.forEach(function(skill) {
        if (skill.id == skill_name) {
          skill_selected = skill;
        }
      });
      return skill_selected;
    },
    setCurrentSkill(skill) {
      this.currentSkill = this.getSkillByName(skill.id);
    },
    getSkills () {
      return [
        {
          "id": "php",
          "label": "PHP",
          "description": "<p>Desarrollo de código en PHP para cumplir con la lógica de negocio.</p>"
          + "<p>Uso de patrones de desarrollo.</p>"
          + "<p> PSR4 </p>"
        },
        {
          "id": "css",
          "label": "CSS",
          "description": "<p>CSS</p>"
        },
        {
          "id": "scss",
          "label": "SCSS",
          "description": "<p>CSS</p>"
        },
        {
          "id": "javascript",
          "label": "JS",
          "description": "<p>CSS</p>"
        },
        {
          "id": "behat",
          "label": "Behat",
          "description": "<p>CSS</p>"
        },
        {
          "id": "bdd",
          "label": "BDD",
          "description": "<p>CSS</p>"
        },
        {
          "id": "Angular",
          "label": "Angular",
          "description": "<p>CSS</p>"
        },
        {
          "id": "drupal",
          "label": "Drupal",
          "description": "<p>CSS</p>"
        },
        {
          "id": "unity3d",
          "label": "Unity 3d",
          "description": "<p>CSS</p>"
        },
        {
          "id": "linux",
          "label": "Linux",
          "description": "<p>CSS</p>"
        },
        {
          "id": "restful",
          "label": "Rest",
          "description": "<p>CSS</p>"
        },
        {
          "id": "git",
          "label": "Git",
          "description": "<p>CSS</p>"
        },
        {
          "id": "composer",
          "label": "Composer",
          "description": "<p>CSS</p>"
        }
      ]
    }
  }
}
</script>
