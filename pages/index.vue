<!-- pages/index.vue -->

<template>
  <div>

    <section class="section header">
      <personal-info :info="personalInfo"></personal-info>
    </section>

      <section class="section ask_me_anything">
        <terminal></terminal>
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
              <skill v-for="skill in skills" :key="skill.id" v-on:select="setCurrentSkill(skill)" :skill="skill"></skill>
            </ul>
          </div>
        </div>

        <div class="tile is-parent is-3 is-center skill-list">
          <skill-detail  v-for="skill in skills"  :skill="skill" :key="skill.id" class="tile is-child box" :class="skillClassVisibility(skill)"> </skill-detail>
        </div>

      </div>

    </section>
  </div>
</template>

<script>
import Skill from '~/components/Skill';
import SkillDetail from '~/components/SkillDetail';
import ContactLink from '~/components/ContactLink';
import PersonalInfo from '~/components/PersonalInfo';
import Terminal from '~/components/Terminal';
import {getUserInfo} from '~/lib/api';
import axios from 'axios';
export default {
  components: {
    Skill,
    SkillDetail,
    ContactLink,
    PersonalInfo,
    Terminal
  },
  methods: {
    skillClassVisibility: function(skill) {
      return skill.id != this.currentSkill.id ? 'hide' : 'show';
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
      return this.skills;
    }
  },
  async asyncData() {
    var userInfo = await getUserInfo(process.env.portfolioUserUid);
    console.log(userInfo.user_skills);
    return {
      skills: userInfo.user_skills,
      currentSkill: userInfo.user_skills[0],
      userInfo: userInfo,
      personalInfo: {
        name: userInfo.user_name,
        img: userInfo.user_image.url,
        title: userInfo.user_title,
        subtitle: userInfo.user_subtitle.value,
        content: userInfo.user_description.value
      },
      contacts: userInfo.user_social_links
    };
  }
}
</script>
