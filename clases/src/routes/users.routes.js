import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  res.send('<h2> Usuarios </h2>');
})

router.post('/', (req, res) => {
  res.send('Hola desde el post');
})

router.put('/', (req, res) => {
  res.send('Hola desde el put');
})

router.delete('/', (req, res) => {
  res.send('Hola desde delete');
})


export default router
