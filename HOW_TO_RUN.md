# service-as-daemon

A basic setup that would launch your Node.js service as a daemon (that will automatically start on system boot and restart if it crashes or is terminated).

## Important

Change the placeholder _/path/to_ with full path to the files.

### You need to load the service first

```sh
launchctl load ~/path/to/systemd/service-as-daemon-app-1.plist
```

### Start the service

```sh
launchctl start service-as-daemon-app-1
```

### Stop the service

```sh
launchctl stop service-as-daemon-app-1
```

### Check the service is running

```sh
launchctl list | grep 'service-as-daemon-app-1'
```

### Monitor logging

```sh
log show --process node --last 10m
```

### You can remove the service from daemon list with this command

```sh
launchctl load ~/path/to/systemd/service-as-daemon-app-1.plist
```
