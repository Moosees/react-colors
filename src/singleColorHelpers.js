const gatherShades = (palette, colorId) => {
  let shades = [];
  const allColors = palette.colors;

  for (let key in allColors) {
    if (key % 100 === 0) {
      shades = shades.concat(
        allColors[key].filter(color => color.shortId === colorId)
      );
    }
  }
  return shades;
};

export { gatherShades };
