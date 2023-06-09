import "dotenv/config"; // To read CLERK_API_KEY
import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node";
import express from "express";
import cors from "cors";
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
// Use the lax middleware that returns an empty auth object when unauthenticated
app.get(
  "/protected-endpoint",
  ClerkExpressWithAuth({
    // ...options
  }),
  (req, res) => {
    res.json(req.auth);
    console.log(res.json);
  }
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
