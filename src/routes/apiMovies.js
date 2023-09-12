import express from "express";
import apiMoviesControllers from '../controllers/apiMoviesControllers'

const router = express.Router()

const initAPIMoviesRoutes = (app)=> {
    router.get('/', apiMoviesControllers.listMovies)
    router.get('/:uuid', apiMoviesControllers.detailMovies)
    router.post('/', apiMoviesControllers.createMovies)
    router.patch('/:uuid', apiMoviesControllers.updateMovies)
    router.delete('/:uuid', apiMoviesControllers.deleteMovies)
    return app.use ('/v1/api/movies', router)
}

export default initAPIMoviesRoutes;
