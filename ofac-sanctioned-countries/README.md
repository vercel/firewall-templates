# Block OFAC-Sanctioned Countries

This template provides a preset, customizable Vercel Firewall rule which is designed to help block traffic from countries sanctioned by the Office of Foreign Assets Control (OFAC). Designed to support compliance efforts, this configuration restricts access from sanctioned regions.

## Overview

Identify incoming requests based on their country of origin and block access from specified OFAC-sanctioned countries. The list is not meant to be exhaustive, and may not include all sanctioned countries as of any given date. Updating the list of countries, ensuring that the firewall rule is operating as intended, and otherwise maintaining the compliance of your product and operations remains your responsibility. 

## Consider customization

The generated Firewall rule provides a basic structure for blocking traffic from sanctioned countries. Consider customizing the following parameters to suit your specific compliance needs:

1. **Country List**: Update the list of countries to be blocked based on the latest OFAC-sanctions list or any countries you desire to add.
2. **Exception Handling**: Configure exceptions for specific IP addresses or entities that require access despite country restrictions.

## Persistent Action

The rule includes a persistent action set to a duration of 1 hour. Any requests blocked due to persistent actions, which are activated after the first violation of the rule, are blocked before any usage is incurred.

## Availability

This solution can be implemented by users on all plans.

## To Use

To use this template, follow these steps:

1. Click "Add Firewall Rule."
2. Select your team and project.
3. Configure the rule to block the desired sanctioned countries as necessary.
4. Don't forget to hit "Save," and then "Publish" to activate the rule.