# Hausärzte im Komturm - Website

Modern, multilingual website for Hausärzte im Komturm medical practice in Freiburg, Germany.

## 🌐 Live Site

[View Live Site](https://hausarzte-im-komturm.vercel.app) _(will be available after deployment)_

## ✨ Features

- 🌍 **Multilingual Support**: German, English, Portuguese, Spanish
- 📱 **Responsive Design**: Works on all devices
- 🎨 **Modern UI**: Clean, professional healthcare design
- ⚡ **Fast Performance**: Built with Next.js 15
- 🔍 **SEO Optimized**: Proper meta tags and structure

## 📄 Pages

- **Home**: Practice overview with quick opening hours
- **Services**: Detailed medical services (General Practice, Internal Medicine, Preventive Care)
- **Team**: Doctor profiles with photos and specializations
- **Opening Hours**: Weekly schedule with emergency contact
- **Online Services**: Prescription renewal and appointment booking info
- **News**: Current announcements and updates
- **Contact**: Contact form and location information

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.6
- **Language**: TypeScript
- **Styling**: CSS Variables
- **Internationalization**: next-intl
- **Icons**: lucide-react
- **Animations**: framer-motion
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/cj4c0b1/hausarzte-im-komturm.git
cd hausarzte-im-komturm

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
src/
├── app/[locale]/          # Localized pages
│   ├── page.tsx          # Home page
│   ├── services/         # Services page
│   ├── about/            # Team page
│   ├── opening-hours/    # Opening hours
│   ├── online-services/  # Online services
│   ├── news/             # News & updates
│   └── contact/          # Contact page
├── components/           # Reusable components
├── messages/            # Translation files (de, en, pt, es)
└── styles/              # Global styles
```

## 🌍 Adding Translations

Translation files are located in `src/messages/`:

- `de.json` - German
- `en.json` - English
- `pt.json` - Portuguese
- `es.json` - Spanish

## 📝 License

This project is private and proprietary to Hausärzte im Komturm.

## 📧 Contact

For questions about this website, please contact the practice:

- **Address**: Karlsruher Straße 3, 79108 Freiburg
- **Phone**: 0761 494200
- **Email**: praxis@hik-freiburg.de
