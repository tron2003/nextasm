"use server";

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import {connectToDB}  from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
// import { signIn } from "../auth";

export const addUser = async (formData) => {
    const { username, email, password, phone, address, isAdmin, isActive } =
        Object.fromEntries(formData);

    try {
        await connectToDB();

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin,
            isActive,
        });

        await newUser.save();
    } catch (err) {
        console.log(err);
        throw new Error("Failed to create user!");
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};
