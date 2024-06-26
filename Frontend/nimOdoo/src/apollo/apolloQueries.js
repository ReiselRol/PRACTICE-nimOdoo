import { gql } from '@apollo/client';

export const getAllUsers = gql`
  query GetUsers {
    getUsers {
      ID
      name
      surname
      email
      password
      admin
    }
  }
`;

export const getConfig = gql`
query Query {
  getConfig {
    modules
  }
}
`

export const getUserByID = gql`
  query GetUserByID($userID: ID!) {
    getUserByID(userID: $userID) {
      ID
      name
      surname
      email
      password
      admin
    }
  }
`;

export const getUserByEmail = gql`
  query GetUserByEmail($userEmail: String!) {
    getUserByEmail(userEmail: $userEmail) {
      ID
      name
      surname
      email
      password
      admin
    }
  }
`;

export const getAllClients = gql`
  query GetClients {
    getClients {
      ID
      name
      surname
      email
      phone
      enterpriseID
    }
  }
`;

export const getClientByID = gql`
  query GetClientByID($clientID: ID!) {
    getClientByID(clientID: $clientID) {
      ID
      name
      surname
      email
      phone
      enterpriseID
    }
  }
`;

export const getAllEnterprises = gql`
  query GetEnterprises {
    getEnterprises {
      ID
      name
      phone
      address
      email
      cif
    }
  }
`;

export const getEnterpriseByID = gql`
  query GetEnterpriseByID($enterpriseID: ID!) {
    getEnterpriseByID(enterpriseID: $enterpriseID) {
      ID
      name
      phone
      address
      email
      cif
    }
  }
`;

export const getAllProducts = gql`
  query GetProducts {
    getProducts {
      ID
      name
      description
      stock
      price
    }
  }
`;
export const getAllLogs = gql`
  query GetLogs {
    getLogs {
      UserName
      UserID
      Message
    }
  }
`;

export const getProductByID = gql`
  query GetProductByID($productID: ID!) {
    getProductByID(productID: $productID) {
      ID
      name
      description
      stock
      price
    }
  }
`;

export const getAllSalesProposals = gql`
  query GetSalesProposals {
    getSalesProposals {
      ID
      proposerID
      productIDs
      clientID
      creationDate
      state
    }
  }
`;

export const getSalesProposalByID = gql`
  query GetSalesProposalByID($salesProposalID: ID!) {
    getSalesProposalByID(salesProposalID: $salesProposalID) {
      ID
      proposerID
      productIDs
      clientID
      creationDate
      state
    }
  }
`;

export const getAllSellsProposals = gql`
  query GetSellsProposals {
    getSalesProposals {
      ID
      proposerID
      productIDs
      clientID
      creationDate
      state
    }
  }
`;

export const getSellProposalByID = gql`
  query GetSellProposalByID($salesProposalID: ID!) {
    getSalesProposalByID(salesProposalID: $salesProposalID) {
      ID
      proposerID
      productIDs
      clientID
      creationDate
      state
    }
  }
`;


export const addUser = gql`
mutation Mutation($name: String!, $surname: String!, $email: String!, $password: String!, $admin: Boolean!) {
  addUser(name: $name, surname: $surname, email: $email, password: $password, admin: $admin) {
    ID
    name
    surname
    password
    admin
    email
  }
}`;

export const updateConfig = gql`
mutation Mutation($modules: [String]!) {
  updateNimodooConfigOrCreate(modules: $modules) {
    modules
  }
}
`

export const fakeUser = gql`
mutation Mutation($total: Int!) {
  fakeUser(total: $total) {
    ID
    name
    surname
    password
    admin
    email
  }
}`;

export const addClient = gql`
mutation Mutation($name: String!, $email: String!, $phone: String!, $surname: String, $enterpriseId: String) {
  addClient(name: $name, email: $email, phone: $phone, surname: $surname, enterpriseID: $enterpriseId) {
    ID
    name
    surname
    email
    phone
    enterpriseID
  }
}`;

export const addLog = gql`
  mutation Mutation($userName: String!, $userId: String!, $message: String!) {
    addLog(UserName: $userName, UserID: $userId, Message: $message) {
      UserName
      UserID
      Message
    }
  }
`

export const fakeClient = gql`
mutation Mutation($total: Int!) {
  fakeClient(total: $total) {
    ID
    name
    surname
    email
    phone
    enterpriseID
  }
}`;

export const addEnterprise = gql`
mutation Mutation($name: String!, $phone: String!, $address: String!, $email: String!, $cif: String!) {
  addEnterprise(name: $name, phone: $phone, address: $address, email: $email, cif: $cif) {
    ID
    name
    phone
    address
    email
    cif
  }
}`;

export const fakeEnterprise = gql`
mutation Mutation($total: Int!) {
  fakeEnterprise(total: $total) {
    ID
    name
    phone
    address
    email
    cif
  }
}`;

export const addProduct = gql`
mutation Mutation($name: String!, $stock: Int!, $price: Float!, $description: String) {
  addProduct(name: $name, stock: $stock, price: $price, description: $description) {
    ID
    name
    description
    stock
    price
  }
}`;

export const fakeProduct = gql`
mutation Mutation($total: Int!) {
  fakeProduct(total: $total) {
    ID
    name
    description
    stock
    price
  }
}`;

export const addSalesProposal = gql`
mutation Mutation($proposerId: String!, $clientId: String!, $productIDs: [String]!, $state: Int!) {
  addSalesProposal(proposerID: $proposerId, clientID: $clientId, productIDs: $productIDs, state: $state) {
    ID
    proposerID
    productIDs
    clientID
    creationDate
    state
  }
}`;

export const deleteUser = gql`
mutation Mutation($id: ID!) {
  deleteUser(ID: $id) {
    ID
    name
    surname
    password
    admin
    email
  }
}`;

export const deleteClient = gql`
mutation Mutation($id: ID!) {
  deleteClient(ID: $id) {
    ID
    name
    surname
    email
    phone
    enterpriseID
  }
}`;

export const deleteEnterprise = gql`
mutation Mutation($id: ID!) {
  deleteEnterprise(ID: $id) {
    ID
    name
    phone
    address
    email
    cif
  }
}`;

export const deleteProduct = gql`
mutation Mutation($id: ID!) {
  deleteProduct(ID: $id) {
    ID
    name
    description
    stock
    price
  }
}`;

export const deleteSalesProposal = gql`
mutation Mutation($id: ID!) {
  deleteSalesProposal(ID: $id) {
    ID
    proposerID
    productIDs
    clientID
    creationDate
    state
  }
}`;

export const updateUser = gql`
mutation Mutation($userId: ID!, $name: String, $surname: String, $email: String, $password: String, $admin: Boolean) {
  updateUserByID(userID: $userId, name: $name, surname: $surname, email: $email, password: $password, admin: $admin) {
    ID
    name
    surname
    password
    admin
    email
  }
}`;

export const updateClient = gql`
mutation Mutation($clientId: ID!, $name: String, $surname: String, $email: String, $phone: String, $enterpriseId: String) {
  updateClientByID(clientID: $clientId, name: $name, surname: $surname, email: $email, phone: $phone, enterpriseID: $enterpriseId) {
    ID
    name
    surname
    email
    phone
    enterpriseID
  }
}`;

export const updateProduct = gql`
mutation Mutation($productId: ID!, $price: Float, $stock: Int, $description: String, $name: String) {
  updateProductByID(productID: $productId, price: $price, stock: $stock, description: $description, name: $name) {
    ID
    name
    description
    stock
    price
  }
}`;

export const updateEnterprise = gql`
mutation Mutation($enterpriseId: ID!, $name: String, $address: String, $phone: String, $email: String, $cif: String) {
  updateEnterpriseByID(enterpriseID: $enterpriseId, name: $name, address: $address, phone: $phone, email: $email, cif: $cif) {
    ID
    name
    phone
    address
    email
    cif
  }
}`;

export const updateSaleProposal = gql`
mutation Mutation($salesProposalId: ID!, $proposerId: String, $clientId: String, $productIDs: [String], $state: Int) {
  updateSalesProposalByID(salesProposalID: $salesProposalId, proposerID: $proposerId, clientID: $clientId, productIDs: $productIDs, state: $state) {
    ID
    proposerID
    productIDs
    clientID
    creationDate
    state
  }
}`;

export const updateSell = gql`
mutation Mutation($salesProposalId: ID!, $state: Int, $productIDs: [String], $clientId: String, $proposerId: String) {
  updateSellByID(salesProposalID: $salesProposalId, state: $state, productIDs: $productIDs, clientID: $clientId, proposerID: $proposerId) {
    ID
    proposerID
    productIDs
    clientID
    creationDate
    state
  }
}`;