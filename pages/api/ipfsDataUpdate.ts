import { withIronSessionApiRoute } from "iron-session/next"
import { NextApiRequest, NextApiResponse } from "next"
import { ironOptions } from "./ironOptions"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  
      res.send({ ok: true })
  }
}

export default handler
