import { useState } from 'react';
import { AddCategory,GitGrind } from './components';

export const GitExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)){ return;
        }
       
        setCategories([ newCategory,...categories]);
    }

    return (
        <>
            <h1>GitExperApp</h1>

            <AddCategory 
            onNewCategory={(value) => onAddCategory(value)}
            />
                {
                    categories.map((category)=> (
                        <GitGrind 
                        key={category}
                        category={category}/>
                            
                        ))
                }
            
        </>
    );
}
