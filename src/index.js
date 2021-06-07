import * as THREE from 'three';
import { Scene } from 'three';
import {cube} from './cube.js';
import {line} from './line.js';

// input segment
const btn = document.getElementById("action");

btn.addEventListener("click", function () {
    //Do something here
    let boxwidthinput = document.getElementById("myInput").value;
    let boxwidthinputnumber = parseFloat(boxwidthinput);
    if (boxwidthinputnumber != 0) {
        cube.scale.x = boxwidthinputnumber;
    }

    //cube.position.x=2;
});
// position segment

const btnposition = document.getElementById("actionPosition");

btnposition.addEventListener("click", function(){
    let boxpositionxinput = document.getElementById("positionInput").value;
    let boxpositionxinputnumber = parseFloat(boxpositionxinput);
    if (boxpositionxinputnumber != 0) {
        cube.position.x = boxpositionxinputnumber;
    }
})
//cube.position.x=2; do zrobienia




const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//const materialB = new THREE.MeshBasicMaterial({ color: 0x0000FFFF });
const intensity = 1;
const skyColor = 0xB1E1FF;  // light blue
const groundColor = 0xB97A20;  // brownish orange
const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
//light.position.set( 50, 50, 50 );
const color1 = 0xFFFFFF;
const intensity1 = 0.2;
const light2 = new THREE.DirectionalLight(color1, intensity1);
light2.position.set(-10, 10, 0);
light2.target.position.set(-5, 0, 0);


cube.add(line);
scene.add(cube);
scene.add(light);
scene.add(light2);
scene.add(light2.target);

camera.position.z = 5;


const animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);


};

animate();