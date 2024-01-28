<p align="center"><img src="https://i.ibb.co/z8YpTnH/logo.png" width="300" alt="Laravel Logo"></p>

## About

BitCloud - the imaginary stock exchange of crypto

## Tech Stack

**Client:** ``Node.js v.20.10.0`` ```React v18.2```

**Server:** ```PHP v8.1```, ```Laravel v10.10```

## Installation

### Core
For installing, follow [this instruction](https://laravel.com/docs/10.x#docker-installation-using-sail). Use Docker and Laravel Sail.

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
- Make email subscription
- Make GitHub workflow
- Make tagging for version
- Make API autogenerate
- Make Swagger documentation

## Changelog

`v0.1.0` - still in progress
