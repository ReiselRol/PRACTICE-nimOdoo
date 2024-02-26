import mongoose from 'mongoose';
import { userModel, clientModel, enterpriseModel, productModel, salesProposalModel } from './recipes.js';
import { DEVELOPMENT_URI } from './config/ApolloConfig.js';
mongoose.connect(DEVELOPMENT_URI, { dbName: 'nimodoo' });
const resolvers = {
    Query: {
        getUsers: async () => {
            return userModel.find();
        },
        getUserByID: async (parent, { userID }) => {
            return userModel.findById(userID);
        },
        getClients: async () => {
            return clientModel.find();
        },
        getClientByID: async (parent, { clientID }) => {
            return clientModel.findById(clientID);
        },
        getEnterprises: async () => {
            return enterpriseModel.find();
        },
        getEnterpriseByID: async (parent, { enterpriseID }) => {
            return enterpriseModel.findById(enterpriseID);
        },
        getProducts: async () => {
            return productModel.find();
        },
        getProductByID: async (parent, { productID }) => {
            return productModel.findById(productID);
        },
        getSalesProposals: async () => {
            return salesProposalModel.find();
        },
        getSalesProposalByID: async (parent, { salesProposalID }) => {
            return salesProposalModel.findById(salesProposalID);
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const newUser = new userModel(args);
            return newUser.save();
        },
        addClient: async (parent, args) => {
            const newClient = new clientModel(args);
            return newClient.save();
        },
        addEnterprise: async (parent, args) => {
            const newEnterprise = new enterpriseModel(args);
            return newEnterprise.save();
        },
        addProduct: async (parent, args) => {
            const newProduct = new productModel(args);
            return newProduct.save();
        },
        addSalesProposal: async (parent, args) => {
            const newSalesProposal = new salesProposalModel(args);
            return newSalesProposal.save();
        },
    },
};
export default resolvers;
