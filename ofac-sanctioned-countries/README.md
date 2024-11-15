# Block OFAC Sanctioned Countries

This repository provides a quick solution for implementing a firewall rule to block traffic from countries sanctioned by the Office of Foreign Assets Control (OFAC). This template may help compliance with regulatory requirements by preventing access from these regions.

## Overview

This firewall rule template identifies incoming requests based on their country of origin and blocks access from specified OFAC-sanctioned countries. The list is not meant to be exhausted, and updating the list of countries would be your responsibility.

## Consider customization

The generated firewall rule provides a basic structure for blocking sanctioned countries. Consider customizing the following parameters to suit your specific compliance needs:

1. **Country List**: Update the list of countries to be blocked based on the latest OFAC-sanctions list or any countries you desire to add.
2. **Exception Handling**: Configure exceptions for specific IP addresses or entities that require access despite country restrictions.

## Persistent Action

The rule includes a persistent action set to a duration of 1 hour. Any requests blocked due to persistent actions, which are activated after the first violation of the rule, are blocked before any usage is incurred. This ensures that repeated attempts from sanctioned countries do not lead to unnecessary resource consumption.

## Availability

This solution can be implemented by users on all plans.

## To Use

To use this template, follow these steps:

1. Click "Add Firewall Rule."
2. Select your team and project.
3. Configure the rule to block the desired sanctioned countries as necessary.
4. Don't forget to hit "Save," and then "Publish" to activate the rule.