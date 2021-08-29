import {Response} from 'express'

function handleError (err:any, res:Response) {
    return res.status(400).json(err)
  }

  export default handleError