import { model, Schema } from 'mongoose';
const userSchema = new Schema({
    ID: String,
    name: String,
    surname: String,
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: String,
    admin: Boolean // Añadir modulos y editar info
});
const clientSchema = new Schema({
    ID: String,
    name: String,
    surname: String,
    email: String,
    phone: String,
    enterpriseID: Number // ID Empresa si es de una y si no -1
});
const enterpriseSchema = new Schema({
    ID: String,
    name: String,
    phone: String,
    address: String,
    email: String,
    cif: String,
});
const productSchema = new Schema({
    ID: String,
    name: String,
    description: String,
    stock: Number,
    price: Number
});
const salesProposalSchema = new Schema({
    ID: String,
    proposerID: String, // Client ID del que vende 
    productIDs: [String], // List of product IDs
    clientID: String, // Client ID del que compra
    creationDate: String,
    state: Number // 0.- confirmed, 1.- pending, 2.- declined
});
export const userModel = model('users', userSchema);
export const clientModel = model('clients', clientSchema);
export const enterpriseModel = model('enterprises', enterpriseSchema);
export const productModel = model('products', productSchema);
export const salesProposalModel = model('salesproposals', salesProposalSchema);
