<template>
  <div class="flex flex-col h-full">
    <div class="heading h-16 italic text-lg">
      Notes in Trash are deleted after 7 days.
    </div>
    <div class="flex flex-col items-center grow justify-center">
      <TrashIcon width="120" height="120" color="#CCCCCC" />
      <div class="content text-gray-500 text-xl">No notes in Trash</div>
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
