<script setup lang="ts">
import FriendCard from '@/components/Friends/Card/FriendCard.vue';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { onMounted, onUnmounted, ref } from 'vue';

const count = ref<number>(10);

const sentinel = ref<HTMLDivElement | null>(null);

let observer: IntersectionObserver | null = null;

const setUpObserver = () => {
    if (!sentinel.value) return;

    observer?.disconnect();

    observer = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting) {
            setTimeout(() => {
                count.value += 10;
            }, 3000);
        }
    }, {
        threshold: 1.0,
    });

    observer.observe(sentinel.value);
}

onMounted(() => {
    setUpObserver();
});

onUnmounted(() => {
    observer?.disconnect();
});

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
            <div ref="sentinel" class="h-10"></div>
        </div>
    </div>
</template>