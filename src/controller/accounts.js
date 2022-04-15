const accountServices = require('../services/accounts');

module.exports.getAccount = async (req, res, next) => {

    try {
        console.log('Request getAccount')
        const response = await accountServices.getAccount(req.params.accountId);
        console.log('Response: ', response)

        return res.status(200).send(response);
    } catch(err) {
        console.error('Error: ', JSON.stringify(err));
        return res.status(500).send({message:err.message});
    }

}