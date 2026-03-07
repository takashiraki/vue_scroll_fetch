<script setup lang="ts">
import { SidebarTrigger } from '@/components/ui/sidebar';

</script>

<template>
    <div class="flex items-center gap-2">
        <SidebarTrigger />
        <RouterLink to="/friends">友だち</RouterLink>
    </div>
</template>