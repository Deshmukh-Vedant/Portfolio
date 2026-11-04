# Vedant Deshmukh - Software Developer Portfolio

A modern, high-performance developer portfolio website designed with a futuristic dark aesthetic, glowing neon accents, glassmorphism cards, and fluid animations.

Built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Live Demo & Preview
- **Target Audience:** Technical Recruiters, Hiring Managers, Engineering Teams
- **Aesthetic:** Deep Navy & Black (#050814) with Purple (#a855f7), Electric Blue (#3b82f6), and Cyber Cyan (#06b6d4) glowing accents.

---

## 🛠️ Technology Stack
- **Frontend Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS (with custom Glassmorphism & Neon Glow utilities)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Typography:** Plus Jakarta Sans & JetBrains Mono

---

## 📁 Project Folder Structure

```
Portfolio/
├── public/
│   ├── placeholder-avatar.svg      # Developer profile avatar with neon ring
│   ├── resume.pdf                  # Official resume download target
│   └── projects/
│       ├── attrition.svg           # Attrition Prediction & n8n architecture
│       ├── medical-explainer.svg   # Medical Explainer (FastAPI & Gemini)
│       └── photography.svg         # Photography Portfolio showcase
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Sticky header with active highlight & mobile drawer
│   │   ├── Hero.jsx                # Futuristic hero section with neon glowing frame
│   │   ├── About.jsx               # Professional introduction & strength badges
│   │   ├── Skills.jsx              # Categorized glassmorphism skill cards
│   │   ├── Projects.jsx            # Project cards with details, disclaimer & links
│   │   ├── Experience.jsx          # Education & Internship timeline
│   │   ├── Certifications.jsx      # Verified credentials & simulations
│   │   ├── Achievements.jsx        # Interview process screening, GDG, Hackathon
│   │   ├── ResumeSection.jsx       # Resume download card with copyable path guide
│   │   ├── Contact.jsx             # Form with full validation & direct socials
│   │   └── Footer.jsx              # Footer with quick links & scroll-to-top
│   ├── data/
│   │   └── portfolioData.js        # Single configuration file for all details
│   ├── App.jsx                     # Root application component
│   ├── index.css                   # Tailwind styles, glassmorphism, scrollbars
│   └── main.jsx                    # Application entry point
├── index.html                      # SEO metadata & Google Fonts
├── package.json                    # Project dependencies & scripts
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.js              # Custom cyber dark theme & animations
├── vite.config.js                  # Vite bundler configuration
└── README.md                       # Documentation & setup instructions
```

---

## 💻 Local Setup & Development

### 1. Prerequisites
Ensure you have **Node.js (v18 or higher)** and **npm** installed on your machine.
Check versions:
```bash
node -v
npm -v
```

### 2. Install Dependencies
Open your terminal in the project directory and run:
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```

### 4. Build for Production
To create an optimized production build:
```bash
npm run build
```
To test the production build locally:
```bash
npm run preview
```

---

## ✏️ Personalization & Customization Guide

All data is centralized in **`src/data/portfolioData.js`** for easy updating.

### 1. Replace Personal Details
Open `src/data/portfolioData.js` and edit the following:
- `contact.email`: Replace with your actual email address.
- `contact.linkedin`: Add your personal LinkedIn profile URL.
- `contact.github`: Add your personal GitHub profile URL.
- `contact.location`: Update your location (e.g., city, state).
- `educationData.institution`: Update `[Your College / University Name]` to your actual engineering college.
- `educationData.graduation`: Set your expected graduation year (e.g., 2025).
- `experienceData.duration`: Set the exact months of your Passion Software Solutions internship.

### 2. Add Your Real Profile Photo
1. Save your professional photo in the `public/` directory (e.g., `public/profile.jpg` or `public/profile.png`).
2. In `src/components/Hero.jsx`, change:
   ```jsx
   src="/placeholder-avatar.svg"
   ```
   to:
   ```jsx
   src="/profile.jpg"
   ```

### 3. Add Your Official Resume PDF
1. Export your resume as a PDF file.
2. Name it **`resume.pdf`** and save it inside the `public/` folder, replacing the placeholder file:
   ```
   public/resume.pdf
   ```
3. All download buttons on the site (Navbar, Hero, Resume Section) will automatically download your official resume file!

### 4. Add Project Screenshots & GitHub Links
1. Place screenshots in `public/projects/`.
2. Update the `image`, `github`, and `liveDemo` fields in `src/data/portfolioData.js` under `projectsData`:
   - Replace `https://github.com/your-username/...` with your real repository links.
   - Set `liveDemo` to your deployed web app URL (or keep as `null`).

### 5. Connecting the Contact Form to Live Email
The contact form includes complete frontend validation (checking for valid email format, minimum length, and non-empty inputs).
To receive direct emails:
- **Option A (EmailJS):** Install `@emailjs/browser` and trigger `emailjs.send()` in `handleSubmit` in `src/components/Contact.jsx`.
- **Option B (Formspree):** Change the form submit handler to post to your Formspree endpoint URL (`https://formspree.io/f/your_form_id`).

---

## 🐙 Push to GitHub

Run the following commands in your terminal:

```bash
# 1. Initialize git (if not already done)
git init

# 2. Add all files
git add .

# 3. Commit files
git commit -m "Initial commit: Vedant Deshmukh developer portfolio"

# 4. Set main branch
git branch -M main

# 5. Link to your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git

# 6. Push to GitHub
git push -u origin main
```

---

## 🌐 Deploy to Vercel

### Method 1: Via Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New"** > **"Project"**.
3. Select your portfolio repository from GitHub.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **"Deploy"**. Your website will be live with an SSL certificate in less than a minute!

### Method 2: Via Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the interactive prompts and accept default settings.

---

## 📄 License
This portfolio is created for personal and professional presentation by Vedant Deshmukh.

