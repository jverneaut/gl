import gl, { createShader } from 'gl';

const vShaderSource = `
attribute vec2 a_position;
attribute vec2 a_texcoord;

varying vec2 v_texcoord;
varying vec2 v_position;

uniform float u_time;

void main() {
  float positionX = a_position.x;
  float positionY = a_position.y;

  positionX = positionX + 0.1 * a_position.x * sin((0.5 + 0.5 * positionY) * 3.14);
  positionY = positionY + 0.005 * sin(20.0 * positionX + 0.05 * u_time);

  vec2 position = vec2(positionX, positionY);

  gl_Position = vec4(position, 0, 1);
  v_texcoord = a_texcoord;
  v_position = position;
}`;

const fShaderSource = `
precision mediump float;

varying vec2 v_texcoord;
varying vec2 v_position;

uniform sampler2D u_texture;

void main() {
  float texcoordX = v_texcoord.x;
  float texcoordY = v_texcoord.y;

  float offsetX = 0.02 * v_position.x * sin((0.5 + v_position.y) * 3.14);

  float red = texture2D(u_texture, vec2(v_texcoord.x - offsetX, v_texcoord.y)).x;
  float green = texture2D(u_texture, vec2(v_texcoord.x, v_texcoord.y)).y;
  float blue = texture2D(u_texture, vec2(v_texcoord.x, v_texcoord.y)).z;

  gl_FragColor = vec4(red, green, blue, 1.0);
}`;

const scene = new gl.Scene();
const vShader = scene.addVertexShader(vShaderSource);
const fShader = scene.addFragmentShader(fShaderSource);
const program = scene.compileProgram(vShader, fShader);
scene.useProgram(program);

const images = document.querySelectorAll('img');
images.forEach(image => scene.addImage(image));

scene.draw();
