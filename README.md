## Cloud Build Demo

This is an application to demonstrate the effects of using Cloud Build as a CI through both serial and parallel stages. In its simplest form, its a `nodejs` application, that you can run using the following commands in any terminal.

#### Install
```
npm install
```

#### Start

```
npm start
```


## Steps to run this demo
1. Fork this repository
2. Go [here](https://console.cloud.google.com/cloud-resource-manager), log in if required, and create a new project
3. Go [here](https://console.cloud.google.com/cloud-build/triggers/add), choose the previously forked repository, and make sure configuration settings is set for `Cloud Build configuration file` instead of `Dockerfile`
4. Make a commit and see the magic happen in Cloud Build

## Visualisation

In the demonstration, the following stages will be observed within the Cloud Build

![Visualisation](https://raw.githubusercontent.com/Weiyuan-Lane/cloudbuild-demo/master/cloudbuild-graph.png)