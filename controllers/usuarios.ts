import { Request, Response } from "express";
import Usuario from "../models/usuario";


export const getUsuarios = async ( req: Request, res: Response) => {

    const usuario = await Usuario.findAll();
    res.json(usuario);

}

export const getUsuario = async ( req: Request, res: Response ) => {

    const { id } = req.params;

    const usuario = await Usuario.findByPk( id );

    if( usuario ) {
        res.json(usuario);
    } else {
        res.status(400).json({
            msg: `No existe un usuario con el ID ${ id }`
        });
    }
}

export const postUsuario = async ( req: Request, res: Response ) => {

    const { body } = req;

    try {

        const existeEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        });

        if(existeEmail) {
            return res.status(400).json({
                msg: `Ya existe un usuario con el email ` + body.email
            });
        }

        //const usuario = new Usuario(body);
        const usuario = Usuario.build(body);
        await usuario.save();

        res.json( usuario );
        
    } catch (error) {
        
        console.log(error);
        res.status(500).json({
            msg: 'Habla con el administrador'
        });
    }
}


export const putUsuario =  async( req: Request, res: Response ) => { 

    const { id } = req.params;
    const { body } = req;

    try{

        const usuario = await Usuario.findByPk( id );
        if( !usuario ) {
            return res.status(400).json({
                msg: `No existe un usuario con el id ` + id
            });
        }
        // podemos extraer uno si asi se desea body.nombre
        await usuario.update( body );
        res.json(usuario);

     } catch (error) {
        
        console.log(error);
        res.status(500).json({
            msg: 'Habla con el administrador'
        });
    }
} 

export const deleteUsuario = async ( req: Request, res: Response ) => {

    const { id } = req.params;

    const usuario = await Usuario.findByPk( id );
    if(!usuario){
        return res.status(400).json({
            msg: `No existe el usuario ` + id
        });
    }

    await usuario.update({estado: false});
    //delete fisica
    //await usuario.destroy();
    //res.json('El usuario ha sido eliminado permanente ' + id);
    res.json('El usuario ha sido eliminado ' + id);

}









