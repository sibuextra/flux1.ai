(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [66826], {
        42311: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 88831))
        },
        76858: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return a
                }
            });
            let a = (0, r(43664).Z)("ArrowRight", [
                ["path", {
                    d: "M5 12h14",
                    key: "1ays0h"
                }],
                ["path", {
                    d: "m12 5 7 7-7 7",
                    key: "xquz4c"
                }]
            ])
        },
        95115: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return a
                }
            });
            let a = (0, r(43664).Z)("CircleArrowRight", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["path", {
                    d: "M8 12h8",
                    key: "1wcyev"
                }],
                ["path", {
                    d: "m12 16 4-4-4-4",
                    key: "1i9zcv"
                }]
            ])
        },
        49232: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return a
                }
            });
            let a = (0, r(43664).Z)("Coins", [
                ["circle", {
                    cx: "8",
                    cy: "8",
                    r: "6",
                    key: "3yglwk"
                }],
                ["path", {
                    d: "M18.09 10.37A6 6 0 1 1 10.34 18",
                    key: "t5s6rm"
                }],
                ["path", {
                    d: "M7 6h1v4",
                    key: "1obek4"
                }],
                ["path", {
                    d: "m16.71 13.88.7.71-2.82 2.82",
                    key: "1rbuyh"
                }]
            ])
        },
        27648: function(e, t, r) {
            "use strict";
            r.d(t, {
                default: function() {
                    return n.a
                }
            });
            var a = r(72972),
                n = r.n(a)
        },
        65740: function(e, t, r) {
            "use strict";
            var a = r(2265),
                n = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                i = a.useState,
                s = a.useEffect,
                o = a.useLayoutEffect,
                l = a.useDebugValue;

            function c(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var r = t();
                    return !n(e, r)
                } catch (e) {
                    return !0
                }
            }
            var u = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var r = t(),
                    a = i({
                        inst: {
                            value: r,
                            getSnapshot: t
                        }
                    }),
                    n = a[0].inst,
                    u = a[1];
                return o(function() {
                    n.value = r, n.getSnapshot = t, c(n) && u({
                        inst: n
                    })
                }, [e, r, t]), s(function() {
                    return c(n) && u({
                        inst: n
                    }), e(function() {
                        c(n) && u({
                            inst: n
                        })
                    })
                }, [e]), l(r), r
            };
            t.useSyncExternalStore = void 0 !== a.useSyncExternalStore ? a.useSyncExternalStore : u
        },
        488: function(e, t, r) {
            "use strict";
            var a = r(2265),
                n = r(68664),
                i = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                s = n.useSyncExternalStore,
                o = a.useRef,
                l = a.useEffect,
                c = a.useMemo,
                u = a.useDebugValue;
            t.useSyncExternalStoreWithSelector = function(e, t, r, a, n) {
                var d = o(null);
                if (null === d.current) {
                    var m = {
                        hasValue: !1,
                        value: null
                    };
                    d.current = m
                } else m = d.current;
                var f = s(e, (d = c(function() {
                    function e(e) {
                        if (!l) {
                            if (l = !0, s = e, e = a(e), void 0 !== n && m.hasValue) {
                                var t = m.value;
                                if (n(t, e)) return o = t
                            }
                            return o = e
                        }
                        if (t = o, i(s, e)) return t;
                        var r = a(e);
                        return void 0 !== n && n(t, r) ? t : (s = e, o = r)
                    }
                    var s, o, l = !1,
                        c = void 0 === r ? null : r;
                    return [function() {
                        return e(t())
                    }, null === c ? void 0 : function() {
                        return e(c())
                    }]
                }, [t, r, a, n]))[0], d[1]);
                return l(function() {
                    m.hasValue = !0, m.value = f
                }, [f]), u(f), f
            }
        },
        68664: function(e, t, r) {
            "use strict";
            e.exports = r(65740)
        },
        27507: function(e, t, r) {
            "use strict";
            e.exports = r(488)
        },
        71297: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return o
                }
            });
            var a = r(57437),
                n = r(49232),
                i = r(10407),
                s = r(95115);

            function o() {
                return (0, a.jsxs)("div", {
                    className: "flex flex-col gap-4 p-6 mb-5 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg mt-3 border border-red-100",
                    children: [(0, a.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [(0, a.jsx)(n.Z, {
                            className: "h-5 w-5 text-red-500"
                        }), (0, a.jsx)("p", {
                            className: "text-red-600 font-medium",
                            children: "Insufficient credits to generate image"
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "space-y-3",
                        children: [(0, a.jsx)("p", {
                            className: "text-gray-700",
                            children: "Upgrade to Premium to enjoy:"
                        }), (0, a.jsxs)("ul", {
                            className: "space-y-2 text-gray-600",
                            children: [(0, a.jsxs)("li", {
                                className: "flex items-center gap-2",
                                children: [(0, a.jsx)(i.Z, {
                                    className: "h-4 w-4 text-orange-500"
                                }), "More credits for image generation"]
                            }), (0, a.jsxs)("li", {
                                className: "flex items-center gap-2",
                                children: [(0, a.jsx)(i.Z, {
                                    className: "h-4 w-4 text-orange-500"
                                }), "Priority access to all features"]
                            }), (0, a.jsxs)("li", {
                                className: "flex items-center gap-2",
                                children: [(0, a.jsx)(i.Z, {
                                    className: "h-4 w-4 text-orange-500"
                                }), "Remove watermark from generated images"]
                            })]
                        })]
                    }), (0, a.jsxs)("a", {
                        href: "/price",
                        className: "inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-600 transition-colors duration-200 shadow-sm hover:shadow-md",
                        target: "_blank",
                        children: ["Upgrade Now", (0, a.jsx)(s.Z, {
                            className: "h-4 w-4"
                        })]
                    })]
                })
            }
        },
        38087: function(e, t, r) {
            "use strict";
            var a = r(57437),
                n = r(2265),
                i = r(86700),
                s = r(75060),
                o = r(93448),
                l = r(80670),
                c = r(12381),
                u = r(22135),
                d = r(40875),
                m = r(38706);
            let f = [{
                    ratio: "2:3",
                    aspectRatio: "2/3"
                }, {
                    ratio: "3:2",
                    aspectRatio: "3/2"
                }, {
                    ratio: "1:1",
                    aspectRatio: "1/1"
                }, {
                    ratio: "16:9",
                    aspectRatio: "16/9"
                }, {
                    ratio: "21:9",
                    aspectRatio: "21/9"
                }],
                p = [{
                    ratio: "9:16",
                    aspectRatio: "9/16"
                }, {
                    ratio: "9:21",
                    aspectRatio: "9/21"
                }, {
                    ratio: "4:5",
                    aspectRatio: "4/5"
                }, {
                    ratio: "5:4",
                    aspectRatio: "5/4"
                }, {
                    ratio: "3:4",
                    aspectRatio: "3/4"
                }, {
                    ratio: "4:3",
                    aspectRatio: "4/3"
                }],
                g = e => {
                    let {
                        ratio: t,
                        isSelected: r
                    } = e, [n, i] = t.split(":").map(Number), s = Math.min(24 / n, 24 / i);
                    return (0, a.jsxs)("div", {
                        className: "flex flex-col items-center justify-center w-full h-full",
                        children: [(0, a.jsx)("div", {
                            className: (0, o.cn)("border transition-colors", r ? "border-indigo-600" : "border-gray-300"),
                            style: {
                                width: "".concat(n * s, "px"),
                                height: "".concat(i * s, "px")
                            }
                        }), (0, a.jsx)("span", {
                            className: "text-xs mt-1",
                            children: t
                        })]
                    })
                };
            t.Z = e => {
                let {
                    form: t,
                    name: r,
                    show21: x = !1,
                    showCustom: h = !1,
                    showMoreDimension: b = !0
                } = e, [y, v] = (0, n.useState)(b), j = y ? [...f.filter(e => !!x || !e.ratio.includes("21")), ...p.filter(e => !!x || !e.ratio.includes("21")), ...h ? [{
                    ratio: "custom",
                    aspectRatio: "custom"
                }] : []] : f.filter(e => !!x || !e.ratio.includes("21")), w = (0, m.T_)("LoraPageForm");
                return (0, a.jsx)(l.Wi, {
                    control: t.control,
                    name: r,
                    render: e => {
                        let {
                            field: t
                        } = e;
                        return (0, a.jsxs)(l.xJ, {
                            className: "space-y-2",
                            children: [(0, a.jsx)(l.lX, {
                                className: "text-sm font-medium",
                                children: w("lora-page-form-image-dimensions-title")
                            }), (0, a.jsx)(l.pf, {
                                className: "text-xs text-gray-500",
                                children: w("lora-page-form-image-dimensions-desc")
                            }), (0, a.jsx)(l.NI, {
                                children: (0, a.jsxs)("div", {
                                    className: "space-y-2",
                                    children: [(0, a.jsx)(i.E, {
                                        onValueChange: t.onChange,
                                        value: t.value,
                                        className: "flex flex-wrap gap-2",
                                        children: j.map(e => (0, a.jsxs)("div", {
                                            className: "flex-shrink-0",
                                            children: [(0, a.jsx)(i.m, {
                                                value: e.ratio,
                                                id: "".concat(r, "-").concat(e.ratio),
                                                className: "peer sr-only",
                                                "aria-label": e.ratio
                                            }), (0, a.jsx)(s.Label, {
                                                htmlFor: "".concat(r, "-").concat(e.ratio),
                                                className: (0, o.cn)("flex items-center justify-center w-16 h-16 rounded-md border cursor-pointer transition-all duration-200", t.value === e.ratio ? "border-indigo-600 bg-indigo-50" : "border-gray-200 hover:border-indigo-300"),
                                                children: (0, a.jsx)(g, {
                                                    ratio: e.ratio,
                                                    isSelected: t.value === e.ratio
                                                })
                                            })]
                                        }, e.ratio))
                                    }), (0, a.jsx)(c.z, {
                                        type: "button",
                                        variant: "ghost",
                                        size: "sm",
                                        className: "w-full text-sm text-gray-500 hover:text-gray-700 py-1",
                                        onClick: () => v(!y),
                                        children: y ? (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)(u.Z, {
                                                className: "w-4 h-4 mr-2"
                                            }), w("lora-page-form-image-dimension-fewer")]
                                        }) : (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)(d.Z, {
                                                className: "w-4 h-4 mr-2"
                                            }), w("lora-page-form-image-dimension-more")]
                                        })
                                    })]
                                })
                            })]
                        })
                    }
                })
            }
        },
        88831: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return Z
                }
            });
            var a = r(57437),
                n = r(79820),
                i = r(96362),
                s = r(51817),
                o = r(27648),
                l = r(2265),
                c = r(46175);
            r(71096);
            var u = r(99376),
                d = r(8733),
                m = r(12381),
                f = r(80670),
                p = r(13590),
                g = r(29501),
                x = r(60381),
                h = r(14438),
                b = r(76858),
                y = r(23675),
                v = r(94589),
                j = r(37464),
                w = r(38087),
                N = r(40279),
                z = r(21873);

            function S(e) {
                let {
                    trainModel: t,
                    isLoading: r,
                    defaultModelParams: n,
                    credits: i
                } = e;
                (0, u.useRouter)();
                let {
                    userStatus: S,
                    isLoading: k
                } = (0, z.Z)(), E = (0, g.cI)({
                    resolver: (0, p.F)(x.lJ),
                    defaultValues: {
                        prompt: (null == n ? void 0 : n.prompt) || "Three adults are dressed in colorful animal costumes at a club, including a blue bunny with a white cloud pattern, a pink bunny with white polka dots, and a yellow bunny with pink ears, all smiling and posing for a photo",
                        is_public: !1,
                        imageDimension: (null == n ? void 0 : n.aspect_ratio) || "1:1",
                        raw: !1
                    }
                });
                (0, l.useEffect)(() => {
                    E.setValue("is_public", !S)
                }, [S, E]);
                let [C, _] = (0, l.useState)(!1), R = async e => {
                    try {
                        await t({
                            prompt: e.prompt,
                            aspect_ratio: e.imageDimension,
                            raw: e.raw,
                            seed: e.seed
                        })
                    } catch (e) {
                        console.log("error"), c.default.error("ai img error")
                    }
                }, F = e => {
                    if (console.log("is_public ", e), !e && !S) {
                        h.toast.warning("Only Paid User can set it private, please upgrade"), _(!0);
                        return
                    }
                    E.setValue("is_public", e)
                };
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(f.l0, { ...E,
                        children: (0, a.jsxs)("form", {
                            onSubmit: E.handleSubmit(R),
                            className: "rounded-md flex flex-col gap-4 md:gap-5",
                            children: [(0, a.jsx)(f.Wi, {
                                control: E.control,
                                name: "prompt",
                                render: e => {
                                    let {
                                        field: t
                                    } = e;
                                    return (0, a.jsxs)(f.xJ, {
                                        className: "w-full rounded-md",
                                        children: [(0, a.jsx)(f.lX, {
                                            children: "Prompt"
                                        }), (0, a.jsxs)(f.pf, {
                                            children: ["Describe your ", d.iC, " image, Default: a person"]
                                        }), (0, a.jsx)(f.NI, {
                                            children: (0, a.jsx)(y.g, {
                                                placeholder: "e.g. Natalie Headshots",
                                                ...t,
                                                className: "max-w-screen-sm",
                                                autoComplete: "off"
                                            })
                                        }), (0, a.jsx)(f.zG, {})]
                                    })
                                }
                            }), (0, a.jsx)(f.Wi, {
                                control: E.control,
                                name: "raw",
                                render: e => {
                                    let {
                                        field: t
                                    } = e;
                                    return (0, a.jsx)(f.xJ, {
                                        className: "flex flex-col rounded-lg  ",
                                        children: (0, a.jsxs)("div", {
                                            className: "flex items-center justify-between",
                                            children: [(0, a.jsxs)("div", {
                                                className: "flex flex-col gap-2",
                                                children: [(0, a.jsx)(f.lX, {
                                                    children: "Raw Mode"
                                                }), (0, a.jsx)(f.pf, {
                                                    children: "Make your images more natural"
                                                })]
                                            }), (0, a.jsx)(v.r, {
                                                checked: t.value,
                                                onCheckedChange: t.onChange,
                                                className: "ml-2 bg-blue-600 data-[state=checked]:bg-blue-600 mr-4"
                                            })]
                                        })
                                    })
                                }
                            }), (0, a.jsx)(w.Z, {
                                form: E,
                                name: "imageDimension",
                                show21: !0
                            }), (0, a.jsx)(f.Wi, {
                                control: E.control,
                                name: "seed",
                                render: e => {
                                    let {
                                        field: t
                                    } = e;
                                    return (0, a.jsxs)(f.xJ, {
                                        className: "w-full rounded-md",
                                        children: [(0, a.jsx)(f.lX, {
                                            children: "Seed (Optional)"
                                        }), (0, a.jsx)(f.pf, {
                                            children: "Random Seed, useful for generating the same style image"
                                        }), (0, a.jsx)(f.NI, {
                                            children: (0, a.jsx)(N.I, {
                                                type: "number",
                                                ...t,
                                                onChange: e => t.onChange(Number(e.target.value))
                                            })
                                        }), (0, a.jsx)(f.zG, {})]
                                    })
                                }
                            }), !S && !k && (0, a.jsx)(f.Wi, {
                                control: E.control,
                                name: "is_public",
                                render: e => {
                                    let {
                                        field: t
                                    } = e;
                                    return (0, a.jsxs)(f.xJ, {
                                        className: "flex flex-col rounded-lg border p-4 shadow-sm",
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex items-center justify-between mb-2",
                                            children: [(0, a.jsx)(f.lX, {
                                                className: "text-base font-semibold",
                                                children: "Display Public"
                                            }), (0, a.jsx)(v.r, {
                                                checked: t.value,
                                                onCheckedChange: e => F(e),
                                                className: "ml-2 bg-blue-600 data-[state=checked]:bg-blue-600"
                                            })]
                                        }), (0, a.jsx)(f.pf, {
                                            className: "text-sm text-gray-500",
                                            children: "Free Usage will be public, upgrade to make it private"
                                        }), (0, a.jsxs)(o.default, {
                                            className: "text-indigo-600 hover:text-indigo-800 font-medium text-sm mt-2 inline-flex items-center",
                                            href: "/price",
                                            children: ["View pricing", (0, a.jsx)(b.Z, {
                                                className: "ml-1 w-4 h-4"
                                            })]
                                        })]
                                    })
                                }
                            }), (0, a.jsxs)(m.z, {
                                type: "submit",
                                className: "w-full flex gap-2 bg-blue-600 hover:bg-blue-700 transition-colors duration-150",
                                disabled: r,
                                children: [r && (0, a.jsx)(s.Z, {
                                    className: "animate-spin w-4 h-4"
                                }), "Run", i && (0, a.jsxs)("span", {
                                    className: "ml-1",
                                    children: ["( ", i || 1, " Credit)"]
                                })]
                            }), (0, a.jsxs)("p", {
                                className: "text-sm font-medium text-indigo-600 hover:text-indigo-500 flex justify-center",
                                children: ["Contact: ", "   ", (0, a.jsx)("a", {
                                    href: "mailto:support@flux1.ai",
                                    className: "underline ml-2",
                                    children: "support@flux1.ai"
                                })]
                            })]
                        })
                    }), (0, a.jsx)(j.Z, {
                        dialogOpen: C,
                        setDialogOpen: _
                    })]
                })
            }
            var k = r(38706),
                E = r(70387),
                C = r(79599);
            let _ = [{
                    question: "What is Flux 1.1 Pro Ultra?",
                    answer: "Flux 1.1 Pro Ultra is an advanced AI image generator model that can create highly realistic images up to 4 megapixels in resolution. It offers both ultra and raw modes for maximum flexibility in image generation."
                }, {
                    question: "What are the key features of Flux 1.1 Pro Ultra?",
                    answer: "The key features include the ability to generate images up to 4 megapixels in size, a raw mode optimized for photorealistic outputs, and enhanced natural image generation capabilities compared to previous models."
                }, {
                    question: "How can I try Flux 1.1 Pro Ultra?",
                    answer: "You can try Flux 1.1 Pro Ultra for free by logging into your account. New users get one free generation to experience the enhanced capabilities of this advanced model."
                }, {
                    question: "What is the difference between ultra and raw modes?",
                    answer: "While both modes can generate high-quality images, the raw mode is specifically optimized for creating highly realistic and natural-looking images. Ultra mode offers more general-purpose image generation capabilities."
                }, {
                    question: "What makes Flux 1.1 Pro Ultra different from other models?",
                    answer: "Flux 1.1 Pro Ultra stands out with its ability to generate larger 4 megapixel images, enhanced realism particularly in raw mode, and improved natural image generation compared to previous versions."
                }],
                R = ["https://imgc.cc/2025/01/17/6789cc8d3cd31.png", "https://imgc.cc/2025/01/17/6789cc9236271.png", "https://imgc.cc/2025/01/17/6789cc925c010.png"];
            var F = r(11979),
                I = r(85448),
                P = r(71297),
                T = r(26071);

            function Z(e) {
                let {} = e;
                (0, u.useRouter)();
                let [t, r] = (0, l.useState)(!1), {
                    setCredits: m,
                    credits: f,
                    isLoading: p
                } = (0, E._)(), {
                    userStatus: g,
                    subscriptionPlan: x
                } = (0, z.Z)();
                g || d.Xn;
                let [h, b] = (0, l.useState)(!1), y = (0, u.useSearchParams)().get("imageId"), v = T.$.find(e => e.id === Number(y)), [j, w] = (0, l.useState)((null == v ? void 0 : v.img_url) || "https://replicate.delivery/czjl/MAmPIV8yJ864Lx0lGHkApfxoxfI8mzl1nUaoFfAsSVdTHvcnA/output.jpg"), [N, Z] = (0, l.useState)(!1), [U, A] = (0, l.useState)(!1), [D, L] = (0, l.useState)(void 0), [M, q] = (0, l.useState)(null), O = {
                    prompt: (null == v ? void 0 : v.prompt_eng) || "Three adults are dressed in colorful animal costumes at a club, including a blue bunny with a white cloud pattern, a pink bunny with white polka dots, and a yellow bunny with pink ears, all smiling and posing for a photo"
                }, [W, V] = (0, l.useState)([]), G = async (e, t) => {
                    let r;
                    c.default.success("img generate success, fetching");
                    try {
                        r = setInterval(async () => {
                            let a;
                            a = t ? await fetch("/api/result/".concat(e)) : await fetch("/api/flux/task", {
                                body: JSON.stringify({
                                    id: e
                                }),
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                method: "POST"
                            });
                            let n = await a.json();
                            0 === n.status || (1 === n.status ? (clearInterval(r), w(n.imgAfterSrc), L(n.seed), q(n.imageId), Z(!1)) : 2 === n.status && (A(!0), clearInterval(r), Z(!1)))
                        }, 5e3)
                    } catch (e) {
                        c.default.error("Network error"), void 0 !== r && clearInterval(r), Z(!1)
                    }
                }, J = async e => {
                    if (c.default.success("submiting to ".concat(d.iC)), Z(!0), w(void 0), A(!1), e.prompt === O.prompt) {
                        await c.default.promise(new Promise(e => {
                            setTimeout(() => {
                                w(R[Math.floor(Math.random() * R.length)]), Z(!1), e(null)
                            }, 2e3)
                        }), {
                            loading: "Generating Image...",
                            success: "Image Success!",
                            error: "Image Error!"
                        });
                        return
                    }
                    try {
                        let t;
                        t = await c.default.promise(fetch("/api/text-to-img-ultra", {
                            method: "POST",
                            body: JSON.stringify({
                                prompt: e.prompt,
                                aspect_ratio: e.aspect_ratio,
                                img_credits: f,
                                raw: e.raw,
                                seed: e.seed
                            })
                        }), {
                            loading: "Generating flux image ...",
                            success: "Task submitted, Fetching Status!",
                            error: "Flux Image generation failed!"
                        });
                        let r = await t.json();
                        if (200 === t.status && r.replicateId) G(r.replicateId, !0);
                        else if (200 === t.status && r.imageAfterSrc) w(r.imageAfterSrc), Z(!1);
                        else if (200 === t.status && r.bfl_id) G(r.bfl_id, !1);
                        else if (429 === t.status) c.default.error("Free User Can Not Submit Too Fast, Please Upgrade to Submit Without Waiting"), Z(!1), setTimeout(() => {}, 1e3);
                        else if (402 === t.status) c.default.error("Not enough credits"), Z(!1), b(!0);
                        else if (400 === t.status || 401 === t.status) c.default.error("error : ".concat(r.message)), Z(!1), setTimeout(() => {}, 1e3);
                        else throw c.default.error("Generate Img Error "), Error("replicate error");
                        c.default.success("Success!")
                    } catch (e) {
                        c.default.error("Upload failed, please try again."), Z(!1), A(!0)
                    }
                }, H = (0, k.T_)("Flux11UltraPage");
                return (0, a.jsxs)("div", {
                    className: "p-4 max-w-7xl mx-auto",
                    children: [(0, a.jsxs)("div", {
                        className: "text-center mb-8",
                        children: [(0, a.jsx)("h1", {
                            className: "text-3xl font-bold mb-2 text-gray-800",
                            children: H("title")
                        }), (0, a.jsx)("h2", {
                            className: "text-xl text-gray-600",
                            children: H("desc")
                        })]
                    }), (0, a.jsx)("div", {
                        className: "flex justify-center mb-6",
                        children: (0, a.jsxs)(o.default, {
                            href: "/prompt-generator",
                            className: "text-base sm:text-lg font-semibold text-indigo-500 flex items-center gap-2 text-center underline",
                            children: ["Prompt Generator By ", d.iC, " ", (0, a.jsx)(i.Z, {
                                className: "w-4 h-4"
                            })]
                        })
                    }), (0, a.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6",
                        children: [(0, a.jsxs)(n.Zb, {
                            className: "shadow-md border-gray-200 hover:shadow-lg hover:shadow-indigo-300 transition-shadow duration-300",
                            children: [(0, a.jsxs)(n.Ol, {
                                children: [(0, a.jsx)(n.ll, {
                                    className: "text-xl sm:text-2xl",
                                    children: "Flux 1.1 Pro Ultra AI Image Generator"
                                }), (0, a.jsx)(n.SZ, {
                                    children: "Select a style, type to get your own flux ai image"
                                })]
                            }), (0, a.jsx)(n.aY, {
                                children: (0, a.jsx)(S, {
                                    trainModel: J,
                                    isLoading: N,
                                    credits: 6,
                                    defaultModelParams: O
                                })
                            })]
                        }), (0, a.jsxs)(n.Zb, {
                            className: "w-full h-full shadow-md border-gray-200 hover:shadow-lg   transition-shadow duration-300",
                            children: [(0, a.jsx)(n.Ol, {
                                children: (0, a.jsx)(n.ll, {
                                    className: "text-xl sm:text-2xl",
                                    children: "Flux 1.1 Pro Ultra AI Image Generator"
                                })
                            }), (0, a.jsxs)(n.aY, {
                                children: [N && (0, a.jsx)("div", {
                                    className: "flex justify-center",
                                    children: (0, a.jsx)(s.Z, {
                                        className: "animate-spin h-8 w-8 text-indigo-500"
                                    })
                                }), h && (0, a.jsx)(P.Z, {}), j && (0, a.jsxs)("div", {
                                    className: "flex flex-col gap-3",
                                    children: [(0, a.jsx)(I.TV, {
                                        children: (0, a.jsx)(I.HI, {
                                            src: j,
                                            children: (0, a.jsx)("img", {
                                                alt: "generate image by ".concat(d.iC),
                                                src: j,
                                                className: "w-full h-auto rounded-lg shadow-md hover:cursor-pointer"
                                            })
                                        })
                                    }), D && (0, a.jsxs)("div", {
                                        className: "flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-md border border-gray-200",
                                        children: [(0, a.jsx)("span", {
                                            className: "text-sm font-medium text-gray-700",
                                            children: "Seed:"
                                        }), (0, a.jsx)("code", {
                                            className: "px-2 py-1 bg-white rounded text-sm text-indigo-600 font-mono",
                                            children: D
                                        })]
                                    }), (0, a.jsx)(F.Z, {
                                        imgAfterSrc: j,
                                        isdownLoading: t,
                                        setIsdownLoading: r,
                                        imageId: M
                                    }), W.length > 0 && (0, a.jsxs)("div", {
                                        className: "flex flex-col gap-3 p-4 bg-gray-50 rounded-lg mt-3",
                                        children: [(0, a.jsx)("p", {
                                            className: "text-gray-700 font-medium",
                                            children: "Possible Categories:"
                                        }), (0, a.jsx)("div", {
                                            className: "flex flex-wrap gap-2 mt-2",
                                            children: W.map(e => (0, a.jsx)("span", {
                                                className: "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100 hover:bg-indigo-100 transition-colors duration-200",
                                                children: e
                                            }, e))
                                        })]
                                    })]
                                }), U && (0, a.jsxs)("div", {
                                    className: "flex flex-col gap-3 p-4 bg-red-50 rounded-lg mt-3",
                                    children: [(0, a.jsx)("p", {
                                        className: "text-red-600 font-medium",
                                        children: "Image generation failed. Don't worry - no credits were deducted."
                                    }), (0, a.jsxs)("div", {
                                        className: "text-gray-700",
                                        children: ["Here are some options to resolve this:", (0, a.jsxs)("ul", {
                                            className: "list-disc ml-5 mt-2 space-y-1",
                                            children: [(0, a.jsx)("li", {
                                                children: "Try generating the image again"
                                            }), (0, a.jsx)("li", {
                                                children: "Use a different prompt or modify your existing one"
                                            }), (0, a.jsx)("li", {
                                                children: "Note: NSWF Content is not allowed!!"
                                            }), !g && (0, a.jsx)("li", {
                                                children: (0, a.jsx)("a", {
                                                    href: "/price",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-indigo-600 hover:text-indigo-500 hover:underline",
                                                    children: "Upgrade to Premium for priority access and faster generation"
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    }), (0, a.jsx)(C.Z, {
                        faqs: _,
                        faqTitle: "Flux 1.1 Pro Ultra FAQ"
                    })]
                })
            }
        },
        79599: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return n
                }
            });
            var a = r(57437);

            function n(e) {
                let {
                    faqs: t,
                    faqTitle: r
                } = e;
                return (0, a.jsx)("div", {
                    className: " ",
                    children: (0, a.jsxs)("div", {
                        className: "mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8",
                        children: [(0, a.jsx)("h2", {
                            className: "text-2xl font-bold leading-10 tracking-tight text-gray-700",
                            children: r
                        }), (0, a.jsxs)("p", {
                            className: "mt-6 max-w-2xl text-base leading-7 text-gray-600",
                            children: ["Have a different question and can’t find the answer you’re looking for? Reach out to our support team by", " ", (0, a.jsx)("a", {
                                href: "mailto:support@flux1.ai",
                                className: "font-semibold text-indigo-400 hover:text-indigo-300",
                                children: "sending us an email"
                            }), " ", "and we’ll get back to you as soon as we can."]
                        }), (0, a.jsx)("div", {
                            className: "mt-20",
                            children: (0, a.jsx)("dl", {
                                className: "space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10",
                                children: t.map((e, t) => (0, a.jsxs)("div", {
                                    children: [(0, a.jsx)("h3", {
                                        className: "text-base font-semibold leading-7 text-gray-700",
                                        children: e.question
                                    }), (0, a.jsx)("p", {
                                        className: "mt-2 text-base leading-7 text-gray-600",
                                        children: e.answer
                                    })]
                                }, t))
                            })
                        })]
                    })
                })
            }
        },
        79820: function(e, t, r) {
            "use strict";
            r.d(t, {
                Ol: function() {
                    return o
                },
                SZ: function() {
                    return c
                },
                Zb: function() {
                    return s
                },
                aY: function() {
                    return u
                },
                eW: function() {
                    return d
                },
                ll: function() {
                    return l
                }
            });
            var a = r(57437),
                n = r(2265),
                i = r(93448);
            let s = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, a.jsx)("div", {
                    ref: t,
                    className: (0, i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", r),
                    ...n
                })
            });
            s.displayName = "Card";
            let o = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, a.jsx)("div", {
                    ref: t,
                    className: (0, i.cn)("flex flex-col space-y-1.5 p-6", r),
                    ...n
                })
            });
            o.displayName = "CardHeader";
            let l = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, a.jsx)("h3", {
                    ref: t,
                    className: (0, i.cn)("text-2xl font-semibold leading-none tracking-tight", r),
                    ...n
                })
            });
            l.displayName = "CardTitle";
            let c = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, a.jsx)("p", {
                    ref: t,
                    className: (0, i.cn)("text-sm text-muted-foreground", r),
                    ...n
                })
            });
            c.displayName = "CardDescription";
            let u = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, a.jsx)("div", {
                    ref: t,
                    className: (0, i.cn)("p-6 pt-0", r),
                    ...n
                })
            });
            u.displayName = "CardContent";
            let d = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, a.jsx)("div", {
                    ref: t,
                    className: (0, i.cn)("flex items-center p-6 pt-0", r),
                    ...n
                })
            });
            d.displayName = "CardFooter"
        },
        80670: function(e, t, r) {
            "use strict";
            r.d(t, {
                NI: function() {
                    return x
                },
                Wi: function() {
                    return d
                },
                l0: function() {
                    return c
                },
                lX: function() {
                    return g
                },
                pf: function() {
                    return h
                },
                xJ: function() {
                    return p
                },
                zG: function() {
                    return b
                }
            });
            var a = r(57437),
                n = r(2265),
                i = r(98482),
                s = r(29501),
                o = r(93448),
                l = r(75060);
            let c = s.RV,
                u = n.createContext({}),
                d = e => {
                    let { ...t
                    } = e;
                    return (0, a.jsx)(u.Provider, {
                        value: {
                            name: t.name
                        },
                        children: (0, a.jsx)(s.Qr, { ...t
                        })
                    })
                },
                m = () => {
                    let e = n.useContext(u),
                        t = n.useContext(f),
                        {
                            getFieldState: r,
                            formState: a
                        } = (0, s.Gc)(),
                        i = r(e.name, a);
                    if (!e) throw Error("useFormField should be used within <FormField>");
                    let {
                        id: o
                    } = t;
                    return {
                        id: o,
                        name: e.name,
                        formItemId: "".concat(o, "-form-item"),
                        formDescriptionId: "".concat(o, "-form-item-description"),
                        formMessageId: "".concat(o, "-form-item-message"),
                        ...i
                    }
                },
                f = n.createContext({}),
                p = n.forwardRef((e, t) => {
                    let {
                        className: r,
                        ...i
                    } = e, s = n.useId();
                    return (0, a.jsx)(f.Provider, {
                        value: {
                            id: s
                        },
                        children: (0, a.jsx)("div", {
                            ref: t,
                            className: (0, o.cn)("space-y-2", r),
                            ...i
                        })
                    })
                });
            p.displayName = "FormItem";
            let g = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e, {
                    error: i,
                    formItemId: s
                } = m();
                return (0, a.jsx)(l.Label, {
                    ref: t,
                    className: (0, o.cn)(i && "text-destructive", r),
                    htmlFor: s,
                    ...n
                })
            });
            g.displayName = "FormLabel";
            let x = n.forwardRef((e, t) => {
                let { ...r
                } = e, {
                    error: n,
                    formItemId: s,
                    formDescriptionId: o,
                    formMessageId: l
                } = m();
                return (0, a.jsx)(i.g7, {
                    ref: t,
                    id: s,
                    "aria-describedby": n ? "".concat(o, " ").concat(l) : "".concat(o),
                    "aria-invalid": !!n,
                    ...r
                })
            });
            x.displayName = "FormControl";
            let h = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e, {
                    formDescriptionId: i
                } = m();
                return (0, a.jsx)("p", {
                    ref: t,
                    id: i,
                    className: (0, o.cn)("text-sm text-muted-foreground", r),
                    ...n
                })
            });
            h.displayName = "FormDescription";
            let b = n.forwardRef((e, t) => {
                let {
                    className: r,
                    children: n,
                    ...i
                } = e, {
                    error: s,
                    formMessageId: l
                } = m(), c = s ? String(null == s ? void 0 : s.message) : n;
                return c ? (0, a.jsx)("p", {
                    ref: t,
                    id: l,
                    className: (0, o.cn)("text-sm font-medium text-destructive", r),
                    ...i,
                    children: c
                }) : null
            });
            b.displayName = "FormMessage"
        },
        40279: function(e, t, r) {
            "use strict";
            r.d(t, {
                I: function() {
                    return s
                }
            });
            var a = r(57437),
                n = r(2265),
                i = r(93448);
            let s = n.forwardRef((e, t) => {
                let {
                    className: r,
                    type: n,
                    ...s
                } = e;
                return (0, a.jsx)("input", {
                    type: n,
                    className: (0, i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", r),
                    ref: t,
                    ...s
                })
            });
            s.displayName = "Input"
        },
        75060: function(e, t, r) {
            "use strict";
            r.d(t, {
                Label: function() {
                    return c
                }
            });
            var a = r(57437),
                n = r(2265),
                i = r(370),
                s = r(90535),
                o = r(93448);
            let l = (0, s.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
                c = n.forwardRef((e, t) => {
                    let {
                        className: r,
                        ...n
                    } = e;
                    return (0, a.jsx)(i.f, {
                        ref: t,
                        className: (0, o.cn)(l(), r),
                        ...n
                    })
                });
            c.displayName = i.f.displayName
        },
        86700: function(e, t, r) {
            "use strict";
            r.d(t, {
                E: function() {
                    return l
                },
                m: function() {
                    return c
                }
            });
            var a = r(57437),
                n = r(2265),
                i = r(61957),
                s = r(40519),
                o = r(93448);
            let l = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, a.jsx)(i.fC, {
                    className: (0, o.cn)("grid gap-2", r),
                    ...n,
                    ref: t
                })
            });
            l.displayName = i.fC.displayName;
            let c = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, a.jsx)(i.ck, {
                    ref: t,
                    className: (0, o.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", r),
                    ...n,
                    children: (0, a.jsx)(i.z$, {
                        className: "flex items-center justify-center",
                        children: (0, a.jsx)(s.Z, {
                            className: "h-2.5 w-2.5 fill-current text-current"
                        })
                    })
                })
            });
            c.displayName = i.ck.displayName
        },
        94589: function(e, t, r) {
            "use strict";
            r.d(t, {
                r: function() {
                    return o
                }
            });
            var a = r(57437),
                n = r(2265),
                i = r(50721),
                s = r(93448);
            let o = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, a.jsx)(i.fC, {
                    className: (0, s.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", r),
                    ...n,
                    ref: t,
                    children: (0, a.jsx)(i.bU, {
                        className: (0, s.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
                    })
                })
            });
            o.displayName = i.fC.displayName
        },
        23675: function(e, t, r) {
            "use strict";
            r.d(t, {
                g: function() {
                    return s
                }
            });
            var a = r(57437),
                n = r(2265),
                i = r(93448);
            let s = n.forwardRef((e, t) => {
                let {
                    className: r,
                    ...n
                } = e;
                return (0, a.jsx)("textarea", {
                    className: (0, i.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", r),
                    ref: t,
                    ...n
                })
            });
            s.displayName = "Textarea"
        },
        21873: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return a
                }
            });
            let a = (0, r(59625).Ue)(e => {
                let t = async () => {
                    e({
                        isLoading: !0
                    });
                    try {
                        let t = await fetch("/api/user-subscription");
                        if (!t.ok) throw Error("Failed to fetch subscription status");
                        let r = await t.json();
                        e({
                            userStatus: r.user_status,
                            subscriptionPlan: r.subscriptionPlan,
                            error: null
                        })
                    } catch (t) {
                        e({
                            error: t instanceof Error ? t : Error("An unknown error occurred")
                        })
                    } finally {
                        e({
                            isLoading: !1
                        })
                    }
                };
                return t(), {
                    userStatus: null,
                    subscriptionPlan: null,
                    isLoading: !0,
                    error: null,
                    fetchSubscriptionStatus: t,
                    refetchStatus: t
                }
            })
        },
        60381: function(e, t, r) {
            "use strict";
            r.d(t, {
                JM: function() {
                    return o
                },
                KH: function() {
                    return m
                },
                Tn: function() {
                    return l
                },
                lJ: function() {
                    return n
                },
                o3: function() {
                    return i
                },
                pq: function() {
                    return d
                },
                qJ: function() {
                    return s
                },
                qK: function() {
                    return u
                },
                zw: function() {
                    return c
                }
            });
            var a = r(31229);
            let n = a.z.object({
                    prompt: a.z.string().min(1),
                    width: a.z.number().optional(),
                    height: a.z.number().optional(),
                    is_public: a.z.boolean().default(!0),
                    aspect_ratio: a.z.string().default("1:1"),
                    seed: a.z.number().optional(),
                    num_inference_steps: a.z.number().optional(),
                    output_quality: a.z.number().optional(),
                    megapixels: a.z.string().optional(),
                    watermark: a.z.boolean().optional()
                }).passthrough(),
                i = a.z.object({
                    gender: a.z.string(),
                    watermark: a.z.boolean(),
                    advanced: a.z.boolean()
                }).passthrough();
            a.z.object({
                prompt: a.z.string().min(1),
                is_public: a.z.boolean().default(!0),
                imageDimension: a.z.string().default("1:1"),
                raw: a.z.boolean().default(!1),
                seed: a.z.number().optional()
            });
            let s = a.z.object({
                    prompt: a.z.string().min(1),
                    is_public: a.z.boolean().default(!0),
                    imageDimension: a.z.string().default("1:1"),
                    raw: a.z.boolean().default(!1),
                    seed: a.z.number().optional(),
                    image_file: a.z.object({
                        type: a.z.enum(["file", "url"]),
                        value: a.z.union([a.z.instanceof(File).refine(e => 0 !== e.size, "Please upload a start frame"), a.z.string().url("Please enter a valid URL")])
                    }).refine(e => void 0 !== e, "Please select an image file or enter a URL"),
                    image_prompt_strength: a.z.number().optional()
                }),
                o = a.z.object({
                    prompt: a.z.string().min(1),
                    width: a.z.number().optional(),
                    height: a.z.number().optional(),
                    is_public: a.z.boolean().default(!0),
                    aspect_ratio: a.z.string().default("1:1"),
                    seed: a.z.number().optional(),
                    steps: a.z.number().optional(),
                    guidance: a.z.number().optional(),
                    interval: a.z.number().optional(),
                    prompt_upsampling: a.z.boolean().optional(),
                    output_quality: a.z.number().optional()
                }).passthrough(),
                l = a.z.object({
                    file1: a.z.instanceof(File).optional(),
                    file2: a.z.instanceof(File).optional()
                }),
                c = a.z.object({
                    prompt: a.z.string(),
                    aspect_ratio: a.z.string(),
                    seed: a.z.number().optional(),
                    is_public: a.z.boolean().default(!0),
                    num_inference_steps: a.z.number().optional(),
                    guidance: a.z.number().optional(),
                    output_quality: a.z.number().optional(),
                    megapixels: a.z.string().optional()
                }),
                u = a.z.object({
                    model_image: a.z.object({
                        type: a.z.enum(["file", "url"]),
                        value: a.z.any()
                    }),
                    garment_image: a.z.object({
                        type: a.z.enum(["file", "url"]),
                        value: a.z.any()
                    }),
                    category: a.z.enum(["tops", "bottoms", "one-pieces"]),
                    advancedMode: a.z.boolean().default(!1),
                    watermark: a.z.boolean().default(!0)
                });
            a.z.object({
                code: a.z.number(),
                msg: a.z.string(),
                data: a.z.object({
                    taskId: a.z.string(),
                    paramJson: a.z.string(),
                    completeTime: a.z.number(),
                    response: a.z.object({
                        resultUrls: a.z.array(a.z.string()).nullable()
                    }),
                    successFlag: a.z.number(),
                    status: a.z.enum(["GENERATING", "SUCCESS", "CREATE_TASK_FAILED", "GENERATE_FAILED"]),
                    errorCode: a.z.number().optional(),
                    errorMessage: a.z.string().optional(),
                    createTime: a.z.number(),
                    progress: a.z.string()
                })
            });
            let d = a.z.object({
                    combinedFile: a.z.instanceof(File).optional(),
                    prompt: a.z.string(),
                    is_public: a.z.boolean().default(!0),
                    isAdvancedMode: a.z.boolean().default(!1),
                    duration: a.z.enum(["5", "10"]).default("5"),
                    watermark: a.z.boolean().default(!0)
                }),
                m = a.z.object({
                    combinedFile: a.z.instanceof(File).optional(),
                    prompt: a.z.string(),
                    is_public: a.z.boolean().default(!0),
                    isAdvancedMode: a.z.boolean().default(!1),
                    watermark: a.z.boolean().default(!0)
                })
        },
        52871: function(e, t, r) {
            "use strict";
            var a = r(2265);
            let n = a.forwardRef(function(e, t) {
                let {
                    title: r,
                    titleId: n,
                    ...i
                } = e;
                return a.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    "data-slot": "icon",
                    ref: t,
                    "aria-labelledby": n
                }, i), r ? a.createElement("title", {
                    id: n
                }, r) : null, a.createElement("path", {
                    fillRule: "evenodd",
                    d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
                    clipRule: "evenodd"
                }))
            });
            t.Z = n
        },
        50721: function(e, t, r) {
            "use strict";
            r.d(t, {
                bU: function() {
                    return N
                },
                fC: function() {
                    return w
                }
            });
            var a = r(2265),
                n = r(6741),
                i = r(98575),
                s = r(73966),
                o = r(80886),
                l = r(6718),
                c = r(90420),
                u = r(82912),
                d = r(57437),
                m = "Switch",
                [f, p] = (0, s.b)(m),
                [g, x] = f(m),
                h = a.forwardRef((e, t) => {
                    let {
                        __scopeSwitch: r,
                        name: s,
                        checked: l,
                        defaultChecked: c,
                        required: m,
                        disabled: f,
                        value: p = "on",
                        onCheckedChange: x,
                        form: h,
                        ...b
                    } = e, [y, w] = a.useState(null), N = (0, i.e)(t, e => w(e)), z = a.useRef(!1), S = !y || h || !!y.closest("form"), [k = !1, E] = (0, o.T)({
                        prop: l,
                        defaultProp: c,
                        onChange: x
                    });
                    return (0, d.jsxs)(g, {
                        scope: r,
                        checked: k,
                        disabled: f,
                        children: [(0, d.jsx)(u.WV.button, {
                            type: "button",
                            role: "switch",
                            "aria-checked": k,
                            "aria-required": m,
                            "data-state": j(k),
                            "data-disabled": f ? "" : void 0,
                            disabled: f,
                            value: p,
                            ...b,
                            ref: N,
                            onClick: (0, n.M)(e.onClick, e => {
                                E(e => !e), S && (z.current = e.isPropagationStopped(), z.current || e.stopPropagation())
                            })
                        }), S && (0, d.jsx)(v, {
                            control: y,
                            bubbles: !z.current,
                            name: s,
                            value: p,
                            checked: k,
                            required: m,
                            disabled: f,
                            form: h,
                            style: {
                                transform: "translateX(-100%)"
                            }
                        })]
                    })
                });
            h.displayName = m;
            var b = "SwitchThumb",
                y = a.forwardRef((e, t) => {
                    let {
                        __scopeSwitch: r,
                        ...a
                    } = e, n = x(b, r);
                    return (0, d.jsx)(u.WV.span, {
                        "data-state": j(n.checked),
                        "data-disabled": n.disabled ? "" : void 0,
                        ...a,
                        ref: t
                    })
                });
            y.displayName = b;
            var v = e => {
                let {
                    control: t,
                    checked: r,
                    bubbles: n = !0,
                    ...i
                } = e, s = a.useRef(null), o = (0, l.D)(r), u = (0, c.t)(t);
                return a.useEffect(() => {
                    let e = s.current,
                        t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
                    if (o !== r && t) {
                        let a = new Event("click", {
                            bubbles: n
                        });
                        t.call(e, r), e.dispatchEvent(a)
                    }
                }, [o, r, n]), (0, d.jsx)("input", {
                    type: "checkbox",
                    "aria-hidden": !0,
                    defaultChecked: r,
                    ...i,
                    tabIndex: -1,
                    ref: s,
                    style: { ...e.style,
                        ...u,
                        position: "absolute",
                        pointerEvents: "none",
                        opacity: 0,
                        margin: 0
                    }
                })
            };

            function j(e) {
                return e ? "checked" : "unchecked"
            }
            var w = h,
                N = y
        },
        48672: function(e, t, r) {
            "use strict";
            r.d(t, {
                J: function() {
                    return g
                }
            });
            var a, n = "https://js.stripe.com/v3",
                i = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
                s = function() {
                    for (var e = document.querySelectorAll('script[src^="'.concat(n, '"]')), t = 0; t < e.length; t++) {
                        var r = e[t];
                        if (i.test(r.src)) return r
                    }
                    return null
                },
                o = function(e) {
                    var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
                        r = document.createElement("script");
                    r.src = "".concat(n).concat(t);
                    var a = document.head || document.body;
                    if (!a) throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
                    return a.appendChild(r), r
                },
                l = function(e, t) {
                    e && e._registerWrapper && e._registerWrapper({
                        name: "stripe-js",
                        version: "3.4.1",
                        startTime: t
                    })
                },
                c = null,
                u = null,
                d = null,
                m = function(e, t, r) {
                    if (null === e) return null;
                    var a = e.apply(void 0, t);
                    return l(a, r), a
                },
                f = !1,
                p = function() {
                    return a || (a = (null !== c ? c : (c = new Promise(function(e, t) {
                        if ("undefined" == typeof window || "undefined" == typeof document) {
                            e(null);
                            return
                        }
                        if (window.Stripe, window.Stripe) {
                            e(window.Stripe);
                            return
                        }
                        try {
                            var r, a = s();
                            a ? a && null !== d && null !== u && (a.removeEventListener("load", d), a.removeEventListener("error", u), null === (r = a.parentNode) || void 0 === r || r.removeChild(a), a = o(null)) : a = o(null), d = function() {
                                window.Stripe ? e(window.Stripe) : t(Error("Stripe.js not available"))
                            }, u = function() {
                                t(Error("Failed to load Stripe.js"))
                            }, a.addEventListener("load", d), a.addEventListener("error", u)
                        } catch (e) {
                            t(e);
                            return
                        }
                    })).catch(function(e) {
                        return c = null, Promise.reject(e)
                    })).catch(function(e) {
                        return a = null, Promise.reject(e)
                    }))
                };
            Promise.resolve().then(function() {
                return p()
            }).catch(function(e) {
                f || console.warn(e)
            });
            var g = function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                f = !0;
                var a = Date.now();
                return p().then(function(e) {
                    return m(e, t, a)
                })
            }
        },
        38706: function(e, t, r) {
            "use strict";
            r.d(t, {
                T_: function() {
                    return i
                }
            });
            var a = r(58598);

            function n(e, t) {
                return (...e) => {
                    try {
                        return t(...e)
                    } catch {
                        throw Error(void 0)
                    }
                }
            }
            let i = n(0, a.T_);
            n(0, a.Gb)
        },
        59625: function(e, t, r) {
            "use strict";
            r.d(t, {
                Ue: function() {
                    return m
                }
            });
            let a = e => {
                    let t;
                    let r = new Set,
                        a = (e, a) => {
                            let n = "function" == typeof e ? e(t) : e;
                            if (!Object.is(n, t)) {
                                let e = t;
                                t = (null != a ? a : "object" != typeof n || null === n) ? n : Object.assign({}, t, n), r.forEach(r => r(t, e))
                            }
                        },
                        n = () => t,
                        i = {
                            setState: a,
                            getState: n,
                            getInitialState: () => s,
                            subscribe: e => (r.add(e), () => r.delete(e)),
                            destroy: () => {
                                console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), r.clear()
                            }
                        },
                        s = t = e(a, n, i);
                    return i
                },
                n = e => e ? a(e) : a;
            var i = r(2265),
                s = r(27507);
            let {
                useDebugValue: o
            } = i, {
                useSyncExternalStoreWithSelector: l
            } = s, c = !1, u = e => e, d = e => {
                "function" != typeof e && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
                let t = "function" == typeof e ? n(e) : e,
                    r = (e, r) => (function(e, t = u, r) {
                        r && !c && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"), c = !0);
                        let a = l(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, r);
                        return o(a), a
                    })(t, e, r);
                return Object.assign(r, t), r
            }, m = e => e ? d(e) : d
        }
    },
    function(e) {
        e.O(0, [58598, 23566, 86545, 85323, 87770, 72972, 58309, 10288, 88085, 51502, 97854, 55775, 66830, 8733, 11979, 37464, 19294, 92971, 52117, 1744], function() {
            return e(e.s = 42311)
        }), _N_E = e.O()
    }
]);