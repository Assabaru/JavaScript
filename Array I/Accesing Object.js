var point = {
  x: 10,    // x coordinate
  y: 20 ,// y coordinate 
  z: 30  // z coordinate 
};


console.log(point.x); // 10
console.log(point.y); // 20 \
console.log(point.z); // 30
console.log(point['x']); // 10
console.log(point['y']); // 20
console.log(point['z']); // 30
console.log(point.x + point.y + point.z); // 60