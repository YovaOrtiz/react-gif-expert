import React from 'react';  
import PropTypes from 'prop-types';
import { GitItem } from "./GitItem";
import { useFetchGrid } from "../hooks/useFetchGrid";


export const GitGrind = ({category}) => {

  const {images, isLoading} = useFetchGrid (category);

  return (
    <>
       <h3>{category}</h3>
       {
        isLoading && (<h2>cargando...</h2>)
       }

       <div className="card-grid">
        {
          images.map( (image) => (
            <GitItem 
            key={image.id}
            {...image}
            />

          ))
        }

       </div>
  
     
    </>
  )
}

GitGrind.propTypes = {
  category: PropTypes.string.isRequired
};
