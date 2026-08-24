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
                            fontSize: "34px",
                            color: "#ffffff",
                            marginBottom: "30px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "list"
                            ]
                        ],
                        {
                            flexDirection: "column",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "lv"
                            ]
                        ],
                        {
                            width: "280px",
                            height: "72px",
                            borderRadius: "36px",
                            backgroundColor: "#1a1a2e",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "16px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "lv-text"
                            ]
                        ],
                        {
                            fontSize: "28px",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "lv-sub"
                            ]
                        ],
                        {
                            fontSize: "16px",
                            color: "#888888",
                            marginTop: "4px"
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
                        protected: {
                            controlMode: 0
                        },
                        private: {
                            bestTime: 0,
                            bestScore: 0
                        },
                        onInit () {
                            var self = this;
                            this.controlMode = parseInt(this.controlMode) || 0;
                            _system2.default.get({
                                key: 'bestTime',
                                success: function(data) {
                                    self.bestTime = parseInt(data) || 0;
                                }
                            });
                            _system2.default.get({
                                key: 'bestScore',
                                success: function(data) {
                                    self.bestScore = parseInt(data) || 0;
                                }
                            });
                        },
                        go (level) {
                            _system.default.push({
                                uri: "/pages/game",
                                params: {
                                    level: level,
                                    controlMode: this.controlMode
                                }
                            });
                        },
                        onSwipe (e) {
                            if ('right' === e.direction) _system.default.back();
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
                                value: "选择模式"
                            }
                        }, []),
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "list"
                                ]
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "lv"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.go(1, evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "lv-text"
                                        ],
                                        value: "挑战模式"
                                    }
                                }, []),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return _vm_.bestTime > 0;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "lv-sub"
                                                ],
                                                value: function() {
                                                    return "最佳时间: " + _vm_.bestTime + "秒";
                                                }
                                            }
                                        }, [])
                                    ];
                                })
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "lv"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.go(2, evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "lv-text"
                                        ],
                                        value: "血量模式"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "lv-sub"
                                        ],
                                        value: "生命与砖块"
                                    }
                                }, [])
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "lv"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.go(3, evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "lv-text"
                                        ],
                                        value: "极限模式"
                                    }
                                }, []),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return _vm_.bestScore > 0;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "lv-sub"
                                                ],
                                                value: function() {
                                                    return "最高分: " + _vm_.bestScore + "分";
                                                }
                                            }
                                        }, [])
                                    ];
                                })
                            ]),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "lv"
                                    ],
                                    events: {
                                        click: function(evt) {
                                            return _vm_.go(4, evt);
                                        }
                                    }
                                }
                            }, [
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "lv-text"
                                        ],
                                        value: "繁殖模式"
                                    }
                                }, []),
                                aiot.__ce__("text", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "lv-sub"
                                        ],
                                        value: "蓝球风暴"
                                    }
                                }, [])
                            ])
                        ])
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXGxldmVsXFxsZXZlbC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL+Wwj+a2teaJk+egluWdly93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3ZlcnNpb24iLCJ3ZWJwYWNrOi8v5bCP5ra15omT56CW5Z2XL3dlYnBhY2svcnVudGltZS9yc3BhY2tfdW5pcXVlX2lkIiwid2VicGFjazovL+Wwj+a2teaJk+egluWdly9zcmMvcGFnZXMvbGV2ZWwvbGV2ZWwudXgiXSwic291cmNlc0NvbnRlbnQiOlsiX193ZWJwYWNrX3JlcXVpcmVfXy5ydiA9ICgpID0+IChcIjEuNy4xMlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18ucnVpZCA9IFwiYnVuZGxlcj1yc3BhY2tAMS43LjEyXCI7IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicGFnZVwiIG9uc3dpcGU9XCJvblN3aXBlXCI+XG4gICAgPHRleHQgY2xhc3M9XCJ0aXRsZVwiPumAieaLqeaooeW8jzwvdGV4dD5cbiAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImx2XCIgb25jbGljaz1cImdvKDEpXCI+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibHYtdGV4dFwiPuaMkeaImOaooeW8jzwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJsdi1zdWJcIiBpZj1cInt7IGJlc3RUaW1lID4gMCB9fVwiPuacgOS9s+aXtumXtDoge3sgYmVzdFRpbWUgfX3np5I8L3RleHQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsdlwiIG9uY2xpY2s9XCJnbygyKVwiPlxuICAgICAgICA8dGV4dCBjbGFzcz1cImx2LXRleHRcIj7ooYDph4/mqKHlvI88L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibHYtc3ViXCI+55Sf5ZG95LiO56CW5Z2XPC90ZXh0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibHZcIiBvbmNsaWNrPVwiZ28oMylcIj5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJsdi10ZXh0XCI+5p6B6ZmQ5qih5byPPC90ZXh0PlxuICAgICAgICA8dGV4dCBjbGFzcz1cImx2LXN1YlwiIGlmPVwie3sgYmVzdFNjb3JlID4gMCB9fVwiPuacgOmrmOWIhjoge3sgYmVzdFNjb3JlIH195YiGPC90ZXh0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibHZcIiBvbmNsaWNrPVwiZ28oNClcIj5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJsdi10ZXh0XCI+57mB5q6W5qih5byPPC90ZXh0PlxuICAgICAgICA8dGV4dCBjbGFzcz1cImx2LXN1YlwiPuiTneeQg+mjjuaatDwvdGV4dD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgcm91dGVyIGZyb20gXCJAc3lzdGVtLnJvdXRlclwiXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiQHN5c3RlbS5zdG9yYWdlXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm90ZWN0ZWQ6IHtcbiAgICBjb250cm9sTW9kZTogMFxuICB9LFxuICBwcml2YXRlOiB7XG4gICAgYmVzdFRpbWU6IDAsXG4gICAgYmVzdFNjb3JlOiAwXG4gIH0sXG5cbiAgb25Jbml0KCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHRoaXMuY29udHJvbE1vZGUgPSBwYXJzZUludCh0aGlzLmNvbnRyb2xNb2RlKSB8fCAwXG4gICAgc3RvcmFnZS5nZXQoe1xuICAgICAga2V5OiAnYmVzdFRpbWUnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkgeyBzZWxmLmJlc3RUaW1lID0gcGFyc2VJbnQoZGF0YSkgfHwgMCB9XG4gICAgfSlcbiAgICBzdG9yYWdlLmdldCh7XG4gICAgICBrZXk6ICdiZXN0U2NvcmUnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkgeyBzZWxmLmJlc3RTY29yZSA9IHBhcnNlSW50KGRhdGEpIHx8IDAgfVxuICAgIH0pXG4gIH0sXG5cbiAgZ28obGV2ZWwpIHtcbiAgICByb3V0ZXIucHVzaCh7XG4gICAgICB1cmk6IFwiL3BhZ2VzL2dhbWVcIixcbiAgICAgIHBhcmFtczogeyBsZXZlbDogbGV2ZWwsIGNvbnRyb2xNb2RlOiB0aGlzLmNvbnRyb2xNb2RlIH1cbiAgICB9KVxuICB9LFxuXG4gIG9uU3dpcGUoZSkge1xuICAgIGlmIChlLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5wYWdlIHtcbiAgd2lkdGg6IDQ4MHB4O1xuICBoZWlnaHQ6IDQ4MHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmxpc3Qge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubHYge1xuICB3aWR0aDogMjgwcHg7XG4gIGhlaWdodDogNzJweDtcbiAgYm9yZGVyLXJhZGl1czogMzZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWEyZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5sdi10ZXh0IHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmx2LXN1YiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM4ODg4ODg7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJfc3lzdGVtIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIiRhcHBfcmVxdWlyZSQiLCJfc3lzdGVtMiIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByb3RlY3RlZCIsImNvbnRyb2xNb2RlIiwicHJpdmF0ZSIsImJlc3RUaW1lIiwiYmVzdFNjb3JlIiwib25Jbml0Iiwic2VsZiIsInBhcnNlSW50Iiwic3RvcmFnZSIsImdldCIsImtleSIsInN1Y2Nlc3MiLCJkYXRhIiwiZ28iLCJsZXZlbCIsInJvdXRlciIsInB1c2giLCJ1cmkiLCJwYXJhbXMiLCJvblN3aXBlIiwiZGlyZWN0aW9uIiwiYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBQUEsb0JBQW9CLEVBQUUsR0FBRyxJQUFPOzs7b0JDQWhDQSxvQkFBb0IsSUFBSSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ3lCM0IsSUFBQUMsVUFBQUMsdUJBQUFDLGVBQUE7b0JBQ0EsSUFBQUMsV0FBQUYsdUJBQUFDLGVBQUE7b0JBQXFDLFNBQUFELHVCQUFBRyxDQUFBO3dCQUFBLE9BQUFBLEtBQUFBLEVBQUFDLFVBQUEsR0FBQUQsSUFBQTs0QkFBQUUsU0FBQUY7d0JBQUE7b0JBQUE7b0JBQUEsSUFBQUcsV0FBQUMsUUFBQUYsT0FBQSxHQUV0Qjt3QkFDYkcsV0FBVzs0QkFDVEMsYUFBYTt3QkFDZjt3QkFDQUMsU0FBUzs0QkFDUEMsVUFBVTs0QkFDVkMsV0FBVzt3QkFDYjt3QkFFQUM7NEJBQ0UsSUFBSUMsT0FBTyxJQUFJOzRCQUNmLElBQUksQ0FBQ0wsV0FBVyxHQUFHTSxTQUFTLElBQUksQ0FBQ04sV0FBVyxLQUFLOzRCQUNqRE8sU0FBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUM7Z0NBQ1ZDLEtBQUs7Z0NBQ0xDLFNBQVMsU0FBU0MsSUFBSTtvQ0FBSU4sS0FBS0gsUUFBUSxHQUFHSSxTQUFTSyxTQUFTO2dDQUFFOzRCQUNoRTs0QkFDQUosU0FBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUM7Z0NBQ1ZDLEtBQUs7Z0NBQ0xDLFNBQVMsU0FBU0MsSUFBSTtvQ0FBSU4sS0FBS0YsU0FBUyxHQUFHRyxTQUFTSyxTQUFTO2dDQUFFOzRCQUNqRTt3QkFDRjt3QkFFQUMsSUFBR0MsS0FBSzs0QkFDTkMsUUFBQUEsT0FBTSxDQUFDQyxJQUFJLENBQUM7Z0NBQ1ZDLEtBQUs7Z0NBQ0xDLFFBQVE7b0NBQUVKLE9BQU9BO29DQUFPYixhQUFhLElBQUksQ0FBQ0EsV0FBVztnQ0FBQzs0QkFDeEQ7d0JBQ0Y7d0JBRUFrQixTQUFReEIsQ0FBQzs0QkFDUCxJQUFJQSxBQUFnQixZQUFoQkEsRUFBRXlCLFNBQVMsRUFDYkwsUUFBQUEsT0FBTSxDQUFDTSxJQUFJO3dCQUVmO29CQUNGIn0=