import gl from 'gl';

import vShaderSource from '../shaders/vShader.glsl';
import fShaderSource from '../shaders/fShader.glsl';

const init = async () => {
  const scene = new gl.Scene();
  const vShader = scene.addVertexShader(vShaderSource);
  const fShader = scene.addFragmentShader(fShaderSource);
  const program = scene.compileProgram(vShader, fShader);
  scene.useProgram(program);

  const images = Array.from(document.querySelectorAll('img'));

  await Promise.all(
    images.map(
      image =>
        new Promise(resolve => {
          image.onload = () => {
            const img = new gl.Image(image);
            scene.add(img);

            resolve();
          };
        })
    )
  );

  scene.draw();
};

init();
