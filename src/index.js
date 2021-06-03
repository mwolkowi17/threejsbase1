import * as THREE from 'three';
import { Scene } from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
//onst material = new THREE.MeshPhongMaterial();
const materialB = new THREE.MeshBasicMaterial({ color: 0x0000FFFF });
const cube = new THREE.Mesh(geometry, material);
const intensity = 1;
const skyColor = 0xB1E1FF;  // light blue
const groundColor = 0xB97A20;  // brownish orange
const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
//light.position.set( 50, 50, 50 );

const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
//points.push( new THREE.Vector3( 10, 0, 0 ) );

const geometryB = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometryB, materialB );
cube.add( line );
scene.add(cube);
scene.add( light );


camera.position.z = 5;


const animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.01;
    
    renderer.render(scene, camera);
};

animate();