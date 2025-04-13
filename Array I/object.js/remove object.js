var point = {
    x: 10,    // x coordinate
    y: 20 ,// y coordinate 
    z: 30  // z coordinate 
  };

  
  point.x = 40
  point.a = 15
  console.log(point)
  console.log(point.d)
   
  point ['y'] = 50

  var prop = 'z'
  point[prop] = 60
    console.log(point)
     point.a = undefined
    console.log(point)
    delete point.a
    console.log(point)