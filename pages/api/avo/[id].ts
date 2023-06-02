'use client'

import type { NextApiRequest, NextApiResponse } from 'next'
import Database from 'database/db'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const id = req.query.id
    const db = new Database
    const entry = await db.getById(id as string)
    if (entry) {
        res.status(200).json({ data: entry })
    } else {
        res.status(404).json({ message: "Product not found" })
    }
}