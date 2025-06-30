<template>
  <div v-if="course">
    <section class="course-detail-header">
      <div class="container">
        <h1>{{ course.title }}</h1>
        <p>专为 {{ course.age }} 设计 | {{ course.headerDescription }}</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container course-detail-body">
        <!-- 主内容区 -->
        <div class="course-detail-main">
          <div class="course-content">
            <h2>课程简介</h2>
            <p>{{ course.details.summary }}</p>
            
            <h2>你将收获什么？</h2>
            <ul>
              <li v-for="gain in course.details.gains" :key="gain.title">
                <strong>{{ gain.title }}：</strong> {{ gain.description }}
              </li>
            </ul>

            <h2>{{ course.details.syllabusTitle }}</h2>
            <p>{{ course.details.syllabusSummary }}</p>
            <ul>
              <li v-for="item in course.details.syllabus" :key="item.title">
                <strong>{{ item.title }}</strong> - {{ item.description }}
              </li>
            </ul>
          </div>
        </div>
        <!-- 侧边栏 -->
        <aside class="course-detail-sidebar">
          <div class="sidebar-widget">
            <h3>课程信息</h3>
            <ul class="course-meta-list">
              <li><i class="fas fa-child"></i> <strong>适合年龄:</strong> {{ course.age }}</li>
              <li><i class="fas fa-clock"></i> <strong>总课时:</strong> {{ course.details.meta.duration }}</li>
              <li><i class="fas fa-chalkboard-teacher"></i> <strong>授课方式:</strong> {{ course.details.meta.method }}</li>
              <li><i class="fas fa-tools"></i> <strong>使用工具:</strong> {{ course.details.meta.tools }}</li>
            </ul>
            <a href="#" class="btn btn-primary btn-full">立即预约免费试听</a>
          </div>
          <div class="sidebar-widget">
            <h3>教学特色</h3>
            <ul class="course-meta-list">
              <li v-for="feature in course.details.features" :key="feature.text">
                <i :class="feature.icon"></i> <span>{{ feature.text }}</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  </div>
  <div v-else>
      <div class="container section-padding">
          <h2>课程未找到</h2>
          <p>抱歉，我们没有找到您要查找的课程。</p>
          <router-link to="/">返回主页</router-link>
      </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { courses } from '../data/courses';

const route = useRoute();
const courseId = ref(route.params.id);

const course = computed(() => {
  return courses.find(c => c.id === courseId.value);
});

// 监听路由变化，确保在同一页面切换课程时能更新数据
watch(() => route.params.id, (newId) => {
  courseId.value = newId;
});

</script>
