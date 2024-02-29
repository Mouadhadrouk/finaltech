const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const productRouter = require("./routes/products");
const userRouter = require("./routes/users");
const commentRouter = require("./routes/comment");
connectDB();

// midelweres
app.use(cors());
app.use(express.json());
app.use("/api/products", productRouter);
app.use("/api/auth", userRouter);
app.use("/api/product/comments", commentRouter);
const PORT = process.env.PORT || 4002;
app.listen(PORT, () => console.log(`server runing on port:${PORT}`));



