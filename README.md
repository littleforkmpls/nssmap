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

Stories are collected via TypeForm and synced to WordPress using the a custom WordPress plugin called Story Sync. Fields are mapped below and use the following syntax - WordPress / ACF Field :: TypeForm ID

Access to the TypeForm API uses a personal token which can be modified via the WordPress admin panel plugin settings.

## Field Mapping

response_id - readonly  :: id
respone_time - readonly :: submitted_at

author_13plus           :: field_0pWPOTkeJ4ou
author_firstname        :: field_cCtnKNF62tdD
author_lastname         :: field_TkcWAwJKtA0t
author_email            :: field_R5tkVz3rTzyV
author_location         :: field_YyAwGwFFhcv9
author_age              :: field_JsiJT53nZ7hA
author_race             :: field_QXNwuNPOl9Au
author_gender           :: field_siMgqnMbaPOD
author_comments         :: field_vzq9hhEpRtB5

title                   :: field_9k5fYUBAnLyl
story                   :: field_ONGanBAnwVcb
tags                    :: field_kiRUTvgxRGEU
city                    :: field_LwSMnEdjg3lo
state                   :: Hardcoded as "MN"
address                 :: field_25LtGwnYl9m9
zip_code                :: field_NHUKT3EzpMEQ
private_residence       :: field_Xpby4jkXPJGo
exist                   :: field_veG6QCVqbLQm
Images?                 :: field_PCT92ywkggUp
image1                  :: field_J429I5JhdsSq _file
image2                  :: field_L3iAUQOe99tJ _file
image3                  :: field_jx7RU0owx19W _file
image4                  :: field_fdbfK7ViCL5Q _file
image5                  :: field_3yp6J4Xx3ABe _file
video_url               :: field_OFcWqPxkaqqr
audio_url               :: field_fDvLg5uTIcol
