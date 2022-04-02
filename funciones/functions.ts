(() => {
  const hero: string = "Flash";

  function returnName(): string {
    return hero;
  }

  const activateBatiSingal = (): string => {
    return "Batiseñal activada!";
  };

  console.log(typeof activateBatiSingal);

  const heroName = returnName();
})();
