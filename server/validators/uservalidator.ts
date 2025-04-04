import { z } from "zod";

export const signUpSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signInSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export const updatePasswordSchema = z.object({
    userId: z.string().min(1, "User ID is required"),
    oldPassword: z.string().min(6, "Old password must be at least 6 characters"),
    newPassword: z.string().min(6, "New password must be at least 6 characters"),
});

export const changeUsernameSchema = z.object({
    userId: z.string().min(1, "User ID is required"),
    newUsername: z.string().min(3, "New username must be at least 3 characters"),
});

export const updateFriendsSchema = z.object({
    userId: z.string().min(1, "User ID is required"),
    friendId: z.string().min(1, "Friend ID is required"),
    action: z.enum(["add", "remove"]),
});

export const updateCodeSchema = z.object({
    userId: z.string().min(1, "User ID is required"),
    code: z.string().min(1, "Code cannot be empty"),
});
