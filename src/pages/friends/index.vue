<script setup lang="ts">
import FriendCard from '@/components/Friends/Card/FriendCard.vue';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Spinner } from '@/components/ui/spinner';
import { nextTick } from 'vue';
import { onMounted, onUnmounted, ref } from 'vue';

const count = ref<number>(10);

const sentinel = ref<HTMLDivElement | null>(null);

const mockFetching = ref<boolean>(false);

let observer: IntersectionObserver | null = null;

const setUpObserver = () => {
    if (!sentinel.value) return;
    console.log('set up observer');
    console.log("sentinel", sentinel.value);

    console.log("observer", observer);

    observer?.disconnect();

    observer = new IntersectionObserver((entries) => {
        // entriesは交差の状態を表すオブジェクトの配列で、今回はsentinelが1つなのでentries[0]でアクセス
        // entries[0].isIntersectingがtrueの場合、sentinelが画面内に完全に入っていることを意味する
        if (entries[0]?.isIntersecting) loadMore();
    }, {
        threshold: 1.0,
    });

    console.log("observer after set up", observer);

    observer.observe(sentinel.value);
}

const loadMore = () => {
    console.log('load more');
    mockFetching.value = true;
    setTimeout(async () => {
        console.log('fetching more data');
        count.value += 10;

        console.log('data fetched');
        mockFetching.value = false;

        console.log('data rendered');

        // データのフェッチとレンダリングが完了した後、次のtickを待つ
        await nextTick();

        // 処理の流れは
        // 1. sentialが画面下で交差する
        // 2. loadMore() 呼び出し
        // 3. mockFetching = true → スピナー表示
        // 4. 1秒後にデータを追加
        // 5. count += 10
        // 6. mockFetching = false → スピナー非表示
        // 7. nextTick() Vueが5と6の変更をDOMに反映させるのを待つ
        // 8. DOMの更新が完了した後、setUpObserver() を呼び出してオブザーバーを再設定する

        // nextTickがない場合、データの追加とスピナーの非表示がDOMに反映される前にオブザーバーが
        // 再設定されてしまう可能性があるため、正しい動作が保証されないことがある

        // ここでDomの更新が完了しているはずなので、再度オブザーバーをセットアップする
        setUpObserver();
    }, 1000);
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
            <div ref="sentinel" class="h-10" />
            <div v-if="mockFetching" class="flex justify-center items-center">
                <Spinner />
            </div>
        </div>
    </div>
</template>