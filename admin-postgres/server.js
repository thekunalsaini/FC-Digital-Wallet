const express = require("express");
const app = express();
const usersRoutes = require("./routes/adminRoutes");

app.use(express.json());
app.use("/admin", usersRoutes);


// const port = process.env.PORT || 3000;
const port = 5002;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});