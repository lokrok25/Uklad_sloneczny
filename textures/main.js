import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';


//SCENA
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xFFFFFF);
const camera = new THREE.PerspectiveCamera( 40, window.innerWidth/window.innerHeight, 0.1, 1000 );
const cameraDistance = 100.0;
camera.position.y = cameraDistance;
camera.lookAt( scene.position );
scene.background = new THREE.Color(0x080418);

const textureLoader = new THREE.TextureLoader();


//RENDERER
const renderer = new THREE.WebGLRenderer({antyalising: true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( new THREE.Color( 0xffffff ) );
renderer.shadowMap.enabled = true;
document.getElementsByTagName('body')[0].appendChild( renderer.domElement );

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; 


//PRACA KAMERY
const controls = new OrbitControls( camera, renderer.domElement );
controls.maxDistance = 600;
controls.minDistance = 15;
controls.update();
const loader = new GLTFLoader();
controls.enableDamping = true; 
controls.dampingFactor = 0.05;

// BLOOM SLONCA
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

// BLOOM USTAWIENIA
const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5, // Strength
    0.4, // Radius
    0.85 // Threshold
);
composer.addPass(bloomPass);


//SWIATLO SLONECZNE

const light = new THREE.PointLight( 0xFFFFFF, 1500, 10000);
light.position.set( 0, 0, 0 );
light.castShadow = true; // default false
scene.add( light );

light.shadow.mapSize.width = 512; // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5; // default
light.shadow.camera.far = 500; // default


//const helper = new THREE.CameraHelper( light.shadow.camera );
//scene.add( helper );

//WSZYSTKIE PARAMETRY
const SunSize = 10.0;
const MercSize = 1.0;
const MercDistance = 18.0;
const MercRotation = 0.04;
const VenusSize = 1.8;
const VenusDistance = 26.5;
const VenusRotation = 0.02;
const EarthSize = 2.0;
const EarthDistance = 36.0;
const EarthRotation = 0.01;
const MoonSize = 0.35;
const MoonDistance = 2.6; //2?
const MoonRotation = 0.05;
const MarsSize = 1.0;
const MarsDistance = 48.0;
const MarsRotation = 0.005;
const JupiterSize = 8.0;
const JupiterDistance = 120.0;
const JupiterRotation = 0.0012;
const SaturnSize = 6.0;
const SaturnDistance = 170.0;
const SaturnRotation = 0.0005;
const SaturnRingSize = SaturnSize * 1.7;
const SaturnRingWidth = SaturnRingSize * 0.18;
const PlanetPathWidth = 0.1;
const PlanetPathElements = 64.0;
const PlanetPathOpacity = 0.8;
const asteroidCount = 800; 
const AsteroidInnerRadius = 70; 
const AsteroidOuterRadius = 90; 
const uranSize = 5.0;
const uranDistance = 250.0;
const uranRotation = 0.0002;
const neptunSize = 4.5;
const neptunDistance = 355.0;
const neptunRotation = 0.0001;

//TORY PLANET
const MercPathGeo = new THREE.TorusGeometry( MercDistance, PlanetPathWidth, PlanetPathElements );
const MercPathMat = new THREE.MeshBasicMaterial( { color: 0xA6AEBF, transparent: true, opacity: PlanetPathOpacity } );
const MercPath = new THREE.Mesh( MercPathGeo, MercPathMat );
MercPath.rotateX(Math.PI/2);
scene.add(MercPath);

const VenusPathGeo = new THREE.TorusGeometry( VenusDistance, PlanetPathWidth, PlanetPathElements );
const VenusPathMat = new THREE.MeshBasicMaterial( { color: 0xFAB12F, transparent: true, opacity: PlanetPathOpacity } );
const VenusPath = new THREE.Mesh( VenusPathGeo, VenusPathMat );
VenusPath.rotateX(Math.PI/2);
scene.add(VenusPath);


const EarthPathGeo = new THREE.TorusGeometry( EarthDistance, PlanetPathWidth, PlanetPathElements );
const EarthPathMat = new THREE.MeshBasicMaterial( { color: 0xa0a0ff, transparent: true, opacity: PlanetPathOpacity } );
const EarthPath = new THREE.Mesh( EarthPathGeo, EarthPathMat );
EarthPath.rotateX(Math.PI/2);
scene.add(EarthPath);

const MoonPathGeo = new THREE.TorusGeometry( MoonDistance, 0.04, PlanetPathElements );
const MoonPathMat = new THREE.MeshBasicMaterial( { color: 0x888888, transparent: true, opacity: PlanetPathOpacity } );
const MoonPath = new THREE.Mesh( MoonPathGeo, MoonPathMat );
MoonPath.rotateX(Math.PI/2);
scene.add(MoonPath);

const MarsPathGeo = new THREE.TorusGeometry( MarsDistance, PlanetPathWidth, PlanetPathElements );
const MarsPathMat = new THREE.MeshBasicMaterial( { color: 0xff0000, transparent: true, opacity: PlanetPathOpacity } );
const MarsPath = new THREE.Mesh( MarsPathGeo, MarsPathMat );
MarsPath.rotateX(Math.PI/2);
scene.add(MarsPath);

const JupiterPathGeo = new THREE.TorusGeometry( JupiterDistance, PlanetPathWidth, PlanetPathElements );
const JupiterPathMat = new THREE.MeshBasicMaterial( { color: 0xDCE4C9, transparent: true, opacity: PlanetPathOpacity } );
const JupiterPath = new THREE.Mesh( JupiterPathGeo, JupiterPathMat );
JupiterPath.rotateX(Math.PI/2);
scene.add(JupiterPath);

const SaturnPathGeo = new THREE.TorusGeometry( SaturnDistance, PlanetPathWidth, PlanetPathElements );
const SaturnPathMat = new THREE.MeshBasicMaterial( { color: 0xB59F78, transparent: true, opacity: PlanetPathOpacity } );
const SaturnPath = new THREE.Mesh( SaturnPathGeo, SaturnPathMat );
SaturnPath.rotateX(Math.PI/2);
scene.add(SaturnPath);

const uranPathGeo = new THREE.TorusGeometry( uranDistance, 0.5, PlanetPathElements );
const uranPathMat = new THREE.MeshBasicMaterial( { color: 0x808080, transparent: true, opacity: PlanetPathOpacity } );
const uranPath = new THREE.Mesh( uranPathGeo, uranPathMat );
uranPath.rotateX(Math.PI/2);
scene.add(uranPath);

const neptunPathGeo = new THREE.TorusGeometry( neptunDistance, 0.6, PlanetPathElements );
const neptunPathMat = new THREE.MeshBasicMaterial( { color: 0x4CC9FE, transparent: true, opacity: PlanetPathOpacity } );
const neptunPath = new THREE.Mesh( neptunPathGeo, neptunPathMat );
neptunPath.rotateX(Math.PI/2);
scene.add(neptunPath);

//kosmos
const kosmosTexture = textureLoader.load('http://localhost:5173/space.png')
const kosmosGeo = new THREE.SphereGeometry(400, 32, 32); 
const kosmosMat = new THREE.MeshBasicMaterial ({ map: kosmosTexture, side: THREE.BackSide } );
const kosmos = new THREE.Mesh(kosmosGeo, kosmosMat);
scene.add(kosmos);

//słońce
const SunGeo = new THREE.SphereGeometry( SunSize, 32, 32 ); 
const SunMat = new THREE.MeshBasicMaterial( { color: 0xFFFF00 } ); 
const Sun = new THREE.Mesh( SunGeo, SunMat ); 

scene.add( Sun );

//merkury
const mercuryTexture = textureLoader.load('http://localhost:5173/mercury.jpg');
const MercGeo = new THREE.SphereGeometry( MercSize, 32, 32 ); 
//const MercMat = new THREE.MeshStandardMaterial( { color: 0xA6AEBF, roughness: 0.33 } ); 
const MercMat = new THREE.MeshStandardMaterial( { map: mercuryTexture, roughness: 0.33 } ); 
const Merc = new THREE.Mesh( MercGeo, MercMat ); 
Merc.castShadow = true;
Merc.receiveShadow = true;
Merc.position.x = MercDistance;

scene.add( Merc );

//wenus
const venusTexture = textureLoader.load('http://localhost:5173/venus.jpg');
const VenusGeo = new THREE.SphereGeometry( VenusSize, 32, 32 );
//const VenusMat = new THREE.MeshStandardMaterial( { color: 0xFAB12F, roughness: 0.33 } );
const VenusMat = new THREE.MeshStandardMaterial( { map: venusTexture, roughness: 0.33 } );
const Venus = new THREE.Mesh( VenusGeo, VenusMat );
Venus.castShadow = true;
Venus.receiveShadow = true;
Venus.position.x = VenusDistance;

scene.add( Venus );

//ziemia + ksieżyc
const earthTexture = textureLoader.load('http://localhost:5173/earth.jpg');
const EarthGeo = new THREE.SphereGeometry( EarthSize , 32, 32 );
//const EarthMat = new THREE.MeshStandardMaterial( { color: 0x133E87, roughness: 0.33 } )
const EarthMat = new THREE.MeshStandardMaterial( { map: earthTexture, roughness: 0.33 } );
const Earth = new THREE.Mesh( EarthGeo, EarthMat ); 
Earth.castShadow = true;
Earth.receiveShadow = true;

const MoonTexture = textureLoader.load('http://localhost:5173/moon.jpg');
const MoonGeo = new THREE.SphereGeometry( MoonSize , 32, 32 );
//const MoonMat = new THREE.MeshStandardMaterial( { color: 0x888888, roughness: 0.33 } );
const MoonMat = new THREE.MeshStandardMaterial( { map: MoonTexture, roughness: 0.33 } );
const Moon = new THREE.Mesh( MoonGeo, MoonMat );
Moon.castShadow = true;
Moon.receiveShadow = true;
Moon.position.x = MoonDistance;


const EarthMoon = new THREE.Group();
EarthMoon.add( Earth );
EarthMoon.add( Moon );
EarthMoon.position.set( EarthDistance, 0, 0);
scene.add( EarthMoon );

//mars
const marsTexture = textureLoader.load('http://localhost:5173/mars.jpg');
const MarsGeo = new THREE.SphereGeometry( MarsSize , 32, 32 );
//const MarsMat = new THREE.MeshStandardMaterial( { color: 0xff0000, roughness: 0.33 } )
const MarsMat = new THREE.MeshStandardMaterial( { map: marsTexture, roughness: 0.33 } );
const Mars = new THREE.Mesh( MarsGeo, MarsMat ); 
Mars.castShadow = true;
Mars.receiveShadow = true;
Mars.position.x = MarsDistance;
scene.add( Mars );

//jowisz
const jupiterTexture = textureLoader.load('http://localhost:5173/jupiter.jpg');
const JupiterGeo = new THREE.SphereGeometry( JupiterSize , 32, 32 );
//const JupiterMat = new THREE.MeshStandardMaterial( { color: 0xDCE4C9, roughness: 0.33 } )
const JupiterMat = new THREE.MeshStandardMaterial( { map: jupiterTexture, roughness: 0.33 } );

const Jupiter = new THREE.Mesh( JupiterGeo, JupiterMat ); 
Jupiter.castShadow = true;
//Jupiter.receiveShadow = true;
Jupiter.position.x = JupiterDistance;
scene.add( Jupiter );

//saturn
const saturnTexture = textureLoader.load('http://localhost:5173/saturn.jpg');
const SaturnGeo = new THREE.SphereGeometry( SaturnSize , 32, 32 );
//const SaturnMat = new THREE.MeshStandardMaterial( { color: 0xB59F78, roughness: 0.33 } );
const SaturnMat = new THREE.MeshStandardMaterial( { map: saturnTexture, roughness: 0.33 } );
const Saturn = new THREE.Mesh( SaturnGeo, SaturnMat ); 
//Saturn.castShadow = true;
//Saturn.receiveShadow = true;


const SaturnRingGeo = new THREE.TorusGeometry( SaturnRingSize, SaturnRingWidth, 16, 64 );
const SaturnRingMat = new THREE.MeshStandardMaterial( { color: 0xff64aa, side: THREE.DoubleSide, roughness: 0.02 } );
const SaturnRing = new THREE.Mesh( SaturnRingGeo, SaturnRingMat );
SaturnRing.receiveShadow = true;
SaturnRing.rotation.set( 0, -Math.PI/12.0, 0 );
SaturnRing.scale.set( 1.0, 1.0, 0.01 );

const SaturnRingGroup = new THREE.Group();
SaturnRingGroup.add( Saturn );
SaturnRingGroup.add( SaturnRing );
SaturnRingGroup.rotateX(Math.PI/2);
SaturnRingGroup.position.set( SaturnDistance, 0, 0 );

scene.add( SaturnRingGroup );

//asteroidy
const asteroidMaterial = new THREE.MeshStandardMaterial( { color: 0x888888, roughness: 0.5 } );
const asteroidGroup = new THREE.Group();
for (let i = 0; i < asteroidCount; i++) {
    const asteroidSize = Math.random() * 0.5 + 0.2; 
    const asteroidGeometry = new THREE.SphereGeometry( asteroidSize, 8, 8 );
    const asteroid = new THREE.Mesh( asteroidGeometry, asteroidMaterial );
	
    const radius = Math.random() * ( AsteroidOuterRadius - AsteroidInnerRadius ) + AsteroidInnerRadius; //losowanie od AsteroidInnerRadius do AsteroidOuterRadius - AsteroidInnerRadius
    const angle = Math.random() * Math.PI * 2.0; //okrąg z asteroidów 
    asteroid.position.set( Math.cos( angle ) * radius, ( Math.random() - 0.5 ) * 0.5, Math.sin( angle ) * radius );

    asteroidGroup.add(asteroid);
}

scene.add( asteroidGroup );

//uran
const uranTexture = textureLoader.load('http://localhost:5173/uran.jpg');
const uranGeo = new THREE.SphereGeometry( uranSize , 32, 32 );
const uranMat = new THREE.MeshStandardMaterial( { map: uranTexture, roughness: 0.33 } );

const uran = new THREE.Mesh( uranGeo, uranMat ); 
uran.castShadow = true;
//uran.receiveShadow = true;
uran.position.x = uranDistance;
scene.add( uran );

//neptun
const neptunTexture = textureLoader.load('http://localhost:5173/neptun.jpg');
const neptunGeo = new THREE.SphereGeometry( neptunSize , 32, 32 );
const neptunMat = new THREE.MeshStandardMaterial( { map: neptunTexture, roughness: 0.33 } );

const neptun = new THREE.Mesh( neptunGeo, neptunMat ); 
neptun.castShadow = true;
//neptun.receiveShadow = true;
neptun.position.x = neptunDistance;
scene.add( neptun );








const animate = function () {
	requestAnimationFrame( animate );

	Merc.rotation.y -= MercRotation;
	if (Merc.rotation.y > 2.0*Math.PI)
	{
		Merc.rotation.y = 0.0;
	}
	Merc.position.set( MercDistance * Math.cos( Merc.rotation.y ), 0.0, MercDistance * Math.sin( Merc.rotation.y ) );

	Venus.rotation.y -= VenusRotation;
	if (Venus.rotation.y > 2.0*Math.PI)
	{
		Venus.rotation.y = 0.0;
	}
	Venus.position.set( VenusDistance * Math.cos( Venus.rotation.y ), 0.0, VenusDistance * Math.sin( Venus.rotation.y ) );


	
	
	EarthMoon.rotation.y -= EarthRotation;
	if (EarthMoon.rotation.y > 2.0*Math.PI)
	{
		EarthMoon.rotation.y = 0.0;
	}
	EarthMoon.position.set( EarthDistance * Math.cos( EarthMoon.rotation.y ), 0.0,  EarthDistance * Math.sin( EarthMoon.rotation.y ) )
 
	Moon.rotation.z += MoonRotation;
	if ( Moon.rotation.z > 2.0*Math.PI )
	{	
		Moon.rotation.z = 0.0;
	}
	Moon.position.set( MoonDistance * Math.cos( Moon.rotation.z ), 0.0,  MoonDistance * Math.sin( Moon.rotation.z ) ); 

	MoonPath.position.set( EarthDistance * Math.cos( EarthMoon.rotation.y ), 0.0,  EarthDistance * Math.sin( EarthMoon.rotation.y ) );
	
	//MoonPath.position.set( EarthDistance*Math.cos( EarthMoon.rotation.x ), 0.0,  EarthDistance*Math.sin( EarthMoon.rotation.x ) );

	Mars.rotation.y -= MarsRotation;
	if (Mars.rotation.y > 2.0*Math.PI)
	{
		Mars.rotation.y = 0.0;
	}
	Mars.position.set( MarsDistance * Math.cos( Mars.rotation.y ), 0.0, MarsDistance * Math.sin( Mars.rotation.y ) );

	Jupiter.rotation.y -= JupiterRotation;
	if (Jupiter.rotation.y > 2.0*Math.PI)
	{
		Jupiter.rotation.y = 0.0;
	}
	Jupiter.position.set( JupiterDistance * Math.cos( Jupiter.rotation.y ), 0.0, JupiterDistance * Math.sin( Jupiter.rotation.y ) );


	SaturnRingGroup.rotation.y -= SaturnRotation;
	if (SaturnRingGroup.rotation.y > 2.0*Math.PI)
	{
		SaturnRingGroup.rotation.y = 0.0;
	}
	SaturnRingGroup.position.set( SaturnDistance * Math.cos( SaturnRingGroup.rotation.y ), 0.0, SaturnDistance * Math.sin( SaturnRingGroup.rotation.y ) );

	
	asteroidGroup.rotation.y -= 0.0005;
	if (asteroidGroup.rotation.y > 2.0*Math.PI)
	{
		asteroidGroup.rotation.y = 0.0;
	}

	uran.rotation.y -= uranRotation;
	if (uran.rotation.y > 2.0*Math.PI) 
	{ 
		uran.rotation.y = 0.0; 
	}
	uran.position.set( uranDistance * Math.cos( uran.rotation.y ), 0.0, uranDistance * Math.sin( uran.rotation.y ) );

	neptun.rotation.y -= neptunRotation;
	if (neptun.rotation.y > 2.0*Math.PI) 
	{ 
		neptun.rotation.y = 0.0; 
	}
	neptun.position.set( neptunDistance * Math.cos( neptun.rotation.y ), 0.0, neptunDistance * Math.sin( neptun.rotation.y ) );

	controls.update();

	//renderer.render( scene, camera );
	composer.render();
};
animate();

//const axesHelper = new THREE.AxesHelper( 100 );
//scene.add( axesHelper );	



renderer.render( scene, camera );



// dostosowanie do rozmiaru okienka
window.addEventListener(
	'resize',
	function() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.render( scene, camera );
	},
	false
);














