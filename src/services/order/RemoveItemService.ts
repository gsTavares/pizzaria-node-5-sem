import prismaClient from "../../prisma";

type RemoveItemRequest = {
    item_id: string,
    quantity?: string
}

class RemoveItemService {

    execute = async ({ item_id, quantity }: RemoveItemRequest) => {

        const item = await prismaClient.item.findFirst({
            where: {
                id: item_id
            },
            include: {
                Pedido: {
                    select: {
                        rascunho: true
                    }
                }
            }
        });

        if (!item) {
            throw new Error('Item não encontrado!');
        }

        if (item.Pedido?.rascunho) {

            if (!quantity || Number(quantity) >= item.quantidade) {

                await prismaClient.item.delete({
                    where: {
                        id: item_id
                    }
                });

                return { message: 'Item removido com sucesso!' };


            } else {

                const quantityNumber = Number(quantity);

                if (quantityNumber < 0) {
                    throw new Error('A quantidade não pode ser menor do que 0');
                }

                const newQuantity = item.quantidade - quantityNumber;

                await prismaClient.item.update({
                    where: {
                        id: item_id
                    },
                    data: {
                        quantidade: newQuantity
                    }
                });

                return {message: `Item(s) removido(s) com sucesso (restam ${newQuantity})`};

            }

        } else {

            return { message: 'Não foi possível remover o item pois o pedido já foi enviado para a cozinha!' };

        }

    }

}

export { RemoveItemService };