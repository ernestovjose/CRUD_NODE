const controlador = {};

controlador.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cliente', (err, cliente) => {
            if (err) {
                next(err);
            }
            res.render('clientes', {
                data: cliente
            }); 

        });
    })
};

controlador.guardardatos = (req, res) => {
    const datos = req.body;

    req.getConnection((err,conn) => {
        conn.query('INSERT INTO cliente set ?', [datos], (err, cliente) => {
            res.redirect('./');
        });
    })
};

controlador.eliminardatos = (req, res) => {
    const id = req.params.id;
    console.log(id);
    //const { id } = req.params;
    
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM cliente WHERE id = ?', [id], (err, rows) => {
            if(err)
                console.log(err)
            else  
            res.redirect('/');
        });
    })
};

controlador.editardatos = (req, res) => {
    const id = req.params.id;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cliente WHERE id = ?', [id], (err, cliente) => {
            if(err)
                console.log(err)
            else { 
                res.render('clientes_edit', {
                    data: cliente[0]
                });
            }
        });
    });
};

controlador.actualizardatos = (req, res) => {
    const id = req.params.id;
    const nuevocliente = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE cliente set ? WHERE id = ?', [nuevocliente, id], (err, rows) => {
            res.redirect('/');
        });
    })
};

module.exports = controlador;