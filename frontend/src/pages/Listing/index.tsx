import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";


// ""col-sm-6 col-lg-4 col-xl-3"" -> break points do grid do bootstrap
// "mb-4 = margin-bottom"

function Listing() {

 /* REACTS HOOKS: useState E useEffect -> Hooks são funções cujo comportamento está vinculado ao estado e
                  ao ciclo de vida do React a partir de componentes funcionais.

    CONTROLAR CICLO DE VIDA DO COMPONENTE

    Hook: useState -> Manter estado no componente
    Hook: useEffect -> Executar algo na instanciação ou destruição do componente, observar estado

    https://pt-br.reactjs.org/docs/hooks-overview.html -> MAIS INFORMAÇÕES
 */

 /* DEFININDO UM useState
           [NUMERO DA PAG, FUNÇÃO QUE ALTERA O ESTADO] = useState(VALOR INICIAL DA PAG.) */
    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => {
        // REQUISIÇÃO WEB
         axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`) // "&sort=id" ORDENAR BUSCA POR ID
            .then(response  => { // COMANDO A SER EXECUTADO DEPOIS QUE A REQUEST GET RETORNAR UM OBJ
                const data = response.data as MoviePage;
                setPage(data)
            });

    }, [pageNumber]); // RODAR O COMANDO ACIMA QUANDO O VALOR DE "pageNumber" FOR ALTERADO

    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
            <Pagination page={page} onChange={handlePageChange} />

            <div className="container">
                <div className="row">

                    {page.content.map(item => ( // ".map()" EXECUTA UMA FUNÇÃO PARA CADA ITEM DOS DADOS EM "page.content"

                    // "Em uma renderização dinâmica de coleção, cada elemento renderizado DEVE possuir um atributo key"

                        <div key={item.id} className="col-sm-6 col-lg-4 col-xl-3 mb-4">
                            <MovieCard movie = {item}/>
                        </div>

                        )
                    )}

                </div>
            </div>


        </>

    );
}

export default Listing;