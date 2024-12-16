import { AuthorSerivice } from "../services/author.services.js";
import { errorResponse } from "../utils/errorResponse.js";
import { response } from "../utils/reponse.js";


export const getAuthors = async (req, res) => {
  try {
    const data = AuthorSerivice.getAllAuthors();
    response(res, 200, data);
  } catch (error) {
    errorResponse(res, 400, error.message);
  }
};

export const getAuthorByName = (req, res) => {
  const {name} = req.params

  try {
    const data = AuthorSerivice.getByName(name)
    response(res, 200, data)
  } catch (error) {
    errorResponse(res, 400, error.message)
  }
}