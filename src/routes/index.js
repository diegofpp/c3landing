const { Router} = require('express');
const router = Router();

router.post('/send-email', (req, res) => {
    const { nombre, correo, mensaje} = req.body;

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${nombre}</li>
            <li>User Email: ${correo}</li>
        </ul>
        <p>${mensaje}</p>    
    `;
    console.log(contentHTML);
    res.send('recibido'); 
});

module.exports = router;