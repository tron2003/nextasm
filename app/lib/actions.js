import { revalidatePath } from "next/cache";
import { User } from "./models.js";
import  connectToDB  from "./utils";
import { redirect } from "next/navigation";

export const addUser = async (formData) => {
    try {
        // Convert formData to a plain object
        const data = Object.fromEntries(formData.entries());

        // Destructure data object for user creation
        const { username, email, password, phone, address, isAdmin, isActive } = data;

        // Connect to the database
        await connectToDB();

        // Create a new user instance
        const newUser = new User({ username, email, password, phone, address, isAdmin, isActive });

        // Save the new user to the database
        await newUser.save();

        // Revalidate path and redirect after successful user creation
        revalidatePath("/dashboard/users");
        redirect("/dashboard/users");

        // Return the newly created user
        return newUser;
    } catch (error) {
        // Handle any errors that occur during user creation
        console.error("Error creating user:", error);
        throw new Error("Failed to create user");
    }
};
