# 📈 CryptoExchange

A stock exchange of crypto

## Tech Stack

**Client:** ```React v18.2```

**Server:** ```PHP v8.1```, ```Laravel v10.10```

## Installation

### Core
For installing, follow [this instruction](https://laravel.com/docs/10.x#docker-installation-using-sail)

### Backend
Create ```.env``` file, based on ```.env.example```

Run migrations
```bash
sail artisan migrate --seed
```

### Frontend
Install NPM packages

```bash
npm install
```
And start development

```bash
npm run dev
```

Frontend application and detailed description
about it spotted in ```resources/frontend```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MARKET_API_URL`, `MARKET_API_KEY`

## Roadmap
- Make home page
- Make authorize state
- Make email subscription
- Make GitHub workflow
- Make tagging for version

## Changelog

`v0.1.0` - still in progress
