const Company = require('../models/companyModel');

exports.getTopCompanies = async (req, res) => {
  try {
    const searchQuery = req.query.companyname;
    if(!searchQuery){
        return res.status(400).json({
            message: 'company name query parameter is required'
        });
    }
    


    const companies = await Company.find(
        {name: {$regex: searchQuery, $options: 'i'}}
    ).limit(10);
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
