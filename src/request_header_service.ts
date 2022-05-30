import { Request, Response } from 'express';


function header_service_view(req:Request, res:Response) {
    res.json({ res : 'Hello World!' });
}


export default header_service_view;
