//FOR LOOPS
for (let i = 0; i < 10; i++ ) {
    console.log(i);
}

const users = ['Max', 'Anna', 'Joel'];

// console.log(users);

//old syntax instead use for of
// for(let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

//FOR OF Loops use for arrays

for (const user of users) {
    console.log(user);
};

const loggedInUser = {
    name: 'Max',
    age: 32,
    isAdmin: true
};

//FOR IN Loop use for objects(structures)
for (const propertyName in loggedInUser) {
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);
};

//While

let isFinished = false;

while (!isFinished) {
    isFinished = confirm('Do you want to quit?')
}   
console.log('Done!');


