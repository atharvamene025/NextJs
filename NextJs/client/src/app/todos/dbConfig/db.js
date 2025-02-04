import mongoose from "mongoose"

export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URI)

        mongoose.connection.on("connected", () => {
            console.log("Connected to DB.");
        });

    }catch (error) {
        console.log("Failed To connect To DB.",error);
    }

}