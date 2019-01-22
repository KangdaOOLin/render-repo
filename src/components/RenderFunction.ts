import Vue from "vue";

export default Vue.extend({
  name: "RenderFunction",
  functional: true,
  props: {
    renderFn: Function,
    params: {
      type: Object,
      default: () => ({})
    }
  },
  render(h, ctx) {
    return ctx.props.renderFn(h, ctx.props.params);
  }
});
