const user = { name1: "John", age: 22, city: "sahiwal" };

//basic desctructing
const { name1, age } = user;
console.log(name1);
console.log(age);

//rename variables
const { name1: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

//default variable
const { country = "USA" } = user;
console.log(country);
console.log(user);


const data = {
    user:
    {
        name: "John", address: {
            city: "NYC"
        }
    }
};
console.log(data);

const { user: { address: { city } } } = data;
console.log(data.user);