export const getModulesOptions = (modulesConfig) => {
    var allModules = [];
    for (var module = 0; module < modulesConfig.length; module++) {
        if (modulesConfig[module] == "client") {
            allModules.push({
                title: 'Clients',
                submenu : [
                    {name: "See all clients", path: "/client"},
                    {name: "Create a client", path: "/client/create"}
                ]
            });
        } else if (modulesConfig[module] == "product") {
            allModules.push({
                title: 'Products',
                submenu : [
                    {name: "See all products", path: "/product"},
                    {name: "Create a product", path: "/product/create"}
                ]
            },)
        } else if (modulesConfig[module] == "sale") {
            allModules.push({
                title: 'Sales',
                submenu : [
                    {name: "See all sales", path: "/sale"},
                    {name: "Create a sales", path: "/sale/create"}
                ]
            })
        } else if (modulesConfig[module] == "enterprise") {
            allModules.push({
                title: 'Enterprises',
                submenu : [
                    {name: "See all enterprises", path: "/enterprise"},
                    {name: "Create a enterprise", path: "/enterprise/create"}
                ]
            })
        } else if (modulesConfig[module] == "sell-proposal") {
            allModules.push({
                title: 'Sell proposals',
                submenu : [
                    {name: "See all S.P.", path: "/sell-proposal"},
                    {name: "Create a S.P.", path: "/sell-proposal/create"}
                ]
            })
        }
    }
    return allModules
}
export const getQuickAccess = (admin) => {
    var allQuickAccess = [{
        title: 'nimOdoo Pages',
        submenu : [
            {name: "Home", path: "/"},
            {name: "All Modules", path: "/modules"},
            {name: "Configurations", path: "/configuration"}
        ]
    }]
    if (admin == true) {
        allQuickAccess.push({
            title: 'Users',
            submenu : [
                {name: "See all users", path: "/user"},
                {name: "Create a user", path: "/user/create"},
            ]
        })
    }
    return allQuickAccess
}