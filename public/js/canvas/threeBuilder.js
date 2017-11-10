function initPreview(accessor, container) {

    var canvas = document.getElementById(accessor);

    window.onresize = resizeCanvas;
    resizeCanvas();

    var scene = new Scene(canvas);

    render();

    function render() {
        requestAnimationFrame(render);
        scene.update();
    }

    function resizeCanvas() {
        var canvas = document.getElementById(accessor);
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";

        if (scene)
            scene.onWindowResize();
    }



    function Scene(canvas) {
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;

        // used to move the light
        var time = 0;

        var width = canvas.width;
        var height = canvas.height;

        var scene = new THREE.Scene();
        scene.background = new THREE.Color("#202020");

        var light = buildLights(scene, 0);
        var camera = buildCamera(width, height);
        var renderer = buildRender(width, height);
        var mesh = addObjects(scene);



        function buildLights(scene, offset) {
            var light = new THREE.SpotLight("#fff", 0.8);
            light.position.y = 100 - offset;
            light.position.x = 200; //Math.sin(time * 0.01) * 200;

            light.angle = 1.05;

            light.decacy = 2;
            light.penumbra = 1;

            light.shadow.camera.near = 10;
            light.shadow.camera.far = 1000;
            light.shadow.camera.fov = 30;

            scene.add(light);

            return light;
        }

        function buildCamera(width, height) {
            var aspectRatio = width / height;
            var fieldOfView = 60;
            var nearPlane = 10;
            var farPlane = 500;
            var camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

            camera.position.z = 100;

            return camera;
        }

        function buildRender(width, height) {
            var renderer = new THREE.WebGLRenderer({
                canvas: canvas,
                antialias: true,
                alpha: true
            });
            var DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
            renderer.setPixelRatio(DPR);
            renderer.setSize(width, height);

            renderer.gammaInput = true;
            renderer.gammaOutput = true;

            return renderer;
        }

        function addObjects(scene) {
            //var geometry = new THREE.SphereGeometry(30, 64, 64);
            var geometry = new THREE.CubeGeometry(1, 1, 1);
            var material = new THREE.MeshStandardMaterial({
                color: "#000",
                roughness: 20
            });




            // roughnessMap
            var image = document.createElement('img');
            var roughnessMap = new THREE.Texture(image);
            image.onload = function () {
                roughnessMap.needsUpdate = true;
            };
            image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYzNjk1NjkxQjY0MjExRTY4QTg3RDcxOTNDQkE1RkRGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYzNjk1NjkyQjY0MjExRTY4QTg3RDcxOTNDQkE1RkRGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjM2OTU2OEZCNjQyMTFFNjhBODdENzE5M0NCQTVGREYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjM2OTU2OTBCNjQyMTFFNjhBODdENzE5M0NCQTVGREYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WU2ohAAAAH0lEQVR42mJgoDVg/P//P0kamBgGHRj1w0jxA0CAAQBKrgwBw+YutwAAAABJRU5ErkJggg==';

            roughnessMap.magFilter = THREE.NearestFilter;
            material.roughnessMap = roughnessMap;

            var mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);
            return mesh;
        }

        this.update = function () {
            time++;

            // move the light


            // mesh.rotation.x += 0.001;
            // mesh.rotation.y += 0.01;
            //mesh.rotation.z += 0.001;

            renderer.clear();
            renderer.render(scene, camera);
        };

        this.onWindowResize = function () {
            var canvas = document.getElementById("canvas");
            var width = document.body.clientWidth;
            var height = document.body.clientHeight;
            canvas.width = width;
            canvas.height = height;

            camera = buildCamera(width, height);

            renderer.setSize(width, height);
        };

        this.getMesh = function () {
            return mesh;
        };

        controls = new THREE.OrbitControls(camera, renderer.domElement);
    }
//--------------
//     return new THREE.Mesh(new THREE.CubeGeometry(64, 64, 1), new THREE.MeshStandardMaterial({
//         color: "#000",
//         roughness: 20
//     }));


    return scene.getMesh();

}