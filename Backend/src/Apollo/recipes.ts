import {model, Schema} from 'mongoose'

const userSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    admin: Boolean // Añadir modulos y editar info
})

const clientSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    phone: String,
    enterpriseID: Number // ID Empresa si es de una y si no -1
})

const enterpriseSchema = new Schema({
    name: String,
    phone: String,
})

const productSchema = new Schema({
    enterpriseFromID: String, // La ID de la empresa de la que proviene
    name: String,
    description: String,
    enterpriseToID: String, // La ID de la empresa de la cual se le vende
})

const salesProposalSchema = new Schema({
    proposerID : String, // Client ID del que vende 
    clientID : String, // Client ID del que compra
    creationDate : String,
    state : Number // 0.- confirmed, 1.- pending, 2.- declined
})

export const userModel = model('users', userSchema)
export const clientModel = model('clients', clientSchema)
export const enterpriseModel = model('enterprises', enterpriseSchema)
export const productModel = model('products', productSchema)
export const salesProposalModel = model('salesproposals', salesProposalSchema)