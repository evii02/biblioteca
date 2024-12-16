import { errorResponse } from "../utils/errorResponse.js";
import { response } from "../utils/reponse.js";

export const createUrl = (req, res) => {
  const file = req.file;
  try {
    const url = `/${file.filename}`;
    response(res, 201, url);
  } catch (error) {
    errorResponse(res, 400, error.message);
  }
};
