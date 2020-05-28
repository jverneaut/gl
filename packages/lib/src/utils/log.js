import config from '../../package.json';

export const logVersion = () => {
  const version = config.version;
  const fgColor = '#ffffff';
  const bgColor = '#0000ff';

  console.log(`%c *** gl v${version} ***`, `background: ${bgColor}; color: ${fgColor};`);
};
