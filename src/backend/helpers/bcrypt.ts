import bcrypt from 'bcryptjs';

export class Bcrypt {
	public static async encryptPassword(password: string): Promise<string> {
		const salt: string = await bcrypt.genSalt(10);
		const hash: string = await bcrypt.hash(password, salt);
		return hash;
	}
}
