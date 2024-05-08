import { Request, Response } from "express";
import { ListNotFinishedService } from "../../services/order/LIstNotFinishedService";

class ListNotFinishedController {

    handle = async (req: Request, res: Response) => {

        const criado_em = req.query.criado_em as string;

        const listNotFinishedService = new ListNotFinishedService();

        const orders = await listNotFinishedService.execute({criado_em});

        return res.json(orders);

    }

}

export { ListNotFinishedController };