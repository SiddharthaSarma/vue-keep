<template>
  <div class="pt-5 columns-2 md:columns-3 lg:columns-4">
    <div
      class="notes-section flex flex-col break-inside-avoid"
      v-for="note in notes"
      :key="note"
      @mouseover="showIcons = true"
      @mouseleave="showIcons = false"
    >
      <div class="content">
        {{ note }}
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
    notes: Array,
  },
  data() {
    return {
      showIcons: false,
    };
  },
};
</script>
