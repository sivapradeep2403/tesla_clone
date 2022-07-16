import React from 'react';

function temp(props){


    const btnLeft={
        backgroundColor:"black",
        border:"1px solid 'white' ",
        borderRadius:"35px",
        color:"white",
        opacity:"0.8",
        fontSize:"15px",
        height:"50px",
        width:"250px",
        fontWeight: "30px"
    };

      const btnRight={
        backgroundColor:"white",
        border:"1px solid 'white' ",
        borderRadius:"35px",
        color:"black",
        opacity:"0.8",
        fontSize:"15px",
        height:"50px",
        width:"250px",
        fontWeight: "30px"
    };




    return(
        <div style={{backgroundImage:`url(${props.image})`,
        height:"100vh",backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",}}>

            <center style={{paddingTop:"70px"}}>
               <i>
                   <h1>{props.model}</h1>
                   <h3>{props.text}</h3>
               </i>
            </center> 
            
              <div style={{display: 'flex',alignItems: 'center',justifyContent: 'space-around',marginTop:"450px"}}>
                  <button style={btnLeft}>CUSTOMER ORDER</button>
                  <button style={btnRight}>EXISTING INVENTORY</button>
              </div>


        </div>
    )
}export default temp;