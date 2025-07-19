# 🦷 DentalCare Agency – Portfolio & Service Platform

A **comprehensive, full-stack web application** built for a **dental agency**, designed to serve as both a professional **portfolio** and a **patient engagement tool**. This website highlights the clinic's **services**, showcases **patient success stories**, provides essential **FAQs**, and offers multiple ways for potential clients to **connect and interact** with the dentists.

---

## 💡 About the Project

This dental website serves as a digital identity for the dental agency, enabling them to:

* Present their **services** clearly and confidently
* Establish **credibility** through testimonials and real treatment results
* Provide quick access to **contact details** and **location**
* Allow patients to **explore pricing** and gain trust via case studies

Designed to be clean, accessible, and professional, the platform delivers a seamless experience across all devices.

---

## 🌟 Core Features

### 🏠 **Home Page**

* Engaging welcome section introducing the clinic
* Overview of available dental services
* Brief background about the dentists and their mission
* Carousel or grid of patient testimonials

---

### 💼 **Services Overview**

* A dedicated page with **detailed service listings**
* Each service includes:

  * Description of treatment
  * Benefits and patient suitability
  * **Transparent pricing**
* Structured layout for easy readability

---

### 🧪 **Case Studies with Before/After Comparison**

* Highlight real-life transformations using an **interactive slider**
* Visitors can visually compare patients' **mouths before and after treatment**
* Builds **trust and authenticity** through photographic evidence of success

---

### 💬 **Testimonials & FAQs**

* Authentic feedback from previous patients helps build reputation
* FAQ section answers common concerns like:

  * “Is the treatment painful?”
  * “How long does recovery take?”
  * “Is financing available?”

---

### 📍 **Location Page**

* Embedded Google Maps for easy navigation to the clinic
* Full address, directions, clinic hours, and emergency contact info

---

### 📞 **Contact Page**

* Responsive contact form that lets users:

  * Ask questions
  * Schedule consultations
  * Request a callback
* Form submissions are securely handled and emailed to the clinic
* Can be integrated with **EmailJS** or **Nodemailer**

---

## 📄 Page-by-Page Breakdown

| Page             | Description                                                        |
| ---------------- | ------------------------------------------------------------------ |
| **Home**         | Introduction, dentist profile, services summary, testimonials      |
| **Services**     | Full-service breakdown with pricing                                |
| **Case Studies** | Before/after treatment visuals with interactive comparison sliders |
| **Testimonials** | Patient experiences and positive reviews                           |
| **FAQs**         | Frequently asked questions from new patients                       |
| **Contact**      | Form to reach the clinic directly                                  |
| **Location**     | Map + clinic info for in-person visits                             |

---

## 🛠 Technologies Used

| Technology                   | Purpose                                                       |
| ---------------------------- | ------------------------------------------------------------- |
| **React.js**                 | Frontend UI with reusable components and responsive layout    |
| **Tailwind CSS**             | Utility-first framework for styling                           |
| **Node.js**                  | Backend runtime environment                                   |
| **Express.js**               | Server-side routing and API handling                          |
| **MongoDB**                  | Database for storing contact form data and patient info       |
| **React Router**             | Seamless multi-page experience on a single-page app structure |
| **Framer Motion**            | Smooth UI animations and transitions                          |
| **EmailJS** / **Nodemailer** | Contact form submission handling (email notifications)        |

---

## 💻 Responsive Design

The entire site is **mobile-first** and looks great on:

* Smartphones
* Tablets
* Desktop monitors

### 📸 Screenshots (Add your images here)

* 🖥 Desktop View
* 📱 Mobile View
* 📊 Before/After Case Study Slider

---

## 🚀 Getting Started (Installation Guide)

To run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/dental-portfolio.git
```

### 2. Navigate to Frontend & Backend

```bash
cd frontend && npm install
cd ../backend && npm install
```

### 3. Setup `.env` Files

#### 📁 Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:5000
```

#### 📁 Backend (`backend/.env`)

```env
PORT=5000
MONGO_URI=your_mongodb_uri
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

### 4. Run Development Servers

In separate terminals:

**Frontend:**

```bash
npm run dev
```

**Backend:**

```bash
npm start
```

Visit the app in your browser:
👉 [http://localhost:5173](http://localhost:5173)

---

## 🤝 Contributing

Have an idea to improve the platform? PRs are welcome!

1. Fork the repository
2. Create a new feature branch
3. Commit and push your changes
4. Open a pull request 🎉

---

## 📄 License

MIT License

```
Copyright (c) 2025 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software...
```
