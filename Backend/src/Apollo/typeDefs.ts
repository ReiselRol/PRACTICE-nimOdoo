const typeDefs = ` #graphql
    type User {
        ID: String!
        name: String!
        surname: String
        email: String!
        password: String!
        admin: Boolean!
    }

    type Client {
        ID: String!
        name: String!
        surname: String
        email: String!
        phone: String!
        enterpriseID: String!
    }

    type Enterprise {
        ID: String!
        name: String!
        phone: String!
    }

    type Product {
        ID: String!
        name: String!
        description: String
        enterpriseFromID: String
        enterpriseToID: String
    }

    type SalesProposal {
        ID: String!
        proposerID: String!
        productIDs: [String]!
        clientID: String!
        creationDate: String
        state: Int!
    }

    type Query {

        getUsers: [User!]!
        
        getUserByID(userID: ID!): User

        getUserByEmail(userEmail: String): User
    
        getClients: [Client!]!
    
        getClientByID(clientID: ID!): Client
    
        getEnterprises: [Enterprise!]!

        getEnterpriseByID(enterpriseID: ID!): Enterprise
    
        getProducts: [Product!]!
    
        getProductByID(productID: ID!): Product!

        getSalesProposals: [SalesProposal!]!
    
        getSalesProposalByID(salesProposalID: ID!): SalesProposal!
    }

    type Mutation {
        addUser(    
            name: String!
            surname: String!
            email: String!
            password: String!
            admin: Boolean!
        ): User

        addClient(
            name: String!
            surname: String
            email: String!
            phone: String!
            enterpriseID: String
        ): Client

        addEnterprise(
            name: String!
            phone: String!
        ): Enterprise

        addProduct(
            name: String!
            description: String
            enterpriseFromID: String
            enterpriseToID: String
        ): Product

        addSalesProposal(
            proposerID: String!
            clientID: String!
            productIDs: [String]!
            state: Int!
        ): SalesProposal

        deleteUser(userID: ID!): User
        deleteClient(clientID: ID!): Client
        deleteEnterprise(enterpriseID: ID!): Enterprise
        deleteProduct(productID: ID!): Product
        deleteSalesProposal(salesProposalID: ID!): SalesProposal
    }
`
export default typeDefs
