import React from "react";
function Clothes({anyCloth}){
    return(
        <div className="products">
            {anyCloth.map((element=>{
                    const{id,name,searchTerm,price,image}=element;
                    return(
                        <div className='product-card'key={id}>
                            <img src={image} width='300px' height='400px'/>

<div className="product-info">
<h3>{name}</h3>
<h4>$ {price}</h4>

</div>
 </div>
            )
                }
                    ))
            }
        </div>
    )}
export default Clothes;