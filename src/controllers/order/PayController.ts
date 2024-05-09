import { Request, Response } from "express";
import { PayService } from "../../services/order/PayService";

class PayController {

    handle = async (req: Request, res: Response) => {

        const { order_id } = req.body;

        const payService = new PayService();

        const order = await payService.execute({ order_id });

        return res.json(order);

    }

}

export { PayController };