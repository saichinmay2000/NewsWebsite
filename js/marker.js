google.maps.__gjsload__("marker", function(_) {
    var aU,
        bU,
        cU,
        dU,
        eU,
        fU,
        hU,
        kU,
        iU,
        lU,
        jU,
        pU,
        qU,
        nU,
        rU,
        tU,
        wU,
        uU,
        xU,
        zU,
        yU,
        AU,
        BU,
        CU,
        DU,
        OU,
        EU,
        LU,
        JU,
        MU,
        FU,
        QU,
        KU,
        PU,
        GU,
        NU,
        HU,
        IU,
        ZU,
        UU,
        VU,
        WU,
        XU,
        YU,
        aaa,
        baa,
        caa,
        $U,
        aV,
        TU,
        cV,
        bV,
        dV,
        fV,
        eV,
        eaa,
        faa,
        gV,
        hV,
        gaa,
        jV,
        iV,
        kV,
        haa,
        lV,
        mV,
        iaa,
        oV,
        nV,
        qV,
        kaa,
        laa,
        jaa,
        pV,
        naa,
        maa,
        rV,
        oaa,
        sV;
    aU = function(a) {
        var b = 1;
        return function() {
            --b || a();
        };
    };
    bU = function(a, b) {
        _.My().vb.load(new _.nE(a), function(c) {
            b(c && c.size);
        });
    };
    cU = function(a) {
        this.j = a;
        this.i = !1;
    };
    dU = function(a, b) {
        if (!b) return null;
        var c = a.get("snappingCallback");
        c && (b = c(b));
        c = b.x;
        b = b.y;
        var d = a.get("referencePosition");
        d && (2 == a.j ? (c = d.x) : 1 == a.j && (b = d.y));
        return new _.O(c, b);
    };
    Animation = function(a) {
        this.i = a;
        this.j = "";
    };
    eU = function(a, b) {
        var c = [];
        c.push("@-webkit-keyframes ", b, " {\n");
        _.B(a.i, function(d) {
            c.push(100 * d.time + "% { ");
            c.push(
                "-webkit-transform: translate3d(" + d.translate[0] + "px,",
                d.translate[1] + "px,0); "
            );
            c.push("-webkit-animation-timing-function: ", d.vc, "; ");
            c.push("}\n");
        });
        c.push("}\n");
        return c.join("");
    };
    fU = function(a, b) {
        for (var c = 0; c < a.i.length - 1; c++) {
            var d = a.i[c + 1];
            if (b >= a.i[c].time && b < d.time) return c;
        }
        return a.i.length - 1;
    };
    hU = function(a) {
        if (a.j) return a.j;
        a.j = "_gm" + Math.round(1e4 * Math.random());
        var b = eU(a, a.j);
        if (!gU) {
            gU = _.Lc("style");
            gU.type = "text/css";
            var c = document;
            c =
                c.querySelectorAll && c.querySelector ?
                c.querySelectorAll("HEAD") :
                c.getElementsByTagName("HEAD");
            c[0].appendChild(gU);
        }
        gU.textContent += b;
        return a.j;
    };
    kU = function(a, b, c) {
        var d, e;
        if ((e = 0 != c.Fj))
            e =
            5 == _.xl.i.i ||
            6 == _.xl.i.i ||
            (3 == _.xl.i.type && _.$m(_.xl.i.version, 7));
        e ? (d = new iU(a, b, c)) : (d = new jU(a, b, c));
        d.start();
        return d;
    };
    iU = function(a, b, c) {
        this.Cb = a;
        this.o = b;
        this.i = c;
        this.j = !1;
    };
    lU = function(a, b, c) {
        _.on(function() {
            a.style.WebkitAnimationDuration = c.duration ? c.duration + "ms" : null;
            a.style.WebkitAnimationIterationCount = c.wd;
            a.style.WebkitAnimationName = b;
        });
    };
    jU = function(a, b, c) {
        this.Cb = a;
        this.H = b;
        this.j = -1;
        "infinity" != c.wd && (this.j = c.wd || 1);
        this.T = c.duration || 1e3;
        this.i = !1;
        this.o = 0;
    };
    pU = function() {
        for (var a = [], b = 0; b < mU.length; b++) {
            var c = mU[b];
            nU(c);
            c.i || a.push(c);
        }
        mU = a;
        0 == mU.length && (window.clearInterval(oU), (oU = null));
    };
    qU = function(a) {
        return a ? a.__gm_at || _.Pk : null;
    };
    nU = function(a) {
        if (!a.i) {
            var b = _.mn();
            rU(a, (b - a.o) / a.T);
            b >= a.o + a.T &&
                ((a.o = _.mn()), "infinite" != a.j && (a.j--, a.j || a.cancel()));
        }
    };
    rU = function(a, b) {
        var c = 1,
            d = a.H;
        var e = d.i[fU(d, b)];
        var f;
        d = a.H;
        (f = d.i[fU(d, b) + 1]) && (c = (b - e.time) / (f.time - e.time));
        b = qU(a.Cb);
        d = a.Cb;
        f
            ?
            ((c = (0, sU[e.vc || "linear"])(c)),
                (e = e.translate),
                (f = f.translate),
                (c = new _.O(
                    Math.round(c * f[0] - c * e[0] + e[0]),
                    Math.round(c * f[1] - c * e[1] + e[1])
                ))) :
            (c = new _.O(e.translate[0], e.translate[1]));
        c = d.__gm_at = c;
        d = c.x - b.x;
        b = c.y - b.y;
        if (0 != d || 0 != b)
            (c = a.Cb),
            (e = new _.O(_.Ky(c.style.left) || 0, _.Ky(c.style.top) || 0)),
            (e.x += d),
            (e.y += b),
            _.No(c, e);
        _.K.trigger(a, "tick");
    };
    tU = function() {
        this.icon = {
            url: _.op("api-3/images/spotlight-poi2", !0),
            scaledSize: new _.P(27, 43),
            origin: new _.O(0, 0),
            anchor: new _.O(14, 43),
            labelOrigin: new _.O(14, 15),
        };
        this.j = {
            url: _.op("api-3/images/spotlight-poi-dotless2", !0),
            scaledSize: new _.P(27, 43),
            origin: new _.O(0, 0),
            anchor: new _.O(14, 43),
            labelOrigin: new _.O(14, 15),
        };
        this.i = {
            url: _.op("api-3/images/drag-cross", !0),
            scaledSize: new _.P(13, 11),
            origin: new _.O(0, 0),
            anchor: new _.O(7, 6),
        };
        this.shape = {
            coords: [13.5, 0, 4, 3.75, 0, 13.5, 13.5, 43, 27, 13.5, 23, 3.75],
            type: "poly",
        };
    };
    wU = function(a, b) {
        var c = this;
        this.j = a;
        this.i = b;
        this.Ma = new _.vi(function() {
            var d = c.get("modelIcon"),
                e = c.get("modelLabel");
            uU(c, "viewIcon", d || (e && vU.j) || vU.icon);
            uU(c, "viewCross", vU.i);
            e = c.get("useDefaults");
            var f = c.get("modelShape");
            f || (d && !e) || (f = vU.shape);
            c.get("viewShape") != f && c.set("viewShape", f);
        }, 0);
        vU || (vU = new tU());
    };
    uU = function(a, b, c) {
        xU(a, c, function(d) {
            a.set(b, d);
            "viewIcon" === b &&
                d &&
                d.size &&
                a.i &&
                a.i(d.size, d.anchor, d.labelOrigin);
            d = a.get("modelLabel");
            a.set(
                "viewLabel",
                d ?
                {
                    text: d.text || d,
                    color: _.fe(d.color, "#000000"),
                    fontWeight: _.fe(d.fontWeight, ""),
                    fontSize: _.fe(d.fontSize, "14px"),
                    fontFamily: _.fe(d.fontFamily, "Roboto,Arial,sans-serif"),
                } :
                null
            );
        });
    };
    xU = function(a, b, c) {
        b
            ?
            b instanceof _.$g ?
            c(b) :
            null != b.path ?
            c(a.j(b)) :
            (_.je(b) || (b.size = b.size || b.scaledSize),
                b.size ?
                c(b) :
                (b.url || (b = { url: b }),
                    bU(b.url, function(d) {
                        b.size = d || new _.P(24, 24);
                        c(b);
                    }))) :
            c(null);
    };
    zU = function() {
        this.i = yU(this);
        this.set("shouldRender", this.i);
        this.j = !1;
    };
    yU = function(a) {
        var b = a.get("mapPixelBoundsQ"),
            c = a.get("icon"),
            d = a.get("position");
        if (!b || !c || !d) return 0 != a.get("visible");
        var e = c.anchor || _.Pk,
            f = c.size.width + Math.abs(e.x);
        c = c.size.height + Math.abs(e.y);
        return d.x > b.La - f && d.y > b.Ia - c && d.x < b.Qa + f && d.y < b.Oa + c ?
            0 != a.get("visible") :
            !1;
    };
    AU = function(a) {
        this.j = a;
        this.i = !1;
    };
    BU = function(a, b, c, d, e) {
        this.$ = c;
        this.o = a;
        this.H = b;
        this.ta = d;
        this.Ja = 0;
        this.j = null;
        this.i = new _.vi(this.km, 0, this);
        this.W = e;
        this.T = this.ua = null;
    };
    CU = function(a, b) {
        a.ka = b;
        _.wi(a.i);
    };
    DU = function(a) {
        a.j && (_.so(a.j), (a.j = null));
    };
    OU = function(a, b, c) {
        var d = this;
        this.Ma = new _.vi(function() {
            var e = d.get("panes"),
                f = d.get("scale");
            if (!e ||
                !d.getPosition() ||
                0 == d.rm() ||
                (_.he(f) && 0.1 > f && !d.get("dragging"))
            )
                EU(d);
            else {
                var g = e.markerLayer;
                if ((f = d.Cg())) {
                    var h = null != f.url;
                    d.i && d.Jc == h && (_.so(d.i), (d.i = null));
                    d.Jc = !h;
                    d.i = FU(d, g, d.i, f);
                    g = GU(d);
                    h = HU(f);
                    d.mc.width = g * h.width;
                    d.mc.height = g * h.height;
                    d.set("size", d.mc);
                    var k = d.get("anchorPoint");
                    if (!k || k.i)
                        (f = IU(f)),
                        (d.Pa.x = g * (f ? h.width / 2 - f.x : 0)),
                        (d.Pa.y = -g * (f ? f.y : h.height)),
                        (d.Pa.i = !0),
                        d.set("anchorPoint", d.Pa);
                }
                if (!d.ya) {
                    var l = d.Cg();
                    if (
                        l &&
                        ((f = 0 != d.get("clickable")), (g = d.getDraggable()), f || g)
                    ) {
                        k = l.url || _.yu;
                        h = {};
                        if (_.Do()) {
                            var m = HU(l);
                            l = IU(l);
                            var q = m.width;
                            m = m.height;
                            var r = new _.P(q + 16, m + 16);
                            l = {
                                url: k,
                                size: r,
                                anchor: l ?
                                    new _.O(l.x + 8, l.y + 8) :
                                    new _.O(Math.round(q / 2) + 8, m + 8),
                                scaledSize: r,
                            };
                        } else if (_.tj.j || _.tj.o)
                            if (((h.shape = d.get("shape")), h.shape || null != l.Tf))
                                (q = l.scaledSize || l.size),
                                (l = { url: k, size: q, anchor: l.anchor, scaledSize: q });
                        k = null != l.url;
                        d.Lc == k && JU(d);
                        d.Lc = !k;
                        h = d.W = FU(d, d.getPanes().overlayMouseTarget, d.W, l, h);
                        _.tz(h, 0);
                        k = h;
                        if (
                            (l =
                                k.getAttribute("usemap") ||
                                (k.firstChild && k.firstChild.getAttribute("usemap"))) &&
                            l.length &&
                            (k = _.Io(k).getElementById(l.substr(1)))
                        )
                            var u = k.firstChild;
                        h = u || h;
                        h.title = d.get("title") || "";
                        g &&
                            !d.T &&
                            ((u = d.T = new _.xF(h, d.lc, d.W)),
                                d.lc ?
                                (u.bindTo("deltaClientPosition", d), u.bindTo("position", d)) :
                                u.bindTo("position", d.Wa, "rawPosition"),
                                u.bindTo("containerPixelBounds", d, "mapPixelBounds"),
                                u.bindTo("anchorPoint", d),
                                u.bindTo("size", d),
                                u.bindTo("panningEnabled", d),
                                u &&
                                !d.Sa &&
                                (d.Sa = [
                                    _.K.forward(u, "dragstart", d),
                                    _.K.forward(u, "drag", d),
                                    _.K.forward(u, "dragend", d),
                                    _.K.forward(u, "panbynow", d),
                                ]));
                        u = d.get("cursor") || "pointer";
                        g ? d.T.set("draggableCursor", u) : _.sz(h, f ? u : "");
                        KU(d, h);
                    }
                }
                e = e.overlayLayer;
                if ((f = u = d.get("cross")))
                    (f = d.get("crossOnDrag")),
                    void 0 === f && (f = d.get("raiseOnDrag")),
                    (f = 0 != f && d.getDraggable() && d.get("dragging"));
                f ? (d.o = FU(d, e, d.o, u)) : (d.o && _.so(d.o), (d.o = null));
                d.ka = [d.i, d.o, d.W];
                LU(d);
                for (e = 0; e < d.ka.length; ++e)
                    if ((f = d.ka[e]))
                        (u = f),
                        (g = f.i),
                        (h = qU(f) || _.Pk),
                        (f = GU(d)),
                        (g = MU(d, g, f, h)),
                        _.No(u, g),
                        (g = _.xl.j) && (u.style[g] = 1 != f ? "scale(" + f + ") " : ""),
                        (f = d.get("zIndex")),
                        d.get("dragging") && (f = 1e6),
                        _.he(f) || (f = Math.min(d.getPosition().y, 999999)),
                        _.Po(u, f),
                        d.H && d.H.setZIndex(f);
                NU(d);
                for (e = 0; e < d.ka.length; ++e)(u = d.ka[e]) && _.pz(u);
            }
        }, 0);
        this.sd = a;
        this.rd = c;
        this.lc = b || !1;
        this.Wa = new cU(0);
        this.Wa.bindTo("position", this);
        this.H = this.i = null;
        this.Mc = [];
        this.Jc = !1;
        this.W = null;
        this.Lc = !1;
        this.o = null;
        this.ka = [];
        this.Yb = new _.O(0, 0);
        this.mc = new _.P(0, 0);
        this.Pa = new _.O(0, 0);
        this.Bb = !0;
        this.ya = 0;
        this.j = this.Kc = this.Wc = this.Nc = null;
        this.Mb = !1;
        this.Ic = [
            _.K.addListener(this, "dragstart", this.tm),
            _.K.addListener(this, "dragend", this.sm),
            _.K.addListener(this, "panbynow", function() {
                return d.Ma.Nb();
            }),
        ];
        this.Cb = this.ua = this.ta = this.T = this.$ = this.Sa = null;
    };
    EU = function(a) {
        a.H && (PU(a.Mc), a.H.release(), (a.H = null));
        a.i && _.so(a.i);
        a.i = null;
        a.o && _.so(a.o);
        a.o = null;
        JU(a);
        a.ka = [];
    };
    LU = function(a) {
        var b = a.rl();
        if (b) {
            if (!a.H) {
                var c = (a.H = new BU(
                    a.getPanes(),
                    b,
                    a.get("opacity"),
                    a.get("visible"),
                    a.rd
                ));
                a.Mc = [
                    _.K.addListener(a, "label_changed", function() {
                        c.setLabel(this.get("label"));
                    }),
                    _.K.addListener(a, "opacity_changed", function() {
                        c.setOpacity(this.get("opacity"));
                    }),
                    _.K.addListener(a, "panes_changed", function() {
                        var f = this.get("panes");
                        c.o = f;
                        DU(c);
                        _.wi(c.i);
                    }),
                    _.K.addListener(a, "visible_changed", function() {
                        c.setVisible(this.get("visible"));
                    }),
                ];
            }
            b = a.Cg();
            a.getPosition();
            if (b) {
                var d = a.i,
                    e = GU(a);
                d = MU(a, b, e, qU(d) || _.Pk);
                e = HU(b);
                b = b.labelOrigin || new _.O(e.width / 2, e.height / 2);
                CU(a.H, new _.O(d.x + b.x, d.y + b.y));
                a.H.i.Nb();
            }
        }
    };
    JU = function(a) {
        a.ya ?
            (a.Mb = !0) :
            (a.W && _.so(a.W),
                (a.W = null),
                a.T &&
                (a.T.unbindAll(),
                    a.T.release(),
                    (a.T = null),
                    PU(a.Sa),
                    (a.Sa = null)),
                a.ta && a.ta.remove(),
                a.ua && a.ua.remove());
    };
    MU = function(a, b, c, d) {
        var e = a.getPosition(),
            f = HU(b),
            g = (b = IU(b)) ? b.x : f.width / 2;
        a.Yb.x = e.x + d.x - Math.round(g - (g - f.width / 2) * (1 - c));
        b = b ? b.y : f.height;
        a.Yb.y = e.y + d.y - Math.round(b - (b - f.height / 2) * (1 - c));
        return a.Yb;
    };
    FU = function(a, b, c, d, e) {
        if (d instanceof _.$g) a = QU(a, b, c, d);
        else if (null != d.url) {
            var f = e;
            e = d.origin || _.Pk;
            var g = a.get("opacity");
            a = _.fe(g, 1);
            c
                ?
                (c.firstChild.__src__ != d.url &&
                    ((b = c.firstChild), _.FE(b, d.url, b.o)),
                    _.JE(c, d.size, e, d.scaledSize),
                    (c.firstChild.style.opacity = a)) :
                ((f = f || {}),
                    (f.j = 1 != _.tj.type),
                    (f.alpha = !0),
                    (f.opacity = g),
                    (c = _.IE(d.url, null, e, d.size, null, d.scaledSize, f)),
                    _.oz(c),
                    b.appendChild(c));
            a = c;
        } else
            (b = c || _.Oo("div", b)),
            RU(b, d),
            (c = b),
            (a = a.get("opacity")),
            _.tz(c, _.fe(a, 1)),
            (a = b);
        c = a;
        c.i = d;
        return c;
    };
    QU = function(a, b, c, d) {
        c = c || _.Oo("div", b);
        _.Ji(c);
        c.appendChild(
            b === a.getPanes().overlayMouseTarget ?
            d.element.cloneNode(!0) :
            d.element
        );
        b = d.Ya();
        c.style.width = b.width + (b.j || "px");
        c.style.height = b.height + (b.i || "px");
        c.style.pointerEvents = "none";
        c.style.userSelect = "none";
        _.K.addListenerOnce(d, "changed", function() {
            a.Bc();
        });
        return c;
    };
    KU = function(a, b) {
        (a.ta && a.ua && a.Cb == b) ||
        ((a.Cb = b),
            a.ta && a.ta.remove(),
            a.ua && a.ua.remove(),
            (a.ta = _.eq(b, {
                Hb: function(c) {
                    a.ya++;
                    _.up(c);
                    _.K.trigger(a, "mousedown", c.Ta);
                },
                Lb: function(c) {
                    a.ya--;
                    !a.ya &&
                        a.Mb &&
                        _.Ny(
                            this,
                            function() {
                                a.Mb = !1;
                                JU(a);
                                a.Ma.Nb();
                            },
                            0
                        );
                    _.wp(c);
                    _.K.trigger(a, "mouseup", c.Ta);
                },
                onClick: function(c) {
                    var d = c.event;
                    c = c.Od;
                    _.xp(d);
                    3 == d.button ?
                        c || _.K.trigger(a, "rightclick", d.Ta) :
                        c ?
                        _.K.trigger(a, "dblclick", d.Ta) :
                        _.K.trigger(a, "click", d.Ta);
                },
            })),
            (a.ua = new _.Jt(b, b, {
                Xe: function(c) {
                    _.K.trigger(a, "mouseout", c);
                },
                Ye: function(c) {
                    _.K.trigger(a, "mouseover", c);
                },
            })));
    };
    PU = function(a) {
        if (a)
            for (var b = 0, c = a.length; b < c; b++) _.K.removeListener(a[b]);
    };
    GU = function(a) {
        return _.xl.j ? Math.min(1, a.get("scale") || 1) : 1;
    };
    NU = function(a) {
        if (!a.Bb) {
            a.j && (a.$ && _.K.removeListener(a.$), a.j.cancel(), (a.j = null));
            var b = a.get("animation");
            if ((b = SU[b])) {
                var c = b.options;
                a.i &&
                    ((a.Bb = !0),
                        a.set("animating", !0),
                        (b = kU(a.i, b.icon, c)),
                        (a.j = b),
                        (a.$ = _.K.addListenerOnce(b, "done", function() {
                            a.set("animating", !1);
                            a.j = null;
                            a.set("animation", null);
                        })));
            }
        }
    };
    HU = function(a) {
        return a instanceof _.$g ? a.Ya() : a.size;
    };
    IU = function(a) {
        return a instanceof _.$g ? a.getAnchor() : a.anchor;
    };
    ZU = function(a, b, c, d, e) {
        var f = this;
        this.Jb = b;
        this.i = a;
        this.ya = e;
        this.ka = b instanceof _.zg;
        a = TU(this);
        b = this.ka && a ? _.On(a, b.getProjection()) : null;
        this.j = new OU(d, !!this.ka, void 0);
        this.ta = !0;
        this.ua = this.Ja = null;
        (this.o = this.ka ?
            new _.bz(e.j, this.j, b, e, function() {
                if (f.j.get("dragging") && !f.i.get("place")) {
                    var g = f.o.getPosition();
                    g &&
                        ((g = _.Pn(g, f.Jb.get("projection"))),
                            (f.ta = !1),
                            f.i.set("position", g),
                            (f.ta = !0));
                }
            }) :
            null) && e.yc(this.o);
        this.H = new wU(c, void 0);
        this.Ra = this.ka ? null : new _.aF();
        this.W = this.ka ? null : new zU();
        this.$ = new _.L();
        this.$.bindTo("position", this.i);
        this.$.bindTo("place", this.i);
        this.$.bindTo("draggable", this.i);
        this.$.bindTo("dragging", this.i);
        this.H.bindTo("modelIcon", this.i, "icon");
        this.H.bindTo("modelLabel", this.i, "label");
        this.H.bindTo("modelCross", this.i, "cross");
        this.H.bindTo("modelShape", this.i, "shape");
        this.H.bindTo("useDefaults", this.i, "useDefaults");
        this.j.bindTo("icon", this.H, "viewIcon");
        this.j.bindTo("label", this.H, "viewLabel");
        this.j.bindTo("cross", this.H, "viewCross");
        this.j.bindTo("shape", this.H, "viewShape");
        this.j.bindTo("title", this.i);
        this.j.bindTo("cursor", this.i);
        this.j.bindTo("dragging", this.i);
        this.j.bindTo("clickable", this.i);
        this.j.bindTo("zIndex", this.i);
        this.j.bindTo("opacity", this.i);
        this.j.bindTo("anchorPoint", this.i);
        this.j.bindTo("animation", this.i);
        this.j.bindTo("crossOnDrag", this.i);
        this.j.bindTo("raiseOnDrag", this.i);
        this.j.bindTo("animating", this.i);
        this.W || this.j.bindTo("visible", this.i);
        UU(this);
        VU(this);
        this.T = [];
        WU(this);
        this.ka ?
            (XU(this), YU(this), aaa(this)) :
            (baa(this),
                this.Ra &&
                (this.W.bindTo("visible", this.i),
                    this.W.bindTo("cursor", this.i),
                    this.W.bindTo("icon", this.i),
                    this.W.bindTo("icon", this.H, "viewIcon"),
                    this.W.bindTo("mapPixelBoundsQ", this.Jb.__gm, "pixelBoundsQ"),
                    this.W.bindTo("position", this.Ra, "pixelPosition"),
                    this.j.bindTo("visible", this.W, "shouldRender")),
                caa(this));
    };
    UU = function(a) {
        var b = a.Jb.__gm;
        a.j.bindTo("mapPixelBounds", b, "pixelBounds");
        a.j.bindTo("panningEnabled", a.Jb, "draggable");
        a.j.bindTo("panes", b);
    };
    VU = function(a) {
        var b = a.Jb.__gm;
        _.K.addListener(a.$, "dragging_changed", function() {
            b.set("markerDragging", a.i.get("dragging"));
        });
        b.set("markerDragging", b.get("markerDragging") || a.i.get("dragging"));
    };
    WU = function(a) {
        a.T.push(_.K.forward(a.j, "panbynow", a.Jb.__gm));
        _.B(daa, function(b) {
            a.T.push(
                _.K.addListener(a.j, b, function(c) {
                    var d = a.ka ? TU(a) : a.i.get("internalPosition");
                    c = new _.un(d, c, a.j.get("position"));
                    _.K.trigger(a.i, b, c);
                })
            );
        });
    };
    XU = function(a) {
        function b() {
            a.i.get("place") ?
                a.j.set("draggable", !1) :
                a.j.set("draggable", !!a.i.get("draggable"));
        }
        a.T.push(_.K.addListener(a.$, "draggable_changed", b));
        a.T.push(_.K.addListener(a.$, "place_changed", b));
        b();
    };
    YU = function(a) {
        a.T.push(
            _.K.addListener(a.Jb, "projection_changed", function() {
                return $U(a);
            })
        );
        a.T.push(
            _.K.addListener(a.$, "position_changed", function() {
                return $U(a);
            })
        );
        a.T.push(
            _.K.addListener(a.$, "place_changed", function() {
                return $U(a);
            })
        );
    };
    aaa = function(a) {
        a.T.push(
            _.K.addListener(a.j, "dragging_changed", function() {
                if (a.j.get("dragging"))(a.Ja = _.cz(a.o)), a.Ja && _.dz(a.o, a.Ja);
                else {
                    a.Ja = null;
                    a.ua = null;
                    var b = a.o.getPosition();
                    if (b && ((b = _.Pn(b, a.Jb.get("projection"))), (b = aV(a, b)))) {
                        var c = _.On(b, a.Jb.get("projection"));
                        a.i.get("place") ||
                            ((a.ta = !1), a.i.set("position", b), (a.ta = !0));
                        a.o.setPosition(c);
                    }
                }
            })
        );
        a.T.push(
            _.K.addListener(a.j, "deltaclientposition_changed", function() {
                var b = a.j.get("deltaClientPosition");
                if (b && (a.Ja || a.ua)) {
                    var c = a.ua || a.Ja;
                    a.ua = {
                        clientX: c.clientX + b.clientX,
                        clientY: c.clientY + b.clientY,
                    };
                    b = a.ya.Tc(a.ua);
                    b = _.Pn(b, a.Jb.get("projection"));
                    c = a.ua;
                    var d = aV(a, b);
                    d &&
                        (a.i.get("place") ||
                            ((a.ta = !1), a.i.set("position", d), (a.ta = !0)),
                            d.equals(b) ||
                            ((b = _.On(d, a.Jb.get("projection"))), (c = _.cz(a.o, b))));
                    c && _.dz(a.o, c);
                }
            })
        );
    };
    baa = function(a) {
        if (a.Ra) {
            a.j.bindTo("scale", a.Ra);
            a.j.bindTo("position", a.Ra, "pixelPosition");
            var b = a.Jb.__gm;
            a.Ra.bindTo("latLngPosition", a.i, "internalPosition");
            a.Ra.bindTo("focus", a.Jb, "position");
            a.Ra.bindTo("zoom", b);
            a.Ra.bindTo("offset", b);
            a.Ra.bindTo("center", b, "projectionCenterQ");
            a.Ra.bindTo("projection", a.Jb);
        }
    };
    caa = function(a) {
        if (a.Ra) {
            var b = new AU(a.Jb instanceof _.vg);
            b.bindTo("internalPosition", a.Ra, "latLngPosition");
            b.bindTo("place", a.i);
            b.bindTo("position", a.i);
            b.bindTo("draggable", a.i);
            a.j.bindTo("draggable", b, "actuallyDraggable");
        }
    };
    $U = function(a) {
        if (a.ta) {
            var b = TU(a);
            b && a.o.setPosition(_.On(b, a.Jb.get("projection")));
        }
    };
    aV = function(a, b) {
        var c = a.Jb.__gm.get("snappingCallback");
        return c && (a = c({ latLng: b, overlay: a.i })) ? a : b;
    };
    TU = function(a) {
        var b = a.i.get("place");
        a = a.i.get("position");
        return (b && b.location) || a;
    };
    cV = function(a, b, c) {
        if (b instanceof _.zg) {
            var d = b.__gm;
            Promise.all([d.i, d.ka]).then(function(e) {
                e = _.Aa(e);
                var f = e.next().value.nb;
                e.next();
                bV(a, b, c, f);
            });
        } else bV(a, b, c, null);
    };
    bV = function(a, b, c, d) {
        function e(f) {
            var g = b instanceof _.zg,
                h = g ? f.__gm.Dd.map : f.__gm.Dd.streetView,
                k = h && h.Jb == b,
                l = k != a.contains(f);
            h &&
                l &&
                (g ?
                    (f.__gm.Dd.map.dispose(), (f.__gm.Dd.map = null)) :
                    (f.__gm.Dd.streetView.dispose(), (f.__gm.Dd.streetView = null)));
            !a.contains(f) ||
                (!g && f.get("mapOnly")) ||
                k ||
                (b instanceof _.zg ?
                    (f.__gm.Dd.map = new ZU(f, b, c, _.GF(b.__gm, f), d)) :
                    (f.__gm.Dd.streetView = new ZU(f, b, c, _.sb, null)));
        }
        _.K.addListener(a, "insert", e);
        _.K.addListener(a, "remove", e);
        a.forEach(e);
    };
    dV = function(a, b, c, d) {
        this.T = a;
        this.W = b;
        this.H = c;
        this.j = d;
    };
    fV = function(a) {
        if (!a.i) {
            var b = a.T,
                c = b.ownerDocument.createElement("canvas");
            _.Qo(c);
            c.style.position = "absolute";
            c.style.top = c.style.left = "0";
            var d = c.getContext("2d"),
                e = eV(d),
                f = a.j.size;
            c.width = Math.ceil(f.va * e);
            c.height = Math.ceil(f.Aa * e);
            c.style.width = _.Q(f.va);
            c.style.height = _.Q(f.Aa);
            b.appendChild(c);
            a.i = c.context = d;
        }
        return a.i;
    };
    eV = function(a) {
        return (
            _.ro() /
            (a.webkitBackingStorePixelRatio ||
                a.mozBackingStorePixelRatio ||
                a.msBackingStorePixelRatio ||
                a.oBackingStorePixelRatio ||
                a.backingStorePixelRatio ||
                1)
        );
    };
    eaa = function(a, b, c) {
        a = a.H;
        a.width = b;
        a.height = c;
        return a;
    };
    faa = function(a) {
        var b = gV(a),
            c = fV(a),
            d = eV(c);
        a = a.j.size;
        c.clearRect(0, 0, Math.ceil(a.va * d), Math.ceil(a.Aa * d));
        b.forEach(function(e) {
            c.globalAlpha = _.fe(e.opacity, 1);
            c.drawImage(
                e.image,
                e.$,
                e.ka,
                e.W,
                e.T,
                Math.round(e.i * d),
                Math.round(e.j * d),
                e.H * d,
                e.o * d
            );
        });
    };
    gV = function(a) {
        var b = [];
        a.W.forEach(function(c) {
            b.push(c);
        });
        b.sort(function(c, d) {
            return c.zIndex - d.zIndex;
        });
        return b;
    };
    hV = function() {
        this.i = _.My().vb;
    };
    gaa = function(a, b, c) {
        var d = this;
        this.T = b;
        this.i = c;
        this.Ha = {};
        this.j = {};
        this.H = 0;
        this.o = !0;
        var e = {
            animating: 1,
            animation: 1,
            attribution: 1,
            clickable: 1,
            cursor: 1,
            draggable: 1,
            flat: 1,
            icon: 1,
            label: 1,
            opacity: 1,
            optimized: 1,
            place: 1,
            position: 1,
            shape: 1,
            __gmHiddenByCollision: 1,
            title: 1,
            visible: 1,
            zIndex: 1,
        };
        this.W = function(g) {
            g in e && (delete this.changed, (d.j[_.Re(this)] = this), iV(d));
        };
        a.i = function(g) {
            jV(d, g);
        };
        a.onRemove = function(g) {
            delete g.changed;
            delete d.j[_.Re(g)];
            d.T.remove(g);
            d.i.remove(g);
            _.Wo("Om", "-p", g);
            _.Wo("Om", "-v", g);
            _.Wo("Smp", "-p", g);
            _.K.removeListener(d.Ha[_.Re(g)]);
            delete d.Ha[_.Re(g)];
        };
        a = a.j;
        for (var f in a) jV(this, a[f]);
    };
    jV = function(a, b) {
        a.j[_.Re(b)] = b;
        iV(a);
    };
    iV = function(a) {
        a.H ||
            (a.H = _.on(function() {
                a.H = 0;
                var b = a.j;
                a.j = {};
                var c = a.o,
                    d;
                for (d in b) kV(a, b[d]);
                c &&
                    !a.o &&
                    a.i.forEach(function(e) {
                        kV(a, e);
                    });
            }));
    };
    kV = function(a, b) {
        var c = haa(b);
        b.changed = a.W;
        if (!b.get("animating"))
            if ((a.T.remove(b), !c || 0 == b.get("visible") || (b.__gm && b.__gm.Bl)))
                a.i.remove(b);
            else {
                a.o && 256 <= a.i.Ya() && (a.o = !1);
                var d = b.get("optimized"),
                    e = b.get("draggable"),
                    f = !!b.get("animation"),
                    g = b.get("icon");
                g = !!g && null != g.path;
                var h = null != b.get("label");
                0 == d || e || f || g || h || (!d && a.o) ?
                    _.mg(a.i, b) :
                    (a.i.remove(b), _.mg(a.T, b));
                !b.get("pegmanMarker") &&
                    ((d = b.get("map")),
                        _.xj(d, "Om"),
                        _.Vo("Om", "-p", b),
                        d.getBounds() && d.getBounds().contains(c) && _.Vo("Om", "-v", b),
                        (a.Ha[_.Re(b)] =
                            a.Ha[_.Re(b)] ||
                            _.K.addListener(b, "click", function(k) {
                                _.Vo("Om", "-i", k);
                            })),
                        (a = b.get("place"))) &&
                    (a.placeId ? _.xj(d, "Smpi") : _.xj(d, "Smpq"),
                        _.Vo("Smp", "-p", b),
                        b.get("attribution") && _.xj(d, "Sma"));
            }
    };
    haa = function(a) {
        var b = a.get("place");
        b = b ? b.location : a.get("position");
        a.set("internalPosition", b);
        return b;
    };
    lV = function(a, b, c, d) {
        this.H = c;
        this.T = new _.DF(a, d, c);
        this.i = b;
    };
    mV = function(a, b, c, d) {
        var e = b.ab,
            f = a.H.get();
        if (!f) return null;
        f = f.Va.size;
        c = _.EF(a.T, e, new _.O(c, d));
        if (!c) return null;
        a = new _.O(c.ae.Ca * f.va, c.ae.Da * f.Aa);
        var g = [];
        c.wb.rb.forEach(function(h) {
            g.push(h);
        });
        g.sort(function(h, k) {
            return k.zIndex - h.zIndex;
        });
        c = null;
        for (e = 0;
            (d = g[e]); ++e)
            if (((f = d.Ue), 0 != f.clickable && ((f = f.o), iaa(a.x, a.y, d)))) {
                c = f;
                break;
            }
        c && (b.i = d);
        return c;
    };
    iaa = function(a, b, c) {
        if (c.i > a || c.j > b || c.i + c.H < a || c.j + c.o < b) a = !1;
        else
            a: {
                var d = c.Ue.shape;
                a -= c.i;
                b -= c.j;
                c = d.coords;
                switch (d.type.toLowerCase()) {
                    case "rect":
                        a = c[0] <= a && a <= c[2] && c[1] <= b && b <= c[3];
                        break a;
                    case "circle":
                        d = c[2];
                        a -= c[0];
                        b -= c[1];
                        a = a * a + b * b <= d * d;
                        break a;
                    default:
                        (d = c.length),
                        (c[0] == c[d - 2] && c[1] == c[d - 1]) || c.push(c[0], c[1]),
                            (a = 0 != _.LF(a, b, c));
                }
            }
        return a;
    };
    oV = function(a, b, c) {
        this.j = b;
        var d = this;
        a.i = function(e) {
            nV(d, e, !0);
        };
        a.onRemove = function(e) {
            nV(d, e, !1);
        };
        this.o = null;
        this.i = !1;
        this.T = 0;
        this.W = c;
        a.Ya() ? ((this.i = !0), this.H()) : _.Rf(_.cm(_.K.trigger, c, "load"));
    };
    nV = function(a, b, c) {
        4 > a.T++ ? (c ? a.j.o(b) : a.j.$(b)) : (a.i = !0);
        a.o || (a.o = _.on((0, _.y)(a.H, a)));
    };
    qV = function(a, b, c, d, e, f, g) {
        var h = this;
        this.T = a;
        this.W = d;
        this.o = c;
        this.j = e;
        this.H = f;
        this.i = g || _.ql;
        b.i = function(k) {
            var l = _.Nn(h.get("projection")),
                m = k.i; -
            64 > m.i || -64 > m.j || 64 < m.i + m.H || 64 < m.j + m.o ?
                (_.mg(h.o, k), (m = h.j.search(_.Tk))) :
                ((m = k.latLng),
                    (m = new _.O(m.lat(), m.lng())),
                    (k.ab = m),
                    _.WK(h.H, { ab: m, Mf: k }),
                    (m = _.KF(h.j, m)));
            for (var q = 0, r = m.length; q < r; ++q) {
                var u = m[q],
                    v = u.wb || null;
                if ((u = pV(h, v, u.Bj || null, k, l)))
                    (k.rb[_.Re(u)] = u), _.mg(v.rb, u);
            }
        };
        b.onRemove = function(k) {
            jaa(h, k);
        };
    };
    kaa = function(a, b) {
        a.T[_.Re(b)] = b;
        var c = { Ca: b.Xa.x, Da: b.Xa.y, Ka: b.zoom },
            d = _.Nn(a.get("projection")),
            e = _.Xm(a.i, c);
        e = new _.O(e.Ba, e.Ea);
        var f = _.ay(a.i, c, 64 / a.i.size.va);
        c = f.min;
        f = f.max;
        c = _.qg(c.Ba, c.Ea, f.Ba, f.Ea);
        _.YK(c, d, e, function(g, h) {
            g.Bj = h;
            g.wb = b;
            b.Vc[_.Re(g)] = g;
            _.IF(a.j, g);
            h = _.ee(a.H.search(g), function(r) {
                return r.Mf;
            });
            a.o.forEach((0, _.y)(h.push, h));
            for (var k = 0, l = h.length; k < l; ++k) {
                var m = h[k],
                    q = pV(a, b, g.Bj, m, d);
                q && ((m.rb[_.Re(q)] = q), _.mg(b.rb, q));
            }
        });
        b.Na && b.rb && a.W(b.Na, b.rb);
    };
    laa = function(a, b) {
        b &&
            (delete a.T[_.Re(b)],
                b.rb.forEach(function(c) {
                    b.rb.remove(c);
                    delete c.Ue.rb[_.Re(c)];
                }),
                _.$d(b.Vc, function(c, d) {
                    a.j.remove(d);
                }));
    };
    jaa = function(a, b) {
        a.o.contains(b) ? a.o.remove(b) : a.H.remove({ ab: b.ab, Mf: b });
        _.$d(b.rb, function(c, d) {
            delete b.rb[c];
            d.wb.rb.remove(d);
        });
    };
    pV = function(a, b, c, d, e) {
        if (!e || !c || !d.latLng) return null;
        var f = e.fromLatLngToPoint(c);
        c = e.fromLatLngToPoint(d.latLng);
        e = a.i.size;
        a = _.by(a.i, new _.ag(c.x, c.y), new _.ag(f.x, f.y), b.zoom);
        c.x = a.Ca * e.va;
        c.y = a.Da * e.Aa;
        a = d.zIndex;
        _.he(a) || (a = c.y);
        a = Math.round(1e3 * a) + (_.Re(d) % 1e3);
        f = d.i;
        b = {
            image: f.image,
            $: f.T,
            ka: f.W,
            W: f.ka,
            T: f.$,
            i: f.i + c.x,
            j: f.j + c.y,
            H: f.H,
            o: f.o,
            zIndex: a,
            opacity: d.opacity,
            wb: b,
            Ue: d,
        };
        return b.i > e.va || b.j > e.Aa || 0 > b.i + b.H || 0 > b.j + b.o ?
            null :
            b;
    };
    naa = function(a, b, c) {
        var d = new hV(),
            e = new tU(),
            f = rV,
            g = this;
        a.i = function(h) {
            maa(g, h);
        };
        a.onRemove = function(h) {
            g.j.remove(h.__gm.Df);
            delete h.__gm.Df;
        };
        this.j = b;
        this.i = e;
        this.T = f;
        this.o = d;
        this.H = c;
    };
    maa = function(a, b) {
        var c = b.get("internalPosition"),
            d = b.get("zIndex"),
            e = b.get("opacity"),
            f = (b.__gm.Df = { o: b, latLng: c, zIndex: d, opacity: e, rb: {} });
        c = b.get("useDefaults");
        d = b.get("icon");
        var g = b.get("shape");
        g || (d && !c) || (g = a.i.shape);
        var h = d ? a.T(d) : a.i.icon,
            k = aU(function() {
                if (f == b.__gm.Df && (f.i || f.j)) {
                    var l = g;
                    if (f.i) {
                        var m = h.size;
                        var q = b.get("anchorPoint");
                        if (!q || q.i)
                            (q = new _.O(f.i.i + m.width / 2, f.i.j)),
                            (q.i = !0),
                            b.set("anchorPoint", q);
                    } else m = f.j.size;
                    l
                        ?
                        (l.coords = l.coords || l.coord) :
                        (l = { type: "rect", coords: [0, 0, m.width, m.height] });
                    f.shape = l;
                    f.clickable = b.get("clickable");
                    f.title = b.get("title") || null;
                    f.cursor = b.get("cursor") || "pointer";
                    _.mg(a.j, f);
                }
            });
        h.url ?
            a.o.load(h, function(l) {
                f.i = l;
                k();
            }) :
            ((f.j = a.H(h)), k());
    };
    rV = function(a) {
        if (_.je(a)) {
            var b = rV.i;
            return (b[a] = b[a] || { url: a });
        }
        return a;
    };
    oaa = function(a, b, c) {
        var d = new _.lg(),
            e = new _.lg();
        new naa(a, d, c);
        var f = _.Io(b.getDiv()).createElement("canvas"),
            g = {};
        a = _.qg(-100, -300, 100, 300);
        var h = new _.HF(a, void 0);
        a = _.qg(-90, -180, 90, 180);
        var k = _.XK(a, function(u, v) {
                return u.Mf == v.Mf;
            }),
            l = null,
            m = null,
            q = new _.tg(null, void 0),
            r = b.__gm;
        r.i.then(function(u) {
            r.o.register(new lV(g, r, q, u.nb.j));
            u.Yd.kb(function(v) {
                if (v && l != v.Va) {
                    m && m.unbindAll();
                    var w = (l = v.Va);
                    m = new qV(
                        g,
                        d,
                        e,
                        function(x, E) {
                            return new oV(E, new dV(x, E, f, w), x);
                        },
                        h,
                        k,
                        l
                    );
                    m.bindTo("projection", b);
                    q.set(m.Ob());
                }
            });
        });
        _.FF(b, q, "markerLayer", -1);
    };
    sV = _.n();
    _.O.prototype.Kf = _.Sl(12, function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    });
    _.A(cU, _.L);
    cU.prototype.position_changed = function() {
        this.i ||
            ((this.i = !0),
                this.set("rawPosition", this.get("position")),
                (this.i = !1));
    };
    cU.prototype.rawPosition_changed = function() {
        this.i ||
            ((this.i = !0),
                this.set("position", dU(this, this.get("rawPosition"))),
                (this.i = !1));
    };
    var sU = {
            linear: _.na(),
            "ease-out": function(a) {
                return 1 - Math.pow(a - 1, 2);
            },
            "ease-in": function(a) {
                return Math.pow(a, 2);
            },
        },
        gU;
    iU.prototype.start = function() {
        this.i.wd = this.i.wd || 1;
        this.i.duration = this.i.duration || 1;
        _.K.addDomListenerOnce(
            this.Cb,
            "webkitAnimationEnd",
            (0, _.y)(function() {
                this.j = !0;
                _.K.trigger(this, "done");
            }, this)
        );
        lU(this.Cb, hU(this.o), this.i);
    };
    iU.prototype.cancel = function() {
        lU(this.Cb, null, {});
        _.K.trigger(this, "done");
    };
    iU.prototype.stop = function() {
        this.j ||
            _.K.addDomListenerOnce(
                this.Cb,
                "webkitAnimationIteration",
                (0, _.y)(this.cancel, this)
            );
    };
    var oU = null,
        mU = [];
    jU.prototype.start = function() {
        mU.push(this);
        oU || (oU = window.setInterval(pU, 10));
        this.o = _.mn();
        nU(this);
    };
    jU.prototype.cancel = function() {
        this.i || ((this.i = !0), rU(this, 1), _.K.trigger(this, "done"));
    };
    jU.prototype.stop = function() {
        this.i || (this.j = 1);
    };
    var SU = {};
    SU[1] = {
        options: { duration: 700, wd: "infinite" },
        icon: new Animation([
            { time: 0, translate: [0, 0], vc: "ease-out" },
            { time: 0.5, translate: [0, -20], vc: "ease-in" },
            { time: 1, translate: [0, 0], vc: "ease-out" },
        ]),
    };
    SU[2] = {
        options: { duration: 500, wd: 1 },
        icon: new Animation([
            { time: 0, translate: [0, -500], vc: "ease-in" },
            { time: 0.5, translate: [0, 0], vc: "ease-out" },
            { time: 0.75, translate: [0, -20], vc: "ease-in" },
            { time: 1, translate: [0, 0], vc: "ease-out" },
        ]),
    };
    SU[3] = {
        options: { duration: 200, Kf: 20, wd: 1, Fj: !1 },
        icon: new Animation([
            { time: 0, translate: [0, 0], vc: "ease-in" },
            { time: 1, translate: [0, -20], vc: "ease-out" },
        ]),
    };
    SU[4] = {
        options: { duration: 500, Kf: 20, wd: 1, Fj: !1 },
        icon: new Animation([
            { time: 0, translate: [0, -20], vc: "ease-in" },
            { time: 0.5, translate: [0, 0], vc: "ease-out" },
            { time: 0.75, translate: [0, -10], vc: "ease-in" },
            { time: 1, translate: [0, 0], vc: "ease-out" },
        ]),
    };
    var vU;
    _.A(wU, _.L);
    wU.prototype.changed = function(a) {
        ("modelIcon" != a &&
            "modelShape" != a &&
            "modelCross" != a &&
            "modelLabel" != a) ||
        _.wi(this.Ma);
    };
    _.A(zU, _.L);
    zU.prototype.changed = function() {
        if (!this.j) {
            var a = yU(this);
            this.i != a &&
                ((this.i = a),
                    (this.j = !0),
                    this.set("shouldRender", this.i),
                    (this.j = !1));
        }
    };
    _.A(AU, _.L);
    AU.prototype.internalPosition_changed = function() {
        if (!this.i) {
            this.i = !0;
            var a = this.get("position"),
                b = this.get("internalPosition");
            a &&
                b &&
                !a.equals(b) &&
                this.set("position", this.get("internalPosition"));
            this.i = !1;
        }
    };
    AU.prototype.place_changed = AU.prototype.position_changed = AU.prototype.draggable_changed = function() {
        if (!this.i) {
            this.i = !0;
            if (this.j) {
                var a = this.get("place");
                a
                    ?
                    this.set("internalPosition", a.location) :
                    this.set("internalPosition", this.get("position"));
            }
            this.get("place") ?
                this.set("actuallyDraggable", !1) :
                this.set("actuallyDraggable", this.get("draggable"));
            this.i = !1;
        }
    };
    _.t = BU.prototype;
    _.t.setOpacity = function(a) {
        this.$ = a;
        _.wi(this.i);
    };
    _.t.setLabel = function(a) {
        this.H = a;
        _.wi(this.i);
    };
    _.t.setVisible = function(a) {
        this.ta = a;
        _.wi(this.i);
    };
    _.t.setZIndex = function(a) {
        this.Ja = a;
        _.wi(this.i);
    };
    _.t.release = function() {
        this.o = null;
        DU(this);
    };
    _.t.km = function() {
        if (this.o && this.H && 0 != this.ta) {
            var a = this.o.markerLayer,
                b = this.H;
            this.j ? a.appendChild(this.j) : (this.j = _.Oo("div", a));
            a = this.j;
            this.ka && _.No(a, this.ka);
            var c = a.firstChild;
            c ||
                ((c = _.Oo("div", a)),
                    (c.style.height = "100px"),
                    (c.style.marginTop = "-50px"),
                    (c.style.marginLeft = "-50%"),
                    (c.style.display = "table"),
                    (c.style.borderSpacing = "0"));
            var d = c.firstChild;
            d ||
                ((d = _.Oo("div", c)),
                    (d.style.display = "table-cell"),
                    (d.style.verticalAlign = "middle"),
                    (d.style.whiteSpace = "nowrap"),
                    (d.style.textAlign = "center"));
            c = d.firstChild || _.Oo("div", d);
            _.Ko(c, b.text);
            c.style.color = b.color;
            c.style.fontSize = b.fontSize;
            c.style.fontWeight = b.fontWeight;
            c.style.fontFamily = b.fontFamily;
            this.W &&
                b !== this.T &&
                ((this.T = b),
                    (b = c.getBoundingClientRect()),
                    (b = new _.P(b.width, b.height)),
                    b.equals(this.ua) || ((this.ua = b), this.W(b)));
            _.tz(c, _.fe(this.$, 1));
            _.Po(a, this.Ja);
        } else DU(this);
    };
    var RU = (0, _.y)(
        function(a, b, c) {
            _.Ko(b, "");
            var d = _.ro(),
                e = _.Io(b).createElement("canvas");
            e.width = c.size.width * d;
            e.height = c.size.height * d;
            e.style.width = _.Q(c.size.width);
            e.style.height = _.Q(c.size.height);
            _.Qh(b, c.size);
            b.appendChild(e);
            _.No(e, _.Pk);
            _.Qo(e);
            b = e.getContext("2d");
            b.lineCap = b.lineJoin = "round";
            b.scale(d, d);
            a = a(b);
            b.beginPath();
            a.Pb(c.Tf, c.anchor.x, c.anchor.y, c.rotation || 0, c.scale);
            c.fillOpacity &&
                ((b.fillStyle = c.fillColor),
                    (b.globalAlpha = c.fillOpacity),
                    b.fill());
            c.strokeWeight &&
                ((b.lineWidth = c.strokeWeight),
                    (b.strokeStyle = c.strokeColor),
                    (b.globalAlpha = c.strokeOpacity),
                    b.stroke());
        },
        null,
        function(a) {
            return new _.UF(a);
        }
    );
    _.A(OU, _.L);
    _.t = OU.prototype;
    _.t.panes_changed = function() {
        EU(this);
        _.wi(this.Ma);
    };
    _.t.Ce = function(a) {
        this.set("position", a && new _.O(a.va, a.Aa));
    };
    _.t.ze = function() {
        this.unbindAll();
        this.set("panes", null);
        this.j && this.j.stop();
        this.$ && (_.K.removeListener(this.$), (this.$ = null));
        this.j = null;
        PU(this.Ic);
        this.Ic = [];
        EU(this);
        JU(this);
    };
    _.t.xh = function() {
        var a;
        if (!(a =
                this.Nc != (0 != this.get("clickable")) ||
                this.Wc != this.getDraggable())) {
            a = this.Kc;
            var b = this.get("shape");
            if (null == a || null == b) a = a == b;
            else {
                var c;
                if ((c = a.type == b.type))
                    a: if (
                        ((a = a.coords),
                            (b = b.coords),
                            _.Na(a) && _.Na(b) && a.length == b.length)
                    ) {
                        c = a.length;
                        for (var d = 0; d < c; d++)
                            if (a[d] !== b[d]) {
                                c = !1;
                                break a;
                            }
                        c = !0;
                    } else c = !1;
                a = c;
            }
            a = !a;
        }
        a &&
            ((this.Nc = 0 != this.get("clickable")),
                (this.Wc = this.getDraggable()),
                (this.Kc = this.get("shape")),
                JU(this),
                _.wi(this.Ma));
    };
    _.t.shape_changed = OU.prototype.xh;
    _.t.clickable_changed = OU.prototype.xh;
    _.t.draggable_changed = OU.prototype.xh;
    _.t.Bc = function() {
        _.wi(this.Ma);
    };
    _.t.cursor_changed = OU.prototype.Bc;
    _.t.scale_changed = OU.prototype.Bc;
    _.t.raiseOnDrag_changed = OU.prototype.Bc;
    _.t.crossOnDrag_changed = OU.prototype.Bc;
    _.t.zIndex_changed = OU.prototype.Bc;
    _.t.opacity_changed = OU.prototype.Bc;
    _.t.title_changed = OU.prototype.Bc;
    _.t.cross_changed = OU.prototype.Bc;
    _.t.icon_changed = OU.prototype.Bc;
    _.t.visible_changed = OU.prototype.Bc;
    _.t.dragging_changed = OU.prototype.Bc;
    _.t.position_changed = function() {
        this.lc ? this.Ma.Nb() : _.wi(this.Ma);
    };
    _.t.getPosition = _.gg("position");
    _.t.getPanes = _.gg("panes");
    _.t.rm = _.gg("visible");
    _.t.getDraggable = function() {
        return !!this.get("draggable");
    };
    _.t.tm = function() {
        this.set("dragging", !0);
        this.Wa.set("snappingCallback", this.sd);
    };
    _.t.sm = function() {
        this.Wa.set("snappingCallback", null);
        this.set("dragging", !1);
    };
    _.t.animation_changed = function() {
        this.Bb = !1;
        this.get("animation") ?
            NU(this) :
            (this.set("animating", !1), this.j && this.j.stop());
    };
    _.t.Cg = _.gg("icon");
    _.t.rl = _.gg("label");
    var daa = "click dblclick mouseup mousedown mouseover mouseout rightclick dragstart drag dragend".split(
        " "
    );
    ZU.prototype.dispose = function() {
        this.j.set("animation", null);
        this.j.ze();
        this.ya && this.o ? this.ya.je(this.o) : this.j.ze();
        this.W && this.W.unbindAll();
        this.Ra && this.Ra.unbindAll();
        this.H.unbindAll();
        this.$.unbindAll();
        _.B(this.T, _.K.removeListener);
        this.T.length = 0;
    };
    dV.prototype.o = dV.prototype.$ = function(a) {
        var b = gV(this),
            c = fV(this),
            d = eV(c),
            e = Math.round(a.i * d),
            f = Math.round(a.j * d),
            g = Math.ceil(a.H * d);
        a = Math.ceil(a.o * d);
        var h = eaa(this, g, a),
            k = h.getContext("2d");
        k.translate(-e, -f);
        b.forEach(function(l) {
            k.globalAlpha = _.fe(l.opacity, 1);
            k.drawImage(
                l.image,
                l.$,
                l.ka,
                l.W,
                l.T,
                Math.round(l.i * d),
                Math.round(l.j * d),
                l.H * d,
                l.o * d
            );
        });
        c.clearRect(e, f, g, a);
        c.globalAlpha = 1;
        c.drawImage(h, e, f);
    };
    hV.prototype.load = function(a, b) {
        return this.i.load(new _.nE(a.url), function(c) {
            if (c) {
                var d = c.size,
                    e = a.size || a.scaledSize || d;
                a.size = e;
                var f = a.anchor || new _.O(e.width / 2, e.height),
                    g = {};
                g.image = c;
                c = a.scaledSize || d;
                var h = c.width / d.width,
                    k = c.height / d.height;
                g.T = a.origin ? a.origin.x / h : 0;
                g.W = a.origin ? a.origin.y / k : 0;
                g.i = -f.x;
                g.j = -f.y;
                g.T * h + e.width > c.width ?
                    ((g.ka = d.width - g.T * h), (g.H = c.width)) :
                    ((g.ka = e.width / h), (g.H = e.width));
                g.W * k + e.height > c.height ?
                    ((g.$ = d.height - g.W * k), (g.o = c.height)) :
                    ((g.$ = e.height / k), (g.o = e.height));
                b(g);
            } else b(null);
        });
    };
    hV.prototype.cancel = function(a) {
        this.i.cancel(a);
    };
    lV.prototype.j = function(a) {
        return "dragstart" != a && "drag" != a && "dragend" != a;
    };
    lV.prototype.o = function(a, b) {
        return b ?
            mV(this, a, -8, 0) ||
            mV(this, a, 0, -8) ||
            mV(this, a, 8, 0) ||
            mV(this, a, 0, 8) :
            mV(this, a, 0, 0);
    };
    lV.prototype.handleEvent = function(a, b, c) {
        var d = b.i;
        if ("mouseout" == a) this.i.set("cursor", ""), this.i.set("title", null);
        else if ("mouseover" == a) {
            var e = d.Ue;
            this.i.set("cursor", e.cursor);
            (e = e.title) && this.i.set("title", e);
        }
        var f;
        d && "mouseout" != a ? (f = d.Ue.latLng) : (f = b.latLng);
        "dblclick" == a && _.Je(b.tb);
        _.K.trigger(c, a, new _.un(f));
    };
    lV.prototype.zIndex = 40;
    oV.prototype.H = function() {
        this.i && faa(this.j);
        this.i = !1;
        this.o = null;
        this.T = 0;
        _.Rf(_.cm(_.K.trigger, this.W, "load"));
    };
    _.Ea(qV, _.kj);
    qV.prototype.Ob = function() {
        return { Va: this.i, Vb: 2, Zb: this.$.bind(this) };
    };
    qV.prototype.$ = function(a, b) {
        var c = this;
        b = void 0 === b ? {} : b;
        var d = document.createElement("div"),
            e = this.i.size;
        d.style.width = e.va + "px";
        d.style.height = e.Aa + "px";
        d.style.overflow = "hidden";
        a = { Na: d, zoom: a.Ka, Xa: new _.O(a.Ca, a.Da), Vc: {}, rb: new _.lg() };
        d.wb = a;
        kaa(this, a);
        var f = !1;
        return {
            Db: function() {
                return d;
            },
            sc: function() {
                return f;
            },
            loaded: new Promise(function(g) {
                _.K.addListenerOnce(d, "load", function() {
                    f = !0;
                    g();
                });
            }),
            release: function() {
                var g = d.wb;
                d.wb = null;
                laa(c, g);
                _.Ko(d, "");
                b.Kb && b.Kb();
            },
        };
    };
    rV.i = {};
    sV.prototype.i = function(a, b) {
        var c = _.eG();
        if (b instanceof _.vg) cV(a, b, c);
        else {
            var d = new _.lg();
            cV(d, b, c);
            var e = new _.lg();
            oaa(e, b, c);
            new gaa(a, e, d);
        }
        _.K.addListener(b, "idle", function() {
            a.forEach(function(f) {
                var g = f.get("internalPosition"),
                    h = b.getBounds();
                g && !f.pegmanMarker && h && h.contains(g) ?
                    _.Vo("Om", "-v", f) :
                    _.Wo("Om", "-v", f);
            });
        });
    };
    _.rf("marker", new sV());
});