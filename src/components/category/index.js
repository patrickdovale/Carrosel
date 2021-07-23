import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai';


function Category({ Categorys, setCategorySelected,categorySelected}) {


    
  

    function ControlCategory(){

        var ControlCategorys = document.getElementById('categorys');
        var ControlCategorysClasses = ControlCategorys.className;
 

        if (ControlCategorysClasses.indexOf('cat-invisible') !== -1){
            ControlCategorys.classList.remove("cat-invisible")
        }
        else{
            ControlCategorys.classList.add("cat-invisible")
        }
    }

    return (
        <div className="container">
            <div id="menu-cat" onClick={()=>ControlCategory()}>
                <AiOutlineMenu/>
                <p>Menu</p>
            </div>

            <div id="categorys" className="awda">
                {Categorys.map((category) => (
                    <div className={`box-category ${categorySelected === category.Title ? 'category-selected' : ''}`} 
                    onClick={()=> setCategorySelected(category.Title)}>
                        <span className="icon-category">{category.Icon}</span>
                        <p className="title-category">{category.Title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category;