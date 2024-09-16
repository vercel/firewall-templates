# Block AI Bots Firewall Rule

A firewall rule that identifies bots known to be used in AI training based on web content.

The rule defaults to the "log action". Set to "Deny" to actually block these bots.

## Consider customization

The generated firewall rule blocks a multitude of bots used in AI training. Consider customizing the list to your need. See this [JSON file](https://github.com/ai-robots-txt/ai.robots.txt/blob/main/robots.json) for detailed descriptions of each bot.

## Attribution

This template is based on the [ai.robots.txt](https://github.com/ai-robots-txt/ai.robots.txt) project.
