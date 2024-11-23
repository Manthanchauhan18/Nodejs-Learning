class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`)
    }
}

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

const teacher = new Teacher("Manthan" , "temp@gmail.com", "1234")
console.log(teacher)    // Teacher {username: 'Manthan',email: 'temp@gmail.com',password: '1234'}
teacher.addCourse()    // A new course was added by Manthan
teacher.logMe()    // username is Manthan