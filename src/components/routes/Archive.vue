<template>
  <div class="flex flex-col h-full">
    <div class="flex flex-col items-center grow justify-center">
      <ArchiveIcon width="120" height="120" color="#CCCCCC" />
      <div class="content text-gray-500 text-xl">
        Your archived notes appear here
      </div>
    </div>
  </div>
</template>
<script>
import {ArchiveIcon} from '../icons'
export default {
  name: 'ArchiveScreen',
  components: {
   ArchiveIcon 
  }
};
</script>
