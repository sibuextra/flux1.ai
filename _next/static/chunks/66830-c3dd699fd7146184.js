"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [66830], {
        32489: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            let r = (0, n(43664).Z)("X", [
                ["path", {
                    d: "M18 6 6 18",
                    key: "1bl5f8"
                }],
                ["path", {
                    d: "m6 6 12 12",
                    key: "d8bk6v"
                }]
            ])
        },
        88656: function(e, t, n) {
            let r;
            n.d(t, {
                x8: function() {
                    return e_
                },
                VY: function() {
                    return ej
                },
                dk: function() {
                    return eM
                },
                aV: function() {
                    return eS
                },
                h_: function() {
                    return eL
                },
                fC: function() {
                    return eT
                },
                Dx: function() {
                    return eF
                },
                xz: function() {
                    return eI
                }
            });
            var o, u = n(2265),
                i = n.t(u, 2);

            function l(e, t, {
                checkForDefaultPrevented: n = !0
            } = {}) {
                return function(r) {
                    if (e ? .(r), !1 === n || !r.defaultPrevented) return t ? .(r)
                }
            }

            function a(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }

            function s(...e) {
                return u.useCallback(function(...e) {
                    return t => {
                        let n = !1,
                            r = e.map(e => {
                                let r = a(e, t);
                                return n || "function" != typeof r || (n = !0), r
                            });
                        if (n) return () => {
                            for (let t = 0; t < r.length; t++) {
                                let n = r[t];
                                "function" == typeof n ? n() : a(e[t], null)
                            }
                        }
                    }
                }(...e), e)
            }
            var c = n(57437),
                d = globalThis ? .document ? u.useLayoutEffect : () => {},
                f = i[" useId ".trim().toString()] || (() => void 0),
                v = 0;

            function p(e) {
                let [t, n] = u.useState(f());
                return d(() => {
                    e || n(e => e ? ? String(v++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
            var m = i[" useInsertionEffect ".trim().toString()] || d;

            function y(e, t, {
                checkForDefaultPrevented: n = !0
            } = {}) {
                return function(r) {
                    if (e ? .(r), !1 === n || !r.defaultPrevented) return t ? .(r)
                }
            }
            Symbol("RADIX:SYNC_STATE");
            var g = n(54887),
                E = n(98482),
                b = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
                    let n = (0, E.Z8)(`Primitive.${t}`),
                        r = u.forwardRef((e, r) => {
                            let {
                                asChild: o,
                                ...u
                            } = e, i = o ? n : t;
                            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, c.jsx)(i, { ...u,
                                ref: r
                            })
                        });
                    return r.displayName = `Primitive.${t}`, { ...e,
                        [t]: r
                    }
                }, {});

            function h(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }

            function w(...e) {
                return u.useCallback(function(...e) {
                    return t => {
                        let n = !1,
                            r = e.map(e => {
                                let r = h(e, t);
                                return n || "function" != typeof r || (n = !0), r
                            });
                        if (n) return () => {
                            for (let t = 0; t < r.length; t++) {
                                let n = r[t];
                                "function" == typeof n ? n() : h(e[t], null)
                            }
                        }
                    }
                }(...e), e)
            }

            function N(e) {
                let t = u.useRef(e);
                return u.useEffect(() => {
                    t.current = e
                }), u.useMemo(() => (...e) => t.current ? .(...e), [])
            }
            var x = n(52558),
                C = "dismissableLayer.update",
                D = u.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                R = u.forwardRef((e, t) => {
                    var n, r;
                    let {
                        disableOutsidePointerEvents: i = !1,
                        onEscapeKeyDown: l,
                        onPointerDownOutside: a,
                        onFocusOutside: s,
                        onInteractOutside: d,
                        onDismiss: f,
                        ...v
                    } = e, p = u.useContext(D), [m, g] = u.useState(null), E = null !== (r = null == m ? void 0 : m.ownerDocument) && void 0 !== r ? r : null === (n = globalThis) || void 0 === n ? void 0 : n.document, [, h] = u.useState({}), R = w(t, e => g(e)), T = Array.from(p.layers), [I] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1), L = T.indexOf(I), S = m ? T.indexOf(m) : -1, j = p.layersWithOutsidePointerEventsDisabled.size > 0, F = S >= L, M = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                            r = N(e),
                            o = u.useRef(!1),
                            i = u.useRef(() => {});
                        return u.useEffect(() => {
                            let e = e => {
                                    if (e.target && !o.current) {
                                        let t = function() {
                                                O("dismissableLayer.pointerDownOutside", r, o, {
                                                    discrete: !0
                                                })
                                            },
                                            o = {
                                                originalEvent: e
                                            };
                                        "touch" === e.pointerType ? (n.removeEventListener("click", i.current), i.current = t, n.addEventListener("click", i.current, {
                                            once: !0
                                        })) : t()
                                    } else n.removeEventListener("click", i.current);
                                    o.current = !1
                                },
                                t = window.setTimeout(() => {
                                    n.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(t), n.removeEventListener("pointerdown", e), n.removeEventListener("click", i.current)
                            }
                        }, [n, r]), {
                            onPointerDownCapture: () => o.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...p.branches].some(e => e.contains(t));
                        !F || n || (null == a || a(e), null == d || d(e), e.defaultPrevented || null == f || f())
                    }, E), _ = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                            r = N(e),
                            o = u.useRef(!1);
                        return u.useEffect(() => {
                            let e = e => {
                                e.target && !o.current && O("dismissableLayer.focusOutside", r, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e)
                        }, [n, r]), {
                            onFocusCapture: () => o.current = !0,
                            onBlurCapture: () => o.current = !1
                        }
                    }(e => {
                        let t = e.target;
                        [...p.branches].some(e => e.contains(t)) || (null == s || s(e), null == d || d(e), e.defaultPrevented || null == f || f())
                    }, E);
                    return (0, x.e)(e => {
                        S !== p.layers.size - 1 || (null == l || l(e), !e.defaultPrevented && f && (e.preventDefault(), f()))
                    }, E), u.useEffect(() => {
                        if (m) return i && (0 === p.layersWithOutsidePointerEventsDisabled.size && (o = E.body.style.pointerEvents, E.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(m)), p.layers.add(m), P(), () => {
                            i && 1 === p.layersWithOutsidePointerEventsDisabled.size && (E.body.style.pointerEvents = o)
                        }
                    }, [m, E, i, p]), u.useEffect(() => () => {
                        m && (p.layers.delete(m), p.layersWithOutsidePointerEventsDisabled.delete(m), P())
                    }, [m, p]), u.useEffect(() => {
                        let e = () => h({});
                        return document.addEventListener(C, e), () => document.removeEventListener(C, e)
                    }, []), (0, c.jsx)(b.div, { ...v,
                        ref: R,
                        style: {
                            pointerEvents: j ? F ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: y(e.onFocusCapture, _.onFocusCapture),
                        onBlurCapture: y(e.onBlurCapture, _.onBlurCapture),
                        onPointerDownCapture: y(e.onPointerDownCapture, M.onPointerDownCapture)
                    })
                });

            function P() {
                let e = new CustomEvent(C);
                document.dispatchEvent(e)
            }

            function O(e, t, n, r) {
                let {
                    discrete: o
                } = r, u = n.originalEvent.target, i = new CustomEvent(e, {
                    bubbles: !1,
                    cancelable: !0,
                    detail: n
                });
                (t && u.addEventListener(e, t, {
                    once: !0
                }), o) ? u && g.flushSync(() => u.dispatchEvent(i)): u.dispatchEvent(i)
            }

            function T(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }
            R.displayName = "DismissableLayer", u.forwardRef((e, t) => {
                let n = u.useContext(D),
                    r = u.useRef(null),
                    o = w(t, r);
                return u.useEffect(() => {
                    let e = r.current;
                    if (e) return n.branches.add(e), () => {
                        n.branches.delete(e)
                    }
                }, [n.branches]), (0, c.jsx)(b.div, { ...e,
                    ref: o
                })
            }).displayName = "DismissableLayerBranch";
            var I = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
                let n = (0, E.Z8)(`Primitive.${t}`),
                    r = u.forwardRef((e, r) => {
                        let {
                            asChild: o,
                            ...u
                        } = e, i = o ? n : t;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, c.jsx)(i, { ...u,
                            ref: r
                        })
                    });
                return r.displayName = `Primitive.${t}`, { ...e,
                    [t]: r
                }
            }, {});

            function L(e) {
                let t = u.useRef(e);
                return u.useEffect(() => {
                    t.current = e
                }), u.useMemo(() => (...e) => t.current ? .(...e), [])
            }
            var S = "focusScope.autoFocusOnMount",
                j = "focusScope.autoFocusOnUnmount",
                F = {
                    bubbles: !1,
                    cancelable: !0
                },
                M = u.forwardRef((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: r = !1,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: i,
                        ...l
                    } = e, [a, s] = u.useState(null), d = L(o), f = L(i), v = u.useRef(null), p = function(...e) {
                        return u.useCallback(function(...e) {
                            return t => {
                                let n = !1,
                                    r = e.map(e => {
                                        let r = T(e, t);
                                        return n || "function" != typeof r || (n = !0), r
                                    });
                                if (n) return () => {
                                    for (let t = 0; t < r.length; t++) {
                                        let n = r[t];
                                        "function" == typeof n ? n() : T(e[t], null)
                                    }
                                }
                            }
                        }(...e), e)
                    }(t, e => s(e)), m = u.useRef({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    u.useEffect(() => {
                        if (r) {
                            let e = function(e) {
                                    if (m.paused || !a) return;
                                    let t = e.target;
                                    a.contains(t) ? v.current = t : A(v.current, {
                                        select: !0
                                    })
                                },
                                t = function(e) {
                                    if (m.paused || !a) return;
                                    let t = e.relatedTarget;
                                    null === t || a.contains(t) || A(v.current, {
                                        select: !0
                                    })
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let n = new MutationObserver(function(e) {
                                if (document.activeElement === document.body)
                                    for (let t of e) t.removedNodes.length > 0 && A(a)
                            });
                            return a && n.observe(a, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
                            }
                        }
                    }, [r, a, m.paused]), u.useEffect(() => {
                        if (a) {
                            $.add(m);
                            let e = document.activeElement;
                            if (!a.contains(e)) {
                                let t = new CustomEvent(S, F);
                                a.addEventListener(S, d), a.dispatchEvent(t), t.defaultPrevented || (function(e) {
                                    let {
                                        select: t = !1
                                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = document.activeElement;
                                    for (let r of e)
                                        if (A(r, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }(_(a).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && A(a))
                            }
                            return () => {
                                a.removeEventListener(S, d), setTimeout(() => {
                                    let t = new CustomEvent(j, F);
                                    a.addEventListener(j, f), a.dispatchEvent(t), t.defaultPrevented || A(null != e ? e : document.body, {
                                        select: !0
                                    }), a.removeEventListener(j, f), $.remove(m)
                                }, 0)
                            }
                        }
                    }, [a, d, f, m]);
                    let y = u.useCallback(e => {
                        if (!n && !r || m.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [r, u] = function(e) {
                                    let t = _(e);
                                    return [k(t, e), k(t.reverse(), e)]
                                }(t);
                            r && u ? e.shiftKey || o !== u ? e.shiftKey && o === r && (e.preventDefault(), n && A(u, {
                                select: !0
                            })) : (e.preventDefault(), n && A(r, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }, [n, r, m.paused]);
                    return (0, c.jsx)(I.div, {
                        tabIndex: -1,
                        ...l,
                        ref: p,
                        onKeyDown: y
                    })
                });

            function _(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; n.nextNode();) t.push(n.currentNode);
                return t
            }

            function k(e, t) {
                for (let n of e)
                    if (! function(e, t) {
                            let {
                                upTo: n
                            } = t;
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === n || e !== n);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(n, {
                            upTo: t
                        })) return n
            }

            function A(e) {
                let {
                    select: t = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e && e.focus) {
                    var n;
                    let r = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
                }
            }
            M.displayName = "FocusScope";
            var $ = (r = [], {
                add(e) {
                    let t = r[0];
                    e !== t && (null == t || t.pause()), (r = W(r, e)).unshift(e)
                },
                remove(e) {
                    var t;
                    null === (t = (r = W(r, e))[0]) || void 0 === t || t.resume()
                }
            });

            function W(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n
            }
            var U = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
                    let n = (0, E.Z8)(`Primitive.${t}`),
                        r = u.forwardRef((e, r) => {
                            let {
                                asChild: o,
                                ...u
                            } = e, i = o ? n : t;
                            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, c.jsx)(i, { ...u,
                                ref: r
                            })
                        });
                    return r.displayName = `Primitive.${t}`, { ...e,
                        [t]: r
                    }
                }, {}),
                z = globalThis ? .document ? u.useLayoutEffect : () => {},
                K = u.forwardRef((e, t) => {
                    var n, r;
                    let {
                        container: o,
                        ...i
                    } = e, [l, a] = u.useState(!1);
                    z(() => a(!0), []);
                    let s = o || l && (null === (r = globalThis) || void 0 === r ? void 0 : null === (n = r.document) || void 0 === n ? void 0 : n.body);
                    return s ? g.createPortal((0, c.jsx)(U.div, { ...i,
                        ref: t
                    }), s) : null
                });
            K.displayName = "Portal";
            var Z = n(54076),
                B = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
                    let n = (0, E.Z8)(`Primitive.${t}`),
                        r = u.forwardRef((e, r) => {
                            let {
                                asChild: o,
                                ...u
                            } = e, i = o ? n : t;
                            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, c.jsx)(i, { ...u,
                                ref: r
                            })
                        });
                    return r.displayName = `Primitive.${t}`, { ...e,
                        [t]: r
                    }
                }, {}),
                V = 0;

            function q() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
            }
            var H = n(87922),
                X = n(5478),
                Y = "Dialog",
                [G, J] = function(e, t = []) {
                    let n = [],
                        r = () => {
                            let t = n.map(e => u.createContext(e));
                            return function(n) {
                                let r = n ? .[e] || t;
                                return u.useMemo(() => ({
                                    [`__scope${e}`]: { ...n,
                                        [e]: r
                                    }
                                }), [n, r])
                            }
                        };
                    return r.scopeName = e, [function(t, r) {
                        let o = u.createContext(r),
                            i = n.length;
                        n = [...n, r];
                        let l = t => {
                            let {
                                scope: n,
                                children: r,
                                ...l
                            } = t, a = n ? .[e] ? .[i] || o, s = u.useMemo(() => l, Object.values(l));
                            return (0, c.jsx)(a.Provider, {
                                value: s,
                                children: r
                            })
                        };
                        return l.displayName = t + "Provider", [l, function(n, l) {
                            let a = l ? .[e] ? .[i] || o,
                                s = u.useContext(a);
                            if (s) return s;
                            if (void 0 !== r) return r;
                            throw Error(`\`${n}\` must be used within \`${t}\``)
                        }]
                    }, function(...e) {
                        let t = e[0];
                        if (1 === e.length) return t;
                        let n = () => {
                            let n = e.map(e => ({
                                useScope: e(),
                                scopeName: e.scopeName
                            }));
                            return function(e) {
                                let r = n.reduce((t, {
                                    useScope: n,
                                    scopeName: r
                                }) => {
                                    let o = n(e)[`__scope${r}`];
                                    return { ...t,
                                        ...o
                                    }
                                }, {});
                                return u.useMemo(() => ({
                                    [`__scope${t.scopeName}`]: r
                                }), [r])
                            }
                        };
                        return n.scopeName = t.scopeName, n
                    }(r, ...t)]
                }(Y),
                [Q, ee] = G(Y),
                et = e => {
                    let {
                        __scopeDialog: t,
                        children: n,
                        open: r,
                        defaultOpen: o,
                        onOpenChange: i,
                        modal: l = !0
                    } = e, a = u.useRef(null), s = u.useRef(null), [d, f] = function({
                        prop: e,
                        defaultProp: t,
                        onChange: n = () => {},
                        caller: r
                    }) {
                        let [o, i, l] = function({
                            defaultProp: e,
                            onChange: t
                        }) {
                            let [n, r] = u.useState(e), o = u.useRef(n), i = u.useRef(t);
                            return m(() => {
                                i.current = t
                            }, [t]), u.useEffect(() => {
                                o.current !== n && (i.current ? .(n), o.current = n)
                            }, [n, o]), [n, r, i]
                        }({
                            defaultProp: t,
                            onChange: n
                        }), a = void 0 !== e, s = a ? e : o; {
                            let t = u.useRef(void 0 !== e);
                            u.useEffect(() => {
                                let e = t.current;
                                if (e !== a) {
                                    let t = a ? "controlled" : "uncontrolled";
                                    console.warn(`${r} is changing from ${e?"controlled":"uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
                                }
                                t.current = a
                            }, [a, r])
                        }
                        return [s, u.useCallback(t => {
                            if (a) {
                                let n = "function" == typeof t ? t(e) : t;
                                n !== e && l.current ? .(n)
                            } else i(t)
                        }, [a, e, i, l])]
                    }({
                        prop: r,
                        defaultProp: null != o && o,
                        onChange: i,
                        caller: Y
                    });
                    return (0, c.jsx)(Q, {
                        scope: t,
                        triggerRef: a,
                        contentRef: s,
                        contentId: p(),
                        titleId: p(),
                        descriptionId: p(),
                        open: d,
                        onOpenChange: f,
                        onOpenToggle: u.useCallback(() => f(e => !e), [f]),
                        modal: l,
                        children: n
                    })
                };
            et.displayName = Y;
            var en = "DialogTrigger",
                er = u.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = ee(en, n), u = s(t, o.triggerRef);
                    return (0, c.jsx)(B.button, {
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": o.open,
                        "aria-controls": o.contentId,
                        "data-state": ex(o.open),
                        ...r,
                        ref: u,
                        onClick: l(e.onClick, o.onOpenToggle)
                    })
                });
            er.displayName = en;
            var eo = "DialogPortal",
                [eu, ei] = G(eo, {
                    forceMount: void 0
                }),
                el = e => {
                    let {
                        __scopeDialog: t,
                        forceMount: n,
                        children: r,
                        container: o
                    } = e, i = ee(eo, t);
                    return (0, c.jsx)(eu, {
                        scope: t,
                        forceMount: n,
                        children: u.Children.map(r, e => (0, c.jsx)(Z.z, {
                            present: n || i.open,
                            children: (0, c.jsx)(K, {
                                asChild: !0,
                                container: o,
                                children: e
                            })
                        }))
                    })
                };
            el.displayName = eo;
            var ea = "DialogOverlay",
                es = u.forwardRef((e, t) => {
                    let n = ei(ea, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        u = ee(ea, e.__scopeDialog);
                    return u.modal ? (0, c.jsx)(Z.z, {
                        present: r || u.open,
                        children: (0, c.jsx)(ed, { ...o,
                            ref: t
                        })
                    }) : null
                });
            es.displayName = ea;
            var ec = (0, E.Z8)("DialogOverlay.RemoveScroll"),
                ed = u.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = ee(ea, n);
                    return (0, c.jsx)(H.Z, {
                        as: ec,
                        allowPinchZoom: !0,
                        shards: [o.contentRef],
                        children: (0, c.jsx)(B.div, {
                            "data-state": ex(o.open),
                            ...r,
                            ref: t,
                            style: {
                                pointerEvents: "auto",
                                ...r.style
                            }
                        })
                    })
                }),
                ef = "DialogContent",
                ev = u.forwardRef((e, t) => {
                    let n = ei(ef, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        u = ee(ef, e.__scopeDialog);
                    return (0, c.jsx)(Z.z, {
                        present: r || u.open,
                        children: u.modal ? (0, c.jsx)(ep, { ...o,
                            ref: t
                        }) : (0, c.jsx)(em, { ...o,
                            ref: t
                        })
                    })
                });
            ev.displayName = ef;
            var ep = u.forwardRef((e, t) => {
                    let n = ee(ef, e.__scopeDialog),
                        r = u.useRef(null),
                        o = s(t, n.contentRef, r);
                    return u.useEffect(() => {
                        let e = r.current;
                        if (e) return (0, X.Ry)(e)
                    }, []), (0, c.jsx)(ey, { ...e,
                        ref: o,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: l(e.onCloseAutoFocus, e => {
                            var t;
                            e.preventDefault(), null === (t = n.triggerRef.current) || void 0 === t || t.focus()
                        }),
                        onPointerDownOutside: l(e.onPointerDownOutside, e => {
                            let t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey;
                            (2 === t.button || n) && e.preventDefault()
                        }),
                        onFocusOutside: l(e.onFocusOutside, e => e.preventDefault())
                    })
                }),
                em = u.forwardRef((e, t) => {
                    let n = ee(ef, e.__scopeDialog),
                        r = u.useRef(!1),
                        o = u.useRef(!1);
                    return (0, c.jsx)(ey, { ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            var u, i;
                            null === (u = e.onCloseAutoFocus) || void 0 === u || u.call(e, t), t.defaultPrevented || (r.current || null === (i = n.triggerRef.current) || void 0 === i || i.focus(), t.preventDefault()), r.current = !1, o.current = !1
                        },
                        onInteractOutside: t => {
                            var u, i;
                            null === (u = e.onInteractOutside) || void 0 === u || u.call(e, t), t.defaultPrevented || (r.current = !0, "pointerdown" !== t.detail.originalEvent.type || (o.current = !0));
                            let l = t.target;
                            (null === (i = n.triggerRef.current) || void 0 === i ? void 0 : i.contains(l)) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
                        }
                    })
                }),
                ey = u.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        trapFocus: r,
                        onOpenAutoFocus: o,
                        onCloseAutoFocus: i,
                        ...l
                    } = e, a = ee(ef, n), d = u.useRef(null), f = s(t, d);
                    return u.useEffect(() => {
                        var e, t;
                        let n = document.querySelectorAll("[data-radix-focus-guard]");
                        return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : q()), document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : q()), V++, () => {
                            1 === V && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), V--
                        }
                    }, []), (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsx)(M, {
                            asChild: !0,
                            loop: !0,
                            trapped: r,
                            onMountAutoFocus: o,
                            onUnmountAutoFocus: i,
                            children: (0, c.jsx)(R, {
                                role: "dialog",
                                id: a.contentId,
                                "aria-describedby": a.descriptionId,
                                "aria-labelledby": a.titleId,
                                "data-state": ex(a.open),
                                ...l,
                                ref: f,
                                onDismiss: () => a.onOpenChange(!1)
                            })
                        }), (0, c.jsxs)(c.Fragment, {
                            children: [(0, c.jsx)(eP, {
                                titleId: a.titleId
                            }), (0, c.jsx)(eO, {
                                contentRef: d,
                                descriptionId: a.descriptionId
                            })]
                        })]
                    })
                }),
                eg = "DialogTitle",
                eE = u.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = ee(eg, n);
                    return (0, c.jsx)(B.h2, {
                        id: o.titleId,
                        ...r,
                        ref: t
                    })
                });
            eE.displayName = eg;
            var eb = "DialogDescription",
                eh = u.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = ee(eb, n);
                    return (0, c.jsx)(B.p, {
                        id: o.descriptionId,
                        ...r,
                        ref: t
                    })
                });
            eh.displayName = eb;
            var ew = "DialogClose",
                eN = u.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = ee(ew, n);
                    return (0, c.jsx)(B.button, {
                        type: "button",
                        ...r,
                        ref: t,
                        onClick: l(e.onClick, () => o.onOpenChange(!1))
                    })
                });

            function ex(e) {
                return e ? "open" : "closed"
            }
            eN.displayName = ew;
            var eC = "DialogTitleWarning",
                [eD, eR] = function(e, t) {
                    let n = u.createContext(t),
                        r = e => {
                            let {
                                children: t,
                                ...r
                            } = e, o = u.useMemo(() => r, Object.values(r));
                            return (0, c.jsx)(n.Provider, {
                                value: o,
                                children: t
                            })
                        };
                    return r.displayName = e + "Provider", [r, function(r) {
                        let o = u.useContext(n);
                        if (o) return o;
                        if (void 0 !== t) return t;
                        throw Error(`\`${r}\` must be used within \`${e}\``)
                    }]
                }(eC, {
                    contentName: ef,
                    titleName: eg,
                    docsSlug: "dialog"
                }),
                eP = e => {
                    let {
                        titleId: t
                    } = e, n = eR(eC), r = "`".concat(n.contentName, "` requires a `").concat(n.titleName, "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName, "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);
                    return u.useEffect(() => {
                        t && !document.getElementById(t) && console.error(r)
                    }, [r, t]), null
                },
                eO = e => {
                    let {
                        contentRef: t,
                        descriptionId: n
                    } = e, r = eR("DialogDescriptionWarning"), o = "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName, "}.");
                    return u.useEffect(() => {
                        var e;
                        let r = null === (e = t.current) || void 0 === e ? void 0 : e.getAttribute("aria-describedby");
                        n && r && !document.getElementById(n) && console.warn(o)
                    }, [o, t, n]), null
                },
                eT = et,
                eI = er,
                eL = el,
                eS = es,
                ej = ev,
                eF = eE,
                eM = eh,
                e_ = eN
        },
        54076: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return i
                }
            });
            var r = n(2265);

            function o(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }
            var u = globalThis ? .document ? r.useLayoutEffect : () => {},
                i = e => {
                    var t, n;
                    let i, a;
                    let {
                        present: s,
                        children: c
                    } = e, d = function(e) {
                        var t, n;
                        let [o, i] = r.useState(), a = r.useRef({}), s = r.useRef(e), c = r.useRef("none"), [d, f] = (t = e ? "mounted" : "unmounted", n = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended"
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted"
                            },
                            unmounted: {
                                MOUNT: "mounted"
                            }
                        }, r.useReducer((e, t) => {
                            let r = n[e][t];
                            return null != r ? r : e
                        }, t));
                        return r.useEffect(() => {
                            let e = l(a.current);
                            c.current = "mounted" === d ? e : "none"
                        }, [d]), u(() => {
                            let t = a.current,
                                n = s.current;
                            if (n !== e) {
                                let r = c.current,
                                    o = l(t);
                                e ? f("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? f("UNMOUNT") : n && r !== o ? f("ANIMATION_OUT") : f("UNMOUNT"), s.current = e
                            }
                        }, [e, f]), u(() => {
                            if (o) {
                                var e;
                                let t;
                                let n = null !== (e = o.ownerDocument.defaultView) && void 0 !== e ? e : window,
                                    r = e => {
                                        let r = l(a.current).includes(e.animationName);
                                        if (e.target === o && r && (f("ANIMATION_END"), !s.current)) {
                                            let e = o.style.animationFillMode;
                                            o.style.animationFillMode = "forwards", t = n.setTimeout(() => {
                                                "forwards" === o.style.animationFillMode && (o.style.animationFillMode = e)
                                            })
                                        }
                                    },
                                    u = e => {
                                        e.target === o && (c.current = l(a.current))
                                    };
                                return o.addEventListener("animationstart", u), o.addEventListener("animationcancel", r), o.addEventListener("animationend", r), () => {
                                    n.clearTimeout(t), o.removeEventListener("animationstart", u), o.removeEventListener("animationcancel", r), o.removeEventListener("animationend", r)
                                }
                            }
                            f("ANIMATION_END")
                        }, [o, f]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(d),
                            ref: r.useCallback(e => {
                                e && (a.current = getComputedStyle(e)), i(e)
                            }, [])
                        }
                    }(s), f = "function" == typeof c ? c({
                        present: d.isPresent
                    }) : r.Children.only(c), v = function(...e) {
                        return r.useCallback(function(...e) {
                            return t => {
                                let n = !1,
                                    r = e.map(e => {
                                        let r = o(e, t);
                                        return n || "function" != typeof r || (n = !0), r
                                    });
                                if (n) return () => {
                                    for (let t = 0; t < r.length; t++) {
                                        let n = r[t];
                                        "function" == typeof n ? n() : o(e[t], null)
                                    }
                                }
                            }
                        }(...e), e)
                    }(d.ref, (i = null === (t = Object.getOwnPropertyDescriptor(f.props, "ref")) || void 0 === t ? void 0 : t.get) && "isReactWarning" in i && i.isReactWarning ? f.ref : (i = null === (n = Object.getOwnPropertyDescriptor(f, "ref")) || void 0 === n ? void 0 : n.get) && "isReactWarning" in i && i.isReactWarning ? f.props.ref : f.props.ref || f.ref);
                    return "function" == typeof c || d.isPresent ? r.cloneElement(f, {
                        ref: v
                    }) : null
                };

            function l(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            i.displayName = "Presence"
        },
        52558: function(e, t, n) {
            n.d(t, {
                e: function() {
                    return o
                }
            });
            var r = n(2265);

            function o(e, t = globalThis ? .document) {
                let n = function(e) {
                    let t = r.useRef(e);
                    return r.useEffect(() => {
                        t.current = e
                    }), r.useMemo(() => (...e) => t.current ? .(...e), [])
                }(e);
                r.useEffect(() => {
                    let e = e => {
                        "Escape" === e.key && n(e)
                    };
                    return t.addEventListener("keydown", e, {
                        capture: !0
                    }), () => t.removeEventListener("keydown", e, {
                        capture: !0
                    })
                }, [n, t])
            }
        }
    }
]);