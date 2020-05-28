import { log, logVersion } from './utils/log';

import Scene from './entities/Scene';

const init = () => {
  logVersion();
};

init();

export const createShader = () => {
  log('Create new shader - not implemented');
};

export default { Scene, createShader };
