# BugTracker CBWA

> This is my final project to my masters in computing at CCT

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Example usage](#Example_usage)
- [Changelog](#Changelog)
- [Roadmap](#Roadmap)
- [Author info](#Author_info)

## General info

This an app that facilitates the work of the staff, reducing the chance of errors in the patients' diet, and that the chefs receive the information faster because after 11 am they only have 1 hour to prepare all lunch meals.

For this delivery, the highest priority is to create a mobile application where patients can use their mobile phones to log in and fill in their menus. This part is vital as they can only see the menus according to the particular patients’ diet. In the case where a patient has diabetes, the items containing sugar do not appear, and also an alert (push notification) where the app will notify the patient that they must fill the menu.

As for the staff, an application where they can monitor the menus made, and also can fill the menu for a specific room- if a patient for some reason cannot do it alone.

## Technologies

- Body-parser - 1.19.0
- Cors - 2.8.5
- ExpressJS - 4.17.1
- MongoDB - 3.6.3
- Nodemon - 2.0.6

## Setup

Clone this repository using git clone "https://github.com/MarianaAzedo/hospitalmenu.git".
Move to the appropriate directory: cd hospitalmenu.
Run npm install to install dependencies.
Run npm start, it will open the browser when ready.

## Example_usage

Endpoint:

- get all the users (patients):
  `/users`
- get users by room:
  `/users/:room`

- get all the menus
  `/menu`
- get the menu by description
  `/menu/:description`

- get menus already done by the patients
  `/menuroom`
- add (post) menu
  `/menuroom`

- get all the pantries
  `/pantries`

- get the Diet List
  `'/rooms'`

- get all the Staffs
  `'/staffuser'`
- get the Staff by name
  `'/staffuser/:name'`

## Changelog

- Dec 12, 2020 - fixed import
- Dec 17, 2020 - models controllers
- Dec 23, 2020 - errors
- Dec 28, 2020 - testing
- Dec 28, 2020 - upload

## Roadmap

Project is: _in progress_.

- Start working on frontend

## Author_info

Created by [@marianaazedo] - feel free to contact me!
