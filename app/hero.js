System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Hero;
    return {
        setters:[],
        execute: function() {
            Hero = (function () {
                function Hero() {
                }
                Hero.prototype.getHeroesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(HEROES); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                return Hero;
            }());
            exports_1("Hero", Hero);
        }
    }
});
//# sourceMappingURL=hero.js.map