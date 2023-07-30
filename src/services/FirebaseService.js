class FirebaseService {
    constructor() {
        this.database_url = 'https://jsonplaceholder.typicode.com/comments?_limit=42';
    }

    async getComments() {
        this.loading = true;
        try {
            const response = await fetch(`${this.database_url}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const responseData = await response.json();
            return responseData;
        }
        catch(e) {
            console.log(e);
        }
    }
}

const firebaseService = new FirebaseService();

export default firebaseService;