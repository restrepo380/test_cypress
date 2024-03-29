Test execution
General implementation details

Introduction
This project contains examples of test automation using Cypress and the JavaScript programming language. 

This automation uses the Page Object Model pattern through the Cypress framework which is an open source code that allows creating automation software tests.

How to get started
The following instructions are for running this automation test repository on your local machine.

Requirements
To run the project on your local machine you need to install

●	Node.js
●	Browsers (e.g. Chrome, Edge, Firefox, etc.)

Project setup

Steps to set up a development environment:

●	Clone this repository on your local machine.
●	Open the automation project in an integrated development environment (IDE), e.g.; IntelliJ IDEA, VScode, Eclipse, etc.
●	You need to have the dependencies downloaded.

Running the test
You can compile the project with the following command:
●	npm run test
●	npm run "cypress:open"

Translated with DeepL.com (free version)



General implementation details

Test scenarios are created in files with .cy.js ending. These files support JavaScript code and Cypress methods. This test uses the POM design pattern in which the elements and actions of the actors are divided by pages.


cypress/e2e/Constants: This folder contains the file the class with constant methods in the test.

cypress/e2e/Data: This folder contains the JSON files with the information used in the test.

cypress/e2e/Elements: This folder contains the classes that have the elements with which the user interacts. For example buttons, inputs, links, etc.

cypress/e2e/Pages: This folder contains the classes with the Cypress methods that interact with the web app simulating the user's actions.

cypress/e2e/Test: This folder contains classes with test scripts.

cypress/e2e/Utils: This folder contains elements that can be used in the test.
