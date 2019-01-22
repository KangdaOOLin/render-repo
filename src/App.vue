<template>
  <div id="app">
    <div>
      JS Render:
    </div>
    <JSRender />
    <br />
    <div>
      TS Render (with decorator):
    </div>
    <TSRender />
    <br />
    <div>
      TS Render (without decorator):
    </div>
    <TSRenderWithoutDecorator />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import JSRender from "./components/JSRender.vue";
import TSRender from "./components/TSRender.vue";
import TSRenderWithoutDecorator from "./components/TSRenderWithoutDecorator.vue";

@Component({
  components: { JSRender, TSRender, TSRenderWithoutDecorator }
})
export default class App extends Vue {}
</script>

<style>
</style>
