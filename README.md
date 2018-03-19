#Philips Infrared Remote app

This app enables Homey to listen to signals from Philips IR remotes and can send IR remote signals to your Philips TV.

# Changelog

#### v1.2.0
Rewrite to App SDK2.
If you experience any bugs please report them here: https://github.com/athombv/homey/issues

#### v1.1.1
Reverted command repetitions to 1 due to reports of commands triggering multiple times.

#### v1.1.0
Increased default command repetitions to 5 (from 1) to ensure the signal is received by the tv.
