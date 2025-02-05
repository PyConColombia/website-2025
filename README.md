# Setup and Run a Vite App with Mamba

This guide explains how to create a development environment using **Mamba** and set up a **Vite** application.

## Prerequisites
- Install [Mamba](https://mamba.readthedocs.io/en/latest/)
- Install [Node.js](https://nodejs.org/) (if not using Mamba to install it)

---

## 1️⃣ Create a New Mamba Environment
Run the following command to create and activate a Mamba environment with **Node.js**:

```sh
mamba create -n pycon-2025-env nodejs
mamba activate pycon-2025-env
```

Ensure that **Node.js** and **npm** are correctly installed:
```sh
node -v
npm -v
```

---

## 2️⃣ (Alternative) Use a Locally Installed Node.js Version
If you prefer to use a version of Node.js installed on your local system instead of Mamba, skip installing Node.js in Mamba and use:

```sh
nvm install 18  # Install Node.js 18 using NVM (if not already installed)
nvm use 18      # Use Node.js 18
```

Ensure that **Node.js** and **npm** are correctly installed:
```sh
node -v
npm -v
```

---

## 3️⃣ Install Dependencies
Navigate to your Vite project directory and run:
```sh
cd pycon-2025  # Replace with your actual project folder name
npm install
```

---

## 4️⃣ Start the Development Server
Launch the Vite development server with:
```sh
npm run dev
```

By default, the app should be accessible at `http://localhost:5173/`.

---

## 5️⃣ Recreating the Environment
To replicate this environment on another system, follow these steps:

1. **Create the same environment**:
   ```sh
   mamba env create -f environment.yml
   mamba activate pycon-2025-env
   ```

3. **If using a local Node.js version, install it again**:
   ```sh
   nvm install 18  # Ensure the correct version is installed
   nvm use 18
   ```

4. **Navigate to the project and install npm dependencies**:
   ```sh
   cd pycon-2025  # Replace with your actual project folder name
   npm install
   ```

5. **Run the Vite app**:
   ```sh
   npm run dev
   ```
