<template>
  <div class="content-container">
    <div class="notes-section" v-for="note in notes" :key="note">
      Notes {{ note }}
    </div>
  </div>
</template>
<script>
import NotesService from '@/services/NotesService';
export default {
  name: 'NotesSection',
  computed: {
    notes() {
      return NotesService.getNotes();
    },
  },
};
</script>
