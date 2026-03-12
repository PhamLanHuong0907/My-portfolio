type Vec3 = [number, number, number];

const PHI = (1 + Math.sqrt(5)) / 2;

const ICO_VERTICES: Vec3[] = [
  [-1, PHI, 0], [1, PHI, 0], [-1, -PHI, 0], [1, -PHI, 0],
  [0, -1, PHI], [0, 1, PHI], [0, -1, -PHI], [0, 1, -PHI],
  [PHI, 0, -1], [PHI, 0, 1], [-PHI, 0, -1], [-PHI, 0, 1]
];

const ICO_FACES: [number, number, number][] = [
  [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
  [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
  [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
  [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]
];

function normalize(v: Vec3): Vec3 {
  const len = Math.sqrt(v[0] ** 2 + v[1] ** 2 + v[2] ** 2);
  return [v[0] / len, v[1] / len, v[2] / len];
}

function lerp3(a: Vec3, b: Vec3, t: number): Vec3 {
  return [
    a[0] + t * (b[0] - a[0]),
    a[1] + t * (b[1] - a[1]),
    a[2] + t * (b[2] - a[2]),
  ];
}

function cross(a: Vec3, b: Vec3): Vec3 {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}

function dot(a: Vec3, b: Vec3): number {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function sub(a: Vec3, b: Vec3): Vec3 {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

function edgeKey(a: number, b: number): string {
  return a < b ? `${a}-${b}` : `${b}-${a}`;
}

export interface FaceData {
  vertices: Vec3[];
  center: Vec3;
  normal: Vec3;
  type: 'pentagon' | 'hexagon';
  index: number;
}

export function generateSoccerBallFaces(radius: number = 1): FaceData[] {
  // Compute cut points on each edge at 1/3 and 2/3
  const cutPoints = new Map<string, Map<number, Vec3>>();
  const allEdges = new Set<string>();

  for (const face of ICO_FACES) {
    for (let i = 0; i < 3; i++) {
      const a = face[i];
      const b = face[(i + 1) % 3];
      const key = edgeKey(a, b);
      if (!allEdges.has(key)) {
        allEdges.add(key);
        const va = ICO_VERTICES[a];
        const vb = ICO_VERTICES[b];
        const nearMap = new Map<number, Vec3>();
        nearMap.set(a, lerp3(va, vb, 1 / 3));
        nearMap.set(b, lerp3(va, vb, 2 / 3));
        cutPoints.set(key, nearMap);
      }
    }
  }

  function getCut(a: number, b: number, near: number): Vec3 {
    return cutPoints.get(edgeKey(a, b))!.get(near)!;
  }

  const faces: FaceData[] = [];

  // 20 hexagons (one per icosahedron face)
  for (let fi = 0; fi < ICO_FACES.length; fi++) {
    const [a, b, c] = ICO_FACES[fi];
    const rawVerts: Vec3[] = [
      getCut(a, b, a), getCut(a, b, b),
      getCut(b, c, b), getCut(b, c, c),
      getCut(c, a, c), getCut(c, a, a),
    ];

    const projVerts = rawVerts.map(v => {
      const n = normalize(v);
      return [n[0] * radius, n[1] * radius, n[2] * radius] as Vec3;
    });

    const cx = projVerts.reduce((s, v) => s + v[0], 0) / 6;
    const cy = projVerts.reduce((s, v) => s + v[1], 0) / 6;
    const cz = projVerts.reduce((s, v) => s + v[2], 0) / 6;
    const cNorm = normalize([cx, cy, cz]);

    faces.push({
      vertices: projVerts,
      center: [cNorm[0] * radius, cNorm[1] * radius, cNorm[2] * radius],
      normal: cNorm,
      type: 'hexagon',
      index: fi,
    });
  }

  // 12 pentagons (one per icosahedron vertex)
  for (let vi = 0; vi < 12; vi++) {
    const points: Vec3[] = [];

    for (const key of allEdges) {
      const [aStr, bStr] = key.split('-');
      const a = parseInt(aStr);
      const b = parseInt(bStr);
      if (a === vi || b === vi) {
        points.push(getCut(a, b, vi));
      }
    }

    // Project onto sphere
    const projPoints = points.map(p => {
      const n = normalize(p);
      return [n[0] * radius, n[1] * radius, n[2] * radius] as Vec3;
    });

    const vertexNormal = normalize(ICO_VERTICES[vi]);
    const center: Vec3 = [
      vertexNormal[0] * radius,
      vertexNormal[1] * radius,
      vertexNormal[2] * radius,
    ];

    // Order points around vertex normal
    let u: Vec3;
    if (Math.abs(vertexNormal[0]) < 0.9) {
      u = normalize(cross([1, 0, 0], vertexNormal));
    } else {
      u = normalize(cross([0, 1, 0], vertexNormal));
    }
    const v = cross(vertexNormal, u);

    const sorted = projPoints
      .map(p => {
        const d = sub(p, center);
        return { p, angle: Math.atan2(dot(d, v), dot(d, u)) };
      })
      .sort((a, b) => a.angle - b.angle)
      .map(x => x.p);

    faces.push({
      vertices: sorted,
      center,
      normal: vertexNormal,
      type: 'pentagon',
      index: vi,
    });
  }

  return faces;
}
