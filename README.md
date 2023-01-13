# README

This is a web application that allows users to view and purchase flowers. The application utilizes a Rails API backend with a React frontend. The application has the following models:
- User: A user can create an account and login to the site.
- Flowers: A user can view the different flowers available for purchase.
- Cart: A user can add flowers to their cart and proceed to checkout.
- Orders: A user can view their past orders.

The application allows for full CRUD actions for the User, Flowers, Cart and Orders resources.

The application has at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.

The application implements authentication/authorization, including password protection. A user must be able to:
- sign up with a new user account,
- log in to the site with a secure password and stay logged in via user ID in the session hash, and
- log out of the site.

The checkout process is implemented using Stripe. A user can securely purchase the flowers in their cart using Stripe.

## Getting Started

1. Clone the repository
2. Run `bundle install`
3. Run `rails db:migrate`
4. Run `rails db:seed`
5. Run `rails s` to start the server
6. Run `npm install` to install the frontend dependencies
7. Run `npm start` to start the frontend server

## Built With
- Ruby on Rails
- React
- Stripe

## Authors
- Taylan Postalci

## License
This project is licensed under the [Learn.co Educational Content License] License - see the [LICENSE.md](LICENSE.md) file for details.