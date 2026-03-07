<script setup lang="ts">
import AppSideBar from './components/Commons/SideBars/AppSideBar.vue';
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';

</script>

<template>
  <SidebarProvider>
    <AppSideBar />
    <main class="px-4 w-full">
      <SidebarTrigger />
      <RouterView />
    </main>
  </SidebarProvider>
</template>