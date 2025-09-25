import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// Dynamically set base for GitHub Pages deployments.
// - On CI (GitHub Actions), use "/<repo>/" unless it's a user/org site ("<user>.github.io").
// - Locally (dev/preview), keep base at "/".
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isCI = process.env.GITHUB_ACTIONS === 'true'
const isUserOrOrgSite = repoName ? repoName.endsWith('.github.io') : false
const base = isCI && repoName && !isUserOrOrgSite ? `/${repoName}/` : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
