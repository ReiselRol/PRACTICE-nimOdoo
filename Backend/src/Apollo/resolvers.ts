import mongoose from 'mongoose';
import { userModel, clientModel, enterpriseModel, productModel, salesProposalModel } from './recipes.js';
import { PRODUCTION_URI, DEVELOPMENT_URI } from './config/ApolloConfig.js';

mongoose.connect(DEVELOPMENT_URI, { dbName: 'nimodoo' });

const resolvers = {
    Query: {
        getUsers: async () => {
            return userModel.find();
        },
        getUserByID: async (parent, { userID }) => {
            return userModel.findById(userID);
        },
        getUserByEmail: async (parent, { userEmail }) => {
            return userModel.findOne({ email: userEmail });
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
            const savedUser = await newUser.save();
            
            // Asignar el ID del usuario al campo ID
            savedUser.ID = savedUser._id.toString();
            await userModel.findByIdAndUpdate(savedUser._id, { ID: savedUser._id }, { new: true });
            
            return savedUser;
        },
        
        addClient: async (parent, args) => {
            const newClient = new clientModel(args);
            const savedClient = await newClient.save();
            
            // Asignar el ID del cliente al campo ID
            savedClient.ID = savedClient._id.toString();
            await clientModel.findByIdAndUpdate(savedClient._id, { ID: savedClient._id }, { new: true });
            
            return savedClient;
        },
        
        addEnterprise: async (parent, args) => {
            const newEnterprise = new enterpriseModel(args);
            const savedEnterprise = await newEnterprise.save();
            
            // Asignar el ID de la empresa al campo ID
            savedEnterprise.ID = savedEnterprise._id.toString();
            await enterpriseModel.findByIdAndUpdate(savedEnterprise._id, { ID: savedEnterprise._id }, { new: true });
            
            return savedEnterprise;
        },
        
        addProduct: async (parent, args) => {
            const newProduct = new productModel(args);
            const savedProduct = await newProduct.save();
            
            // Asignar el ID del producto al campo ID
            savedProduct.ID = savedProduct._id.toString();
            await productModel.findByIdAndUpdate(savedProduct._id, { ID: savedProduct._id }, { new: true });
            
            return savedProduct;
        },
        
        addSalesProposal: async (parent, args) => {
            const newSalesProposal = new salesProposalModel(args);
            const savedSalesProposal = await newSalesProposal.save();
            
            // Asignar el ID de la propuesta de venta al campo ID
            savedSalesProposal.ID = savedSalesProposal._id.toString();
            await salesProposalModel.findByIdAndUpdate(savedSalesProposal._id, { ID: savedSalesProposal._id }, { new: true });
            
            return savedSalesProposal;
        },
        deleteUser: async (parent, { userID }) => {
            return userModel.findById(userID).then(user => user.deleteOne());
        },
        deleteClient: async (parent, { clientID }) => {
            return clientModel.findById(clientID).then(client => client.deleteOne());
        },
        deleteEnterprise: async (parent, { enterpriseID }) => {
            return enterpriseModel.findById(enterpriseID).then(enterprise => enterprise.deleteOne());
        },
        deleteProduct: async (parent, { productID }) => {
            return productModel.findById(productID).then(product => product.deleteOne());
        },
        deleteSalesProposal: async (parent, { salesProposalID }) => {
            return salesProposalModel.findById(salesProposalID).then(salesProposal => salesProposal.deleteOne());
        },
    },
};

export default resolvers;
