import { Request, Response } from 'express';


function header_service_view(req:Request, res:Response) {
    res.json({
        ipaddress: req.ip,
        language: req.get('accept-language'),
        software: req.get('user-agent')
    });
}


export default header_service_view;
