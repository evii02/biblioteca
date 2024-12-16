import { matchedData } from "express-validator";
import { BooksService } from "../services/book.services.js";
import { errorResponse } from "../utils/errorResponse.js";
import { response } from "../utils/reponse.js";

export const listBook = (req, res) => {
  try {
    const data = BooksService.getAllBooks();
    response(res, 200, data);
  } catch (error) {
    errorResponse(res, 400, error.message);
  }
};

export const createBook = (req, res) => {
  const body = req.body;

  console.log('hol', body)
  try {
    const data = BooksService.createBook(body);
    response(res, 201, data);
  } catch (error) {
    console.log(error)
    errorResponse(res, 400, error.message);
  }
};

export const getBookAvailable = (req, res) => {
  try {
    const data = BooksService.availableBooks();
    response(res, 200, data);
  } catch (error) {
    errorResponse(res, 400, error.message);
  }
};

export const notAvailableBooks = (req, res) => {
  try {
    const data = BooksService.notAvailableBooks();
    response(res, 200, data);
  } catch (error) {
    errorResponse(res, 400, error.message);
  }
};
