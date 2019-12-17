# Jomato

[Demo](https://jomato.z19.web.core.windows.net)

| Micro Frontend     | Build Status                                                                                                                                                                                               |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Container          | [![Build Status](https://dev.azure.com/ajhan/jomato/_apis/build/status/jomato-container-ci?branchName=master)](https://dev.azure.com/ajhan/jomato/_build/latest?definitionId=3&branchName=master)          |
| Restaurants        | [![Build Status](https://dev.azure.com/ajhan/jomato/_apis/build/status/jomato-restaurants-ci?branchName=master)](https://dev.azure.com/ajhan/jomato/_build/latest?definitionId=4&branchName=master)        |
| Restaurant Details | [![Build Status](https://dev.azure.com/ajhan/jomato/_apis/build/status/jomato-restaurant-details-ci?branchName=master)](https://dev.azure.com/ajhan/jomato/_build/latest?definitionId=5&branchName=master) |

This project is a zomato clone which demonstrates how we can build micro frontends with React

This project consists of the following micro frontends

* __container__: this project is responsible for loading other micro frontends and it houses common UI components like header and footer
* __restaurants__: this project gets 10 restaurants from zomato api and lists them
* __restaurant-details__: this project lists all the reviews for the selected restaurant

## Perks of micro frontend

* Each micro frontend is a independent project created using __create-react-app__ and they can be developed independently of other micro frontends

* Each micro frontend has it's own build and release pipeline so it enable to build, test and deploy individual frontends independently and quickly

## Development

Start each micro frontend using the command __yarn start__ in the following order

* container
* restaurants
* restaurant-details

You can update the setupProxy.js in container project to update the host of individual micro frontends
