"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [26879], {
        10407: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return r
                }
            });
            let r = (0, t(43664).Z)("ChevronRight", [
                ["path", {
                    d: "m9 18 6-6-6-6",
                    key: "mthhwq"
                }]
            ])
        },
        54221: function(e, n, t) {
            t.d(n, {
                VY: function() {
                    return el
                },
                h4: function() {
                    return ea
                },
                ck: function() {
                    return eo
                },
                fC: function() {
                    return er
                },
                xz: function() {
                    return ei
                }
            });
            var r = t(2265),
                o = t(73966),
                a = t(71605),
                i = t(98575),
                l = t(6741),
                d = t(80886),
                s = t(82912),
                c = t(61188),
                u = e => {
                    var n, t;
                    let o, a;
                    let {
                        present: l,
                        children: d
                    } = e, s = function(e) {
                        var n, t;
                        let [o, a] = r.useState(), i = r.useRef({}), l = r.useRef(e), d = r.useRef("none"), [s, u] = (n = e ? "mounted" : "unmounted", t = {
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
                        }, r.useReducer((e, n) => {
                            let r = t[e][n];
                            return null != r ? r : e
                        }, n));
                        return r.useEffect(() => {
                            let e = f(i.current);
                            d.current = "mounted" === s ? e : "none"
                        }, [s]), (0, c.b)(() => {
                            let n = i.current,
                                t = l.current;
                            if (t !== e) {
                                let r = d.current,
                                    o = f(n);
                                e ? u("MOUNT") : "none" === o || (null == n ? void 0 : n.display) === "none" ? u("UNMOUNT") : t && r !== o ? u("ANIMATION_OUT") : u("UNMOUNT"), l.current = e
                            }
                        }, [e, u]), (0, c.b)(() => {
                            if (o) {
                                var e;
                                let n;
                                let t = null !== (e = o.ownerDocument.defaultView) && void 0 !== e ? e : window,
                                    r = e => {
                                        let r = f(i.current).includes(e.animationName);
                                        if (e.target === o && r && (u("ANIMATION_END"), !l.current)) {
                                            let e = o.style.animationFillMode;
                                            o.style.animationFillMode = "forwards", n = t.setTimeout(() => {
                                                "forwards" === o.style.animationFillMode && (o.style.animationFillMode = e)
                                            })
                                        }
                                    },
                                    a = e => {
                                        e.target === o && (d.current = f(i.current))
                                    };
                                return o.addEventListener("animationstart", a), o.addEventListener("animationcancel", r), o.addEventListener("animationend", r), () => {
                                    t.clearTimeout(n), o.removeEventListener("animationstart", a), o.removeEventListener("animationcancel", r), o.removeEventListener("animationend", r)
                                }
                            }
                            u("ANIMATION_END")
                        }, [o, u]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(s),
                            ref: r.useCallback(e => {
                                e && (i.current = getComputedStyle(e)), a(e)
                            }, [])
                        }
                    }(l), u = "function" == typeof d ? d({
                        present: s.isPresent
                    }) : r.Children.only(d), p = (0, i.e)(s.ref, (o = null === (n = Object.getOwnPropertyDescriptor(u.props, "ref")) || void 0 === n ? void 0 : n.get) && "isReactWarning" in o && o.isReactWarning ? u.ref : (o = null === (t = Object.getOwnPropertyDescriptor(u, "ref")) || void 0 === t ? void 0 : t.get) && "isReactWarning" in o && o.isReactWarning ? u.props.ref : u.props.ref || u.ref);
                    return "function" == typeof d || s.isPresent ? r.cloneElement(u, {
                        ref: p
                    }) : null
                };

            function f(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            u.displayName = "Presence";
            var p = t(99255),
                m = t(57437),
                v = "Collapsible",
                [h, b] = (0, o.b)(v),
                [g, w] = h(v),
                N = r.forwardRef((e, n) => {
                    let {
                        __scopeCollapsible: t,
                        open: o,
                        defaultOpen: a,
                        disabled: i,
                        onOpenChange: l,
                        ...c
                    } = e, [u = !1, f] = (0, d.T)({
                        prop: o,
                        defaultProp: a,
                        onChange: l
                    });
                    return (0, m.jsx)(g, {
                        scope: t,
                        disabled: i,
                        contentId: (0, p.M)(),
                        open: u,
                        onOpenToggle: r.useCallback(() => f(e => !e), [f]),
                        children: (0, m.jsx)(s.WV.div, {
                            "data-state": j(u),
                            "data-disabled": i ? "" : void 0,
                            ...c,
                            ref: n
                        })
                    })
                });
            N.displayName = v;
            var y = "CollapsibleTrigger",
                x = r.forwardRef((e, n) => {
                    let {
                        __scopeCollapsible: t,
                        ...r
                    } = e, o = w(y, t);
                    return (0, m.jsx)(s.WV.button, {
                        type: "button",
                        "aria-controls": o.contentId,
                        "aria-expanded": o.open || !1,
                        "data-state": j(o.open),
                        "data-disabled": o.disabled ? "" : void 0,
                        disabled: o.disabled,
                        ...r,
                        ref: n,
                        onClick: (0, l.M)(e.onClick, o.onOpenToggle)
                    })
                });
            x.displayName = y;
            var A = "CollapsibleContent",
                R = r.forwardRef((e, n) => {
                    let {
                        forceMount: t,
                        ...r
                    } = e, o = w(A, e.__scopeCollapsible);
                    return (0, m.jsx)(u, {
                        present: t || o.open,
                        children: e => {
                            let {
                                present: t
                            } = e;
                            return (0, m.jsx)(C, { ...r,
                                ref: n,
                                present: t
                            })
                        }
                    })
                });
            R.displayName = A;
            var C = r.forwardRef((e, n) => {
                let {
                    __scopeCollapsible: t,
                    present: o,
                    children: a,
                    ...l
                } = e, d = w(A, t), [u, f] = r.useState(o), p = r.useRef(null), v = (0, i.e)(n, p), h = r.useRef(0), b = h.current, g = r.useRef(0), N = g.current, y = d.open || u, x = r.useRef(y), R = r.useRef(void 0);
                return r.useEffect(() => {
                    let e = requestAnimationFrame(() => x.current = !1);
                    return () => cancelAnimationFrame(e)
                }, []), (0, c.b)(() => {
                    let e = p.current;
                    if (e) {
                        R.current = R.current || {
                            transitionDuration: e.style.transitionDuration,
                            animationName: e.style.animationName
                        }, e.style.transitionDuration = "0s", e.style.animationName = "none";
                        let n = e.getBoundingClientRect();
                        h.current = n.height, g.current = n.width, x.current || (e.style.transitionDuration = R.current.transitionDuration, e.style.animationName = R.current.animationName), f(o)
                    }
                }, [d.open, o]), (0, m.jsx)(s.WV.div, {
                    "data-state": j(d.open),
                    "data-disabled": d.disabled ? "" : void 0,
                    id: d.contentId,
                    hidden: !y,
                    ...l,
                    ref: v,
                    style: {
                        "--radix-collapsible-content-height": b ? "".concat(b, "px") : void 0,
                        "--radix-collapsible-content-width": N ? "".concat(N, "px") : void 0,
                        ...e.style
                    },
                    children: y && a
                })
            });

            function j(e) {
                return e ? "open" : "closed"
            }
            var I = t(29114),
                O = "Accordion",
                T = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
                [_, k, M] = (0, a.B)(O),
                [D, E] = (0, o.b)(O, [M, b]),
                U = b(),
                P = r.forwardRef((e, n) => {
                    let {
                        type: t,
                        ...r
                    } = e;
                    return (0, m.jsx)(_.Provider, {
                        scope: e.__scopeAccordion,
                        children: "multiple" === t ? (0, m.jsx)(z, { ...r,
                            ref: n
                        }) : (0, m.jsx)(F, { ...r,
                            ref: n
                        })
                    })
                });
            P.displayName = O;
            var [W, L] = D(O), [S, V] = D(O, {
                collapsible: !1
            }), F = r.forwardRef((e, n) => {
                let {
                    value: t,
                    defaultValue: o,
                    onValueChange: a = () => {},
                    collapsible: i = !1,
                    ...l
                } = e, [s, c] = (0, d.T)({
                    prop: t,
                    defaultProp: o,
                    onChange: a
                });
                return (0, m.jsx)(W, {
                    scope: e.__scopeAccordion,
                    value: s ? [s] : [],
                    onItemOpen: c,
                    onItemClose: r.useCallback(() => i && c(""), [i, c]),
                    children: (0, m.jsx)(S, {
                        scope: e.__scopeAccordion,
                        collapsible: i,
                        children: (0, m.jsx)(B, { ...l,
                            ref: n
                        })
                    })
                })
            }), z = r.forwardRef((e, n) => {
                let {
                    value: t,
                    defaultValue: o,
                    onValueChange: a = () => {},
                    ...i
                } = e, [l = [], s] = (0, d.T)({
                    prop: t,
                    defaultProp: o,
                    onChange: a
                }), c = r.useCallback(e => s(function() {
                    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return [...n, e]
                }), [s]), u = r.useCallback(e => s(function() {
                    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return n.filter(n => n !== e)
                }), [s]);
                return (0, m.jsx)(W, {
                    scope: e.__scopeAccordion,
                    value: l,
                    onItemOpen: c,
                    onItemClose: u,
                    children: (0, m.jsx)(S, {
                        scope: e.__scopeAccordion,
                        collapsible: !0,
                        children: (0, m.jsx)(B, { ...i,
                            ref: n
                        })
                    })
                })
            }), [H, q] = D(O), B = r.forwardRef((e, n) => {
                let {
                    __scopeAccordion: t,
                    disabled: o,
                    dir: a,
                    orientation: d = "vertical",
                    ...c
                } = e, u = r.useRef(null), f = (0, i.e)(u, n), p = k(t), v = "ltr" === (0, I.gm)(a), h = (0, l.M)(e.onKeyDown, e => {
                    var n;
                    if (!T.includes(e.key)) return;
                    let t = e.target,
                        r = p().filter(e => {
                            var n;
                            return !(null === (n = e.ref.current) || void 0 === n ? void 0 : n.disabled)
                        }),
                        o = r.findIndex(e => e.ref.current === t),
                        a = r.length;
                    if (-1 === o) return;
                    e.preventDefault();
                    let i = o,
                        l = a - 1,
                        s = () => {
                            (i = o + 1) > l && (i = 0)
                        },
                        c = () => {
                            (i = o - 1) < 0 && (i = l)
                        };
                    switch (e.key) {
                        case "Home":
                            i = 0;
                            break;
                        case "End":
                            i = l;
                            break;
                        case "ArrowRight":
                            "horizontal" === d && (v ? s() : c());
                            break;
                        case "ArrowDown":
                            "vertical" === d && s();
                            break;
                        case "ArrowLeft":
                            "horizontal" === d && (v ? c() : s());
                            break;
                        case "ArrowUp":
                            "vertical" === d && c()
                    }
                    null === (n = r[i % a].ref.current) || void 0 === n || n.focus()
                });
                return (0, m.jsx)(H, {
                    scope: t,
                    disabled: o,
                    direction: a,
                    orientation: d,
                    children: (0, m.jsx)(_.Slot, {
                        scope: t,
                        children: (0, m.jsx)(s.WV.div, { ...c,
                            "data-orientation": d,
                            ref: f,
                            onKeyDown: o ? void 0 : h
                        })
                    })
                })
            }), K = "AccordionItem", [Z, Y] = D(K), G = r.forwardRef((e, n) => {
                let {
                    __scopeAccordion: t,
                    value: r,
                    ...o
                } = e, a = q(K, t), i = L(K, t), l = U(t), d = (0, p.M)(), s = r && i.value.includes(r) || !1, c = a.disabled || e.disabled;
                return (0, m.jsx)(Z, {
                    scope: t,
                    open: s,
                    disabled: c,
                    triggerId: d,
                    children: (0, m.jsx)(N, {
                        "data-orientation": a.orientation,
                        "data-state": et(s),
                        ...l,
                        ...o,
                        ref: n,
                        disabled: c,
                        open: s,
                        onOpenChange: e => {
                            e ? i.onItemOpen(r) : i.onItemClose(r)
                        }
                    })
                })
            });
            G.displayName = K;
            var J = "AccordionHeader",
                Q = r.forwardRef((e, n) => {
                    let {
                        __scopeAccordion: t,
                        ...r
                    } = e, o = q(O, t), a = Y(J, t);
                    return (0, m.jsx)(s.WV.h3, {
                        "data-orientation": o.orientation,
                        "data-state": et(a.open),
                        "data-disabled": a.disabled ? "" : void 0,
                        ...r,
                        ref: n
                    })
                });
            Q.displayName = J;
            var X = "AccordionTrigger",
                $ = r.forwardRef((e, n) => {
                    let {
                        __scopeAccordion: t,
                        ...r
                    } = e, o = q(O, t), a = Y(X, t), i = V(X, t), l = U(t);
                    return (0, m.jsx)(_.ItemSlot, {
                        scope: t,
                        children: (0, m.jsx)(x, {
                            "aria-disabled": a.open && !i.collapsible || void 0,
                            "data-orientation": o.orientation,
                            id: a.triggerId,
                            ...l,
                            ...r,
                            ref: n
                        })
                    })
                });
            $.displayName = X;
            var ee = "AccordionContent",
                en = r.forwardRef((e, n) => {
                    let {
                        __scopeAccordion: t,
                        ...r
                    } = e, o = q(O, t), a = Y(ee, t), i = U(t);
                    return (0, m.jsx)(R, {
                        role: "region",
                        "aria-labelledby": a.triggerId,
                        "data-orientation": o.orientation,
                        ...i,
                        ...r,
                        ref: n,
                        style: {
                            "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                            "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                            ...e.style
                        }
                    })
                });

            function et(e) {
                return e ? "open" : "closed"
            }
            en.displayName = ee;
            var er = P,
                eo = G,
                ea = Q,
                ei = $,
                el = en
        }
    }
]);