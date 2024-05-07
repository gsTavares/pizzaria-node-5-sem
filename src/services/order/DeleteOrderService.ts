import prismaClient from "../../prisma";

class DeleteOrderService {

    execute = async (order_id: string) => {

        await prismaClient.pedido.delete({
            where: {
                id: order_id
            }
        });

        return {message: 'Pedido deletado com sucesso!'};

    }

}

export { DeleteOrderService };