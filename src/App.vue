<script setup lang="ts">
import AppSideBar from './components/Commons/SideBars/AppSideBar.vue';
import { SidebarProvider } from './components/ui/sidebar';

</script>

<template>
  <div class="bg-gray-100">
    <SidebarProvider>
    <AppSideBar />
    <main class="p-4 w-full">
      <RouterView />
    </main>
  </SidebarProvider>
  </div>
</template>