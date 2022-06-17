# North Star Story Map

North Star Story Map is a WordPress site developed for AIA Minnesota as a way to showcase people's favorite places and spaces in Minnesota.

## Tech Notes

* Originally built on WordPress 5.9.2
* Uses a custom built theme
* Hosted on WPEngine

## Local Development

1. Clone the repo from github
1. Checkout the `develop` branch
1. Switch to the project root directory
1. Run `docker compose up -d`
1. Create `app/wp-config.php` and fill in the appropriate values
1. Download the database from WPEngine
1. Import the database from production into the local database

Note: Run `docker compose down` when local development is complete.

## Deployments

**Production**

1. Commit changes to the `develop` branch
1. Push `develop` branch to GitHub
1. GitHub action will deploy to staging and clear the cache
1. Visit https://nssmapstage.wpengine.com to view changes

**Production**

1. Merge the `develop` branch into the `main` branch
1. Push `main` branch to GitHub
1. GitHub action will deploy to production and clear the cache
1. Visit https://nssmap.wpengine.com/ to view changes

# Story Details

Stories are collected via TypeForm and synced to WordPress using a custom JavaScript application  (in the `aws` folder.
