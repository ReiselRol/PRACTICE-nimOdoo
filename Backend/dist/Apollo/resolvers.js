import mongoose from 'mongoose';
import { userModel, clientModel, enterpriseModel, productModel, salesProposalModel, logModel, nimOdooModule } from './recipes.js';
import { DEVELOPMENT_URI } from './config/ApolloConfig.js';
mongoose.connect(DEVELOPMENT_URI, { dbName: 'nimodoo' });
const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};
const generateRandomNumber = () => {
    const min = 100000000;
    const max = 999999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const generateRandomDouble = (min, max) => {
    const random = Math.random() * (max - min) + min;
    return parseFloat(random.toFixed(2));
};
const generateRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const resolvers = {
    Query: {
        getUsers: async () => {
            return userModel.find();
        },
        getConfig: async () => {
            return nimOdooModule.find();
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
        getLogs: async () => {
            return logModel.find();
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
        getSells: async () => {
            return salesProposalModel.find({ state: 0 });
        },
        getSellByID: async (parent, { salesProposalID }) => {
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
        addLog: async (parent, args) => {
            const newLog = new logModel(args);
            const savedLog = await newLog.save();
            return savedLog;
        },
        addConfig: async (parent, args) => {
            const newConfig = new nimOdooModule(args);
            const savedConfig = await newConfig.save();
            return savedConfig;
        },
        updateNimodooConfigOrCreate: async (parent, args) => {
            try {
                const { modules } = args;
                let nimodooConfig = await nimOdooModule.findOne();
                if (!nimodooConfig)
                    nimodooConfig = new nimOdooModule({ modules });
                else
                    nimodooConfig.modules = modules;
                await nimodooConfig.save();
                return nimodooConfig;
            }
            catch (error) {
                console.error("Error al actualizar/crear la configuración de Nimodoo:", error);
                throw new Error("Error al actualizar/crear la configuración de Nimodoo");
            }
        },
        fakeUser: async (parent, args) => {
            var total = args.total;
            if (total < 0)
                total = 0;
            var newElements = [];
            for (var i = 0; i < total; i++) {
                var info = {
                    name: generateRandomString(6),
                    surname: generateRandomString(10),
                    password: generateRandomString(20),
                    admin: false,
                    email: generateRandomString(14) + "@" + generateRandomString(7) + "." + generateRandomString(3),
                };
                const newClient = new userModel(info);
                const savedUser = await newClient.save();
                savedUser.ID = savedUser._id.toString();
                await userModel.findByIdAndUpdate(savedUser._id, { ID: savedUser._id }, { new: true });
                newElements.push(savedUser);
            }
            return newElements;
        },
        addClient: async (parent, args) => {
            const newClient = new clientModel(args);
            const savedClient = await newClient.save();
            // Asignar el ID del cliente al campo ID
            savedClient.ID = savedClient._id.toString();
            await clientModel.findByIdAndUpdate(savedClient._id, { ID: savedClient._id }, { new: true });
            return savedClient;
        },
        fakeClient: async (parent, args) => {
            var total = args.total;
            if (total < 0)
                total = 0;
            var newElements = [];
            for (var i = 0; i < total; i++) {
                var info = {
                    name: generateRandomString(6),
                    surname: generateRandomString(10),
                    email: generateRandomString(14) + "@" + generateRandomString(7) + "." + generateRandomString(3),
                    phone: generateRandomNumber(),
                    enterpriseID: null
                };
                const newClient = new clientModel(info);
                const savedUser = await newClient.save();
                savedUser.ID = savedUser._id.toString();
                await clientModel.findByIdAndUpdate(savedUser._id, { ID: savedUser._id }, { new: true });
                newElements.push(savedUser);
            }
            return newElements;
        },
        addEnterprise: async (parent, args) => {
            const newEnterprise = new enterpriseModel(args);
            const savedEnterprise = await newEnterprise.save();
            // Asignar el ID de la empresa al campo ID
            savedEnterprise.ID = savedEnterprise._id.toString();
            await enterpriseModel.findByIdAndUpdate(savedEnterprise._id, { ID: savedEnterprise._id }, { new: true });
            return savedEnterprise;
        },
        fakeEnterprise: async (parent, args) => {
            var total = args.total;
            if (total < 0)
                total = 0;
            var newElements = [];
            for (var i = 0; i < total; i++) {
                var info = {
                    name: generateRandomString(6),
                    phone: generateRandomNumber(),
                    address: 'C/ ' + generateRandomString(6) + ' ' + generateRandomString(10),
                    email: generateRandomString(14) + "@" + generateRandomString(7) + "." + generateRandomString(3),
                    cif: generateRandomString(14)
                };
                const newClient = new enterpriseModel(info);
                const savedUser = await newClient.save();
                savedUser.ID = savedUser._id.toString();
                await enterpriseModel.findByIdAndUpdate(savedUser._id, { ID: savedUser._id }, { new: true });
                newElements.push(savedUser);
            }
            return newElements;
        },
        addProduct: async (parent, args) => {
            const newProduct = new productModel(args);
            const savedProduct = await newProduct.save();
            // Asignar el ID del producto al campo ID
            savedProduct.ID = savedProduct._id.toString();
            await productModel.findByIdAndUpdate(savedProduct._id, { ID: savedProduct._id }, { new: true });
            return savedProduct;
        },
        fakeProduct: async (parent, args) => {
            var total = args.total;
            if (total < 0)
                total = 0;
            var newElements = [];
            for (var i = 0; i < total; i++) {
                var info = {
                    name: generateRandomString(10),
                    description: generateRandomString(60),
                    stock: generateRandomInt(12, 12763),
                    price: generateRandomDouble(0.99, 5000.0)
                };
                const newClient = new productModel(info);
                const savedUser = await newClient.save();
                savedUser.ID = savedUser._id.toString();
                await productModel.findByIdAndUpdate(savedUser._id, { ID: savedUser._id }, { new: true });
                newElements.push(savedUser);
            }
            return newElements;
        },
        addSalesProposal: async (parent, args) => {
            const currentDate = new Date();
            const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;
            args.creationDate = formattedDate;
            const newSalesProposal = new salesProposalModel(args);
            const savedSalesProposal = await newSalesProposal.save();
            // Asignar el ID de la propuesta de venta al campo ID
            savedSalesProposal.ID = savedSalesProposal._id.toString();
            await salesProposalModel.findByIdAndUpdate(savedSalesProposal._id, { ID: savedSalesProposal._id }, { new: true });
            return savedSalesProposal;
        },
        deleteUser: async (parent, { ID }) => {
            return userModel.findById(ID).then(user => user.deleteOne());
        },
        deleteClient: async (parent, { ID }) => {
            return clientModel.findById(ID).then(client => client.deleteOne());
        },
        deleteEnterprise: async (parent, { ID }) => {
            return enterpriseModel.findById(ID).then(enterprise => enterprise.deleteOne());
        },
        deleteProduct: async (parent, { ID }) => {
            return productModel.findById(ID).then(product => product.deleteOne());
        },
        deleteSalesProposal: async (parent, { ID }) => {
            return salesProposalModel.findById(ID).then(salesProposal => salesProposal.deleteOne());
        },
        updateUserByID: async (parent, args) => {
            const { userID, ...updateFields } = args;
            return userModel.findByIdAndUpdate(userID, updateFields, { new: true });
        },
        updateClientByID: async (parent, args) => {
            const { clientID, ...updateFields } = args;
            return clientModel.findByIdAndUpdate(clientID, updateFields, { new: true });
        },
        updateProductByID: async (parent, args) => {
            const { productID, ...updateFields } = args;
            return productModel.findByIdAndUpdate(productID, updateFields, { new: true });
        },
        updateEnterpriseByID: async (parent, args) => {
            const { enterpriseID, ...updateFields } = args;
            return enterpriseModel.findByIdAndUpdate(enterpriseID, updateFields, { new: true });
        },
        updateSalesProposalByID: async (parent, args) => {
            const { salesProposalID, ...updateFields } = args;
            return salesProposalModel.findByIdAndUpdate(salesProposalID, updateFields, { new: true });
        },
        updateSellByID: async (parent, args) => {
            const { salesProposalID, ...updateFields } = args;
            return salesProposalModel.findByIdAndUpdate(salesProposalID, updateFields, { new: true });
        },
    },
};
export default resolvers;
