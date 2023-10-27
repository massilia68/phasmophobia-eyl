(window.webpackJsonp = window.webpackJsonp || []).push([
    [12], {
        206: function(e, t, n) {
            "use strict";
            var o = n(296);
            t.a = function(e) {
                var t = e.store;
                new o.a({ storage: window.localStorage, modules: ["userpreferences"] }).plugin(t)
            }
        },
        207: function(e, t, n) {
            "use strict";
            var o = n(2),
                r = n(297);
            o.a.use(r.a)
        },
        208: function(e, t, n) {
            "use strict";
            n(395)
        },
        209: function(e, t, n) {
            "use strict";
            var o = n(298);
            t.a = function(e, t) { t("socket", Object(o.io)({ autoConnect: !1 })) }
        },
        278: function(e, t, n) {},
        300: function(e, t, n) {
            "use strict";
            var o = { head: function() { return this.$nuxtI18nSeo() } },
                r = n(59),
                component = Object(r.a)(o, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", { staticClass: "disableselection vh-100 d-flex flex-column" }, [n("Navbar", { staticClass: "flex-grow-0 flex-shrink-0" }), e._v(" "), n("div", { staticClass: "flex-grow-1 flex-shrink-1 overflow-auto" }, [n("div", { staticClass: "mb-1" }, [n("Nuxt")], 1)])], 1)
                }), [], !1, null, null, null);
            t.a = component.exports;
            installComponents(component, { Navbar: n(309).default })
        },
        301: function(e, t, n) {
            "use strict";
            var o = { head: function() { return this.$nuxtI18nSeo() } },
                r = n(59),
                component = Object(r.a)(o, (function() { var e = this.$createElement; return (this._self._c || e)("Nuxt") }), [], !1, null, null, null);
            t.a = component.exports
        },
        309: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n(417),
                r = n(418),
                c = n(419),
                l = n(420),
                d = n(421),
                m = n(422),
                f = n(423),
                h = {
                    components: { BNavbar: o.a, BNavbarBrand: r.a, BNavbarNav: c.a, BNavItem: l.a, BDropdownText: d.a, BDropdownItem: m.a, BNavItemDropdown: f.a },
                    computed: {
                        availableLocales: function() { return this.$i18n.locales },
                        isActive: function() { return !1 },
                        networkStateColor: function() {
                            var e = this.$store.getters["sync/getSessionState"],
                                t = this.$store.getters["sync/getIsInRoom"];
                            return "offline" === e || !1 === t ? "#c00" : "connecting" === e ? "#f80" : "online" === e ? "#77b300" : "#adafae"
                        }
                    }
                },
                v = (n(377), n(59)),
                component = Object(v.a)(h, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("b-navbar", { attrs: { type: "dark", variant: "info" } }, [n("b-navbar-brand", { staticClass: "d-none d-md-block", attrs: { href: "#" } }, [e._v("\n    Phasmophobia Matrix\n  ")]), e._v(" "), n("b-navbar-nav", { staticClass: "d-xl-none w-100 nav-fill" }, [n("b-nav-item", { attrs: { to: e.localePath("/"), exact: "", "exact-active-class": "active" } }, [n("font-awesome-icon", { attrs: { size: "lg", icon: ["fas", "search"] } })], 1), e._v(" "), n("b-nav-item", { attrs: { to: e.localePath("/maps"), "active-class": "active" } }, [n("font-awesome-icon", { attrs: { size: "lg", icon: ["fas", "map-marked-alt"] } })], 1), e._v(" "), n("b-nav-item", { attrs: { to: e.localePath("/voicerecognition"), "active-class": "active" } }, [n("font-awesome-icon", { attrs: { size: "lg", icon: ["fas", "book"] } })], 1), e._v(" "), n("b-nav-item", { attrs: { to: e.localePath("/setup"), "active-class": "active" } }, [n("font-awesome-icon", { attrs: { size: "lg", icon: ["fas", "cogs"] } })], 1), e._v(" "), n("b-nav-item", { attrs: { to: e.localePath("/online"), "active-class": "active" } }, [n("font-awesome-icon", { style: { color: e.networkStateColor }, attrs: { size: "lg", icon: ["fas", "signal"] } })], 1), e._v(" "), n("b-nav-item", { staticClass: "d-md-none", attrs: { href: "https://www.buymeacoffee.com/StreamR" } }, [n("font-awesome-icon", { attrs: { size: "lg", icon: ["fas", "donate"] } })], 1), e._v(" "), n("NavbarLanguage", { staticClass: "d-md-none", attrs: { "icon-only": !0 } }), e._v(" "), n("div", { staticClass: "fix-icon d-sm-flex d-md-none" }, [n("a", { attrs: { href: "https://discord.gg/wFJzd7a2FA" } }, [n("font-awesome-layers", { staticClass: "fa-2x" }, [n("font-awesome-icon", { staticStyle: { color: "#738adb" }, attrs: { icon: ["fas", "circle"] } }), e._v(" "), n("font-awesome-icon", { staticStyle: { color: "white" }, attrs: { transform: "shrink-7 left-2", icon: ["fab", "discord"] } })], 1)], 1)])], 1), e._v(" "), n("b-navbar-nav", { staticClass: "d-none d-xl-flex" }, [n("b-nav-item", { attrs: { to: e.localePath("/"), exact: "", "exact-active-class": "active" } }, [n("span", { staticClass: "d-xl-none" }, [n("font-awesome-icon", { attrs: { size: "lg", icon: ["fas", "home"] } })], 1), e._v(" "), n("span", { staticClass: "d-none d-xl-block" }, [n("font-awesome-icon", { attrs: { size: "lg", icon: ["fas", "home"] } }), e._v("\n        " + e._s(e.$t("navbar.mission")) + "\n      ")], 1)]), e._v(" "), n("b-nav-item", { attrs: { to: e.localePath("/maps"), "active-class": "active" } }, [n("span", { staticClass: "d-xl-none" }, [n("font-awesome-icon", { attrs: { size: "lg", icon: ["fas", "map-marked-alt"] } })], 1), e._v(" "), n("span", { staticClass: "d-none d-xl-block" }, [n("font-awesome-icon", { attrs: { size: "lg", icon: ["fas", "map-marked-alt"] } }), e._v("\n        " + e._s(e.$t("navbar.maps")) + "\n      ")], 1)]), e._v(" "), n("b-nav-item", { attrs: { to: e.localePath("/setup"), "active-class": "active" } }, [n("font-awesome-icon", { attrs: { size: "lg", icon: ["fas", "cogs"] } }), e._v("\n      " + e._s(e.$t("navbar.setup")) + "\n    ")], 1), e._v(" "), n("b-nav-item", { attrs: { to: e.localePath("/online"), "active-class": "active" } }, [n("span", { staticClass: "d-xl-none" }, [n("font-awesome-icon", { style: { color: e.networkStateColor }, attrs: { size: "lg", icon: ["fas", "signal"] } })], 1), e._v(" "), n("span", { staticClass: "d-none d-xl-block" }, [n("font-awesome-icon", { style: { color: e.networkStateColor }, attrs: { size: "lg", icon: ["fas", "signal"] } }), e._v("\n        " + e._s(e.$t("navbar.onlinemode")) + "\n      ")], 1)]), e._v(" "), n("NavbarLanguage", { staticClass: "d-md-none", attrs: { "icon-only": !0 } }), e._v(" "), n("div", { staticClass: "fix-icon d-sm-flex d-md-none" }, [n("a", { attrs: { href: "https://discord.gg/wFJzd7a2FA" } }, [n("font-awesome-layers", { staticClass: "fa-2x" }, [n("font-awesome-icon", { staticStyle: { color: "#738adb" }, attrs: { icon: ["fas", "circle"] } }), e._v(" "), n("font-awesome-icon", { staticStyle: { color: "white" }, attrs: { transform: "shrink-7 left-2", icon: ["fab", "discord"] } })], 1)], 1)])], 1), e._v(" "), n("b-navbar-nav", { staticClass: "ml-auto d-none d-md-flex" }, [n("b-nav-item", { attrs: { href: "https://www.buymeacoffee.com/StreamR" } }, [e._v("\n      Donate\n    ")]), e._v(" "), n("NavbarLanguage", { attrs: { "icon-only": !1 } }), e._v(" "), n("b-nav-item-dropdown", { staticClass: "fix-outline", attrs: { text: e.$t("navbar.support"), right: "" } }, [n("b-dropdown-text", [e._v("\n        " + e._s(e.$t("navbar.bugsmessage")) + "\n      ")]), e._v(" "), n("b-dropdown-item", { attrs: { href: "https://discord.gg/wFJzd7a2FA" } }, [e._v("\n        Discord channel\n      ")])], 1), e._v(" "), n("div", { staticClass: "fix-icon d-none d-sm-flex" }, [n("a", { attrs: { href: "https://discord.gg/wFJzd7a2FA" } }, [n("font-awesome-layers", { staticClass: "fa-2x" }, [n("font-awesome-icon", { staticStyle: { color: "#738adb" }, attrs: { icon: ["fas", "circle"] } }), e._v(" "), n("font-awesome-icon", { staticStyle: { color: "white" }, attrs: { transform: "shrink-7 left-2", icon: ["fab", "discord"] } })], 1)], 1)])], 1)], 1)
                }), [], !1, null, "ef4f3f60", null);
            t.default = component.exports;
            installComponents(component, { NavbarLanguage: n(415).default })
        },
        310: function(e, t, n) { n(311), e.exports = n(312) },
        359: function(e, t, n) {},
        377: function(e, t, n) {
            "use strict";
            n(278)
        },
        378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "state", (function() { return o })), n.d(t, "mutations", (function() { return r })), n.d(t, "actions", (function() { return c })), n.d(t, "getters", (function() { return l }));
            var o = function() { return { communities: [{ locale: null, name: "بلعربي", website: null, discord: "https://discord.gg/tNufwbx", featured: !1 }, { locale: "fr", name: "Phasmophobia FR Officiel (Francophone)", website: "https://www.phasmophobia-fr.com/", discord: "https://discord.gg/phasmophobiafr", description: "", featured: !1 }, { locale: "de", name: "Offizieller deutscher Phasmophobia Discord", website: "https://phasmophobia.de/", discord: "https://discord.gg/t9bRJcuq7k", featured: !1 }, { locale: "zh-CN", name: "中文社区", website: null, discord: "https://discord.gg/mbwDqrr", featured: !1 }, { locale: "bp", name: "Brasil", website: null, discord: "https://discord.gg/SEMqQ7yHaj", featured: !1 }, { locale: "es", name: "Latinoamérica Oficial", website: null, discord: "https://discord.gg/jndmj9w", featured: !1 }, { locale: "TR", name: "TR", website: null, discord: "https://discord.gg/9ezufaW", featured: !1 }, { locale: "ru", name: "Russia", website: null, discord: "https://discord.gg/GX8VCxg", featured: !1 }, { locale: "pl", name: "Polska", website: null, discord: "https://discord.gg/dc3H63h", featured: !1 }, { locale: "it", name: "[ITALIA] | Official", website: null, discord: "https://discord.gg/dTYCfGZ", featured: !1 }, { locale: "ko", name: "korea", website: null, discord: "https://discord.gg/XA8y7g2", featured: !1 }, { locale: "ja", name: "Japan", website: null, discord: "https://discord.gg/7cyTRtc", featured: !1 }, { locale: "pt", name: "Portugal", website: null, discord: "https://discord.gg/nvMQ25X", featured: !1 }, { locale: null, name: "Nederland", website: null, discord: "https://discord.gg/RQnZf2j", featured: !1 }, { locale: null, name: "Israel Official", website: null, discord: "https://discord.gg/y46wzTa", featured: !1 }, { internal_string: "Svenska", locale: null, name: "Sverige", website: null, discord: "https://discord.gg/ubuTuMb", featured: !1 }, { locale: "cs", name: "CZ/SK", website: null, discord: "https://discord.gg/SJyZBjw", featured: !1 }, { locale: null, name: "Indonesia", website: null, discord: "https://discord.gg/uR4DDxJ", featured: !1 }, { locale: "ro", name: "[Oficial] Phasmophobia România", website: null, discord: "https://discord.gg/YdpG3c9", featured: !1 }, { internal_string: "Lithuania", locale: null, name: "Lietuva", website: null, discord: "https://discord.gg/gVJjkuD", featured: !1 }, { internal_string: "Farsi", locale: null, name: "[FA]", website: null, discord: "https://discord.gg/vB6qdm4", featured: !1 }, { internal_string: "Norge", locale: null, name: "Norge", website: null, discord: "https://discord.gg/Uzw9w2B", featured: !1 }, { internal_string: "Dansk", locale: null, name: "(Dansk)", website: null, discord: "https://discord.gg/3jW9ARQ", featured: !1 }, { locale: "el", name: "Greek Community", website: null, discord: "https://discord.gg/EFTyRxc", featured: !1 }, { internal_string: "Suomi", locale: null, name: "Suomi", website: null, discord: "https://discord.gg/YxZJTbB", featured: !1 }, { locale: "hu", name: "HUN", website: null, discord: "https://discord.gg/nv5mYCe", featured: !1 }, { internal_string: "Philippines", locale: null, name: "Philippines Official 🇵🇭", website: null, discord: "https://discord.gg/jcAmaUz", featured: !1 }, { internal_string: "Bulgaria", locale: null, name: "Bulgaria", website: null, discord: "https://discord.gg/CvNYj95", featured: !1 }, { internal_string: "Serbian/Bosnian/Croatian", locale: null, name: "[BiH/SRB/HR]", website: null, discord: "https://discord.gg/rxVecjn", featured: !1 }, { internal_string: "Estonia", locale: null, name: "Eesti", website: null, discord: "https://discord.gg/rxVecjn", featured: !1 }] } },
                r = {},
                c = {},
                l = { list: function(e) { return e.communities } }
        },
        379: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "state", (function() { return o })), n.d(t, "mutations", (function() { return r })), n.d(t, "actions", (function() { return c })), n.d(t, "getters", (function() { return l }));
            n(8), n(37), n(88);
            var o = function() { return { active: "Sunny Meadows Mental Institution", list: [{ name: "Sunny Meadows Mental Institution", size: "large" }, { name: "Camp Woodwind", size: "small" }, { name: "Bleasdale Farmhouse", size: "small" }, { name: "Brownstone High School", size: "medium" }, { name: "Edgefield Street House", size: "small" }, { name: "Grafton Farmhouse", size: "small" }, { name: "Ridgeview Road House", size: "small" }, { name: "Tanglewood Street", size: "small" }] } },
                r = { SET: function(e, t) { e.active = t } },
                c = {
                    set: function(e, t) {
                        var n = e.state,
                            o = e.commit;
                        if (!n.list.some((function(e) { return e.name === t }))) throw new Error("Map not found ".concat(t));
                        o("SET", t)
                    }
                },
                l = { getAll: function(e) { return e.list }, getActive: function(e) { return e.list.find((function(t) { return t.name === e.active })) } }
        },
        380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "state", (function() { return m })), n.d(t, "mutations", (function() { return f })), n.d(t, "actions", (function() { return h })), n.d(t, "getters", (function() { return v }));
            n(38), n(50), n(28), n(14), n(17), n(41), n(42), n(33);
            var o = n(82);
            n(8), n(23), n(21), n(61), n(67), n(37), n(88), n(49), n(39);

            function r(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) { if (!e) return; if ("string" == typeof e) return c(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t) }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var i = 0,
                            o = function() {};
                        return { s: o, n: function() { return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] } }, e: function(e) { throw e }, f: o }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var r, l = !0,
                    d = !1;
                return { s: function() { n = n.call(e) }, n: function() { var e = n.next(); return l = e.done, e }, e: function(e) { d = !0, r = e }, f: function() { try { l || null == n.return || n.return() } finally { if (d) throw r } } }
            }

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                return n
            }
            var l = n(381),
                d = function(e) { return !0 === e || !1 === e },
                m = function() { return { evidences: [{ name: "EMFLevel5", selected: !1, excluded: !1, icon: ["fas", "tachometer-alt"], possibleGhosts: 10 }, { name: "SpiritBox", selected: !1, excluded: !1, icon: ["fas", "volume-up"], possibleGhosts: 11 }, { name: "Fingerprints", excluded: !1, selected: !1, icon: ["fas", "hand-paper"], possibleGhosts: 10 }, { name: "GhostOrb", selected: !1, excluded: !1, icon: ["fas", "star"], possibleGhosts: 11 }, { name: "GhostWriting", selected: !1, excluded: !1, icon: ["fas", "book"], possibleGhosts: 10 }, { name: "FreezingTemp", selected: !1, excluded: !1, icon: ["fas", "temperature-low"], possibleGhosts: 11 }, { name: "DOTSProjector", selected: !1, excluded: !1, icon: ["fas", "braille"], possibleGhosts: 10 }], ghosts: [{ type: "Spirit", evidences: ["EMFLevel5", "SpiritBox", "GhostWriting"], possible: !0, note: "", userEliminated: !1 }, { type: "Wraith", evidences: ["EMFLevel5", "SpiritBox", "DOTSProjector"], possible: !0, note: "", userEliminated: !1 }, { type: "Phantom", evidences: ["SpiritBox", "Fingerprints", "DOTSProjector"], possible: !0, note: "", userEliminated: !1 }, { type: "Poltergeist", evidences: ["SpiritBox", "Fingerprints", "GhostWriting"], possible: !0, note: "", userEliminated: !1 }, { type: "Banshee", evidences: ["Fingerprints", "GhostOrb", "DOTSProjector"], possible: !0, note: "", userEliminated: !1 }, { type: "Jinn", evidences: ["EMFLevel5", "Fingerprints", "FreezingTemp"], possible: !0, note: "", userEliminated: !1 }, { type: "Mare", evidences: ["SpiritBox", "GhostOrb", "GhostWriting"], possible: !0, note: "", userEliminated: !1 }, { type: "Revenant", evidences: ["GhostOrb", "GhostWriting", "FreezingTemp"], possible: !0, note: "", userEliminated: !1 }, { type: "Shade", evidences: ["EMFLevel5", "GhostWriting", "FreezingTemp"], possible: !0, note: "", userEliminated: !1 }, { type: "Demon", evidences: ["Fingerprints", "GhostWriting", "FreezingTemp"], possible: !0, note: "", userEliminated: !1 }, { type: "Yurei", evidences: ["GhostOrb", "FreezingTemp", "DOTSProjector"], possible: !0, note: "", userEliminated: !1 }, { type: "Oni", evidences: ["EMFLevel5", "FreezingTemp", "DOTSProjector"], possible: !0, note: "", userEliminated: !1 }, { type: "Hantu", evidences: ["Fingerprints", "GhostOrb", "FreezingTemp"], possible: !0, note: "", userEliminated: !1 }, { type: "Yokai", evidences: ["SpiritBox", "GhostOrb", "DOTSProjector"], possible: !0, note: "", userEliminated: !1 }, { type: "Goryo", evidences: ["EMFLevel5", "Fingerprints", "DOTSProjector"], possible: !0, note: "", userEliminated: !1 }, { type: "Myling", evidences: ["EMFLevel5", "Fingerprints", "GhostWriting"], possible: !0, note: "", userEliminated: !1 }, { type: "Onryo", evidences: ["SpiritBox", "GhostOrb", "FreezingTemp"], possible: !0, note: "", userEliminated: !1 }, { type: "TheTwins", evidences: ["EMFLevel5", "SpiritBox", "FreezingTemp"], possible: !0, note: "", userEliminated: !1 }, { type: "Obake", evidences: ["EMFLevel5", "Fingerprints", "GhostOrb"], possible: !0, note: "", userEliminated: !1 }, { type: "Raiju", evidences: ["EMFLevel5", "GhostOrb", "DOTSProjector"], possible: !0, note: "", userEliminated: !1 }, { type: "TheMimic", evidences: ["SpiritBox", "Fingerprints", "FreezingTemp", "GhostOrb"], possible: !0, note: "", userEliminated: !1 }, { type: "Moroi", evidences: ["SpiritBox", "GhostWriting", "FreezingTemp"], possible: !0, note: "", userEliminated: !1 }, { type: "Deogen", evidences: ["SpiritBox", "GhostWriting", "DOTSProjector"], possible: !0, note: "", userEliminated: !1 }, { type: "Thaye", evidences: ["GhostOrb", "GhostWriting", "DOTSProjector"], possible: !0, note: "", userEliminated: !1 }], objectives: [{ name: "MotionSensor", selected: !1, done: !1 }, { name: "EMFEvidence", selected: !1, done: !1 }, { name: "CapturePhoto", selected: !1, done: !1 }, { name: "BurnSage", selected: !1, done: !1 }, { name: "CrucifixName", selected: !1, done: !1 }, { name: "GhostEventName", selected: !1, done: !1 }, { name: "GhostType", selected: !1, done: !1 }, { name: "Candle", selected: !1, done: !1 }, { name: "Parabolic", selected: !1, done: !1 }, { name: "EscapeGhost", selected: !1, done: !1 }, { name: "HuntSmudge", selected: !1, done: !1 }, { name: "AverageSanity", selected: !1, done: !1 }], selectedGhostFirstName: "", selectedGhostLastName: "", manualGhostName: "", shy: !1, shySet: !1, ghostMaleFirstNames: Object(o.a)(l.malenames), ghostFemaleFirstNames: Object(o.a)(l.femalenames), ghostLastNames: Object(o.a)(l.surnames) } },
                f = {
                    RESET: function(e) { e.objectives.forEach((function(e) { e.done = !1, e.selected = !1 })), e.evidences.forEach((function(t) { t.selected = !1, t.excluded = !1, t.possibleGhosts = e.ghosts.filter((function(e) { return e.evidences.includes(t.name) })).length })), e.ghosts.forEach((function(e) { e.note = "", e.possible = !0, e.userEliminated = !1 })), e.shy = !1, e.shySet = !1, e.selectedGhostFirstName = "", e.selectedGhostLastName = "", e.manualGhostName = "" },
                    TOGGLESHY: function(e) { e.shySet = !0, e.shy = !e.shy },
                    TOGGLESHYSET: function(e) { e.shySet = !e.shySet },
                    SETSHY: function(e, t) { e.shySet = !0, e.shy = !!t },
                    RESETSHY: function(e) { e.shySet = !1, e.shy = !1 },
                    SETGHOSTFIRSTNAME: function(e, t) { e.selectedGhostFirstName = t, e.manualGhostName = "" },
                    SETGHOSTLASTNAME: function(e, t) { e.selectedGhostLastName = t, e.manualGhostName = "" },
                    SETGHOSTMANUALNAME: function(e, t) { e.manualGhostName = t, e.selectedGhostFirstName = "", e.selectedGhostLastName = "" },
                    TOGGLEOBJECTIVEDONE: function(e, t) {
                        var n = e.objectives.find((function(e) { return e.name === t }));
                        if (!n) throw new Error("Objective not found!");
                        n.done = !n.done
                    },
                    TOGGLEOBJECTIVESELECTED: function(e, t) {
                        var n = e.objectives.find((function(e) { return e.name === t }));
                        if (!n) throw new Error("Objective not found!");
                        n.selected = !n.selected
                    },
                    SETEVIDENCE: function(e, t) {
                        var n = t.evidenceName,
                            o = t.selected,
                            r = t.excluded;
                        if (void 0 === n || void 0 === o || void 0 === r || !d(o) || !d(r)) throw new Error("setEvidence called with invalid or missing values.");
                        var c = e.evidences.find((function(e) { return e.name === n }));
                        if (!c) throw new Error("Evidence not found ".concat(n));
                        if (!0 === o && !0 === r) throw new Error("Tried to set an invalid state: selected and excluded cannot be used together.");
                        if (c.selected !== o || c.excluded !== r) {
                            c.selected = o, c.excluded = r;
                            var l = e.evidences.filter((function(e) { return e.selected })),
                                m = e.evidences.filter((function(e) { return e.excluded }));
                            e.ghosts.forEach((function(e) { 0 === l.length && 0 === m.length || l.every((function(t) { return e.evidences.includes(t.name) })) && !m.some((function(t) { return e.evidences.includes(t.name) })) ? e.possible = !0 : e.possible = !1 })), e.evidences.every((function(e) { return !e.selected && !e.excluded })) ? e.evidences.forEach((function(t) { t.possibleGhosts = e.ghosts.filter((function(e) { return e.evidences.includes(t.name) })).length })) : e.evidences.forEach((function(t) { t.possibleGhosts = e.ghosts.filter((function(e) { return e.possible && e.evidences.includes(t.name) })).length }))
                        }
                    },
                    SETGHOSTELIMINATED: function(e, t) {
                        var n = t.type,
                            o = t.eliminated,
                            r = e.ghosts.find((function(e) { return e.type === n }));
                        if (!r) throw new Error('Could not find ghost "'.concat(n, '"!'));
                        r.userEliminated = o
                    },
                    SETGHOSTNOTE: function(e, t) {
                        var n = t.type,
                            o = t.note,
                            r = e.ghosts.find((function(e) { return e.type === n }));
                        if (!r) throw new Error('Could not find ghost "'.concat(n, '"!'));
                        r.note = o
                    }
                },
                h = {
                    reset: function(e) {
                        var t = e.dispatch,
                            n = e.commit,
                            o = e.state;
                        n("RESET"), t("timer/reset", null, { root: !0 }), t("localEvidencesUpdated"), t("localObjectivesUpdated"), t("localShyUpdated"), t("localShySetUpdated"), t("localSelectGhostNameUpdated"), t("localManualGhostNameUpdated");
                        var c, l = r(o.ghosts);
                        try {
                            for (l.s(); !(c = l.n()).done;) {
                                var d = c.value.type;
                                t("localSetGhostElimination", { type: d, eliminated: !1 }), t("localGhostNoteUpdated", { type: d, note: "" })
                            }
                        } catch (e) { l.e(e) } finally { l.f() }
                    },
                    setShy: function(e, t) {
                        var n = e.commit,
                            o = e.dispatch;
                        n("SETSHY", t), o("localShyUpdated")
                    },
                    resetShy: function(e) {
                        var t = e.commit,
                            n = e.dispatch;
                        t("RESETSHY"), n("localShyUpdated"), n("localShySetUpdated")
                    },
                    setEvidence: function(e, t) {
                        var n = e.state,
                            o = e.dispatch;
                        (0, e.commit)("SETEVIDENCE", { evidenceName: t.evidenceName, selected: t.selected, excluded: t.excluded }), 1 === n.ghosts.filter((function(e) { return e.possible })).length && o("ui/setActive", "ghosts", { root: !0 }), o("localEvidencesUpdated")
                    },
                    setGhostEliminated: function(e, t) {
                        var n = e.commit,
                            o = (e.state, e.dispatch);
                        n("SETGHOSTELIMINATED", t), o("localSetGhostElimination", t)
                    },
                    setGhostNote: function(e, t) {
                        var n = e.commit,
                            o = (e.state, e.dispatch);
                        n("SETGHOSTNOTE", t), o("localGhostNoteUpdated", t)
                    },
                    toggleObjectiveDone: function(e, t) {
                        var n = e.commit,
                            o = e.state,
                            r = e.dispatch;
                        if (!o.objectives.some((function(e) { return e.name === t }))) throw new Error("Objective not found!");
                        n("TOGGLEOBJECTIVEDONE", t), r("localObjectivesUpdated")
                    },
                    setObjectiveSelected: function(e, t) {
                        var n = e.commit,
                            o = e.state,
                            r = e.dispatch,
                            c = t.objectiveName,
                            l = t.newValue;
                        if ("boolean" != typeof l) throw new Error("Expected boolean.");
                        var d = o.objectives.filter((function(e) { return e.name === c }));
                        if (!d) throw new Error("Objective not found!");
                        d.selected !== l && n("TOGGLEOBJECTIVESELECTED", c), r("localObjectivesUpdated")
                    },
                    toggleObjectiveSelected: function(e, t) {
                        var n = e.commit,
                            o = e.state,
                            r = e.dispatch;
                        if (!o.objectives.some((function(e) { return e.name === t }))) throw new Error("Objective not found!");
                        n("TOGGLEOBJECTIVESELECTED", t), r("localObjectivesUpdated")
                    },
                    toggleShy: function(e) {
                        var t = e.commit,
                            n = e.dispatch;
                        t("TOGGLESHY"), n("localShyUpdated"), n("localShySetUpdated")
                    },
                    setGhostFirstName: function(e, t) {
                        var n = e.commit,
                            o = e.dispatch;
                        n("SETGHOSTFIRSTNAME", t), o("localSelectGhostNameUpdated")
                    },
                    setGhostLastName: function(e, t) {
                        var n = e.commit,
                            o = e.dispatch;
                        n("SETGHOSTLASTNAME", t), o("localSelectGhostNameUpdated")
                    },
                    setGhostManualName: function(e, t) {
                        var n = e.commit,
                            o = e.dispatch;
                        n("SETGHOSTMANUALNAME", t), o("localManualGhostNameUpdated")
                    },
                    clearGhostName: function(e) {
                        var t = e.commit,
                            n = e.dispatch;
                        t("SETGHOSTMANUALNAME", ""), n("localManualGhostNameUpdated")
                    },
                    remoteSetEvidences: function(e, t) {
                        var n = e.commit;
                        t.forEach((function(e) { n("SETEVIDENCE", { evidenceName: e.name, selected: e.selected, excluded: e.excluded }) }))
                    },
                    remoteSetGhostElimination: function(e, t) {
                        (0, e.commit)("SETGHOSTELIMINATED", { eliminated: t.eliminated, type: t.type })
                    },
                    remoteSetGhostNote: function(e, t) {
                        (0, e.commit)("SETGHOSTNOTE", { note: t.note, type: t.type })
                    },
                    remoteSetObjectives: function(e, t) {
                        var n = e.state,
                            o = e.commit;
                        t.forEach((function(e) {
                            var t = n.objectives.find((function(t) { return t.name === e.name }));
                            if (!t) throw new Error("Objective not found!");
                            t.selected !== e.selected && o("TOGGLEOBJECTIVESELECTED", e.name), t.done !== e.completed && o("TOGGLEOBJECTIVEDONE", e.name)
                        }))
                    },
                    remoteSetShy: function(e, t) {
                        var n = e.state,
                            o = e.commit;
                        n.shy !== t && o("TOGGLESHY")
                    },
                    remoteSetShySet: function(e, t) { var n = e.commit;!1 === t && n("RESETSHY") },
                    remoteSetSelectedGhostName: function(e, t) {
                        var n = e.commit;
                        n("SETGHOSTFIRSTNAME", t.firstName), n("SETGHOSTLASTNAME", t.lastName)
                    },
                    remoteSetManualGhostName: function(e, t) {
                        (0, e.commit)("SETGHOSTMANUALNAME", t)
                    },
                    localEvidencesUpdated: function(e) {
                        (0, e.dispatch)("sync/emitLocalEvent", { key: "matrix_evidences", value: e.state.evidences.map((function(e) { return { name: e.name, selected: e.selected, excluded: e.excluded } })) }, { root: !0 })
                    },
                    localSetGhostElimination: function(e, t) {
                        var n = e.dispatch;
                        e.state;
                        n("sync/emitLocalEvent", { key: "matrix_ghostElimination", value: { eliminated: !!t.eliminated, type: t.type } }, { root: !0 })
                    },
                    localGhostNoteUpdated: function(e, t) {
                        var n = e.dispatch;
                        e.state;
                        n("sync/emitLocalEvent", { key: "matrix_ghostNote", value: { note: t.note, type: t.type } }, { root: !0 })
                    },
                    localObjectivesUpdated: function(e) {
                        (0, e.dispatch)("sync/emitLocalEvent", { key: "matrix_objectives", value: e.state.objectives.map((function(e) { return { name: e.name, selected: e.selected, completed: e.done } })) }, { root: !0 })
                    },
                    localShyUpdated: function(e) {
                        (0, e.dispatch)("sync/emitLocalEvent", { key: "matrix_shy", value: e.state.shy }, { root: !0 })
                    },
                    localShySetUpdated: function(e) {
                        (0, e.dispatch)("sync/emitLocalEvent", { key: "matrix_shySet", value: e.state.shySet }, { root: !0 })
                    },
                    localSelectGhostNameUpdated: function(e) {
                        var t = e.dispatch,
                            n = e.state;
                        t("sync/emitLocalEvent", { key: "matrix_selectedGhostName", value: { firstName: n.selectedGhostFirstName, lastName: n.selectedGhostLastName } }, { root: !0 })
                    },
                    localManualGhostNameUpdated: function(e) {
                        (0, e.dispatch)("sync/emitLocalEvent", { key: "matrix_manualGhostName", value: e.state.manualGhostName }, { root: !0 })
                    }
                },
                v = { getEvidences: function(e) { return e.evidences }, getGhosts: function(e) { return e.ghosts }, getObjectives: function(e) { return e.objectives }, getGhostNames: function(e) { return { males: e.ghostMaleFirstNames, females: e.ghostFemaleFirstNames, last: e.ghostLastNames } }, getGhostName: function(e) { return e.selectedGhostFirstName || e.selectedGhostLastName ? "".concat(e.selectedGhostFirstName, " ").concat(e.selectedGhostLastName) : e.manualGhostName ? e.manualGhostName : "" }, getManualGhostName: function(e) { return e.manualGhostName }, getGhostSelectedName: function(e) { return { firstName: e.selectedGhostFirstName, lastName: e.selectedGhostLastName } }, isShy: function(e) { return e.shy }, isShySet: function(e) { return e.shySet } }
        },
        381: function(e) { e.exports = JSON.parse('{"malenames":["Alex","Amit","Andrew","Anthony","Benjamin","Billy","Bradley","Brenden","Brian","Carlos","Charles","Christopher","Corey","Daniel","Dave","David","Donald","Edward","Eric","Gary","George","Grant","Gregory","Harold","Jack","James","Jan","Jason","Jay","Jerry","John","Joseph","Justin","Keith","Kenneth","Kenny","Kevin","Kyle","Larry","Leslie","Luke","Mark","Michael","Paul","Peter","Raymond","Richard","Robert","Ronald","Russell","Steven","Thomas","Ted","Tim","Walter","William"],"femalenames":["Ann","April","Barbara","Becky","Betty","Carla","Carol","Catiana","Cora","Donna","Doris","Dorothy","Edie","Elizabeth","Ella","Ellen","Emily","Emma","Eva","Georgia","Gloria","Helen","Holly","Jane","Jennifer","Jennise","Jessica","Jo","Josefine","Judy","Julie","Karen","Kelly","Kim","Leslie","Linda","Lisa","Livy","Lori","Lucy","Marcia","Margaret","Maria","Marie","Mary","Megan","Michelle","Nancy","Nellie","Patricia","Robin","Rose","Ruth","Sandra","Sarah","Shannon","Sharne","Shelly","Sophie","Stacey","Susan"],"surnames":["Alexander","Anderson","Bailey","Baker","Barber","Barton","Bellfield","Birch","Bishop","Bowen","Brock","Brooks","Brown","Buckley","Carey","Carter","Clark","Clarke","Cordero","Corrigan","Davis","Dexter","Dixon","Doe","Douglas","Dyer","Elliott","Emmett","Everly","Gacy","Garcia","Gayton","Hall","Hans","Harris","Hill","Holland","Holmes","Huntley","Jackson","Johnson","Jones","Kemper","Knight","Kraft","Kray","Lancaster","Lavender","Lee","Lewis","Manson","Marsh","Martin","Martinez","Maudsley","Miller","Mills","Moore","Myers","Nilsen","Norris","Pettit","Ramirez","Rhoades","Roberts","Robinson","Rook","Roswell","Schelin","Shawcross","Shipman","Skinner","Smith","Stevens","Straffen","Sweeney","Taylor","Thomas","Thompson","Todd","Walker","Watts","West","White","Williams","Wilson","Winter","Wright","Young"]}') },
        382: function(e, t) {},
        383: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "state", (function() { return o })), n.d(t, "mutations", (function() { return r })), n.d(t, "actions", (function() { return c })), n.d(t, "getters", (function() { return l }));
            var o = function() { return { sessionState: "offline", isInRoom: !1, isLoggedIn: !1, roomId: null, eventsRegistered: !1, lastError: null } },
                r = {
                    NOTINROOM: function(e) {
                        if (!e.isInRoom) throw new Error("Not in a room");
                        e.roomId = null, e.isInRoom = !1
                    },
                    JOINEDROOM: function(e, t) {
                        if (e.isInRoom) throw new Error("Already in a room");
                        e.roomId = t, e.isInRoom = !0
                    },
                    REGISTERALLEVENTS: function(e) { e.eventsRegistered = !0 },
                    SETEVENTSREGISTERED: function(e) { e.eventsRegistered = !0 },
                    CONNECT: function(e) { e.sessionState = "online" },
                    DISCONNECT: function(e) { e.sessionState = "offline" },
                    CONNECTIONPROBLEMDETECTED: function(e) { e.sessionState = "connecting" },
                    SETLASTERROR: function(e, t) { e.lastError = t }
                },
                c = {
                    emitLocalEvent: function(e, t) { e.state.isInRoom && this.$socket.emit(t.key, t.value, (function(e) {})) },
                    ensureEventsRegistered: function(e) {
                        var t = e.state,
                            n = e.commit,
                            o = e.dispatch;
                        !0 !== t.eventsRegistered && (this.$socket.on("map", (function(e) { o("ui/remoteSetActiveMap", e, { root: !0 }) })), this.$socket.on("timer_reset", (function(e) { o("timer/remoteReset", e, { root: !0 }) })), this.$socket.on("timer_start", (function(e) { o("timer/remoteStart", e, { root: !0 }) })), this.$socket.on("timer_pause", (function(e) { o("timer/remotePause", e, { root: !0 }) })), this.$socket.on("matrix_shy", (function(e) { o("matrix/remoteSetShy", e, { root: !0 }) })), this.$socket.on("matrix_shySet", (function(e) { o("matrix/remoteSetShySet", e, { root: !0 }) })), this.$socket.on("matrix_selectedGhostName", (function(e) { o("matrix/remoteSetSelectedGhostName", e, { root: !0 }) })), this.$socket.on("matrix_manualGhostName", (function(e) { o("matrix/remoteSetManualGhostName", e, { root: !0 }) })), this.$socket.on("matrix_evidences", (function(e) { o("matrix/remoteSetEvidences", e, { root: !0 }) })), this.$socket.on("matrix_ghostElimination", (function(e) { o("matrix/remoteSetGhostElimination", e, { root: !0 }) })), this.$socket.on("matrix_ghostNote", (function(e) { o("matrix/remoteSetGhostNote", e, { root: !0 }) })), this.$socket.on("matrix_objectives", (function(e) { o("matrix/remoteSetObjectives", e, { root: !0 }) })), this.$socket.on("connect", (function(data) { n("CONNECT"), o("rejoinRoom") })), this.$socket.on("reconnect", (function(e) { n("CONNECT"), o("rejoinRoom") })), this.$socket.on("reconnect_attempt", (function(e) { n("CONNECTIONPROBLEMDETECTED") })), this.$socket.on("disconnect", (function(e) { n("io server disconnect" !== e && "io client disconnect" !== e ? "CONNECTIONPROBLEMDETECTED" : "DISCONNECT") })), this.$socket.on("connect_error", (function() { n("DISCONNECT") })), n("SETEVENTSREGISTERED"), this.$socket.connected && n("CONNECT"))
                    },
                    createRoom: function(e) {
                        var t = e.state,
                            n = e.dispatch,
                            o = e.commit;
                        if (n("ensureEventsRegistered"), t.isInRoom) throw new Error("Already in a room");
                        this.$socket.connected || this.$socket.open(), this.$socket.emit("create room", {}, (function(e) { "success" === e.status && o("JOINEDROOM", e.roomId) }))
                    },
                    joinRoom: function(e, t) {
                        var n = e.state,
                            o = e.commit;
                        if ((0, e.dispatch)("ensureEventsRegistered"), n.isInRoom) throw new Error("Already in a room");
                        this.$socket.connected || this.$socket.open(), this.$socket.emit("join room", t, (function(e) { "success" === e.status ? o("JOINEDROOM", e.roomId) : o("SETLASTERROR", "An error has occurred trying to join the specified room. Please check the room code and try again.") }))
                    },
                    rejoinRoom: function(e) {
                        var t = e.state,
                            n = e.commit;
                        t.isInRoom && this.$socket.emit("join room", t.roomId, (function(e) { "success" !== e.status && n("NOTINROOM") }))
                    }
                },
                l = { getSessionState: function(e) { return e.sessionState }, getIsInRoom: function(e) { return e.isInRoom }, getIsLoggedIn: function(e) { return e.isLoggedIn }, getRoomId: function(e) { return e.roomId }, getLastError: function(e) { return e.lastError } }
        },
        384: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "state", (function() { return o })), n.d(t, "mutations", (function() { return c })), n.d(t, "actions", (function() { return l })), n.d(t, "getters", (function() { return d }));
            n(39), n(385), n(8), n(66), n(89);
            var o = function() { return { shown: !1, active: !1, setuptime: 0, totalOffset: 0, startedat: 0, setuptimeleft: "", timeElapsed: "", intervalRef: null, chimeState: 0 } },
                r = function(e) {
                    var t = Math.floor(e / 1e3 / 60),
                        n = Math.floor((e - 1e3 * t * 60) / 1e3);
                    return "".concat(t.toString().padStart(1, 0), ":").concat(n.toString().padStart(2, 0))
                },
                c = {
                    RESTART: function(e) { e.startedat = Date.now(), e.totalOffset = 0, e.setuptime > 0 && (e.chimeState = 2) },
                    START: function(e, t) {
                        var n = t.setuptime,
                            o = t.intervalRef,
                            c = t.offset,
                            l = void 0 === c ? 0 : c;
                        e.shown = !0, e.active = !0, e.setuptime = n, e.startedat = Date.now(), e.setuptimeleft = r(e.setuptime), e.timeElapsed = r(0), e.totalOffset = l, n > 0 && (e.chimeState = 2), e.intervalRef = o
                    },
                    TOGGLEACTIVE: function(e) {
                        if (!1 === e.active) e.startedat = Date.now(), e.active = !0, e.shown = !0;
                        else {
                            var t = Date.now();
                            e.active = !1, e.totalOffset = e.totalOffset + (t - e.startedat)
                        }
                    },
                    UPDATE: function(e) {
                        if (e.active) {
                            var t = Date.now(),
                                n = e.startedat + 1e3 * e.setuptime - t - e.totalOffset;
                            n <= 0 && (n = 0);
                            var o = r(n);
                            o !== e.setuptimeleft && (e.setuptimeleft = o), e.timeElapsed = r(e.totalOffset + (t - e.startedat)), 2 === e.chimeState && "0:00" === o && (e.chimeState = 1)
                        }
                    },
                    RESET: function(e) { e.shown = !1, e.active = !1, clearInterval(e.intervalRef), e.intervalRef = null, e.setuptime = 0, e.startedat = 0, e.setuptimeleft = 0, e.timeElapsed = 0, e.chimeState = 0, e.totalOffset = 0 },
                    CLEARCHIME: function(e) { e.chimeState = 0 },
                    REMOTESET: function(e, t) { e.shown = t.shown, e.active = t.active, e.setuptime = t.setuptime, e.totalOffset = t.totalOffset, e.chimeState = t.chimeState }
                },
                l = {
                    startNovice: function(e) {
                        (0, e.dispatch)("start", { setuptime: 300, offset: 0, isRemote: !1 })
                    },
                    startIntermediate: function(e) {
                        (0, e.dispatch)("start", { setuptime: 120, offset: 0, isRemote: !1 })
                    },
                    startProfessional: function(e) {
                        (0, e.dispatch)("start", { setuptime: 0, offset: 0, isRemote: !1 })
                    },
                    start: function(e, t) {
                        var n = e.commit,
                            o = e.dispatch;
                        n("RESET");
                        var r = setInterval((function() { n("UPDATE") }), 200);
                        n("START", { setuptime: t.setuptime, intervalRef: r, offset: t.offset }), t.isRemote || o("sync/emitLocalEvent", { key: "timer_start", value: { setuptime: t.setuptime, offset: t.offset } }, { root: !0 })
                    },
                    restart: function(e) {
                        var t = e.state,
                            n = e.commit,
                            o = e.dispatch,
                            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        n("RESTART"), r || (o("sync/emitLocalEvent", { key: "timer_reset", value: {} }, { root: !0 }), o("sync/emitLocalEvent", { key: "timer_start", value: { setuptime: t.setuptime, offset: 0 } }, { root: !0 }))
                    },
                    reset: function(e) {
                        var t = e.commit,
                            n = e.dispatch,
                            o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        t("RESET"), o || n("sync/emitLocalEvent", { key: "timer_reset", value: {} }, { root: !0 })
                    },
                    clearChime: function(e) {
                        (0, e.commit)("CLEARCHIME")
                    },
                    toggleActive: function(e) {
                        var t = e.state,
                            n = e.commit,
                            o = e.dispatch,
                            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        n("TOGGLEACTIVE"), r || (t.active ? o("sync/emitLocalEvent", { key: "timer_start", value: { setuptime: t.setuptime, offset: t.totalOffset } }, { root: !0 }) : o("sync/emitLocalEvent", { key: "timer_pause", value: {} }, { root: !0 }))
                    },
                    remoteReset: function(e) {
                        (0, e.dispatch)("reset", !0)
                    },
                    remoteStart: function(e, t) {
                        (0, e.dispatch)("start", { setuptime: t.setuptime, offset: t.offset, isRemote: !0 })
                    },
                    remotePause: function(e) {
                        var t = e.state,
                            n = e.dispatch;
                        !0 === t.active && n("toggleActive", !0)
                    }
                },
                d = { isShown: function(e) { return e.shown }, isActive: function(e) { return e.active }, isChimeArmed: function(e) { return 2 === e.chimeState }, isChimeTriggered: function(e) { return 1 === e.chimeState }, getSetuptimeLeft: function(e) { return e.setuptimeleft }, getTimeElapsed: function(e) { return e.timeElapsed } }
        },
        388: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "state", (function() { return o })), n.d(t, "mutations", (function() { return r })), n.d(t, "actions", (function() { return c })), n.d(t, "getters", (function() { return l }));
            var o = function() { return { activeTab: "ghosts", activeMap: "sunnymeadows", availableMaps: [{ key: "sunnymeadows", name: "Sunny Meadows Mental Institution" }, { key: "woodwind", name: "Camp Woodwind" }, { key: "bleasdale", name: "Bleasdale Farmhouse" }, { key: "brownstone", name: "Brownstone High school" }, { key: "edgefield", name: "Edgefield Street House" }, { key: "grafton", name: "Grafton Farmhouse" }, { key: "prison", name: "Prison" }, { key: "ridgeview", name: "Ridgeview Road House" }, { key: "tanglewood", name: "Tanglewood Street House" }, { key: "willow", name: "Willow Street House" }, { key: "maplelodge", name: "Maple Lodge Campsite" }] } },
                r = { RESET: function(e) { e.activeTab = "ghosts", e.activeMap = "sunnymeadows" }, SETACTIVE: function(e, t) { e.activeTab = t }, SETACTIVEMAP: function(e, t) { e.activeMap = t } },
                c = {
                    setActive: function(e, t) {
                        (0, e.commit)("SETACTIVE", t)
                    },
                    setActiveMap: function(e, t) {
                        var n = e.state,
                            o = e.commit,
                            r = e.dispatch,
                            c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        t !== n.activeMap && (o("SETACTIVEMAP", t), c || r("sync/emitLocalEvent", { key: "map", value: t }, { root: !0 }))
                    },
                    remoteSetActiveMap: function(e, t) {
                        (0, e.dispatch)("setActiveMap", t, !0)
                    },
                    reset: function(e) {
                        var t = e.commit,
                            n = e.dispatch;
                        t("RESET"), n("sync/emitLocalEvent", { key: "map", value: "sunnymeadows" }, { root: !0 })
                    }
                },
                l = { activeTab: function(e) { return e.activeTab }, activeMap: function(e) { return e.activeMap }, availableMaps: function(e) { return e.availableMaps } }
        },
        389: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "state", (function() { return o })), n.d(t, "mutations", (function() { return r })), n.d(t, "actions", (function() { return c })), n.d(t, "getters", (function() { return l }));
            var o = function() { return { userpreferences: { closeSetupWindowOnTimerStart: !0, playchimeonsetuptimercompleted: !0 } } },
                r = {
                    CLOSESETUPWINDOWONTIMERSTART: function(e, t) {
                        if ("boolean" != typeof t) throw new Error("Invalid type for newValue");
                        e.userpreferences.closeSetupWindowOnTimerStart = t
                    },
                    PLAYCHIMEONSETUPTIMERCOMPLETED: function(e, t) {
                        if ("boolean" != typeof t) throw new Error("Invalid type for newValue");
                        e.userpreferences.playchimeonsetuptimercompleted = t
                    }
                },
                c = {
                    setCloseSetupWindowOnTimerStart: function(e, t) {
                        (0, e.commit)("CLOSESETUPWINDOWONTIMERSTART", t)
                    },
                    setPlayChimeOnSetupTimerCompleted: function(e, t) {
                        (0, e.commit)("PLAYCHIMEONSETUPTIMERCOMPLETED", t)
                    }
                },
                l = { closeSetupWindowOnTimerStart: function(e) { return e.userpreferences.closeSetupWindowOnTimerStart }, playChimeOnSetupTimerCompleted: function(e) { return e.userpreferences.playchimeonsetuptimercompleted } }
        },
        415: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n(422),
                r = n(423),
                c = n(424),
                l = n(421),
                d = { components: { BDropdownItem: o.a, BNavItemDropdown: r.a, BDropdownDivider: c.a, BDropdownText: l.a }, props: { iconOnly: { type: Boolean, default: !1 } } },
                m = n(59),
                component = Object(m.a)(d, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("b-nav-item-dropdown", { staticClass: "fix-outline language-scroll", attrs: { right: "", "no-caret": e.iconOnly }, scopedSlots: e._u([{ key: "button-content", fn: function() { return [e.iconOnly ? e._e() : n("span", [e._v("Language")]), e._v(" "), e.iconOnly ? n("span", [n("font-awesome-icon", { attrs: { size: "lg", icon: ["fas", "flag"] } })], 1) : e._e()] }, proxy: !0 }]) }, [e._v(" "), e._l(this.$i18n.locales.filter((function(e) { return !1 === e.inprogress && !1 === e.incomplete })).sort(), (function(t) { return n("b-dropdown-item", { key: t.code, attrs: { to: e.switchLocalePath(t.code) } }, [e._v("\n    " + e._s(t.name) + "\n  ")]) })), e._v(" "), this.$i18n.locales.filter((function(e) { return !0 === e.inprogress && !1 === e.incomplete })).length > 0 ? n("b-dropdown-divider") : e._e(), e._v(" "), this.$i18n.locales.filter((function(e) { return !0 === e.inprogress && !1 === e.incomplete })).length > 0 ? n("b-dropdown-text", [e._v(e._s(e.$t("navbar.translationinprogress")))]) : e._e(), e._v(" "), this.$i18n.locales.filter((function(e) { return !0 === e.inprogress && !1 === e.incomplete })).length > 0 ? n("b-dropdown-item", { attrs: { href: "https://discord.gg/wFJzd7a2FA" } }, [e._v("\n    Discord!\n  ")]) : e._e(), e._v(" "), e._l(this.$i18n.locales.filter((function(e) { return !0 === e.inprogress && !1 === e.incomplete })).sort(), (function(t) { return n("b-dropdown-item", { key: t.code, attrs: { to: e.switchLocalePath(t.code) } }, [e._v("\n    " + e._s(t.name) + "\n  ")]) })), e._v(" "), n("b-dropdown-divider"), e._v(" "), n("b-dropdown-text", [e._v(e._s(e.$t("navbar.translationhelpneeded")))]), e._v(" "), n("b-dropdown-item", { attrs: { href: "https://discord.gg/wFJzd7a2FA" } }, [e._v("\n    Discord!\n  ")]), e._v(" "), e._l(this.$i18n.locales.filter((function(e) { return !1 === e.inprogress && !0 === e.incomplete })).sort(), (function(t) { return n("b-dropdown-item", { key: t.code, attrs: { to: e.switchLocalePath(t.code) } }, [e._v("\n    " + e._s(t.name) + "\n  ")]) }))], 2)
                }), [], !1, null, null, null);
            t.default = component.exports
        }
    },
    [
        [310, 89, 13, 90]
    ]
]);