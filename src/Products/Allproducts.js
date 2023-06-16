import React, { useEffect, useState } from 'react';
import { addToCartApi, getAllProductapi } from '../apicalls/apicalls';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../redux/actions/action';
import { useNavigate } from 'react-router-dom';
import CommonModal from '../CommonModal/CommonModal';

const Allproducts = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [islogin,setIslogin] = useState(false);
    const allPro = useSelector((state) => {
        console.log(state.reducer)
        return state.reducer.allProduct
    });
    const [productdetail, setProductdetail] = useState([]);

    useEffect(() => {

        if (allPro && allPro.length > 0) {
            setProductdetail(allPro);
        } else {
            getAllProductapi().then((response) => {
                console.log(response)
                dispatch(getAllProduct(response));
                setProductdetail(response);

            })

        }



    }, [])
    //get all products here
    const addTocart = (item, index) => {
        // console.log(item)
        let ls = localStorage.getItem("isLogin");
        if (ls) {
            // add to cart logic
            const userid = localStorage.getItem("userid");
            let obj = {

                "CustId": userid,
                "ProductId": item.productId,
                "Quantity":item.qty,
                "AddedDate": new Date()
            }

            addToCartApi(obj).then((res) => {
                console.log(res.message);

            }).catch((error) => {
                console.log(error)
            })
        } else {
            // navigate('/login');
            setIslogin(true);
        }
    }
   const incrementQty=(item,index)=>{
    console.log(item,index)
    console.log(productdetail)
    setProductdetail(prevData=>{
             let d = prevData.map((itm,ind)=>{
                   if(index===ind){
                      let quantity = itm.qty > 0 ? itm.qty + 1 : 1;
                    return {...itm,qty:quantity}
                   }
                   else{
                    return {...itm}
                   }

                })
                dispatch(getAllProduct(d));
                return d;
    })

   }

 const decrementQty=(item,index)=>{
    setProductdetail(prevData=>{
        let d = prevData.map((itm,ind)=>{
              if(index===ind){
                 let quantity = itm.qty > 0 ? itm.qty - 1 : 1;
               return {...itm,qty:quantity}
              }
              else{
               return {...itm}
              }

           })
           dispatch(getAllProduct(d));
           return d;
})

   }

   const onOk=()=>{
      setIslogin(false);
      navigate('/login');

   }
   const onCancel =() =>{
    setIslogin(false);
   }
    return ( 
        <div className='container'>
           {islogin &&  <CommonModal title="Alert ..!!" description="Please Login first." onOk={onOk}  onCancel={onCancel} ></CommonModal>}
            {productdetail.length === 0 && <h4 className='text-center'>  No data Found</h4>}
            <div className='row'>
                {productdetail && productdetail.length > 0 && productdetail.map((item, index) => {
                    return (
                        <div className='col-4 ' key={item.productName} >
                            <div className="card m-3" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={item.productImageUrl} alt="Card  cap" width={200} height={200} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.productName}</h5>
                                    <p className="card-text">{item.productDescription}</p>
                                    <p className="card-text"> Rs.{item.productPrice}</p>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-secondary" onClick={()=>incrementQty(item,index)}>+</button>
                                        <button type="button" className="btn btn-secondary">{item.qty ? item.qty : 0}</button>
                                        <button type="button" className="btn btn-secondary" onClick={()=>decrementQty(item,index)}>-</button>
                                    </div>
                                    <button className=" btn btn-primary" disabled={item.qty > 0 ? false :true} onClick={() => addTocart(item, index)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
};

export default Allproducts;