const Router = require('express').Router
const router = Router()
const store = require('store')

// une rousources est une table et res_id fonctionne comme une id res_id peut etre remplacer par 1 et devras  etre envoyez dans l'url
/*const store = {
    resources: {
        res_id: {id: '1', name: 'XX'},
    }
}

get /api/resources/res_id -> renvoi la resource store.resources['res_id']
*/
/*
Exercice:

4 Routes
- 1) recuperer un objet avec son ID
- 2) creer un objet
- 3) replace une resource avec son ID
- 4) patch une resource avec son ID
- 5) delete une resource son ID
----------------------------------------

Contraintes:
- Le plus RESTful possible (methodes, json)
- Un fichier de test:
    _> ajoute, get, modifie, get, et supprime la ressource.
*/

router.get('/resources/:id', (req, res) => {
    const id = req.params.id
    res.json( store.resources[id])
})

router.post('/ressources', (req, res) => {
    const resource = req.body
    resource.id = Object.keys(store.resources).length +1
    store.resources[resource.id] = resource
    res.json(resource)
})

router.put('/resources/:id', (req, res) => {
    const id = req.parms.id
    if (req.params.id === req.body.id)
    {
        store.resources[id] = req.body
        res.json(req.body)
    }
    else
    {
        res.status(400).end()
    }

})

router.patch('/ressources/;id', (req, res) => {
    const id = req.params.id
    const ressource = store.resources.patch(id,req.body)
    res.json(ressource)
})

router.delete('/resources/:id', (req, res) => {
    const {id} = req.params
    const result = store.resources.delete(id)
    if (result === 'succes'){
        req.json({ success: true})
    }
    else {
        req.json({ success: false })
    }
})

module.exports = router
