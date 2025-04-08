import { fetchRandomQuote, fetchRandomDogImage } from "../models/userModel.js";

export const getHome = (req, res) => {
  res.send("Welcome to Random Content Generator\n");
};

export const getRandomContent = (req, res) => {
  Promise.all([
    fetchRandomQuote().catch(() => null),
    fetchRandomDogImage().catch(() => null)
  ])
    .then(([quote, dogImage]) => {
      res.render("index", {
        title: "Random Generator",
        message: "Click the button for surprises!",
        quote,
        dogImage
      });
    })
    .catch(error => {
      res.status(500).render("error", { message: "Failed to load content" });
    });
};

export const getNewQuote = (req, res) => {
  fetchRandomQuote()
    .then(quote => {
      res.json(quote);
    })
    .catch(error => {
      res.status(500).json({ error: "Failed to fetch quote" });
    });
};

export const getNewDogImage = (req, res) => {
  fetchRandomDogImage()
    .then(dogImage => {
      res.json(dogImage);
    })
    .catch(error => {
      res.status(500).json({ error: "Failed to fetch dog image" });
    });
};