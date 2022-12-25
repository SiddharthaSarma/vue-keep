<template>
  <div class="content-container">
    <div class="notes-section flex flex-col" v-for="note in notes" :key="note">
      <div class="content">
        {{ note }}
      </div>
      <div class="icons-section flex">
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
    notes: Array,
  },
};
</script>
