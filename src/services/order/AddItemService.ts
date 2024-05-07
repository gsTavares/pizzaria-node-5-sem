import prismaClient from "../../prisma"

type ItemRequest = {
    quantidade: number,
    id_produto: string,
    id_pedido: string
}

class AddItemService {

    execute = async ({ quantidade, id_produto, id_pedido }: ItemRequest) => {

        const item = await prismaClient.item.create({
            data: {
                pedidoId: id_pedido,
                produtoId: id_produto,
                quantidade: quantidade
            }
        });

        return item;

    }

}

export { AddItemService };