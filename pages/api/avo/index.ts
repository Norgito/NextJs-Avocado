import type { NextApiRequest, NextApiResponse } from 'next'
import Database from 'database/db'

type Data = {
  data: TProduct[],
  length : number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const db = new Database
    const allentries = await db.getAll();
    const N_Entries = allentries.length
  res.status(200).json({ data: allentries, length:N_Entries })
}