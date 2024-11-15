# Emergency Redirect Rule

This template provides a quick solution for implementing an emergency redirect rule using the Vercel Web Application Firewall (WAF). This approach is designed for temporary use to address urgent redirect needs until a more permanent solution can be put in place.

## Overview

In the event of an emergency where you need to redirect traffic from one URL path to another, this WAF rule can be rapidly deployed. The rule identifies incoming requests based on their path and redirects them to a specified new location.

## To use

To use this template, follow these steps:

1. Click "Add Firewall Rule" in your WAF management console.
2. Select your team and project.
3. Configure the rule as necessary to meet your redirect needs.
4. Don't forget to save the rule, review your changes, and hit "Publish" to activate the rule.

## Consider customization

The generated firewall rule provides a basic redirect structure. Consider customizing the following parameters to suit your specific needs:

1. Match Conditions: Modify the conditions to match other request attributes such as headers, query parameters, or IP addresses.
2. Path Identification: Adjust the path settings to accurately match the paths you need to redirect.
3. Target URL: Customize the new location where requests should be redirected.

## Availability

This emergency redirect solution can be implemented by users on all plans.