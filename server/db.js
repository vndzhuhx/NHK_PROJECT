"use strict"
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/FMNDB', {
    useNewUrlParser: true
});
var db = mongoose.connection;
db.on('error', function callback() {
    console.log("Connection error");
});
db.once('open', function callback() {
    console.log('connected');
});
var ListSchema = new mongoose.Schema({
    username: String,
    password: String
});
var verificationSchema = new mongoose.Schema({
    verification: String
});
var fanSchema = new mongoose.Schema({
    fan: String
});
var comparisonSchema = new mongoose.Schema({
    comparison: String
});
var generationSchema = new mongoose.Schema({
    generation: String
})
var substitutionSchema = new mongoose.Schema({
    substitution: JSON
});
var CompilationSchema = new mongoose.Schema({
    compilation: JSON
});
var case1Schema = new mongoose.Schema({
    case: JSON
});
var case2Schema = new mongoose.Schema({
    case: JSON
});
var case3Schema = new mongoose.Schema({
    case: JSON
});
mongoose.model('user', ListSchema);
mongoose.model('substitutionSchema', substitutionSchema);
mongoose.model('comparisonSchema', comparisonSchema);
mongoose.model('generationSchema', generationSchema);
mongoose.model('fanSchema', fanSchema);
mongoose.model('verificationSchema', verificationSchema);

mongoose.model('CompilationSchema', CompilationSchema);
mongoose.model('case1Schema', case1Schema);
mongoose.model('case2Schema', case2Schema);
mongoose.model('case3Schema', case3Schema);
module.exports = mongoose