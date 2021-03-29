import mysql, { MysqlError, Pool, PoolConnection } from 'mysql';
import { promisify } from 'util';

interface keydatabase {
	user: string;
	host: string;
	password: string;
	database: string;
}

const database: keydatabase = {
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'escribania_sw',
};

const pool = mysql.createPool(database);

pool.getConnection((err: MysqlError, connection: PoolConnection) => {
	if (err) {
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			console.error('DATABASE CONNECTION WAS CLOSED');
		}
		if (err.code === 'ER_CON_COUNT_ERROR') {
			console.error('DATABASE HAS TO MANY CONNECTIONS');
		}
		if (err.code === 'ECONNREFUSED') {
			console.error('DATABASE CONNECTION WAS REFUSED');
		}
	}
	if (connection) {
		connection.release();
	}
});

const query = promisify(pool.query).bind(pool);

export = { pool, query };
