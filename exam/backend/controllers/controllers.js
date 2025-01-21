const Prod = require('../modules/module')


const getAllTheDatas = async (req,res)=>{
    try {
        const data = await Prod.find({})
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({message : error.message})
    }
}

const getTheDataById = async (req,res)=>{
    const id = req.params.id
    try {
        const data = await Prod.findById(id)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({message : error.message})
    }
}

const deleteDataById = async (req,res)=>{
    const id = req.params.id
    try {
        const data = await Prod.findByIdAndDelete(id)

        if (!data) {
            res.status(404).send({message : 'product doesnt exist'})
        }
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({message : error.message})
    }
}

const addNewData = async (req,res)=>{
    const {image,title,description,price} = req.body

    if (!image || !title || !description || !price) {
        res.status(500).json("fill all the input")
    }

    try {
        const newData = Prod({...req.body})
        await newData.save()
        res.json(newData)
    } catch (error) {
        res.status(500).send({message : error.message})
    }
}

module.exports = {getAllTheDatas,getTheDataById,deleteDataById,addNewData}
