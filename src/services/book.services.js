import { books } from "../utils/mockData.js";
import { AuthorSerivice } from "./author.services.js";

class Books {
  constructor() {}

  getAllBooks() {
    return books;
  }

  createBook(data) {
    const { author } = data;
    const name = author.name;
    const nationality = author.nationality;
    AuthorSerivice.createAuthor(name, nationality);

    books.push(data);
    return data;
  }

  availableBooks() {
    return books.filter((e) => e.avaliable);
  }

  notAvailableBooks() {
    return books.filter((e) => !e.avaliable);
  }
}

export const BooksService = new Books();
