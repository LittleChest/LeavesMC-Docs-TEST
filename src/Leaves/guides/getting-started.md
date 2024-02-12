# Getting Started

## Requirements

| Leaves Version | Recommended Java Version |
| -------------- | ------------------------ |
| 1.17.1+        | Java 21                  |

## Downloading Leaves

LeavesMC provides runnable server jars directly from our
[website's downloads page](https://leavesmc.top/downloads/leaves).

Click on the build number to download a file.

## Running The Server

To run the server, simply start it up like any other Java application.

Open your terminal, navigate to the saved location, and then run `java -Xms2G -Xmx2G -jar leaves.jar --nogui`. Ensure
you replace `leaves.jar` with the name of the jar you have downloaded.

The amount of RAM can be set by changing the numbers in the `-Xms` and `-Xmx` arguments. `--nogui` disables Vanilla's
GUI, so you don't get double interfaces when using the command line.

For more advanced Java tuning, see [Aikar's Flags](https://docs.papermc.io/paper/aikars-flags).

Use [Startup Script Generator](https://docs.papermc.io/misc/tools/start-script-gen) to generate a startup script for
your server.

To configure your server, see [Leaves Configuration](../reference/configuration)
and [Paper Configuration](https://docs.papermc.io/paper/reference/configuration).
