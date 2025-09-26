# pc156789u20231234

## Overview
pc156789u20231234 is an Angular web application crafted for the Art Institute of Chicago to showcase public information about art exhibitions retrieved from the museum's official REST API. The experience highlights accessibility, internationalization, and a clean Material Design interface tailored for developers and art enthusiasts alike.

## Features
- Material Design toolbar with institutional branding and an English/Spanish language toggle powered by `@ngx-translate`.
- Exhibitions information view that consumes the Art Institute of Chicago exhibitions endpoint and presents each record inside responsive cards with imagery, metadata, and long date ranges.
- Domain-driven structure with clear separation between public layout components and exhibitions-specific models, services, and presentation layers.
- Request/Response, Resource, and Assembler patterns implemented to keep API interactions decoupled from UI concerns.
- Accessibility enhancements including ARIA roles, descriptive alternative text, and live region announcements for loading states.

## Architecture
The source code follows a layered, component-based organization with the following sub-domains:
- `public`: Shared layout elements such as the toolbar, language toggle, and footer.
- `exhibitions`: Domain objects, services, and presentation components dedicated to exhibitions information.

Key technologies include Angular 17 standalone components, Angular Material, Angular Signals for lightweight state management, and the HttpClient module for API integration.

## Getting Started
Install dependencies and launch the development server with:

```bash
npm install
ng serve
```

Navigate to `http://localhost:4200/` to explore the application. The UI loads English text by default and allows switching to Spanish at any time.

## Internationalization
Translations reside under `public/assets/i18n/` and are dynamically loaded through `@ngx-translate/http-loader`. Add new languages by extending this directory and updating the translation keys.

## Testing
Execute unit tests with:

```bash
ng test
```

## Author
- Developer: Carlos Perez (u20231234)
- NRC: 56789

