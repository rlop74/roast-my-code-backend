import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

const db = [{ username: "russel", password: "password" }];

app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;

    const user = db.find(
        (user) => user.username === username && user.password === password
    );

    if (!user) {
        return res.send({ success: false, error: "User is not found" });
    }

    res.send({ success: true, user });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
