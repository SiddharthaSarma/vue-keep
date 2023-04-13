<script setup>
import {ref} from 'vue';
const content = ref('Reminders');
</script>
<script>
export default {
  name: 'RemindersSection'
}
</script>
<template>
  <div>{{ content }}</div>
</template>
