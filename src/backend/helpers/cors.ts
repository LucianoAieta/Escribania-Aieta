const whitelist = ['http://127.0.0.1:5500', 'https://lucianoaieta.github.io', 'http://localhost:5500'];
const corsOptions = {
	origin: (origin: any, callback: any) => {
		if (whitelist.indexOf(origin) !== -1) callback(null, true);
		else callback(new Error('Not allowed by CORS'));
	},
};

export default corsOptions;
