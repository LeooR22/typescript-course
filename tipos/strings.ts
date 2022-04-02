(() => {
  const batman: string = "batman";
  //   const linternaVerde: string = "Lintera's Verde";
  //   const volcanNegro: string = `Heroe: Volcan Negro`;

  console.log(` I'm ${batman.toUpperCase()}`);

  console.log(batman.toUpperCase());
  console.log(batman[10]?.toUpperCase() || "No este presente");
})();
