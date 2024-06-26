import { Either } from "../../../Shared/util/either"
import Product from "../../domain/Entities/Product"

export default interface IProductRepository {
    create(product: Product): Promise<Either<Error, string>>
    update(product: Product): Promise<Either<Error, string>>
    delete(id: string): Promise<Either<Error, string>>
    findById(id: Product['id']): Promise<Either<Error, Product>>
    findByCategory(category: Product['category']): Promise<Either<Error, Product[]>>
}
