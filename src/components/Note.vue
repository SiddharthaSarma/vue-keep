<template>
  <div class="content-container">
    <div class="notes-section" v-for="i in [1, 2, 3, 4, 5, 6, 7]" :key="i">
      Notes {{ i }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'NotesSection',
};
</script>
