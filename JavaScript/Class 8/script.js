// console.log("1");
// console.log("2");
// console.log("3");
// setTimeout(() => {
//     console.log("4");

// }, 5000)
// console.log("5");
// () => {
//     () => {
//         () => {
//             () => {
//                 () => {

//                 }
//             }
//         }
//     }
// }

function getUser(userId, callback) {
    setTimeout(() => {
        console.log("User data fetched");
        callback({ id: userId, name: "John Doe" });
    }, 1000);
}

function getUserPosts(userId, callback) {
    setTimeout(() => {
        console.log("User posts fetched");
        callback([{ postId: 1, title: "Post 1" }, { postId: 2, title: "Post 2" }]);
    }, 1000);
}

function getPostComments(postId, callback) {
    setTimeout(() => {
        console.log("Comments for post fetched");
        callback([{ commentId: 101, text: "Nice post!" }]);
    }, 1000);
}

// Nested Callbacks (Callback Hell)
// getUser(1, (user) => {
//     getUserPosts(user.id, (posts) => {
//         getPostComments(posts[0].postId, (comments) => {
//             console.log("Comments: ", comments);
//         });
//     });
// });

const obj = {
    name: "ABCD",
    age: 20,
    address: "BBSR"
}
// console.log(obj.address);

const childObj = {
    __proto__: obj,
    address: "XYZ"
}
// console.log(childObj.address);

const childObj2 = Object.create(obj)
// console.log(childObj.age);

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        console.log("Then block");

        console.log(response);
        // console.log(response.json());
        response.json().then((result) => {
            console.log(result);
        })
    })
    .catch((error) => {
        console.log("Catch Block");
        console.log(error);
    })