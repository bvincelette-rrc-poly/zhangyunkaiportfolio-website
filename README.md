# Portfolio Website

This is a portfolio website created by Brian to showcase projects, skills, and resources.

## Features
- Showcases personal projects with links and descriptions.
- Lists technical skills and tools.
- Provides learning and development resources.

## Prerequisites
- Install **Node.js** (v16 or higher): [Download here](https://nodejs.org/).
- Install **npm** (comes with Node.js).

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the project:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment with Docker
1. Build the Docker image:
   ```bash
   docker build -t portfolio-website .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 5575:80 portfolio-website
   ```
   Open [http://localhost:5575](http://localhost:5575) in your browser.

## Troubleshooting
- Delete `node_modules` and reinstall if dependencies fail:
  ```bash
  rm -rf node_modules
  npm install
  ```
- Ensure ports 3000 or 5575 are not in use.

## License
This project is licensed under the MIT License.
