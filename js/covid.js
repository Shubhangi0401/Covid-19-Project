class Covid {

    constructor() { }

    async getData() {
        const response = await fetch('https://api.covid19india.org/data.json');
        const data = await response.json();

        return data;

    }
}