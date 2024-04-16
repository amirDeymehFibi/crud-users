About the project:
This project was built with material ui library as mentioned in your documentation.
On the main page of the index.js file project, you will see the list of users that is received from the given api for the first time, this list is saved in our redux.

The project is designed in such a way that it can be continued, for example, instead of creating a Table component, I could have copied a table from Material ui much more easily and connected it, but I created a component called Table and used it as I made Global ready to use in all parts of the project, this issue is only for Table Nets, and I implemented many of my components like Modal, pagination in this way.

For the actions of creating, editing, deleting, after sending the request directly from the api side, the data is get again and it is displayed in the table, but because this api is a test api, these operations are not performed in their db.

User view page:
On the user view page, I receive and display the information in the form of CSR

Hook useRequest:
In general, I use this hook for all my projects, which I developed myself, and it simplifies my work a lot. In this hook, I display my validation errors or toasts, which is the second item in the development section. It was mentioned. In addition, this hook performs the operation of displaying the spinner by itself, which was mentioned in the third section

tanks!
