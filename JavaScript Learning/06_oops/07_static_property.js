class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const user = new User("Manthan") 
// console.log(user.createId())    // 123   // without static used with createId()
// console.log(user.createId())    // user.createId is not a function   // with static used with createId()


class Teacher extends User{     // accesing the properties of another class using 'extends' keyword
    constructor(username , email , password){
        super(username)     // similar work as 'call' & 'this' 
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const teacher = new Teacher("Manthan" , "temp@gmail.com" , "1234")
// teacher.logMe() // username is Manthan
teacher.createId()  // teacher.createId is not a function

// static also not allowed to access the method after inherites the that class
