import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';
    
let canvas = document.querySelector('canvas.webgl');
canvas.width = window.innerWidth;
let scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, 2, 1, 1000);
camera.position.x = -2;
camera.position.y = -4;
camera.position.z = 2;
scene.add(camera);

var renderer = new THREE.WebGLRenderer({
    canvas: canvas, 
    //alpha:true, 
    antialias: true 
});

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.screen.height);
document.body.appendChild(renderer.domElement);

let controls = new OrbitControls(
    camera, 
    renderer.domElement
);
//controls.minDistance = 10;
//controls.maxDistance = 0;
controls.target.set(0, 40, 1);
controls.update();

const particleGeometry = new THREE.BufferGeometry;
const count = 6000;
const posArray = new Float32Array(count * 3);
for(let i=0; i < count*3; i++)
{
    posArray[i] = 10*(Math.random()-0.5) * 10*(Math.random()-0.5);
}

particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray,3));

const material = new THREE.PointsMaterial({
    size: 0.0005,
   // color: '#a2eaf3'
});

const particleMesh = new THREE.Points(particleGeometry, material);
scene.add(particleMesh);

document.addEventListener('mousemove', animateParticles);
let mouseX = 0;
let mouseY = 0;
 
function animateParticles()
{
    mouseX = event.clientX;
    mouseY = event.clientY;
}


let light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
light.position.set(50,60,40);
light.castShadow = true;
light.target.position.set(0, 0, 0);
light.shadow.bias = -0.001;
light.shadow.mapSize.width = 2048;
light.shadow.mapSize.height = 2048;
light.shadow.camera.near = 0.1;
light.shadow.camera.far = 500.0;
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 500.0;
light.shadow.camera.left = 100;
light.shadow.camera.right = -100;
light.shadow.camera.top = 100;
light.shadow.camera.bottom = -100;
scene.add(light);

light = new THREE.AmbientLight(0xFFFFFF);
scene.add(light);

window.addEventListener('resize', () => 
{
    renderer.setSize(window.innerWidth, window.screen.height-1000);
    camera.updateProjectionMatrix();
});





// var fovMax = 10,
//   fovMin = 5,
//   fovTmp = 0;

// function handleZoom(event) {
//     event.preventDefault();
//     fovTmp = camera.fov + (event.deltaY * 0.05);
//     if (fovTmp >= fovMin && fovTmp <= fovMax) {
//         camera.fov = fovTmp;
//         camera.updateProjectionMatrix();
//     }
// }

// canvas.addEventListener('wheel', handleZoom);







const clock = new THREE.Clock();

function animate()
{
    const elapsedTime = clock.getElapsedTime();
    particleMesh.rotation.y = mouseY * (elapsedTime * 0.00007);
    particleMesh.rotation.x = mouseX * (elapsedTime * 0.00007);

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
