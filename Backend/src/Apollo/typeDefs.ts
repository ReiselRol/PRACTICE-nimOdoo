const typeDefs = ` #graphql
    type User {
        ID: String!
        name: String!
        surname: String
        password: String!
        admin: Boolean!
        email: String!
    }

    type Log {
        UserName: String!
        UserID: String!
        Message: String!
    }

    type Client {
        ID: String!
        name: String!
        surname: String
        email: String!
        phone: String!
        enterpriseID: String
    }

    type Enterprise {
        ID: String!
        name: String!
        phone: String!
        address: String!
        email: String!
        cif: String!
    }

    type Product {
        ID: String!
        name: String!
        description: String
        stock: Int!
        price: Float!
    }

    type SalesProposal {
        ID: String!
        proposerID: String!
        productIDs: [String]!
        clientID: String!
        creationDate: String
        state: Int!
    }

    type Nimodoo {
        modules: [String]!
    }

    type Query {

        getUsers: [User!]!
        
        getUserByID(userID: ID!): User

        getUserByEmail(userEmail: String): User
    
        getClients: [Client!]!

        getConfig: [Nimodoo!]!
    
        getClientByID(clientID: ID!): Client

        getLogs: [Log!]!
    
        getEnterprises: [Enterprise!]!

        getEnterpriseByID(enterpriseID: ID!): Enterprise
    
        getProducts: [Product!]!
    
        getProductByID(productID: ID!): Product!

        getSalesProposals: [SalesProposal!]!
    
        getSalesProposalByID(salesProposalID: ID!): SalesProposal!

        getSells: [SalesProposal!]!
    
        getSellByID(salesProposalID: ID!): SalesProposal!

    }

    type Mutation {
        addUser(    
            name: String!
            surname: String!
            email: String!
            password: String!
            admin: Boolean!
        ): User

        addLog(
            UserName: String!
            UserID: String!
            Message: String!
        ) : Log

        fakeUser(    
            total: Int!
        ): [User]

        addClient(
            name: String!
            surname: String
            email: String!
            phone: String!
            enterpriseID: String
        ): Client

        fakeClient(    
            total: Int!
        ): [Client]

        addEnterprise(
            name: String!
            phone: String!
            address: String!
            email: String!
            cif: String!
        ): Enterprise

        fakeEnterprise(    
            total: Int!
        ): [Enterprise]

        addProduct(
            name: String!
            description: String
            stock: Int!
            price: Float!
        ): Product

        fakeProduct(    
            total: Int!
        ): [Product]

        addSalesProposal(
            proposerID: String!
            clientID: String!
            productIDs: [String]!
            state: Int!
        ): SalesProposal

        addConfig(
            modules: [String]!
        ): Nimodoo

        updateNimodooConfigOrCreate(
            modules: [String]!
        ): Nimodoo

        deleteUser(ID: ID!): User
        deleteClient(ID: ID!): Client
        deleteEnterprise(ID: ID!): Enterprise
        deleteProduct(ID: ID!): Product
        deleteSalesProposal(ID: ID!): SalesProposal

        updateUserByID(
            userID: ID!
            name: String
            surname: String
            email: String
            password: String
            admin: Boolean
        ): User
    
        updateClientByID(
            clientID: ID!
            name: String
            surname: String
            email: String
            phone: String
            enterpriseID: String
        ): Client
    
        updateProductByID(
            productID: ID!
            name: String
            description: String
            stock: Int
            price: Float
        ): Product
    
        updateEnterpriseByID(
            enterpriseID: ID!
            name: String
            phone: String
            address: String
            email: String
            cif: String
        ): Enterprise
    
        updateSalesProposalByID(
            salesProposalID: ID!
            proposerID: String
            clientID: String
            productIDs: [String]
            state: Int
        ): SalesProposal
    
        updateSellByID(
            salesProposalID: ID!
            proposerID: String
            clientID: String
            productIDs: [String]
            state: Int
        ): SalesProposal
    }
`
export default typeDefs
