import gl from 'gl';

import vShaderSource from '../shaders/vShader.glsl';
import fShaderSource from '../shaders/fShader.glsl';

const scene = new gl.Scene();
const vShader = scene.addVertexShader(vShaderSource);
const fShader = scene.addFragmentShader(fShaderSource);
const program = scene.compileProgram(vShader, fShader);
scene.useProgram(program);

const images = document.querySelectorAll('img');
images.forEach(image => scene.addImage(image));

scene.draw();
