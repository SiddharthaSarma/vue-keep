<template>
  <div
    class="w-5/12 border shadow-md text-2xl text-gray-900 rounded-lg flex flex-col"
  >
    <div class="flex justify-center pr-2 h-12">
      <input
        type="text"
        name="title"
        class="text-2xl text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
        :placeholder="!opened ? 'Take a note...' : 'Title'"
        @focusin="handleTitleFocusIn"
        @focusout="handleTitleFocusOut"
        @click="opened = true"
      />
      <div class="flex items-center h-full">
        <div class="hover:cursor-pointer hover:bg-blue-100 h-full w-12  flex items-center justify-center rounded-full">
          <CheckSquareIcon />
        </div>
        <div class="hover:cursor-pointer hover:bg-blue-100 h-full w-12  flex items-center justify-center rounded-full">
          <BrushIcon class="hover:cursor-pointer" />
        </div>
        <div class="hover:cursor-pointer hover:bg-blue-100 h-full w-12  flex items-center justify-center rounded-full">
          <ImageIcon class="hover:cursor-pointer"/>
        </div>
      </div>
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
  </div>
</template>
<script>
import { debounce } from "../../helpers/index.js";
import { BrushIcon, CheckSquareIcon, ImageIcon } from "../icons";
export default {
  name: "NotesScreen",
  components: {
    CheckSquareIcon,
    BrushIcon,
    ImageIcon
  },
  data: () => ({
    opened: false,
    defaultText: "Take a note...",
    content: "Take a note...",
    titleFocused: false,
    contentFocused: false,
  }),
  methods: {
    handleInput(e) {
      this.content = e.target.innerHTML;
    },
    toggleContentNotes() {
      this.opened = this.titleFocused || this.contentFocused;
    },
    handleContentFocusIn() {
      this.opened = true;
      this.contentFocused = true;
      if (this.defaultText === this.content) {
        this.content = "";
      }
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
