(() => {
  const canvas = document.querySelector("#webgl");
  if (!canvas) return;

  const SEPARATION = 80;
  const AMOUNTX = 50;
  const AMOUNTY = 50;

  let camera, scene, renderer;
  let particles, count = 0;

  let width = canvas.offsetWidth;
  let height = canvas.offsetHeight;

  /* ================= INIT ================= */

  init();
  animate();

  function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
      60,
      width / height,
      1,
      5000
    );
    camera.position.set(0, 250, 1100);

    const numParticles = AMOUNTX * AMOUNTY;
    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);
    const alphas = new Float32Array(numParticles);

    let i = 0;
    let j = 0;

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        positions[i + 1] = 0;
        positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

        scales[j] = 1;
        alphas[j] = 1;

        i += 3;
        j++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    geometry.setAttribute(
      "scale",
      new THREE.BufferAttribute(scales, 1)
    );
    geometry.setAttribute(
      "alpha",
      new THREE.BufferAttribute(alphas, 1)
    );

    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0x2b2b2b) },
      },
      vertexShader: `
        attribute float scale;
        attribute float alpha;
        varying float vAlpha;

        void main() {
          vAlpha = alpha;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = scale * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        varying float vAlpha;
        void main() {
          if (length(gl_PointCoord - vec2(0.5)) > 0.475) discard;
          gl_FragColor = vec4(color, vAlpha);
        }
      `,
      transparent: true,
      depthWrite: false,
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    window.addEventListener("resize", onResize);
  }

  function onResize() {
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  /* ================= ANIMATE ================= */

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {
    const positions = particles.geometry.attributes.position.array;
    const scales = particles.geometry.attributes.scale.array;
    const alphas = particles.geometry.attributes.alpha.array;

    let i = 0;
    let j = 0;

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        // y 위치 (파도 높이)
        positions[i + 1] =
          Math.sin((ix + count) * 0.3) * 40 +
          Math.sin((iy + count) * 0.5) * 40;

        // 입자 크기
        scales[j] =
          (Math.sin((ix + count) * 0.3) + 1) * 18 +
          (Math.sin((iy + count) * 0.5) + 1) * 18;

        // 카메라에서의 깊이 기반 알파 (멀수록 연하게)
        const mvPosition = new THREE.Vector3(
          positions[i],
          positions[i + 1],
          positions[i + 2]
        ).applyMatrix4(camera.matrixWorldInverse);

        // 뒤쪽 입자를 더 연하게 (0.1~1 범위)
        alphas[j] = THREE.MathUtils.clamp(1 - (-mvPosition.z / 1500), 0.1, 1);

        i += 3;
        j++;
      }
    }

    particles.geometry.attributes.position.needsUpdate = true;
    particles.geometry.attributes.scale.needsUpdate = true;
    particles.geometry.attributes.alpha.needsUpdate = true;

    camera.lookAt(scene.position);
    renderer.render(scene, camera);
    count += 0.05;
  }
})();
