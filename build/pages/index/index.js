export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createPageHandler = function() {
            return (()=>{
                var __webpack_modules__ = {};
                var __webpack_module_cache__ = {};
                function __webpack_require__(moduleId) {
                    var cachedModule = __webpack_module_cache__[moduleId];
                    if (void 0 !== cachedModule) return cachedModule.exports;
                    var module = __webpack_module_cache__[moduleId] = {
                        exports: {}
                    };
                    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                    return module.exports;
                }
                (()=>{
                    __webpack_require__.rv = ()=>"1.7.12";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.7.12";
                })();
                var $app_style$ = [
                    [
                        [
                            [
                                0,
                                "page"
                            ]
                        ],
                        {
                            width: "480px",
                            height: "480px",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#000000"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "title"
                            ]
                        ],
                        {
                            fontSize: "48px",
                            color: "#ffffff",
                            marginBottom: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "sub"
                            ]
                        ],
                        {
                            fontSize: "24px",
                            color: "#666666",
                            marginBottom: "50px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn"
                            ]
                        ],
                        {
                            width: "240px",
                            height: "76px",
                            borderRadius: "38px",
                            backgroundColor: "#1e90ff",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "20px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn-text"
                            ]
                        ],
                        {
                            fontSize: "32px",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn2"
                            ]
                        ],
                        {
                            width: "240px",
                            height: "56px",
                            borderRadius: "28px",
                            backgroundColor: "#333333",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "16px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn2-text"
                            ]
                        ],
                        {
                            fontSize: "26px",
                            color: "#cccccc"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn3"
                            ]
                        ],
                        {
                            width: "240px",
                            height: "56px",
                            borderRadius: "28px",
                            backgroundColor: "#2a2a3e",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn3-text"
                            ]
                        ],
                        {
                            fontSize: "26px",
                            color: "#cccccc"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "panel"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "480px",
                            height: "480px",
                            backgroundColor: "rgba(0, 0, 0, 0.85)",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 20
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "panel-box"
                            ]
                        ],
                        {
                            width: "340px",
                            backgroundColor: "#1a1a2e",
                            borderRadius: "20px",
                            flexDirection: "column",
                            alignItems: "center",
                            paddingTop: "30px",
                            paddingBottom: "30px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "panel-title"
                            ]
                        ],
                        {
                            fontSize: "28px",
                            color: "#ffffff",
                            marginBottom: "24px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "opt"
                            ]
                        ],
                        {
                            width: "260px",
                            height: "56px",
                            borderRadius: "28px",
                            backgroundColor: "#2a2a3e",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "14px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "opt-text"
                            ]
                        ],
                        {
                            fontSize: "24px",
                            color: "#888888"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "opt-active"
                            ]
                        ],
                        {
                            color: "#00ccff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "close-btn"
                            ]
                        ],
                        {
                            width: "260px",
                            height: "50px",
                            borderRadius: "25px",
                            backgroundColor: "#444444",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "close-text"
                            ]
                        ],
                        {
                            fontSize: "22px",
                            color: "#ffffff"
                        }
                    ]
                ];
                var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.default = void 0;
                    var _system = _interopRequireDefault($app_require$1("@app-module/system.router"));
                    var _system2 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        private: {
                            controlMode: 0,
                            showPanel: false
                        },
                        onInit () {
                            var self = this;
                            _system2.default.get({
                                key: 'controlMode',
                                success: function(data) {
                                    self.controlMode = parseInt(data) || 0;
                                }
                            });
                        },
                        go () {
                            _system.default.push({
                                uri: "/pages/level",
                                params: {
                                    controlMode: this.controlMode
                                }
                            });
                        },
                        goRecords () {
                            _system.default.push({
                                uri: "/pages/record"
                            });
                        },
                        onSwipe (e) {
                            if ('left' === e.direction || 'down' === e.direction) this.go();
                        },
                        showSettings () {
                            this.showPanel = true;
                        },
                        hidePanel () {
                            this.showPanel = false;
                        },
                        stopProp () {},
                        setGyro () {
                            this.controlMode = 0;
                            _system2.default.set({
                                key: 'controlMode',
                                data: '0'
                            });
                        },
                        setTouch () {
                            this.controlMode = 1;
                            _system2.default.set({
                                key: 'controlMode',
                                data: '1'
                            });
                        }
                    };
                    const moduleOwn = exports.default || module.exports;
                    const accessors = [
                        'public',
                        'protected',
                        'private'
                    ];
                    if (moduleOwn.data && accessors.some(function(acc) {
                        return moduleOwn[acc];
                    })) throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
                    if (!moduleOwn.data) {
                        moduleOwn.data = {};
                        moduleOwn._descriptor = {};
                        accessors.forEach(function(acc) {
                            const accType = typeof moduleOwn[acc];
                            if ('object' === accType) {
                                moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
                                for(const name in moduleOwn[acc])moduleOwn._descriptor[name] = {
                                    access: acc
                                };
                            } else if ('function' === accType) console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
                        });
                    }
                };
                var $app_template$ = function(vm) {
                    const _vm_ = vm || this;
                    return aiot.__ce__("div", {
                        __vm__: _vm_,
                        __opts__: {
                            classList: [
                                "page"
                            ],
                            events: {
                                swipe: function(evt) {
                                    return _vm_.onSwipe(evt);
                                }
                            }
                        }
                    }, [
                        aiot.__ce__("text", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "title"
                                ],
                                value: "小涵打砖块"
                            }
                        }, []),
                        aiot.__ce__("text", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "sub"
                                ],
                                value: "小涵游戏开发"
                            }
                        }, []),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "btn"
                                ],
                                events: {
                                    click: function(evt) {
                                        return _vm_.go(evt);
                                    }
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "btn-text"
                                    ],
                                    value: "开始游戏"
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "btn2"
                                ],
                                events: {
                                    click: function(evt) {
                                        return _vm_.goRecords(evt);
                                    }
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "btn2-text"
                                    ],
                                    value: "最高记录"
                                }
                            }, [])
                        ]),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "btn3"
                                ],
                                events: {
                                    click: function(evt) {
                                        return _vm_.showSettings(evt);
                                    }
                                }
                            }
                        }, [
                            aiot.__ce__("text", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "btn3-text"
                                    ],
                                    value: "设置"
                                }
                            }, [])
                        ]),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.showPanel;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "panel"
                                        ],
                                        events: {
                                            click: function(evt) {
                                                return _vm_.hidePanel(evt);
                                            }
                                        }
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "panel-box"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.stopProp(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "panel-title"
                                                ],
                                                value: "操控方式"
                                            }
                                        }, []),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "opt"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.setGyro(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: function() {
                                                        const $classValue$ = "opt-text " + (0 === _vm_.controlMode ? "opt-active" : "");
                                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                        return $classValue$;
                                                    },
                                                    value: "陀螺仪"
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "opt"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.setTouch(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: function() {
                                                        const $classValue$ = "opt-text " + (1 === _vm_.controlMode ? "opt-active" : "");
                                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                                        return $classValue$;
                                                    },
                                                    value: "触控滑动"
                                                }
                                            }, [])
                                        ]),
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "close-btn"
                                                ],
                                                events: {
                                                    click: function(evt) {
                                                        return _vm_.hidePanel(evt);
                                                    }
                                                }
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "close-text"
                                                    ],
                                                    value: "关闭"
                                                }
                                            }, [])
                                        ])
                                    ])
                                ])
                            ];
                        })
                    ]);
                };
                $app_exports$['entry'] = function($app_exports$) {
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.template = $app_template$;
                    $app_exports$.default.style = $app_style$;
                };
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXGluZGV4XFxpbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL+Wwj+a2teaJk+egluWdly93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8v5bCP5ra15omT56CW5Z2XL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL+Wwj+a2teaJk+egluWdly9zcmMvcGFnZXMvaW5kZXgvaW5kZXgudXgiXSwic291cmNlc0NvbnRlbnQiOlsiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNy4xMlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS43LjEyXCI7IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicGFnZVwiIG9uc3dpcGU9XCJvblN3aXBlXCI+XG4gICAgPHRleHQgY2xhc3M9XCJ0aXRsZVwiPuWwj+a2teaJk+egluWdlzwvdGV4dD5cbiAgICA8dGV4dCBjbGFzcz1cInN1YlwiPuWwj+a2tea4uOaIj+W8gOWPkTwvdGV4dD5cbiAgICA8ZGl2IGNsYXNzPVwiYnRuXCIgb25jbGljaz1cImdvXCI+XG4gICAgICA8dGV4dCBjbGFzcz1cImJ0bi10ZXh0XCI+5byA5aeL5ri45oiPPC90ZXh0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJidG4yXCIgb25jbGljaz1cImdvUmVjb3Jkc1wiPlxuICAgICAgPHRleHQgY2xhc3M9XCJidG4yLXRleHRcIj7mnIDpq5jorrDlvZU8L3RleHQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJ0bjNcIiBvbmNsaWNrPVwic2hvd1NldHRpbmdzXCI+XG4gICAgICA8dGV4dCBjbGFzcz1cImJ0bjMtdGV4dFwiPuiuvue9rjwvdGV4dD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgaWY9XCJ7eyBzaG93UGFuZWwgfX1cIiBjbGFzcz1cInBhbmVsXCIgb25jbGljaz1cImhpZGVQYW5lbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJveFwiIG9uY2xpY2s9XCJzdG9wUHJvcFwiPlxuICAgICAgICA8dGV4dCBjbGFzcz1cInBhbmVsLXRpdGxlXCI+5pON5o6n5pa55byPPC90ZXh0PlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3B0XCIgb25jbGljaz1cInNldEd5cm9cIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cIm9wdC10ZXh0IHt7IGNvbnRyb2xNb2RlID09PSAwID8gJ29wdC1hY3RpdmUnIDogJycgfX1cIj7pmYDonrrku6o8L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3B0XCIgb25jbGljaz1cInNldFRvdWNoXCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJvcHQtdGV4dCB7eyBjb250cm9sTW9kZSA9PT0gMSA/ICdvcHQtYWN0aXZlJyA6ICcnIH19XCI+6Kem5o6n5ruR5YqoPC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlLWJ0blwiIG9uY2xpY2s9XCJoaWRlUGFuZWxcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImNsb3NlLXRleHRcIj7lhbPpl608L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCByb3V0ZXIgZnJvbSBcIkBzeXN0ZW0ucm91dGVyXCJcbmltcG9ydCBzdG9yYWdlIGZyb20gXCJAc3lzdGVtLnN0b3JhZ2VcIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByaXZhdGU6IHtcbiAgICBjb250cm9sTW9kZTogMCxcbiAgICBzaG93UGFuZWw6IGZhbHNlXG4gIH0sXG5cbiAgb25Jbml0KCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHN0b3JhZ2UuZ2V0KHtcbiAgICAgIGtleTogJ2NvbnRyb2xNb2RlJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgc2VsZi5jb250cm9sTW9kZSA9IHBhcnNlSW50KGRhdGEpIHx8IDBcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGdvKCkge1xuICAgIHJvdXRlci5wdXNoKHtcbiAgICAgIHVyaTogXCIvcGFnZXMvbGV2ZWxcIixcbiAgICAgIHBhcmFtczogeyBjb250cm9sTW9kZTogdGhpcy5jb250cm9sTW9kZSB9XG4gICAgfSlcbiAgfSxcblxuICBnb1JlY29yZHMoKSB7XG4gICAgcm91dGVyLnB1c2goeyB1cmk6IFwiL3BhZ2VzL3JlY29yZFwiIH0pXG4gIH0sXG5cbiAgb25Td2lwZShlKSB7XG4gICAgaWYgKGUuZGlyZWN0aW9uID09PSAnbGVmdCcgfHwgZS5kaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgdGhpcy5nbygpXG4gICAgfVxuICB9LFxuXG4gIHNob3dTZXR0aW5ncygpIHtcbiAgICB0aGlzLnNob3dQYW5lbCA9IHRydWVcbiAgfSxcblxuICBoaWRlUGFuZWwoKSB7XG4gICAgdGhpcy5zaG93UGFuZWwgPSBmYWxzZVxuICB9LFxuXG4gIHN0b3BQcm9wKCkge30sXG5cbiAgc2V0R3lybygpIHtcbiAgICB0aGlzLmNvbnRyb2xNb2RlID0gMFxuICAgIHN0b3JhZ2Uuc2V0KHsga2V5OiAnY29udHJvbE1vZGUnLCBkYXRhOiAnMCcgfSlcbiAgfSxcblxuICBzZXRUb3VjaCgpIHtcbiAgICB0aGlzLmNvbnRyb2xNb2RlID0gMVxuICAgIHN0b3JhZ2Uuc2V0KHsga2V5OiAnY29udHJvbE1vZGUnLCBkYXRhOiAnMScgfSlcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5wYWdlIHtcbiAgd2lkdGg6IDQ4MHB4O1xuICBoZWlnaHQ6IDQ4MHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnN1YiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5idG4ge1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogNzZweDtcbiAgYm9yZGVyLXJhZGl1czogMzhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlOTBmZjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5idG4tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5idG4yIHtcbiAgd2lkdGg6IDI0MHB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uYnRuMi10ZXh0IHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuLmJ0bjMge1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogNTZweDtcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmEzZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idG4zLXRleHQge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuXG4ucGFuZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDQ4MHB4O1xuICBoZWlnaHQ6IDQ4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuODUpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMjA7XG59XG5cbi5wYW5lbC1ib3gge1xuICB3aWR0aDogMzQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLnBhbmVsLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLm9wdCB7XG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYTNlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuLm9wdC10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzg4ODg4ODtcbn1cblxuLm9wdC1hY3RpdmUge1xuICBjb2xvcjogIzAwY2NmZjtcbn1cblxuLmNsb3NlLWJ0biB7XG4gIHdpZHRoOiAyNjBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNsb3NlLXRleHQge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuPC9zdHlsZT4iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIl9zeXN0ZW0yIiwiZSIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwicHJpdmF0ZSIsImNvbnRyb2xNb2RlIiwic2hvd1BhbmVsIiwib25Jbml0Iiwic2VsZiIsInN0b3JhZ2UiLCJnZXQiLCJrZXkiLCJzdWNjZXNzIiwiZGF0YSIsInBhcnNlSW50IiwiZ28iLCJyb3V0ZXIiLCJwdXNoIiwidXJpIiwicGFyYW1zIiwiZ29SZWNvcmRzIiwib25Td2lwZSIsImRpcmVjdGlvbiIsInNob3dTZXR0aW5ncyIsImhpZGVQYW5lbCIsInN0b3BQcm9wIiwic2V0R3lybyIsInNldCIsInNldFRvdWNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFBQSxvQkFBb0IsRUFBRSxHQUFHLElBQU87OztvQkNBaENBLG9CQUFvQixJQUFJLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDZ0MzQixJQUFBQyxVQUFBQyx1QkFBQUMsZUFBQTtvQkFDQSxJQUFBQyxXQUFBRix1QkFBQUMsZUFBQTtvQkFBcUMsU0FBQUQsdUJBQUFHLENBQUE7d0JBQUEsT0FBQUEsS0FBQUEsRUFBQUMsVUFBQSxHQUFBRCxJQUFBOzRCQUFBRSxTQUFBRjt3QkFBQTtvQkFBQTtvQkFBQSxJQUFBRyxXQUFBQyxRQUFBRixPQUFBLEdBRXRCO3dCQUNiRyxTQUFTOzRCQUNQQyxhQUFhOzRCQUNiQyxXQUFXO3dCQUNiO3dCQUVBQzs0QkFDRSxJQUFJQyxPQUFPLElBQUk7NEJBQ2ZDLFNBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO2dDQUNWQyxLQUFLO2dDQUNMQyxTQUFTLFNBQVNDLElBQUk7b0NBQ3BCTCxLQUFLSCxXQUFXLEdBQUdTLFNBQVNELFNBQVM7Z0NBQ3ZDOzRCQUNGO3dCQUNGO3dCQUVBRTs0QkFDRUMsUUFBQUEsT0FBTSxDQUFDQyxJQUFJLENBQUM7Z0NBQ1ZDLEtBQUs7Z0NBQ0xDLFFBQVE7b0NBQUVkLGFBQWEsSUFBSSxDQUFDQSxXQUFXO2dDQUFDOzRCQUMxQzt3QkFDRjt3QkFFQWU7NEJBQ0VKLFFBQUFBLE9BQU0sQ0FBQ0MsSUFBSSxDQUFDO2dDQUFFQyxLQUFLOzRCQUFnQjt3QkFDckM7d0JBRUFHLFNBQVF0QixDQUFDOzRCQUNQLElBQUlBLEFBQWdCLFdBQWhCQSxFQUFFdUIsU0FBUyxJQUFldkIsQUFBZ0IsV0FBaEJBLEVBQUV1QixTQUFTLEVBQ3ZDLElBQUksQ0FBQ1AsRUFBRTt3QkFFWDt3QkFFQVE7NEJBQ0UsSUFBSSxDQUFDakIsU0FBUyxHQUFHO3dCQUNuQjt3QkFFQWtCOzRCQUNFLElBQUksQ0FBQ2xCLFNBQVMsR0FBRzt3QkFDbkI7d0JBRUFtQixhQUFZO3dCQUVaQzs0QkFDRSxJQUFJLENBQUNyQixXQUFXLEdBQUc7NEJBQ25CSSxTQUFBQSxPQUFPLENBQUNrQixHQUFHLENBQUM7Z0NBQUVoQixLQUFLO2dDQUFlRSxNQUFNOzRCQUFJO3dCQUM5Qzt3QkFFQWU7NEJBQ0UsSUFBSSxDQUFDdkIsV0FBVyxHQUFHOzRCQUNuQkksU0FBQUEsT0FBTyxDQUFDa0IsR0FBRyxDQUFDO2dDQUFFaEIsS0FBSztnQ0FBZUUsTUFBTTs0QkFBSTt3QkFDOUM7b0JBQ0YifQ==