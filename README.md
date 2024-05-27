# JumboCode Vite Template

This template provides a minimal setup to get React working in Vite with
- TypeScript
- ESLint
- TailwindCSS
- Wouter
- Vercel Serverless Functions

To get the template up and running:
1. Create a Vercel account if you don't have one.
2. Install the LTS version of [Node.js](https://nodejs.org/en) and the [Vercel CLI](https://vercel.com/docs/cli). Update your version of Node if it's old (v18 or lower).
3. Copy this repo as a template and then download/clone the newly created copy onto your local machine.
4. Install all required packages by running `npm install` in the root folder of the repository.
5. Run the development server (both frontend and backend) with `vercel dev`. You may need to do some project setup on Vercel when running this command for the first time. Follow the CLI prompts.

### Potential Bugs
- In Vercel, your project root directory (in settings) should be empty
- The default command to run the dev server in Vercel should be `vite --port $PORT`. You may need to supply an PORT environment variable.
