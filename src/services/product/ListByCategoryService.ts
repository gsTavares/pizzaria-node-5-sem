import prismaClient from "../../prisma";

class ListByCategoryService {

    execute = async (category_id: string) => {
        const products = await prismaClient.produto.findMany({
            where: {
                categoriaId: category_id
            }
        });

        return products;
    }

}

export { ListByCategoryService };