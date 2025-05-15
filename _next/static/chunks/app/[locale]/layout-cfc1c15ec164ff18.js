(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [91203, 8733], {
        72431: function() {},
        34752: function(e, t, a) {
            Promise.resolve().then(a.bind(a, 3058)), Promise.resolve().then(a.bind(a, 13091)), Promise.resolve().then(a.bind(a, 67679)), Promise.resolve().then(a.bind(a, 91265)), Promise.resolve().then(a.bind(a, 13841)), Promise.resolve().then(a.bind(a, 79441)), Promise.resolve().then(a.t.bind(a, 24610, 23)), Promise.resolve().then(a.bind(a, 46175)), Promise.resolve().then(a.bind(a, 14438)), Promise.resolve().then(a.bind(a, 38557)), Promise.resolve().then(a.bind(a, 21521)), Promise.resolve().then(a.bind(a, 19271)), Promise.resolve().then(a.bind(a, 66978)), Promise.resolve().then(a.bind(a, 44903)), Promise.resolve().then(a.bind(a, 38896)), Promise.resolve().then(a.bind(a, 96804)), Promise.resolve().then(a.bind(a, 72518)), Promise.resolve().then(a.bind(a, 70387))
        },
        38557: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return h
                }
            });
            var r = a(57437),
                i = a(37742),
                s = a(1097),
                n = a(46332),
                o = a(2265),
                l = a(74291),
                c = a(12381);
            a(46175);
            var d = a(87770),
                m = a(99376),
                u = a(70387);

            function h() {
                let [e, t] = (0, o.useState)(!1), [a, h] = (0, o.useState)(!1), f = (0, m.useRouter)(), {
                    isSignedIn: p
                } = (0, d.aF)(), {
                    isLoading: x,
                    userStatus: g
                } = (0, u._)();
                return e || x || g ? null : (0, r.jsx)("div", {
                    className: "relative isolate overflow-hidden bg-gray-900 px-4 py-2.5 sm:px-3.5 rounded-md",
                    children: (0, r.jsxs)("div", {
                        className: "flex items-center justify-between md:justify-center md:max-w-4xl md:mx-auto gap-2",
                        children: [(0, r.jsxs)("p", {
                            className: "text-xs sm:text-sm text-gray-200 md:flex md:items-center",
                            children: [(0, r.jsxs)("span", {
                                className: "font-semibold text-yellow-400 mr-2 flex items-center gap-1",
                                children: [(0, r.jsx)(i.Z, {
                                    className: "h-4 w-4 text-yellow-400 mr-1",
                                    "aria-hidden": "true"
                                }), "Annual Sale!"]
                            }), "Get 40% off", (0, r.jsxs)(l.Vq, {
                                open: a,
                                onOpenChange: h,
                                children: [(0, r.jsx)(l.hg, {
                                    asChild: !0,
                                    children: (0, r.jsx)("button", {
                                        className: "inline-flex items-center",
                                        title: "Black Friday Offer Details",
                                        children: (0, r.jsx)(s.Z, {
                                            className: "h-4 w-4 text-gray-400 hover:text-gray-300 ml-1"
                                        })
                                    })
                                }), (0, r.jsx)(l.cZ, {
                                    className: "sm:max-w-[900px] overflow-hidden bg-white text-black rounded-lg max-h-[100vh] w-[95vw] sm:w-auto md:p-2",
                                    closeButtonClassName: "bg-white p-2 text-black",
                                    closeIconClassName: "h-5 w-5",
                                    children: (0, r.jsxs)("div", {
                                        className: "flex flex-col xl:flex-row overflow-y-auto",
                                        children: [(0, r.jsx)("div", {
                                            className: "flex-1 p-3 sm:p-6",
                                            children: (0, r.jsxs)(l.fK, {
                                                className: "space-y-4 sm:space-y-6",
                                                children: [(0, r.jsxs)(l.$N, {
                                                    className: "text-center space-y-4 sm:space-y-8",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "text-xl sm:text-2xl font-bold tracking-tight text-gray-600",
                                                        children: "Annual Sale"
                                                    }), (0, r.jsxs)("div", {
                                                        className: "",
                                                        children: [(0, r.jsx)("div", {
                                                            className: "text-5xl sm:text-7xl font-serif font-bold  bg-gradient-to-r  from-indigo-600 to-purple-600 text-transparent bg-clip-text  animate-pulse",
                                                            children: "40% OFF"
                                                        }), (0, r.jsx)("div", {
                                                            className: "text-xl sm:text-2xl font-bold text-gray-600 mt-2",
                                                            children: "For Annual Plan"
                                                        })]
                                                    })]
                                                }), (0, r.jsx)(l.Be, {
                                                    className: "text-center ",
                                                    children: (0, r.jsx)("div", {
                                                        className: "mt-5 sm:mt-8",
                                                        children: (0, r.jsx)(c.z, {
                                                            onClick: () => {
                                                                p || f.push("/sign-in"), h(!1)
                                                            },
                                                            className: " w-full bg-[#15232D] hover:bg-[#1c2e3a] text-white py-6 text-xl font-bold rounded-md ",
                                                            children: "JOIN Flux.1 AI"
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: "flex-1",
                                            children: (0, r.jsx)("img", {
                                                src: "https://r2.flux1.ai/fluxai/2024/11/cta-2_11zon.webp",
                                                alt: "Promotional Image",
                                                className: "h-full w-full object-cover rounded-lg"
                                            })
                                        })]
                                    })
                                })]
                            }), (0, r.jsxs)("a", {
                                href: "/price",
                                className: "ml-2 text-yellow-400 font-semibold hover:text-yellow-300 underline whitespace-nowrap",
                                children: ["Claim Now", (0, r.jsx)("span", {
                                    className: "ml-0.5",
                                    children: "→"
                                })]
                            })]
                        }), (0, r.jsxs)("button", {
                            type: "button",
                            className: "p-1 focus-visible:outline-offset-[-4px] md:absolute md:right-4",
                            onClick: () => t(!0),
                            children: [(0, r.jsx)("span", {
                                className: "sr-only",
                                children: "Dismiss"
                            }), (0, r.jsx)(n.Z, {
                                "aria-hidden": "true",
                                className: "h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-300"
                            })]
                        })]
                    })
                })
            }
        },
        21521: function(e, t, a) {
            "use strict";
            a.d(t, {
                AttributionInitializer: function() {
                    return o
                }
            });
            var r = a(2265),
                i = a(99376),
                s = a(4142),
                n = a(72694);

            function o() {
                let {
                    source: e,
                    setSource: t,
                    initializeSource: a
                } = (0, s.g)(), o = (0, i.useSearchParams)(), [l, c] = (0, n._)("first-visit-path", null);
                return (0, r.useEffect)(() => {
                    if (null === l && c(window.location.pathname), null === e) {
                        let e;
                        if (a(), o.get("gclid")) e = "google_ads";
                        else if (o.get("utm_source")) {
                            let t = o.get("utm_source");
                            e = "utm_".concat(t)
                        } else if (o.get("ref")) e = "referral_".concat(o.get("ref"));
                        else if (o.get("f")) e = "campaign_".concat(o.get("f"));
                        else {
                            let t = document.referrer;
                            if (t) {
                                let a = new URL(t),
                                    r = new URL(window.location.href);
                                e = a.hostname.includes("google") ? "google_organic" : a.hostname !== r.hostname ? "referral_".concat(a.hostname) : "direct"
                            } else e = "direct"
                        }
                        t(e)
                    }
                }, [e, t, a, o]), null
            }
        },
        19271: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return u
                }
            });
            var r = a(57437);
            a(2265);
            var i = a(27648),
                s = a(8733),
                n = a(70387),
                o = a(10407),
                l = a(99376);
            let c = [{
                code: "de",
                name: "Deutsch",
                flag: "\uD83C\uDDE9\uD83C\uDDEA"
            }, {
                code: "en",
                name: "English",
                flag: "\uD83C\uDDFA\uD83C\uDDF8"
            }, {
                code: "es",
                name: "Espa\xf1ol",
                flag: "\uD83C\uDDEA\uD83C\uDDF8"
            }, {
                code: "fr",
                name: "Fran\xe7ais",
                flag: "\uD83C\uDDEB\uD83C\uDDF7"
            }, {
                code: "it",
                name: "Italiano",
                flag: "\uD83C\uDDEE\uD83C\uDDF9"
            }, {
                code: "ja",
                name: "日本語",
                flag: "\uD83C\uDDEF\uD83C\uDDF5"
            }, {
                code: "kk",
                name: "Қазақ",
                flag: "\uD83C\uDDF0\uD83C\uDDFF"
            }, {
                code: "ko",
                name: "한국어",
                flag: "\uD83C\uDDF0\uD83C\uDDF7"
            }, {
                code: "pt",
                name: "Portugu\xeas",
                flag: "\uD83C\uDDF5\uD83C\uDDF9"
            }, {
                code: "ru",
                name: "Русский",
                flag: "\uD83C\uDDF7\uD83C\uDDFA"
            }, {
                code: "uk",
                name: "Українська",
                flag: "\uD83C\uDDFA\uD83C\uDDE6"
            }, {
                code: "vi",
                name: "Tiếng Việt",
                flag: "\uD83C\uDDFB\uD83C\uDDF3"
            }];
            var d = () => {
                    let e = (0, l.useRouter)(),
                        t = (0, l.usePathname)(),
                        a = (() => {
                            if ("/" === t) return "";
                            let e = t.split("/"),
                                a = e[1];
                            return c.some(e => e.code === a) ? e.slice(2).join("/") : t.startsWith("/") ? t.slice(1) : t
                        })();
                    return (0, r.jsx)("div", {
                        className: "flex flex-wrap justify-center gap-2 mt-4",
                        children: c.map(t => {
                            let s = "en" === t.code ? a ? "/".concat(a) : "/" : a ? "/".concat(t.code, "/").concat(a) : "/".concat(t.code);
                            return (0, r.jsxs)(i.default, {
                                href: s,
                                className: "flex items-center gap-1.5 px-2 py-1.5 rounded-md transition-all duration-300 text-sm  bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-200",
                                onClick: t => {
                                    t.preventDefault(), e.push(s)
                                },
                                children: [(0, r.jsx)("span", {
                                    className: "text-base",
                                    role: "img",
                                    "aria-label": t.name,
                                    children: t.flag
                                }), (0, r.jsx)("span", {
                                    className: "text-xs",
                                    children: t.name
                                })]
                            }, t.code)
                        })
                    })
                },
                m = a(34057);

            function u(e) {
                let {} = e, {
                    userStatus: t
                } = (0, n._)();
                return (0, r.jsx)("footer", {
                    className: "mt-20 w-full px-4 py-8 sm:px-6 lg:px-8",
                    children: (0, r.jsxs)("div", {
                        className: "mx-auto max-w-7xl",
                        children: [(0, r.jsxs)("div", {
                            className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6",
                            children: [(0, r.jsxs)("div", {
                                className: "col-span-1 lg:col-span-1",
                                children: [(0, r.jsxs)("a", {
                                    href: "/",
                                    className: "flex items-center mb-4",
                                    children: [(0, r.jsx)("img", {
                                        src: "/logo.svg",
                                        alt: "".concat(s.iC, " logo"),
                                        className: "h-8 w-auto mr-3"
                                    }), (0, r.jsx)("span", {
                                        className: "text-lg font-semibold",
                                        children: s.iC
                                    })]
                                }), (0, r.jsx)("div", {
                                    children: (0, r.jsxs)("p", {
                                        className: "text-sm text-gray-500 mt-2",
                                        children: ["\xa9 ", new Date().getFullYear(), " ", s.iC, ", Inc. All rights reserved."]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "mt-3 md:mt-8",
                                    children: (0, r.jsx)(m.Z, {})
                                })]
                            }), (0, r.jsxs)("div", {
                                children: [(0, r.jsx)("h3", {
                                    className: "text-sm font-semibold uppercase tracking-wider text-gray-400",
                                    children: "Flux Tools"
                                }), (0, r.jsx)("ul", {
                                    className: "mt-4 space-y-2",
                                    children: [{
                                        title: "Flux Inpainting",
                                        href: "/flux-inpainting"
                                    }, {
                                        title: "Flux Outpainting",
                                        href: "/flux-outpainting"
                                    }, {
                                        title: "Flux Redux",
                                        href: "/flux-redux"
                                    }, {
                                        title: "Flux Canny",
                                        href: "/flux-canny"
                                    }, {
                                        title: "Flux Depth",
                                        href: "/flux-depth"
                                    }, {
                                        title: "Flux Fill",
                                        href: "/flux-fill"
                                    }, {
                                        title: "Flux Image to Image",
                                        href: "/flux-image-to-image"
                                    }, {
                                        title: "Flux Image Edit",
                                        href: "/flux-image-edit"
                                    }].map(e => (0, r.jsx)("li", {
                                        children: (0, r.jsx)("a", {
                                            href: e.href,
                                            className: "text-sm text-gray-600 hover:text-blue-500 transition-colors duration-200",
                                            children: e.title
                                        })
                                    }, e.href))
                                })]
                            }), (0, r.jsxs)("div", {
                                children: [(0, r.jsx)("h3", {
                                    className: "text-sm font-semibold uppercase tracking-wider text-gray-400",
                                    children: "Link"
                                }), (0, r.jsx)("ul", {
                                    className: "mt-4 space-y-2",
                                    children: [{
                                        title: "AI Dance Generator",
                                        href: "/video/ai-dance-generator"
                                    }, {
                                        title: "Kolors Virtual Try On",
                                        href: "/kolors-virtual-tryon"
                                    }, {
                                        title: "Flux 1.1 Pro Ultra Prompts",
                                        href: "/prompts/flux1-1-pro-ultra"
                                    }, {
                                        title: "French Kiss AI",
                                        href: "/features/french-kiss-ai"
                                    }, {
                                        title: "GPT Image Generator",
                                        href: "/gpt-image-generator"
                                    }, {
                                        title: "GPT Image 1",
                                        href: "/features/gpt-image1"
                                    }, {
                                        title: "Baby Face Generator",
                                        href: "/features/baby-face-generator"
                                    }, {
                                        title: "Kling AI Video Generator",
                                        href: "/video/kling-ai"
                                    }, {
                                        title: "Flux AI Ghibli",
                                        href: "/features/flux-ai-ghibli"
                                    }, {
                                        title: "Home",
                                        href: "/home"
                                    }, {
                                        title: "Image to Video AI",
                                        href: "/video/image-to-video-ai"
                                    }, {
                                        title: "Flux AI Image Generator",
                                        href: "/create"
                                    }, {
                                        title: "Flux 1.1",
                                        href: "/flux1-1"
                                    }, {
                                        title: "Flux Pro",
                                        href: "/flux-pro"
                                    }, {
                                        title: "Flux Lora",
                                        href: "/gallery"
                                    }, {
                                        title: "Examples",
                                        href: "/examples"
                                    }, {
                                        title: "Features",
                                        href: "/features"
                                    }, {
                                        title: "Blog",
                                        href: "/blog"
                                    }].map(e => (0, r.jsx)("li", {
                                        children: (0, r.jsx)(i.default, {
                                            href: e.href,
                                            className: "text-sm text-gray-600 hover:text-blue-500 transition-colors duration-200",
                                            children: e.title
                                        })
                                    }, e.href))
                                })]
                            }), (0, r.jsxs)("div", {
                                children: [(0, r.jsx)("h3", {
                                    className: "text-sm font-semibold uppercase tracking-wider text-gray-400",
                                    children: "Magic Tools"
                                }), (0, r.jsxs)("ul", {
                                    className: "mt-4 space-y-2",
                                    children: [
                                        [{
                                            title: "GPT Image 1",
                                            href: "/gpt-image1"
                                        }, {
                                            title: "AI Headshot Generator",
                                            href: "/generator/ai-headshot-generator"
                                        }, {
                                            title: "AI Barbie Box",
                                            href: "/ai-barbie-box"
                                        }, {
                                            title: "Studio Ghibli AI",
                                            href: "/studio-ghibli"
                                        }, {
                                            title: "Flux Coloring Book",
                                            href: "/flux-coloring-book"
                                        }, {
                                            title: "Magic Edit",
                                            href: "/magic-edit"
                                        }, {
                                            title: "AI Background Change",
                                            href: "/ai-background-change"
                                        }, {
                                            title: "Logo Mockup Generator",
                                            href: "/logo-mockup"
                                        }, {
                                            title: "Object Remover",
                                            href: "/object-remover"
                                        }, {
                                            title: "AI Image Upscaler",
                                            href: "/ai-image-upscaler"
                                        }, {
                                            title: "Disney AI Poster",
                                            href: "/disney-ai-poster"
                                        }, {
                                            title: "AI Emoji Generator",
                                            href: "/ai-emoji-generator"
                                        }, {
                                            title: "AI Logo Generator",
                                            href: "/ai-logo-generator"
                                        }, {
                                            title: "AI Icon Generator",
                                            href: "/ai-icon-generator"
                                        }, {
                                            title: "AI Vector Generator",
                                            href: "/ai-vector-generator"
                                        }, {
                                            title: "Flux Dev",
                                            href: "/flux-dev"
                                        }].map(e => (0, r.jsx)("li", {
                                            children: (0, r.jsx)("a", {
                                                href: e.href,
                                                className: "text-sm text-gray-600 hover:text-blue-500 transition-colors duration-200",
                                                children: e.title
                                            })
                                        }, e.href)), (0, r.jsx)("li", {
                                            children: (0, r.jsxs)(i.default, {
                                                href: "/home",
                                                className: "text-sm text-gray-600 hover:text-blue-500 transition-colors duration-200 flex items-center gap-2 ",
                                                children: ["View All", (0, r.jsx)(o.Z, {
                                                    className: "w-4 h-4"
                                                })]
                                            })
                                        })
                                    ]
                                })]
                            }), (0, r.jsxs)("div", {
                                children: [(0, r.jsx)("h3", {
                                    className: "text-sm font-semibold uppercase tracking-wider text-gray-400",
                                    children: "Free Tools"
                                }), (0, r.jsx)("ul", {
                                    className: "mt-4 space-y-2",
                                    children: [{
                                        title: "Image To Caption",
                                        href: "/image-to-caption"
                                    }, {
                                        title: "Image To Prompt",
                                        href: "/image-to-prompt"
                                    }, {
                                        title: "Prompt Generator",
                                        href: "/prompt-generator"
                                    }, {
                                        title: "Remove Background",
                                        href: "/remove-background"
                                    }, {
                                        title: "AI Photo Restore",
                                        href: "/photo-restore"
                                    }].map(e => (0, r.jsx)("li", {
                                        children: (0, r.jsx)("a", {
                                            href: e.href,
                                            className: "text-sm text-gray-600 hover:text-blue-500 transition-colors duration-200",
                                            children: e.title
                                        })
                                    }, e.href))
                                })]
                            }), (0, r.jsxs)("div", {
                                children: [(0, r.jsx)("h3", {
                                    className: "text-sm font-semibold uppercase tracking-wider text-gray-400",
                                    children: "Video Effects"
                                }), (0, r.jsxs)("ul", {
                                    className: "mt-4 space-y-2",
                                    children: [
                                        [{
                                            title: "AI Princess Carry Video Generator",
                                            href: "/video-effects/ai-princess-carry-generator"
                                        }, {
                                            title: "AI Sway Dance Effect",
                                            href: "/video-effects/ai-sway-dance"
                                        }, {
                                            title: "AI Explosion Generator",
                                            href: "/video-effects/ai-explosion-generator"
                                        }, {
                                            title: "AI Rain Kiss Video Generator",
                                            href: "/video-effects/ai-rain-kiss-video-generator"
                                        }, {
                                            title: "AI Twerk Generator",
                                            href: "/video-effects/ai-twerk-generator"
                                        }, {
                                            title: "AI Pet Lovers Video Generator",
                                            href: "/video-effects/ai-pet-lovers-video-generator"
                                        }, {
                                            title: "AI Hair Swap Video Generator",
                                            href: "/video-effects/ai-hair-swap-video-generator"
                                        }, {
                                            title: "AI Couple Kissing Video Generator",
                                            href: "/video-effects/ai-couple-kissing-video-generator"
                                        }, {
                                            title: "AI Gender Swap Video Generator",
                                            href: "/video-effects/ai-gender-swap-video-generator"
                                        }, {
                                            title: "AI Bikini & Muscular Video Generator",
                                            href: "/video-effects/ai-bikini-muscular-video-generator"
                                        }, {
                                            title: "Bodyshake AI Video Generator",
                                            href: "/video-effects/bodyshake-ai-video-generator"
                                        }].map(e => (0, r.jsx)("li", {
                                            children: (0, r.jsx)(i.default, {
                                                href: e.href,
                                                className: "text-sm text-gray-600 hover:text-blue-500 transition-colors duration-200",
                                                children: e.title
                                            })
                                        }, e.href)), (0, r.jsx)("li", {
                                            children: (0, r.jsxs)(i.default, {
                                                href: "/video-effects",
                                                className: "text-sm text-gray-600 hover:text-blue-500 transition-colors duration-200 flex items-center gap-2 ",
                                                children: ["View All Effects", (0, r.jsx)(o.Z, {
                                                    className: "w-4 h-4"
                                                })]
                                            })
                                        })
                                    ]
                                })]
                            })]
                        }), (0, r.jsx)(d, {}), (0, r.jsx)("div", {
                            className: "mt-8 border-t border-gray-200 pt-8",
                            children: (0, r.jsx)("div", {
                                className: "flex flex-col sm:flex-row justify-between",
                                children: (0, r.jsxs)("div", {
                                    className: "flex space-x-6",
                                    children: [(0, r.jsx)("a", {
                                        href: "/privacy",
                                        className: "text-sm text-gray-600 hover:text-blue-500 transition-colors duration-200",
                                        children: "Privacy Policy"
                                    }), (0, r.jsx)("a", {
                                        href: "/terms",
                                        className: "text-sm text-gray-600 hover:text-blue-500 transition-colors duration-200",
                                        children: "Terms of Service"
                                    })]
                                })
                            })
                        })]
                    })
                })
            }
        },
        66978: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return eE
                }
            });
            var r = a(57437),
                i = a(2265),
                s = a(62883),
                n = a(80754),
                o = a(96177),
                l = a(72613),
                c = a(53113),
                d = a(70094),
                m = a(72007),
                u = a(94607),
                h = a(98617),
                f = a(90132),
                p = a(41147),
                x = a(2499),
                g = a(33741),
                y = a(38554),
                b = a(37337),
                w = a(12805),
                v = a(11239),
                j = a(88893),
                N = a(72470),
                A = a(60332),
                k = a(77139),
                I = a(42708),
                _ = a(71422),
                F = a(88997),
                D = a(15626),
                P = a(82222),
                C = a(51817),
                T = a(84566),
                G = a(8733),
                Z = a(93448),
                S = a(99376),
                R = a(72518),
                B = a(43894),
                M = a(45926),
                L = a(69829),
                E = a(24642),
                U = a(77059),
                V = a(3083),
                z = a(12381),
                H = a(30767),
                q = a(16503),
                O = a(87770);
            let Y = () => {
                let [e, t] = (0, i.useState)(!1), {
                    signOut: a
                } = (0, O.ll)();
                return (0, r.jsxs)(H.aR, {
                    open: e,
                    onOpenChange: t,
                    children: [(0, r.jsx)(H.vW, {
                        asChild: !0,
                        children: (0, r.jsxs)(z.z, {
                            variant: "ghost",
                            className: "flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 justify-start",
                            children: [(0, r.jsx)(q.Z, {
                                className: "mr-3 h-5 w-5 text-gray-400"
                            }), "Sign out"]
                        })
                    }), (0, r.jsxs)(H._T, {
                        children: [(0, r.jsxs)(H.fY, {
                            children: [(0, r.jsx)(H.f$, {
                                children: "Are you sure you want to sign out?"
                            }), (0, r.jsx)(H.yT, {
                                children: "You will be logged out of your account. You can always sign back in later."
                            })]
                        }), (0, r.jsxs)(H.xo, {
                            children: [(0, r.jsx)(H.le, {
                                children: "Cancel"
                            }), (0, r.jsx)(H.OL, {
                                onClick: () => a({
                                    redirectUrl: "/"
                                }),
                                children: "Sign out"
                            })]
                        })]
                    })]
                })
            };
            var W = a(46175),
                K = a(70387),
                Q = a(82431),
                J = a(26937),
                $ = a(29374),
                X = a(32732),
                ee = a(14438),
                et = a(71096),
                ea = a.n(et),
                er = a(74291),
                ei = a(69174),
                es = a(52871);

            function en(e) {
                let {
                    dialogOpen: t,
                    setDialogOpen: a
                } = e, s = (0, S.useRouter)(), [n, o] = (0, i.useState)(!1), {
                    isLoaded: l
                } = (0, O.aF)(), {
                    user: c,
                    isSignedIn: d
                } = (0, O.aF)(), {
                    customerId: m,
                    userStatus: u
                } = (0, K._)();
                async function h(e, t, a, r, i) {
                    if (!l) {
                        W.default.error("not login, please login first");
                        return
                    }
                    try {
                        o(!0);
                        let n = await fetch("/api/checkout-lemon-onetime", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                plan: a,
                                credits: r,
                                amount: t,
                                price_id: e,
                                price: i
                            })
                        });
                        if (401 === n.status) {
                            o(!1), W.default.error("need login"), s.push("/sign-in");
                            return
                        }
                        let {
                            code: l,
                            message: c,
                            data: d
                        } = await n.json();
                        if (!d) {
                            o(!1), W.default.error(c);
                            return
                        }
                        let m = d.url;
                        W.default.success("redirect to lemon for payment"), setTimeout(() => {
                            s.push(m)
                        }, 1e3)
                    } catch (e) {
                        o(!1), console.log("checkout failed: ", e), W.default.error("checkout failed")
                    }
                }
                let f = G.MI.filter(e => !0 === e.support_one_time);
                return (0, r.jsx)(er.Vq, {
                    open: t,
                    onOpenChange: a,
                    children: (0, r.jsx)(er.cZ, {
                        className: "w-full max-w-md md:max-w-2xl lg:max-w-4xl overflow-y-auto max-h-[90vh]",
                        children: (0, r.jsx)("div", {
                            className: "bg-white p-4 md:p-6",
                            children: (0, r.jsx)("div", {
                                className: "grid gap-6 md:grid-cols-2",
                                children: f.map((e, t) => (0, r.jsxs)("div", {
                                    className: (0, Z.cn)("flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10", {
                                        " border-2 border-indigo-500": !0 === e.default
                                    }),
                                    children: [(0, r.jsxs)("div", {
                                        children: [(0, r.jsxs)("div", {
                                            className: "flex justify-between",
                                            children: [(0, r.jsx)("h3", {
                                                id: e.id,
                                                className: "text-base font-semibold leading-7 text-indigo-600",
                                                children: e.name
                                            }), !0 === e.default && (0, r.jsx)(ei.C, {
                                                className: "bg-indigo-500",
                                                children: "Most Popular"
                                            }), !0 === e.best && (0, r.jsx)(ei.C, {
                                                className: "bg-indigo-500 ",
                                                children: "Best Value \uD83C\uDF89"
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "mt-4 flex items-baseline",
                                            children: [(0, r.jsx)("span", {
                                                className: "font-semibold leading-7 text-gray-600",
                                                children: "$"
                                            }), (0, r.jsxs)("span", {
                                                className: "font-bold tracking-tight text-gray-900",
                                                children: [Math.round(e.price / e.credits * 100) / 100, " / Credit"]
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "flex items-baseline gap-x-2",
                                            children: [(0, r.jsx)("span", {
                                                className: "text-2xl font-semibold leading-7 text-gray-600",
                                                children: "$"
                                            }), (0, r.jsx)("span", {
                                                className: "text-4xl font-bold tracking-tight text-gray-900",
                                                children: e.price
                                            })]
                                        }), (0, r.jsx)("ul", {
                                            role: "list",
                                            className: "mt-10 space-y-4 text-sm leading-6 text-gray-600",
                                            children: e.oneTimeFeatures.map(e => (0, r.jsxs)("li", {
                                                className: "flex gap-x-3",
                                                children: [(0, r.jsx)(es.Z, {
                                                    className: "h-6 w-5 flex-none text-green-600",
                                                    "aria-hidden": "true"
                                                }), e]
                                            }, e))
                                        })]
                                    }), (0, r.jsxs)(z.z, {
                                        "aria-describedby": e.id,
                                        className: (0, Z.cn)("mt-8  flex gap-2 rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", {
                                            "cursor-not-allowed": n
                                        }),
                                        onClick: () => h(e.price_id_one_time, e.price, e.plan, e.credits, e.price),
                                        children: [n && (0, r.jsx)(C.Z, {
                                            className: "h-4 w-4 animate-spin"
                                        }), "One Time Pay"]
                                    })]
                                }, e.id))
                            })
                        })
                    })
                })
            }
            var eo = a(18930);

            function el(e) {
                let {
                    setSheetOpen: t
                } = e, {
                    user: a,
                    isSignedIn: s
                } = (0, O.aF)(), [n, o] = (0, i.useState)(!1), l = (0, S.useRouter)(), {
                    credits: d,
                    customerId: m,
                    paySource: u,
                    refetchCredits: h,
                    isLoading: f,
                    subscriptionData: p,
                    userStatus: x,
                    isCreditsLoading: g,
                    initalCreditsLoading: y
                } = (0, K._)();
                u === X.oO || X._u;
                let b = async () => {
                        if (s && a) {
                            o(!0);
                            try {
                                let e;
                                if (console.log("管理 paySource", u), u === X.oO) {
                                    W.toast.success("Redirecting to Yor Billings"), ee.toast.success("Redirecting to Yor Billings"), l.push("/manage/billing");
                                    return
                                }
                                if ((e = u === X.O6 ? await fetch("/api/manage-billing2", {}) : u === X.ig ? await fetch("/api/manage-billing", {}) : u === X._u ? await fetch("/api/manage-billing3", {}) : await fetch("/api/manage-billing", {})).ok) {
                                    let {
                                        url: t
                                    } = await e.json();
                                    W.toast.success("Redirecting to Yor Billings"), ee.toast.success("Redirecting to Yor Billings"), l.push(t)
                                } else W.toast.error("Get Billing Error, Try Again Later or Email Us"), ee.toast.error("Get Billing Error, Try Again Later or Email Us")
                            } catch (e) {
                                console.log("error"), W.toast.error("Get Billing Error, Try Again Later or Email Us")
                            } finally {
                                o(!1)
                            }
                        }
                    },
                    [w, v] = (0, i.useState)(!1),
                    [j, N] = (0, i.useState)(!1);
                return (0, r.jsx)(B.J2, {
                    className: "relative",
                    children: e => {
                        let {
                            open: s
                        } = e;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsxs)(B.O7, {
                                className: "flex items-center gap-2 focus:outline-none",
                                children: [(0, r.jsx)("img", {
                                    className: "h-8 w-8 rounded-full",
                                    src: (null == a ? void 0 : a.imageUrl) || "https://github.com/shadcn.png",
                                    alt: "login user"
                                }), (0, r.jsx)(L.Z, {
                                    className: "w-4 h-4 text-gray-500 transition-transform duration-200 ".concat(s ? "rotate-180 transform" : "")
                                })]
                            }), (0, r.jsx)(M.u, {
                                show: s,
                                as: i.Fragment,
                                children: (0, r.jsxs)(B.Hi, {
                                    className: (0, Z.cn)(["absolute left-1/2 z-10 mt-3 w-64 -translate-x-1/2 transform px-4 sm:px-0", "bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", "right-0 left-auto translate-x-0 mt-2 origin-top-right", "transition ease-in-out duration-200", "data-[closed]:opacity-0", "data-[enter]:duration-200 data-[enter]:data-[closed]:translate-y-1", "data-[leave]:duration-150 data-[leave]:data-[closed]:-translate-y-1"]),
                                    children: [(0, r.jsxs)("div", {
                                        className: "px-4 py-3 sm:px-4 sm:py-3 border-b border-gray-200",
                                        children: [(0, r.jsxs)("div", {
                                            className: "space-y-1",
                                            children: [(0, r.jsx)("p", {
                                                className: "text-sm font-medium text-gray-900",
                                                children: null == a ? void 0 : a.fullName
                                            }), (0, r.jsx)("p", {
                                                className: "text-sm text-gray-500 truncate",
                                                children: null == a ? void 0 : a.emailAddresses[0].emailAddress
                                            })]
                                        }), (0, r.jsx)("div", {
                                            className: "flex flex-col mt-4",
                                            children: (0, r.jsxs)("div", {
                                                className: "flex items-center justify-between",
                                                children: [(0, r.jsxs)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [(0, r.jsx)(E.Z, {
                                                        className: "h-4 w-4 text-blue-600"
                                                    }), (0, r.jsxs)("span", {
                                                        className: "text-sm font-medium text-blue-600",
                                                        children: [d, " Credits"]
                                                    }), (0, r.jsx)("button", {
                                                        className: "p-1 hover:bg-gray-100 rounded-full transition-colors",
                                                        onClick: () => h(),
                                                        title: "Refresh Credits",
                                                        children: (0, r.jsx)(Q.Z, {
                                                            className: (0, Z.cn)("h-4 w-4 text-blue-600 hover:text-blue-700 transition-colors", g && "animate-spin", y && "animate-spin")
                                                        })
                                                    })]
                                                }), (null == p ? void 0 : p.subscriptionEnd) && new Date(p.subscriptionEnd).getTime() < new Date().getTime() && (0, r.jsx)("span", {
                                                    className: "text-xs font-medium text-red-400 px-2 py-0.5 bg-red-50 rounded-full",
                                                    children: "Expired"
                                                })]
                                            })
                                        }), p && p.subscriptionStart && p.subscriptionEnd && (0, r.jsxs)("div", {
                                            className: "px-3 mt-3 flex items-center justify-between text-xs text-gray-500 bg-gray-50 rounded-md py-1.5",
                                            children: [(0, r.jsx)("span", {
                                                children: ea()(p.subscriptionStart).format("MMM D, YYYY")
                                            }), (0, r.jsx)("span", {
                                                className: "mx-1",
                                                children: " - "
                                            }), (0, r.jsx)("span", {
                                                children: ea()(p.subscriptionEnd).format("MMM D, YYYY")
                                            })]
                                        })]
                                    }), x && (0, r.jsxs)(z.z, {
                                        variant: "ghost",
                                        onClick: () => l.push("/price-one-time"),
                                        className: "flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 justify-start",
                                        disabled: n,
                                        children: [(0, r.jsx)(J.Z, {
                                            className: "mr-3 h-5 w-5 text-gray-400"
                                        }), "Get More Credits"]
                                    }), (0, r.jsx)(en, {
                                        dialogOpen: w,
                                        setDialogOpen: v
                                    }), m && p && p.subscriptionEnd && new Date(p.subscriptionEnd).getTime() > new Date().getTime() && (0, r.jsxs)(z.z, {
                                        variant: "ghost",
                                        onClick: () => b(),
                                        className: "flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 justify-start",
                                        disabled: n,
                                        children: [n && (0, r.jsx)(C.Z, {
                                            className: "w-4 h-4 animate-spin mr-2"
                                        }), (0, r.jsx)(E.Z, {
                                            className: "mr-3 h-5 w-5 text-gray-400"
                                        }), "Manage my subscription"]
                                    }), p && p.subscriptionEnd && new Date(p.subscriptionEnd).getTime() < new Date().getTime() && (0, r.jsxs)("a", {
                                        href: "/price",
                                        className: "flex w-full items-center px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 justify-start    ",
                                        children: [(0, r.jsx)(U.Z, {
                                            className: "mr-3 h-5 w-5 text-blue-600 animate-pulse"
                                        }), "Renew Subscription"]
                                    }), (0, r.jsxs)("a", {
                                        href: "/home",
                                        className: (0, Z.cn)("inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"),
                                        children: [(0, r.jsx)(V.Z, {
                                            className: "mr-3 h-5 w-5 text-gray-400"
                                        }), "Home"]
                                    }), (0, r.jsxs)("a", {
                                        href: "/my-favorites",
                                        className: (0, Z.cn)("inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"),
                                        children: [(0, r.jsx)(F.Z, {
                                            className: "mr-3 h-5 w-5 text-gray-400"
                                        }), "My Favorites"]
                                    }), (0, r.jsxs)("a", {
                                        href: "/my-image",
                                        className: (0, Z.cn)("inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"),
                                        children: [(0, r.jsx)(c.Z, {
                                            className: "mr-3 h-5 w-5 text-gray-400"
                                        }), "My Photos"]
                                    }), (0, r.jsxs)("a", {
                                        href: "/my-video",
                                        className: (0, Z.cn)("inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"),
                                        children: [(0, r.jsx)($.Z, {
                                            className: "mr-3 h-5 w-5 text-gray-400"
                                        }), "My Videos"]
                                    }), (0, r.jsxs)(H.aR, {
                                        open: j,
                                        onOpenChange: N,
                                        children: [(0, r.jsx)(H.vW, {
                                            asChild: !0,
                                            children: (0, r.jsxs)(z.z, {
                                                variant: "ghost",
                                                className: "flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 justify-start",
                                                children: [(0, r.jsx)(eo.Z, {
                                                    className: "mr-3 h-5 w-5 text-red-500"
                                                }), "Delete Account"]
                                            })
                                        }), (0, r.jsxs)(H._T, {
                                            children: [(0, r.jsxs)(H.fY, {
                                                children: [(0, r.jsx)(H.f$, {
                                                    children: "Are you absolutely sure?"
                                                }), (0, r.jsxs)(H.yT, {
                                                    children: ["This action cannot be undone. This will permanently delete your account and remove all of your data from our servers, including:", (0, r.jsxs)("ul", {
                                                        className: "list-disc list-inside mt-2 space-y-1",
                                                        children: [(0, r.jsx)("li", {
                                                            children: "All your generated images and videos"
                                                        }), (0, r.jsx)("li", {
                                                            children: "Your subscription and credit history"
                                                        }), (0, r.jsx)("li", {
                                                            children: "Your account settings and preferences"
                                                        })]
                                                    })]
                                                })]
                                            }), (0, r.jsxs)(H.xo, {
                                                children: [(0, r.jsx)(H.le, {
                                                    children: "Cancel"
                                                }), (0, r.jsx)(H.OL, {
                                                    className: "bg-red-600 hover:bg-red-700 text-white",
                                                    onClick: () => {
                                                        N(!1), null == t || t(!1), l.push("/user-profile/security")
                                                    },
                                                    children: "Delete Account"
                                                })]
                                            })]
                                        })]
                                    }), (0, r.jsx)(Y, {})]
                                })
                            })]
                        })
                    }
                })
            }
            var ec = a(87338),
                ed = a(58598),
                em = a(38706),
                eu = a(34057),
                eh = a(71414),
                ef = a(42975),
                ep = a(6846),
                ex = a(1613),
                eg = a(1786),
                ey = a(70789),
                eb = a(32930),
                ew = a(29028),
                ev = a(90535),
                ej = a(40875);
            let eN = i.forwardRef((e, t) => {
                let {
                    className: a,
                    children: i,
                    align: s = "left",
                    ...n
                } = e;
                return (0, r.jsxs)(ew.fC, {
                    ref: t,
                    className: (0, Z.cn)("relative z-10 flex max-w-max flex-1 items-center justify-center", a),
                    ...n,
                    children: [i, (0, r.jsx)(eP, {
                        align: s
                    })]
                })
            });
            eN.displayName = ew.fC.displayName;
            let eA = i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)(ew.aV, {
                    ref: t,
                    className: (0, Z.cn)("group flex flex-1 list-none items-center justify-center space-x-1", a),
                    ...i
                })
            });
            eA.displayName = ew.aV.displayName;
            let ek = ew.ck,
                eI = (0, ev.j)("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"),
                e_ = i.forwardRef((e, t) => {
                    let {
                        className: a,
                        children: i,
                        ...s
                    } = e;
                    return (0, r.jsxs)(ew.xz, {
                        ref: t,
                        className: (0, Z.cn)(eI(), "group", a),
                        ...s,
                        children: [i, " ", (0, r.jsx)(ej.Z, {
                            className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
                            "aria-hidden": "true"
                        })]
                    })
                });
            e_.displayName = ew.xz.displayName;
            let eF = i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)(ew.VY, {
                    ref: t,
                    className: (0, Z.cn)("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto z-[9999]", a),
                    ...i
                })
            });
            eF.displayName = ew.VY.displayName;
            let eD = ew.rU,
                eP = i.forwardRef((e, t) => {
                    let {
                        className: a,
                        align: i = "left",
                        ...s
                    } = e;
                    return (0, r.jsx)("div", {
                        className: (0, Z.cn)("absolute top-full flex justify-center", "left" === i ? "left-0" : "right-0"),
                        children: (0, r.jsx)(ew.l_, {
                            className: (0, Z.cn)("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", a),
                            ref: t,
                            ...s
                        })
                    })
                });
            eP.displayName = ew.l_.displayName, i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)(ew.z$, {
                    ref: t,
                    className: (0, Z.cn)("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", a),
                    ...i,
                    children: (0, r.jsx)("div", {
                        className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"
                    })
                })
            }).displayName = ew.z$.displayName;
            var eC = a(91032),
                eT = a(90641),
                eG = a(22549),
                eZ = a(27648),
                eS = a(58293),
                eR = a(32489),
                eB = a(10407),
                eM = e => {
                    let {
                        isLoaded: t,
                        isSignedIn: a,
                        credits: s,
                        APP_NAME: n,
                        freeTools: o,
                        magicTools: l,
                        navigation: c,
                        flux_lora: d,
                        flux1_1: m,
                        fluxTools: u,
                        videoTools: h,
                        t: f,
                        LocaleSwitcher: p,
                        fluxPrompts: x,
                        onLoginClick: g
                    } = e, y = (0, S.useRouter)(), [b, w] = (0, i.useState)(!1), v = (e, t) => {
                        let a = e.icon;
                        return (0, r.jsxs)(eZ.default, {
                            href: e.href,
                            className: "flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-gray-100 transition-colors",
                            onClick: t,
                            children: [(0, r.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [a && (0, r.jsx)(a, {
                                    className: "w-4 h-4 hover:text-indigo-500"
                                }), (0, r.jsx)("span", {
                                    children: e.name
                                })]
                            }), e.isNew && (0, r.jsx)("span", {
                                className: "ml-2 text-[10px] text-red-500 bg-red-100 rounded-full px-1.5 py-0.5",
                                children: e.newText || "New"
                            })]
                        }, e.href)
                    };
                    return (0, r.jsxs)(eC.yo, {
                        open: b,
                        onOpenChange: w,
                        children: [(0, r.jsx)(eC.aM, {
                            asChild: !0,
                            children: (0, r.jsxs)(z.z, {
                                variant: "ghost",
                                size: "icon",
                                className: "lg:hidden",
                                children: [(0, r.jsx)(eS.Z, {
                                    className: "h-6 w-6"
                                }), (0, r.jsx)("span", {
                                    className: "sr-only",
                                    children: "Open menu"
                                })]
                            })
                        }), (0, r.jsx)(eC.ue, {
                            side: "right",
                            className: "w-full sm:max-w-sm p-0 ",
                            children: (0, r.jsxs)(eT.x, {
                                className: "h-full px-4",
                                children: [(0, r.jsx)(eC.Tu, {
                                    className: "sticky top-0 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-10 pb-4 pt-6",
                                    children: (0, r.jsxs)("div", {
                                        className: "flex items-center justify-between",
                                        children: [(0, r.jsx)(eZ.default, {
                                            href: "/",
                                            className: "flex items-center",
                                            children: (0, r.jsx)("img", {
                                                src: "/logo.svg",
                                                alt: "".concat(n, " Logo"),
                                                width: 40,
                                                height: 30,
                                                className: "dark:invert"
                                            })
                                        }), (0, r.jsx)(eC.aM, {
                                            asChild: !0,
                                            children: (0, r.jsxs)(z.z, {
                                                variant: "ghost",
                                                size: "icon",
                                                children: [(0, r.jsx)(eR.Z, {
                                                    className: "h-5 w-5"
                                                }), (0, r.jsx)("span", {
                                                    className: "sr-only",
                                                    children: "Close menu"
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "space-y-4 py-4",
                                    children: [(0, r.jsxs)(eG.UQ, {
                                        type: "single",
                                        collapsible: !0,
                                        className: "space-y-2",
                                        children: [(0, r.jsxs)(eG.Qd, {
                                            value: "free-tools",
                                            className: "border-none",
                                            children: [(0, r.jsx)(eG.o4, {
                                                className: "px-3 py-2 hover:no-underline",
                                                children: (0, r.jsx)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: (0, r.jsx)("span", {
                                                        className: "text-sm font-medium",
                                                        children: f("freeTools")
                                                    })
                                                })
                                            }), (0, r.jsx)(eG.vF, {
                                                className: "pt-1 pb-3",
                                                children: (0, r.jsx)("div", {
                                                    className: "flex flex-col space-y-2 px-4",
                                                    children: o.map(e => v(e, () => w(!1)))
                                                })
                                            })]
                                        }), (0, r.jsxs)(eG.Qd, {
                                            value: "magic-tools",
                                            className: "border-none",
                                            children: [(0, r.jsx)(eG.o4, {
                                                className: "px-3 py-2 hover:no-underline",
                                                children: (0, r.jsxs)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [(0, r.jsx)("span", {
                                                        className: "text-sm font-medium",
                                                        children: f("magicTools")
                                                    }), (0, r.jsx)("span", {
                                                        className: "ml-2 text-[10px] text-white bg-red-500 rounded-full px-1.5 py-0.5",
                                                        children: "GPT Image 1"
                                                    })]
                                                })
                                            }), (0, r.jsx)(eG.vF, {
                                                className: "pt-1 pb-3",
                                                children: (0, r.jsx)("div", {
                                                    className: "flex flex-col space-y-2 px-4",
                                                    children: l.map(e => v(e, () => w(!1)))
                                                })
                                            })]
                                        }), (0, r.jsxs)(eG.Qd, {
                                            value: "flux1-1",
                                            className: "border-none",
                                            children: [(0, r.jsx)(eG.o4, {
                                                className: "px-3 py-2 hover:no-underline",
                                                children: (0, r.jsxs)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [(0, r.jsx)("span", {
                                                        className: "text-sm font-medium",
                                                        children: "Flux 1.1"
                                                    }), (0, r.jsx)("span", {
                                                        className: "ml-2 text-[10px] text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full px-1.5 py-0.5",
                                                        children: "Ultra"
                                                    })]
                                                })
                                            }), (0, r.jsx)(eG.vF, {
                                                className: "pt-1 pb-3",
                                                children: (0, r.jsx)("div", {
                                                    className: "flex flex-col space-y-2 px-4",
                                                    children: m.map(e => v(e, () => w(!1)))
                                                })
                                            })]
                                        }), (0, r.jsxs)(eG.Qd, {
                                            value: "flux-tools",
                                            className: "border-none",
                                            children: [(0, r.jsx)(eG.o4, {
                                                className: "px-3 py-2 hover:no-underline",
                                                children: (0, r.jsx)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: (0, r.jsx)("span", {
                                                        className: "text-sm font-medium",
                                                        children: "Flux Tools"
                                                    })
                                                })
                                            }), (0, r.jsx)(eG.vF, {
                                                className: "pt-1 pb-3",
                                                children: (0, r.jsx)("div", {
                                                    className: "flex flex-col space-y-2 px-4",
                                                    children: u.map(e => v(e, () => w(!1)))
                                                })
                                            })]
                                        }), (0, r.jsxs)(eG.Qd, {
                                            value: "flux-lora",
                                            className: "border-none",
                                            children: [(0, r.jsx)(eG.o4, {
                                                className: "px-3 py-2 hover:no-underline",
                                                children: (0, r.jsx)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: (0, r.jsx)("span", {
                                                        className: "text-sm font-medium",
                                                        children: "Lora"
                                                    })
                                                })
                                            }), (0, r.jsx)(eG.vF, {
                                                className: "pt-1 pb-3",
                                                children: (0, r.jsx)("div", {
                                                    className: "flex flex-col space-y-2 px-4",
                                                    children: d && d.map(e => (0, r.jsxs)(eZ.default, {
                                                        href: e.href,
                                                        onClick: () => w(!1),
                                                        className: "flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-gray-100 transition-colors",
                                                        children: [(0, r.jsxs)("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [e.icon && (0, r.jsx)(e.icon, {
                                                                className: "w-4 h-4"
                                                            }), (0, r.jsx)("span", {
                                                                children: e.name
                                                            })]
                                                        }), (0, r.jsxs)("div", {
                                                            className: "flex gap-2",
                                                            children: [e.tesla && (0, r.jsx)("span", {
                                                                className: "ml-2 text-[10px] text-blue-500 bg-blue-100 rounded-full px-1.5 py-0.5",
                                                                children: "Mystic Animals"
                                                            }), e.isNew && (0, r.jsx)("span", {
                                                                className: "ml-2 text-[10px] text-red-600 bg-green-100 rounded-full px-1.5 py-0.5",
                                                                children: "Christmas\uD83C\uDF84"
                                                            })]
                                                        })]
                                                    }, e.href))
                                                })
                                            })]
                                        }), (0, r.jsxs)(eG.Qd, {
                                            value: "video-tools",
                                            className: "border-none",
                                            children: [(0, r.jsx)(eG.o4, {
                                                className: "px-3 py-2 hover:no-underline",
                                                children: (0, r.jsx)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: (0, r.jsx)("span", {
                                                        className: "text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
                                                        children: "AI Video"
                                                    })
                                                })
                                            }), (0, r.jsx)(eG.vF, {
                                                className: "pt-1 pb-3",
                                                children: (0, r.jsx)("div", {
                                                    className: "flex flex-col space-y-2 px-4",
                                                    children: h.map(e => (0, r.jsxs)(eZ.default, {
                                                        href: e.href,
                                                        onClick: () => w(!1),
                                                        className: "flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-gray-100 transition-colors",
                                                        children: [(0, r.jsxs)("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [e.icon && (0, r.jsx)(e.icon, {
                                                                className: "w-4 h-4"
                                                            }), (0, r.jsx)("span", {
                                                                children: e.name
                                                            })]
                                                        }), (0, r.jsx)("div", {
                                                            className: "flex gap-2",
                                                            children: e.isNew && (0, r.jsx)("span", {
                                                                className: "ml-2 text-[10px] text-red-600 bg-green-100 rounded-full px-1.5 py-0.5",
                                                                children: "New"
                                                            })
                                                        })]
                                                    }, e.href))
                                                })
                                            })]
                                        }), (0, r.jsxs)(eG.Qd, {
                                            value: "flux-prompts",
                                            className: "border-none",
                                            children: [(0, r.jsx)(eG.o4, {
                                                className: "px-3 py-2 hover:no-underline",
                                                children: (0, r.jsx)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: (0, r.jsx)("span", {
                                                        className: "text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
                                                        children: "Prompts"
                                                    })
                                                })
                                            }), (0, r.jsx)(eG.vF, {
                                                className: "pt-1 pb-3",
                                                children: (0, r.jsx)("div", {
                                                    className: "flex flex-col space-y-2 px-4",
                                                    children: x.map(e => (0, r.jsxs)(eZ.default, {
                                                        href: e.href,
                                                        onClick: () => w(!1),
                                                        className: "flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-gray-100 transition-colors",
                                                        children: [(0, r.jsxs)("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [e.icon && (0, r.jsx)(e.icon, {
                                                                className: "w-4 h-4"
                                                            }), (0, r.jsx)("span", {
                                                                children: e.name
                                                            })]
                                                        }), (0, r.jsx)("div", {
                                                            className: "flex gap-2",
                                                            children: e.isNew && (0, r.jsx)("span", {
                                                                className: "ml-2 text-[10px] text-red-600 bg-green-100 rounded-full px-1.5 py-0.5",
                                                                children: "New"
                                                            })
                                                        })]
                                                    }, e.href))
                                                })
                                            })]
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex flex-col space-y-2",
                                        children: [c.map(e => (0, r.jsxs)(eZ.default, {
                                            href: e.href,
                                            onClick: () => w(!1),
                                            className: (0, Z.cn)("flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-gray-100 transition-colors font-medium"),
                                            children: [(0, r.jsx)("span", {
                                                className: (0, Z.cn)(e.isNew && "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"),
                                                children: e.name
                                            }), e.isNew && (0, r.jsx)("span", {
                                                className: "ml-2 text-[10px] text-white bg-red-500 rounded-full px-1.5 py-0.5",
                                                children: "French Kiss"
                                            })]
                                        }, e.href)), (0, r.jsx)(eZ.default, {
                                            href: "/home",
                                            onClick: () => w(!1),
                                            className: "flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-gray-100 transition-colors font-medium",
                                            children: "Home"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "border-t pt-4 space-y-4",
                                        children: [(0, r.jsx)("div", {
                                            className: "px-3",
                                            children: (0, r.jsx)(p, {})
                                        }), t ? (0, r.jsx)("div", {
                                            className: "flex items-center justify-between px-3",
                                            children: a ? (0, r.jsxs)(r.Fragment, {
                                                children: [(0, r.jsx)("div", {
                                                    className: "flex items-center gap-3",
                                                    children: (0, r.jsx)("div", {
                                                        className: "flex flex-col",
                                                        children: (0, r.jsxs)("span", {
                                                            className: "text-sm font-medium",
                                                            children: ["Credits: ", s]
                                                        })
                                                    })
                                                }), (0, r.jsx)(el, {
                                                    setSheetOpen: w
                                                })]
                                            }) : (0, r.jsxs)(z.z, {
                                                className: "w-full",
                                                onClick: () => {
                                                    w(!1), y.push("/sign-in")
                                                },
                                                children: ["Log in ", (0, r.jsx)(eB.Z, {
                                                    className: "h-4 w-4 ml-2"
                                                })]
                                            })
                                        }) : (0, r.jsx)("div", {
                                            className: "flex justify-center",
                                            children: (0, r.jsx)("div", {
                                                className: "h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-gray-900"
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                },
                eL = a(2456);

            function eE() {
                let [e, t] = (0, i.useState)(!1), a = (0, S.usePathname)(), {
                    setIsModalOpen: B
                } = (0, R.N)(), {
                    user: M
                } = (0, O.aF)(), {
                    userStatus: L,
                    userBasic: U,
                    credits: z,
                    isLoading: H,
                    error: q,
                    setCredits: Y,
                    isSignedIn: W,
                    isLoaded: Q
                } = (0, K._)(), J = (0, ed.bU)(), $ = (0, em.T_)("Header"), X = [{
                    name: "".concat($("create")),
                    href: "/create"
                }, {
                    name: "Video Effects",
                    href: "/video-effects",
                    isNew: !0,
                    isVideoEffects: !0
                }, {
                    name: "".concat($("price")),
                    href: "/price",
                    isNew: !1
                }], ee = [{
                    name: "".concat($("promptGenerator")),
                    desc: "".concat($("promptGeneratorDesc")),
                    href: "/prompt-generator",
                    icon: s.Z
                }, {
                    name: "".concat($("imageToPrompt")),
                    desc: "".concat($("imageToPromptDesc")),
                    href: "/image-to-prompt",
                    icon: n.Z
                }, {
                    name: "".concat($("imageToCaption")),
                    desc: "".concat($("imageToCaptionDesc")),
                    href: "/image-to-caption",
                    icon: o.Z,
                    isNew: !1
                }, {
                    name: "".concat($("removeBackground")),
                    desc: "".concat($("removeBackgroundDesc")),
                    href: "/remove-background",
                    icon: l.Z,
                    isNew: !1
                }, {
                    name: "".concat($("photoRestore")),
                    desc: "".concat($("photoRestoreDesc")),
                    href: "/photo-restore",
                    icon: c.Z,
                    isNew: !1
                }], et = {
                    imageProcessing: [{
                        name: "GPT Image1",
                        desc: "Create, Edit images with GPT Image1 Via ChatGPT",
                        href: "/gpt-image1",
                        icon: eL.P.openai,
                        isNew: !0
                    }, {
                        name: "Magic Edit",
                        desc: "Edit, add, or change the background of any image instantly with AI.",
                        href: "/magic-edit",
                        icon: T.zV1,
                        isNew: !0
                    }, {
                        name: "AI Background Change",
                        desc: "Edit, add, or change the background of any image instantly with AI.",
                        href: "/ai-background-change",
                        icon: T.jV5
                    }, {
                        name: "AI Image Upscaler",
                        desc: "Upscale your images with AI",
                        href: "/ai-image-upscaler",
                        icon: eh.Z
                    }, {
                        name: "AI Image Enhancer",
                        desc: "Enhance your images with AI",
                        href: "/ai-image-enhancer",
                        icon: ef.Z
                    }, {
                        name: "AI Watermark Remover",
                        desc: "Remove image watermark for free with Flux AI",
                        href: "/ai-watermark-remover",
                        icon: l.Z
                    }, {
                        name: "Image to Image AI",
                        desc: "Generate images from images",
                        href: "/image-to-image-ai",
                        icon: d.Z,
                        isNew: !1
                    }, {
                        name: "AI Photo Maker",
                        desc: "Create your own AI Photo Maker with your own images and styles",
                        href: "/ai-photo-maker",
                        icon: eb.Z
                    }, {
                        name: "Object Remover",
                        desc: "Remove unwanted elements from photos with AI",
                        href: "/object-remover",
                        icon: l.Z,
                        isNew: !0
                    }],
                    creativeGenerators: [{
                        name: "GPT Image Generator",
                        desc: "Create stunning images from text prompts with GPT Image Generator",
                        href: "/gpt-image-generator",
                        icon: eL.P.openai,
                        isNew: !0
                    }, {
                        name: "AI Action Figure",
                        desc: "Turn photos into AI Action Figure art with Flux AI",
                        href: "/generator/ai-action-figure-generator",
                        icon: eL.P.figure,
                        isNew: !0
                    }, {
                        name: "AI Barbie Box",
                        desc: "Turn photos into AI Barbie Box art with Flux AI",
                        href: "/ai-barbie-box",
                        icon: eL.P.barbie,
                        isNew: !0
                    }, {
                        name: "Studio Ghibli AI",
                        desc: "Turn photos into Ghibli Filter art with Studio Ghibli AI",
                        href: "/studio-ghibli",
                        icon: T.Q5Z,
                        isNew: !0
                    }, {
                        name: "Flux Coloring Book",
                        desc: "Generate coloring book style images with Flux AI",
                        href: "/flux-coloring-book",
                        icon: T.bo1,
                        isNew: !0
                    }, {
                        name: "AI Logo Mockup",
                        desc: "Generate logos from text descriptions",
                        href: "/logo-mockup",
                        icon: T.Qqg,
                        isNew: !0
                    }, {
                        name: "AI Vector Generator",
                        desc: "Generate vector images from text descriptions",
                        href: "/ai-vector-generator",
                        icon: m.Z
                    }, {
                        name: "AI Icon Generator",
                        desc: "Generate icons from text descriptions",
                        href: "/ai-icon-generator",
                        icon: u.Z
                    }, {
                        name: "AI Logo Generator",
                        desc: "Generate logos from text descriptions",
                        href: "/ai-logo-generator",
                        icon: h.Z
                    }, {
                        name: "AI Emoji Generator",
                        desc: "Generate emojis from text descriptions",
                        href: "/ai-emoji-generator",
                        icon: f.Z
                    }, {
                        name: "AI Cartoon Generator",
                        desc: "Generate cartoon style images with AI",
                        href: "/ai-anime-generator",
                        icon: p.Z
                    }],
                    styleAndPortrait: [{
                        name: "AI Headshot Generator",
                        desc: "Turn photos into professional headshots with AI",
                        href: "/generator/ai-headshot-generator",
                        icon: T.ExP,
                        isNew: !0
                    }, {
                        name: "Disney Filter",
                        desc: "Transform your images into Disney Pixar style",
                        href: "/disney-filter",
                        icon: x.Z
                    }, {
                        name: "AI Baby Generator",
                        desc: "Predict What your baby will look like",
                        href: "/ai-baby-generator",
                        icon: g.Z
                    }, {
                        name: "AI Face Swap",
                        desc: "Seamless Face Swap with AI",
                        href: "/ai-face-swap",
                        icon: ep.Z,
                        isNew: !0
                    }, {
                        name: "AI Boyfriend Generator",
                        desc: "Generate AI Boyfriend from descriptions",
                        href: "/ai-boyfriend-generator",
                        icon: eb.Z
                    }],
                    professionalTools: [{
                        name: "AI Product Photo Generator",
                        desc: "Generate professional product photos",
                        href: "/ai-product-photo",
                        icon: d.Z,
                        isSignedIn: !0
                    }, {
                        name: "Virtual Try-On",
                        desc: "Try on virtual garments on your photos",
                        href: "/virtual-try-on",
                        icon: eb.Z
                    }, {
                        name: "Disney AI Poster",
                        desc: "Generate Disney AI Posters",
                        href: "/disney-ai-poster",
                        icon: x.Z,
                        isNew: !0
                    }],
                    aiModels: [{
                        name: "Flux AI Image Generator",
                        desc: "Generate AI images with Flux",
                        href: "/flux-ai-image-generator",
                        icon: y.Z
                    }, {
                        name: "Fal Flux 1.1 Pro",
                        desc: "The Most Powerful AI Image Generator of Flux Models",
                        href: "/fal-flux1-1",
                        icon: b.Z
                    }, {
                        name: "Flux Schnell",
                        desc: "Try It Free Online with Flux AI",
                        href: "/flux-schnell",
                        icon: d.Z
                    }, {
                        name: "Flux Dev",
                        desc: "Generate AI Image with Flux Dev",
                        href: "/flux-dev",
                        icon: d.Z,
                        isNew: !1
                    }]
                }, ea = [{
                    name: "Kissu Generator",
                    desc: "Generate AI Kissing Video",
                    href: "/video/kissu-generator",
                    icon: T._x5,
                    isNew: !1,
                    isHot: !0
                }, {
                    name: "AI Action Figure",
                    desc: "Turn photos into AI Action Figure art with Flux AI",
                    href: "/generator/ai-action-figure-generator",
                    icon: eL.P.figure,
                    isNew: !0
                }, {
                    name: "AI Barbie Box",
                    desc: "Turn photos into AI Barbie Box art with Flux AI",
                    href: "/ai-barbie-box",
                    icon: eL.P.barbie,
                    isNew: !0
                }, {
                    name: "Studio Ghibli AI",
                    desc: "Turn photos into Ghibli Filter art with Studio Ghibli AI",
                    href: "/studio-ghibli",
                    icon: T.Q5Z,
                    isNew: !0
                }, {
                    name: "Magic Edit",
                    desc: "Edit, add, or change the background of any image instantly with AI.",
                    href: "/magic-edit",
                    icon: T.zV1,
                    isNew: !0
                }, {
                    name: "AI Background Change",
                    desc: "Edit, add, or change the background of any image instantly with AI.",
                    href: "/ai-background-change",
                    icon: T.jV5,
                    isNew: !1
                }, {
                    name: "Flux Coloring Book",
                    desc: "Generate coloring book style images with Flux AI",
                    href: "/flux-coloring-book",
                    icon: T.bo1,
                    isNew: !1
                }, {
                    name: "".concat($("aiCartoonGenerator")),
                    desc: "".concat($("aiCartoonGeneratorDesc")),
                    href: "/ai-anime-generator",
                    icon: p.Z
                }, {
                    name: "".concat($("fluxAIImageGenerator")),
                    desc: "".concat($("fluxAIImageGeneratorDesc")),
                    href: "/flux-ai-image-generator",
                    icon: y.Z
                }, {
                    name: "Disney Filter",
                    desc: "Transform your images into Disney Pixar style",
                    href: "/disney-filter",
                    icon: x.Z,
                    isNew: !1
                }, {
                    name: "AI Baby Generator",
                    desc: "Predict What your baby will look like using your own images",
                    href: "/ai-baby-generator",
                    icon: g.Z,
                    isNew: !1
                }, {
                    name: "Fal Flux 1.1 Pro",
                    desc: "The Most Powerful AI Image Generator of Flux Models",
                    href: "/fal-flux1-1",
                    icon: b.Z,
                    isNew: !1
                }, {
                    name: "AI Photo Maker",
                    desc: "Create your own AI Photo Maker with your own images and styles",
                    href: "/ai-photo-maker",
                    icon: eb.Z,
                    isNew: !1
                }, {
                    name: "AI Image Enhancer",
                    desc: "Enhance your images with AI",
                    href: "/ai-image-enhancer",
                    icon: ef.Z,
                    isNew: !1
                }, {
                    name: "Image to Image AI",
                    desc: "Generate images from images",
                    href: "/image-to-image-ai",
                    icon: d.Z,
                    isNew: !1
                }, {
                    name: "AI Product Photo Generator",
                    desc: "Generate professional product photos",
                    href: "/ai-product-photo",
                    icon: d.Z,
                    isNew: !1,
                    isShowForSubscribed: !1,
                    isSignedIn: !0
                }, {
                    name: "Virtual Try-On",
                    desc: "Try on virtual garments on your model photos",
                    href: "/virtual-try-on",
                    icon: eb.Z,
                    isNew: !1
                }, {
                    name: "Flux Schnell",
                    desc: "Try It Free Online with Flux AI",
                    href: "/flux-schnell",
                    icon: d.Z,
                    isNew: !1
                }, {
                    name: "AI Face Swap",
                    desc: "Unlock the Magic of AI - Driven Seamless Face Swap",
                    href: "/ai-face-swap",
                    icon: ep.Z,
                    isNew: !0
                }, {
                    name: "AI Boyfriend Generator",
                    desc: "Generate AI Boyfriend from text descriptions and your images",
                    href: "/ai-boyfriend-generator",
                    icon: eb.Z,
                    isNew: !1
                }, {
                    name: "AI Watermark Remover",
                    desc: "Remove image watermark for free with Flux AI",
                    href: "/ai-watermark-remover",
                    icon: l.Z,
                    isNew: !1
                }, {
                    name: "Flux Dev",
                    desc: "Generate AI Image with Flux Dev",
                    href: "/flux-dev",
                    icon: d.Z,
                    isNew: !1
                }, {
                    name: "AI Vector Generator",
                    desc: "Generate vector images from text descriptions with Flux AI",
                    href: "/ai-vector-generator",
                    icon: m.Z,
                    isNew: !0
                }, {
                    name: "AI Icon Generator",
                    desc: "Generate icons from text descriptions with Flux AI",
                    href: "/ai-icon-generator",
                    icon: u.Z,
                    isNew: !0
                }, {
                    name: "AI Logo Generator",
                    desc: "Generate logos from text descriptions with Flux AI",
                    href: "/ai-logo-generator",
                    icon: h.Z,
                    isNew: !0
                }, {
                    name: "AI Emoji Generator",
                    desc: "Generate emojis from text descriptions with Flux AI",
                    href: "/ai-emoji-generator",
                    icon: f.Z,
                    isNew: !0
                }, {
                    name: "Disney AI Poster",
                    desc: "Generate Disney AI Posters using AI",
                    href: "/disney-ai-poster",
                    icon: x.Z,
                    isNew: !0
                }, {
                    name: "AI Image Upscaler",
                    desc: "Upscale your images with AI",
                    href: "/ai-image-upscaler",
                    icon: eh.Z,
                    isNew: !1
                }, {
                    name: "Flux Coloring Book",
                    desc: "Generate coloring book style images with Flux AI",
                    href: "/flux-coloring-book",
                    icon: T.bo1,
                    isNew: !0
                }], er = [{
                    name: "AI Character Generator",
                    desc: "Generate AI Character from text descriptions and your images",
                    href: "/flux1-1/lora/ai-character-generator",
                    icon: eb.Z,
                    isNew: !1
                }, {
                    name: "Flux Lora",
                    desc: "Explore various Flux Lora models",
                    href: "/gallery",
                    icon: w.Z,
                    tesla: !0
                }, {
                    name: "Flux 1.1 Lora",
                    desc: "Most Powerful Flux Model based on Flux1.1 Pro",
                    href: "/flux1-1/lora",
                    icon: v.Z,
                    isNew: !1
                }], ei = [{
                    name: "GPT-Image-1 Prompts",
                    desc: "Explore various GPT 4o Prompts",
                    href: "/prompts",
                    icon: eL.P.openai
                }, {
                    name: "Flux 1.1 Pro Ultra Prompts",
                    desc: "Explore various Flux 1.1 Pro Ultra Prompts",
                    href: "/prompts/flux1-1-pro-ultra",
                    icon: v.Z
                }], es = [{
                    name: "Flux 1.1",
                    desc: "Explore various Flux 1.1 models",
                    href: "/flux1-1",
                    icon: w.Z
                }, {
                    name: "Flux Pro",
                    desc: "Explore various Flux Pro models",
                    href: "/flux-pro",
                    icon: w.Z
                }, {
                    name: "Flux 1.1 Ultra",
                    desc: "Most Powerful Flux Model based on Flux1.1 Pro",
                    href: "/flux1-1-ultra",
                    icon: v.Z,
                    isNew: !0,
                    newText: "4K"
                }], en = [{
                    name: "Flux Redux",
                    desc: "Image Variation and Restyling with Flux.1 Redux",
                    href: "/flux-redux",
                    icon: w.Z,
                    isNew: !1
                }, {
                    name: "Flux Canny",
                    desc: "Structural conditioning with FLUX.1 Canny",
                    href: "/flux-canny",
                    icon: j.Z,
                    isNew: !1
                }, {
                    name: "Flux Depth",
                    desc: "Edit images while preserving spatial relationships.",
                    href: "/flux-depth",
                    icon: d.Z,
                    isNew: !1
                }, {
                    name: "Flux Fill",
                    desc: "Inpainting and Outpainting Images with Flux AI",
                    href: "/flux-fill",
                    icon: N.Z,
                    isNew: !1
                }, {
                    name: "Flux Image to Image",
                    desc: "Generate images from images",
                    href: "/flux-image-to-image",
                    icon: A.Z,
                    isNew: !1
                }, {
                    name: "Flux Image Edit",
                    desc: "Edit images with Flux AI",
                    href: "/flux-image-edit",
                    icon: k.Z,
                    isNew: !1
                }, {
                    name: "Flux Outpainting",
                    desc: "Outpaint images with Flux AI",
                    href: "/flux-outpainting",
                    icon: k.Z,
                    isNew: !0
                }, {
                    name: "Flux Inpainting",
                    desc: "Inpainting Images with Flux AI",
                    href: "/flux-inpainting",
                    icon: l.Z,
                    isNew: !0
                }], eo = [{
                    name: "Image To Video AI",
                    desc: "Generate Video from images",
                    href: "/video/image-to-video-ai",
                    icon: ex.Z,
                    isNew: !1
                }, {
                    name: "Flux AI Video",
                    desc: "Generate Flux AI Videos from text or images",
                    href: "/video/flux-ai-video",
                    icon: I.Z,
                    isNew: !1
                }, {
                    name: "AI Kiss",
                    desc: "Generate AI Kissing Video from images",
                    href: "/video/ai-kissing",
                    icon: _.Z,
                    isNew: !1,
                    isHot: !0
                }, {
                    name: "AI Hug",
                    desc: "AI Hug is a tool that allows you to hug your friends and family.",
                    href: "/ai-hug",
                    icon: F.Z
                }, {
                    name: "AI Add Audio to Video",
                    desc: "Add audio to video",
                    href: "/video/add-audio-to-video",
                    icon: D.Z,
                    isNew: !1
                }, {
                    name: "Wan 2.1",
                    desc: "Wan 2.1 Video Generator",
                    href: "/video/wan21",
                    icon: eL.P.qwen,
                    isLimitedOffer: !0
                }, {
                    name: "Kling AI",
                    desc: "Kling AI Video Generator",
                    href: "/video/kling-ai",
                    icon: eL.P.kling,
                    isNew: !0
                }, {
                    name: "Kissu Generator",
                    desc: "Generate AI Kissing Video",
                    href: "/video/kissu-generator",
                    icon: T._x5,
                    isNew: !1,
                    isHot: !0
                }, {
                    name: "AI Dance",
                    desc: "Generate AI Dance Video",
                    href: "/video/ai-dance-generator",
                    icon: T.vJo,
                    isNew: !0
                }], [ew, ev] = (0, i.useState)(!1);
                return (0, S.useRouter)(), (0, r.jsx)("div", {
                    className: "sm:container px-1 sm:px-2",
                    children: (0, r.jsxs)("div", {
                        className: "flex items-center justify-between py-6 lg:py-8",
                        "aria-label": "Global",
                        children: [(0, r.jsx)("div", {
                            className: "flex lg:flex-1",
                            children: (0, r.jsxs)(ec.Z, {
                                href: "/",
                                className: "flex gap-1 font-mono items-center",
                                children: [(0, r.jsx)("img", {
                                    className: "relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert w-[40px] h-[30px]  sm:w-[50px] sm:h-[37px]",
                                    src: "/logo.svg",
                                    alt: "".concat(G.iC, " Logo")
                                }), (0, r.jsx)("span", {
                                    className: "hidden xl:block text-sm font-semibold",
                                    children: G.iC
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            className: "flex lg:hidden",
                            children: (0, r.jsx)(eM, {
                                isLoaded: Q,
                                isSignedIn: null != W && W,
                                credits: z,
                                APP_NAME: "Your App Name",
                                freeTools: ee,
                                magicTools: ea,
                                navigation: X,
                                videoTools: eo,
                                flux_lora: er,
                                flux1_1: es,
                                fluxTools: en,
                                fluxPrompts: ei,
                                t: $,
                                LocaleSwitcher: eu.Z,
                                onLoginClick: () => B(!0)
                            })
                        }), (0, r.jsxs)("div", {
                            className: "hidden lg:flex lg:items-center",
                            children: [(0, r.jsx)(eN, {
                                children: (0, r.jsxs)(eA, {
                                    children: [(0, r.jsxs)(ek, {
                                        children: [(0, r.jsx)(e_, {
                                            className: "relative text-sm font-semibold px-2",
                                            children: $("freeTools")
                                        }), (0, r.jsx)(eF, {
                                            className: "z-50",
                                            children: (0, r.jsx)("ul", {
                                                className: "w-[400px] p-3",
                                                children: ee.map(e => (0, r.jsx)(eU, {
                                                    title: e.name,
                                                    href: e.href,
                                                    icon: e.icon,
                                                    isNew: e.isNew,
                                                    newText: "Just Added",
                                                    children: e.desc
                                                }, e.name))
                                            })
                                        })]
                                    }, "free-tools"), (0, r.jsxs)(ek, {
                                        children: [(0, r.jsxs)(e_, {
                                            className: "relative text-sm font-semibold px-2",
                                            children: [$("magicTools"), (0, r.jsx)("span", {
                                                className: "absolute -top-2 -right-4  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white text-xs px-1 py-0.5 rounded-full text-[10px] z-[9999]",
                                                children: "GPT Image 1"
                                            })]
                                        }), (0, r.jsx)(eF, {
                                            className: "relative z-[9999]",
                                            children: (0, r.jsx)("div", {
                                                className: "p-4 w-[600px] md:w-[700px] lg:w-[900px] max-h-[70vh] overflow-y-auto",
                                                children: (0, r.jsxs)("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                    children: [(0, r.jsxs)("div", {
                                                        children: [(0, r.jsxs)("div", {
                                                            className: "mb-4",
                                                            children: [(0, r.jsxs)("h3", {
                                                                className: "text-sm font-medium text-gray-500 mb-2 flex items-center gap-1.5",
                                                                children: [(0, r.jsx)(c.Z, {
                                                                    className: "w-4 h-4"
                                                                }), "Image Processing"]
                                                            }), (0, r.jsx)("ul", {
                                                                className: "grid grid-cols-1 gap-1.5",
                                                                children: et.imageProcessing.map(e => (0, r.jsx)(eU, {
                                                                    title: e.name,
                                                                    href: e.href,
                                                                    icon: e.icon,
                                                                    isNew: e.isNew,
                                                                    compact: !0,
                                                                    hideDesc: !0,
                                                                    children: e.desc
                                                                }, e.name))
                                                            })]
                                                        }), (0, r.jsxs)("div", {
                                                            children: [(0, r.jsxs)("h3", {
                                                                className: "text-sm font-medium text-gray-500 mb-2 flex items-center gap-1.5",
                                                                children: [(0, r.jsx)(P.Z, {
                                                                    className: "w-4 h-4"
                                                                }), "AI Tools"]
                                                            }), (0, r.jsx)("ul", {
                                                                className: "grid grid-cols-1 gap-1.5",
                                                                children: et.aiModels.map(e => (0, r.jsx)(eU, {
                                                                    title: e.name,
                                                                    href: e.href,
                                                                    icon: e.icon,
                                                                    isNew: e.isNew,
                                                                    compact: !0,
                                                                    hideDesc: !0,
                                                                    children: e.desc
                                                                }, e.name))
                                                            })]
                                                        })]
                                                    }), (0, r.jsxs)("div", {
                                                        children: [(0, r.jsxs)("div", {
                                                            className: "mb-4",
                                                            children: [(0, r.jsxs)("h3", {
                                                                className: "text-sm font-medium text-gray-500 mb-2 flex items-center gap-1.5",
                                                                children: [(0, r.jsx)(s.Z, {
                                                                    className: "w-4 h-4"
                                                                }), "Creative Generators"]
                                                            }), (0, r.jsx)("ul", {
                                                                className: "grid grid-cols-1 gap-1.5",
                                                                children: et.creativeGenerators.map(e => (0, r.jsx)(eU, {
                                                                    title: e.name,
                                                                    href: e.href,
                                                                    icon: e.icon,
                                                                    isNew: e.isNew,
                                                                    compact: !0,
                                                                    hideDesc: !0,
                                                                    children: e.desc
                                                                }, e.name))
                                                            })]
                                                        }), (0, r.jsxs)("div", {
                                                            children: [(0, r.jsxs)("h3", {
                                                                className: "text-sm font-medium text-gray-500 mb-2 flex items-center gap-1.5",
                                                                children: [(0, r.jsx)(eg.Z, {
                                                                    className: "w-4 h-4"
                                                                }), "Professional Tools"]
                                                            }), (0, r.jsx)("ul", {
                                                                className: "grid grid-cols-1 gap-1.5",
                                                                children: et.professionalTools.map(e => (0, r.jsx)(eU, {
                                                                    title: e.name,
                                                                    href: e.href,
                                                                    icon: e.icon,
                                                                    isNew: e.isNew,
                                                                    compact: !0,
                                                                    hideDesc: !0,
                                                                    children: e.desc
                                                                }, e.name))
                                                            })]
                                                        })]
                                                    }), (0, r.jsxs)("div", {
                                                        children: [(0, r.jsxs)("div", {
                                                            className: "mb-4",
                                                            children: [(0, r.jsxs)("h3", {
                                                                className: "text-sm font-medium text-gray-500 mb-2 flex items-center gap-1.5",
                                                                children: [(0, r.jsx)(eb.Z, {
                                                                    className: "w-4 h-4"
                                                                }), "Style & Portrait"]
                                                            }), (0, r.jsx)("ul", {
                                                                className: "grid grid-cols-1 gap-1.5",
                                                                children: et.styleAndPortrait.map(e => (0, r.jsx)(eU, {
                                                                    title: e.name,
                                                                    href: e.href,
                                                                    icon: e.icon,
                                                                    isNew: e.isNew,
                                                                    compact: !0,
                                                                    hideDesc: !0,
                                                                    children: e.desc
                                                                }, e.name))
                                                            })]
                                                        }), (0, r.jsxs)("div", {
                                                            children: [(0, r.jsxs)("h3", {
                                                                className: "text-sm font-medium text-gray-500 mb-2 flex items-center gap-1.5",
                                                                children: [(0, r.jsx)(v.Z, {
                                                                    className: "w-4 h-4"
                                                                }), "Popular Tools"]
                                                            }), (0, r.jsx)("div", {
                                                                className: " rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 ",
                                                                children: (0, r.jsx)("ul", {
                                                                    className: "grid grid-cols-1 gap-1",
                                                                    children: [{
                                                                        name: "AI Baby Generator",
                                                                        desc: "Predict What your baby will look like",
                                                                        href: "/ai-baby-generator",
                                                                        icon: g.Z
                                                                    }, {
                                                                        name: "Magic Edit",
                                                                        desc: "Edit images with AI",
                                                                        href: "/magic-edit",
                                                                        icon: c.Z
                                                                    }, {
                                                                        name: "Studio Ghibli AI",
                                                                        desc: "Turn photos into Ghibli Filter art with Studio Ghibli AI",
                                                                        href: "/studio-ghibli",
                                                                        icon: T.Q5Z
                                                                    }].map(e => (0, r.jsx)(eU, {
                                                                        title: e.name,
                                                                        href: e.href,
                                                                        icon: e.icon,
                                                                        compact: !0,
                                                                        hideDesc: !0,
                                                                        children: e.desc
                                                                    }, e.name))
                                                                })
                                                            })]
                                                        }), (0, r.jsx)("div", {
                                                            className: "mt-4",
                                                            children: (0, r.jsx)("div", {
                                                                className: "bg-blue-50 p-3 rounded-lg",
                                                                children: (0, r.jsxs)("div", {
                                                                    className: "flex items-center gap-2 text-sm font-medium text-blue-600",
                                                                    children: [(0, r.jsx)(V.Z, {
                                                                        className: "w-4 h-4"
                                                                    }), (0, r.jsx)("a", {
                                                                        href: "/home",
                                                                        className: "hover:underline",
                                                                        children: "View All Tools"
                                                                    })]
                                                                })
                                                            })
                                                        })]
                                                    })]
                                                })
                                            })
                                        })]
                                    }, "magic-tools"), (0, r.jsxs)(ek, {
                                        children: [(0, r.jsxs)(e_, {
                                            className: "relative text-sm font-semibold px-2",
                                            children: ["Flux 1.1", (0, r.jsx)("span", {
                                                className: "absolute -top-2 -right-4   text-xs px-1 py-0.5 rounded-full text-[10px]  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white",
                                                children: "Ultra"
                                            })]
                                        }, "flux1"), (0, r.jsx)(eF, {
                                            className: "relative z-50 left-0 right-auto",
                                            children: (0, r.jsx)("ul", {
                                                className: "w-[400px] p-3",
                                                children: es.map(e => (0, r.jsx)(eU, {
                                                    title: e.name,
                                                    href: e.href,
                                                    icon: e.icon,
                                                    isNew: e.isNew,
                                                    newText: "4K",
                                                    children: e.desc
                                                }, e.name + e.href))
                                            })
                                        })]
                                    }, "flux1"), X.map(e => (0, r.jsx)(ek, {
                                        children: (0, r.jsxs)(eD, {
                                            className: (0, Z.cn)("text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-500 transition-all duration-150 inline-flex h-9 items-center justify-center rounded-md px-4 py-2", {
                                                "text-indigo-500": "en" !== J ? "/".concat(J, "/").concat(e.href) === a : "/".concat(e.href) === a
                                            }, (null == e ? void 0 : e.isNew) && "relative bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"),
                                            href: e.href,
                                            children: [e.name, e.isVideoEffects && (0, r.jsx)("span", {
                                                className: "absolute -top-2 -right-4   bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white text-xs px-1 py-0.5 rounded-full text-[10px] z-[9999]",
                                                children: "French Kiss"
                                            })]
                                        })
                                    }, e.name))]
                                })
                            }), (0, r.jsx)(eN, {
                                align: "right",
                                children: (0, r.jsxs)(eA, {
                                    className: "z-0",
                                    children: [(0, r.jsxs)(ek, {
                                        children: [(0, r.jsx)(e_, {
                                            className: "relative px-2 z-0",
                                            children: (0, r.jsx)("span", {
                                                className: "gap-x-1 text-sm font-semibold relative",
                                                children: "Prompts"
                                            })
                                        }), (0, r.jsx)(eF, {
                                            className: "relative z-0 ",
                                            children: (0, r.jsx)("ul", {
                                                className: "w-[400px] p-3",
                                                children: ei.map(e => (0, r.jsx)(eU, {
                                                    title: e.name,
                                                    href: e.href,
                                                    icon: e.icon,
                                                    newText: "Character",
                                                    children: e.desc
                                                }, e.name + e.href))
                                            })
                                        })]
                                    }, "prompts"), (0, r.jsxs)(ek, {
                                        children: [(0, r.jsx)(e_, {
                                            className: "relative px-2",
                                            children: (0, r.jsx)("span", {
                                                className: "gap-x-1 text-sm font-semibold relative",
                                                children: "Lora"
                                            })
                                        }), (0, r.jsx)(eF, {
                                            className: "relative z-[9999] ",
                                            children: (0, r.jsx)("ul", {
                                                className: "w-[400px] p-3",
                                                children: er.map(e => (0, r.jsx)(eU, {
                                                    title: e.name,
                                                    href: e.href,
                                                    icon: e.icon,
                                                    isNew: e.isNew,
                                                    newText: "Character",
                                                    tesla: e.tesla,
                                                    children: e.desc
                                                }, e.name + e.href))
                                            })
                                        })]
                                    }, "flux1-1_lora"), (0, r.jsxs)(ek, {
                                        children: [(0, r.jsxs)(e_, {
                                            className: "relative px-2",
                                            children: [(0, r.jsx)("span", {
                                                className: "gap-x-1 text-sm font-semibold relative",
                                                children: $("aiVideo")
                                            }), (0, r.jsx)("span", {
                                                className: "absolute -top-2 -right-4   text-xs px-1 py-0.5 rounded-full text-[10px]  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white z-[9999]",
                                                children: "Kling AI"
                                            })]
                                        }), (0, r.jsx)(eF, {
                                            className: "relative z-[9999] ",
                                            children: (0, r.jsx)("ul", {
                                                className: "w-[400px] p-3",
                                                children: eo.map(e => (0, r.jsx)(eU, {
                                                    title: e.name,
                                                    href: e.href,
                                                    icon: e.icon,
                                                    isNew: e.isNew,
                                                    isHot: e.isHot,
                                                    isLimitedOffer: e.isLimitedOffer,
                                                    newText: "New",
                                                    children: e.desc
                                                }, e.name + e.href))
                                            })
                                        })]
                                    }, "flux-videos"), (0, r.jsxs)(ek, {
                                        children: [(0, r.jsxs)(e_, {
                                            className: "relative px-2",
                                            children: [(0, r.jsx)("span", {
                                                className: "gap-x-1 text-sm font-semibold relative",
                                                children: "Flux Tools"
                                            }), (0, r.jsx)("span", {
                                                className: "absolute -top-2 -right-3   text-xs px-1 py-0.5 rounded-full text-[10px]  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white",
                                                children: "Outpaint"
                                            })]
                                        }), (0, r.jsx)(eF, {
                                            className: "relative z-50 ",
                                            children: (0, r.jsx)("ul", {
                                                className: "w-[500px] p-3 grid grid-cols-1 md:grid-cols-2",
                                                children: en.map(e => (0, r.jsx)(eU, {
                                                    title: e.name,
                                                    href: e.href,
                                                    icon: e.icon,
                                                    isNew: e.isNew,
                                                    newText: "New",
                                                    children: e.desc
                                                }, e.name + e.href))
                                            })
                                        })]
                                    }, "flux-tools")]
                                })
                            }), (0, r.jsx)("a", {
                                className: (0, Z.cn)("text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-500 transition-all duration-150 inline-flex h-9 items-center justify-center rounded-md px-4 py-2", {
                                    "text-indigo-500": "en" !== J ? "/".concat(J, "/home") === a : "/home" === a
                                }),
                                href: "/home",
                                children: "Home"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "hidden lg:flex lg:flex-1 lg:justify-end gap-3 items-center",
                            children: [Q ? (0, r.jsxs)("div", {
                                className: "flex flex-col md:flex-row gap-3 items-center",
                                children: [W && null != z && (0, r.jsxs)("div", {
                                    className: "flex items-center text-sm text-gray-600",
                                    children: [(0, r.jsx)(E.Z, {
                                        className: "w-4 h-4 mr-1"
                                    }), (0, r.jsx)("span", {
                                        children: z
                                    })]
                                }), (0, r.jsx)(ey.CH, {
                                    children: (0, r.jsx)(el, {})
                                })]
                            }) : (0, r.jsx)(C.Z, {
                                className: "h-4 w-4 animate-spin text-indigo-500"
                            }), (0, r.jsxs)(ey.tj, {
                                children: [(0, r.jsx)(O.$d, {
                                    children: (0, r.jsx)("button", {
                                        className: "text-sm font-medium bg-gray-900 text-white hover:bg-gray-700 transition-colors duration-150 rounded-md px-4 py-2",
                                        children: "Login"
                                    })
                                }), (0, r.jsx)(O.Kb, {
                                    cancelOnTapOutside: !1,
                                    itpSupport: !1,
                                    fedCmSupport: !1
                                })]
                            })]
                        })]
                    })
                })
            }
            let eU = i.forwardRef((e, t) => {
                let {
                    className: a,
                    title: i,
                    children: s,
                    icon: n,
                    isNew: o,
                    newText: l = "New",
                    tesla: c,
                    compact: d = !1,
                    hideDesc: m = !1,
                    isHot: u,
                    isLimitedOffer: h,
                    ...f
                } = e;
                return (0, r.jsx)("li", {
                    children: (0, r.jsx)(eD, {
                        asChild: !0,
                        children: (0, r.jsx)("a", {
                            ref: t,
                            className: (0, Z.cn)("block select-none rounded-lg leading-none no-underline outline-none transition-colors hover:bg-gray-50", d ? "py-2 px-3" : "p-3", a),
                            ...f,
                            children: (0, r.jsxs)("div", {
                                className: "flex items-center gap-x-3 group",
                                children: [n && (0, r.jsx)("div", {
                                    className: (0, Z.cn)("flex flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white", d ? "h-8 w-8" : "h-9 w-9"),
                                    children: (0, r.jsx)(n, {
                                        className: (0, Z.cn)("text-gray-600 group-hover:text-indigo-600", d ? "h-4 w-4" : "h-5 w-5")
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "flex-auto",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [(0, r.jsx)("span", {
                                            className: (0, Z.cn)("font-semibold leading-none text-gray-900", "text-sm"),
                                            children: i
                                        }), o && (0, r.jsx)("span", {
                                            className: (0, Z.cn)("ml-2 text-red-600 bg-green-100 rounded-full px-1.5 py-0.5 font-semibold", d ? "text-[10px]" : "text-[12px]"),
                                            children: l
                                        }), u && (0, r.jsx)("span", {
                                            className: (0, Z.cn)("ml-2 text-red-600 bg-green-100 rounded-full px-1.5 py-0.5 font-semibold", d ? "text-[10px]" : "text-[12px]"),
                                            children: "Hot"
                                        }), h && (0, r.jsxs)("span", {
                                            className: (0, Z.cn)("ml-2 text-amber-50 bg-gradient-to-r from-amber-500 to-red-500 rounded-full px-2 py-1 font-bold animate-pulse flex items-center ", d ? "text-[10px]" : "text-[12px]"),
                                            children: [(0, r.jsx)(T.m_y, {
                                                className: "w-4 h-4 mr-1"
                                            }), "Limited Offer"]
                                        }), c && (0, r.jsx)("span", {
                                            className: (0, Z.cn)("ml-2 text-blue-500 bg-blue-100 rounded-full px-1.5 py-0.5", "text-[10px]"),
                                            children: "Portrait Lora"
                                        })]
                                    }), !m && (0, r.jsx)("p", {
                                        className: "mt-1 text-xs text-gray-500",
                                        children: s
                                    })]
                                })]
                            })
                        })
                    })
                })
            });
            eU.displayName = "ListItem"
        },
        34057: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return h
                }
            });
            var r = a(57437),
                i = a(38706),
                s = a(58598),
                n = a(25566);
            let o = ["de", "en", "es", "fr", "ja", "kk", "ko", "pt", "ru", "uk", "vi", "it"];
            n.env.PORT, n.env.VERCEL_URL && n.env.VERCEL_URL;
            var l = a(55221),
                c = a(99376),
                d = a(2265),
                m = a(15291);

            function u(e) {
                let {
                    children: t,
                    defaultValue: a,
                    label: i
                } = e, n = (0, l.tv)(), [o, u] = (0, d.useTransition)(), h = (0, l.jD)(), f = (0, c.useParams)();
                return (0, s.bU)(), (0, r.jsxs)(m.Ph, {
                    defaultValue: a,
                    onValueChange: function(e) {
                        u(() => {
                            n.replace({
                                pathname: h,
                                params: f
                            }, {
                                locale: e
                            })
                        })
                    },
                    disabled: o,
                    children: [(0, r.jsx)(m.i4, {
                        className: "w-15",
                        children: (0, r.jsx)(m.ki, {
                            placeholder: i
                        })
                    }), (0, r.jsx)(m.Bw, {
                        children: t
                    })]
                })
            }

            function h() {
                let e = (0, i.T_)("LocaleSwitcher"),
                    t = (0, s.bU)();
                return (0, r.jsx)(u, {
                    defaultValue: t,
                    label: e("label"),
                    children: o.map(t => (0, r.jsx)(m.Ql, {
                        value: t,
                        children: e("locale", {
                            locale: t
                        })
                    }, t))
                })
            }
        },
        87338: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = a(57437),
                i = a(99376),
                s = a(93448);
            a(2265);
            var n = a(55221);

            function o(e) {
                let {
                    href: t,
                    className: a,
                    children: o,
                    targetBlank: l,
                    ...c
                } = e, d = (0, i.useSelectedLayoutSegment)(), m = (d ? "/".concat(d) : "/") === t;
                return (0, r.jsx)(n.rU, {
                    "aria-current": m ? "page" : void 0,
                    className: (0, s.cn)(a),
                    target: "".concat(l ? "_blank" : "_self"),
                    href: t,
                    ...c,
                    children: o
                })
            }
        },
        22549: function(e, t, a) {
            "use strict";
            a.d(t, {
                Qd: function() {
                    return c
                },
                UQ: function() {
                    return l
                },
                o4: function() {
                    return d
                },
                vF: function() {
                    return m
                }
            });
            var r = a(57437),
                i = a(2265),
                s = a(54221),
                n = a(40875),
                o = a(93448);
            let l = s.fC,
                c = i.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...i
                    } = e;
                    return (0, r.jsx)(s.ck, {
                        ref: t,
                        className: (0, o.cn)("border-b", a),
                        ...i
                    })
                });
            c.displayName = "AccordionItem";
            let d = i.forwardRef((e, t) => {
                let {
                    className: a,
                    children: i,
                    ...l
                } = e;
                return (0, r.jsx)(s.h4, {
                    className: "flex",
                    children: (0, r.jsxs)(s.xz, {
                        ref: t,
                        className: (0, o.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", a),
                        ...l,
                        children: [i, (0, r.jsx)(n.Z, {
                            className: "h-4 w-4 shrink-0 transition-transform duration-200"
                        })]
                    })
                })
            });
            d.displayName = s.xz.displayName;
            let m = i.forwardRef((e, t) => {
                let {
                    className: a,
                    children: i,
                    ...n
                } = e;
                return (0, r.jsx)(s.VY, {
                    ref: t,
                    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
                    ...n,
                    children: (0, r.jsx)("div", {
                        className: (0, o.cn)("pb-4 pt-0", a),
                        children: i
                    })
                })
            });
            m.displayName = s.VY.displayName
        },
        30767: function(e, t, a) {
            "use strict";
            a.d(t, {
                OL: function() {
                    return g
                },
                _T: function() {
                    return u
                },
                aR: function() {
                    return l
                },
                f$: function() {
                    return p
                },
                fY: function() {
                    return h
                },
                le: function() {
                    return y
                },
                vW: function() {
                    return c
                },
                xo: function() {
                    return f
                },
                yT: function() {
                    return x
                }
            });
            var r = a(57437),
                i = a(2265),
                s = a(51502),
                n = a(93448),
                o = a(12381);
            let l = s.fC,
                c = s.xz,
                d = s.h_,
                m = i.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...i
                    } = e;
                    return (0, r.jsx)(s.aV, {
                        className: (0, n.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", a),
                        ...i,
                        ref: t
                    })
                });
            m.displayName = s.aV.displayName;
            let u = i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsxs)(d, {
                    children: [(0, r.jsx)(m, {}), (0, r.jsx)(s.VY, {
                        ref: t,
                        className: (0, n.cn)("fixed left-[50%] top-[50%] z-50 grid w-[calc(100%-2rem)] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", a),
                        ...i
                    })]
                })
            });
            u.displayName = s.VY.displayName;
            let h = e => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, n.cn)("flex flex-col space-y-2 text-center sm:text-left", t),
                    ...a
                })
            };
            h.displayName = "AlertDialogHeader";
            let f = e => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, n.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t),
                    ...a
                })
            };
            f.displayName = "AlertDialogFooter";
            let p = i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)(s.Dx, {
                    ref: t,
                    className: (0, n.cn)("text-lg font-semibold", a),
                    ...i
                })
            });
            p.displayName = s.Dx.displayName;
            let x = i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)(s.dk, {
                    ref: t,
                    className: (0, n.cn)("text-sm text-muted-foreground", a),
                    ...i
                })
            });
            x.displayName = s.dk.displayName;
            let g = i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)(s.aU, {
                    ref: t,
                    className: (0, n.cn)((0, o.d)(), a),
                    ...i
                })
            });
            g.displayName = s.aU.displayName;
            let y = i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)(s.$j, {
                    ref: t,
                    className: (0, n.cn)((0, o.d)({
                        variant: "outline"
                    }), "mt-2 sm:mt-0", a),
                    ...i
                })
            });
            y.displayName = s.$j.displayName
        },
        69174: function(e, t, a) {
            "use strict";
            a.d(t, {
                C: function() {
                    return o
                }
            });
            var r = a(57437);
            a(2265);
            var i = a(90535),
                s = a(93448);
            let n = (0, i.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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
                    variant: a,
                    ...i
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, s.cn)(n({
                        variant: a
                    }), t),
                    ...i
                })
            }
        },
        12381: function(e, t, a) {
            "use strict";
            a.d(t, {
                d: function() {
                    return l
                },
                z: function() {
                    return c
                }
            });
            var r = a(57437),
                i = a(2265),
                s = a(98482),
                n = a(90535),
                o = a(93448);
            let l = (0, n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
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
                c = i.forwardRef((e, t) => {
                    let {
                        className: a,
                        variant: i,
                        size: n,
                        asChild: c = !1,
                        ...d
                    } = e, m = c ? s.g7 : "button";
                    return (0, r.jsx)(m, {
                        className: (0, o.cn)(l({
                            variant: i,
                            size: n,
                            className: a
                        })),
                        ref: t,
                        ...d
                    })
                });
            c.displayName = "Button"
        },
        74291: function(e, t, a) {
            "use strict";
            a.d(t, {
                $N: function() {
                    return f
                },
                Be: function() {
                    return p
                },
                Vq: function() {
                    return l
                },
                cZ: function() {
                    return u
                },
                fK: function() {
                    return h
                },
                hg: function() {
                    return c
                }
            });
            var r = a(57437),
                i = a(2265),
                s = a(88656),
                n = a(32489),
                o = a(93448);
            let l = s.fC,
                c = s.xz,
                d = s.h_;
            s.x8;
            let m = i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)(s.aV, {
                    ref: t,
                    className: (0, o.cn)("fixed inset-0 z-50  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", "backdrop-blur-sm bg-black/70", a),
                    ...i
                })
            });
            m.displayName = s.aV.displayName;
            let u = i.forwardRef((e, t) => {
                let {
                    className: a,
                    children: i,
                    closeButtonClassName: l,
                    closeIconClassName: c,
                    ...u
                } = e;
                return (0, r.jsxs)(d, {
                    children: [(0, r.jsx)(m, {}), (0, r.jsxs)(s.VY, {
                        ref: t,
                        className: (0, o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", a),
                        ...u,
                        children: [i, (0, r.jsxs)(s.x8, {
                            className: (0, o.cn)("absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", l),
                            children: [(0, r.jsx)(n.Z, {
                                className: (0, o.cn)("h-4 w-4", c)
                            }), (0, r.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })]
                        })]
                    })]
                })
            });
            u.displayName = s.VY.displayName;
            let h = e => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, o.cn)("flex flex-col space-y-1.5 text-center sm:text-left", t),
                    ...a
                })
            };
            h.displayName = "DialogHeader";
            let f = i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)(s.Dx, {
                    ref: t,
                    className: (0, o.cn)("text-lg font-semibold leading-none tracking-tight", a),
                    ...i
                })
            });
            f.displayName = s.Dx.displayName;
            let p = i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)(s.dk, {
                    ref: t,
                    className: (0, o.cn)("text-sm text-muted-foreground", a),
                    ...i
                })
            });
            p.displayName = s.dk.displayName
        },
        90641: function(e, t, a) {
            "use strict";
            a.d(t, {
                B: function() {
                    return l
                },
                x: function() {
                    return o
                }
            });
            var r = a(57437),
                i = a(2265),
                s = a(27870),
                n = a(93448);
            let o = i.forwardRef((e, t) => {
                let {
                    className: a,
                    children: i,
                    ...o
                } = e;
                return (0, r.jsxs)(s.fC, {
                    ref: t,
                    className: (0, n.cn)("relative overflow-hidden", a),
                    ...o,
                    children: [(0, r.jsx)(s.l_, {
                        className: "h-full w-full rounded-[inherit]",
                        children: i
                    }), (0, r.jsx)(l, {}), (0, r.jsx)(s.Ns, {})]
                })
            });
            o.displayName = s.fC.displayName;
            let l = i.forwardRef((e, t) => {
                let {
                    className: a,
                    orientation: i = "vertical",
                    ...o
                } = e;
                return (0, r.jsx)(s.gb, {
                    ref: t,
                    orientation: i,
                    className: (0, n.cn)("flex touch-none select-none transition-colors", "vertical" === i && "h-full w-2.5 border-l border-l-transparent p-[1px]", "horizontal" === i && "h-2.5 flex-col border-t border-t-transparent p-[1px]", a),
                    ...o,
                    children: (0, r.jsx)(s.q4, {
                        className: "relative flex-1 rounded-full bg-border"
                    })
                })
            });
            l.displayName = s.gb.displayName
        },
        15291: function(e, t, a) {
            "use strict";
            a.d(t, {
                Bw: function() {
                    return p
                },
                Ph: function() {
                    return d
                },
                Ql: function() {
                    return x
                },
                i4: function() {
                    return u
                },
                ki: function() {
                    return m
                }
            });
            var r = a(57437),
                i = a(2265),
                s = a(89249),
                n = a(40875),
                o = a(22135),
                l = a(30401),
                c = a(93448);
            let d = s.fC;
            s.ZA;
            let m = s.B4,
                u = i.forwardRef((e, t) => {
                    let {
                        className: a,
                        children: i,
                        ...o
                    } = e;
                    return (0, r.jsxs)(s.xz, {
                        ref: t,
                        className: (0, c.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", a),
                        ...o,
                        children: [i, (0, r.jsx)(s.JO, {
                            asChild: !0,
                            children: (0, r.jsx)(n.Z, {
                                className: "h-4 w-4 opacity-50"
                            })
                        })]
                    })
                });
            u.displayName = s.xz.displayName;
            let h = i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)(s.u_, {
                    ref: t,
                    className: (0, c.cn)("flex cursor-default items-center justify-center py-1", a),
                    ...i,
                    children: (0, r.jsx)(o.Z, {
                        className: "h-4 w-4"
                    })
                })
            });
            h.displayName = s.u_.displayName;
            let f = i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)(s.$G, {
                    ref: t,
                    className: (0, c.cn)("flex cursor-default items-center justify-center py-1", a),
                    ...i,
                    children: (0, r.jsx)(n.Z, {
                        className: "h-4 w-4"
                    })
                })
            });
            f.displayName = s.$G.displayName;
            let p = i.forwardRef((e, t) => {
                let {
                    className: a,
                    children: i,
                    position: n = "popper",
                    ...o
                } = e;
                return (0, r.jsx)(s.h_, {
                    children: (0, r.jsxs)(s.VY, {
                        ref: t,
                        className: (0, c.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "popper" === n && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", a),
                        position: n,
                        ...o,
                        children: [(0, r.jsx)(h, {}), (0, r.jsx)(s.l_, {
                            className: (0, c.cn)("p-1", "popper" === n && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                            children: i
                        }), (0, r.jsx)(f, {})]
                    })
                })
            });
            p.displayName = s.VY.displayName, i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)(s.__, {
                    ref: t,
                    className: (0, c.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", a),
                    ...i
                })
            }).displayName = s.__.displayName;
            let x = i.forwardRef((e, t) => {
                let {
                    className: a,
                    children: i,
                    ...n
                } = e;
                return (0, r.jsxs)(s.ck, {
                    ref: t,
                    className: (0, c.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", a),
                    ...n,
                    children: [(0, r.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, r.jsx)(s.wU, {
                            children: (0, r.jsx)(l.Z, {
                                className: "h-4 w-4"
                            })
                        })
                    }), (0, r.jsx)(s.eT, {
                        children: i
                    })]
                })
            });
            x.displayName = s.ck.displayName, i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)(s.Z0, {
                    ref: t,
                    className: (0, c.cn)("-mx-1 my-1 h-px bg-muted", a),
                    ...i
                })
            }).displayName = s.Z0.displayName
        },
        44903: function(e, t, a) {
            "use strict";
            a.d(t, {
                Toaster: function() {
                    return n
                }
            });
            var r = a(57437),
                i = a(25922),
                s = a(14438);
            let n = e => {
                let { ...t
                } = e, {
                    theme: a = "system"
                } = (0, i.F)();
                return (0, r.jsx)(s.x, {
                    theme: a,
                    className: "toaster group",
                    toastOptions: {
                        classNames: {
                            toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                            description: "group-[.toast]:text-muted-foreground",
                            actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                            cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
                        }
                    },
                    ...t
                })
            }
        },
        8733: function(e, t, a) {
            "use strict";
            a.d(t, {
                AC: function() {
                    return m
                },
                MI: function() {
                    return p
                },
                T7: function() {
                    return f
                },
                Xn: function() {
                    return l
                },
                be: function() {
                    return n
                },
                hC: function() {
                    return s
                },
                iC: function() {
                    return i
                },
                pb: function() {
                    return h
                },
                ug: function() {
                    return u
                },
                vY: function() {
                    return c
                },
                vl: function() {
                    return o
                },
                x8: function() {
                    return d
                }
            });
            var r = a(25566);
            let i = "Flux.1 AI",
                s = "Flux1.AI",
                n = "support@flux1.ai",
                o = 10,
                l = !0,
                c = [{
                    img_url: "https://r2.flux1.ai/fluxai/2024/08/hug-merge-1.jpg",
                    video_url: "https://r2.flux1.ai/fluxai/2024/08/hug-1.mp4"
                }, {
                    img_url: "https://r2.flux1.ai/fluxai/2024/08/hug-merge-2.jpg",
                    video_url: "https://r2.flux1.ai/fluxai/2024/08/hug-2.mp4"
                }],
                d = [{
                    question: "Is the Disney AI Filter free to use?",
                    answer: "Yes, the Disney AI Filter is free to use. Each new registered user receives 10 credits, and each time you generate a filter, it costs 5 credits. Therefore, you have 2 free uses. If you need more results, you can purchase our subscription plan."
                }, {
                    question: "What is the Disney AI Filter and how does it work?",
                    answer: "The Disney AI Filter is an advanced AI-powered feature that transforms regular photos into Disney-style animated characters. Our Disney AI Filter uses sophisticated algorithms to capture the essence of Disney's iconic art style."
                }, {
                    question: "How can I use the Disney AI Filter on my photos?",
                    answer: "To use our Disney AI Filter, simply upload your photo to our AI-powered Disney transformation tool. Our advanced Disney-style algorithms will then process your image, applying the magical Disney style to create a charming, animated version of your picture. It's an easy and fun way to see yourself or your friends as Disney-inspired characters!"
                }, {
                    question: "Is there an app that can make me look like a Disney character?",
                    answer: "Yes, there are several apps and online tools that can 'Disneyfy' your photos. Our AI-powered Disney AI Filter is one of the best tools for transforming your pictures into authentic Disney-style art. Unlike simple social media filters, our Disney AI Filter uses advanced AI to create more detailed and genuine Disney-style transformations."
                }, {
                    question: "Does Instagram have a Disney filter?",
                    answer: "While Instagram occasionally features Disney-themed filters for specific promotions, they don't have a permanent Disney character filter. For a more comprehensive Disney-style transformation, you can use our AI-powered Disney AI Filter, which offers more detailed and customizable results than typical social media filters. Our Disney AI Filter provides a true Disney-inspired makeover for your photos."
                }, {
                    question: "Where can I find the best Disney character filter?",
                    answer: "Right here! Our AI-powered Disney AI Filter offers one of the most advanced and authentic Disney-style transformations available. Unlike simple filters, our Disney AI Filter tool uses cutting-edge AI technology to analyze and recreate your image in true Disney fashion, capturing the essence of Disney's iconic art style. Experience the magic of our Disney AI Filter for yourself!"
                }, {
                    question: "What makes AI-generated Disney filters different from regular filters?",
                    answer: "AI-generated Disney filters, like our Disney AI Filter, use sophisticated algorithms to analyze facial features, expressions, and overall composition. This allows for a more nuanced and authentic Disney-style transformation compared to standard filters. Our Disney AI Filter AI can adapt to various poses, lighting conditions, and even multiple people in a single image, creating Disney-inspired art that truly captures the magic of your original photo and the essence of Disney's unique style."
                }],
                m = [{
                    question: "What is the Disney AI Poster and how does it work?",
                    answer: "The Disney AI Poster is an advanced AI-powered feature that transforms regular photos into Disney-style animated characters. Our Disney AI Poster uses sophisticated algorithms to capture the essence of Disney's iconic art style."
                }, {
                    question: "How can I use the Disney AI Poster on my photos?",
                    answer: "To use our Disney AI Poster, simply upload your photo to our AI-powered Disney transformation tool. Our advanced Disney-style algorithms will then process your image, applying the magical Disney style to create a charming, animated version of your picture. It's an easy and fun way to see yourself or your friends as Disney-inspired characters!"
                }, {
                    question: "Is there an app that can make me look like a Disney character?",
                    answer: "Yes, there are several apps and online tools that can 'Disneyfy' your photos. Our AI-powered Disney AI Poster is one of the best tools for transforming your pictures into authentic Disney-style art. Unlike simple social media filters, our Disney AI Poster uses advanced AI to create more detailed and genuine Disney-style transformations."
                }, {
                    question: "Is it free to use?",
                    answer: "We provide 10 free credits for each user. If you need more, you can purchase more credits in the Flux Create page."
                }, {
                    question: "Where can I find the best Disney AI Poster?",
                    answer: "Right here! Our AI-powered Disney AI Poster offers one of the most advanced and authentic Disney-style transformations available. Unlike simple filters, our Disney AI Poster tool uses cutting-edge AI technology to analyze and recreate your image in true Disney fashion, capturing the essence of Disney's iconic art style. Experience the magic of our Disney AI Poster for yourself!"
                }, {
                    question: "What makes AI-generated Disney AI Poster different from regular filters?",
                    answer: "AI-generated Disney AI Poster, like our Disney AI Poster, use sophisticated algorithms to analyze facial features, expressions, and overall composition. This allows for a more nuanced and authentic Disney-style transformation compared to standard filters. Our Disney AI Poster AI can adapt to various poses, lighting conditions, and even multiple people in a single image, creating Disney-inspired art that truly captures the magic of your original photo and the essence of Disney's unique style."
                }],
                u = [{
                    id: 1,
                    question: "What is Flux Lora?",
                    answer: "Flux Lora is a technique that fine-tunes general models to generate images with specific styles. This method allows us to create more specialized and personalized image generation models."
                }, {
                    id: 2,
                    question: "Is Flux Lora free to use?",
                    answer: "Yes, Flux Lora can be used for free. Each new registered user receives 10 initial credits, and each Flux Lora usage costs 3 credits, so you can use Lora several times for free."
                }, {
                    id: 3,
                    question: "Can I create custom Loras?",
                    answer: "Currently, we don't support user-created custom Loras. However, we are actively working on this feature and hope to offer the ability to create custom Loras in the future. Please stay tuned for updates."
                }, {
                    id: 4,
                    question: "What are the advantages of using Flux Lora?",
                    answer: "Flux Lora allows you to generate more stylized and specialized images. It can capture specific artistic styles, themes, or visual elements, making the generated images more aligned with your specific needs or creative vision."
                }, {
                    id: 5,
                    question: "How do I choose the right Flux Lora?",
                    answer: "When choosing a Flux Lora, consider the visual effect or style you want to achieve. Browse our Lora Gallery, look at the example images for each Lora, and select the one that best fits your creative needs. You can also experiment with different Loras to see which produces the most satisfying results."
                }],
                h = [{
                    quote: "Create a captivating portrait of a voluptuous boho woman with green eyes and long, wavy blonde hair, she is standing. She has a fair complexion adorned with delicate freckles, and her expression is contemplative, reflecting a moment of deep thought. She wears a white-colored, off-shoulder linen satin dress, with deep neck linen, complemented by a necklace and various boho jewelry that accentuates her bohemian style.",
                    name: "A voluptuous boho woman",
                    title: "Boho Fashion Portrait",
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/car-2.webp",
                    prompt: "Create a captivating portrait of a voluptuous boho woman with green eyes and long, wavy blonde hair, she is standing. She has a fair complexion adorned with delicate freckles, and her expression is contemplative, reflecting a moment of deep thought. She wears a white-colored, off-shoulder linen satin dress, with deep neck linen, complemented by a necklace and various boho jewelry that accentuates her bohemian style., photo, poster, vibrant, portrait photography, fashion"
                }, {
                    quote: "Flux AI Realism",
                    name: "A charismatic speaker",
                    title: "TikTok Conference",
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/AgAABT-cdUbde5Nh9lxPRZDcR-K1bUnt.png",
                    prompt: "A charismatic speaker is captured mid-speech. He has short, tousled brown hair that's slightly messy on top. He has a round circle face, clean shaven, adorned with rounded rectangular-framed glasses with dark rims, is animated as he gestures with his left hand. He is holding a black microphone in his right hand, speaking passionately.The man is wearing a light grey sweater over a white t-shirt. He's also wearing a simple black lanyard hanging around his neck. The lanyard badge has the text TikTok .Behind him, there is a blurred background with a white banner containing logos and text (including tiktok), a professional conference setting."
                }, {
                    quote: "Not my circus, not my clowns - a satirical look at American politics.",
                    name: "Biden and trump dressed as clowns",
                    title: "Political Circus",
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/AgAABT-cdUYRpzGVTsRAhb1PtussfM6K.png",
                    prompt: "Flux 1.1 Pro Cake on the Table"
                }, {
                    quote: "Life's a beach, and this cat's got it figured out.",
                    name: "A cat sit near the beach with sun glass",
                    title: "Cool Cat on Vacation",
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/car-3.webp",
                    prompt: "a cat sit near the bech with sun glass, photo."
                }],
                f = [{
                    imgSrc: "https://imagedelivery.net/qyBi8Sldkv04GDFhInQH5A/7e1bd9cf-5906-47c7-7ce7-29fce6655100/public",
                    style: "portrait",
                    prompt: "Create a captivating portrait of a voluptuous boho woman with green eyes and long, wavy blonde hair, she is standing. She has a fair complexion adorned with delicate freckles, and her expression is contemplative, reflecting a moment of deep thought. She wears a white-colored, off-shoulder linen satin dress, with deep neck linen, complemented by a necklace and various boho jewelry that accentuates her bohemian style., photo, poster, vibrant, portrait photography, fashion",
                    name: "A voluptuous boho woman",
                    quote: "Create a captivating portrait of a voluptuous boho woman with green eyes and long, wavy blonde hair, she is standing. She has a fair complexion adorned with delicate freckles, and her expression is contemplative, reflecting a moment of deep thought. She wears a white-colored, off-shoulder linen satin dress, with deep neck linen, complemented by a necklace and various boho jewelry that accentuates her bohemian style."
                }, {
                    imgSrc: "https://imagedelivery.net/qyBi8Sldkv04GDFhInQH5A/95d14cee-44ce-4c30-3c39-6925c14e1d00/public",
                    style: "surreal",
                    prompt: "pareidolic anamorphosis of a hole in a brick wall morphed into a hublot of a sail boat, a window to the sea.",
                    name: "A window to the sea",
                    quote: "A window to the sea, where reality bends and imagination sets sail."
                }, {
                    imgSrc: "https://imagedelivery.net/qyBi8Sldkv04GDFhInQH5A/40418be9-b7b9-4215-6630-c5fe3532f900/public",
                    style: "photo",
                    prompt: "a cat sit near the bech with sun glass, photo.",
                    name: "A cat sit near the beach with sun glass",
                    quote: "Life's a beach, and this cat's got it figured out."
                }, {
                    name: "Rose Potter",
                    imgSrc: "https://imgc.cc/2024/11/16/673783ca9a6d1.jpg",
                    prompt: "Write this poem with cursive text on a background that fits the words: Roses are red Violets are blue, Sugar is sweet And so are you."
                }, {
                    name: "International Meeting",
                    imgSrc: "https://imgc.cc/2024/11/16/673784370396f.jpg",
                    prompt: "A tense diplomatic negotiation in a grand hall, featuring representatives from 20 different countries, each wearing traditional attire. The scene should include interpreters, aides whispering to their leaders, and visible emotional reactions ranging from frustration to hope."
                }, {
                    name: "A dark-haired woman playing the piano",
                    imgSrc: "https://imgc.cc/2024/11/16/67378490a13c1.jpg",
                    prompt: "A dark-haired woman in her early thirties playing the piano accordion in the middle of an octagonal wooden dance floor with a wooden roof in the Swedish forest, surrounded by dancers dancing in pairs."
                }, {
                    name: "Cheerful villagers",
                    imgSrc: "https://imgc.cc/2024/11/16/67378510cbad0.jpg",
                    prompt: "Elevated view of a quaint 18th-century German village in the Black Forest, captured with a fisheye lens. The scene shows a group of cheerful villagers in period attire gathered in the town square, enjoying slices of Black Forest cake and mugs of beer. The distorted wide-angle view encompasses thatched-roof houses, surrounding forest, and perhaps a church spire, giving a sense of the village nestled in the broader landscape."
                }, {
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/AgAABT-cdUZXUp5Y0r1FfoL7ai6JznZ1.png",
                    prompt: "A man is fishing, in the style of stark minimalistic naive art vector icon filled with pastel large space hand-drawn solid rich black color thick stroke and solid brown sugar color thick stroke, minimalist flat illustration, pastel Dutch white color with large space for clean background, low detail, high contrast."
                }, {
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/image2.jpg",
                    prompt: "A man and a woman are getting married, in the style of stark minimalism copper engraving painting with minimalistic naive silhouettes by fine grainy natural colored sand, the foreground features a brown etching style drawing with low details, negative space hand-drawn thick strokes outlines, Warm red tones and soft lighting create a peaceful atmosphere, wideangle lens captures a dreamy scene.	"
                }, {
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/image-4people.png",
                    prompt: "four people standing on the ground, everyone holding a golden yellow single character standard square block card with both hands, these cards spell the characters of the words Flux , in the style of cartoon style, simple lines, white background, simple details, simple color blocks, cute illustrations, simple strokes, minimalist pictures."
                }, {
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/example-ppt.png",
                    prompt: "four minimalist different clean color with negative space rectangle line border, in the style of flat vector design, large space for text, clean background, 2d style in the style of no specific artist --ar 2:1 --v 6.0 --no shadow, gradient color, text, texture, noise filter, shadow detail"
                }, {
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/AgAABT-cdUZWQveur2pDtYirCReF_LLv.png",
                    prompt: "minimalist background of the PPT with the theme of a cute little girl is sitting at the desk in the lower right corner, looking at the camera, in front of a clean blackboard, in the style of powerpoint presentation interface, memoji cartoon, the blackboard has large space for text, the wooden frames in the painting maximize the display of the blackboard, a painting stationery on table, school and education concept, clean background."
                }, {
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/AgAABT-cdUY1Ook1t59DoaNeYifVsQUg.png",
                    prompt: "minimalist geometric vector art style poster."
                }, {
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/AgAABT-cdUZ2j8vTMoJDnYhwJoUlW4xo.png",
                    prompt: "A young handsome teenager, smile, short hair , Chinese , detailed, vintage 90's anime style."
                }, {
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/AgAABT-cdUaNy85W1gZI9LlIgKf6KXey.png",
                    prompt: "A young handsome teenager, smile, short hair , Chinese , detailed, by Makoto Shinkai"
                }, {
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/AgAABT-cdUaHV531WrhFX5nYarcZ8DL2.png",
                    prompt: "An island covered with vegetation , in the ocean --ar 16:10"
                }, {
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/AgAABT-cdUYGumIPjvZHI4bNTHUiRxe7.png",
                    prompt: "simple mascot for puppy fishing company， japanese style"
                }, {
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/AgAABT-cdUYkTI6BPNFPMJMmHbfGDj1N.png",
                    prompt: "kawaii girl art illustration, colorful, rainbow, girl, girl by jay joshua, in the style of cyberpunk manga, contrasting lights and darks, bold manga lines, realistic color schemes, mono-ha, high resolution, neo-pop iconography"
                }, {
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/AgAABT-cdUbde5Nh9lxPRZDcR-K1bUnt.png",
                    prompt: "A charismatic speaker is captured mid-speech. He has short, tousled brown hair that's slightly messy on top. He has a round circle face, clean shaven, adorned with rounded rectangular-framed glasses with dark rims, is animated as he gestures with his left hand. He is holding a black microphone in his right hand, speaking passionately.The man is wearing a light grey sweater over a white t-shirt. He's also wearing a simple black lanyard hanging around his neck. The lanyard badge has the text TikTok .Behind him, there is a blurred background with a white banner containing logos and text (including tiktok), a professional conference setting."
                }, {
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/AgAABT-cdUa_uqUndSVFWKuvLBFBTIbp.png",
                    prompt: "Super cute dog ip, reading book, front view, full body, chibi, soft pastel grey color, headphones, glasses, clean background, 3D, ultra detailed, c4d"
                }, {
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/AgAABT-cdUbs_2en1ZtJm4tMPLbSWHxS.png",
                    prompt: "Super cute cat ip, reading book, front view, full body, chibi, soft pastel color, headphones, glasses, raking lightm, clean background, 3D, ultra detailed, c4d"
                }, {
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/AgAABT-cdUbERtExqoJH6bSAyGHVEhEG.png",
                    prompt: "little house, Cake , Ice cream ,wool felt ,3d rendering, soft pastel color"
                }, {
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/AgAABT-cdUbIPN57fXBEZZuMLR2NPnrx.png",
                    prompt: "motorbikes, Transparent,apple design , white, 3D, c4d, clean background，realistic, cinematic, 3.5mm, f2.1, fujifilm, super detailed"
                }, {
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/AgAABT-cdUbd19u226dPM7s7iNlCV7zS.png",
                    prompt: "Headphone, Transparent, Internal mechanics, Complex design , 3D, c4d, clean background，realistic, cinematic, 3.5mm, super detailed"
                }, {
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/AgAABT-cdUa7hJXNPghA9IIUAnuH-Kha.png",
                    prompt: "sticker, super cute cat, illustration, vector,Chibi"
                }, {
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/AgAABT-cdUZexyH96eFFWI5iDsHadegb.png",
                    prompt: "a photo of a beautiful street in Freiburg with a tram passing by and people walking about and riding bikes."
                }, {
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/AgAABT-cdUYRpzGVTsRAhb1PtussfM6K.png",
                    prompt: "beautiful anime artwork, a cute anime girl’s silhouette, double exposure, iridescent nebula galaxy, black background, ethereal glow, bloom, hdr"
                }, {
                    imgSrc: "https://r2.flux1.ai/fluxai/2024/08/AgAABT-cdUaaJk_SJ31IBZETRZXX3wfg.png",
                    prompt: "beautiful pixel art of a street in new york"
                }],
                p = [{
                    support_one_time: !0,
                    name: "Pro",
                    id: "tier-pro",
                    description: "Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.",
                    features: ["".concat(800, " credits per month"), "High quality Flux AI images", "All features are available for use.", "Private Generation", "Manage & delete your generated content", "Commercial License"],
                    greenFeatures: ["Fast Mode: Priority access, No WaterMark", "Fast Mode cost only 1 credit per use"],
                    oneTimeFeatures: ["".concat(800, " credits for one month"), "High quality Flux AI images", "All features are available for use.", "Private Generation", "Manage & delete your generated content", "Commercial License"],
                    default: !1,
                    best: !1,
                    price: 22.9,
                    price_year: 13.9,
                    price_id: "price_1PnfLoFoj9PM7seHpkCpB7Yn",
                    price_id_hongkong: "price_1QBf00RxkbyUyR0ob3VJpHQu",
                    price_id_paypro: "100885",
                    price_id_lemon: "568077",
                    price_id_year: "price_1PnkhvFoj9PM7seHikPtBud5",
                    price_id_year_hongkong: "price_1QBf00RxkbyUyR0okD00vKvv",
                    price_id_lemon_year: "568081",
                    price_id_paypro_year: "101029",
                    price_id_one_time: "603580",
                    plan: "pro",
                    plan_year: "pro_year",
                    credits: 800,
                    price_no_sub: 24.9,
                    price_id_paypro_no_sub: "111592"
                }, {
                    support_one_time: !0,
                    name: "Basic",
                    id: "tier-hobby",
                    description: "Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.",
                    features: ["".concat(400, " credits per month"), "High quality Flux AI images", "All features are available for use.", "Private Generation", "Manage & delete your generated content", "Commercial License"],
                    greenFeatures: ["Fast Mode: Priority access, No WaterMark", "Fast Mode: cost only 1 credit per use"],
                    oneTimeFeatures: ["".concat(400, " credits for one month"), "High quality Flux AI images", "All features are available for use.", "Private Generation", "Manage & delete your generated content", "Commercial License"],
                    default: !1,
                    best: !1,
                    price: 16.9,
                    price_id: "price_1PnfLSFoj9PM7seHVsYDkqU8",
                    price_id_hongkong: "price_1QBf00RxkbyUyR0oSqlB0hqk",
                    price_id_lemon: "568076",
                    price_id_paypro: "100884",
                    price_year: 10.9,
                    price_id_year: "price_1PnkiKFoj9PM7seHppjJC0tE",
                    price_id_year_hongkong: "price_1QBf00RxkbyUyR0oCbvrGgWl",
                    price_id_lemon_year: "568080",
                    price_id_paypro_year: "101028",
                    price_id_one_time: "568075",
                    plan: "basic",
                    plan_year: "basic_year",
                    credits: 400,
                    price_no_sub: 18.9,
                    price_id_paypro_no_sub: "111591"
                }, {
                    support_one_time: !0,
                    name: "Max",
                    id: "tier-max",
                    description: "Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.",
                    features: ["".concat(1500, " credits per month"), "High quality ".concat(i, " images"), "All features are available for use.", "Private Generation", "Manage & delete your generated content", "Commercial License"],
                    greenFeatures: ["Fast Mode: Priority access, No WaterMark", "Fast Mode cost only 1 credit per use"],
                    oneTimeFeatures: ["".concat(1500, " credits for one month"), "High quality ".concat(i, " images"), "All features are available for use.", "Private Generation", "Manage & delete your generated content", "Commercial License"],
                    default: !0,
                    best: !1,
                    price: 26.9,
                    price_id: "price_1PnfM7Foj9PM7seHZ7S4nKbF",
                    price_id_hongkong: "price_1QBf01RxkbyUyR0orN4Zwmez",
                    price_id_lemon: "568078",
                    price_id_paypro: "100887",
                    price_year: 16.9,
                    price_id_year: "price_1PnkisFoj9PM7seHOaw5F9xr",
                    price_id_year_hongkong: "price_1QCKb8RxkbyUyR0oL4xc5GCc",
                    price_id_lemon_year: "568082",
                    price_id_paypro_year: "101030",
                    price_id_one_time: "603581",
                    plan: "max",
                    plan_year: "max_year",
                    credits: 1500,
                    price_no_sub: 28.9,
                    price_id_paypro_no_sub: "111590"
                }, {
                    support_one_time: !0,
                    name: "Pro Max",
                    id: "tier-pro-max",
                    description: "Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.",
                    features: ["".concat(5e3, " credits per month"), "High quality ".concat(i, " images"), "All features are available for use.", "Private Generation", "Manage & delete your generated content", "Commercial License"],
                    greenFeatures: ["Fast Mode: Priority access, No WaterMark", "Fast Mode cost only 1 credit per use"],
                    oneTimeFeatures: ["".concat(5e3, " credits for one month"), "High quality ".concat(i, " images"), "All features are available for use.", "Private Generation", "Manage & delete your generated content", "Commercial License"],
                    default: !1,
                    best: !0,
                    price: 42.9,
                    price_id: "price_1Q8n9YFoj9PM7seH9k6Q5prI",
                    price_id_hongkong: "price_1QBf00RxkbyUyR0o7YUiOSJp",
                    price_id_paypro: "100888",
                    price_year: 25.9,
                    price_id_year: "price_1Q8nAmFoj9PM7seHxcqlRhvn",
                    price_id_year_hongkong: "price_1QCKc5RxkbyUyR0oX3rNfJYq",
                    price_id_lemon: "568079",
                    price_id_lemon_year: "568083",
                    price_id_paypro_year: "101031",
                    price_id_one_time: "603582",
                    plan: "pro_max",
                    plan_year: "pro_max_year",
                    credits: 5e3,
                    price_no_sub: 44.9,
                    price_id_paypro_no_sub: "111593"
                }, {
                    support_one_time: !0,
                    name: "Pro Max Ultra",
                    id: "tier-pro-max-ultra",
                    features: ["".concat(5e4, " credits per month"), "High quality ".concat(i, " images"), "All features are available for use.", "Private Generation", "Manage & delete your generated content", "Commercial License"],
                    default: !1,
                    best: !0,
                    price: 199,
                    price_id_paypro: "105647",
                    price_id_lemon: "653989",
                    price_year: 139,
                    price_id_lemon_year: "653990",
                    price_id_paypro_year: "105648",
                    plan: "pro_max_ultra",
                    plan_year: "pro_max_ultra_year",
                    credits: 5e4,
                    price_no_sub: 219,
                    price_id_paypro_no_sub: "105653",
                    oneTimeFeatures: ["".concat(5e4, " credits for one month"), "High quality ".concat(i, " images"), "Priority access", "All features are available for use.", "Private Generation", "Manage & delete your generated content", "Commercial License"],
                    price_id_one_time: "673017",
                    price_id: r.env.NEXT_PUBLIC_STRIPE_PLAN_PRO_MAX_ULTRA_SUB
                }]
        },
        32732: function(e, t, a) {
            "use strict";
            a.d(t, {
                O6: function() {
                    return i
                },
                _u: function() {
                    return s
                },
                ig: function() {
                    return r
                },
                oO: function() {
                    return n
                }
            });
            let r = "stripe1",
                i = "stripe2",
                s = "lemon1",
                n = "paypro"
        },
        38896: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return s
                }
            });
            var r = a(57437),
                i = a(30705);

            function s(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsx)(i.ZP, {
                    theme: {
                        token: {
                            colorPrimary: "#3339dc94"
                        }
                    },
                    children: t
                })
            }
            a(2265)
        },
        96804: function(e, t, a) {
            "use strict";
            a.d(t, {
                HeroUIProviderCustom: function() {
                    return s
                }
            });
            var r = a(57437),
                i = a(7863);

            function s(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsx)(i.p, {
                    children: t
                })
            }
        },
        72518: function(e, t, a) {
            "use strict";
            a.d(t, {
                LoginModalProvider: function() {
                    return n
                },
                N: function() {
                    return o
                }
            });
            var r = a(57437),
                i = a(2265);
            let s = (0, i.createContext)(void 0),
                n = e => {
                    let {
                        children: t
                    } = e, [a, n] = (0, i.useState)(!1);
                    return (0, r.jsx)(s.Provider, {
                        value: {
                            isModalOpen: a,
                            setIsModalOpen: n
                        },
                        children: t
                    })
                },
                o = () => {
                    let e = (0, i.useContext)(s);
                    if (void 0 === e) throw Error("useLoginModal must be used within a LoginModalProvider");
                    return e
                }
        },
        55221: function(e, t, a) {
            "use strict";
            a.d(t, {
                rU: function() {
                    return s
                },
                jD: function() {
                    return o
                },
                tv: function() {
                    return l
                }
            });
            var r = a(49198);
            let i = (0, a(35426).Z)({
                    locales: ["en", "de", "es", "fr", "ja", "ko", "pt", "ru", "uk", "vi", "it", "kk"],
                    defaultLocale: "en",
                    localePrefix: "as-needed",
                    localeDetection: !1,
                    alternateLinks: !0
                }),
                {
                    Link: s,
                    redirect: n,
                    usePathname: o,
                    useRouter: l,
                    getPathname: c
                } = (0, r.Z)(i)
        },
        93448: function(e, t, a) {
            "use strict";
            a.d(t, {
                Cv: function() {
                    return w
                },
                bA: function() {
                    return x
                },
                cn: function() {
                    return f
                },
                hv: function() {
                    return v
                },
                lY: function() {
                    return b
                },
                oo: function() {
                    return j
                },
                vQ: function() {
                    return p
                }
            });
            var r = a(61994),
                i = a(53335),
                s = a(66629),
                n = a(46175),
                o = a(14438),
                l = a(71096),
                c = a.n(l),
                d = a(16206),
                m = a.n(d),
                u = a(77360),
                h = a.n(u);

            function f() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return (0, i.m6)((0, r.W)(t))
            }
            async function p(e) {
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

            function x() {
                return c()().toDate()
            }
            c().extend(m()), c().extend(h()), (0, s.kP)("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 10);
            let g = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                y = ["15889666941@163.com", "liangjiongxin@gmail.com", "enqueueit@gmail.com", "audimail@163.com", "852234453@qq.com", "jarek@voix.com.au"];

            function b(e) {
                let t = e.slice(-1);
                return console.log("lastChar", t), parseInt(t, 36) % 10 + 1
            }

            function w(e, t) {
                if (y.includes(t)) return "paypro";
                let a = b(e);
                return g.includes(a) ? "new" : "old"
            }
            let v = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1024;
                return new Promise(a => {
                    let r = new Image,
                        i = window.URL || window.webkitURL,
                        s = i.createObjectURL(e);
                    r.onload = function() {
                        let n = r.width,
                            o = r.height;
                        n > o && n > t ? (o = Math.round(t * o / n), n = t) : o > t && (n = Math.round(t * n / o), o = t);
                        let l = document.createElement("canvas");
                        l.width = n, l.height = o;
                        let c = l.getContext("2d");
                        null == c || c.drawImage(r, 0, 0, n, o), l.toBlob(t => {
                            i.revokeObjectURL(s), t ? a(new File([t], e.name, {
                                type: "image/jpeg",
                                lastModified: Date.now()
                            })) : a(e)
                        }, "image/jpeg", .8)
                    }, r.src = s
                })
            };
            class j extends Error {
                constructor(e, t, a) {
                    super(t), this.status = e, this.data = a, this.name = "HttpError"
                }
            }
        },
        4142: function(e, t, a) {
            "use strict";
            a.d(t, {
                g: function() {
                    return s
                }
            });
            var r = a(59625),
                i = a(11614);
            let s = (0, r.Ue)(e => ({
                source: null,
                setSource: t => {
                    (0, i.setCookie)("user_source", t, {
                        maxAge: 2592e3
                    }), e({
                        source: t
                    })
                },
                initializeSource: () => {
                    let t = (0, i.getCookie)("user_source");
                    t && e({
                        source: t
                    })
                }
            }))
        }
    },
    function(e) {
        e.O(0, [45953, 43665, 95501, 58598, 23566, 86545, 85323, 87770, 72972, 58309, 88085, 51502, 77456, 53774, 89249, 66830, 26879, 88003, 25606, 14718, 27870, 9952, 84823, 56092, 71576, 74610, 92971, 52117, 1744], function() {
            return e(e.s = 34752)
        }), _N_E = e.O()
    }
]);