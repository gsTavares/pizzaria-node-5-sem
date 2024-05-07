import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListByCategoryController {

    handle = async (req: Request, res: Response) => {

        const id_categoria = req.query.id_categoria as string;

        const listByCategoryService = new ListByCategoryService();

        const products = await listByCategoryService.execute(id_categoria);

        return res.json(products);

    }

}

export { ListByCategoryController };