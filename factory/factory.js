import { storage } from "../api/args/args.js";

let products;
let users;
let carts;

switch(storage){
    case "mongo":
        const { productsCollection } = await import("../api/connections/mongoose.js");
        const { default : daoMongoProducts } = await import('../api/DAO/daoMongoProducts.js');
        products = new daoMongoProducts(productsCollection);
        const { usersCollection } = await import("../api/connections/mongoose.js");
        const { default : daoMongoUsers } = await import('../api/DAO/daoMongoUsers.js');
        users = new daoMongoUsers(usersCollection);
        const { cartsCollection } = await import("../api/connections/mongoose.js");
        const { default : daoMongoCarts } = await import('../api/DAO/daoMongoCarts.js');
        carts = new daoMongoCarts(cartsCollection);
        break;
    default:
        throw new Error("No se ha encontrado el tipo de almacenamiento");
}

export { products, users, carts };

