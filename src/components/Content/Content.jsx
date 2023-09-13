import React, { useState } from 'react';

const Content = (props) => {
    
    const [imgVal, setImgVal] = useState([])
    const [nameVal, setnameVal] = useState([])
    const [descriptionVal, setdescriptionVal] = useState([])

    function handleImg (e){
        setImgVal(e.target.value);
      }
      function handleName(e){
        setnameVal(e.target.value);
      }
      function handleDescr (e){
        setdescriptionVal(e.target.value)       
      }

    const handleAdd = (e) => {
        // if (!e.target.value.trim()) {
        //   alert("Input is emply!");
        //   return;
        // }
        const cardObj ={
            img : imgVal,
            name: nameVal,
            description: descriptionVal,
            id: Date.now()
        }

        setImgVal("");
        setnameVal("");
        setdescriptionVal("");
        props.handleBook(cardObj);

    }

    return (
        <div  style={{display:"flex"}}>
            <div className="content">
                    <div className="inputs">
                    <input type="text" onChange={handleImg}/>
                    <input type="text" onChange={handleName}/>
                    <input type="text" onChange={handleDescr}/>
                    <button onClick={handleAdd}>Add</button>
                
            </div>
            </div>
        </div>
    );
};

export default Content;