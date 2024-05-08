import { Request, Response } from "express";
import { ListFinishedService } from "../../services/order/ListFinishedService";

class ListFinishedController {

    handle = async (req: Request, res: Response) => {

        const criado_em = req.query.criado_em as string;

        const listFinishedService = new ListFinishedService();

        const orders = await listFinishedService.execute({criado_em});

        return res.json(orders);

    }

}

export { ListFinishedController };