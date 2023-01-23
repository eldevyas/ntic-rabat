# Phase One: UX Study

## ℹ️ About the Project

**ISTA NTIC Rabat** is an institute of Applied Technologies based in Hay Riad focused on providing the right resources and teaching qualities for its stagiaires. The institute needs a solution for some problems they face with its current website related to design and functionality. So we need to create a new website with some new and enhanced features with 2022’s touch.

## 🚧 Process

1. Discovery
2. Ideation
3. Design
4. Dev Handoff
5. Reflection

## 👥 Roles

**Yassine Chettouch:** Full-stack Developer

**Yassine Atik:** Full-stack Developer

## ⌚**Project Duration:** 4 weeks Estimated (Extensible)

## ⚠️ Problematic

The current website of the institute contains lots of negative feedback from the students, we will try to cover most of them in a list:

- The website design is old and very cringy.
- Some sections are not responsive.
- The stagiaire can’t have any information about the Schedule Changements except if he enters the website manually.
- He can’t put demands of papers to the administration without waiting for a fucking long queue that could take hours just to speak to Khadija and in the end, she tells him to come a week later.
- He can’t access a forum for the institute that the other students consult to talk to each other and ask questions about any problem or inquiry.

## ✅ Solution

So to solve the current problems the user faces with the website, we should present a new structure to the entire functionality of the website, which means new features, services, pages, and more.

### **Class Schedule System**

The previous system is old and not scalable and able to be improved, so we need to make a new scheduling system that would take care of:

- Displaying notifications to a specific group when their class schedule gets updated - and not displaying notifications to all users when a single group’s schedule got changed.
- Inform users about their former if they would be absent from a class.
- If the user clicks over a classroom identifier, a pop-up with a location map and the position of that classroom will be displayed.

### **Admin Access Dashboards**

Of course, to manage the displayed timetable,  the admins need an easier way to edit, add, and manage data, without touching and consulting the database manually.

We have two types of administrators:

- **Manager**
    1. Add/Delete/Manage Formers
    2. Update timetables for both former and student.
    3. Consult the certificate requests of the students - Set the status of the order.

- **Former**
    1. Add Exams Deadlines - Content - and concerned Groups.
    2. Consult his schedule.
    3. Consult his profile - Edit information ( Profile Picture - Email - Password - etc. ).
    4. Consult Students’ Timetable as well.

### Student Access Dashboard and Community

The student is the main targeted user in our project, we can say that our mission since the beginning is to make his experience cooler and easier by using the website.

The user should have some services on his dashboard, and we’ll be focusing on making the project structure as scalable as possible so that if anyone of us has decided to make a new functionality, it’ll be easier to add and implement to the existing website using version control and branches on GitHub’s Repository.

- 📌 **Initial Support**
    1. Consult his Timetable - Displaying Classroom Identifier and Location - Former Name - and Class Type (Presential or Distant).
    2. Push orders to the administration about a Certificate, and follow the order’s status updated by the manager.
    3. Get informed with a Notification System about any update over anything on the data related to that user - For example:
    **Timetable Changed** ⇒ Notify the concerned group about it ;
    **The former is absent next class** ⇒ Notify his concerned groups ;
    **Certificate Order Status Ready** ⇒ Notify ;
    4. Consult a dashboard page that contains incoming exams with their dates, content, formers, etc.
    5. The community page could be consulted without being authenticated but to interact with its content; Authentication is required.
    Its role is to give the ability for stagiaires to ask questions and reply to each other, vote over the interesting and relevant questions (Like Stackoverflow works).
    6. A Page where students can generate an internship report, it contains a form they can fill with information about the past internship, in the end of the form, there’s a rating and feedback about the internship provider that would be used and saved in the database for calculating statistics over bad and good companies to work with.
    This means the system will save similar Companies’ names and calculate their score, so that the new stagiaires looking for a new internship could know the experience some other stagiaires had with these internship providers, avoid the bad ones, and put demands on the good ones.
    All feedback will be displayed over one page, and users can filter feedback by company, rating, and time.
    7. Create his profile using the email provided by the administration ( [ofppt-edu.ma](http://ofppt-edu.ma) ).
    He can add his email to his account when confirmed later, and also modify any public or private information (Profile Picture - Username - “Full Name can’t be changed” - Password - Email, etc. ).
    8. Consult other stagiaires profiles, but they can’t interact with it yet (We can add things later for this option, but now we can’t for time issues).

## ✏️ Project’s USE CASE Diagram

[https://www.figma.com/file/E2pdqofyV2xQ0O1RCG9yQw/Use-Case-Diagram?node-id=0%3A1](https://www.figma.com/file/E2pdqofyV2xQ0O1RCG9yQw/Use-Case-Diagram?node-id=0%3A1)
