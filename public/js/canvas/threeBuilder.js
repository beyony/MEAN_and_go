function initPreview(accessor, sizeX, sizeY, sizeZ) {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    //renderer.setSize(window.innerWidth, window.innerHeight);

    var container = document.getElementById(accessor);
    console.log(container.offsetWidth);
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);


// texture front side
    var textureFront = new THREE.TextureLoader().load("js/canvas/textures/business-card-front.jpg");
    textureFront.wrapS = THREE.RepeatWrapping;
    textureFront.wrapT = THREE.RepeatWrapping;
    textureFront.repeat.set(1, 1); // full scale stretch

// texture back side
    var textureBack = new THREE.TextureLoader().load("js/canvas/textures/business-card-back.jpg");
    textureBack.wrapS = THREE.RepeatWrapping;
    textureBack.wrapT = THREE.RepeatWrapping;
    textureBack.repeat.set(1, 1); // full scale stretch


// alternating textures
    var frontSideMaterial = new THREE.MeshBasicMaterial({
        map: textureFront
    });
    var backSideMaterial = new THREE.MeshBasicMaterial({
        map: textureBack
    });
    var borderMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000
    });

    var materials = [borderMaterial, // Left side
        borderMaterial, // Right side
        borderMaterial, // Top side   ---> THIS IS THE FRONT
        borderMaterial, // Bottom side --> THIS IS THE BACK
        frontSideMaterial, // Front side
        backSideMaterial // Back side
    ];


// building the mesh and applying that texture!
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);


// set camera pos
    camera.position.z = 20;




// now: magic!
    function animate() {
        requestAnimationFrame(animate);

        //  cube.rotation.x += 0.005;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    }



    animate();


    return cube;
}