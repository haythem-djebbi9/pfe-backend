const express = require('express');
const router = express.Router();
const commandeController = require('../controllers/commande');

// Route pour passer une commande de produit par un utilisateur
router.post('/passer-commande', commandeController.passCommande);
router.get('/commandes', commandeController.getAllCommandes);

router.get('/getcommandebyuser/:userId', commandeController.getcommandebyuser);

router.delete('/commandeannuler/:commandeId', commandeController.annulerCommande);



module.exports = router;
