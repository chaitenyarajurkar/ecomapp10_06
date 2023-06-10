import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMobileapi } from '../apicalls/apicalls';
import { getMobileProduct } from '../redux/actions/action';

const Mobile = () => {
    const dispatch = useDispatch();
    const allProduct = useSelector((state)=>state.reducer.mobiledata);
    const [productdetail,setProductdetail] = useState([]);

   useEffect(()=>{
        
        getMobileapi().then((response)=>{
                dispatch(getMobileProduct(response))
                setProductdetail(response);
        })
        
    },[])
    //get all products here
    return (
        <div className='container'>
             {productdetail.length === 0 && <h4 className='text-center'>  No data Found</h4>}
            <div className='row'>
                {productdetail && productdetail.length > 0 && productdetail.map((item,index)=>{
                    return (
                        <div className='col-4 '>
                    <div className="card m-3"  style={{width: "18rem"}}>
                        <img className="card-img-top" src={item.productImageUrl} alt="Card image cap" width={200} height={200} />
                        <div className="card-body">
                            <h5 className="card-title">{item.productName}</h5>
                            <p className="card-text">{item.productDescription}</p>
                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>
                    )
                })}
                
            </div>
        </div>
    );
};


export default Mobile;