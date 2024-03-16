<p align="center"><img src="https://i.ibb.co/z8YpTnH/logo.png" width="300" alt="Laravel Logo"></p>

## About

BitCloud - the imaginary stock exchange of crypto

## Tech Stack

**Frontend:**

-   `Node.js v20.10`
-   `React v18.2`, `React Router v6.16`, `React Redux v9.1`
-   `TypeScript v5.0.2`

**Backend:**

-   `PHP v8.1`
-   `Laravel v10.10`,
-   `MySQL v8.0`
-   `OpenAPI v3.0`

**Code quality:**

-   `Husky`
-   `ESLint`
-   `commitlint`
-   `stylelint`
-   `Laravel Pint`

## Installation

### Core

Before you need install [Docker](https://www.docker.com/) for working with Laravel Sail.

Create `.env` file with values from <a href="#env-variables">Environment Variables section</a>, based on `.env.example`.

Run Docker containers

```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php83-composer:latest \
    composer install --ignore-platform-reqs
```

After deploying containers, set alias for sail command in `~/.zshrc` or `~/.bashrc`

```bash
alias sail='[ -f sail ] && sh sail || sh vendor/bin/sail'
```

Up containers

```bash
sail up -d
```

Generate application key

```bash
sail artisan key:generate
```

### Backend

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
npm run bundler:dev
```

Frontend application and detailed description
about it spotted in `resources/frontend`

<a name="env-variables"></a>

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

-   `MARKET_API_URL`
-   `MARKET_API_KEY`
-   `TEST_USER_EMAIL`
-   `TEST_USER_PASSWORD`

## Roadmap

-   Make frontend tests
-   Make logging on frontend
-   Make logging on backend
-   Make API frontend service
-   Make PHP typehints
-   Make backend tests
-   Make GitHub workflow
-   Make tagging for version
-   Make fronted architecture
-   Make tests (Frontend and Backend)
-   Make forgot password
-   Make mobile login
-   Install husky on server
-   Run Laravel pint at commit

## Changelog

### Unreleased

#### Added

-   Main page
-   Market page
-   Registration with email
-   Authorization with email
-   API autogenerate
