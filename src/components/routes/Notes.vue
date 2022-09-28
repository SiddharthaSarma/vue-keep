<template>
  <div class="w-full">
    <div class="w-5/12 border shadow-md text-gray-900 rounded-lg flex flex-col m-auto">
      <div class="flex justify-center pr-2 h-12 text-2xl">
        <input
          v-model="title"
          type="text"
          name="title"
          class="text-sm text-gray-900 rounded-lg focus:outline-none block w-full p-2.5"
          :placeholder="!opened ? 'Take a note...' : 'Title'"
          @focusin="handleTitleFocusIn"
          @focusout="handleTitleFocusOut"
          @click="opened = true"
        />
        <div class="flex items-center h-full">
          <template v-if="!opened">
            <div class="icon-top" @click="handleCheckListClick">
              <CheckSquareIcon />
            </div>
            <div class="icon-top">
              <BrushIcon />
            </div>
            <div class="icon-top">
              <ImageIcon />
            </div>
          </template>
          <template v-if="opened">
            <div class="icon-top">
              <PinIcon />
            </div>
          </template>
        </div>
        <div class="flex items-center h-full" v-if="opened"></div>
      </div>
      <p
        v-if="opened"
        contenteditable="true"
        class="focus-visible:outline-none p-2.5 text-sm"
        @input="handleInput"
        @focusin="handleContentFocusIn"
        @focusout="handleContentFocusOut"
        v-html="content"
      />
      <div v-if="opened" class="flex justify-between items-center p-2">
        <div class="left flex justify-between w-1/2">
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
          <div class="icon" :class="[disableEditing ? 'disabled' : null]">
            <ArrowCounterClockWise />
          </div>
          <div class="icon" :class="[disableEditing ? 'disabled' : null]">
            <ArrowClockWise />
          </div>
        </div>
        <div class="right">
          <button class="btn">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { debounce } from '../../helpers/index.js';
import {
  ArrowClockWise,
  ArrowCounterClockWise,
  BellIcon,
  BrushIcon,
  CheckSquareIcon,
  FileZipIcon,
  ImageIcon,
  PaletteIcon,
  PinIcon,
  ThreeDotsVertical,
  UserPlusIcon,
} from '../icons';
export default {
  name: 'NotesScreen',
  components: {
    CheckSquareIcon,
    BrushIcon,
    ImageIcon,
    BellIcon,
    UserPlusIcon,
    PaletteIcon,
    FileZipIcon,
    ThreeDotsVertical,
    ArrowCounterClockWise,
    ArrowClockWise,
    PinIcon,
  },
  data: () => ({
    opened: false,
    defaultText: 'Take a note...',
    content: 'Take a note...',
    titleFocused: false,
    contentFocused: false,
    title: '',
    disableEditing: true,
  }),
  methods: {
    handleInput() {
      // this.content = e.target.innerHTML.split('').reverse().join('');
    },
    toggleContentNotes() {
      this.opened = this.titleFocused || this.contentFocused;
    },
    handleContentFocusIn() {
      this.opened = true;
      this.contentFocused = true;
      if (this.defaultText === this.content) {
        this.content = '';
      }
    },
    handleCheckListClick() {
      console.log('handle Click');
    },
    handleContentFocusOut: debounce(function () {
      this.contentFocused = false;
      this.toggleContentNotes();
    }, 100),
    handleTitleFocusIn() {
      this.titleFocused = true;
    },
    handleTitleFocusOut: debounce(function () {
      this.titleFocused = false;
      this.toggleContentNotes();
    }, 200),
  },
};
</script>
<style>
.btn {
  @apply py-2 px-4 rounded text-sm mr-4;
}
.btn:hover {
  @apply bg-gray-50;
}
.icon {
  @apply cursor-pointer hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center;
}
.disabled {
  @apply opacity-50 pointer-events-none cursor-not-allowed;
}
.icon-top {
  @apply hover:cursor-pointer hover:bg-gray-200 h-full w-12 flex items-center justify-center rounded-full;
}
</style>
