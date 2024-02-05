<script setup lang="ts">
import { ref } from "vue";

let hover = ref({});
let expand = ref({});

const props = defineProps({
  data: Object,
  padding: Boolean
});

function isSpecial(value: string): boolean {
  if (value == "true" || value == "false") {
    return true;
  }
  return !isNaN(Number(value));

}
</script>

<template>
  <div v-for="(value, key) in data" :key="key" style="padding-left: 8px">
    <div
      v-if="key !== 'inline-block'"
      @mouseover="hover[key] = true"
      @mouseleave="hover[key] = false"
      :style="{ paddingLeft: padding ? '8px' : '0' }"
    >
      <div v-if="value['default'] === undefined">
        <span class="line config-line" role="button">
          <span :class="hover[key] ? 'config-key-text-hover' : 'config-key-text'">{{ key }}</span>
          <span class="config-value-text">:</span>
        </span>
        <ConfigViewerNode :data="value" :padding="true" />
      </div>
      <div v-else style="white-space: normal" @click="expand[key] = !expand[key]">
        <span class="line config-line" role="button">
          <span :class="hover[key] ? 'config-key-text-hover' : 'config-key-text'">{{ key }}</span>
          <span class="config-value-text">: </span>
          <span :class="isSpecial(value.default)?'config-value-special':'config-value-text'">{{ value.default }}</span>
        </span>
        <div v-if="expand[key]" class="custom-block info inline-block" style="width: 100%">
          {{ value.description }}
        </div>
      </div>
    </div>
    <div
      v-else
      :class="value.type + ` custom-block inline-block`"
      style="margin-right: 16px; width: 100%"
    >
      <p class="custom-block-title">
        {{ value.title === undefined ? value.type.toUpperCase() : value.title }}
      </p>
      <p style="white-space: normal">{{ value.content }}</p>
    </div>
  </div>
</template>

<style>
.config-key-text {
  --shiki-light: #22863a;
  --shiki-dark: #85e89d;
}

.config-key-text-hover {
  --shiki-light: #6F42C1;
  --shiki-dark: #B392F0;
}

.config-value-text {
  --shiki-light: #032F62;
  --shiki-dark: #9ECBFF;
}

.config-value-special {
  --shiki-light: #005CC5;
  --shiki-dark: #79B8FF;
}

.inline-block {
  font-family: var(--vp-font-family-base);
}

.config-line {
  display: inline-block;
  padding: 0;
  text-indent: -1rem;
  margin-left: 1rem;

  transition: all 0.5s;
}
</style>
