
<div align="center" id=topo>

<h1> 🏄‍♂️ Management System for Water Parks 🌊 </h1> 
<h6>Sistema de Gestão para Parques Aquáticos</h6>

</div>

> [!IMPORTANT]
> This project are developed from the subject: Programming Techniques 2.

<div align="center" id=topo>
<p>
    <a href="req">System Requirements</a> | 
    <a href="#atividades1">Part1</a> | 
    <a href="#atividades2">Part2</a> | 
    <a href="#atividades3">Part3</a> | 
    <a href="#atividades4">Part4</a> |
    <a href="#atividades5">Part5</a> 
</p>


</div>

<br>

<span id="req">
  
## 📚 What you will Need

For the system to run and be used effectively, the following technologies must be installed:

1. Git:
  - You will need Git installed to be able to clone this repository: [Click here to install Git](https://git-scm.com/downloads) 

2. NodeJS:
  - When installing Node, choose the "LTS" version; [Click here to install Node](https://nodejs.org/en)


<br>

<span id="atividades1">

## Part1 *CLI Sistem* 1️⃣
<p>
    <a href="#tec">Tecnologies</a> | 
    <a href="#backlog">Backlog</a> | 
    <a href="#manual">User Manual</a> 
</p>

## :pushpin: About the Chalenge
You are an entrepreneur, very attentive to market trends and have noticed the growing
water parks. There is plenty of software available to assist business owners or groups in
managing your business, but most are too expensive and have limitations. So you decided
create a company, with new ideas and better proposals, Ocean Solutions. After much thought, debate and listening
its consultants, it was decided to develop a new system, called Atlantis, a tribute to the city of Atlantis.
Atlantis' first proposal is that it be a generalist system, to manage water parks, clubs and hotels. Therefore,
It was decided to create a first module for it, one that would be used to register clients and their dependents. As every dependent has a
responsible, the dependent's address and telephone data must be the same as the responsible person's data.


 
<br>

> 🔗 **Link** <br>
> - Support documento for the atividade1: [Click to view](https://github.com/b4hia/Atlantis/tree/main/documents/atvi-atl.pdf)
    
<br>
  
<span id="tec">

## 🔌 Technologies Used

<div align="center">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
</div>

<br>

<span id="backlog">

## 🌱 Product Backlog *Atividade1*

 #### Epics (Functional Requirements) 

- [x] [Add Customer Data](https://github.com/b4hia/Atlantis/issues/1)
- [x] [Add Dependent Data](https://github.com/b4hia/Atlantis/issues/2)

<br>


→ [Back to the top](#topo)

<br>

<span id="atividades2">

## Part2 *Singleton and Strategy* 2️⃣
<p>
    <a href="#tec2">Tecnologies</a> | 
    <a href="#backlog2">Backlog</a> | 
    <a href="#manual">User Manual</a> 
</p>

## :pushpin: About the Chalenge
The new version, delivered by the development team, remains a CLI-type system,
just like the previous version. In this system there is no communication with any DBMS, therefore,
a class was used to store information while the system runs, such as
an in-memory database. This class was called “Warehouse”. This class
implements the Singleton pattern, so it has the private constructor method. The decision to
using Singleton came from one of its software engineers and, for now, it will be the main
way of storing data in the system during its execution.
The system has started to “take shape” and is very close to its first stable version,
ready to be presented to future customers and put into production. However, not yet
good enough for an MVP. According to the initial idea, when you thought of
founding the company, some features are mandatory and have not yet been implemented.
The objective now is to implement the mandatory features for the first MVP, maintaining
the application of already used standards and, if necessary, including new standards that you
consider important for the system. You are responsible for this part and for preparing the
system for its first launch.


 
<br>

> 🔗 **Link** <br>
> - Support documento for the atividade2: [Click to view](https://github.com/b4hia/Atlantis/tree/main/documents/atvii-atl.pdf)
    
<br>
  
<span id="tec2">

## 🔌 Technologies Used

<div align="center">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
</div>

<br>

<span id="backlog2">

## 🌱 Product Backlog *Atividade2*

 #### Epics (Functional Requirements) 

- [x] [Features developed](https://github.com/b4hia/Atlantis/issues/4)

<br>


→ [Back to the top](#topo)

<br>

<span id="atividades3">
    
## Part3 *Builder* 3️⃣
<p>
    <a href="#tec3">Tecnologies</a> | 
    <a href="#backlog3">Backlog</a> | 
    <a href="#manual">User Manual</a> 
</p>

## :pushpin: About the Chalenge
The Atlantis system is getting better and better, thanks to the commitment of the development team.
However, you received two denials, twice two potential clients did not accept your
software as a minimum viable product for use. This happened because the implementation
does not include important things, including a form of registration and management of
accommodations.
Its software engineers started updates and one of the main differences was
include a class called “Accommodations”. This class was designed to represent
any type of accommodation in a hotel, inn or resort.
You were responsible for finishing the classes that create the other types of accommodation and for
design and develop hosting control in the software. Hosting control
consists of recording which guests are currently staying at the hotel, inn or
resort. Furthermore, what type of accommodation are these guests staying in?

 
<br>

> 🔗 **Link** <br>
> - Support documento for the atividade3: [Click to view](https://github.com/b4hia/Atlantis/tree/main/documents/atviii-atl.pdf)
    
<br>
  
<span id="tec3">

## 🔌 Technologies Used

<div align="center">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
</div>

<br>

<span id="backlog3">

## 🌱 Product Backlog *Atividade3*

 #### Epics (Functional Requirements) 

- [ ] [Features developed](https://github.com/b4hia/Atlantis/issues/5)

<br>


→ [Back to the top](#topo)

<br>

<span id="atividades4">
    
## Part4 *SPA Application* 4️⃣
<p>
    <a href="#tec4">Tecnologies</a> | 
    <a href="#backlog4">Backlog</a> | 
    <a href="#manual">User Manual</a> 
</p>

## :pushpin: About the Chalenge
Finally, the Atlantis system was commercialized and its results were very good. However, you
received important information, a report from the marketing and sales team. This one
report pointed out that CLI (Command-line interface) type systems generally become
obsolete quickly. Furthermore, CLI-type systems are not compatible with perception
human communication.
You are the most interested in the success of the system, after all, you are the owner of the company, the
entrepreneur who thought about investing in this market of hotels, inns and resorts. Therefore,
you have taken on the task of creating the system's graphical interface. You decided this because you want
that the system has an interface compatible with your entrepreneurial style.
So, you have decided to develop an interface for a
Single Page Application (SPA) type application. SPAs are applications whose functionality is
concentrated on a single page.
The goal now is to build a navigable prototype for the future SPA application. This interface needs to be user-friendly, with great usability.
An important point, the navigable prototype must include all the functionalities that already exist in the CLI system, such as CRUD for customers (guests), accommodation registration and accommodation registration
 
<br>

> 🔗 **Link** <br>
> - Support documento for the atividade4: [Click to view](https://github.com/b4hia/Atlantis/tree/main/documents/ativ-atl.pdf)
    
<br>
  
<span id="tec4">

## 🔌 Technologies Used

<div align="center">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/React-007ACC?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/Bulma-007ACC?style=for-the-badge&logo=bulma&logoColor=white"/>

</div>

<br>

<span id="backlog4">

## 🌱 Product Backlog *Atividade4*

 #### Epics (Functional Requirements) 

- [ ] [Features developed](https://github.com/b4hia/Atlantis/issues/4)

<br>

→ [Back to the top](#topo)

<br>


<span id="manual">

## :scroll: User Manual 
