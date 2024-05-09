import prismaClient from "../../prisma";

type FinishRequest = {
    order_id: string
}

class FinishService {

    execute = async ({order_id}: FinishRequest) =>  {

        const order = await prismaClient.pedido.findFirst({
            where: {
                id: order_id
            }
        });

        if(order?.rascunho) {
            throw new Error('Esse pedido ainda não foi enviado para a cozinha e não pode ser finalizado');
        }

        await prismaClient.pedido.update({
            where: {
                id: order_id
            },
            data: {
                status: true
            }
        });

        return {message: 'Pedido finalizado com sucesso!'};

    }

}

export {FinishService};