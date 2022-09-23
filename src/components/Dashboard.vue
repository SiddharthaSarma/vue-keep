<template>
  <div>
    <nav class="fixed z-30 w-full bg-white border-b border-black-200">
      <div class="px-4 py-3">
        <div class="flex items-center justify-between">
          <div class="flex w-3/6">
            <div class="flex items-center justify-start">
              <button class="p-2 text-gray-600 rounded cursor-pointer">
                <ListIcon width="24" @click.native="handleClick" />
              </button>
              <a href="#" class="flex items-center text-xl font-bold">
                <span class="text-gray-800">Keep</span>
              </a>
            </div>
            <div class="hidden mr-6 lg:block ml-24 grow">
              <form action="#">
                <label class="sr-only">Search</label>
                <div class="relative mt-1">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      class="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="name"
                    class="border shadow-md text-2xl text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-1 block w-full pl-10 p-2.5"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
          </div>
          <div class="flex items-center">
            <RightDashboard />
          </div>
        </div>
      </div>
    </nav>
    <div class="pt-12 lg:flex">
      <div
        class="flex flex-col w-full pr-4 py-8 overflow-y-auto lg:h-screen"
        :class="[isSidebarOpen ? 'lg:w-72' : 'lg:w-32']"
      >
        <div class="flex flex-col justify-between mt-6">
          <Sidebar
            :sidebar-list="sidebarList"
            :is-sidebar-open="isSidebarOpen"
          />
        </div>
      </div>
      <div class="w-full h-full p-4 m-8 overflow-y-auto">
        <div class="flex justify-center p-4">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import {
  ArchiveIcon,
  BellIcon,
  BulbIcon,
  ListIcon,
  PencilIcon,
  TrashIcon,
} from './icons';
import Sidebar from './Sidebar.vue';
import RightDashboard from './dashboard/RightDashboard.vue';
export default {
  name: 'DashboardScreen',
  components: { ListIcon, Sidebar, RightDashboard },
  data() {
    return {
      isSidebarOpen: true,
      content: 'content goes here',
      sidebarList: [
        {
          icon: BulbIcon,
          title: 'Notes',
          path: '/notes',
        },
        {
          icon: BellIcon,
          title: 'Reminders',
          path: '/reminders',
        },
        {
          icon: PencilIcon,
          title: 'Edit labels',
          path: '/edit-labels',
        },
        {
          icon: ArchiveIcon,
          title: 'Archive',
          path: '/archive',
        },
        {
          icon: TrashIcon,
          title: 'Trash',
          path: '/trash',
        },
      ],
    };
  },
  methods: {
    handleClick() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>
