<script setup lang="ts">
import { Calendar, Home, Inbox } from 'lucide-vue-next'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar'
import { RouterLink, useRoute } from 'vue-router';

type MenuItem = {
    title: string
    url: string
    icon: any
}

const items: MenuItem[] = [
    {
        title: 'ホーム',
        url: '/',
        icon: Home,
    },
    {
        title: '友だち',
        url: '/friends',
        icon: Inbox,
    },
    {
        title: 'タイムライン',
        url: '/timeline',
        icon: Calendar,
    },
]

const route = useRoute();
</script>

<template>
    <Sidebar class="border-none">
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>アプリケーション</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem v-for="item in items" :key="item.title">
                            <SidebarMenuButton as-child
                                :is-active="route.path === item.url || (route.path.startsWith(item.url) && item.url !== '/')">
                                <RouterLink :to="item.url">
                                    <component :is="item.icon" />
                                    <span>{{ item.title }}</span>
                                </RouterLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    </Sidebar>
</template>
