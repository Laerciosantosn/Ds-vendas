<h1 align="center">

<br>

DSVendas - Backend
</h1>

<p align="center">DSVendas is a web application to Analyze your sales performance from different perspectives.</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

<div style="display: flex; justify-content: space-between;">
  <img src="/backend/img/h2-1.png" alt="demo" height="350" width="415">
  <img src="/backend/img/h2-2.png" alt="demo" height="350" width="415">
</div>


----

## Features

This server all the latest tools and practices in backend development!

- 📘 **Java** — Java is a programming language and computing platform first launched by Sun Microsystems in 1995.
- 📓 **H2-** — H2 is a relational database management system written in Java.
- 📙 **PostgreSQL** — PostgreSQL is an object relational database management system.
- 📗 **Spring Boot** — Spring is an open source framework for the Java platform.


## Getting Started 
 

### Create the database and insert the data. 
1. Open the projects
In folder /resources open the file application-dev.properties and setting the PostgreSQL database configuration.
2. Open the PostgreSQL and create the DSVendas database.
3. Open the folder backend and open the file create.sql and run the query to create table;
4. In folder /resources open the file application-dev.properties open the data.sql and run the query to insert data in your database.

Run the development server:

```bash
start the project
```

1. Open [http://localhost:8080/h2-console](http://localhost:3333/episodes) with your browser.
2. Click in connect to see the database management system.
<br>

To see the routes in your browser.

1. Open [http://localhost:8080/sellers](http://localhost:8080/sellers) with your browser to see the JSON sellers.
2. Open [http://localhost:8080/sales](http://localhost:8080/sales) with your browser to see the JSON sales.
3. Open [http://localhost:8080/sales/success-by-seller](http://localhost:8080/sales/success-by-seller) with your browser to see the JSON success-by-seller.
4. Open [http://localhost:8080/sales/amount-by-seller](http://localhost:8080/sales/amount-by-seller) with your browser to see the JSON amount-by-seller.



## License

<div style="text-align: center;">

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.

</div>