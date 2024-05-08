import prismaClient from "../../prisma";

type ListFinishedRequest = {
    criado_em: string
}

class ListFinishedService {

    execute = async ({ criado_em }: ListFinishedRequest) => {

        if (!criado_em) {
            throw new Error('A data deve ser informada para o filtro!');
        }

        const orders = await prismaClient.$queryRaw`SELECT * FROM pedidos WHERE status = true AND CAST(criado_em as date) = CAST(${criado_em} as date)`;

        return orders;

    }

}

export { ListFinishedService };