function getPerson(firstName, lastName, ...hobbies) {
  return {
    firstName,
    lastName,
    hobbies,
    numHobbies: hobbies.length
  };
}

const resObj = getPerson('Apinya', 'thongsongkram', 'Reading book', 'Running')
console.log('resObj : ', resObj);