import { defineComponent as l, ref as _, openBlock as a, createElementBlock as d, renderSlot as i, createTextVNode as p, Fragment as y, createBlock as $, Teleport as k, withDirectives as C, createElementVNode as o, vShow as S, createVNode as b, withCtx as g, pushScopeId as M, popScopeId as x, toDisplayString as f, Transition as T, normalizeClass as V } from "vue";
const w = /* @__PURE__ */ l({
  __name: "Button",
  emits: ["onClick"],
  setup(s, { emit: e }) {
    const t = _(!1), n = e, u = () => {
      t.value = !t.value, n("onClick");
    };
    return (v, m) => (a(), d("button", {
      class: "btn",
      onClick: u
    }, [
      i(v.$slots, "default", {}, () => [
        p("按钮")
      ], !0)
    ]));
  }
}), r = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [n, u] of e)
    t[n] = u;
  return t;
}, B = /* @__PURE__ */ r(w, [["__scopeId", "data-v-d1e50c41"]]), F = ["value"], P = /* @__PURE__ */ l({
  __name: "Input",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(s) {
    return (e, t) => (a(), d("input", {
      class: "input",
      type: "text",
      value: s.modelValue,
      onInput: t[0] || (t[0] = (n) => e.$emit("update:modelValue", n.target.value))
    }, null, 40, F));
  }
}), Z = /* @__PURE__ */ r(P, [["__scopeId", "data-v-ae555240"]]), N = (s) => (M("data-v-25d55598"), s = s(), x(), s), O = { class: "modal" }, U = /* @__PURE__ */ N(() => /* @__PURE__ */ o("div", { class: "content" }, "这里是弹出的内容", -1)), q = /* @__PURE__ */ l({
  __name: "Modal",
  setup(s) {
    const e = _(!1), t = () => e.value = !e.value;
    return (n, u) => (a(), d(y, null, [
      (a(), $(k, { to: "body" }, [
        C(o("div", O, [
          o("div", { class: "modal-box" }, [
            o("div", { class: "title" }, [
              p("标题 "),
              o("span", {
                class: "close",
                onClick: t
              }, "关闭")
            ]),
            U,
            o("div", { class: "footer" }, [
              o("button", { onClick: t }, "确定"),
              o("button", { onClick: t }, "取消")
            ])
          ])
        ], 512), [
          [S, e.value]
        ])
      ])),
      b(B, { onOnClick: t }, {
        default: g(() => [
          p("点击弹出")
        ]),
        _: 1
      })
    ], 64));
  }
}), tt = /* @__PURE__ */ r(q, [["__scopeId", "data-v-25d55598"]]), D = { class: "title" }, E = { class: "content" }, j = /* @__PURE__ */ l({
  __name: "MySubTitle",
  props: {
    title: {
      type: String,
      required: !0,
      default: "标题1"
    }
  },
  setup(s) {
    const e = s;
    return (t, n) => (a(), d("div", null, [
      o("div", D, f(e.title), 1),
      o("div", E, [
        i(t.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), et = /* @__PURE__ */ r(j, [["__scopeId", "data-v-e4294108"]]), z = { class: "title" }, A = { class: "account" }, G = { class: "name" }, H = /* @__PURE__ */ l({
  __name: "MyTitle",
  props: {
    title: {
      type: String,
      required: !0,
      default: "标题1"
    },
    userInfo: {
      type: Object,
      // 对象类型的默认值，必须是一个函数返回值
      default(s) {
        return { name: "张三丰", age: 120, address: "武当山" };
      }
    }
  },
  setup(s) {
    const e = s;
    return (t, n) => (a(), d("div", z, [
      p(f(e.title) + " ", 1),
      o("span", A, [
        p("当前账号："),
        o("span", G, f(e.userInfo.name), 1)
      ])
    ]));
  }
}), st = /* @__PURE__ */ r(H, [["__scopeId", "data-v-bac5407a"]]), J = {
  __name: "MyTransition",
  props: {
    mode: {
      type: String
    }
  },
  setup(s) {
    const e = s;
    return (t, n) => (a(), $(T, {
      name: "fead",
      mode: e.mode
    }, {
      default: g(() => [
        i(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["mode"]));
  }
}, ot = /* @__PURE__ */ r(J, [["__scopeId", "data-v-faa97974"]]), K = { class: "page" }, L = { class: "header" }, Q = { class: "content" }, R = /* @__PURE__ */ l({
  __name: "Page",
  setup(s) {
    return (e, t) => (a(), d("div", K, [
      o("div", L, [
        i(e.$slots, "header", {}, void 0, !0)
      ]),
      o("div", Q, [
        o("div", null, [
          i(e.$slots, "left", {}, void 0, !0)
        ]),
        o("div", null, [
          i(e.$slots, "right", {}, void 0, !0)
        ])
      ])
    ]));
  }
}), nt = /* @__PURE__ */ r(R, [["__scopeId", "data-v-20f740b5"]]), at = /* @__PURE__ */ l({
  __name: "Provider",
  setup(s) {
    const e = _("hello"), t = _("world");
    return (n, u) => i(n.$slots, "default", {
      value: e.value,
      text: t.value
    });
  }
}), W = ["value"], X = /* @__PURE__ */ l({
  __name: "UpcaseInput",
  props: {
    title: String,
    // titleModifiers 如果有参数，修饰符也同步修改，无参数时默认为modelModifiers
    titleModifiers: {
      default: () => ({})
    }
  },
  emits: ["update:title"],
  setup(s, { emit: e }) {
    const t = _(!1), n = s, u = e, v = (h) => {
      let c = h.target.value;
      n.titleModifiers.uppercase && (c = c == null ? void 0 : c.toUpperCase()), u("update:title", c);
    }, m = () => {
      t.value = !t.value;
    };
    return (h, c) => (a(), d("input", {
      class: V(["input", { focus: t.value }]),
      onFocus: m,
      onBlur: m,
      value: s.title,
      onInput: c[0] || (c[0] = (I) => v(I))
    }, null, 42, W));
  }
}), ct = /* @__PURE__ */ r(X, [["__scopeId", "data-v-3c4677f7"]]);
export {
  B as Button,
  Z as Input,
  tt as Modal,
  et as MySubTitle,
  st as MyTitle,
  ot as MyTransition,
  nt as Page,
  at as Provider,
  ct as UpcaseInput
};
