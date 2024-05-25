import mongoose from 'mongoose'


export const connectioToDB = async () => {
    const connection = {};
    try {
        if (connection.isConnected) {
            console.log("already connected to database")
            return;
        }
        const db = await mongoose.connect(process.env.MONGO);

        connection.isConnected = db.connections[0].readyState
        console.log("Now connected")
    }
    catch (error) {
        console.log(error.message

        )
        throw new Error(error)
    }

}
