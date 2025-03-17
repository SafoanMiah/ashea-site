# Ashea Website

[![Next.js](https://img.shields.io/badge/Next.js-14.1.0-000000?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)

Official website for the Ashea Minecraft roleplay server featuring server information, player documentation, and community resources.

## Features
- Server status & connection details
- Interactive wiki with player/region data
- Responsive UI with Tailwind CSS
- Markdown/YAML content management
- Discord community integration
- Server history & timeline visualization

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Shadcn UI Components
- **Content**: YAML data files + Markdown
- **Deployment**: Vercel
- **Minecraft**: Java Edition 1.20.1+

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
npm install
npm run dev
```

### Environment Variables
Create `.env.local` in root directory:
```env
NEXT_PUBLIC_DISCORD_INVITE=https://discord.gg/ashea
NEXT_PUBLIC_SERVER_IP=ashea.org
```

## Project Structure
```
ashea-website/
├── app/                 # Page routes
├── components/          # Reusable components
├── lib/                 # Utilities & data parsing
├── public/              # Static assets
├── styles/              # Global CSS
└── tailwind.config.ts   # Design system config
```

## License
MIT License - see [LICENSE.md](LICENSE.md) for details