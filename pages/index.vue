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
          "description": "<p>Web development written in PHP (drupal modules) to meet business logic.</p>"
          + "<p>Design patterns.</p>"
          + "<p> PSR4. </p>"
        },
        {
          "id": "css",
          "label": "CSS",
          "description": "<p>Web theming with CSS. Responsive design.</p>"
        },
        {
          "id": "scss",
          "label": "SCSS",
          "description": "<p>Good frontend practices using SCSS.</p>"
        },
        {
          "id": "javascript",
          "label": "JS",
          "description": "<p>I use javascript to build client side features.</p>"
        },
        {
          "id": "mysql",
          "label": "Mysql",
          "description": "<p>Use mysql to host and query web data.</p>"
        },
        {
          "id": "behat",
          "label": "Behat",
          "description": "<p>I write behat tests which meet client specs. These are made before feature development to check the development executing the test.</p>"
        },
        {
          "id": "bdd",
          "label": "BDD",
          "description": "<p>As a developer I want to make tests based on client spec To ensure project quality. See <a target='blank' href='//en.wikipedia.org/wiki/Behavior-driven_development'>more</a></p>"
        },
        {
          "id": "Angular",
          "label": "Angular",
          "description": "<p>Powerful client side applications handling business data in frontend.</p>"
        },
        {
          "id": "drupal",
          "label": "Drupal",
          "description": "<p>I use drupal at my work for custom / contrib module development and site building. Contributing allways is possible! See my <a target='_blank' href='//drupal.org/u/mistermoper'>profile</a></p>"
        },
        {
          "id": "unity3d",
          "label": "Unity 3d",
          "description": "<p>In my free time I like develop games with Unity3D game engine. Focused on C# unity scripts.</p>"
        },
        {
          "id": "linux",
          "label": "Linux",
          "description": "<p>I like use linux operative systems for web development.</p>"
        },
        {
          "id": "restful",
          "label": "Rest",
          "description": "<p>Using drupal as a backend service I build rest API's that can be used for ev</p>"
        },
        {
          "id": "git",
          "label": "Git",
          "description": "<p>Version control using Git.</p>"
        },
        {
          "id": "composer",
          "label": "Composer",
          "description": "<p>PHP Libraries management with composer.</p>"
        }
      ]
    }
  }
}
</script>
