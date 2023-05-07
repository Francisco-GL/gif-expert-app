import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState([ 'One Punch' ]);

    const onAddCategory = ( newcategory ) => {

        if(categories.includes(newcategory)) return;

        setcategories( [ newcategory, ...categories] );
        // setcategories( cat => [ ...cat, 'Valorant'] );
    }

  return (
    <>
        <h1>GifExpertApp</h1> 

        <AddCategory 
            // setCategories={ setcategories} 
            onNewCategory={ value => onAddCategory(value) }
        />

        { 
            categories.map( (category) => (
                <GifGrid key={ category } category={ category }/>
            )) 
        }
    </>
  )
}
