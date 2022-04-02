"use strict";
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activateBatiSingal = () => {
        return "Batiseñal activada!";
    };
    console.log(typeof activateBatiSingal);
    const heroName = returnName();
})();
