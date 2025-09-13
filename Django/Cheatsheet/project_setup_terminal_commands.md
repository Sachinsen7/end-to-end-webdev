## **Django Project Setup Cheatsheet**

This guide covers the essential commands to initialize a Django project using uv for package management and integrating Tailwind CSS.

### **1\. Prerequisites**

First, ensure you have Python and uv installed. If you don't have uv, you can install it using pip:

Bash

pip install uv

### **2\. Project Initialization**

These steps create an isolated environment for your project.

**Step 1: Create a Project Directory**

Bash

mkdir my\_project  
cd my\_project

Step 2: Create and Activate the Virtual Environment  
uv makes creating a virtual environment simple. It will create a .venv folder in your project directory.

Bash

\# Create the virtual environment  
uv venv

\# Activate it (command differs by OS)

\# On Windows (PowerShell)  
.\\.venv\\Scripts\\activate

\# On macOS/Linux  
source .venv/bin/activate

You'll know it's active when you see (.venv) at the beginning of your terminal prompt.

### **3\. Install Core Dependencies**

Use uv pip to install Django and the necessary Tailwind package. It's significantly faster than pip.

Bash

uv pip install django django-tailwind

### **4\. Django Project and App Setup**

Now, create the main Django project structure and a core app.

Step 1: Create the Django Project  
The . at the end creates the project in the current directory, which is a cleaner setup.

Bash

django-admin startproject project\_name .

Step 2: Create Your First App  
An "app" in Django is a module that does something, like a blog or a user authentication system.

Bash

python manage.py startapp app\_name

### **5\. Tailwind CSS Integration**

This part involves installing and configuring the django-tailwind app.

Step 1: Install the Tailwind App  
This command sets up the necessary files for Tailwind inside your Django project. It will create a new app, usually named theme.

Bash

python manage.py tailwind install

Step 2: Configure settings.py  
Open project\_name/settings.py and make these changes:  
a. Add 'tailwind' and the newly created 'theme' app to your INSTALLED\_APPS. The theme app must come *before* your own apps if you plan to override its templates.

Python

INSTALLED\_APPS \= \[  
    'django.contrib.admin',  
    'django.contrib.auth',  
    'django.contrib.contenttypes',  
    'django.contrib.sessions',  
    'django.contrib.messages',  
    'django.contrib.staticfiles',

    \# Add tailwind and your theme app  
    'tailwind',  
    'theme',  
      
    \# Add your own apps here  
    'app\_name',  
\]

b. Add TAILWIND\_APP\_NAME to specify which app holds your theme files.

Python

\# Add this line at the bottom of settings.py  
TAILWIND\_APP\_NAME \= 'theme'

c. Add INTERNAL\_IPS for the Django debug toolbar that django-tailwind uses.

Python

\# Add this as well  
INTERNAL\_IPS \= \[  
    "127.0.0.1",  
\]

Step 3: Run the Development Servers  
You need to run two processes simultaneously in two separate terminals.  
**Terminal 1:** Run the Tailwind CLI to watch for CSS changes and rebuild automatically.

Bash

python manage.py tailwind start

**Terminal 2:** Run the standard Django development server.

Bash

python manage.py runserver

---

### **6\. Most Common & Useful Django Commands**

You'll be using these commands all the time.

* **python manage.py makemigrations**  
  * Creates migration files based on changes you make to your models.py.  
* **python manage.py migrate**  
  * Applies the pending migrations to your database, creating or updating tables.  
* **python manage.py createsuperuser**  
  * Creates an admin user to access the Django admin panel at /admin.  
* **python manage.py shell**  
  * Opens an interactive Python shell with your Django project's settings loaded. Great for testing queries.  
* **python manage.py collectstatic**  
  * Gathers all static files (CSS, JS, images) into a single directory for deployment.

---

### **7\. Managing Dependencies (For Your Notes)**

It's crucial to keep a record of the packages your project needs.

* **To save your current packages to a file:**  
  Bash  
  uv pip freeze \> requirements.txt

* **To install all packages from that file (on a new machine):**  
  Bash  
  uv pip sync requirements.txt

This should be a complete reference for getting your projects started. Happy coding\!