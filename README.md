To run this project, first do:

    git clone https://github.com/nov8devs/Stoistrom-React-Django-.git

After cloning you have 4 files which is Frontend, FrontendMobile, Backend and venv.
You are in this directory "Stoistrom-React-Django-" Open Vscode or any workspace you like. You have 2 terminal open.

# FrontendMobile - ReactNative

    cd frontendMobile
    npm i -g expo-cli
    expo start

You will start an expo development server, and you'll also see a QR code in the terminal.
Download Expo Go on your device, and scan the QR code to interact with the dev server.

# Frontend - React

    cd frontend
    npm i 
    npm run dev

You will see the work we've done inside the frontend.
Since this is a mobile app, this frontend will not be used.

# Backend - Django

    cd backend
    pip install django-cors-headers pillow
    python manage.py runserver
