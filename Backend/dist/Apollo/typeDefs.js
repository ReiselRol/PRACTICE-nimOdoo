const typeDefs = ` #graphql
    type User {
        name: String!
        surname: String
        email: String!
        password: String!
        admin: Boolean!
    }

    type Client {
        name: String!
        surname: String
        email: String!
        phone: String!
        enterpriseID: String!
    }

    type Enterprise {
        name: String!
        phone: String!
    }

    type Product {
        name: String!
        description: String
        enterpriseFromID: String
        enterpriseToID: String
    }

    type SalesProposal {
        proposerID: String!
        clientID: String!
        creationDate: String!
        state: Int
    }

    type Query {

        getUsers: [User!]!
        
        getUserByID(userID: ID!): User
    
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
            surname: String
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
            state: Int
        ): SalesProposal
    }
`;
export default typeDefs;
