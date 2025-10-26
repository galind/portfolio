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

## Adding Entries

### Work

Edit `src/data/work.json`:

```json
{
  "id": "unique-id",
  "name": "Company Name",
  "link": "https://example.com",
  "startDate": "Jan 2024",
  "endDate": "Present",
  "description": "What the company does",
  "roles": [
    {
      "title": "Your Title",
      "startDate": "Jan 2024",
      "endDate": "Present",
      "description": "What you did in this role (optional)"
    }
  ],
  "technologies": ["Tech1", "Tech2"]
}
```

### Projects

Edit `src/data/projects.json`:

```json
{
  "id": "unique-id",
  "name": "Project Name",
  "link": "https://example.com",
  "startDate": "Jan 2024",
  "endDate": "Present",
  "description": "Detailed description of what the project is and does. Can be longer and more descriptive.",
  "technologies": ["Tech1", "Tech2"]
}
```

**Note:** The `link` field is optional. Leave it as an empty string `""` to hide the link icon.

## Pre-commit Hooks

Code is automatically formatted and linted on commit via Husky.
