import { Request, Response } from "express";
import { FinishService } from "../../services/order/FinishService";

class FinishController {

    handle = async (req: Request, res: Response) => {

        const { order_id } = req.body;

        const finishService = new FinishService();

        const message = await finishService.execute({order_id});

        return res.json(message);

    }
    
}

export { FinishController };