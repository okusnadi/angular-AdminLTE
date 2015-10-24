## Angular AdminLTE

> WARNING: This repository is still in progress.

[AdminLTE](https://github.com/almasaeed2010/AdminLTE) control panel template supercharged by the powerful [AngularJS](https://angularjs.org/) framework! [AdminLTE](https://github.com/almasaeed2010/AdminLTE) is an open source admin dashboard and control panel theme developed by [Abdullah Almsaeed](https://almsaeedstudio.com/), it is built on top of [Bootstrap](http://getbootstrap.com/) CSS framework. While [AngularJS](https://angularjs.org/) is a javascript framework developed by Google to easily create well structured and maintainable frontend application.

This repository is intended to combine the beauty of [AdminLTE](https://github.com/almasaeed2010/AdminLTE) template and the greatness of [AngularJS](https://angularjs.org/) framework.

### Required Softwares
- [Node.js](https://nodejs.org/)
- [Bower](http://bower.io/)

### Installing Required Softwares
In order to run this application on your machine, you are going to need the following softwares.

#### Node.js
Simply heads out to the download page of the [Node.js](https://nodejs.org/) website.

#### Bower
Once you have installed the [Node.js](https://nodejs.org/), you may use the [NPM](https://www.npmjs.com/) (Node Package Manager) command to install [Bower](http://bower.io/). We will use [Bower](http://bower.io/) to download all required dependencies. Open your terminal and type the following command
```
$ npm install -g bower
```
This will install [Bower](http://bower.io/) package globally on your machine.

### Running Application

#### Clone Repository
First, clone this repository to your local machine:
```
$ git clone git@github.com:risan/angular-AdminLTE.git
```
Then `cd` to the created local directory:
```
$ cd angular-AdminLTE
```

#### Install All Required Dependencies
Since we already have [Bower](http://bower.io/) installed, now we can easily download all required dependencies with the following command:
```
$ bower install
```

### Available Directives
The following custom Angular directives are already available:

#### Header Logo
```html
<lte-logo></lte-logo>
```

#### Navbar Messages Menu
```html
<lte-messages-menu ng-controller="MyCtrl"></lte-messages-menu>
```

#### Navbar Notifications Menu
```html
<lte-notifications-menu ng-controller="MyCtrl"></lte-notifications-menu>
```

#### Navbar Tasks Menu
```html
<lte-tasks-menu ng-controller="MyCtrl"></lte-tasks-menu>
```

#### Navbar User Menu
```html
<lte-user-menu ng-controller="MyCtrl"></lte-user-menu>
```

#### Sidebar User Panel
```html
<lte-user-panel ng-controller="MyCtrl"></lte-user-panel>
```

#### Footer
```html
<lte-footer ng-controller="MyCtrl"></lte-footer>
```

