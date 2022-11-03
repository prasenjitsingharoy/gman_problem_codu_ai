# Build
For NodeJS we support the following dependency/build system as of now

* NPM
* Yarn

If you are using Javascript then your main file should be named as geektrust.js.

### NPM

NPM is the default package manager for NodeJS. NPM can install all the dependencies of a project through the package.json file. It can also update and uninstall packages. In the package.json file, each dependency can specify a range of valid versions using the semantic versioning scheme, allowing developers to auto-update their packages while at the same time avoiding unwanted breaking changes.

In the package.json file, we have entries for the following:

Start script which points to the execution of geektrust.js
Test script to execute all the unit tests present.

```
"scripts": {
    "start": "node geektrust.js",
    "test": "mocha"
}
```

We run the following command to build the solution.

`npm ci --silent`

### Yarn
We also support yarn as a build tool if you want to use it.

Your project should have the package.json file which handles all the dependencies. In that file make sure you have an entry for the start script which points to the execution of geektrust.js and a test script that executes all the unit tests present.

```
"scripts": {
    "start": "node geektrust.js",
    "test": "mocha"
}
```

We build the solution by using the following command.

`yarn install --silent`

# Correctness

We expect your program to take the location to the text file as parameter. Input needs to be read from a text file, and output should be printed to the console. The text file will contain only commands in the format prescribed by the respective problem.

This main file, geektrust.js should receive in the command line argument and parse the file passed in. Once the file is parsed and the application processes the commands, it should only print the output.

For e.g your geektrust.js file will look like this

```
const filename = process.argv[2];
// parse the file and process the command
// print the output
```

## Execution

### No build
You can execute the program using the command

node geektrust.js <absolute_path_to_input_file>

### NPM

Once the npm install from the previous build process is complete, you can execute the program using the command

`npm start --silent <absolute_path_to_input_file>`

### Yarn

Once the yarn install from the previous build process is complete, you can execute the program using the command

`yarn run --silent start <absolute_path_to_input_file>`

# Unit tests

For NodeJS, the following frameworks are supported for unit testing

`Mocha`
`Jest`

For both the frameworks Istanbul tool has been used as the code coverage tool.

## Execution

### Mocha

After npm install Mocha based test cases can be executed with the following command from the root folder

`mocha test`

You can also use the following script to run the test cases directly

`npm test`

### Jest

After npm install Jest based test cases can be executed with the following command from the root folder

`jest`