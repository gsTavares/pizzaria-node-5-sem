import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

class CreateOrderController {

    handle = async (req: Request, res: Response) => {

        const {nome, mesa} = req.body;
        const createOrderService = new CreateOrderService();

        const order = await createOrderService.execute({nome, mesa});

        return res.json(order);

    }

}

export { CreateOrderController };