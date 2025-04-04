import express, { Request, Response } from "express";
import routes from "./Routes/route";
const app = express();
const PORT = 5000;
import cors from "cors";
app.use(
    cors({
        origin: "http://localhost:3000", // Frontend URL
        methods: "GET,POST,PUT,DELETE", // Allowed methods
        credentials: true, // Allow cookies & authentication headers
    })
);

// Middleware
app.use(express.json());
app.use("/api", routes);
// Basic Route
app.get("/", (req: Request, res: Response) => {
    res.send("Hello, TypeScript Express Server!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
