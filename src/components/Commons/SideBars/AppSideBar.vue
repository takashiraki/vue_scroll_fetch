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
]
</script>

<template>
    <Sidebar class="border-none">
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>アプリケーション</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem v-for="item in items" :key="item.title">
                            <SidebarMenuButton as-child>
                                <RouterLink :to="item.url" active-class="bg-black text-white">
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
