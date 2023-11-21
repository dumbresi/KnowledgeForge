import * as moduleServices from '../services/module-service.js';
import { setResponse,setErrorResponse } from './response-handler.js';

export const post= async(request,response)=>{
    try {
        const newModule={...request.body};
        const module=await moduleServices.save(newModule);
        setResponse(module,response);
    } catch (error) {
        console.log(error);
        setErrorResponse(error,response);
        
    }
}

export const remove= async(request,response)=>{
    try {
        const id =request.params._id;
        console.log(id);
        const module=await moduleServices.remove(id);
        setResponse(module,response);
    } catch (error) {
        console.log(error);
        setErrorResponse(error,response);
        
    }
}

export const searchById =async(request,response)=>{
    console.log(request.params);
    try {
        const id = request.params._id;
        console.log(id);
        const module = await moduleServices.findById(id);
        console.log(module);
        setResponse(module,response);
    } catch (error) {

        setErrorResponse(error,response);
    }
}