class TargetingSolution {
    a
    constructor(config) {
       let x= config.x
       let y= config.y
       let z= config.z
        this.a=`(${x}, ${y}, ${z})`
        // your code here
    }
    target(){
       return this.a
    }
    // your code here
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const m = new TargetingSolution({
    x: 10,
    y: 15,
    z: 900,
  });
  
  console.log(m.target());