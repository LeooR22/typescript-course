"use strict";
(() => {
    const fullName = (firstName, ...rest) => {
        return `${firstName} ${rest.join(" ")} `;
    };
    const superMan = fullName("Clark", "Joseph", "Kent");
    console.log({ superMan });
})();
