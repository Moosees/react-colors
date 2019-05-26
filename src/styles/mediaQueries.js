export default {
  up() {},

  down(size) {
    const sizes = {
      largest: '59.375em', // 950/16
      large: '50em',
      medium: '41.25em',
      small: '31.25em',
      smallest: '25.625em',
      tiny: '21.875em'
    };
    return `@media only screen and (max-width: ${sizes[size]})`;
  }
};
