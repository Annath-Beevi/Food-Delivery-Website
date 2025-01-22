import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://annathbeevi01:Yeiu5JI9VELzHLxl@cluster0.qbh4q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>console.log("DB Connected"))
}
