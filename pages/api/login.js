import mysql from 'mysql2';

export default function handler(req, res) {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'egoverment'
    });
    connection.connect();

    const {cin , password} = req.body;
    connection.query(`SELECT * FROM user where cin = ${cin}`, function (error, results, fields) {
        if (error) throw error;
        res.status(200).json(results);
    });
    connection.end();

}

