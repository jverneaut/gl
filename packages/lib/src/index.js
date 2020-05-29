import 'regenerator-runtime/runtime';
import { log, logVersion } from './utils/log';

import Scene from './entities/Scene';
import Image from './entities/Image';

const init = () => {
  logVersion();
};

init();

export default { Scene, Image };
