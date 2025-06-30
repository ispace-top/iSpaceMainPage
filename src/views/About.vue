<template>
  <div>
    <section class="about-page-header">
      <div class="container">
        <h1>关于 iSpace</h1>
        <p>用科技赋能教育，用代码构筑孩子们的未来</p>
      </div>
    </section>

    <section id="about-us" class="section-padding">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <span class="section-tag">我们的使命</span>
            <h2>激发每一个孩子的创造潜能</h2>
            <p>我们相信，编程不应仅仅是一项技能，更是一种全新的思维方式。在iSpace，我们致力于为5-18岁的青少年提供专业、有趣、富有启发性的编程教育。</p>
            <p>我们摒弃枯燥的理论灌输，采用国际领先的项目式学习（PBL）方法，引导孩子们在创造属于自己的游戏、动画和应用的过程中，自然地掌握计算思维，培养逻辑分析、解决问题和团队协作的核心素养，为迎接人工智能时代的挑战做好准备。</p>
          </div>
          <div class="about-image">
            <img src="https://placehold.co/600x450/FF7A59/FFFFFF?text=iSpace" alt="我们的使命">
          </div>
        </div>
      </div>
    </section>

    <section id="team" class="section-padding bg-light">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Our Team</span>
          <h2>专业的师资团队</h2>
        </div>
        <div class="grid-4">
          <div v-for="member in team" :key="member.name" class="team-member">
            <img :src="createAvatar(member.name.charAt(0))" :alt="member.name">
            <h4>{{ member.name }}</h4>
            <div class="role">{{ member.role }}</div>
            <p>{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="careers" class="section-padding">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Join Us</span>
          <h2>加入我们，共同成长</h2>
        </div>
        <div class="careers-grid">
          <div class="job-listing">
            <h3>少儿编程讲师 (Scratch/Python/C++)</h3>
            <p><strong>职责：</strong>负责教授相应课程，激发学生学习兴趣，跟踪学习进度，与家长保持良好沟通。</p>
            <p><strong>要求：</strong>热爱教育事业，有耐心和亲和力，计算机相关专业背景，有教学经验或竞赛背景者优先。</p>
          </div>
          <div class="job-listing">
            <h3>课程研发专员</h3>
            <p><strong>职责：</strong>根据公司课程体系，设计和开发新的课程内容、项目案例和配套教案。</p>
            <p><strong>要求：</strong>对少儿编程教育有深刻理解，熟悉多种编程语言和工具，具备优秀的课程设计和文案撰写能力。</p>
          </div>
        </div>
         <p style="text-align: center; margin-top: 2rem;">我们是一个充满活力和创造力的团队，期待您的加入！请将简历发送至：<strong>hr@ispace.top</strong></p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { team } from '../data/team';

const createAvatar = (initial) => {
  if (!initial) return '';
  const char = initial.charAt(0).toUpperCase();
  let hash = 0;
  for (let i = 0; i < char.length; i++) {
    hash = char.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xFF;
    color += ('00' + Math.floor((value + 150) / 2).toString(16)).substr(-2);
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="${color}" /><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-family="Manrope, Noto Sans SC, sans-serif" font-size="50" font-weight="700" fill="#FFFFFF">${char}</text></svg>`;
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
};
</script>

<style scoped>
.about-page-header {
    padding: 6rem 0;
    background-color: #f0f4ff;
    text-align: center;
}
.about-page-header h1 {
    font-size: 3rem;
    margin: 0.5rem;
    margin-top: 3rem;
}
.about-page-header p {
    font-size: 1.2rem;
    color: var(--text-color);
}

.about-content {
    display: flex;
    align-items: center;
    gap: 3rem;
    flex-wrap: wrap;
}
.about-text {
    flex: 1;
    min-width: 300px;
}
.about-text h2 {
    margin-bottom: 1.5rem;
}
.about-text p {
    margin-bottom: 1rem;
    line-height: 1.8;
}
.about-image {
    flex: 1;
    min-width: 300px;
}
.about-image img {
    width: 100%;
    border-radius: 1rem;
    box-shadow: var(--shadow);
}

.team-member {
    text-align: center;
    margin-bottom: 2rem;
    padding: 1.5rem;
    background-color: var(--white-color);
    border-radius: 1rem;
    transition: all 0.3s ease;
}
.team-member:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}
.team-member img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 1rem;
    border: 5px solid var(--white-color);
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.team-member h4 {
    margin-bottom: 0.25rem;
    font-size: 1.25rem;
}
.team-member .role {
    color: var(--primary-color);
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.careers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.job-listing {
    background: var(--white-color);
    padding: 2.5rem;
    border-radius: 1rem;
    border-left: 5px solid var(--primary-color);
    box-shadow: var(--shadow);
    transition: all 0.3s ease;
}
.job-listing:hover {
    border-left-color: var(--secondary-color);
    transform: translateY(-5px);
}
.job-listing h3 {
    margin-bottom: 1rem;
}
.job-listing p {
    margin-bottom: 0.5rem;
}
</style>
