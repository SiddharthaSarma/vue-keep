<template>
  <aside>
    <ul>
      <li v-for="item of sidebarList" :key="item.title" class="mb-4">
        <router-link class="text-gray-700" :class="[
          isSidebarOpen
            ? 'flex items-center px-6 py-4 rounded-r-full'
            : 'p-4 ml-4 inline-block rounded-full',
        ]" :to="item.path">
          <component :is="item.icon" />
          <span class="mx-4 font-medium" :class="{ hidden: !isSidebarOpen }">
          {{item.title}}
        </span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>
<script>
export default {
  name: "SidebarComponent",
  props: ["sidebarList", "isSidebarOpen"],
};
</script>
