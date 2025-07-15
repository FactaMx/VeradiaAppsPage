# Veradia Apps

A collection of mystical and spiritual applications designed to guide your journey.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/FactaMx/VeradiaAppsPage.git
   cd VeradiaAppsPage
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Development

Start the development server:
```sh
npm run dev
```

### Building for Production

Create a production build:
```sh
npm run build
```

Preview the production build locally:
```sh
npm run preview
```

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How to Deploy to veradia.org

This project is ready to be deployed to veradia.org. Follow these steps:

1. **Build the project** (if not already built):
   ```bash
   npm run build
   ```

2. **Deploy to veradia.org**:
   - Push your code to your Git repository
   - Log in to your veradia.org dashboard
   - Create a new site from Git
   - Connect your repository
   - Configure the build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Set up a custom domain** (optional):
   - In your veradia.org site settings, go to "Domain management"
   - Follow the instructions to connect your custom domain

## Development

To run the development server:

```bash
npm run dev
```

For production preview:

```bash
npm run build
npm run preview
```

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
