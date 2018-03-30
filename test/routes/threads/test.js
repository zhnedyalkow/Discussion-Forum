const id = 1;

const postsArray = [{
    id: 1,
    name: 'post1',
}, {
    id: 1,
    name: 'post2',
}, {
    id: 1,
    name: 'post3',
}];

const foundItem = postsArray.filter((obj) => obj.id === id);
console.log(foundItem);