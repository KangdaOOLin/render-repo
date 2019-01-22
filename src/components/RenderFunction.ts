import Vue from "vue";

export default Vue.extend({
  name: "RenderFunction",
  functional: true,
  props: {
    render: Function,
    params: {
      type: Object,
      default: () => ({})
    }
  },
  render(h, ctx) {
    return ctx.props.render(h, ctx.props.params);
  }
});
