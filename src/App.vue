<script setup lang="ts">
import AppSideBar from './components/Commons/SideBars/AppSideBar.vue';
import { SidebarProvider } from './components/ui/sidebar';

</script>

<template>
  <SidebarProvider>
    <AppSideBar />
    <main class="p-4 w-full">
      <RouterView />
    </main>
  </SidebarProvider>
</template>