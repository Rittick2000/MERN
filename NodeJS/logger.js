let url="https://www.google.com";
function log(message)
{
    console.log(message);
}
module.exports.log=log; // we export this "log" function in the name of "log" to outside.
module.exports.endPoint=url; // we export this "url" varibale in the name of "endPoint" to outside.