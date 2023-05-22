# AttendMe [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## <span id=Description> Description </span>

A simple event website with SQL intergration for user and guest management, allowing for guest to get key info & allowing users to manage guestlists

## Contents

-[Description](#Description)  
 -[Install](#Install)  
 -[Usage Info](#Usage)  
 -[Contribution](#Contribution)  
 -[Questions](#Questions)  
 -[Tests](#Tests)  
 -[License](#License)

## <span id=Install> Install </span>

This is hosted on Heroku at the URL (correct at time of writing) : https://attend-me-proj2.herokuapp.com/ , if you wish to instal locally run "npm i" to install the packages needed, log into mySQL and run "source db/schema.sql" to create database, create a ".env" file with matching db name, and login credentials, run "npm run seeds" to seed the database then "npm run start" to start the server, the front end can then be accessed on the port displayed in the terminal

## <span id=Usage> Usage </span>

Navigation buttons on the right allow guests & users to navigate the pages, notably, the login page allows authenicated users (organisers) to login, the rsvp page has different functionality depending on the login status of the user; a guest (not logged in) will be able to search for name in the guestlist, an organiser (logged in) will be able to see all guests in the guestlist and add new guests to the list

## <span id=Contribution> Contribution </span>

Created by Team 5  
 See github to contribute or report bugs: https://github.com/MichaelW1996

## <span id=Questions> Questions </span>

For issues or feature requests: https://github.com/MichaelW1996

## <span id=Tests> Tests </span>

No formal tests implemented currently

## <span id=License> License </span>

MIT  
 https://opensource.org/licenses/MIT  
 Copyright Team 5
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
