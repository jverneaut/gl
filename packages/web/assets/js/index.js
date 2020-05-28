import gl, { createShader } from 'gl';

const vShaderSource = ``;
const fShaderSource = ``;

const vShader = createShader(vShaderSource);
const fShader = createShader(fShaderSource);

const scene = new gl.Scene();
scene.addShader(vShader);
scene.addShader(fShader);

const images = document.querySelectorAll('img');
images.forEach(image => scene.addImage(image));

scene.draw();
