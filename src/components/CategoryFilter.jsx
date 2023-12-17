import { stringify } from 'postcss';
import React, { useEffect, useState, useContext } from 'react'
import { useFilterContext } from '../context/FilterContext';

const CategoryFilter = () => {
    const [catUrlFetch, setCatUrlFetch] = useState(`https://dummyjson.com/products/categories`);
    const [catData, setCatData] = useState([]);


    const { setQueryCategory,handlePageChange } = useFilterContext();
    //const [chosenCategoryArray, setChosenCategoryArray] = useState([]);
   

    /*const createCatRequest = (chosenCat) => {
        
        const modifiedChosenCat = 'categoryId=' + chosenCat;
        if (chosenCategoryArray.includes(modifiedChosenCat)) {
           
            setChosenCategoryArray(prevArray => prevArray.filter(item => item !== modifiedChosenCat));
          } else {
    
            setChosenCategoryArray(prevArray => [...prevArray, modifiedChosenCat]);
          }
    }

    useEffect(() => {
       const finalModification = chosenCategoryArray.toString().split(',').join('&');
        queryCategoryProps("?"+finalModification);
    }, [chosenCategoryArray])
*/


 
    const goGetCategories = async () => {
    let response = await fetch(catUrlFetch);
    let data = await response.json();
    setCatData(data);
    }

    useEffect(() => {
        goGetCategories();
      }, [])
  return (

    <div>
        <button  onClick={() => {setQueryCategory('')}} >All Products</button>
        
        {
        catData.map(singleCat => {
            return(
                <button key={singleCat} onClick={() => {setQueryCategory(singleCat); handlePageChange(0);}}>{singleCat}</button>
            )
        }) 
        }
    </div>
  )
}

export default CategoryFilter;