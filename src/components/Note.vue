<template>
  <div
    class="notes-section flex flex-col break-inside-avoid"
    @mouseover="showIcons = true"
    @mouseleave="showIcons = false"
  >
    <div class="content">
      {{ note?.content }}
    </div>
    <div class="pt-1 h-8">
      <div class="icons-section flex" v-if="showIcons">
        <div class="icon">
          <BellIcon />
        </div>
        <div class="icon">
          <UserPlusIcon />
        </div>
        <div class="icon">
          <PaletteIcon />
        </div>
        <div class="icon">
          <ImageIcon />
        </div>
        <div class="icon">
          <FileZipIcon />
        </div>
        <div class="icon">
          <ThreeDotsVertical />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  ThreeDotsVertical,
  FileZipIcon,
  ImageIcon,
  PaletteIcon,
  UserPlusIcon,
  BellIcon,
} from './icons';
export default {
  name: 'NotesSection',
  components: {
    ThreeDotsVertical,
    FileZipIcon,
    ImageIcon,
    PaletteIcon,
    UserPlusIcon,
    BellIcon,
  },
  props: {
    note: Object,
  },
  data() {
    return {
      showIcons: false,
    };
  },
};
</script>
