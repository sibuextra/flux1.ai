(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [87770], {
        25566: function(e) {
            var t, n, r, i = e.exports = {};

            function o() {
                throw Error("setTimeout has not been defined")
            }

            function s() {
                throw Error("clearTimeout has not been defined")
            }

            function l(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                try {
                    return t(e, 0)
                } catch (n) {
                    try {
                        return t.call(null, e, 0)
                    } catch (n) {
                        return t.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    t = "function" == typeof setTimeout ? setTimeout : o
                } catch (e) {
                    t = o
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : s
                } catch (e) {
                    n = s
                }
            }();
            var a = [],
                u = !1,
                c = -1;

            function d() {
                u && r && (u = !1, r.length ? a = r.concat(a) : c = -1, a.length && h())
            }

            function h() {
                if (!u) {
                    var e = l(d);
                    u = !0;
                    for (var t = a.length; t;) {
                        for (r = a, a = []; ++c < t;) r && r[c].run();
                        c = -1, t = a.length
                    }
                    r = null, u = !1,
                        function(e) {
                            if (n === clearTimeout) return clearTimeout(e);
                            if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                            try {
                                n(e)
                            } catch (t) {
                                try {
                                    return n.call(null, e)
                                } catch (t) {
                                    return n.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function p(e, t) {
                this.fun = e, this.array = t
            }

            function f() {}
            i.nextTick = function(e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                a.push(new p(e, t)), 1 !== a.length || u || l(h)
            }, p.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = f, i.addListener = f, i.once = f, i.off = f, i.removeListener = f, i.removeAllListeners = f, i.emit = f, i.prependListener = f, i.prependOnceListener = f, i.listeners = function(e) {
                return []
            }, i.binding = function(e) {
                throw Error("process.binding is not supported")
            }, i.cwd = function() {
                return "/"
            }, i.chdir = function(e) {
                throw Error("process.chdir is not supported")
            }, i.umask = function() {
                return 0
            }
        },
        76548: function(e, t, n) {
            "use strict";
            n.d(t, {
                Vo: function() {
                    return w
                },
                vn: function() {
                    return ed
                },
                a7: function() {
                    return er
                },
                qI: function() {
                    return ei
                },
                iz: function() {
                    return U
                },
                Cv: function() {
                    return eo
                },
                gM: function() {
                    return ec
                },
                yB: function() {
                    return eu
                },
                N1: function() {
                    return es
                },
                C2: function() {
                    return el
                },
                sO: function() {
                    return ea
                },
                CH: function() {
                    return et
                },
                tj: function() {
                    return en
                },
                Gl: function() {
                    return T
                },
                tL: function() {
                    return B
                },
                oG: function() {
                    return x
                },
                E7: function() {
                    return A
                },
                RM: function() {
                    return P
                },
                RE: function() {
                    return W
                },
                tF: function() {
                    return _
                },
                KQ: function() {
                    return O
                },
                Gv: function() {
                    return R
                },
                Rl: function() {
                    return L
                },
                ej: function() {
                    return I
                },
                JM: function() {
                    return S
                },
                qq: function() {
                    return z
                },
                aC: function() {
                    return H
                },
                cL: function() {
                    return b.cL
                },
                E2: function() {
                    return Q
                },
                o8: function() {
                    return b.o8
                },
                eW: function() {
                    return b.eW
                },
                kP: function() {
                    return b.kP
                },
                xo: function() {
                    return b.xo
                },
                zq: function() {
                    return X
                },
                QS: function() {
                    return Z
                },
                aF: function() {
                    return b.aF
                },
                Kr: function() {
                    return N
                },
                B$: function() {
                    return D
                },
                HZ: function() {
                    return $
                },
                Lu: function() {
                    return q
                },
                X: function() {
                    return F
                },
                qH: function() {
                    return J
                },
                Mp: function() {
                    return E
                },
                ge: function() {
                    return M
                },
                r0: function() {
                    return ee
                }
            });
            var r, i, o, s, l = n(22605),
                a = (n(84301), {
                    veryStrict: {
                        afterMinutes: 10,
                        level: "multiFactor"
                    },
                    strict: {
                        afterMinutes: 10,
                        level: "secondFactor"
                    },
                    moderate: {
                        afterMinutes: 60,
                        level: "secondFactor"
                    },
                    lax: {
                        afterMinutes: 1440,
                        level: "secondFactor"
                    }
                }),
                u = new Set(["firstFactor", "secondFactor", "multiFactor"]),
                c = new Set(["veryStrict", "strict", "moderate", "lax"]),
                d = e => "number" == typeof e && e > 0,
                h = e => u.has(e),
                p = e => c.has(e),
                f = (e, t) => {
                    let {
                        orgId: n,
                        orgRole: r,
                        orgPermissions: i
                    } = t;
                    return (e.role || e.permission) && n && r && i ? e.permission ? i.includes(e.permission) : e.role ? r === e.role : null : null
                },
                g = e => !!("string" == typeof e && p(e) || "object" == typeof e && h(e.level) && d(e.afterMinutes)) && (e => "string" == typeof e ? a[e] : e).bind(null, e),
                m = (e, {
                    __experimental_factorVerificationAge: t
                }) => {
                    if (!e.__experimental_reverification || !t) return null;
                    let n = g(e.__experimental_reverification);
                    if (!n) return null;
                    let {
                        level: r,
                        afterMinutes: i
                    } = n(), [o, s] = t, l = -1 !== o ? i > o : null, a = -1 !== s ? i > s : null;
                    switch (r) {
                        case "firstFactor":
                            return l;
                        case "secondFactor":
                            return -1 !== s ? a : l;
                        case "multiFactor":
                            return -1 === s ? l : l && a
                    }
                },
                v = e => t => {
                    if (!e.userId) return !1;
                    let n = f(t, e),
                        r = m(t, e);
                    return [n, r].some(e => null === e) ? [n, r].some(e => !0 === e) : [n, r].every(e => !0 === e)
                },
                k = n(2265),
                b = n(99206),
                y = n(10684);
            n(70040), n(25566), new WeakMap, new WeakMap, new WeakSet, new WeakMap, new WeakMap, new WeakMap, new WeakMap, new WeakMap, new WeakSet;
            var P = (0, l.t5)({
                packageName: "@clerk/clerk-react"
            });

            function S(e) {
                P.setMessages(e).setPackageName(e)
            }
            var [w, C] = (0, b.uH)("AuthContext"), U = b.b5, j = b.rI, O = "You've added multiple <ClerkProvider> components in your React component tree. Wrap your components in a single <ClerkProvider>.", _ = e => `You've passed multiple children components to <${e}/>. You can only pass a single child component or text.`, z = "Unsupported usage of isSatellite, domain or proxyUrl. The usage of isSatellite, domain or proxyUrl as function is not supported in non-browser environments.", M = "<UserProfile.Page /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.", E = "<UserProfile.Link /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.", I = "<OrganizationProfile.Page /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.", L = "<OrganizationProfile.Link /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.", A = e => `<${e} /> can only accept <${e}.Page /> and <${e}.Link /> as its children. Any other provided component will be ignored.`, x = e => `Missing props. <${e}.Page /> component requires the following props: url, label, labelIcon, alongside with children to be rendered inside the page.`, T = e => `Missing props. <${e}.Link /> component requires the following props: url, label and labelIcon.`, R = e => `The <${e}/> component uses path-based routing by default unless a different routing strategy is provided using the \`routing\` prop. When path-based routing is used, you need to provide the path where the component is mounted on by using the \`path\` prop. Example: <${e} path={'/my-path'} />`, W = e => `The \`path\` prop will only be respected when the Clerk component uses path-based routing. To resolve this error, pass \`routing='path'\` to the <${e}/> component, or drop the \`path\` prop to switch to hash-based routing. For more details please refer to our docs: https://clerk.com/docs`, N = "<UserButton /> can only accept <UserButton.UserProfilePage />, <UserButton.UserProfileLink /> and <UserButton.MenuItems /> as its children. Any other provided component will be ignored.", B = "<UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored.", F = "<UserButton.MenuItems /> component needs to be a direct child of `<UserButton />`.", D = "<UserButton.Action /> component needs to be a direct child of `<UserButton.MenuItems />`.", J = "<UserButton.Link /> component needs to be a direct child of `<UserButton.MenuItems />`.", $ = "Missing props. <UserButton.Link /> component requires the following props: href, label and labelIcon.", q = "Missing props. <UserButton.Action /> component requires the following props: label.", G = e => {
                (0, b.Rm)(() => {
                    P.throwMissingClerkProviderError({
                        source: e
                    })
                })
            }, K = e => new Promise(t => {
                e.loaded && t(), e.addOnLoaded(t)
            }), V = e => async t => (await K(e), e.session) ? e.session.getToken(t) : null, Y = e => async (...t) => (await K(e), e.signOut(...t)), H = () => {
                G("useAuth");
                let {
                    sessionId: e,
                    userId: t,
                    actor: n,
                    orgId: r,
                    orgRole: i,
                    orgSlug: o,
                    orgPermissions: s,
                    __experimental_factorVerificationAge: l
                } = C(), a = j(), u = (0, k.useCallback)(V(a), [a]), c = (0, k.useCallback)(Y(a), [a]), d = (0, k.useCallback)(e => v({
                    userId: t,
                    orgId: r,
                    orgRole: i,
                    orgPermissions: s,
                    __experimental_factorVerificationAge: l
                })(e), [t, l, r, i, s]);
                return void 0 === e && void 0 === t ? {
                    isLoaded: !1,
                    isSignedIn: void 0,
                    sessionId: e,
                    userId: t,
                    actor: void 0,
                    orgId: void 0,
                    orgRole: void 0,
                    orgSlug: void 0,
                    has: void 0,
                    signOut: c,
                    getToken: u
                } : null === e && null === t ? {
                    isLoaded: !0,
                    isSignedIn: !1,
                    sessionId: e,
                    userId: t,
                    actor: null,
                    orgId: null,
                    orgRole: null,
                    orgSlug: null,
                    has: () => !1,
                    signOut: c,
                    getToken: u
                } : e && t && r && i ? {
                    isLoaded: !0,
                    isSignedIn: !0,
                    sessionId: e,
                    userId: t,
                    actor: n || null,
                    orgId: r,
                    orgRole: i,
                    orgSlug: o || null,
                    has: d,
                    signOut: c,
                    getToken: u
                } : e && t && !r ? {
                    isLoaded: !0,
                    isSignedIn: !0,
                    sessionId: e,
                    userId: t,
                    actor: n || null,
                    orgId: null,
                    orgRole: null,
                    orgSlug: null,
                    has: d,
                    signOut: c,
                    getToken: u
                } : P.throw("Invalid state. Feel free to submit a bug or reach out to support here: https://clerk.com/support")
            };

            function Q(e) {
                let {
                    startEmailLinkFlow: t,
                    cancelEmailLinkFlow: n
                } = k.useMemo(() => e.createEmailLinkFlow(), [e]);
                return k.useEffect(() => n, []), {
                    startEmailLinkFlow: t,
                    cancelEmailLinkFlow: n
                }
            }
            var X = () => {
                    var e;
                    G("useSignIn");
                    let t = j(),
                        n = (0, b.sX)();
                    return (null == (e = t.telemetry) || e.record((0, y.J)("useSignIn")), n) ? {
                        isLoaded: !0,
                        signIn: n.signIn,
                        setActive: t.setActive
                    } : {
                        isLoaded: !1,
                        signIn: void 0,
                        setActive: void 0
                    }
                },
                Z = () => {
                    var e;
                    G("useSignUp");
                    let t = j(),
                        n = (0, b.sX)();
                    return (null == (e = t.telemetry) || e.record((0, y.J)("useSignUp")), n) ? {
                        isLoaded: !0,
                        signUp: n.signUp,
                        setActive: t.setActive
                    } : {
                        isLoaded: !1,
                        signUp: void 0,
                        setActive: void 0
                    }
                },
                ee = (e, t) => {
                    t = t || e.displayName || e.name || "Component", e.displayName = t;
                    let n = n => {
                        G(t || "withClerk");
                        let r = j();
                        return r.loaded ? k.createElement(e, { ...n,
                            clerk: r
                        }) : null
                    };
                    return n.displayName = `withClerk(${t})`, n
                },
                et = ({
                    children: e
                }) => {
                    G("SignedIn");
                    let {
                        userId: t
                    } = C();
                    return t ? k.createElement(k.Fragment, null, e) : null
                },
                en = ({
                    children: e
                }) => {
                    G("SignedOut");
                    let {
                        userId: t
                    } = C();
                    return null === t ? k.createElement(k.Fragment, null, e) : null
                },
                er = ({
                    children: e
                }) => (G("ClerkLoaded"), j().loaded) ? k.createElement(k.Fragment, null, e) : null,
                ei = ({
                    children: e
                }) => (G("ClerkLoading"), j().loaded) ? null : k.createElement(k.Fragment, null, e),
                eo = ({
                    children: e,
                    fallback: t,
                    ...n
                }) => {
                    G("Protect");
                    let {
                        isLoaded: r,
                        has: i,
                        userId: o
                    } = H();
                    if (!r) return null;
                    let s = k.createElement(k.Fragment, null, null != t ? t : null),
                        l = k.createElement(k.Fragment, null, e);
                    return o ? "function" == typeof n.condition ? n.condition(i) ? l : s : n.role || n.permission ? i(n) ? l : s : l : s
                },
                es = ee(({
                    clerk: e,
                    ...t
                }) => {
                    let {
                        client: n,
                        session: r
                    } = e, i = n.activeSessions && n.activeSessions.length > 0;
                    return k.useEffect(() => {
                        null === r && i ? e.redirectToAfterSignOut() : e.redirectToSignIn(t)
                    }, []), null
                }, "RedirectToSignIn"),
                el = ee(({
                    clerk: e,
                    ...t
                }) => (k.useEffect(() => {
                    e.redirectToSignUp(t)
                }, []), null), "RedirectToSignUp"),
                ea = ee(({
                    clerk: e
                }) => (k.useEffect(() => {
                    e.redirectToUserProfile()
                }, []), null), "RedirectToUserProfile"),
                eu = ee(({
                    clerk: e
                }) => (k.useEffect(() => {
                    e.redirectToOrganizationProfile()
                }, []), null), "RedirectToOrganizationProfile"),
                ec = ee(({
                    clerk: e
                }) => (k.useEffect(() => {
                    e.redirectToCreateOrganization()
                }, []), null), "RedirectToCreateOrganization"),
                ed = ee(({
                    clerk: e,
                    ...t
                }) => (k.useEffect(() => {
                    e.handleRedirectCallback(t)
                }, []), null), "AuthenticateWithRedirectCallback")
        },
        87770: function(e, t, n) {
            "use strict";
            n.d(t, {
                vn: function() {
                    return c.vn
                },
                a7: function() {
                    return c.a7
                },
                qI: function() {
                    return c.qI
                },
                El: function() {
                    return eS
                },
                Gp: function() {
                    return es
                },
                Kb: function() {
                    return ec
                },
                Bg: function() {
                    return eu
                },
                A: function() {
                    return eo
                },
                Li: function() {
                    return ea
                },
                Cv: function() {
                    return c.Cv
                },
                gM: function() {
                    return c.gM
                },
                yB: function() {
                    return c.yB
                },
                N1: function() {
                    return c.N1
                },
                C2: function() {
                    return c.C2
                },
                sO: function() {
                    return c.sO
                },
                cL: function() {
                    return K
                },
                $d: function() {
                    return ed
                },
                qu: function() {
                    return ef
                },
                AM: function() {
                    return ep
                },
                Mo: function() {
                    return V
                },
                gX: function() {
                    return eh
                },
                CH: function() {
                    return c.CH
                },
                tj: function() {
                    return c.tj
                },
                l8: function() {
                    return en
                },
                Iw: function() {
                    return Q
                },
                aC: function() {
                    return c.aC
                },
                ll: function() {
                    return c.cL
                },
                E2: function() {
                    return c.E2
                },
                o8: function() {
                    return c.o8
                },
                eW: function() {
                    return c.eW
                },
                kP: function() {
                    return c.kP
                },
                xo: function() {
                    return c.xo
                },
                zq: function() {
                    return c.zq
                },
                QS: function() {
                    return c.QS
                },
                aF: function() {
                    return c.aF
                }
            });
            var r, i, o, s, l, a, u, c = n(76548),
                d = e => {
                    throw TypeError(e)
                },
                h = (e, t, n) => t.has(e) || d("Cannot " + n),
                p = (e, t, n) => (h(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
                f = (e, t, n) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
                g = (e, t, n, r) => (h(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
                m = (e, t, n) => (h(e, t, "access private method"), n),
                v = n(23054),
                k = n(59827),
                b = n(99206),
                y = n(2265),
                P = n(54887),
                S = n(77126);
            n(84301);
            var w = n(8996);

            function C(e, t, n) {
                return "function" == typeof e ? e(t) : void 0 !== e ? e : void 0 !== n ? n : void 0
            }
            "undefined" == typeof window || window.global || (window.global = "undefined" == typeof global ? window : global);
            var U = e => t => {
                    try {
                        return y.Children.only(e)
                    } catch (e) {
                        return c.RM.throw((0, c.tF)(t))
                    }
                },
                j = (e, t) => (e || (e = t), "string" == typeof e && (e = y.createElement("button", null, e)), e),
                O = e => (...t) => {
                    if (e && "function" == typeof e) return e(...t)
                },
                _ = new Map,
                z = e => {
                    let t = Array(e.length).fill(null),
                        [n, r] = (0, y.useState)(t);
                    return e.map((e, t) => ({
                        id: e.id,
                        mount: e => r(n => n.map((n, r) => r === t ? e : n)),
                        unmount: () => r(e => e.map((e, n) => n === t ? null : e)),
                        portal: () => y.createElement(y.Fragment, null, n[t] ? (0, P.createPortal)(e.component, n[t]) : null)
                    }))
                },
                M = (e, t) => !!e && y.isValidElement(e) && (null == e ? void 0 : e.type) === t,
                E = (e, t) => A({
                    children: e,
                    reorderItemsLabels: ["account", "security"],
                    LinkComponent: H,
                    PageComponent: Y,
                    MenuItemsComponent: Z,
                    componentName: "UserProfile"
                }, t),
                I = (e, t) => A({
                    children: e,
                    reorderItemsLabels: ["general", "members"],
                    LinkComponent: ei,
                    PageComponent: er,
                    componentName: "OrganizationProfile"
                }, t),
                L = e => {
                    let t = [],
                        n = [ei, er, Z, Y, H];
                    return y.Children.forEach(e, e => {
                        n.some(t => M(e, t)) || t.push(e)
                    }), t
                },
                A = (e, t) => {
                    let {
                        children: n,
                        LinkComponent: r,
                        PageComponent: i,
                        MenuItemsComponent: o,
                        reorderItemsLabels: s,
                        componentName: l
                    } = e, {
                        allowForAnyChildren: a = !1
                    } = t || {}, u = [];
                    y.Children.forEach(n, e => {
                        if (!M(e, i) && !M(e, r) && !M(e, o)) {
                            e && !a && (0, k.yJ)((0, c.E7)(l));
                            return
                        }
                        let {
                            props: t
                        } = e, {
                            children: n,
                            label: d,
                            url: h,
                            labelIcon: p
                        } = t;
                        if (M(e, i)) {
                            if (x(t, s)) u.push({
                                label: d
                            });
                            else if (T(t)) u.push({
                                label: d,
                                labelIcon: p,
                                children: n,
                                url: h
                            });
                            else {
                                (0, k.yJ)((0, c.oG)(l));
                                return
                            }
                        }
                        if (M(e, r)) {
                            if (R(t)) u.push({
                                label: d,
                                labelIcon: p,
                                url: h
                            });
                            else {
                                (0, k.yJ)((0, c.Gl)(l));
                                return
                            }
                        }
                    });
                    let d = [],
                        h = [],
                        p = [];
                    u.forEach((e, t) => {
                        if (T(e)) {
                            d.push({
                                component: e.children,
                                id: t
                            }), h.push({
                                component: e.labelIcon,
                                id: t
                            });
                            return
                        }
                        R(e) && p.push({
                            component: e.labelIcon,
                            id: t
                        })
                    });
                    let f = z(d),
                        g = z(h),
                        m = z(p),
                        v = [],
                        b = [];
                    return u.forEach((e, t) => {
                        if (x(e, s)) {
                            v.push({
                                label: e.label
                            });
                            return
                        }
                        if (T(e)) {
                            let {
                                portal: n,
                                mount: r,
                                unmount: i
                            } = f.find(e => e.id === t), {
                                portal: o,
                                mount: s,
                                unmount: l
                            } = g.find(e => e.id === t);
                            v.push({
                                label: e.label,
                                url: e.url,
                                mount: r,
                                unmount: i,
                                mountIcon: s,
                                unmountIcon: l
                            }), b.push(n), b.push(o);
                            return
                        }
                        if (R(e)) {
                            let {
                                portal: n,
                                mount: r,
                                unmount: i
                            } = m.find(e => e.id === t);
                            v.push({
                                label: e.label,
                                url: e.url,
                                mountIcon: r,
                                unmountIcon: i
                            }), b.push(n);
                            return
                        }
                    }), {
                        customPages: v,
                        customPagesPortals: b
                    }
                },
                x = (e, t) => {
                    let {
                        children: n,
                        label: r,
                        url: i,
                        labelIcon: o
                    } = e;
                    return !n && !i && !o && t.some(e => e === r)
                },
                T = e => {
                    let {
                        children: t,
                        label: n,
                        url: r,
                        labelIcon: i
                    } = e;
                    return !!t && !!r && !!i && !!n
                },
                R = e => {
                    let {
                        children: t,
                        label: n,
                        url: r,
                        labelIcon: i
                    } = e;
                    return !t && !!r && !!i && !!n
                },
                W = e => N({
                    children: e,
                    reorderItemsLabels: ["manageAccount", "signOut"],
                    MenuItemsComponent: Z,
                    MenuActionComponent: ee,
                    MenuLinkComponent: et,
                    UserProfileLinkComponent: H,
                    UserProfilePageComponent: Y
                }),
                N = ({
                    children: e,
                    MenuItemsComponent: t,
                    MenuActionComponent: n,
                    MenuLinkComponent: r,
                    UserProfileLinkComponent: i,
                    UserProfilePageComponent: o,
                    reorderItemsLabels: s
                }) => {
                    let l = [],
                        a = [],
                        u = [];
                    y.Children.forEach(e, e => {
                        if (!M(e, t) && !M(e, i) && !M(e, o)) {
                            e && (0, k.yJ)(c.Kr);
                            return
                        }
                        if (M(e, i) || M(e, o)) return;
                        let {
                            props: a
                        } = e;
                        y.Children.forEach(a.children, e => {
                            if (!M(e, n) && !M(e, r)) {
                                e && (0, k.yJ)(c.tL);
                                return
                            }
                            let {
                                props: t
                            } = e, {
                                label: i,
                                labelIcon: o,
                                href: a,
                                onClick: u,
                                open: d
                            } = t;
                            if (M(e, n)) {
                                if (B(t, s)) l.push({
                                    label: i
                                });
                                else if (F(t)) {
                                    let e = {
                                        label: i,
                                        labelIcon: o
                                    };
                                    if (void 0 !== u) l.push({ ...e,
                                        onClick: u
                                    });
                                    else if (void 0 !== d) l.push({ ...e,
                                        open: d.startsWith("/") ? d : `/${d}`
                                    });
                                    else {
                                        (0, k.yJ)("Custom menu item must have either onClick or open property");
                                        return
                                    }
                                } else {
                                    (0, k.yJ)(c.Lu);
                                    return
                                }
                            }
                            if (M(e, r)) {
                                if (D(t)) l.push({
                                    label: i,
                                    labelIcon: o,
                                    href: a
                                });
                                else {
                                    (0, k.yJ)(c.HZ);
                                    return
                                }
                            }
                        })
                    });
                    let d = [],
                        h = [];
                    l.forEach((e, t) => {
                        F(e) && d.push({
                            component: e.labelIcon,
                            id: t
                        }), D(e) && h.push({
                            component: e.labelIcon,
                            id: t
                        })
                    });
                    let p = z(d),
                        f = z(h);
                    return l.forEach((e, t) => {
                        if (B(e, s) && a.push({
                                label: e.label
                            }), F(e)) {
                            let {
                                portal: n,
                                mount: r,
                                unmount: i
                            } = p.find(e => e.id === t), o = {
                                label: e.label,
                                mountIcon: r,
                                unmountIcon: i
                            };
                            "onClick" in e ? o.onClick = e.onClick : "open" in e && (o.open = e.open), a.push(o), u.push(n)
                        }
                        if (D(e)) {
                            let {
                                portal: n,
                                mount: r,
                                unmount: i
                            } = f.find(e => e.id === t);
                            a.push({
                                label: e.label,
                                href: e.href,
                                mountIcon: r,
                                unmountIcon: i
                            }), u.push(n)
                        }
                    }), {
                        customMenuItems: a,
                        customMenuItemsPortals: u
                    }
                },
                B = (e, t) => {
                    let {
                        children: n,
                        label: r,
                        onClick: i,
                        labelIcon: o
                    } = e;
                    return !n && !i && !o && t.some(e => e === r)
                },
                F = e => {
                    let {
                        label: t,
                        labelIcon: n,
                        onClick: r,
                        open: i
                    } = e;
                    return !!n && !!t && ("function" == typeof r || "string" == typeof i)
                },
                D = e => {
                    let {
                        label: t,
                        href: n,
                        labelIcon: r
                    } = e;
                    return !!n && !!r && !!t
                },
                J = e => "mount" in e,
                $ = e => "open" in e,
                q = class extends y.PureComponent {
                    constructor() {
                        super(...arguments), this.portalRef = y.createRef()
                    }
                    componentDidUpdate(e) {
                        var t, n, r, i;
                        if (!J(e) || !J(this.props)) return;
                        let o = (0, k.zu)(e.props, "customPages", "customMenuItems", "children"),
                            s = (0, k.zu)(this.props.props, "customPages", "customMenuItems", "children"),
                            l = (null == (t = o.customPages) ? void 0 : t.length) !== (null == (n = s.customPages) ? void 0 : n.length),
                            a = (null == (r = o.customMenuItems) ? void 0 : r.length) !== (null == (i = s.customMenuItems) ? void 0 : i.length);
                        (!(0, b.c1)(o, s) || l || a) && this.portalRef.current && this.props.updateProps({
                            node: this.portalRef.current,
                            props: this.props.props
                        })
                    }
                    componentDidMount() {
                        this.portalRef.current && (J(this.props) && this.props.mount(this.portalRef.current, this.props.props), $(this.props) && this.props.open(this.props.props))
                    }
                    componentWillUnmount() {
                        this.portalRef.current && (J(this.props) && this.props.unmount(this.portalRef.current), $(this.props) && this.props.close())
                    }
                    render() {
                        let {
                            hideRootHtmlElement: e = !1
                        } = this.props;
                        return y.createElement(y.Fragment, null, !e && y.createElement("div", {
                            ref: this.portalRef
                        }), this.props.children)
                    }
                },
                G = e => {
                    var t, n;
                    return y.createElement(y.Fragment, null, null == (t = null == e ? void 0 : e.customPagesPortals) ? void 0 : t.map((e, t) => (0, y.createElement)(e, {
                        key: t
                    })), null == (n = null == e ? void 0 : e.customMenuItemsPortals) ? void 0 : n.map((e, t) => (0, y.createElement)(e, {
                        key: t
                    })))
                },
                K = (0, c.r0)(({
                    clerk: e,
                    ...t
                }) => y.createElement(q, {
                    mount: e.mountSignIn,
                    unmount: e.unmountSignIn,
                    updateProps: e.__unstable__updateProps,
                    props: t
                }), "SignIn"),
                V = (0, c.r0)(({
                    clerk: e,
                    ...t
                }) => y.createElement(q, {
                    mount: e.mountSignUp,
                    unmount: e.unmountSignUp,
                    updateProps: e.__unstable__updateProps,
                    props: t
                }), "SignUp");

            function Y({
                children: e
            }) {
                return (0, k.yJ)(c.ge), y.createElement(y.Fragment, null, e)
            }

            function H({
                children: e
            }) {
                return (0, k.yJ)(c.Mp), y.createElement(y.Fragment, null, e)
            }
            var Q = Object.assign((0, c.r0)(({
                    clerk: e,
                    ...t
                }) => {
                    let {
                        customPages: n,
                        customPagesPortals: r
                    } = E(t.children);
                    return y.createElement(q, {
                        mount: e.mountUserProfile,
                        unmount: e.unmountUserProfile,
                        updateProps: e.__unstable__updateProps,
                        props: { ...t,
                            customPages: n
                        }
                    }, y.createElement(G, {
                        customPagesPortals: r
                    }))
                }, "UserProfile"), {
                    Page: Y,
                    Link: H
                }),
                X = (0, y.createContext)({
                    mount: () => {},
                    unmount: () => {},
                    updateProps: () => {}
                });

            function Z({
                children: e
            }) {
                return (0, k.yJ)(c.X), y.createElement(y.Fragment, null, e)
            }

            function ee({
                children: e
            }) {
                return (0, k.yJ)(c.B$), y.createElement(y.Fragment, null, e)
            }

            function et({
                children: e
            }) {
                return (0, k.yJ)(c.qH), y.createElement(y.Fragment, null, e)
            }
            var en = Object.assign((0, c.r0)(({
                clerk: e,
                ...t
            }) => {
                let {
                    customPages: n,
                    customPagesPortals: r
                } = E(t.children, {
                    allowForAnyChildren: !!t.__experimental_asProvider
                }), i = Object.assign(t.userProfileProps || {}, {
                    customPages: n
                }), {
                    customMenuItems: o,
                    customMenuItemsPortals: s
                } = W(t.children), l = L(t.children), a = {
                    mount: e.mountUserButton,
                    unmount: e.unmountUserButton,
                    updateProps: e.__unstable__updateProps,
                    props: { ...t,
                        userProfileProps: i,
                        customMenuItems: o
                    }
                };
                return y.createElement(X.Provider, {
                    value: a
                }, y.createElement(q, { ...a,
                    hideRootHtmlElement: !!t.__experimental_asProvider
                }, t.__experimental_asProvider ? l : null, y.createElement(G, {
                    customPagesPortals: r,
                    customMenuItemsPortals: s
                })))
            }, "UserButton"), {
                UserProfilePage: Y,
                UserProfileLink: H,
                MenuItems: Z,
                Action: ee,
                Link: et,
                __experimental_Outlet: function(e) {
                    let t = (0, y.useContext)(X),
                        n = { ...t,
                            props: { ...t.props,
                                ...e
                            }
                        };
                    return y.createElement(q, { ...n
                    })
                }
            });

            function er({
                children: e
            }) {
                return (0, k.yJ)(c.ej), y.createElement(y.Fragment, null, e)
            }

            function ei({
                children: e
            }) {
                return (0, k.yJ)(c.Rl), y.createElement(y.Fragment, null, e)
            }
            var eo = Object.assign((0, c.r0)(({
                    clerk: e,
                    ...t
                }) => {
                    let {
                        customPages: n,
                        customPagesPortals: r
                    } = I(t.children);
                    return y.createElement(q, {
                        mount: e.mountOrganizationProfile,
                        unmount: e.unmountOrganizationProfile,
                        updateProps: e.__unstable__updateProps,
                        props: { ...t,
                            customPages: n
                        }
                    }, y.createElement(G, {
                        customPagesPortals: r
                    }))
                }, "OrganizationProfile"), {
                    Page: er,
                    Link: ei
                }),
                es = (0, c.r0)(({
                    clerk: e,
                    ...t
                }) => y.createElement(q, {
                    mount: e.mountCreateOrganization,
                    unmount: e.unmountCreateOrganization,
                    updateProps: e.__unstable__updateProps,
                    props: t
                }), "CreateOrganization"),
                el = (0, y.createContext)({
                    mount: () => {},
                    unmount: () => {},
                    updateProps: () => {}
                }),
                ea = Object.assign((0, c.r0)(({
                    clerk: e,
                    ...t
                }) => {
                    let {
                        customPages: n,
                        customPagesPortals: r
                    } = I(t.children, {
                        allowForAnyChildren: !!t.__experimental_asProvider
                    }), i = Object.assign(t.organizationProfileProps || {}, {
                        customPages: n
                    }), o = L(t.children), s = {
                        mount: e.mountOrganizationSwitcher,
                        unmount: e.unmountOrganizationSwitcher,
                        updateProps: e.__unstable__updateProps,
                        props: { ...t,
                            organizationProfileProps: i
                        }
                    };
                    return e.__experimental_prefetchOrganizationSwitcher(), y.createElement(el.Provider, {
                        value: s
                    }, y.createElement(q, { ...s,
                        hideRootHtmlElement: !!t.__experimental_asProvider
                    }, t.__experimental_asProvider ? o : null, y.createElement(G, {
                        customPagesPortals: r
                    })))
                }, "OrganizationSwitcher"), {
                    OrganizationProfilePage: er,
                    OrganizationProfileLink: ei,
                    __experimental_Outlet: function(e) {
                        let t = (0, y.useContext)(el),
                            n = { ...t,
                                props: { ...t.props,
                                    ...e
                                }
                            };
                        return y.createElement(q, { ...n
                        })
                    }
                }),
                eu = (0, c.r0)(({
                    clerk: e,
                    ...t
                }) => y.createElement(q, {
                    mount: e.mountOrganizationList,
                    unmount: e.unmountOrganizationList,
                    updateProps: e.__unstable__updateProps,
                    props: t
                }), "OrganizationList"),
                ec = (0, c.r0)(({
                    clerk: e,
                    ...t
                }) => y.createElement(q, {
                    open: e.openGoogleOneTap,
                    close: e.closeGoogleOneTap,
                    props: t
                }), "GoogleOneTap"),
                ed = (0, c.r0)(({
                    clerk: e,
                    children: t,
                    ...n
                }) => {
                    let {
                        signUpFallbackRedirectUrl: r,
                        forceRedirectUrl: i,
                        fallbackRedirectUrl: o,
                        signUpForceRedirectUrl: s,
                        mode: l,
                        ...a
                    } = n, u = U(t = j(t, "Sign in"))("SignInButton"), c = () => {
                        let t = {
                            forceRedirectUrl: i,
                            fallbackRedirectUrl: o,
                            signUpFallbackRedirectUrl: r,
                            signUpForceRedirectUrl: s
                        };
                        return "modal" === l ? e.openSignIn(t) : e.redirectToSignIn({ ...t,
                            signInFallbackRedirectUrl: o,
                            signInForceRedirectUrl: i
                        })
                    }, d = async e => (u && "object" == typeof u && "props" in u && await O(u.props.onClick)(e), c()), h = { ...a,
                        onClick: d
                    };
                    return y.cloneElement(u, h)
                }, "SignInButton"),
                eh = (0, c.r0)(({
                    clerk: e,
                    children: t,
                    ...n
                }) => {
                    let {
                        fallbackRedirectUrl: r,
                        forceRedirectUrl: i,
                        signInFallbackRedirectUrl: o,
                        signInForceRedirectUrl: s,
                        mode: l,
                        unsafeMetadata: a,
                        ...u
                    } = n, c = U(t = j(t, "Sign up"))("SignUpButton"), d = () => {
                        let t = {
                            fallbackRedirectUrl: r,
                            forceRedirectUrl: i,
                            signInFallbackRedirectUrl: o,
                            signInForceRedirectUrl: s,
                            unsafeMetadata: a
                        };
                        return "modal" === l ? e.openSignUp(t) : e.redirectToSignUp({ ...t,
                            signUpFallbackRedirectUrl: r,
                            signUpForceRedirectUrl: i
                        })
                    }, h = async e => (c && "object" == typeof c && "props" in c && await O(c.props.onClick)(e), d()), p = { ...u,
                        onClick: h
                    };
                    return y.cloneElement(c, p)
                }, "SignUpButton"),
                ep = (0, c.r0)(({
                    clerk: e,
                    children: t,
                    ...n
                }) => {
                    let {
                        redirectUrl: r = "/",
                        signOutOptions: i,
                        ...o
                    } = n, s = U(t = j(t, "Sign out"))("SignOutButton"), l = () => e.signOut({
                        redirectUrl: r
                    }), a = async e => (await O(s.props.onClick)(e), l()), u = { ...o,
                        onClick: a
                    };
                    return y.cloneElement(s, u)
                }, "SignOutButton"),
                ef = (0, c.r0)(({
                    clerk: e,
                    children: t,
                    ...n
                }) => {
                    let {
                        redirectUrl: r,
                        ...i
                    } = n, o = U(t = j(t, "Sign in with Metamask"))("SignInWithMetamaskButton"), s = async () => {
                        !async function() {
                            await e.authenticateWithMetamask({
                                redirectUrl: r || void 0
                            })
                        }()
                    }, l = async e => (await O(o.props.onClick)(e), s()), a = { ...i,
                        onClick: l
                    };
                    return y.cloneElement(o, a)
                }, "SignInWithMetamask"),
                eg = {
                    name: "@clerk/clerk-react",
                    version: "5.12.0",
                    environment: "production"
                },
                em = class e {
                    constructor(e) {
                        f(this, a), this.clerkjs = null, this.preopenOneTap = null, this.preopenUserVerification = null, this.preopenSignIn = null, this.preopenSignUp = null, this.preopenUserProfile = null, this.preopenOrganizationProfile = null, this.preopenCreateOrganization = null, this.premountSignInNodes = new Map, this.premountSignUpNodes = new Map, this.premountUserProfileNodes = new Map, this.premountUserButtonNodes = new Map, this.premountOrganizationProfileNodes = new Map, this.premountCreateOrganizationNodes = new Map, this.premountOrganizationSwitcherNodes = new Map, this.premountOrganizationListNodes = new Map, this.premountMethodCalls = new Map, this.premountAddListenerCalls = new Map, this.loadedListeners = [], f(this, r, !1), f(this, i), f(this, o), f(this, s), this.buildSignInUrl = e => {
                            let t = () => {
                                var t;
                                return (null == (t = this.clerkjs) ? void 0 : t.buildSignInUrl(e)) || ""
                            };
                            if (this.clerkjs && p(this, r)) return t();
                            this.premountMethodCalls.set("buildSignInUrl", t)
                        }, this.buildSignUpUrl = e => {
                            let t = () => {
                                var t;
                                return (null == (t = this.clerkjs) ? void 0 : t.buildSignUpUrl(e)) || ""
                            };
                            if (this.clerkjs && p(this, r)) return t();
                            this.premountMethodCalls.set("buildSignUpUrl", t)
                        }, this.buildAfterSignInUrl = () => {
                            let e = () => {
                                var e;
                                return (null == (e = this.clerkjs) ? void 0 : e.buildAfterSignInUrl()) || ""
                            };
                            if (this.clerkjs && p(this, r)) return e();
                            this.premountMethodCalls.set("buildAfterSignInUrl", e)
                        }, this.buildAfterSignUpUrl = () => {
                            let e = () => {
                                var e;
                                return (null == (e = this.clerkjs) ? void 0 : e.buildAfterSignUpUrl()) || ""
                            };
                            if (this.clerkjs && p(this, r)) return e();
                            this.premountMethodCalls.set("buildAfterSignUpUrl", e)
                        }, this.buildAfterSignOutUrl = () => {
                            let e = () => {
                                var e;
                                return (null == (e = this.clerkjs) ? void 0 : e.buildAfterSignOutUrl()) || ""
                            };
                            if (this.clerkjs && p(this, r)) return e();
                            this.premountMethodCalls.set("buildAfterSignOutUrl", e)
                        }, this.buildAfterMultiSessionSingleSignOutUrl = () => {
                            let e = () => {
                                var e;
                                return (null == (e = this.clerkjs) ? void 0 : e.buildAfterMultiSessionSingleSignOutUrl()) || ""
                            };
                            if (this.clerkjs && p(this, r)) return e();
                            this.premountMethodCalls.set("buildAfterMultiSessionSingleSignOutUrl", e)
                        }, this.buildUserProfileUrl = () => {
                            let e = () => {
                                var e;
                                return (null == (e = this.clerkjs) ? void 0 : e.buildUserProfileUrl()) || ""
                            };
                            if (this.clerkjs && p(this, r)) return e();
                            this.premountMethodCalls.set("buildUserProfileUrl", e)
                        }, this.buildCreateOrganizationUrl = () => {
                            let e = () => {
                                var e;
                                return (null == (e = this.clerkjs) ? void 0 : e.buildCreateOrganizationUrl()) || ""
                            };
                            if (this.clerkjs && p(this, r)) return e();
                            this.premountMethodCalls.set("buildCreateOrganizationUrl", e)
                        }, this.buildOrganizationProfileUrl = () => {
                            let e = () => {
                                var e;
                                return (null == (e = this.clerkjs) ? void 0 : e.buildOrganizationProfileUrl()) || ""
                            };
                            if (this.clerkjs && p(this, r)) return e();
                            this.premountMethodCalls.set("buildOrganizationProfileUrl", e)
                        }, this.buildUrlWithAuth = e => {
                            let t = () => {
                                var t;
                                return (null == (t = this.clerkjs) ? void 0 : t.buildUrlWithAuth(e)) || ""
                            };
                            if (this.clerkjs && p(this, r)) return t();
                            this.premountMethodCalls.set("buildUrlWithAuth", t)
                        }, this.handleUnauthenticated = () => {
                            let e = () => {
                                var e;
                                return null == (e = this.clerkjs) ? void 0 : e.handleUnauthenticated()
                            };
                            this.clerkjs && p(this, r) ? e() : this.premountMethodCalls.set("handleUnauthenticated", e)
                        }, this.addOnLoaded = e => {
                            this.loadedListeners.push(e), this.loaded && this.emitLoaded()
                        }, this.emitLoaded = () => {
                            this.loadedListeners.forEach(e => e()), this.loadedListeners = []
                        }, this.hydrateClerkJS = e => {
                            if (!e) throw Error("Failed to hydrate latest Clerk JS");
                            return this.clerkjs = e, this.premountMethodCalls.forEach(e => e()), this.premountAddListenerCalls.forEach((t, n) => {
                                t.nativeUnsubscribe = e.addListener(n)
                            }), null !== this.preopenSignIn && e.openSignIn(this.preopenSignIn), null !== this.preopenSignUp && e.openSignUp(this.preopenSignUp), null !== this.preopenUserProfile && e.openUserProfile(this.preopenUserProfile), null !== this.preopenUserVerification && e.__experimental_openUserVerification(this.preopenUserVerification), null !== this.preopenOneTap && e.openGoogleOneTap(this.preopenOneTap), null !== this.preopenOrganizationProfile && e.openOrganizationProfile(this.preopenOrganizationProfile), null !== this.preopenCreateOrganization && e.openCreateOrganization(this.preopenCreateOrganization), this.premountSignInNodes.forEach((t, n) => {
                                e.mountSignIn(n, t)
                            }), this.premountSignUpNodes.forEach((t, n) => {
                                e.mountSignUp(n, t)
                            }), this.premountUserProfileNodes.forEach((t, n) => {
                                e.mountUserProfile(n, t)
                            }), this.premountUserButtonNodes.forEach((t, n) => {
                                e.mountUserButton(n, t)
                            }), this.premountOrganizationListNodes.forEach((t, n) => {
                                e.mountOrganizationList(n, t)
                            }), g(this, r, !0), this.emitLoaded(), this.clerkjs
                        }, this.__unstable__updateProps = async e => {
                            let t = await m(this, a, u).call(this);
                            if (t && "__unstable__updateProps" in t) return t.__unstable__updateProps(e)
                        }, this.setActive = ({
                            session: e,
                            organization: t,
                            beforeEmit: n
                        }) => this.clerkjs ? this.clerkjs.setActive({
                            session: e,
                            organization: t,
                            beforeEmit: n
                        }) : Promise.reject(), this.openSignIn = e => {
                            this.clerkjs && p(this, r) ? this.clerkjs.openSignIn(e) : this.preopenSignIn = e
                        }, this.closeSignIn = () => {
                            this.clerkjs && p(this, r) ? this.clerkjs.closeSignIn() : this.preopenSignIn = null
                        }, this.__experimental_openUserVerification = e => {
                            this.clerkjs && p(this, r) ? this.clerkjs.__experimental_openUserVerification(e) : this.preopenUserVerification = e
                        }, this.__experimental_closeUserVerification = () => {
                            this.clerkjs && p(this, r) ? this.clerkjs.__experimental_closeUserVerification() : this.preopenUserVerification = null
                        }, this.openGoogleOneTap = e => {
                            this.clerkjs && p(this, r) ? this.clerkjs.openGoogleOneTap(e) : this.preopenOneTap = e
                        }, this.closeGoogleOneTap = () => {
                            this.clerkjs && p(this, r) ? this.clerkjs.closeGoogleOneTap() : this.preopenOneTap = null
                        }, this.openUserProfile = e => {
                            this.clerkjs && p(this, r) ? this.clerkjs.openUserProfile(e) : this.preopenUserProfile = e
                        }, this.closeUserProfile = () => {
                            this.clerkjs && p(this, r) ? this.clerkjs.closeUserProfile() : this.preopenUserProfile = null
                        }, this.openOrganizationProfile = e => {
                            this.clerkjs && p(this, r) ? this.clerkjs.openOrganizationProfile(e) : this.preopenOrganizationProfile = e
                        }, this.closeOrganizationProfile = () => {
                            this.clerkjs && p(this, r) ? this.clerkjs.closeOrganizationProfile() : this.preopenOrganizationProfile = null
                        }, this.openCreateOrganization = e => {
                            this.clerkjs && p(this, r) ? this.clerkjs.openCreateOrganization(e) : this.preopenCreateOrganization = e
                        }, this.closeCreateOrganization = () => {
                            this.clerkjs && p(this, r) ? this.clerkjs.closeCreateOrganization() : this.preopenCreateOrganization = null
                        }, this.openSignUp = e => {
                            this.clerkjs && p(this, r) ? this.clerkjs.openSignUp(e) : this.preopenSignUp = e
                        }, this.closeSignUp = () => {
                            this.clerkjs && p(this, r) ? this.clerkjs.closeSignUp() : this.preopenSignUp = null
                        }, this.mountSignIn = (e, t) => {
                            this.clerkjs && p(this, r) ? this.clerkjs.mountSignIn(e, t) : this.premountSignInNodes.set(e, t)
                        }, this.unmountSignIn = e => {
                            this.clerkjs && p(this, r) ? this.clerkjs.unmountSignIn(e) : this.premountSignInNodes.delete(e)
                        }, this.mountSignUp = (e, t) => {
                            this.clerkjs && p(this, r) ? this.clerkjs.mountSignUp(e, t) : this.premountSignUpNodes.set(e, t)
                        }, this.unmountSignUp = e => {
                            this.clerkjs && p(this, r) ? this.clerkjs.unmountSignUp(e) : this.premountSignUpNodes.delete(e)
                        }, this.mountUserProfile = (e, t) => {
                            this.clerkjs && p(this, r) ? this.clerkjs.mountUserProfile(e, t) : this.premountUserProfileNodes.set(e, t)
                        }, this.unmountUserProfile = e => {
                            this.clerkjs && p(this, r) ? this.clerkjs.unmountUserProfile(e) : this.premountUserProfileNodes.delete(e)
                        }, this.mountOrganizationProfile = (e, t) => {
                            this.clerkjs && p(this, r) ? this.clerkjs.mountOrganizationProfile(e, t) : this.premountOrganizationProfileNodes.set(e, t)
                        }, this.unmountOrganizationProfile = e => {
                            this.clerkjs && p(this, r) ? this.clerkjs.unmountOrganizationProfile(e) : this.premountOrganizationProfileNodes.delete(e)
                        }, this.mountCreateOrganization = (e, t) => {
                            this.clerkjs && p(this, r) ? this.clerkjs.mountCreateOrganization(e, t) : this.premountCreateOrganizationNodes.set(e, t)
                        }, this.unmountCreateOrganization = e => {
                            this.clerkjs && p(this, r) ? this.clerkjs.unmountCreateOrganization(e) : this.premountCreateOrganizationNodes.delete(e)
                        }, this.mountOrganizationSwitcher = (e, t) => {
                            this.clerkjs && p(this, r) ? this.clerkjs.mountOrganizationSwitcher(e, t) : this.premountOrganizationSwitcherNodes.set(e, t)
                        }, this.unmountOrganizationSwitcher = e => {
                            this.clerkjs && p(this, r) ? this.clerkjs.unmountOrganizationSwitcher(e) : this.premountOrganizationSwitcherNodes.delete(e)
                        }, this.__experimental_prefetchOrganizationSwitcher = () => {
                            let e = () => {
                                var e;
                                return null == (e = this.clerkjs) ? void 0 : e.__experimental_prefetchOrganizationSwitcher()
                            };
                            this.clerkjs && p(this, r) ? e() : this.premountMethodCalls.set("__experimental_prefetchOrganizationSwitcher", e)
                        }, this.mountOrganizationList = (e, t) => {
                            this.clerkjs && p(this, r) ? this.clerkjs.mountOrganizationList(e, t) : this.premountOrganizationListNodes.set(e, t)
                        }, this.unmountOrganizationList = e => {
                            this.clerkjs && p(this, r) ? this.clerkjs.unmountOrganizationList(e) : this.premountOrganizationListNodes.delete(e)
                        }, this.mountUserButton = (e, t) => {
                            this.clerkjs && p(this, r) ? this.clerkjs.mountUserButton(e, t) : this.premountUserButtonNodes.set(e, t)
                        }, this.unmountUserButton = e => {
                            this.clerkjs && p(this, r) ? this.clerkjs.unmountUserButton(e) : this.premountUserButtonNodes.delete(e)
                        }, this.addListener = e => {
                            if (this.clerkjs) return this.clerkjs.addListener(e); {
                                let t = () => {
                                    var t;
                                    let n = this.premountAddListenerCalls.get(e);
                                    n && (null == (t = n.nativeUnsubscribe) || t.call(n), this.premountAddListenerCalls.delete(e))
                                };
                                return this.premountAddListenerCalls.set(e, {
                                    unsubscribe: t,
                                    nativeUnsubscribe: void 0
                                }), t
                            }
                        }, this.navigate = e => {
                            let t = () => {
                                var t;
                                return null == (t = this.clerkjs) ? void 0 : t.navigate(e)
                            };
                            this.clerkjs && p(this, r) ? t() : this.premountMethodCalls.set("navigate", t)
                        }, this.redirectWithAuth = async (...e) => {
                            let t = () => {
                                var t;
                                return null == (t = this.clerkjs) ? void 0 : t.redirectWithAuth(...e)
                            };
                            if (this.clerkjs && p(this, r)) return t();
                            this.premountMethodCalls.set("redirectWithAuth", t)
                        }, this.redirectToSignIn = async e => {
                            let t = () => {
                                var t;
                                return null == (t = this.clerkjs) ? void 0 : t.redirectToSignIn(e)
                            };
                            if (this.clerkjs && p(this, r)) return t();
                            this.premountMethodCalls.set("redirectToSignIn", t)
                        }, this.redirectToSignUp = async e => {
                            let t = () => {
                                var t;
                                return null == (t = this.clerkjs) ? void 0 : t.redirectToSignUp(e)
                            };
                            if (this.clerkjs && p(this, r)) return t();
                            this.premountMethodCalls.set("redirectToSignUp", t)
                        }, this.redirectToUserProfile = async () => {
                            let e = () => {
                                var e;
                                return null == (e = this.clerkjs) ? void 0 : e.redirectToUserProfile()
                            };
                            if (this.clerkjs && p(this, r)) return e();
                            this.premountMethodCalls.set("redirectToUserProfile", e)
                        }, this.redirectToAfterSignUp = () => {
                            let e = () => {
                                var e;
                                return null == (e = this.clerkjs) ? void 0 : e.redirectToAfterSignUp()
                            };
                            if (this.clerkjs && p(this, r)) return e();
                            this.premountMethodCalls.set("redirectToAfterSignUp", e)
                        }, this.redirectToAfterSignIn = () => {
                            let e = () => {
                                var e;
                                return null == (e = this.clerkjs) ? void 0 : e.redirectToAfterSignIn()
                            };
                            this.clerkjs && p(this, r) ? e() : this.premountMethodCalls.set("redirectToAfterSignIn", e)
                        }, this.redirectToAfterSignOut = () => {
                            let e = () => {
                                var e;
                                return null == (e = this.clerkjs) ? void 0 : e.redirectToAfterSignOut()
                            };
                            this.clerkjs && p(this, r) ? e() : this.premountMethodCalls.set("redirectToAfterSignOut", e)
                        }, this.redirectToOrganizationProfile = async () => {
                            let e = () => {
                                var e;
                                return null == (e = this.clerkjs) ? void 0 : e.redirectToOrganizationProfile()
                            };
                            if (this.clerkjs && p(this, r)) return e();
                            this.premountMethodCalls.set("redirectToOrganizationProfile", e)
                        }, this.redirectToCreateOrganization = async () => {
                            let e = () => {
                                var e;
                                return null == (e = this.clerkjs) ? void 0 : e.redirectToCreateOrganization()
                            };
                            if (this.clerkjs && p(this, r)) return e();
                            this.premountMethodCalls.set("redirectToCreateOrganization", e)
                        }, this.handleRedirectCallback = e => {
                            var t;
                            let n = () => {
                                var t;
                                return null == (t = this.clerkjs) ? void 0 : t.handleRedirectCallback(e)
                            };
                            this.clerkjs && p(this, r) ? null == (t = n()) || t.catch(() => {}) : this.premountMethodCalls.set("handleRedirectCallback", n)
                        }, this.handleGoogleOneTapCallback = (e, t) => {
                            var n;
                            let i = () => {
                                var n;
                                return null == (n = this.clerkjs) ? void 0 : n.handleGoogleOneTapCallback(e, t)
                            };
                            this.clerkjs && p(this, r) ? null == (n = i()) || n.catch(() => {}) : this.premountMethodCalls.set("handleGoogleOneTapCallback", i)
                        }, this.handleEmailLinkVerification = async e => {
                            let t = () => {
                                var t;
                                return null == (t = this.clerkjs) ? void 0 : t.handleEmailLinkVerification(e)
                            };
                            if (this.clerkjs && p(this, r)) return t();
                            this.premountMethodCalls.set("handleEmailLinkVerification", t)
                        }, this.authenticateWithMetamask = async e => {
                            let t = () => {
                                var t;
                                return null == (t = this.clerkjs) ? void 0 : t.authenticateWithMetamask(e)
                            };
                            if (this.clerkjs && p(this, r)) return t();
                            this.premountMethodCalls.set("authenticateWithMetamask", t)
                        }, this.authenticateWithCoinbaseWallet = async e => {
                            let t = () => {
                                var t;
                                return null == (t = this.clerkjs) ? void 0 : t.authenticateWithCoinbaseWallet(e)
                            };
                            if (this.clerkjs && p(this, r)) return t();
                            this.premountMethodCalls.set("authenticateWithCoinbaseWallet", t)
                        }, this.authenticateWithWeb3 = async e => {
                            let t = () => {
                                var t;
                                return null == (t = this.clerkjs) ? void 0 : t.authenticateWithWeb3(e)
                            };
                            if (this.clerkjs && p(this, r)) return t();
                            this.premountMethodCalls.set("authenticateWithWeb3", t)
                        }, this.authenticateWithGoogleOneTap = async e => (await m(this, a, u).call(this)).authenticateWithGoogleOneTap(e), this.createOrganization = async e => {
                            let t = () => {
                                var t;
                                return null == (t = this.clerkjs) ? void 0 : t.createOrganization(e)
                            };
                            if (this.clerkjs && p(this, r)) return t();
                            this.premountMethodCalls.set("createOrganization", t)
                        }, this.getOrganization = async e => {
                            let t = () => {
                                var t;
                                return null == (t = this.clerkjs) ? void 0 : t.getOrganization(e)
                            };
                            if (this.clerkjs && p(this, r)) return t();
                            this.premountMethodCalls.set("getOrganization", t)
                        }, this.signOut = async (e, t) => {
                            let n = () => {
                                var n;
                                return null == (n = this.clerkjs) ? void 0 : n.signOut(e, t)
                            };
                            if (this.clerkjs && p(this, r)) return n();
                            this.premountMethodCalls.set("signOut", n)
                        };
                        let {
                            Clerk: t = null,
                            publishableKey: n
                        } = e || {};
                        g(this, s, n), g(this, o, null == e ? void 0 : e.proxyUrl), g(this, i, null == e ? void 0 : e.domain), this.options = e, this.Clerk = t, this.mode = (0, w._f)() ? "browser" : "server", this.options.sdkMetadata || (this.options.sdkMetadata = eg), this.loadClerkJS()
                    }
                    get publishableKey() {
                        return p(this, s)
                    }
                    get loaded() {
                        return p(this, r)
                    }
                    static getOrCreateInstance(t) {
                        return (0, w._f)() && p(this, l) && (!t.Clerk || p(this, l).Clerk === t.Clerk) || g(this, l, new e(t)), p(this, l)
                    }
                    static clearInstance() {
                        g(this, l, null)
                    }
                    get domain() {
                        return "undefined" != typeof window && window.location ? C(p(this, i), new URL(window.location.href), "") : "function" == typeof p(this, i) ? c.RM.throw(c.qq) : p(this, i) || ""
                    }
                    get proxyUrl() {
                        return "undefined" != typeof window && window.location ? C(p(this, o), new URL(window.location.href), "") : "function" == typeof p(this, o) ? c.RM.throw(c.qq) : p(this, o) || ""
                    }
                    get sdkMetadata() {
                        var e;
                        return (null == (e = this.clerkjs) ? void 0 : e.sdkMetadata) || this.options.sdkMetadata || void 0
                    }
                    get instanceType() {
                        var e;
                        return null == (e = this.clerkjs) ? void 0 : e.instanceType
                    }
                    get frontendApi() {
                        var e;
                        return (null == (e = this.clerkjs) ? void 0 : e.frontendApi) || ""
                    }
                    get isStandardBrowser() {
                        var e;
                        return (null == (e = this.clerkjs) ? void 0 : e.isStandardBrowser) || this.options.standardBrowser || !1
                    }
                    get isSatellite() {
                        return "undefined" != typeof window && window.location ? C(this.options.isSatellite, new URL(window.location.href), !1) : "function" == typeof this.options.isSatellite && c.RM.throw(c.qq)
                    }
                    async loadClerkJS() {
                        var e, t;
                        if (!("browser" !== this.mode || p(this, r))) {
                            "undefined" != typeof window && (window.__clerk_publishable_key = p(this, s), window.__clerk_proxy_url = this.proxyUrl, window.__clerk_domain = this.domain);
                            try {
                                if (this.Clerk) {
                                    let e;
                                    (t = this.Clerk, "function" == typeof t) ? (e = new this.Clerk(p(this, s), {
                                        proxyUrl: this.proxyUrl,
                                        domain: this.domain
                                    }), await e.load(this.options)) : (e = this.Clerk).loaded || await e.load(this.options), global.Clerk = e
                                } else {
                                    if (global.Clerk || await (0, v.YJ)({ ...this.options,
                                            publishableKey: p(this, s),
                                            proxyUrl: this.proxyUrl,
                                            domain: this.domain,
                                            nonce: this.options.nonce
                                        }), !global.Clerk) throw Error("Failed to download latest ClerkJS. Contact support@clerk.com.");
                                    await global.Clerk.load(this.options)
                                }
                                if (null == (e = global.Clerk) ? void 0 : e.loaded) return this.hydrateClerkJS(global.Clerk);
                                return
                            } catch (e) {
                                console.error(e.stack || e.message || e);
                                return
                            }
                        }
                    }
                    get version() {
                        var e;
                        return null == (e = this.clerkjs) ? void 0 : e.version
                    }
                    get client() {
                        return this.clerkjs ? this.clerkjs.client : void 0
                    }
                    get session() {
                        return this.clerkjs ? this.clerkjs.session : void 0
                    }
                    get user() {
                        return this.clerkjs ? this.clerkjs.user : void 0
                    }
                    get organization() {
                        return this.clerkjs ? this.clerkjs.organization : void 0
                    }
                    get telemetry() {
                        return this.clerkjs ? this.clerkjs.telemetry : void 0
                    }
                    get __unstable__environment() {
                        return this.clerkjs ? this.clerkjs.__unstable__environment : void 0
                    }
                    __unstable__setEnvironment(...e) {
                        this.clerkjs && "__unstable__setEnvironment" in this.clerkjs && this.clerkjs.__unstable__setEnvironment(e)
                    }
                };
            r = new WeakMap, i = new WeakMap, o = new WeakMap, s = new WeakMap, l = new WeakMap, a = new WeakSet, u = function() {
                return new Promise(e => {
                    this.addOnLoaded(() => e(this.clerkjs))
                })
            }, f(em, l);
            var ev = (e, t, n) => !e && n ? ek(n) : eb(t),
                ek = e => {
                    let t = e.userId,
                        n = e.user,
                        r = e.sessionId,
                        i = e.session,
                        o = e.organization,
                        s = e.orgId,
                        l = e.orgRole,
                        a = e.orgPermissions;
                    return {
                        userId: t,
                        user: n,
                        sessionId: r,
                        session: i,
                        organization: o,
                        orgId: s,
                        orgRole: l,
                        orgPermissions: a,
                        orgSlug: e.orgSlug,
                        actor: e.actor,
                        __experimental_factorVerificationAge: e.__experimental_factorVerificationAge
                    }
                },
                eb = e => {
                    var t;
                    let n = e.user ? e.user.id : e.user,
                        r = e.user,
                        i = e.session ? e.session.id : e.session,
                        o = e.session,
                        s = e.session ? e.session.__experimental_factorVerificationAge : null,
                        l = null == o ? void 0 : o.actor,
                        a = e.organization,
                        u = e.organization ? e.organization.id : e.organization,
                        c = null == a ? void 0 : a.slug,
                        d = a ? null == (t = null == r ? void 0 : r.organizationMemberships) ? void 0 : t.find(e => e.organization.id === u) : a,
                        h = d ? d.permissions : d;
                    return {
                        userId: n,
                        user: r,
                        sessionId: i,
                        session: o,
                        organization: a,
                        orgId: u,
                        orgRole: d ? d.role : d,
                        orgSlug: c,
                        orgPermissions: h,
                        actor: l,
                        __experimental_factorVerificationAge: s
                    }
                };

            function ey(e) {
                let {
                    isomorphicClerkOptions: t,
                    initialState: n,
                    children: r
                } = e, {
                    isomorphicClerk: i,
                    loaded: o
                } = eP(t), [s, l] = y.useState({
                    client: i.client,
                    session: i.session,
                    user: i.user,
                    organization: i.organization
                });
                y.useEffect(() => i.addListener(e => l({ ...e
                })), []);
                let a = ev(o, s, n),
                    u = y.useMemo(() => ({
                        value: i
                    }), [o]),
                    d = y.useMemo(() => ({
                        value: s.client
                    }), [s.client]),
                    {
                        sessionId: h,
                        session: p,
                        userId: f,
                        user: g,
                        orgId: m,
                        actor: v,
                        organization: k,
                        orgRole: P,
                        orgSlug: S,
                        orgPermissions: w,
                        __experimental_factorVerificationAge: C
                    } = a,
                    U = y.useMemo(() => ({
                        value: {
                            sessionId: h,
                            userId: f,
                            actor: v,
                            orgId: m,
                            orgRole: P,
                            orgSlug: S,
                            orgPermissions: w,
                            __experimental_factorVerificationAge: C
                        }
                    }), [h, f, v, m, P, S, C]),
                    j = y.useMemo(() => ({
                        value: p
                    }), [h, p]),
                    O = y.useMemo(() => ({
                        value: g
                    }), [f, g]),
                    _ = y.useMemo(() => ({
                        value: {
                            organization: k
                        }
                    }), [m, k]);
                return y.createElement(c.iz.Provider, {
                    value: u
                }, y.createElement(b.RY.Provider, {
                    value: d
                }, y.createElement(b.B3.Provider, {
                    value: j
                }, y.createElement(b.f0, { ..._.value
                }, y.createElement(c.Vo.Provider, {
                    value: U
                }, y.createElement(b.St.Provider, {
                    value: O
                }, r))))))
            }
            var eP = e => {
                    let [t, n] = y.useState(!1), r = y.useMemo(() => em.getOrCreateInstance(e), []);
                    return y.useEffect(() => {
                        r.__unstable__updateProps({
                            appearance: e.appearance
                        })
                    }, [e.appearance]), y.useEffect(() => {
                        r.__unstable__updateProps({
                            options: e
                        })
                    }, [e.localization]), y.useEffect(() => {
                        r.addOnLoaded(() => n(!0))
                    }, []), y.useEffect(() => () => {
                        em.clearInstance()
                    }, []), {
                        isomorphicClerk: r,
                        loaded: t
                    }
                },
                eS = function(e, t, n) {
                    let r = e.displayName || e.name || t || "Component",
                        i = r => (! function(e, t, n = 1) {
                            y.useEffect(() => {
                                let r = _.get(e) || 0;
                                return r == n ? c.RM.throw(t) : (_.set(e, r + 1), () => {
                                    _.set(e, (_.get(e) || 1) - 1)
                                })
                            }, [])
                        }(t, n), y.createElement(e, { ...r
                        }));
                    return i.displayName = `withMaxAllowedInstancesGuard(${r})`, i
                }(function(e) {
                    let {
                        initialState: t,
                        children: n,
                        ...r
                    } = e, {
                        publishableKey: i = "",
                        Clerk: o
                    } = r;
                    return o || (i ? i && !(0, S.x9)(i) && c.RM.throwInvalidPublishableKeyError({
                        key: i
                    }) : c.RM.throwMissingPublishableKeyError()), y.createElement(ey, {
                        initialState: t,
                        isomorphicClerkOptions: r
                    }, n)
                }, "ClerkProvider", c.KQ);
            eS.displayName = "ClerkProvider", (0, c.JM)({
                packageName: "@clerk/clerk-react"
            }), (0, v.Aw)("@clerk/clerk-react")
        },
        84301: function(e, t, n) {
            "use strict";
            n.d(t, {
                U9: function() {
                    return f
                },
                ac: function() {
                    return h
                },
                qx: function() {
                    return p
                },
                r2: function() {
                    return a
                },
                yA: function() {
                    return c
                }
            });
            var r = Object.defineProperty,
                i = Object.getOwnPropertyDescriptor,
                o = Object.getOwnPropertyNames,
                s = Object.prototype.hasOwnProperty,
                l = e => {
                    throw TypeError(e)
                },
                a = (e, t) => {
                    for (var n in t) r(e, n, {
                        get: t[n],
                        enumerable: !0
                    })
                },
                u = (e, t, n, l) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let a of o(t)) s.call(e, a) || a === n || r(e, a, {
                            get: () => t[a],
                            enumerable: !(l = i(t, a)) || l.enumerable
                        });
                    return e
                },
                c = (e, t, n) => (u(e, t, "default"), n && u(n, t, "default")),
                d = (e, t, n) => t.has(e) || l("Cannot " + n),
                h = (e, t, n) => (d(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
                p = (e, t, n, r) => (d(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
                f = (e, t, n) => (d(e, t, "access private method"), n)
        },
        48784: function(e, t, n) {
            "use strict";
            n.d(t, {
                ve: function() {
                    return u
                },
                yJ: function() {
                    return i
                }
            });
            var r = n(6880),
                i = e => {
                    (0, r.vf)() && console.error(`Clerk: ${e}`)
                },
                o = {
                    firstDelay: 125,
                    maxDelay: 0,
                    timeMultiple: 2,
                    shouldRetry: () => !0
                },
                s = async e => new Promise(t => setTimeout(t, e)),
                l = e => {
                    let t = 0,
                        n = () => {
                            let n = e.firstDelay * Math.pow(e.timeMultiple, t);
                            return Math.min(e.maxDelay || n, n)
                        };
                    return async () => {
                        await s(n()), t++
                    }
                },
                a = async (e, t = {}) => {
                    let n = 0,
                        {
                            shouldRetry: r,
                            firstDelay: i,
                            maxDelay: s,
                            timeMultiple: a
                        } = { ...o,
                            ...t
                        },
                        u = l({
                            firstDelay: i,
                            maxDelay: s,
                            timeMultiple: a
                        });
                    for (;;) try {
                        return await e()
                    } catch (e) {
                        if (!r(e, ++n)) throw e;
                        await u()
                    }
                };
            async function u(e = "", t) {
                let {
                    async: n,
                    defer: r,
                    beforeLoad: i,
                    crossOrigin: o,
                    nonce: s
                } = t || {};
                return a(() => new Promise((t, l) => {
                    e || l("loadScript cannot be called without a src"), document && document.body || l("loadScript cannot be called when document does not exist");
                    let a = document.createElement("script");
                    o && a.setAttribute("crossorigin", o), a.async = n || !1, a.defer = r || !1, a.addEventListener("load", () => {
                        a.remove(), t(a)
                    }), a.addEventListener("error", () => {
                        a.remove(), l()
                    }), a.src = e, a.nonce = s, null == i || i(a), document.body.appendChild(a)
                }), {
                    shouldRetry: (e, t) => t < 5
                })
            }
        },
        79775: function(e, t, n) {
            "use strict";
            n.d(t, {
                Fo: function() {
                    return l
                },
                Iq: function() {
                    return a
                },
                Xv: function() {
                    return u
                },
                cM: function() {
                    return s
                },
                iF: function() {
                    return o
                },
                mv: function() {
                    return r
                },
                vO: function() {
                    return i
                }
            });
            var r = [".lcl.dev", ".lclstage.dev", ".lclclerk.com"],
                i = [".lcl.dev", ".stg.dev", ".lclstage.dev", ".stgstage.dev", ".dev.lclclerk.com", ".stg.lclclerk.com", ".accounts.lclclerk.com", "accountsstage.dev", "accounts.dev"],
                o = [".lcl.dev", "lclstage.dev", ".lclclerk.com", ".accounts.lclclerk.com"],
                s = [".accountsstage.dev"],
                l = "https://api.lclclerk.com",
                a = "https://api.clerkstage.dev",
                u = "https://api.clerk.com"
        },
        77126: function(e, t, n) {
            "use strict";
            n.d(t, {
                MY: function() {
                    return a
                },
                x9: function() {
                    return l
                },
                nQ: function() {
                    return s
                }
            });
            var r = e => "undefined" != typeof atob && "function" == typeof atob ? atob(e) : "undefined" != typeof global && global.Buffer ? new global.Buffer(e, "base64").toString() : e,
                i = n(79775),
                o = "pk_live_";

            function s(e, t = {}) {
                if (!(e = e || "") || !l(e)) {
                    if (t.fatal) throw Error("Publishable key not valid.");
                    return null
                }
                let n = e.startsWith(o) ? "production" : "development",
                    i = r(e.split("_")[2]);
                return i = i.slice(0, -1), t.proxyUrl ? i = t.proxyUrl : "development" !== n && t.domain && (i = `clerk.${t.domain}`), {
                    instanceType: n,
                    frontendApi: i
                }
            }

            function l(e) {
                let t = (e = e || "").startsWith(o) || e.startsWith("pk_test_"),
                    n = r(e.split("_")[2] || "").endsWith("$");
                return t && n
            }

            function a() {
                let e = new Map;
                return {
                    isDevOrStagingUrl: t => {
                        if (!t) return !1;
                        let n = "string" == typeof t ? t : t.hostname,
                            r = e.get(n);
                        return void 0 === r && (r = i.vO.some(e => n.endsWith(e)), e.set(n, r)), r
                    }
                }
            }
        },
        8996: function(e, t, n) {
            "use strict";

            function r() {
                return "undefined" != typeof window
            }
            n.d(t, {
                _f: function() {
                    return r
                }
            }), RegExp("bot|spider|crawl|APIs-Google|AdsBot|Googlebot|mediapartners|Google Favicon|FeedFetcher|Google-Read-Aloud|DuplexWeb-Google|googleweblight|bing|yandex|baidu|duckduck|yahoo|ecosia|ia_archiver|facebook|instagram|pinterest|reddit|slack|twitter|whatsapp|youtube|semrush", "i")
        },
        35831: function(e, t, n) {
            "use strict";
            n.d(t, {
                iv: function() {
                    return m
                },
                wE: function() {
                    return g
                },
                YJ: function() {
                    return f
                },
                Aw: function() {
                    return p
                }
            });
            var r = (e, t = "5.27.0") => {
                    if (e) return e;
                    let n = i(t);
                    return n ? "snapshot" === n ? "5.27.0" : n : o(t)
                },
                i = e => {
                    var t;
                    return null == (t = e.trim().replace(/^v/, "").match(/-(.+?)(\.|$)/)) ? void 0 : t[1]
                },
                o = e => e.trim().replace(/^v/, "").split(".")[0];

            function s(e) {
                return e.startsWith("/")
            }
            var l = n(48784),
                a = n(2310),
                u = n(77126),
                c = "Clerk: Failed to load Clerk",
                {
                    isDevOrStagingUrl: d
                } = (0, u.MY)(),
                h = (0, a.t5)({
                    packageName: "@clerk/shared"
                });

            function p(e) {
                h.setPackageName({
                    packageName: e
                })
            }
            var f = async e => {
                    let t = document.querySelector("script[data-clerk-js-script]");
                    if (t) return new Promise((e, n) => {
                        t.addEventListener("load", () => {
                            e(t)
                        }), t.addEventListener("error", () => {
                            n(c)
                        })
                    });
                    if (!(null == e ? void 0 : e.publishableKey)) {
                        h.throwMissingPublishableKeyError();
                        return
                    }
                    return (0, l.ve)(g(e), {
                        async: !0,
                        crossOrigin: "anonymous",
                        nonce: e.nonce,
                        beforeLoad: v(e)
                    }).catch(() => {
                        throw Error(c)
                    })
                },
                g = e => {
                    var t, n;
                    let {
                        clerkJSUrl: i,
                        clerkJSVariant: o,
                        clerkJSVersion: l,
                        proxyUrl: a,
                        domain: c,
                        publishableKey: h
                    } = e;
                    if (i) return i;
                    let p = "";
                    p = a && (!a || /^http(s)?:\/\//.test(a || "") || s(a)) ? (a ? s(a) ? new URL(a, window.location.origin).toString() : a : "").replace(/http(s)?:\/\//, "") : c && !d((null == (t = (0, u.nQ)(h)) ? void 0 : t.frontendApi) || "") ? function(e) {
                        let t;
                        if (!e) return "";
                        if (e.match(/^(clerk\.)+\w*$/)) t = /(clerk\.)*(?=clerk\.)/;
                        else {
                            if (e.match(/\.clerk.accounts/)) return e;
                            t = /^(clerk\.)*/gi
                        }
                        let n = e.replace(t, "");
                        return `clerk.${n}`
                    }(c) : (null == (n = (0, u.nQ)(h)) ? void 0 : n.frontendApi) || "";
                    let f = o ? `${o.replace(/\.+$/,"")}.` : "",
                        g = r(l);
                    return `https://${p}/npm/@clerk/clerk-js@${g}/dist/clerk.${f}browser.js`
                },
                m = e => {
                    let t = {};
                    return e.publishableKey && (t["data-clerk-publishable-key"] = e.publishableKey), e.proxyUrl && (t["data-clerk-proxy-url"] = e.proxyUrl), e.domain && (t["data-clerk-domain"] = e.domain), e.nonce && (t.nonce = e.nonce), t
                },
                v = e => t => {
                    let n = m(e);
                    for (let e in n) t.setAttribute(e, n[e])
                }
        },
        70040: function(e, t, n) {
            "use strict";
            n.d(t, {
                fQ: function() {
                    return i
                }
            });
            var r = e => {
                let t = n => {
                    if (!n) return n;
                    if (Array.isArray(n)) return n.map(e => "object" == typeof e || Array.isArray(e) ? t(e) : e);
                    let r = { ...n
                    };
                    for (let n of Object.keys(r)) {
                        let i = e(n.toString());
                        i !== n && (r[i] = r[n], delete r[n]), "object" == typeof r[i] && (r[i] = t(r[i]))
                    }
                    return r
                };
                return t
            };

            function i(e) {
                if ("boolean" == typeof e) return e;
                if (null == e) return !1;
                if ("string" == typeof e) {
                    if ("true" === e.toLowerCase()) return !0;
                    if ("false" === e.toLowerCase()) return !1
                }
                let t = parseInt(e, 10);
                return !isNaN(t) && t > 0
            }
            r(function(e) {
                return e ? e.replace(/[A-Z]/g, e => `_${e.toLowerCase()}`) : ""
            }), r(function(e) {
                return e ? e.replace(/([-_][a-z])/g, e => e.toUpperCase().replace(/-|_/, "")) : ""
            })
        },
        6880: function(e, t, n) {
            "use strict";
            n.d(t, {
                rx: function() {
                    return i
                },
                vf: function() {
                    return r
                }
            });
            var r = () => !1,
                i = () => {
                    try {
                        return !0
                    } catch (e) {}
                    return !1
                }
        },
        2310: function(e, t, n) {
            "use strict";
            n.d(t, {
                t5: function() {
                    return i
                }
            });
            var r = Object.freeze({
                InvalidProxyUrlErrorMessage: "The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",
                InvalidPublishableKeyErrorMessage: "The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})",
                MissingPublishableKeyErrorMessage: "Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",
                MissingSecretKeyErrorMessage: "Missing secretKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",
                MissingClerkProvider: "{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider"
            });

            function i({
                packageName: e,
                customMessages: t
            }) {
                let n = e,
                    i = { ...r,
                        ...t
                    };

                function o(e, t) {
                    if (!t) return `${n}: ${e}`;
                    let r = e;
                    for (let n of e.matchAll(/{{([a-zA-Z0-9-_]+)}}/g)) {
                        let e = (t[n[1]] || "").toString();
                        r = r.replace(`{{${n[1]}}}`, e)
                    }
                    return `${n}: ${r}`
                }
                return {
                    setPackageName({
                        packageName: e
                    }) {
                        return "string" == typeof e && (n = e), this
                    },
                    setMessages({
                        customMessages: e
                    }) {
                        return Object.assign(i, e || {}), this
                    },
                    throwInvalidPublishableKeyError(e) {
                        throw Error(o(i.InvalidPublishableKeyErrorMessage, e))
                    },
                    throwInvalidProxyUrl(e) {
                        throw Error(o(i.InvalidProxyUrlErrorMessage, e))
                    },
                    throwMissingPublishableKeyError() {
                        throw Error(o(i.MissingPublishableKeyErrorMessage))
                    },
                    throwMissingSecretKeyError() {
                        throw Error(o(i.MissingSecretKeyErrorMessage))
                    },
                    throwMissingClerkProviderError(e) {
                        throw Error(o(i.MissingClerkProvider, e))
                    },
                    throw (e) {
                        throw Error(o(e))
                    }
                }
            }
        },
        10684: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return {
                    event: "METHOD_CALLED",
                    payload: {
                        method: e,
                        ...t
                    }
                }
            }
            n.d(t, {
                J: function() {
                    return r
                }
            })
        },
        22605: function(e, t, n) {
            "use strict";
            n.d(t, {
                t5: function() {
                    return r.t5
                }
            });
            var r = n(2310);
            n(84301)
        },
        59827: function(e, t, n) {
            "use strict";
            n.d(t, {
                rx: function() {
                    return o.rx
                },
                yJ: function() {
                    return i.yJ
                },
                zu: function() {
                    return r
                }
            });
            var r = (e, ...t) => {
                let n = { ...e
                };
                for (let e of t) delete n[e];
                return n
            };
            n(70040), n(35831);
            var i = n(48784),
                o = n(6880);
            n(2310), Object.freeze({
                "image/png": "png",
                "image/jpeg": "jpg",
                "image/gif": "gif",
                "image/webp": "webp",
                "image/x-icon": "ico",
                "image/vnd.microsoft.icon": "ico"
            }), n(8996), n(84301)
        },
        23054: function(e, t, n) {
            "use strict";
            n.d(t, {
                Aw: function() {
                    return r.Aw
                },
                YJ: function() {
                    return r.YJ
                },
                iv: function() {
                    return r.iv
                },
                wE: function() {
                    return r.wE
                }
            });
            var r = n(35831);
            n(48784), n(2310), n(84301)
        },
        99206: function(e, t, n) {
            "use strict";
            n.d(t, {
                b5: function() {
                    return O
                },
                RY: function() {
                    return E
                },
                f0: function() {
                    return R
                },
                B3: function() {
                    return L
                },
                St: function() {
                    return z
                },
                uH: function() {
                    return U
                },
                c1: function() {
                    return ee
                },
                Rm: function() {
                    return W
                },
                cL: function() {
                    return H
                },
                rI: function() {
                    return _
                },
                sX: function() {
                    return I
                },
                o8: function() {
                    return $
                },
                eW: function() {
                    return G
                },
                kP: function() {
                    return K
                },
                xo: function() {
                    return V
                },
                aF: function() {
                    return Y
                }
            });
            var r = n(10684),
                i = n(84301),
                o = n(2265),
                s = n(85323),
                l = n(2602),
                a = n(58034),
                u = n(62827),
                c = n(82558);
            let d = () => {},
                h = d(),
                p = Object,
                f = e => e === h,
                g = e => "function" == typeof e,
                m = new WeakMap,
                v = (e, t) => p.prototype.toString.call(e) === `[object ${t}]`,
                k = 0,
                b = e => {
                    let t, n;
                    let r = typeof e,
                        i = v(e, "Date"),
                        o = v(e, "RegExp"),
                        s = v(e, "Object");
                    if (p(e) !== e || i || o) t = i ? e.toJSON() : "symbol" == r ? e.toString() : "string" == r ? JSON.stringify(e) : "" + e;
                    else {
                        if (t = m.get(e)) return t;
                        if (t = ++k + "~", m.set(e, t), Array.isArray(e)) {
                            for (n = 0, t = "@"; n < e.length; n++) t += b(e[n]) + ",";
                            m.set(e, t)
                        }
                        if (s) {
                            t = "#";
                            let r = p.keys(e).sort();
                            for (; !f(n = r.pop());) f(e[n]) || (t += n + ":" + b(e[n]) + ",");
                            m.set(e, t)
                        }
                    }
                    return t
                },
                y = e => {
                    if (g(e)) try {
                        e = e()
                    } catch (t) {
                        e = ""
                    }
                    let t = e;
                    return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? b(e) : "", t]
                },
                P = e => y(e ? e(0, null) : null)[0],
                S = Promise.resolve(),
                w = (0, u.xD)(s.default, e => (t, n, r) => {
                    let i;
                    let s = (0, o.useRef)(!1),
                        {
                            cache: u,
                            initialSize: d = 1,
                            revalidateAll: h = !1,
                            persistSize: p = !1,
                            revalidateFirstPage: f = !0,
                            revalidateOnMount: g = !1,
                            parallel: m = !1
                        } = r,
                        [, , , v] = l.b.get(l.c);
                    try {
                        (i = P(t)) && (i = a.U + i)
                    } catch (e) {}
                    let [k, b, y] = (0, l.z)(u, i), w = (0, o.useCallback)(() => (0, l.e)(k()._l) ? d : k()._l, [u, i, d]);
                    (0, c.useSyncExternalStore)((0, o.useCallback)(e => i ? y(i, () => {
                        e()
                    }) : () => {}, [u, i]), w, w);
                    let C = (0, o.useCallback)(() => {
                            let e = k()._l;
                            return (0, l.e)(e) ? d : e
                        }, [i, d]),
                        U = (0, o.useRef)(C());
                    (0, l.u)(() => {
                        if (!s.current) {
                            s.current = !0;
                            return
                        }
                        i && b({
                            _l: p ? U.current : C()
                        })
                    }, [i, u]);
                    let j = g && !s.current,
                        O = e(i, async e => {
                            let i = k()._i,
                                o = k()._r;
                            b({
                                _r: l.U
                            });
                            let s = [],
                                a = C(),
                                [c] = (0, l.z)(u, e),
                                d = c().data,
                                p = [],
                                g = null;
                            for (let e = 0; e < a; ++e) {
                                let [a, c] = (0, l.s)(t(e, m ? null : g));
                                if (!a) break;
                                let [k, b] = (0, l.z)(u, a), y = k().data, P = h || i || (0, l.e)(y) || f && !e && !(0, l.e)(d) || j || d && !(0, l.e)(d[e]) && !r.compare(d[e], y);
                                if (n && ("function" == typeof o ? o(y, c) : P)) {
                                    let t = async () => {
                                        if (a in v) {
                                            let e = v[a];
                                            delete v[a], y = await e
                                        } else y = await n(c);
                                        b({
                                            data: y,
                                            _k: c
                                        }), s[e] = y
                                    };
                                    m ? p.push(t) : await t()
                                } else s[e] = y;
                                m || (g = y)
                            }
                            return m && await Promise.all(p.map(e => e())), b({
                                _i: l.U
                            }), s
                        }, r),
                        _ = (0, o.useCallback)(function(e, t) {
                            let n = "boolean" == typeof t ? {
                                    revalidate: t
                                } : t || {},
                                r = !1 !== n.revalidate;
                            return i ? (r && ((0, l.e)(e) ? b({
                                _i: !0,
                                _r: n.revalidate
                            }) : b({
                                _i: !1,
                                _r: n.revalidate
                            })), arguments.length ? O.mutate(e, { ...n,
                                revalidate: r
                            }) : O.mutate()) : S
                        }, [i, u]),
                        z = (0, o.useCallback)(e => {
                            let n;
                            if (!i) return S;
                            let [, r] = (0, l.z)(u, i);
                            if ((0, l.a)(e) ? n = e(C()) : "number" == typeof e && (n = e), "number" != typeof n) return S;
                            r({
                                _l: n
                            }), U.current = n;
                            let o = [],
                                [s] = (0, l.z)(u, i),
                                a = null;
                            for (let e = 0; e < n; ++e) {
                                let [n] = (0, l.s)(t(e, a)), [r] = (0, l.z)(u, n), i = n ? r().data : l.U;
                                if ((0, l.e)(i)) return _(s().data);
                                o.push(i), a = i
                            }
                            return _(o)
                        }, [i, u, _, C]);
                    return {
                        size: C(),
                        setSize: z,
                        mutate: _,
                        get data() {
                            return O.data
                        },
                        get error() {
                            return O.error
                        },
                        get isValidating() {
                            return O.isValidating
                        },
                        get isLoading() {
                            return O.isLoading
                        }
                    }
                });

            function C(e, t) {
                if (!e) throw "string" == typeof t ? Error(t) : Error(`${t.displayName} not found`)
            }
            var U = (e, t) => {
                    let {
                        assertCtxFn: n = C
                    } = t || {}, r = o.createContext(void 0);
                    return r.displayName = e, [r, () => {
                        let t = o.useContext(r);
                        return n(t, `${e} not found`), t.value
                    }, () => {
                        let e = o.useContext(r);
                        return e ? e.value : {}
                    }]
                },
                j = {};
            (0, i.r2)(j, {
                SWRConfig: () => s.SWRConfig,
                useSWR: () => s.default,
                useSWRInfinite: () => w
            }), (0, i.yA)(j, s);
            var [O, _] = U("ClerkInstanceContext"), [z, M] = U("UserContext"), [E, I] = U("ClientContext"), [L, A] = U("SessionContext");
            o.createContext({});
            var [x, T] = U("OrganizationContext"), R = ({
                children: e,
                organization: t,
                swrConfig: n
            }) => o.createElement(s.SWRConfig, {
                value: n
            }, o.createElement(x.Provider, {
                value: {
                    value: {
                        organization: t
                    }
                }
            }, e));

            function W(e) {
                if (!o.useContext(O)) {
                    if ("function" == typeof e) {
                        e();
                        return
                    }
                    throw Error(`${e} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider`)
                }
            }

            function N(e, t) {
                let n = new Set(Object.keys(t)),
                    r = {};
                for (let t of Object.keys(e)) n.has(t) || (r[t] = e[t]);
                return r
            }
            var B = (e, t) => {
                    var n, r, i;
                    let s = "boolean" == typeof e && e,
                        l = (0, o.useRef)(s ? t.initialPage : null != (n = null == e ? void 0 : e.initialPage) ? n : t.initialPage),
                        a = (0, o.useRef)(s ? t.pageSize : null != (r = null == e ? void 0 : e.pageSize) ? r : t.pageSize),
                        u = {};
                    for (let n of Object.keys(t)) u[n] = s ? t[n] : null != (i = null == e ? void 0 : e[n]) ? i : t[n];
                    return { ...u,
                        initialPage: l.current,
                        pageSize: a.current
                    }
                },
                F = {
                    dedupingInterval: 6e4,
                    focusThrottleInterval: 12e4
                },
                D = (e, t, n, r) => {
                    var i, l, a, u, c, d, h;
                    let [p, f] = (0, o.useState)(null != (i = e.initialPage) ? i : 1), g = (0, o.useRef)(null != (l = e.initialPage) ? l : 1), m = (0, o.useRef)(null != (a = e.pageSize) ? a : 10), v = null == (u = n.enabled) || u, k = null != (c = n.infinite) && c, b = null != (d = n.keepPreviousData) && d, y = { ...r,
                        ...e,
                        initialPage: p,
                        pageSize: m.current
                    }, {
                        data: P,
                        isValidating: S,
                        isLoading: C,
                        error: U,
                        mutate: j
                    } = (0, s.default)(!k && t && v ? y : null, e => {
                        let n = N(e, r);
                        return null == t ? void 0 : t(n)
                    }, {
                        keepPreviousData: b,
                        ...F
                    }), {
                        data: O,
                        isLoading: _,
                        isValidating: z,
                        error: M,
                        size: E,
                        setSize: I,
                        mutate: L
                    } = w(t => k && v ? { ...e,
                        ...r,
                        initialPage: g.current + t,
                        pageSize: m.current
                    } : null, e => {
                        let n = N(e, r);
                        return null == t ? void 0 : t(n)
                    }, F), A = (0, o.useMemo)(() => k ? E : p, [k, E, p]), x = (0, o.useCallback)(e => {
                        if (k) {
                            I(e);
                            return
                        }
                        return f(e)
                    }, [I]), T = (0, o.useMemo)(() => {
                        var e, t;
                        return k ? null != (e = null == O ? void 0 : O.map(e => null == e ? void 0 : e.data).flat()) ? e : [] : null != (t = null == P ? void 0 : P.data) ? t : []
                    }, [k, P, O]), R = (0, o.useMemo)(() => {
                        var e, t;
                        return k ? (null == (e = null == O ? void 0 : O[(null == O ? void 0 : O.length) - 1]) ? void 0 : e.total_count) || 0 : null != (t = null == P ? void 0 : P.total_count) ? t : 0
                    }, [k, P, O]), W = k ? _ : C, B = k ? z : S, D = null != (h = k ? M : U) ? h : null, J = (0, o.useCallback)(() => {
                        x(e => Math.max(0, e + 1))
                    }, [x]), $ = (0, o.useCallback)(() => {
                        x(e => Math.max(0, e - 1))
                    }, [x]), q = (g.current - 1) * m.current, G = Math.ceil((R - q) / m.current), K = R - q * m.current > A * m.current, V = (A - 1) * m.current > q * m.current, Y = k ? e => L(e, {
                        revalidate: !1
                    }) : e => j(e, {
                        revalidate: !1
                    });
                    return {
                        data: T,
                        count: R,
                        error: D,
                        isLoading: W,
                        isFetching: B,
                        isError: !!D,
                        page: A,
                        pageCount: G,
                        fetchPage: x,
                        fetchNext: J,
                        fetchPrevious: $,
                        hasNextPage: K,
                        hasPreviousPage: V,
                        revalidate: k ? () => L() : () => j(),
                        setData: Y
                    }
                },
                J = {
                    data: void 0,
                    count: void 0,
                    error: void 0,
                    isLoading: !1,
                    isFetching: !1,
                    isError: !1,
                    page: void 0,
                    pageCount: void 0,
                    fetchPage: void 0,
                    fetchNext: void 0,
                    fetchPrevious: void 0,
                    hasNextPage: !1,
                    hasPreviousPage: !1,
                    revalidate: void 0,
                    setData: void 0
                },
                $ = e => {
                    var t, n, i;
                    let {
                        domains: o,
                        membershipRequests: s,
                        memberships: l,
                        invitations: a
                    } = e || {};
                    W("useOrganization");
                    let {
                        organization: u
                    } = T(), c = A(), d = B(o, {
                        initialPage: 1,
                        pageSize: 10,
                        keepPreviousData: !1,
                        infinite: !1,
                        enrollmentMode: void 0
                    }), h = B(s, {
                        initialPage: 1,
                        pageSize: 10,
                        status: "pending",
                        keepPreviousData: !1,
                        infinite: !1
                    }), p = B(l, {
                        initialPage: 1,
                        pageSize: 10,
                        role: void 0,
                        keepPreviousData: !1,
                        infinite: !1
                    }), f = B(a, {
                        initialPage: 1,
                        pageSize: 10,
                        status: ["pending"],
                        keepPreviousData: !1,
                        infinite: !1
                    }), g = _();
                    null == (t = g.telemetry) || t.record((0, r.J)("useOrganization"));
                    let m = void 0 === o ? void 0 : {
                            initialPage: d.initialPage,
                            pageSize: d.pageSize,
                            enrollmentMode: d.enrollmentMode
                        },
                        v = void 0 === s ? void 0 : {
                            initialPage: h.initialPage,
                            pageSize: h.pageSize,
                            status: h.status
                        },
                        k = void 0 === l ? void 0 : {
                            initialPage: p.initialPage,
                            pageSize: p.pageSize,
                            role: p.role
                        },
                        b = void 0 === a ? void 0 : {
                            initialPage: f.initialPage,
                            pageSize: f.pageSize,
                            status: f.status
                        },
                        y = D({ ...m
                        }, null == u ? void 0 : u.getDomains, {
                            keepPreviousData: d.keepPreviousData,
                            infinite: d.infinite,
                            enabled: !!m
                        }, {
                            type: "domains",
                            organizationId: null == u ? void 0 : u.id
                        }),
                        P = D({ ...v
                        }, null == u ? void 0 : u.getMembershipRequests, {
                            keepPreviousData: h.keepPreviousData,
                            infinite: h.infinite,
                            enabled: !!v
                        }, {
                            type: "membershipRequests",
                            organizationId: null == u ? void 0 : u.id
                        }),
                        S = D(k || {}, null == u ? void 0 : u.getMemberships, {
                            keepPreviousData: p.keepPreviousData,
                            infinite: p.infinite,
                            enabled: !!k
                        }, {
                            type: "members",
                            organizationId: null == u ? void 0 : u.id
                        }),
                        w = D({ ...b
                        }, null == u ? void 0 : u.getInvitations, {
                            keepPreviousData: f.keepPreviousData,
                            infinite: f.infinite,
                            enabled: !!b
                        }, {
                            type: "invitations",
                            organizationId: null == u ? void 0 : u.id
                        });
                    return void 0 === u ? {
                        isLoaded: !1,
                        organization: void 0,
                        membership: void 0,
                        domains: J,
                        membershipRequests: J,
                        memberships: J,
                        invitations: J
                    } : null === u ? {
                        isLoaded: !0,
                        organization: null,
                        membership: null,
                        domains: null,
                        membershipRequests: null,
                        memberships: null,
                        invitations: null
                    } : !g.loaded && u ? {
                        isLoaded: !0,
                        organization: u,
                        membership: void 0,
                        domains: J,
                        membershipRequests: J,
                        memberships: J,
                        invitations: J
                    } : {
                        isLoaded: g.loaded,
                        organization: u,
                        membership: (n = c.user.organizationMemberships, i = u.id, n.find(e => e.organization.id === i)),
                        domains: y,
                        membershipRequests: P,
                        memberships: S,
                        invitations: w
                    }
                },
                q = {
                    data: void 0,
                    count: void 0,
                    error: void 0,
                    isLoading: !1,
                    isFetching: !1,
                    isError: !1,
                    page: void 0,
                    pageCount: void 0,
                    fetchPage: void 0,
                    fetchNext: void 0,
                    fetchPrevious: void 0,
                    hasNextPage: !1,
                    hasPreviousPage: !1,
                    revalidate: void 0,
                    setData: void 0
                },
                G = e => {
                    var t;
                    let {
                        userMemberships: n,
                        userInvitations: i,
                        userSuggestions: o
                    } = e || {};
                    W("useOrganizationList");
                    let s = B(n, {
                            initialPage: 1,
                            pageSize: 10,
                            keepPreviousData: !1,
                            infinite: !1
                        }),
                        l = B(i, {
                            initialPage: 1,
                            pageSize: 10,
                            status: "pending",
                            keepPreviousData: !1,
                            infinite: !1
                        }),
                        a = B(o, {
                            initialPage: 1,
                            pageSize: 10,
                            status: "pending",
                            keepPreviousData: !1,
                            infinite: !1
                        }),
                        u = _(),
                        c = M();
                    null == (t = u.telemetry) || t.record((0, r.J)("useOrganizationList"));
                    let d = void 0 === n ? void 0 : {
                            initialPage: s.initialPage,
                            pageSize: s.pageSize
                        },
                        h = void 0 === i ? void 0 : {
                            initialPage: l.initialPage,
                            pageSize: l.pageSize,
                            status: l.status
                        },
                        p = void 0 === o ? void 0 : {
                            initialPage: a.initialPage,
                            pageSize: a.pageSize,
                            status: a.status
                        },
                        f = !!(u.loaded && c),
                        g = D(d || {}, null == c ? void 0 : c.getOrganizationMemberships, {
                            keepPreviousData: s.keepPreviousData,
                            infinite: s.infinite,
                            enabled: !!d
                        }, {
                            type: "userMemberships",
                            userId: null == c ? void 0 : c.id
                        }),
                        m = D({ ...h
                        }, null == c ? void 0 : c.getOrganizationInvitations, {
                            keepPreviousData: l.keepPreviousData,
                            infinite: l.infinite,
                            enabled: !!h
                        }, {
                            type: "userInvitations",
                            userId: null == c ? void 0 : c.id
                        }),
                        v = D({ ...p
                        }, null == c ? void 0 : c.getOrganizationSuggestions, {
                            keepPreviousData: a.keepPreviousData,
                            infinite: a.infinite,
                            enabled: !!p
                        }, {
                            type: "userSuggestions",
                            userId: null == c ? void 0 : c.id
                        });
                    return f ? {
                        isLoaded: f,
                        setActive: u.setActive,
                        createOrganization: u.createOrganization,
                        userMemberships: g,
                        userInvitations: m,
                        userSuggestions: v
                    } : {
                        isLoaded: !1,
                        createOrganization: void 0,
                        setActive: void 0,
                        userMemberships: q,
                        userInvitations: q,
                        userSuggestions: q
                    }
                };
            "undefined" != typeof window ? o.useLayoutEffect : o.useEffect;
            var K = () => {
                    W("useSession");
                    let e = A();
                    return void 0 === e ? {
                        isLoaded: !1,
                        isSignedIn: void 0,
                        session: void 0
                    } : null === e ? {
                        isLoaded: !0,
                        isSignedIn: !1,
                        session: null
                    } : {
                        isLoaded: !0,
                        isSignedIn: !0,
                        session: e
                    }
                },
                V = () => {
                    W("useSessionList");
                    let e = _(),
                        t = I();
                    return t ? {
                        isLoaded: !0,
                        sessions: t.sessions,
                        setActive: e.setActive
                    } : {
                        isLoaded: !1,
                        sessions: void 0,
                        setActive: void 0
                    }
                };

            function Y() {
                W("useUser");
                let e = M();
                return void 0 === e ? {
                    isLoaded: !1,
                    isSignedIn: void 0,
                    user: void 0
                } : null === e ? {
                    isLoaded: !0,
                    isSignedIn: !1,
                    user: null
                } : {
                    isLoaded: !0,
                    isSignedIn: !0,
                    user: e
                }
            }
            var H = () => (W("useClerk"), _()),
                Q = Object.prototype.hasOwnProperty;

            function X(e, t, n) {
                for (n of e.keys())
                    if (Z(n, t)) return n
            }

            function Z(e, t) {
                var n, r, i;
                if (e === t) return !0;
                if (e && t && (n = e.constructor) === t.constructor) {
                    if (n === Date) return e.getTime() === t.getTime();
                    if (n === RegExp) return e.toString() === t.toString();
                    if (n === Array) {
                        if ((r = e.length) === t.length)
                            for (; r-- && Z(e[r], t[r]););
                        return -1 === r
                    }
                    if (n === Set) {
                        if (e.size !== t.size) return !1;
                        for (r of e)
                            if ((i = r) && "object" == typeof i && !(i = X(t, i)) || !t.has(i)) return !1;
                        return !0
                    }
                    if (n === Map) {
                        if (e.size !== t.size) return !1;
                        for (r of e)
                            if ((i = r[0]) && "object" == typeof i && !(i = X(t, i)) || !Z(r[1], t.get(i))) return !1;
                        return !0
                    }
                    if (n === ArrayBuffer) e = new Uint8Array(e), t = new Uint8Array(t);
                    else if (n === DataView) {
                        if ((r = e.byteLength) === t.byteLength)
                            for (; r-- && e.getInt8(r) === t.getInt8(r););
                        return -1 === r
                    }
                    if (ArrayBuffer.isView(e)) {
                        if ((r = e.byteLength) === t.byteLength)
                            for (; r-- && e[r] === t[r];);
                        return -1 === r
                    }
                    if (!n || "object" == typeof e) {
                        for (n in r = 0, e)
                            if (Q.call(e, n) && ++r && !Q.call(t, n) || !(n in t) || !Z(e[n], t[n])) return !1;
                        return Object.keys(t).length === r
                    }
                }
                return e != e && t != t
            }
            var ee = Z
        }
    }
]);