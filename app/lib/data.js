// import { User, Product } from './models.js';
// import { connectToDB } from './utils.js';

// const ITEMS_PER_PAGE = 2;

import { User, Product } from './models.js'; // Ensure the path is correct
import { connectToDB } from './utils.js';

const ITEM_PER_PAGE = 2;

export const fetchUsers = async (q, page) => {
    const parsedPage = Math.max(parseInt(page, 10), 1); // Ensure page is at least 1
    const query = q ? { username: { $regex: q, $options: 'i' } } : {}; // Use query if provided

    try {
        await connectToDB();
        const count = await User.countDocuments(query);
        const users = await User.find(query)
            .limit(ITEM_PER_PAGE)
            .skip(ITEM_PER_PAGE * (parsedPage - 1));
        return { count, users };
    } catch (err) {
        console.error("Error fetching users:", err);
        throw new Error("Failed to fetch users!");
    }
};

export const fetchUser = async (id) => {
    try {
        await connectToDB();
        const user = await User.findById(id);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (err) {
        console.error("Error fetching user:", err);
        throw new Error("Failed to fetch user!");
    }
};

export const fetchProducts = async (q = '', page = 1) => {
    return fetchDocuments(Product, q, page);
};

export const fetchProduct = async (id) => {
    try {
        await connectToDB();
        const product = await Product.findById(id);
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    } catch (err) {
        console.error("Error fetching product:", err);
        throw new Error("Failed to fetch product!");
    }
};
