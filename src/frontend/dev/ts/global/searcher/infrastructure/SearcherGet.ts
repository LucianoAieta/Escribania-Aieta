export default class SearcherGet {
	public static async getByText(PAGE_TYPE: string, TEXT: string) {
		return await (
			await fetch(`http://localhost:7000/search/${PAGE_TYPE}/text/${TEXT}`)
		).json();
	}
}
