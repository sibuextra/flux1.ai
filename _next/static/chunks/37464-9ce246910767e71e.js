"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [37464], {
        37464: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return b
                }
            });
            var a = r(57437),
                s = r(74291),
                i = r(8733),
                n = r(93448),
                o = r(69174),
                l = r(52871),
                d = r(12381),
                c = r(2265),
                u = r(87770),
                f = r(46175),
                p = r(14438),
                m = r(99376),
                g = r(48672),
                x = r(51817),
                h = r(70387);

            function b(e) {
                let {
                    dialogOpen: t,
                    setDialogOpen: r
                } = e, b = (0, m.useRouter)(), [y, v] = (0, c.useState)(!1), {
                    isLoaded: j
                } = (0, u.aF)(), {
                    user: N,
                    isSignedIn: w
                } = (0, u.aF)(), {
                    customerId: S,
                    userStatus: k
                } = (0, h._)();
                async function C(e, t, r, a, s) {
                    if (!j) {
                        f.default.error("not login, please login first");
                        return
                    }
                    try {
                        v(!0);
                        let i = await fetch("/api/checkout", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                plan: r,
                                credits: a,
                                amount: t,
                                price_id: e,
                                price: s,
                                mode: "subscription"
                            })
                        });
                        if (401 === i.status) {
                            v(!1), f.default.error("need login"), b.push("/sign-in");
                            return
                        }
                        let {
                            code: n,
                            message: o,
                            data: l
                        } = await i.json();
                        if (!l) {
                            v(!1), f.default.error(o);
                            return
                        }
                        let {
                            public_key: d,
                            session_id: c
                        } = l, u = await (0, g.J)(d);
                        if (!u) {
                            v(!1), f.default.error("checkout failed");
                            return
                        }
                        f.default.success("redirect to stripe for payment");
                        let p = await u.redirectToCheckout({
                            sessionId: c
                        });
                        console.log("result", p), p.error && (v(!1), f.default.error("stripe redirect error"))
                    } catch (e) {
                        v(!1), console.log("checkout failed: ", e), f.default.error("checkout failed")
                    }
                }
                let E = async () => {
                    if (w && N) {
                        v(!0);
                        try {
                            let e = await fetch("/api/manage-billing", {});
                            if (e.ok) {
                                let {
                                    url: t
                                } = await e.json();
                                f.default.success("Redirecting to Yor Billings"), p.toast.success("Redirecting to Yor Billings"), b.push(t)
                            } else f.default.error("Get Billing Error, Try Again Later or Email Us"), p.toast.error("Get Billing Error, Try Again Later or Email Us")
                        } catch (e) {
                            console.log("error"), f.default.error("Get Billing Error, Try Again Later or Email Us")
                        } finally {
                            v(!1)
                        }
                    }
                };
                return (0, a.jsx)(s.Vq, {
                    open: t,
                    onOpenChange: r,
                    children: (0, a.jsx)(s.cZ, {
                        className: "w-full max-w-md md:max-w-2xl lg:max-w-4xl overflow-y-auto max-h-[90vh]",
                        children: (0, a.jsxs)("div", {
                            className: "bg-white ",
                            children: [(0, a.jsxs)("div", {
                                className: "flex items-center gap-2 justify-center my-4 md:my-6",
                                children: [(0, a.jsx)("img", {
                                    src: "/logo.svg",
                                    alt: "logo",
                                    className: "w-10 h-10"
                                }), (0, a.jsx)("span", {
                                    className: "text-2xl font-bold flex items-center",
                                    children: "Flux1.AI Pricing"
                                })]
                            }), (0, a.jsx)("div", {
                                className: "grid gap-6 md:grid-cols-2",
                                children: i.MI.map((e, t) => (0, a.jsxs)("div", {
                                    className: (0, n.cn)("flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10", {
                                        " border-2 border-indigo-500": !0 === e.default
                                    }),
                                    children: [(0, a.jsxs)("div", {
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex justify-between",
                                            children: [(0, a.jsx)("h3", {
                                                id: e.id,
                                                className: "text-base font-semibold leading-7 text-indigo-600",
                                                children: e.name
                                            }), !0 === e.default && (0, a.jsx)(o.C, {
                                                className: "bg-indigo-500",
                                                children: "Most Popular"
                                            }), !0 === e.best && (0, a.jsx)(o.C, {
                                                className: "bg-indigo-500 ",
                                                children: "Best Value \uD83C\uDF89"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "mt-4 flex items-baseline",
                                            children: [(0, a.jsx)("span", {
                                                className: "font-semibold leading-7 text-gray-600",
                                                children: "$"
                                            }), (0, a.jsxs)("span", {
                                                className: "font-bold tracking-tight text-gray-900",
                                                children: [Math.round(e.price / e.credits * 100) / 100, " / Generation"]
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex items-baseline gap-x-2",
                                            children: [(0, a.jsx)("span", {
                                                className: "text-2xl font-semibold leading-7 text-gray-600",
                                                children: "$"
                                            }), (0, a.jsx)("span", {
                                                className: "text-4xl font-bold tracking-tight text-gray-900",
                                                children: e.price
                                            }), (0, a.jsx)("span", {
                                                children: "/ Month"
                                            })]
                                        }), (0, a.jsx)("ul", {
                                            role: "list",
                                            className: "mt-10 space-y-4 text-sm leading-6 text-gray-600",
                                            children: e.features.map(e => (0, a.jsxs)("li", {
                                                className: "flex gap-x-3",
                                                children: [(0, a.jsx)(l.Z, {
                                                    className: "h-6 w-5 flex-none text-green-600",
                                                    "aria-hidden": "true"
                                                }), e]
                                            }, e))
                                        })]
                                    }), S && k ? (0, a.jsxs)(d.z, {
                                        "aria-describedby": e.id,
                                        className: (0, n.cn)("mt-8  flex gap-2 rounded-md bg-indigo-600 px-2 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", {
                                            "cursor-not-allowed": y
                                        }),
                                        onClick: () => E(),
                                        children: [y && (0, a.jsx)(x.Z, {
                                            className: "h-4 w-4 animate-spin"
                                        }), "Manage Subscription"]
                                    }) : (0, a.jsxs)(d.z, {
                                        "aria-describedby": e.id,
                                        className: (0, n.cn)("mt-8  flex gap-2 rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", {
                                            "cursor-not-allowed": y
                                        }),
                                        onClick: () => C(e.price_id, e.price, e.plan, e.credits, e.price),
                                        children: [y && (0, a.jsx)(x.Z, {
                                            className: "h-4 w-4 animate-spin"
                                        }), "Subscribe"]
                                    })]
                                }, e.id))
                            })]
                        })
                    })
                })
            }
        },
        69174: function(e, t, r) {
            r.d(t, {
                C: function() {
                    return o
                }
            });
            var a = r(57437);
            r(2265);
            var s = r(90535),
                i = r(93448);
            let n = (0, s.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
                variants: {
                    variant: {
                        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                        outline: "text-foreground"
                    }
                },
                defaultVariants: {
                    variant: "default"
                }
            });

            function o(e) {
                let {
                    className: t,
                    variant: r,
                    ...s
                } = e;
                return (0, a.jsx)("div", {
                    className: (0, i.cn)(n({
                        variant: r
                    }), t),
                    ...s
                })
            }
        },
        74291: function(e, t, r) {
            r.d(t, {
                $N: function() {
                    return m
                },
                Be: function() {
                    return g
                },
                Vq: function() {
                    return l
                },
                cZ: function() {
                    return f
                },
                fK: function() {
                    return p
                },
                hg: function() {
                    return d
                }
            });
            var a = r(57437),
                s = r(2265),
                i = r(88656),
                n = r(32489),
                o = r(93448);
            let l = i.fC,
                d = i.xz,
                c = i.h_;
            i.x8;
            let u = s.forwardRef((e, t) => {
                let {
                    className: r,
                    ...s
                } = e;
                return (0, a.jsx)(i.aV, {
                    ref: t,
                    className: (0, o.cn)("fixed inset-0 z-50  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", "backdrop-blur-sm bg-black/70", r),
                    ...s
                })
            });
            u.displayName = i.aV.displayName;
            let f = s.forwardRef((e, t) => {
                let {
                    className: r,
                    children: s,
                    closeButtonClassName: l,
                    closeIconClassName: d,
                    ...f
                } = e;
                return (0, a.jsxs)(c, {
                    children: [(0, a.jsx)(u, {}), (0, a.jsxs)(i.VY, {
                        ref: t,
                        className: (0, o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", r),
                        ...f,
                        children: [s, (0, a.jsxs)(i.x8, {
                            className: (0, o.cn)("absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", l),
                            children: [(0, a.jsx)(n.Z, {
                                className: (0, o.cn)("h-4 w-4", d)
                            }), (0, a.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })]
                        })]
                    })]
                })
            });
            f.displayName = i.VY.displayName;
            let p = e => {
                let {
                    className: t,
                    ...r
                } = e;
                return (0, a.jsx)("div", {
                    className: (0, o.cn)("flex flex-col space-y-1.5 text-center sm:text-left", t),
                    ...r
                })
            };
            p.displayName = "DialogHeader";
            let m = s.forwardRef((e, t) => {
                let {
                    className: r,
                    ...s
                } = e;
                return (0, a.jsx)(i.Dx, {
                    ref: t,
                    className: (0, o.cn)("text-lg font-semibold leading-none tracking-tight", r),
                    ...s
                })
            });
            m.displayName = i.Dx.displayName;
            let g = s.forwardRef((e, t) => {
                let {
                    className: r,
                    ...s
                } = e;
                return (0, a.jsx)(i.dk, {
                    ref: t,
                    className: (0, o.cn)("text-sm text-muted-foreground", r),
                    ...s
                })
            });
            g.displayName = i.dk.displayName
        },
        70387: function(e, t, r) {
            r.d(t, {
                UserSubscriptionProvider: function() {
                    return l
                },
                _: function() {
                    return d
                }
            });
            var a = r(57437),
                s = r(87770),
                i = r(2265),
                n = r(85323);
            let o = (0, i.createContext)(void 0),
                l = e => {
                    var t;
                    let {
                        children: r
                    } = e, [l, d] = (0, i.useState)(null), [c, u] = (0, i.useState)(null), [f, p] = (0, i.useState)(null), [m, g] = (0, i.useState)(), [x, h] = (0, i.useState)(null), [b, y] = (0, i.useState)(!1), {
                        isSignedIn: v,
                        isLoaded: j,
                        user: N
                    } = (0, s.aF)(), {
                        data: w,
                        error: S,
                        isLoading: k
                    } = (0, n.default)(v ? "/api/user-subscription" : null, async e => {
                        let t = await fetch(e, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                userId: null == N ? void 0 : N.id
                            })
                        });
                        if (!t.ok) throw Error("Failed to fetch subscription");
                        return t.json()
                    }, {
                        shouldRetryOnError: !1,
                        refreshInterval: 0,
                        revalidateIfStale: !1,
                        revalidateOnFocus: !1,
                        revalidateOnReconnect: !1
                    }), {
                        data: C,
                        error: E,
                        mutate: I,
                        isLoading: O
                    } = (0, n.default)(v && !k ? "/api/credits" : null, async e => {
                        if (w && !w.user_status) return {
                            message: "success",
                            code: 0,
                            data: {
                                left_credits: null
                            }
                        };
                        let t = await fetch(e, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                userId: null == N ? void 0 : N.id
                            })
                        });
                        if (!t.ok) throw Error("Failed to fetch credits");
                        return t.json()
                    }, {
                        shouldRetryOnError: !1,
                        refreshInterval: 0,
                        revalidateIfStale: !1,
                        revalidateOnFocus: !1,
                        revalidateOnReconnect: !1
                    });
                    (0, i.useEffect)(() => {
                        w && (d(w.user_status), g(w.customerId), p(w.paySource), h(w.country))
                    }, [w]);
                    let _ = async () => {
                        if (v && (null == N ? void 0 : N.id)) try {
                            y(!0);
                            let e = await fetch("/api/credits", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    userId: N.id
                                })
                            });
                            if (!e.ok) throw Error("Failed to fetch credits");
                            let t = await e.json();
                            return await I(t, !1), t
                        } catch (e) {
                            throw console.error("Failed to fetch credits:", e), e
                        } finally {
                            y(!1)
                        }
                    };
                    return (0, a.jsx)(o.Provider, {
                        value: {
                            userStatus: l,
                            userBasic: c,
                            credits: null !== (t = null == C ? void 0 : C.data.left_credits) && void 0 !== t ? t : null,
                            isLoading: !w && !S || !C && !E && !0 === l,
                            error: S || E || null,
                            setCredits: e => I({
                                data: {
                                    left_credits: e
                                }
                            }, !1),
                            isSignedIn: v,
                            isLoaded: j,
                            customerId: m,
                            paySource: f,
                            subscriptionData: w ? {
                                subscriptionStart: w.subscriptionStart,
                                subscriptionEnd: w.subscriptionEnd,
                                payproSubscriptionId: w.payproSubscriptionId,
                                customerId: w.customerId,
                                subscriptionPlan: w.subscriptionPlan,
                                payproIsCanceled: w.payproIsCanceled
                            } : null,
                            refetchCredits: _,
                            country: x,
                            isCreditsLoading: b,
                            initalCreditsLoading: O
                        },
                        children: r
                    })
                },
                d = () => {
                    let e = (0, i.useContext)(o);
                    if (void 0 === e) throw Error("useUserSubscription must be used within a UserSubscriptionProvider");
                    return e
                }
        }
    }
]);