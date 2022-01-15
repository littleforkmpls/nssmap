# North Star Story Map

North Star Story Map is a WordPress site developed for AIA Minnesota as a way to showcase people's favorite places and spaces in Minnesota.

## Tech Notes

* Originally built on WordPress 5.8.3
* Uses a custom built theme
* Hosted on WPEngine

## Local Development

TODO

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
