import prismaClient from "../../prisma";

type SendOrderRequest = {
    order_id: string
}

class SendOrderService {

    execute = async ({order_id}: SendOrderRequest) => {

        const order = await prismaClient.pedido.update({
            where: {
                id: order_id
            },
            data: {
                rascunho: false
            }
        });

        return order;

    }

}

export { SendOrderService };