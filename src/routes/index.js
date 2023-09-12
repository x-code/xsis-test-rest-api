import initAPIMoviesRoutes from "./apiMovies";
import initWebRoutes from "./web";

const initRoutes = (app)=> {
    // Init web route
    initWebRoutes(app);
    // Init APIMovies route
    initAPIMoviesRoutes(app);
}


export default initRoutes;