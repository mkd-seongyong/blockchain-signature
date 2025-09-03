import express from "express";
import cors from "cors";
import signRouter from "./routes/sign";

// Spring의 main클래스에 해당하는 @SpringBootApplication과 유사한 역할
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1", signRouter);

export default app;
