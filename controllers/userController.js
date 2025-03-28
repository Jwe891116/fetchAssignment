import { fetchRandomQuote, fetchRandomDogImage } from "../models/userModel.js";

export const getHome = (req, res) => {
  res.send("Welcome to Random Content Generator\n");
};

export const getRandomContent = async (req, res) => {
  try {
    const [quote, dogImage] = await Promise.all([
      fetchRandomQuote().catch(() => null),
      fetchRandomDogImage().catch(() => null)
    ]);
    
    res.render("index", {
      title: "Random Generator",
      message: "Click the button for surprises!",
      quote,
      dogImage
    });
  } catch (error) {
    res.status(500).render("error", { message: "Failed to load content" });
  }
};

export const getNewQuote = async (req, res) => {
  try {
    const quote = await fetchRandomQuote();
    res.json(quote);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch quote" });
  }
};

export const getNewDogImage = async (req, res) => {
  try {
    const dogImage = await fetchRandomDogImage();
    res.json(dogImage);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch dog image" });
  }
};