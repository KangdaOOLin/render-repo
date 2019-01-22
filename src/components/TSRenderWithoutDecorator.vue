<template>
  <div>
    <RenderFunction :renderFn="renderFn" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { CreateElement } from "vue";
import RenderFunction from "./RenderFunction";

export default Vue.extend({
  name: "TSRenderWithoutDecorator",

  components: { RenderFunction },

  data() {
    return {
      value: 123,
      renderFn: (h: CreateElement) => {
        const self = this as any;
        return h("div", [h("strong", self.value.toString())]);
      }
    };
  },

  mounted() {
    setInterval(() => {
      this.value = Math.random();
    }, 3000);
  }
});
</script>

<style scoped>
</style>
