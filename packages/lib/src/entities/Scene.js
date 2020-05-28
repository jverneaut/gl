import { log } from '../utils/log';

const RESOLUTION = 2;

export default class Scene {
  constructor() {
    log('Create new Scene instance');

    // Setup canvas
    const canvas = document.createElement('canvas');
    Object.assign(canvas.style, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
    });

    document.body.appendChild(canvas);
    canvas.width = window.innerWidth * RESOLUTION;
    canvas.height = window.innerHeight * RESOLUTION;

    const gl = canvas.getContext('webgl');

    this.canvas = canvas;
    this.gl = gl;
  }

  addVertexShader(vShaderSource) {
    log('Add vertex shader to Scene instance');
    const vShader = createShader(this.gl, this.gl.VERTEX_SHADER, vShaderSource);

    return vShader;
  }

  addFragmentShader(fShaderSource) {
    log('Add fragment shader to Scene instance');
    const fShader = createShader(this.gl, this.gl.FRAGMENT_SHADER, fShaderSource);

    return fShader;
  }

  compileProgram(vShader, fShader) {
    log('Compile program for Scene instance');
    const program = createProgram(this.gl, vShader, fShader);

    return program;
  }

  useProgram(program) {
    log('Use program on Scene instance');
    this.gl.useProgram(program);
  }

  addImage() {
    log('Add image to Scene instance - not implemented');
  }

  draw() {
    log('Draw Scene instance - not implemented');
  }
}

export const createShader = (context, shaderType, shaderSource) => {
  const shader = context.createShader(shaderType);
  context.shaderSource(shader, shaderSource);
  context.compileShader(shader);

  return shader;
};

export const createProgram = (context, vertexShader, fragmentShader) => {
  const program = context.createProgram();
  context.attachShader(program, vertexShader);
  context.attachShader(program, fragmentShader);
  context.linkProgram(program);

  return program;
};
