# Portfolio

Personal portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Quick Start

```bash
npm install
make dev
```

Open [http://localhost:3000](http://localhost:3000)

## Commands

```bash
make dev       # Start development server
make build     # Build for production
make format    # Format code with Prettier
make clean     # Clean build artifacts
```

## Adding Experience

Edit `src/data/experience.json`:

```json
{
  "id": "unique-id",
  "name": "Company Name",
  "type": "professional", // or "hobbies"
  "startDate": "Jan 2024",
  "endDate": "Present",
  "description": "Brief description",
  "roles": [
    {
      "title": "Your Title",
      "startDate": "Jan 2024",
      "endDate": "Present"
    }
  ],
  "technologies": ["Tech1", "Tech2"]
}
```

## Pre-commit Hooks

Code is automatically formatted and linted on commit via Husky.
