<p align="center"><img src="https://i.ibb.co/z8YpTnH/logo.png" width="300" alt="Laravel Logo"></p>

## About

BitCloud - the imaginary stock exchange of crypto

## Tech Stack

**Client:** ``Node.js v.20.10.0`` ```React v18.2```, ``TypeScript v5.0.2``

**Server:** ```PHP v8.1```, ```Laravel v10.10```, ```MySQL v8.0```

## Installation

### Core
Before you need install Docker for working with Laravel Sail.

After installing Docker, up Laravel Sail containers
```bash
./vendor/bin/sail up -d
```

### Backend
Create ```.env``` file with values from <a href="#env-variables">Environment Variables section</a>, based on ```.env.example```.

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

<a name="env-variables"></a>
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MARKET_API_URL`, `MARKET_API_KEY`

## Roadmap
- Make authorize state
- Make unsubscribe link
- Make GitHub workflow
- Make tagging for version
- Make API autogenerate
- Make Swagger documentation
- Make PHP linter configuration

## Changelog

`v0.1.0` - still in progress
