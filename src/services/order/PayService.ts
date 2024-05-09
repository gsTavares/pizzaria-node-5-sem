import prismaClient from "../../prisma";

type PayRequest = {

    order_id: string

}

class PayService {

    execute = async ({ order_id }: PayRequest) => {

        const order = await prismaClient.pedido.findFirst({
            where: {
                id: order_id
            },
            include: {
                items: {
                    include: {
                        Produto: true
                    }
                }
            }
        });

        if (!order?.status) {

            throw new Error('Este pedido ainda não foi finalizado e não pode ser fechado!');

        }

        const { id, mesa, status, rascunho, nome } = order;

        if (!order.items || order.items.length === 0) {

            return { id: id, mesa: mesa, status: status, rascunho: rascunho, nome: nome, total: 0.00 };

        } else {

            const sum = order.items.map(i => Number(i.Produto?.preco) * i.quantidade)
                .reduce((a, b) => a + b);

                return { id: id, mesa: mesa, status: status, rascunho: rascunho, nome: nome, total: Number(sum.toFixed(2)) }; 
            
        }

    }

}

export { PayService };