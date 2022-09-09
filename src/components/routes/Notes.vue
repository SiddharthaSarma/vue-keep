<template>
  <div
    class="w-1/2 border shadow-md text-2xl text-gray-900 rounded-lg focus:outline-none focus:ring-1 flex flex-col"
  >
    <input
      type="text"
      name="title"
      class="text-2xl text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 block w-full p-2.5"
      :placeholder="!opened ? 'Take a note...' : 'Title'"
      @focusin="handleTitleFocusIn"
      @focusout="handleTitleFocusOut"
      @click="opened = true"
    />
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
export default {
  name: "NotesScreen",
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
