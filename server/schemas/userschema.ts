import { z } from "zod";

// ✅ Project Validation Schema
const projectschema = z.object({
    code1: z.string().min(1, "Code1 cannot be empty"),
    code2: z.string().min(1, "Code2 cannot be empty"),
    user1: z.string().min(1, "User1 is required"),
    user2: z.string().min(1, "User2 is required"),
    lastUpdate: z.date().default(() => new Date()) // Auto-set date
});

// ✅ User Validation Schema
const userschema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    joinDate: z.date().default(() => new Date()), // Auto-set join date
    numberOfFriends: z.number().min(0).default(0),
    username: z.string().min(3, "Username must be at least 3 characters"),
    // password: z.string()
    //     .min(6, "Password must be at least 6 characters")
    //     .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    //     .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    //     .regex(/[0-9]/, "Password must contain at least one number"),
    email: z.string().email("Invalid email format"),
    projects: z.array(projectschema).default([]) // Validate array of projects
});

// export { userschema, projectschema };
