google.maps.__gjsload__("controls", function(_) {
    var pL,
        qL,
        rL,
        sL,
        tL,
        uL,
        wL,
        xL,
        yL,
        zL,
        AL,
        BL,
        DL,
        FL,
        GL,
        HL,
        IL,
        JL,
        KL,
        LL,
        NL,
        ML,
        OL,
        PL,
        SL,
        RL,
        QL,
        TL,
        UL,
        XL,
        YL,
        ZL,
        $L,
        WL,
        aM,
        dM,
        fM,
        eM,
        hM,
        iM,
        jM,
        gM,
        kM,
        lM,
        mM,
        qM,
        rM,
        nM,
        oM,
        sM,
        uM,
        tM,
        wM,
        xM,
        DM,
        yM,
        EM,
        FM,
        GM,
        HM,
        IM,
        KM,
        JM,
        LM,
        MM,
        OM,
        NM,
        SM,
        RM,
        QM,
        TM,
        UM,
        WM,
        VM,
        XM,
        CL,
        $M,
        ZM,
        YM,
        aN,
        bN,
        cN,
        dN,
        eN,
        fN,
        gN,
        iN,
        hN,
        jN,
        kN,
        oN,
        lN,
        mN,
        pN,
        qN,
        rN,
        sN,
        vN,
        uN,
        wN,
        tN,
        BN,
        xN,
        yN,
        zN,
        AN,
        CN,
        DN,
        EN,
        FN,
        JN,
        GN,
        HN,
        IN,
        KN,
        NN,
        ON,
        LN,
        MN,
        SN,
        PN,
        UN,
        VN,
        TN,
        WN,
        XN,
        YN,
        ZN,
        $N,
        jO,
        iO,
        qO,
        rO,
        oO,
        sO,
        fO,
        hO,
        cO,
        eO,
        dO,
        gO,
        kO,
        bO,
        uO,
        vO,
        wO,
        xO,
        yO,
        zO,
        aO,
        mO,
        pO,
        nO,
        lO,
        AO,
        BO,
        tO,
        EO,
        FO,
        IO,
        JO,
        KO,
        LO,
        GO,
        HO,
        MO,
        NO,
        OO,
        PO,
        QO,
        RO;
    pL = function(a, b) {
        b instanceof _.Qb ||
            b instanceof _.Qb ||
            ((b = "object" == typeof b && b.kd ? b.Gb() : String(b)),
                _.Px.test(b) || (b = "about:invalid#zClosurez"),
                (b = new _.Qb(_.Ob, b)));
        a.href = _.Ox(b);
    };
    qL = function(a) {
        a.style.textAlign = _.Bu.i ? "right" : "left";
    };
    rL = function(a, b, c) {
        var d = a.length,
            e = "string" === typeof a ? a.split("") : a;
        for (--d; 0 <= d; --d) d in e && b.call(c, e[d], d, a);
    };
    sL = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase();
        });
    };
    tL = function(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase();
        });
    };
    uL = function(a) {
        a.style.visibility = "";
    };
    _.vL = function(a, b) {
        1 == _.tj.type ? (a.style.styleFloat = b) : (a.style.cssFloat = b);
    };
    wL = function(a, b) {
        a.style.WebkitBorderRadius = b;
        a.style.borderRadius = b;
        a.style.MozBorderRadius = b;
    };
    xL = function(a, b) {
        a.style.WebkitBorderTopLeftRadius = b;
        a.style.WebkitBorderTopRightRadius = b;
        a.style.borderTopLeftRadius = b;
        a.style.borderTopRightRadius = b;
        a.style.MozBorderTopLeftRadius = b;
        a.style.MozBorderTopRightRadius = b;
    };
    yL = function(a, b) {
        a.style.WebkitBorderBottomLeftRadius = b;
        a.style.WebkitBorderBottomRightRadius = b;
        a.style.borderBottomLeftRadius = b;
        a.style.borderBottomRightRadius = b;
        a.style.MozBorderBottomLeftRadius = b;
        a.style.MozBorderBottomRightRadius = b;
    };
    zL = function(a) {
        var b = _.Q(2);
        a.style.WebkitBorderBottomLeftRadius = b;
        a.style.WebkitBorderTopLeftRadius = b;
        a.style.borderBottomLeftRadius = b;
        a.style.borderTopLeftRadius = b;
        a.style.MozBorderBottomLeftRadius = b;
        a.style.MozBorderTopLeftRadius = b;
    };
    AL = function(a) {
        var b = _.Q(2);
        a.style.WebkitBorderBottomRightRadius = b;
        a.style.WebkitBorderTopRightRadius = b;
        a.style.borderBottomRightRadius = b;
        a.style.borderTopRightRadius = b;
        a.style.MozBorderBottomRightRadius = b;
        a.style.MozBorderTopRightRadius = b;
    };
    BL = function(a, b) {
        b = b || {};
        var c = a.style;
        c.color = "black";
        c.fontFamily = "Roboto,Arial,sans-serif";
        _.Ro(a);
        _.Qo(a);
        b.title && a.setAttribute("title", b.title);
        c = _.Do() ? 1.38 : 1;
        a = a.style;
        a.fontSize = _.Q(b.fontSize || 11);
        a.backgroundColor = "#fff";
        for (var d = [], e = 0, f = _.Zd(b.padding); e < f; ++e)
            d.push(_.Q(c * b.padding[e]));
        a.padding = d.join(" ");
        b.width && (a.width = _.Q(c * b.width));
    };
    DL = function() {
        var a = CL;
        var b = void 0 === b ? "" : b;
        a.loaded || ((b = a() + b), _.Sm(b), (a.loaded = !0));
    };
    FL = function(a, b) {
        var c = EL[b];
        if (!c) {
            var d = sL(b);
            c = d;
            void 0 === a.style[d] &&
                ((d =
                        (_.Uc ? "Webkit" : _.Tc ? "Moz" : _.dk ? "ms" : _.ck ? "O" : null) +
                        tL(d)),
                    void 0 !== a.style[d] && (c = d));
            EL[b] = c;
        }
        return c;
    };
    GL = function(a, b, c) {
        if ("string" === typeof b)(b = FL(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = FL(c, d);
                f && (c.style[f] = e);
            }
    };
    HL = function(a, b, c) {
        if (b instanceof _.jn) {
            var d = b.x;
            b = b.y;
        } else(d = b), (b = c);
        a.style.left = _.Hz(d, !1);
        a.style.top = _.Hz(b, !1);
    };
    IL = _.oa("i");
    JL = function(a) {
        return 40 < a ? a / 2 - 2 : 28 > a ? a - 10 : 18;
    };
    KL = function(a, b) {
        a.items = a.items || [];
        var c = (a.items[b] = a.items[b] || {}),
            d = _.LK(a, b);
        if (!c.uc) {
            a.j = a.j || new _.O(0, 0);
            var e = (a.items[0] && a.items[0].uc) || new _.O(0, 0);
            c.uc = new _.O(e.x + a.j.x * b, e.y + a.j.y * b);
        }
        return {
            url: d,
            size: c.Qb || a.Qb,
            scaledSize: a.i.size,
            origin: c.uc,
            anchor: c.anchor || a.anchor,
        };
    };
    LL = function(a) {
        _.Rc.call(this);
        this.j = a;
        this.i = {};
    };
    NL = function(a, b, c) {
        ML(a, b, "finish", c, void 0);
    };
    ML = function(a, b, c, d, e, f) {
        if (Array.isArray(c))
            for (var g = 0; g < c.length; g++) ML(a, b, c[g], d, e, f);
        else
            (b = _.cd(b, c, d || a.handleEvent, e, f || a.j || a)) &&
            (a.i[b.key] = b);
    };
    OL = function(a) {
        _.ub(
            a.i,
            function(b, c) {
                this.i.hasOwnProperty(c) && _.qd(b);
            },
            a
        );
        a.i = {};
    };
    PL = function(a, b, c, d, e, f, g) {
        this.label = a || "";
        this.alt = b || "";
        this.H = f || null;
        this.Fc = c;
        this.i = d;
        this.o = e;
        this.j = g || null;
    };
    SL = function(a, b) {
        var c = this;
        this.W = a;
        b = b || ["roadmap", "satellite", "hybrid", "terrain"];
        var d = _.hm(b, "terrain") && _.hm(b, "roadmap"),
            e = _.hm(b, "hybrid") && _.hm(b, "satellite");
        this.o = {};
        this.H = [];
        this.j = this.T = this.i = null;
        _.K.addListener(this, "maptypeid_changed", function() {
            var k = c.get("mapTypeId");
            c.j && c.j.set("display", "satellite" == k);
            c.i && c.i.set("display", "roadmap" == k);
        });
        _.K.addListener(this, "zoom_changed", function() {
            if (c.i) {
                var k = c.get("zoom");
                c.i.set("enabled", k <= c.T);
            }
        });
        b = _.Aa(b);
        for (var f = b.next(); !f.done; f = b.next())
            if (((f = f.value), "hybrid" != f || !e))
                if ("terrain" != f || !d) {
                    var g = a.get(f);
                    if (g) {
                        var h = null;
                        "roadmap" == f
                            ?
                            d &&
                            ((this.i = QL(
                                    this,
                                    "terrain",
                                    "roadmap",
                                    "terrain",
                                    void 0,
                                    "Zoom out to show street map with terrain"
                                )),
                                (h = [
                                    [this.i]
                                ]),
                                (this.T = a.get("terrain").maxZoom)) :
                            ("satellite" != f && "hybrid" != f) ||
                            !e ||
                            ((this.j = RL(this)), (h = [
                                [this.j]
                            ]));
                        this.H.push(new PL(g.name, g.alt, "mapTypeId", f, null, null, h));
                    }
                }
    };
    RL = function(a) {
        a = QL(a, "hybrid", "satellite", "labels", "Labels");
        a.set("enabled", !0);
        return a;
    };
    QL = function(a, b, c, d, e, f) {
        var g = a.W.get(b);
        e = new PL(e || g.name, g.alt, d, !0, !1, f);
        a.o[b] = { mapTypeId: c, af: d, value: !0 };
        a.o[c] = { mapTypeId: c, af: d, value: !1 };
        return e;
    };
    TL = function(a, b, c) {
        if (!a || !b || "number" !== typeof c) return null;
        c = Math.pow(2, -c);
        var d = a.fromLatLngToPoint(b);
        return _.Xx(a.fromPointToLatLng(new _.O(d.x + c, d.y)), b);
    };
    UL = _.oa("j");
    XL = function(a) {
        _.fE.call(this, a, VL);
        _.eD(a, VL) ||
            _.dD(
                a,
                VL, { options: 0 }, [
                    "div", ,
                    1,
                    0, [
                        " ", ["img", 8, 1, 1],
                        " ", [
                            "button", ,
                            1,
                            2, [
                                " ", ["img", 8, 1, 3],
                                " ", ["img", 8, 1, 4],
                                " ", ["img", 8, 1, 5],
                                " ",
                            ],
                        ],
                        " ", [
                            "button", , ,
                            12, [
                                " ", ["img", 8, 1, 6],
                                " ", ["img", 8, 1, 7],
                                " ", ["img", 8, 1, 8],
                                " ",
                            ],
                        ],
                        " ", [
                            "button", , ,
                            13, [
                                " ", ["img", 8, 1, 9],
                                " ", ["img", 8, 1, 10],
                                " ", ["img", 8, 1, 11],
                                " ",
                            ],
                        ],
                        " <div> ", ["div", , , 14, " Rotate the view "],
                        " ", ["div", , , 15],
                        " ", ["div", , , 16],
                        " </div> ",
                    ],
                ], [],
                WL()
            );
    };
    YL = function(a) {
        return _.V(a.options, "", -7, -3);
    };
    ZL = function(a) {
        return _.V(a.options, "", -8, -3);
    };
    $L = function(a) {
        return _.V(a.options, "", -9, -3);
    };
    WL = function() {
        return [
            ["$t", "t-avKK8hDgg9Q", "$a", [7, , , , , "gm-compass"]],
            [
                "$a", [
                    8, , , ,
                    function(a) {
                        return _.V(a.options, "", -3, -3);
                    },
                    "src", , ,
                    1,
                ],
                "$a", [0, , , , "48", "height", , 1],
                "$a", [0, , , , "48", "width", , 1],
            ],
            [
                "$a", [7, , , , , "gm-control-active", , 1],
                "$a", [7, , , , , "gm-compass-needle", , 1],
                "$a", [
                    5,
                    5, , ,
                    function(a) {
                        return a.hb ?
                            _.SA(
                                "-webkit-transform",
                                "rotate(" + String(_.V(a.options, 0, -1)) + "deg)"
                            ) :
                            "rotate(" + String(_.V(a.options, 0, -1)) + "deg)";
                    },
                    "-webkit-transform", , ,
                    1,
                ],
                "$a", [
                    5,
                    5, , ,
                    function(a) {
                        return a.hb ?
                            _.SA(
                                "-ms-transform",
                                "rotate(" + String(_.V(a.options, 0, -1)) + "deg)"
                            ) :
                            "rotate(" + String(_.V(a.options, 0, -1)) + "deg)";
                    },
                    "-ms-transform", , ,
                    1,
                ],
                "$a", [
                    5,
                    5, , ,
                    function(a) {
                        return a.hb ?
                            _.SA(
                                "-moz-transform",
                                "rotate(" + String(_.V(a.options, 0, -1)) + "deg)"
                            ) :
                            "rotate(" + String(_.V(a.options, 0, -1)) + "deg)";
                    },
                    "-moz-transform", , ,
                    1,
                ],
                "$a", [
                    5,
                    5, , ,
                    function(a) {
                        return a.hb ?
                            _.SA(
                                "transform",
                                "rotate(" + String(_.V(a.options, 0, -1)) + "deg)"
                            ) :
                            "rotate(" + String(_.V(a.options, 0, -1)) + "deg)";
                    },
                    "transform", , ,
                    1,
                ],
                "$a", [0, , , , "button", "type", , 1],
                "$a", [22, , , , "compass.north", "jsaction", , 1],
            ],
            [
                "$a", [
                    8, , , ,
                    function(a) {
                        return _.V(a.options, "", -4, -3);
                    },
                    "src", , ,
                    1,
                ],
                "$a", [0, , , , "false", "draggable", , 1],
                "$a", [0, , , , "48", "height", , 1],
                "$a", [0, , , , "20", "width", , 1],
            ],
            [
                "$a", [
                    8, , , ,
                    function(a) {
                        return _.V(a.options, "", -5, -3);
                    },
                    "src", , ,
                    1,
                ],
                "$a", [0, , , , "false", "draggable", , 1],
                "$a", [0, , , , "48", "height", , 1],
                "$a", [0, , , , "20", "width", , 1],
            ],
            [
                "$a", [
                    8, , , ,
                    function(a) {
                        return _.V(a.options, "", -6, -3);
                    },
                    "src", , ,
                    1,
                ],
                "$a", [0, , , , "false", "draggable", , 1],
                "$a", [0, , , , "48", "height", , 1],
                "$a", [0, , , , "20", "width", , 1],
            ],
            [
                "$a", [8, , , , YL, "src", , , 1],
                "$a", [0, , , , "false", "draggable", , 1],
                "$a", [0, , , , "48", "height", , 1],
                "$a", [0, , , , "14", "width", , 1],
            ],
            [
                "$a", [8, , , , ZL, "src", , , 1],
                "$a", [0, , , , "false", "draggable", , 1],
                "$a", [0, , , , "48", "height", , 1],
                "$a", [0, , , , "14", "width", , 1],
            ],
            [
                "$a", [8, , , , $L, "src", , , 1],
                "$a", [0, , , , "false", "draggable", , 1],
                "$a", [0, , , , "48", "height", , 1],
                "$a", [0, , , , "14", "width", , 1],
            ],
            [
                "$a", [8, , , , YL, "src", , , 1],
                "$a", [0, , , , "false", "draggable", , 1],
                "$a", [0, , , , "48", "height", , 1],
                "$a", [0, , , , "14", "width", , 1],
            ],
            [
                "$a", [8, , , , ZL, "src", , , 1],
                "$a", [0, , , , "false", "draggable", , 1],
                "$a", [0, , , , "48", "height", , 1],
                "$a", [0, , , , "14", "width", , 1],
            ],
            [
                "$a", [8, , , , $L, "src", , , 1],
                "$a", [0, , , , "false", "draggable", , 1],
                "$a", [0, , , , "48", "height", , 1],
                "$a", [0, , , , "14", "width", , 1],
            ],
            [
                "$a", [7, , , , , "gm-control-active", , 1],
                "$a", [7, , , , , "gm-compass-turn", , 1],
                "$a", [0, , , , "button", "type", , 1],
                "$a", [22, , , , "compass.counterclockwise", "jsaction", , 1],
            ],
            [
                "$a", [7, , , , , "gm-control-active", , 1],
                "$a", [7, , , , , "gm-compass-turn", , 1],
                "$a", [7, , , , , "gm-compass-turn-opposite", , 1],
                "$a", [0, , , , "button", "type", , 1],
                "$a", [22, , , , "compass.clockwise", "jsaction", , 1],
            ],
            ["$a", [7, , , , , "gm-compass-tooltip-text", , 1]],
            [
                "$a", [7, , , , , "gm-compass-arrow-right", , 1],
                "$a", [7, , , , , "gm-compass-arrow-right-outer", , 1],
            ],
            [
                "$a", [7, , , , , "gm-compass-arrow-right", , 1],
                "$a", [7, , , , , "gm-compass-arrow-right-inner", , 1],
            ],
        ];
    };
    aM = function(a) {
        _.D(this, a, 9);
    };
    dM = function(a) {
        a = _.Sa(a);
        delete bM[a];
        _.vb(bM) && cM && cM.stop();
    };
    fM = function() {
        cM ||
            (cM = new _.vi(function() {
                eM();
            }, 20));
        var a = cM;
        0 != a.ud || a.start();
    };
    eM = function() {
        var a = (0, _.lc)();
        _.ub(bM, function(b) {
            gM(b, a);
        });
        _.vb(bM) || fM();
    };
    hM = function() {
        _.vd.call(this);
        this.o = 0;
        this.endTime = this.j = null;
    };
    iM = function(a, b, c, d) {
        hM.call(this);
        if (!Array.isArray(a) || !Array.isArray(b))
            throw Error("Start and end parameters must be arrays");
        if (a.length != b.length)
            throw Error("Start and end points must be the same length");
        this.T = a;
        this.ua = b;
        this.duration = c;
        this.ka = d;
        this.coords = [];
        this.progress = 0;
        this.ta = null;
    };
    jM = function(a) {
        if (0 == a.o)(a.progress = 0), (a.coords = a.T);
        else if (1 == a.o) return;
        dM(a);
        var b = (0, _.lc)();
        a.j = b; -
        1 == a.o && (a.j -= a.duration * a.progress);
        a.endTime = a.j + a.duration;
        a.ta = a.j;
        a.progress || a.i("begin");
        a.i("play"); -
        1 == a.o && a.i("resume");
        a.o = 1;
        var c = _.Sa(a);
        c in bM || (bM[c] = a);
        fM();
        gM(a, b);
    };
    gM = function(a, b) {
        b < a.j && ((a.endTime = b + a.endTime - a.j), (a.j = b));
        a.progress = (b - a.j) / (a.endTime - a.j);
        1 < a.progress && (a.progress = 1);
        a.ta = b;
        kM(a, a.progress);
        1 == a.progress ?
            ((a.o = 0), dM(a), a.i("finish"), a.i("end")) :
            1 == a.o && a.i("animate");
    };
    kM = function(a, b) {
        _.Oa(a.ka) && (b = a.ka(b));
        a.coords = Array(a.T.length);
        for (var c = 0; c < a.T.length; c++)
            a.coords[c] = (a.ua[c] - a.T[c]) * b + a.T[c];
    };
    lM = function(a, b) {
        _.Sc.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.z = b.coords[2];
        this.duration = b.duration;
        this.progress = b.progress;
        this.state = b.o;
    };
    mM = function(a) {
        return 3 * a * a - 2 * a * a * a;
    };
    qM = function(a, b, c) {
        var d = this;
        this.j = a;
        b /= 40;
        a.Na.style.transform = "scale(" + b + ")";
        a.Na.style.transformOrigin = "left";
        a.Na.setAttribute("controlWidth", Math.round(48 * b));
        a.Na.setAttribute("controlHeight", Math.round(48 * b));
        a.addListener("compass.clockwise", "click", function() {
            return nM(d, !0);
        });
        a.addListener("compass.counterclockwise", "click", function() {
            return nM(d, !1);
        });
        a.addListener("compass.north", "click", function() {
            var e = d.get("pov");
            if (e) {
                var f = _.Gy(e.heading);
                oM(d, f, 180 > f ? 0 : 360, e.pitch, 0);
            }
        });
        this.i = null;
        this.o = !1;
        _.Vm(pM, c);
    };
    rM = function(a) {
        var b = a.get("mapSize"),
            c = a.get("panControl"),
            d = !!a.get("disableDefaultUI");
        _.rz(
            a.j.Na, !!(c || (void 0 === c && !d && b && 200 <= b.width && 200 <= b.height))
        );
        _.K.trigger(a.j.Na, "resize");
    };
    nM = function(a, b) {
        var c = a.get("pov");
        if (c) {
            var d = _.Gy(c.heading);
            oM(
                a,
                d,
                b ? 90 * Math.floor((d + 100) / 90) : 90 * Math.ceil((d - 100) / 90),
                c.pitch,
                c.pitch
            );
        }
    };
    oM = function(a, b, c, d, e) {
        var f = new LL();
        a.i && a.i.stop();
        b = a.i = new iM([b, d], [c, e], 1200, mM);
        f.listen(b, "animate", function(g) {
            return sM(a, !1, g);
        });
        NL(f, b, function(g) {
            return sM(a, !0, g);
        });
        jM(b);
    };
    sM = function(a, b, c) {
        a.o = !0;
        var d = a.get("pov");
        d &&
            (a.set("pov", { heading: c.coords[0], pitch: c.coords[1], zoom: d.zoom }),
                (a.o = !1),
                b && (a.i = null));
    };
    uM = function(a) {
        var b = void 0 === b ? document : b;
        return tM(a, b);
    };
    tM = function(a, b) {
        return (b =
                b &&
                (b.fullscreenElement ||
                    b.webkitFullscreenElement ||
                    b.mozFullScreenElement ||
                    b.msFullscreenElement)) ?
            b === a ?
            !0 :
            tM(a, b.shadowRoot) :
            !1;
    };
    wM = function() {
        return vM.some(function(a) {
            return !!document[a];
        });
    };
    xM = function(a, b, c, d) {
        a.innerText = "";
        b = _.Aa(
            b ?
            1 == c ?
            [
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#666" d="M4,4H0v2h6V0H4V4z M14,4V0h-2v6h6V4H14z M12,18h2v-4h4v-2h-6V18z M0,14h4v4h2v-6H0V14z"/>\n</svg>\n',
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#B1B1B1" d="M4,4H0v2h6V0H4V4z M14,4V0h-2v6h6V4H14z M12,18h2v-4h4v-2h-6V18z M0,14h4v4h2v-6H0V14z"/>\n</svg>\n',
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#E4E4E4" d="M4,4H0v2h6V0H4V4z M14,4V0h-2v6h6V4H14z M12,18h2v-4h4v-2h-6V18z M0,14h4v4h2v-6H0V14z"/>\n</svg>\n',
            ] :
            [
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#666" d="M4,4H0v2h6V0H4V4z M14,4V0h-2v6h6V4H14z M12,18h2v-4h4v-2h-6V18z M0,14h4v4h2v-6H0V14z"/>\n</svg>\n',
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#333" d="M4,4H0v2h6V0H4V4z M14,4V0h-2v6h6V4H14z M12,18h2v-4h4v-2h-6V18z M0,14h4v4h2v-6H0V14z"/>\n</svg>\n',
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#111" d="M4,4H0v2h6V0H4V4z M14,4V0h-2v6h6V4H14z M12,18h2v-4h4v-2h-6V18z M0,14h4v4h2v-6H0V14z"/>\n</svg>\n',
            ] :
            1 == c ?
            [
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 018 18">\n  <path fill="#666" d="M0,0v2v4h2V2h4V0H2H0z M16,0h-4v2h4v4h2V2V0H16z M16,16h-4v2h4h2v-2v-4h-2V16z M2,12H0v4v2h2h4v-2H2V12z"/>\n</svg>\n',
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#B1B1B1" d="M0,0v2v4h2V2h4V0H2H0z M16,0h-4v2h4v4h2V2V0H16z M16,16h-4v2h4h2v-2v-4h-2V16z M2,12H0v4v2h2h4v-2H2V12z"/>\n</svg>\n',
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#E4E4E4" d="M0,0v2v4h2V2h4V0H2H0z M16,0h-4v2h4v4h2V2V0H16z M16,16h-4v2h4h2v-2v-4h-2V16z M2,12H0v4v2h2h4v-2H2V12z"/>\n</svg>\n',
            ] :
            [
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 018 18">\n  <path fill="#666" d="M0,0v2v4h2V2h4V0H2H0z M16,0h-4v2h4v4h2V2V0H16z M16,16h-4v2h4h2v-2v-4h-2V16z M2,12H0v4v2h2h4v-2H2V12z"/>\n</svg>\n',
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#333" d="M0,0v2v4h2V2h4V0H2H0z M16,0h-4v2h4v4h2V2V0H16z M16,16h-4v2h4h2v-2v-4h-2V16z M2,12H0v4v2h2h4v-2H2V12z"/>\n</svg>\n',
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#111" d="M0,0v2v4h2V2h4V0H2H0z M16,0h-4v2h4v4h2V2V0H16z M16,16h-4v2h4h2v-2v-4h-2V16z M2,12H0v4v2h2h4v-2H2V12z"/>\n</svg>\n',
            ]
        );
        for (c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var e = document.createElement("img");
            e.style.width = e.style.height = _.Q(JL(d));
            e.src = _.jE(c);
            a.appendChild(e);
        }
    };
    DM = function(a, b, c, d) {
        var e = this;
        this.H = a;
        this.$ = d;
        this.j = b;
        b.style.cursor = "pointer";
        this.ka = c;
        this.i = uM(this.H);
        this.ka.set(this.i);
        this.o = wM();
        this.W = [];
        this.ta = function() {
            _.K.trigger(e.H, "resize");
            e.i = uM(e.H);
            e.i || yM(e);
            e.ka.set(e.i);
            var f = e.get("controlStyle") || 0;
            e.o && xM(e.j, e.i, f, e.$);
        };
        this.T = function() {
            var f = e.get("display"),
                g = !!e.get("disableDefaultUI");
            _.nz(e.j, ((void 0 === f && !g) || !!f) && e.o);
            _.K.trigger(e.j, "resize");
        };
        this.o &&
            (_.Vm(pM, a),
                b.setAttribute("class", "gm-control-active gm-fullscreen-control"),
                wL(b, _.Q(_.IK(d))),
                (b.style.width = b.style.height = _.Q(d)),
                _.Gz(b, "0 1px 4px -1px rgba(0,0,0,0.3)"),
                (a = this.get("controlStyle") || 0),
                xM(b, this.i, a, d),
                (b.style.overflow = "hidden"),
                _.K.addDomListener(b, "click", function() {
                    if (e.i)
                        for (var f = _.Aa(zM), g = f.next(); !g.done; g = f.next()) {
                            if (((g = g.value), g in document)) {
                                document[g]();
                                break;
                            }
                        }
                    else {
                        f = _.Aa(AM);
                        for (g = f.next(); !g.done; g = f.next())
                            e.W.push(_.K.addDomListener(document, g.value, e.ta));
                        f = e.H;
                        g = _.Aa(BM);
                        for (var h = g.next(); !h.done; h = g.next())
                            if (((h = h.value), h in f)) {
                                f[h]();
                                break;
                            }
                    }
                }));
        _.K.addListener(this, "disabledefaultui_changed", this.T);
        _.K.addListener(this, "display_changed", this.T);
        _.K.addListener(this, "maptypeid_changed", function() {
            var f = "streetview" == e.get("mapTypeId") ? 1 : 0;
            e.set("controlStyle", f);
            e.j.style.margin = _.Q(e.$ >> 2);
            e.T();
        });
        _.K.addListener(this, "controlstyle_changed", function() {
            var f = e.get("controlStyle");
            null != f &&
                ((e.j.style.backgroundColor = CM[f].backgroundColor),
                    e.o && xM(e.j, e.i, f, e.$));
        });
        this.T();
    };
    yM = function(a) {
        for (var b = _.Aa(a.W), c = b.next(); !c.done; c = b.next())
            _.K.removeListener(c.value);
        a.W.length = 0;
    };
    EM = function(a, b, c) {
        this.i = a;
        this.j = [];
        this.T = c || 0;
        this.H = (0, _.y)(
            3 == b || 12 == b || 6 == b || 9 == b ? rL : _.B,
            this,
            this.j
        );
        a.setAttribute("controlWidth", 0);
        a.setAttribute("controlHeight", 0);
    };
    FM = function(a, b) {
        var c = document.createElement("div");
        c.className = "infomsg";
        a.appendChild(c);
        var d = c.style;
        d.background = "#F9EDBE";
        d.border = "1px solid #F0C36D";
        d.borderRadius = "2px";
        d.boxSizing = "border-box";
        d.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
        d.fontFamily = "Roboto,Arial,sans-serif";
        d.fontSize = "12px";
        d.fontWeight = "400";
        d.left = "10%";
        d.i = "2px";
        d.padding = "5px 14px";
        d.position = "absolute";
        d.textAlign = "center";
        d.top = "10px";
        d.webkitBorderRadius = "2px";
        d.width = "80%";
        d.zIndex = 24601;
        c.innerText =
            "You are using a browser that is not supported by the Google Maps JavaScript API. Consider changing your browser.";
        d = document.createElement("a");
        b &&
            (c.appendChild(d),
                (d.innerText = "Learn more"),
                (d.href = b),
                (d.target = "_blank"));
        b = document.createElement("a");
        c.appendChild(b);
        b.innerText = "Dismiss";
        b.target = "_blank";
        d.style.paddingLeft = b.style.paddingLeft = "0.8em";
        d.style.boxSizing = b.style.boxSizing = "border-box";
        d.style.color = b.style.color = "black";
        d.style.cursor = b.style.cursor = "pointer";
        d.style.textDecoration = b.style.textDecoration = "underline";
        b.onmouseup = function() {
            a.removeChild(c);
        };
    };
    GM = function(a) {
        this.i = a.replace("www.google", "maps.google");
    };
    HM = function(a) {
        a.style.marginLeft = _.Q(5);
        a.style.marginRight = _.Q(5);
        _.Po(a, 1e6);
        this.o = a;
        a = this.j = _.Oo("a", a);
        var b = a.style;
        b.position = "static";
        b.overflow = "visible";
        _.vL(a, "none");
        a.style.display = "inline";
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener");
        b = _.Oo("div");
        var c = new _.P(66, 26);
        _.Qh(b, c);
        a.appendChild(b);
        this.i = _.HE(null, b, _.Pk, c);
        _.Ro(b);
        _.sz(b, "pointer");
    };
    IM = function(a, b) {
        a = a.i;
        _.FE(
            a,
            b ?
            _.op("api-3/images/google_white5", !0) :
            _.op("api-3/images/google4", !0),
            a.o
        );
    };
    KM = function(a, b, c) {
        function d() {
            var g = f.get("hasCustomStyles"),
                h = a.getMapTypeId();
            IM(e, g || "satellite" == h || "hybrid" == h);
        }
        var e = JM(a, b, c),
            f = a.__gm;
        _.K.addListener(f, "hascustomstyles_changed", d);
        _.K.addListener(a, "maptypeid_changed", d);
        d();
        return e;
    };
    JM = function(a, b, c) {
        function d() {
            var g = c && a.get("passiveLogo");
            f.setUrl(g ? null : b.get("url"));
        }
        var e = _.Oo("div"),
            f = new HM(e);
        _.K.addListener(a, "passivelogo_changed", d);
        _.K.addListener(b, "url_changed", d);
        d();
        return f;
    };
    LM = function(a, b, c, d) {
        function e() {
            0 != f.get("enabled") &&
                (null != d && f.get("active") ? f.set("value", d) : f.set("value", c));
        }
        var f = this;
        _.K.addListener(this, "value_changed", function() {
            f.set("active", f.get("value") == c);
        });
        new _.Lp(a, b, e);
        "click" == b &&
            "button" != a.tagName.toLowerCase() &&
            new _.Lp(a, "keydown", function(g) {
                "Enter" == g.key && e();
            });
        _.K.addListener(this, "display_changed", function() {
            _.nz(a, 0 != f.get("display"));
        });
    };
    MM = function(a, b, c, d) {
        return new LM(a, b, c, d);
    };
    OM = function(a, b, c, d, e) {
        var f = this;
        this.i = document.createElement("div");
        a.appendChild(this.i);
        this.i.setAttribute("role", "button");
        this.i.setAttribute("tabindex", 0);
        this.i.setAttribute("title", d.title);
        this.i.setAttribute("aria-label", d.title);
        this.i.setAttribute("aria-pressed", !1);
        _.ZE(this.i);
        _.cy(this.i);
        this.j = this.i.style;
        this.j.overflow = "hidden";
        d.Lg ? qL(this.i) : (this.j.textAlign = "center");
        d.height &&
            ((this.j.height = _.Q(d.height)),
                (this.j.display = "table-cell"),
                (this.j.verticalAlign = "middle"));
        this.j.position = "relative";
        BL(this.i, d);
        d.Yf && zL(this.i);
        d.zh && AL(this.i);
        this.i.style.webkitBackgroundClip = "padding-box";
        this.i.style.backgroundClip = "padding-box";
        this.i.style.MozBackgroundClip = "padding";
        this.H = d.Xh || !1;
        this.T = d.Yf || !1;
        _.Gz(this.i, "0 1px 4px -1px rgba(0,0,0,0.3)");
        this.i.appendChild(b);
        d.Nl ?
            ((a = _.HE(_.op("arrow-down"), this.i)),
                _.No(a, new _.O(6, 0), !_.Bu.i),
                (a.style.top = "50%"),
                (a.style.marginTop = _.Q(-2)),
                this.set("active", !1)) :
            ((a = e(this.i, "click", c)),
                a.bindTo("value", this),
                this.bindTo("active", a),
                a.bindTo("enabled", this));
        d.Xh && (this.j.fontWeight = "500");
        this.o = _.Ky(this.j.paddingLeft) || 0;
        d.Lg ||
            ((this.j.fontWeight = "500"),
                (d = this.i.offsetWidth - this.o - (_.Ky(this.j.paddingRight) || 0)),
                (this.j.fontWeight = ""),
                _.he(d) && 0 <= d && (this.j.minWidth = _.Q(d)));
        new _.Lp(this.i, "mousedown", function(g) {
            0 != f.get("enabled") && _.K.trigger(f, "mousedown", g);
        });
        new _.Lp(this.i, "mouseover", function() {
            return NM(f, !0);
        });
        new _.Lp(this.i, "mouseout", function() {
            return NM(f, !1);
        });
        _.K.addListener(this, "enabled_changed", function() {
            return NM(f, !1);
        });
        _.K.addListener(this, "active_changed", function() {
            return NM(f, !1);
        });
    };
    NM = function(a, b) {
        var c = !!a.get("active") || a.H;
        0 == a.get("enabled") ?
            ((a.j.color = "gray"), (b = c = !1)) :
            ((a.j.color = c || b ? "#000" : "#565656"),
                a.i.setAttribute("aria-pressed", c));
        a.T || (a.j.borderLeft = "0");
        _.he(a.o) && (a.j.paddingLeft = _.Q(a.o));
        a.j.fontWeight = c ? "500" : "";
        a.j.backgroundColor = b ? "#ebebeb" : "#fff";
    };
    _.PM = function(a, b, c, d) {
        return new OM(a, b, c, d, MM);
    };
    SM = function(a, b, c, d, e) {
        a = this.H = _.Oo("div", a);
        BL(a, e);
        e = _.Bu.i;
        _.cy(a);
        qL(a);
        var f = (this.i = _.Oo("span", a));
        f.setAttribute("role", "checkbox");
        this.j = new Image();
        this.o = new Image();
        var g = this.j,
            h = this.o;
        g.src = _.jE(
            '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>\n</svg>\n'
        );
        f.appendChild(g);
        h.src = _.jE(
            '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">\n    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>\n'
        );
        f.appendChild(h);
        h.style.height = g.style.height = "1em";
        h.style.width = g.style.width = "1em";
        h.style.transform = g.style.transform = "translateY(0.15em)";
        g = _.Oo("label", a);
        g.innerHTML = b;
        f.style.verticalAlign = g.style.verticalAlign = "middle";
        _.sz(g, "pointer");
        a.style.backgroundColor = "#fff";
        a.style.whiteSpace = "nowrap";
        a.style[e ? "paddingLeft" : "paddingRight"] = _.Q(8);
        var k = this;
        _.K.kb(k, "active_changed", function() {
            f.checked = !!k.get("active");
            QM(k);
        });
        _.K.addDomListener(a, "mouseover", function() {
            RM(k, !0);
        });
        _.K.addDomListener(a, "mouseout", function() {
            RM(k, !1);
        });
        b = MM(a, "click", c, d);
        b.bindTo("value", this);
        b.bindTo("display", this);
        this.bindTo("active", b);
    };
    RM = function(a, b) {
        a.H.style.backgroundColor = b ? "#ebebeb" : "#fff";
        QM(a);
    };
    QM = function(a) {
        var b = a.i.checked;
        _.nz(a.j, b);
        _.nz(a.o, !b);
    };
    TM = function(a, b, c, d) {
        var e = _.Oo("div", a);
        BL(e, d);
        _.Jo(b, e);
        e.style.backgroundColor = "#fff";
        _.K.bind(this, "active_changed", this, function() {
            e.style.fontWeight = this.get("active") ? "500" : "";
        });
        _.K.bind(this, "enabled_changed", this, function() {
            var f = 0 != this.get("enabled");
            e.style.color = f ? "black" : "gray";
            (f = f ? d.title : d.Vk) && e.setAttribute("title", f);
        });
        a = MM(e, "mouseup", c);
        a.bindTo("value", this);
        a.bindTo("display", this);
        a.bindTo("enabled", this);
        this.bindTo("active", a);
        _.K.lb(e, "mouseover", this, function() {
            0 != this.get("enabled") &&
                ((e.style.backgroundColor = "#ebebeb"), (e.style.color = "#000"));
        });
        _.K.addDomListener(e, "mouseout", function() {
            e.style.backgroundColor = "#fff";
            e.style.color = "#565656";
        });
    };
    UM = function(a) {
        var b = _.Oo("div", a);
        b.style.margin = "1px 0";
        b.style.borderTop = "1px solid #ebebeb";
        _.K.bind(this, "display_changed", this, function() {
            _.nz(b, 0 != this.get("display"));
        });
    };
    WM = function(a, b, c, d, e) {
        this.o = b;
        e = e || {};
        b = this.i = _.Oo("div", b);
        b.style.backgroundColor = "white";
        _.Po(b, -1);
        b.style.padding = _.Q(2);
        yL(b, _.Q(_.IK(d)));
        _.Gz(b, "0 1px 4px -1px rgba(0,0,0,0.3)");
        e.position ?
            _.No(b, e.position, e.i) :
            ((b.style.position = "absolute"),
                (b.style.top = "100%"),
                (b.style.left = "0"),
                (b.style.right = "0"));
        qL(b);
        for (_.oz(b); _.Zd(c);) {
            e = c.shift();
            for (var f = 0; f < _.Zd(e); ++f) {
                var g = e[f],
                    h,
                    k = {
                        title: g.alt,
                        Vk: g.H || void 0,
                        fontSize: JL(d),
                        padding: [(1 + d) >> 3],
                    };
                null != g.o ?
                    (h = new SM(b, g.label, g.i, g.o, k)) :
                    (h = new TM(b, g.label, g.i, k));
                h.bindTo("value", a, g.Fc);
                h.bindTo("display", g);
                h.bindTo("enabled", g);
            }
            var l = [];
            _.B(c, function(m) {
                l = l.concat(m);
            });
            l.length && ((f = new UM(b)), VM(f, e, l));
        }
    };
    VM = function(a, b, c) {
        function d() {
            function e(f) {
                for (var g = 0; g < _.Zd(f); ++g)
                    if (0 != f[g].get("display")) return !0;
                return !1;
            }
            a.set("display", e(b) && e(c));
        }
        _.B(b.concat(c), function(e) {
            _.K.addListener(e, "display_changed", d);
        });
    };
    XM = function(a) {
        var b = a.i;
        if (!b.listeners) {
            var c = a.o;
            b.listeners = [
                _.K.addDomListener(c, "mouseout", function() {
                    b.timeout = window.setTimeout(function() {
                        a.set("active", !1);
                    }, 1e3);
                }),
                _.K.lb(c, "mouseover", a, a.j),
                _.K.addDomListener(document.body, "mouseup", function(d) {
                    for (d = d.target; d;) {
                        if (d == c) return;
                        d = d.parentNode;
                    }
                    a.set("active", !1);
                }),
            ];
        }
        _.pz(b);
    };
    CL = _.p(
        ".gm-style .gm-style-mtc label,.gm-style .gm-style-mtc div{font-weight:400}\n"
    );
    $M = function(a, b, c, d) {
        var e = this;
        this.j = a;
        this.o = d;
        this.i = [];
        _.K.addListener(this, "fontloaded_changed", function() {
            if (e.get("fontLoaded")) {
                for (var h = e.i.length, k = 0, l = 0; l < h; ++l) {
                    var m = _.Rh(e.i[l].parentNode),
                        q = l == h - 1;
                    e.i[l].vi && _.No(e.i[l].vi.i, new _.O(q ? 0 : k, m.height), q);
                    k += m.width;
                }
                e.i.length = 0;
            }
        });
        _.K.addListener(this, "mapsize_changed", function() {
            return YM(e);
        });
        _.K.addListener(this, "display_changed", function() {
            return YM(e);
        });
        d = b.length;
        for (var f = 0, g = 0; g < d; ++g)
            f = ZM(this, c, b[g], f, 0 == g, g == d - 1);
        _.Fz();
        _.sz(a, "pointer");
    };
    ZM = function(a, b, c, d, e, f) {
        var g = document.createElement("div");
        a.j.appendChild(g);
        _.vL(g, "left");
        _.Hn(CL, a.j);
        _.Ho(g, "gm-style-mtc");
        var h = _.Jo(c.label, a.j, !0);
        b = b(g, h, c.i, {
            title: c.alt,
            padding: [0, 17],
            height: a.o,
            fontSize: JL(a.o),
            Yf: e,
            zh: f,
        });
        g.style.position = "relative";
        e = b.Db();
        new _.Lp(e, "focusin", function() {
            g.style.zIndex = 1;
        });
        new _.Lp(e, "focusout", function() {
            g.style.zIndex = 0;
        });
        c.Fc && b.bindTo("value", a, c.Fc);
        e = null;
        h = _.Rh(g);
        c.j &&
            ((e = new WM(a, g, c.j, a.o, {
                    position: new _.O(f ? 0 : d, h.height),
                    i: f,
                })),
                aN(g, b, e));
        a.i.push({ parentNode: g, vi: e });
        return (d += h.width);
    };
    YM = function(a) {
        var b = a.get("mapSize");
        b = !!(a.get("display") || (b && 200 <= b.width && 200 <= b.height));
        _.nz(a.j, b);
        _.K.trigger(a.j, "resize");
    };
    aN = function(a, b, c) {
        new _.Lp(a, "mousedown", function() {
            return c.set("active", !0);
        });
        new _.Lp(a, "mouseover", function() {
            b.get("active") && c.set("active", !0);
        });
        _.K.addDomListener(b, "active_changed", function() {
            b.get("active") || c.set("active", !1);
        });
    };
    bN = function(a, b, c) {
        var d = this;
        _.Fz();
        _.sz(a, "pointer");
        qL(a);
        a.style.width = _.Q(120);
        DL();
        _.Ho(a, "gm-style-mtc");
        var e = _.Jo("", a, !0),
            f = _.PM(a, e, null, {
                title: "Change map style",
                Nl: !0,
                Lg: !0,
                Xh: !0,
                padding: [8, 17],
                fontSize: 18,
                Yf: !0,
                zh: !0,
            }),
            g = {},
            h = [b];
        b = _.Aa(b);
        for (var k = b.next(); !k.done; k = b.next())
            (k = k.value),
            "mapTypeId" == k.Fc && (g[k.i] = k.label),
            k.j && h.push.apply(h, _.Ba(k.j));
        this.addListener("maptypeid_changed", function() {
            _.mz(e, g[d.get("mapTypeId")] || "");
        });
        this.i = new WM(this, a, h, c);
        f.addListener("mousedown", function() {
            d.i.set("active", !d.i.get("active"));
        });
        this.j = a;
    };
    cN = function(a) {
        var b = a.get("mapSize");
        b = !!(a.get("display") || (b && 200 <= b.width && 200 <= b.height));
        _.nz(a.j, b);
        _.K.trigger(a.j, "resize");
    };
    dN = function(a) {
        this.j = a;
        this.i = !1;
    };
    eN = function(a, b, c) {
        a.get(b) !== c && ((a.i = !0), a.set(b, c), (a.i = !1));
    };
    fN = function(a) {
        var b = a.get("internalMapTypeId");
        _.$d(a.j, function(c, d) {
            d.mapTypeId == b && d.af && a.get(d.af) == d.value && (b = c);
        });
        eN(a, "mapTypeId", b);
    };
    gN = function(a, b, c) {
        a.innerText = "";
        b = _.Aa(
            b ?
            [
                '<svg xmlns="http://www.w3.org/2000/svg" width="22px" height="13px" viewBox="0 0 22 13">\n  <path fill="#666" d="M2.75,5H10V0H4.4L2.75,5z M0,13h10V7H2L0,13z M20,7h-8v6h10L20,7z M17.6,0H12v5h7.25L17.6,0z"/>\n</svg>\n',
                '<svg xmlns="http://www.w3.org/2000/svg" width="22px" height="13px" viewBox="0 0 22 13">\n  <path fill="#333" d="M2.75,5H10V0H4.4L2.75,5z M0,13h10V7H2L0,13z M20,7h-8v6h10L20,7z M17.6,0H12v5h7.25L17.6,0z"/>\n</svg>\n',
                '<svg xmlns="http://www.w3.org/2000/svg" width="22px" height="13px" viewBox="0 0 22 13">\n  <path fill="#111" d="M2.75,5H10V0H4.4L2.75,5z M0,13h10V7H2L0,13z M20,7h-8v6h10L20,7z M17.6,0H12v5h7.25L17.6,0z"/>\n</svg>\n',
            ] :
            [
                '<svg xmlns="http://www.w3.org/2000/svg" width="18px" height="16px" viewBox="0 0 18 16">\n  <path fill="#666" d="M0,16h8V9H0V16z M10,16h8V9h-8V16z M0,7h8V0H0V7z M10,0v7h8V0H10z"/>\n</svg>\n',
                '<svg xmlns="http://www.w3.org/2000/svg" width="18px" height="16px" viewBox="0 0 18 16">\n  <path fill="#333" d="M0,16h8V9H0V16z M10,16h8V9h-8V16z M0,7h8V0H0V7z M10,0v7h8V0H10z"/>\n</svg>\n',
                '<svg xmlns="http://www.w3.org/2000/svg" width="18px" height="16px" viewBox="0 0 18 16">\n  <path fill="#111" d="M0,16h8V9H0V16z M10,16h8V9h-8V16z M0,7h8V0H0V7z M10,0v7h8V0H10z"/>\n</svg>\n',
            ]
        );
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            var e = document.createElement("img");
            e.style.width = _.Q(JL(c));
            e.src = _.jE(d);
            a.appendChild(e);
        }
    };
    iN = function(a, b, c, d) {
        var e = this;
        c = _.vh[43] ? "rgb(34, 34, 34)" : "rgb(255, 255, 255)";
        this.T = b;
        this.i = _.$E("Rotate map 90 degrees");
        this.j = _.$E("Tilt map");
        this.$ = a;
        this.H = _.Oo("div", a);
        this.o = !0;
        _.Vm(pM, d);
        _.Qh(this.i, new _.P(b, b));
        _.Qh(this.j, new _.P(b, b));
        this.i.style.left = this.i.style.top = "0";
        this.j.style.left = this.j.style.top = "0";
        this.i.style.backgroundColor = this.j.style.backgroundColor = c;
        this.H.appendChild(this.i);
        this.H.appendChild(this.j);
        a = _.Aa([
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">\n  <path fill="#666" fill-rule="evenodd" d="M20 10c0-5.52-4.48-10-10-10s-10 4.48-10 10v5h5v-5c0-2.76 2.24-5 5-5s5 2.24 5 5v5h-4l6.5 7 6.5-7h-4v-5z" clip-rule="evenodd"/>\n</svg>\n',
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">\n  <path fill="#333" fill-rule="evenodd" d="M20 10c0-5.52-4.48-10-10-10s-10 4.48-10 10v5h5v-5c0-2.76 2.24-5 5-5s5 2.24 5 5v5h-4l6.5 7 6.5-7h-4v-5z" clip-rule="evenodd"/>\n</svg>\n',
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">\n  <path fill="#111" fill-rule="evenodd" d="M20 10c0-5.52-4.48-10-10-10s-10 4.48-10 10v5h5v-5c0-2.76 2.24-5 5-5s5 2.24 5 5v5h-4l6.5 7 6.5-7h-4v-5z" clip-rule="evenodd"/>\n</svg>\n',
        ]);
        for (d = a.next(); !d.done; d = a.next())
            (d = d.value),
            (c = document.createElement("img")),
            (c.style.width = c.style.height = _.Q(JL(b))),
            (c.src = _.jE(d)),
            this.i.appendChild(c);
        this.i.style.overflow = "hidden";
        this.i.setAttribute("class", "gm-control-active");
        this.i.style.marginBottom = _.Q(12 + (b >> 1));
        gN(this.j, !1, b);
        this.j.style.overflow = "hidden";
        this.j.setAttribute("class", "gm-tilt gm-control-active");
        _.Gz(this.i, "0 1px 4px -1px rgba(0,0,0,0.3)");
        _.Gz(this.j, "0 1px 4px -1px rgba(0,0,0,0.3)");
        wL(this.i, _.Q(_.IK(b)));
        wL(this.j, _.Q(_.IK(b)));
        _.Ro(this.i);
        _.Ro(this.j);
        _.sz(this.i, "pointer");
        _.sz(this.j, "pointer");
        _.K.lb(this.i, "click", this, this.W);
        _.K.lb(this.j, "click", this, this.ka);
        _.K.addListener(this, "aerialavailableatzoom_changed", function() {
            return hN(e);
        });
        _.K.addListener(this, "tilt_changed", function() {
            e.o = 0 != e.get("tilt");
            hN(e);
        });
        _.K.addListener(this, "mapsize_changed", function() {
            hN(e);
        });
        _.K.addListener(this, "rotatecontrol_changed", function() {
            hN(e);
        });
    };
    hN = function(a) {
        var b = a.get("mapSize"),
            c = !!a.get("aerialAvailableAtZoom");
        b = !!a.get("rotateControl") || (b && 200 <= b.width && 200 <= b.height);
        c = c && b;
        b = a.$;
        gN(a.j, a.o, a.T);
        a.i.style.display = a.o ? "block" : "none";
        var d = a.T,
            e = a.o ? 12 + Math.floor(2.25 * a.T) : a.T;
        a.H.style.width = _.Q(d);
        a.H.style.height = _.Q(e);
        b.setAttribute("controlWidth", d);
        b.setAttribute("controlHeight", e);
        _.nz(b, c);
        _.K.trigger(b, "resize");
    };
    jN = function(a, b, c) {
        a = new iN(a, b, { cache: !0 }, c);
        a.bindTo("mapSize", this);
        a.bindTo("rotateControl", this);
        a.bindTo("aerialAvailableAtZoom", this);
        a.bindTo("heading", this);
        a.bindTo("tilt", this);
    };
    kN = function(a, b, c, d) {
        a.innerText = "";
        b = _.Aa(
            0 == b ?
            1 == c ?
            [
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <polygon fill="#666" points="18,7 11,7 11,0 7,0 7,7 0,7 0,11 7,11 7,18 11,18 11,11 18,11"/>\n</svg>\n',
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <polygon fill="#B1B1B1" points="18,7 11,7 11,0 7,0 7,7 0,7 0,11 7,11 7,18 11,18 11,11 18,11"/>\n</svg>\n',
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <polygon fill="#E4E4E4" points="18,7 11,7 11,0 7,0 7,7 0,7 0,11 7,11 7,18 11,18 11,11 18,11"/>\n</svg>\n',
            ] :
            [
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <polygon fill="#666" points="18,7 11,7 11,0 7,0 7,7 0,7 0,11 7,11 7,18 11,18 11,11 18,11"/>\n</svg>\n',
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <polygon fill="#333" points="18,7 11,7 11,0 7,0 7,7 0,7 0,11 7,11 7,18 11,18 11,11 18,11"/>\n</svg>\n',
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <polygon fill="#111" points="18,7 11,7 11,0 7,0 7,7 0,7 0,11 7,11 7,18 11,18 11,11 18,11"/>\n</svg>\n',
            ] :
            1 == c ?
            [
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#666" d="M0,7h18v4H0V7z"/>\n</svg>\n',
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#B1B1B1" d="M0,7h18v4H0V7z"/>\n</svg>\n',
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#E4E4E4" d="M0,7h18v4H0V7z"/>\n</svg>\n',
            ] :
            [
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#666" d="M0,7h18v4H0V7z"/>\n</svg>\n',
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#333" d="M0,7h18v4H0V7z"/>\n</svg>\n',
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">\n  <path fill="#111" d="M0,7h18v4H0V7z"/>\n</svg>\n',
            ]
        );
        for (c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var e = document.createElement("img");
            e.style.width = e.style.height = _.Q(JL(d));
            e.src = _.jE(c);
            a.appendChild(e);
        }
    };
    oN = function(a, b, c, d) {
        var e = this;
        this.H = a;
        this.j = b;
        this.i = _.Oo("div", a);
        _.Ro(this.i);
        _.Qo(this.i);
        _.Gz(this.i, "0 1px 4px -1px rgba(0,0,0,0.3)");
        wL(this.i, _.Q(_.IK(b)));
        this.i.style.cursor = "pointer";
        _.Vm(pM, d);
        _.K.addDomListener(this.i, "mouseover", function() {
            e.set("mouseover", !0);
        });
        _.K.addDomListener(this.i, "mouseout", function() {
            e.set("mouseover", !1);
        });
        this.T = lN(this, this.i, 0);
        this.o = _.Oo("div", this.i);
        this.o.style.position = "relative";
        this.o.style.overflow = "hidden";
        this.o.style.width = _.Q((3 * b) / 4);
        this.o.style.height = _.Q(1);
        this.o.style.margin = "0 5px";
        this.W = lN(this, this.i, 1);
        _.K.addListener(this, "display_changed", function() {
            return mN(e);
        });
        _.K.addListener(this, "mapsize_changed", function() {
            return mN(e);
        });
        _.K.addListener(this, "maptypeid_changed", function() {
            var f = e.get("mapTypeId");
            e.set(
                "controlStyle",
                (("satellite" == f || "hybrid" == f) && _.vh[43]) || "streetview" == f ?
                1 :
                0
            );
        });
        _.K.addListener(this, "controlstyle_changed", function() {
            var f = e.get("controlStyle");
            if (null != f) {
                var g = nN[f];
                kN(e.T, 0, f, e.j);
                kN(e.W, 1, f, e.j);
                e.i.style.backgroundColor = g.backgroundColor;
                e.o.style.backgroundColor = g.ri;
            }
        });
    };
    lN = function(a, b, c) {
        var d = _.$E(0 == c ? "Zoom in" : "Zoom out");
        b.appendChild(d);
        _.K.addDomListener(d, "click", function() {
            var e = 0 == c ? 1 : -1;
            a.set("zoom", a.get("zoom") + e);
        });
        d.setAttribute("class", "gm-control-active");
        d.style.overflow = "hidden";
        b = a.get("controlStyle");
        kN(d, c, b, a.j);
        return d;
    };
    mN = function(a) {
        var b = a.get("mapSize");
        if ((b && 200 <= b.width && 200 <= b.height) || a.get("display")) {
            _.pz(a.H);
            b = a.j;
            var c = 2 * a.j + 1;
            a.i.style.width = _.Q(b);
            a.i.style.height = _.Q(c);
            a.H.setAttribute("controlWidth", b);
            a.H.setAttribute("controlHeight", c);
            _.K.trigger(a.H, "resize");
            b = a.T.style;
            b.width = _.Q(a.j);
            b.height = _.Q(a.j);
            b.left = b.top = "0";
            a.o.style.top = "0";
            b = a.W.style;
            b.width = _.Q(a.j);
            b.height = _.Q(a.j);
            b.left = b.top = "0";
        } else _.oz(a.H);
    };
    pN = function(a, b, c, d) {
        a = this.i = _.Oo("div");
        _.vz(a);
        b = new oN(a, b, c, d);
        b.bindTo("mapSize", this);
        b.bindTo("display", this, "display");
        b.bindTo("mapTypeId", this);
        b.bindTo("zoom", this);
        this.mf = b;
    };
    qN = function(a) {
        a.mf && (a.mf.unbindAll(), (a.mf = null));
    };
    rN = function(a, b) {
        _.vz(a);
        _.Po(a, 1000001);
        this.i = a;
        this.j = _.DK(a, b);
        this.o = a = _.Oo("a", this.j);
        a.style.textDecoration = "none";
        _.sz(a, "pointer");
        _.Ko(a, "Terms of Use");
        pL(a, _.Gu);
        a.target = "_blank";
        a.setAttribute("rel", "noopener");
        a.style.color = "#444";
        this.fh();
    };
    sN = function(a, b) {
        var c = a.$;
        if (c) b(c);
        else {
            var d = d ? Math.min(d, screen.width) : screen.width;
            var e = _.Oo(
                "div",
                document.body,
                new _.O(-screen.width, -screen.height),
                new _.P(d, screen.height)
            );
            e.style.visibility = "hidden";
            a.T ? a.T++ : ((a.T = 1), _.Oo("div", e, _.Pk).appendChild(a));
            window.setTimeout(function() {
                c = a.$;
                if (!c) {
                    var f = a.parentNode,
                        g = a.offsetWidth,
                        h = a.offsetHeight;
                    if ((1 == _.tj.type && 9 == document.documentMode) || 4 == _.tj.i)
                        ++g, ++h;
                    c = new _.P(Math.min(d, g), Math.min(screen.height, h));
                    for (a.$ = c; f.firstChild;) f.removeChild(f.firstChild);
                    _.so(f);
                }
                a.T--;
                a.T || (a.$ = null);
                _.so(e);
                e = null;
                b(c);
            }, 0);
        }
    };
    vN = function(a, b, c) {
        _.vz(a);
        _.Po(a, 1000001);
        this.i = a;
        var d = _.Oo("div", a);
        a = _.DK(d, b);
        this.W = d;
        this.T = _.DK(_.Oo("div"), b);
        b = _.Oo("a", a);
        _.Ko(b, "Map Data");
        b.style.textDecoration = "none";
        _.sz(b, "pointer");
        _.K.fe(b, "click", this);
        this.o = b;
        this.j = _.Oo("span", a);
        this.H = tN(this);
        this.$ = c;
        uN(this);
    };
    uN = function(a) {
        var b = a.get("size");
        b &&
            sN(
                a.T,
                (0, _.y)(function(c) {
                    var d = wN(this);
                    _.fz(this.j, d);
                    c = c.width > b.width - this.H;
                    var e = !this.get("hide");
                    _.nz(this.i, e && !!d);
                    _.nz(this.o, !(!d || !c));
                    _.nz(this.j, !(!d || c));
                    this.i.style.width = _.Q(
                        12 + _.Rh(this.j).width + _.Rh(this.o).width
                    );
                    _.K.trigger(this.i, "resize");
                }, a)
            );
    };
    wN = function(a) {
        var b = a.get("attributionText") || "Image may be subject to copyright";
        a.$ && (b = b.replace("Map data", "Map Data"));
        return b;
    };
    tN = function(a) {
        var b = a.get("rmiWidth") || 0,
            c = a.get("tosWidth") || 0;
        a = a.get("scaleWidth") || 0;
        return b + c + a;
    };
    BN = function(a) {
        var b = this;
        this.i = xN(a);
        yN(this.i);
        this.j = zN(this.i);
        _.kF(this.i, function() {
            _.oz(b.i);
        });
        AN(this);
    };
    xN = function(a) {
        a = _.Oo("div", a);
        a.style.backgroundColor = "white";
        a.style.padding = _.Q(15) + " " + _.Q(21);
        a.style.border = _.Q(1) + " solid #ababab";
        a.style.fontFamily = "Roboto,Arial,sans-serif";
        a.style.color = "#222";
        a.style.boxSizing = "border-box";
        _.Gz(a, "0 4px 16px rgba(0,0,0,0.2)");
        _.Po(a, 10000002);
        return a;
    };
    yN = function(a) {
        a = _.Oo("div", a);
        a.style.padding = "0 0 10px 0";
        a.style.fontSize = "16px";
        a.style.boxSizing = "border-box";
        _.Jo("Map Data", a);
    };
    zN = function(a) {
        a = _.Oo("div", a);
        a.style.fontSize = "13px";
        return _.Jo("", a);
    };
    AN = function(a) {
        var b;
        if (
            (b = (b = a.get("size")) ?
                new _.P(Math.min(300, b.width - 10), Math.min(180, b.height - 10)) :
                null)
        ) {
            _.Qh(a.i, new _.P(Math.max(0, b.width), Math.max(0, b.height)));
            var c = a.get("size");
            _.No(a.i, new _.O((c.width - b.width) / 2, (c.height - b.height) / 2));
        }
    };
    CN = function(a) {
        _.lz(a, "gmnoprint");
        _.Ho(a, "gmnoscreen");
        this.i = a;
        a = this.j = _.Oo("div", a);
        a.style.fontFamily = "Roboto,Arial,sans-serif";
        a.style.fontSize = _.Q(11);
        a.style.color = "#444";
        a.style.direction = "ltr";
        a.style.textAlign = "right";
        a.style.backgroundColor = "#f5f5f5";
    };
    DN = function(a, b, c) {
        c = new vN(document.createElement("div"), a, c);
        c.bindTo("size", this);
        c.bindTo("rmiWidth", this);
        c.bindTo("attributionText", this);
        c.bindTo("fontLoaded", this);
        c.bindTo("isCustomPanorama", this);
        var d = new BN(a);
        d.bindTo("size", this);
        d.bindTo("attributionText", this);
        _.K.addListener(c, "click", (0, _.y)(d.set, d, "visible", !0));
        d = new CN(document.createElement("div"));
        d.bindTo("attributionText", this);
        a = new rN(document.createElement("div"), a);
        a.bindTo("fontLoaded", this);
        a.bindTo("mapTypeId", this);
        c.bindTo("tosWidth", a, "width");
        c.bindTo("mapTypeId", this);
        c.bindTo("scaleWidth", this);
        b && _.vh[28] ?
            (c.bindTo("hide", b, "hideLegalNotices"),
                d.bindTo("hide", b, "hideLegalNotices"),
                a.bindTo("hide", b, "hideLegalNotices")) :
            (c.bindTo("isCustomPanorama", this),
                d.bindTo("hide", this, "isCustomPanorama"));
        this.i = c;
        this.j = d;
        this.o = a;
    };
    EN = function(a, b) {
        _.Ro(a);
        _.Qo(a);
        a.style.fontFamily = "Roboto,Arial,sans-serif";
        a.style.fontSize = _.Q(Math.round((11 * b) / 40));
        a.style.textAlign = "center";
        _.Gz(a, "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px");
        a.setAttribute("controlWidth", _.Q(25));
        _.sz(a, "pointer");
        this.i = [];
        this.j = b;
        this.o = a;
    };
    FN = function(a, b, c) {
        _.K.addDomListener(b, "mouseover", function() {
            b.style.color = "#bbb";
            b.style.fontWeight = "bold";
        });
        _.K.addDomListener(b, "mouseout", function() {
            b.style.color = "#999";
            b.style.fontWeight = "400";
        });
        _.K.lb(b, "click", a, function() {
            this.set("pano", c);
        });
    };
    JN = function(a, b) {
        var c = this;
        this.T = a;
        _.Ho(a, "gm-svpc");
        a.setAttribute("dir", "ltr");
        a.setAttribute("title", "Drag Pegman onto the map to open Street View");
        a.style.backgroundColor = "#fff";
        this.i = { Ef: null, active: null, Bf: null };
        this.j = b;
        this.o = !0;
        GN(this);
        this.set("position", _.oL.aj.offset);
        _.K.lb(a, "mouseover", this, this.W);
        _.K.lb(a, "mouseout", this, this.$);
        a = this.H = new _.xF(a);
        a.bindTo("position", this);
        _.K.forward(a, "dragstart", this);
        _.K.forward(a, "drag", this);
        _.K.forward(a, "dragend", this);
        var d = this;
        _.K.addListener(a, "dragend", function() {
            d.set("position", _.oL.aj.offset);
        });
        _.K.addListener(this, "mode_changed", function() {
            var e = c.get("mode");
            c.H.get("enabled") || c.H.set("enabled", !0);
            HN(c, e);
        });
        _.K.addListener(this, "display_changed", function() {
            return IN(c);
        });
        _.K.addListener(this, "mapsize_changed", function() {
            return IN(c);
        });
        this.set("mode", 1);
    };
    GN = function(a) {
        for (var b in a.i) {
            var c = a.i[b];
            c && c.parentNode && _.Nc(c);
            a.i[b] = null;
        }
        b = a.T;
        if (a.o) {
            _.pz(b);
            c = new _.P(a.j, a.j);
            _.Gz(b, "0 1px 4px -1px rgba(0,0,0,0.3)");
            wL(b, _.Q(40 < a.j ? Math.round(a.j / 20) : 2));
            b.style.width = _.Q(c.width);
            b.style.height = _.Q(c.height);
            var d = 32 > a.j ? a.j - 2 : 40 > a.j ? 30 : 10 + a.j / 2,
                e = _.Oo("div", b);
            e.style.position = "absolute";
            e.style.left = "50%";
            e.style.top = "50%";
            var f = _.Lc("IMG");
            a.i.Ef = f;
            f.src = _.jE(
                '<svg xmlns="http://www.w3.org/2000/svg" width="23" height="38" viewBox="0 0 23 38">\n<path d="M16.6,38.1h-5.5l-0.2-2.9-0.2,2.9h-5.5L5,25.3l-0.8,2a1.53,1.53,0,0,1-1.9.9l-1.2-.4a1.58,1.58,0,0,1-1-1.9v-0.1c0.3-.9,3.1-11.2,3.1-11.2a2.66,2.66,0,0,1,2.3-2l0.6-.5a6.93,6.93,0,0,1,4.7-12,6.8,6.8,0,0,1,4.9,2,7,7,0,0,1,2,4.9,6.65,6.65,0,0,1-2.2,5l0.7,0.5a2.78,2.78,0,0,1,2.4,2s2.9,11.2,2.9,11.3a1.53,1.53,0,0,1-.9,1.9l-1.3.4a1.63,1.63,0,0,1-1.9-.9l-0.7-1.8-0.1,12.7h0Zm-3.6-2h1.7L14.9,20.3l1.9-.3,2.4,6.3,0.3-.1c-0.2-.8-0.8-3.2-2.8-10.9a0.63,0.63,0,0,0-.6-0.5h-0.6l-1.1-.9h-1.9l-0.3-2a4.83,4.83,0,0,0,3.5-4.7A4.78,4.78 0 0,0 11 2.3H10.8a4.9,4.9,0,0,0-1.4,9.6l-0.3,2h-1.9l-1,.9h-0.6a0.74,0.74,0,0,0-.6.5c-2,7.5-2.7,10-3,10.9l0.3,0.1,2.5-6.3,1.9,0.3,0.2,15.8h1.6l0.6-8.4a1.52,1.52,0,0,1,1.5-1.4,1.5,1.5,0,0,1,1.5,1.4l0.9,8.4h0Zm-10.9-9.6h0Zm17.5-.1h0Z" style="fill:#333;opacity:0.7;isolation:isolate"/>\n<path d="M5.9,13.6l1.1-.9h7.8l1.2,0.9" style="fill:#ce592c"/>\n<ellipse cx="10.9" cy="13.1" rx="2.7" ry="0.3" style="fill:#ce592c;opacity:0.5;isolation:isolate"/>\n<path d="M20.6,26.1l-2.9-11.3a1.71,1.71,0,0,0-1.6-1.2H5.7a1.69,1.69,0,0,0-1.5,1.3l-3.1,11.3a0.61,0.61,0,0,0,.3.7l1.1,0.4a0.61,0.61,0,0,0,.7-0.3l2.7-6.7,0.2,16.8h3.6l0.6-9.3a0.47,0.47,0,0,1,.44-0.5h0.06c0.4,0,.4.2,0.5,0.5l0.6,9.3h3.6L15.7,20.3l2.5,6.6a0.52,0.52,0,0,0,.66.31h0l1.2-.4a0.57,0.57,0,0,0,.5-0.7h0Z" style="fill:#fdbf2d"/>\n<path d="M7,13.6l3.9,6.7,3.9-6.7" style="fill:#cf572e;opacity:0.6;isolation:isolate"/>\n<circle cx="10.9" cy="7" r="5.9" style="fill:#fdbf2d"/>\n</svg>\n'
            );
            f.style.width = f.style.height = _.Q(d);
            f.style.position = "absolute";
            f.style.transform = "translate(-50%, -50%)";
            f.style.pointerEvents = "none";
            e.appendChild(f);
            f = _.Lc("IMG");
            a.i.active = f;
            f.src = _.jE(
                '<svg width="24px" height="38px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 38">\n<path d="M22,26.6l-2.9-11.3a2.78,2.78,0,0,0-2.4-2l-0.7-.5a6.82,6.82,0,0,0,2.2-5,6.9,6.9,0,0,0-13.8,0,7,7,0,0,0,2.2,5.1l-0.6.5a2.55,2.55,0,0,0-2.3,2s-3,11.1-3,11.2v0.1a1.58,1.58,0,0,0,1,1.9l1.2,0.4a1.63,1.63,0,0,0,1.9-.9l0.8-2,0.2,12.8h11.3l0.2-12.6,0.7,1.8a1.54,1.54,0,0,0,1.5,1,1.09,1.09,0,0,0,.5-0.1l1.3-.4a1.85,1.85,0,0,0,.7-2h0Zm-1.2.9-1.2.4a0.61,0.61,0,0,1-.7-0.3l-2.5-6.6-0.2,16.8h-9.4L6.6,21l-2.7,6.7a0.52,0.52,0,0,1-.66.31h0l-1.1-.4a0.52,0.52,0,0,1-.31-0.66v0l3.1-11.3a1.69,1.69,0,0,1,1.5-1.3h0.2l1-.9h2.3a5.9,5.9,0,1,1,3.2,0h2.3l1.1,0.9h0.2a1.71,1.71,0,0,1,1.6,1.2l2.9,11.3a0.84,0.84,0,0,1-.4.7h0Z" style="fill:#333;fill-opacity:0.2"/>"\n</svg>\n\n'
            );
            f.style.display = "none";
            f.style.width = f.style.height = _.Q(d);
            f.style.position = "absolute";
            f.style.transform = "translate(-50%, -50%)";
            f.style.pointerEvents = "none";
            e.appendChild(f);
            f = _.Lc("IMG");
            a.i.Bf = f;
            f.style.display = "none";
            f.style.width = f.style.height = _.Q((4 * d) / 3);
            f.style.position = "absolute";
            f.style.transform = "translate(-60%, -45%)";
            f.style.pointerEvents = "none";
            e.appendChild(f);
            f.src = _.jE(
                '<svg width="40px" height="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 50">\n<path d="M34.00,-30.40l-2.9-11.3a2.78,2.78,0,0,0-2.4-2l-0.7-.5a6.82,6.82,0,0,0,2.2-5,6.9,6.9,0,0,0-13.8,0,7,7,0,0,0,2.2,5.1l-0.6.5a2.55,2.55,0,0,0-2.3,2s-3,11.1-3,11.2v0.1a1.58,1.58,0,0,0,1,1.9l1.2,0.4a1.63,1.63,0,0,0,1.9-.9l0.8-2,0.2,12.8h11.3l0.2-12.6,0.7,1.8a1.54,1.54,0,0,0,1.5,1,1.09,1.09,0,0,0,.5-0.1l1.3-.4a1.85,1.85,0,0,0,.7-2h0Zm-1.2.9-1.2.4a0.61,0.61,0,0,1-.7-0.3l-2.5-6.6-0.2,16.8h-9.4L18.60,-36.00l-2.7,6.7a0.52,0.52,0,0,1-.66.31h0l-1.1-.4a0.52,0.52,0,0,1-.31-0.66v0l3.1-11.3a1.69,1.69,0,0,1,1.5-1.3h0.2l1-.9h2.3a5.9,5.9,0,1,1,3.2,0h2.3l1.1,0.9h0.2a1.71,1.71,0,0,1,1.6,1.2l2.9,11.3a0.84,0.84,0,0,1-.4.7h0Zm1.2,59.1-2.9-11.3a2.78,2.78,0,0,0-2.4-2l-0.7-.5a6.82,6.82,0,0,0,2.2-5,6.9,6.9,0,0,0-13.8,0,7,7,0,0,0,2.2,5.1l-0.6.5a2.55,2.55,0,0,0-2.3,2s-3,11.1-3,11.2v0.1a1.58,1.58,0,0,0,1,1.9l1.2,0.4a1.63,1.63,0,0,0,1.9-.9l0.8-2,0.2,12.8h11.3l0.2-12.6,0.7,1.8a1.54,1.54,0,0,0,1.5,1,1.09,1.09,0,0,0,.5-0.1l1.3-.4a1.85,1.85,0,0,0,.7-2h0Zm-1.2.9-1.2.4a0.61,0.61,0,0,1-.7-0.3l-2.5-6.6-0.2,16.8h-9.4L18.60,24.00l-2.7,6.7a0.52,0.52,0,0,1-.66.31h0l-1.1-.4a0.52,0.52,0,0,1-.31-0.66v0l3.1-11.3a1.69,1.69,0,0,1,1.5-1.3h0.2l1-.9h2.3a5.9,5.9,0,1,1,3.2,0h2.3l1.1,0.9h0.2a1.71,1.71,0,0,1,1.6,1.2l2.9,11.3a0.84,0.84,0,0,1-.4.7h0Z" style="fill:#333;fill-opacity:0.2"></path>\n<path d="M15.40,38.80h-4a1.64,1.64,0,0,1-1.4-1.1l-3.1-8a0.9,0.9,0,0,1-.5.1l-1.4.1a1.62,1.62,0,0,1-1.6-1.4l-1.1-13.1,1.6-1.3a6.87,6.87,0,0,1-3-4.6A7.14,7.14 0 0,1 2 4a7.6,7.6,0,0,1,4.7-3.1,7.14,7.14,0,0,1,5.5,1.1,7.28,7.28,0,0,1,2.3,9.6l2.1-.1,0.1,1c0,0.2.1,0.5,0.1,0.8a2.41,2.41,0,0,1,1,1s1.9,3.2,2.8,4.9c0.7,1.2,2.1,4.2,2.8,5.9a2.1,2.1,0,0,1-.8,2.6l-0.6.4a1.63,1.63,0,0,1-1.5.2l-0.6-.3a8.93,8.93,0,0,0,.5,1.3,7.91,7.91,0,0,0,1.8,2.6l0.6,0.3v4.6l-4.5-.1a7.32,7.32,0,0,1-2.5-1.5l-0.4,3.6h0Zm-10-19.2,3.5,9.8,2.9,7.5h1.6V35l-1.9-9.4,3.1,5.4a8.24,8.24,0,0,0,3.8,3.8h2.1v-1.4a14,14,0,0,1-2.2-3.1,44.55,44.55,0,0,1-2.2-8l-1.3-6.3,3.2,5.6c0.6,1.1,2.1,3.6,2.8,4.9l0.6-.4c-0.8-1.6-2.1-4.6-2.8-5.8-0.9-1.7-2.8-4.9-2.8-4.9a0.54,0.54,0,0,0-.4-0.3l-0.7-.1-0.1-.7a4.33,4.33,0,0,0-.1-0.5l-5.3.3,2.2-1.9a4.3,4.3,0,0,0,.9-1,5.17,5.17,0,0,0,.8-4,5.67,5.67,0,0,0-2.2-3.4,5.09,5.09,0,0,0-4-.8,5.67,5.67,0,0,0-3.4,2.2,5.17,5.17,0,0,0-.8,4,5.67,5.67,0,0,0,2.2,3.4,3.13,3.13,0,0,0,1,.5l1.6,0.6-3.2,2.6,1,11.5h0.4l-0.3-8.2h0Z" style="fill:#333"></path>\n<path d="M3.35,15.90l1.1,12.5a0.39,0.39,0,0,0,.36.42l0.14,0,1.4-.1a0.66,0.66,0,0,0,.5-0.4l-0.2-3.8-3.3-8.6h0Z" style="fill:#fdbf2d"></path>\n<path d="M5.20,28.80l1.1-.1a0.66,0.66,0,0,0,.5-0.4l-0.2-3.8-1.2-3.1Z" style="fill:#ce592b;fill-opacity:0.25"></path>\n<path d="M21.40,35.70l-3.8-1.2-2.7-7.8L12.00,15.5l3.4-2.9c0.2,2.4,2.2,14.1,3.7,17.1,0,0,1.3,2.6,2.3,3.1v2.9m-8.4-8.1-2-.3,2.5,10.1,0.9,0.4v-2.9" style="fill:#e5892b"></path>\n<path d="M17.80,25.40c-0.4-1.5-.7-3.1-1.1-4.8-0.1-.4-0.1-0.7-0.2-1.1l-1.1-2-1.7-1.6s0.9,5,2.4,7.1a19.12,19.12,0,0,0,1.7,2.4h0Z" style="fill:#cf572e;opacity:0.6;isolation:isolate"></path>\n<path d="M14.40,37.80h-3a0.43,0.43,0,0,1-.4-0.4l-3-7.8-1.7-4.8-3-9,8.9-.4s2.9,11.3,4.3,14.4c1.9,4.1,3.1,4.7,5,5.8h-3.2s-4.1-1.2-5.9-7.7a0.59,0.59,0,0,0-.6-0.4,0.62,0.62,0,0,0-.3.7s0.5,2.4.9,3.6a34.87,34.87,0,0,0,2,6h0Z" style="fill:#fdbf2d"></path>\n<path d="M15.40,12.70l-3.3,2.9-8.9.4,3.3-2.7" style="fill:#ce592b"></path>\n<path d="M9.10,21.10l1.4-6.2-5.9.5" style="fill:#cf572e;opacity:0.6;isolation:isolate"></path>\n<path d="M12.00,13.5a4.75,4.75,0,0,1-2.6,1.1c-1.5.3-2.9,0.2-2.9,0s1.1-.6,2.7-1" style="fill:#bb3d19"></path>\n<circle cx="7.92" cy="8.19" r="6.3" style="fill:#fdbf2d"></circle>\n<path d="M4.70,13.60a6.21,6.21,0,0,0,8.4-1.9v-0.1a8.89,8.89,0,0,1-8.4,2h0Z" style="fill:#ce592b;fill-opacity:0.25"></path>\n<path d="M21.20,27.20l0.6-.4a1.09,1.09,0,0,0,.4-1.3c-0.7-1.5-2.1-4.6-2.8-5.8-0.9-1.7-2.8-4.9-2.8-4.9a1.6,1.6,0,0,0-2.17-.65l-0.23.15a1.68,1.68,0,0,0-.4,2.1s2.3,3.9,3.1,5.3c0.6,1,2.1,3.7,2.9,5.1a0.94,0.94,0,0,0,1.24.49l0.16-.09h0Z" style="fill:#fdbf2d"></path>\n<path d="M19.40,19.80c-0.9-1.7-2.8-4.9-2.8-4.9a1.6,1.6,0,0,0-2.17-.65l-0.23.15-0.3.3c1.1,1.5,2.9,3.8,3.9,5.4,1.1,1.8,2.9,5,3.8,6.7l0.1-.1a1.09,1.09,0,0,0,.4-1.3,57.67,57.67,0,0,0-2.7-5.6h0Z" style="fill:#ce592b;fill-opacity:0.25"></path>\n</svg>\n'
            );
            a.i.Ef.setAttribute("aria-label", "Street View Pegman Control");
            a.i.active.setAttribute("aria-label", "Pegman is on top of the Map");
            a.i.Bf.setAttribute("aria-label", "Street View Pegman Control");
            b.setAttribute("controlWidth", c.width);
            b.setAttribute("controlHeight", c.height);
            _.K.trigger(b, "resize");
            HN(a, a.get("mode"));
        } else _.oz(b), _.K.trigger(b, "resize");
    };
    HN = function(a, b) {
        a.o &&
            ((a = a.i),
                (a.Ef.style.display = a.Bf.style.display = a.active.style.display =
                    "none"),
                1 == b ?
                (a.Ef.style.display = "") :
                2 == b ?
                (a.Bf.style.display = "") :
                (a.active.style.display = ""));
    };
    IN = function(a) {
        var b = a.get("mapSize");
        b = !!a.get("display") || !!(b && 200 <= b.width && b && 200 <= b.height);
        a.o != b && ((a.o = b), GN(a));
    };
    KN = function(a) {
        a = {
            clickable: !1,
            crossOnDrag: !1,
            draggable: !0,
            map: a,
            mapOnly: !0,
            pegmanMarker: !0,
            zIndex: 1e6,
        };
        this.ya = _.oL.Kd;
        this.Sa = _.oL.Jn;
        this.H = 0;
        this.ka = this.W = -1;
        this.o = 0;
        this.T = this.$ = null;
        this.j = _.gg("mode");
        this.i = _.hg("mode");
        var b = (this.Pa = new _.bh(a));
        b.setDraggable(!0);
        var c = (this.ta = new _.bh(a)),
            d = (this.ua = new _.bh(a));
        this.i(1);
        this.set("heading", 0);
        b.bindTo("icon", this, "pegmanIcon");
        b.bindTo("position", this, "dragPosition");
        b.bindTo("dragging", this);
        var e = this;
        c.bindTo("icon", this, "lilypadIcon");
        _.K.addListener(this, "position_changed", function() {
            c.set("position", e.get("position"));
        });
        c.bindTo("dragging", this);
        d.set("cursor", _.nr);
        d.set("icon", KL(this.Sa, 0));
        _.K.addListener(this, "dragposition_changed", function() {
            d.set("position", e.get("dragPosition"));
        });
        d.bindTo("dragging", this);
        _.K.addListener(this, "dragstart", this.ym);
        _.K.addListener(this, "drag", this.zm);
        _.K.addListener(this, "dragend", this.xm);
        _.K.forward(b, "dragstart", this);
        _.K.forward(b, "drag", this);
        _.K.forward(b, "dragend", this);
    };
    NN = function(a) {
        var b = a.j(),
            c = _.MK(b);
        a.Pa.setVisible(c || 7 == b);
        a.set("pegmanIcon", c ? LN(a) : 7 == b ? MN(a) : void 0);
    };
    ON = function(a) {
        a.ta.setVisible(!1);
        a.ua.setVisible(_.MK(a.j()));
    };
    LN = function(a) {
        var b = a.j() - 3;
        return KL(a.ya, b);
    };
    MN = function(a) {
        var b = PN(a);
        a.ka != b &&
            ((a.ka = b),
                (a.$ = {
                    url: _.jE(QN[b]),
                    scaledSize: new _.P(49, 52),
                    anchor: new _.O(25, 35),
                }));
        return a.$;
    };
    SN = function(a) {
        var b = PN(a);
        a.W != b &&
            ((a.W = b),
                (a.T = {
                    url: _.jE(RN[b]),
                    scaledSize: new _.P(49, 52),
                    anchor: new _.O(25, 35),
                }));
        return a.T;
    };
    PN = function(a) {
        (a = _.Ky(a.get("heading")) % 360) || (a = 0);
        0 > a && (a += 360);
        return Math.round((a / 360) * 16) % 16;
    };
    UN = function(a, b, c, d, e, f, g, h, k) {
        this.i = a;
        this.ya = f;
        this.ka = e;
        this.$ = g;
        this.Pa = h;
        this.Sa = k || null;
        this.ua = d;
        this.H = this.o = !1;
        this.W = null;
        this.eh(1);
        TN(this, c, b);
        this.mb = new _.KK();
        this.mb.bindTo("mapHeading", this);
        this.mb.bindTo("tilt", this);
        this.mb.bindTo("client", this);
        this.mb.bindTo("client", a, "svClient");
        this.j = this.ta = null;
        this.T = _.Cz(c, d);
    };
    VN = function(a, b) {
        return _.ce(b - (a || 0), 0, 360);
    };
    TN = function(a, b, c) {
        var d = a.i.__gm,
            e = new JN(b, a.Pa);
        e.bindTo("mode", a);
        e.bindTo("mapSize", a);
        e.bindTo("display", a);
        var f = new KN(a.i);
        f.bindTo("mode", a);
        f.bindTo("dragPosition", a);
        f.bindTo("position", a);
        var g = new _.Oz(["mapHeading", "streetviewHeading"], "heading", VN);
        g.bindTo("streetviewHeading", a, "heading");
        g.bindTo("mapHeading", a.i, "heading");
        f.bindTo("heading", g);
        a.bindTo("pegmanDragging", f, "dragging");
        d.bindTo("pegmanDragging", a);
        _.K.bind(e, "dragstart", a, function() {
            var h = this;
            this.T = _.Cz(b, this.ua);
            _.N("streetview").then(function(k) {
                if (!h.ta) {
                    var l = (0, _.y)(h.ka.getUrl, h.ka),
                        m = d.get("panes");
                    k = h.ta = new k.kk(m.floatPane, l, h.ya);
                    k.bindTo("description", h);
                    k.bindTo("mode", h);
                    k.bindTo("thumbnailPanoId", h, "panoId");
                    k.bindTo("pixelBounds", d);
                    l = new _.aF(function(q) {
                        q = new _.pp(h.i, h.$, q);
                        h.$.yc(q);
                        return q;
                    });
                    l.bindTo("latLngPosition", f, "dragPosition");
                    k.bindTo("pixelPosition", l);
                }
            });
        });
        _.B(["dragstart", "drag", "dragend"], function(h) {
            _.K.addListener(e, h, function() {
                _.K.trigger(f, h, {
                    latLng: f.get("position"),
                    pixel: e.get("position"),
                });
            });
        });
        _.K.addListener(e, "position_changed", function() {
            var h = e.get("position");
            (h = c({ clientX: h.x + a.T.x, clientY: h.y + a.T.y })) &&
            f.set("dragPosition", h);
        });
        _.K.addListener(f, "dragend", (0, _.y)(a.Zi, a, !1));
        _.K.addListener(f, "hover", (0, _.y)(a.Zi, a, !0));
    };
    WN = function(a) {
        var b = a.i.overlayMapTypes,
            c = a.mb;
        b.forEach(function(d, e) {
            d == c && b.removeAt(e);
        });
        a.o = !1;
    };
    XN = function(a) {
        var b = a.get("projection");
        b && b.j && (a.i.overlayMapTypes.push(a.mb), (a.o = !0));
    };
    YN = _.p(
        "@media print {  .gm-style .gmnoprint, .gmnoprint {    display:none  }}@media screen {  .gm-style .gmnoscreen, .gmnoscreen {    display:none  }}"
    );
    ZN = function(a, b, c) {
        this.T = a;
        this.W = c;
        this.j = _.ug(0);
        c = new _.Pc(_.kn(b));
        this.$ = _.Qc(c, "span");
        c.appendChild(b, this.$);
        this.i = _.Qc(c, "div");
        c.appendChild(b, this.i);
        GL(this.i, "position", "relative");
        GL(this.i, "display", "inline-block");
        this.i.style.height = _.Hz(8, !0);
        GL(this.i, "bottom", "-1px");
        b = _.Qc(c, "div");
        c.appendChild(this.i, b);
        _.Iz(b, "100%", 4);
        GL(b, "position", "absolute");
        HL(b, 0, 0);
        b = _.Qc(c, "div");
        c.appendChild(this.i, b);
        _.Iz(b, 4, 8);
        HL(b, 0, 0);
        GL(b, "backgroundColor", "#fff");
        b = _.Qc(c, "div");
        c.appendChild(this.i, b);
        _.Iz(b, 4, 8);
        GL(b, "position", "absolute");
        GL(b, "backgroundColor", "#fff");
        GL(b, "right", "0px");
        GL(b, "bottom", "0px");
        b = _.Qc(c, "div");
        c.appendChild(this.i, b);
        GL(b, "position", "absolute");
        GL(b, "backgroundColor", "#666");
        b.style.height = _.Hz(2, !0);
        GL(b, "left", "1px");
        GL(b, "bottom", "1px");
        GL(b, "right", "1px");
        b = _.Qc(c, "div");
        c.appendChild(this.i, b);
        GL(b, "position", "absolute");
        _.Iz(b, 2, 6);
        HL(b, 1, 1);
        GL(b, "backgroundColor", "#666");
        b = _.Qc(c, "div");
        c.appendChild(this.i, b);
        _.Iz(b, 2, 6);
        GL(b, "position", "absolute");
        GL(b, "backgroundColor", "#666");
        GL(b, "bottom", "1px");
        GL(b, "right", "1px");
        this.o = !0;
        this.H = 0;
        _.dd(a, "click", (0, _.y)(this.ta, this));
        this.W.kb((0, _.y)(this.ka, this));
    };
    $N = function(a, b, c, d) {
        var e = a;
        1 > a && ((e = c), (b = d));
        for (a = 1; e >= 10 * a;) a *= 10;
        e >= 5 * a && (a *= 5);
        e >= 2 * a && (a *= 2);
        return { tn: Math.round((80 * a) / e), Wk: a + " " + b };
    };
    jO = function(a) {
        var b = this;
        this.Ma = new _.vi(function() {
            b.o[1] && aO(b);
            b.o[0] && bO(b);
            if (b.o[2]) {
                if (b.Wa) {
                    var e = b.Wa;
                    GL(e.T, "display", "none");
                    e.j.set(0);
                    b.Wa = null;
                }
                b.$ && (b.j.Uc(b.$), (b.$ = null));
                e = b.get("scaleControl");
                void 0 !== e && _.xj(b.i, e ? "Csy" : "Csn");
                e &&
                    ((b.$ = _.Oo("div")),
                        b.j.addElement(b.$, 12, !0, -1001),
                        _.Qo(b.$),
                        _.Ro(b.$),
                        (b.Wa = new ZN(
                            b.$,
                            _.DK(b.$, b.ta),
                            new _.gr(
                                [_.kr(b, "projection"), _.kr(b, "bottomRight"), _.kr(b, "zoom")],
                                TL
                            )
                        )),
                        _.K.trigger(b.$, "resize"),
                        b.Ic && _.jr(b.Ic, "scaleWidth", b.Wa.j));
            }
            b.o[3] && cO(b);
            b.o = {};
            b.get("disableDefaultUI") && !b.W && _.xj(b.i, "Cdn");
        }, 0);
        this.j = a.Li || null;
        this.qk = a.Ze;
        this.Kc = a.hm || null;
        this.H = a.controlSize;
        this.Wc = a.Ok || null;
        this.i = a.map || null;
        this.W = a.$n || null;
        this.sk = a.ao || null;
        this.nk = a.Zn || null;
        this.mk = a.nb || null;
        this.Ph = this.sd = this.Vd = !1;
        this.T = this.Qh = null;
        this.ta = a.zi;
        this.rd = _.$E("Toggle fullscreen view");
        this.ya = null;
        this.ik = a.Gf;
        this.ka = null;
        this.Mc = !1;
        this.Ic = this.$ = this.Wa = null;
        this.mc = [];
        this.Sa = null;
        this.hk = {};
        this.o = {};
        this.Pa = this.Mb = this.Bb = this.lc = null;
        this.Lc = _.Oo("div");
        this.ua = null;
        this.Jc = !1;
        _.Ro(this.Lc);
        _.Hn(YN, this.ta);
        var c = (this.Nc = new GM(_.F(_.Nd(_.H), 14)));
        c.bindTo("center", this);
        c.bindTo("zoom", this);
        c.bindTo("mapTypeId", this);
        c.bindTo("pano", this);
        c.bindTo("position", this);
        c.bindTo("pov", this);
        c.bindTo("heading", this);
        c.bindTo("tilt", this);
        a.map &&
            _.K.addListener(c, "url_changed", function() {
                a.map.set("mapUrl", c.get("url"));
            });
        var d = new IL(_.Nd(_.H));
        d.bindTo("center", this);
        d.bindTo("zoom", this);
        d.bindTo("mapTypeId", this);
        d.bindTo("pano", this);
        d.bindTo("heading", this);
        this.rk = d;
        dO(this);
        eO(this);
        cO(this);
        fO(this, a.ji);
        a.uj && gO(this);
        _.vh[35] && hO(this);
        iO(this);
    };
    iO = function(a) {
        _.N("util").then(function(b) {
            b.i.i(function() {
                a.Jc = !0;
                kO(a);
                a.ua && (a.ua.set("display", !1), a.ua.unbindAll(), (a.ua = null));
            });
        });
    };
    qO = function(a) {
        if (
            lO(a) != a.Qh ||
            mO(a) != a.Vd ||
            nO(a) != a.Ph ||
            oO(a) != a.Mc ||
            pO(a) != a.sd
        )
            a.o[1] = !0;
        a.o[0] = !0;
        _.wi(a.Ma);
    };
    rO = function(a) {
        return a.get("disableDefaultUI");
    };
    oO = function(a) {
        var b = a.get("streetViewControl"),
            c = a.get("disableDefaultUI"),
            d = !!a.get("size");
        (void 0 !== b || c) && _.xj(a.i, b ? "Cvy" : "Cvn");
        null == b && (b = !c);
        a = d && !a.W;
        return b && a;
    };
    sO = function(a) {
        return !a.get("disableDefaultUI") && !!a.W;
    };
    fO = function(a, b) {
        var c = a.j;
        _.B(b, function(d, e) {
            if (d) {
                var f = function(g) {
                    if (g) {
                        var h = g.index;
                        _.he(h) || (h = 1e3);
                        h = Math.max(h, -999);
                        _.Po(g, Math.min(999999, g.style.zIndex || 0));
                        c.addElement(g, e, !1, h);
                    }
                };
                d.forEach(f);
                _.K.addListener(d, "insert_at", function(g) {
                    f(d.getAt(g));
                });
                _.K.addListener(d, "remove_at", function(g, h) {
                    c.Uc(h);
                });
            }
        });
    };
    hO = function(a) {
        if (a.i) {
            var b = new UL(document.createElement("div"));
            b.bindTo("card", a.i.__gm);
            b = b.getDiv();
            a.j.addElement(b, 1, !0, 0.1);
        }
    };
    cO = function(a) {
        a.ya && (a.ya.unbindAll(), yM(a.ya), (a.ya = null), a.j.Uc(a.rd));
        var b = _.$E("Toggle fullscreen view"),
            c = new DM(a.ta, b, a.ik, a.H);
        c.bindTo("display", a, "fullscreenControl");
        c.bindTo("disableDefaultUI", a);
        c.bindTo("mapTypeId", a);
        var d = a.get("fullscreenControlOptions") || {};
        a.j.addElement(b, (d && d.position) || 7, !0, -1007);
        a.ya = c;
        a.rd = b;
    };
    eO = function(a) {
        var b = new DN(a.qk, a.i || a.W, !(!a.i || !a.i.__gm.Bb));
        b.bindTo("size", a);
        b.bindTo("rmiWidth", a);
        b.bindTo("attributionText", a);
        b.bindTo("fontLoaded", a);
        b.bindTo("mapTypeId", a);
        b.bindTo("isCustomPanorama", a);
        var c = b.i.getDiv();
        a.j.addElement(c, 12, !0, -1e3);
        c = b.j.getDiv();
        a.j.addElement(c, 12, !0, -1005);
        c = b.o.getDiv();
        a.j.addElement(c, 12, !0, -1002);
        a.Ic = b;
    };
    dO = function(a) {
        if (!_.vh[2]) {
            var b = !!_.vh[21];
            a.i ? (b = KM(a.i, a.Nc, b)) : ((b = JM(a.W, a.Nc, b)), IM(b, !0));
            b = b.getDiv();
            a.j.addElement(b, 10, !0, -1e3);
        }
    };
    gO = function(a) {
        var b = _.Nd(_.H);
        if (!_.Do()) {
            var c = document.createElement("div"),
                d = new _.GK(c, a.i, _.F(b, 14));
            a.j.addElement(c, 12, !0, -1003);
            d.bindTo("available", a, "rmiAvailable");
            d.bindTo("bounds", a);
            _.vh[17] ?
                (d.bindTo("enabled", a, "reportErrorControl"),
                    a.i.bindTo("rmiLinkData", d)) :
                d.set("enabled", !0);
            d.bindTo("mapSize", a, "size");
            d.bindTo("mapTypeId", a);
            d.bindTo("sessionState", a.rk);
            a.bindTo("rmiWidth", d, "width");
            _.K.addListener(d, "rmilinkdata_changed", function() {
                var e = d.get("rmiLinkData");
                a.i.set("rmiUrl", e && e.url);
            });
        }
    };
    kO = function(a) {
        a.Yb && (a.Yb.unbindAll && a.Yb.unbindAll(), (a.Yb = null));
        a.lc && (a.lc.unbindAll(), (a.lc = null));
        a.Bb && (a.Bb.unbindAll(), (a.Bb = null));
        a.Sa && (tO(a, a.Sa), _.Ii(a.Sa.Na), (a.Sa = null));
    };
    bO = function(a) {
        kO(a);
        if (a.Kc && !a.Jc) {
            var b = uO(a);
            if (b) {
                var c = _.Oo("div");
                _.vz(c);
                c.style.margin = _.Q(a.H >> 2);
                _.K.addDomListener(c, "mouseover", function() {
                    _.Po(c, 1e6);
                });
                _.K.addDomListener(c, "mouseout", function() {
                    _.Po(c, 0);
                });
                _.Po(c, 0);
                var d = a.get("mapTypeControlOptions") || {},
                    e = (a.Bb = new SL(a.Kc, d.mapTypeIds));
                e.bindTo("aerialAvailableAtZoom", a);
                e.bindTo("zoom", a);
                var f = e.H;
                a.j.addElement(c, d.position || 1, !1, 0.2);
                d = null;
                2 == b ?
                    ((d = new bN(c, f, a.H)), e.bindTo("mapTypeId", d)) :
                    (d = new $M(c, f, _.PM, a.H));
                b = a.lc = new dN(e.o);
                b.set("labels", !0);
                d.bindTo("mapTypeId", b, "internalMapTypeId");
                d.bindTo("labels", b);
                d.bindTo("terrain", b);
                d.bindTo("tilt", a, "desiredTilt");
                d.bindTo("fontLoaded", a);
                d.bindTo("mapSize", a, "size");
                d.bindTo("display", a, "mapTypeControl");
                b.bindTo("mapTypeId", a);
                _.K.trigger(c, "resize");
                a.Sa = { Na: c, Jf: null };
                a.Yb = d;
            }
        }
    };
    uO = function(a) {
        if (!a.Kc) return null;
        var b = (a.get("mapTypeControlOptions") || {}).style || 0,
            c = a.get("mapTypeControl"),
            d = rO(a);
        if ((void 0 === c && d) || (void 0 !== c && !c))
            return _.xj(a.i, "Cmn"), null;
        1 == b ? _.xj(a.i, "Cmh") : 2 == b && _.xj(a.i, "Cmd");
        return 2 == b || 1 == b ? b : 1;
    };
    vO = function(a, b) {
        b = a.ka = new pN(b, a.H, _.Bu.i, a.ta);
        b.bindTo("zoomRange", a);
        b.bindTo("display", a, "zoomControl");
        b.bindTo("disableDefaultUI", a);
        b.bindTo("mapSize", a, "size");
        b.bindTo("mapTypeId", a);
        b.bindTo("zoom", a);
        return b.getDiv();
    };
    wO = function(a) {
        var b = new _.OE(XL, { rtl: _.Bu.i }),
            c = new qM(b, a.H, a.ta);
        c.bindTo("pov", a);
        c.bindTo("disableDefaultUI", a);
        c.bindTo("panControl", a);
        c.bindTo("mapSize", a, "size");
        return b.Na;
    };
    xO = function(a) {
        var b = _.Oo("div");
        _.vz(b);
        a.T = new jN(b, a.H, a.ta);
        a.T.bindTo("mapSize", a, "size");
        a.T.bindTo("rotateControl", a);
        a.T.bindTo("heading", a);
        a.T.bindTo("tilt", a);
        a.T.bindTo("aerialAvailableAtZoom", a);
        return b;
    };
    yO = function(a) {
        var b = _.Oo("div"),
            c = (a.Mb = new EN(b, a.H));
        c.bindTo("pano", a);
        c.bindTo("floors", a);
        c.bindTo("floorId", a);
        return b;
    };
    zO = function(a) {
        a.o[1] = !0;
        _.wi(a.Ma);
    };
    aO = function(a) {
        function b(m, q) {
            if (!l[m]) {
                var r = a.H >> 2,
                    u = 12 + (a.H >> 1),
                    v = document.createElement("div");
                _.vz(v);
                _.Ho(v, "gm-bundled-control");
                10 == m || 11 == m || 12 == m || 6 == m || 9 == m ?
                    _.Ho(v, "gm-bundled-control-on-bottom") :
                    _.lz(v, "gm-bundled-control-on-bottom");
                v.style.margin = _.Q(r);
                _.Qo(v);
                l[m] = new EM(v, m, u);
                a.j.addElement(v, m, !1, 0.1);
            }
            m = l[m];
            m.add(q);
            a.mc.push({ Na: q, Jf: m });
        }

        function c(m) {
            return (a.get(m) || {}).position;
        }
        a.ka && (qN(a.ka), a.ka.unbindAll(), (a.ka = null));
        a.T && (a.T.unbindAll(), (a.T = null));
        a.Mb && (a.Mb.unbindAll(), (a.Mb = null));
        for (var d = _.Aa(a.mc), e = d.next(); !e.done; e = d.next())
            tO(a, e.value);
        a.mc = [];
        d = a.Vd = mO(a);
        var f = (a.Qh = lO(a)),
            g = (a.Mc = oO(a)),
            h = (a.Ph = nO(a));
        a.sd = pO(a);
        e = d && (c("panControlOptions") || 9);
        d = f && (c("zoomControlOptions") || (3 == f && 6) || 9);
        var k = 3 == f || _.Do();
        g = g && (c("streetViewControlOptions") || 9);
        h = h && (c("rotateControlOptions") || (k && 6) || 9);
        var l = a.hk;
        d && ((f = vO(a, f)), b(d, f));
        g && (AO(a), b(g, a.Lc));
        e && a.W && _.xl.j && ((f = wO(a)), b(e, f));
        h && ((e = xO(a)), b(h, e));
        a.Pa && (a.Pa.remove(), (a.Pa = null));
        if ((e = sO(a) && 9))(f = yO(a)), b(e, f);
        a.T && a.ka && a.ka.mf && h == d && a.T.bindTo("mouseover", a.ka.mf);
        d = _.Aa(a.mc);
        for (e = d.next(); !e.done; e = d.next()) _.K.trigger(e.value.Na, "resize");
    };
    mO = function(a) {
        var b = a.get("panControl"),
            c = rO(a);
        if (void 0 !== b || c) return a.W || _.xj(a.i, b ? "Cpy" : "Cpn"), !!b;
        b = a.get("size");
        return _.Do() || !b ? !1 : (400 <= b.width && 370 <= b.height) || !!a.W;
    };
    pO = function(a) {
        return a.W ?
            !1 :
            rO(a) ?
            1 == a.get("myLocationControl") :
            0 != a.get("myLocationControl");
    };
    nO = function(a) {
        var b = a.get("rotateControl"),
            c = rO(a);
        (void 0 !== b || c) && _.xj(a.i, b ? "Cry" : "Crn");
        return !a.get("size") || a.W ? !1 : c ? 1 == b : 0 != b;
    };
    lO = function(a) {
        var b = a.get("zoomControl"),
            c = rO(a);
        return 0 == b || (c && void 0 === b) ?
            (a.W || _.xj(a.i, "Czn"), null) :
            a.get("size") ?
            1 :
            null;
    };
    AO = function(a) {
        if (!a.ua && !a.Jc && a.Wc && a.i) {
            var b = (a.ua = new UN(
                a.i,
                a.Wc,
                a.Lc,
                a.ta,
                a.sk,
                _.H,
                a.mk,
                a.H,
                a.nk || void 0
            ));
            b.bindTo("mapHeading", a, "heading");
            b.bindTo("tilt", a);
            b.bindTo("projection", a.i);
            b.bindTo("mapTypeId", a);
            a.bindTo("panoramaVisible", b);
            b.bindTo("mapSize", a, "size");
            b.bindTo("display", a, "streetViewControl");
            b.bindTo("disableDefaultUI", a);
            BO(a);
        }
    };
    BO = function(a) {
        var b = a.ua;
        if (b) {
            var c = b.W,
                d = a.get("streetView");
            if (d != c) {
                if (c) {
                    var e = c.__gm;
                    e.unbind("result");
                    e.unbind("heading");
                    c.unbind("passiveLogo");
                    c.i.removeListener(a.yj, a);
                    c.i.set(!1);
                }
                d &&
                    ((c = d.__gm),
                        null != c.get("result") && b.set("result", c.get("result")),
                        c.bindTo("result", b),
                        null != c.get("heading") && b.set("heading", c.get("heading")),
                        c.bindTo("heading", b),
                        d.bindTo("passiveLogo", a),
                        d.i.addListener(a.yj, a),
                        a.set("panoramaVisible", d.get("visible")),
                        b.bindTo("client", d));
                b.W = d;
            }
        }
    };
    tO = function(a, b) {
        b.Jf ? (b.Jf.remove(b.Na), delete b.Jf) : a.j.Uc(b.Na);
    };
    _.DO = function(a, b) {
        var c = document.createElement("div"),
            d = c.style;
        d.backgroundColor = "white";
        d.fontWeight = "500";
        d.fontFamily = "Roboto, sans-serif";
        d.padding = "15px 25px";
        d.boxSizing = "border-box";
        d.top = "5px";
        d = document.createElement("div");
        var e = document.createElement("img");
        e.alt = "";
        e.src = _.np + "api-3/images/google_gray.svg";
        e.style.border = e.style.margin = e.style.padding = 0;
        e.style.height = "17px";
        e.style.verticalAlign = "middle";
        e.style.width = "52px";
        _.Qo(e);
        d.appendChild(e);
        c.appendChild(d);
        d = document.createElement("div");
        d.style.lineHeight = "20px";
        d.style.margin = "15px 0";
        e = document.createElement("span");
        e.style.color = "rgba(0,0,0,0.87)";
        e.style.fontSize = "14px";
        e.innerText = "This page can't load Google Maps correctly.";
        d.appendChild(e);
        c.appendChild(d);
        d = document.createElement("table");
        d.style.width = "100%";
        e = document.createElement("tr");
        var f = document.createElement("td");
        f.style.lineHeight = "16px";
        f.style.verticalAlign = "middle";
        var g = document.createElement("a");
        pL(g, b);
        g.innerText = "Do you own this website?";
        g.target = "_blank";
        g.setAttribute("rel", "noopener");
        g.style.color = "rgba(0, 0, 0, 0.54)";
        g.style.fontSize = "12px";
        g.onclick = function() {
            _.xj(a, "Dl");
        };
        f.appendChild(g);
        e.appendChild(f);
        _.Tm(CO);
        b = document.createElement("td");
        b.style.textAlign = "right";
        f = document.createElement("button");
        f.className = "dismissButton";
        f.innerText = _.ia;
        f.onclick = function() {
            a.removeChild(c);
            _.K.trigger(a, "dmd");
            _.xj(a, "Dd");
        };
        b.appendChild(f);
        e.appendChild(b);
        d.appendChild(e);
        c.appendChild(d);
        a.appendChild(c);
        _.xj(a, "D0");
        return c;
    };
    EO = function(a) {
        var b = this;
        this.j = a;
        this.Ma = new _.vi(function() {
            return b.o();
        }, 0);
        _.K.lb(a, "resize", this, this.o);
        var c = (this.i = {});
        _.B([1, 2, 3, 5, 4, 6, 7, 8, 9, 10, 11, 12, 13], function(d) {
            c[d] = [];
        });
    };
    FO = function(a) {
        for (var b = 0, c = 0, d = a.length; c < d; ++c)
            b = Math.max(a[c].height, b);
        var e = (d = 0);
        for (c = a.length; 0 < c; --c) {
            var f = a[c - 1];
            if (b == f.height) {
                f.width > e && f.width > f.height ? (e = f.height) : (d = f.width);
                break;
            } else e = Math.max(f.height, e);
        }
        return new _.P(d, e);
    };
    IO = function(a, b, c, d) {
        for (var e = 0, f = 0, g, h = [], k = 0, l = a.length; k < l; ++k) {
            var m = a[k].element;
            g = GO(m);
            var q = GO(m, !0),
                r = HO(m),
                u = HO(m, !0),
                v = m.style;
            v[b] = _.Q("left" == b ? e : e + (g - q));
            v[c] = _.Q("top" == c ? 0 : r - u);
            g = e + g;
            r > f && ((f = r), d.push({ minWidth: e, height: f }));
            e = g;
            a[k].border || h.push(new _.P(e, r));
            uL(m);
        }
        return FO(h);
    };
    JO = function(a, b, c, d) {
        for (var e = 0, f = [], g = 0, h = a.length; g < h; ++g) {
            for (
                var k = a[g].element,
                    l = GO(k),
                    m = HO(k),
                    q = GO(k, !0),
                    r = HO(k, !0),
                    u = 0,
                    v = 0,
                    w = d.length; v < w && d[v].minWidth <= l;
                ++v
            )
                u = d[v].height;
            e = Math.max(u, e);
            u = k.style;
            u[c] = _.Q("top" == c ? e : e + m - r);
            u[b] = _.Q("left" == b ? 0 : l - q);
            e += m;
            a[g].border || f.push(new _.P(l, e));
            uL(k);
        }
        return FO(f);
    };
    KO = function(a, b, c, d) {
        for (var e = 0, f = 0, g = 0, h = a.length; g < h; ++g) {
            var k = a[g].element,
                l = GO(k),
                m = HO(k),
                q = GO(k, !0);
            "left" == b
                ?
                (k.style.left = 0) :
                "right" == b ?
                (k.style.right = _.Q(l - q)) :
                (k.style.left = _.Q((c - q) / 2));
            e += m;
            a[g].border || (f = Math.max(l, f));
        }
        b = (d - e) / 2;
        g = 0;
        for (h = a.length; g < h; ++g)
            (k = a[g].element), (k.style.top = _.Q(b)), (b += HO(k)), uL(k);
        return f;
    };
    LO = function(a, b, c) {
        for (var d = 0, e = 0, f = 0, g = a.length; f < g; ++f) {
            var h = a[f].element,
                k = GO(h),
                l = HO(h),
                m = HO(h, !0);
            h.style[b] = _.Q("top" == b ? 0 : l - m);
            d += k;
            a[f].border || (e = Math.max(l, e));
        }
        b = (c - d) / 2;
        f = 0;
        for (g = a.length; f < g; ++f)
            (h = a[f].element), (h.style.left = _.Q(b)), (b += GO(h)), uL(h);
        return e;
    };
    GO = function(a, b) {
        if (!_.qz(a)) return 0;
        b = !b && _.Ky(a.getAttribute("controlWidth"));
        if (!_.he(b) || isNaN(b)) b = a.offsetWidth;
        a = _.wz(a);
        b += _.Ky(a.marginLeft) || 0;
        return (b += _.Ky(a.marginRight) || 0);
    };
    HO = function(a, b) {
        if (!_.qz(a)) return 0;
        b = !b && _.Ky(a.getAttribute("controlHeight"));
        if (!_.he(b) || isNaN(b)) b = a.offsetHeight;
        a = _.wz(a);
        b += _.Ky(a.marginTop) || 0;
        return (b += _.Ky(a.marginBottom) || 0);
    };
    MO = function(a) {
        this.ka = a;
        this.i = 0;
        this.j = null;
        _.K.lb(a, "keydown", this, this.W);
        _.K.lb(a, "keypress", this, this.T);
        _.K.lb(a, "keyup", this, this.$);
        this.o = {};
    };
    NO = function(a) {
        var b = a.get("zoom");
        _.he(b) && a.set("zoom", b + 1);
    };
    OO = function(a) {
        var b = a.get("zoom");
        _.he(b) && a.set("zoom", b - 1);
    };
    PO = function(a, b, c) {
        _.K.trigger(a, "panbyfraction", b, c);
    };
    QO = function(a, b) {
        return !!(
            b.target != a.ka ||
            b.ctrlKey ||
            b.altKey ||
            b.metaKey ||
            0 == a.get("enabled") ||
            a.get("streetViewDisable")
        );
    };
    RO = _.n();
    _.Hb.prototype.i = _.Sl(8, _.p(1));
    _.Qb.prototype.i = _.Sl(7, _.p(1));
    _.gc.prototype.i = _.Sl(6, _.qa("o"));
    var EL = {};
    _.A(IL, _.L);
    IL.prototype.changed = function(a) {
        if ("sessionState" != a) {
            a = new _.NJ();
            var b = this.get("zoom"),
                c = this.get("center"),
                d = this.get("pano");
            if ((null != b && null != c) || null != d) {
                var e = this.i;
                new _.hH(_.G(a, 1)).V[0] = _.Md(e);
                new _.hH(_.G(a, 1)).V[1] = _.F(e, 1);
                e = _.kK(a);
                var f = this.get("mapTypeId");
                "hybrid" == f || "satellite" == f ?
                    (e.V[0] = 3) :
                    ((e.V[0] = 0),
                        "terrain" == f && ((f = new _.fH(_.G(a, 4))), _.Bc(f, 0, 4)));
                f = new _.rG(_.G(e, 1));
                f.V[0] = 2;
                if (c) {
                    var g = c.lng();
                    _.zc(f, 1, g);
                    c = c.lat();
                    _.zc(f, 2, c);
                }
                "number" === typeof b && _.zc(f, 5, b);
                f.setHeading(this.get("heading") || 0);
                d && (new _.xH(_.G(e, 2)).V[0] = d);
                this.set("sessionState", a);
            } else this.set("sessionState", null);
        }
    };
    var SO = [37, 38, 39, 40],
        TO = { 38: [0, -1], 40: [0, 1], 37: [-1, 0], 39: [1, 0] },
        bP = [];
    _.A(LL, _.Rc);
    LL.prototype.listen = function(a, b, c, d) {
        Array.isArray(b) || (b && (bP[0] = b.toString()), (b = bP));
        for (var e = 0; e < b.length; e++) {
            var f = _.dd(a, b[e], c || this.handleEvent, d || !1, this.j || this);
            if (!f) break;
            this.i[f.key] = f;
        }
        return this;
    };
    LL.prototype.xc = function() {
        LL.nd.xc.call(this);
        OL(this);
    };
    LL.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    _.A(PL, _.L);
    _.Ea(SL, _.L);
    _.A(UL, _.L);
    UL.prototype.card_changed = function() {
        var a = this.get("card");
        this.i && this.j.removeChild(this.i);
        if (a) {
            var b = (this.i = _.Oo("div"));
            b.style.backgroundColor = "white";
            b.appendChild(a);
            b.style.margin = _.Q(10);
            b.style.padding = _.Q(1);
            _.Gz(b, "0 1px 4px -1px rgba(0,0,0,0.3)");
            wL(b, _.Q(2));
            this.j.appendChild(b);
            this.i = b;
        } else this.i = null;
    };
    UL.prototype.getDiv = _.qa("j");
    var pM = _.Zb(
        _.Eb(
            ".gm-control-active>img{box-sizing:content-box;display:none;left:50%;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%)}.gm-control-active>img:nth-child(1){display:block}.gm-control-active:hover>img:nth-child(1),.gm-control-active:active>img:nth-child(1){display:none}.gm-control-active:hover>img:nth-child(2),.gm-control-active:active>img:nth-child(3){display:block}\n"
        )
    );
    _.A(XL, _.iE);
    XL.prototype.fill = function(a) {
        _.gE(this, 0, _.WB(a));
    };
    var VL = "t-avKK8hDgg9Q";
    _.A(aM, _.C);
    aM.prototype.getHeading = function() {
        return _.yc(this, 0);
    };
    aM.prototype.setHeading = function(a) {
        _.zc(this, 0, a);
    };
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var bM = {},
        cM = null;
    _.A(hM, _.vd);
    hM.prototype.i = function(a) {
        _.yd(this, a);
    };
    _.A(iM, hM);
    iM.prototype.stop = function(a) {
        dM(this);
        this.o = 0;
        a && (this.progress = 1);
        kM(this, this.progress);
        this.i("stop");
        this.i("end");
    };
    iM.prototype.xc = function() {
        0 == this.o || this.stop(!1);
        this.i("destroy");
        iM.nd.xc.call(this);
    };
    iM.prototype.i = function(a) {
        _.yd(this, new lM(a, this));
    };
    _.A(lM, _.Sc);
    _.Ea(qM, _.L);
    qM.prototype.changed = function() {
        function a(d) {
            return _.dA(_.Py(_.jE(d)));
        }!this.o && this.i && (this.i.stop(), (this.i = null));
        var b = this.get("pov");
        if (b) {
            var c = new aM();
            c.setHeading(_.ce(-b.heading, 0, 360));
            _.ym(
                new _.cA(_.G(c, 2)),
                a(
                    '<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100" >\n  <circle fill="#222222" cx="50" cy="50" r="50"/>\n  <circle fill="#595959" cx="50" cy="50" r="22"/>\n</svg>\n'
                )
            );
            _.ym(
                new _.cA(_.G(c, 3)),
                a(
                    '<svg xmlns="http://www.w3.org/2000/svg" width="40px" height="100px" viewBox="0 0 40 100">\n  <polygon fill="#C1272D" points="10,50 20,18 30,50"/>\n  <polygon fill="#D1D1D1" points="30,50 20,82 10,50"/>\n</svg>\n'
                )
            );
            _.ym(
                new _.cA(_.G(c, 4)),
                a(
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="100px" viewBox="0 0 40 100">\n  <image overflow="visible" opacity="0.75" width="65" height="109" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABtCAYAAAD+mQwIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA\nGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB4dJREFUeNrsnItu4zoMRPVK//97\n17Z0b4B4wXI5JPWwi11YgJG2SZPoaDikJNshPO1pT3va0572NKHFuz6otdbzeS3G+G9A6Oz4jwGJ\nP9B56zPb3TDiTZ33/K05gSyHES8GEJXPsiA07bmVIOJFAKSfRyEgGMtAxAsBRAVCdPhBMx6XgYg3\nAIiGIoKhAPp4CYiyECICEAEMDwRklpE8F/8fjCkQZVIFwRj595GcikAj34BffAOhpNZLleAZeQ2E\nBEECUBXF/O78e1BG1VAmVWABSAKEaECQFIBgUBDDaigLvSAIAJIAIgkq4p3lKqif/6taRhlVQ1mg\nggAUgI7zeQ1CJaMbAIjGPn9YDWWBCiwA+XMk9jwKh0oO/poKjPU3gBE1lAUqCMroZwYhC/4gGeH7\nOJR0WpXs0q2GslgFEQAoDAQNCdqx9un82clDMUPY2V41lEUqsAAUQRVRiPkz7g/heZ41JBBD3lAu\n9oLCDgohAQg7eL4pIKy1iHkIrDoMDhhZgPAif9MgpA+IaNQPDYx6t0GWThXEzoxAAbzI7wjCITxH\nDTORNIkKr26DnC2bLRVkAoCCyEJHTwi70KnKlCKBuG7uoBhiECZKWVHCF4OQAQQJTgUgkEl2hURZ\nYIjREQpf5JGHRCCp0QuhGmHRFRJlQShofkDD4ItByGwED5IZpFA4Pv9zgILr8vWE2OEFUlagEF4C\nhLOjmamDAjgEEJo3uEOidC6cRKNUzooSaFi8BE/goUABlI9KsjAZi7MhUToU0FMuF0ENXywksuAJ\nmXxpWjwVBkJSw23La976QDNGbo68RpBSJgdhqaErJIozNUZlzpCMKvElKOEFlKBB2IX5RwJq6AqJ\nckEoaMbI6wWuhMh+f3d8AxMwzRMunUpbKvAYowWBq+BFQPTAmDNGEAre5TMtJF6saNIg7KzzXgBi\nSGi+UAZ2pnpDoTA/+FIgBEEF0nQcDUBVQgIqokxkBs/skYKQJlKJFEs7M8ldmHQhY4wzFeRMikyG\nL1ggzo7xNcMqpEVpUSYrALp8oQz4wUidUJQpNYVwquA0wxfwgwyW8od8oXT6AYKTwcJqUYyShwM3\nxQLeayZVioooC/0ggUWVAo4XM8bA5goFAEjK7tbtnqCtJXhAZBYOHEJ2KCCBlet4FYSoFEvRqBlQ\nMZWYTK2lek8IdBdNZXD0PaGRjYoyCxD4TDE5j2jMcVRzLI6Oj9YLCaw78jQXWGbIYB+zp/PRWBNt\nEIKyv+DZfUL1QzKUcjbP6HtU6aoSNSVYK8qhIywieER5vQKviWBHG50CdHl2QBsyHpUk8LfgHN2o\nbAZNtRSuadqXj05lhYmR7oKTLgLQW4X2Km2JAq6EYJ2E2Rx/Q+8ThPdE36Hd4QnWlwxKRy0Qnue7\nO+tVQnOQ9X75Ch6l10in6/CfLUjDUL5BcGxeSpKUOlCNfcTZQwPiGVRXODTF1JoxonTniP9Mt9Ok\ncxMO8P8SgDoYJkNT6eY8pC98KAc9v0h7LQKiwYAm6V1U6Q0FS7oWBLquSDdbDkEdkmJQZkHZZjo7\nWGFwKJ2hO0mJzBf4uuIuvA8CUp3esCRFWmFwgC++gwOtKEmvlYAuBVFAh6MDiCV/BGIjoUD3Hs/n\n6ONuAPCYZD+Et3F8ptTNmRW02Kcd39jiahP2HTgsKTwOpy8Eb8qc8YTKwqGC+N/YlloylLApijgM\nRahFVe82XA+IqvjCJuwpShDO///1OTYjNKwCaokxtuC/MoWDkGRNt9fpIoqmhM0Iid7qsQ+C4QvB\noQQJBD9FB0H4JQCQVIDCAs0kl9UJSBGH4gcoFKoQDpsAYhv0hG+dHzpdxxESVnWIVGBB+OUMh2O2\nSDIhkJAIbAMDwdAAoDNY+e8bMUcJxuGYWHXPJr0TKM9p91XIDOXzmBmE+nmOn8e4KwBQ0TScGq9I\nkdUAwU/UpFe38BO1aFggAEtCwQOBq8AbEjvZUtvYfgHfaeJK2O4MBRMCS5VRmUkiJWRBBfwCDg5h\nV9Lk8lCYWWhFfpAYhMQ6S0NBut5hB75gFUvhynDwhEQN389UlwCga52kiz42wxS1+mDpGmNvSHA1\npCBf1WZd4XKAWaRUKC0JhRX7Dh4Q0vVMKeDLf3iW8FaKl4YDCgk+hzg3WKWRlkJBuy4SrSl41hW7\nQsENAYQEMkia98MghKNjVal7rjC72uxRQwz4Ym9uihIEtFi7bGF1GIJTDRxEEPyAhg4H1NgqlZYa\nrc2XS5TgUYN1D5Qa/rxwKwBzraOGeOn9Exxq0ACgq9coUDQX8W7MhnDTnTSQGqz7njTFD7gvWDtb\nSwxxGIJSPPERDaA+qAYEa4dbG/lb767DASBl8NdLoeBZ0vfsQt97nyVBDWgEKplrWDebsla0PSdo\nhDuVwAFYILw3ovOcASOmwpl7r83ehc86t9BzWl4wUq4E5o/X/8gN6BRvaMbreiBI6lgKYFoJHzXw\n97nzppTvMJgum3/q9qQ9EDTz+/k7cxogPGC8EJaHwCUQFBAWnODs+CUAlkNwwPB85t998+pOGO63\n+StvY74AyK03tH/a0572tKc97WlPQ+0/AQYALf6OfNkZY7AAAAAASUVORK5CYII=" transform="matrix(0.9846 0 0 0.9908 -11.6 -3.6)"/>\n  <polygon fill="#FFFFFF" points="20,18 10,50 20,82 30,50"/>\n  <polygon fill="#C1272D" points="10,50 20,18 30,50"/>\n  <polygon fill="#D1D1D1" points="30,50 20,82 10,50"/>\n</svg>\n'
                )
            );
            _.ym(
                new _.cA(_.G(c, 5)),
                a(
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="100px" viewBox="0 0 40 100">\n  <image overflow="visible" opacity="0.75" width="65" height="109" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABtCAYAAAD+mQwIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA\nGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB4dJREFUeNrsnItu4zoMRPVK//97\n17Z0b4B4wXI5JPWwi11YgJG2SZPoaDikJNshPO1pT3va0572NKHFuz6otdbzeS3G+G9A6Oz4jwGJ\nP9B56zPb3TDiTZ33/K05gSyHES8GEJXPsiA07bmVIOJFAKSfRyEgGMtAxAsBRAVCdPhBMx6XgYg3\nAIiGIoKhAPp4CYiyECICEAEMDwRklpE8F/8fjCkQZVIFwRj595GcikAj34BffAOhpNZLleAZeQ2E\nBEECUBXF/O78e1BG1VAmVWABSAKEaECQFIBgUBDDaigLvSAIAJIAIgkq4p3lKqif/6taRhlVQ1mg\nggAUgI7zeQ1CJaMbAIjGPn9YDWWBCiwA+XMk9jwKh0oO/poKjPU3gBE1lAUqCMroZwYhC/4gGeH7\nOJR0WpXs0q2GslgFEQAoDAQNCdqx9un82clDMUPY2V41lEUqsAAUQRVRiPkz7g/heZ41JBBD3lAu\n9oLCDgohAQg7eL4pIKy1iHkIrDoMDhhZgPAif9MgpA+IaNQPDYx6t0GWThXEzoxAAbzI7wjCITxH\nDTORNIkKr26DnC2bLRVkAoCCyEJHTwi70KnKlCKBuG7uoBhiECZKWVHCF4OQAQQJTgUgkEl2hURZ\nYIjREQpf5JGHRCCp0QuhGmHRFRJlQShofkDD4ItByGwED5IZpFA4Pv9zgILr8vWE2OEFUlagEF4C\nhLOjmamDAjgEEJo3uEOidC6cRKNUzooSaFi8BE/goUABlI9KsjAZi7MhUToU0FMuF0ENXywksuAJ\nmXxpWjwVBkJSw23La976QDNGbo68RpBSJgdhqaErJIozNUZlzpCMKvElKOEFlKBB2IX5RwJq6AqJ\nckEoaMbI6wWuhMh+f3d8AxMwzRMunUpbKvAYowWBq+BFQPTAmDNGEAre5TMtJF6saNIg7KzzXgBi\nSGi+UAZ2pnpDoTA/+FIgBEEF0nQcDUBVQgIqokxkBs/skYKQJlKJFEs7M8ldmHQhY4wzFeRMikyG\nL1ggzo7xNcMqpEVpUSYrALp8oQz4wUidUJQpNYVwquA0wxfwgwyW8od8oXT6AYKTwcJqUYyShwM3\nxQLeayZVioooC/0ggUWVAo4XM8bA5goFAEjK7tbtnqCtJXhAZBYOHEJ2KCCBlet4FYSoFEvRqBlQ\nMZWYTK2lek8IdBdNZXD0PaGRjYoyCxD4TDE5j2jMcVRzLI6Oj9YLCaw78jQXWGbIYB+zp/PRWBNt\nEIKyv+DZfUL1QzKUcjbP6HtU6aoSNSVYK8qhIywieER5vQKviWBHG50CdHl2QBsyHpUk8LfgHN2o\nbAZNtRSuadqXj05lhYmR7oKTLgLQW4X2Km2JAq6EYJ2E2Rx/Q+8ThPdE36Hd4QnWlwxKRy0Qnue7\nO+tVQnOQ9X75Ch6l10in6/CfLUjDUL5BcGxeSpKUOlCNfcTZQwPiGVRXODTF1JoxonTniP9Mt9Ok\ncxMO8P8SgDoYJkNT6eY8pC98KAc9v0h7LQKiwYAm6V1U6Q0FS7oWBLquSDdbDkEdkmJQZkHZZjo7\nWGFwKJ2hO0mJzBf4uuIuvA8CUp3esCRFWmFwgC++gwOtKEmvlYAuBVFAh6MDiCV/BGIjoUD3Hs/n\n6ONuAPCYZD+Et3F8ptTNmRW02Kcd39jiahP2HTgsKTwOpy8Eb8qc8YTKwqGC+N/YlloylLApijgM\nRahFVe82XA+IqvjCJuwpShDO///1OTYjNKwCaokxtuC/MoWDkGRNt9fpIoqmhM0Iid7qsQ+C4QvB\noQQJBD9FB0H4JQCQVIDCAs0kl9UJSBGH4gcoFKoQDpsAYhv0hG+dHzpdxxESVnWIVGBB+OUMh2O2\nSDIhkJAIbAMDwdAAoDNY+e8bMUcJxuGYWHXPJr0TKM9p91XIDOXzmBmE+nmOn8e4KwBQ0TScGq9I\nkdUAwU/UpFe38BO1aFggAEtCwQOBq8AbEjvZUtvYfgHfaeJK2O4MBRMCS5VRmUkiJWRBBfwCDg5h\nV9Lk8lCYWWhFfpAYhMQ6S0NBut5hB75gFUvhynDwhEQN389UlwCga52kiz42wxS1+mDpGmNvSHA1\npCBf1WZd4XKAWaRUKC0JhRX7Dh4Q0vVMKeDLf3iW8FaKl4YDCgk+hzg3WKWRlkJBuy4SrSl41hW7\nQsENAYQEMkia98MghKNjVal7rjC72uxRQwz4Ym9uihIEtFi7bGF1GIJTDRxEEPyAhg4H1NgqlZYa\nrc2XS5TgUYN1D5Qa/rxwKwBzraOGeOn9Exxq0ACgq9coUDQX8W7MhnDTnTSQGqz7njTFD7gvWDtb\nSwxxGIJSPPERDaA+qAYEa4dbG/lb767DASBl8NdLoeBZ0vfsQt97nyVBDWgEKplrWDebsla0PSdo\nhDuVwAFYILw3ovOcASOmwpl7r83ehc86t9BzWl4wUq4E5o/X/8gN6BRvaMbreiBI6lgKYFoJHzXw\n97nzppTvMJgum3/q9qQ9EDTz+/k7cxogPGC8EJaHwCUQFBAWnODs+CUAlkNwwPB85t998+pOGO63\n+StvY74AyK03tH/a0572tKc97WlPQ+0/AQYALf6OfNkZY7AAAAAASUVORK5CYII=" transform="matrix(0.9846 0 0 0.9908 -11.6 -3.6)"/>\n  <polygon fill="#FFFFFF" points="20,18 10,50 20,82 30,50"/>\n  <polygon fill="#E53935" points="10,50 20,18 30,50"/>\n  <polygon fill="#D1D1D1" points="30,50 20,82 10,50"/>\n</svg>\n'
                )
            );
            _.ym(
                new _.cA(_.G(c, 6)),
                a(
                    '<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="100px" viewBox="0 0 30 100">\n  <path fill="#666" d="M24.84,69.76L24,58l-4.28,2.34C18.61,57.09,18,53.62,18,50c0-6.17,1.75-11.93,4.78-16.82l-2.5-1.66C16.94,36.88,15,43.21,15,50c0,4.14,0.72,8.11,2.04,11.79L13,64l7.7,5.13L25,72L24.84,69.76z"/>\n</svg>\n'
                )
            );
            _.ym(
                new _.cA(_.G(c, 7)),
                a(
                    '<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="100px" viewBox="0 0 30 100">\n  <path fill="#B1B1B1" d="M24.84,69.76L24,58l-4.28,2.34C18.61,57.09,18,53.62,18,50c0-6.17,1.75-11.93,4.78-16.82l-2.5-1.66C16.94,36.88,15,43.21,15,50c0,4.14,0.72,8.11,2.04,11.79L13,64l7.7,5.13L25,72L24.84,69.76z"/>\n</svg>\n'
                )
            );
            _.ym(
                new _.cA(_.G(c, 8)),
                a(
                    '<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="100px" viewBox="0 0 30 100">\n  <path fill="#E4E4E4" d="M24.84,69.76L24,58l-4.28,2.34C18.61,57.09,18,53.62,18,50c0-6.17,1.75-11.93,4.78-16.82l-2.5-1.66C16.94,36.88,15,43.21,15,50c0,4.14,0.72,8.11,2.04,11.79L13,64l7.7,5.13L25,72L24.84,69.76z"/>\n</svg>\n'
                )
            );
            _.PE(this.j, [c]);
        }
    };
    qM.prototype.mapSize_changed = function() {
        rM(this);
    };
    qM.prototype.disableDefaultUI_changed = function() {
        rM(this);
    };
    qM.prototype.panControl_changed = function() {
        rM(this);
    };
    var zM = Object.freeze([
            "exitFullscreen",
            "webkitExitFullscreen",
            "mozCancelFullScreen",
            "msExitFullscreen",
        ]),
        AM = Object.freeze([
            "fullscreenchange",
            "webkitfullscreenchange",
            "mozfullscreenchange",
            "MSFullscreenChange",
        ]),
        vM = Object.freeze([
            "fullscreenEnabled",
            "webkitFullscreenEnabled",
            "mozFullScreenEnabled",
            "msFullscreenEnabled",
        ]),
        BM = Object.freeze([
            "requestFullscreen",
            "webkitRequestFullscreen",
            "mozRequestFullScreen",
            "msRequestFullscreen",
        ]);
    _.Ea(DM, _.L);
    var CM = [
        { nl: -52, close: -78, top: -86, backgroundColor: "#fff" },
        { nl: 0, close: -26, top: -86, backgroundColor: "#222" },
    ];
    EM.prototype.add = function(a) {
        this.i.appendChild(a);
        a.style.position = "absolute";
        a = { element: a };
        this.j.push(a);
        a.yh = _.K.addListener(a.element, "resize", (0, _.y)(this.o, this, a));
        this.o(a);
    };
    EM.prototype.remove = function(a) {
        this.i.removeChild(a);
        rL(
            this.j,
            (0, _.y)(function(b, c) {
                b.element == a &&
                    (this.j.splice(c, 1),
                        b && (this.o(b), b.yh && (_.K.removeListener(b.yh), delete b.yh)));
            }, this)
        );
    };
    EM.prototype.o = function(a) {
        a.width = _.Ky(a.element.getAttribute("controlWidth"));
        a.height = _.Ky(a.element.getAttribute("controlHeight"));
        a.width || (a.width = a.element.offsetWidth);
        a.height || (a.height = a.element.offsetHeight);
        var b = 0;
        _.B(this.j, function(h) {
            var k = h.element;
            _.qz(k) && "hidden" != k.style.visibility && (b = Math.max(b, h.width));
        });
        var c = 0,
            d = this.T,
            e = !1;
        this.H(function(h) {
            var k = h.element;
            _.qz(k) &&
                "hidden" != k.style.visibility &&
                (e ? (c += d) : (e = !0),
                    (k = k.style),
                    (k.left = _.Q((b - h.width) / 2)),
                    (k.top = _.Q(c)),
                    (c += h.height));
        });
        a = this.i;
        var f = b,
            g = c;
        a.setAttribute("controlWidth", f);
        a.setAttribute("controlHeight", g);
        _.nz(this.i, f || g);
        _.K.trigger(this.i, "resize");
    };
    _.jE(
        '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#666666;}</style><title>My Location 4</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 21H-1V-1h22v22z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n'
    );
    _.jE(
        '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#333333;}</style><title>My Location 5</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 21H-1V-1h22v22z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n'
    );
    _.jE(
        '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#111111;}</style><title>My Location 6</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 21H-1V-1h22v22z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n'
    );
    _.jE(
        '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#B3B3B3;}</style><title>My Location 3</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 10v11H-1V-1h22v11z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n'
    );
    _.jE(
        '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{fill:#E6E6E6;}</style><title>My Location 2</title><path class="st0" d="M10 3h2V0h-2v3zm9 9h3v-2h-3v2zM0 12h3v-2H0v2zm10 10h2v-3h-2v3z"/><path class="st0" d="M11 18c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7m0-16c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9"/><path class="st0" d="M11 7c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4"/></svg>\n'
    );
    _.jE(
        '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#FFFFFF;}</style><title>My Location 1</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 21H-1V-1h22v22z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n'
    );
    _.jE(
        '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#4285F4;}</style><title>My Location Blue 1</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 21H-1V-1h22v22z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n'
    );
    _.jE(
        '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#3367D6;}</style><title>My Location Blue 2</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 21H-1V-1h22v22z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n'
    );
    _.jE(
        '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><style>.st0{filter:url(#Adobe_OpacityMaskFilter);} .st1{fill:#FFFFFF;} .st2{mask:url(#b);fill:#2A56C6;}</style><title>My Location Blue 3</title><g transform="translate(1 1)"><defs><filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22" id="b"><g class="st0"><path id="a" class="st1" d="M21 21H-1V-1h22v22z"/></g></mask><path class="st2" d="M10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm8.9-8c-.5-4.2-3.7-7.4-7.9-7.9V-1H9v2.1C4.8 1.6 1.6 4.8 1.1 9H-1v2h2.1c.5 4.2 3.7 7.4 7.9 7.9V21h2v-2.1c4.2-.5 7.4-3.7 7.9-7.9H21V9h-2.1zM10 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></g></svg>\n'
    );
    _.A(GM, _.L);
    GM.prototype.changed = function(a) {
        if ("url" != a)
            if (this.get("pano"))
                (c = this.get("pov")),
                (b = this.get("position")),
                c &&
                b &&
                ((a = _.BK(c, b, this.get("pano"), this.i)), this.set("url", a));
            else {
                a = {};
                if ((c = this.get("center")))
                    (c = new _.I(c.lat(), c.lng())), (a.ll = c.toUrlValue());
                c = this.get("zoom");
                _.he(c) && (a.z = c);
                c = this.get("mapTypeId");
                "terrain" == c ? (b = "p") : "hybrid" == c ? (b = "h") : (b = _.pu[c]);
                b && (a.t = b);
                if ((c = this.get("pano"))) {
                    a.z = 17;
                    a.layer = "c";
                    var b = this.get("position");
                    b && (a.cbll = b.toUrlValue());
                    a.panoid = c;
                    var c = this.get("pov");
                    c &&
                        (a.cbp =
                            "12," + c.heading + ",," + Math.max(c.zoom - 3) + "," + -c.pitch);
                }
                a.hl = _.Md(_.Nd(_.H));
                a.gl = _.F(_.Nd(_.H), 1);
                45 == this.get("tilt") && (a.deg = this.get("heading") || 0);
                a.mapclient = _.vh[35] ? "embed" : "apiv3";
                var d = [];
                _.$d(a, function(e, f) {
                    d.push(e + "=" + f);
                });
                this.set("url", this.i + "?" + d.join("&"));
            }
    };
    HM.prototype.getDiv = _.qa("o");
    HM.prototype.setUrl = function(a) {
        a
            ?
            (this.j.setAttribute("href", a),
                this.j.setAttribute(
                    "title",
                    "Open this area in Google Maps (opens a new window)"
                )) :
            (this.j.removeAttribute("title"), this.j.removeAttribute("href"));
    };
    _.Ea(LM, _.L);
    _.Ea(OM, _.L);
    OM.prototype.Db = _.qa("i");
    _.A(SM, _.L);
    _.A(TM, _.L);
    _.A(UM, _.L);
    _.A(WM, _.L);
    WM.prototype.j = function() {
        var a = this.i;
        a.timeout && (window.clearTimeout(a.timeout), (a.timeout = null));
    };
    WM.prototype.active_changed = function() {
        this.j();
        if (this.get("active")) XM(this);
        else {
            var a = this.i;
            a.listeners &&
                (_.B(a.listeners, _.K.removeListener), (a.listeners = null));
            _.oz(a);
        }
    };
    _.Ea($M, _.L);
    _.Ea(bN, _.L);
    bN.prototype.mapSize_changed = function() {
        cN(this);
    };
    bN.prototype.display_changed = function() {
        cN(this);
    };
    _.A(dN, _.L);
    dN.prototype.changed = function(a) {
        if (!this.i)
            if ("mapTypeId" == a) {
                a = this.get("mapTypeId");
                var b = this.j[a];
                b && b.mapTypeId && (a = b.mapTypeId);
                eN(this, "internalMapTypeId", a);
                b && b.af && eN(this, b.af, b.value);
            } else fN(this);
    };
    _.Ea(iN, _.L);
    iN.prototype.W = function() {
        var a = +this.get("heading") || 0;
        this.set("heading", (a + 270) % 360);
    };
    iN.prototype.ka = function() {
        this.o = !this.o;
        this.set("tilt", this.o ? 45 : 0);
    };
    _.A(jN, _.L);
    var nN = {},
        cP = (nN[0] = {});
    cP.backgroundColor = "#fff";
    cP.ri = "#e6e6e6";
    var dP = (nN[1] = {});
    dP.backgroundColor = "#222";
    dP.ri = "#1a1a1a";
    _.Ea(oN, _.L);
    _.A(pN, _.L);
    pN.prototype.getDiv = _.qa("i");
    _.A(rN, _.L);
    _.t = rN.prototype;
    _.t.hide_changed = function() {
        var a = !this.get("hide");
        _.nz(this.i, a);
        this.fh();
        a && _.Fz();
    };
    _.t.fh = function() {
        this.set("width", _.Rh(this.j).width);
    };
    _.t.mapTypeId_changed = function() {
        "streetview" == this.get("mapTypeId") &&
            (_.EK(this.i), (this.o.style.color = "#fff"));
    };
    _.t.fontLoaded_changed = rN.prototype.fh;
    _.t.getDiv = _.qa("i");
    _.A(vN, _.L);
    _.t = vN.prototype;
    _.t.fontLoaded_changed = vN.prototype.size_changed = function() {
        uN(this);
    };
    _.t.attributionText_changed = function() {
        _.fz(this.T, wN(this));
        uN(this);
    };
    _.t.sh = function() {
        this.H = tN(this);
        uN(this);
    };
    _.t.rmiWidth_changed = vN.prototype.sh;
    _.t.tosWidth_changed = vN.prototype.sh;
    _.t.scaleWidth_changed = vN.prototype.sh;
    _.t.hide_changed = function() {
        var a = !this.get("hide");
        _.nz(this.i, a);
        a && _.Fz();
    };
    _.t.mapTypeId_changed = function() {
        "streetview" == this.get("mapTypeId") && _.EK(this.W);
    };
    _.t.getDiv = _.qa("i");
    _.A(BN, _.L);
    BN.prototype.visible_changed = function() {
        this.get("visible") ? (_.Fz(), _.pz(this.i)) : _.oz(this.i);
    };
    BN.prototype.attributionText_changed = function() {
        var a = this.get("attributionText") || "";
        _.mz(this.j, a);
        a || _.oz(this.i);
    };
    BN.prototype.size_changed = function() {
        AN(this);
    };
    _.A(CN, _.L);
    CN.prototype.attributionText_changed = function() {
        var a = this.get("attributionText") || "";
        _.Ko(this.j, a);
    };
    CN.prototype.hide_changed = function() {
        var a = !this.get("hide");
        _.nz(this.i, a);
        a && _.Fz();
    };
    CN.prototype.getDiv = _.qa("i");
    _.A(DN, _.L);
    _.A(EN, _.L);
    EN.prototype.floors_changed = function() {
        var a = this.get("floorId"),
            b = this.get("floors"),
            c = this.o;
        if (1 < _.Zd(b)) {
            _.pz(c);
            _.B(this.i, function(g) {
                _.so(g);
            });
            this.i = [];
            for (var d = b.length, e = d - 1; 0 <= e; --e) {
                var f = _.Oo("div", c);
                b[e].xg == a ?
                    ((f.style.color = "#aaa"),
                        (f.style.fontWeight = "bold"),
                        (f.style.backgroundColor = "#333")) :
                    (FN(this, f, b[e].rn),
                        (f.style.color = "#999"),
                        (f.style.fontWeight = "400"),
                        (f.style.backgroundColor = "#222"));
                f.style.padding = "5px";
                e == d - 1 ?
                    xL(f, _.Q(_.IK(this.j))) :
                    0 == e && yL(f, _.Q(_.IK(this.j)));
                _.Jo(b[e].Ck, f);
                f.setAttribute("title", b[e].description);
                this.i.push(f);
            }
            setTimeout(function() {
                _.K.trigger(c, "resize");
            });
        } else _.oz(c);
    };
    _.Ea(JN, _.L);
    JN.prototype.W = function() {
        1 == this.get("mode") && this.set("mode", 2);
    };
    JN.prototype.$ = function() {
        2 == this.get("mode") && this.set("mode", 1);
    };
    var RN = '<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.84,27.19,30.6,27.19z M30.48,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M35.16,40.25c-0.04,0-0.09-0.01-0.13-0.02c-1.06-0.28-4.04-1.01-5.03-1.01c-0.88,0-3.66,0.64-4.66,0.89\n    c-0.19,0.05-0.38-0.02-0.51-0.17c-0.12-0.15-0.15-0.35-0.07-0.53l4.78-10.24c0.08-0.17,0.25-0.29,0.45-0.29\n    c0.14,0,0.37,0.11,0.45,0.28l5.16,10.37c0.09,0.18,0.06,0.39-0.06,0.54C35.45,40.19,35.3,40.25,35.16,40.25z M30,38.22\n    c0.9,0,2.96,0.47,4.22,0.78l-4.21-8.46l-3.9,8.36C27.3,38.62,29.2,38.22,30,38.22z"/>\n  <path fill="#3F3F3F" d="M25.22,39.62c0,0,3.64-0.9,4.78-0.9c1.16,0,5.16,1.03,5.16,1.03L30,29.39L25.22,39.62z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.84,27.19,30.6,27.19z M30.48,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M34.82,41.4c-0.21,0-0.39-0.13-0.47-0.32c-0.58-1.56-1.42-3.02-1.79-3.13c-0.42-0.13-2.39,0.7-4.22,1.77\n    c-0.21,0.12-0.48,0.08-0.63-0.11c-0.16-0.18-0.16-0.45-0.01-0.64L35.9,29c0.14-0.17,0.38-0.23,0.58-0.14\n    c0.2,0.09,0.33,0.3,0.3,0.52l-1.46,11.59c-0.03,0.23-0.21,0.41-0.44,0.43C34.85,41.39,34.83,41.4,34.82,41.4z M32.51,36.94\n    c0.13,0,0.24,0.01,0.34,0.04c0.62,0.19,1.24,1.13,1.7,2.05l1.02-8.07l-5.54,6.74C30.93,37.29,31.87,36.94,32.51,36.94z"/>\n  <path fill="#3F3F3F" d="M34.82,40.9c0,0-1.09-3.12-2.11-3.43c-1.02-0.31-4.62,1.82-4.62,1.82l8.2-9.97\n    C36.29,29.32,34.82,40.9,34.82,40.9z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.95,33.64,41.84,27.19,30.6,27.19z M30.48,55.03\n    c-10.75,0-19.47-6.06-19.47-13.53s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M35.45,41.88c-0.04,0-0.08,0-0.12-0.01c-0.18-0.04-0.32-0.18-0.36-0.36c-0.12-0.44-0.52-1.68-1-2.16\n    c-0.31-0.31-2.4-0.5-4.56-0.42c-0.25,0.02-0.46-0.16-0.51-0.4c-0.05-0.24,0.08-0.48,0.3-0.57l13.95-5.63\n    c0.22-0.09,0.47-0.01,0.6,0.18s0.12,0.45-0.04,0.62l-7.88,8.59C35.73,41.82,35.59,41.88,35.45,41.88L35.45,41.88z M31.9,37.94\n    c1.16,0.07,2.34,0.26,2.77,0.69c0.44,0.44,0.78,1.19,1,1.77l5.81-6.33C41.48,34.07,31.9,37.94,31.9,37.94z"/>\n  <path fill="#3F3F3F" d="M35.45,41.38c0,0-0.38-1.63-1.13-2.39c-0.75-0.75-4.93-0.57-4.93-0.57l13.95-5.63L35.45,41.38L35.45,41.38z\n    "/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.84,27.19,30.6,27.19z M30.48,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M34.92,42.6c-0.11,0-0.22-0.04-0.32-0.11c-0.15-0.12-0.21-0.31-0.17-0.49c0-0.01,0.17-0.84-0.01-1.83\n    c-0.08-0.43-1.23-1.06-2.26-1.39c-0.23-0.07-0.37-0.29-0.35-0.53c0.02-0.24,0.21-0.42,0.44-0.45l15.03-1.64\n    c0.24-0.03,0.47,0.13,0.54,0.37c0.06,0.24-0.06,0.49-0.28,0.59l-12.42,5.44C35.06,42.59,34.99,42.6,34.92,42.6L34.92,42.6z\n     M34.19,38.6c0.58,0.36,1.1,0.82,1.21,1.39c0.09,0.49,0.11,0.95,0.1,1.32l8.65-3.79L34.19,38.6L34.19,38.6z"/>\n  <path fill="#3F3F3F" d="M34.92,42.1c0,0,0.22-0.92-0.01-2.03c-0.22-1.04-2.6-1.78-2.6-1.78l15.03-1.64L34.92,42.1z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.84,27.19,30.6,27.19z M30.48,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M33.69,43.9c-0.19,0-0.36-0.1-0.45-0.27c-0.1-0.19-0.06-0.42,0.08-0.57c0.01-0.01,0.76-0.81,1.19-1.75\n    c0.29-0.63-0.76-1.38-0.77-1.39c-0.19-0.13-0.26-0.38-0.18-0.59s0.3-0.34,0.53-0.32l14.81,1.91c0.25,0.03,0.44,0.24,0.44,0.5\n    c0,0.25-0.19,0.46-0.44,0.5l-15.16,1.99C33.73,43.89,33.71,43.9,33.69,43.9L33.69,43.9z M35.32,40.17c0.25,0.46,0.36,1,0.11,1.55\n    c-0.17,0.37-0.38,0.73-0.59,1.03l10.13-1.33L35.32,40.17z"/>\n  <path fill="#3F3F3F" d="M33.69,43.4c0,0,0.81-0.86,1.28-1.89c0.47-1.03-0.94-2.01-0.94-2.01l14.81,1.91L33.69,43.4L33.69,43.4z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.84,27.19,30.6,27.19z M30.48,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M47.73,45.15l-15.9-0.08c-0.22,0-0.42-0.15-0.48-0.37s0.03-0.45,0.23-0.56c0.66-0.39,2.48-1.56,2.96-2.25\n    c0.57-0.8,0.71-2.24,0.71-2.26c0.01-0.16,0.1-0.3,0.24-0.38c0.14-0.08,0.3-0.09,0.45-0.03l11.98,4.97c0.22,0.09,0.35,0.33,0.3,0.56\n    C48.18,44.99,47.97,45.15,47.73,45.15z M33.51,44.09l11.68,0.06l-9.04-3.75c-0.11,0.59-0.34,1.45-0.79,2.08\n    C35,42.98,34.22,43.59,33.51,44.09L33.51,44.09z"/>\n  <path fill="#3F3F3F" d="M31.84,44.58c0,0,2.46-1.47,3.12-2.39c0.66-0.93,0.8-2.5,0.8-2.5l11.98,4.97\n    C47.74,44.66,31.84,44.58,31.84,44.58z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.95,33.64,41.84,27.19,30.6,27.19z M30.48,55.03\n    c-10.75,0-19.47-6.06-19.47-13.53s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M45.08,48.74c-0.04,0-0.08,0-0.11-0.01l-14.45-3.4c-0.22-0.05-0.38-0.25-0.39-0.48\n    c0-0.23,0.15-0.43,0.37-0.49c0.86-0.24,3.23-0.97,3.87-1.51c0.63-0.53,1.11-1.63,1.25-2.01c0.05-0.15,0.18-0.27,0.33-0.31\n    c0.16-0.04,0.32-0.01,0.45,0.09l8.99,7.24c0.18,0.15,0.24,0.4,0.14,0.61C45.45,48.63,45.27,48.74,45.08,48.74L45.08,48.74z\n     M32.53,44.77l10.53,2.48l-6.76-5.44c-0.26,0.54-0.7,1.31-1.28,1.8C34.53,44.01,33.47,44.44,32.53,44.77z"/>\n  <path fill="#3F3F3F" d="M30.63,44.83c0,0,3.19-0.88,4.06-1.61c0.87-0.73,1.4-2.22,1.4-2.22l8.99,7.24L30.63,44.83z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.84,27.19,30.6,27.19z M30.48,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M40.4,52.96c-0.09,0-0.18-0.02-0.26-0.07l-12.27-7.33c-0.19-0.12-0.29-0.35-0.22-0.56\n    c0.06-0.22,0.26-0.37,0.48-0.37c1.18,0.01,4.24-0.05,5.06-0.32c0.68-0.22,1.74-1.35,2.26-2.02c0.11-0.14,0.28-0.21,0.45-0.19\n    s0.32,0.13,0.4,0.29l4.55,9.86c0.09,0.2,0.04,0.43-0.12,0.58C40.64,52.92,40.52,52.96,40.4,52.96z M29.9,45.6l9.36,5.6l-3.54-7.68\n    c-0.55,0.61-1.42,1.47-2.21,1.73C32.83,45.48,31.2,45.57,29.9,45.6L29.9,45.6z"/>\n  <path fill="#3F3F3F" d="M28.13,45.13c0,0,4.14,0.01,5.22-0.35c1.08-0.35,2.5-2.18,2.5-2.18l4.55,9.86L28.13,45.13z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.95,33.64,41.84,27.19,30.6,27.19L30.6,27.19z M30.48,55.03\n    c-10.75,0-19.47-6.06-19.47-13.53s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M31.05,54.8c-0.18,0-0.35-0.1-0.43-0.25l-5.83-10.24c-0.1-0.17-0.08-0.38,0.03-0.54\n    c0.12-0.16,0.31-0.23,0.51-0.19c1.16,0.25,4.37,0.89,5.26,0.89c0.98,0,3.52-0.73,4.42-1.01c0.18-0.05,0.39,0,0.52,0.14\n    s0.17,0.34,0.1,0.52l-4.11,10.37c-0.07,0.18-0.24,0.3-0.43,0.31L31.05,54.8L31.05,54.8z M26.2,44.77l4.76,8.37l3.34-8.44\n    c-1.1,0.31-2.84,0.76-3.73,0.76C29.77,45.46,27.55,45.04,26.2,44.77z"/>\n  <path fill="#3F3F3F" d="M25.22,44.06c0,0,4.29,0.9,5.43,0.9c1.16,0,4.5-1.03,4.5-1.03L31.04,54.3L25.22,44.06z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.84,27.19,30.6,27.19z M30.48,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M20.55,52.96c-0.12,0-0.24-0.04-0.33-0.13c-0.16-0.15-0.21-0.38-0.12-0.58l4.55-9.86\n    c0.07-0.16,0.22-0.27,0.4-0.29c0.17-0.02,0.35,0.05,0.45,0.19c0.37,0.48,1.49,1.76,2.26,2.02c0.82,0.27,3.93,0.32,5.06,0.32\n    c0.22,0,0.42,0.15,0.48,0.37s-0.03,0.45-0.22,0.56l-12.27,7.33C20.73,52.94,20.64,52.96,20.55,52.96L20.55,52.96z M25.23,43.52\n    l-3.54,7.68l9.36-5.6c-1.3-0.04-2.93-0.12-3.6-0.35C26.65,45,25.77,44.13,25.23,43.52L25.23,43.52z"/>\n  <path fill="#3F3F3F" d="M32.81,45.13c0,0-4.14,0.01-5.22-0.35c-1.08-0.35-2.5-2.18-2.5-2.18l-4.55,9.86L32.81,45.13z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.84,27.19,30.6,27.19z M30.48,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M15.86,48.74c-0.19,0-0.36-0.11-0.45-0.28c-0.1-0.21-0.05-0.46,0.14-0.61l9-7.24\n    c0.12-0.1,0.29-0.14,0.45-0.09c0.16,0.04,0.28,0.16,0.33,0.31c0,0.01,0.5,1.37,1.25,2.01c0.64,0.54,3.01,1.28,3.87,1.51\n    c0.22,0.06,0.37,0.26,0.37,0.49s-0.16,0.42-0.39,0.48l-14.45,3.4C15.93,48.73,15.9,48.74,15.86,48.74z M24.65,41.8l-6.76,5.44\n    l10.53-2.48c-0.94-0.33-2-0.75-2.49-1.16C25.35,43.11,24.91,42.34,24.65,41.8L24.65,41.8z"/>\n  <path fill="#3F3F3F" d="M30.31,44.83c0,0-3.19-0.88-4.06-1.61c-0.87-0.73-1.4-2.22-1.4-2.22l-8.99,7.24L30.31,44.83L30.31,44.83z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.95,33.64,41.84,27.19,30.6,27.19z M30.48,55.03\n    c-10.75,0-19.47-6.06-19.47-13.53s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M13.21,45.15c-0.24,0-0.44-0.17-0.49-0.4c-0.05-0.23,0.08-0.47,0.3-0.56L25,39.22\n    c0.15-0.06,0.31-0.05,0.45,0.03s0.23,0.22,0.24,0.38c0,0.01,0.14,1.46,0.71,2.26c0.49,0.69,2.31,1.86,2.96,2.25\n    c0.19,0.12,0.29,0.34,0.23,0.56s-0.26,0.37-0.48,0.37C29.11,45.07,13.21,45.15,13.21,45.15z M24.79,40.39l-9.04,3.75l11.68-0.06\n    c-0.71-0.5-1.49-1.11-1.85-1.61C25.14,41.85,24.91,40.98,24.79,40.39z"/>\n  <path fill="#3F3F3F" d="M29.11,44.58c0,0-2.46-1.47-3.12-2.39c-0.66-0.93-0.8-2.5-0.8-2.5l-11.98,4.97L29.11,44.58L29.11,44.58z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.84,27.19,30.6,27.19z M30.48,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.03,30.48,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M27.25,43.9h-0.06l-15.16-1.99c-0.25-0.03-0.44-0.25-0.44-0.5s0.19-0.46,0.44-0.5L26.84,39\n    c0.21-0.03,0.45,0.1,0.53,0.32s0.01,0.46-0.18,0.59c-0.01,0.01-1.05,0.76-0.77,1.39c0.43,0.94,1.18,1.75,1.19,1.75\n    c0.14,0.15,0.18,0.38,0.08,0.57C27.61,43.79,27.44,43.9,27.25,43.9L27.25,43.9z M15.97,41.41l10.13,1.33\n    c-0.2-0.3-0.42-0.65-0.59-1.02c-0.25-0.55-0.14-1.09,0.11-1.55L15.97,41.41z"/>\n  <path fill="#3F3F3F" d="M27.25,43.4c0,0-0.81-0.86-1.28-1.89s0.94-2.01,0.94-2.01L12.1,41.41L27.25,43.4L27.25,43.4z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.2c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.95,33.65,41.84,27.2,30.6,27.2z M30.48,55.04c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.04,30.48,55.04z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.51" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M26.02,42.6c-0.07,0-0.14-0.01-0.2-0.04L13.4,37.12c-0.23-0.1-0.35-0.35-0.28-0.59\n    c0.06-0.24,0.3-0.4,0.54-0.37l15.03,1.64c0.24,0.03,0.42,0.21,0.44,0.45s-0.12,0.45-0.35,0.53c-1.03,0.33-2.18,0.96-2.26,1.39\n    c-0.19,1.01-0.02,1.82-0.01,1.83c0.04,0.18-0.03,0.37-0.17,0.49C26.25,42.57,26.13,42.6,26.02,42.6L26.02,42.6z M16.79,37.52\n    l8.65,3.79c-0.01-0.37,0.01-0.82,0.1-1.32c0.1-0.56,0.63-1.03,1.21-1.39L16.79,37.52L16.79,37.52z"/>\n  <path fill="#3F3F3F" d="M26.02,42.1c0,0-0.22-0.92,0.01-2.03c0.22-1.04,2.6-1.78,2.6-1.78L13.6,36.65L26.02,42.1L26.02,42.1z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.2c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.95,33.65,41.84,27.2,30.6,27.2z M30.48,55.04c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.04,30.48,55.04z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.51" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M25.49,41.88c-0.14,0-0.27-0.06-0.37-0.16l-7.88-8.59c-0.16-0.17-0.18-0.43-0.04-0.62\n    c0.13-0.19,0.38-0.26,0.6-0.18l13.95,5.63c0.22,0.09,0.35,0.33,0.3,0.57s-0.25,0.41-0.51,0.4c-2.16-0.08-4.25,0.11-4.56,0.42\n    c-0.49,0.49-0.89,1.73-1,2.16c-0.05,0.18-0.19,0.31-0.36,0.36C25.57,41.88,25.53,41.88,25.49,41.88z M19.47,34.08l5.81,6.33\n    c0.21-0.58,0.55-1.33,1-1.77c0.43-0.43,1.61-0.62,2.77-0.69C29.05,37.95,19.47,34.08,19.47,34.08z"/>\n  <path fill="#3F3F3F" d="M25.49,41.38c0,0,0.38-1.63,1.13-2.39c0.75-0.75,4.93-0.57,4.93-0.57L17.6,32.79L25.49,41.38z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.6,27.2c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.95,33.65,41.84,27.2,30.6,27.2z M30.48,55.04c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S41.23,55.04,30.48,55.04z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.48" cy="41.51" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M25.49,41.88c-0.21,0-0.4-0.13-0.47-0.33l-4.3-11.67c-0.08-0.21,0-0.45,0.18-0.58s0.44-0.12,0.61,0.03\n    l10.37,8.71c0.16,0.14,0.22,0.36,0.15,0.56c-0.08,0.2-0.26,0.31-0.49,0.32c-2.16-0.08-4.25,0.11-4.56,0.42\n    c-0.49,0.49-0.89,1.73-1,2.16c-0.05,0.21-0.24,0.36-0.46,0.37C25.51,41.88,25.5,41.88,25.49,41.88z M22.31,31.3l3.17,8.6\n    c0.2-0.46,0.47-0.94,0.79-1.27c0.58-0.58,2.47-0.71,3.89-0.73L22.31,31.3z"/>\n  <path fill="#3F3F3F" d="M25.49,41.38c0,0,0.38-1.63,1.13-2.39c0.75-0.75,4.93-0.57,4.93-0.57l-10.37-8.71L25.49,41.38L25.49,41.38z"/>\n</svg>\n'.split(
            ";"
        ),
        QN = '<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.57,27.19,30.33,27.19z M30.21,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#333333" d="M34.25,23.78h-8.51c-0.42,0-0.8-0.26-0.94-0.66s-0.02-0.84,0.3-1.11l0.64-0.53\n    c-1.12-1.12-1.77-2.65-1.77-4.25c0-3.3,2.69-5.99,5.98-5.99c1.6,0,3.1,0.63,4.23,1.76s1.75,2.64,1.75,4.24\n    c0,1.45-0.53,2.84-1.49,3.94c-0.03,0.05-0.06,0.09-0.1,0.14l-0.13,0.13l-0.03,0.03L34.86,22c0.34,0.26,0.48,0.71,0.34,1.12\n    C35.06,23.51,34.68,23.78,34.25,23.78z M29.49,21.78h0.93c0.08-0.33,0.33-0.6,0.68-0.71c0.09-0.03,0.17-0.06,0.25-0.1l0.12-0.05\n    c0.25-0.11,0.45-0.21,0.64-0.34c0.01-0.01,0.08-0.05,0.09-0.06c0.16-0.11,0.31-0.24,0.45-0.37c0.01-0.01,0.09-0.08,0.1-0.09\n    l0.05-0.05c0.02-0.02,0.03-0.04,0.05-0.06c0.71-0.75,1.1-1.72,1.1-2.74c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.75-1.17-2.81-1.17\n    C27.79,13.21,26,15,26,17.2c0,1.3,0.64,2.52,1.71,3.27c0.05,0.03,0.09,0.07,0.13,0.11c0.3,0.19,0.64,0.35,1,0.46\n    C29.16,21.18,29.41,21.45,29.49,21.78z"/>\n  <path fill="#333333" d="M33.97,43.59h-3.04c-0.45,0-0.84-0.3-0.96-0.72c-0.12,0.42-0.51,0.72-0.96,0.72h-3\n    c-0.55,0-0.99-0.44-1-0.99l-0.13-9.18l-0.38,0.97c-0.3,0.71-1.04,1.08-1.79,0.89l-1.01-0.33c-0.74-0.27-1.13-1.03-0.94-1.78\n    c0-0.01,0-0.02,0.01-0.02c0.06-0.22,2.59-9.54,2.59-9.54c0.23-0.93,1.04-1.66,1.95-1.79c0.08-0.02,0.17-0.03,0.26-0.03h8.84\n    c0.06,0,0.15,0.01,0.22,0.02c0.96,0.11,1.8,0.83,2.04,1.79c2.15,8.31,2.42,9.38,2.46,9.53c0.2,0.78-0.14,1.5-0.83,1.75l-1.08,0.35\n    c-0.8,0.21-1.55-0.16-1.84-0.85l-0.28-0.73l-0.13,8.96C34.97,43.15,34.52,43.59,33.97,43.59z M31.87,41.59h1.12l0.19-13.22\n    c0.01-0.48,0.35-0.88,0.82-0.97c0.47-0.08,0.93,0.17,1.11,0.62l0.09,0.23l1.86,4.92h0.01c-0.48-1.88-2.34-9.09-2.34-9.09\n    c-0.04-0.16-0.21-0.29-0.33-0.29c-0.03,0-0.06,0-0.09-0.01h-8.6c-0.03,0-0.07,0.01-0.1,0.01c-0.09,0-0.26,0.13-0.31,0.32\n    c-1.6,5.91-2.22,8.19-2.47,9.08l2.06-5.18c0.18-0.44,0.64-0.7,1.11-0.61c0.47,0.09,0.81,0.49,0.82,0.97L27,41.59h1.08l0.48-6.92\n    c0.06-0.79,0.65-1.34,1.43-1.34c0.6,0,1.32,0.36,1.4,1.34L31.87,41.59z M22.7,33.66c0.01-0.01,0.01-0.02,0.01-0.04\n    C22.71,33.64,22.7,33.65,22.7,33.66z"/>\n  <path fill="#CE592C" d="M25.74,22.78l0.9-0.75h6.62l0.99,0.75"/>\n  <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="29.95" cy="22.37" rx="2.25" ry="0.3"/>\n  <path fill="#FDBF2D" d="M38.15,33.37c0-0.01-2.46-9.53-2.46-9.53c-0.15-0.6-0.72-1.05-1.31-1.05H25.6c-0.59,0-1.13,0.49-1.28,1.08\n    c0,0-2.59,9.54-2.59,9.55c-0.06,0.24,0.04,0.49,0.29,0.58l0.94,0.31c0.25,0.06,0.51-0.05,0.61-0.29l2.24-5.65l0.2,14.21h3\n    l0.55-7.85c0.02-0.21,0.13-0.41,0.44-0.41s0.38,0.2,0.39,0.41l0.54,7.85h3.04l0.2-14.21l2.12,5.61c0.1,0.23,0.36,0.35,0.61,0.29\n    l1.04-0.34C38.18,33.85,38.21,33.6,38.15,33.37z"/>\n  <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M34.17,28.38l0.08-5.6h0.17l0.48,5.44l0.45,3.13 M25.81,28.38\n    l-0.08-5.59h-0.17c0,0-0.31,4.2-0.48,5.43c-0.17,1.24-0.45,3.13-0.45,3.13L25.81,28.38z"/>\n  <ellipse fill="#FDBF2D" cx="29.95" cy="17.23" rx="4.98" ry="5"/>\n  <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M30.35,21.74c-1.18,0.11-2.31-0.06-3.3-0.44\n    c0.94,0.68,2.12,1.04,3.36,0.92c1.27-0.12,2.38-0.71,3.19-1.59C32.69,21.23,31.57,21.63,30.35,21.74z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.57,27.19,30.33,27.19z M30.21,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M34.56,41.4c-0.21,0-0.39-0.13-0.47-0.32c-0.58-1.56-1.42-3.02-1.79-3.13c-0.41-0.13-2.39,0.7-4.22,1.77\n    c-0.21,0.12-0.48,0.08-0.63-0.11c-0.16-0.18-0.16-0.45-0.01-0.64l8.2-9.97c0.14-0.17,0.38-0.23,0.58-0.14\n    c0.2,0.09,0.33,0.3,0.3,0.52l-1.46,11.59c-0.03,0.23-0.21,0.41-0.44,0.43C34.59,41.39,34.57,41.4,34.56,41.4z M32.25,36.94\n    c0.13,0,0.24,0.01,0.34,0.04c0.62,0.19,1.23,1.13,1.7,2.05l1.02-8.07l-5.53,6.74C30.67,37.29,31.61,36.94,32.25,36.94z"/>\n  <path fill="#3F3F3F" d="M34.56,40.9c0,0-1.09-3.12-2.11-3.43s-4.62,1.82-4.62,1.82l8.2-9.97L34.56,40.9z"/>\n  <path fill="#333333" d="M33.37,43.7c-0.18,0-0.35-0.03-0.5-0.09c-0.22-0.06-1.1-0.23-1.82-0.37l-0.22-0.07\n    c-0.28-0.12-0.59-0.39-0.77-0.8c-0.34,0.29-0.41,0.31-0.51,0.36c-0.28,0.12-0.55,0.11-0.69,0.09l-0.29-0.06\n    c-0.38-0.09-2.08-0.44-2.08-0.44l-0.3-0.11c-0.31-0.18-0.65-0.58-0.7-1.17c-0.01-0.12-0.19-3.18-0.42-6.75\n    c-0.14,0.27-0.36,0.54-0.7,0.72c-0.42,0.22-0.91,0.24-1.45,0.06c-1.69-0.54-1.41-1.97-1.3-2.51c0.02-0.09,0.04-0.18,0.05-0.27\n    c0.02-0.12,0.46-2.45,0.68-3.37c0.14-0.58,0.68-3.38,0.89-4.48c0.03-0.36,0.23-1.64,1.31-2.31c0.35-0.22,0.78-0.47,1.15-0.68\n    c-1.08-1.1-1.72-2.6-1.71-4.22c0-1.6,0.62-3.11,1.75-4.24c1.12-1.13,2.62-1.75,4.21-1.75h0.01c1.59,0,3.09,0.63,4.21,1.76\n    s1.74,2.64,1.74,4.24c0,1.43-0.5,2.77-1.37,3.82l0.47,0.01c0.33,0.01,0.65,0.15,0.88,0.39s0.35,0.56,0.34,0.89l-0.02,0.46\n    c0.28,0.37,0.48,0.82,0.55,1.27c0.01,0.01,0.49,2.04,0.89,4.51c0.3,1.87,0.67,4.54,0.75,5.23c0.13,0.8-0.27,1.48-0.98,1.67\n    c-0.28,0.11-0.97,0.31-1.5,0.23c-0.04-0.01-0.08-0.01-0.13-0.02l-0.17,5.13c0.03,0.22,0.01,0.45-0.01,0.65\n    c-0.05,0.52-0.42,1.1-1.09,1.72l-0.13,0.29l-0.45,0.12C33.74,43.67,33.54,43.7,33.37,43.7z M28.51,42.73l0.05,0.02L28.51,42.73z\n     M31.9,41.37c0.71,0.13,1.11,0.22,1.36,0.28c0.16-0.16,0.29-0.31,0.35-0.41l0.3-9.24l1.97-0.19l0.44,1.92\n    c0.01,0,0.03-0.01,0.04-0.01c-0.11-0.83-0.39-2.88-0.7-4.81c-0.39-2.39-0.87-4.42-0.87-4.44c-0.04-0.24-0.15-0.44-0.27-0.55\n    l-0.35-0.31l0.02-0.57l-2.71-0.08l-0.29-1.95c1.62-0.54,2.71-2.07,2.71-3.79c0-1.07-0.41-2.07-1.16-2.83\n    c-0.75-0.75-1.74-1.17-2.79-1.17c-1.06,0-2.05,0.41-2.79,1.16C26.41,15.13,26,16.14,26,17.21c0,1.65,0.98,3.11,2.5,3.72l-0.4,1.93\n    l-0.81-0.02c-0.38,0.21-1.12,0.64-1.68,0.98c-0.25,0.15-0.36,0.61-0.37,0.8l-0.02,0.12c-0.03,0.16-0.73,3.88-0.92,4.64\n    c-0.16,0.65-0.45,2.15-0.58,2.86c0.27-0.72,0.71-1.94,1.1-3.21l1.95,0.23c0.28,4.41,0.6,9.68,0.69,11.21\n    c0.73,0.15,1.15,0.24,1.4,0.3c0.09-0.07,0.18-0.16,0.27-0.23l0.11-4.79l1.99-0.1C31.7,39.55,31.85,40.88,31.9,41.37L31.9,41.37z\n     M36.83,33.58c-0.02,0.01-0.04,0.01-0.06,0.02C36.79,33.6,36.81,33.59,36.83,33.58z"/>\n  <path fill="#FABD2C" d="M22.66,32.44c-0.12,0.73-0.42,1.35,0.57,1.67c0.97,0.31,1.03-0.53,1.15-0.79c0,0,0.79-2.02,1.44-4.14\n    c0,0,0.9-3.69,0.98-4.14c0.26-1.66-0.41-2.27-1.17-2.21c-0.56,0.04-1.2,0.38-1.38,1.75c0,0-0.72,3.85-0.91,4.58\n    C23.11,30.06,22.66,32.44,22.66,32.44z"/>\n  <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M25.67,29.87l-0.2-7.11l-0.41,0.31c0,0,0.06,5.4-0.11,6.64\n    s-0.45,3.13-0.45,3.13L25.67,29.87z"/>\n  <path fill="none" d="M27.03,22.08h8.2v20.56h-8.2C27.03,42.64,27.03,22.08,27.03,22.08z"/>\n  <path fill="#E58A2C" d="M35.23,22.08l-6.16,0.37l-2.04,0.32l0.51,18.03l1.43,1.03l0.19-0.02L30.1,41l0.19-8.22l0.24-0.77\n    l1.25,10.05l1.87,0.57c0,0,0.9-0.77,0.95-1.24c0.04-0.44,0-0.47,0-0.47L35.23,22.08"/>\n  <path fill="none" d="M25.39,22.74h8.31V42.7h-8.31V22.74z"/>\n  <path fill="#FABD2C" d="M25.39,22.74l1.1,18.22c0.02,0.27,0.2,0.37,0.2,0.37s2.11,0.44,2.2,0.48h0.28c0,0-0.13-0.04-0.14-0.23\n    c-0.02-0.19,0.27-7.59,0.27-7.59c0.02-0.37,0.12-0.52,0.36-0.53c0.24,0.01,0.35,0.11,0.4,0.76c0,0,0.85,7.05,0.87,7.48\n    s0.31,0.57,0.31,0.57s1.86,0.34,1.99,0.41c0.03,0.02,0.08,0.02,0.13,0.02c0.14,0,0.32-0.05,0.32-0.05s0.03-0.04,0.02-0.32\n    c-0.1-3.46,0.46-4.14-0.04-19.32L25.39,22.74"/>\n  <path fill="none" d="M25.42,21.84h9.81v1.19h-9.81C25.42,23.03,25.42,21.84,25.42,21.84z"/>\n  <path fill="#CE592C" d="M27.03,21.84l-1.61,0.9l8.25,0.29l1.56-0.95L27.03,21.84"/>\n  <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="29.92" cy="22.37" rx="2.25" ry="0.3"/>\n  <ellipse fill="#FABD2C" cx="29.95" cy="17.23" rx="4.96" ry="5"/>\n  <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.93,21.74c-1.19,0-2.3-0.27-3.24-0.75\n    c0.87,0.77,2.01,1.24,3.26,1.24c1.28,0,2.44-0.49,3.32-1.28C32.31,21.45,31.16,21.74,29.93,21.74z"/>\n  <path fill="#FABD2C" d="M33.99,26.06c0.1,1.59,0.92,5.97,0.92,5.97l0.54,2.33c0.08,0.24,0.27,0.33,0.62,0.38\n    c0.35,0.05,1.09-0.21,1.09-0.21c0.23-0.06,0.29-0.3,0.25-0.55c0,0-0.35-2.72-0.75-5.23c-0.4-2.46-0.89-4.51-0.89-4.51\n    c-0.1-0.61-0.59-1.29-1.17-1.34c0,0-0.69,0-0.71,1.06C33.86,25.08,33.99,26.06,33.99,26.06z"/>\n  <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M34.41,22.95c-0.2,0.08-0.5,0.32-0.52,1.01\n    c-0.03,1.12,0.1,2.1,0.1,2.1c0.09,1.36,0.7,4.73,0.87,5.7l0.01,0.05C34.88,31.81,34.3,26.32,34.41,22.95z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.68,33.64,41.57,27.19,30.33,27.19z M30.21,55.03\n    c-10.75,0-19.47-6.06-19.47-13.53s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M35.19,41.88c-0.04,0-0.08,0-0.12-0.01c-0.18-0.04-0.32-0.18-0.36-0.36c-0.12-0.44-0.52-1.68-1-2.16\n    c-0.31-0.31-2.39-0.5-4.56-0.42c-0.22,0.02-0.46-0.16-0.51-0.4c-0.05-0.24,0.08-0.48,0.3-0.57l13.95-5.63\n    c0.22-0.09,0.47-0.01,0.6,0.18s0.12,0.45-0.04,0.62l-7.88,8.59C35.47,41.82,35.33,41.88,35.19,41.88L35.19,41.88z M31.64,37.94\n    c1.16,0.07,2.34,0.26,2.77,0.69c0.44,0.44,0.78,1.19,1,1.77l5.81-6.33L31.64,37.94z"/>\n  <path fill="#3F3F3F" d="M35.19,41.38c0,0-0.38-1.63-1.13-2.39c-0.75-0.75-4.93-0.57-4.93-0.57l13.95-5.63L35.19,41.38L35.19,41.38z\n    "/>\n  <path fill="#333333" d="M32.56,44.49c-0.09,0-0.17-0.01-0.26-0.03c-0.21-0.02-0.37-0.08-0.48-0.14c-0.12-0.06-1.39-0.8-1.6-0.93\n    c-0.39-0.2-0.81-0.67-0.84-1.41c0-0.03-0.01-0.08-0.02-0.16c-0.12,0.04-0.25,0.09-0.37,0.14c-0.11,0.09-0.25,0.16-0.4,0.18\n    c-0.04,0.01-0.14,0.02-0.26,0.03c-0.09,0.01-0.19,0.01-0.28-0.01c-0.11-0.01-0.21-0.04-0.31-0.08s-0.18-0.07-1.57-1.03\n    c-0.24-0.13-0.59-0.54-0.63-1.13c-0.01-0.12-0.2-3.22-0.42-6.77c-0.2-0.32-0.25-0.65-0.28-0.83c-0.04-0.17-0.47-2.07-0.78-4.08\n    c-0.06-0.64-0.34-3.56-0.34-3.99c-0.02-1.62,0.64-2.32,1.14-2.61c0.14-0.12,0.32-0.19,0.5-0.21l0.28-0.08\n    c-1.06-1.11-1.65-2.58-1.65-4.11c0-1.6,0.62-3.11,1.74-4.24c1.12-1.13,2.62-1.76,4.22-1.76h0.01c1.59,0,3.09,0.62,4.21,1.75\n    c1.13,1.13,1.75,2.64,1.75,4.24c0,1.59-0.64,3.12-1.78,4.25l0.9,0.19c0.44,0.09,0.77,0.47,0.8,0.92c0.01,0.14-0.01,0.28-0.06,0.41\n    l-0.06,0.99c0.16,0.45,0.21,0.98,0.14,1.59c0,0-0.07,3.73-0.07,4.47c0.01,0.92,0.11,3.37,0.11,3.37l0.01,0.13\n    c0.02,0.41,0.08,1.51-0.88,2.08l-0.36,6.17c0,0.22-0.04,0.79-0.41,1.3c-0.25,0.34-0.87,0.97-0.99,1.1\n    C33.08,44.39,32.82,44.49,32.56,44.49L32.56,44.49z M31.36,41.75c0.23,0.13,0.63,0.37,0.95,0.55c0.15-0.16,0.28-0.31,0.33-0.38\n    c0.01-0.02,0.03-0.08,0.03-0.11l0.4-6.94c0.03-0.46,0.36-0.84,0.81-0.92c0.01,0,0.02,0,0.04-0.01c0-0.08,0-0.19-0.01-0.27\n    l-0.01-0.16c0,0-0.1-2.5-0.11-3.44c-0.01-0.76,0.07-4.6,0.07-4.6c0.05-0.53-0.01-0.76-0.06-0.88c-0.07-0.15-0.11-0.32-0.1-0.49\n    l0.04-0.65l-2.43-0.5c-0.44-0.09-0.77-0.47-0.8-0.92c-0.03-0.45,0.25-0.86,0.68-1.01l0.11-0.04c0.04-0.01,0.08-0.03,0.12-0.04\n    c0.06-0.02,0.11-0.05,0.17-0.08l0.11-0.06c0.13-0.06,0.26-0.13,0.37-0.2c0.06-0.04,0.13-0.09,0.19-0.14\n    c0.07-0.05,0.12-0.09,0.16-0.12c0.02-0.03,0.05-0.05,0.08-0.07c0.9-0.77,1.41-1.87,1.41-3.03c0-1.07-0.41-2.07-1.16-2.83\n    c-0.75-0.75-1.74-1.16-2.79-1.16c-1.06,0-2.05,0.42-2.8,1.17C26.41,15.18,26,16.18,26,17.25c0,1.15,0.49,2.21,1.37,2.99\n    c0.03,0.02,0.05,0.05,0.08,0.07l0.12,0.09c0,0,0.08,0.06,0.09,0.07c0.06,0.05,0.11,0.09,0.17,0.13c0.11,0.07,0.22,0.12,0.33,0.18\n    l0.14,0.08c0.35,0.2,0.58,0.61,0.53,1.01c-0.02,0.16-0.07,0.31-0.15,0.45c0.13,0.17,0.21,0.39,0.21,0.62c0,0.3-0.14,0.59-0.37,0.78\n    s-0.54,0.27-0.83,0.21l-1.31-0.27c-0.14-0.03-0.27-0.09-0.38-0.17c-0.02-0.01-0.04-0.03-0.05-0.04c-0.02-0.02-0.04-0.03-0.06-0.05\n    c0,0-0.01,0-0.02,0.01c-0.02,0.03-0.15,0.27-0.14,0.85c0,0.24,0.17,2.1,0.33,3.77c0.29,1.87,0.72,3.76,0.73,3.78\n    s0.02,0.11,0.04,0.2c0,0.03,0.01,0.06,0.01,0.09c0.16,0.17,0.26,0.39,0.27,0.63c0.2,3.16,0.37,6.03,0.42,6.86\n    c0.22,0.15,0.53,0.36,0.77,0.52c0.04-0.02,0.09-0.03,0.14-0.05l0.28-3.18c0.04-0.51,0.46-0.9,0.97-0.91\n    c0.56-0.02,0.95,0.36,1.02,0.86C31.19,40.33,31.33,41.39,31.36,41.75L31.36,41.75z M27.24,39.36c0.01,0.01,0.04,0.03,0.1,0.07\n    C27.3,39.41,27.27,39.38,27.24,39.36z"/>\n  <path fill="#E58A2C" d="M34.79,22.64l-4.46-0.83c0,0-2.42,0.35-2.43,0.35l-0.46,17.98l0.78,1.03c0,0,1.02-0.38,1.1-0.41\n    s0.07-0.18,0.07-0.18l0.66-7.54l1.46,9.74l1.04,0.7c0,0,0.68-0.69,0.89-0.98c0.24-0.33,0.22-0.73,0.22-0.73L34.79,22.64\n    L34.79,22.64z"/>\n  <path fill="#FABD2C" d="M34.9,33.46c0.02,0.57,0.16,1.3-0.85,1.48c-0.74,0.13-0.75-0.11-1.02-1.13c0,0-0.47-2.5-0.61-4.71\n    c0,0-0.18-3.31-0.14-3.76c0.12-1.66,0.91-2.11,1.64-1.87c0.53,0.17,1.08,0.65,0.94,2.01c0,0-0.08,3.82-0.07,4.58\n    C34.8,30.98,34.9,33.46,34.9,33.46L34.9,33.46z"/>\n  <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M34.9,33.46c0.04,1.16-0.68,1.07-0.93,0.87\n    c-0.63-0.5-0.71-5.21-0.82-6.64c-0.07-0.97,0.09-3.4,0.4-4.17c0.55-0.21,1.04,0.42,1.09,0.51c0.19,0.31,0.29,0.77,0.22,1.45\n    c0,0-0.08,3.82-0.07,4.58C34.8,30.98,34.9,33.46,34.9,33.46L34.9,33.46z"/>\n  <path fill="#E58A2C" d="M27.47,31.45c0.01,0.67,0.2,1.27-0.73,1.43c-0.91,0.15-0.86-0.61-0.93-0.87c0,0-0.45-1.92-0.75-3.91\n    c0,0-0.33-3.44-0.33-3.85c-0.02-1.52,0.66-1.99,1.35-1.84c0.5,0.11,1.03,0.5,1.01,1.75c0,0,0.15,3.56,0.21,4.24\n    C27.38,29.24,27.47,31.45,27.47,31.45z"/>\n  <path fill="#FABD2C" d="M31.67,23.71l-6.17-1.29c0,0-0.05,0.01-0.04,0.09c0.13,1.5,1.07,17.08,1.09,17.34\n    c0.02,0.27,0.19,0.37,0.19,0.37s1.3,0.89,1.39,0.93s0.27,0,0.27,0s-0.13-0.04-0.14-0.23c-0.02-0.19,0.3-7.46,0.3-7.46\n    c0.01-0.37,0.11-0.52,0.36-0.53c0.24,0,0.29,0.15,0.31,0.53c0,0,1.14,8.05,1.15,8.48s0.31,0.56,0.31,0.56s1.47,0.86,1.59,0.92\n    s0.3,0.01,0.3,0.01s-0.22-0.01-0.22-0.3C32.36,42.94,31.67,23.71,31.67,23.71L31.67,23.71z"/>\n  <path fill="#FABD2C" d="M31.67,23.71l-6.17-1.29c0,0-0.05,0.01-0.04,0.09c0.13,1.5,1.07,17.08,1.09,17.34\n    c0.02,0.27,0.19,0.37,0.19,0.37s1.3,0.89,1.39,0.93s0.27,0,0.27,0s-0.13-0.04-0.14-0.23c-0.02-0.19,0.3-7.46,0.3-7.46\n    c0.01-0.37,0.11-0.52,0.36-0.53c0.24,0,0.29,0.15,0.31,0.53c0,0,1.14,8.05,1.15,8.48s0.31,0.56,0.31,0.56s1.47,0.86,1.59,0.92\n    s0.3,0.01,0.3,0.01s-0.22-0.01-0.22-0.3C32.36,42.94,31.67,23.71,31.67,23.71L31.67,23.71z"/>\n  <path fill="#CE592C" d="M25.54,22.42l6.13,1.29l3.16-1.07l-5.88-1.2"/>\n  <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="30" cy="22.41" rx="2.25" ry="0.43"/>\n  <ellipse fill="#FABD2C" cx="29.95" cy="17.23" rx="4.96" ry="5"/>\n  <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.98,21.74c1.19,0,2.3-0.27,3.24-0.75\n    c-0.87,0.77-2.01,1.24-3.26,1.24c-1.28,0-2.44-0.49-3.32-1.28C27.6,21.45,28.75,21.74,29.98,21.74z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.57,27.19,30.33,27.19z M30.21,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M34.67,42.6c-0.11,0-0.22-0.04-0.32-0.11c-0.15-0.12-0.21-0.31-0.17-0.49c0-0.01,0.17-0.84-0.01-1.83\n    c-0.08-0.43-1.23-1.06-2.26-1.39c-0.23-0.07-0.37-0.29-0.35-0.53s0.21-0.42,0.44-0.45l15.03-1.64c0.25-0.03,0.47,0.13,0.54,0.37\n    c0.06,0.24-0.06,0.49-0.28,0.59l-12.42,5.44C34.8,42.59,34.73,42.6,34.67,42.6L34.67,42.6z M33.94,38.6\n    c0.58,0.36,1.1,0.82,1.21,1.39c0.09,0.49,0.11,0.95,0.1,1.32l8.65-3.79L33.94,38.6L33.94,38.6z"/>\n  <path fill="#3F3F3F" d="M34.66,42.1c0,0,0.22-0.92-0.01-2.03c-0.22-1.04-2.6-1.78-2.6-1.78l15.03-1.64\n    C47.08,36.65,34.66,42.1,34.66,42.1z"/>\n  <path fill="#333333" d="M30.91,44.46c-0.27,0-0.53-0.09-0.73-0.26c-0.04-0.03-0.12-0.1-0.95-0.95c-0.19-0.18-0.48-0.57-0.5-1.26\n    c0-0.03,0-0.1-0.01-0.25c-0.05,0.01-0.08,0.02-0.08,0.02c-0.48,0.12-0.79-0.01-0.98-0.13c-0.11-0.07-0.16-0.1-1.07-1.09\n    c-0.06-0.05-0.36-0.38-0.38-1.01c-0.01-0.18-0.22-4.03-0.44-8.03c-0.21-0.74-0.57-2.07-0.78-3.42c-0.06-0.64-0.34-3.56-0.34-3.99\n    c-0.01-1.1,0.27-1.91,0.85-2.41c0.09-0.08,0.19-0.15,0.29-0.2C24.65,20.35,24,18.82,24,17.23c0-1.6,0.62-3.11,1.74-4.24\n    c1.12-1.13,2.62-1.76,4.22-1.76h0.01c1.59,0,3.09,0.62,4.21,1.75c1.13,1.13,1.75,2.64,1.75,4.24c0,1.64-0.68,3.21-1.88,4.35\n    c0,0,0,0.01-0.01,0.01l0.33,0.09c0.46,0.13,0.76,0.56,0.73,1.04l-0.31,4.05c-0.1,2.32-0.12,3.1-0.12,3.34\n    c0.01,0.92,0.11,3.37,0.11,3.37l0.01,0.2c0.03,0.4,0.12,1.47-0.7,2.06l-0.51,6.67c0,0.4-0.26,1.09-0.99,1.46\n    c-0.49,0.25-0.98,0.42-1.2,0.49C31.22,44.43,31.07,44.46,30.91,44.46L30.91,44.46z M30.72,41.93c0.1,0.1,0.25,0.26,0.4,0.41\n    c0.14-0.05,0.29-0.12,0.45-0.2l0.55-7.13c0.03-0.4,0.3-0.74,0.67-0.87c0-0.09-0.01-0.21-0.02-0.29c-0.01-0.1-0.02-0.2-0.02-0.29\n    c0,0-0.1-2.5-0.11-3.44c0-0.38,0.04-1.52,0.12-3.48l0.25-3.26l-1.72-0.48c-0.42-0.12-0.72-0.5-0.73-0.93\n    c-0.01-0.44,0.26-0.83,0.67-0.98l0.19-0.06c0.05-0.02,0.11-0.05,0.17-0.08l0.11-0.06c0.13-0.06,0.26-0.13,0.37-0.2\n    c0.06-0.04,0.13-0.09,0.2-0.15c0.07-0.05,0.11-0.09,0.15-0.11c0.02-0.03,0.05-0.05,0.08-0.07c0.9-0.77,1.41-1.87,1.41-3.03\n    c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.74-1.16-2.79-1.16c-1.06,0-2.05,0.42-2.8,1.17C26.41,15.17,26,16.17,26,17.24\n    c0,1.15,0.49,2.21,1.37,2.99c0.03,0.02,0.05,0.05,0.08,0.07l0.22,0.16c0.05,0.04,0.11,0.09,0.16,0.12\n    c0.11,0.07,0.22,0.12,0.33,0.18l0.18,0.09c0.05,0.02,0.09,0.05,0.14,0.07l0.14,0.07c0.39,0.16,0.61,0.54,0.58,0.96\n    c-0.02,0.43-0.35,0.77-0.76,0.89l-1.23,0.36c-0.14,0.04-0.28,0.05-0.43,0.03c0,0.03-0.13,0.24-0.12,0.84c0,0.24,0.17,2.1,0.33,3.77\n    c0.19,1.25,0.55,2.55,0.74,3.21c0.02,0.07,0.04,0.15,0.04,0.23c0.33,6.01,0.42,7.66,0.44,8.06c0.07,0.08,0.16,0.17,0.25,0.27\n    l0.07-0.82c0.05-0.52,0.48-0.91,1-0.91h0.01c0.52,0,0.95,0.41,0.99,0.93C30.68,41.19,30.72,41.76,30.72,41.93L30.72,41.93z\n     M27.99,39.13l0.1,0.1L27.99,39.13z"/>\n  <path fill="#E58A2C" d="M28.59,31.34c0.06,0.52,0.36,1.3-0.56,1.51c-0.92,0.21-1.03-0.7-1.1-0.95c0,0-0.65-1.97-0.95-3.96\n    c0,0-0.33-3.44-0.33-3.85c-0.02-1.52,0.66-1.99,1.35-1.84c0.5,0.11,1.03,0.5,1.01,1.75c0,0,0.15,3.56,0.21,4.24\n    C28.3,29.09,28.59,31.34,28.59,31.34z"/>\n  <path fill="#E58A2C" d="M34.08,22.64l-4.31-1.2c0,0-3.41,1.02-3.43,1.02l0.98,17.31l1.04,1.03c0,0,0.81-0.22,0.91-0.26\n    c0.1-0.03,0.1-0.18,0.1-0.18l0.15-1.68l0.7,4.1l0.72,0.66c0,0,0.6-0.18,1.16-0.47c0.45-0.23,0.45-0.65,0.45-0.65L34.08,22.64\n    L34.08,22.64z"/>\n  <path fill="#FABD2C" d="M30.19,23.71l-3.89-1.29c0,0-0.03,0.01-0.03,0.09c0.08,1.5,0.91,16.72,0.92,16.99s0.12,0.37,0.12,0.37\n    s0.82,0.89,0.88,0.93s0.17,0,0.17,0s-0.08-0.04-0.09-0.23s0.38-7.48,0.38-7.48c0.01-0.37,0.07-0.52,0.23-0.53\n    c0.15,0,0.19,0.15,0.19,0.53c0,0,0.63,8.45,0.64,8.88c0.01,0.43,0.2,0.56,0.2,0.56s0.82,0.83,0.89,0.89\n    c0.08,0.06,0.19,0.01,0.19,0.01s-0.14-0.01-0.14-0.3C30.87,42.94,30.19,23.71,30.19,23.71z"/>\n  <path fill="#FABD2C" d="M30.19,23.71l-3.89-1.29c0,0-0.03,0.01-0.03,0.09c0.08,1.5,0.91,16.72,0.92,16.99s0.12,0.37,0.12,0.37\n    s0.82,0.89,0.88,0.93s0.17,0,0.17,0s-0.08-0.04-0.09-0.23s0.38-7.48,0.38-7.48c0.01-0.37,0.07-0.52,0.23-0.53\n    c0.15,0,0.19,0.15,0.19,0.53c0,0,0.63,8.45,0.64,8.88c0.01,0.43,0.2,0.56,0.2,0.56s0.82,0.83,0.89,0.89\n    c0.08,0.06,0.19,0.01,0.19,0.01s-0.14-0.01-0.14-0.3C30.87,42.94,30.19,23.71,30.19,23.71z"/>\n  <path fill="#CE592C" d="M26.3,22.42l3.89,1.29l3.89-1.07l-4.37-1.2"/>\n  <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="29.93" cy="22.4" rx="2.13" ry="0.52"/>\n  <path fill="#FABD2C" d="M33.76,33.53c0.02,0.57,0.27,1.45-0.76,1.59c-1.02,0.14-1.05-0.86-1.11-1.14c0,0-0.52-2.21-0.66-4.41\n    c0,0-0.03-3.78,0.01-4.23c0.12-1.66,0.91-2.11,1.64-1.87c0.53,0.17,1.08,0.65,0.94,2.01c0,0-0.18,3.89-0.18,4.64\n    C33.65,31.05,33.76,33.53,33.76,33.53z"/>\n  <ellipse fill="#FABD2C" cx="29.95" cy="17.23" rx="4.96" ry="5"/>\n  <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.98,21.74c1.19,0,2.3-0.27,3.24-0.75\n    c-0.87,0.77-2.01,1.24-3.26,1.24c-1.28,0-2.44-0.49-3.32-1.28C27.6,21.45,28.75,21.74,29.98,21.74z"/>\n  <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M33.74,33.53c0.04,1.16-0.54,0.95-0.82,0.81\n    c-0.99-0.52-1.09-5.12-1.2-6.56c-0.07-0.97-0.16-3.58,0.78-4.26c0.55-0.21,1.04,0.42,1.09,0.51c0.19,0.31,0.29,0.77,0.22,1.45\n    c0,0-0.18,3.89-0.18,4.64C33.63,31.05,33.74,33.53,33.74,33.53z"/>\n</svg>\n;<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.57,27.19,30.33,27.19z M30.21,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M33.43,43.9c-0.19,0-0.36-0.1-0.45-0.27c-0.1-0.19-0.06-0.42,0.08-0.57c0.01-0.01,0.76-0.81,1.19-1.75\n    c0.29-0.63-0.76-1.38-0.77-1.39c-0.19-0.13-0.26-0.38-0.18-0.59c0.08-0.21,0.3-0.34,0.53-0.32l14.81,1.91\n    c0.25,0.03,0.44,0.24,0.44,0.5c0,0.25-0.19,0.46-0.44,0.5l-15.16,1.99C33.47,43.89,33.45,43.9,33.43,43.9L33.43,43.9z M35.06,40.17\n    c0.25,0.46,0.36,1,0.11,1.55c-0.17,0.37-0.38,0.73-0.59,1.03l10.13-1.33C44.71,41.42,35.06,40.17,35.06,40.17z"/>\n  <path fill="#3F3F3F" d="M33.43,43.4c0,0,0.81-0.86,1.28-1.89c0.47-1.03-0.94-2.01-0.94-2.01l14.81,1.91L33.43,43.4L33.43,43.4z"/>\n  <path fill="#333333" d="M30.22,43.83c-0.55,0-1.15-0.05-1.58-0.22c-0.39-0.15-1.17-0.46-1.21-1.2l-1.97-19.66\n    c-0.03-0.33,0.1-0.66,0.36-0.88L26,21.73c-0.01-0.01-0.03-0.02-0.04-0.03c-0.05-0.05-0.1-0.1-0.14-0.16\n    c-1.16-1.13-1.83-2.68-1.83-4.29c0-1.6,0.62-3.11,1.74-4.24c1.12-1.13,2.62-1.76,4.22-1.76h0.01c1.59,0,3.09,0.62,4.21,1.75\n    s1.75,2.64,1.75,4.24c0,1.55-0.61,3.04-1.69,4.16c0.05,0.14,0.07,0.28,0.06,0.42c-0.1,1.48-1.1,20.03-1.11,20.22\n    c-0.01,0.18-0.07,0.36-0.17,0.51c-0.59,0.87-0.73,0.96-0.87,1.05c-0.16,0.1-0.39,0.21-0.72,0.18\n    C31.12,43.79,30.68,43.83,30.22,43.83L30.22,43.83z M29.42,42.22v0.02c0,0.04,0.01,0.08,0,0.12\n    C29.43,42.31,29.42,42.26,29.42,42.22L29.42,42.22z M29.37,41.74c0.24,0.09,0.98,0.11,1.71,0.04c0.04-0.05,0.07-0.1,0.11-0.15\n    c0.12-2.19,0.83-15.48,1.05-19.13c-0.39-0.09-0.69-0.42-0.75-0.81c-0.06-0.41,0.13-0.81,0.48-1.02l0.12-0.08\n    c0.06-0.04,0.12-0.09,0.19-0.14c0.07-0.05,0.12-0.09,0.15-0.12c0.02-0.03,0.05-0.05,0.08-0.07c0.9-0.77,1.41-1.87,1.41-3.03\n    c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.74-1.16-2.79-1.16c-1.06,0-2.05,0.42-2.8,1.17c-0.75,0.76-1.16,1.76-1.16,2.83\n    c0,1.15,0.49,2.21,1.36,2.99c0.03,0.02,0.05,0.05,0.07,0.07l0.21,0.16c0.06,0.04,0.11,0.09,0.17,0.13\n    c0.09,0.06,0.19,0.11,0.29,0.16c0.41,0.21,0.66,0.69,0.55,1.14c-0.07,0.31-0.27,0.56-0.53,0.69l-0.62,0.5L29.37,41.74L29.37,41.74z\n    "/>\n  <path fill="#FABD2C" d="M26.45,22.64l5.6-1.2c0,0,1.12,0.24,1.14,0.24l-1.43,20.54l-0.35,0.53c0,0-1.68,0.21-2.41-0.08\n    c-0.58-0.23-0.58-0.34-0.58-0.34L26.45,22.64z"/>\n  <path fill="#FABD2C" d="M32.52,22.7l0.73-1.06c0,0,0.04,0.01,0.03,0.09c-0.1,1.5-1.11,20.23-1.11,20.23s-0.47,0.7-0.58,0.76\n    c-0.1,0.06-0.25,0.01-0.25,0.01s0.18-0.01,0.18-0.3C31.53,42.24,32.52,22.7,32.52,22.7L32.52,22.7z"/>\n  <path opacity="0.5" fill="#CE592C" enable-background="new    " d="M32.52,22.7l0.73-1.06c0,0,0.04,0.01,0.03,0.09\n    c-0.1,1.5-1.11,20.23-1.11,20.23s-0.47,0.7-0.58,0.76c-0.1,0.06-0.25,0.01-0.25,0.01s0.18-0.01,0.18-0.3\n    C31.53,42.24,32.52,22.7,32.52,22.7L32.52,22.7z"/>\n  <path fill="#CE592C" d="M33.25,21.65l-0.73,1.05l-6.07-0.06l1.2-0.97"/>\n  <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="30" cy="22.01" rx="2.13" ry="0.52"/>\n  <path fill="#CE592C" d="M31.24,33.25c-0.13,0.72,0.11,1.68-1.06,1.87c-0.83,0.13-0.88-0.7-0.94-0.99c0,0-0.47-3.98-0.63-6.18\n    c0,0-0.23-3.69-0.01-4c0.37-0.52,0.92-0.63,1.45-0.49c0.61,0.17,1.52,0.64,1.36,2c0,0-0.01,3.9,0,4.66\n    C31.41,31.06,31.24,33.25,31.24,33.25L31.24,33.25z"/>\n  <path fill="#E58A2C" d="M30.64,33.53c0.02,0.57,0.31,1.45-0.87,1.59c-1.17,0.14-1.21-0.86-1.27-1.14c0,0-0.42-2.16-0.58-4.36\n    c0,0-0.21-3.83-0.17-4.28c0.14-1.66,1.05-2.11,1.88-1.87c0.61,0.17,1.24,0.65,1.08,2.01c0,0-0.03,3.94-0.02,4.69\n    C30.71,31.1,30.64,33.53,30.64,33.53z"/>\n  <path fill="#FABD2C" d="M30.64,33.53c0.02,0.57,0.3,1.41-0.87,1.59c-0.83,0.13-0.88-0.7-0.94-0.99c0,0-0.47-3.98-0.63-6.18\n    c0,0-0.23-3.69,0-4c0.37-0.52,0.92-0.63,1.45-0.49c0.61,0.17,1.24,0.65,1.08,2.01c0,0-0.03,3.94-0.02,4.69\n    C30.71,31.1,30.64,33.53,30.64,33.53L30.64,33.53z"/>\n  <ellipse fill="#FABD2C" cx="29.95" cy="17.23" rx="4.96" ry="5"/>\n  <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.97,21.74c1.19,0,2.3-0.27,3.24-0.75\n    c-0.87,0.77-2.01,1.24-3.26,1.24c-1.28,0-2.44-0.49-3.32-1.28C27.59,21.45,28.74,21.74,29.97,21.74z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.57,27.19,30.33,27.19z M30.21,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  <path opacity="0.3" enable-background="new    " d="M29.65,44.14l8.24-3.85l-4.47-2.69"/>\n  <path fill="#333333" d="M29.21,44.46c-0.16,0-0.31-0.03-0.46-0.09c-0.21-0.07-0.7-0.24-1.2-0.49c-0.74-0.37-1-1.07-1-1.54\n    l-0.51-6.63c-0.37-0.32-0.61-0.82-0.71-1.49c-0.02-0.11-0.54-2.33-0.68-4.59c-0.01-0.69-0.03-3.9,0.01-4.37\n    c0.05-0.67,0.2-1.24,0.45-1.69l-0.07-0.85c-0.04-0.48,0.27-0.91,0.73-1.04l0.14-0.04c-0.04-0.04-0.07-0.08-0.1-0.12\n    c-1.16-1.13-1.83-2.68-1.83-4.29c0-1.6,0.62-3.11,1.74-4.24c1.13-1.14,2.61-1.76,4.22-1.76c1.59,0,3.09,0.62,4.21,1.75\n    s1.74,2.64,1.75,4.24c0,1.59-0.64,3.11-1.77,4.24c0.05,0.02,0.09,0.03,0.14,0.06c0.36,0.18,0.6,0.64,0.58,1.04l-0.06,1.09\n    c0.01,0.12,0.01,0.24,0.01,0.37c0.04,0.92,0.16,3.59,0.21,4.13c0.08,0.84,0.37,3.06,0.37,3.06l0.03,0.19\n    c0.27,1.54-0.44,2.15-1.17,2.37c-0.17,3.07-0.31,5.61-0.31,5.76c-0.03,0.63-0.32,0.96-0.45,1.08c-0.85,0.93-0.9,0.96-1.02,1.04\n    c-0.26,0.17-0.61,0.22-0.96,0.12c-0.03-0.01-0.06-0.01-0.09-0.02C31.4,41.92,31.4,41.98,31.4,42c-0.01,0.69-0.31,1.08-0.5,1.26\n    c-0.83,0.85-0.91,0.91-0.95,0.95C29.73,44.38,29.47,44.46,29.21,44.46z M28.54,42.14c0.16,0.08,0.32,0.14,0.45,0.2\n    c0.15-0.15,0.3-0.31,0.4-0.41c0.01-0.17,0.04-0.69,0.22-3.12c0.04-0.52,0.47-0.92,0.99-0.93h0.01c0.52,0,0.95,0.39,1,0.91\n    l0.07,0.82c0.09-0.1,0.18-0.19,0.25-0.27c0.04-0.81,0.3-5.56,0.36-6.57c0.02-0.32,0.19-0.62,0.46-0.79\n    c0.21-0.13,0.46-0.18,0.7-0.14c-0.01-0.04-0.01-0.07-0.02-0.1c-0.02-0.1-0.03-0.19-0.04-0.28c0,0-0.29-2.27-0.38-3.12\n    c-0.07-0.7-0.21-4.15-0.21-4.3s-0.01-0.22-0.01-0.3V23.6l0.02-0.44l-1.25-0.36c-0.41-0.12-0.7-0.48-0.72-0.9s0.22-0.82,0.61-0.98\n    c0.04-0.02,0.07-0.04,0.11-0.06l0.15-0.08c0.13-0.06,0.25-0.13,0.37-0.2l0.21-0.15l0.14-0.1l0.08-0.08\n    c0.9-0.77,1.41-1.87,1.41-3.03c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.74-1.16-2.79-1.16c-1.06,0-2.05,0.42-2.8,1.17\n    c-0.75,0.76-1.16,1.76-1.16,2.83c0,1.15,0.49,2.21,1.36,2.99c0.03,0.02,0.05,0.05,0.07,0.07l0.22,0.16\n    c0.05,0.04,0.11,0.09,0.16,0.12c0.1,0.07,0.21,0.12,0.32,0.17l0.2,0.1c0.04,0.02,0.09,0.05,0.13,0.07c0.05,0.02,0.1,0.03,0.15,0.05\n    L28.76,21c0.42,0.14,0.7,0.53,0.69,0.97s-0.31,0.82-0.73,0.94l-1.6,0.45l0.03,0.37c0.02,0.25-0.06,0.5-0.21,0.7\n    c-0.06,0.08-0.22,0.34-0.27,0.96c-0.02,0.26-0.02,2.31,0,4.15c0.13,2.03,0.63,4.16,0.63,4.19c0.01,0.03,0.03,0.15,0.03,0.18\n    c0.01,0.05,0.02,0.16,0.04,0.24c0.36,0.14,0.61,0.47,0.64,0.86L28.54,42.14L28.54,42.14z M29.63,41.72\n    C29.62,41.72,29.62,41.72,29.63,41.72C29.62,41.72,29.62,41.72,29.63,41.72z M32.06,39.2c-0.03,0.02-0.05,0.04-0.06,0.07\n    C32.04,39.22,32.06,39.2,32.06,39.2z"/>\n  <path fill="#FABD2C" d="M34.38,31.34c0.06,0.52,0.36,1.3-0.56,1.51c-0.92,0.21-1.03-0.7-1.1-0.95c0,0-0.65-1.97-0.95-3.96\n    c0,0-0.33-3.44-0.33-3.85c-0.02-1.52,0.66-1.99,1.35-1.84c0.5,0.11,1.03,0.5,1.01,1.75c0,0,0.15,3.56,0.21,4.24\n    C34.09,29.09,34.38,31.34,34.38,31.34z"/>\n  <path fill="#CE592C" d="M34.38,31.34c0.06,0.52,0.36,1.3-0.56,1.51c-0.92,0.21-1.03-0.7-1.1-0.95c0,0-0.65-1.97-0.95-3.96\n    c0,0-0.33-3.44-0.33-3.85c-0.02-1.52,0.66-1.99,1.35-1.84c0.5,0.11,1.03,0.5,1.01,1.75c0,0,0.15,3.56,0.21,4.24\n    C34.09,29.09,34.38,31.34,34.38,31.34z"/>\n  <path fill="#FABD2C" d="M26.04,22.64l4.31-1.2c0,0,3.41,1.02,3.43,1.02L32.8,39.77l-1.04,1.03c0,0-0.81-0.22-0.91-0.26\n    c-0.1-0.03-0.1-0.18-0.1-0.18l-0.15-1.68l-0.7,4.1l-0.72,0.66c0,0-0.6-0.18-1.16-0.47c-0.45-0.23-0.45-0.65-0.45-0.65L26.04,22.64z\n    "/>\n  <path fill="#FABD2C" d="M29.92,23.71l3.89-1.29c0,0,0.03,0.01,0.03,0.09c-0.08,1.5-0.91,16.72-0.92,16.99s-0.12,0.37-0.12,0.37\n    s-0.82,0.89-0.88,0.93c-0.06,0.04-0.17,0-0.17,0s0.08-0.04,0.09-0.23s-0.38-7.48-0.38-7.48c-0.01-0.37-0.07-0.52-0.23-0.52\n    c-0.15,0-0.19,0.15-0.19,0.53c0,0-0.63,8.45-0.64,8.88s-0.2,0.56-0.2,0.56s-0.82,0.83-0.89,0.89c-0.08,0.06-0.19,0.01-0.19,0.01\n    s0.14-0.01,0.14-0.3C29.25,42.94,29.92,23.71,29.92,23.71z"/>\n  <path opacity="0.3" fill="#CE592C" enable-background="new    " d="M29.92,23.71l3.89-1.29c0,0,0.03,0.01,0.03,0.09\n    c-0.08,1.5-0.91,16.72-0.92,16.99s-0.12,0.37-0.12,0.37s-0.82,0.89-0.88,0.93c-0.06,0.04-0.17,0-0.17,0s0.08-0.04,0.09-0.23\n    s-0.38-7.48-0.38-7.48c-0.01-0.37-0.07-0.52-0.23-0.52c-0.15,0-0.19,0.15-0.19,0.53c0,0-0.63,8.45-0.64,8.88s-0.2,0.56-0.2,0.56\n    s-0.82,0.83-0.89,0.89c-0.08,0.06-0.19,0.01-0.19,0.01s0.14-0.01,0.14-0.3C29.25,42.94,29.92,23.71,29.92,23.71z"/>\n  <path fill="#CE592C" d="M33.82,22.42l-3.9,1.29l-3.88-1.07l4.36-1.2"/>\n  <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="30.19" cy="22.4" rx="2.13" ry="0.52"/>\n  <path fill="#CE592C" d="M25.92,25.66c0.04-1.67,0.72-2.46,1.44-2.22c0.81,0.27,1.29,1.03,1.21,2.4c0,0-0.07,3.73-0.03,4.48\n    c0.05,0.93,0.27,3.4,0.27,3.4c0.05,0.57,0.33,1.44-0.68,1.63c-0.22,0.04-0.39-0.01-0.53-0.12l-0.28-0.43c0,0-0.97-2.72-1.21-4.91\n    C26.11,29.87,25.91,26.11,25.92,25.66z"/>\n  <path fill="#FABD2C" d="M28.16,33.53c0.02,0.57,0.27,1.45-0.76,1.59c-1.02,0.14-1.05-0.86-1.11-1.14c0,0-0.52-2.21-0.66-4.41\n    c0,0-0.03-3.78,0.01-4.23c0.12-1.66,0.91-2.11,1.64-1.87c0.53,0.17,1.08,0.65,0.94,2.01c0,0-0.18,3.89-0.18,4.64\n    C28.06,31.05,28.16,33.53,28.16,33.53z"/>\n  <ellipse fill="#FABD2C" cx="29.94" cy="17.23" rx="4.96" ry="5"/>\n  <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.96,21.74c1.19,0,2.3-0.27,3.24-0.75\n    c-0.87,0.77-2.01,1.24-3.26,1.24c-1.28,0-2.44-0.49-3.32-1.28C27.59,21.45,28.73,21.74,29.96,21.74z"/>\n  <path opacity="0.8" fill="#CE592C" enable-background="new    " d="M32.76,22.77l-0.94,4.66l-0.76-4.1"/>\n  <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M28.14,33.53c0.04,1.16-0.54,0.95-0.82,0.81\n    c-0.99-0.52-1.09-5.12-1.2-6.56c-0.07-0.97-0.16-3.58,0.78-4.26c0.55-0.21,1.04,0.42,1.09,0.51c0.19,0.31,0.29,0.77,0.22,1.45\n    c0,0-0.18,3.89-0.18,4.64C28.04,31.05,28.14,33.53,28.14,33.53L28.14,33.53z"/>\n  <path fill="#FFFFFF" d="M47.48,45.15C47.47,45.15,47.47,45.15,47.48,45.15l-15.9-0.08c-0.22,0-0.42-0.15-0.48-0.37\n    s0.03-0.45,0.23-0.56c0.66-0.39,2.48-1.56,2.96-2.25c0.57-0.8,0.71-2.24,0.71-2.26c0.01-0.16,0.1-0.3,0.24-0.38\n    c0.14-0.08,0.3-0.09,0.45-0.03l11.98,4.97c0.22,0.09,0.35,0.33,0.3,0.56C47.92,44.99,47.71,45.15,47.48,45.15z M33.25,44.09\n    l11.68,0.06l-9.04-3.75c-0.11,0.59-0.34,1.45-0.79,2.08C34.75,42.98,33.97,43.59,33.25,44.09L33.25,44.09z"/>\n  <path fill="#3F3F3F" d="M31.58,44.58c0,0,2.46-1.47,3.12-2.39c0.66-0.93,0.8-2.5,0.8-2.5l11.98,4.97L31.58,44.58z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.68,33.64,41.57,27.19,30.33,27.19z M30.21,55.03\n    c-10.75,0-19.47-6.06-19.47-13.53s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#333333" d="M27.43,44.47c-0.26,0-0.52-0.09-0.7-0.28c-0.12-0.12-0.75-0.76-0.99-1.1c-0.37-0.51-0.41-1.07-0.41-1.3\n    l-0.38-6.47c-0.2-0.3-0.3-0.68-0.41-1.09l-0.05-0.17c-0.04-0.18-0.5-2.67-0.64-4.9c-0.04-0.8-0.18-3.42-0.14-3.9\n    c0.06-0.75,0.24-1.37,0.54-1.84l-0.03-0.52c-0.03-0.1-0.04-0.2-0.03-0.31c0.03-0.45,0.33-0.84,0.78-0.93l0.81-0.17\n    c-1.15-1.13-1.8-2.66-1.8-4.26c0-1.61,0.62-3.12,1.75-4.25c1.12-1.13,2.62-1.75,4.2-1.75h0.01c1.59,0,3.09,0.62,4.21,1.75\n    s1.74,2.64,1.75,4.24c0,1.52-0.59,2.98-1.63,4.09l0.37,0.11c0.06,0.01,0.11,0.02,0.16,0.04c0.47,0.15,0.77,0.59,0.74,1.09\n    c0.23,0.44,0.34,0.98,0.33,1.62c0.04,0.93,0.16,3.59,0.21,4.13c0.08,0.86,0.17,3.01,0.17,3.1v0.02c0,0.08,0.01,0.17,0.01,0.25\n    c0.03,0.51,0.1,1.83-1.44,2.16c-0.2,3.24-0.36,5.94-0.37,6.07c-0.04,0.61-0.39,1.02-0.7,1.19c-1.32,0.91-1.41,0.95-1.52,0.99\n    c-0.01,0.01-0.03,0.01-0.05,0.02c-0.19,0.09-0.39,0.11-0.61,0.06c-0.08-0.01-0.14-0.02-0.17-0.02c-0.16-0.03-0.31-0.1-0.43-0.19\n    c-0.11-0.04-0.23-0.09-0.34-0.13c-0.01,0.1-0.02,0.15-0.02,0.18c-0.02,0.72-0.45,1.19-0.84,1.4c-0.21,0.12-1.48,0.86-1.6,0.92\n    c-0.18,0.1-0.39,0.14-0.61,0.14h-0.01C27.52,44.47,27.47,44.47,27.43,44.47z M26.6,34.17c0.19,0.17,0.31,0.42,0.33,0.68l0.4,6.87\n    v0.12c0,0.01,0.01,0.07,0.03,0.09c0.05,0.07,0.18,0.22,0.33,0.38c0.32-0.18,0.72-0.42,0.95-0.55c0.03-0.33,0.16-1.33,0.66-4.95\n    c0.07-0.5,0.49-0.86,0.99-0.86h0.03c0.51,0.01,0.93,0.41,0.97,0.91l0.28,3.18c0.05,0.02,0.1,0.04,0.14,0.05\n    c0.22-0.15,0.55-0.38,0.76-0.52c0.05-0.82,0.22-3.69,0.42-6.86c0.02-0.37,0.25-0.7,0.6-0.85c0.25-0.11,0.53-0.11,0.78-0.01V31.8\n    c-0.01-0.1-0.01-0.21-0.01-0.31c-0.01-0.17-0.09-2.2-0.16-2.98c-0.07-0.7-0.21-4.15-0.22-4.29c0.01-0.55-0.1-0.72-0.13-0.76\n    l-0.02-0.02c-0.02-0.01-0.03-0.02-0.05-0.02c-0.13-0.06-0.24-0.15-0.32-0.25l-1.56-0.45c-0.4-0.11-0.68-0.46-0.72-0.87\n    c-0.04-0.41,0.18-0.8,0.55-0.99c0.2-0.1,0.33-0.17,0.44-0.24c0.07-0.04,0.13-0.1,0.2-0.15l0.14-0.1c0.03-0.03,0.05-0.06,0.08-0.08\n    c0.9-0.77,1.41-1.87,1.41-3.03c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.74-1.16-2.79-1.16s-2.04,0.41-2.79,1.16\n    c-0.75,0.76-1.17,1.76-1.17,2.84c0,1.15,0.49,2.21,1.36,2.99c0.03,0.02,0.05,0.05,0.08,0.07l0.12,0.09c0,0,0.08,0.06,0.08,0.07\n    c0.06,0.05,0.11,0.09,0.17,0.13c0.1,0.07,0.21,0.12,0.32,0.17l0.2,0.1c0.04,0.02,0.09,0.05,0.13,0.07c0.05,0.02,0.1,0.03,0.15,0.05\n    l0.14,0.04c0.43,0.14,0.71,0.55,0.69,1.01c-0.03,0.45-0.35,0.83-0.8,0.92l-2.37,0.49l0.01,0.24c0.02,0.28-0.08,0.55-0.28,0.75\n    c-0.05,0.06-0.23,0.29-0.28,0.99c-0.02,0.27,0.06,2.06,0.14,3.63c0.13,2.1,0.59,4.55,0.59,4.57l0.03,0.1\n    C26.52,33.88,26.57,34.06,26.6,34.17L26.6,34.17z M32.69,39.41c-0.03,0.02-0.05,0.03-0.07,0.05\n    C32.67,39.43,32.69,39.41,32.69,39.41z"/>\n  <path fill="#FABD2C" d="M25.21,22.64l4.46-0.83c0,0,2.42,0.35,2.43,0.35l0.46,17.98l-0.78,1.03c0,0-1.02-0.38-1.1-0.41\n    s-0.07-0.18-0.07-0.18l-0.66-7.54l-1.46,9.74l-1.04,0.7c0,0-0.68-0.69-0.89-0.98c-0.24-0.33-0.22-0.73-0.22-0.73L25.21,22.64z"/>\n  <path fill="#CE592C" d="M24.75,25.66c0.04-1.67,0.72-2.46,1.44-2.22c0.81,0.27,1.29,1.03,1.21,2.4c0,0-0.07,3.73-0.03,4.48\n    c0.05,0.93,0.27,3.4,0.27,3.4c0.05,0.57,0.33,1.44-0.68,1.63c-0.22,0.04-0.39-0.01-0.53-0.12l-0.28-0.43c0,0-0.97-2.72-1.21-4.91\n    C24.95,29.87,24.74,26.11,24.75,25.66z"/>\n  <path fill="#FABD2C" d="M27.23,33.53c0.02,0.57,0.27,1.23-0.75,1.41c-0.74,0.13-0.75-0.11-1.02-1.13c0,0-0.47-2.5-0.61-4.71\n    c0,0-0.18-3.31-0.14-3.76c0.12-1.66,0.91-2.11,1.64-1.87c0.53,0.17,1.08,0.65,0.94,2.01c0,0-0.18,3.89-0.18,4.64\n    C27.12,31.05,27.23,33.53,27.23,33.53L27.23,33.53z"/>\n  <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M27.23,33.53c0.04,1.16-0.58,1-0.82,0.81\n    c-0.63-0.5-0.71-5.21-0.82-6.64c-0.07-0.97,0.09-3.4,0.4-4.17c0.55-0.21,1.04,0.42,1.09,0.51c0.19,0.31,0.29,0.77,0.22,1.45\n    c0,0-0.18,3.89-0.18,4.64C27.12,31.05,27.23,33.53,27.23,33.53z"/>\n  <path fill="#FABD2C" d="M35.25,31.45c0.01,0.67,0.2,1.27-0.73,1.43c-0.91,0.15-0.86-0.61-0.93-0.87c0,0-0.45-1.92-0.75-3.91\n    c0,0-0.33-3.44-0.33-3.85c-0.02-1.52,0.66-1.99,1.35-1.84c0.5,0.11,1.03,0.5,1.01,1.75c0,0,0.15,3.56,0.21,4.24\n    C35.16,29.24,35.25,31.45,35.25,31.45L35.25,31.45z"/>\n  <path fill="#CE592C" d="M35.25,31.45c0.01,0.67,0.2,1.27-0.73,1.43c-0.91,0.15-0.86-0.61-0.93-0.87c0,0-0.45-1.92-0.75-3.91\n    c0,0-0.33-3.44-0.33-3.85c-0.02-1.52,0.66-1.99,1.35-1.84c0.5,0.11,1.03,0.5,1.01,1.75c0,0,0.15,3.56,0.21,4.24\n    C35.16,29.24,35.25,31.45,35.25,31.45L35.25,31.45z"/>\n  <path fill="#FABD2C" d="M28.33,23.71l6.17-1.29c0,0,0.05,0.01,0.04,0.09c-0.13,1.5-1.07,17.08-1.09,17.34\n    c-0.02,0.27-0.19,0.37-0.19,0.37s-1.3,0.89-1.39,0.93c-0.09,0.04-0.27,0-0.27,0s0.13-0.04,0.14-0.23c0.02-0.19-0.3-7.46-0.3-7.46\n    c-0.01-0.37-0.11-0.52-0.36-0.52s-0.29,0.15-0.31,0.53c0,0-1.14,8.05-1.15,8.48c-0.01,0.43-0.31,0.56-0.31,0.56\n    s-1.47,0.86-1.59,0.92c-0.12,0.06-0.3,0.01-0.3,0.01s0.22-0.01,0.22-0.3C27.64,42.94,28.33,23.71,28.33,23.71L28.33,23.71z"/>\n  <path opacity="0.3" fill="#CE592C" enable-background="new    " d="M28.33,23.71l6.17-1.29c0,0,0.05,0.01,0.04,0.09\n    c-0.13,1.5-1.07,17.08-1.09,17.34c-0.02,0.27-0.19,0.37-0.19,0.37s-1.3,0.89-1.39,0.93c-0.09,0.04-0.27,0-0.27,0\n    s0.13-0.04,0.14-0.23c0.02-0.19-0.3-7.46-0.3-7.46c-0.01-0.37-0.11-0.52-0.36-0.52s-0.29,0.15-0.31,0.53c0,0-1.14,8.05-1.15,8.48\n    c-0.01,0.43-0.31,0.56-0.31,0.56s-1.47,0.86-1.59,0.92c-0.12,0.06-0.3,0.01-0.3,0.01s0.22-0.01,0.22-0.3\n    C27.64,42.94,28.33,23.71,28.33,23.71L28.33,23.71z"/>\n  <path opacity="0.5" fill="#CE592C" enable-background="new    " d="M33.15,22.67l-2.02,4.98l-1.23-4.26"/>\n  <path opacity="0.8" fill="#CE592C" enable-background="new    " d="M33.15,22.67l-2.02,4.98l-1.23-4.26"/>\n  <path fill="#CE592C" d="M34.46,22.42l-6.14,1.29l-3.15-1.07l5.88-1.2"/>\n  <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="30" cy="22.4" rx="2.25" ry="0.43"/>\n  <ellipse fill="#FABD2C" cx="29.94" cy="17.23" rx="4.96" ry="5"/>\n  <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.96,21.74c1.19,0,2.3-0.27,3.24-0.75\n    c-0.87,0.77-2.01,1.24-3.26,1.24c-1.28,0-2.44-0.49-3.32-1.28C27.58,21.45,28.73,21.74,29.96,21.74z"/>\n  <path fill="#FFFFFF" d="M44.83,48.74c-0.04,0-0.08,0-0.11-0.01l-14.45-3.4c-0.22-0.05-0.38-0.25-0.39-0.48\n    c0-0.23,0.15-0.43,0.37-0.49c0.86-0.24,3.23-0.97,3.87-1.51c0.62-0.53,1.11-1.63,1.25-2.01c0.05-0.15,0.18-0.27,0.33-0.31\n    c0.16-0.04,0.32-0.01,0.45,0.09l8.99,7.24c0.18,0.15,0.24,0.4,0.14,0.61C45.19,48.63,45.01,48.74,44.83,48.74L44.83,48.74z\n     M32.27,44.77l10.53,2.48l-6.76-5.44c-0.26,0.54-0.7,1.31-1.28,1.8C34.27,44.01,33.21,44.44,32.27,44.77z"/>\n  <path fill="#3F3F3F" d="M30.37,44.83c0,0,3.19-0.88,4.06-1.61c0.87-0.73,1.4-2.22,1.4-2.22l8.99,7.24L30.37,44.83z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.57,27.19,30.33,27.19z M30.21,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  <g>\n    <path fill="#FFFFFF" d="M40.14,52.96c-0.09,0-0.18-0.02-0.26-0.07l-12.27-7.33c-0.19-0.12-0.29-0.35-0.22-0.56\n      c0.06-0.22,0.26-0.37,0.48-0.37c1.16,0.01,4.24-0.05,5.06-0.32c0.68-0.22,1.75-1.35,2.26-2.02c0.11-0.14,0.28-0.21,0.45-0.19\n      c0.17,0.02,0.32,0.13,0.4,0.29l4.55,9.86c0.09,0.2,0.04,0.43-0.12,0.58C40.38,52.92,40.26,52.96,40.14,52.96z M29.64,45.6L39,51.2\n      l-3.54-7.68c-0.55,0.61-1.42,1.47-2.22,1.73C32.57,45.48,30.94,45.57,29.64,45.6L29.64,45.6z"/>\n    <path fill="#3F3F3F" d="M27.87,45.13c0,0,4.14,0.01,5.22-0.35c1.08-0.35,2.5-2.18,2.5-2.18l4.55,9.86L27.87,45.13z"/>\n    <path fill="#333333" d="M26.53,43.7c-0.18,0-0.37-0.03-0.58-0.08l-0.5-0.14l-0.11-0.3c-0.65-0.61-1.01-1.18-1.06-1.69\n      c-0.02-0.2-0.04-0.42-0.01-0.65l-0.17-5.13c-0.05,0.01-0.09,0.02-0.13,0.02c-0.53,0.08-1.22-0.13-1.58-0.26\n      c-0.62-0.16-1.02-0.85-0.9-1.64c0.08-0.68,0.45-3.36,0.75-5.23c0.4-2.47,0.88-4.5,0.9-4.58c0.06-0.39,0.25-0.83,0.53-1.2\n      l-0.01-0.46c-0.01-0.33,0.11-0.65,0.34-0.9s0.54-0.38,0.88-0.39l0.47-0.01c-0.86-1.05-1.37-2.39-1.37-3.82\n      c0-1.6,0.62-3.11,1.74-4.24c1.12-1.13,2.62-1.76,4.22-1.76h0.01c1.59,0,3.09,0.62,4.21,1.75s1.74,2.64,1.75,4.24\n      c0,1.62-0.63,3.12-1.71,4.22c0.37,0.21,0.8,0.46,1.15,0.68c1.08,0.67,1.28,1.95,1.31,2.31c0.21,1.1,0.74,3.9,0.88,4.48\n      c0.23,0.93,0.66,3.25,0.68,3.35c0.02,0.12,0.04,0.21,0.06,0.3c0.11,0.54,0.4,1.96-1.3,2.51c-0.54,0.17-1.03,0.15-1.45-0.06\n      c-0.35-0.18-0.57-0.46-0.71-0.72c-0.22,3.57-0.41,6.62-0.42,6.74c-0.04,0.61-0.39,1.01-0.7,1.19l-0.29,0.11\n      c0,0-1.71,0.35-2.08,0.44l-0.04,0.03l-0.25,0.04c-0.14,0.02-0.42,0.03-0.7-0.09c-0.1-0.04-0.17-0.07-0.51-0.36\n      c-0.18,0.41-0.49,0.68-0.77,0.8l-0.22,0.07c-0.72,0.13-1.59,0.31-1.82,0.37C26.88,43.67,26.71,43.7,26.53,43.7L26.53,43.7z\n       M26.21,41.78c0,0-0.01,0-0.01,0.01C26.2,41.79,26.21,41.79,26.21,41.78z M26.28,41.24c0.06,0.1,0.19,0.25,0.35,0.41\n      c0.25-0.06,0.66-0.14,1.36-0.28c0.07-0.72,0.3-2.64,0.67-5.71l1.99,0.1l0.11,4.79c0.09,0.08,0.18,0.16,0.27,0.23\n      c0.25-0.06,0.67-0.15,1.4-0.3c0.09-1.51,0.42-6.79,0.69-11.21l1.95-0.23c0.39,1.26,0.83,2.48,1.1,3.21\n      c-0.13-0.69-0.42-2.2-0.58-2.86c-0.19-0.75-0.89-4.48-0.92-4.63l-0.02-0.13c-0.01-0.19-0.12-0.64-0.37-0.8\n      c-0.55-0.34-1.3-0.77-1.68-0.98l-0.81,0.02l-0.4-1.93c1.52-0.61,2.5-2.07,2.5-3.71c0-1.07-0.41-2.07-1.16-2.83\n      c-0.75-0.75-1.74-1.16-2.79-1.16c-1.06,0-2.05,0.42-2.8,1.17c-0.75,0.76-1.16,1.76-1.16,2.83c0,1.72,1.09,3.24,2.71,3.79\n      l-0.29,1.95l-2.71,0.08l0.02,0.57l-0.35,0.31c-0.12,0.11-0.23,0.31-0.25,0.47c-0.02,0.1-0.5,2.12-0.89,4.51\n      c-0.31,1.92-0.59,3.97-0.7,4.8c0.02,0,0.03,0.01,0.04,0.01L24,31.81L25.97,32L26.28,41.24L26.28,41.24z M22.99,33.56\n      c0.03,0.01,0.05,0.02,0.08,0.03C23.04,33.58,23.02,33.57,22.99,33.56z"/>\n    <path fill="#FABD2C" d="M37.24,32.44c0.12,0.73,0.42,1.35-0.57,1.67c-0.97,0.31-1.03-0.53-1.15-0.79c0,0-0.79-2.02-1.44-4.14\n      c0,0-0.9-3.69-0.98-4.14c-0.26-1.66,0.41-2.27,1.17-2.21c0.56,0.04,1.2,0.38,1.38,1.75c0,0,0.72,3.85,0.91,4.58\n      C36.79,30.06,37.24,32.44,37.24,32.44L37.24,32.44z"/>\n    <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M34.23,29.87l0.2-7.11l0.41,0.31c0,0-0.06,5.4,0.11,6.64\n      c0.17,1.24,0.45,3.13,0.45,3.13L34.23,29.87L34.23,29.87z"/>\n    <path fill="#E58A2C" d="M24.66,22.08l0.61,18.85c0,0-0.04,0.03,0.01,0.47c0.05,0.48,0.95,1.24,0.95,1.24l1.86-0.57l1.26-10.05\n      l0.23,0.77l0.19,8.22l0.95,0.81l0.18,0.02l1.44-1.03l0.51-18.03l-2.05-0.32L24.66,22.08"/>\n    <path fill="#FABD2C" d="M34.51,22.74L26.24,23c-0.49,15.18,0.06,15.86-0.04,19.32c-0.01,0.29,0.02,0.32,0.02,0.32\n      s0.18,0.05,0.33,0.05c0.05,0,0.09-0.01,0.12-0.02c0.13-0.07,2-0.41,2-0.41s0.3-0.14,0.31-0.57c0.02-0.43,0.88-7.48,0.88-7.48\n      c0.05-0.65,0.14-0.75,0.39-0.76c0.25,0.01,0.35,0.16,0.36,0.53c0,0,0.3,7.4,0.28,7.59c-0.02,0.2-0.14,0.23-0.14,0.23H31\n      c0.09-0.04,2.21-0.48,2.21-0.48s0.18-0.1,0.2-0.37L34.51,22.74"/>\n    <path opacity="0.1" fill="#CE592C" enable-background="new    " d="M34.51,22.74L26.24,23c-0.49,15.18,0.06,15.86-0.04,19.32\n      c-0.01,0.29,0.02,0.32,0.02,0.32s0.18,0.05,0.33,0.05c0.05,0,0.09-0.01,0.12-0.02c0.13-0.07,2-0.41,2-0.41s0.3-0.14,0.31-0.57\n      c0.02-0.43,0.88-7.48,0.88-7.48c0.05-0.65,0.14-0.75,0.39-0.76c0.25,0.01,0.35,0.16,0.36,0.53c0,0,0.3,7.4,0.28,7.59\n      c-0.02,0.2-0.14,0.23-0.14,0.23H31c0.09-0.04,2.21-0.48,2.21-0.48s0.18-0.1,0.2-0.37L34.51,22.74"/>\n    <path fill="#CE592C" d="M32.87,21.84l-8.21,0.24l1.56,0.95l8.25-0.29L32.87,21.84"/>\n    <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="29.98" cy="22.37" rx="2.25" ry="0.3"/>\n    <ellipse fill="#FABD2C" cx="29.94" cy="17.23" rx="4.96" ry="5"/>\n    <path opacity="0.8" fill="#CE592C" enable-background="new    " d="M33.29,22.77l-3.09,5.36l-2.77-5.3"/>\n    <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.97,21.74c1.19,0,2.3-0.27,3.24-0.75\n      c-0.87,0.77-2.01,1.24-3.26,1.24c-1.28,0-2.44-0.49-3.32-1.28C27.59,21.45,28.74,21.74,29.97,21.74z"/>\n    <path fill="#FABD2C" d="M25.91,26.06c-0.1,1.59-0.92,5.97-0.92,5.97l-0.54,2.33c-0.08,0.24-0.27,0.33-0.62,0.38\n      c-0.35,0.05-1.09-0.21-1.09-0.21c-0.23-0.06-0.29-0.3-0.25-0.55c0,0,0.35-2.72,0.75-5.23c0.4-2.46,0.89-4.51,0.89-4.51\n      c0.1-0.61,0.59-1.29,1.17-1.34c0,0,0.69,0,0.71,1.06C26.03,25.08,25.91,26.06,25.91,26.06z"/>\n    <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M25.49,22.95c0.2,0.08,0.5,0.32,0.52,1.01\n      c0.03,1.12-0.1,2.1-0.1,2.1c-0.09,1.36-0.7,4.73-0.87,5.7l-0.01,0.05C25.02,31.81,25.6,26.32,25.49,22.95L25.49,22.95z"/>\n  </g>\n</svg>\n;<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.68,33.64,41.57,27.19,30.33,27.19L30.33,27.19z M30.21,55.03\n    c-10.75,0-19.47-6.06-19.47-13.53s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  <g>\n    <path fill="#FFFFFF" d="M30.79,54.8c-0.18,0-0.35-0.1-0.43-0.25l-5.83-10.24c-0.1-0.17-0.08-0.38,0.03-0.54\n      c0.12-0.16,0.31-0.23,0.51-0.19c1.16,0.25,4.37,0.89,5.26,0.89c0.98,0,3.52-0.73,4.42-1.01c0.18-0.05,0.38,0,0.52,0.14\n      s0.17,0.34,0.1,0.52l-4.11,10.37c-0.07,0.18-0.24,0.3-0.43,0.31L30.79,54.8L30.79,54.8z M25.95,44.77l4.76,8.37l3.34-8.44\n      c-1.1,0.31-2.84,0.76-3.73,0.76C29.51,45.46,27.29,45.04,25.95,44.77z"/>\n    <path fill="#3F3F3F" d="M24.96,44.06c0,0,4.29,0.9,5.43,0.9c1.16,0,4.5-1.03,4.5-1.03L30.78,54.3L24.96,44.06z"/>\n    <path fill="#333333" d="M34.25,23.78h-8.51c-0.42,0-0.8-0.26-0.94-0.66c-0.14-0.4-0.02-0.84,0.3-1.11l0.64-0.53\n      c-1.12-1.12-1.77-2.65-1.77-4.25c0-3.3,2.69-5.99,5.98-5.99c1.6,0,3.1,0.63,4.23,1.76s1.75,2.64,1.75,4.24\n      c0,1.45-0.53,2.83-1.49,3.93c-0.03,0.05-0.07,0.1-0.11,0.14l-0.13,0.13l-0.03,0.03l0.68,0.52c0.34,0.26,0.48,0.71,0.34,1.12\n      C35.06,23.51,34.68,23.78,34.25,23.78L34.25,23.78z M29.49,21.78h0.93c0.08-0.33,0.33-0.6,0.68-0.71c0.08-0.03,0.17-0.06,0.25-0.1\n      l0.12-0.05c0.25-0.11,0.45-0.21,0.63-0.34l0.11-0.07c0.14-0.1,0.28-0.22,0.42-0.35c0.01-0.01,0.08-0.07,0.09-0.08l0.05-0.05\n      c0.02-0.02,0.04-0.04,0.05-0.06c0.71-0.75,1.1-1.72,1.1-2.74c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.75-1.17-2.81-1.17\n      c-2.19,0-3.98,1.79-3.98,3.99c0,1.3,0.64,2.52,1.71,3.27c0.05,0.03,0.09,0.07,0.13,0.11c0.3,0.19,0.64,0.35,1,0.46\n      C29.16,21.18,29.41,21.45,29.49,21.78z"/>\n    <path fill="#333333" d="M33.98,43.59h-3.04c-0.45,0-0.84-0.3-0.96-0.72c-0.12,0.42-0.51,0.72-0.96,0.72h-3\n      c-0.55,0-0.99-0.44-1-0.99l-0.13-9.18l-0.38,0.97c-0.3,0.71-1.04,1.08-1.78,0.89l-1.02-0.33c-0.74-0.27-1.13-1.03-0.94-1.78\n      c0.01-0.04,0.02-0.07,0.03-0.1c0.02-0.08,2.56-9.46,2.56-9.46c0.23-0.93,1.04-1.66,1.96-1.79c0.08-0.02,0.17-0.03,0.26-0.03h8.84\n      c0.07,0,0.14,0.01,0.21,0.02c0.96,0.1,1.8,0.83,2.04,1.79c2.08,8.08,2.4,9.32,2.46,9.53c0.2,0.78-0.14,1.5-0.83,1.75l-1.08,0.35\n      c-0.8,0.21-1.55-0.16-1.84-0.85l-0.28-0.73l-0.13,8.96C34.97,43.15,34.52,43.59,33.98,43.59z M31.87,41.59h1.12l0.19-13.22\n      c0.01-0.48,0.35-0.88,0.82-0.97c0.46-0.09,0.93,0.17,1.11,0.62l0.09,0.23l1.86,4.92h0.01c-0.48-1.88-2.34-9.09-2.34-9.09\n      c-0.04-0.16-0.21-0.29-0.33-0.29c-0.03,0-0.06,0-0.08-0.01H25.7c-0.03,0-0.07,0.01-0.1,0.01c-0.09,0-0.26,0.13-0.31,0.32\n      c-1.61,5.92-2.22,8.19-2.46,9.08l2.06-5.18c0.18-0.44,0.64-0.71,1.11-0.61c0.47,0.09,0.81,0.49,0.82,0.97L27,41.59h1.08l0.48-6.92\n      c0.07-0.79,0.65-1.34,1.43-1.34c0.65,0,1.33,0.42,1.4,1.34L31.87,41.59L31.87,41.59z M22.7,33.66c0-0.01,0.01-0.02,0.01-0.03\n      C22.71,33.64,22.7,33.65,22.7,33.66z M37.18,33.61l0.04-0.01L37.18,33.61z M37.23,33.6l0.93-0.23L37.23,33.6z"/>\n    <path fill="#CE592C" d="M25.74,22.78l0.9-0.75h6.62l0.99,0.75"/>\n    <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="29.95" cy="22.37" rx="2.25" ry="0.3"/>\n    <path fill="#FDBF2D" d="M38.15,33.36c0-0.01-2.46-9.53-2.46-9.53c-0.15-0.6-0.72-1.05-1.31-1.05H25.6c-0.59,0-1.13,0.49-1.28,1.08\n      c0,0-2.59,9.54-2.59,9.55c-0.06,0.24,0.04,0.49,0.29,0.58l0.94,0.31c0.25,0.06,0.51-0.05,0.61-0.29l2.24-5.65l0.2,14.21h3\n      l0.55-7.85c0.02-0.21,0.13-0.41,0.44-0.41s0.38,0.2,0.39,0.41l0.54,7.85h3.04l0.2-14.21l2.12,5.61c0.1,0.23,0.36,0.35,0.61,0.29\n      l1.04-0.34C38.18,33.85,38.21,33.6,38.15,33.36z"/>\n    <path opacity="0.6" fill="#CF572E" enable-background="new    " d="M26.68,22.78L30,28.46l3.32-5.68"/>\n    <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M34.17,28.38l0.08-5.6h0.17l0.48,5.44l0.45,3.13 M25.81,28.38\n      l-0.08-5.59h-0.17c0,0-0.31,4.2-0.48,5.43c-0.17,1.24-0.45,3.13-0.45,3.13L25.81,28.38z"/>\n    <ellipse fill="#FDBF2D" cx="29.95" cy="17.23" rx="4.98" ry="5"/>\n    <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M30.35,21.74c-1.18,0.11-2.31-0.06-3.3-0.44\n      c0.94,0.68,2.12,1.04,3.36,0.92c1.27-0.12,2.38-0.71,3.19-1.59C32.69,21.23,31.57,21.63,30.35,21.74z"/>\n  </g>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <g>\n    <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n      s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.57,27.19,30.33,27.19z M30.21,55.03c-10.75,0-19.47-6.06-19.47-13.53\n      s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n    <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  </g>\n  <g>\n    <path fill="#FFFFFF" d="M20.29,52.96c-0.12,0-0.24-0.04-0.33-0.13c-0.16-0.15-0.21-0.38-0.12-0.58l4.55-9.86\n      c0.07-0.16,0.22-0.27,0.4-0.29c0.17-0.02,0.35,0.05,0.45,0.19c0.37,0.48,1.49,1.76,2.26,2.02c0.82,0.27,3.92,0.32,5.06,0.32\n      c0.22,0,0.42,0.15,0.48,0.37s-0.03,0.45-0.22,0.56l-12.27,7.33C20.47,52.94,20.38,52.96,20.29,52.96L20.29,52.96z M24.97,43.52\n      l-3.54,7.68l9.36-5.6c-1.3-0.04-2.93-0.12-3.6-0.35C26.39,45,25.51,44.13,24.97,43.52L24.97,43.52z"/>\n    <path fill="#3F3F3F" d="M32.56,45.13c0,0-4.14,0.01-5.22-0.35c-1.08-0.35-2.5-2.18-2.5-2.18l-4.55,9.86L32.56,45.13z"/>\n    <path fill="#333333" d="M33.37,43.7c-0.18,0-0.35-0.03-0.49-0.09c-0.22-0.06-1.1-0.23-1.82-0.37l-0.22-0.07\n      c-0.28-0.12-0.59-0.39-0.77-0.8c-0.34,0.29-0.41,0.31-0.51,0.36c-0.28,0.12-0.54,0.11-0.69,0.09l-0.33-0.07\n      c-0.43-0.1-2.05-0.43-2.05-0.43l-0.3-0.11c-0.31-0.18-0.65-0.58-0.7-1.17c-0.01-0.12-0.19-3.18-0.42-6.75\n      c-0.14,0.27-0.36,0.54-0.7,0.72c-0.42,0.22-0.91,0.24-1.45,0.06c-1.69-0.54-1.41-1.97-1.3-2.5c0.02-0.09,0.04-0.18,0.05-0.27\n      c0.02-0.13,0.46-2.45,0.68-3.37c0.14-0.58,0.68-3.38,0.89-4.48c0.03-0.36,0.23-1.64,1.31-2.31c0.35-0.22,0.78-0.47,1.15-0.68\n      c-1.08-1.1-1.72-2.6-1.71-4.22c0-1.6,0.62-3.11,1.75-4.24c1.12-1.13,2.62-1.75,4.21-1.75h0.01c1.59,0,3.09,0.63,4.21,1.76\n      s1.74,2.64,1.74,4.24c0,1.43-0.5,2.77-1.37,3.82l0.47,0.01c0.33,0.01,0.65,0.15,0.88,0.39s0.35,0.56,0.34,0.89l-0.02,0.46\n      c0.28,0.37,0.48,0.82,0.55,1.27c0.01,0.01,0.49,2.04,0.89,4.51c0.3,1.87,0.67,4.54,0.75,5.23c0.13,0.8-0.27,1.48-0.98,1.67\n      c-0.28,0.11-0.98,0.31-1.5,0.23c-0.03,0-0.08-0.01-0.13-0.02l-0.17,5.13c0.03,0.22,0.01,0.45-0.01,0.65\n      c-0.05,0.52-0.42,1.09-1.09,1.72l-0.13,0.29l-0.45,0.12C33.74,43.67,33.54,43.7,33.37,43.7L33.37,43.7z M33.68,41.78\n      c0,0,0.01,0,0.01,0.01C33.69,41.78,33.68,41.78,33.68,41.78z M31.9,41.37c0.71,0.13,1.11,0.22,1.36,0.28\n      c0.17-0.17,0.29-0.32,0.36-0.41l0.3-9.24l1.97-0.19l0.44,1.92c0.01,0,0.03-0.01,0.04-0.01c-0.11-0.83-0.38-2.87-0.7-4.81\n      c-0.39-2.4-0.87-4.42-0.87-4.44c-0.04-0.24-0.15-0.44-0.27-0.55l-0.35-0.31l0.02-0.57l-2.71-0.08l-0.29-1.95\n      c1.62-0.54,2.71-2.07,2.71-3.79c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.74-1.17-2.79-1.17c-1.06,0-2.05,0.41-2.8,1.17\n      C26.41,15.14,26,16.15,26,17.22c0,1.65,0.98,3.11,2.5,3.72l-0.4,1.93l-0.82-0.02c-0.38,0.21-1.12,0.64-1.68,0.98\n      c-0.25,0.15-0.36,0.61-0.37,0.8l-0.02,0.12c-0.03,0.16-0.73,3.88-0.92,4.64c-0.16,0.66-0.45,2.16-0.58,2.86\n      c0.27-0.72,0.71-1.95,1.1-3.22l1.95,0.23c0.28,4.42,0.6,9.68,0.69,11.21c0.73,0.15,1.15,0.24,1.4,0.3\n      c0.09-0.07,0.18-0.16,0.27-0.23l0.11-4.79l1.99-0.1C31.7,39.55,31.85,40.88,31.9,41.37z M36.82,33.59c-0.02,0-0.04,0.01-0.06,0.02\n      C36.78,33.6,36.8,33.59,36.82,33.59z"/>\n    <path fill="#FABD2C" d="M22.66,32.44c-0.12,0.73-0.42,1.35,0.57,1.67c0.97,0.31,1.03-0.53,1.15-0.79c0,0,0.79-2.02,1.44-4.14\n      c0,0,0.9-3.69,0.98-4.14c0.26-1.66-0.41-2.27-1.17-2.21c-0.56,0.04-1.2,0.38-1.38,1.75c0,0-0.72,3.85-0.91,4.58\n      C23.11,30.06,22.66,32.44,22.66,32.44z"/>\n    <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M25.67,29.87l-0.2-7.11l-0.41,0.31c0,0,0.06,5.4-0.11,6.64\n      s-0.45,3.13-0.45,3.13L25.67,29.87L25.67,29.87z"/>\n    <path fill="none" d="M27.03,22.07h8.2v20.56h-8.2C27.03,42.63,27.03,22.07,27.03,22.07z"/>\n    <path fill="#E58A2C" d="M35.23,22.07l-6.16,0.37l-2.04,0.32l0.51,18.03l1.43,1.03l0.19-0.02l0.94-0.81l0.19-8.22L30.53,32\n      l1.25,10.04l1.87,0.57c0,0,0.9-0.77,0.95-1.24c0.04-0.43,0-0.47,0-0.47L35.23,22.07"/>\n    <path fill="none" d="M25.39,22.74h8.31V42.7h-8.31V22.74z"/>\n    <path fill="#FABD2C" d="M25.39,22.74l1.1,18.22c0.02,0.28,0.2,0.38,0.2,0.38s2.11,0.43,2.2,0.47h0.28c0,0-0.13-0.04-0.14-0.22\n      c-0.02-0.19,0.27-7.6,0.27-7.6c0.02-0.37,0.12-0.52,0.36-0.52s0.35,0.1,0.4,0.75c0,0,0.85,7.06,0.87,7.49s0.31,0.56,0.31,0.56\n      s1.86,0.35,1.99,0.41c0.03,0.02,0.08,0.02,0.13,0.02c0.14,0,0.32-0.05,0.32-0.05s0.03-0.03,0.02-0.32\n      c-0.1-3.46,0.46-4.13-0.04-19.32L25.39,22.74"/>\n    <path fill="none" d="M25.42,21.84h9.81v1.19h-9.81C25.42,23.03,25.42,21.84,25.42,21.84z"/>\n    <path fill="#CE592C" d="M27.03,21.84l-1.61,0.9l8.25,0.29l1.56-0.96L27.03,21.84"/>\n    <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="29.92" cy="22.37" rx="2.25" ry="0.3"/>\n    <ellipse fill="#FABD2C" cx="29.95" cy="17.23" rx="4.96" ry="5"/>\n    <path opacity="0.6" fill="#CE592C" enable-background="new    " d="M26.61,22.77l3.09,5.36l2.76-5.3"/>\n    <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.93,21.74c-1.19,0-2.3-0.27-3.24-0.75\n      c0.87,0.77,2.01,1.24,3.26,1.24c1.28,0,2.44-0.49,3.32-1.28C32.31,21.45,31.16,21.74,29.93,21.74L29.93,21.74z"/>\n    <path fill="#FABD2C" d="M33.99,26.06c0.1,1.59,0.92,5.97,0.92,5.97l0.54,2.33c0.08,0.24,0.27,0.33,0.62,0.38s1.09-0.21,1.09-0.21\n      c0.23-0.06,0.29-0.3,0.25-0.55c0,0-0.35-2.72-0.75-5.23c-0.4-2.46-0.89-4.51-0.89-4.51c-0.1-0.61-0.59-1.29-1.17-1.34\n      c0,0-0.69,0-0.71,1.06C33.86,25.08,33.99,26.06,33.99,26.06L33.99,26.06z"/>\n    <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M34.41,22.95c-0.2,0.08-0.5,0.32-0.52,1.01\n      c-0.03,1.12,0.1,2.1,0.1,2.1c0.09,1.36,0.7,4.73,0.87,5.7l0.01,0.05C34.88,31.81,34.3,26.32,34.41,22.95z"/>\n  </g>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n    s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.57,27.19,30.33,27.19z M30.21,55.03c-10.75,0-19.47-6.06-19.47-13.53\n    s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n  <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  <path fill="#FFFFFF" d="M15.6,48.74c-0.19,0-0.36-0.11-0.45-0.28c-0.1-0.21-0.05-0.46,0.14-0.61l8.99-7.24\n    c0.12-0.1,0.29-0.14,0.45-0.09c0.16,0.04,0.28,0.16,0.34,0.31c0,0.01,0.5,1.37,1.25,2.01c0.64,0.54,3.01,1.28,3.87,1.51\n    c0.22,0.06,0.37,0.26,0.37,0.49s-0.16,0.42-0.39,0.48l-14.45,3.4C15.68,48.73,15.64,48.74,15.6,48.74z M24.39,41.8l-6.76,5.44\n    l10.53-2.48c-0.94-0.33-2-0.75-2.49-1.16C25.09,43.11,24.65,42.34,24.39,41.8L24.39,41.8z"/>\n  <path fill="#3F3F3F" d="M30.05,44.83c0,0-3.19-0.88-4.06-1.61c-0.87-0.73-1.4-2.22-1.4-2.22l-8.99,7.24L30.05,44.83L30.05,44.83z"/>\n  <path fill="#333333" d="M32.45,44.49c-0.09,0-0.17-0.01-0.26-0.03c-0.17-0.01-0.34-0.06-0.49-0.14c-0.12-0.07-1.39-0.81-1.6-0.93\n    c-0.39-0.2-0.81-0.67-0.84-1.41c0-0.02-0.01-0.07-0.02-0.16c-0.12,0.04-0.25,0.09-0.37,0.14c-0.12,0.09-0.25,0.16-0.41,0.19\n    c0,0-0.12,0.02-0.26,0.03c-0.1,0.01-0.19,0.01-0.29-0.01c-0.1-0.01-0.2-0.04-0.28-0.07c-0.11-0.05-0.2-0.08-1.59-1.03\n    c-0.24-0.13-0.58-0.54-0.63-1.13c-0.01-0.15-0.17-2.85-0.37-6.09c-1.54-0.33-1.47-1.65-1.44-2.15c0-0.08,0.01-0.16,0.01-0.25\n    c0-0.12,0.09-2.27,0.17-3.13c0.05-0.54,0.17-3.21,0.21-4.19c-0.01-0.59,0.1-1.13,0.33-1.56c-0.02-0.5,0.27-0.93,0.72-1.08\n    c0.06-0.02,0.12-0.04,0.18-0.04l0.37-0.11c-1.04-1.11-1.63-2.57-1.63-4.09c0-1.6,0.62-3.11,1.75-4.24\n    c1.12-1.13,2.62-1.75,4.21-1.75h0.01c1.59,0,3.09,0.63,4.21,1.76s1.74,2.64,1.74,4.24c0,1.59-0.65,3.13-1.8,4.26l0.81,0.17\n    c0.44,0.09,0.77,0.47,0.8,0.92c0.01,0.14-0.01,0.28-0.06,0.41l-0.03,0.43c0.3,0.47,0.48,1.09,0.54,1.84\n    c0.04,0.48-0.1,3.1-0.14,3.89c-0.14,2.25-0.6,4.73-0.62,4.84l-0.06,0.25c-0.11,0.41-0.21,0.79-0.41,1.09l-0.38,6.47\n    c0,0.22-0.04,0.79-0.41,1.3c-0.25,0.34-0.87,0.97-0.99,1.1C32.97,44.39,32.71,44.49,32.45,44.49L32.45,44.49z M31.25,41.75\n    c0.23,0.13,0.63,0.37,0.95,0.55c0.15-0.16,0.28-0.31,0.33-0.38c0-0.04,0.02-0.16,0.03-0.2l0.4-6.87c0.02-0.26,0.13-0.51,0.33-0.68\n    c0.04-0.11,0.08-0.29,0.13-0.45l0.05-0.18c0,0,0.44-2.42,0.58-4.51c0.08-1.56,0.16-3.35,0.14-3.62c-0.04-0.55-0.17-0.87-0.28-0.98\n    c-0.19-0.2-0.3-0.47-0.28-0.75l0.01-0.24l-2.37-0.49c-0.44-0.09-0.77-0.47-0.8-0.92c-0.03-0.45,0.26-0.87,0.69-1.01l0.15-0.04\n    c0.05-0.01,0.1-0.03,0.14-0.05c0.05-0.02,0.1-0.05,0.15-0.08l0.13-0.07c0.17-0.08,0.28-0.14,0.38-0.2\n    c0.07-0.04,0.12-0.08,0.17-0.12l0.22-0.17c0.02-0.03,0.05-0.05,0.07-0.07c0.88-0.78,1.36-1.84,1.37-2.99\n    c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.77-1.18-2.8-1.17c-1.06,0-2.05,0.41-2.79,1.17c-0.75,0.75-1.16,1.76-1.16,2.83\n    c0,1.16,0.51,2.26,1.41,3.03c0.03,0.02,0.06,0.05,0.08,0.08l0.08,0.06c0.13,0.1,0.2,0.15,0.27,0.2c0.1,0.06,0.21,0.12,0.32,0.17\n    c0.02,0.01,0.12,0.06,0.13,0.07c0.35,0.2,0.56,0.6,0.51,1s-0.31,0.74-0.7,0.85l-1.56,0.45c-0.09,0.1-0.2,0.19-0.32,0.25\n    c-0.02,0.01-0.03,0.02-0.05,0.02c0,0.01-0.01,0.01-0.02,0.02c-0.03,0.04-0.14,0.21-0.13,0.71c-0.01,0.2-0.15,3.65-0.22,4.35\n    c-0.08,0.81-0.16,2.97-0.16,2.99c0,0.09-0.01,0.2-0.01,0.3v0.04c0.25-0.1,0.53-0.1,0.78,0.01c0.34,0.15,0.57,0.48,0.59,0.85\n    c0.19,3.16,0.37,6.02,0.42,6.86c0.22,0.15,0.53,0.36,0.77,0.52c0.04-0.02,0.09-0.03,0.14-0.05l0.28-3.18\n    c0.04-0.51,0.46-0.9,0.97-0.91h0.03c0.5,0,0.92,0.37,0.99,0.86C31.09,40.41,31.22,41.42,31.25,41.75L31.25,41.75z M27.13,39.36\n    c0.01,0.01,0.04,0.03,0.1,0.07C27.19,39.41,27.16,39.38,27.13,39.36z"/>\n  <path fill="#E58A2C" d="M34.68,22.64l-4.46-0.83c0,0-2.42,0.35-2.43,0.35l-0.46,17.98l0.78,1.03c0,0,1.02-0.38,1.1-0.41\n    c0.08-0.03,0.07-0.18,0.07-0.18l0.66-7.54l1.46,9.74l1.04,0.7c0,0,0.68-0.69,0.89-0.98c0.24-0.33,0.22-0.73,0.22-0.73L34.68,22.64\n    L34.68,22.64z"/>\n  <path fill="#FABD2C" d="M32.66,33.53c-0.02,0.57-0.27,1.23,0.75,1.41c0.74,0.13,0.75-0.11,1.02-1.13c0,0,0.47-2.5,0.61-4.71\n    c0,0,0.18-3.31,0.14-3.76c-0.12-1.66-0.91-2.11-1.64-1.87c-0.53,0.17-1.08,0.65-0.94,2.01c0,0,0.18,3.89,0.18,4.64\n    C32.76,31.05,32.66,33.53,32.66,33.53L32.66,33.53z"/>\n  <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M32.66,33.53c-0.02,0.4,0.19-1.86,0.42-4.94\n    c0.1-1.35-0.08-4.87-0.27-4.56s-0.29,0.77-0.22,1.45c0,0,0.18,3.89,0.18,4.64C32.76,31.05,32.66,33.53,32.66,33.53z"/>\n  <path fill="#FABD2C" d="M24.64,31.45c-0.01,0.67-0.2,1.27,0.73,1.43c0.91,0.15,0.86-0.61,0.93-0.87c0,0,0.45-1.92,0.75-3.91\n    c0,0,0.33-3.44,0.33-3.85c0.02-1.52-0.66-1.99-1.35-1.84c-0.5,0.11-1.03,0.5-1.01,1.75c0,0-0.15,3.56-0.21,4.24\n    C24.72,29.24,24.64,31.45,24.64,31.45z"/>\n  <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M24.64,31.45c-0.01,0.67-0.2,1.27,0.73,1.43\n    c0.91,0.15,0.86-0.61,0.93-0.87c0,0,0.45-1.92,0.75-3.91c0,0,0.33-3.44,0.33-3.85c0.02-1.52-0.66-1.99-1.35-1.84\n    c-0.5,0.11-1.03,0.5-1.01,1.75c0,0-0.15,3.56-0.21,4.24C24.72,29.24,24.64,31.45,24.64,31.45z"/>\n  <path fill="#FABD2C" d="M31.56,23.71l-6.17-1.29c0,0-0.05,0.01-0.04,0.09c0.13,1.5,1.07,17.08,1.09,17.34\n    c0.02,0.27,0.19,0.37,0.19,0.37s1.3,0.89,1.39,0.93s0.27,0,0.27,0s-0.13-0.04-0.14-0.23c-0.02-0.19,0.3-7.46,0.3-7.46\n    c0.01-0.37,0.11-0.52,0.36-0.53c0.24,0,0.29,0.15,0.31,0.53c0,0,1.14,8.05,1.15,8.48s0.31,0.56,0.31,0.56s1.47,0.86,1.59,0.92\n    s0.3,0.01,0.3,0.01s-0.22-0.01-0.22-0.3C32.25,42.94,31.56,23.71,31.56,23.71L31.56,23.71z"/>\n  <path opacity="0.6" fill="#CE592C" enable-background="new    " d="M26.74,22.67l2.02,4.98l1.23-4.26"/>\n  <path fill="#CE592C" d="M25.43,22.42l6.13,1.29l3.16-1.07l-5.88-1.2"/>\n  <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="29.89" cy="22.41" rx="2.25" ry="0.43"/>\n  <ellipse fill="#FABD2C" cx="29.95" cy="17.23" rx="4.96" ry="5"/>\n  <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.93,21.74c-1.19,0-2.3-0.27-3.24-0.75\n    c0.87,0.77,2.01,1.24,3.26,1.24c1.28,0,2.44-0.49,3.32-1.28C32.31,21.45,31.16,21.74,29.93,21.74L29.93,21.74z"/>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <g>\n    <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n      s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.68,33.64,41.57,27.19,30.33,27.19z M30.21,55.03\n      c-10.75,0-19.47-6.06-19.47-13.53s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n    <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  </g>\n  <g>\n    <path fill="#FFFFFF" d="M12.95,45.15c-0.24,0-0.44-0.17-0.49-0.4c-0.05-0.23,0.08-0.47,0.3-0.56l11.98-4.97\n      c0.15-0.06,0.31-0.05,0.45,0.03s0.23,0.22,0.24,0.38c0,0.01,0.14,1.46,0.71,2.26c0.49,0.69,2.3,1.86,2.96,2.25\n      c0.19,0.12,0.29,0.34,0.23,0.56c-0.06,0.22-0.26,0.37-0.48,0.37L12.95,45.15L12.95,45.15z M24.54,40.39l-9.04,3.75l11.68-0.06\n      c-0.71-0.5-1.49-1.11-1.85-1.61C24.88,41.85,24.65,40.98,24.54,40.39z"/>\n    <path fill="#3F3F3F" d="M28.85,44.58c0,0-2.46-1.47-3.12-2.39c-0.66-0.93-0.8-2.5-0.8-2.5l-11.98,4.97L28.85,44.58L28.85,44.58z"\n      />\n    <path fill="#333333" d="M30.68,44.46c-0.26,0-0.52-0.09-0.73-0.26c-0.08-0.07-0.83-0.82-0.95-0.95c-0.19-0.18-0.49-0.57-0.5-1.26\n      c0-0.04-0.01-0.12-0.01-0.25c-0.05,0.01-0.08,0.02-0.08,0.02c-0.46,0.12-0.78,0-0.97-0.12c-0.12-0.08-0.17-0.11-1.08-1.1\n      c-0.06-0.05-0.36-0.38-0.38-1.01c-0.01-0.16-0.15-2.69-0.31-5.77c-0.72-0.23-1.44-0.83-1.17-2.37l0.03-0.18\n      c0-0.01,0.29-2.23,0.37-3.07c0.05-0.54,0.17-3.21,0.21-4.19c0-0.08,0-0.19,0.01-0.31l-0.06-1.09c-0.02-0.39,0.21-0.84,0.55-1.03\n      c0.05-0.03,0.11-0.05,0.16-0.07c-1.13-1.13-1.78-2.65-1.77-4.24c0-1.6,0.62-3.11,1.75-4.24c1.12-1.13,2.62-1.75,4.21-1.75h0.01\n      c1.59,0,3.09,0.63,4.21,1.76s1.74,2.64,1.74,4.24c0,1.61-0.66,3.15-1.83,4.29c-0.03,0.04-0.06,0.08-0.1,0.12l0.14,0.04\n      c0.46,0.13,0.76,0.56,0.73,1.04l-0.07,0.85c0.25,0.45,0.4,1.02,0.45,1.69c0.03,0.47,0.01,3.67,0.01,4.31\n      c-0.14,2.31-0.66,4.54-0.69,4.63c-0.1,0.68-0.34,1.18-0.71,1.5l-0.52,6.71c0,0.4-0.26,1.09-0.99,1.46\n      c-0.5,0.25-0.99,0.42-1.19,0.49C31,44.43,30.84,44.46,30.68,44.46L30.68,44.46z M30.5,41.93c0.1,0.1,0.25,0.26,0.4,0.41\n      c0.14-0.05,0.29-0.12,0.45-0.2l0.55-7.12c0.03-0.39,0.28-0.72,0.64-0.86c0.02-0.08,0.04-0.19,0.05-0.24\n      c0-0.01,0.02-0.12,0.02-0.13c0.01-0.07,0.51-2.2,0.64-4.28c0.01-1.78,0.01-3.84,0-4.09c-0.04-0.6-0.19-0.86-0.27-0.96\n      c-0.16-0.2-0.23-0.45-0.21-0.7l0.03-0.37l-1.61-0.45c-0.42-0.12-0.72-0.5-0.73-0.94s0.27-0.84,0.69-0.97l0.15-0.04\n      c0.05-0.01,0.1-0.03,0.14-0.05c0.05-0.02,0.1-0.05,0.15-0.08l0.13-0.07c0.17-0.08,0.28-0.14,0.38-0.2\n      c0.07-0.04,0.12-0.08,0.17-0.12l0.22-0.17c0.02-0.03,0.05-0.05,0.07-0.07c0.88-0.78,1.36-1.84,1.37-2.99\n      c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.74-1.17-2.79-1.17c-1.06,0-2.05,0.41-2.79,1.17c-0.75,0.75-1.16,1.76-1.16,2.83\n      c0,1.16,0.51,2.26,1.41,3.03c0.03,0.02,0.06,0.05,0.08,0.08l0.08,0.06c0.13,0.1,0.2,0.15,0.27,0.2c0.1,0.06,0.21,0.12,0.32,0.17\n      l0.19,0.1c0.03,0.02,0.07,0.04,0.1,0.05c0.39,0.16,0.64,0.55,0.62,0.98c-0.02,0.42-0.31,0.79-0.72,0.91l-1.25,0.36l0.02,0.44v0.13\n      c-0.01,0.08-0.01,0.16-0.01,0.25c-0.01,0.2-0.15,3.65-0.22,4.35c-0.08,0.85-0.38,3.12-0.38,3.12c-0.01,0.08-0.03,0.18-0.04,0.28\n      c0,0.02-0.01,0.04-0.01,0.06c0.24-0.03,0.49,0.02,0.71,0.16c0.27,0.17,0.44,0.49,0.45,0.81c0.23,4.28,0.33,6.11,0.36,6.57\n      c0.07,0.08,0.16,0.17,0.25,0.27l0.07-0.82c0.05-0.52,0.48-0.91,1-0.91h0.01c0.52,0,0.95,0.41,0.99,0.93\n      C30.43,40.79,30.49,41.69,30.5,41.93L30.5,41.93z M27.77,39.13l0.1,0.1L27.77,39.13z"/>\n    <path fill="#FABD2C" d="M25.51,31.34c-0.06,0.52-0.36,1.3,0.56,1.51s1.03-0.7,1.1-0.95c0,0,0.65-1.97,0.95-3.96\n      c0,0,0.33-3.44,0.33-3.85c0.02-1.52-0.66-1.99-1.35-1.84c-0.5,0.11-1.03,0.5-1.01,1.75c0,0-0.15,3.56-0.21,4.24\n      C25.81,29.09,25.51,31.34,25.51,31.34L25.51,31.34z"/>\n    <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M25.51,31.34c-0.06,0.52-0.36,1.3,0.56,1.51\n      s1.03-0.7,1.1-0.95c0,0,0.65-1.97,0.95-3.96c0,0,0.33-3.44,0.33-3.85c0.02-1.52-0.66-1.99-1.35-1.84c-0.5,0.11-1.03,0.5-1.01,1.75\n      c0,0-0.15,3.56-0.21,4.24C25.81,29.09,25.51,31.34,25.51,31.34L25.51,31.34z"/>\n    <path fill="#E58A2C" d="M33.86,22.64l-4.31-1.2c0,0-3.41,1.02-3.43,1.02l0.98,17.31l1.04,1.03c0,0,0.81-0.22,0.91-0.26\n      c0.1-0.03,0.1-0.18,0.1-0.18l0.15-1.68l0.7,4.1l0.72,0.66c0,0,0.6-0.18,1.16-0.47c0.45-0.23,0.45-0.65,0.45-0.65L33.86,22.64z"/>\n    <path fill="#FABD2C" d="M29.97,23.71l-3.89-1.29c0,0-0.03,0.01-0.03,0.09c0.08,1.5,0.91,16.72,0.92,16.99s0.12,0.37,0.12,0.37\n      s0.82,0.89,0.88,0.93s0.17,0,0.17,0s-0.08-0.04-0.09-0.23s0.38-7.48,0.38-7.48c0.01-0.37,0.07-0.52,0.23-0.53\n      c0.15,0,0.19,0.15,0.19,0.53c0,0,0.63,8.45,0.64,8.88s0.2,0.56,0.2,0.56s0.82,0.83,0.89,0.89c0.08,0.06,0.19,0.01,0.19,0.01\n      s-0.14-0.01-0.14-0.3C30.64,42.94,29.97,23.71,29.97,23.71L29.97,23.71z"/>\n    <path fill="#CE592C" d="M26.08,22.42l3.89,1.29l3.89-1.07l-4.37-1.2"/>\n    <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="29.7" cy="22.4" rx="2.13" ry="0.52"/>\n    <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M33.97,25.66c-0.04-1.67-0.72-2.46-1.44-2.22\n      c-0.81,0.27-1.29,1.03-1.21,2.4c0,0,0.07,3.73,0.03,4.48c-0.05,0.93-0.27,3.4-0.27,3.4c-0.05,0.57-0.33,1.44,0.68,1.63\n      c0.22,0.04,0.39-0.01,0.53-0.12l0.28-0.43c0,0,0.97-2.72,1.21-4.91C33.78,29.87,33.98,26.11,33.97,25.66L33.97,25.66z"/>\n    <path fill="#FABD2C" d="M31.73,33.53c-0.02,0.57-0.27,1.45,0.76,1.59c1.02,0.14,1.05-0.86,1.11-1.14c0,0,0.52-2.21,0.66-4.41\n      c0,0,0.03-3.78-0.01-4.23c-0.12-1.66-0.91-2.11-1.64-1.87c-0.53,0.17-1.08,0.65-0.94,2.01c0,0,0.18,3.89,0.18,4.64\n      C31.83,31.05,31.73,33.53,31.73,33.53L31.73,33.53z"/>\n    <path opacity="0.3" fill="#CE592C" enable-background="new    " d="M32.08,33.84c0,0,0.08-2.81,0.08-3.77\n      c0.01-0.79-0.3-4.73-0.3-4.73c-0.08-0.79,0.06-1.31,0.29-1.63c-0.34,0.28-0.59,0.82-0.49,1.79c0,0,0.18,3.89,0.18,4.64\n      c-0.01,0.93-0.11,3.41-0.11,3.41c-0.02,0.45-0.17,1.1,0.28,1.42C32.03,34.69,32.07,34.22,32.08,33.84L32.08,33.84z"/>\n    <ellipse fill="#FABD2C" cx="29.95" cy="17.23" rx="4.96" ry="5"/>\n    <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.93,21.74c-1.19,0-2.3-0.27-3.24-0.75\n      c0.87,0.77,2.01,1.24,3.26,1.24c1.28,0,2.44-0.49,3.32-1.28C32.31,21.45,31.16,21.74,29.93,21.74L29.93,21.74z"/>\n    <path opacity="0.6" fill="#CE592C" enable-background="new    " d="M27.13,22.77l0.94,4.66l0.76-4.1"/>\n  </g>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <g>\n    <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.19c-11.24,0-20.35,6.46-20.35,14.42\n      s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42S41.57,27.19,30.33,27.19z M30.21,55.03c-10.75,0-19.47-6.06-19.47-13.53\n      s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.03,30.21,55.03z"/>\n    <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.5" rx="19.47" ry="13.53"/>\n  </g>\n  <g>\n    <path fill="#333333" d="M29.67,43.83c-0.5,0-0.95-0.04-1.17-0.07c-0.33,0.02-0.56-0.08-0.71-0.18s-0.29-0.18-0.88-1.05\n      c-0.1-0.15-0.16-0.33-0.17-0.51c-0.01-0.19-1.01-18.74-1.11-20.21c-0.01-0.14,0.01-0.28,0.06-0.42c-1.07-1.11-1.69-2.6-1.69-4.16\n      c0-1.6,0.62-3.11,1.75-4.24c1.12-1.13,2.62-1.75,4.21-1.75h0.01c1.59,0,3.09,0.63,4.21,1.76s1.74,2.64,1.74,4.24\n      c0,1.74-0.75,3.35-2.02,4.47l0.19,0.15c0.26,0.21,0.4,0.54,0.36,0.88L32.48,42.4c-0.04,0.75-0.83,1.05-1.22,1.2\n      C30.82,43.78,30.21,43.83,29.67,43.83z M30.48,42.22c0,0.05-0.01,0.09-0.01,0.14v-0.12L30.48,42.22z M28.82,41.78\n      c0.63,0.06,1.44,0.06,1.71-0.04l1.87-18.66l-0.69-0.56c-0.23-0.14-0.4-0.36-0.46-0.62c-0.1-0.45,0.08-0.91,0.49-1.12\n      c1.35-0.69,2.18-2.05,2.18-3.54c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.77-1.14-2.8-1.17c-1.06,0-2.05,0.41-2.79,1.17\n      c-0.75,0.75-1.16,1.76-1.16,2.83c0,1.42,0.73,2.7,1.97,3.44c0.35,0.21,0.54,0.61,0.48,1.02c-0.07,0.41-0.37,0.73-0.77,0.82\n      c0.21,3.64,0.93,16.94,1.05,19.13C28.75,41.68,28.78,41.73,28.82,41.78L28.82,41.78z"/>\n    <path fill="#FFFFFF" d="M26.99,43.9h-0.06l-15.16-1.99c-0.25-0.03-0.44-0.25-0.44-0.5s0.19-0.46,0.44-0.5L26.58,39\n      c0.23-0.03,0.45,0.1,0.53,0.32s0.01,0.46-0.18,0.59c-0.01,0.01-1.05,0.76-0.77,1.39c0.43,0.94,1.18,1.75,1.19,1.75\n      c0.14,0.15,0.18,0.38,0.08,0.57C27.35,43.79,27.18,43.9,26.99,43.9L26.99,43.9z M15.71,41.41l10.13,1.33\n      c-0.2-0.3-0.42-0.65-0.59-1.02c-0.25-0.55-0.14-1.09,0.11-1.55L15.71,41.41z"/>\n    <path fill="#3F3F3F" d="M26.99,43.4c0,0-0.81-0.86-1.28-1.89c-0.47-1.03,0.94-2.01,0.94-2.01l-14.81,1.91L26.99,43.4L26.99,43.4z"\n      />\n    <path fill="#E58A2C" d="M33.45,22.64l-5.6-1.2c0,0-1.12,0.24-1.14,0.24l1.43,20.54l0.35,0.53c0,0,1.68,0.21,2.41-0.08\n      c0.58-0.23,0.58-0.34,0.58-0.34L33.45,22.64L33.45,22.64z"/>\n    <path fill="#FABD2C" d="M27.38,22.7l-0.73-1.06c0,0-0.04,0.01-0.03,0.09c0.1,1.5,1.11,20.23,1.11,20.23s0.47,0.7,0.58,0.76\n      c0.1,0.06,0.25,0.01,0.25,0.01s-0.18-0.01-0.18-0.3C28.37,42.24,27.38,22.7,27.38,22.7L27.38,22.7z"/>\n    <path fill="#CE592C" d="M26.65,21.65l0.73,1.05l6.07-0.06l-1.2-0.97"/>\n    <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="29.9" cy="22.01" rx="2.13" ry="0.52"/>\n    <path fill="#FABD2C" d="M29.26,33.53c-0.02,0.57-0.31,1.45,0.87,1.59c1.17,0.14,1.21-0.86,1.27-1.14c0,0,0.42-2.16,0.58-4.36\n      c0,0,0.21-3.83,0.17-4.28c-0.14-1.66-1.05-2.11-1.88-1.87c-0.61,0.17-1.24,0.65-1.08,2.01c0,0,0.03,3.94,0.02,4.69\n      C29.19,31.1,29.26,33.53,29.26,33.53z"/>\n    <path opacity="0.3" fill="#CE592C" enable-background="new    " d="M29.66,33.84c0,0-0.09-2.76-0.09-3.72\n      c0.01-0.79-0.16-4.78-0.16-4.78c-0.09-0.79,0.06-1.31,0.33-1.63c-0.39,0.28-0.68,0.82-0.56,1.79c0,0,0.03,3.94,0.02,4.69\n      c-0.01,0.93,0.05,3.36,0.05,3.36c-0.02,0.45-0.2,1.1,0.32,1.42C29.6,34.69,29.65,34.22,29.66,33.84L29.66,33.84z"/>\n    <ellipse fill="#FABD2C" cx="29.95" cy="17.23" rx="4.96" ry="5"/>\n    <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.93,21.74c-1.19,0-2.3-0.27-3.24-0.75\n      c0.87,0.77,2.01,1.24,3.26,1.24c1.28,0,2.44-0.49,3.32-1.28C32.31,21.45,31.16,21.74,29.93,21.74L29.93,21.74z"/>\n  </g>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <g>\n    <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.2c-11.24,0-20.35,6.46-20.35,14.42\n      s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.68,33.65,41.57,27.2,30.33,27.2z M30.21,55.04\n      c-10.75,0-19.47-6.06-19.47-13.53s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.04,30.21,55.04z"/>\n    <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.51" rx="19.47" ry="13.53"/>\n  </g>\n  <g>\n    <path fill="#FFFFFF" d="M25.76,42.6c-0.07,0-0.14-0.01-0.2-0.04l-12.42-5.44c-0.23-0.1-0.35-0.35-0.28-0.59\n      c0.06-0.24,0.29-0.4,0.54-0.37l15.03,1.64c0.24,0.03,0.42,0.21,0.44,0.45s-0.12,0.45-0.35,0.53c-1.03,0.33-2.18,0.96-2.26,1.39\n      c-0.18,1-0.02,1.82-0.01,1.83c0.04,0.18-0.03,0.37-0.17,0.49C25.99,42.57,25.87,42.6,25.76,42.6L25.76,42.6z M16.53,37.52\n      l8.65,3.79c-0.01-0.37,0.01-0.82,0.1-1.32c0.1-0.56,0.63-1.03,1.21-1.39L16.53,37.52L16.53,37.52z"/>\n    <path fill="#3F3F3F" d="M25.76,42.1c0,0-0.22-0.92,0.01-2.03c0.22-1.04,2.6-1.78,2.6-1.78l-15.03-1.64L25.76,42.1L25.76,42.1z"/>\n    <path fill="#333333" d="M28.81,44.46c-0.16,0-0.31-0.03-0.46-0.09c-0.2-0.07-0.69-0.24-1.19-0.49c-0.74-0.37-1-1.07-1-1.54\n      l-0.51-6.59c-0.82-0.58-0.73-1.65-0.7-2.06l0.01-0.2c0-0.01,0.1-2.46,0.11-3.38c0-0.24-0.02-1.02-0.12-3.38l-0.31-4.02\n      c-0.04-0.48,0.27-0.91,0.73-1.04l0.46-0.13c-0.01-0.01-0.01-0.02-0.02-0.03c-1.16-1.13-1.82-2.68-1.83-4.28\n      c0-1.6,0.62-3.11,1.74-4.24c1.12-1.13,2.62-1.76,4.22-1.76h0.01c1.59,0,3.09,0.62,4.21,1.75c1.13,1.13,1.75,2.64,1.75,4.24\n      c0,1.63-0.67,3.19-1.86,4.33c0.06,0.04,0.12,0.09,0.18,0.14c0.58,0.5,0.86,1.31,0.85,2.41c0,0.43-0.28,3.35-0.34,3.93\n      c-0.2,1.33-0.53,2.6-0.78,3.47c-0.22,4-0.43,7.85-0.44,8.03c-0.03,0.63-0.32,0.96-0.45,1.07c-0.84,0.92-0.89,0.96-1.01,1.03\n      c-0.4,0.25-0.81,0.17-0.99,0.12c-0.02,0-0.04-0.01-0.06-0.01C31,41.87,31,41.95,31,41.99c-0.01,0.69-0.31,1.08-0.5,1.26\n      c-0.13,0.13-0.87,0.88-0.95,0.94C29.34,44.37,29.08,44.46,28.81,44.46L28.81,44.46z M28.15,42.14c0.16,0.08,0.32,0.14,0.45,0.2\n      c0.14-0.15,0.3-0.31,0.4-0.4c0.02-0.46,0.16-2.31,0.22-3.12c0.04-0.52,0.47-0.92,0.99-0.93h0.01c0.52,0,0.95,0.39,1,0.91\n      l0.07,0.82c0.09-0.1,0.18-0.19,0.25-0.27c0.02-0.4,0.11-2.03,0.44-8.06c0-0.08,0.02-0.15,0.04-0.23c0.24-0.81,0.56-2.04,0.75-3.26\n      c0.15-1.61,0.32-3.47,0.32-3.71c0.01-0.69-0.16-0.87-0.16-0.87c-0.15,0.02-0.25,0.04-0.39,0l-1.14-0.33\n      c-0.41-0.12-0.7-0.48-0.72-0.91c-0.02-0.43,0.23-0.82,0.63-0.98l0.12-0.05c0.06-0.03,0.12-0.06,0.17-0.08l0.11-0.06\n      c0.13-0.06,0.25-0.12,0.37-0.2c0.07-0.04,0.13-0.1,0.2-0.15c0.06-0.05,0.11-0.08,0.15-0.11c0.02-0.03,0.05-0.05,0.08-0.07\n      c0.9-0.77,1.41-1.88,1.41-3.03c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.74-1.17-2.79-1.17c-1.06,0-2.05,0.42-2.8,1.17\n      c-0.75,0.76-1.16,1.76-1.16,2.83c0,1.15,0.49,2.21,1.37,2.99c0.03,0.02,0.05,0.05,0.08,0.08l0.22,0.17l0.15,0.12\n      c0.11,0.07,0.22,0.13,0.34,0.18l0.17,0.09c0.05,0.03,0.1,0.05,0.15,0.08c0,0,0.12,0.05,0.13,0.05c0.41,0.15,0.67,0.55,0.65,0.98\n      s-0.31,0.81-0.73,0.92l-1.81,0.51l0.25,3.23c0.09,1.99,0.13,3.13,0.12,3.51c-0.01,0.94-0.11,3.44-0.11,3.44\n      c0,0.08-0.01,0.18-0.02,0.28c-0.01,0.08-0.02,0.2-0.02,0.29c0.36,0.14,0.64,0.48,0.67,0.87L28.15,42.14L28.15,42.14z M31.67,39.2\n      c-0.03,0.02-0.05,0.04-0.06,0.07C31.64,39.22,31.67,39.2,31.67,39.2z"/>\n    <path fill="#CE592C" d="M31.14,31.34c-0.06,0.52-0.36,1.3,0.56,1.51s1.03-0.7,1.1-0.95c0,0,0.65-1.97,0.95-3.96\n      c0,0,0.33-3.44,0.33-3.85c0.02-1.52-0.66-1.99-1.35-1.84c-0.5,0.11-1.03,0.5-1.01,1.75c0,0-0.15,3.56-0.21,4.24\n      C31.43,29.09,31.14,31.34,31.14,31.34L31.14,31.34z"/>\n    <path fill="#FDBF2D" d="M25.64,22.64l4.31-1.2c0,0,3.41,1.02,3.43,1.02L32.4,39.77l-1.04,1.03c0,0-0.81-0.22-0.91-0.26\n      c-0.1-0.03-0.1-0.18-0.1-0.18l-0.15-1.68l-0.7,4.1l-0.72,0.66c0,0-0.6-0.18-1.16-0.47c-0.45-0.23-0.45-0.65-0.45-0.65L25.64,22.64\n      z"/>\n    <path fill="#CE592C" d="M26.43,33.85c-0.01,0.58-0.14,1.33,0.9,1.51c0.76,0.13,0.77-0.13,1.03-1.17c0,0,0.44-2.57,0.55-4.83\n      c0,0,0.13-3.4,0.08-3.86c-0.16-1.71-0.98-2.15-1.72-1.91c-0.55,0.18-1.1,0.67-0.93,2.07c0,0,0.14,3.92,0.15,4.7\n      C26.5,31.3,26.43,33.85,26.43,33.85L26.43,33.85z"/>\n    <path fill="#FABD2C" d="M29.53,23.71l3.89-1.29c0,0,0.03,0.01,0.03,0.09c-0.08,1.5-0.91,16.72-0.92,16.99s-0.12,0.37-0.12,0.37\n      s-0.82,0.89-0.88,0.93s-0.17,0-0.17,0s0.08-0.04,0.09-0.23s-0.38-7.48-0.38-7.48c-0.01-0.37-0.07-0.52-0.23-0.53\n      c-0.15,0-0.19,0.15-0.19,0.53c0,0-0.63,8.45-0.64,8.88s-0.2,0.56-0.2,0.56s-0.82,0.83-0.89,0.89c-0.08,0.06-0.19,0.01-0.19,0.01\n      s0.14-0.01,0.14-0.3C28.86,42.94,29.53,23.71,29.53,23.71L29.53,23.71z"/>\n    <path opacity="0.3" fill="#CE592C" enable-background="new    " d="M29.53,23.71l3.89-1.29c0,0,0.03,0.01,0.03,0.09\n      c-0.08,1.5-0.91,16.72-0.92,16.99s-0.12,0.37-0.12,0.37s-0.82,0.89-0.88,0.93s-0.17,0-0.17,0s0.08-0.04,0.09-0.23\n      s-0.38-7.48-0.38-7.48c-0.01-0.37-0.07-0.52-0.23-0.53c-0.15,0-0.19,0.15-0.19,0.53c0,0-0.63,8.45-0.64,8.88s-0.2,0.56-0.2,0.56\n      s-0.82,0.83-0.89,0.89c-0.08,0.06-0.19,0.01-0.19,0.01s0.14-0.01,0.14-0.3C28.86,42.94,29.53,23.71,29.53,23.71L29.53,23.71z"/>\n    <path fill="#CE592C" d="M33.42,22.42l-3.89,1.29l-3.89-1.07l4.37-1.2"/>\n    <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="29.8" cy="22.4" rx="2.13" ry="0.52"/>\n    <path fill="#FABD2C" d="M25.97,33.53c-0.02,0.57-0.27,1.45,0.76,1.59c1.02,0.14,1.05-0.86,1.11-1.14c0,0,0.52-2.21,0.66-4.41\n      c0,0,0.03-3.78-0.01-4.23c-0.12-1.66-0.91-2.11-1.64-1.87c-0.53,0.17-1.08,0.65-0.94,2.01c0,0,0.18,3.89,0.18,4.64\n      C26.07,31.05,25.97,33.53,25.97,33.53L25.97,33.53z"/>\n    <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M25.97,33.53c-0.02,0.57-0.27,1.45,0.76,1.59\n      c1.02,0.14,1.05-0.86,1.11-1.14c0,0,0.52-2.21,0.66-4.41c0,0,0.03-3.78-0.01-4.23c-0.12-1.66-0.91-2.11-1.64-1.87\n      c-0.53,0.17-1.08,0.65-0.94,2.01c0,0,0.18,3.89,0.18,4.64C26.07,31.05,25.97,33.53,25.97,33.53L25.97,33.53z"/>\n    <ellipse fill="#FABD2C" cx="29.95" cy="17.23" rx="4.96" ry="5"/>\n    <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.98,21.74c1.19,0,2.3-0.27,3.24-0.75\n      c-0.87,0.77-2.01,1.24-3.26,1.24c-1.28,0-2.44-0.49-3.32-1.28C27.6,21.45,28.75,21.74,29.98,21.74L29.98,21.74z"/>\n    <path fill="#FDBF2D" d="M25.99,33.53c-0.04,1.16,0.54,0.95,0.82,0.81c0.99-0.52,1.09-5.12,1.2-6.56c0.07-0.97,0.16-3.58-0.78-4.26\n      c-0.55-0.21-1.04,0.42-1.09,0.51c-0.19,0.31-0.29,0.77-0.22,1.45c0,0,0.18,3.89,0.18,4.64C26.09,31.05,25.99,33.53,25.99,33.53z"\n      />\n  </g>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <g>\n    <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.2c-11.24,0-20.35,6.46-20.35,14.42\n      s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.68,33.65,41.57,27.2,30.33,27.2z M30.21,55.04\n      c-10.75,0-19.47-6.06-19.47-13.53s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.04,30.21,55.04z"/>\n    <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.51" rx="19.47" ry="13.53"/>\n  </g>\n  <g>\n    <path fill="#FFFFFF" d="M25.23,41.88c-0.14,0-0.27-0.06-0.37-0.16l-7.88-8.59c-0.16-0.17-0.18-0.43-0.04-0.62\n      c0.13-0.19,0.38-0.26,0.6-0.18l13.95,5.63c0.22,0.09,0.35,0.33,0.3,0.57s-0.25,0.41-0.51,0.4c-2.16-0.08-4.25,0.11-4.56,0.42\n      c-0.49,0.49-0.89,1.73-1,2.16c-0.05,0.18-0.19,0.32-0.36,0.36C25.31,41.88,25.27,41.88,25.23,41.88z M19.21,34.08l5.81,6.33\n      c0.21-0.58,0.55-1.33,0.99-1.77c0.43-0.43,1.61-0.62,2.77-0.69L19.21,34.08z"/>\n    <path fill="#3F3F3F" d="M25.23,41.38c0,0,0.38-1.63,1.13-2.39c0.75-0.75,4.93-0.57,4.93-0.57l-13.95-5.63L25.23,41.38z"/>\n    <path fill="#333333" d="M27.48,44.47c-0.26,0-0.52-0.09-0.7-0.28c-0.12-0.12-0.75-0.76-0.99-1.1c-0.37-0.51-0.41-1.07-0.41-1.3\n      l-0.36-6.17c-0.96-0.56-0.9-1.66-0.88-2.07l0.01-0.14c0-0.01,0.1-2.46,0.11-3.38c0.01-0.75-0.07-4.55-0.07-4.55\n      c-0.06-0.55-0.01-1.06,0.15-1.51l-0.06-1.08c-0.03-0.1-0.04-0.2-0.03-0.31c0.03-0.45,0.33-0.84,0.78-0.93l0.79-0.16\n      c-1.15-1.13-1.8-2.67-1.81-4.26c0-1.6,0.62-3.11,1.74-4.24c1.12-1.13,2.62-1.76,4.22-1.76h0.01c1.59,0,3.09,0.62,4.21,1.75\n      c1.13,1.13,1.75,2.64,1.75,4.24c0,1.52-0.58,2.97-1.62,4.09l0.46,0.13c0.16,0.03,0.31,0.1,0.43,0.19c0.51,0.3,1.17,0.99,1.14,2.61\n      c0,0.43-0.28,3.35-0.34,3.93c-0.31,2.06-0.75,3.97-0.77,4.05c-0.04,0.25-0.1,0.6-0.3,0.92c-0.22,3.53-0.41,6.62-0.41,6.76\n      c-0.04,0.61-0.39,1.01-0.7,1.19c-1.32,0.91-1.4,0.94-1.52,0.99c-0.06,0.02-0.14,0.04-0.23,0.06c-0.11,0.03-0.22,0.03-0.33,0.02\n      c-0.14-0.01-0.27-0.03-0.27-0.03c-0.16-0.03-0.31-0.1-0.43-0.19c-0.11-0.04-0.23-0.09-0.34-0.13c-0.01,0.09-0.02,0.15-0.02,0.18\n      c-0.02,0.72-0.45,1.19-0.83,1.39c-0.21,0.12-1.48,0.86-1.6,0.92c-0.19,0.1-0.41,0.13-0.63,0.15\n      C27.57,44.47,27.52,44.47,27.48,44.47z M26.13,33.94c0.01,0,0.02,0,0.04,0.01c0.45,0.09,0.79,0.47,0.81,0.92l0.4,6.85v0.12\n      c0,0.01,0.01,0.07,0.03,0.09c0.05,0.07,0.18,0.22,0.33,0.38c0.32-0.18,0.72-0.42,0.95-0.55c0.04-0.36,0.17-1.41,0.66-4.95\n      c0.07-0.5,0.49-0.86,0.99-0.86h0.03c0.51,0.01,0.93,0.41,0.97,0.91l0.28,3.18c0.05,0.02,0.09,0.03,0.14,0.05\n      c0.24-0.16,0.56-0.38,0.77-0.52c0.05-0.82,0.23-3.69,0.42-6.86c0.01-0.24,0.11-0.46,0.27-0.63c0.01-0.03,0.01-0.06,0.01-0.09\n      c0.02-0.1,0.03-0.18,0.05-0.25c0,0,0.43-1.88,0.72-3.79c0.15-1.61,0.32-3.47,0.32-3.71c0.01-0.55-0.11-0.8-0.15-0.86\n      c-0.05,0.04-0.1,0.08-0.15,0.11c-0.1,0.07-0.22,0.12-0.34,0.14l-1.31,0.27c-0.29,0.06-0.6-0.01-0.83-0.2s-0.37-0.48-0.37-0.78\n      c0-0.2,0.06-0.39,0.17-0.55c-0.13-0.15-0.21-0.35-0.23-0.55c-0.04-0.41,0.18-0.8,0.55-0.99c0.19-0.1,0.31-0.16,0.43-0.23\n      c0.07-0.05,0.14-0.1,0.21-0.16c0.06-0.04,0.1-0.08,0.14-0.1c0.02-0.03,0.05-0.05,0.08-0.07c0.9-0.77,1.41-1.88,1.41-3.03\n      c0-1.07-0.41-2.07-1.16-2.83c-0.75-0.75-1.74-1.17-2.79-1.17c-1.06,0-2.05,0.42-2.8,1.17c-0.75,0.76-1.16,1.76-1.16,2.83\n      c0,1.15,0.49,2.21,1.37,2.99c0.03,0.02,0.05,0.05,0.08,0.08l0.21,0.16c0.05,0.04,0.11,0.09,0.16,0.12\n      c0.11,0.07,0.22,0.13,0.34,0.18l0.17,0.09c0.05,0.03,0.1,0.05,0.15,0.08c0.06,0.02,0.11,0.04,0.17,0.05l0.13,0.04\n      c0.43,0.14,0.72,0.55,0.7,1.01c-0.02,0.45-0.35,0.84-0.8,0.93l-2.36,0.48l0.04,0.65c0.01,0.17-0.02,0.33-0.09,0.49\n      c-0.06,0.12-0.11,0.35-0.07,0.8c0,0.08,0.08,3.93,0.08,4.68c-0.01,0.94-0.11,3.44-0.11,3.44l-0.01,0.16\n      C26.13,33.75,26.13,33.85,26.13,33.94L26.13,33.94z M32.74,39.41c-0.03,0.01-0.05,0.03-0.07,0.05\n      C32.72,39.43,32.74,39.41,32.74,39.41z"/>\n    <path fill="#FDBF2D" d="M25.26,22.64l4.46-0.83c0,0,2.42,0.35,2.43,0.35l0.46,17.98l-0.78,1.03c0,0-1.02-0.38-1.1-0.41\n      c-0.08-0.03-0.07-0.18-0.07-0.18L30,33.05l-1.46,9.74l-1.04,0.7c0,0-0.68-0.69-0.89-0.98c-0.24-0.33-0.22-0.73-0.22-0.73\n      L25.26,22.64z"/>\n    <path fill="#CE592C" d="M25.55,33.57c-0.01,0.57-0.14,1.3,0.87,1.46c0.74,0.12,0.75-0.12,1-1.14c0,0,0.44-2.51,0.55-4.71\n      c0,0,0.13-3.31,0.09-3.76c-0.15-1.66-0.94-2.09-1.67-1.85c-0.53,0.18-1.07,0.66-0.91,2.02c0,0,0.13,3.82,0.13,4.57\n      C25.63,31.09,25.55,33.57,25.55,33.57z"/>\n    <path fill="#FABD2C" d="M25.15,33.46c-0.02,0.57-0.16,1.3,0.85,1.48c0.74,0.13,0.75-0.11,1.02-1.13c0,0,0.47-2.5,0.61-4.71\n      c0,0,0.18-3.31,0.14-3.76c-0.12-1.66-0.91-2.11-1.64-1.87c-0.53,0.17-1.08,0.65-0.94,2.01c0,0,0.08,3.82,0.07,4.58\n      C25.25,30.98,25.15,33.46,25.15,33.46z"/>\n    <path opacity="0.3" fill="#CE592C" enable-background="new    " d="M25.15,33.46c-0.02,0.57-0.16,1.3,0.85,1.48\n      c0.74,0.13,0.75-0.11,1.02-1.13c0,0,0.47-2.5,0.61-4.71c0,0,0.18-3.31,0.14-3.76c-0.12-1.66-0.91-2.11-1.64-1.87\n      c-0.53,0.17-1.08,0.65-0.94,2.01c0,0,0.08,3.82,0.07,4.58C25.25,30.98,25.15,33.46,25.15,33.46z"/>\n    <path fill="#FDBF2D" d="M25.15,33.46c-0.04,1.16,0.68,1.07,0.93,0.87c0.63-0.5,0.71-5.21,0.82-6.64c0.07-0.97-0.09-3.4-0.4-4.17\n      c-0.55-0.21-1.04,0.42-1.09,0.51c-0.19,0.31-0.29,0.77-0.22,1.45c0,0,0.08,3.82,0.07,4.58C25.25,30.98,25.15,33.46,25.15,33.46\n      L25.15,33.46z"/>\n    <path fill="#E58A2C" d="M32.58,31.45c-0.01,0.67-0.2,1.27,0.73,1.43c0.91,0.15,0.86-0.61,0.93-0.87c0,0,0.45-1.92,0.75-3.91\n      c0,0,0.33-3.44,0.33-3.85c0.02-1.52-0.66-1.99-1.35-1.84c-0.5,0.11-1.03,0.5-1.01,1.75c0,0-0.15,3.56-0.21,4.24\n      C32.67,29.24,32.58,31.45,32.58,31.45z"/>\n    <path fill="#FABD2C" d="M28.38,23.71l6.17-1.29c0,0,0.05,0.01,0.04,0.09c-0.13,1.5-1.07,17.08-1.09,17.34\n      c-0.02,0.27-0.19,0.37-0.19,0.37s-1.3,0.89-1.39,0.93s-0.27,0-0.27,0s0.13-0.04,0.14-0.23c0.02-0.19-0.3-7.46-0.3-7.46\n      c-0.01-0.37-0.11-0.52-0.36-0.53c-0.24,0-0.29,0.15-0.31,0.53c0,0-1.14,8.05-1.15,8.48s-0.31,0.56-0.31,0.56s-1.47,0.86-1.59,0.92\n      s-0.3,0.01-0.3,0.01s0.22-0.01,0.22-0.3C27.69,42.94,28.38,23.71,28.38,23.71L28.38,23.71z"/>\n    <path opacity="0.3" fill="#CE592C" enable-background="new    " d="M28.38,23.71l6.17-1.29c0,0,0.05,0.01,0.04,0.09\n      c-0.13,1.5-1.07,17.08-1.09,17.34c-0.02,0.27-0.19,0.37-0.19,0.37s-1.3,0.89-1.39,0.93s-0.27,0-0.27,0s0.13-0.04,0.14-0.23\n      c0.02-0.19-0.3-7.46-0.3-7.46c-0.01-0.37-0.11-0.52-0.36-0.53c-0.24,0-0.29,0.15-0.31,0.53c0,0-1.14,8.05-1.15,8.48\n      s-0.31,0.56-0.31,0.56s-1.47,0.86-1.59,0.92s-0.3,0.01-0.3,0.01s0.22-0.01,0.22-0.3C27.69,42.94,28.38,23.71,28.38,23.71\n      L28.38,23.71z"/>\n    <path fill="#CE592C" d="M34.51,22.42l-6.14,1.29l-3.15-1.07l5.88-1.2"/>\n    <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="30.05" cy="22.41" rx="2.25" ry="0.43"/>\n    <ellipse fill="#FABD2C" cx="29.95" cy="17.23" rx="4.96" ry="5"/>\n    <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M29.98,21.74c1.19,0,2.3-0.27,3.24-0.75\n      c-0.87,0.77-2.01,1.24-3.26,1.24c-1.28,0-2.44-0.49-3.32-1.28C27.6,21.45,28.75,21.74,29.98,21.74L29.98,21.74z"/>\n  </g>\n</svg>\n;<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 60 60">\n  <g>\n    <path opacity="0.3" fill="#111111" enable-background="new    " d="M30.33,27.2c-11.24,0-20.35,6.46-20.35,14.42\n      s9.11,14.42,20.35,14.42s20.35-6.46,20.35-14.42C50.68,33.65,41.57,27.2,30.33,27.2z M30.21,55.04\n      c-10.75,0-19.47-6.06-19.47-13.53s8.72-13.53,19.47-13.53s19.47,6.06,19.47,13.53S40.96,55.04,30.21,55.04z"/>\n    <ellipse opacity="0.1" fill="#111111" enable-background="new    " cx="30.21" cy="41.51" rx="19.47" ry="13.53"/>\n  </g>\n  <path fill="#FFFFFF" d="M25.23,41.88c-0.21,0-0.4-0.13-0.47-0.33l-4.3-11.67c-0.08-0.21,0-0.45,0.18-0.58s0.44-0.12,0.61,0.03\n    l10.37,8.71c0.16,0.14,0.22,0.36,0.15,0.56c-0.08,0.2-0.29,0.31-0.49,0.32c-2.16-0.08-4.25,0.11-4.56,0.42\n    c-0.49,0.49-0.89,1.73-1,2.16c-0.05,0.21-0.24,0.36-0.46,0.37C25.25,41.88,25.24,41.88,25.23,41.88z M22.05,31.3l3.17,8.6\n    c0.2-0.46,0.47-0.94,0.79-1.27c0.58-0.58,2.47-0.71,3.89-0.73L22.05,31.3z"/>\n  <path fill="#3F3F3F" d="M25.23,41.38c0,0,0.38-1.63,1.13-2.39c0.75-0.75,4.93-0.57,4.93-0.57l-10.37-8.71L25.23,41.38L25.23,41.38z\n    "/>\n  <path fill="#333333" d="M26.56,43.7c-0.18,0-0.37-0.03-0.58-0.08l-0.5-0.14l-0.11-0.3c-0.65-0.61-1.01-1.18-1.06-1.69\n    c-0.02-0.21-0.04-0.44-0.01-0.65l-0.17-5.13c-0.05,0.01-0.09,0.02-0.13,0.02c-0.53,0.08-1.21-0.13-1.58-0.26\n    c-0.62-0.16-1.02-0.85-0.9-1.64c0.08-0.68,0.45-3.36,0.75-5.23c0.4-2.47,0.88-4.5,0.9-4.58c0.06-0.39,0.25-0.83,0.53-1.2\n    l-0.01-0.46c-0.01-0.33,0.11-0.65,0.34-0.9c0.23-0.24,0.54-0.38,0.88-0.39l0.47-0.01c-0.86-1.05-1.37-2.39-1.37-3.82\n    c0-1.6,0.62-3.11,1.74-4.24c1.12-1.13,2.62-1.76,4.22-1.76h0.01c1.59,0,3.09,0.62,4.21,1.75s1.74,2.64,1.75,4.24\n    c0,1.62-0.63,3.12-1.71,4.22c0.37,0.21,0.8,0.46,1.15,0.68c1.08,0.67,1.28,1.95,1.31,2.31c0.21,1.1,0.74,3.9,0.88,4.48\n    c0.23,0.93,0.66,3.25,0.68,3.34c0.02,0.12,0.04,0.21,0.06,0.3c0.11,0.54,0.4,1.96-1.3,2.51c-0.54,0.18-1.03,0.16-1.45-0.06\n    c-0.35-0.18-0.57-0.46-0.7-0.71c-0.22,3.57-0.41,6.62-0.42,6.74c-0.04,0.61-0.39,1.01-0.7,1.19l-0.3,0.11c0,0-1.5,0.31-1.99,0.42\n    l-0.04,0.04l-0.24,0.03c-0.01,0-0.03,0-0.05,0.01l-0.05,0.01c-0.14,0.02-0.41,0.03-0.69-0.08c-0.11-0.04-0.18-0.07-0.52-0.36\n    c-0.18,0.41-0.49,0.68-0.77,0.8l-0.22,0.07c-0.72,0.13-1.59,0.31-1.82,0.37C26.91,43.67,26.75,43.7,26.56,43.7L26.56,43.7z\n     M26.25,41.78c-0.01,0-0.01,0.01-0.02,0.01C26.23,41.79,26.24,41.78,26.25,41.78z M26.31,41.24c0.06,0.09,0.19,0.24,0.36,0.41\n    c0.25-0.06,0.66-0.14,1.36-0.28c0.07-0.72,0.3-2.64,0.67-5.71l1.99,0.1l0.11,4.79c0.09,0.08,0.18,0.16,0.27,0.23\n    c0.25-0.06,0.67-0.15,1.4-0.3c0.09-1.51,0.42-6.79,0.69-11.21l1.95-0.23c0.39,1.26,0.83,2.48,1.1,3.21\n    c-0.13-0.69-0.42-2.2-0.58-2.86c-0.19-0.75-0.89-4.48-0.92-4.63l-0.02-0.13c-0.01-0.19-0.12-0.64-0.37-0.79\n    c-0.55-0.34-1.3-0.77-1.68-0.98l-0.81,0.02l-0.4-1.93c1.52-0.61,2.5-2.07,2.5-3.71c0-1.07-0.41-2.07-1.16-2.83\n    c-0.75-0.75-1.74-1.17-2.79-1.17c-1.06,0-2.05,0.42-2.8,1.17c-0.75,0.76-1.16,1.76-1.16,2.83c0,1.72,1.09,3.24,2.71,3.79\n    l-0.29,1.95l-2.71,0.08l0.02,0.57l-0.35,0.31c-0.12,0.11-0.23,0.31-0.25,0.47c-0.02,0.09-0.5,2.12-0.89,4.51\n    c-0.31,1.94-0.59,3.97-0.7,4.8c0.02,0,0.03,0.01,0.04,0.01l0.44-1.92L26.01,32L26.31,41.24L26.31,41.24z M23.02,33.56\n    c0.03,0.01,0.05,0.02,0.08,0.03C23.08,33.58,23.05,33.57,23.02,33.56z"/>\n  <path fill="#FABD2C" d="M37.27,32.44c0.12,0.73,0.42,1.35-0.57,1.67c-0.97,0.31-1.03-0.53-1.15-0.79c0,0-0.79-2.02-1.44-4.14\n    c0,0-0.9-3.69-0.98-4.14c-0.26-1.66,0.41-2.27,1.17-2.21c0.56,0.04,1.2,0.38,1.38,1.75c0,0,0.72,3.85,0.91,4.58\n    C36.82,30.06,37.27,32.44,37.27,32.44z"/>\n  <path fill="#E58A2C" d="M37.29,32.44c0.12,0.73,0.42,1.35-0.57,1.67c-0.97,0.31-1.03-0.53-1.15-0.79c0,0-0.79-2.02-1.44-4.14\n    c0,0-0.9-3.69-0.98-4.14c-0.26-1.66,0.41-2.27,1.17-2.21c0.56,0.04,1.2,0.38,1.38,1.75c0,0,0.72,3.85,0.91,4.58\n    C36.84,30.06,37.29,32.44,37.29,32.44z"/>\n  <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M34.26,29.87l0.2-7.11l0.41,0.31c0,0-0.06,5.4,0.11,6.64\n    c0.17,1.24,0.45,3.13,0.45,3.13L34.26,29.87L34.26,29.87z"/>\n  <path fill="none" d="M24.69,22.07h8.2v20.56h-8.2C24.69,42.63,24.69,22.07,24.69,22.07z"/>\n  <path fill="#FDBF2D" d="M24.69,22.07l0.6,18.85c0,0-0.04,0.04,0.01,0.47c0.04,0.48,0.95,1.24,0.95,1.24l1.87-0.57l1.25-10.04\n    l0.24,0.77l0.18,8.22l0.95,0.81l0.18,0.02l1.44-1.03l0.51-18.03l-2.05-0.32L24.69,22.07"/>\n  <path fill="#FABD2C" d="M34.54,22.74L26.27,23c-0.5,15.19,0.06,15.86-0.04,19.32c-0.01,0.3,0.01,0.32,0.01,0.32\n    s0.18,0.05,0.33,0.05c0.05,0,0.1-0.01,0.13-0.02c0.12-0.06,1.99-0.41,1.99-0.41s0.3-0.13,0.32-0.56c0.01-0.43,0.87-7.49,0.87-7.49\n    c0.05-0.65,0.14-0.75,0.4-0.75c0.24,0,0.34,0.15,0.35,0.52c0,0,0.3,7.41,0.28,7.6c-0.02,0.19-0.14,0.22-0.14,0.22h0.27\n    c0.1-0.04,2.21-0.47,2.21-0.47s0.17-0.1,0.19-0.38L34.54,22.74"/>\n  <path opacity="0.3" fill="#CE592C" enable-background="new    " d="M34.57,22.74L26.3,23c-0.5,15.19,0.06,15.86-0.05,19.32\n    c-0.01,0.3,0.02,0.32,0.02,0.32s0.18,0.05,0.32,0.05c0.05,0,0.09-0.01,0.12-0.02c0.13-0.06,2-0.41,2-0.41s0.3-0.13,0.31-0.56\n    c0.02-0.43,0.88-7.49,0.88-7.49c0.04-0.65,0.14-0.75,0.39-0.75s0.35,0.15,0.36,0.52c0,0,0.3,7.41,0.27,7.6\n    c-0.01,0.19-0.14,0.22-0.14,0.22h0.27c0.09-0.04,2.2-0.47,2.2-0.47s0.18-0.1,0.2-0.38c0.02-0.26,1.02-16.63,1.14-18.14L34.57,22.74\n    "/>\n  <path fill="#CE592C" d="M32.89,21.84l-8.2,0.23l1.57,0.96l8.25-0.29L32.89,21.84"/>\n  <ellipse opacity="0.5" fill="#CE592C" enable-background="new    " cx="30.01" cy="22.37" rx="2.25" ry="0.3"/>\n  <ellipse fill="#FABD2C" cx="29.98" cy="17.23" rx="4.96" ry="5"/>\n  <path opacity="0.25" fill="#CE592C" enable-background="new    " d="M30,21.74c1.19,0,2.3-0.27,3.24-0.75\n    c-0.87,0.77-2.01,1.24-3.26,1.24c-1.28,0-2.44-0.49-3.32-1.28C27.62,21.45,28.77,21.74,30,21.74L30,21.74z"/>\n  <path fill="#FABD2C" d="M25.94,26.06c-0.1,1.59-0.92,5.97-0.92,5.97l-0.54,2.33c-0.08,0.24-0.27,0.33-0.62,0.38\n    s-1.09-0.21-1.09-0.21c-0.23-0.06-0.29-0.3-0.25-0.55c0,0,0.35-2.72,0.75-5.23c0.4-2.46,0.89-4.51,0.89-4.51\n    c0.1-0.61,0.59-1.29,1.17-1.34c0,0,0.69,0,0.71,1.06C26.06,25.08,25.94,26.06,25.94,26.06L25.94,26.06z"/>\n  <path opacity="0.25" fill="#CF572E" enable-background="new    " d="M25.52,22.95c0.2,0.08,0.5,0.32,0.52,1.01\n    c0.03,1.12-0.1,2.1-0.1,2.1c-0.09,1.36-0.7,4.73-0.87,5.7l-0.01,0.05C25.05,31.81,25.63,26.32,25.52,22.95z"/>\n</svg>\n'.split(
            ";"
        );
    _.Ea(KN, _.L);
    _.t = KN.prototype;
    _.t.mode_changed = function() {
        NN(this);
        ON(this);
    };
    _.t.heading_changed = function() {
        7 == this.j() && NN(this);
    };
    _.t.position_changed = function() {
        var a = this.j();
        if (5 == a || 6 == a || 3 == a || 4 == a)
            this.get("position") ?
            (this.ta.setVisible(!0),
                this.ua.setVisible(!1),
                this.set("lilypadIcon", SN(this))) :
            ((a = this.j()), 5 == a ? this.i(6) : 3 == a && this.i(4));
        else {
            var b = this.get("position");
            b && 1 == a && this.i(7);
            this.set("dragPosition", b);
        }
    };
    _.t.ym = function(a) {
        this.set("dragging", !0);
        this.i(5);
        this.H = a.pixel.x;
    };
    _.t.zm = function(a) {
        var b = this;
        a = a.pixel.x;
        a > b.H + 5 ?
            (this.i(5), (b.H = a)) :
            a < b.H - 5 && (this.i(3), (b.H = a));
        ON(this);
        window.clearTimeout(b.o);
        b.o = window.setTimeout(function() {
            _.K.trigger(b, "hover");
            b.o = 0;
        }, 300);
    };
    _.t.xm = function() {
        this.set("dragging", !1);
        this.i(1);
        window.clearTimeout(this.o);
        this.o = 0;
    };
    _.A(UN, _.L);
    _.t = UN.prototype;
    _.t.mode_changed = function() {
        var a = _.MK(this.Ti());
        a != this.o && (a ? XN(this) : WN(this));
    };
    _.t.tilt_changed = UN.prototype.heading_changed = function() {
        this.o && (WN(this), XN(this));
    };
    _.t.Zi = function(a) {
        var b = this,
            c = this.get("dragPosition"),
            d = this.i.getZoom(),
            e = Math.max(50, 35 * Math.pow(2, 16 - d));
        this.set("hover", a);
        this.H = !1;
        _.N("streetview").then(function(f) {
            var g = b.Sa || void 0;
            b.j || ((b.j = new f.jk(g)), b.j.bindTo("result", b, null, !0));
            b.j.getPanoramaByLocation(
                c,
                e,
                g ? void 0 : 100 > e ? "nearest" : "best"
            );
        });
    };
    _.t.result_changed = function() {
        var a = this.get("result"),
            b = a && a.location;
        this.set("position", b && b.latLng);
        this.set("description", b && b.shortDescription);
        this.set("panoId", b && b.pano);
        this.H ? this.eh(1) : this.get("hover") || this.set("panoramaVisible", !!a);
    };
    _.t.panoramaVisible_changed = function() {
        this.H = 0 == this.get("panoramaVisible");
        this.Ti();
        var a = this.get("panoramaVisible"),
            b = this.get("hover");
        a || b || this.eh(1);
        a && this.notify("position");
    };
    _.t.Ti = _.gg("mode");
    _.t.eh = _.hg("mode");
    ZN.prototype.ta = function() {
        this.o = !this.o;
        this.ka();
    };
    ZN.prototype.ka = function() {
        var a = this.W.get();
        if (a) {
            a *= 80;
            a = this.o ?
                $N(a / 1e3, "km", a, "m") :
                $N(a / 1609.344, "mi", 3.28084 * a, "ft");
            var b = this.$;
            var c = a.Wk + "\u00a0";
            if (c instanceof _.gc) var d = c;
            else {
                var e = "object" == typeof c;
                d = null;
                e && c.Jg && (d = c.i());
                c = _.tm(e && c.kd ? c.Gb() : String(c));
                d = _.ic(c, d);
            }
            _.Sx(b, d);
            this.i.style.width = _.Hz(a.tn + 4, !0);
            this.H || (this.H = _.z.setTimeout((0, _.y)(this.ua, this), 50));
        }
    };
    ZN.prototype.ua = function() {
        this.H = 0;
        var a = this.T;
        this.j.set(new _.Dx(a.offsetWidth, a.offsetHeight).width);
    };
    _.Ea(jO, _.L);
    _.t = jO.prototype;
    _.t.disableDefaultUI_changed = function() {
        qO(this);
    };
    _.t.size_changed = function() {
        qO(this);
    };
    _.t.mapTypeId_changed = function() {
        oO(this) != this.Mc && ((this.o[1] = !0), _.wi(this.Ma));
        this.Pa && this.Pa.setMapTypeId(this.get("mapTypeId"));
    };
    _.t.mapTypeControl_changed = function() {
        this.o[0] = !0;
        _.wi(this.Ma);
    };
    _.t.mapTypeControlOptions_changed = function() {
        this.o[0] = !0;
        _.wi(this.Ma);
    };
    _.t.fullscreenControlOptions_changed = function() {
        this.o[3] = !0;
        _.wi(this.Ma);
    };
    _.t.scaleControl_changed = function() {
        this.o[2] = !0;
        _.wi(this.Ma);
    };
    _.t.scaleControlOptions_changed = function() {
        this.o[2] = !0;
        _.wi(this.Ma);
    };
    _.t.panControl_changed = function() {
        zO(this);
    };
    _.t.panControlOptions_changed = function() {
        zO(this);
    };
    _.t.rotateControl_changed = function() {
        zO(this);
    };
    _.t.rotateControlOptions_changed = function() {
        zO(this);
    };
    _.t.streetViewControl_changed = function() {
        zO(this);
    };
    _.t.streetViewControlOptions_changed = function() {
        zO(this);
    };
    _.t.zoomControl_changed = function() {
        zO(this);
    };
    _.t.zoomControlOptions_changed = function() {
        zO(this);
    };
    _.t.myLocationControl_changed = function() {
        zO(this);
    };
    _.t.myLocationControlOptions_changed = function() {
        zO(this);
    };
    _.t.streetView_changed = function() {
        BO(this);
    };
    _.t.yj = function(a) {
        this.get("panoramaVisible") != a && this.set("panoramaVisible", a);
    };
    _.t.panoramaVisible_changed = function() {
        var a = this.get("streetView");
        a && a.i.set(!!this.get("panoramaVisible"));
    };
    var CO = _.Zb(
        _.Eb(
            ".dismissButton{background-color:#fff;border:1px solid #dadce0;color:#1a73e8;border-radius:4px;font-family:Roboto,sans-serif;font-size:14px;height:36px;cursor:pointer;padding:0 24px}.dismissButton:hover{background-color:rgba(66,133,244,0.04);border:1px solid #d2e3fc}.dismissButton:focus{background-color:rgba(66,133,244,0.12);border:1px solid #d2e3fc;outline:0}.dismissButton:hover:focus{background-color:rgba(66,133,244,0.16);border:1px solid #d2e2fd}.dismissButton:active{background-color:rgba(66,133,244,0.16);border:1px solid #d2e2fd;box-shadow:0 1px 2px 0 rgba(60,64,67,0.3),0 1px 3px 1px rgba(60,64,67,0.15)}.dismissButton:disabled{background-color:#fff;border:1px solid #f1f3f4;color:#3c4043}\n"
        )
    );
    _.A(EO, _.L);
    EO.prototype.Ya = function() {
        return _.Rh(this.j);
    };
    EO.prototype.addElement = function(a, b, c, d) {
        var e = this;
        if ((b = this.i[b])) {
            d = _.he(d) ? d : b.length;
            var f;
            for (f = 0; f < b.length && !(b[f].index > d); ++f);
            b.splice(f, 0, {
                element: a,
                border: c,
                index: d,
                listener: _.K.addListener(a, "resize", function() {
                    return _.wi(e.Ma);
                }),
            });
            _.Mo(a);
            a.style.visibility = "hidden";
            this.j.appendChild(a);
            _.wi(this.Ma);
        }
    };
    EO.prototype.Uc = function(a) {
        a.parentNode && a.parentNode.removeChild(a);
        _.$d(this.i, function(b, c) {
            for (b = 0; b < c.length; ++b)
                if (c[b].element == a) {
                    var d = a;
                    d.style.top = "auto";
                    d.style.bottom = "auto";
                    d.style.left = "auto";
                    d.style.right = "auto";
                    _.K.removeListener(c[b].listener);
                    c.splice(b, 1);
                }
        });
        _.wi(this.Ma);
    };
    EO.prototype.o = function() {
        var a = this.Ya(),
            b = a.width;
        a = a.height;
        var c = this.i,
            d = [],
            e = IO(c[1], "left", "top", d),
            f = JO(c[5], "left", "top", d);
        d = [];
        var g = IO(c[10], "left", "bottom", d),
            h = JO(c[6], "left", "bottom", d);
        d = [];
        var k = IO(c[3], "right", "top", d),
            l = JO(c[7], "right", "top", d);
        d = [];
        var m = IO(c[12], "right", "bottom", d);
        d = JO(c[9], "right", "bottom", d);
        var q = LO(c[11], "bottom", b),
            r = LO(c[2], "top", b),
            u = KO(c[4], "left", b, a);
        KO(c[13], "center", b, a);
        c = KO(c[8], "right", b, a);
        this.set(
            "bounds",
            new _.pg([
                new _.O(
                    Math.max(u, e.width, g.width, f.width, h.width) || 0,
                    Math.max(r, e.height, f.height, k.height, l.height) || 0
                ),
                new _.O(
                    b - (Math.max(c, k.width, m.width, l.width, d.width) || 0),
                    a - (Math.max(q, g.height, m.height, h.height, d.height) || 0)
                ),
            ])
        );
    };
    _.A(MO, _.L);
    MO.prototype.W = function(a) {
        if (QO(this, a)) return !0;
        var b = !1;
        switch (a.keyCode) {
            case 38:
            case 40:
            case 37:
            case 39:
                this.o[a.keyCode] = 1;
                this.i || ((this.j = new _.lF(100)), this.H());
                b = !0;
                break;
            case 34:
                PO(this, 0, 0.75);
                b = !0;
                break;
            case 33:
                PO(this, 0, -0.75);
                b = !0;
                break;
            case 36:
                PO(this, -0.75, 0);
                b = !0;
                break;
            case 35:
                PO(this, 0.75, 0);
                b = !0;
                break;
            case 187:
            case 107:
                NO(this);
                b = !0;
                break;
            case 189:
            case 109:
                OO(this), (b = !0);
        }
        switch (a.which) {
            case 61:
            case 43:
                NO(this);
                b = !0;
                break;
            case 45:
            case 95:
            case 173:
                OO(this), (b = !0);
        }
        b && (_.Ie(a), _.Je(a));
        return !b;
    };
    MO.prototype.T = function(a) {
        if (QO(this, a)) return !0;
        switch (a.keyCode) {
            case 38:
            case 40:
            case 37:
            case 39:
            case 34:
            case 33:
            case 36:
            case 35:
            case 187:
            case 107:
            case 189:
            case 109:
                return _.Ie(a), _.Je(a), !1;
        }
        switch (a.which) {
            case 61:
            case 43:
            case 45:
            case 95:
            case 173:
                return _.Ie(a), _.Je(a), !1;
        }
        return !0;
    };
    MO.prototype.$ = function(a) {
        var b = !1;
        switch (a.keyCode) {
            case 38:
            case 40:
            case 37:
            case 39:
                (this.o[a.keyCode] = null), (b = !0);
        }
        return !b;
    };
    MO.prototype.H = function() {
        for (var a = 0, b = 0, c = !1, d = 0; d < _.Zd(SO); d++)
            this.o[SO[d]] && ((c = TO[SO[d]]), (a += c[0]), (b += c[1]), (c = !0));
        c
            ?
            ((c = 1),
                _.mF(this.j) && (c = this.j.next()),
                (d = Math.round(35 * c * a)),
                (c = Math.round(35 * c * b)),
                0 == d && (d = a),
                0 == c && (c = b),
                _.K.trigger(this, "panbynow", d, c, 1),
                (this.i = _.Ny(this, this.H, 10))) :
            (this.i = 0);
    };
    _.t = RO.prototype;
    _.t.Oh = EO;
    _.t.bm = function(a, b, c, d, e, f, g, h, k, l, m, q) {
        var r = b.get("streetView"),
            u = b.__gm;
        if (r && u) {
            var v = new _.jG(new _.Rd(_.H.V[1]).getStreetView(), r.get("client"));
            r = _.th[r.get("client")];
            var w = new jO({
                    Ok: function(M) {
                        return m.fromContainerPixelToLatLng(new _.O(M.clientX, M.clientY));
                    },
                    ji: b.controls,
                    zi: k,
                    Gf: l,
                    Li: a,
                    map: b,
                    hm: b.mapTypes,
                    Ze: d,
                    uj: !0,
                    nb: q,
                    controlSize: b.get("controlSize") || 40,
                    Zn: r,
                    ao: v,
                }),
                x = new _.Oz(["bounds"], "bottomRight", function(M) {
                    return M && _.Fm(M);
                }),
                E,
                J;
            _.K.kb(b, "idle", function() {
                var M = b.get("bounds");
                M != E && (w.set("bounds", M), x.set("bounds", M), (E = M));
                M = b.get("center");
                M != J && (w.set("center", M), (J = M));
            });
            w.bindTo("bottomRight", x);
            w.bindTo("disableDefaultUI", b);
            w.bindTo("heading", b);
            w.bindTo("projection", b);
            w.bindTo("reportErrorControl", b);
            w.bindTo("passiveLogo", b);
            w.bindTo("zoom", u);
            w.bindTo("mapTypeId", c);
            w.bindTo("attributionText", e);
            w.bindTo("zoomRange", g);
            w.bindTo("aerialAvailableAtZoom", h);
            w.bindTo("tilt", h);
            w.bindTo("desiredTilt", h);
            w.bindTo("mapTypeControlOptions", b, null, !0);
            w.bindTo("panControlOptions", b, null, !0);
            w.bindTo("rotateControlOptions", b, null, !0);
            w.bindTo("scaleControlOptions", b, null, !0);
            w.bindTo("streetViewControlOptions", b, null, !0);
            w.bindTo("zoomControlOptions", b, null, !0);
            w.bindTo("mapTypeControl", b);
            w.bindTo("myLocationControlOptions", b);
            w.bindTo("fullscreenControlOptions", b, null, !0);
            b.get("fullscreenControlOptions") && w.notify("fullscreenControlOptions");
            w.bindTo("panControl", b);
            w.bindTo("rotateControl", b);
            w.bindTo("motionTrackingControl", b);
            w.bindTo("motionTrackingControlOptions", b, null, !0);
            w.bindTo("scaleControl", b);
            w.bindTo("streetViewControl", b);
            w.bindTo("fullscreenControl", b);
            w.bindTo("zoomControl", b);
            w.bindTo("myLocationControl", b);
            w.bindTo("rmiAvailable", f, "available");
            w.bindTo("streetView", b);
            w.bindTo("fontLoaded", u);
            w.bindTo("size", u);
            u.bindTo("renderHeading", w);
            _.K.forward(w, "panbyfraction", u);
        }
    };
    _.t.fm = function(a, b, c, d, e, f, g) {
        var h = new jO({
            ji: f,
            zi: d,
            Gf: _.ug(!1),
            Li: e,
            Ze: c,
            controlSize: g.get("controlSize") || 40,
            uj: !1,
            $n: g,
        });
        h.set("streetViewControl", !1);
        h.bindTo("attributionText", b, "copyright");
        h.set("mapTypeId", "streetview");
        h.set("tilt", !0);
        h.bindTo("heading", b);
        h.bindTo("zoom", b, "zoomFinal");
        h.bindTo("zoomRange", b);
        h.bindTo("pov", b, "pov");
        h.bindTo("position", g);
        h.bindTo("pano", g);
        h.bindTo("passiveLogo", g);
        h.bindTo("floors", b);
        h.bindTo("floorId", b);
        h.bindTo("rmiWidth", g);
        h.bindTo("fullscreenControlOptions", g, null, !0);
        h.bindTo("panControlOptions", g, null, !0);
        h.bindTo("zoomControlOptions", g, null, !0);
        h.bindTo("fullscreenControl", g);
        h.bindTo("panControl", g);
        h.bindTo("zoomControl", g);
        h.bindTo("disableDefaultUI", g);
        h.bindTo("fontLoaded", g.__gm);
        h.bindTo("size", b);
        a.view &&
            a.view.addListener("scene_changed", function() {
                var k = a.view.get("scene");
                h.set("isCustomPanorama", "c" == k);
            });
        h.Ma.Nb();
        _.K.forward(h, "panbyfraction", a);
    };
    _.t.dm = function(a, b) {
        a.get("disableDefaultUI") &&
            !a.get("keyboardShortcuts") &&
            a.set("keyboardShortcuts", !1);
        var c = new MO(b);
        c.bindTo("zoom", a);
        c.bindTo("enabled", a, "keyboardShortcuts");
        _.K.forward(c, "panbyfraction", a.__gm);
        _.K.forward(c, "panbynow", a.__gm);
        _.K.forward(c, "panby", a.__gm);
        var d;
        _.K.kb(a, "streetview_changed", function() {
            var e = a.get("streetView"),
                f = d;
            f && _.K.removeListener(f);
            d = null;
            e &&
                (d = _.K.kb(e, "visible_changed", function() {
                    e.getVisible() ?
                        ((b.tabIndex = -1), b.blur(), c.set("streetViewDisable", !0)) :
                        ((b.tabIndex = 0), c.set("streetViewDisable", !1));
                }));
        });
    };
    _.t.tj = function(a, b) {
        a = _.DO(a, b).style;
        a.border = "1px solid rgba(0,0,0,0.12)";
        a.borderRadius = "5px";
        a.left = "50%";
        a.maxWidth = "375px";
        a.msTransform = "translateX(-50%)";
        a.position = "absolute";
        a.transform = "translateX(-50%)";
        a.width = "calc(100% - 10px)";
        a.zIndex = "1";
    };
    _.t.Hh = function(a) {
        if (!(window.devicePixelRatio || _.vh[43] || a.__gm_bbsp)) {
            a.__gm_bbsp = !0;
            var b = new _.gp(
                (_.wc(_.Nd(_.H), 15) ? "http://" : "https://") +
                "developers.google.com/maps/documentation/javascript/error-messages#unsupported-browsers"
            );
            new FM(a, b);
        }
    };
    _.rf("controls", new RO());
});