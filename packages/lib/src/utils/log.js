import config from '../../package.json';

export const logVersion = () => {
  const version = config.version;
  const fgColor = '#ffffff';
  const bgColor = '#0000ff';

  console.log(`%c *** gl v${version} ***`, `background: ${bgColor}; color: ${fgColor};`);
};

export const log = (...args) => {
  const date = new Date().toLocaleTimeString();

  console.log.apply(console, [`gl [${date}] -`, ...args]);
};
