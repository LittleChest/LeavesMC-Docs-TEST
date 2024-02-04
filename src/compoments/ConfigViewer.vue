<script setup>
import ConfigViewerNode from "./ConfigViewerNode.vue";

const props = defineProps({
  data: Object,
  name: String,
});
</script>

<template>
  <div class="language-yml vp-adaptive-theme">
    <span class="lang">{{ name }}</span>
    <code class="github-dark github-light" style="padding: 4px 0 4px 0;width:100%">
      <ConfigViewerNode :data="data" />
    </code>
  </div>
</template>

<style scoped></style>
