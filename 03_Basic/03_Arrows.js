const user = {
    username: "Nilesh Singh",
    price: 200,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to Website`);
    }

}

user.welcomeMessage()