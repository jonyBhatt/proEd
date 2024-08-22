# ProEd

ProEd is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to provide a platform where students of any age can learn anything they want. Teachers can also publish their own courses, making education accessible to everyone.

## Features

- **Student Learning**: Any age of students can browse and enroll in various courses.
- **Teacher Course Publishing**: Teachers can create and publish their own courses for others to learn from.
- **User Authentication**: Secure login and registration for students and teachers.
- **Responsive Design**: Accessible on any device, thanks to the use of React and TailwindCSS.

## Getting Started

To get started with ProEd on your local machine, follow the instructions below.

### Prerequisites

- **Node.js** and **pnpm** installed on your machine.

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/jonyBhatt/proEd.git
   ```

2. **Navigate to the client directory and install dependencies**

   ```bash
   cd proed/client
   pnpm install
   ```

3. **Run the client**

   ```bash
   pnpm dev
   ```

4. **Navigate to the server directory and install dependencies**

   ```bash
   cd ../server
   pnpm install
   ```

5. **Run the server**

   ```bash
   pnpm start
   ```

### Running the Application

- Open your browser and navigate to `http://localhost:3000` to view the React frontend.
- The backend server will be running on `http://localhost:5000`.

## Technologies Used

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Package Manager**: pnpm
