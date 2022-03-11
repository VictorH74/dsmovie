import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";


// ""col-sm-6 col-lg-4 col-xl-3"" -> break points do grid do bootstrap
// "mb-4 = margin-bottom"

function Listing() {

/*  REACTS HOOKS: useState E useEffect -> Hooks são funções cujo comportamento está vinculado ao estado e
                  ao ciclo de vida do React a partir de componentes funcionais.

    CONTROLAR CICLO DE VIDA DO COMPONENTE

    Hook: useState -> Manter estado no componente
    Hook: useEffect -> Executar algo na instanciação ou destruição do componente, observar estado

    https://pt-br.reactjs.org/docs/hooks-overview.html -> MAIS INFORMAÇÕES
*/

/*  DEFININDO UM useState
           [NUMERO DA PAG, FUNÇÃO QUE ALTERA O ESTADO] = useState(VALOR INICIAL DA PAG.) */
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {

         axios.get(`${BASE_URL}/movies?size=12&page=0`)
            .then(response  => { // COMANDO A SER EXECUTADO DEPOIS QUE A REQUEST GET RETORNAR UM OBJ
                const data = response.data as MoviePage;
                console.log(data);
                setPageNumber(data.number);
            });

    }, []);

   



    return (
        <>
            <p>{pageNumber}</p>
            <Pagination />
            <div className="container">

                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                </div>
                

            </div>


        </>

    );
}

export default Listing;