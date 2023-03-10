const url = 'mongodb+srv://balajis:hcsnTgKf5YhQ6oGw@cluster1.uzi21wt.mongodb.net/?retryWrites=true&w=majority';

const mongoose = require('mongoose');



mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));



const schema = new mongoose.Schema({
  Application_Name: { type: String, required: false },
  MinSDK_Version: { type: String, required: false },
  version_Name: { type: String, required: false },
  version_Code: { type: String, required: false },
  Package_Name: { type: String, required: false },
  TargetSdk_Version: { type: String, required: false },
  Support_Screensizes: { type: String, required: false },
  Supported_ScreenDensities: { type: String, required: false },
  Feature_s: { type: String, required: false },
  Permission_s: { type: String, required: false },
  Language_s: { type: String, required: false },
  Signature_s: { type: String, required: false }
});

const aptdata = mongoose.model('aptdata', schema);

// reading 

aptdata.find({})
  .then(docs => console.log('Documents retrieved:', docs))
  .catch(err => console.error('Could not retrieve documents', err));
