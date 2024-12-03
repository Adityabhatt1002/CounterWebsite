const countValue= document.querySelector('#counter');
const increment= () => {
    //parseint convert it into int
    //this code will get the value from UI
    let value=parseInt(countValue.innerText);

    value=value+1;
    //Set the value into UI
    countValue.innerText=value;
};
const decrement= () => {
    let value=parseInt(countValue.innerText);
    value=value-1;
    countValue.innerText=value;

};