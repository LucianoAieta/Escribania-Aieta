export declare interface CreateClientApp {
	client: ClientDataToCreate;
	create(): Promise<void>;
}

export declare type ClientDataToCreate = {
	name: string;
	surname: string;
	email: string;
	username: string;
	password: string;
};
