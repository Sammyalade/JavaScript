function highOrderFunction(func){
    console.log("higher order function");
    func()
}

function lowOrderFunction(){
    console.log("lower order function");
}

highOrderFunction(lowOrderFunction);