const accountModel = require('../models/account');

module.exports.getAccount = async (accountId) => {
    let searchAccount =  await accountModel.findOne({ where: { id: accountId } });
    console.log(searchAccount);
    if (searchAccount) {
        return searchAccount.dataValues;
    } else {
        throw { message: "conta não existe" };
    }

}