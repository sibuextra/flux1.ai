"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [11979], {
        11979: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return b
                }
            });
            var r = a(57437),
                s = a(2265),
                l = a(30767),
                n = a(92735),
                o = a(51817),
                i = a(43391),
                d = a(96362),
                c = a(50733),
                m = a(15393),
                u = a(1613),
                f = a(8733),
                x = a(71096),
                g = a.n(x),
                h = a(46175),
                p = a(14438),
                j = a(12381);

            function b(e) {
                let {
                    imgAfterSrc: t,
                    isdownLoading: a,
                    setIsdownLoading: x,
                    imageId: b,
                    showLikeButton: y = !0
                } = e, [w, v] = s.useState(!1), N = async e => {
                    if (e) {
                        x(!0);
                        try {
                            (0, h.default)("downloading...");
                            let t = await fetch(e, {
                                    mode: "cors"
                                }),
                                a = await t.blob(),
                                r = URL.createObjectURL(a),
                                s = document.createElement("a");
                            s.href = r, s.download = "".concat(f.hC, "-").concat(g()().format("YYYY-MM-DD"), ".").concat("png"), document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(r), h.default.success("download success!")
                        } catch (e) {
                            console.error("Failed to download the image:", e)
                        } finally {
                            x(!1)
                        }
                    }
                }, C = async e => {
                    if (!e) {
                        h.default.error("Sample images cannot be favorited, please generate an image first"), p.toast.error("Sample images cannot be favorited, please generate an image first");
                        return
                    }
                    try {
                        let t = !w;
                        v(t);
                        let a = h.default.success(t ? "Adding to favorites..." : "Removing from favorites...");
                        fetch("/api/toggle-favorite", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                imageId: e
                            })
                        }).then(async e => {
                            if (!e.ok) throw Error("Failed to set favorite");
                            let {
                                image: r
                            } = await e.json();
                            r.isFavorite !== t ? (v(r.isFavorite), h.default.success("Favorite status updated to ".concat(r.isFavorite ? "added" : "removed"))) : h.default.success(t ? "Added to favorites" : "Removed from favorites", {
                                id: a
                            })
                        }).catch(e => {
                            console.error("Error toggling favorite:", e), v(!t), h.default.error("Failed to update favorite status", {
                                id: a
                            })
                        })
                    } catch (e) {
                        console.error("Error in toggle favorite handler:", e), h.default.error("Something went wrong")
                    }
                };
                return (0, r.jsxs)("div", {
                    className: "space-y-4 w-full",
                    children: [t && y && (0, r.jsx)("div", {
                        className: "flex justify-end w-full",
                        children: (0, r.jsxs)(j.z, {
                            variant: "ghost",
                            onClick: () => C(b),
                            className: "h-10 px-3 flex items-center gap-2 text-gray-600 hover:bg-gray-100 transition-all rounded-md",
                            children: [w ? (0, r.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                className: "w-5 h-5 text-red-500",
                                children: (0, r.jsx)("path", {
                                    d: "M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                                })
                            }) : (0, r.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                className: "w-5 h-5",
                                children: (0, r.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                })
                            }), (0, r.jsx)("span", {
                                className: "font-medium",
                                children: w ? "Favorited" : "Add to favorites"
                            })]
                        })
                    }), (0, r.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-3 w-full",
                        children: [(0, r.jsxs)(j.z, {
                            variant: "outline",
                            onClick: () => N(t),
                            disabled: a,
                            className: "h-12 w-full flex items-center justify-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 transition-all rounded-md",
                            children: [(0, r.jsx)(n.Z, {
                                className: "w-5 h-5 text-gray-600"
                            }), a && (0, r.jsx)(o.Z, {
                                className: "animate-spin h-4 w-4 text-gray-600"
                            }), (0, r.jsx)("span", {
                                className: "text-gray-700 font-medium",
                                children: "Download"
                            })]
                        }), t && (0, r.jsxs)(l.aR, {
                            children: [(0, r.jsx)(l.vW, {
                                asChild: !0,
                                children: (0, r.jsxs)(j.z, {
                                    className: "h-12 w-full flex items-center justify-center gap-2 bg-blue-50 border border-blue-100 hover:bg-blue-100 text-blue-700 transition-all rounded-md",
                                    children: [(0, r.jsx)(i.Z, {
                                        className: "w-5 h-5"
                                    }), (0, r.jsx)("span", {
                                        className: "font-medium",
                                        children: "Enhance"
                                    })]
                                })
                            }), (0, r.jsxs)(l._T, {
                                className: "rounded-lg border border-gray-100 shadow-md bg-white",
                                children: [(0, r.jsxs)(l.fY, {
                                    children: [(0, r.jsx)("div", {
                                        className: "mx-auto bg-blue-50 p-3 rounded-full",
                                        children: (0, r.jsx)(i.Z, {
                                            className: "w-6 h-6 text-blue-600"
                                        })
                                    }), (0, r.jsx)(l.f$, {
                                        className: "text-xl font-semibold text-gray-800 text-center",
                                        children: "Enhance Your Image"
                                    }), (0, r.jsx)(l.yT, {
                                        className: "text-sm text-gray-600 leading-relaxed text-center",
                                        children: "Boost photo clarity, color, and resolution for better quality"
                                    })]
                                }), (0, r.jsxs)(l.xo, {
                                    className: "sm:space-x-4",
                                    children: [(0, r.jsx)(l.le, {
                                        className: "border-gray-200 text-gray-600 hover:bg-gray-50",
                                        children: "Cancel"
                                    }), (0, r.jsx)(l.OL, {
                                        className: "bg-blue-600 hover:bg-blue-700 text-white",
                                        asChild: !0,
                                        children: (0, r.jsxs)("a", {
                                            href: "/ai-image-enhancer?img_url=".concat((0, m.U)(t)),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "w-full flex items-center justify-center gap-2 font-medium",
                                            children: [(0, r.jsx)(i.Z, {
                                                className: "w-4 h-4"
                                            }), "Enhance Image", (0, r.jsx)(d.Z, {
                                                className: "w-3 h-3 ml-1 opacity-80"
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        }), t && (0, r.jsxs)(l.aR, {
                            children: [(0, r.jsx)(l.vW, {
                                asChild: !0,
                                children: (0, r.jsxs)(j.z, {
                                    className: "h-12 w-full flex items-center justify-center gap-2 bg-indigo-50 border border-indigo-100 hover:bg-indigo-100 text-indigo-700 transition-all rounded-md",
                                    children: [(0, r.jsx)(c.Z, {
                                        className: "w-5 h-5"
                                    }), (0, r.jsx)("span", {
                                        className: "font-medium",
                                        children: "Edit"
                                    })]
                                })
                            }), (0, r.jsxs)(l._T, {
                                className: "rounded-lg border border-gray-100 shadow-md bg-white",
                                children: [(0, r.jsxs)(l.fY, {
                                    className: "space-y-4",
                                    children: [(0, r.jsx)("div", {
                                        className: "mx-auto bg-indigo-50 p-3 rounded-full",
                                        children: (0, r.jsx)(c.Z, {
                                            className: "w-6 h-6 text-indigo-600"
                                        })
                                    }), (0, r.jsx)(l.f$, {
                                        className: "text-xl font-semibold text-gray-800 text-center",
                                        children: "Edit Your Image"
                                    }), (0, r.jsx)(l.yT, {
                                        className: "text-sm text-gray-600 leading-relaxed text-center",
                                        children: "Modify the image directly on the original using AI"
                                    })]
                                }), (0, r.jsxs)(l.xo, {
                                    className: "flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4",
                                    children: [(0, r.jsx)(l.le, {
                                        className: "w-full sm:w-auto order-2 sm:order-1 border-gray-200 text-gray-600 hover:bg-gray-50",
                                        children: "Cancel"
                                    }), (0, r.jsx)(l.OL, {
                                        className: "w-full sm:w-auto order-1 sm:order-2 bg-indigo-600 hover:bg-indigo-700 text-white",
                                        asChild: !0,
                                        children: (0, r.jsxs)("a", {
                                            href: "/flux-image-edit?img_url=".concat((0, m.U)(t)),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "w-full inline-flex items-center justify-center gap-2 font-medium px-6 py-2",
                                            children: [(0, r.jsx)(c.Z, {
                                                className: "w-4 h-4"
                                            }), "Edit Image", (0, r.jsx)(d.Z, {
                                                className: "w-3.5 h-3.5 ml-1 opacity-80"
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        }), t && (0, r.jsxs)(l.aR, {
                            children: [(0, r.jsx)(l.vW, {
                                asChild: !0,
                                children: (0, r.jsxs)(j.z, {
                                    className: "h-12 w-full flex items-center justify-center gap-2 bg-purple-50 border border-purple-100 hover:bg-purple-100 text-purple-700 transition-all rounded-md",
                                    children: [(0, r.jsx)(u.Z, {
                                        className: "w-5 h-5"
                                    }), (0, r.jsx)("span", {
                                        className: "font-medium",
                                        children: "To Video"
                                    })]
                                })
                            }), (0, r.jsxs)(l._T, {
                                className: "rounded-lg border border-gray-100 shadow-md bg-white",
                                children: [(0, r.jsxs)(l.fY, {
                                    className: "space-y-4",
                                    children: [(0, r.jsx)("div", {
                                        className: "mx-auto bg-purple-50 p-3 rounded-full",
                                        children: (0, r.jsx)(u.Z, {
                                            className: "w-6 h-6 text-purple-600"
                                        })
                                    }), (0, r.jsx)(l.f$, {
                                        className: "text-xl font-semibold text-gray-800 text-center",
                                        children: "Image To Video"
                                    }), (0, r.jsx)(l.yT, {
                                        className: "text-sm text-gray-600 leading-relaxed text-center",
                                        children: "Transform your static image into a dynamic video with AI"
                                    })]
                                }), (0, r.jsxs)(l.xo, {
                                    className: "flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4",
                                    children: [(0, r.jsx)(l.le, {
                                        className: "w-full sm:w-auto order-2 sm:order-1 border-gray-200 text-gray-600 hover:bg-gray-50",
                                        children: "Cancel"
                                    }), (0, r.jsx)(l.OL, {
                                        className: "w-full sm:w-auto order-1 sm:order-2 bg-purple-600 hover:bg-purple-700 text-white",
                                        asChild: !0,
                                        children: (0, r.jsxs)("a", {
                                            href: "/video/image-to-video-ai",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "w-full inline-flex items-center justify-center gap-2 font-medium px-6 py-2",
                                            children: [(0, r.jsx)(u.Z, {
                                                className: "w-4 h-4"
                                            }), "Create Video", (0, r.jsx)(d.Z, {
                                                className: "w-3.5 h-3.5 ml-1 opacity-80"
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        }), t && (0, r.jsxs)(l.aR, {
                            children: [(0, r.jsx)(l.vW, {
                                asChild: !0,
                                children: (0, r.jsxs)(j.z, {
                                    className: "h-12 w-full flex items-center justify-center gap-2 bg-teal-50 border border-teal-100 hover:bg-teal-100 text-teal-700 transition-all rounded-md",
                                    children: [(0, r.jsx)(i.Z, {
                                        className: "w-5 h-5"
                                    }), (0, r.jsx)("span", {
                                        className: "font-medium",
                                        children: "Upscale"
                                    })]
                                })
                            }), (0, r.jsxs)(l._T, {
                                className: "rounded-lg border border-gray-100 shadow-md bg-white",
                                children: [(0, r.jsxs)(l.fY, {
                                    className: "space-y-4",
                                    children: [(0, r.jsx)("div", {
                                        className: "mx-auto bg-teal-50 p-3 rounded-full",
                                        children: (0, r.jsx)(i.Z, {
                                            className: "w-6 h-6 text-teal-600"
                                        })
                                    }), (0, r.jsx)(l.f$, {
                                        className: "text-xl font-semibold text-gray-800 text-center",
                                        children: "Upscale Your Image"
                                    }), (0, r.jsx)(l.yT, {
                                        className: "text-sm text-gray-600 leading-relaxed text-center",
                                        children: "Enlarge images with sharp, high-quality results"
                                    })]
                                }), (0, r.jsxs)(l.xo, {
                                    className: "flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4",
                                    children: [(0, r.jsx)(l.le, {
                                        className: "w-full sm:w-auto order-2 sm:order-1 border-gray-200 text-gray-600 hover:bg-gray-50",
                                        children: "Cancel"
                                    }), (0, r.jsx)(l.OL, {
                                        className: "w-full sm:w-auto order-1 sm:order-2 bg-teal-600 hover:bg-teal-700 text-white",
                                        asChild: !0,
                                        children: (0, r.jsxs)("a", {
                                            href: "/ai-image-upscaler?img_url=".concat((0, m.U)(t)),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "w-full inline-flex items-center justify-center gap-2 font-medium px-6 py-2",
                                            children: [(0, r.jsx)(i.Z, {
                                                className: "w-4 h-4"
                                            }), "Upscale Image", (0, r.jsx)(d.Z, {
                                                className: "w-3.5 h-3.5 ml-1 opacity-80"
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        30767: function(e, t, a) {
            a.d(t, {
                OL: function() {
                    return p
                },
                _T: function() {
                    return u
                },
                aR: function() {
                    return i
                },
                f$: function() {
                    return g
                },
                fY: function() {
                    return f
                },
                le: function() {
                    return j
                },
                vW: function() {
                    return d
                },
                xo: function() {
                    return x
                },
                yT: function() {
                    return h
                }
            });
            var r = a(57437),
                s = a(2265),
                l = a(51502),
                n = a(93448),
                o = a(12381);
            let i = l.fC,
                d = l.xz,
                c = l.h_,
                m = s.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...s
                    } = e;
                    return (0, r.jsx)(l.aV, {
                        className: (0, n.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", a),
                        ...s,
                        ref: t
                    })
                });
            m.displayName = l.aV.displayName;
            let u = s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, r.jsxs)(c, {
                    children: [(0, r.jsx)(m, {}), (0, r.jsx)(l.VY, {
                        ref: t,
                        className: (0, n.cn)("fixed left-[50%] top-[50%] z-50 grid w-[calc(100%-2rem)] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", a),
                        ...s
                    })]
                })
            });
            u.displayName = l.VY.displayName;
            let f = e => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, n.cn)("flex flex-col space-y-2 text-center sm:text-left", t),
                    ...a
                })
            };
            f.displayName = "AlertDialogHeader";
            let x = e => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, n.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t),
                    ...a
                })
            };
            x.displayName = "AlertDialogFooter";
            let g = s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, r.jsx)(l.Dx, {
                    ref: t,
                    className: (0, n.cn)("text-lg font-semibold", a),
                    ...s
                })
            });
            g.displayName = l.Dx.displayName;
            let h = s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, r.jsx)(l.dk, {
                    ref: t,
                    className: (0, n.cn)("text-sm text-muted-foreground", a),
                    ...s
                })
            });
            h.displayName = l.dk.displayName;
            let p = s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, r.jsx)(l.aU, {
                    ref: t,
                    className: (0, n.cn)((0, o.d)(), a),
                    ...s
                })
            });
            p.displayName = l.aU.displayName;
            let j = s.forwardRef((e, t) => {
                let {
                    className: a,
                    ...s
                } = e;
                return (0, r.jsx)(l.$j, {
                    ref: t,
                    className: (0, n.cn)((0, o.d)({
                        variant: "outline"
                    }), "mt-2 sm:mt-0", a),
                    ...s
                })
            });
            j.displayName = l.$j.displayName
        },
        12381: function(e, t, a) {
            a.d(t, {
                d: function() {
                    return i
                },
                z: function() {
                    return d
                }
            });
            var r = a(57437),
                s = a(2265),
                l = a(98482),
                n = a(90535),
                o = a(93448);
            let i = (0, n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground hover:bg-primary/90",
                            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "text-primary underline-offset-4 hover:underline"
                        },
                        size: {
                            default: "h-10 px-4 py-2",
                            sm: "h-9 rounded-md px-3",
                            lg: "h-11 rounded-md px-8",
                            icon: "h-10 w-10"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                d = s.forwardRef((e, t) => {
                    let {
                        className: a,
                        variant: s,
                        size: n,
                        asChild: d = !1,
                        ...c
                    } = e, m = d ? l.g7 : "button";
                    return (0, r.jsx)(m, {
                        className: (0, o.cn)(i({
                            variant: s,
                            size: n,
                            className: a
                        })),
                        ref: t,
                        ...c
                    })
                });
            d.displayName = "Button"
        },
        15393: function(e, t, a) {
            a.d(t, {
                Q: function() {
                    return s
                },
                U: function() {
                    return r
                }
            });
            let r = e => Array.from(e).map(e => e.charCodeAt(0).toString(16).padStart(2, "0")).join(""),
                s = e => (e.match(/.{1,2}/g) || []).map(e => String.fromCharCode(parseInt(e, 16))).join("")
        },
        93448: function(e, t, a) {
            a.d(t, {
                Cv: function() {
                    return y
                },
                bA: function() {
                    return h
                },
                cn: function() {
                    return x
                },
                hv: function() {
                    return w
                },
                lY: function() {
                    return b
                },
                oo: function() {
                    return v
                },
                vQ: function() {
                    return g
                }
            });
            var r = a(61994),
                s = a(53335),
                l = a(66629),
                n = a(46175),
                o = a(14438),
                i = a(71096),
                d = a.n(i),
                c = a(16206),
                m = a.n(c),
                u = a(77360),
                f = a.n(u);

            function x() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return (0, s.m6)((0, r.W)(t))
            }
            async function g(e) {
                try {
                    await navigator.clipboard.writeText(e), o.toast.success("Copy to clipboard")
                } catch (a) {
                    let t = document.createElement("textarea");
                    t.value = e, document.body.appendChild(t), t.focus(), t.select();
                    try {
                        document.execCommand("copy"), n.default.success("Copy to clipboard"), o.toast.success("Copy to clipboard")
                    } catch (e) {
                        n.default.error("Copy Failed"), o.toast.error("Copy Failed")
                    }
                    document.body.removeChild(t)
                }
            }

            function h() {
                return d()().toDate()
            }
            d().extend(m()), d().extend(f()), (0, l.kP)("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 10);
            let p = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                j = ["15889666941@163.com", "liangjiongxin@gmail.com", "enqueueit@gmail.com", "audimail@163.com", "852234453@qq.com", "jarek@voix.com.au"];

            function b(e) {
                let t = e.slice(-1);
                return console.log("lastChar", t), parseInt(t, 36) % 10 + 1
            }

            function y(e, t) {
                if (j.includes(t)) return "paypro";
                let a = b(e);
                return p.includes(a) ? "new" : "old"
            }
            let w = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1024;
                return new Promise(a => {
                    let r = new Image,
                        s = window.URL || window.webkitURL,
                        l = s.createObjectURL(e);
                    r.onload = function() {
                        let n = r.width,
                            o = r.height;
                        n > o && n > t ? (o = Math.round(t * o / n), n = t) : o > t && (n = Math.round(t * n / o), o = t);
                        let i = document.createElement("canvas");
                        i.width = n, i.height = o;
                        let d = i.getContext("2d");
                        null == d || d.drawImage(r, 0, 0, n, o), i.toBlob(t => {
                            s.revokeObjectURL(l), t ? a(new File([t], e.name, {
                                type: "image/jpeg",
                                lastModified: Date.now()
                            })) : a(e)
                        }, "image/jpeg", .8)
                    }, r.src = l
                })
            };
            class v extends Error {
                constructor(e, t, a) {
                    super(t), this.status = e, this.data = a, this.name = "HttpError"
                }
            }
        }
    }
]);