var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';
  
  for (var name in customerData) {
    if (name !== firstName) {
      greeting = "Welcome! Is this your first time?";
    }
    else if (name === firstName) {
      for (var visit in customerData[name]) {
        if (customerData[name][visit] === 1) {
          return greeting = "Welcome back, " + name + "! We're glad you liked us the first time!";
        } else {
          return greeting = "Welcome back, " + name + "! So glad to see you again!";
        }
      }
    }
  }
  return greeting;
};
