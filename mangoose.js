const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/studentdb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("Connected to DB")})
.catch((err)=>{console.log("Failed",err)});

const studentSchema = new mongoose.Schema({
    name:String,
    age:Number,
    branch:String
})

const Students = mongoose.model("Students", studentSchema,"students");

async function addStudent() {
    const student = new Students({name:"Anil", age:20, branch:"CSE"})
    await student.save();
    console.log("STudent inserted")
}

async function readStudent(){
    const students = await Students.find()
    console.log("Students : ", students)
}

async function updateStudent() {
 await Students.updateOne({ name: "Anil" }, { $set: { age: 21 } });
 console.log("Student updated");
}

async function deleteStudent() {
 await Students.deleteOne({ name: "Anil" });
 console.log("Student deleted");
}

async function run() {
    await addStudent();
    await readStudent();
    await updateStudent();
    await deleteStudent();
    mongoose.connection.close()
}

run();