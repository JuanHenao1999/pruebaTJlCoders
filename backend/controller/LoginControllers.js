import LoginModel from "../models/LoginModel.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await LoginModel.findAll()
        res.json(users)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await LoginModel.findAll({
            where: {id: req.params.id}
        })
        res.json(user[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createUser = async (req, res) => {
    try {
        await LoginModel.create(req.body)
        res.json({
            'message': 'Usuario creado correctamente'
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateUser = async (req, res) => {
    try {
        await LoginModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            'message': 'Usuario actualizado correctamente'
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteUser = async (req, res) => {
    try {
        await LoginModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            'message': 'Usuario eliminado correctamente'
        })
    } catch (error) {
        res.json({message: error.message})
    }
}