import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready')
})

app.get('/api/tournaments', (req, res) => {
    const tournaments = [
        {
            country: 'Engalnd',
            league: 'Premier League',
            domesticCup: 'FA Cup',
            leagueCup : 'League Cup',
            superCup: 'FA Community Shield'
        },
        {
            country: 'Spain',
            league: 'La Liga',
            domesticCup: 'Copa del Rey',
            leagueCup : 'Copa de La Liga',
            superCup: 'Supercopa de España'
        },
        {
            country: 'Italy',
            league: 'Serie A',
            domesticCup: 'Coppa Italia',
            leagueCup : 'Coppa di Lega Italiana',
            superCup: 'Super Coppa Italiana'
        },
        {
            country: 'Germany',
            league: 'Bundesliga',
            domesticCup: 'DFB Pokal',
            leagueCup : 'DFB-Ligapokal',
            superCup: 'DFL-Supercup'
        },
        {
            country: 'France',
            league: 'Ligue 1',
            domesticCup: 'Coupe de France',
            leagueCup : 'Coupe de la Ligue',
            superCup: 'Trophée des Champions'
        },
    ]
    res.send(tournaments)
})

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
    console.log(`Serve at http://localhost:${port}`);
});