require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const github = {
  "login": "AmitBiswas1402",
  "id": 115923314,
  "node_id": "U_kgDOBujZcg",
  "avatar_url": "https://avatars.githubusercontent.com/u/115923314?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/AmitBiswas1402",
  "html_url": "https://github.com/AmitBiswas1402",
  "followers_url": "https://api.github.com/users/AmitBiswas1402/followers",
  "following_url": "https://api.github.com/users/AmitBiswas1402/following{/other_user}",
  "gists_url": "https://api.github.com/users/AmitBiswas1402/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/AmitBiswas1402/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/AmitBiswas1402/subscriptions",
  "organizations_url": "https://api.github.com/users/AmitBiswas1402/orgs",
  "repos_url": "https://api.github.com/users/AmitBiswas1402/repos",
  "events_url": "https://api.github.com/users/AmitBiswas1402/events{/privacy}",
  "received_events_url": "https://api.github.com/users/AmitBiswas1402/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Amit Biswas",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Newbie in Open Source",
  "twitter_username": "AmitBiswas0104",
  "public_repos": 48,
  "public_gists": 0,
  "followers": 1,
  "following": 13,
  "created_at": "2022-10-16T09:24:34Z",
  "updated_at": "2024-01-19T10:09:01Z"
}

app.get('/github', (req, res) => {
  res.json(github)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/amit', (req, res)=>{
    res.send('Hello')
})

app.get('/login', (req, res)=>{
    res.send('<h1>Login</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})