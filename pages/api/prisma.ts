import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function main(req:NextApiRequest, res: NextApiResponse) {
  const allUsers = await prisma.izzit.findMany()
  console.log(allUsers)
  res.status(200).json(allUsers)
}