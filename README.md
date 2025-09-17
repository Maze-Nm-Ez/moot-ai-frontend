# Moot AI - Legal Intelligence Platform

A modern web application for moot court simulations and legal practice sessions. This React-based platform provides an interactive environment for law students and legal professionals to practice court proceedings through AI-powered simulations.

## 🚀 Features

- **Interactive Moot Court Simulations**: Practice real court cases with AI-powered role-playing
- **Case Selection**: Choose from notable Sri Lankan criminal cases
- **Role-Based Practice**: Practice as Defense Counsel, Prosecution, or other court participants
- **Real-time Chat Interface**: Modern chat interface with typing indicators and step-by-step conversation flow
- **Performance Scoring**: Detailed evaluation reports with legal accuracy scoring
- **Responsive Design**: Modern UI built with Tailwind CSS

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

To check if you have Node.js and npm installed:
```bash
node --version
npm --version
```

## 🛠️ Installation & Setup

1. **Clone the repository** (if not already done):
```bash
git clone <repository-url>
cd moot-ai-frontend
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm start
```
or
```bash
npm run dev
```

4. **Open your browser** and navigate to:
```
http://localhost:3000
```

The application will automatically reload when you make changes to the code.

## 🎯 How to Use

### Getting Started
1. **Start New Section**: Click on "Start New Section" in the sidebar
2. **Select Law Type**: Choose your area of law (e.g., Criminal Law)
3. **Choose a Case**: Select from available criminal cases like "Attorney General v. Jude Shramantha Jayamaha"
4. **Select Your Role**: Choose between Plaintiff/Prosecution or Defense
5. **Choose Practice Mode**: Select Guided or Free Practice
6. **Begin Session**: Start your moot court simulation

### During Practice
- Follow the step-by-step conversation flow
- Input your responses as Defense Counsel when prompted
- System messages from judges, prosecution, and other participants are automated
- Use proper legal terminology and cite relevant laws
- The chat interface shows typing indicators for a realistic experience

### After Practice
- Click "See Your Score" when the session ends
- Review your detailed performance evaluation
- Check scoring across different categories:
  - Legal Accuracy
  - Argument Strength
  - Courtroom Decorum
  - Use of Legal Terminology
  - Persuasiveness
  - Reference to Legal Sources

## 📁 Project Structure

```
moot-ai-frontend/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx              # Navigation sidebar
│   │   ├── ChatView.jsx             # Main chat interface
│   │   └── newSession/
│   │       ├── NewSection.jsx       # Law type selection
│   │       ├── CriminalCases.jsx    # Case selection
│   │       ├── RoleSelection.jsx    # Role and mode selection
│   │       ├── PracticeSession.jsx  # Practice session management
│   │       ├── MootCourtChat.jsx    # Moot court chat interface
│   │       └── ScorePage.jsx        # Performance evaluation
│   ├── data/
│   │   └── mootCourtRoyalPark.js    # Court simulation script
│   ├── App.js                       # Main application component
│   └── index.js                     # Application entry point
├── public/
├── package.json
└── README.md
```

## 🧪 Available Scripts

In the project directory, you can run:

### `npm start` or `npm run dev`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: This is a one-way operation!** Removes the single build dependency and gives you full control over the configuration.

## 🛡️ Troubleshooting

### Common Issues

1. **"npm error Missing script: 'dev'"**
   - Use `npm start` instead of `npm run dev`
   - Both commands do the same thing

2. **Port 3000 already in use**
   - The app will prompt you to use a different port
   - Press `y` to continue on a different port

3. **Dependencies not installed**
   - Run `npm install` to install all required packages

4. **Browser not opening automatically**
   - Manually navigate to `http://localhost:3000`

## 🔧 Technologies Used

- **React 19.1.0** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Create React App** - Build tooling and development server

## 📚 Legal Cases Featured

The application includes simulations for notable Sri Lankan criminal cases:

1. **Attorney General v. Jude Shramantha Jayamaha** (Royal Park Murder Case)
2. **Attorney General v. Duminda Silva & Others** (Bharatha Lakshman Premachandra Murder)
3. **Attorney General v. Marlon Premalal** (Hanwella Double Murder)
4. **Attorney General v. Mirusha and Others** (Seya Sadewmi Case)
5. **Attorney General v. Sarath Fonseka** (White Flag Case)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Review the console for error messages
3. Ensure all dependencies are properly installed
4. Make sure you're using Node.js version 16 or higher

---

**Happy Learning! 📚⚖️**