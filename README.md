# Integrating React app with AEM Single Page Application editor

Follow the video tutorial below for step by step guide on integrating an existing react application with AEM SPA editor
[https://www.youtube.com/watch?v=FSwBrx7aNWA](https://www.youtube.com/watch?v=FSwBrx7aNWA)

To install the complete application and explore, do the following

## Prerequisites

1. Node 8.9.0  - https://nodejs.org/dist/latest-v8.x/
2. Java 1.8 - https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
3. Maven 3.5.2 - https://archive.apache.org/dist/maven/maven-3/3.5.2/binaries/
4. AEM 6.4 with Service pack 2

## Installation

Clone the repo and cd into aem-spa-react/com.techmystyle.spa.react-demo/react-app

Run `$ npm install`

CD into aem-spa-react/com.techmystyle.spa.react-demo

Run `$ mvn clean install -PautoInstallPackage,buildDev -Padobe-public` (Add -Daem.port=XXXX if your AEM instance is running on a port other than 4502)

## Step by Step guide

Follow the instructions in [this](/Assets/Converting%20React%20app%20to%20AEM%20SPA%20editable.docx) word document to build the application from base react application react-app
