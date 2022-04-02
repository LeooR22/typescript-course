(() => {
  const fullName = (firstName: string, ...rest: string[]): string => {
    return `${firstName} ${rest.join(" ")} `;
  };

  const superMan = fullName("Clark", "Joseph", "Kent");

  console.log({ superMan });
})();
