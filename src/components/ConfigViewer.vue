<script setup lang="ts">
import ConfigViewerNode from "./ConfigViewerNode.vue";

const props = defineProps({
  data: Object,
  name: String
});
</script>

<template>
  <div class="language-yml vp-adaptive-theme">
    <span class="lang">{{ name }}</span>
    <pre
      class="shiki shiki-themes github-light github-dark vp-code"
    ><code style="color: var(--vp-c-brand)"><ConfigViewerNode
        :data="data" :padding="false"/></code>
    </pre>
  </div>
</template>

<style scoped></style>
