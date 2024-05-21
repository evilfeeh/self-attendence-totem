import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Customer } from './models/Customer'
import { OrderItem } from './models/OrderItem'
import { Order } from './models/Order'
import { Product } from './models/Product'

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'rootUser#1234',
    database: 'self-attendence',
    logging: false,
    entities: [Customer, Product, Order, OrderItem],
    synchronize: true,
})

AppDataSource.initialize()
    .then(() => {
        console.log('Connection has been established successfully')
    })
    .catch((error) => console.log(error))
