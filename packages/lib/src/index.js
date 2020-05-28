import { log, logVersion } from './utils/log';

logVersion();

const init = () => {
  log('Init');
};

init();

// Mock functions
export const createShaderFromText = () => {};

export const createProgram = () => {};

export const createMesh = () => {};

export const createScene = () => {};

export const createTexture = () => {};

export const createAttribute = () => {};

// 2D canvas-like function
export const drawImage = () => {};

export const draw2DCanvas = () => {};
