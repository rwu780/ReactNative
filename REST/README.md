# REST API

React Native provides a built-in method for making network calls. In React Native, you have the `Fetch API` available for all your networking APIs. With the Fetch API, you can make requests to the server and handle responses back from the server.

```

export default App = () => {

    const [list, setList] = useState([]);

    const getList = async () => {
        try {
            const response = await fetch(
                'URL',
                {
                    method: "POST",
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: 'Meta User',
                        email: "abc@example.com",
                        password: 'abc123",
                    }),
                });
            const json = await response.json();
            setList(json.list);
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getList();
    }, []);
}

```