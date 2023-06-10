import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductApi, getAllCategoryapi } from '../apicalls/apicalls';
import { getallcategory } from '../redux/actions/action';

const Addproduct = () => {
    const [formData, setFormData] = useState({

        ProductSku: "",
        ProductName: "",
        ProductPrice: 0,
        ProductShortName: "",
        ProductDescription: "",
        DeliveryTimeSpan: "",
        CategoryId: 0,
        ProductImageUrl: "",
        
    })
    const dispatch = useDispatch();
    const category = useSelector(state => state.reducer.categorydata)
    useEffect(() => {
        getAllCategoryapi().then((response) => {
            dispatch(getallcategory(response));
        })
    }, [])
    const onChangeHandler = (keynamem, value) => {
        setFormData({...formData,[keynamem]:value})
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();

        let finalFormData = formData;
        finalFormData.CreatedDate= new Date();
        addProductApi(finalFormData).then((response)=>{
            console.log(response)
        })
    }
    return (
        <div className='col-6 offset-3'>
            <h4 className='text-center'>Add Product </h4>
            <form onSubmit={(e)=>onSubmitHandler(e)}>
                <div className="form-group">
                    <label >ProductSku</label>
                    <input type="text" value={formData.ProductSku} onChange={(e) => onChangeHandler("ProductSku", e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label >ProductName</label>
                    <input type="text" value={formData.ProductName} onChange={(e) => onChangeHandler("ProductName", e.target.value)} className="form-control" />
                </div><div className="form-group">
                    <label >ProductPrice</label>
                    <input type="number" value={formData.ProductPrice} onChange={(e) => onChangeHandler("ProductPrice", e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label >ProductShortName</label>
                    <input type="text" value={formData.ProductShortName} onChange={(e) => onChangeHandler("ProductShortName", e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label >ProductDescription</label>
                    <input type="text" value={formData.ProductDescription} onChange={(e) => onChangeHandler("ProductDescription", e.target.value)} className="form-control" />
                </div>

                <div className="form-group">
                    <label >DeliveryTimeSpan</label>
                    <input type="text" value={formData.DeliveryTimeSpan} onChange={(e) => onChangeHandler("DeliveryTimeSpan", e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label >CategoryId</label>
                    
                    <select class="form-select"  value={formData.CategoryId} onChange={(e) => onChangeHandler("CategoryId", e.target.value)}>
                       {category && category.map((item)=>{
                        return(
                            <option value={item.categoryId}>{item.categoryName}</option>
                        )
                       })}
                        
                
                    </select>
                </div>
                <div className="form-group">
                    <label >ProductImageUrl</label>
                    <input type="text" value={formData.ProductImageUrl} onChange={(e) => onChangeHandler("ProductImageUrl", e.target.value)} className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Addproduct;