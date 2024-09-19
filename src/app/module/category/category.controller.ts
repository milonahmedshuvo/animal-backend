import { NextFunction, Request, Response } from "express";
import { categoryService } from "./category.service";


const createCategory = async (req:Request, res:Response, next:NextFunction) => {

    try{
     const category = req.body

     const result = await categoryService.createCategoryIntoDB(category)


     res.status(200).json({
        success: true,
        message: 'category create successfull',
        data: result
     })

    }catch(err){
    //    console(err) 
       next(err)
    }
}


export const categoryController = {
     createCategory
}