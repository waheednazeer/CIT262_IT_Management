import sayHello from '../utils/utils.mjs';
import assert from 'assert';

it ('Test Hello World', ()=>{
    const hello= sayHello();
    console.log('Function is returning: '+hello+ '\n');
    assert.equal('hello', hello)
    
})

//console.log(hello());