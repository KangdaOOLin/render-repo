<template>
  <div id="app">
    <div>
      JS Render:
    </div>
    <JSRender />
    <br />
    <div>
      TS Render:
    </div>
    <TSRender />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import JSRender from "./components/JSRender.vue";
import TSRender from "./components/TSRender.vue";

@Component({
  components: { JSRender, TSRender }
})
export default class App extends Vue {}
</script>

<style>
</style>
