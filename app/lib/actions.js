"use server";

import { revalidatePath } from "next/cache";
import { Product, User } from "./models.js";
import { connectToDB } from "./utils.js";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
    // Ensure formData is correctly parsed
    const data = Object.fromEntries(formData);
    const { username, email, password, phone, address, isAdmin, isActive } = data;

    // Log the parsed data to ensure it's correct
    console.log("Parsed formData:", { username, email, password, phone, address, isAdmin, isActive });

    if (!username || !email || !password || !phone || !address) {
        console.error("Missing required fields in formData.");
        throw new Error("Missing required fields!");
    }

    try {
        await connectToDB(); // Ensure this is awaited

        // Generate salt and hash the password
        const salt = await bcrypt.genSalt(10);
        console.log("Generated salt:", salt);

        if (!password || !salt) {
            throw new Error("Password or salt not defined");
        }

        const hashedPassword = await bcrypt.hash(password, salt);
        console.log("Hashed password:", hashedPassword);

        const newUser = new User({
            username,
            email: Array.isArray(email) ? email[0] : email, // Handle email as an array
            password: hashedPassword,
            phone,
            address,
            isAdmin: isAdmin === "true", // Convert to boolean
            isActive: isActive === "true", // Convert to boolean
        });

        await newUser.save();
        console.log("User saved successfully");
    } catch (err) {
        console.error("Error details:", {
            message: err.message,
            stack: err.stack,
            formData: data, // Log the parsed form data
        });
        throw new Error("Failed to create user!");
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};
export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } =
        Object.fromEntries(formData);

    try {
        await connectToDB();

        const updateFields = {
            username,
            email,
            phone,
            address,
            isAdmin,
            isActive,
        };

        // Only hash the password if it is provided
        if (password) {
            const salt = await bcrypt.genSalt(10);
            updateFields.password = await bcrypt.hash(password, salt);
        }

        // Remove empty fields
        Object.keys(updateFields).forEach(
            (key) => (updateFields[key] === "" || updateFields[key] === undefined) && delete updateFields[key]
        );

        await User.findByIdAndUpdate(id, updateFields);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to update user!");
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
    const { title, desc, price, stock, color, size } =
        Object.fromEntries(formData);

    try {
        await connectToDB();

        const newProduct = new Product({
            title,
            desc,
            price,
            stock,
            color,
            size,
        });

        await newProduct.save();
    } catch (err) {
        console.log(err);
        throw new Error("Failed to create product!");
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};

export const updateProduct = async (formData) => {
    const { id, title, desc, price, stock, color, size } =
        Object.fromEntries(formData);

    try {
        await connectToDB();

        const updateFields = {
            title,
            desc,
            price,
            stock,
            color,
            size,
        };

        Object.keys(updateFields).forEach(
            (key) => (updateFields[key] === "" || updateFields[key] === undefined) && delete updateFields[key]
        );

        await Product.findByIdAndUpdate(id, updateFields);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to update product!");
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        await connectToDB();
        await User.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to delete user!");
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};

export const deleteProduct = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        await connectToDB();
        await Product.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to delete product!");
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};

export const authenticate = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password });
    } catch (err) {
        if (err.message.includes("CredentialsSignin")) {
            return "Wrong Credentials";
        }
        throw err;
    }
};
