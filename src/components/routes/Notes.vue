<template>
  <div
    class="w-1/2 border shadow-md text-2xl text-gray-900 rounded-lg focus:outline-none focus:ring-1 flex flex-col"
  >
    <input
      type="text"
      name="title"
      class="text-2xl text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 block w-full p-2.5"
      :placeholder="!opened ? 'Take a note...' : 'Title'"
      @click="opened = true"
    />
    <p
      v-if="opened"
      contenteditable="true"
      class="focus-visible:outline-none p-2.5 text-sm"
      @input="handleInput"
      @focusin="handleFocusIn"
      v-html="content"
    />
  </div>
</template>
<script>
export default {
  name: "NotesScreen",
  data: () => ({
    opened: false,
    defaultText: 'Take a note...',
    content: "Take a note...",
  }),
  methods: {
    handleInput(e) {
      this.content = e.target.innerHTML;
    },
    handleBlur() {
      console.log('blur called', this.content);
    },
    handleFocusIn() {
      if (this.defaultText === this.content) {
        this.content = '';
      }
    }
  },
};
</script>
