<template>
  <div>
    <!-- 英雄区域 -->
    <section class="hero">
      <div ref="bgContainer" class="hero-bg-shapes"></div>
      <div class="container hero-content">
        <h1>在乐趣中学习，用代码创造世界</h1>
        <p>iSpace 专注于为5岁以上青少年提供专业、有趣的编程教育，全面激发孩子的创造力、逻辑思维和解决问题的能力。</p>
        <div class="hero-buttons">
          <a href="#courses" class="btn btn-primary">查看所有课程</a>
          <a href="#features" class="btn btn-secondary">了解教学方法</a>
        </div>
      </div>
    </section>

    <!-- 课程中心区域 -->
    <section id="courses" class="section-padding bg-light">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">核心课程体系</span>
          <h2>为不同年龄段设计的进阶之路</h2>
        </div>
        <div class="grid-4">
          <div v-for="course in courses" :key="course.id" class="course-card">
            <img :src="`https://placehold.co/600x400/${course.imageColor}/FFFFFF?text=${course.imageText}&font=noto-sans-sc`" :alt="course.title">
            <div class="course-info">
              <span class="age-tag">{{ course.age }}</span>
              <h3>{{ course.title }}</h3>
              <p>{{ course.description }}</p>
              <router-link :to="`/course/${course.id}`">
                课程详情 <i class="fas fa-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 教学特色 -->
    <section id="features" class="section-padding">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Our Features</span>
          <h2>我们如何让编程学习更高效？</h2>
        </div>
        <div class="grid-4">
          <div class="advantage-item">
            <i class="fas fa-puzzle-piece"></i>
            <h4>项目制学习</h4>
            <p>以兴趣为导向，在实践中完成酷炫项目，告别枯燥理论。</p>
          </div>
          <div class="advantage-item">
            <i class="fas fa-users"></i>
            <h4>小班化教学</h4>
            <p>1对4小班授课，确保每个孩子都能得到老师的充分关注。</p>
          </div>
          <div class="advantage-item">
            <i class="fas fa-award"></i>
            <h4>竞赛级师资</h4>
            <p>核心教师团队拥有丰富竞赛经验，带你冲击更高荣誉。</p>
          </div>
          <div class="advantage-item">
            <i class="fas fa-chart-line"></i>
            <h4>成长可视化</h4>
            <p>为每位学员建立学习档案，学习路径和成长效果一目了然。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 学员评价 -->
    <section id="testimonials" class="section-padding bg-light">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Testimonials</span>
          <h2>听听家长和孩子们怎么说</h2>
        </div>
        <div class="testimonial-grid">
          <div class="testimonial-card">
            <p>"iSpace的课程设计太棒了！我家孩子以前坐不住，现在每周都盼着上编程课，做的动画小作品越来越有创意了！"</p>
            <div class="author">
              <img src="https://placehold.co/100x100/333/fff?text=%E5%BC%A0" alt="家长头像">
              <div>
                <strong>张女士</strong>
                <span>二年级学员家长</span>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <p>"孩子在这里学编程快一年了，不仅学会了做小游戏，逻辑思维和专注力也明显提高了，非常感谢老师们的耐心指导。"</p>
            <div class="author">
              <img src="https://placehold.co/100x100/333/fff?text=%E6%9D%8E" alt="家长头像">
              <div>
                <strong>李女士</strong>
                <span>五年级学员家长</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { courses } from '../data/courses';

const bgContainer = ref(null);

onMounted(() => {
  // 动态创建背景形状的逻辑
  if (bgContainer.value && bgContainer.value.children.length === 0) {
    const shapes = ['circle', 'square', 'triangle'];
    const colors = ['#FF7A59', '#00C49A', '#FFC107', '#6C63FF'];
    
    for (let i = 0; i < 20; i++) {
        const shape = document.createElement('div');
        const size = Math.random() * 80 + 20;
        
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.position = 'absolute';
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.top = `${Math.random() * 100}%`;
        shape.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        shape.style.opacity = '0.15';
        shape.style.animation = `float ${Math.random() * 20 + 10}s infinite linear`;

        const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
        if (shapeType === 'circle') {
            shape.style.borderRadius = '50%';
        } else if (shapeType === 'triangle') {
            shape.style.backgroundColor = 'transparent';
            shape.style.width = '0';
            shape.style.height = '0';
            shape.style.borderLeft = `${size/2}px solid transparent`;
            shape.style.borderRight = `${size/2}px solid transparent`;
            shape.style.borderBottom = `${size}px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
        }
        
        bgContainer.value.appendChild(shape);
    }
  }
});
</script>

<style scoped>
/* Scoped styles for Home view */
.hero {
    position: relative;
    height: 90vh;
    min-height: 600px;
    display: flex;
    align-items: center;
    text-align: center;
    overflow: hidden;
    background-color: #FFF9F3;
}
.hero-bg-shapes {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    z-index: 1;
}
.hero-content {
    position: relative;
    z-index: 2;
}
.hero-content h1 { margin-bottom: 1.5rem; }
.hero-content p {
    font-size: 1.25rem;
    max-width: 700px;
    margin: 0 auto 2.5rem;
}
.hero-buttons .btn { margin: 0 0.5rem; }

.advantage-item { text-align: center; }
.advantage-item i {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
}
.advantage-item h4 { margin-bottom: 0.5rem; }

.testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
}
.testimonial-card {
    background-color: var(--white-color);
    padding: 2rem;
    border-radius: 1rem;
    border-left: 5px solid var(--secondary-color);
}
.testimonial-card p {
    font-size: 1.1rem;
    font-style: italic;
    color: var(--dark-color);
    margin-bottom: 1.5rem;
}
.author {
    display: flex;
    align-items: center;
}
.author img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 1rem;
}
.author strong { color: var(--dark-color); }
.author span { font-size: 0.9rem; }
</style>