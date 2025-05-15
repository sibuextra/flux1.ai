"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [51502], {
        51502: function(e, t, n) {
            let r;
            n.d(t, {
                aU: function() {
                    return eK
                },
                $j: function() {
                    return ez
                },
                VY: function() {
                    return eB
                },
                dk: function() {
                    return eH
                },
                aV: function() {
                    return eU
                },
                h_: function() {
                    return eV
                },
                fC: function() {
                    return e_
                },
                Dx: function() {
                    return eq
                },
                xz: function() {
                    return ek
                }
            });
            var o, i = n(2265),
                l = n(73966),
                a = n(98575),
                u = n(6741),
                s = n(99255),
                d = n(80886),
                c = n(82912),
                f = n(26606),
                p = n(57437),
                v = "dismissableLayer.update",
                m = i.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                g = i.forwardRef((e, t) => {
                    var n, r;
                    let {
                        disableOutsidePointerEvents: l = !1,
                        onEscapeKeyDown: s,
                        onPointerDownOutside: d,
                        onFocusOutside: g,
                        onInteractOutside: b,
                        onDismiss: h,
                        ...w
                    } = e, D = i.useContext(m), [N, x] = i.useState(null), R = null !== (r = null == N ? void 0 : N.ownerDocument) && void 0 !== r ? r : null === (n = globalThis) || void 0 === n ? void 0 : n.document, [, C] = i.useState({}), O = (0, a.e)(t, e => x(e)), j = Array.from(D.layers), [T] = [...D.layersWithOutsidePointerEventsDisabled].slice(-1), A = j.indexOf(T), I = N ? j.indexOf(N) : -1, P = D.layersWithOutsidePointerEventsDisabled.size > 0, F = I >= A, L = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                            r = (0, f.W)(e),
                            o = i.useRef(!1),
                            l = i.useRef(() => {});
                        return i.useEffect(() => {
                            let e = e => {
                                    if (e.target && !o.current) {
                                        let t = function() {
                                                E("dismissableLayer.pointerDownOutside", r, o, {
                                                    discrete: !0
                                                })
                                            },
                                            o = {
                                                originalEvent: e
                                            };
                                        "touch" === e.pointerType ? (n.removeEventListener("click", l.current), l.current = t, n.addEventListener("click", l.current, {
                                            once: !0
                                        })) : t()
                                    } else n.removeEventListener("click", l.current);
                                    o.current = !1
                                },
                                t = window.setTimeout(() => {
                                    n.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(t), n.removeEventListener("pointerdown", e), n.removeEventListener("click", l.current)
                            }
                        }, [n, r]), {
                            onPointerDownCapture: () => o.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...D.branches].some(e => e.contains(t));
                        !F || n || (null == d || d(e), null == b || b(e), e.defaultPrevented || null == h || h())
                    }, R), M = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                            r = (0, f.W)(e),
                            o = i.useRef(!1);
                        return i.useEffect(() => {
                            let e = e => {
                                e.target && !o.current && E("dismissableLayer.focusOutside", r, {
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
                        [...D.branches].some(e => e.contains(t)) || (null == g || g(e), null == b || b(e), e.defaultPrevented || null == h || h())
                    }, R);
                    return ! function(e, t = globalThis ? .document) {
                        let n = (0, f.W)(e);
                        i.useEffect(() => {
                            let e = e => {
                                "Escape" === e.key && n(e)
                            };
                            return t.addEventListener("keydown", e, {
                                capture: !0
                            }), () => t.removeEventListener("keydown", e, {
                                capture: !0
                            })
                        }, [n, t])
                    }(e => {
                        I !== D.layers.size - 1 || (null == s || s(e), !e.defaultPrevented && h && (e.preventDefault(), h()))
                    }, R), i.useEffect(() => {
                        if (N) return l && (0 === D.layersWithOutsidePointerEventsDisabled.size && (o = R.body.style.pointerEvents, R.body.style.pointerEvents = "none"), D.layersWithOutsidePointerEventsDisabled.add(N)), D.layers.add(N), y(), () => {
                            l && 1 === D.layersWithOutsidePointerEventsDisabled.size && (R.body.style.pointerEvents = o)
                        }
                    }, [N, R, l, D]), i.useEffect(() => () => {
                        N && (D.layers.delete(N), D.layersWithOutsidePointerEventsDisabled.delete(N), y())
                    }, [N, D]), i.useEffect(() => {
                        let e = () => C({});
                        return document.addEventListener(v, e), () => document.removeEventListener(v, e)
                    }, []), (0, p.jsx)(c.WV.div, { ...w,
                        ref: O,
                        style: {
                            pointerEvents: P ? F ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: (0, u.M)(e.onFocusCapture, M.onFocusCapture),
                        onBlurCapture: (0, u.M)(e.onBlurCapture, M.onBlurCapture),
                        onPointerDownCapture: (0, u.M)(e.onPointerDownCapture, L.onPointerDownCapture)
                    })
                });

            function y() {
                let e = new CustomEvent(v);
                document.dispatchEvent(e)
            }

            function E(e, t, n, r) {
                let {
                    discrete: o
                } = r, i = n.originalEvent.target, l = new CustomEvent(e, {
                    bubbles: !1,
                    cancelable: !0,
                    detail: n
                });
                t && i.addEventListener(e, t, {
                    once: !0
                }), o ? (0, c.jH)(i, l) : i.dispatchEvent(l)
            }
            g.displayName = "DismissableLayer", i.forwardRef((e, t) => {
                let n = i.useContext(m),
                    r = i.useRef(null),
                    o = (0, a.e)(t, r);
                return i.useEffect(() => {
                    let e = r.current;
                    if (e) return n.branches.add(e), () => {
                        n.branches.delete(e)
                    }
                }, [n.branches]), (0, p.jsx)(c.WV.div, { ...e,
                    ref: o
                })
            }).displayName = "DismissableLayerBranch";
            var b = "focusScope.autoFocusOnMount",
                h = "focusScope.autoFocusOnUnmount",
                w = {
                    bubbles: !1,
                    cancelable: !0
                },
                D = i.forwardRef((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: r = !1,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: l,
                        ...u
                    } = e, [s, d] = i.useState(null), v = (0, f.W)(o), m = (0, f.W)(l), g = i.useRef(null), y = (0, a.e)(t, e => d(e)), E = i.useRef({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    i.useEffect(() => {
                        if (r) {
                            let e = function(e) {
                                    if (E.paused || !s) return;
                                    let t = e.target;
                                    s.contains(t) ? g.current = t : R(g.current, {
                                        select: !0
                                    })
                                },
                                t = function(e) {
                                    if (E.paused || !s) return;
                                    let t = e.relatedTarget;
                                    null === t || s.contains(t) || R(g.current, {
                                        select: !0
                                    })
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let n = new MutationObserver(function(e) {
                                if (document.activeElement === document.body)
                                    for (let t of e) t.removedNodes.length > 0 && R(s)
                            });
                            return s && n.observe(s, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
                            }
                        }
                    }, [r, s, E.paused]), i.useEffect(() => {
                        if (s) {
                            C.add(E);
                            let e = document.activeElement;
                            if (!s.contains(e)) {
                                let t = new CustomEvent(b, w);
                                s.addEventListener(b, v), s.dispatchEvent(t), t.defaultPrevented || (function(e) {
                                    let {
                                        select: t = !1
                                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = document.activeElement;
                                    for (let r of e)
                                        if (R(r, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }(N(s).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && R(s))
                            }
                            return () => {
                                s.removeEventListener(b, v), setTimeout(() => {
                                    let t = new CustomEvent(h, w);
                                    s.addEventListener(h, m), s.dispatchEvent(t), t.defaultPrevented || R(null != e ? e : document.body, {
                                        select: !0
                                    }), s.removeEventListener(h, m), C.remove(E)
                                }, 0)
                            }
                        }
                    }, [s, v, m, E]);
                    let D = i.useCallback(e => {
                        if (!n && !r || E.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [r, i] = function(e) {
                                    let t = N(e);
                                    return [x(t, e), x(t.reverse(), e)]
                                }(t);
                            r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && R(i, {
                                select: !0
                            })) : (e.preventDefault(), n && R(r, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }, [n, r, E.paused]);
                    return (0, p.jsx)(c.WV.div, {
                        tabIndex: -1,
                        ...u,
                        ref: y,
                        onKeyDown: D
                    })
                });

            function N(e) {
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

            function x(e, t) {
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

            function R(e) {
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
            D.displayName = "FocusScope";
            var C = (r = [], {
                add(e) {
                    let t = r[0];
                    e !== t && (null == t || t.pause()), (r = O(r, e)).unshift(e)
                },
                remove(e) {
                    var t;
                    null === (t = (r = O(r, e))[0]) || void 0 === t || t.resume()
                }
            });

            function O(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n
            }
            var j = n(54887),
                T = n(61188),
                A = i.forwardRef((e, t) => {
                    var n, r;
                    let {
                        container: o,
                        ...l
                    } = e, [a, u] = i.useState(!1);
                    (0, T.b)(() => u(!0), []);
                    let s = o || a && (null === (r = globalThis) || void 0 === r ? void 0 : null === (n = r.document) || void 0 === n ? void 0 : n.body);
                    return s ? j.createPortal((0, p.jsx)(c.WV.div, { ...l,
                        ref: t
                    }), s) : null
                });
            A.displayName = "Portal";
            var I = e => {
                var t, n;
                let r, o;
                let {
                    present: l,
                    children: u
                } = e, s = function(e) {
                    var t, n;
                    let [r, o] = i.useState(), l = i.useRef({}), a = i.useRef(e), u = i.useRef("none"), [s, d] = (t = e ? "mounted" : "unmounted", n = {
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
                    }, i.useReducer((e, t) => {
                        let r = n[e][t];
                        return null != r ? r : e
                    }, t));
                    return i.useEffect(() => {
                        let e = P(l.current);
                        u.current = "mounted" === s ? e : "none"
                    }, [s]), (0, T.b)(() => {
                        let t = l.current,
                            n = a.current;
                        if (n !== e) {
                            let r = u.current,
                                o = P(t);
                            e ? d("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? d("UNMOUNT") : n && r !== o ? d("ANIMATION_OUT") : d("UNMOUNT"), a.current = e
                        }
                    }, [e, d]), (0, T.b)(() => {
                        if (r) {
                            var e;
                            let t;
                            let n = null !== (e = r.ownerDocument.defaultView) && void 0 !== e ? e : window,
                                o = e => {
                                    let o = P(l.current).includes(e.animationName);
                                    if (e.target === r && o && (d("ANIMATION_END"), !a.current)) {
                                        let e = r.style.animationFillMode;
                                        r.style.animationFillMode = "forwards", t = n.setTimeout(() => {
                                            "forwards" === r.style.animationFillMode && (r.style.animationFillMode = e)
                                        })
                                    }
                                },
                                i = e => {
                                    e.target === r && (u.current = P(l.current))
                                };
                            return r.addEventListener("animationstart", i), r.addEventListener("animationcancel", o), r.addEventListener("animationend", o), () => {
                                n.clearTimeout(t), r.removeEventListener("animationstart", i), r.removeEventListener("animationcancel", o), r.removeEventListener("animationend", o)
                            }
                        }
                        d("ANIMATION_END")
                    }, [r, d]), {
                        isPresent: ["mounted", "unmountSuspended"].includes(s),
                        ref: i.useCallback(e => {
                            e && (l.current = getComputedStyle(e)), o(e)
                        }, [])
                    }
                }(l), d = "function" == typeof u ? u({
                    present: s.isPresent
                }) : i.Children.only(u), c = (0, a.e)(s.ref, (r = null === (t = Object.getOwnPropertyDescriptor(d.props, "ref")) || void 0 === t ? void 0 : t.get) && "isReactWarning" in r && r.isReactWarning ? d.ref : (r = null === (n = Object.getOwnPropertyDescriptor(d, "ref")) || void 0 === n ? void 0 : n.get) && "isReactWarning" in r && r.isReactWarning ? d.props.ref : d.props.ref || d.ref);
                return "function" == typeof u || s.isPresent ? i.cloneElement(d, {
                    ref: c
                }) : null
            };

            function P(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            I.displayName = "Presence";
            var F = n(86097),
                L = n(87922),
                M = n(5478),
                W = i.forwardRef((e, t) => {
                    let {
                        children: n,
                        ...r
                    } = e, o = i.Children.toArray(n), l = o.find(k);
                    if (l) {
                        let e = l.props.children,
                            n = o.map(t => t !== l ? t : i.Children.count(e) > 1 ? i.Children.only(null) : i.isValidElement(e) ? e.props.children : null);
                        return (0, p.jsx)(S, { ...r,
                            ref: t,
                            children: i.isValidElement(e) ? i.cloneElement(e, void 0, n) : null
                        })
                    }
                    return (0, p.jsx)(S, { ...r,
                        ref: t,
                        children: n
                    })
                });
            W.displayName = "Slot";
            var S = i.forwardRef((e, t) => {
                let {
                    children: n,
                    ...r
                } = e;
                if (i.isValidElement(n)) {
                    let e, o;
                    let l = (e = Object.getOwnPropertyDescriptor(n.props, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning ? n.ref : (e = Object.getOwnPropertyDescriptor(n, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning ? n.props.ref : n.props.ref || n.ref;
                    return i.cloneElement(n, { ... function(e, t) {
                            let n = { ...t
                            };
                            for (let r in t) {
                                let o = e[r],
                                    i = t[r];
                                /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                                    i(...e), o(...e)
                                } : o && (n[r] = o) : "style" === r ? n[r] = { ...o,
                                    ...i
                                } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                            }
                            return { ...e,
                                ...n
                            }
                        }(r, n.props),
                        ref: t ? (0, a.F)(t, l) : l
                    })
                }
                return i.Children.count(n) > 1 ? i.Children.only(null) : null
            });
            S.displayName = "SlotClone";
            var _ = ({
                children: e
            }) => (0, p.jsx)(p.Fragment, {
                children: e
            });

            function k(e) {
                return i.isValidElement(e) && e.type === _
            }
            var V = "Dialog",
                [U, B] = (0, l.b)(V),
                [K, z] = U(V),
                q = e => {
                    let {
                        __scopeDialog: t,
                        children: n,
                        open: r,
                        defaultOpen: o,
                        onOpenChange: l,
                        modal: a = !0
                    } = e, u = i.useRef(null), c = i.useRef(null), [f = !1, v] = (0, d.T)({
                        prop: r,
                        defaultProp: o,
                        onChange: l
                    });
                    return (0, p.jsx)(K, {
                        scope: t,
                        triggerRef: u,
                        contentRef: c,
                        contentId: (0, s.M)(),
                        titleId: (0, s.M)(),
                        descriptionId: (0, s.M)(),
                        open: f,
                        onOpenChange: v,
                        onOpenToggle: i.useCallback(() => v(e => !e), [v]),
                        modal: a,
                        children: n
                    })
                };
            q.displayName = V;
            var H = "DialogTrigger",
                Z = i.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = z(H, n), i = (0, a.e)(t, o.triggerRef);
                    return (0, p.jsx)(c.WV.button, {
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": o.open,
                        "aria-controls": o.contentId,
                        "data-state": ef(o.open),
                        ...r,
                        ref: i,
                        onClick: (0, u.M)(e.onClick, o.onOpenToggle)
                    })
                });
            Z.displayName = H;
            var Y = "DialogPortal",
                [$, G] = U(Y, {
                    forceMount: void 0
                }),
                J = e => {
                    let {
                        __scopeDialog: t,
                        forceMount: n,
                        children: r,
                        container: o
                    } = e, l = z(Y, t);
                    return (0, p.jsx)($, {
                        scope: t,
                        forceMount: n,
                        children: i.Children.map(r, e => (0, p.jsx)(I, {
                            present: n || l.open,
                            children: (0, p.jsx)(A, {
                                asChild: !0,
                                container: o,
                                children: e
                            })
                        }))
                    })
                };
            J.displayName = Y;
            var Q = "DialogOverlay",
                X = i.forwardRef((e, t) => {
                    let n = G(Q, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        i = z(Q, e.__scopeDialog);
                    return i.modal ? (0, p.jsx)(I, {
                        present: r || i.open,
                        children: (0, p.jsx)(ee, { ...o,
                            ref: t
                        })
                    }) : null
                });
            X.displayName = Q;
            var ee = i.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = z(Q, n);
                    return (0, p.jsx)(L.Z, {
                        as: W,
                        allowPinchZoom: !0,
                        shards: [o.contentRef],
                        children: (0, p.jsx)(c.WV.div, {
                            "data-state": ef(o.open),
                            ...r,
                            ref: t,
                            style: {
                                pointerEvents: "auto",
                                ...r.style
                            }
                        })
                    })
                }),
                et = "DialogContent",
                en = i.forwardRef((e, t) => {
                    let n = G(et, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        i = z(et, e.__scopeDialog);
                    return (0, p.jsx)(I, {
                        present: r || i.open,
                        children: i.modal ? (0, p.jsx)(er, { ...o,
                            ref: t
                        }) : (0, p.jsx)(eo, { ...o,
                            ref: t
                        })
                    })
                });
            en.displayName = et;
            var er = i.forwardRef((e, t) => {
                    let n = z(et, e.__scopeDialog),
                        r = i.useRef(null),
                        o = (0, a.e)(t, n.contentRef, r);
                    return i.useEffect(() => {
                        let e = r.current;
                        if (e) return (0, M.Ry)(e)
                    }, []), (0, p.jsx)(ei, { ...e,
                        ref: o,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: (0, u.M)(e.onCloseAutoFocus, e => {
                            var t;
                            e.preventDefault(), null === (t = n.triggerRef.current) || void 0 === t || t.focus()
                        }),
                        onPointerDownOutside: (0, u.M)(e.onPointerDownOutside, e => {
                            let t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey;
                            (2 === t.button || n) && e.preventDefault()
                        }),
                        onFocusOutside: (0, u.M)(e.onFocusOutside, e => e.preventDefault())
                    })
                }),
                eo = i.forwardRef((e, t) => {
                    let n = z(et, e.__scopeDialog),
                        r = i.useRef(!1),
                        o = i.useRef(!1);
                    return (0, p.jsx)(ei, { ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            var i, l;
                            null === (i = e.onCloseAutoFocus) || void 0 === i || i.call(e, t), t.defaultPrevented || (r.current || null === (l = n.triggerRef.current) || void 0 === l || l.focus(), t.preventDefault()), r.current = !1, o.current = !1
                        },
                        onInteractOutside: t => {
                            var i, l;
                            null === (i = e.onInteractOutside) || void 0 === i || i.call(e, t), t.defaultPrevented || (r.current = !0, "pointerdown" !== t.detail.originalEvent.type || (o.current = !0));
                            let a = t.target;
                            (null === (l = n.triggerRef.current) || void 0 === l ? void 0 : l.contains(a)) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
                        }
                    })
                }),
                ei = i.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        trapFocus: r,
                        onOpenAutoFocus: o,
                        onCloseAutoFocus: l,
                        ...u
                    } = e, s = z(et, n), d = i.useRef(null), c = (0, a.e)(t, d);
                    return (0, F.EW)(), (0, p.jsxs)(p.Fragment, {
                        children: [(0, p.jsx)(D, {
                            asChild: !0,
                            loop: !0,
                            trapped: r,
                            onMountAutoFocus: o,
                            onUnmountAutoFocus: l,
                            children: (0, p.jsx)(g, {
                                role: "dialog",
                                id: s.contentId,
                                "aria-describedby": s.descriptionId,
                                "aria-labelledby": s.titleId,
                                "data-state": ef(s.open),
                                ...u,
                                ref: c,
                                onDismiss: () => s.onOpenChange(!1)
                            })
                        }), (0, p.jsxs)(p.Fragment, {
                            children: [(0, p.jsx)(eg, {
                                titleId: s.titleId
                            }), (0, p.jsx)(ey, {
                                contentRef: d,
                                descriptionId: s.descriptionId
                            })]
                        })]
                    })
                }),
                el = "DialogTitle",
                ea = i.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = z(el, n);
                    return (0, p.jsx)(c.WV.h2, {
                        id: o.titleId,
                        ...r,
                        ref: t
                    })
                });
            ea.displayName = el;
            var eu = "DialogDescription",
                es = i.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = z(eu, n);
                    return (0, p.jsx)(c.WV.p, {
                        id: o.descriptionId,
                        ...r,
                        ref: t
                    })
                });
            es.displayName = eu;
            var ed = "DialogClose",
                ec = i.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = z(ed, n);
                    return (0, p.jsx)(c.WV.button, {
                        type: "button",
                        ...r,
                        ref: t,
                        onClick: (0, u.M)(e.onClick, () => o.onOpenChange(!1))
                    })
                });

            function ef(e) {
                return e ? "open" : "closed"
            }
            ec.displayName = ed;
            var ep = "DialogTitleWarning",
                [ev, em] = (0, l.k)(ep, {
                    contentName: et,
                    titleName: el,
                    docsSlug: "dialog"
                }),
                eg = e => {
                    let {
                        titleId: t
                    } = e, n = em(ep), r = "`".concat(n.contentName, "` requires a `").concat(n.titleName, "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName, "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);
                    return i.useEffect(() => {
                        t && !document.getElementById(t) && console.error(r)
                    }, [r, t]), null
                },
                ey = e => {
                    let {
                        contentRef: t,
                        descriptionId: n
                    } = e, r = em("DialogDescriptionWarning"), o = "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName, "}.");
                    return i.useEffect(() => {
                        var e;
                        let r = null === (e = t.current) || void 0 === e ? void 0 : e.getAttribute("aria-describedby");
                        n && r && !document.getElementById(n) && console.warn(o)
                    }, [o, t, n]), null
                },
                eE = "AlertDialog",
                [eb, eh] = (0, l.b)(eE, [B]),
                ew = B(),
                eD = e => {
                    let {
                        __scopeAlertDialog: t,
                        ...n
                    } = e, r = ew(t);
                    return (0, p.jsx)(q, { ...r,
                        ...n,
                        modal: !0
                    })
                };
            eD.displayName = eE;
            var eN = i.forwardRef((e, t) => {
                let {
                    __scopeAlertDialog: n,
                    ...r
                } = e, o = ew(n);
                return (0, p.jsx)(Z, { ...o,
                    ...r,
                    ref: t
                })
            });
            eN.displayName = "AlertDialogTrigger";
            var ex = e => {
                let {
                    __scopeAlertDialog: t,
                    ...n
                } = e, r = ew(t);
                return (0, p.jsx)(J, { ...r,
                    ...n
                })
            };
            ex.displayName = "AlertDialogPortal";
            var eR = i.forwardRef((e, t) => {
                let {
                    __scopeAlertDialog: n,
                    ...r
                } = e, o = ew(n);
                return (0, p.jsx)(X, { ...o,
                    ...r,
                    ref: t
                })
            });
            eR.displayName = "AlertDialogOverlay";
            var eC = "AlertDialogContent",
                [eO, ej] = eb(eC),
                eT = i.forwardRef((e, t) => {
                    let {
                        __scopeAlertDialog: n,
                        children: r,
                        ...o
                    } = e, l = ew(n), s = i.useRef(null), d = (0, a.e)(t, s), c = i.useRef(null);
                    return (0, p.jsx)(ev, {
                        contentName: eC,
                        titleName: eA,
                        docsSlug: "alert-dialog",
                        children: (0, p.jsx)(eO, {
                            scope: n,
                            cancelRef: c,
                            children: (0, p.jsxs)(en, {
                                role: "alertdialog",
                                ...l,
                                ...o,
                                ref: d,
                                onOpenAutoFocus: (0, u.M)(o.onOpenAutoFocus, e => {
                                    var t;
                                    e.preventDefault(), null === (t = c.current) || void 0 === t || t.focus({
                                        preventScroll: !0
                                    })
                                }),
                                onPointerDownOutside: e => e.preventDefault(),
                                onInteractOutside: e => e.preventDefault(),
                                children: [(0, p.jsx)(_, {
                                    children: r
                                }), (0, p.jsx)(eS, {
                                    contentRef: s
                                })]
                            })
                        })
                    })
                });
            eT.displayName = eC;
            var eA = "AlertDialogTitle",
                eI = i.forwardRef((e, t) => {
                    let {
                        __scopeAlertDialog: n,
                        ...r
                    } = e, o = ew(n);
                    return (0, p.jsx)(ea, { ...o,
                        ...r,
                        ref: t
                    })
                });
            eI.displayName = eA;
            var eP = "AlertDialogDescription",
                eF = i.forwardRef((e, t) => {
                    let {
                        __scopeAlertDialog: n,
                        ...r
                    } = e, o = ew(n);
                    return (0, p.jsx)(es, { ...o,
                        ...r,
                        ref: t
                    })
                });
            eF.displayName = eP;
            var eL = i.forwardRef((e, t) => {
                let {
                    __scopeAlertDialog: n,
                    ...r
                } = e, o = ew(n);
                return (0, p.jsx)(ec, { ...o,
                    ...r,
                    ref: t
                })
            });
            eL.displayName = "AlertDialogAction";
            var eM = "AlertDialogCancel",
                eW = i.forwardRef((e, t) => {
                    let {
                        __scopeAlertDialog: n,
                        ...r
                    } = e, {
                        cancelRef: o
                    } = ej(eM, n), i = ew(n), l = (0, a.e)(t, o);
                    return (0, p.jsx)(ec, { ...i,
                        ...r,
                        ref: l
                    })
                });
            eW.displayName = eM;
            var eS = e => {
                    let {
                        contentRef: t
                    } = e, n = "`".concat(eC, "` requires a description for the component to be accessible for screen reader users.\n\nYou can add a description to the `").concat(eC, "` by passing a `").concat(eP, "` component as a child, which also benefits sighted users by adding visible context to the dialog.\n\nAlternatively, you can use your own component as a description by assigning it an `id` and passing the same value to the `aria-describedby` prop in `").concat(eC, "`. If the description is confusing or duplicative for sighted users, you can use the `@radix-ui/react-visually-hidden` primitive as a wrapper around your description component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/alert-dialog");
                    return i.useEffect(() => {
                        var e;
                        document.getElementById(null === (e = t.current) || void 0 === e ? void 0 : e.getAttribute("aria-describedby")) || console.warn(n)
                    }, [n, t]), null
                },
                e_ = eD,
                ek = eN,
                eV = ex,
                eU = eR,
                eB = eT,
                eK = eL,
                ez = eW,
                eq = eI,
                eH = eF
        },
        86097: function(e, t, n) {
            n.d(t, {
                EW: function() {
                    return i
                }
            });
            var r = n(2265),
                o = 0;

            function i() {
                r.useEffect(() => {
                    var e, t;
                    let n = document.querySelectorAll("[data-radix-focus-guard]");
                    return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : l()), document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : l()), o++, () => {
                        1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), o--
                    }
                }, [])
            }

            function l() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
            }
        }
    }
]);