(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [14718], {
        13091: function(e, n, t) {
            "use strict";
            t.d(n, {
                ClientClerkProvider: function() {
                    return R
                }
            });
            var r = t(87770);
            t(84301);
            var i = t(2265),
                u = (0, i.createContext)(null);
            (0, i.createContext)(null);
            var o = t(99376),
                a = t(51393),
                l = t(71131),
                s = t(16441),
                c = t(80128);
            t(83079);
            var d = (0, t(12119).$)("03914cbf8f95f0367bb0cd33a81d8d5a566bed9d"),
                f = t(62434);
            let _ = e => {
                    var n;
                    return null != window.__clerk_internal_navigations || (window.__clerk_internal_navigations = {}), null != (n = window.__clerk_internal_navigations)[e] || (n[e] = {}), window.__clerk_internal_navigations[e]
                },
                v = e => {
                    let {
                        windowNav: n,
                        routerNav: t,
                        name: r
                    } = e, u = (0, o.usePathname)(), [a, l] = (0, i.useTransition)();
                    n && (_(r).fun = (e, i) => new Promise(u => {
                        var o, a;
                        null != (o = _(r)).promisesBuffer || (o.promisesBuffer = []), null == (a = _(r).promisesBuffer) || a.push(u), l(() => {
                            var r, u, o;
                            (null == (r = null == i ? void 0 : i.__internal_metadata) ? void 0 : r.navigationType) === "internal" ? n((null != (o = null == (u = window.next) ? void 0 : u.version) ? o : "") < "14.1.0" ? history.state : null, "", e): t((0, f.m)(e))
                        })
                    }));
                    let s = () => {
                        var e;
                        null == (e = _(r).promisesBuffer) || e.forEach(e => e()), _(r).promisesBuffer = []
                    };
                    return (0, i.useEffect)(() => (s(), s), []), (0, i.useEffect)(() => {
                        a || s()
                    }, [u, a]), (0, i.useCallback)(e => _(r).fun(e), [])
                },
                E = () => {
                    let e = (0, o.useRouter)();
                    return v({
                        windowNav: "undefined" != typeof window ? window.history.pushState.bind(window.history) : void 0,
                        routerNav: e.push.bind(e),
                        name: "push"
                    })
                },
                p = () => {
                    let e = (0, o.useRouter)();
                    return v({
                        windowNav: "undefined" != typeof window ? window.history.replaceState.bind(window.history) : void 0,
                        routerNav: e.replace.bind(e),
                        name: "replace"
                    })
                },
                h = () => {
                    let e = (0, o.useRouter)(),
                        n = (0, o.usePathname)(),
                        t = "undefined" == typeof window ? new URLSearchParams : (0, o.useSearchParams)(),
                        r = "undefined" != typeof window && window.next && window.next.version >= "14.1.0";
                    return {
                        mode: "path",
                        name: "NextRouter",
                        push: n => e.push(n),
                        replace: n => r ? window.history.replaceState(null, "", n) : e.replace(n),
                        shallowPush(n) {
                            r ? window.history.pushState(null, "", n) : e.push(n, {})
                        },
                        pathname: () => n,
                        searchParams: () => t
                    }
                },
                R = e => {
                    let {
                        __unstable_invokeMiddlewareOnAuthStateChange: n = !0,
                        children: t
                    } = e, f = (0, o.useRouter)(), _ = h(), v = E(), R = p(), [m, L] = (0, i.useTransition)();
                    (0, i.useEffect)(() => {
                        var e;
                        m || null == (e = window.__clerk_internal_invalidateCachePromise) || e.call(window)
                    }, [m]), (0, a.G)(() => {
                        window.__unstable__onBeforeSetActive = () => new Promise(e => {
                            window.__clerk_internal_invalidateCachePromise = e, L(() => {
                                var e;
                                (null == (e = window.next) ? void 0 : e.version) && "string" == typeof window.next.version && window.next.version.startsWith("13") ? f.refresh() : d()
                            })
                        }), window.__unstable__onAfterSetActive = () => {
                            if (n) return f.refresh()
                        }
                    }, []);
                    let g = (0, c.V)({ ...e,
                        routerPush: v,
                        routerReplace: R
                    });
                    return i.createElement(l.f, {
                        options: g
                    }, i.createElement(r.El, { ...g
                    }, i.createElement(s.z, {
                        router: "app"
                    }), i.createElement(u.Provider, {
                        value: _
                    }, t)))
                }
        },
        71131: function(e, n, t) {
            "use strict";
            t.d(n, {
                f: function() {
                    return o
                },
                k: function() {
                    return u
                }
            });
            var r = t(2265);
            let i = r.createContext(void 0);
            i.displayName = "ClerkNextOptionsCtx";
            let u = () => r.useContext(i).value,
                o = e => {
                    let {
                        children: n,
                        options: t
                    } = e;
                    return r.createElement(i.Provider, {
                        value: {
                            value: t
                        }
                    }, n)
                }
        },
        67679: function(e, n, t) {
            "use strict";
            t.d(n, {
                AuthenticateWithRedirectCallback: function() {
                    return r.vn
                },
                ClerkLoaded: function() {
                    return r.a7
                },
                ClerkLoading: function() {
                    return r.qI
                },
                RedirectToCreateOrganization: function() {
                    return r.gM
                },
                RedirectToOrganizationProfile: function() {
                    return r.yB
                },
                RedirectToSignIn: function() {
                    return r.N1
                },
                RedirectToSignUp: function() {
                    return r.C2
                },
                RedirectToUserProfile: function() {
                    return r.sO
                }
            });
            var r = t(87770);
            t(12627)
        },
        91265: function(e, n, t) {
            "use strict";
            t.d(n, {
                useAuth: function() {
                    return r.aC
                },
                useClerk: function() {
                    return r.ll
                },
                useEmailLink: function() {
                    return r.E2
                },
                useOrganization: function() {
                    return r.o8
                },
                useOrganizationList: function() {
                    return r.eW
                },
                useSession: function() {
                    return r.kP
                },
                useSessionList: function() {
                    return r.xo
                },
                useSignIn: function() {
                    return r.zq
                },
                useSignUp: function() {
                    return r.QS
                },
                useUser: function() {
                    return r.aF
                }
            });
            var r = t(87770);
            t(22605)
        },
        51393: function(e, n, t) {
            "use strict";
            t.d(n, {
                G: function() {
                    return i
                }
            });
            var r = t(2265);
            let i = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect
        },
        13841: function(e, n, t) {
            "use strict";
            t.d(n, {
                CreateOrganization: function() {
                    return _
                },
                GoogleOneTap: function() {
                    return r.Kb
                },
                OrganizationList: function() {
                    return r.Bg
                },
                OrganizationProfile: function() {
                    return v
                },
                OrganizationSwitcher: function() {
                    return r.Li
                },
                SignIn: function() {
                    return E
                },
                SignInButton: function() {
                    return r.$d
                },
                SignInWithMetamaskButton: function() {
                    return r.qu
                },
                SignOutButton: function() {
                    return r.AM
                },
                SignUp: function() {
                    return p
                },
                SignUpButton: function() {
                    return r.gX
                },
                UserButton: function() {
                    return r.l8
                },
                UserProfile: function() {
                    return f
                }
            });
            var r = t(87770),
                i = t(2265),
                u = t(12627),
                o = t(59827),
                a = t(52674);
            let l = () => ({
                    pagesRouter: (0, a.useRouter)()
                }),
                s = (e, n, t, u = !0) => {
                    let a = i.useRef(0),
                        {
                            pagesRouter: s
                        } = l(),
                        {
                            session: c,
                            isLoaded: d
                        } = (0, r.kP)();
                    (0, o.rx)() || i.useEffect(() => {
                        if (!d || t && "path" !== t || u && !c) return;
                        let r = new AbortController,
                            i = () => {
                                let t = s ? `${n}/[[...index]].tsx` : `${n}/[[...rest]]/page.tsx`;
                                throw Error(`
Clerk: The <${e}/> component is not configured correctly. The most likely reasons for this error are:

1. The "${n}" route is not a catch-all route.
It is recommended to convert this route to a catch-all route, eg: "${t}". Alternatively, you can update the <${e}/> component to use hash-based routing by setting the "routing" prop to "hash".

2. The <${e}/> component is mounted in a catch-all route, but all routes under "${n}" are protected by the middleware.
To resolve this, ensure that the middleware does not protect the catch-all route or any of its children. If you are using the "createRouteMatcher" helper, consider adding "(.*)" to the end of the route pattern, eg: "${n}(.*)". For more information, see: https://clerk.com/docs/references/nextjs/clerk-middleware#create-route-matcher
`)
                            };
                        return s ? s.pathname.match(/\[\[\.\.\..+]]/) || i() : (async () => {
                            let n;
                            if (a.current++, !(a.current > 1)) {
                                try {
                                    let t = `${window.location.origin}${window.location.pathname}/${e}_clerk_catchall_check_${Date.now()}`;
                                    n = await fetch(t, {
                                        signal: r.signal
                                    })
                                } catch (e) {}(null == n ? void 0 : n.status) === 404 && i()
                            }
                        })(), () => {
                            a.current > 1 && r.abort()
                        }
                    }, [d])
                },
                c = () => {
                    let e = i.useRef(),
                        {
                            pagesRouter: n
                        } = l();
                    if (n) return e.current || (e.current = n.pathname.replace(/\/\[\[\.\.\..*/, "")), e.current;
                    let r = t(99376).usePathname,
                        u = t(99376).useParams,
                        o = (r() || "").split("/").filter(Boolean),
                        a = Object.values(u() || {}).filter(e => Array.isArray(e)).flat(1 / 0);
                    return e.current || (e.current = `/${o.slice(0,o.length-a.length).join("/")}`), e.current
                };

            function d(e, n, t = !0) {
                let r = c(),
                    i = (0, u.EJ)(e, n, {
                        path: r
                    });
                return s(e, r, i.routing, t), i
            }
            let f = Object.assign(e => i.createElement(r.Iw, { ...d("UserProfile", e)
                }), { ...r.Iw
                }),
                _ = e => i.createElement(r.Gp, { ...d("CreateOrganization", e)
                }),
                v = Object.assign(e => i.createElement(r.A, { ...d("OrganizationProfile", e)
                }), { ...r.A
                }),
                E = e => i.createElement(r.cL, { ...d("SignIn", e, !1)
                }),
                p = e => i.createElement(r.Mo, { ...d("SignUp", e, !1)
                })
        },
        16441: function(e, n, t) {
            "use strict";
            t.d(n, {
                z: function() {
                    return l
                }
            });
            var r = t(87770),
                i = t(12627),
                u = t(48667),
                o = t(2265),
                a = t(71131);

            function l(e) {
                let {
                    publishableKey: n,
                    clerkJSUrl: t,
                    clerkJSVersion: l,
                    clerkJSVariant: s,
                    nonce: c
                } = (0, a.k)(), {
                    domain: d,
                    proxyUrl: f
                } = (0, r.ll)(), _ = {
                    domain: d,
                    proxyUrl: f,
                    publishableKey: n,
                    clerkJSUrl: t,
                    clerkJSVersion: l,
                    clerkJSVariant: s,
                    nonce: c
                }, v = (0, i.wE)(_), E = "app" === e.router ? "script" : u.default;
                return o.createElement(E, {
                    src: v,
                    "data-clerk-js-script": !0,
                    async: !0,
                    defer: "pages" !== e.router && void 0,
                    crossOrigin: "anonymous",
                    strategy: "pages" === e.router ? "beforeInteractive" : void 0,
                    ...(0, i.iv)(_)
                })
            }
        },
        80128: function(e, n, t) {
            "use strict";
            t.d(n, {
                V: function() {
                    return s
                }
            });
            var r = t(70040);
            t(84301);
            var i = t(77126),
                u = t(79775),
                o = t(25566);
            o.env.NEXT_PUBLIC_CLERK_JS_VERSION, o.env.NEXT_PUBLIC_CLERK_JS_URL, o.env.CLERK_API_VERSION, o.env.CLERK_SECRET_KEY, o.env.CLERK_ENCRYPTION_KEY, o.env.CLERK_API_URL || (e => {
                var n;
                let t = null == (n = (0, i.nQ)(e)) ? void 0 : n.frontendApi;
                return (null == t ? void 0 : t.startsWith("clerk.")) && u.mv.some(e => null == t ? void 0 : t.endsWith(e)) ? u.Xv : u.iF.some(e => null == t ? void 0 : t.endsWith(e)) ? u.Fo : u.cM.some(e => null == t ? void 0 : t.endsWith(e)) ? u.Iq : u.Xv
            })("pk_live_Y2xlcmsuZmx1eDEuYWkk"), o.env.NEXT_PUBLIC_CLERK_DOMAIN, o.env.NEXT_PUBLIC_CLERK_PROXY_URL, (0, r.fQ)(o.env.NEXT_PUBLIC_CLERK_IS_SATELLITE);
            let a = {
                name: "@clerk/nextjs",
                version: "5.7.5",
                environment: "production"
            };
            (0, r.fQ)(o.env.NEXT_PUBLIC_CLERK_TELEMETRY_DISABLED), (0, r.fQ)(o.env.NEXT_PUBLIC_CLERK_TELEMETRY_DEBUG);
            var l = t(25566);
            let s = e => {
                var n;
                return { ...e,
                    publishableKey: e.publishableKey || "pk_live_Y2xlcmsuZmx1eDEuYWkk",
                    clerkJSUrl: e.clerkJSUrl || l.env.NEXT_PUBLIC_CLERK_JS_URL,
                    clerkJSVersion: e.clerkJSVersion || l.env.NEXT_PUBLIC_CLERK_JS_VERSION,
                    proxyUrl: e.proxyUrl || l.env.NEXT_PUBLIC_CLERK_PROXY_URL || "",
                    domain: e.domain || l.env.NEXT_PUBLIC_CLERK_DOMAIN || "",
                    isSatellite: e.isSatellite || (0, r.fQ)(l.env.NEXT_PUBLIC_CLERK_IS_SATELLITE),
                    signInUrl: e.signInUrl || "/sign-in",
                    signUpUrl: e.signUpUrl || "/sign-up",
                    signInForceRedirectUrl: e.signInForceRedirectUrl || l.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL || "",
                    signUpForceRedirectUrl: e.signUpForceRedirectUrl || l.env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL || "",
                    signInFallbackRedirectUrl: e.signInFallbackRedirectUrl || l.env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL || "",
                    signUpFallbackRedirectUrl: e.signUpFallbackRedirectUrl || l.env.NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL || "",
                    afterSignInUrl: e.afterSignInUrl || l.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL || "",
                    afterSignUpUrl: e.afterSignUpUrl || l.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL || "",
                    telemetry: null != (n = e.telemetry) ? n : {
                        disabled: (0, r.fQ)(l.env.NEXT_PUBLIC_CLERK_TELEMETRY_DISABLED),
                        debug: (0, r.fQ)(l.env.NEXT_PUBLIC_CLERK_TELEMETRY_DEBUG)
                    },
                    sdkMetadata: a
                }
            }
        },
        62434: function(e, n, t) {
            "use strict";

            function r(e) {
                return e
            }
            t.d(n, {
                m: function() {
                    return r
                }
            })
        },
        52674: function(e, n, t) {
            e.exports = t(33850)
        },
        99376: function(e, n, t) {
            "use strict";
            var r = t(35475);
            t.o(r, "permanentRedirect") && t.d(n, {
                permanentRedirect: function() {
                    return r.permanentRedirect
                }
            }), t.o(r, "redirect") && t.d(n, {
                redirect: function() {
                    return r.redirect
                }
            }), t.o(r, "useParams") && t.d(n, {
                useParams: function() {
                    return r.useParams
                }
            }), t.o(r, "usePathname") && t.d(n, {
                usePathname: function() {
                    return r.usePathname
                }
            }), t.o(r, "useRouter") && t.d(n, {
                useRouter: function() {
                    return r.useRouter
                }
            }), t.o(r, "useSearchParams") && t.d(n, {
                useSearchParams: function() {
                    return r.useSearchParams
                }
            }), t.o(r, "useSelectedLayoutSegment") && t.d(n, {
                useSelectedLayoutSegment: function() {
                    return r.useSelectedLayoutSegment
                }
            }), t.o(r, "useServerInsertedHTML") && t.d(n, {
                useServerInsertedHTML: function() {
                    return r.useServerInsertedHTML
                }
            })
        },
        48667: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return i.a
                }
            });
            var r = t(88003),
                i = t.n(r),
                u = {};
            for (var o in r) "default" !== o && (u[o] = (function(e) {
                return r[e]
            }).bind(0, o));
            t.d(n, u)
        },
        12119: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "$", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = t(83079);

            function i(e) {
                let {
                    createServerReference: n
                } = t(6671);
                return n(e, r.callServer)
            }
        },
        33850: function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "useRouter", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let r = t(2265),
                i = t(25523);

            function u() {
                return (0, r.useContext)(i.RouterContext)
            }("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
                value: !0
            }), Object.assign(n.default, n), e.exports = n.default)
        },
        12627: function(e, n, t) {
            "use strict";
            t.d(n, {
                Aw: function() {
                    return i.Aw
                },
                EJ: function() {
                    return u
                },
                JM: function() {
                    return r.JM
                },
                iv: function() {
                    return i.iv
                },
                wE: function() {
                    return i.wE
                }
            });
            var r = t(76548),
                i = t(23054);

            function u(e, n, t) {
                let i = n.path || (null == t ? void 0 : t.path);
                return "path" === (n.routing || (null == t ? void 0 : t.routing) || "path") ? i ? { ...t,
                    ...n,
                    routing: "path"
                } : r.RM.throw((0, r.Gv)(e)) : n.path ? r.RM.throw((0, r.RE)(e)) : { ...t,
                    ...n,
                    path: void 0
                }
            }
        }
    }
]);