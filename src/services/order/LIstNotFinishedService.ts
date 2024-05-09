import { Pedido } from "@prisma/client";
import prismaClient from "../../prisma";

type ListNotFinishedRequest = {
    criado_em: string
}

class ListNotFinishedService {

    execute = async ({ criado_em }: ListNotFinishedRequest) => {

        if (!criado_em) {
            throw new Error('A data deve ser informada para o filtro!');
        }

        const orders = await prismaClient.$queryRaw<Pedido[]>`SELECT * FROM pedidos WHERE status = false AND CAST(criado_em as date) = CAST(${criado_em} as date)`;

        return orders;

    }

}

export { ListNotFinishedService };