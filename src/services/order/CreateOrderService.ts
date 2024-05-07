import prismaClient from "../../prisma";

type CreateOrderRequest = {
    mesa: number,
    nome: string
}

class CreateOrderService {

    execute = async ({mesa, nome}: CreateOrderRequest) => {
        const order = await prismaClient.pedido.create({
            data: {
                mesa: mesa,
                nome: nome
            }
        });

        return order;
    }

}

export { CreateOrderService };