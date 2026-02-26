// export function Alert(props) // function receives props as an argument its called prop drilling //the name props can be any name
// {
//     return(
//     <>
//         <div>{props.type}</div>
//         <div>{props.heading}</div>
//     </>
//     );
// }

import { useState } from "react";

// props belongs to the parent so cant change here in child level
///we can do this destructing as well

export function Alert({type, heading, children, closable, onClose}) //onClose is for child to parent update so props can be either side. parent <-> child
{

    //[state,settermethod()] = userState(intialvalue)
    //state cause re rendering the component means component code executes again from beginning.

    const[visible, setVisible] = useState(true); //static change this false

    //we can use variables to set a value but it wont re render the component.

    //visible = true // not possible to change this cause of its const
    // only we can change using setter method. its called dynamic change

    //setVisible(true); // throws error for multiple re renders beacuse of immediate change

    //only through events we can change the value. setter method invoked through events

    if(!visible)
    {
        return null;
    }

    var x =100;

    function handleCloseClick() // execution of callback method is bound to the happening of event.
    {
        //console.log('call back method')
        setVisible(false);
        onClose('send data from child to parent'); // it first looks for local function , if not found then move to props side.

        //when use props.onClose() then there is no looking in local function.
        //x = 200;
    }
    return(
    <>
        <div>{type === 'warning' ? 'Warn' : 'Info'}</div>
        <div>{heading}</div>
        <div>{children}</div>
        <div>{closable && <button onClick={handleCloseClick}>close</button>}</div>
    </>
    );
}