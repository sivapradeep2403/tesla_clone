import React from 'react';
function navBar(){



    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
           <div>
              <ul style={{display: 'flex', flexDirection: 'row',alignItems: 'center',justifyContent: 'space-evenly',textDecoration: 'none'}}>
                  <li>Model S</li>
                  <li>Model 3</li>
                  <li>Model X</li>
                  <li>Model Y</li>
                  <li>Model S</li>
              </ul>
           </div>
           <div>
               <ul style={{display: 'flex', flexDirection: 'row',alignItems: 'center',justifyContent: 'space-around',textDecoration: 'none'}}>
                       <li>Shop</li>
                       <li>Account</li>
                       <li>Menu</li>
               </ul>
           </div>
        </div>
    )
}export default navBar;