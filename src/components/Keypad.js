// Code Keypad Component Here

function Keypad (){

    function changed(){
        console.log('Entering password...')
    }

    return (
        <div>
            <input type="password" onChange={changed}/> 
        </div>
    )
}

export default Keypad;