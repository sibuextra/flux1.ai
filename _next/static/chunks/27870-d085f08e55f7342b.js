"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [27870], {
        27870: function(e, r, t) {
            t.d(r, {
                Ns: function() {
                    return K
                },
                fC: function() {
                    return G
                },
                gb: function() {
                    return R
                },
                q4: function() {
                    return O
                },
                l_: function() {
                    return J
                }
            });
            var n = t(2265),
                o = t(82912),
                l = t(98575),
                i = t(61188),
                a = e => {
                    var r, t;
                    let o, a;
                    let {
                        present: c,
                        children: u
                    } = e, d = function(e) {
                        var r, t;
                        let [o, l] = n.useState(), a = n.useRef({}), c = n.useRef(e), u = n.useRef("none"), [d, f] = (r = e ? "mounted" : "unmounted", t = {
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
                        }, n.useReducer((e, r) => {
                            let n = t[e][r];
                            return null != n ? n : e
                        }, r));
                        return n.useEffect(() => {
                            let e = s(a.current);
                            u.current = "mounted" === d ? e : "none"
                        }, [d]), (0, i.b)(() => {
                            let r = a.current,
                                t = c.current;
                            if (t !== e) {
                                let n = u.current,
                                    o = s(r);
                                e ? f("MOUNT") : "none" === o || (null == r ? void 0 : r.display) === "none" ? f("UNMOUNT") : t && n !== o ? f("ANIMATION_OUT") : f("UNMOUNT"), c.current = e
                            }
                        }, [e, f]), (0, i.b)(() => {
                            if (o) {
                                var e;
                                let r;
                                let t = null !== (e = o.ownerDocument.defaultView) && void 0 !== e ? e : window,
                                    n = e => {
                                        let n = s(a.current).includes(e.animationName);
                                        if (e.target === o && n && (f("ANIMATION_END"), !c.current)) {
                                            let e = o.style.animationFillMode;
                                            o.style.animationFillMode = "forwards", r = t.setTimeout(() => {
                                                "forwards" === o.style.animationFillMode && (o.style.animationFillMode = e)
                                            })
                                        }
                                    },
                                    l = e => {
                                        e.target === o && (u.current = s(a.current))
                                    };
                                return o.addEventListener("animationstart", l), o.addEventListener("animationcancel", n), o.addEventListener("animationend", n), () => {
                                    t.clearTimeout(r), o.removeEventListener("animationstart", l), o.removeEventListener("animationcancel", n), o.removeEventListener("animationend", n)
                                }
                            }
                            f("ANIMATION_END")
                        }, [o, f]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(d),
                            ref: n.useCallback(e => {
                                e && (a.current = getComputedStyle(e)), l(e)
                            }, [])
                        }
                    }(c), f = "function" == typeof u ? u({
                        present: d.isPresent
                    }) : n.Children.only(u), p = (0, l.e)(d.ref, (o = null === (r = Object.getOwnPropertyDescriptor(f.props, "ref")) || void 0 === r ? void 0 : r.get) && "isReactWarning" in o && o.isReactWarning ? f.ref : (o = null === (t = Object.getOwnPropertyDescriptor(f, "ref")) || void 0 === t ? void 0 : t.get) && "isReactWarning" in o && o.isReactWarning ? f.props.ref : f.props.ref || f.ref);
                    return "function" == typeof u || d.isPresent ? n.cloneElement(f, {
                        ref: p
                    }) : null
                };

            function s(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            a.displayName = "Presence";
            var c = t(73966),
                u = t(26606),
                d = t(29114),
                f = t(62484),
                p = t(6741),
                v = t(57437),
                h = "ScrollArea",
                [w, m] = (0, c.b)(h),
                [g, b] = w(h),
                S = n.forwardRef((e, r) => {
                    let {
                        __scopeScrollArea: t,
                        type: i = "hover",
                        dir: a,
                        scrollHideDelay: s = 600,
                        ...c
                    } = e, [u, f] = n.useState(null), [p, h] = n.useState(null), [w, m] = n.useState(null), [b, S] = n.useState(null), [E, y] = n.useState(null), [T, R] = n.useState(0), [C, x] = n.useState(0), [N, L] = n.useState(!1), [P, _] = n.useState(!1), A = (0, l.e)(r, e => f(e)), D = (0, d.gm)(a);
                    return (0, v.jsx)(g, {
                        scope: t,
                        type: i,
                        dir: D,
                        scrollHideDelay: s,
                        scrollArea: u,
                        viewport: p,
                        onViewportChange: h,
                        content: w,
                        onContentChange: m,
                        scrollbarX: b,
                        onScrollbarXChange: S,
                        scrollbarXEnabled: N,
                        onScrollbarXEnabledChange: L,
                        scrollbarY: E,
                        onScrollbarYChange: y,
                        scrollbarYEnabled: P,
                        onScrollbarYEnabledChange: _,
                        onCornerWidthChange: R,
                        onCornerHeightChange: x,
                        children: (0, v.jsx)(o.WV.div, {
                            dir: D,
                            ...c,
                            ref: A,
                            style: {
                                position: "relative",
                                "--radix-scroll-area-corner-width": T + "px",
                                "--radix-scroll-area-corner-height": C + "px",
                                ...e.style
                            }
                        })
                    })
                });
            S.displayName = h;
            var E = "ScrollAreaViewport",
                y = n.forwardRef((e, r) => {
                    let {
                        __scopeScrollArea: t,
                        children: i,
                        nonce: a,
                        ...s
                    } = e, c = b(E, t), u = n.useRef(null), d = (0, l.e)(r, u, c.onViewportChange);
                    return (0, v.jsxs)(v.Fragment, {
                        children: [(0, v.jsx)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
                            },
                            nonce: a
                        }), (0, v.jsx)(o.WV.div, {
                            "data-radix-scroll-area-viewport": "",
                            ...s,
                            ref: d,
                            style: {
                                overflowX: c.scrollbarXEnabled ? "scroll" : "hidden",
                                overflowY: c.scrollbarYEnabled ? "scroll" : "hidden",
                                ...e.style
                            },
                            children: (0, v.jsx)("div", {
                                ref: c.onContentChange,
                                style: {
                                    minWidth: "100%",
                                    display: "table"
                                },
                                children: i
                            })
                        })]
                    })
                });
            y.displayName = E;
            var T = "ScrollAreaScrollbar",
                R = n.forwardRef((e, r) => {
                    let {
                        forceMount: t,
                        ...o
                    } = e, l = b(T, e.__scopeScrollArea), {
                        onScrollbarXEnabledChange: i,
                        onScrollbarYEnabledChange: a
                    } = l, s = "horizontal" === e.orientation;
                    return n.useEffect(() => (s ? i(!0) : a(!0), () => {
                        s ? i(!1) : a(!1)
                    }), [s, i, a]), "hover" === l.type ? (0, v.jsx)(C, { ...o,
                        ref: r,
                        forceMount: t
                    }) : "scroll" === l.type ? (0, v.jsx)(x, { ...o,
                        ref: r,
                        forceMount: t
                    }) : "auto" === l.type ? (0, v.jsx)(N, { ...o,
                        ref: r,
                        forceMount: t
                    }) : "always" === l.type ? (0, v.jsx)(L, { ...o,
                        ref: r
                    }) : null
                });
            R.displayName = T;
            var C = n.forwardRef((e, r) => {
                    let {
                        forceMount: t,
                        ...o
                    } = e, l = b(T, e.__scopeScrollArea), [i, s] = n.useState(!1);
                    return n.useEffect(() => {
                        let e = l.scrollArea,
                            r = 0;
                        if (e) {
                            let t = () => {
                                    window.clearTimeout(r), s(!0)
                                },
                                n = () => {
                                    r = window.setTimeout(() => s(!1), l.scrollHideDelay)
                                };
                            return e.addEventListener("pointerenter", t), e.addEventListener("pointerleave", n), () => {
                                window.clearTimeout(r), e.removeEventListener("pointerenter", t), e.removeEventListener("pointerleave", n)
                            }
                        }
                    }, [l.scrollArea, l.scrollHideDelay]), (0, v.jsx)(a, {
                        present: t || i,
                        children: (0, v.jsx)(N, {
                            "data-state": i ? "visible" : "hidden",
                            ...o,
                            ref: r
                        })
                    })
                }),
                x = n.forwardRef((e, r) => {
                    var t, o;
                    let {
                        forceMount: l,
                        ...i
                    } = e, s = b(T, e.__scopeScrollArea), c = "horizontal" === e.orientation, u = B(() => f("SCROLL_END"), 100), [d, f] = (t = "hidden", o = {
                        hidden: {
                            SCROLL: "scrolling"
                        },
                        scrolling: {
                            SCROLL_END: "idle",
                            POINTER_ENTER: "interacting"
                        },
                        interacting: {
                            SCROLL: "interacting",
                            POINTER_LEAVE: "idle"
                        },
                        idle: {
                            HIDE: "hidden",
                            SCROLL: "scrolling",
                            POINTER_ENTER: "interacting"
                        }
                    }, n.useReducer((e, r) => {
                        let t = o[e][r];
                        return null != t ? t : e
                    }, t));
                    return n.useEffect(() => {
                        if ("idle" === d) {
                            let e = window.setTimeout(() => f("HIDE"), s.scrollHideDelay);
                            return () => window.clearTimeout(e)
                        }
                    }, [d, s.scrollHideDelay, f]), n.useEffect(() => {
                        let e = s.viewport,
                            r = c ? "scrollLeft" : "scrollTop";
                        if (e) {
                            let t = e[r],
                                n = () => {
                                    let n = e[r];
                                    t !== n && (f("SCROLL"), u()), t = n
                                };
                            return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
                        }
                    }, [s.viewport, c, f, u]), (0, v.jsx)(a, {
                        present: l || "hidden" !== d,
                        children: (0, v.jsx)(L, {
                            "data-state": "hidden" === d ? "hidden" : "visible",
                            ...i,
                            ref: r,
                            onPointerEnter: (0, p.M)(e.onPointerEnter, () => f("POINTER_ENTER")),
                            onPointerLeave: (0, p.M)(e.onPointerLeave, () => f("POINTER_LEAVE"))
                        })
                    })
                }),
                N = n.forwardRef((e, r) => {
                    let t = b(T, e.__scopeScrollArea),
                        {
                            forceMount: o,
                            ...l
                        } = e,
                        [i, s] = n.useState(!1),
                        c = "horizontal" === e.orientation,
                        u = B(() => {
                            if (t.viewport) {
                                let e = t.viewport.offsetWidth < t.viewport.scrollWidth,
                                    r = t.viewport.offsetHeight < t.viewport.scrollHeight;
                                s(c ? e : r)
                            }
                        }, 10);
                    return q(t.viewport, u), q(t.content, u), (0, v.jsx)(a, {
                        present: o || i,
                        children: (0, v.jsx)(L, {
                            "data-state": i ? "visible" : "hidden",
                            ...l,
                            ref: r
                        })
                    })
                }),
                L = n.forwardRef((e, r) => {
                    let {
                        orientation: t = "vertical",
                        ...o
                    } = e, l = b(T, e.__scopeScrollArea), i = n.useRef(null), a = n.useRef(0), [s, c] = n.useState({
                        content: 0,
                        viewport: 0,
                        scrollbar: {
                            size: 0,
                            paddingStart: 0,
                            paddingEnd: 0
                        }
                    }), u = k(s.viewport, s.content), d = { ...o,
                        sizes: s,
                        onSizesChange: c,
                        hasThumb: !!(u > 0 && u < 1),
                        onThumbChange: e => i.current = e,
                        onThumbPointerUp: () => a.current = 0,
                        onThumbPointerDown: e => a.current = e
                    };

                    function f(e, r) {
                        return function(e, r, t) {
                            let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "ltr",
                                o = V(t),
                                l = r || o / 2,
                                i = t.scrollbar.paddingStart + l,
                                a = t.scrollbar.size - t.scrollbar.paddingEnd - (o - l),
                                s = t.content - t.viewport;
                            return Y([i, a], "ltr" === n ? [0, s] : [-1 * s, 0])(e)
                        }(e, a.current, s, r)
                    }
                    return "horizontal" === t ? (0, v.jsx)(P, { ...d,
                        ref: r,
                        onThumbPositionChange: () => {
                            if (l.viewport && i.current) {
                                let e = X(l.viewport.scrollLeft, s, l.dir);
                                i.current.style.transform = "translate3d(".concat(e, "px, 0, 0)")
                            }
                        },
                        onWheelScroll: e => {
                            l.viewport && (l.viewport.scrollLeft = e)
                        },
                        onDragScroll: e => {
                            l.viewport && (l.viewport.scrollLeft = f(e, l.dir))
                        }
                    }) : "vertical" === t ? (0, v.jsx)(_, { ...d,
                        ref: r,
                        onThumbPositionChange: () => {
                            if (l.viewport && i.current) {
                                let e = X(l.viewport.scrollTop, s);
                                i.current.style.transform = "translate3d(0, ".concat(e, "px, 0)")
                            }
                        },
                        onWheelScroll: e => {
                            l.viewport && (l.viewport.scrollTop = e)
                        },
                        onDragScroll: e => {
                            l.viewport && (l.viewport.scrollTop = f(e))
                        }
                    }) : null
                }),
                P = n.forwardRef((e, r) => {
                    let {
                        sizes: t,
                        onSizesChange: o,
                        ...i
                    } = e, a = b(T, e.__scopeScrollArea), [s, c] = n.useState(), u = n.useRef(null), d = (0, l.e)(r, u, a.onScrollbarXChange);
                    return n.useEffect(() => {
                        u.current && c(getComputedStyle(u.current))
                    }, [u]), (0, v.jsx)(W, {
                        "data-orientation": "horizontal",
                        ...i,
                        ref: d,
                        sizes: t,
                        style: {
                            bottom: 0,
                            left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                            right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                            "--radix-scroll-area-thumb-width": V(t) + "px",
                            ...e.style
                        },
                        onThumbPointerDown: r => e.onThumbPointerDown(r.x),
                        onDragScroll: r => e.onDragScroll(r.x),
                        onWheelScroll: (r, t) => {
                            if (a.viewport) {
                                let n = a.viewport.scrollLeft + r.deltaX;
                                e.onWheelScroll(n), n > 0 && n < t && r.preventDefault()
                            }
                        },
                        onResize: () => {
                            u.current && a.viewport && s && o({
                                content: a.viewport.scrollWidth,
                                viewport: a.viewport.offsetWidth,
                                scrollbar: {
                                    size: u.current.clientWidth,
                                    paddingStart: H(s.paddingLeft),
                                    paddingEnd: H(s.paddingRight)
                                }
                            })
                        }
                    })
                }),
                _ = n.forwardRef((e, r) => {
                    let {
                        sizes: t,
                        onSizesChange: o,
                        ...i
                    } = e, a = b(T, e.__scopeScrollArea), [s, c] = n.useState(), u = n.useRef(null), d = (0, l.e)(r, u, a.onScrollbarYChange);
                    return n.useEffect(() => {
                        u.current && c(getComputedStyle(u.current))
                    }, [u]), (0, v.jsx)(W, {
                        "data-orientation": "vertical",
                        ...i,
                        ref: d,
                        sizes: t,
                        style: {
                            top: 0,
                            right: "ltr" === a.dir ? 0 : void 0,
                            left: "rtl" === a.dir ? 0 : void 0,
                            bottom: "var(--radix-scroll-area-corner-height)",
                            "--radix-scroll-area-thumb-height": V(t) + "px",
                            ...e.style
                        },
                        onThumbPointerDown: r => e.onThumbPointerDown(r.y),
                        onDragScroll: r => e.onDragScroll(r.y),
                        onWheelScroll: (r, t) => {
                            if (a.viewport) {
                                let n = a.viewport.scrollTop + r.deltaY;
                                e.onWheelScroll(n), n > 0 && n < t && r.preventDefault()
                            }
                        },
                        onResize: () => {
                            u.current && a.viewport && s && o({
                                content: a.viewport.scrollHeight,
                                viewport: a.viewport.offsetHeight,
                                scrollbar: {
                                    size: u.current.clientHeight,
                                    paddingStart: H(s.paddingTop),
                                    paddingEnd: H(s.paddingBottom)
                                }
                            })
                        }
                    })
                }),
                [A, D] = w(T),
                W = n.forwardRef((e, r) => {
                    let {
                        __scopeScrollArea: t,
                        sizes: i,
                        hasThumb: a,
                        onThumbChange: s,
                        onThumbPointerUp: c,
                        onThumbPointerDown: d,
                        onThumbPositionChange: f,
                        onDragScroll: h,
                        onWheelScroll: w,
                        onResize: m,
                        ...g
                    } = e, S = b(T, t), [E, y] = n.useState(null), R = (0, l.e)(r, e => y(e)), C = n.useRef(null), x = n.useRef(""), N = S.viewport, L = i.content - i.viewport, P = (0, u.W)(w), _ = (0, u.W)(f), D = B(m, 10);

                    function W(e) {
                        C.current && h({
                            x: e.clientX - C.current.left,
                            y: e.clientY - C.current.top
                        })
                    }
                    return n.useEffect(() => {
                        let e = e => {
                            let r = e.target;
                            (null == E ? void 0 : E.contains(r)) && P(e, L)
                        };
                        return document.addEventListener("wheel", e, {
                            passive: !1
                        }), () => document.removeEventListener("wheel", e, {
                            passive: !1
                        })
                    }, [N, E, L, P]), n.useEffect(_, [i, _]), q(E, D), q(S.content, D), (0, v.jsx)(A, {
                        scope: t,
                        scrollbar: E,
                        hasThumb: a,
                        onThumbChange: (0, u.W)(s),
                        onThumbPointerUp: (0, u.W)(c),
                        onThumbPositionChange: _,
                        onThumbPointerDown: (0, u.W)(d),
                        children: (0, v.jsx)(o.WV.div, { ...g,
                            ref: R,
                            style: {
                                position: "absolute",
                                ...g.style
                            },
                            onPointerDown: (0, p.M)(e.onPointerDown, e => {
                                0 === e.button && (e.target.setPointerCapture(e.pointerId), C.current = E.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", S.viewport && (S.viewport.style.scrollBehavior = "auto"), W(e))
                            }),
                            onPointerMove: (0, p.M)(e.onPointerMove, W),
                            onPointerUp: (0, p.M)(e.onPointerUp, e => {
                                let r = e.target;
                                r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = x.current, S.viewport && (S.viewport.style.scrollBehavior = ""), C.current = null
                            })
                        })
                    })
                }),
                j = "ScrollAreaThumb",
                O = n.forwardRef((e, r) => {
                    let {
                        forceMount: t,
                        ...n
                    } = e, o = D(j, e.__scopeScrollArea);
                    return (0, v.jsx)(a, {
                        present: t || o.hasThumb,
                        children: (0, v.jsx)(M, {
                            ref: r,
                            ...n
                        })
                    })
                }),
                M = n.forwardRef((e, r) => {
                    let {
                        __scopeScrollArea: t,
                        style: i,
                        ...a
                    } = e, s = b(j, t), c = D(j, t), {
                        onThumbPositionChange: u
                    } = c, d = (0, l.e)(r, e => c.onThumbChange(e)), f = n.useRef(void 0), h = B(() => {
                        f.current && (f.current(), f.current = void 0)
                    }, 100);
                    return n.useEffect(() => {
                        let e = s.viewport;
                        if (e) {
                            let r = () => {
                                if (h(), !f.current) {
                                    let r = F(e, u);
                                    f.current = r, u()
                                }
                            };
                            return u(), e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
                        }
                    }, [s.viewport, h, u]), (0, v.jsx)(o.WV.div, {
                        "data-state": c.hasThumb ? "visible" : "hidden",
                        ...a,
                        ref: d,
                        style: {
                            width: "var(--radix-scroll-area-thumb-width)",
                            height: "var(--radix-scroll-area-thumb-height)",
                            ...i
                        },
                        onPointerDownCapture: (0, p.M)(e.onPointerDownCapture, e => {
                            let r = e.target.getBoundingClientRect(),
                                t = e.clientX - r.left,
                                n = e.clientY - r.top;
                            c.onThumbPointerDown({
                                x: t,
                                y: n
                            })
                        }),
                        onPointerUp: (0, p.M)(e.onPointerUp, c.onThumbPointerUp)
                    })
                });
            O.displayName = j;
            var I = "ScrollAreaCorner",
                U = n.forwardRef((e, r) => {
                    let t = b(I, e.__scopeScrollArea),
                        n = !!(t.scrollbarX && t.scrollbarY);
                    return "scroll" !== t.type && n ? (0, v.jsx)(z, { ...e,
                        ref: r
                    }) : null
                });
            U.displayName = I;
            var z = n.forwardRef((e, r) => {
                let {
                    __scopeScrollArea: t,
                    ...l
                } = e, i = b(I, t), [a, s] = n.useState(0), [c, u] = n.useState(0), d = !!(a && c);
                return q(i.scrollbarX, () => {
                    var e;
                    let r = (null === (e = i.scrollbarX) || void 0 === e ? void 0 : e.offsetHeight) || 0;
                    i.onCornerHeightChange(r), u(r)
                }), q(i.scrollbarY, () => {
                    var e;
                    let r = (null === (e = i.scrollbarY) || void 0 === e ? void 0 : e.offsetWidth) || 0;
                    i.onCornerWidthChange(r), s(r)
                }), d ? (0, v.jsx)(o.WV.div, { ...l,
                    ref: r,
                    style: {
                        width: a,
                        height: c,
                        position: "absolute",
                        right: "ltr" === i.dir ? 0 : void 0,
                        left: "rtl" === i.dir ? 0 : void 0,
                        bottom: 0,
                        ...e.style
                    }
                }) : null
            });

            function H(e) {
                return e ? parseInt(e, 10) : 0
            }

            function k(e, r) {
                let t = e / r;
                return isNaN(t) ? 0 : t
            }

            function V(e) {
                let r = k(e.viewport, e.content),
                    t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd;
                return Math.max((e.scrollbar.size - t) * r, 18)
            }

            function X(e, r) {
                let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ltr",
                    n = V(r),
                    o = r.scrollbar.paddingStart + r.scrollbar.paddingEnd,
                    l = r.scrollbar.size - o,
                    i = r.content - r.viewport,
                    a = (0, f.u)(e, "ltr" === t ? [0, i] : [-1 * i, 0]);
                return Y([0, i], [0, l - n])(a)
            }

            function Y(e, r) {
                return t => {
                    if (e[0] === e[1] || r[0] === r[1]) return r[0];
                    let n = (r[1] - r[0]) / (e[1] - e[0]);
                    return r[0] + n * (t - e[0])
                }
            }
            var F = function(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
                    t = {
                        left: e.scrollLeft,
                        top: e.scrollTop
                    },
                    n = 0;
                return ! function o() {
                    let l = {
                            left: e.scrollLeft,
                            top: e.scrollTop
                        },
                        i = t.left !== l.left,
                        a = t.top !== l.top;
                    (i || a) && r(), t = l, n = window.requestAnimationFrame(o)
                }(), () => window.cancelAnimationFrame(n)
            };

            function B(e, r) {
                let t = (0, u.W)(e),
                    o = n.useRef(0);
                return n.useEffect(() => () => window.clearTimeout(o.current), []), n.useCallback(() => {
                    window.clearTimeout(o.current), o.current = window.setTimeout(t, r)
                }, [t, r])
            }

            function q(e, r) {
                let t = (0, u.W)(r);
                (0, i.b)(() => {
                    let r = 0;
                    if (e) {
                        let n = new ResizeObserver(() => {
                            cancelAnimationFrame(r), r = window.requestAnimationFrame(t)
                        });
                        return n.observe(e), () => {
                            window.cancelAnimationFrame(r), n.unobserve(e)
                        }
                    }
                }, [e, t])
            }
            var G = S,
                J = y,
                K = U
        }
    }
]);