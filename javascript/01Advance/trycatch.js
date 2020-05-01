const convertToRs = (dollar) => {
    if(typeof dollar === 'number'){
        return dollar * 64;

    }
    else{
        throw Error('Amount need to be in number')        
    }
}
try {
    
    console.log(convertToRs('five'));
    
} catch (e) {
    console.log(e);
    
}

console.log('I will not run if program crashes');

