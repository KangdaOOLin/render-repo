<template>
  <div>
    <RenderFunction :renderFn="renderFn" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue";
import RenderFunction from "./RenderFunction";

@Component({
  components: { RenderFunction }
})
export default class TSRender extends Vue {
  private value = 123;

  private renderFn = (h: CreateElement): VNode => {
    return h("div", [h("strong", this.value.toString())]);
  };

  private mounted() {
    setInterval(() => {
      this.value = Math.random();
    }, 3000);
  }
}
</script>

<style scoped>
</style>
