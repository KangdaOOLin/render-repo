<template>
  <div>
    <RenderFunction :render="render" />
  </div>
</template>

<script>
import RenderFunction from "./RenderFunction";

export default {
  name: "JSRender",

  components: { RenderFunction },

  data() {
    return {
      value: 123,
      render: h => h("div", [h("strong", this.value.toString())])
    };
  },

  mounted() {
    setInterval(() => {
      this.value = Math.random();
    }, 3000);
  }
};
</script>

<style scoped>
</style>
