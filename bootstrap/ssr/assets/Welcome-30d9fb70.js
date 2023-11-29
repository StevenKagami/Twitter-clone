import { useSSRContext, mergeProps, toRefs, createVNode, resolveDynamicComponent, unref, ref, isRef, withCtx, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderVNode, ssrRenderComponent, ssrRenderSlot, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { Link, Head } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$o = {
  name: "TwitterIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon twitter-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Twitter.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const Twitter = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$k]]);
const _sfc_main$n = {
  name: "MagnifyIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon magnify-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Magnify.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const Magnify = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$j]]);
const _sfc_main$m = {
  name: "DotsHorizontalIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/DotsHorizontal.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const DotsHorizontal = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$i]]);
const _sfc_main$l = {
  name: "FeatherIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon feather-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M22,2C22,2 14.36,1.63 8.34,9.88C3.72,16.21 2,22 2,22L3.94,21C5.38,18.5 6.13,17.47 7.54,16C10.07,16.74 12.71,16.65 15,14C13,13.44 11.4,13.57 9.04,13.81C11.69,12 13.5,11.6 16,12L17,10C15.2,9.66 14,9.63 12.22,10.04C14.19,8.65 15.56,7.87 18,8L19.21,6.07C17.65,5.96 16.71,6.13 14.92,6.57C16.53,5.11 18,4.45 20.14,4.32C20.14,4.32 21.19,2.43 22,2Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Feather.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const Feather = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$h]]);
const _sfc_main$k = {
  name: "CloseIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon close-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Close.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const Close = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$j = {
  name: "ChevronDownIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon chevron-down-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/ChevronDown.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const ChevronDown = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$i = {
  name: "EarthIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon earth-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Earth.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const Earth = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$h = {
  name: "ImageOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon image-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/ImageOutline.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const ImageOutline = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$g = {
  name: "FileGifBoxIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon file-gif-box-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M10 10.5H7.5V13.5H8.5V12H10V13.7C10 14.4 9.5 15 8.7 15H7.3C6.5 15 6 14.3 6 13.7V10.4C6 9.7 6.5 9 7.3 9H8.6C9.5 9 10 9.7 10 10.3V10.5M13 15H11.5V9H13V15M17.5 10.5H16V11.5H17.5V13H16V15H14.5V9H17.5V10.5Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/FileGifBox.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const FileGifBox = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$f = {
  name: "EmoticonIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon emoticon-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M15.5,8A1.5,1.5 0 0,1 17,9.5A1.5,1.5 0 0,1 15.5,11A1.5,1.5 0 0,1 14,9.5A1.5,1.5 0 0,1 15.5,8M8.5,8A1.5,1.5 0 0,1 10,9.5A1.5,1.5 0 0,1 8.5,11A1.5,1.5 0 0,1 7,9.5A1.5,1.5 0 0,1 8.5,8M12,17.5C9.67,17.5 7.69,16.04 6.89,14H17.11C16.3,16.04 14.33,17.5 12,17.5Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Emoticon.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Emoticon = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$e = {
  name: "ArrowLeftIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon arrow-left-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/ArrowLeft.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const ArrowLeft = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$d = {
  name: "HomeIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon home-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Home.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$c = {
  name: "PoundIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon pound-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Pound.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Pound = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$b = {
  name: "AccountOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon account-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/AccountOutline.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const AccountOutline = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$a = {
  name: "BellOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon bell-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M10 21H14C14 22.1 13.1 23 12 23S10 22.1 10 21M21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19M17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/BellOutline.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const BellOutline = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$9 = {
  name: "EmailOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon email-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/EmailOutline.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const EmailOutline = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$8 = {
  __name: "MenuItem",
  __ssrInlineRender: true,
  props: {
    iconString: String
  },
  setup(__props) {
    const props = __props;
    const { iconString } = toRefs(props);
    let icon = null;
    if (iconString.value === "Home")
      icon = Home;
    if (iconString.value === "Explore")
      icon = Pound;
    if (iconString.value === "Notifications")
      icon = BellOutline;
    if (iconString.value === "Messages")
      icon = EmailOutline;
    if (iconString.value === "Profile")
      icon = AccountOutline;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full lg:inline-block hover:bg-gray-900 p-2 px-4 lg:pr-6 rounded-full cursor-pointer transition duration-200 ease-in-out" }, _attrs))}><div class="flex items-center">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(icon)), {
        fillColor: "#FFFFFF",
        size: 30
      }, null), _parent);
      _push(`<span class="lg:block hidden text-white font-extrabold text-[23px] pl-4 mt-0.5">${ssrInterpolate(unref(iconString))}</span></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/MenuItem.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const TwitterLayout_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = {
  __name: "TwitterLayout",
  __ssrInlineRender: true,
  setup(__props) {
    let createTweet = ref(false);
    let tweet = ref("");
    ref("");
    let showUpload = ref("");
    let uploadType = ref("");
    let randImg1 = ref(`https://picsum.photos/id/${(Math.random() * 200).toFixed(0)}/100`);
    let randImg2 = ref(`https://picsum.photos/id/${(Math.random() * 200).toFixed(0)}/100`);
    const textarea = ref(null);
    const textareaInput = (e) => {
      textarea.value.style.height = "auto";
      textarea.value.style.height = `${e.target.scrollHeight}px`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="fixed w-full"><div class="max-w-[1400px] flex mx-auto"><div class="lg:w-3/12 w-[60px] h-[100vh] max-w-[350px] lg:px-4 lg:mx-auto"><div class="p-2 px-3 mb-4">`);
      _push(ssrRenderComponent(Twitter, {
        fillColor: "#FFFFFF",
        size: 37
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$8, { iconString: "Home" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, { iconString: "Explore" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, { iconString: "Notifications" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, { iconString: "Messages" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, { iconString: "Profile" }, null, _parent));
      _push(`<button class="lg:w-full mt-8 ml-2 text-white font-extrabold text-[22px] bg-[#1C9CEF] p-3 px-3 rounded-full cursor-pointer"><span class="lg:block hidden">Tweet</span><span class="block lg:hidden">`);
      _push(ssrRenderComponent(Feather, null, null, _parent));
      _push(`</span></button></div><div class="lg:w-7/12 w-11/12 border-x border-gray-800 relative"><div class="bg-black bg-opacity-50 backdrop-blur-md z-10 absolute w-full"><div class="border-gray-800 border-b w-full"><div class="w-full text-white text-[22px] font-extrabold p-4"> Home </div><div class="flex"><div class="flex items-center justify-center w-full h-[60px] text-white text-[17px] font-extrabold p-4 hover:bg-gray-500 hover:bg-opacity-30 cursor-pointer transition duration-200 ease-in-out"><div class="inline-block text-center border-b-4 border-b-[#1C9CEF] h-[60px]"><div class="my-auto mt-4">For you </div></div></div><div class="w-full h-[60px] text-gray-500 text-[17px] font-extrabold p-4 hover:bg-gray-500 hover:bg-opacity-30 cursor-pointer transition duration-200 ease-in-out"><div class="text-center"> Following </div></div></div></div></div><div class="absolute top-0 z-0 h-full w-full overflow-auto scrollbar-hide"><div class="mt-[126px]"></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div class="pb-4"></div></div></div><div class="lg:block hidden lg:w-4/12 h-screen border-l border-gray-800 pl-4"><div class="w-full p-1 mt-2 px-4 lg:flex items-center rounded-full hidden bg-[#212327]">`);
      _push(ssrRenderComponent(Magnify, {
        fillColor: "#5e5c5c",
        size: 25
      }, null, _parent));
      _push(`<input class="appearance-none w-full border-0 py-2 bg-[#212327] text-gray-100 placeholder-gray-500 leading-tight focus:ring-0" type="text" placeholder="Search Twitter"></div><div class="w-full mt-4 rounded-lg lg:block hidden bg-[#212327]"><div class="w-full p-4 text-white font-extrabold mb-6 text-[20px]">What&#39;s happening</div><div class="h-[80px] hover:bg-gray-800 cursor-pointer transition duration-200 ease-in-out"><div class="flex p-3 justify-between h-[80px] py-3"><div><div class="text-[14px] text-gray-400">Tennis Tournament LIVE</div><div class="w-full text-white font-extrabold mb-6 text-[17px]">Australian Open 2023</div></div><img class="rounded-xl"${ssrRenderAttr("src", unref(randImg2))} alt=""></div></div><div class="hover:bg-gray-800 cursor-pointer transition duration-200 ease-in-out"><div class="flex p-3 justify-between"><div><div class="text-[14px] text-gray-400">Trending in United Kingdom</div><div class="w-full text-white font-extrabold text-[17px]">Doomsday Clock</div><div class="text-[14px] text-gray-400">5,923 Tweets</div></div>`);
      _push(ssrRenderComponent(DotsHorizontal, { fillColor: "#5e5c5c" }, null, _parent));
      _push(`</div></div><div class="hover:bg-gray-800 cursor-pointer transition duration-200 ease-in-out"><div class="flex p-3 justify-between"><div><div class="text-[14px] text-gray-400">Sports · Trending</div><div class="w-full text-white font-extrabold text-[17px]">Poro</div><div class="text-[14px] text-gray-400">12,432 Tweets</div></div>`);
      _push(ssrRenderComponent(DotsHorizontal, { fillColor: "#5e5c5c" }, null, _parent));
      _push(`</div></div><div class="hover:bg-gray-800 cursor-pointer transition duration-200 ease-in-out"><div class="flex p-3 justify-between"><div><div class="text-[14px] text-gray-400">Politics · Trending</div><div class="w-full text-white font-extrabold text-[17px]">Sunak</div><div class="text-[14px] text-gray-400">98,745 Tweets</div></div>`);
      _push(ssrRenderComponent(DotsHorizontal, { fillColor: "#5e5c5c" }, null, _parent));
      _push(`</div></div><div class="hover:bg-gray-800 rounded-b-xl cursor-pointer transition duration-200 ease-in-out"><div class="text-blue-500 p-4">Show more</div></div></div></div></div></div>`);
      if (unref(createTweet)) {
        _push(`<div id="OverlaySection" class="fixed top-0 left-0 w-full h-screen bg-black md:bg-gray-400 md:bg-opacity-30 md:p-3"><div class="md:max-w-2xl md:mx-auto md:mt-10 md:rounded-xl bg-black"><div class="flex items-center justify-between md:inline-block p-2 m-2 rounded-full cursor-pointer"><div class="hover:bg-gray-800 inline-block p-2 rounded-full cursor-pointer">`);
        _push(ssrRenderComponent(Close, {
          fillColor: "#FFFFFF",
          size: 28,
          class: "md:block hidden"
        }, null, _parent));
        _push(ssrRenderComponent(ArrowLeft, {
          fillColor: "#FFFFFF",
          size: 28,
          class: "md:hidden block"
        }, null, _parent));
        _push(`</div><button${ssrIncludeBooleanAttr(!unref(tweet)) ? " disabled" : ""} class="${ssrRenderClass([
          unref(tweet) ? "bg-[#1c9cef] text-white" : "bg-[#124d77] text-gray-400",
          "md:hidden font-extrabold text-[16px] p-1.5 px-4 rounded-full cursor-pointer"
        ])}"> Tweet </button></div><div class="w-full flex"><div class="ml-3.5 mr-2"><img class="rounded-full" width="55"${ssrRenderAttr("src", unref(randImg1))}></div><div class="w-[calc(100%-100px)]"><div class="inline-block"><div class="flex items-center border border-gray-700 rounded-full"><span class="text-[#1C9CEF] p-0.5 pl-3.5 font-extrabold">Everyone</span>`);
        _push(ssrRenderComponent(ChevronDown, {
          class: "pr-2",
          fillColor: "#1C9CEF",
          size: 25
        }, null, _parent));
        _push(`</div></div><div><textarea${ssrRenderAttr("oninput", textareaInput)} cols="30" rows="4" placeholder="What&#39;s happening" class="w-full bg-black border-0 mt-2 focus:ring-0 text-white text-[19px] font-extrabold min-h-[120px]">${ssrInterpolate(unref(tweet))}</textarea></div><div class="w-full">`);
        if (unref(uploadType) === "mp4") {
          _push(`<video controls${ssrRenderAttr("src", unref(showUpload))} class="rounded-xl overflow-auto"></video>`);
        } else {
          _push(`<img${ssrRenderAttr("src", unref(showUpload))} class="rounded-xl min-w-full">`);
        }
        _push(`</div><div class="flex py-2 items-center text-[#1C9CEF] font-extrabold">`);
        _push(ssrRenderComponent(Earth, {
          class: "pr-2",
          fillColor: "#1C9CEF",
          size: 20
        }, null, _parent));
        _push(` Everyone can reply </div><div class="border-b border-b-gray-700"></div><div class="flex items-center justify-between py-2"><div class="flex items-center"><div class="hover-bg-gray-800 inline-block p-2 rounded-full cursor-pointer"><label for="fileUpload" class="cursor-pointer">`);
        _push(ssrRenderComponent(ImageOutline, {
          fillColor: "#1C9CEF",
          size: 25
        }, null, _parent));
        _push(`</label><input type="file" id="fileUpload" class="hidden"></div><div class="hover-bg-gray-800 inline-block p-2 rounded-full cursor-pointer">`);
        _push(ssrRenderComponent(FileGifBox, {
          fillColor: "#1C9CEF",
          size: 25
        }, null, _parent));
        _push(`</div><div class="hover-bg-gray-800 inline-block p-2 rounded-full cursor-pointer">`);
        _push(ssrRenderComponent(Emoticon, {
          fillColor: "#1C9CEF",
          size: 25
        }, null, _parent));
        _push(`</div></div><button${ssrIncludeBooleanAttr(!unref(tweet)) ? " disabled" : ""} class="${ssrRenderClass([
          unref(tweet) ? "bg-[#1c9cef] text-white" : "bg-[#124d77] text-gray-400",
          "hidden md:block font-extrabold text-[16px] p-1.5 px-4 rounded-full cursor-pointer"
        ])}"> Tweet </button></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/TwitterLayout.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  name: "HeartOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon heart-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/HeartOutline.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const HeartOutline = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {
  name: "ChartBarIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon chart-bar-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/ChartBar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ChartBar = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {
  name: "MessageOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon message-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M20 16H5.2L4 17.2V4H20V16Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/MessageOutline.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const MessageOutline = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {
  name: "SyncIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon sync-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M12,18A6,6 0 0,1 6,12C6,11 6.25,10.03 6.7,9.2L5.24,7.74C4.46,8.97 4,10.43 4,12A8,8 0 0,0 12,20V23L16,19L12,15M12,4V1L8,5L12,9V6A6,6 0 0,1 18,12C18,13 17.75,13.97 17.3,14.8L18.76,16.26C19.54,15.03 20,13.57 20,12A8,8 0 0,0 12,4Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/Sync.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Sync = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {
  name: "TrashCanOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    "aria-hidden": !$props.title,
    "aria-label": $props.title,
    class: "material-design-icon trash-can-outline-icon",
    role: "img"
  }, _attrs))}><svg${ssrRenderAttr("fill", $props.fillColor)} class="material-design-icon__svg"${ssrRenderAttr("width", $props.size)}${ssrRenderAttr("height", $props.size)} viewBox="0 0 24 24"><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z">`);
  if ($props.title) {
    _push(`<title>${ssrInterpolate($props.title)}</title>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</path></svg></span>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/vue-material-design-icons/TrashCanOutline.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TrashCanOutline = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Tweet",
  __ssrInlineRender: true,
  props: { tweet: Object },
  setup(__props) {
    let openOptions = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="min-w-[60px]"><img class="rounded-full m-2 mt-3" width="50"${ssrRenderAttr("src", __props.tweet.image)}></div><div class="p-2 w-full"><div class="font-extrabold flex items-center justify-between mt-0.5 mb-1.5"><div class="flex items-center"><div>${ssrInterpolate(__props.tweet.name)}</div><span class="font-[300] text-[15px] text-gray-500 pl-2">${ssrInterpolate(__props.tweet.handle)}</span></div><div class="hover:bg-gray-800 rounded-full cursor-pointer relative"><button type="button" class="block p-2">`);
      _push(ssrRenderComponent(DotsHorizontal, {
        onClick: ($event) => isRef(openOptions) ? openOptions.value = !unref(openOptions) : openOptions = !unref(openOptions)
      }, null, _parent));
      _push(`</button>`);
      if (unref(openOptions)) {
        _push(`<div class="absolute mt-1 right-0 w-[300px] bg-black border border-gray-700 rounded-lg shadow-lg"><ul class="p-3">`);
        _push(ssrRenderComponent(unref(Link), {
          as: "button",
          method: "delete",
          href: _ctx.route("tweets.destroy", { id: __props.tweet.id }),
          class: "flex items-center cursor-pointer"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(TrashCanOutline, {
                class: "pr-3",
                fillColor: "#DC2626",
                size: 18
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-red-600 font-extrabold"${_scopeId}>Delete</span>`);
            } else {
              return [
                createVNode(TrashCanOutline, {
                  class: "pr-3",
                  fillColor: "#DC2626",
                  size: 18
                }),
                createVNode("span", { class: "text-red-600 font-extrabold" }, "Delete")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="pb-3">${ssrInterpolate(__props.tweet.tweet)}</div>`);
      if (__props.tweet.file) {
        _push(`<div>`);
        if (!__props.tweet.is_video) {
          _push(`<div class="rounded-xl"><img${ssrRenderAttr("src", __props.tweet.file)} class="mt-2 object-fill rounded-xl w-full"></div>`);
        } else {
          _push(`<div><video class="rounded-xl"${ssrRenderAttr("src", __props.tweet.file)} controls></video></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center justify-between mt-4 w-4/5"><div class="flex">`);
      _push(ssrRenderComponent(MessageOutline, {
        fillColor: "#5e5c5c",
        size: 18
      }, null, _parent));
      _push(`<span class="text-xs font-extrabold text-[#5e5c5c] ml-3">${ssrInterpolate(__props.tweet.comments)}</span></div><div class="flex">`);
      _push(ssrRenderComponent(Sync, {
        fillColor: "#5e5c5c",
        size: 18
      }, null, _parent));
      _push(`<span class="text-xs font-extrabold text-[#5e5c5c] ml-3">${ssrInterpolate(__props.tweet.retweets)}</span></div><div class="flex">`);
      _push(ssrRenderComponent(HeartOutline, {
        fillColor: "#5e5c5c",
        size: 18
      }, null, _parent));
      _push(`<span class="text-xs font-extrabold text-[#5e5c5c] ml-3">${ssrInterpolate(__props.tweet.likes)}</span></div><div class="flex">`);
      _push(ssrRenderComponent(ChartBar, {
        fillColor: "#5e5c5c",
        size: 18
      }, null, _parent));
      _push(`<span class="text-xs font-extrabold text-[#5e5c5c] ml-3">${ssrInterpolate(__props.tweet.analytics)}</span></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Tweet.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: { tweets: Array },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Welcome" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.tweets, (tweet) => {
              _push2(`<div class="flex"${_scopeId}><div class="text-white"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$1, { tweet }, null, _parent2, _scopeId));
              _push2(`</div><div class="border-5 border-b-gray-800 mt-2"${_scopeId}></div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.tweets, (tweet) => {
                return openBlock(), createBlock("div", {
                  class: "flex",
                  key: tweet
                }, [
                  createVNode("div", { class: "text-white" }, [
                    createVNode(_sfc_main$1, { tweet }, null, 8, ["tweet"])
                  ]),
                  createVNode("div", { class: "border-5 border-b-gray-800 mt-2" })
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
