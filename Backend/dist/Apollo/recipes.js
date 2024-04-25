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
    enterpriseID: String // ID Empresa si es de una y si no -1
});
const logSchema = new Schema({
    UserName: String,
    UserID: String,
    Message: String,
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
const nimOdooSchema = new Schema({
    modules: [String]
});
export const userModel = model('users', userSchema);
export const clientModel = model('clients', clientSchema);
export const enterpriseModel = model('enterprises', enterpriseSchema);
export const productModel = model('products', productSchema);
export const salesProposalModel = model('salesproposals', salesProposalSchema);
export const logModel = model('logs', logSchema);
export const nimOdooModule = model('nimodoo', nimOdooSchema);
