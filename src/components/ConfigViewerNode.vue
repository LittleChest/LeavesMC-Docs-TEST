<script setup lang="ts">
import { ref } from "vue";

let hover = ref({});
let expand = ref(false);

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
        <span style="padding: 0 4px 0 4px">
          <span :class="hover[key]?'key-text-hover':'key-text'">{{ key }}</span>
          <span :class="hover[key]?'key-text-hover':'key-text'">:</span>
        </span>
        <ConfigViewerNode :data="value" />
      </div>
      <div v-else style="border-radius: 4px; padding: 0 4px 0 4px; white-space: normal">
        <span :class="hover[key]?'key-text-hover':'key-text'">{{ key }}</span>
        <span class="value-text">: </span>
        <span class="value-text">{{ value.default }}</span>
      </div>
    </div>
    <div v-else :class="value.type + ` custom-block`" style="margin-right: 16px">
      <p class="custom-block-title">
        {{ value.title === undefined ? value.type.toUpperCase() : value.title }}
      </p>
      <p style="white-space: normal">{{ value.content }}</p>
    </div>
  </div>
</template>

<style scoped>

.key-text {
  --shiki-light: #22863a;
  --shiki-dark: #85e89d;
  transition: all 0.5s;
}

.key-text-hover {
  --shiki-light: #003eb3;
  --shiki-dark: #69b1ff;
  transition: all 0.5s;
}

.value-text {
  --shiki-light: #032f62;
  --shiki-dark: #9ecbff;
}
</style>
