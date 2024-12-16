import { authors } from "../utils/mockData.js";

class Author {
  constructor() {}

  getAllAuthors() {
    return authors;
  }

  createAuthor(name, nationality) {
    const exist = authors.some((e) => e.name === name);

    if (exist) {
      return "This actor already exist";
    }
    authors.push({ name, nationality });
    return "Created";
  }

  getByName (name) {
    console.log(name)
    return authors.find(e => e.name === name)
  }
}

export const AuthorSerivice = new Author()