import mysql from 'mysql2';

export default function handler(req, res) {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'egoverment'
    });
    connection.connect();

    const id = req.query.id;
    connection.query(`SELECT * FROM user where E_id = '${id}'`, function (error, results, fields) {
        if (error) throw error;
        res.status(200).json(results[0]);
          });
    connection.end();

}


