import { NextApiRequest, NextApiResponse } from "next";

async function handler(req, res){
    res.status(200).json("A api está funfando")
}