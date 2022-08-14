function checkAge(user) {
    let { age } = user; // destructuring
    if (age > 18) {
      console.log(`Hello, ${user.firstName} ${user.lastName}`);
    } else {
      console.log('No Permission');
    }
  }
  
  const user = {
    firstName: 'Apinya',
    lastName: 'Thonsongkram',
    age: 31,
  };
  
  checkAge(user); 

  const user2 = {
    firstName: 'Apinya',
    lastName: 'Naja',
    age: 15,
  };
  
  checkAge(user2); 