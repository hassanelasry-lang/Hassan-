import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import mongoose from "mongoose";

// استخراج قاعدة البيانات بدون استخدام await في جذر الملف
const db = mongoose.connection.readyState === 1 
    ? mongoose.connection.getClient().db(process.env.MONGO_DB)
    : undefined;

export const auth = betterAuth({
    database: db ? mongodbAdapter(db, {
        client: mongoose.connection.getClient(),
        usePlural: true
    }) : undefined,
    emailAndPassword: {
        enabled: true
    },
    user: {
        additionalFields: {
            role: { type: "string", required: false }
        }
    },
    plugins: [nextCookies()]
});