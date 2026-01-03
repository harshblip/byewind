<div align="center">


<img src="https://socialify.git.ci/harshblip/byewind/image?font=Raleway&language=1&name=1&pattern=Plus&theme=Dark" height="300" />
</div>
<h3 align="center"> byewind </h3>

<p align="center">
     <img src = "https://img.shields.io/badge/react-3B82F6?style=for-the-badge&logo=React&logoColor=white" />
     <img src = "https://img.shields.io/badge/chartjs-6F15B0?style=for-the-badge&logo=chart.js&logoColor=white" />
     <img src = "https://img.shields.io/badge/Tailwind_CSS-164B99?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC" />
 </p>

### Live - [here](https://byewind.vercel.app)
## Approach
- i started by keeping the code modular and production-grade as much possible
- i divided features into separate atomic components which can be reused anywhere (with proper props passed to it)
- instead of using hard-coded data for charts and users. i used mock data (with type-safety) which is dynamic and can be easily integrated/replaced when real api's are implemented
- type-strict. so that errors are identified in the compile time
- implemented hooks for isolating collective logic of sorting, filtering, searching through orders into a single hook
- proper pixel management and ui design of components for mobile/tab/laptop screens.
- categorized each file into relevant folders. so that its easier to locate/find any file/function

## challenges
- i faced challenge during designing the complex bento-like grid and making it responsive.
- layout structuring and optimizing the code for modularity and consistency

## improvements
- implemented smooth animations to ui interactions
- added filtering, sorting and searching for users

## installation and setup

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js**: Version 18.0.0 or higher (LTS recommended).
*   **Package Manager**: `npm`, `yarn`, or `pnpm` (This guide uses `npm`).
*   **Git**: For cloning the repository.

### Installation

### 1. Clone the Repository
Open your terminal and clone the repository to your local machine.

```bash
git clone https://github.com/harshblip/byewind.git
cd byewind
```

### 2. Install Dependencies
Install the required packages defined in package.json.
```bash
npm install
# or
yarn install
```

### 3. Run the Development Server
Start the Vite development server.
```bash
npm run dev
```
</div>

