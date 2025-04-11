var arr = [
    [90, 80, 70],
    [60, 50, 40],
    [30, 20, 10],
]
//console.log(arr[0][0]) // 90
//console.log(arr[0][1]) // 80
 for (var i = 0; i < arr.length; i++) 
    for (var j = 0; j < arr[i].length; j++) {
        console.log('Element' +i+ ':' +arr[i][j])
    }