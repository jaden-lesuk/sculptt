import express, { Express, Request, Response} from "express";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorMiddleware";

dotenv.config();

const app: Express= express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routing
app.get("/", (req: Request, res: Response) => {
    res.send(`Express Typescript`);
})

app.use(errorHandler);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running on port: ${port}`);
})