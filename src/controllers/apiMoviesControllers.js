import apiMoviesServices from '../services/apiMoviesServices'

const listMovies = async (req, res) => {
    const data = await apiMoviesServices.listMovies()
    if (data.errCode) {
        return res.internal({status:data.errCode, message: data.errors.message})
    }
    return res.success({data, status:200, message:"ok"})
}

const detailMovies = async (req, res) => {
    const data = await apiMoviesServices.detailMovies(req.params.uuid)
    if (data.errCode) {
        return res.internal({status:data.errCode, message: data.errors.message})
    }
    return res.success({data, status:200, message:"ok"})
}

const createMovies = async (req, res) => {
    const data = await apiMoviesServices.createMovies(req.body)
    if (data.errCode) {
        return res.internal({status:data.errCode, message: data.errors.message})
    }
    return res.success({data, status:200, message:"ok"})
}

const updateMovies = async (req, res) => {
    const data = await apiMoviesServices.updateMovies(req.params.uuid, req.body)
    if (data.errCode) {
        return res.internal({status:data.errCode, message: data.errors.message})
    }
    return res.success({data, status:200, message:"ok"})
}

const deleteMovies = async (req, res) => {
    const data = await apiMoviesServices.deleteMovies(req.params.uuid)
    if (data.errCode) {
        return res.internal({status:data.errCode, message: data.errors.message})
    }
    return res.success({data, status:200, message:"ok"})
}

module.exports = {
    listMovies: listMovies,
    detailMovies: detailMovies,
    createMovies: createMovies,
    updateMovies: updateMovies,
    deleteMovies: deleteMovies
}