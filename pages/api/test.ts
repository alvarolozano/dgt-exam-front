// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if(!process.env.RAPIDAPI_KEY) return res.status(500).end();

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'examenes-dgt.p.rapidapi.com'
    }
  };
  
  return new Promise<void>((resol, rej) => {
    fetch('https://examenes-dgt.p.rapidapi.com/', options)
      .then(response => response.json())
      .then(response => {
        // 2025: Los IDS ya no existen, así que los inventamos
        
        const id = String(new Date().getTime());

        return {
          id,
          preguntas: response.map((pregunta: any, idx: number) => ({
            ...pregunta,
            imagen: pregunta.urlImagen || null,
            id: `${id}-${idx}`,
          })),
        }
      })
      .then(response => {
        res.status(200).json(response)
        resol();
      })
      .catch(err => {
        res.status(500).end();
        rej();
      });
  }) 
}
