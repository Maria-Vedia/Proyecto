import React from "react";
import ContentRowMovies from './ContentRowMovies';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';

let dataCard =[
    {
        titulo:'MOVIES IN DATA BASE',
        cifra:'21',
        icono:'fa-film',
        color: 'border-lef-primary'
    },
    {
        titulo:'Total awards',
        cifra:'79',
        icono:'fa-award',
        color: 'border-lef-success'
    },
    {
        titulo:'Actors quanty',
        cifra:'79',
        icono:'fa-user',
        color: 'border-lef-warning'
    },

    
];

function ContentRowTop () {
    return (
        <>  
        <div className="container-fluid">
             <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
             </div>
         </div>
      {dataCard.map((card, i)=>{
        return(
          <ContentRowMovies
          titulo={card.titulo}
          cifra={card.cifra}
          color={card.color}/>
        );
          }
         )        
        
      };
        
         <LastMovieInDb/>
          <GenresInDb/>
          </>
    )
}

export default ContentRowTop;