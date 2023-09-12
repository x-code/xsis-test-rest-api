import db from '../models/index'

const listMovies = async () => {
    try {
        const movies = await db.movies.findAll({
            where: {
                status: "1"
              }
          });
        return {
            movies
        }
    } catch (error) { return (error) }
}

const detailMovies = async (uuid) => {
    try {
        const movies = await db.movies.findOne({
            status:1,
            where: { uuid: uuid }
        })
        return { movies}
    } catch (error) { return (error) }
}

const createMovies = async (data) => {
    const newMovies = await db.movies.create({ ...data });
  
    return {
      message: 'Create asset class success!',
      data: newMovies,
    };
  };

const updateMovies = async (uuid, data) => {
    try {
        const movies = await db.movies.findOne({
            where: { uuid: uuid }
        })
        if (!movies) {
            return {
                errCode: 400,
                errors: {
                    message: 'movies does not exist!'
                }
            }
        }
        const moviesData = await movies.update({ ...data })
        return {
            message: 'update movies success!',
            data: moviesData
        }
    } catch (error) { return (error) }
}

const deleteMovies = async (uuid) => {
    try {
        const checkMovies = await db.movies.findOne({
            where: { uuid: uuid }
        })
        if (checkMovies) {
            checkMovies.status = "2"
            checkMovies.save();
            return {
                message: 'delete movie success!',
            }
        } else {
            return {
                message: 'movie not found!',
            }
        }
    } catch (error) { return (error) }
}


module.exports = {
    listMovies: listMovies,
    detailMovies: detailMovies,
    createMovies: createMovies,
    updateMovies: updateMovies,
    deleteMovies: deleteMovies
}