"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [85323], {
        24369: function(e, t, n) {
            var r = n(2265),
                i = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                u = r.useState,
                o = r.useEffect,
                a = r.useLayoutEffect,
                l = r.useDebugValue;

            function c(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !i(e, n)
                } catch (e) {
                    return !0
                }
            }
            var s = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var n = t(),
                    r = u({
                        inst: {
                            value: n,
                            getSnapshot: t
                        }
                    }),
                    i = r[0].inst,
                    s = r[1];
                return a(function() {
                    i.value = n, i.getSnapshot = t, c(i) && s({
                        inst: i
                    })
                }, [e, n, t]), o(function() {
                    return c(i) && s({
                        inst: i
                    }), e(function() {
                        c(i) && s({
                            inst: i
                        })
                    })
                }, [e]), l(n), n
            };
            t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : s
        },
        82558: function(e, t, n) {
            e.exports = n(24369)
        },
        2602: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return g
                },
                I: function() {
                    return R
                },
                O: function() {
                    return c
                },
                S: function() {
                    return z
                },
                U: function() {
                    return l
                },
                a: function() {
                    return f
                },
                b: function() {
                    return o
                },
                c: function() {
                    return Q
                },
                d: function() {
                    return J
                },
                e: function() {
                    return s
                },
                f: function() {
                    return q
                },
                g: function() {
                    return B
                },
                i: function() {
                    return v
                },
                j: function() {
                    return $
                },
                m: function() {
                    return d
                },
                n: function() {
                    return F
                },
                o: function() {
                    return P
                },
                r: function() {
                    return L
                },
                s: function() {
                    return U
                },
                t: function() {
                    return T
                },
                u: function() {
                    return j
                },
                z: function() {
                    return S
                }
            });
            var r = n(2265),
                i = n(98183),
                u = Object.prototype.hasOwnProperty;
            let o = new WeakMap,
                a = () => {},
                l = a(),
                c = Object,
                s = e => e === l,
                f = e => "function" == typeof e,
                d = (e, t) => ({ ...e,
                    ...t
                }),
                g = e => f(e.then),
                p = {},
                y = {},
                h = "undefined",
                v = typeof window != h,
                w = typeof document != h,
                b = v && "Deno" in window,
                m = () => v && typeof window.requestAnimationFrame != h,
                S = (e, t) => {
                    let n = o.get(e);
                    return [() => !s(t) && e.get(t) || p, r => {
                        if (!s(t)) {
                            let i = e.get(t);
                            t in y || (y[t] = i), n[5](t, d(i, r), i || p)
                        }
                    }, n[6], () => !s(t) && t in y ? y[t] : !s(t) && e.get(t) || p]
                },
                O = !0,
                [E, _] = v && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [a, a],
                k = {
                    initFocus: e => (w && document.addEventListener("visibilitychange", e), E("focus", e), () => {
                        w && document.removeEventListener("visibilitychange", e), _("focus", e)
                    }),
                    initReconnect: e => {
                        let t = () => {
                                O = !0, e()
                            },
                            n = () => {
                                O = !1
                            };
                        return E("online", t), E("offline", n), () => {
                            _("online", t), _("offline", n)
                        }
                    }
                },
                R = !r.useId,
                L = !v || b,
                T = e => m() ? window.requestAnimationFrame(e) : setTimeout(e, 1),
                j = L ? r.useEffect : r.useLayoutEffect,
                V = "undefined" != typeof navigator && navigator.connection,
                C = !L && V && (["slow-2g", "2g"].includes(V.effectiveType) || V.saveData),
                D = new WeakMap,
                A = (e, t) => c.prototype.toString.call(e) === "[object ".concat(t, "]"),
                x = 0,
                I = e => {
                    let t, n;
                    let r = typeof e,
                        i = A(e, "Date"),
                        u = A(e, "RegExp"),
                        o = A(e, "Object");
                    if (c(e) !== e || i || u) t = i ? e.toJSON() : "symbol" == r ? e.toString() : "string" == r ? JSON.stringify(e) : "" + e;
                    else {
                        if (t = D.get(e)) return t;
                        if (t = ++x + "~", D.set(e, t), Array.isArray(e)) {
                            for (n = 0, t = "@"; n < e.length; n++) t += I(e[n]) + ",";
                            D.set(e, t)
                        }
                        if (o) {
                            t = "#";
                            let r = c.keys(e).sort();
                            for (; !s(n = r.pop());) s(e[n]) || (t += n + ":" + I(e[n]) + ",");
                            D.set(e, t)
                        }
                    }
                    return t
                },
                U = e => {
                    if (f(e)) try {
                        e = e()
                    } catch (t) {
                        e = ""
                    }
                    let t = e;
                    return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? I(e) : "", t]
                },
                M = 0,
                P = () => ++M;
            async function F() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let [r, u, a, c] = t, p = d({
                    populateCache: !0,
                    throwOnError: !0
                }, "boolean" == typeof c ? {
                    revalidate: c
                } : c || {}), y = p.populateCache, h = p.rollbackOnError, v = p.optimisticData, w = e => "function" == typeof h ? h(e) : !1 !== h, b = p.throwOnError;
                if (f(u)) {
                    let e = [];
                    for (let t of r.keys()) !/^\$(inf|sub)\$/.test(t) && u(r.get(t)._k) && e.push(t);
                    return Promise.all(e.map(m))
                }
                return m(u);
                async function m(e) {
                    let n;
                    let [u] = U(e);
                    if (!u) return;
                    let [c, d] = S(r, u), [h, m, O, E] = o.get(r), _ = () => {
                        let t = h[u];
                        return (f(p.revalidate) ? p.revalidate(c().data, e) : !1 !== p.revalidate) && (delete O[u], delete E[u], t && t[0]) ? t[0](i.QQ).then(() => c().data) : c().data
                    };
                    if (t.length < 3) return _();
                    let k = a,
                        R = P();
                    m[u] = [R, 0];
                    let L = !s(v),
                        T = c(),
                        j = T.data,
                        V = T._c,
                        C = s(V) ? j : V;
                    if (L && d({
                            data: v = f(v) ? v(C, j) : v,
                            _c: C
                        }), f(k)) try {
                        k = k(C)
                    } catch (e) {
                        n = e
                    }
                    if (k && g(k)) {
                        if (k = await k.catch(e => {
                                n = e
                            }), R !== m[u][0]) {
                            if (n) throw n;
                            return k
                        }
                        n && L && w(n) && (y = !0, d({
                            data: C,
                            _c: l
                        }))
                    }
                    if (y && !n && (f(y) ? d({
                            data: y(k, C),
                            error: l,
                            _c: l
                        }) : d({
                            data: k,
                            error: l,
                            _c: l
                        })), m[u][1] = P(), Promise.resolve(_()).then(() => {
                            d({
                                _c: l
                            })
                        }), n) {
                        if (b) throw n;
                        return
                    }
                    return k
                }
            }
            let N = (e, t) => {
                    for (let n in e) e[n][0] && e[n][0](t)
                },
                W = (e, t) => {
                    if (!o.has(e)) {
                        let n = d(k, t),
                            r = Object.create(null),
                            u = F.bind(l, e),
                            c = a,
                            s = Object.create(null),
                            f = (e, t) => {
                                let n = s[e] || [];
                                return s[e] = n, n.push(t), () => n.splice(n.indexOf(t), 1)
                            },
                            g = (t, n, r) => {
                                e.set(t, n);
                                let i = s[t];
                                if (i)
                                    for (let e of i) e(n, r)
                            },
                            p = () => {
                                if (!o.has(e) && (o.set(e, [r, Object.create(null), Object.create(null), Object.create(null), u, g, f]), !L)) {
                                    let t = n.initFocus(setTimeout.bind(l, N.bind(l, r, i.N4))),
                                        u = n.initReconnect(setTimeout.bind(l, N.bind(l, r, i.l2)));
                                    c = () => {
                                        t && t(), u && u(), o.delete(e)
                                    }
                                }
                            };
                        return p(), [e, u, p, c]
                    }
                    return [e, o.get(e)[4]]
                },
                [Q, $] = W(new Map),
                J = d({
                    onLoadingSlow: a,
                    onSuccess: a,
                    onError: a,
                    onErrorRetry: (e, t, n, r, i) => {
                        let u = n.errorRetryCount,
                            o = i.retryCount,
                            a = ~~((Math.random() + .5) * (1 << (o < 8 ? o : 8))) * n.errorRetryInterval;
                        (s(u) || !(o > u)) && setTimeout(r, a, i)
                    },
                    onDiscarded: a,
                    revalidateOnFocus: !0,
                    revalidateOnReconnect: !0,
                    revalidateIfStale: !0,
                    shouldRetryOnError: !0,
                    errorRetryInterval: C ? 1e4 : 5e3,
                    focusThrottleInterval: 5e3,
                    dedupingInterval: 2e3,
                    loadingTimeout: C ? 5e3 : 3e3,
                    compare: function e(t, n) {
                        var r, i;
                        if (t === n) return !0;
                        if (t && n && (r = t.constructor) === n.constructor) {
                            if (r === Date) return t.getTime() === n.getTime();
                            if (r === RegExp) return t.toString() === n.toString();
                            if (r === Array) {
                                if ((i = t.length) === n.length)
                                    for (; i-- && e(t[i], n[i]););
                                return -1 === i
                            }
                            if (!r || "object" == typeof t) {
                                for (r in i = 0, t)
                                    if (u.call(t, r) && ++i && !u.call(n, r) || !(r in n) || !e(t[r], n[r])) return !1;
                                return Object.keys(n).length === i
                            }
                        }
                        return t != t && n != n
                    },
                    isPaused: () => !1,
                    cache: Q,
                    mutate: $,
                    fallback: {}
                }, {
                    isOnline: () => O,
                    isVisible: () => {
                        let e = w && document.visibilityState;
                        return s(e) || "hidden" !== e
                    }
                }),
                q = (e, t) => {
                    let n = d(e, t);
                    if (t) {
                        let {
                            use: r,
                            fallback: i
                        } = e, {
                            use: u,
                            fallback: o
                        } = t;
                        r && u && (n.use = r.concat(u)), i && o && (n.fallback = d(i, o))
                    }
                    return n
                },
                z = (0, r.createContext)({}),
                B = e => {
                    let {
                        value: t
                    } = e, n = (0, r.useContext)(z), i = f(t), u = (0, r.useMemo)(() => i ? t(n) : t, [i, n, t]), o = (0, r.useMemo)(() => i ? u : q(n, u), [i, n, u]), a = u && u.provider, c = (0, r.useRef)(l);
                    a && !c.current && (c.current = W(a(o.cache || Q), u));
                    let s = c.current;
                    return s && (o.cache = s[0], o.mutate = s[1]), j(() => {
                        if (s) return s[2] && s[2](), s[3]
                    }, []), (0, r.createElement)(z.Provider, d(e, {
                        value: o
                    }))
                }
        },
        58034: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return r
                }
            });
            let r = "$inf$"
        },
        98183: function(e, t, n) {
            n.d(t, {
                N4: function() {
                    return r
                },
                QQ: function() {
                    return u
                },
                aU: function() {
                    return o
                },
                l2: function() {
                    return i
                }
            });
            let r = 0,
                i = 1,
                u = 2,
                o = 3
        },
        62827: function(e, t, n) {
            n.d(t, {
                MA: function() {
                    return s
                },
                kY: function() {
                    return c
                },
                ko: function() {
                    return g
                },
                s6: function() {
                    return d
                },
                xD: function() {
                    return p
                }
            });
            var r = n(2602),
                i = n(58034),
                u = n(2265);
            let o = r.i && window.__SWR_DEVTOOLS_USE__,
                a = o ? window.__SWR_DEVTOOLS_USE__ : [],
                l = e => (0, r.a)(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
                c = () => (0, r.m)(r.d, (0, u.useContext)(r.S)),
                s = (e, t) => {
                    let [n, i] = (0, r.s)(e), [, , , u] = r.b.get(r.c);
                    if (u[n]) return u[n];
                    let o = t(i);
                    return u[n] = o, o
                },
                f = a.concat(e => (t, n, u) => {
                    let o = n && ((...e) => {
                        let [u] = (0, r.s)(t), [, , , o] = r.b.get(r.c);
                        if (u.startsWith(i.U)) return n(...e);
                        let a = o[u];
                        return (0, r.e)(a) ? n(...e) : (delete o[u], a)
                    });
                    return e(t, o, u)
                }),
                d = e => function(...t) {
                    let n = c(),
                        [i, u, o] = l(t),
                        a = (0, r.f)(n, o),
                        s = e,
                        {
                            use: d
                        } = a,
                        g = (d || []).concat(f);
                    for (let e = g.length; e--;) s = g[e](s);
                    return s(i, u || a.fetcher || null, a)
                },
                g = (e, t, n) => {
                    let r = t[e] || (t[e] = []);
                    return r.push(n), () => {
                        let e = r.indexOf(n);
                        e >= 0 && (r[e] = r[r.length - 1], r.pop())
                    }
                },
                p = (e, t) => (...n) => {
                    let [r, i, u] = l(n), o = (u.use || []).concat(t);
                    return e(r, i, { ...u,
                        use: o
                    })
                };
            o && (window.__SWR_DEVTOOLS_REACT__ = u)
        },
        85323: function(e, t, n) {
            n.r(t), n.d(t, {
                SWRConfig: function() {
                    return S
                },
                default: function() {
                    return O
                },
                mutate: function() {
                    return u.j
                },
                preload: function() {
                    return a.MA
                },
                unstable_serialize: function() {
                    return w
                },
                useSWRConfig: function() {
                    return a.kY
                }
            });
            var r = n(2265),
                i = n(82558),
                u = n(2602),
                o = n(98183),
                a = n(62827);
            let l = () => {},
                c = l(),
                s = Object,
                f = e => e === c,
                d = e => "function" == typeof e,
                g = new WeakMap,
                p = (e, t) => s.prototype.toString.call(e) === `[object ${t}]`,
                y = 0,
                h = e => {
                    let t, n;
                    let r = typeof e,
                        i = p(e, "Date"),
                        u = p(e, "RegExp"),
                        o = p(e, "Object");
                    if (s(e) !== e || i || u) t = i ? e.toJSON() : "symbol" == r ? e.toString() : "string" == r ? JSON.stringify(e) : "" + e;
                    else {
                        if (t = g.get(e)) return t;
                        if (t = ++y + "~", g.set(e, t), Array.isArray(e)) {
                            for (n = 0, t = "@"; n < e.length; n++) t += h(e[n]) + ",";
                            g.set(e, t)
                        }
                        if (o) {
                            t = "#";
                            let r = s.keys(e).sort();
                            for (; !f(n = r.pop());) f(e[n]) || (t += n + ":" + h(e[n]) + ",");
                            g.set(e, t)
                        }
                    }
                    return t
                },
                v = e => {
                    if (d(e)) try {
                        e = e()
                    } catch (t) {
                        e = ""
                    }
                    let t = e;
                    return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? h(e) : "", t]
                },
                w = e => v(e)[0],
                b = r.use || (e => {
                    switch (e.status) {
                        case "pending":
                            throw e;
                        case "fulfilled":
                            return e.value;
                        case "rejected":
                            throw e.reason;
                        default:
                            throw e.status = "pending", e.then(t => {
                                e.status = "fulfilled", e.value = t
                            }, t => {
                                e.status = "rejected", e.reason = t
                            }), e
                    }
                }),
                m = {
                    dedupe: !0
                },
                S = u.O.defineProperty(u.g, "defaultValue", {
                    value: u.d
                }),
                O = (0, a.s6)((e, t, n) => {
                    let {
                        cache: l,
                        compare: c,
                        suspense: s,
                        fallbackData: f,
                        revalidateOnMount: d,
                        revalidateIfStale: g,
                        refreshInterval: p,
                        refreshWhenHidden: y,
                        refreshWhenOffline: h,
                        keepPreviousData: v
                    } = n, [w, S, O, E] = u.b.get(l), [_, k] = (0, u.s)(e), R = (0, r.useRef)(!1), L = (0, r.useRef)(!1), T = (0, r.useRef)(_), j = (0, r.useRef)(t), V = (0, r.useRef)(n), C = () => V.current, D = () => C().isVisible() && C().isOnline(), [A, x, I, U] = (0, u.z)(l, _), M = (0, r.useRef)({}).current, P = (0, u.e)(f) ? (0, u.e)(n.fallback) ? u.U : n.fallback[_] : f, F = (e, t) => {
                        for (let n in M)
                            if ("data" === n) {
                                if (!c(e[n], t[n]) && (!(0, u.e)(e[n]) || !c(Y, t[n]))) return !1
                            } else if (t[n] !== e[n]) return !1;
                        return !0
                    }, N = (0, r.useMemo)(() => {
                        let e = !!_ && !!t && ((0, u.e)(d) ? !C().isPaused() && !s && !1 !== g : d),
                            n = t => {
                                let n = (0, u.m)(t);
                                return (delete n._k, e) ? {
                                    isValidating: !0,
                                    isLoading: !0,
                                    ...n
                                } : n
                            },
                            r = A(),
                            i = U(),
                            o = n(r),
                            a = r === i ? o : n(i),
                            l = o;
                        return [() => {
                            let e = n(A());
                            return F(e, l) ? (l.data = e.data, l.isLoading = e.isLoading, l.isValidating = e.isValidating, l.error = e.error, l) : (l = e, e)
                        }, () => a]
                    }, [l, _]), W = (0, i.useSyncExternalStore)((0, r.useCallback)(e => I(_, (t, n) => {
                        F(n, t) || e()
                    }), [l, _]), N[0], N[1]), Q = !R.current, $ = w[_] && w[_].length > 0, J = W.data, q = (0, u.e)(J) ? P && (0, u.B)(P) ? b(P) : P : J, z = W.error, B = (0, r.useRef)(q), Y = v ? (0, u.e)(J) ? (0, u.e)(B.current) ? q : B.current : J : q, G = (!$ || !!(0, u.e)(z)) && (Q && !(0, u.e)(d) ? d : !C().isPaused() && (s ? !(0, u.e)(q) && g : (0, u.e)(q) || g)), H = !!(_ && t && Q && G), K = (0, u.e)(W.isValidating) ? H : W.isValidating, X = (0, u.e)(W.isLoading) ? H : W.isLoading, Z = (0, r.useCallback)(async e => {
                        let t, r;
                        let i = j.current;
                        if (!_ || !i || L.current || C().isPaused()) return !1;
                        let a = !0,
                            l = e || {},
                            s = !O[_] || !l.dedupe,
                            f = () => u.I ? !L.current && _ === T.current && R.current : _ === T.current,
                            d = {
                                isValidating: !1,
                                isLoading: !1
                            },
                            g = () => {
                                x(d)
                            },
                            p = () => {
                                let e = O[_];
                                e && e[1] === r && delete O[_]
                            },
                            y = {
                                isValidating: !0
                            };
                        (0, u.e)(A().data) && (y.isLoading = !0);
                        try {
                            if (s && (x(y), n.loadingTimeout && (0, u.e)(A().data) && setTimeout(() => {
                                    a && f() && C().onLoadingSlow(_, n)
                                }, n.loadingTimeout), O[_] = [i(k), (0, u.o)()]), [t, r] = O[_], t = await t, s && setTimeout(p, n.dedupingInterval), !O[_] || O[_][1] !== r) return s && f() && C().onDiscarded(_), !1;
                            d.error = u.U;
                            let e = S[_];
                            if (!(0, u.e)(e) && (r <= e[0] || r <= e[1] || 0 === e[1])) return g(), s && f() && C().onDiscarded(_), !1;
                            let o = A().data;
                            d.data = c(o, t) ? o : t, s && f() && C().onSuccess(t, _, n)
                        } catch (n) {
                            p();
                            let e = C(),
                                {
                                    shouldRetryOnError: t
                                } = e;
                            !e.isPaused() && (d.error = n, s && f() && (e.onError(n, _, e), (!0 === t || (0, u.a)(t) && t(n)) && (!C().revalidateOnFocus || !C().revalidateOnReconnect || D()) && e.onErrorRetry(n, _, e, e => {
                                let t = w[_];
                                t && t[0] && t[0](o.aU, e)
                            }, {
                                retryCount: (l.retryCount || 0) + 1,
                                dedupe: !0
                            })))
                        }
                        return a = !1, g(), !0
                    }, [_, l]), ee = (0, r.useCallback)((...e) => (0, u.n)(l, T.current, ...e), []);
                    if ((0, u.u)(() => {
                            j.current = t, V.current = n, (0, u.e)(J) || (B.current = J)
                        }), (0, u.u)(() => {
                            if (!_) return;
                            let e = Z.bind(u.U, m),
                                t = 0;
                            C().revalidateOnFocus && (t = Date.now() + C().focusThrottleInterval);
                            let n = (0, a.ko)(_, w, (n, r = {}) => {
                                if (n == o.N4) {
                                    let n = Date.now();
                                    C().revalidateOnFocus && n > t && D() && (t = n + C().focusThrottleInterval, e())
                                } else if (n == o.l2) C().revalidateOnReconnect && D() && e();
                                else if (n == o.QQ) return Z();
                                else if (n == o.aU) return Z(r)
                            });
                            return L.current = !1, T.current = _, R.current = !0, x({
                                _k: k
                            }), G && ((0, u.e)(q) || u.r ? e() : (0, u.t)(e)), () => {
                                L.current = !0, n()
                            }
                        }, [_]), (0, u.u)(() => {
                            let e;

                            function t() {
                                let t = (0, u.a)(p) ? p(A().data) : p;
                                t && -1 !== e && (e = setTimeout(n, t))
                            }

                            function n() {
                                !A().error && (y || C().isVisible()) && (h || C().isOnline()) ? Z(m).then(t) : t()
                            }
                            return t(), () => {
                                e && (clearTimeout(e), e = -1)
                            }
                        }, [p, y, h, _]), (0, r.useDebugValue)(Y), s && (0, u.e)(q) && _) {
                        if (!u.I && u.r) throw Error("Fallback data is required when using Suspense in SSR.");
                        j.current = t, V.current = n, L.current = !1;
                        let e = E[_];
                        if ((0, u.e)(e) || b(ee(e)), (0, u.e)(z)) {
                            let e = Z(m);
                            (0, u.e)(Y) || (e.status = "fulfilled", e.value = !0), b(e)
                        } else throw z
                    }
                    return {
                        mutate: ee,
                        get data() {
                            return M.data = !0, Y
                        },
                        get error() {
                            return M.error = !0, z
                        },
                        get isValidating() {
                            return M.isValidating = !0, K
                        },
                        get isLoading() {
                            return M.isLoading = !0, X
                        }
                    }
                })
        }
    }
]);