function construct(name) {
    let person ={name,material : "human",assemble : true,duration : 1000} 
     name=this.name;
     //let material
     //let assemble
     //let duration
    return person;
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const somePerson = construct('Kevin');
  console.log('name is: ' + somePerson.name); // should be "Kevin"
  console.log('duration is: ' + somePerson.duration); // should be 1000