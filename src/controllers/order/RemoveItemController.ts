import { Request, Response } from "express";
import { RemoveItemService } from "../../services/order/RemoveItemService";

class RemoveItemController {

    handle = async (req: Request, res: Response) => {

        const item_id = req.query.item_id as string;
        const quantity = req.query.quantity as string;

        const removeItemService = new RemoveItemService();

        const message = await removeItemService.execute({item_id, quantity});

        return res.json(message);

    }

}

export { RemoveItemController };