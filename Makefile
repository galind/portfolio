.PHONY: dev build format clean

dev: ## Start development server
	npm run dev

build: ## Build for production
	npm run build

format: ## Format code
	npm run format

clean: ## Clean build artifacts
	rm -rf .next out
