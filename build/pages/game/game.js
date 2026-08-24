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
                    __webpack_require__.g = (()=>{
                        if ('object' == typeof globalThis) return globalThis;
                        try {
                            return this || new Function('return this')();
                        } catch (e) {
                            if ('object' == typeof window) return window;
                        }
                    })();
                })();
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
                            backgroundColor: "#000000"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "field"
                            ]
                        ],
                        {
                            position: "relative",
                            width: "480px",
                            height: "480px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "info-bar"
                            ]
                        ],
                        {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "480px",
                            height: "60px",
                            backgroundColor: "rgba(20, 20, 20, 0.9)",
                            flexDirection: "column",
                            justifyContent: "center",
                            zIndex: 8
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "info-item"
                            ]
                        ],
                        {
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "info-text"
                            ]
                        ],
                        {
                            fontSize: "20px",
                            color: "#ffffff",
                            marginLeft: "10px",
                            marginRight: "10px"
                        }
                    ],
                    [
                        {
                            condition: "screen and (shape:circle)"
                        },
                        [
                            [
                                0,
                                "info-bar"
                            ]
                        ],
                        {
                            paddingLeft: "40px",
                            paddingRight: "40px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "brick"
                            ]
                        ],
                        {
                            position: "absolute",
                            width: "52px",
                            height: "18px",
                            borderRadius: "4px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "paddle"
                            ]
                        ],
                        {
                            position: "absolute",
                            width: "100px",
                            height: "12px",
                            borderRadius: "6px",
                            backgroundColor: "#00ccff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "ball"
                            ]
                        ],
                        {
                            position: "absolute",
                            width: "22px",
                            height: "22px",
                            borderRadius: "11px",
                            backgroundColor: "#ffff00"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "ball-white"
                            ]
                        ],
                        {
                            backgroundColor: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "ball-blue"
                            ]
                        ],
                        {
                            position: "absolute",
                            width: "22px",
                            height: "22px",
                            borderRadius: "11px",
                            backgroundColor: "#3399ff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mask"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "480px",
                            height: "480px",
                            backgroundColor: "rgba(0, 0, 0, 0.85)",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 10
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "msg"
                            ]
                        ],
                        {
                            fontSize: "36px",
                            color: "#ffffff",
                            marginBottom: "16px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hint"
                            ]
                        ],
                        {
                            fontSize: "20px",
                            color: "#ffcc00",
                            marginBottom: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hint2"
                            ]
                        ],
                        {
                            fontSize: "16px",
                            color: "#888888"
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
                    var _system2 = _interopRequireDefault($app_require$1("@app-module/system.sensor"));
                    var _system3 = _interopRequireDefault($app_require$1("@app-module/system.storage"));
                    function _interopRequireDefault(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var _default = exports.default = {
                        protected: {
                            level: 1,
                            controlMode: 0
                        },
                        private: {
                            score: 0,
                            state: 0,
                            over: false,
                            win: false,
                            isI1: false,
                            isHp: false,
                            isExt: false,
                            isBr: false,
                            timer: null,
                            fieldW: 480,
                            fieldH: 480,
                            playL: 75,
                            playR: 405,
                            playT: 82,
                            playB: 432,
                            bw: 52,
                            bh: 18,
                            bpad: 6,
                            pw: 100,
                            ph: 12,
                            px: 0,
                            py: 0,
                            bx: 0,
                            by: 0,
                            bvx: 0,
                            bvy: 0,
                            ballS: 22,
                            sensorX: 0,
                            filteredX: 0,
                            swipeVel: 0,
                            gameTime: 0,
                            calories: 0,
                            timeRank: '',
                            scoreRank: '',
                            hp: 3,
                            bestTime: 0,
                            bestScore: 0,
                            bestHpScore: 0,
                            b0x: 0,
                            b0y: 0,
                            b0a: false,
                            b0c: '#ff3333',
                            b1x: 0,
                            b1y: 0,
                            b1a: false,
                            b1c: '#ff3333',
                            b2x: 0,
                            b2y: 0,
                            b2a: false,
                            b2c: '#ff3333',
                            b3x: 0,
                            b3y: 0,
                            b3a: false,
                            b3c: '#ff3333',
                            b4x: 0,
                            b4y: 0,
                            b4a: false,
                            b4c: '#ff3333',
                            b5x: 0,
                            b5y: 0,
                            b5a: false,
                            b5c: '#ff3333',
                            b6x: 0,
                            b6y: 0,
                            b6a: false,
                            b6c: '#ff3333',
                            b7x: 0,
                            b7y: 0,
                            b7a: false,
                            b7c: '#ff3333',
                            b8x: 0,
                            b8y: 0,
                            b8a: false,
                            b8c: '#ff3333',
                            b9x: 0,
                            b9y: 0,
                            b9a: false,
                            b9c: '#ff3333',
                            b10x: 0,
                            b10y: 0,
                            b10a: false,
                            b10c: '#ff3333',
                            b11x: 0,
                            b11y: 0,
                            b11a: false,
                            b11c: '#ff3333',
                            b12x: 0,
                            b12y: 0,
                            b12a: false,
                            b12c: '#ff3333',
                            b13x: 0,
                            b13y: 0,
                            b13a: false,
                            b13c: '#ff3333',
                            b14x: 0,
                            b14y: 0,
                            b14a: false,
                            b14c: '#ff3333',
                            b15x: 0,
                            b15y: 0,
                            b15a: false,
                            b15c: '#ff3333',
                            b16x: 0,
                            b16y: 0,
                            b16a: false,
                            b16c: '#ff3333',
                            b17x: 0,
                            b17y: 0,
                            b17a: false,
                            b17c: '#ff3333',
                            b18x: 0,
                            b18y: 0,
                            b18a: false,
                            b18c: '#ff3333',
                            b19x: 0,
                            b19y: 0,
                            b19a: false,
                            b19c: '#ff3333',
                            blueCount: 0,
                            l0a: false,
                            l0x: 0,
                            l0y: 0,
                            l0vx: 0,
                            l0vy: 0,
                            l1a: false,
                            l1x: 0,
                            l1y: 0,
                            l1vx: 0,
                            l1vy: 0,
                            l2a: false,
                            l2x: 0,
                            l2y: 0,
                            l2vx: 0,
                            l2vy: 0,
                            l3a: false,
                            l3x: 0,
                            l3y: 0,
                            l3vx: 0,
                            l3vy: 0,
                            l4a: false,
                            l4x: 0,
                            l4y: 0,
                            l4vx: 0,
                            l4vy: 0,
                            l5a: false,
                            l5x: 0,
                            l5y: 0,
                            l5vx: 0,
                            l5vy: 0,
                            l6a: false,
                            l6x: 0,
                            l6y: 0,
                            l6vx: 0,
                            l6vy: 0,
                            l7a: false,
                            l7x: 0,
                            l7y: 0,
                            l7vx: 0,
                            l7vy: 0,
                            l8a: false,
                            l8x: 0,
                            l8y: 0,
                            l8vx: 0,
                            l8vy: 0,
                            l9a: false,
                            l9x: 0,
                            l9y: 0,
                            l9vx: 0,
                            l9vy: 0
                        },
                        onInit () {
                            var self = this;
                            this.level = parseInt(this.level) || 1;
                            this.controlMode = parseInt(this.controlMode) || 0;
                            this.updateModeFlags();
                            _system3.default.get({
                                key: 'bestTime',
                                success: function(d) {
                                    self.bestTime = parseInt(d) || 0;
                                }
                            });
                            _system3.default.get({
                                key: 'bestScore',
                                success: function(d) {
                                    self.bestScore = parseInt(d) || 0;
                                }
                            });
                            _system3.default.get({
                                key: 'bestHpScore',
                                success: function(d) {
                                    self.bestHpScore = parseInt(d) || 0;
                                }
                            });
                            this.buildBricks();
                            this.resetBall();
                            if (2 === this.level) this.hp = 3;
                            this.startGame();
                        },
                        updateModeFlags () {
                            this.isI1 = 1 === this.level;
                            this.isHp = 2 === this.level;
                            this.isExt = 3 === this.level;
                            this.isBr = 4 === this.level;
                        },
                        onReady () {},
                        startGame () {
                            var self = this;
                            if (0 === this.controlMode) _system2.default.subscribeAccelerometer({
                                interval: 'game',
                                callback: function(ret) {
                                    self.sensorX = ret.x;
                                }
                            });
                            this.timer = setInterval(function() {
                                if (0 === self.state) {
                                    self.tick();
                                    self.gameTime = Math.floor(10 * self.gameTime + 1) / 10;
                                }
                            }, 35);
                        },
                        onDestroy () {
                            if (this.timer) {
                                clearInterval(this.timer);
                                this.timer = null;
                            }
                            try {
                                _system2.default.unsubscribeAccelerometer();
                            } catch (e) {}
                        },
                        buildBricks () {
                            var rows = Math.min(2 + this.level, 5);
                            var cols = 5;
                            var totalW = cols * this.bw + (cols - 1) * this.bpad;
                            var startX = Math.floor((this.fieldW - totalW) / 2);
                            var startY = 232;
                            var idx = 0;
                            var normalColors = [
                                '#ff8800',
                                '#ffcc00',
                                '#3399ff',
                                '#cc33ff'
                            ];
                            for(var r = 0; r < rows; r++){
                                for(var c = 0; c < cols; c++){
                                    if (idx >= 20) break;
                                    this['b' + idx + 'x'] = startX + c * (this.bw + this.bpad);
                                    this['b' + idx + 'y'] = startY + r * (this.bh + this.bpad);
                                    this['b' + idx + 'a'] = true;
                                    if (2 === this.level) this['b' + idx + 'c'] = '#ffcc00';
                                    else this['b' + idx + 'c'] = normalColors[(r + c) % normalColors.length];
                                    idx++;
                                }
                                if (idx >= 20) break;
                            }
                            for(var i = idx; i < 20; i++){
                                this['b' + i + 'a'] = false;
                                this['b' + i + 'x'] = -999;
                                this['b' + i + 'y'] = -999;
                                this['b' + i + 'c'] = '#333333';
                            }
                            if (2 === this.level) this.assignHealthBricks();
                        },
                        assignHealthBricks () {
                            var alive = [];
                            for(var i = 0; i < 20; i++)if (this['b' + i + 'a']) alive.push(i);
                            var total = alive.length;
                            for(var j = 0; j < total; j++)this['b' + alive[j] + 'c'] = '#ffcc00';
                            var redCount = Math.min(4, Math.floor(0.2 * total));
                            var greenCount = Math.min(3, Math.floor(0.15 * total));
                            var blueCount = Math.min(3, Math.floor(0.15 * total));
                            var idx = 0;
                            var placed = 0;
                            var redPlaced = 0;
                            while(placed < total && redPlaced < redCount){
                                this['b' + alive[placed] + 'c'] = '#ff3333';
                                placed++;
                                redPlaced++;
                            }
                            var greenPlaced = 0;
                            while(placed < total && greenPlaced < greenCount){
                                this['b' + alive[placed] + 'c'] = '#33cc33';
                                placed++;
                                greenPlaced++;
                            }
                            var bluePlaced = 0;
                            while(placed < total && bluePlaced < blueCount){
                                this['b' + alive[placed] + 'c'] = '#3396ff';
                                placed++;
                                bluePlaced++;
                            }
                        },
                        resetBall () {
                            this.pw = 100;
                            this.px = Math.floor((this.fieldW - this.pw) / 2);
                            this.py = this.playB - 30;
                            this.bx = Math.floor(this.fieldW / 2 - this.ballS / 2);
                            this.by = this.py - 30;
                            if (3 === this.level) {
                                var spd3 = 3.5;
                                this.bvx = spd3;
                                this.bvy = -spd3;
                            } else {
                                var spd = 2 + (this.level - 1) * 0.5;
                                this.bvx = spd;
                                this.bvy = -spd;
                            }
                            this.score = 0;
                            this.state = 0;
                            this.over = false;
                            this.win = false;
                            this.filteredX = 0;
                            this.swipeVel = 0;
                            this.gameTime = 0;
                            this.calories = 0;
                            this.blueCount = 0;
                            for(var s = 0; s < 10; s++){
                                this['l' + s + 'a'] = false;
                                this['l' + s + 'x'] = -999;
                                this['l' + s + 'y'] = -999;
                                this['l' + s + 'vx'] = 0;
                                this['l' + s + 'vy'] = 0;
                            }
                        },
                        spawnBlueBall (cx, cy) {
                            if (this.blueCount >= 10) return;
                            var slot = -1;
                            for(var s = 0; s < 10; s++)if (!this['l' + s + 'a']) {
                                slot = s;
                                break;
                            }
                            if (slot < 0) return;
                            var spd = Math.sqrt(this.bvx * this.bvx + this.bvy * this.bvy);
                            if (spd < 0.1) spd = 2.5;
                            var ang = Math.PI * (1 + Math.random());
                            this['l' + slot + 'a'] = true;
                            this['l' + slot + 'x'] = cx - this.ballS / 2;
                            this['l' + slot + 'y'] = cy - this.ballS / 2;
                            this['l' + slot + 'vx'] = Math.cos(ang) * spd;
                            this['l' + slot + 'vy'] = Math.sin(ang) * spd;
                            this.blueCount++;
                        },
                        respawnBall () {
                            this.bx = Math.floor(this.fieldW / 2 - this.ballS / 2);
                            this.by = this.py - 30;
                            var spd = 2 + (this.level - 1) * 0.5;
                            this.bvx = spd * (Math.random() < 0.5 ? -1 : 1);
                            this.bvy = -spd;
                        },
                        aimAtBrick (bx, by, vx, vy) {
                            var alive = [];
                            var totalA = Math.min((2 + this.level) * 5, 20);
                            for(var i = 0; i < totalA; i++)if (this['b' + i + 'a']) alive.push(i);
                            if (0 === alive.length || alive.length > 3) return {
                                vx: vx,
                                vy: vy
                            };
                            var target = alive[Math.floor(Math.random() * alive.length)];
                            var dx = this['b' + target + 'x'] + this.bw / 2 - (bx + this.ballS / 2);
                            var dy = this['b' + target + 'y'] + this.bh / 2 - (by + this.ballS / 2);
                            var len = Math.sqrt(dx * dx + dy * dy);
                            if (len < 1) return {
                                vx: vx,
                                vy: vy
                            };
                            var spd = Math.sqrt(vx * vx + vy * vy);
                            if (spd < 0.1) spd = 2;
                            var mix = 0.55;
                            if (2 === alive.length) mix = 0.4;
                            if (3 === alive.length) mix = 0.22;
                            var nx = vx * (1 - mix) + dx / len * spd * mix;
                            var ny = vy * (1 - mix) + dy / len * spd * mix;
                            var ns = Math.sqrt(nx * nx + ny * ny);
                            if (ns < 0.1) ns = 1;
                            return {
                                vx: nx / ns * spd,
                                vy: ny / ns * spd
                            };
                        },
                        tick () {
                            if (3 === this.level) {
                                if (0 === this.controlMode) {
                                    var rawX3 = this.sensorX;
                                    this.filteredX = 0.7 * this.filteredX + 0.3 * rawX3;
                                    var DEAD3 = 0.5;
                                    var tilt3 = this.filteredX;
                                    if (tilt3 > -DEAD3 && tilt3 < DEAD3) tilt3 = 0;
                                    this.px -= 0.7 * tilt3;
                                }
                                if (0 !== this.swipeVel) {
                                    this.px += this.swipeVel;
                                    this.swipeVel *= 0.9;
                                    if (Math.abs(this.swipeVel) < 0.5) this.swipeVel = 0;
                                }
                            } else {
                                if (0 === this.controlMode) {
                                    var rawX = this.sensorX;
                                    this.filteredX = 0.7 * this.filteredX + 0.3 * rawX;
                                    var DEAD = 0.5;
                                    var tilt = this.filteredX;
                                    if (tilt > -DEAD && tilt < DEAD) tilt = 0;
                                    this.px -= 0.6 * tilt;
                                }
                                if (0 !== this.swipeVel) {
                                    this.px += this.swipeVel;
                                    this.swipeVel *= 0.9;
                                    if (Math.abs(this.swipeVel) < 0.5) this.swipeVel = 0;
                                }
                            }
                            if (this.px < this.playL) this.px = this.playL;
                            if (this.px > this.playR - this.pw) this.px = this.playR - this.pw;
                            this.bx += this.bvx;
                            this.by += this.bvy;
                            if (this.bx <= this.playL) {
                                this.bx = this.playL;
                                this.bvx = Math.abs(this.bvx);
                            }
                            if (this.bx + this.ballS >= this.playR) {
                                this.bx = this.playR - this.ballS;
                                this.bvx = -Math.abs(this.bvx);
                            }
                            if (this.by <= this.playT) {
                                this.by = this.playT;
                                this.bvy = Math.abs(this.bvy);
                            }
                            if (this.bvy > 0 && this.by + this.ballS >= this.py && this.by + this.ballS <= this.py + this.ph + 4 && this.bx + this.ballS >= this.px && this.bx <= this.px + this.pw) {
                                this.by = this.py - this.ballS;
                                this.bvy = -Math.abs(this.bvy);
                                var hit = (this.bx + this.ballS / 2 - this.px) / this.pw;
                                if (3 === this.level) {
                                    this.bvx = (hit - 0.5) * 6;
                                    if (this.bvx > 0 && this.bvx < 1.5) this.bvx = 1.5;
                                    if (this.bvx < 0 && this.bvx > -1.5) this.bvx = -1.5;
                                } else {
                                    this.bvx = (hit - 0.5) * 4;
                                    if (this.bvx > 0 && this.bvx < 1) this.bvx = 1;
                                    if (this.bvx < 0 && this.bvx > -1) this.bvx = -1;
                                }
                            }
                            var hitIdx = -1;
                            var total = Math.min((2 + this.level) * 5, 20);
                            for(var i = 0; i < total; i++)if (this['b' + i + 'a']) {
                                var bkx = this['b' + i + 'x'];
                                var bky = this['b' + i + 'y'];
                                var overlapX = Math.min(this.bx + this.ballS - bkx, bkx + this.bw - this.bx);
                                var overlapY = Math.min(this.by + this.ballS - bky, bky + this.bh - this.by);
                                if (overlapX > 0 && overlapY > 0) {
                                    hitIdx = i;
                                    if (overlapX < overlapY) this.bvx = -this.bvx;
                                    else this.bvy = -this.bvy;
                                    if (2 === this.level && '#ff3333' === this['b' + i + 'c']) {
                                        this.hp--;
                                        if (this.hp <= 0) {
                                            this.state = 1;
                                            this.over = true;
                                            this.calcRank();
                                            return;
                                        }
                                    } else if (2 === this.level && '#33cc33' === this['b' + i + 'c']) {
                                        if (this.hp < 5) this.hp++;
                                    } else {
                                        this.score += 10;
                                        if (4 === this.level) this.spawnBlueBall(this['b' + i + 'x'] + this.bw / 2, this['b' + i + 'y'] + this.bh / 2);
                                    }
                                    break;
                                }
                            }
                            if (hitIdx >= 0) {
                                this['b' + hitIdx + 'a'] = false;
                                this['b' + hitIdx + 'x'] = -999;
                                this['b' + hitIdx + 'y'] = -999;
                            }
                            for(var s = 0; s < 10; s++)if (this['l' + s + 'a']) {
                                var lx = this['l' + s + 'x'] + this['l' + s + 'vx'];
                                var ly = this['l' + s + 'y'] + this['l' + s + 'vy'];
                                this['l' + s + 'x'] = lx;
                                this['l' + s + 'y'] = ly;
                                if (lx <= this.playL) {
                                    this['l' + s + 'x'] = this.playL;
                                    this['l' + s + 'vx'] = Math.abs(this['l' + s + 'vx']);
                                }
                                if (lx + this.ballS >= this.playR) {
                                    this['l' + s + 'x'] = this.playR - this.ballS;
                                    this['l' + s + 'vx'] = -Math.abs(this['l' + s + 'vx']);
                                }
                                if (ly <= this.playT) {
                                    this['l' + s + 'y'] = this.playT;
                                    this['l' + s + 'vy'] = Math.abs(this['l' + s + 'vy']);
                                }
                                if (this['l' + s + 'vy'] > 0 && ly + this.ballS >= this.py && ly + this.ballS <= this.py + this.ph + 4 && lx + this.ballS >= this.px && lx <= this.px + this.pw) {
                                    this['l' + s + 'y'] = this.py - this.ballS;
                                    this['l' + s + 'vy'] = -Math.abs(this['l' + s + 'vy']);
                                    var lhit = (lx + this.ballS / 2 - this.px) / this.pw;
                                    this['l' + s + 'vx'] = (lhit - 0.5) * 4;
                                    if (this['l' + s + 'vx'] > 0 && this['l' + s + 'vx'] < 1) this['l' + s + 'vx'] = 1;
                                    if (this['l' + s + 'vx'] < 0 && this['l' + s + 'vx'] > -1) this['l' + s + 'vx'] = -1;
                                }
                                var lhitIdx = -1;
                                var totalL = Math.min((2 + this.level) * 5, 20);
                                for(var i2 = 0; i2 < totalL; i2++)if (this['b' + i2 + 'a']) {
                                    var bx2 = this['b' + i2 + 'x'];
                                    var by2 = this['b' + i2 + 'y'];
                                    var ox = Math.min(lx + this.ballS - bx2, bx2 + this.bw - lx);
                                    var oy = Math.min(ly + this.ballS - by2, by2 + this.bh - ly);
                                    if (ox > 0 && oy > 0) {
                                        lhitIdx = i2;
                                        if (ox < oy) this['l' + s + 'vx'] = -this['l' + s + 'vx'];
                                        else this['l' + s + 'vy'] = -this['l' + s + 'vy'];
                                        this.score += 5;
                                        break;
                                    }
                                }
                                if (lhitIdx >= 0) {
                                    this['b' + lhitIdx + 'a'] = false;
                                    this['b' + lhitIdx + 'x'] = -999;
                                    this['b' + lhitIdx + 'y'] = -999;
                                }
                                var aimL = this.aimAtBrick(this['l' + s + 'x'], this['l' + s + 'y'], this['l' + s + 'vx'], this['l' + s + 'vy']);
                                this['l' + s + 'vx'] = aimL.vx;
                                this['l' + s + 'vy'] = aimL.vy;
                                if (this['l' + s + 'y'] + this.ballS > this.playB) {
                                    this['l' + s + 'a'] = false;
                                    this.blueCount--;
                                }
                            }
                            var aimM = this.aimAtBrick(this.bx, this.by, this.bvx, this.bvy);
                            this.bvx = aimM.vx;
                            this.bvy = aimM.vy;
                            var aliveCount = 0;
                            for(var j = 0; j < 20; j++)if (this['b' + j + 'a']) aliveCount++;
                            if (this.by + this.ballS > this.playB) {
                                if (2 === this.level) {
                                    this.hp--;
                                    if (this.hp <= 0) {
                                        this.state = 1;
                                        this.over = true;
                                        this.calcRank();
                                        this.saveBestHpScore();
                                    } else this.respawnBall();
                                    return;
                                }
                                this.state = 1;
                                this.over = true;
                                this.calcRank();
                                if (3 === this.level) this.saveBestScore();
                                return;
                            }
                            if (aliveCount <= 0) {
                                this.state = 2;
                                this.win = true;
                                this.calcRank();
                                if (1 === this.level) this.saveBestTime();
                                if (2 === this.level) this.saveBestHpScore();
                                if (3 === this.level) this.saveBestScore();
                                return;
                            }
                        },
                        calcRank () {
                            this.calories = Math.floor(this.gameTime / 60 * 8.5) / 10;
                            if (1 === this.level) {
                                var t = this.gameTime;
                                if (t <= 30) this.timeRank = '已经超越99%玩家';
                                else if (t <= 60) this.timeRank = '已经超越80%玩家';
                                else if (t <= 90) this.timeRank = '已经超越60%玩家';
                                else if (t <= 120) this.timeRank = '已经超越40%玩家';
                                else this.timeRank = '已经超越20%玩家';
                            }
                            if (3 === this.level) {
                                var s = this.score;
                                if (s >= 200) this.scoreRank = '已经超越99%玩家';
                                else if (s >= 150) this.scoreRank = '已经超越80%玩家';
                                else if (s >= 100) this.scoreRank = '已经超越60%玩家';
                                else if (s >= 50) this.scoreRank = '已经超越40%玩家';
                                else this.scoreRank = '已经超越20%玩家';
                            }
                        },
                        saveBestTime () {
                            if (0 === this.bestTime || this.gameTime < this.bestTime) {
                                this.bestTime = Math.floor(this.gameTime);
                                _system3.default.set({
                                    key: 'bestTime',
                                    data: String(this.bestTime)
                                });
                            }
                        },
                        saveBestScore () {
                            if (this.score > this.bestScore) {
                                this.bestScore = this.score;
                                _system3.default.set({
                                    key: 'bestScore',
                                    data: String(this.bestScore)
                                });
                            }
                        },
                        saveBestHpScore () {
                            if (this.score > this.bestHpScore) {
                                this.bestHpScore = this.score;
                                _system3.default.set({
                                    key: 'bestHpScore',
                                    data: String(this.bestHpScore)
                                });
                            }
                        },
                        onSwipe (e) {
                            if (0 !== this.state) return void this.afterGame();
                            if (3 === this.level) {
                                if ('left' === e.direction) this.swipeVel = -11;
                                else if ('right' === e.direction) this.swipeVel = 11;
                            } else if ('left' === e.direction) this.swipeVel = -9.5;
                            else if ('right' === e.direction) this.swipeVel = 9.5;
                        },
                        onMaskClick () {
                            this.afterGame();
                        },
                        afterGame () {
                            if (1 === this.state) {
                                if (2 === this.level) this.hp = 3;
                                this.buildBricks();
                                this.resetBall();
                            } else if (2 === this.state) if (this.level < 3) {
                                this.level++;
                                this.updateModeFlags();
                                this.buildBricks();
                                this.resetBall();
                                if (2 === this.level) this.hp = 3;
                            } else _system.default.push({
                                uri: '/pages/index'
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
                            ]
                        }
                    }, [
                        aiot.__ce__("div", {
                            __vm__: _vm_,
                            __opts__: {
                                classList: [
                                    "field"
                                ],
                                events: {
                                    swipe: function(evt) {
                                        return _vm_.onSwipe(evt);
                                    }
                                }
                            }
                        }, [
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "info-bar"
                                    ]
                                }
                            }, [
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return _vm_.isI1;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "info-item"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "info-text"
                                                    ],
                                                    value: function() {
                                                        return "分数:" + _vm_.score;
                                                    }
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "info-text"
                                                    ],
                                                    value: function() {
                                                        return "用时:" + _vm_.gameTime + "秒";
                                                    }
                                                }
                                            }, [])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return _vm_.isHp;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "info-item"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "info-text"
                                                    ],
                                                    value: function() {
                                                        return "血量:" + _vm_.hp;
                                                    }
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "info-text"
                                                    ],
                                                    value: function() {
                                                        return "分数:" + _vm_.score;
                                                    }
                                                }
                                            }, [])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return _vm_.isExt;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "info-item"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "info-text"
                                                    ],
                                                    value: function() {
                                                        return "分数:" + _vm_.score;
                                                    }
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "info-text"
                                                    ],
                                                    value: function() {
                                                        return "用时:" + _vm_.gameTime + "秒";
                                                    }
                                                }
                                            }, [])
                                        ])
                                    ];
                                }),
                                aiot.__ci__({
                                    __vm__: _vm_,
                                    __opts__: {
                                        shown: function() {
                                            return _vm_.isBr;
                                        }
                                    }
                                }, function() {
                                    return [
                                        aiot.__ce__("div", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "info-item"
                                                ]
                                            }
                                        }, [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "info-text"
                                                    ],
                                                    value: function() {
                                                        return "分数:" + _vm_.score;
                                                    }
                                                }
                                            }, []),
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "info-text"
                                                    ],
                                                    value: function() {
                                                        return "蓝球:" + _vm_.blueCount + "/10";
                                                    }
                                                }
                                            }, [])
                                        ])
                                    ];
                                })
                            ]),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.b0a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "brick"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.b0x + "px;top:" + _vm_.b0y + "px;background-color:" + _vm_.b0c + ";");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.b1a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "brick"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.b1x + "px;top:" + _vm_.b1y + "px;background-color:" + _vm_.b1c + ";");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.b2a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "brick"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.b2x + "px;top:" + _vm_.b2y + "px;background-color:" + _vm_.b2c + ";");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.b3a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "brick"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.b3x + "px;top:" + _vm_.b3y + "px;background-color:" + _vm_.b3c + ";");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.b4a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "brick"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.b4x + "px;top:" + _vm_.b4y + "px;background-color:" + _vm_.b4c + ";");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.b5a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "brick"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.b5x + "px;top:" + _vm_.b5y + "px;background-color:" + _vm_.b5c + ";");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.b6a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "brick"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.b6x + "px;top:" + _vm_.b6y + "px;background-color:" + _vm_.b6c + ";");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.b7a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "brick"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.b7x + "px;top:" + _vm_.b7y + "px;background-color:" + _vm_.b7c + ";");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.b8a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "brick"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.b8x + "px;top:" + _vm_.b8y + "px;background-color:" + _vm_.b8c + ";");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.b9a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "brick"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.b9x + "px;top:" + _vm_.b9y + "px;background-color:" + _vm_.b9c + ";");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.b10a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "brick"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.b10x + "px;top:" + _vm_.b10y + "px;background-color:" + _vm_.b10c + ";");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.b11a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "brick"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.b11x + "px;top:" + _vm_.b11y + "px;background-color:" + _vm_.b11c + ";");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.b12a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "brick"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.b12x + "px;top:" + _vm_.b12y + "px;background-color:" + _vm_.b12c + ";");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.b13a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "brick"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.b13x + "px;top:" + _vm_.b13y + "px;background-color:" + _vm_.b13c + ";");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.b14a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "brick"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.b14x + "px;top:" + _vm_.b14y + "px;background-color:" + _vm_.b14c + ";");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.b15a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "brick"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.b15x + "px;top:" + _vm_.b15y + "px;background-color:" + _vm_.b15c + ";");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.b16a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "brick"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.b16x + "px;top:" + _vm_.b16y + "px;background-color:" + _vm_.b16c + ";");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.b17a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "brick"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.b17x + "px;top:" + _vm_.b17y + "px;background-color:" + _vm_.b17c + ";");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.b18a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "brick"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.b18x + "px;top:" + _vm_.b18y + "px;background-color:" + _vm_.b18c + ";");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.b19a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "brick"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.b19x + "px;top:" + _vm_.b19y + "px;background-color:" + _vm_.b19c + ";");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: [
                                        "paddle"
                                    ],
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("left:" + _vm_.px + "px;top:" + _vm_.py + "px;");
                                    }
                                }
                            }, []),
                            aiot.__ce__("div", {
                                __vm__: _vm_,
                                __opts__: {
                                    classList: function() {
                                        const $classValue$ = "ball " + (_vm_.isBr ? "ball-white" : "");
                                        if ('string' == typeof $classValue$) return $classValue$.split(' ').map((item)=>item.trim()).filter(Boolean);
                                        return $classValue$;
                                    },
                                    style: function() {
                                        return __webpack_require__.g.$translateStyle$("left:" + _vm_.bx + "px;top:" + _vm_.by + "px;");
                                    }
                                }
                            }, []),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.l0a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "ball-blue"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.l0x + "px;top:" + _vm_.l0y + "px;");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.l1a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "ball-blue"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.l1x + "px;top:" + _vm_.l1y + "px;");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.l2a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "ball-blue"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.l2x + "px;top:" + _vm_.l2y + "px;");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.l3a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "ball-blue"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.l3x + "px;top:" + _vm_.l3y + "px;");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.l4a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "ball-blue"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.l4x + "px;top:" + _vm_.l4y + "px;");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.l5a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "ball-blue"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.l5x + "px;top:" + _vm_.l5y + "px;");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.l6a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "ball-blue"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.l6x + "px;top:" + _vm_.l6y + "px;");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.l7a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "ball-blue"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.l7x + "px;top:" + _vm_.l7y + "px;");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.l8a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "ball-blue"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.l8x + "px;top:" + _vm_.l8y + "px;");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.l9a;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "ball-blue"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$("left:" + _vm_.l9x + "px;top:" + _vm_.l9y + "px;");
                                            }
                                        }
                                    }, [])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.over;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "mask"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.onMaskClick(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ci__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                shown: function() {
                                                    return _vm_.isI1;
                                                }
                                            }
                                        }, function() {
                                            return [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "msg"
                                                        ],
                                                        value: "游戏结束"
                                                    }
                                                }, [])
                                            ];
                                        }),
                                        aiot.__ci__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                shown: function() {
                                                    return _vm_.isHp;
                                                }
                                            }
                                        }, function() {
                                            return [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "msg"
                                                        ],
                                                        value: "游戏结束"
                                                    }
                                                }, [])
                                            ];
                                        }),
                                        aiot.__ci__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                shown: function() {
                                                    return _vm_.isExt;
                                                }
                                            }
                                        }, function() {
                                            return [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "msg"
                                                        ],
                                                        value: "游戏结束"
                                                    }
                                                }, [])
                                            ];
                                        }),
                                        aiot.__ci__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                shown: function() {
                                                    return _vm_.isBr;
                                                }
                                            }
                                        }, function() {
                                            return [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "msg"
                                                        ],
                                                        value: "游戏结束"
                                                    }
                                                }, [])
                                            ];
                                        }),
                                        aiot.__ci__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                shown: function() {
                                                    return _vm_.isI1;
                                                }
                                            }
                                        }, function() {
                                            return [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "hint"
                                                        ],
                                                        value: function() {
                                                            return "用时" + _vm_.gameTime + "秒，" + _vm_.timeRank;
                                                        }
                                                    }
                                                }, [])
                                            ];
                                        }),
                                        aiot.__ci__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                shown: function() {
                                                    return _vm_.isHp;
                                                }
                                            }
                                        }, function() {
                                            return [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "hint"
                                                        ],
                                                        value: "血量归零"
                                                    }
                                                }, [])
                                            ];
                                        }),
                                        aiot.__ci__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                shown: function() {
                                                    return _vm_.isExt;
                                                }
                                            }
                                        }, function() {
                                            return [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "hint"
                                                        ],
                                                        value: function() {
                                                            return "得分" + _vm_.score + "分，" + _vm_.scoreRank;
                                                        }
                                                    }
                                                }, [])
                                            ];
                                        }),
                                        aiot.__ci__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                shown: function() {
                                                    return _vm_.isBr;
                                                }
                                            }
                                        }, function() {
                                            return [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "hint"
                                                        ],
                                                        value: function() {
                                                            return "得分" + _vm_.score + "分";
                                                        }
                                                    }
                                                }, [])
                                            ];
                                        }),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "hint"
                                                ],
                                                value: function() {
                                                    return "本次消耗热量:" + _vm_.calories + "卡";
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "hint2"
                                                ],
                                                value: "点击重来"
                                            }
                                        }, [])
                                    ])
                                ];
                            }),
                            aiot.__ci__({
                                __vm__: _vm_,
                                __opts__: {
                                    shown: function() {
                                        return _vm_.win;
                                    }
                                }
                            }, function() {
                                return [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "mask"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.onMaskClick(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "msg"
                                                ],
                                                value: "恭喜过关!"
                                            }
                                        }, []),
                                        aiot.__ci__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                shown: function() {
                                                    return _vm_.isI1;
                                                }
                                            }
                                        }, function() {
                                            return [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "hint"
                                                        ],
                                                        value: function() {
                                                            return "用时" + _vm_.gameTime + "秒，" + _vm_.timeRank;
                                                        }
                                                    }
                                                }, [])
                                            ];
                                        }),
                                        aiot.__ci__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                shown: function() {
                                                    return _vm_.isHp;
                                                }
                                            }
                                        }, function() {
                                            return [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "hint"
                                                        ],
                                                        value: function() {
                                                            return "血量剩余" + _vm_.hp;
                                                        }
                                                    }
                                                }, [])
                                            ];
                                        }),
                                        aiot.__ci__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                shown: function() {
                                                    return _vm_.isExt;
                                                }
                                            }
                                        }, function() {
                                            return [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "hint"
                                                        ],
                                                        value: function() {
                                                            return "得分" + _vm_.score + "分，" + _vm_.scoreRank;
                                                        }
                                                    }
                                                }, [])
                                            ];
                                        }),
                                        aiot.__ci__({
                                            __vm__: _vm_,
                                            __opts__: {
                                                shown: function() {
                                                    return _vm_.isBr;
                                                }
                                            }
                                        }, function() {
                                            return [
                                                aiot.__ce__("text", {
                                                    __vm__: _vm_,
                                                    __opts__: {
                                                        classList: [
                                                            "hint"
                                                        ],
                                                        value: function() {
                                                            return "得分" + _vm_.score + "分";
                                                        }
                                                    }
                                                }, [])
                                            ];
                                        }),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "hint"
                                                ],
                                                value: function() {
                                                    return "本次消耗热量:" + _vm_.calories + "卡";
                                                }
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "hint2"
                                                ],
                                                value: "点击继续"
                                            }
                                        }, [])
                                    ])
                                ];
                            })
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNcXGdhbWVcXGdhbWUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly/lsI/mtrXmiZPnoJblnZcvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly/lsI/mtrXmiZPnoJblnZcvd2VicGFjay9ydW50aW1lL3JzcGFja192ZXJzaW9uIiwid2VicGFjazovL+Wwj+a2teaJk+egluWdly93ZWJwYWNrL3J1bnRpbWUvcnNwYWNrX3VuaXF1ZV9pZCIsIndlYnBhY2s6Ly/lsI/mtrXmiZPnoJblnZcvc3JjL3BhZ2VzL2dhbWUvZ2FtZS51eCJdLCJzb3VyY2VzQ29udGVudCI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoKCkgPT4ge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnJ2ID0gKCkgPT4gKFwiMS43LjEyXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ydWlkID0gXCJidW5kbGVyPXJzcGFja0AxLjcuMTJcIjsiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJwYWdlXCI+XG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCIgb25zd2lwZT1cIm9uU3dpcGVcIj5cblxuICAgICAgPGRpdiBjbGFzcz1cImluZm8tYmFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWl0ZW1cIiBpZj1cInt7IGlzSTEgfX1cIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImluZm8tdGV4dFwiPuWIhuaVsDp7eyBzY29yZSB9fTwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImluZm8tdGV4dFwiPueUqOaXtjp7eyBnYW1lVGltZSB9feenkjwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWl0ZW1cIiBpZj1cInt7IGlzSHAgfX1cIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImluZm8tdGV4dFwiPuihgOmHjzp7eyBocCB9fTwvdGV4dD5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImluZm8tdGV4dFwiPuWIhuaVsDp7eyBzY29yZSB9fTwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWl0ZW1cIiBpZj1cInt7IGlzRXh0IH19XCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJpbmZvLXRleHRcIj7liIbmlbA6e3sgc2NvcmUgfX08L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJpbmZvLXRleHRcIj7nlKjml7Y6e3sgZ2FtZVRpbWUgfX3np5I8L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1pdGVtXCIgaWY9XCJ7eyBpc0JyIH19XCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJpbmZvLXRleHRcIj7liIbmlbA6e3sgc2NvcmUgfX08L3RleHQ+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJpbmZvLXRleHRcIj7ok53nkIM6e3sgYmx1ZUNvdW50IH19LzEwPC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiYnJpY2tcIiBpZj1cInt7IGIwYSB9fVwiIHN0eWxlPVwibGVmdDp7eyBiMHggfX1weDt0b3A6e3sgYjB5IH19cHg7YmFja2dyb3VuZC1jb2xvcjp7eyBiMGMgfX07XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnJpY2tcIiBpZj1cInt7IGIxYSB9fVwiIHN0eWxlPVwibGVmdDp7eyBiMXggfX1weDt0b3A6e3sgYjF5IH19cHg7YmFja2dyb3VuZC1jb2xvcjp7eyBiMWMgfX07XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnJpY2tcIiBpZj1cInt7IGIyYSB9fVwiIHN0eWxlPVwibGVmdDp7eyBiMnggfX1weDt0b3A6e3sgYjJ5IH19cHg7YmFja2dyb3VuZC1jb2xvcjp7eyBiMmMgfX07XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnJpY2tcIiBpZj1cInt7IGIzYSB9fVwiIHN0eWxlPVwibGVmdDp7eyBiM3ggfX1weDt0b3A6e3sgYjN5IH19cHg7YmFja2dyb3VuZC1jb2xvcjp7eyBiM2MgfX07XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnJpY2tcIiBpZj1cInt7IGI0YSB9fVwiIHN0eWxlPVwibGVmdDp7eyBiNHggfX1weDt0b3A6e3sgYjR5IH19cHg7YmFja2dyb3VuZC1jb2xvcjp7eyBiNGMgfX07XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnJpY2tcIiBpZj1cInt7IGI1YSB9fVwiIHN0eWxlPVwibGVmdDp7eyBiNXggfX1weDt0b3A6e3sgYjV5IH19cHg7YmFja2dyb3VuZC1jb2xvcjp7eyBiNWMgfX07XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnJpY2tcIiBpZj1cInt7IGI2YSB9fVwiIHN0eWxlPVwibGVmdDp7eyBiNnggfX1weDt0b3A6e3sgYjZ5IH19cHg7YmFja2dyb3VuZC1jb2xvcjp7eyBiNmMgfX07XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnJpY2tcIiBpZj1cInt7IGI3YSB9fVwiIHN0eWxlPVwibGVmdDp7eyBiN3ggfX1weDt0b3A6e3sgYjd5IH19cHg7YmFja2dyb3VuZC1jb2xvcjp7eyBiN2MgfX07XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnJpY2tcIiBpZj1cInt7IGI4YSB9fVwiIHN0eWxlPVwibGVmdDp7eyBiOHggfX1weDt0b3A6e3sgYjh5IH19cHg7YmFja2dyb3VuZC1jb2xvcjp7eyBiOGMgfX07XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnJpY2tcIiBpZj1cInt7IGI5YSB9fVwiIHN0eWxlPVwibGVmdDp7eyBiOXggfX1weDt0b3A6e3sgYjl5IH19cHg7YmFja2dyb3VuZC1jb2xvcjp7eyBiOWMgfX07XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnJpY2tcIiBpZj1cInt7IGIxMGEgfX1cIiBzdHlsZT1cImxlZnQ6e3sgYjEweCB9fXB4O3RvcDp7eyBiMTB5IH19cHg7YmFja2dyb3VuZC1jb2xvcjp7eyBiMTBjIH19O1wiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJyaWNrXCIgaWY9XCJ7eyBiMTFhIH19XCIgc3R5bGU9XCJsZWZ0Ont7IGIxMXggfX1weDt0b3A6e3sgYjExeSB9fXB4O2JhY2tncm91bmQtY29sb3I6e3sgYjExYyB9fTtcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJicmlja1wiIGlmPVwie3sgYjEyYSB9fVwiIHN0eWxlPVwibGVmdDp7eyBiMTJ4IH19cHg7dG9wOnt7IGIxMnkgfX1weDtiYWNrZ3JvdW5kLWNvbG9yOnt7IGIxMmMgfX07XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnJpY2tcIiBpZj1cInt7IGIxM2EgfX1cIiBzdHlsZT1cImxlZnQ6e3sgYjEzeCB9fXB4O3RvcDp7eyBiMTN5IH19cHg7YmFja2dyb3VuZC1jb2xvcjp7eyBiMTNjIH19O1wiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJyaWNrXCIgaWY9XCJ7eyBiMTRhIH19XCIgc3R5bGU9XCJsZWZ0Ont7IGIxNHggfX1weDt0b3A6e3sgYjE0eSB9fXB4O2JhY2tncm91bmQtY29sb3I6e3sgYjE0YyB9fTtcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJicmlja1wiIGlmPVwie3sgYjE1YSB9fVwiIHN0eWxlPVwibGVmdDp7eyBiMTV4IH19cHg7dG9wOnt7IGIxNXkgfX1weDtiYWNrZ3JvdW5kLWNvbG9yOnt7IGIxNWMgfX07XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnJpY2tcIiBpZj1cInt7IGIxNmEgfX1cIiBzdHlsZT1cImxlZnQ6e3sgYjE2eCB9fXB4O3RvcDp7eyBiMTZ5IH19cHg7YmFja2dyb3VuZC1jb2xvcjp7eyBiMTZjIH19O1wiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJyaWNrXCIgaWY9XCJ7eyBiMTdhIH19XCIgc3R5bGU9XCJsZWZ0Ont7IGIxN3ggfX1weDt0b3A6e3sgYjE3eSB9fXB4O2JhY2tncm91bmQtY29sb3I6e3sgYjE3YyB9fTtcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJicmlja1wiIGlmPVwie3sgYjE4YSB9fVwiIHN0eWxlPVwibGVmdDp7eyBiMTh4IH19cHg7dG9wOnt7IGIxOHkgfX1weDtiYWNrZ3JvdW5kLWNvbG9yOnt7IGIxOGMgfX07XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnJpY2tcIiBpZj1cInt7IGIxOWEgfX1cIiBzdHlsZT1cImxlZnQ6e3sgYjE5eCB9fXB4O3RvcDp7eyBiMTl5IH19cHg7YmFja2dyb3VuZC1jb2xvcjp7eyBiMTljIH19O1wiPjwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicGFkZGxlXCIgc3R5bGU9XCJsZWZ0Ont7IHB4IH19cHg7dG9wOnt7IHB5IH19cHg7XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmFsbCB7eyBpc0JyID8gJ2JhbGwtd2hpdGUnIDogJycgfX1cIiBzdHlsZT1cImxlZnQ6e3sgYnggfX1weDt0b3A6e3sgYnkgfX1weDtcIj48L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImJhbGwtYmx1ZVwiIGlmPVwie3sgbDBhIH19XCIgc3R5bGU9XCJsZWZ0Ont7IGwweCB9fXB4O3RvcDp7eyBsMHkgfX1weDtcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJiYWxsLWJsdWVcIiBpZj1cInt7IGwxYSB9fVwiIHN0eWxlPVwibGVmdDp7eyBsMXggfX1weDt0b3A6e3sgbDF5IH19cHg7XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmFsbC1ibHVlXCIgaWY9XCJ7eyBsMmEgfX1cIiBzdHlsZT1cImxlZnQ6e3sgbDJ4IH19cHg7dG9wOnt7IGwyeSB9fXB4O1wiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJhbGwtYmx1ZVwiIGlmPVwie3sgbDNhIH19XCIgc3R5bGU9XCJsZWZ0Ont7IGwzeCB9fXB4O3RvcDp7eyBsM3kgfX1weDtcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJiYWxsLWJsdWVcIiBpZj1cInt7IGw0YSB9fVwiIHN0eWxlPVwibGVmdDp7eyBsNHggfX1weDt0b3A6e3sgbDR5IH19cHg7XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmFsbC1ibHVlXCIgaWY9XCJ7eyBsNWEgfX1cIiBzdHlsZT1cImxlZnQ6e3sgbDV4IH19cHg7dG9wOnt7IGw1eSB9fXB4O1wiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJhbGwtYmx1ZVwiIGlmPVwie3sgbDZhIH19XCIgc3R5bGU9XCJsZWZ0Ont7IGw2eCB9fXB4O3RvcDp7eyBsNnkgfX1weDtcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJiYWxsLWJsdWVcIiBpZj1cInt7IGw3YSB9fVwiIHN0eWxlPVwibGVmdDp7eyBsN3ggfX1weDt0b3A6e3sgbDd5IH19cHg7XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmFsbC1ibHVlXCIgaWY9XCJ7eyBsOGEgfX1cIiBzdHlsZT1cImxlZnQ6e3sgbDh4IH19cHg7dG9wOnt7IGw4eSB9fXB4O1wiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJhbGwtYmx1ZVwiIGlmPVwie3sgbDlhIH19XCIgc3R5bGU9XCJsZWZ0Ont7IGw5eCB9fXB4O3RvcDp7eyBsOXkgfX1weDtcIj48L2Rpdj5cblxuICAgICAgPGRpdiBpZj1cInt7IG92ZXIgfX1cIiBjbGFzcz1cIm1hc2tcIiBvbmNsaWNrPVwib25NYXNrQ2xpY2tcIj5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJtc2dcIiBpZj1cInt7IGlzSTEgfX1cIj7muLjmiI/nu5PmnZ88L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibXNnXCIgaWY9XCJ7eyBpc0hwIH19XCI+5ri45oiP57uT5p2fPC90ZXh0PlxuICAgICAgICA8dGV4dCBjbGFzcz1cIm1zZ1wiIGlmPVwie3sgaXNFeHQgfX1cIj7muLjmiI/nu5PmnZ88L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibXNnXCIgaWY9XCJ7eyBpc0JyIH19XCI+5ri45oiP57uT5p2fPC90ZXh0PlxuICAgICAgICA8dGV4dCBjbGFzcz1cImhpbnRcIiBpZj1cInt7IGlzSTEgfX1cIj7nlKjml7Z7eyBnYW1lVGltZSB9feenku+8jHt7IHRpbWVSYW5rIH19PC90ZXh0PlxuICAgICAgICA8dGV4dCBjbGFzcz1cImhpbnRcIiBpZj1cInt7IGlzSHAgfX1cIj7ooYDph4/lvZLpm7Y8L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaGludFwiIGlmPVwie3sgaXNFeHQgfX1cIj7lvpfliIZ7eyBzY29yZSB9feWIhu+8jHt7IHNjb3JlUmFuayB9fTwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJoaW50XCIgaWY9XCJ7eyBpc0JyIH19XCI+5b6X5YiGe3sgc2NvcmUgfX3liIY8L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaGludFwiPuacrOasoea2iOiAl+eDremHjzp7eyBjYWxvcmllcyB9feWNoTwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJoaW50MlwiPueCueWHu+mHjeadpTwvdGV4dD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGlmPVwie3sgd2luIH19XCIgY2xhc3M9XCJtYXNrXCIgb25jbGljaz1cIm9uTWFza0NsaWNrXCI+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibXNnXCI+5oGt5Zac6L+H5YWzITwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJoaW50XCIgaWY9XCJ7eyBpc0kxIH19XCI+55So5pe2e3sgZ2FtZVRpbWUgfX3np5LvvIx7eyB0aW1lUmFuayB9fTwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJoaW50XCIgaWY9XCJ7eyBpc0hwIH19XCI+6KGA6YeP5Ymp5L2Ze3sgaHAgfX08L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaGludFwiIGlmPVwie3sgaXNFeHQgfX1cIj7lvpfliIZ7eyBzY29yZSB9feWIhu+8jHt7IHNjb3JlUmFuayB9fTwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJoaW50XCIgaWY9XCJ7eyBpc0JyIH19XCI+5b6X5YiGe3sgc2NvcmUgfX3liIY8L3RleHQ+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaGludFwiPuacrOasoea2iOiAl+eDremHjzp7eyBjYWxvcmllcyB9feWNoTwvdGV4dD5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJoaW50MlwiPueCueWHu+e7p+e7rTwvdGV4dD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgcm91dGVyIGZyb20gXCJAc3lzdGVtLnJvdXRlclwiXG5pbXBvcnQgc2Vuc29yIGZyb20gXCJAc3lzdGVtLnNlbnNvclwiXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiQHN5c3RlbS5zdG9yYWdlXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm90ZWN0ZWQ6IHtcbiAgICBsZXZlbDogMSxcbiAgICBjb250cm9sTW9kZTogMFxuICB9LFxuICBwcml2YXRlOiB7XG4gICAgc2NvcmU6IDAsXG4gICAgc3RhdGU6IDAsXG4gICAgb3ZlcjogZmFsc2UsXG4gICAgd2luOiBmYWxzZSxcbiAgICBpc0kxOiBmYWxzZSxcbiAgICBpc0hwOiBmYWxzZSxcbiAgICBpc0V4dDogZmFsc2UsXG4gICAgaXNCcjogZmFsc2UsXG4gICAgdGltZXI6IG51bGwsXG4gICAgZmllbGRXOiA0ODAsXG4gICAgZmllbGRIOiA0ODAsXG4gICAgcGxheUw6IDc1LFxuICAgIHBsYXlSOiA0MDUsXG4gICAgcGxheVQ6IDgyLFxuICAgIHBsYXlCOiA0MzIsXG4gICAgYnc6IDUyLFxuICAgIGJoOiAxOCxcbiAgICBicGFkOiA2LFxuICAgIHB3OiAxMDAsXG4gICAgcGg6IDEyLFxuICAgIHB4OiAwLFxuICAgIHB5OiAwLFxuICAgIGJ4OiAwLFxuICAgIGJ5OiAwLFxuICAgIGJ2eDogMCxcbiAgICBidnk6IDAsXG4gICAgYmFsbFM6IDIyLFxuICAgIHNlbnNvclg6IDAsXG4gICAgZmlsdGVyZWRYOiAwLFxuICAgIHN3aXBlVmVsOiAwLFxuICAgIGdhbWVUaW1lOiAwLFxuICAgIGNhbG9yaWVzOiAwLFxuICAgIHRpbWVSYW5rOiAnJyxcbiAgICBzY29yZVJhbms6ICcnLFxuICAgIGhwOiAzLFxuICAgIGJlc3RUaW1lOiAwLFxuICAgIGJlc3RTY29yZTogMCxcbiAgICBiZXN0SHBTY29yZTogMCxcbiAgICBiMHg6MCxiMHk6MCxiMGE6ZmFsc2UsYjBjOicjZmYzMzMzJyxcbiAgICBiMXg6MCxiMXk6MCxiMWE6ZmFsc2UsYjFjOicjZmYzMzMzJyxcbiAgICBiMng6MCxiMnk6MCxiMmE6ZmFsc2UsYjJjOicjZmYzMzMzJyxcbiAgICBiM3g6MCxiM3k6MCxiM2E6ZmFsc2UsYjNjOicjZmYzMzMzJyxcbiAgICBiNHg6MCxiNHk6MCxiNGE6ZmFsc2UsYjRjOicjZmYzMzMzJyxcbiAgICBiNXg6MCxiNXk6MCxiNWE6ZmFsc2UsYjVjOicjZmYzMzMzJyxcbiAgICBiNng6MCxiNnk6MCxiNmE6ZmFsc2UsYjZjOicjZmYzMzMzJyxcbiAgICBiN3g6MCxiN3k6MCxiN2E6ZmFsc2UsYjdjOicjZmYzMzMzJyxcbiAgICBiOHg6MCxiOHk6MCxiOGE6ZmFsc2UsYjhjOicjZmYzMzMzJyxcbiAgICBiOXg6MCxiOXk6MCxiOWE6ZmFsc2UsYjljOicjZmYzMzMzJyxcbiAgICBiMTB4OjAsYjEweTowLGIxMGE6ZmFsc2UsYjEwYzonI2ZmMzMzMycsXG4gICAgYjExeDowLGIxMXk6MCxiMTFhOmZhbHNlLGIxMWM6JyNmZjMzMzMnLFxuICAgIGIxMng6MCxiMTJ5OjAsYjEyYTpmYWxzZSxiMTJjOicjZmYzMzMzJyxcbiAgICBiMTN4OjAsYjEzeTowLGIxM2E6ZmFsc2UsYjEzYzonI2ZmMzMzMycsXG4gICAgYjE0eDowLGIxNHk6MCxiMTRhOmZhbHNlLGIxNGM6JyNmZjMzMzMnLFxuICAgIGIxNXg6MCxiMTV5OjAsYjE1YTpmYWxzZSxiMTVjOicjZmYzMzMzJyxcbiAgICBiMTZ4OjAsYjE2eTowLGIxNmE6ZmFsc2UsYjE2YzonI2ZmMzMzMycsXG4gICAgYjE3eDowLGIxN3k6MCxiMTdhOmZhbHNlLGIxN2M6JyNmZjMzMzMnLFxuICAgIGIxOHg6MCxiMTh5OjAsYjE4YTpmYWxzZSxiMThjOicjZmYzMzMzJyxcbiAgICBiMTl4OjAsYjE5eTowLGIxOWE6ZmFsc2UsYjE5YzonI2ZmMzMzMycsXG4gICAgYmx1ZUNvdW50OiAwLFxuICAgIGwwYTpmYWxzZSxsMHg6MCxsMHk6MCxsMHZ4OjAsbDB2eTowLFxuICAgIGwxYTpmYWxzZSxsMXg6MCxsMXk6MCxsMXZ4OjAsbDF2eTowLFxuICAgIGwyYTpmYWxzZSxsMng6MCxsMnk6MCxsMnZ4OjAsbDJ2eTowLFxuICAgIGwzYTpmYWxzZSxsM3g6MCxsM3k6MCxsM3Z4OjAsbDN2eTowLFxuICAgIGw0YTpmYWxzZSxsNHg6MCxsNHk6MCxsNHZ4OjAsbDR2eTowLFxuICAgIGw1YTpmYWxzZSxsNXg6MCxsNXk6MCxsNXZ4OjAsbDV2eTowLFxuICAgIGw2YTpmYWxzZSxsNng6MCxsNnk6MCxsNnZ4OjAsbDZ2eTowLFxuICAgIGw3YTpmYWxzZSxsN3g6MCxsN3k6MCxsN3Z4OjAsbDd2eTowLFxuICAgIGw4YTpmYWxzZSxsOHg6MCxsOHk6MCxsOHZ4OjAsbDh2eTowLFxuICAgIGw5YTpmYWxzZSxsOXg6MCxsOXk6MCxsOXZ4OjAsbDl2eTowXG4gIH0sXG5cbiAgb25Jbml0KCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHRoaXMubGV2ZWwgPSBwYXJzZUludCh0aGlzLmxldmVsKSB8fCAxXG4gICAgdGhpcy5jb250cm9sTW9kZSA9IHBhcnNlSW50KHRoaXMuY29udHJvbE1vZGUpIHx8IDBcbiAgICB0aGlzLnVwZGF0ZU1vZGVGbGFncygpXG4gICAgc3RvcmFnZS5nZXQoeyBrZXk6ICdiZXN0VGltZScsIHN1Y2Nlc3M6IGZ1bmN0aW9uKGQpIHsgc2VsZi5iZXN0VGltZSA9IHBhcnNlSW50KGQpIHx8IDAgfSB9KVxuICAgIHN0b3JhZ2UuZ2V0KHsga2V5OiAnYmVzdFNjb3JlJywgc3VjY2VzczogZnVuY3Rpb24oZCkgeyBzZWxmLmJlc3RTY29yZSA9IHBhcnNlSW50KGQpIHx8IDAgfSB9KVxuICAgIHN0b3JhZ2UuZ2V0KHsga2V5OiAnYmVzdEhwU2NvcmUnLCBzdWNjZXNzOiBmdW5jdGlvbihkKSB7IHNlbGYuYmVzdEhwU2NvcmUgPSBwYXJzZUludChkKSB8fCAwIH0gfSlcbiAgICB0aGlzLmJ1aWxkQnJpY2tzKClcbiAgICB0aGlzLnJlc2V0QmFsbCgpXG4gICAgaWYgKHRoaXMubGV2ZWwgPT09IDIpIHRoaXMuaHAgPSAzXG4gICAgdGhpcy5zdGFydEdhbWUoKVxuICB9LFxuXG4gIHVwZGF0ZU1vZGVGbGFncygpIHtcbiAgICB0aGlzLmlzSTEgPSB0aGlzLmxldmVsID09PSAxXG4gICAgdGhpcy5pc0hwID0gdGhpcy5sZXZlbCA9PT0gMlxuICAgIHRoaXMuaXNFeHQgPSB0aGlzLmxldmVsID09PSAzXG4gICAgdGhpcy5pc0JyID0gdGhpcy5sZXZlbCA9PT0gNFxuICB9LFxuXG4gIG9uUmVhZHkoKSB7fSxcblxuICBzdGFydEdhbWUoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgaWYgKHRoaXMuY29udHJvbE1vZGUgPT09IDApIHtcbiAgICAgIHNlbnNvci5zdWJzY3JpYmVBY2NlbGVyb21ldGVyKHtcbiAgICAgICAgaW50ZXJ2YWw6ICdnYW1lJyxcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKHJldCkgeyBzZWxmLnNlbnNvclggPSByZXQueCB9XG4gICAgICB9KVxuICAgIH1cbiAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuc3RhdGUgPT09IDApIHtcbiAgICAgICAgc2VsZi50aWNrKClcbiAgICAgICAgc2VsZi5nYW1lVGltZSA9IE1hdGguZmxvb3Ioc2VsZi5nYW1lVGltZSAqIDEwICsgMSkgLyAxMFxuICAgICAgfVxuICAgIH0sIDM1KVxuICB9LFxuXG4gIG9uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy50aW1lcikgeyBjbGVhckludGVydmFsKHRoaXMudGltZXIpOyB0aGlzLnRpbWVyID0gbnVsbCB9XG4gICAgdHJ5IHsgc2Vuc29yLnVuc3Vic2NyaWJlQWNjZWxlcm9tZXRlcigpIH0gY2F0Y2ggKGUpIHt9XG4gIH0sXG5cbiAgYnVpbGRCcmlja3MoKSB7XG4gICAgdmFyIHJvd3MgPSBNYXRoLm1pbigyICsgdGhpcy5sZXZlbCwgNSlcbiAgICB2YXIgY29scyA9IDVcbiAgICB2YXIgdG90YWxXID0gY29scyAqIHRoaXMuYncgKyAoY29scyAtIDEpICogdGhpcy5icGFkXG4gICAgdmFyIHN0YXJ0WCA9IE1hdGguZmxvb3IoKHRoaXMuZmllbGRXIC0gdG90YWxXKSAvIDIpXG4gICAgdmFyIHN0YXJ0WSA9IDIzMlxuICAgIHZhciBpZHggPSAwXG4gICAgdmFyIG5vcm1hbENvbG9ycyA9IFsnI2ZmODgwMCcsJyNmZmNjMDAnLCcjMzM5OWZmJywnI2NjMzNmZiddXG4gICAgZm9yICh2YXIgciA9IDA7IHIgPCByb3dzOyByKyspIHtcbiAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgY29sczsgYysrKSB7XG4gICAgICAgIGlmIChpZHggPj0gMjApIGJyZWFrXG4gICAgICAgIHRoaXNbJ2InICsgaWR4ICsgJ3gnXSA9IHN0YXJ0WCArIGMgKiAodGhpcy5idyArIHRoaXMuYnBhZClcbiAgICAgICAgdGhpc1snYicgKyBpZHggKyAneSddID0gc3RhcnRZICsgciAqICh0aGlzLmJoICsgdGhpcy5icGFkKVxuICAgICAgICB0aGlzWydiJyArIGlkeCArICdhJ10gPSB0cnVlXG4gICAgICAgIGlmICh0aGlzLmxldmVsID09PSAyKSB7XG4gICAgICAgICAgdGhpc1snYicgKyBpZHggKyAnYyddID0gJyNmZmNjMDAnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpc1snYicgKyBpZHggKyAnYyddID0gbm9ybWFsQ29sb3JzWyhyICsgYykgJSBub3JtYWxDb2xvcnMubGVuZ3RoXVxuICAgICAgICB9XG4gICAgICAgIGlkeCsrXG4gICAgICB9XG4gICAgICBpZiAoaWR4ID49IDIwKSBicmVha1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gaWR4OyBpIDwgMjA7IGkrKykge1xuICAgICAgdGhpc1snYicgKyBpICsgJ2EnXSA9IGZhbHNlXG4gICAgICB0aGlzWydiJyArIGkgKyAneCddID0gLTk5OVxuICAgICAgdGhpc1snYicgKyBpICsgJ3knXSA9IC05OTlcbiAgICAgIHRoaXNbJ2InICsgaSArICdjJ10gPSAnIzMzMzMzMydcbiAgICB9XG4gICAgaWYgKHRoaXMubGV2ZWwgPT09IDIpIHRoaXMuYXNzaWduSGVhbHRoQnJpY2tzKClcbiAgfSxcblxuICBhc3NpZ25IZWFsdGhCcmlja3MoKSB7XG4gICAgdmFyIGFsaXZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDIwOyBpKyspIHtcbiAgICAgIGlmICh0aGlzWydiJyArIGkgKyAnYSddKSBhbGl2ZS5wdXNoKGkpXG4gICAgfVxuICAgIHZhciB0b3RhbCA9IGFsaXZlLmxlbmd0aFxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdG90YWw7IGorKykge1xuICAgICAgdGhpc1snYicgKyBhbGl2ZVtqXSArICdjJ10gPSAnI2ZmY2MwMCdcbiAgICB9XG4gICAgdmFyIHJlZENvdW50ID0gTWF0aC5taW4oNCwgTWF0aC5mbG9vcih0b3RhbCAqIDAuMikpXG4gICAgdmFyIGdyZWVuQ291bnQgPSBNYXRoLm1pbigzLCBNYXRoLmZsb29yKHRvdGFsICogMC4xNSkpXG4gICAgdmFyIGJsdWVDb3VudCA9IE1hdGgubWluKDMsIE1hdGguZmxvb3IodG90YWwgKiAwLjE1KSlcbiAgICB2YXIgaWR4ID0gMFxuICAgIHZhciBwbGFjZWQgPSAwXG4gICAgdmFyIHJlZFBsYWNlZCA9IDBcbiAgICB3aGlsZSAocGxhY2VkIDwgdG90YWwgJiYgcmVkUGxhY2VkIDwgcmVkQ291bnQpIHtcbiAgICAgIHRoaXNbJ2InICsgYWxpdmVbcGxhY2VkXSArICdjJ10gPSAnI2ZmMzMzMydcbiAgICAgIHBsYWNlZCsrXG4gICAgICByZWRQbGFjZWQrK1xuICAgIH1cbiAgICB2YXIgZ3JlZW5QbGFjZWQgPSAwXG4gICAgd2hpbGUgKHBsYWNlZCA8IHRvdGFsICYmIGdyZWVuUGxhY2VkIDwgZ3JlZW5Db3VudCkge1xuICAgICAgdGhpc1snYicgKyBhbGl2ZVtwbGFjZWRdICsgJ2MnXSA9ICcjMzNjYzMzJ1xuICAgICAgcGxhY2VkKytcbiAgICAgIGdyZWVuUGxhY2VkKytcbiAgICB9XG4gICAgdmFyIGJsdWVQbGFjZWQgPSAwXG4gICAgd2hpbGUgKHBsYWNlZCA8IHRvdGFsICYmIGJsdWVQbGFjZWQgPCBibHVlQ291bnQpIHtcbiAgICAgIHRoaXNbJ2InICsgYWxpdmVbcGxhY2VkXSArICdjJ10gPSAnIzMzOTZmZidcbiAgICAgIHBsYWNlZCsrXG4gICAgICBibHVlUGxhY2VkKytcbiAgICB9XG4gIH0sXG5cbiAgcmVzZXRCYWxsKCkge1xuICAgIHRoaXMucHcgPSAxMDBcbiAgICB0aGlzLnB4ID0gTWF0aC5mbG9vcigodGhpcy5maWVsZFcgLSB0aGlzLnB3KSAvIDIpXG4gICAgdGhpcy5weSA9IHRoaXMucGxheUIgLSAzMFxuICAgIHRoaXMuYnggPSBNYXRoLmZsb29yKHRoaXMuZmllbGRXIC8gMiAtIHRoaXMuYmFsbFMgLyAyKVxuICAgIHRoaXMuYnkgPSB0aGlzLnB5IC0gMzBcbiAgICBpZiAodGhpcy5sZXZlbCA9PT0gMykge1xuICAgICAgdmFyIHNwZDMgPSAzICsgMC41XG4gICAgICB0aGlzLmJ2eCA9IHNwZDNcbiAgICAgIHRoaXMuYnZ5ID0gLXNwZDNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNwZCA9IDIgKyAodGhpcy5sZXZlbCAtIDEpICogMC41XG4gICAgICB0aGlzLmJ2eCA9IHNwZFxuICAgICAgdGhpcy5idnkgPSAtc3BkXG4gICAgfVxuICAgIHRoaXMuc2NvcmUgPSAwXG4gICAgdGhpcy5zdGF0ZSA9IDBcbiAgICB0aGlzLm92ZXIgPSBmYWxzZVxuICAgIHRoaXMud2luID0gZmFsc2VcbiAgICB0aGlzLmZpbHRlcmVkWCA9IDBcbiAgICB0aGlzLnN3aXBlVmVsID0gMFxuICAgIHRoaXMuZ2FtZVRpbWUgPSAwXG4gICAgdGhpcy5jYWxvcmllcyA9IDBcbiAgICB0aGlzLmJsdWVDb3VudCA9IDBcbiAgICBmb3IgKHZhciBzID0gMDsgcyA8IDEwOyBzKyspIHtcbiAgICAgIHRoaXNbJ2wnICsgcyArICdhJ10gPSBmYWxzZVxuICAgICAgdGhpc1snbCcgKyBzICsgJ3gnXSA9IC05OTlcbiAgICAgIHRoaXNbJ2wnICsgcyArICd5J10gPSAtOTk5XG4gICAgICB0aGlzWydsJyArIHMgKyAndngnXSA9IDBcbiAgICAgIHRoaXNbJ2wnICsgcyArICd2eSddID0gMFxuICAgIH1cbiAgfSxcblxuICBzcGF3bkJsdWVCYWxsKGN4LCBjeSkge1xuICAgIGlmICh0aGlzLmJsdWVDb3VudCA+PSAxMCkgcmV0dXJuXG4gICAgdmFyIHNsb3QgPSAtMVxuICAgIGZvciAodmFyIHMgPSAwOyBzIDwgMTA7IHMrKykge1xuICAgICAgaWYgKCF0aGlzWydsJyArIHMgKyAnYSddKSB7IHNsb3QgPSBzOyBicmVhayB9XG4gICAgfVxuICAgIGlmIChzbG90IDwgMCkgcmV0dXJuXG4gICAgdmFyIHNwZCA9IE1hdGguc3FydCh0aGlzLmJ2eCAqIHRoaXMuYnZ4ICsgdGhpcy5idnkgKiB0aGlzLmJ2eSlcbiAgICBpZiAoc3BkIDwgMC4xKSBzcGQgPSAyLjVcbiAgICB2YXIgYW5nID0gTWF0aC5QSSAqICgxICsgTWF0aC5yYW5kb20oKSlcbiAgICB0aGlzWydsJyArIHNsb3QgKyAnYSddID0gdHJ1ZVxuICAgIHRoaXNbJ2wnICsgc2xvdCArICd4J10gPSBjeCAtIHRoaXMuYmFsbFMgLyAyXG4gICAgdGhpc1snbCcgKyBzbG90ICsgJ3knXSA9IGN5IC0gdGhpcy5iYWxsUyAvIDJcbiAgICB0aGlzWydsJyArIHNsb3QgKyAndngnXSA9IE1hdGguY29zKGFuZykgKiBzcGRcbiAgICB0aGlzWydsJyArIHNsb3QgKyAndnknXSA9IE1hdGguc2luKGFuZykgKiBzcGRcbiAgICB0aGlzLmJsdWVDb3VudCsrXG4gIH0sXG5cbiAgcmVzcGF3bkJhbGwoKSB7XG4gICAgdGhpcy5ieCA9IE1hdGguZmxvb3IodGhpcy5maWVsZFcgLyAyIC0gdGhpcy5iYWxsUyAvIDIpXG4gICAgdGhpcy5ieSA9IHRoaXMucHkgLSAzMFxuICAgIHZhciBzcGQgPSAyICsgKHRoaXMubGV2ZWwgLSAxKSAqIDAuNVxuICAgIHRoaXMuYnZ4ID0gc3BkICogKE1hdGgucmFuZG9tKCkgPCAwLjUgPyAtMSA6IDEpXG4gICAgdGhpcy5idnkgPSAtc3BkXG4gIH0sXG5cbiAgYWltQXRCcmljayhieCwgYnksIHZ4LCB2eSkge1xuICAgIHZhciBhbGl2ZSA9IFtdXG4gICAgdmFyIHRvdGFsQSA9IE1hdGgubWluKCgyICsgdGhpcy5sZXZlbCkgKiA1LCAyMClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdGFsQTsgaSsrKSB7XG4gICAgICBpZiAodGhpc1snYicgKyBpICsgJ2EnXSkgYWxpdmUucHVzaChpKVxuICAgIH1cbiAgICBpZiAoYWxpdmUubGVuZ3RoID09PSAwIHx8IGFsaXZlLmxlbmd0aCA+IDMpIHJldHVybiB7IHZ4OiB2eCwgdnk6IHZ5IH1cbiAgICB2YXIgdGFyZ2V0ID0gYWxpdmVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxpdmUubGVuZ3RoKV1cbiAgICB2YXIgZHggPSB0aGlzWydiJyArIHRhcmdldCArICd4J10gKyB0aGlzLmJ3IC8gMiAtIChieCArIHRoaXMuYmFsbFMgLyAyKVxuICAgIHZhciBkeSA9IHRoaXNbJ2InICsgdGFyZ2V0ICsgJ3knXSArIHRoaXMuYmggLyAyIC0gKGJ5ICsgdGhpcy5iYWxsUyAvIDIpXG4gICAgdmFyIGxlbiA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbiAgICBpZiAobGVuIDwgMSkgcmV0dXJuIHsgdng6IHZ4LCB2eTogdnkgfVxuICAgIHZhciBzcGQgPSBNYXRoLnNxcnQodnggKiB2eCArIHZ5ICogdnkpXG4gICAgaWYgKHNwZCA8IDAuMSkgc3BkID0gMlxuICAgIHZhciBtaXggPSAwLjU1XG4gICAgaWYgKGFsaXZlLmxlbmd0aCA9PT0gMikgbWl4ID0gMC40XG4gICAgaWYgKGFsaXZlLmxlbmd0aCA9PT0gMykgbWl4ID0gMC4yMlxuICAgIHZhciBueCA9IHZ4ICogKDEgLSBtaXgpICsgKGR4IC8gbGVuKSAqIHNwZCAqIG1peFxuICAgIHZhciBueSA9IHZ5ICogKDEgLSBtaXgpICsgKGR5IC8gbGVuKSAqIHNwZCAqIG1peFxuICAgIHZhciBucyA9IE1hdGguc3FydChueCAqIG54ICsgbnkgKiBueSlcbiAgICBpZiAobnMgPCAwLjEpIG5zID0gMVxuICAgIHJldHVybiB7IHZ4OiBueCAvIG5zICogc3BkLCB2eTogbnkgLyBucyAqIHNwZCB9XG4gIH0sXG5cbiAgdGljaygpIHtcbiAgICBpZiAodGhpcy5sZXZlbCA9PT0gMykge1xuICAgICAgaWYgKHRoaXMuY29udHJvbE1vZGUgPT09IDApIHtcbiAgICAgICAgdmFyIHJhd1gzID0gdGhpcy5zZW5zb3JYXG4gICAgICAgIHRoaXMuZmlsdGVyZWRYID0gdGhpcy5maWx0ZXJlZFggKiAwLjcgKyByYXdYMyAqIDAuM1xuICAgICAgICB2YXIgREVBRDMgPSAwLjVcbiAgICAgICAgdmFyIHRpbHQzID0gdGhpcy5maWx0ZXJlZFhcbiAgICAgICAgaWYgKHRpbHQzID4gLURFQUQzICYmIHRpbHQzIDwgREVBRDMpIHRpbHQzID0gMFxuICAgICAgICB0aGlzLnB4IC09IHRpbHQzICogMC43XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zd2lwZVZlbCAhPT0gMCkge1xuICAgICAgICB0aGlzLnB4ICs9IHRoaXMuc3dpcGVWZWxcbiAgICAgICAgdGhpcy5zd2lwZVZlbCAqPSAwLjlcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuc3dpcGVWZWwpIDwgMC41KSB0aGlzLnN3aXBlVmVsID0gMFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5jb250cm9sTW9kZSA9PT0gMCkge1xuICAgICAgICB2YXIgcmF3WCA9IHRoaXMuc2Vuc29yWFxuICAgICAgICB0aGlzLmZpbHRlcmVkWCA9IHRoaXMuZmlsdGVyZWRYICogMC43ICsgcmF3WCAqIDAuM1xuICAgICAgICB2YXIgREVBRCA9IDAuNVxuICAgICAgICB2YXIgdGlsdCA9IHRoaXMuZmlsdGVyZWRYXG4gICAgICAgIGlmICh0aWx0ID4gLURFQUQgJiYgdGlsdCA8IERFQUQpIHRpbHQgPSAwXG4gICAgICAgIHRoaXMucHggLT0gdGlsdCAqIDAuNlxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3dpcGVWZWwgIT09IDApIHtcbiAgICAgICAgdGhpcy5weCArPSB0aGlzLnN3aXBlVmVsXG4gICAgICAgIHRoaXMuc3dpcGVWZWwgKj0gMC45XG4gICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnN3aXBlVmVsKSA8IDAuNSkgdGhpcy5zd2lwZVZlbCA9IDBcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMucHggPCB0aGlzLnBsYXlMKSB0aGlzLnB4ID0gdGhpcy5wbGF5TFxuICAgIGlmICh0aGlzLnB4ID4gdGhpcy5wbGF5UiAtIHRoaXMucHcpIHRoaXMucHggPSB0aGlzLnBsYXlSIC0gdGhpcy5wd1xuXG4gICAgdGhpcy5ieCArPSB0aGlzLmJ2eFxuICAgIHRoaXMuYnkgKz0gdGhpcy5idnlcblxuICAgIGlmICh0aGlzLmJ4IDw9IHRoaXMucGxheUwpIHsgdGhpcy5ieCA9IHRoaXMucGxheUw7IHRoaXMuYnZ4ID0gTWF0aC5hYnModGhpcy5idngpIH1cbiAgICBpZiAodGhpcy5ieCArIHRoaXMuYmFsbFMgPj0gdGhpcy5wbGF5UikgeyB0aGlzLmJ4ID0gdGhpcy5wbGF5UiAtIHRoaXMuYmFsbFM7IHRoaXMuYnZ4ID0gLU1hdGguYWJzKHRoaXMuYnZ4KSB9XG4gICAgaWYgKHRoaXMuYnkgPD0gdGhpcy5wbGF5VCkgeyB0aGlzLmJ5ID0gdGhpcy5wbGF5VDsgdGhpcy5idnkgPSBNYXRoLmFicyh0aGlzLmJ2eSkgfVxuXG4gICAgaWYgKHRoaXMuYnZ5ID4gMCAmJlxuICAgICAgICB0aGlzLmJ5ICsgdGhpcy5iYWxsUyA+PSB0aGlzLnB5ICYmXG4gICAgICAgIHRoaXMuYnkgKyB0aGlzLmJhbGxTIDw9IHRoaXMucHkgKyB0aGlzLnBoICsgNCAmJlxuICAgICAgICB0aGlzLmJ4ICsgdGhpcy5iYWxsUyA+PSB0aGlzLnB4ICYmXG4gICAgICAgIHRoaXMuYnggPD0gdGhpcy5weCArIHRoaXMucHcpIHtcbiAgICAgIHRoaXMuYnkgPSB0aGlzLnB5IC0gdGhpcy5iYWxsU1xuICAgICAgdGhpcy5idnkgPSAtTWF0aC5hYnModGhpcy5idnkpXG4gICAgICB2YXIgaGl0ID0gKHRoaXMuYnggKyB0aGlzLmJhbGxTIC8gMiAtIHRoaXMucHgpIC8gdGhpcy5wd1xuICAgICAgaWYgKHRoaXMubGV2ZWwgPT09IDMpIHtcbiAgICAgICAgdGhpcy5idnggPSAoaGl0IC0gMC41KSAqIDZcbiAgICAgICAgaWYgKHRoaXMuYnZ4ID4gMCAmJiB0aGlzLmJ2eCA8IDEuNSkgdGhpcy5idnggPSAxLjVcbiAgICAgICAgaWYgKHRoaXMuYnZ4IDwgMCAmJiB0aGlzLmJ2eCA+IC0xLjUpIHRoaXMuYnZ4ID0gLTEuNVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5idnggPSAoaGl0IC0gMC41KSAqIDRcbiAgICAgICAgaWYgKHRoaXMuYnZ4ID4gMCAmJiB0aGlzLmJ2eCA8IDEpIHRoaXMuYnZ4ID0gMVxuICAgICAgICBpZiAodGhpcy5idnggPCAwICYmIHRoaXMuYnZ4ID4gLTEpIHRoaXMuYnZ4ID0gLTFcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaGl0SWR4ID0gLTFcbiAgICB2YXIgdG90YWwgPSBNYXRoLm1pbigoMiArIHRoaXMubGV2ZWwpICogNSwgMjApXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKSB7XG4gICAgICBpZiAoIXRoaXNbJ2InICsgaSArICdhJ10pIGNvbnRpbnVlXG4gICAgICB2YXIgYmt4ID0gdGhpc1snYicgKyBpICsgJ3gnXVxuICAgICAgdmFyIGJreSA9IHRoaXNbJ2InICsgaSArICd5J11cbiAgICAgIHZhciBvdmVybGFwWCA9IE1hdGgubWluKHRoaXMuYnggKyB0aGlzLmJhbGxTIC0gYmt4LCBia3ggKyB0aGlzLmJ3IC0gdGhpcy5ieClcbiAgICAgIHZhciBvdmVybGFwWSA9IE1hdGgubWluKHRoaXMuYnkgKyB0aGlzLmJhbGxTIC0gYmt5LCBia3kgKyB0aGlzLmJoIC0gdGhpcy5ieSlcbiAgICAgIGlmIChvdmVybGFwWCA+IDAgJiYgb3ZlcmxhcFkgPiAwKSB7XG4gICAgICAgIGhpdElkeCA9IGlcbiAgICAgICAgaWYgKG92ZXJsYXBYIDwgb3ZlcmxhcFkpIHtcbiAgICAgICAgICB0aGlzLmJ2eCA9IC10aGlzLmJ2eFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYnZ5ID0gLXRoaXMuYnZ5XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGV2ZWwgPT09IDIgJiYgdGhpc1snYicgKyBpICsgJ2MnXSA9PT0gJyNmZjMzMzMnKSB7XG4gICAgICAgICAgdGhpcy5ocC0tXG4gICAgICAgICAgaWYgKHRoaXMuaHAgPD0gMCkgeyB0aGlzLnN0YXRlID0gMTsgdGhpcy5vdmVyID0gdHJ1ZTsgdGhpcy5jYWxjUmFuaygpOyByZXR1cm4gfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGV2ZWwgPT09IDIgJiYgdGhpc1snYicgKyBpICsgJ2MnXSA9PT0gJyMzM2NjMzMnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaHAgPCA1KSB0aGlzLmhwKytcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNjb3JlICs9IDEwXG4gICAgICAgICAgaWYgKHRoaXMubGV2ZWwgPT09IDQpIHtcbiAgICAgICAgICAgIHRoaXMuc3Bhd25CbHVlQmFsbCh0aGlzWydiJyArIGkgKyAneCddICsgdGhpcy5idyAvIDIsIHRoaXNbJ2InICsgaSArICd5J10gKyB0aGlzLmJoIC8gMilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhpdElkeCA+PSAwKSB7XG4gICAgICB0aGlzWydiJyArIGhpdElkeCArICdhJ10gPSBmYWxzZVxuICAgICAgdGhpc1snYicgKyBoaXRJZHggKyAneCddID0gLTk5OVxuICAgICAgdGhpc1snYicgKyBoaXRJZHggKyAneSddID0gLTk5OVxuICAgIH1cblxuICAgIGZvciAodmFyIHMgPSAwOyBzIDwgMTA7IHMrKykge1xuICAgICAgaWYgKCF0aGlzWydsJyArIHMgKyAnYSddKSBjb250aW51ZVxuICAgICAgdmFyIGx4ID0gdGhpc1snbCcgKyBzICsgJ3gnXSArIHRoaXNbJ2wnICsgcyArICd2eCddXG4gICAgICB2YXIgbHkgPSB0aGlzWydsJyArIHMgKyAneSddICsgdGhpc1snbCcgKyBzICsgJ3Z5J11cbiAgICAgIHRoaXNbJ2wnICsgcyArICd4J10gPSBseFxuICAgICAgdGhpc1snbCcgKyBzICsgJ3knXSA9IGx5XG4gICAgICBpZiAobHggPD0gdGhpcy5wbGF5TCkgeyB0aGlzWydsJyArIHMgKyAneCddID0gdGhpcy5wbGF5TDsgdGhpc1snbCcgKyBzICsgJ3Z4J10gPSBNYXRoLmFicyh0aGlzWydsJyArIHMgKyAndngnXSkgfVxuICAgICAgaWYgKGx4ICsgdGhpcy5iYWxsUyA+PSB0aGlzLnBsYXlSKSB7IHRoaXNbJ2wnICsgcyArICd4J10gPSB0aGlzLnBsYXlSIC0gdGhpcy5iYWxsUzsgdGhpc1snbCcgKyBzICsgJ3Z4J10gPSAtTWF0aC5hYnModGhpc1snbCcgKyBzICsgJ3Z4J10pIH1cbiAgICAgIGlmIChseSA8PSB0aGlzLnBsYXlUKSB7IHRoaXNbJ2wnICsgcyArICd5J10gPSB0aGlzLnBsYXlUOyB0aGlzWydsJyArIHMgKyAndnknXSA9IE1hdGguYWJzKHRoaXNbJ2wnICsgcyArICd2eSddKSB9XG4gICAgICBpZiAodGhpc1snbCcgKyBzICsgJ3Z5J10gPiAwICYmXG4gICAgICAgICAgbHkgKyB0aGlzLmJhbGxTID49IHRoaXMucHkgJiZcbiAgICAgICAgICBseSArIHRoaXMuYmFsbFMgPD0gdGhpcy5weSArIHRoaXMucGggKyA0ICYmXG4gICAgICAgICAgbHggKyB0aGlzLmJhbGxTID49IHRoaXMucHggJiZcbiAgICAgICAgICBseCA8PSB0aGlzLnB4ICsgdGhpcy5wdykge1xuICAgICAgICB0aGlzWydsJyArIHMgKyAneSddID0gdGhpcy5weSAtIHRoaXMuYmFsbFNcbiAgICAgICAgdGhpc1snbCcgKyBzICsgJ3Z5J10gPSAtTWF0aC5hYnModGhpc1snbCcgKyBzICsgJ3Z5J10pXG4gICAgICAgIHZhciBsaGl0ID0gKGx4ICsgdGhpcy5iYWxsUyAvIDIgLSB0aGlzLnB4KSAvIHRoaXMucHdcbiAgICAgICAgdGhpc1snbCcgKyBzICsgJ3Z4J10gPSAobGhpdCAtIDAuNSkgKiA0XG4gICAgICAgIGlmICh0aGlzWydsJyArIHMgKyAndngnXSA+IDAgJiYgdGhpc1snbCcgKyBzICsgJ3Z4J10gPCAxKSB0aGlzWydsJyArIHMgKyAndngnXSA9IDFcbiAgICAgICAgaWYgKHRoaXNbJ2wnICsgcyArICd2eCddIDwgMCAmJiB0aGlzWydsJyArIHMgKyAndngnXSA+IC0xKSB0aGlzWydsJyArIHMgKyAndngnXSA9IC0xXG4gICAgICB9XG4gICAgICB2YXIgbGhpdElkeCA9IC0xXG4gICAgICB2YXIgdG90YWxMID0gTWF0aC5taW4oKDIgKyB0aGlzLmxldmVsKSAqIDUsIDIwKVxuICAgICAgZm9yICh2YXIgaTIgPSAwOyBpMiA8IHRvdGFsTDsgaTIrKykge1xuICAgICAgICBpZiAoIXRoaXNbJ2InICsgaTIgKyAnYSddKSBjb250aW51ZVxuICAgICAgICB2YXIgYngyID0gdGhpc1snYicgKyBpMiArICd4J11cbiAgICAgICAgdmFyIGJ5MiA9IHRoaXNbJ2InICsgaTIgKyAneSddXG4gICAgICAgIHZhciBveCA9IE1hdGgubWluKGx4ICsgdGhpcy5iYWxsUyAtIGJ4MiwgYngyICsgdGhpcy5idyAtIGx4KVxuICAgICAgICB2YXIgb3kgPSBNYXRoLm1pbihseSArIHRoaXMuYmFsbFMgLSBieTIsIGJ5MiArIHRoaXMuYmggLSBseSlcbiAgICAgICAgaWYgKG94ID4gMCAmJiBveSA+IDApIHtcbiAgICAgICAgICBsaGl0SWR4ID0gaTJcbiAgICAgICAgICBpZiAob3ggPCBveSkge1xuICAgICAgICAgICAgdGhpc1snbCcgKyBzICsgJ3Z4J10gPSAtdGhpc1snbCcgKyBzICsgJ3Z4J11cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpc1snbCcgKyBzICsgJ3Z5J10gPSAtdGhpc1snbCcgKyBzICsgJ3Z5J11cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zY29yZSArPSA1XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGxoaXRJZHggPj0gMCkge1xuICAgICAgICB0aGlzWydiJyArIGxoaXRJZHggKyAnYSddID0gZmFsc2VcbiAgICAgICAgdGhpc1snYicgKyBsaGl0SWR4ICsgJ3gnXSA9IC05OTlcbiAgICAgICAgdGhpc1snYicgKyBsaGl0SWR4ICsgJ3knXSA9IC05OTlcbiAgICAgIH1cbiAgICAgIHZhciBhaW1MID0gdGhpcy5haW1BdEJyaWNrKHRoaXNbJ2wnICsgcyArICd4J10sIHRoaXNbJ2wnICsgcyArICd5J10sIHRoaXNbJ2wnICsgcyArICd2eCddLCB0aGlzWydsJyArIHMgKyAndnknXSlcbiAgICAgIHRoaXNbJ2wnICsgcyArICd2eCddID0gYWltTC52eFxuICAgICAgdGhpc1snbCcgKyBzICsgJ3Z5J10gPSBhaW1MLnZ5XG4gICAgICBpZiAodGhpc1snbCcgKyBzICsgJ3knXSArIHRoaXMuYmFsbFMgPiB0aGlzLnBsYXlCKSB7XG4gICAgICAgIHRoaXNbJ2wnICsgcyArICdhJ10gPSBmYWxzZVxuICAgICAgICB0aGlzLmJsdWVDb3VudC0tXG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFpbU0gPSB0aGlzLmFpbUF0QnJpY2sodGhpcy5ieCwgdGhpcy5ieSwgdGhpcy5idngsIHRoaXMuYnZ5KVxuICAgIHRoaXMuYnZ4ID0gYWltTS52eFxuICAgIHRoaXMuYnZ5ID0gYWltTS52eVxuXG4gICAgdmFyIGFsaXZlQ291bnQgPSAwXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCAyMDsgaisrKSB7XG4gICAgICBpZiAodGhpc1snYicgKyBqICsgJ2EnXSkgYWxpdmVDb3VudCsrXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYnkgKyB0aGlzLmJhbGxTID4gdGhpcy5wbGF5Qikge1xuICAgICAgaWYgKHRoaXMubGV2ZWwgPT09IDIpIHtcbiAgICAgICAgdGhpcy5ocC0tXG4gICAgICAgIGlmICh0aGlzLmhwIDw9IDApIHtcbiAgICAgICAgICB0aGlzLnN0YXRlID0gMVxuICAgICAgICAgIHRoaXMub3ZlciA9IHRydWVcbiAgICAgICAgICB0aGlzLmNhbGNSYW5rKClcbiAgICAgICAgICB0aGlzLnNhdmVCZXN0SHBTY29yZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZXNwYXduQmFsbCgpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlID0gMVxuICAgICAgdGhpcy5vdmVyID0gdHJ1ZVxuICAgICAgdGhpcy5jYWxjUmFuaygpXG4gICAgICBpZiAodGhpcy5sZXZlbCA9PT0gMykgdGhpcy5zYXZlQmVzdFNjb3JlKClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoYWxpdmVDb3VudCA8PSAwKSB7XG4gICAgICB0aGlzLnN0YXRlID0gMlxuICAgICAgdGhpcy53aW4gPSB0cnVlXG4gICAgICB0aGlzLmNhbGNSYW5rKClcbiAgICAgIGlmICh0aGlzLmxldmVsID09PSAxKSB0aGlzLnNhdmVCZXN0VGltZSgpXG4gICAgICBpZiAodGhpcy5sZXZlbCA9PT0gMikgdGhpcy5zYXZlQmVzdEhwU2NvcmUoKVxuICAgICAgaWYgKHRoaXMubGV2ZWwgPT09IDMpIHRoaXMuc2F2ZUJlc3RTY29yZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH0sXG5cbiAgY2FsY1JhbmsoKSB7XG4gICAgdGhpcy5jYWxvcmllcyA9IE1hdGguZmxvb3IodGhpcy5nYW1lVGltZSAvIDYwICogMC44NSAqIDEwKSAvIDEwXG4gICAgaWYgKHRoaXMubGV2ZWwgPT09IDEpIHtcbiAgICAgIHZhciB0ID0gdGhpcy5nYW1lVGltZVxuICAgICAgaWYgKHQgPD0gMzApIHRoaXMudGltZVJhbmsgPSAn5bey57uP6LaF6LaKOTkl546p5a62J1xuICAgICAgZWxzZSBpZiAodCA8PSA2MCkgdGhpcy50aW1lUmFuayA9ICflt7Lnu4/otoXotoo4MCXnjqnlrrYnXG4gICAgICBlbHNlIGlmICh0IDw9IDkwKSB0aGlzLnRpbWVSYW5rID0gJ+W3sue7j+i2hei2ijYwJeeOqeWutidcbiAgICAgIGVsc2UgaWYgKHQgPD0gMTIwKSB0aGlzLnRpbWVSYW5rID0gJ+W3sue7j+i2hei2ijQwJeeOqeWutidcbiAgICAgIGVsc2UgdGhpcy50aW1lUmFuayA9ICflt7Lnu4/otoXotooyMCXnjqnlrrYnXG4gICAgfVxuICAgIGlmICh0aGlzLmxldmVsID09PSAzKSB7XG4gICAgICB2YXIgcyA9IHRoaXMuc2NvcmVcbiAgICAgIGlmIChzID49IDIwMCkgdGhpcy5zY29yZVJhbmsgPSAn5bey57uP6LaF6LaKOTkl546p5a62J1xuICAgICAgZWxzZSBpZiAocyA+PSAxNTApIHRoaXMuc2NvcmVSYW5rID0gJ+W3sue7j+i2hei2ijgwJeeOqeWutidcbiAgICAgIGVsc2UgaWYgKHMgPj0gMTAwKSB0aGlzLnNjb3JlUmFuayA9ICflt7Lnu4/otoXotoo2MCXnjqnlrrYnXG4gICAgICBlbHNlIGlmIChzID49IDUwKSB0aGlzLnNjb3JlUmFuayA9ICflt7Lnu4/otoXotoo0MCXnjqnlrrYnXG4gICAgICBlbHNlIHRoaXMuc2NvcmVSYW5rID0gJ+W3sue7j+i2hei2ijIwJeeOqeWutidcbiAgICB9XG4gIH0sXG5cbiAgc2F2ZUJlc3RUaW1lKCkge1xuICAgIGlmICh0aGlzLmJlc3RUaW1lID09PSAwIHx8IHRoaXMuZ2FtZVRpbWUgPCB0aGlzLmJlc3RUaW1lKSB7XG4gICAgICB0aGlzLmJlc3RUaW1lID0gTWF0aC5mbG9vcih0aGlzLmdhbWVUaW1lKVxuICAgICAgc3RvcmFnZS5zZXQoeyBrZXk6ICdiZXN0VGltZScsIGRhdGE6IFN0cmluZyh0aGlzLmJlc3RUaW1lKSB9KVxuICAgIH1cbiAgfSxcblxuICBzYXZlQmVzdFNjb3JlKCkge1xuICAgIGlmICh0aGlzLnNjb3JlID4gdGhpcy5iZXN0U2NvcmUpIHtcbiAgICAgIHRoaXMuYmVzdFNjb3JlID0gdGhpcy5zY29yZVxuICAgICAgc3RvcmFnZS5zZXQoeyBrZXk6ICdiZXN0U2NvcmUnLCBkYXRhOiBTdHJpbmcodGhpcy5iZXN0U2NvcmUpIH0pXG4gICAgfVxuICB9LFxuXG4gIHNhdmVCZXN0SHBTY29yZSgpIHtcbiAgICBpZiAodGhpcy5zY29yZSA+IHRoaXMuYmVzdEhwU2NvcmUpIHtcbiAgICAgIHRoaXMuYmVzdEhwU2NvcmUgPSB0aGlzLnNjb3JlXG4gICAgICBzdG9yYWdlLnNldCh7IGtleTogJ2Jlc3RIcFNjb3JlJywgZGF0YTogU3RyaW5nKHRoaXMuYmVzdEhwU2NvcmUpIH0pXG4gICAgfVxuICB9LFxuXG4gIG9uU3dpcGUoZSkge1xuICAgIGlmICh0aGlzLnN0YXRlICE9PSAwKSB7IHRoaXMuYWZ0ZXJHYW1lKCk7IHJldHVybiB9XG4gICAgaWYgKHRoaXMubGV2ZWwgPT09IDMpIHtcbiAgICAgIGlmIChlLmRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB0aGlzLnN3aXBlVmVsID0gLTExXG4gICAgICBlbHNlIGlmIChlLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0JykgdGhpcy5zd2lwZVZlbCA9IDExXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlLmRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB0aGlzLnN3aXBlVmVsID0gLTkuNVxuICAgICAgZWxzZSBpZiAoZS5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHRoaXMuc3dpcGVWZWwgPSA5LjVcbiAgICB9XG4gIH0sXG5cbiAgb25NYXNrQ2xpY2soKSB7IHRoaXMuYWZ0ZXJHYW1lKCkgfSxcblxuICBhZnRlckdhbWUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IDEpIHtcbiAgICAgIGlmICh0aGlzLmxldmVsID09PSAyKSB0aGlzLmhwID0gM1xuICAgICAgdGhpcy5idWlsZEJyaWNrcygpXG4gICAgICB0aGlzLnJlc2V0QmFsbCgpXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSAyKSB7XG4gICAgICBpZiAodGhpcy5sZXZlbCA8IDMpIHtcbiAgICAgICAgdGhpcy5sZXZlbCsrXG4gICAgICAgIHRoaXMudXBkYXRlTW9kZUZsYWdzKClcbiAgICAgICAgdGhpcy5idWlsZEJyaWNrcygpXG4gICAgICAgIHRoaXMucmVzZXRCYWxsKClcbiAgICAgICAgaWYgKHRoaXMubGV2ZWwgPT09IDIpIHRoaXMuaHAgPSAzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3V0ZXIucHVzaCh7IHVyaTogJy9wYWdlcy9pbmRleCcgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4ucGFnZSB7XG4gIHdpZHRoOiA0ODBweDtcbiAgaGVpZ2h0OiA0ODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cblxuLmZpZWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDgwcHg7XG4gIGhlaWdodDogNDgwcHg7XG59XG5cbi5pbmZvLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNDgwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwyMCwyMCwwLjkpO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogODtcbn1cblxuLmluZm8taXRlbSB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5mby10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKHNoYXBlOiBjaXJjbGUpIHtcbiAgLmluZm8tYmFyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgfVxufVxuXG4uYnJpY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MnB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnBhZGRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2NmZjtcbn1cblxuLmJhbGwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmMDA7XG59XG5cbi5iYWxsLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJhbGwtYmx1ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzOTlmZjtcbn1cblxuLm1hc2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDQ4MHB4O1xuICBoZWlnaHQ6IDQ4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuODUpO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTA7XG59XG5cbi5tc2cge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uaGludCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmNjMDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5oaW50MiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM4ODg4ODg7XG59XG48L3N0eWxlPiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwiZSIsIndpbmRvdyIsIl9zeXN0ZW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiJGFwcF9yZXF1aXJlJCIsIl9zeXN0ZW0yIiwiX3N5c3RlbTMiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsInByb3RlY3RlZCIsImxldmVsIiwiY29udHJvbE1vZGUiLCJwcml2YXRlIiwic2NvcmUiLCJzdGF0ZSIsIm92ZXIiLCJ3aW4iLCJpc0kxIiwiaXNIcCIsImlzRXh0IiwiaXNCciIsInRpbWVyIiwiZmllbGRXIiwiZmllbGRIIiwicGxheUwiLCJwbGF5UiIsInBsYXlUIiwicGxheUIiLCJidyIsImJoIiwiYnBhZCIsInB3IiwicGgiLCJweCIsInB5IiwiYngiLCJieSIsImJ2eCIsImJ2eSIsImJhbGxTIiwic2Vuc29yWCIsImZpbHRlcmVkWCIsInN3aXBlVmVsIiwiZ2FtZVRpbWUiLCJjYWxvcmllcyIsInRpbWVSYW5rIiwic2NvcmVSYW5rIiwiaHAiLCJiZXN0VGltZSIsImJlc3RTY29yZSIsImJlc3RIcFNjb3JlIiwiYjB4IiwiYjB5IiwiYjBhIiwiYjBjIiwiYjF4IiwiYjF5IiwiYjFhIiwiYjFjIiwiYjJ4IiwiYjJ5IiwiYjJhIiwiYjJjIiwiYjN4IiwiYjN5IiwiYjNhIiwiYjNjIiwiYjR4IiwiYjR5IiwiYjRhIiwiYjRjIiwiYjV4IiwiYjV5IiwiYjVhIiwiYjVjIiwiYjZ4IiwiYjZ5IiwiYjZhIiwiYjZjIiwiYjd4IiwiYjd5IiwiYjdhIiwiYjdjIiwiYjh4IiwiYjh5IiwiYjhhIiwiYjhjIiwiYjl4IiwiYjl5IiwiYjlhIiwiYjljIiwiYjEweCIsImIxMHkiLCJiMTBhIiwiYjEwYyIsImIxMXgiLCJiMTF5IiwiYjExYSIsImIxMWMiLCJiMTJ4IiwiYjEyeSIsImIxMmEiLCJiMTJjIiwiYjEzeCIsImIxM3kiLCJiMTNhIiwiYjEzYyIsImIxNHgiLCJiMTR5IiwiYjE0YSIsImIxNGMiLCJiMTV4IiwiYjE1eSIsImIxNWEiLCJiMTVjIiwiYjE2eCIsImIxNnkiLCJiMTZhIiwiYjE2YyIsImIxN3giLCJiMTd5IiwiYjE3YSIsImIxN2MiLCJiMTh4IiwiYjE4eSIsImIxOGEiLCJiMThjIiwiYjE5eCIsImIxOXkiLCJiMTlhIiwiYjE5YyIsImJsdWVDb3VudCIsImwwYSIsImwweCIsImwweSIsImwwdngiLCJsMHZ5IiwibDFhIiwibDF4IiwibDF5IiwibDF2eCIsImwxdnkiLCJsMmEiLCJsMngiLCJsMnkiLCJsMnZ4IiwibDJ2eSIsImwzYSIsImwzeCIsImwzeSIsImwzdngiLCJsM3Z5IiwibDRhIiwibDR4IiwibDR5IiwibDR2eCIsImw0dnkiLCJsNWEiLCJsNXgiLCJsNXkiLCJsNXZ4IiwibDV2eSIsImw2YSIsImw2eCIsImw2eSIsImw2dngiLCJsNnZ5IiwibDdhIiwibDd4IiwibDd5IiwibDd2eCIsImw3dnkiLCJsOGEiLCJsOHgiLCJsOHkiLCJsOHZ4IiwibDh2eSIsImw5YSIsImw5eCIsImw5eSIsImw5dngiLCJsOXZ5Iiwib25Jbml0Iiwic2VsZiIsInBhcnNlSW50IiwidXBkYXRlTW9kZUZsYWdzIiwic3RvcmFnZSIsImdldCIsImtleSIsInN1Y2Nlc3MiLCJkIiwiYnVpbGRCcmlja3MiLCJyZXNldEJhbGwiLCJzdGFydEdhbWUiLCJvblJlYWR5Iiwic2Vuc29yIiwic3Vic2NyaWJlQWNjZWxlcm9tZXRlciIsImludGVydmFsIiwiY2FsbGJhY2siLCJyZXQiLCJ4Iiwic2V0SW50ZXJ2YWwiLCJ0aWNrIiwiTWF0aCIsImZsb29yIiwib25EZXN0cm95IiwiY2xlYXJJbnRlcnZhbCIsInVuc3Vic2NyaWJlQWNjZWxlcm9tZXRlciIsInJvd3MiLCJtaW4iLCJjb2xzIiwidG90YWxXIiwic3RhcnRYIiwic3RhcnRZIiwiaWR4Iiwibm9ybWFsQ29sb3JzIiwiciIsImMiLCJsZW5ndGgiLCJpIiwiYXNzaWduSGVhbHRoQnJpY2tzIiwiYWxpdmUiLCJwdXNoIiwidG90YWwiLCJqIiwicmVkQ291bnQiLCJncmVlbkNvdW50IiwicGxhY2VkIiwicmVkUGxhY2VkIiwiZ3JlZW5QbGFjZWQiLCJibHVlUGxhY2VkIiwic3BkMyIsInNwZCIsInMiLCJzcGF3bkJsdWVCYWxsIiwiY3giLCJjeSIsInNsb3QiLCJzcXJ0IiwiYW5nIiwiUEkiLCJyYW5kb20iLCJjb3MiLCJzaW4iLCJyZXNwYXduQmFsbCIsImFpbUF0QnJpY2siLCJ2eCIsInZ5IiwidG90YWxBIiwidGFyZ2V0IiwiZHgiLCJkeSIsImxlbiIsIm1peCIsIm54IiwibnkiLCJucyIsInJhd1gzIiwiREVBRDMiLCJ0aWx0MyIsImFicyIsInJhd1giLCJERUFEIiwidGlsdCIsImhpdCIsImhpdElkeCIsImJreCIsImJreSIsIm92ZXJsYXBYIiwib3ZlcmxhcFkiLCJjYWxjUmFuayIsImx4IiwibHkiLCJsaGl0IiwibGhpdElkeCIsInRvdGFsTCIsImkyIiwiYngyIiwiYnkyIiwib3giLCJveSIsImFpbUwiLCJhaW1NIiwiYWxpdmVDb3VudCIsInNhdmVCZXN0SHBTY29yZSIsInNhdmVCZXN0U2NvcmUiLCJzYXZlQmVzdFRpbWUiLCJ0Iiwic2V0IiwiZGF0YSIsIlN0cmluZyIsIm9uU3dpcGUiLCJhZnRlckdhbWUiLCJkaXJlY3Rpb24iLCJvbk1hc2tDbGljayIsInJvdXRlciIsInVyaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBQUEsb0JBQW9CLENBQUMsR0FBRyxBQUFDO3dCQUN4QixJQUFJLEFBQXNCLFlBQXRCLE9BQU9DLFlBQXlCLE9BQU9BO3dCQUMzQyxJQUFJOzRCQUNILE9BQU8sSUFBSSxJQUFJLElBQUlDLFNBQVM7d0JBQzdCLEVBQUUsT0FBT0MsR0FBRzs0QkFDWCxJQUFJLEFBQWtCLFlBQWxCLE9BQU9DLFFBQXFCLE9BQU9BO3dCQUN4QztvQkFDRDs7O29CQ1BBSixvQkFBb0IsRUFBRSxHQUFHLElBQU87OztvQkNBaENBLG9CQUFvQixJQUFJLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNxRjNCLElBQUFLLFVBQUFDLHVCQUFBQyxlQUFBO29CQUNBLElBQUFDLFdBQUFGLHVCQUFBQyxlQUFBO29CQUNBLElBQUFFLFdBQUFILHVCQUFBQyxlQUFBO29CQUFxQyxTQUFBRCx1QkFBQUgsQ0FBQTt3QkFBQSxPQUFBQSxLQUFBQSxFQUFBTyxVQUFBLEdBQUFQLElBQUE7NEJBQUFRLFNBQUFSO3dCQUFBO29CQUFBO29CQUFBLElBQUFTLFdBQUFDLFFBQUFGLE9BQUEsR0FFdEI7d0JBQ2JHLFdBQVc7NEJBQ1RDLE9BQU87NEJBQ1BDLGFBQWE7d0JBQ2Y7d0JBQ0FDLFNBQVM7NEJBQ1BDLE9BQU87NEJBQ1BDLE9BQU87NEJBQ1BDLE1BQU07NEJBQ05DLEtBQUs7NEJBQ0xDLE1BQU07NEJBQ05DLE1BQU07NEJBQ05DLE9BQU87NEJBQ1BDLE1BQU07NEJBQ05DLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLFFBQVE7NEJBQ1JDLE9BQU87NEJBQ1BDLE9BQU87NEJBQ1BDLE9BQU87NEJBQ1BDLE9BQU87NEJBQ1BDLElBQUk7NEJBQ0pDLElBQUk7NEJBQ0pDLE1BQU07NEJBQ05DLElBQUk7NEJBQ0pDLElBQUk7NEJBQ0pDLElBQUk7NEJBQ0pDLElBQUk7NEJBQ0pDLElBQUk7NEJBQ0pDLElBQUk7NEJBQ0pDLEtBQUs7NEJBQ0xDLEtBQUs7NEJBQ0xDLE9BQU87NEJBQ1BDLFNBQVM7NEJBQ1RDLFdBQVc7NEJBQ1hDLFVBQVU7NEJBQ1ZDLFVBQVU7NEJBQ1ZDLFVBQVU7NEJBQ1ZDLFVBQVU7NEJBQ1ZDLFdBQVc7NEJBQ1hDLElBQUk7NEJBQ0pDLFVBQVU7NEJBQ1ZDLFdBQVc7NEJBQ1hDLGFBQWE7NEJBQ2JDLEtBQUk7NEJBQUVDLEtBQUk7NEJBQUVDLEtBQUk7NEJBQU1DLEtBQUk7NEJBQzFCQyxLQUFJOzRCQUFFQyxLQUFJOzRCQUFFQyxLQUFJOzRCQUFNQyxLQUFJOzRCQUMxQkMsS0FBSTs0QkFBRUMsS0FBSTs0QkFBRUMsS0FBSTs0QkFBTUMsS0FBSTs0QkFDMUJDLEtBQUk7NEJBQUVDLEtBQUk7NEJBQUVDLEtBQUk7NEJBQU1DLEtBQUk7NEJBQzFCQyxLQUFJOzRCQUFFQyxLQUFJOzRCQUFFQyxLQUFJOzRCQUFNQyxLQUFJOzRCQUMxQkMsS0FBSTs0QkFBRUMsS0FBSTs0QkFBRUMsS0FBSTs0QkFBTUMsS0FBSTs0QkFDMUJDLEtBQUk7NEJBQUVDLEtBQUk7NEJBQUVDLEtBQUk7NEJBQU1DLEtBQUk7NEJBQzFCQyxLQUFJOzRCQUFFQyxLQUFJOzRCQUFFQyxLQUFJOzRCQUFNQyxLQUFJOzRCQUMxQkMsS0FBSTs0QkFBRUMsS0FBSTs0QkFBRUMsS0FBSTs0QkFBTUMsS0FBSTs0QkFDMUJDLEtBQUk7NEJBQUVDLEtBQUk7NEJBQUVDLEtBQUk7NEJBQU1DLEtBQUk7NEJBQzFCQyxNQUFLOzRCQUFFQyxNQUFLOzRCQUFFQyxNQUFLOzRCQUFNQyxNQUFLOzRCQUM5QkMsTUFBSzs0QkFBRUMsTUFBSzs0QkFBRUMsTUFBSzs0QkFBTUMsTUFBSzs0QkFDOUJDLE1BQUs7NEJBQUVDLE1BQUs7NEJBQUVDLE1BQUs7NEJBQU1DLE1BQUs7NEJBQzlCQyxNQUFLOzRCQUFFQyxNQUFLOzRCQUFFQyxNQUFLOzRCQUFNQyxNQUFLOzRCQUM5QkMsTUFBSzs0QkFBRUMsTUFBSzs0QkFBRUMsTUFBSzs0QkFBTUMsTUFBSzs0QkFDOUJDLE1BQUs7NEJBQUVDLE1BQUs7NEJBQUVDLE1BQUs7NEJBQU1DLE1BQUs7NEJBQzlCQyxNQUFLOzRCQUFFQyxNQUFLOzRCQUFFQyxNQUFLOzRCQUFNQyxNQUFLOzRCQUM5QkMsTUFBSzs0QkFBRUMsTUFBSzs0QkFBRUMsTUFBSzs0QkFBTUMsTUFBSzs0QkFDOUJDLE1BQUs7NEJBQUVDLE1BQUs7NEJBQUVDLE1BQUs7NEJBQU1DLE1BQUs7NEJBQzlCQyxNQUFLOzRCQUFFQyxNQUFLOzRCQUFFQyxNQUFLOzRCQUFNQyxNQUFLOzRCQUM5QkMsV0FBVzs0QkFDWEMsS0FBSTs0QkFBTUMsS0FBSTs0QkFBRUMsS0FBSTs0QkFBRUMsTUFBSzs0QkFBRUMsTUFBSzs0QkFDbENDLEtBQUk7NEJBQU1DLEtBQUk7NEJBQUVDLEtBQUk7NEJBQUVDLE1BQUs7NEJBQUVDLE1BQUs7NEJBQ2xDQyxLQUFJOzRCQUFNQyxLQUFJOzRCQUFFQyxLQUFJOzRCQUFFQyxNQUFLOzRCQUFFQyxNQUFLOzRCQUNsQ0MsS0FBSTs0QkFBTUMsS0FBSTs0QkFBRUMsS0FBSTs0QkFBRUMsTUFBSzs0QkFBRUMsTUFBSzs0QkFDbENDLEtBQUk7NEJBQU1DLEtBQUk7NEJBQUVDLEtBQUk7NEJBQUVDLE1BQUs7NEJBQUVDLE1BQUs7NEJBQ2xDQyxLQUFJOzRCQUFNQyxLQUFJOzRCQUFFQyxLQUFJOzRCQUFFQyxNQUFLOzRCQUFFQyxNQUFLOzRCQUNsQ0MsS0FBSTs0QkFBTUMsS0FBSTs0QkFBRUMsS0FBSTs0QkFBRUMsTUFBSzs0QkFBRUMsTUFBSzs0QkFDbENDLEtBQUk7NEJBQU1DLEtBQUk7NEJBQUVDLEtBQUk7NEJBQUVDLE1BQUs7NEJBQUVDLE1BQUs7NEJBQ2xDQyxLQUFJOzRCQUFNQyxLQUFJOzRCQUFFQyxLQUFJOzRCQUFFQyxNQUFLOzRCQUFFQyxNQUFLOzRCQUNsQ0MsS0FBSTs0QkFBTUMsS0FBSTs0QkFBRUMsS0FBSTs0QkFBRUMsTUFBSzs0QkFBRUMsTUFBSzt3QkFDcEM7d0JBRUFDOzRCQUNFLElBQUlDLE9BQU8sSUFBSTs0QkFDZixJQUFJLENBQUM3SyxLQUFLLEdBQUc4SyxTQUFTLElBQUksQ0FBQzlLLEtBQUssS0FBSzs0QkFDckMsSUFBSSxDQUFDQyxXQUFXLEdBQUc2SyxTQUFTLElBQUksQ0FBQzdLLFdBQVcsS0FBSzs0QkFDakQsSUFBSSxDQUFDOEssZUFBZTs0QkFDcEJDLFNBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO2dDQUFFQyxLQUFLO2dDQUFZQyxTQUFTLFNBQVNDLENBQUM7b0NBQUlQLEtBQUt2SSxRQUFRLEdBQUd3SSxTQUFTTSxNQUFNO2dDQUFFOzRCQUFFOzRCQUN6RkosU0FBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUM7Z0NBQUVDLEtBQUs7Z0NBQWFDLFNBQVMsU0FBU0MsQ0FBQztvQ0FBSVAsS0FBS3RJLFNBQVMsR0FBR3VJLFNBQVNNLE1BQU07Z0NBQUU7NEJBQUU7NEJBQzNGSixTQUFBQSxPQUFPLENBQUNDLEdBQUcsQ0FBQztnQ0FBRUMsS0FBSztnQ0FBZUMsU0FBUyxTQUFTQyxDQUFDO29DQUFJUCxLQUFLckksV0FBVyxHQUFHc0ksU0FBU00sTUFBTTtnQ0FBRTs0QkFBRTs0QkFDL0YsSUFBSSxDQUFDQyxXQUFXOzRCQUNoQixJQUFJLENBQUNDLFNBQVM7NEJBQ2QsSUFBSSxBQUFlLE1BQWYsSUFBSSxDQUFDdEwsS0FBSyxFQUFRLElBQUksQ0FBQ3FDLEVBQUUsR0FBRzs0QkFDaEMsSUFBSSxDQUFDa0osU0FBUzt3QkFDaEI7d0JBRUFSOzRCQUNFLElBQUksQ0FBQ3hLLElBQUksR0FBRyxBQUFlLE1BQWYsSUFBSSxDQUFDUCxLQUFLOzRCQUN0QixJQUFJLENBQUNRLElBQUksR0FBRyxBQUFlLE1BQWYsSUFBSSxDQUFDUixLQUFLOzRCQUN0QixJQUFJLENBQUNTLEtBQUssR0FBRyxBQUFlLE1BQWYsSUFBSSxDQUFDVCxLQUFLOzRCQUN2QixJQUFJLENBQUNVLElBQUksR0FBRyxBQUFlLE1BQWYsSUFBSSxDQUFDVixLQUFLO3dCQUN4Qjt3QkFFQXdMLFlBQVc7d0JBRVhEOzRCQUNFLElBQUlWLE9BQU8sSUFBSTs0QkFDZixJQUFJLEFBQXFCLE1BQXJCLElBQUksQ0FBQzVLLFdBQVcsRUFDbEJ3TCxTQUFBQSxPQUFNLENBQUNDLHNCQUFzQixDQUFDO2dDQUM1QkMsVUFBVTtnQ0FDVkMsVUFBVSxTQUFTQyxHQUFHO29DQUFJaEIsS0FBSy9JLE9BQU8sR0FBRytKLElBQUlDLENBQUM7Z0NBQUM7NEJBQ2pEOzRCQUVGLElBQUksQ0FBQ25MLEtBQUssR0FBR29MLFlBQVk7Z0NBQ3ZCLElBQUlsQixBQUFlLE1BQWZBLEtBQUt6SyxLQUFLLEVBQVE7b0NBQ3BCeUssS0FBS21CLElBQUk7b0NBQ1RuQixLQUFLNUksUUFBUSxHQUFHZ0ssS0FBS0MsS0FBSyxDQUFDckIsQUFBZ0IsS0FBaEJBLEtBQUs1SSxRQUFRLEdBQVEsS0FBSztnQ0FDdkQ7NEJBQ0YsR0FBRzt3QkFDTDt3QkFFQWtLOzRCQUNFLElBQUksSUFBSSxDQUFDeEwsS0FBSyxFQUFFO2dDQUFFeUwsY0FBYyxJQUFJLENBQUN6TCxLQUFLO2dDQUFHLElBQUksQ0FBQ0EsS0FBSyxHQUFHOzRCQUFLOzRCQUMvRCxJQUFJO2dDQUFFOEssU0FBQUEsT0FBTSxDQUFDWSx3QkFBd0I7NEJBQUcsRUFBRSxPQUFPak4sR0FBRyxDQUFDO3dCQUN2RDt3QkFFQWlNOzRCQUNFLElBQUlpQixPQUFPTCxLQUFLTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUN2TSxLQUFLLEVBQUU7NEJBQ3BDLElBQUl3TSxPQUFPOzRCQUNYLElBQUlDLFNBQVNELE9BQU8sSUFBSSxDQUFDdEwsRUFBRSxHQUFHLEFBQUNzTCxDQUFBQSxPQUFPLEtBQUssSUFBSSxDQUFDcEwsSUFBSTs0QkFDcEQsSUFBSXNMLFNBQVNULEtBQUtDLEtBQUssQ0FBQyxBQUFDLEtBQUksQ0FBQ3RMLE1BQU0sR0FBRzZMLE1BQUssSUFBSzs0QkFDakQsSUFBSUUsU0FBUzs0QkFDYixJQUFJQyxNQUFNOzRCQUNWLElBQUlDLGVBQWU7Z0NBQUM7Z0NBQVU7Z0NBQVU7Z0NBQVU7NkJBQVU7NEJBQzVELElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJUixNQUFNUSxJQUFLO2dDQUM3QixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSVAsTUFBTU8sSUFBSztvQ0FDN0IsSUFBSUgsT0FBTyxJQUFJO29DQUNmLElBQUksQ0FBQyxNQUFNQSxNQUFNLElBQUksR0FBR0YsU0FBU0ssSUFBSyxLQUFJLENBQUM3TCxFQUFFLEdBQUcsSUFBSSxDQUFDRSxJQUFJLEFBQUQ7b0NBQ3hELElBQUksQ0FBQyxNQUFNd0wsTUFBTSxJQUFJLEdBQUdELFNBQVNHLElBQUssS0FBSSxDQUFDM0wsRUFBRSxHQUFHLElBQUksQ0FBQ0MsSUFBSSxBQUFEO29DQUN4RCxJQUFJLENBQUMsTUFBTXdMLE1BQU0sSUFBSSxHQUFHO29DQUN4QixJQUFJLEFBQWUsTUFBZixJQUFJLENBQUM1TSxLQUFLLEVBQ1osSUFBSSxDQUFDLE1BQU00TSxNQUFNLElBQUksR0FBRzt5Q0FFeEIsSUFBSSxDQUFDLE1BQU1BLE1BQU0sSUFBSSxHQUFHQyxZQUFZLENBQUMsQUFBQ0MsQ0FBQUEsSUFBSUMsQ0FBQUEsSUFBS0YsYUFBYUcsTUFBTSxDQUFDO29DQUVyRUo7Z0NBQ0Y7Z0NBQ0EsSUFBSUEsT0FBTyxJQUFJOzRCQUNqQjs0QkFDQSxJQUFLLElBQUlLLElBQUlMLEtBQUtLLElBQUksSUFBSUEsSUFBSztnQ0FDN0IsSUFBSSxDQUFDLE1BQU1BLElBQUksSUFBSSxHQUFHO2dDQUN0QixJQUFJLENBQUMsTUFBTUEsSUFBSSxJQUFJLEdBQUc7Z0NBQ3RCLElBQUksQ0FBQyxNQUFNQSxJQUFJLElBQUksR0FBRztnQ0FDdEIsSUFBSSxDQUFDLE1BQU1BLElBQUksSUFBSSxHQUFHOzRCQUN4Qjs0QkFDQSxJQUFJLEFBQWUsTUFBZixJQUFJLENBQUNqTixLQUFLLEVBQVEsSUFBSSxDQUFDa04sa0JBQWtCO3dCQUMvQzt3QkFFQUE7NEJBQ0UsSUFBSUMsUUFBUSxFQUFFOzRCQUNkLElBQUssSUFBSUYsSUFBSSxHQUFHQSxJQUFJLElBQUlBLElBQ3RCLElBQUksSUFBSSxDQUFDLE1BQU1BLElBQUksSUFBSSxFQUFFRSxNQUFNQyxJQUFJLENBQUNIOzRCQUV0QyxJQUFJSSxRQUFRRixNQUFNSCxNQUFNOzRCQUN4QixJQUFLLElBQUlNLElBQUksR0FBR0EsSUFBSUQsT0FBT0MsSUFDekIsSUFBSSxDQUFDLE1BQU1ILEtBQUssQ0FBQ0csRUFBRSxHQUFHLElBQUksR0FBRzs0QkFFL0IsSUFBSUMsV0FBV3RCLEtBQUtNLEdBQUcsQ0FBQyxHQUFHTixLQUFLQyxLQUFLLENBQUNtQixBQUFRLE1BQVJBOzRCQUN0QyxJQUFJRyxhQUFhdkIsS0FBS00sR0FBRyxDQUFDLEdBQUdOLEtBQUtDLEtBQUssQ0FBQ21CLEFBQVEsT0FBUkE7NEJBQ3hDLElBQUk1RixZQUFZd0UsS0FBS00sR0FBRyxDQUFDLEdBQUdOLEtBQUtDLEtBQUssQ0FBQ21CLEFBQVEsT0FBUkE7NEJBQ3ZDLElBQUlULE1BQU07NEJBQ1YsSUFBSWEsU0FBUzs0QkFDYixJQUFJQyxZQUFZOzRCQUNoQixNQUFPRCxTQUFTSixTQUFTSyxZQUFZSCxTQUFVO2dDQUM3QyxJQUFJLENBQUMsTUFBTUosS0FBSyxDQUFDTSxPQUFPLEdBQUcsSUFBSSxHQUFHO2dDQUNsQ0E7Z0NBQ0FDOzRCQUNGOzRCQUNBLElBQUlDLGNBQWM7NEJBQ2xCLE1BQU9GLFNBQVNKLFNBQVNNLGNBQWNILFdBQVk7Z0NBQ2pELElBQUksQ0FBQyxNQUFNTCxLQUFLLENBQUNNLE9BQU8sR0FBRyxJQUFJLEdBQUc7Z0NBQ2xDQTtnQ0FDQUU7NEJBQ0Y7NEJBQ0EsSUFBSUMsYUFBYTs0QkFDakIsTUFBT0gsU0FBU0osU0FBU08sYUFBYW5HLFVBQVc7Z0NBQy9DLElBQUksQ0FBQyxNQUFNMEYsS0FBSyxDQUFDTSxPQUFPLEdBQUcsSUFBSSxHQUFHO2dDQUNsQ0E7Z0NBQ0FHOzRCQUNGO3dCQUNGO3dCQUVBdEM7NEJBQ0UsSUFBSSxDQUFDakssRUFBRSxHQUFHOzRCQUNWLElBQUksQ0FBQ0UsRUFBRSxHQUFHMEssS0FBS0MsS0FBSyxDQUFDLEFBQUMsS0FBSSxDQUFDdEwsTUFBTSxHQUFHLElBQUksQ0FBQ1MsRUFBRSxBQUFELElBQUs7NEJBQy9DLElBQUksQ0FBQ0csRUFBRSxHQUFHLElBQUksQ0FBQ1AsS0FBSyxHQUFHOzRCQUN2QixJQUFJLENBQUNRLEVBQUUsR0FBR3dLLEtBQUtDLEtBQUssQ0FBQyxJQUFJLENBQUN0TCxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUNpQixLQUFLLEdBQUc7NEJBQ3BELElBQUksQ0FBQ0gsRUFBRSxHQUFHLElBQUksQ0FBQ0YsRUFBRSxHQUFHOzRCQUNwQixJQUFJLEFBQWUsTUFBZixJQUFJLENBQUN4QixLQUFLLEVBQVE7Z0NBQ3BCLElBQUk2TixPQUFPO2dDQUNYLElBQUksQ0FBQ2xNLEdBQUcsR0FBR2tNO2dDQUNYLElBQUksQ0FBQ2pNLEdBQUcsR0FBRyxDQUFDaU07NEJBQ2QsT0FBTztnQ0FDTCxJQUFJQyxNQUFNLElBQUksQUFBQyxLQUFJLENBQUM5TixLQUFLLEdBQUcsS0FBSztnQ0FDakMsSUFBSSxDQUFDMkIsR0FBRyxHQUFHbU07Z0NBQ1gsSUFBSSxDQUFDbE0sR0FBRyxHQUFHLENBQUNrTTs0QkFDZDs0QkFDQSxJQUFJLENBQUMzTixLQUFLLEdBQUc7NEJBQ2IsSUFBSSxDQUFDQyxLQUFLLEdBQUc7NEJBQ2IsSUFBSSxDQUFDQyxJQUFJLEdBQUc7NEJBQ1osSUFBSSxDQUFDQyxHQUFHLEdBQUc7NEJBQ1gsSUFBSSxDQUFDeUIsU0FBUyxHQUFHOzRCQUNqQixJQUFJLENBQUNDLFFBQVEsR0FBRzs0QkFDaEIsSUFBSSxDQUFDQyxRQUFRLEdBQUc7NEJBQ2hCLElBQUksQ0FBQ0MsUUFBUSxHQUFHOzRCQUNoQixJQUFJLENBQUN1RixTQUFTLEdBQUc7NEJBQ2pCLElBQUssSUFBSXNHLElBQUksR0FBR0EsSUFBSSxJQUFJQSxJQUFLO2dDQUMzQixJQUFJLENBQUMsTUFBTUEsSUFBSSxJQUFJLEdBQUc7Z0NBQ3RCLElBQUksQ0FBQyxNQUFNQSxJQUFJLElBQUksR0FBRztnQ0FDdEIsSUFBSSxDQUFDLE1BQU1BLElBQUksSUFBSSxHQUFHO2dDQUN0QixJQUFJLENBQUMsTUFBTUEsSUFBSSxLQUFLLEdBQUc7Z0NBQ3ZCLElBQUksQ0FBQyxNQUFNQSxJQUFJLEtBQUssR0FBRzs0QkFDekI7d0JBQ0Y7d0JBRUFDLGVBQWNDLEVBQUUsRUFBRUMsRUFBRTs0QkFDbEIsSUFBSSxJQUFJLENBQUN6RyxTQUFTLElBQUksSUFBSTs0QkFDMUIsSUFBSTBHLE9BQU87NEJBQ1gsSUFBSyxJQUFJSixJQUFJLEdBQUdBLElBQUksSUFBSUEsSUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNQSxJQUFJLElBQUksRUFBRTtnQ0FBRUksT0FBT0o7Z0NBQUc7NEJBQU07NEJBRTlDLElBQUlJLE9BQU8sR0FBRzs0QkFDZCxJQUFJTCxNQUFNN0IsS0FBS21DLElBQUksQ0FBQyxJQUFJLENBQUN6TSxHQUFHLEdBQUcsSUFBSSxDQUFDQSxHQUFHLEdBQUcsSUFBSSxDQUFDQyxHQUFHLEdBQUcsSUFBSSxDQUFDQSxHQUFHOzRCQUM3RCxJQUFJa00sTUFBTSxLQUFLQSxNQUFNOzRCQUNyQixJQUFJTyxNQUFNcEMsS0FBS3FDLEVBQUUsR0FBSSxLQUFJckMsS0FBS3NDLE1BQU0sRUFBQzs0QkFDckMsSUFBSSxDQUFDLE1BQU1KLE9BQU8sSUFBSSxHQUFHOzRCQUN6QixJQUFJLENBQUMsTUFBTUEsT0FBTyxJQUFJLEdBQUdGLEtBQUssSUFBSSxDQUFDcE0sS0FBSyxHQUFHOzRCQUMzQyxJQUFJLENBQUMsTUFBTXNNLE9BQU8sSUFBSSxHQUFHRCxLQUFLLElBQUksQ0FBQ3JNLEtBQUssR0FBRzs0QkFDM0MsSUFBSSxDQUFDLE1BQU1zTSxPQUFPLEtBQUssR0FBR2xDLEtBQUt1QyxHQUFHLENBQUNILE9BQU9QOzRCQUMxQyxJQUFJLENBQUMsTUFBTUssT0FBTyxLQUFLLEdBQUdsQyxLQUFLd0MsR0FBRyxDQUFDSixPQUFPUDs0QkFDMUMsSUFBSSxDQUFDckcsU0FBUzt3QkFDaEI7d0JBRUFpSDs0QkFDRSxJQUFJLENBQUNqTixFQUFFLEdBQUd3SyxLQUFLQyxLQUFLLENBQUMsSUFBSSxDQUFDdEwsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDaUIsS0FBSyxHQUFHOzRCQUNwRCxJQUFJLENBQUNILEVBQUUsR0FBRyxJQUFJLENBQUNGLEVBQUUsR0FBRzs0QkFDcEIsSUFBSXNNLE1BQU0sSUFBSSxBQUFDLEtBQUksQ0FBQzlOLEtBQUssR0FBRyxLQUFLOzRCQUNqQyxJQUFJLENBQUMyQixHQUFHLEdBQUdtTSxNQUFPN0IsQ0FBQUEsS0FBS3NDLE1BQU0sS0FBSyxNQUFNLEtBQUs7NEJBQzdDLElBQUksQ0FBQzNNLEdBQUcsR0FBRyxDQUFDa007d0JBQ2Q7d0JBRUFhLFlBQVdsTixFQUFFLEVBQUVDLEVBQUUsRUFBRWtOLEVBQUUsRUFBRUMsRUFBRTs0QkFDdkIsSUFBSTFCLFFBQVEsRUFBRTs0QkFDZCxJQUFJMkIsU0FBUzdDLEtBQUtNLEdBQUcsQ0FBQyxBQUFDLEtBQUksSUFBSSxDQUFDdk0sS0FBSyxBQUFELElBQUssR0FBRzs0QkFDNUMsSUFBSyxJQUFJaU4sSUFBSSxHQUFHQSxJQUFJNkIsUUFBUTdCLElBQzFCLElBQUksSUFBSSxDQUFDLE1BQU1BLElBQUksSUFBSSxFQUFFRSxNQUFNQyxJQUFJLENBQUNIOzRCQUV0QyxJQUFJRSxBQUFpQixNQUFqQkEsTUFBTUgsTUFBTSxJQUFVRyxNQUFNSCxNQUFNLEdBQUcsR0FBRyxPQUFPO2dDQUFFNEIsSUFBSUE7Z0NBQUlDLElBQUlBOzRCQUFHOzRCQUNwRSxJQUFJRSxTQUFTNUIsS0FBSyxDQUFDbEIsS0FBS0MsS0FBSyxDQUFDRCxLQUFLc0MsTUFBTSxLQUFLcEIsTUFBTUgsTUFBTSxFQUFFOzRCQUM1RCxJQUFJZ0MsS0FBSyxJQUFJLENBQUMsTUFBTUQsU0FBUyxJQUFJLEdBQUcsSUFBSSxDQUFDN04sRUFBRSxHQUFHLElBQUtPLENBQUFBLEtBQUssSUFBSSxDQUFDSSxLQUFLLEdBQUc7NEJBQ3JFLElBQUlvTixLQUFLLElBQUksQ0FBQyxNQUFNRixTQUFTLElBQUksR0FBRyxJQUFJLENBQUM1TixFQUFFLEdBQUcsSUFBS08sQ0FBQUEsS0FBSyxJQUFJLENBQUNHLEtBQUssR0FBRzs0QkFDckUsSUFBSXFOLE1BQU1qRCxLQUFLbUMsSUFBSSxDQUFDWSxLQUFLQSxLQUFLQyxLQUFLQTs0QkFDbkMsSUFBSUMsTUFBTSxHQUFHLE9BQU87Z0NBQUVOLElBQUlBO2dDQUFJQyxJQUFJQTs0QkFBRzs0QkFDckMsSUFBSWYsTUFBTTdCLEtBQUttQyxJQUFJLENBQUNRLEtBQUtBLEtBQUtDLEtBQUtBOzRCQUNuQyxJQUFJZixNQUFNLEtBQUtBLE1BQU07NEJBQ3JCLElBQUlxQixNQUFNOzRCQUNWLElBQUloQyxBQUFpQixNQUFqQkEsTUFBTUgsTUFBTSxFQUFRbUMsTUFBTTs0QkFDOUIsSUFBSWhDLEFBQWlCLE1BQWpCQSxNQUFNSCxNQUFNLEVBQVFtQyxNQUFNOzRCQUM5QixJQUFJQyxLQUFLUixLQUFNLEtBQUlPLEdBQUUsSUFBTUgsS0FBS0UsTUFBT3BCLE1BQU1xQjs0QkFDN0MsSUFBSUUsS0FBS1IsS0FBTSxLQUFJTSxHQUFFLElBQU1GLEtBQUtDLE1BQU9wQixNQUFNcUI7NEJBQzdDLElBQUlHLEtBQUtyRCxLQUFLbUMsSUFBSSxDQUFDZ0IsS0FBS0EsS0FBS0MsS0FBS0E7NEJBQ2xDLElBQUlDLEtBQUssS0FBS0EsS0FBSzs0QkFDbkIsT0FBTztnQ0FBRVYsSUFBSVEsS0FBS0UsS0FBS3hCO2dDQUFLZSxJQUFJUSxLQUFLQyxLQUFLeEI7NEJBQUk7d0JBQ2hEO3dCQUVBOUI7NEJBQ0UsSUFBSSxBQUFlLE1BQWYsSUFBSSxDQUFDaE0sS0FBSyxFQUFRO2dDQUNwQixJQUFJLEFBQXFCLE1BQXJCLElBQUksQ0FBQ0MsV0FBVyxFQUFRO29DQUMxQixJQUFJc1AsUUFBUSxJQUFJLENBQUN6TixPQUFPO29DQUN4QixJQUFJLENBQUNDLFNBQVMsR0FBRyxBQUFpQixNQUFqQixJQUFJLENBQUNBLFNBQVMsR0FBU3dOLEFBQVEsTUFBUkE7b0NBQ3hDLElBQUlDLFFBQVE7b0NBQ1osSUFBSUMsUUFBUSxJQUFJLENBQUMxTixTQUFTO29DQUMxQixJQUFJME4sUUFBUSxDQUFDRCxTQUFTQyxRQUFRRCxPQUFPQyxRQUFRO29DQUM3QyxJQUFJLENBQUNsTyxFQUFFLElBQUlrTyxBQUFRLE1BQVJBO2dDQUNiO2dDQUNBLElBQUksQUFBa0IsTUFBbEIsSUFBSSxDQUFDek4sUUFBUSxFQUFRO29DQUN2QixJQUFJLENBQUNULEVBQUUsSUFBSSxJQUFJLENBQUNTLFFBQVE7b0NBQ3hCLElBQUksQ0FBQ0EsUUFBUSxJQUFJO29DQUNqQixJQUFJaUssS0FBS3lELEdBQUcsQ0FBQyxJQUFJLENBQUMxTixRQUFRLElBQUksS0FBSyxJQUFJLENBQUNBLFFBQVEsR0FBRztnQ0FDckQ7NEJBQ0YsT0FBTztnQ0FDTCxJQUFJLEFBQXFCLE1BQXJCLElBQUksQ0FBQy9CLFdBQVcsRUFBUTtvQ0FDMUIsSUFBSTBQLE9BQU8sSUFBSSxDQUFDN04sT0FBTztvQ0FDdkIsSUFBSSxDQUFDQyxTQUFTLEdBQUcsQUFBaUIsTUFBakIsSUFBSSxDQUFDQSxTQUFTLEdBQVM0TixBQUFPLE1BQVBBO29DQUN4QyxJQUFJQyxPQUFPO29DQUNYLElBQUlDLE9BQU8sSUFBSSxDQUFDOU4sU0FBUztvQ0FDekIsSUFBSThOLE9BQU8sQ0FBQ0QsUUFBUUMsT0FBT0QsTUFBTUMsT0FBTztvQ0FDeEMsSUFBSSxDQUFDdE8sRUFBRSxJQUFJc08sQUFBTyxNQUFQQTtnQ0FDYjtnQ0FDQSxJQUFJLEFBQWtCLE1BQWxCLElBQUksQ0FBQzdOLFFBQVEsRUFBUTtvQ0FDdkIsSUFBSSxDQUFDVCxFQUFFLElBQUksSUFBSSxDQUFDUyxRQUFRO29DQUN4QixJQUFJLENBQUNBLFFBQVEsSUFBSTtvQ0FDakIsSUFBSWlLLEtBQUt5RCxHQUFHLENBQUMsSUFBSSxDQUFDMU4sUUFBUSxJQUFJLEtBQUssSUFBSSxDQUFDQSxRQUFRLEdBQUc7Z0NBQ3JEOzRCQUNGOzRCQUNBLElBQUksSUFBSSxDQUFDVCxFQUFFLEdBQUcsSUFBSSxDQUFDVCxLQUFLLEVBQUUsSUFBSSxDQUFDUyxFQUFFLEdBQUcsSUFBSSxDQUFDVCxLQUFLOzRCQUM5QyxJQUFJLElBQUksQ0FBQ1MsRUFBRSxHQUFHLElBQUksQ0FBQ1IsS0FBSyxHQUFHLElBQUksQ0FBQ00sRUFBRSxFQUFFLElBQUksQ0FBQ0UsRUFBRSxHQUFHLElBQUksQ0FBQ1IsS0FBSyxHQUFHLElBQUksQ0FBQ00sRUFBRTs0QkFFbEUsSUFBSSxDQUFDSSxFQUFFLElBQUksSUFBSSxDQUFDRSxHQUFHOzRCQUNuQixJQUFJLENBQUNELEVBQUUsSUFBSSxJQUFJLENBQUNFLEdBQUc7NEJBRW5CLElBQUksSUFBSSxDQUFDSCxFQUFFLElBQUksSUFBSSxDQUFDWCxLQUFLLEVBQUU7Z0NBQUUsSUFBSSxDQUFDVyxFQUFFLEdBQUcsSUFBSSxDQUFDWCxLQUFLO2dDQUFFLElBQUksQ0FBQ2EsR0FBRyxHQUFHc0ssS0FBS3lELEdBQUcsQ0FBQyxJQUFJLENBQUMvTixHQUFHOzRCQUFFOzRCQUNqRixJQUFJLElBQUksQ0FBQ0YsRUFBRSxHQUFHLElBQUksQ0FBQ0ksS0FBSyxJQUFJLElBQUksQ0FBQ2QsS0FBSyxFQUFFO2dDQUFFLElBQUksQ0FBQ1UsRUFBRSxHQUFHLElBQUksQ0FBQ1YsS0FBSyxHQUFHLElBQUksQ0FBQ2MsS0FBSztnQ0FBRSxJQUFJLENBQUNGLEdBQUcsR0FBRyxDQUFDc0ssS0FBS3lELEdBQUcsQ0FBQyxJQUFJLENBQUMvTixHQUFHOzRCQUFFOzRCQUM1RyxJQUFJLElBQUksQ0FBQ0QsRUFBRSxJQUFJLElBQUksQ0FBQ1YsS0FBSyxFQUFFO2dDQUFFLElBQUksQ0FBQ1UsRUFBRSxHQUFHLElBQUksQ0FBQ1YsS0FBSztnQ0FBRSxJQUFJLENBQUNZLEdBQUcsR0FBR3FLLEtBQUt5RCxHQUFHLENBQUMsSUFBSSxDQUFDOU4sR0FBRzs0QkFBRTs0QkFFakYsSUFBSSxJQUFJLENBQUNBLEdBQUcsR0FBRyxLQUNYLElBQUksQ0FBQ0YsRUFBRSxHQUFHLElBQUksQ0FBQ0csS0FBSyxJQUFJLElBQUksQ0FBQ0wsRUFBRSxJQUMvQixJQUFJLENBQUNFLEVBQUUsR0FBRyxJQUFJLENBQUNHLEtBQUssSUFBSSxJQUFJLENBQUNMLEVBQUUsR0FBRyxJQUFJLENBQUNGLEVBQUUsR0FBRyxLQUM1QyxJQUFJLENBQUNHLEVBQUUsR0FBRyxJQUFJLENBQUNJLEtBQUssSUFBSSxJQUFJLENBQUNOLEVBQUUsSUFDL0IsSUFBSSxDQUFDRSxFQUFFLElBQUksSUFBSSxDQUFDRixFQUFFLEdBQUcsSUFBSSxDQUFDRixFQUFFLEVBQUU7Z0NBQ2hDLElBQUksQ0FBQ0ssRUFBRSxHQUFHLElBQUksQ0FBQ0YsRUFBRSxHQUFHLElBQUksQ0FBQ0ssS0FBSztnQ0FDOUIsSUFBSSxDQUFDRCxHQUFHLEdBQUcsQ0FBQ3FLLEtBQUt5RCxHQUFHLENBQUMsSUFBSSxDQUFDOU4sR0FBRztnQ0FDN0IsSUFBSWtPLE1BQU0sQUFBQyxLQUFJLENBQUNyTyxFQUFFLEdBQUcsSUFBSSxDQUFDSSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUNOLEVBQUUsQUFBRCxJQUFLLElBQUksQ0FBQ0YsRUFBRTtnQ0FDeEQsSUFBSSxBQUFlLE1BQWYsSUFBSSxDQUFDckIsS0FBSyxFQUFRO29DQUNwQixJQUFJLENBQUMyQixHQUFHLEdBQUcsQUFBQ21PLENBQUFBLE1BQU0sR0FBRSxJQUFLO29DQUN6QixJQUFJLElBQUksQ0FBQ25PLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQ0EsR0FBRyxHQUFHLEtBQUssSUFBSSxDQUFDQSxHQUFHLEdBQUc7b0NBQy9DLElBQUksSUFBSSxDQUFDQSxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUNBLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQ0EsR0FBRyxHQUFHO2dDQUNsRCxPQUFPO29DQUNMLElBQUksQ0FBQ0EsR0FBRyxHQUFHLEFBQUNtTyxDQUFBQSxNQUFNLEdBQUUsSUFBSztvQ0FDekIsSUFBSSxJQUFJLENBQUNuTyxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUNBLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQ0EsR0FBRyxHQUFHO29DQUM3QyxJQUFJLElBQUksQ0FBQ0EsR0FBRyxHQUFHLEtBQUssSUFBSSxDQUFDQSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUNBLEdBQUcsR0FBRztnQ0FDaEQ7NEJBQ0Y7NEJBRUEsSUFBSW9PLFNBQVM7NEJBQ2IsSUFBSTFDLFFBQVFwQixLQUFLTSxHQUFHLENBQUMsQUFBQyxLQUFJLElBQUksQ0FBQ3ZNLEtBQUssQUFBRCxJQUFLLEdBQUc7NEJBQzNDLElBQUssSUFBSWlOLElBQUksR0FBR0EsSUFBSUksT0FBT0osSUFDekIsSUFBSyxJQUFJLENBQUMsTUFBTUEsSUFBSSxJQUFJO2dDQUN4QixJQUFJK0MsTUFBTSxJQUFJLENBQUMsTUFBTS9DLElBQUksSUFBSTtnQ0FDN0IsSUFBSWdELE1BQU0sSUFBSSxDQUFDLE1BQU1oRCxJQUFJLElBQUk7Z0NBQzdCLElBQUlpRCxXQUFXakUsS0FBS00sR0FBRyxDQUFDLElBQUksQ0FBQzlLLEVBQUUsR0FBRyxJQUFJLENBQUNJLEtBQUssR0FBR21PLEtBQUtBLE1BQU0sSUFBSSxDQUFDOU8sRUFBRSxHQUFHLElBQUksQ0FBQ08sRUFBRTtnQ0FDM0UsSUFBSTBPLFdBQVdsRSxLQUFLTSxHQUFHLENBQUMsSUFBSSxDQUFDN0ssRUFBRSxHQUFHLElBQUksQ0FBQ0csS0FBSyxHQUFHb08sS0FBS0EsTUFBTSxJQUFJLENBQUM5TyxFQUFFLEdBQUcsSUFBSSxDQUFDTyxFQUFFO2dDQUMzRSxJQUFJd08sV0FBVyxLQUFLQyxXQUFXLEdBQUc7b0NBQ2hDSixTQUFTOUM7b0NBQ1QsSUFBSWlELFdBQVdDLFVBQ2IsSUFBSSxDQUFDeE8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDQSxHQUFHO3lDQUVwQixJQUFJLENBQUNDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQ0EsR0FBRztvQ0FFdEIsSUFBSSxBQUFlLE1BQWYsSUFBSSxDQUFDNUIsS0FBSyxJQUFVLEFBQXdCLGNBQXhCLElBQUksQ0FBQyxNQUFNaU4sSUFBSSxJQUFJLEVBQWdCO3dDQUN6RCxJQUFJLENBQUM1SyxFQUFFO3dDQUNQLElBQUksSUFBSSxDQUFDQSxFQUFFLElBQUksR0FBRzs0Q0FBRSxJQUFJLENBQUNqQyxLQUFLLEdBQUc7NENBQUcsSUFBSSxDQUFDQyxJQUFJLEdBQUc7NENBQU0sSUFBSSxDQUFDK1AsUUFBUTs0Q0FBSTt3Q0FBTztvQ0FDaEYsT0FBTyxJQUFJLEFBQWUsTUFBZixJQUFJLENBQUNwUSxLQUFLLElBQVUsQUFBd0IsY0FBeEIsSUFBSSxDQUFDLE1BQU1pTixJQUFJLElBQUksRUFDaEQ7d0NBQUEsSUFBSSxJQUFJLENBQUM1SyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUNBLEVBQUU7b0NBQUUsT0FDckI7d0NBQ0wsSUFBSSxDQUFDbEMsS0FBSyxJQUFJO3dDQUNkLElBQUksQUFBZSxNQUFmLElBQUksQ0FBQ0gsS0FBSyxFQUNaLElBQUksQ0FBQ2dPLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTWYsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDL0wsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0rTCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM5TCxFQUFFLEdBQUc7b0NBRTFGO29DQUNBO2dDQUNGOzs0QkFFRixJQUFJNE8sVUFBVSxHQUFHO2dDQUNmLElBQUksQ0FBQyxNQUFNQSxTQUFTLElBQUksR0FBRztnQ0FDM0IsSUFBSSxDQUFDLE1BQU1BLFNBQVMsSUFBSSxHQUFHO2dDQUMzQixJQUFJLENBQUMsTUFBTUEsU0FBUyxJQUFJLEdBQUc7NEJBQzdCOzRCQUVBLElBQUssSUFBSWhDLElBQUksR0FBR0EsSUFBSSxJQUFJQSxJQUN0QixJQUFLLElBQUksQ0FBQyxNQUFNQSxJQUFJLElBQUk7Z0NBQ3hCLElBQUlzQyxLQUFLLElBQUksQ0FBQyxNQUFNdEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU1BLElBQUksS0FBSztnQ0FDbkQsSUFBSXVDLEtBQUssSUFBSSxDQUFDLE1BQU12QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTUEsSUFBSSxLQUFLO2dDQUNuRCxJQUFJLENBQUMsTUFBTUEsSUFBSSxJQUFJLEdBQUdzQztnQ0FDdEIsSUFBSSxDQUFDLE1BQU10QyxJQUFJLElBQUksR0FBR3VDO2dDQUN0QixJQUFJRCxNQUFNLElBQUksQ0FBQ3ZQLEtBQUssRUFBRTtvQ0FBRSxJQUFJLENBQUMsTUFBTWlOLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQ2pOLEtBQUs7b0NBQUUsSUFBSSxDQUFDLE1BQU1pTixJQUFJLEtBQUssR0FBRzlCLEtBQUt5RCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0zQixJQUFJLEtBQUs7Z0NBQUU7Z0NBQ2hILElBQUlzQyxLQUFLLElBQUksQ0FBQ3hPLEtBQUssSUFBSSxJQUFJLENBQUNkLEtBQUssRUFBRTtvQ0FBRSxJQUFJLENBQUMsTUFBTWdOLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQ2hOLEtBQUssR0FBRyxJQUFJLENBQUNjLEtBQUs7b0NBQUUsSUFBSSxDQUFDLE1BQU1rTSxJQUFJLEtBQUssR0FBRyxDQUFDOUIsS0FBS3lELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTTNCLElBQUksS0FBSztnQ0FBRTtnQ0FDM0ksSUFBSXVDLE1BQU0sSUFBSSxDQUFDdFAsS0FBSyxFQUFFO29DQUFFLElBQUksQ0FBQyxNQUFNK00sSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDL00sS0FBSztvQ0FBRSxJQUFJLENBQUMsTUFBTStNLElBQUksS0FBSyxHQUFHOUIsS0FBS3lELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTTNCLElBQUksS0FBSztnQ0FBRTtnQ0FDaEgsSUFBSSxJQUFJLENBQUMsTUFBTUEsSUFBSSxLQUFLLEdBQUcsS0FDdkJ1QyxLQUFLLElBQUksQ0FBQ3pPLEtBQUssSUFBSSxJQUFJLENBQUNMLEVBQUUsSUFDMUI4TyxLQUFLLElBQUksQ0FBQ3pPLEtBQUssSUFBSSxJQUFJLENBQUNMLEVBQUUsR0FBRyxJQUFJLENBQUNGLEVBQUUsR0FBRyxLQUN2QytPLEtBQUssSUFBSSxDQUFDeE8sS0FBSyxJQUFJLElBQUksQ0FBQ04sRUFBRSxJQUMxQjhPLE1BQU0sSUFBSSxDQUFDOU8sRUFBRSxHQUFHLElBQUksQ0FBQ0YsRUFBRSxFQUFFO29DQUMzQixJQUFJLENBQUMsTUFBTTBNLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQ3ZNLEVBQUUsR0FBRyxJQUFJLENBQUNLLEtBQUs7b0NBQzFDLElBQUksQ0FBQyxNQUFNa00sSUFBSSxLQUFLLEdBQUcsQ0FBQzlCLEtBQUt5RCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0zQixJQUFJLEtBQUs7b0NBQ3JELElBQUl3QyxPQUFPLEFBQUNGLENBQUFBLEtBQUssSUFBSSxDQUFDeE8sS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDTixFQUFFLEFBQUQsSUFBSyxJQUFJLENBQUNGLEVBQUU7b0NBQ3BELElBQUksQ0FBQyxNQUFNME0sSUFBSSxLQUFLLEdBQUcsQUFBQ3dDLENBQUFBLE9BQU8sR0FBRSxJQUFLO29DQUN0QyxJQUFJLElBQUksQ0FBQyxNQUFNeEMsSUFBSSxLQUFLLEdBQUcsS0FBSyxJQUFJLENBQUMsTUFBTUEsSUFBSSxLQUFLLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTUEsSUFBSSxLQUFLLEdBQUc7b0NBQ2pGLElBQUksSUFBSSxDQUFDLE1BQU1BLElBQUksS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLE1BQU1BLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU1BLElBQUksS0FBSyxHQUFHO2dDQUNwRjtnQ0FDQSxJQUFJeUMsVUFBVTtnQ0FDZCxJQUFJQyxTQUFTeEUsS0FBS00sR0FBRyxDQUFDLEFBQUMsS0FBSSxJQUFJLENBQUN2TSxLQUFLLEFBQUQsSUFBSyxHQUFHO2dDQUM1QyxJQUFLLElBQUkwUSxLQUFLLEdBQUdBLEtBQUtELFFBQVFDLEtBQzVCLElBQUssSUFBSSxDQUFDLE1BQU1BLEtBQUssSUFBSTtvQ0FDekIsSUFBSUMsTUFBTSxJQUFJLENBQUMsTUFBTUQsS0FBSyxJQUFJO29DQUM5QixJQUFJRSxNQUFNLElBQUksQ0FBQyxNQUFNRixLQUFLLElBQUk7b0NBQzlCLElBQUlHLEtBQUs1RSxLQUFLTSxHQUFHLENBQUM4RCxLQUFLLElBQUksQ0FBQ3hPLEtBQUssR0FBRzhPLEtBQUtBLE1BQU0sSUFBSSxDQUFDelAsRUFBRSxHQUFHbVA7b0NBQ3pELElBQUlTLEtBQUs3RSxLQUFLTSxHQUFHLENBQUMrRCxLQUFLLElBQUksQ0FBQ3pPLEtBQUssR0FBRytPLEtBQUtBLE1BQU0sSUFBSSxDQUFDelAsRUFBRSxHQUFHbVA7b0NBQ3pELElBQUlPLEtBQUssS0FBS0MsS0FBSyxHQUFHO3dDQUNwQk4sVUFBVUU7d0NBQ1YsSUFBSUcsS0FBS0MsSUFDUCxJQUFJLENBQUMsTUFBTS9DLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU1BLElBQUksS0FBSzs2Q0FFNUMsSUFBSSxDQUFDLE1BQU1BLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU1BLElBQUksS0FBSzt3Q0FFOUMsSUFBSSxDQUFDNU4sS0FBSyxJQUFJO3dDQUNkO29DQUNGOztnQ0FFRixJQUFJcVEsV0FBVyxHQUFHO29DQUNoQixJQUFJLENBQUMsTUFBTUEsVUFBVSxJQUFJLEdBQUc7b0NBQzVCLElBQUksQ0FBQyxNQUFNQSxVQUFVLElBQUksR0FBRztvQ0FDNUIsSUFBSSxDQUFDLE1BQU1BLFVBQVUsSUFBSSxHQUFHO2dDQUM5QjtnQ0FDQSxJQUFJTyxPQUFPLElBQUksQ0FBQ3BDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTVosSUFBSSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU1BLElBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNQSxJQUFJLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTUEsSUFBSSxLQUFLO2dDQUMvRyxJQUFJLENBQUMsTUFBTUEsSUFBSSxLQUFLLEdBQUdnRCxLQUFLbkMsRUFBRTtnQ0FDOUIsSUFBSSxDQUFDLE1BQU1iLElBQUksS0FBSyxHQUFHZ0QsS0FBS2xDLEVBQUU7Z0NBQzlCLElBQUksSUFBSSxDQUFDLE1BQU1kLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQ2xNLEtBQUssR0FBRyxJQUFJLENBQUNaLEtBQUssRUFBRTtvQ0FDakQsSUFBSSxDQUFDLE1BQU04TSxJQUFJLElBQUksR0FBRztvQ0FDdEIsSUFBSSxDQUFDdEcsU0FBUztnQ0FDaEI7OzRCQUdGLElBQUl1SixPQUFPLElBQUksQ0FBQ3JDLFVBQVUsQ0FBQyxJQUFJLENBQUNsTixFQUFFLEVBQUUsSUFBSSxDQUFDQyxFQUFFLEVBQUUsSUFBSSxDQUFDQyxHQUFHLEVBQUUsSUFBSSxDQUFDQyxHQUFHOzRCQUMvRCxJQUFJLENBQUNELEdBQUcsR0FBR3FQLEtBQUtwQyxFQUFFOzRCQUNsQixJQUFJLENBQUNoTixHQUFHLEdBQUdvUCxLQUFLbkMsRUFBRTs0QkFFbEIsSUFBSW9DLGFBQWE7NEJBQ2pCLElBQUssSUFBSTNELElBQUksR0FBR0EsSUFBSSxJQUFJQSxJQUN0QixJQUFJLElBQUksQ0FBQyxNQUFNQSxJQUFJLElBQUksRUFBRTJEOzRCQUczQixJQUFJLElBQUksQ0FBQ3ZQLEVBQUUsR0FBRyxJQUFJLENBQUNHLEtBQUssR0FBRyxJQUFJLENBQUNaLEtBQUssRUFBRTtnQ0FDckMsSUFBSSxBQUFlLE1BQWYsSUFBSSxDQUFDakIsS0FBSyxFQUFRO29DQUNwQixJQUFJLENBQUNxQyxFQUFFO29DQUNQLElBQUksSUFBSSxDQUFDQSxFQUFFLElBQUksR0FBRzt3Q0FDaEIsSUFBSSxDQUFDakMsS0FBSyxHQUFHO3dDQUNiLElBQUksQ0FBQ0MsSUFBSSxHQUFHO3dDQUNaLElBQUksQ0FBQytQLFFBQVE7d0NBQ2IsSUFBSSxDQUFDYyxlQUFlO29DQUN0QixPQUNFLElBQUksQ0FBQ3hDLFdBQVc7b0NBRWxCO2dDQUNGO2dDQUNBLElBQUksQ0FBQ3RPLEtBQUssR0FBRztnQ0FDYixJQUFJLENBQUNDLElBQUksR0FBRztnQ0FDWixJQUFJLENBQUMrUCxRQUFRO2dDQUNiLElBQUksQUFBZSxNQUFmLElBQUksQ0FBQ3BRLEtBQUssRUFBUSxJQUFJLENBQUNtUixhQUFhO2dDQUN4Qzs0QkFDRjs0QkFDQSxJQUFJRixjQUFjLEdBQUc7Z0NBQ25CLElBQUksQ0FBQzdRLEtBQUssR0FBRztnQ0FDYixJQUFJLENBQUNFLEdBQUcsR0FBRztnQ0FDWCxJQUFJLENBQUM4UCxRQUFRO2dDQUNiLElBQUksQUFBZSxNQUFmLElBQUksQ0FBQ3BRLEtBQUssRUFBUSxJQUFJLENBQUNvUixZQUFZO2dDQUN2QyxJQUFJLEFBQWUsTUFBZixJQUFJLENBQUNwUixLQUFLLEVBQVEsSUFBSSxDQUFDa1IsZUFBZTtnQ0FDMUMsSUFBSSxBQUFlLE1BQWYsSUFBSSxDQUFDbFIsS0FBSyxFQUFRLElBQUksQ0FBQ21SLGFBQWE7Z0NBQ3hDOzRCQUNGO3dCQUNGO3dCQUVBZjs0QkFDRSxJQUFJLENBQUNsTyxRQUFRLEdBQUcrSixLQUFLQyxLQUFLLENBQUMsSUFBSSxDQUFDakssUUFBUSxHQUFHLEtBQWhCLE9BQWtDOzRCQUM3RCxJQUFJLEFBQWUsTUFBZixJQUFJLENBQUNqQyxLQUFLLEVBQVE7Z0NBQ3BCLElBQUlxUixJQUFJLElBQUksQ0FBQ3BQLFFBQVE7Z0NBQ3JCLElBQUlvUCxLQUFLLElBQUksSUFBSSxDQUFDbFAsUUFBUSxHQUFHO3FDQUN4QixJQUFJa1AsS0FBSyxJQUFJLElBQUksQ0FBQ2xQLFFBQVEsR0FBRztxQ0FDN0IsSUFBSWtQLEtBQUssSUFBSSxJQUFJLENBQUNsUCxRQUFRLEdBQUc7cUNBQzdCLElBQUlrUCxLQUFLLEtBQUssSUFBSSxDQUFDbFAsUUFBUSxHQUFHO3FDQUM5QixJQUFJLENBQUNBLFFBQVEsR0FBRzs0QkFDdkI7NEJBQ0EsSUFBSSxBQUFlLE1BQWYsSUFBSSxDQUFDbkMsS0FBSyxFQUFRO2dDQUNwQixJQUFJK04sSUFBSSxJQUFJLENBQUM1TixLQUFLO2dDQUNsQixJQUFJNE4sS0FBSyxLQUFLLElBQUksQ0FBQzNMLFNBQVMsR0FBRztxQ0FDMUIsSUFBSTJMLEtBQUssS0FBSyxJQUFJLENBQUMzTCxTQUFTLEdBQUc7cUNBQy9CLElBQUkyTCxLQUFLLEtBQUssSUFBSSxDQUFDM0wsU0FBUyxHQUFHO3FDQUMvQixJQUFJMkwsS0FBSyxJQUFJLElBQUksQ0FBQzNMLFNBQVMsR0FBRztxQ0FDOUIsSUFBSSxDQUFDQSxTQUFTLEdBQUc7NEJBQ3hCO3dCQUNGO3dCQUVBZ1A7NEJBQ0UsSUFBSSxBQUFrQixNQUFsQixJQUFJLENBQUM5TyxRQUFRLElBQVUsSUFBSSxDQUFDTCxRQUFRLEdBQUcsSUFBSSxDQUFDSyxRQUFRLEVBQUU7Z0NBQ3hELElBQUksQ0FBQ0EsUUFBUSxHQUFHMkosS0FBS0MsS0FBSyxDQUFDLElBQUksQ0FBQ2pLLFFBQVE7Z0NBQ3hDK0ksU0FBQUEsT0FBTyxDQUFDc0csR0FBRyxDQUFDO29DQUFFcEcsS0FBSztvQ0FBWXFHLE1BQU1DLE9BQU8sSUFBSSxDQUFDbFAsUUFBUTtnQ0FBRTs0QkFDN0Q7d0JBQ0Y7d0JBRUE2Tzs0QkFDRSxJQUFJLElBQUksQ0FBQ2hSLEtBQUssR0FBRyxJQUFJLENBQUNvQyxTQUFTLEVBQUU7Z0NBQy9CLElBQUksQ0FBQ0EsU0FBUyxHQUFHLElBQUksQ0FBQ3BDLEtBQUs7Z0NBQzNCNkssU0FBQUEsT0FBTyxDQUFDc0csR0FBRyxDQUFDO29DQUFFcEcsS0FBSztvQ0FBYXFHLE1BQU1DLE9BQU8sSUFBSSxDQUFDalAsU0FBUztnQ0FBRTs0QkFDL0Q7d0JBQ0Y7d0JBRUEyTzs0QkFDRSxJQUFJLElBQUksQ0FBQy9RLEtBQUssR0FBRyxJQUFJLENBQUNxQyxXQUFXLEVBQUU7Z0NBQ2pDLElBQUksQ0FBQ0EsV0FBVyxHQUFHLElBQUksQ0FBQ3JDLEtBQUs7Z0NBQzdCNkssU0FBQUEsT0FBTyxDQUFDc0csR0FBRyxDQUFDO29DQUFFcEcsS0FBSztvQ0FBZXFHLE1BQU1DLE9BQU8sSUFBSSxDQUFDaFAsV0FBVztnQ0FBRTs0QkFDbkU7d0JBQ0Y7d0JBRUFpUCxTQUFRclMsQ0FBQzs0QkFDUCxJQUFJLEFBQWUsTUFBZixJQUFJLENBQUNnQixLQUFLLEVBQVEsWUFBRSxJQUFJLENBQUNzUixTQUFTOzRCQUN0QyxJQUFJLEFBQWUsTUFBZixJQUFJLENBQUMxUixLQUFLLEVBQ1o7Z0NBQUEsSUFBSVosQUFBZ0IsV0FBaEJBLEVBQUV1UyxTQUFTLEVBQWEsSUFBSSxDQUFDM1AsUUFBUSxHQUFHO3FDQUN2QyxJQUFJNUMsQUFBZ0IsWUFBaEJBLEVBQUV1UyxTQUFTLEVBQWMsSUFBSSxDQUFDM1AsUUFBUSxHQUFHOzRCQUFFLE9BRXBELElBQUk1QyxBQUFnQixXQUFoQkEsRUFBRXVTLFNBQVMsRUFBYSxJQUFJLENBQUMzUCxRQUFRLEdBQUc7aUNBQ3ZDLElBQUk1QyxBQUFnQixZQUFoQkEsRUFBRXVTLFNBQVMsRUFBYyxJQUFJLENBQUMzUCxRQUFRLEdBQUc7d0JBRXREO3dCQUVBNFA7NEJBQWdCLElBQUksQ0FBQ0YsU0FBUzt3QkFBRzt3QkFFakNBOzRCQUNFLElBQUksQUFBZSxNQUFmLElBQUksQ0FBQ3RSLEtBQUssRUFBUTtnQ0FDcEIsSUFBSSxBQUFlLE1BQWYsSUFBSSxDQUFDSixLQUFLLEVBQVEsSUFBSSxDQUFDcUMsRUFBRSxHQUFHO2dDQUNoQyxJQUFJLENBQUNnSixXQUFXO2dDQUNoQixJQUFJLENBQUNDLFNBQVM7NEJBQ2hCLE9BQU8sSUFBSSxBQUFlLE1BQWYsSUFBSSxDQUFDbEwsS0FBSyxFQUNuQixJQUFJLElBQUksQ0FBQ0osS0FBSyxHQUFHLEdBQUc7Z0NBQ2xCLElBQUksQ0FBQ0EsS0FBSztnQ0FDVixJQUFJLENBQUMrSyxlQUFlO2dDQUNwQixJQUFJLENBQUNNLFdBQVc7Z0NBQ2hCLElBQUksQ0FBQ0MsU0FBUztnQ0FDZCxJQUFJLEFBQWUsTUFBZixJQUFJLENBQUN0TCxLQUFLLEVBQVEsSUFBSSxDQUFDcUMsRUFBRSxHQUFHOzRCQUNsQyxPQUNFd1AsUUFBQUEsT0FBTSxDQUFDekUsSUFBSSxDQUFDO2dDQUFFMEUsS0FBSzs0QkFBZTt3QkFHeEM7b0JBQ0YifQ==