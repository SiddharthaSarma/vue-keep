<template>
  <div class="flex flex-col h-full">
    <div class="heading h-32">Notes in Trash are deleted after 7 days.</div>
    <div class="flex flex-col items-center grow justify-center">
      <TrashIcon />
      <div class="content">No notes in Trash</div>
    </div>
  </div>
</template>
<script>
import TrashIcon from '../icons/src/TrashIcon.vue';
export default {
  name: 'TrashScreen',
  components: { TrashIcon },
};
</script>
