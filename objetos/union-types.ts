(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = "Fernando";

  console.log(myCustomVariable);
})();
