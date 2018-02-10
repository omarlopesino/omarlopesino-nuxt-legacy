<!-- pages/index.vue -->

<template>
  <div>

    <section class="section header">
      <personal-info :info="personalInfo"></personal-info>
    </section>

    <section class="section section_skills has-text-centered">

      <p class="title">Contact</p>
      <div class="levels social">
        <contact-link v-for="contact in contacts" :key="contact.id" :contact="contact">
        </contact-link>
      </div>

      <p class="title skills-title">Skills / Interests</p>

      <div class="tile is-ancestor level-item">

        <div class="tile is-3 is-vertical is-parent is-center">
          <div class="tile is-child box">
            <ul class="skills">
              <skill v-for="skill in skills" :key="skill.id" v-on:click="setCurrentSkill(skill)" :skill="skill"></skill>
            </ul>
          </div>
        </div>

        <div class="tile is-parent is-3 is-center">
          <skill-detail :skill="currentSkill" class="tile is-child box"></skill-detail>
        </div>

      </div>

    </section>

  </div>
</template>

<script>
import Skill from '../components/Skill';
import SkillDetail from '../components/SkillDetail';
import ContactLink from '../components/ContactLink';
import PersonalInfo from '../components/PersonalInfo';

export default {
  components: {
    Skill,
    SkillDetail,
    ContactLink,
    PersonalInfo
  },
  data () {
    return {
      personalInfo: {
        name: 'Omar Lopesino',
        img: '~/assets/images/me.jpeg',
        title: "Hi! I'm Omar Lopesino",
        subtitle: 'Drupal developer at <a aria-hidden="true" href="//metadrop.net" title="Metadrop" class="metadrop-link" target="_blank">Metadrop.</a>',
        content: "<p>I'm a web developer focused in backend, building Drupal modules.</p>"
          + "<p>I love software developing, mainly websites, REST API's for mobile applications, games...</p>"
      },
      contacts: [
        {
          "id": "github",
          "url": "//github.com/mistermoper/",
          "class": "fa fa-github",
          "name": "Github",
          "target": "_blank",
          "suffix": ""
        },
        {
          "id": "drupal",
          "url": "//drupal.org/u/mistermoper/",
          "class": "fa fa-drupal",
          "name": "Drupal",
          "target": "_blank",
          "suffix": ""
        },
        {
          "id": "twitter",
          "url": "//twitter.com/omarlopesino/",
          "class": "fa fa-twitter",
          "name": "Twitter",
          "target": "_blank",
          "suffix": ""
        },
        {
          "id": "gmail",
          "url": "mailto:omarmoper@gmail.com",
          "class": "fa fa-envelope",
          "name": "e-mail",
          "target": "",
          "suffix": "<noscript>Sorry, you need Javascript on to email me.</noscript>"
        },
        {
          "id": "linkedin",
          "url": "https://www.linkedin.com/in/omar-mohamad-el-hassan-lopesino-ba639462/",
          "class": "fa fa-linkedin",
          "name": "Linkedin",
          "target": "_blank",
          "suffix": ""
        }
      ],
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
          "id": "drupal",
          "label": "Drupal",
          "description": "<p>I use drupal at my work for custom / contrib module development and site building. Contributing allways is possible!"
            + "I sometimes answer question at drupal.stackexchange.com to help others acquire knowledge.</p>"
        },
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
          "id": "unity3d",
          "label": "Unity 3d",
          "description": "<p>In my free time I like develop games with Unity3D game engine. Focused on C# unity scripts to define game logic.</p>"
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
