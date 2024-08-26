# Email Service

This is a JavaScript-based email sending service that demonstrates resilient email sending with retry logic, fallback mechanisms, idempotency, rate limiting, status tracking, and bonus features.

## Features

- Retry mechanism with exponential backoff
- Fallback between email providers
- Idempotency to avoid duplicate sends
- Basic rate limiting
- Status tracking for email sending attempts
- Circuit breaker pattern
- Simple logging
- Basic queue system

## Setup

1. Clone the repository
2. Install dependencies using `npm install`
3. Run tests using `npm test`

## url to test 
   http://localhost:4000/send-email
   with request body
   {
      "to": "sarojinirath21712@gmail.com",
      "subject": "Hello",
      "body": "This is a test email."
   }
   
## Assumptions

- Mock providers are used for demonstration purposes and simulate email sending behavior.
