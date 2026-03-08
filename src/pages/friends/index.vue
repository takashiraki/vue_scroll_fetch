<script setup lang="ts">
import FriendCard from '@/components/Friends/Card/FriendCard.vue';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ref } from 'vue';

const count = ref<number>(10);

</script>

<template>
    <div>
        <div class="flex items-center gap-2">
            <SidebarTrigger />
            <RouterLink to="/friends">友だち</RouterLink>
        </div>
        <div>
            <div v-for="i in count" :key="i" class="mb-4">
                <FriendCard />
            </div>
        </div>
    </div>
</template>