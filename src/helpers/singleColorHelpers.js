import chroma from 'chroma-js';

const saturateShade = shade => {
  const saturatedShade = {
    name: `${shade.name}S`,
    id: `${shade.id}S`,
    shortId: `${shade.shortId}S`,
    hex: chroma(shade.hex)
      .saturate(1.1)
      .hex(),
    rgb: chroma(shade.hex)
      .saturate(1.1)
      .css(),
    rgba: chroma(shade.hex)
      .saturate(1.1)
      .css()
      .replace('rgb', 'rgba')
      .replace(')', ',1.0)')
  };
  return saturatedShade;
};

const deSaturateShade = shade => {
  const deSaturatedShade = {
    name: `${shade.name}DS`,
    id: `${shade.id}DS`,
    shortId: `${shade.shortId}DS`,
    hex: chroma(shade.hex)
      .desaturate(1.1)
      .hex(),
    rgb: chroma(shade.hex)
      .desaturate(1.1)
      .css(),
    rgba: chroma(shade.hex)
      .desaturate(1.1)
      .css()
      .replace('rgb', 'rgba')
      .replace(')', ',1.0)')
  };
  return deSaturatedShade;
};

const gatherShades = (palette, colorId) => {
  const allColors = palette.colors;
  let shades = Array(29);
  let dsCounter = 0;
  let baseCounter = 5;
  let sCounter = 10;

  for (let key in allColors) {
    if (key % 100 === 0) {
      const baseShade = allColors[key].filter(
        color => color.shortId === colorId
      );
      if(dsCounter === 5) {
        dsCounter = 15;
        baseCounter = 20;
        sCounter = 25;
      }
      shades[dsCounter++] = deSaturateShade(baseShade[0]);
      shades[baseCounter++] = baseShade[0];
      shades[sCounter++] = saturateShade(baseShade[0]);
    }
  }
  return shades;
};

export { gatherShades };
