import Site from "../models/UserModel.js";
 
export const getSites = async(req, res) =>{
    try {
        const response = await Site.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getSiteById = async(req, res) =>{
    try {
        const response = await Site.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createSite = async(req, res) =>{
    try {
        await Site.create(req.body);
        res.status(201).json({msg: "Site Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateSite = async(req, res) =>{
    try {
        await Site.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Site Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteSite = async(req, res) =>{
    try {
        await Site.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Site Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}