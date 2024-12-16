import { check } from "express-validator";
import { validateResult } from "../utils/requestValidate.js";


// title: "Cien años de soledad",
// description:
//   "Una obra maestra del realismo mágico que narra la historia de la familia Buendía en el pueblo ficticio de Macondo.",
// url: "https://www.amazon.com/dp/B0088J1FZI",
// autor: { name: "Gabriel García Márquez", nationality: "Colombiano" },
// avaliable: true,
// release: "1967-06-05",
// },
 
export const createBookValidator = [
    check('autor.name').exists().notEmpty().isString(),
    check('autor.nationality').exists().notEmpty().isString(),
    check('title').exists().notEmpty(),
    check('description').exists().notEmpty(),
    check('release').exists().notEmpty(),
    check('available').optional(),
    check('url').exists().notEmpty(),
    (req, res, next) => validateResult(req, res, next)
]