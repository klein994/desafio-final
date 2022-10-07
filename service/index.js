import Service from "./service.js";
import productsRepository from '../api/repository/productsRepository.js';
import usersRepository from '../api/repository/usersRepository.js';
import cartsRepository from '../api/repository/cartsRepository.js';

const repoProducts = new productsRepository();

const repoUsers = new usersRepository();
const repoCarts = new cartsRepository();

const service = new Service(repoProducts, repoUsers, repoCarts);

export default service;