import chroma from 'chroma-js';
const levels = [
  950,
  900,
  850,
  800,
  750,
  700,
  650,
  600,
  550,
  500,
  450,
  400,
  350,
  300,
  250,
  200,
  150,
  100,
  50
];

const getRange = hexColor => {
  return [
    chroma(hexColor)
      .darken(2.5) // almost black
      .hex(),
    hexColor, // normal color
    chroma(hexColor)
      .brighten(3.4)
      .hex() // almost white
  ];
};

const generateScale = (hexColor, numColors) => {
  return chroma
    .scale(getRange(hexColor))
    .mode('lab')
    .colors(numColors);
};

const generatePalette = sourcePalette => {
  let newPalette = {
    paletteName: sourcePalette.paletteName,
    id: sourcePalette.id,
    emoji: sourcePalette.emoji,
    colors: {}
  };
  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  for (let color of sourcePalette.colors) {
    let scale = generateScale(color.color, levels.length);
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: `${color.name.toLowerCase().replace(/ /g, '-')}-${levels[i]}`,
        shortId: color.name.toLowerCase().replace(/ /g, '-'),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace('rgb', 'rgba')
          .replace(')', ',1.0)')
      });
    }
  }
  return newPalette;
};

export { generatePalette };
