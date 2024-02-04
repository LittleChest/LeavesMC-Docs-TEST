<script setup lang="ts">
import { ref } from "vue";

let hover = ref({});

const props = defineProps({
  data: Object
});
</script>

<template>
  <div v-for="(value, key) in data" :key="key" style="padding-left: 8px">
    <div
      v-if="key !== 'inline-block'"
      @mouseover="hover[key] = true"
      @mouseleave="hover[key] = false"
    >
      <div v-if="value['default'] === undefined">
        <span
          :class="{ 'hover-with-child': hover[key] }"
          style="border-radius: 4px; padding: 0 4px 0 4px"
        ><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">{{ key }}</span><span
          style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span></span
        >
        <ConfigViewerNode :data="value" />
      </div>
      <div
        v-else
        :class="{ 'hover-without-child': hover[key] }"
        style="border-radius: 4px; padding: 0 4px 0 4px;white-space: normal"
      >
        <span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">{{ key }}</span><span
        style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span> <span
        style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{{ value.default }}</span>
      </div>
    </div>
    <div
      v-else
      :class="value.type + ` custom-block`"
      style="margin-right: 16px"
    >
      <p class="custom-block-title">{{ value.title === undefined ? value.type.toUpperCase() : value.title }}</p>
      <p style="white-space: normal">{{ value.content }}</p>
    </div>
  </div>
</template>

<style scoped>
.hover-with-child {
  background-color: var(--vp-c-brand-3);
  color: white;
  transition: all 0.5s;
}

.hover-without-child {
  color: var(--vp-c-brand-1);
  transition: all 0.5s;
}
</style>
