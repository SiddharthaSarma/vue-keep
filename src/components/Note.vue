<template>
  <div class="content-container">
    <div class="notes-section" v-for="note in notes" :key="note">
      Notes {{ note }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'NotesSection',
  props: {
    notes: Array,
  }
};
</script>
