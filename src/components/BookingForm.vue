<template>
  <div v-if="isSubmitted" class="submission-success">
    <svg class="success-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
      <circle cx="26" cy="26" r="25" fill="#4CAF50" />
      <path fill="none" stroke="#FFFFFF" stroke-width="4" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
    </svg>
    <h3>预约成功！</h3>
    <p>我们的课程顾问将尽快与您联系，请保持手机畅通。</p>
    <button @click="resetForm" class="reset-button">返回再预约</button>
  </div>

  <form v-else @submit.prevent="handleSubmit" class="form-content">
    <div class="form-group">
      <label for="childName">孩子姓名</label>
      <input id="childName" v-model="formData.childName" type="text" placeholder="请输入孩子的姓名" required />
    </div>

    <div class="form-group">
      <label for="childAge">孩子年龄</label>
      <input id="childAge" v-model="formData.childAge" type="number" placeholder="请输入孩子的年龄" required />
    </div>

    <div class="form-group">
      <label for="parentPhone">家长手机</label>
      <input id="parentPhone" v-model="formData.parentPhone" type="tel" placeholder="请输入家长的手机号码"
        pattern="[0-9]{11}" required />
    </div>

    <div class="form-group">
      <label for="course">选择课程</label>
      <select id="course" v-model="formData.course" required>
        <option v-for="course in courseList" :key="course.id" :value="course.title">
          {{ course.title }}
        </option>
      </select>
    </div>

    <p v-if="submissionError" class="error-message">{{ submissionError }}</p>

    <button type="submit" class="submit-button">立即免费预约</button>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue';
// 【功能修改】: 导入课程数据
import { courses } from '../data/courses.js';

// 有些课程可能不适合预约，这里做一个简单的筛选
const courseList = computed(() => courses.filter(c => c.allowBooking !== false));

// 【功能修改】: 更新表单数据结构
const formData = ref({
  childName: '',
  childAge: '',
  parentPhone: '',
  // 将默认值设为课程列表的第一个课程的标题
  course: courseList.value.length > 0 ? courseList.value[0].title : '',
});

const isSubmitted = ref(false);
const submissionError = ref('');

const handleSubmit = async () => {
  submissionError.value = '';
  try {
    const response = await fetch('http://localhost:3000/api/submit-booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value),
    });
    if (response.ok) {
      isSubmitted.value = true;
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || '服务器返回错误');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    submissionError.value = '网络连接失败或服务器无响应，请稍后再试。';
  }
};

const resetForm = () => {
  isSubmitted.value = false;
  submissionError.value = '';
  formData.value = {
    childName: '',
    childAge: '',
    parentPhone: '',
    course: courseList.value.length > 0 ? courseList.value[0].title : '',
  };
};
</script>

<style scoped>
/* 【样式修改】: 删除了 .booking-form-container 的所有样式 */

/* 表单内容的样式依然保留，但不再有外边框、阴影和背景 */
.form-content {
  width: 100%;
}

.form-content h2 {
  text-align: center;
  color: #333;
  margin-top: 0; /* 移除顶部边距，因为GlobalModal会有padding */
  margin-bottom: 10px;
}

.form-content p {
  text-align: center;
  color: #666;
  margin-bottom: 25px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #444;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #007bff;
}

.submit-button {
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #0056b3;
}

.error-message {
  color: #dc3545;
  font-size: 14px;
  text-align: center;
  margin-top: -10px;
  margin-bottom: 15px;
}

/* 成功界面的样式不受影响 */
.submission-success {
  text-align: center;
  padding: 20px 0; /* 垂直方向加一些内边距 */
}

.success-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
}

.submission-success h3 {
  color: #28a745;
  margin-bottom: 15px;
}

.submission-success p {
  color: #555;
  margin-bottom: 25px;
}

.reset-button {
  padding: 12px 25px;
  border: 1px solid #007bff;
  border-radius: 8px;
  background-color: transparent;
  color: #007bff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.reset-button:hover {
  background-color: #007bff;
  color: white;
}
</style>