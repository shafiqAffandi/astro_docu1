---
title: Backend - Development Setup
description: setup backend development environment
layout: ../../../layouts/MainLayout.astro
---
Ready to start your R3 development? Follow our step-by-step guide to setup backend development environment on your local machine.

### 1. Install Visual Studio
We Recommend [Visual Studio 2022 Community (.NET 6.0 / .NET 5.0)](https://visualstudio.microsoft.com/vs/community/) with selected workload when installing.
- Universal Windows Platform Development
- ASP .NET and web development
- Visual Studio extension development

### 2. Install .NET SDK
- [.NET SDK 5.0.1](https://dotnet.microsoft.com/download/dotnet/thank-you/sdk-5.0.100-windows-x64-installer)
- [.NET SDK 6.0](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-6.0.102-windows-x64-installer)

### 3. Setup Nuget Private AdIns
1. Open Visual Studio, select Tools > Nuget Package Manager > Package Manager Setting  

![](/assets/nuget-setup-1.png)  

2. Select Package Source and click Add New  

![](/assets/nuget-setup-2.png)  

3. Change Name with `AdIns Development Package .NET 5` and change Source with `http://r3app-server:5500/v3/index.json`, then click Update.  

![](/assets/nuget-setup-3.png)  

4. Select Package Source and click Add New again
5. Change Name with `AdIns Development Package .NET 6` Change Source with `http://r3app-server:5400/v3/index.json`, then click Update.  

![](/assets/nuget-setup-4.png)
