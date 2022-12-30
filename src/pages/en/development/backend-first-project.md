---
title: Backend - First Project
description: mapping project
layout: ../../../layouts/MainLayout.astro
---
Ready to start developing backend for Confins R3? This page will guide you to start your first Confins R3  backend project.

### Prerequisite
Access to AdIns TFS

### 1. Create Folder
Create dedicated folder to store your repositories in local machine. Or you can run the following command in your terminal.
```
d:
mkdir R3_BE
```

### 2. Navigating Repository
Open `Visual Studio 2022` and select `continue without code ->`, the app will open without any project. Select `Team Explorer -> Source Control Explorer` to see the list of available repositories.  

![image_here](/assets/be-fp-2.png)  

### 3. Mapping Project
Right click on desired repository and select `Advance -> Map To Local Folder` to clone the project to your local machine. You can store the project in any of your desired folder. **We suggest to store it inside `R3_BE` folder which created at the first step**.  

![image_here](/assets/be-fp-3.png)  

### 4. Open the Project
Head into the mapped repository by double click it. Locate the .sln file and double click it to open the project.  

![image_here](/assets/be-fp-4.png)  

### 5. Changing the Default Startup Project
Open your `solution explorer`, and locate `AdIns.[app_name].API`. Right click and select `Set as Startup Project`.  

![image_here](/assets/be-fp-5.png)  

### 6. Changing the Launch Project Option
Change the Launch Project from `IIS Express` to `Adins.[app_name].API`.  

![image_here](/assets/be-fp-6.png)  

### 7. Build the Project
Try to build the project by right click on the solution inside `Solution Explorer` and select `Build Solution`. Make sure there are no errors occurred.  

![image_here](/assets/be-fp-7.png)  

### 8. Run the Project
Run the project using `F5` or left click on Launch Project.  

![image_here](/assets/be-fp-8.png)  

### 9. Checking the App
Try open `http://localhost:5000/Swagger` or the configured port on your browser to make sure the app is running.  

![image_here](/assets/be-fp-9.png)

