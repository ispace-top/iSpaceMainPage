<template>
  <form @submit.prevent="handleSubmit" class="booking-form">
    <div v-if="isSubmitted" class="success-message">
      <p>✅ 提交成功！</p>
      <p>感谢您的预约，我们的课程顾问会尽快与您联系。</p>
    </div>
    <div v-else>
      <div class="form-group">
        <label for="childName">孩子姓名</label>
        <input type="text" id="childName" v-model="formData.childName" required>
      </div>
      <div class="form-group">
        <label for="childAge">孩子年龄</label>
        <input type="number" id="childAge" v-model="formData.childAge" required>
      </div>
      <div class="form-group">
        <label for="parentPhone">家长手机</label>
        <input type="tel" id="parentPhone" v-model="formData.parentPhone" required>
      </div>
      <div class="form-group">
        <label for="courseInterest">感兴趣的课程</label>
        <select id="courseInterest" v-model="formData.courseInterest">
          <option disabled value="">请选择</option>
          <option v-for="course in courses" :key="course.id" :value="course.title">
            {{ course.title }} ({{ course.age }})
          </option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary btn-full">立即提交</button>
    </div>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { courses } from '../data/courses';

const props = defineProps({
  initialCourse: {
    type: String,
    default: ''
  }
});

const formData = ref({
  childName: '',
  childAge: '',
  parentPhone: '',
  courseInterest: ''
});

onMounted(() => {
  if (props.initialCourse) {
    formData.value.courseInterest = props.initialCourse;
  }
});

const isSubmitted = ref(false);

const handleSubmit = () => {
  console.log('Form Submitted:', formData.value);
  // Here you would typically send the data to a server
  isSubmitted.value = true;
};
</script>

<style scoped>
.booking-form .form-group {
  margin-bottom: 1.5rem;
}
.booking-form label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: var(--dark-color);
}
.booking-form input,
.booking-form select {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
}
.booking-form input:focus,
.booking-form select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(255, 122, 89, 0.2);
}
.success-message {
  text-align: center;
  padding: 2rem 0;
}
.success-message p {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
</style>
