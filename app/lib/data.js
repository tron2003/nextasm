import { connectioToDB } from "./utils";

export const fetchUsers = async () => {
    try {
        connectioToDB
        const users =await User.find();
        return users

    } catch (error) {

        console.log(error);
        throw new Error("failed to fetch users ")
    }
}