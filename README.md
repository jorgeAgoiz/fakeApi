# FAKE API

### To deploy
```
git clone https://github.com/jorgeAgoiz/fakeApi.git
cd fakeApi
npm install
```

### To init the server
`npm run start`

### Endpoint
`http://localhost:3006/reviews`

### Response Structure
```
{
    reviews: [
        {
            name: string,
            rate: number
        }
    ],
    recall: boolean
}
```