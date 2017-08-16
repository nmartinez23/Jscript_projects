function Pie ( flavour ) {
  this.flavour = flavour;
};

Pie.prototype = {
  getFlavour () {
    return this.flavour;
  },
};

tape( 'Pie Constructor', t => {
  let actual, expected;
  const pie = new Pie( 'pizza' );

  actual = pie.getFlavour();
  expected = 'pizza';
  t.equal( actual, expected, 'Pie::getFlavour() should return the pie\'s flavour' );

  // because it used a constructor function
  t.ok( pie instanceof Pie, 'Pie() should create instances of Pie' );

  // because it used a copy of the prototype
  const pie2 = Pie( 'apple' );
  t.equal( pie.getFlavour, pie2.getFlavour, 'Pie() should create shallow copy the the prototype' );

  t.end();
});


// Refactored with ES6
class Pie {
  constructor ( flavour ) {
    this.flavour = flavour;
  }
  
  getFlavour () {
    return this.flavour;
  }
};

tape( 'Pie Constructor', t => {
  let actual, expected;
  const pie = new Pie( 'pizza' );

  actual = pie.getFlavour();
  expected = 'pizza';
  t.equal( actual, expected, 'Pie::getFlavour() should return the pie\'s flavour' );

  // because it used a constructor function
  t.ok( pie instanceof Pie, 'Pie() should create instances of Pie' );

  // because it used a copy of the prototype
  const pie2 = Pie( 'pizza' );
  t.equal( pie.getFlavour, pie2.getFlavour, 'Pie() should create shallow copy the the prototype' );

  t.end();
});


// Refactored with object literal
function Pie ( initialFlavour ) {
  let flavour = initialFlavour;

  return {
    getFlavour () {
      return flavour;
    },
  };
}

tape( 'Pie Cloning Factory', t => {
  let actual, expected;
  const pie = Pie( 'pizza' );

  actual = pie.getFlavour();
  expected = 'pizza';
  t.equal( actual, expected, 'Pie::getFlavour() should return the pie\'s flavour' );

  // because it used an object literal in the function
  const pie2 = Pie( 'apple' );
  t.notEqual( pie.getFlavour, pie2.getFlavour, 'Pie() should create new objects each time' );

  t.end();
});
