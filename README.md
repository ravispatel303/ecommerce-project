# E-Commerce Web Application

A full-stack e-commerce application with product listings, a shopping cart, and a checkout flow. Built while completing SuperSimpleDev's React course, then extended and deployed independently.

**Live demo:** http://ecommerce-project-react-env.eba-rqd9b9ts.us-east-2.elasticbeanstalk.com/

## Overview

This project implements a working online storefront end-to-end:
- Browse and view products
- Add items to a shopping cart and update quantities
- Complete a checkout flow
- A backend service to support the frontend

## Repo structure

```
ecommerce-project/
├── ecommerce-backend/       # Node.js/Express backend
├── ecommerce-project-js/    # Frontend built in JavaScript
└── ecommerce-project-ts/    # Frontend rebuilt in TypeScript
```

## Tech stack

- **Frontend:** React, JavaScript (ES6), TypeScript
- **Backend:** Node.js, Express
- **Deployment:** AWS Elastic Beanstalk

## Running locally

```bash
# Backend
cd ecommerce-backend
npm install
npm run dev

# Frontend (JS version)
cd ecommerce-project-js
npm install
npm run dev

# Frontend (TS version)
cd ecommerce-project-ts
npm install
npm run dev
```

## Background

This project was built while following [SuperSimpleDev's React course](https://www.youtube.com/watch?v=TtPXvEcE11E), then deployed to AWS independently as a way to practice cloud deployment.
## Author

Ravi Patel — [github.com/ravispatel303](https://github.com/ravispatel303) · [linkedin.com/in/ravi-patel-8574ab165](https://linkedin.com/in/ravi-patel-8574ab165)
