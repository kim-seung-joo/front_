console.log(this);
console.log(this === module.exports);
console.log(this === exports);
function whatisThis(){
    console.log('function', this===exports, this === global);

}
whatisThis();