# Rate Limit API Requests

A firewall rule template designed to implement rate limiting for API requests, helping to protect your API from abuse and ensure fair usage.

The rule defaults to the "log action". Set to "Deny" to actually block these bots.

## Consider customization

The generated firewall rule provides a basic rate limiting structure. Consider customizing the following parameters to suit your specific API needs:

1. Request limit: Adjust the maximum number of requests allowed within the time window.
2. Time window: Modify the duration for which the request limit applies.
3. Allow list: Configure exceptions for trusted entities across 15+ parameters.
4. Response: Customize the response sent when a client exceeds the rate limit.
