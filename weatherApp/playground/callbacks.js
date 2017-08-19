var getUser = (id, callback) => {
    var user = {
        id: id,
        name: "Derp"
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(20, (user) =>{
    console.log(user);
})