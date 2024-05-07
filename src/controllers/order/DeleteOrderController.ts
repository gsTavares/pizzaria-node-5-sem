import { Request, Response } from "express";
import { DeleteOrderService } from "../../services/order/DeleteOrderService";

class DeleteOrderController {

    handle = async (req: Request, res: Response) => {
        
        const id_pedido = req.query.id_pedido as string;

        const deleteOrderService = new DeleteOrderService();

        const message = await deleteOrderService.execute(id_pedido);

        return res.json(message);

    }

}

export { DeleteOrderController };