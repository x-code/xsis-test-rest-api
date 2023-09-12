import "dotenv/config";
import cors from "cors";
import express from "express";
import viewEngine from "./config/viewEngine";
import initRoutes from "./routes";
import checkConnectDatabase from "./config/connectDatabase";
import responseData from "./middlewares/responseData";

const app = express();
let port = process.env.PORT || 3000;

// Enable All CORS Requests
app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(responseData);

// Check connect with database
checkConnectDatabase();

// Set up view engine
viewEngine(app);

// Init route
initRoutes(app);

app.listen(port, () => {
  console.log(`Backend Aido Health is running on port ${port}`);
});
