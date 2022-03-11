import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";


// ""col-sm-6 col-lg-4 col-xl-3"" -> break points do grid do bootstrap
// "mb-4 = margin-bottom"

function Listing() {

    // FORMA ERRADA
    axios.get(`${BASE_URL}/movies?size=12&page=0`)
        .then(response  => { // COMANDO A SER EXECUTADO DEPOIS QUE A REQUEST GET RETORNAR UM OBJ
            console.log(response.data);
        }) 


    return (
        <>
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