import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "API-URL"; 

const Username = "Username"; //Give your username here
const Password = "Password"; // Password goes here
const APIKey = "Your API-KEY"; // API key goes here
const BearerToken = "Your Bearer Token"; // Token goes here

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
try {
  const result = await axios.get(API_URL + "/random");
  res.render("index.ejs", { content: JSON.stringify(result.data)});
} catch (error) {
  res.status(404).send(error.message);
}
});

app.get("/basicAuth", async (req, res) => {

  // https://stackoverflow.com/a/74632908

  try {
    const result = await axios.get(API_URL + "/all?page=3", {
      auth: {
        username: Username,
        password: Password,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data)});
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  
  try {
    const score = 8; //params
    const result = await axios.get(API_URL + `/filter?score=${score}&apiKey=${APIKey}`);
    res.render("index.ejs", { content: JSON.stringify(result.data)});
  } catch (error) {
    res.status(404).send(error.message)
  }

});

const config = {
  headers: { Authorization: `Bearer ${BearerToken}` },
};

app.get("/bearerToken", async (req, res) => {

  // https://stackoverflow.com/a/52645402

  try {
    const result = await axios.get(API_URL + "/secrets/1", config);
    axios.get(API_URL, {
        headers: { 
          Authorization: BearerToken
        },
      });
    res.render("index.ejs", { content: JSON.stringify(result.data)});
  } catch (error) {
    res.status(404).send(error.message);
  }
 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
