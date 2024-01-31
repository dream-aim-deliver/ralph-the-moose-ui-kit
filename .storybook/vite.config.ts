import react from "@vitejs/plugin-react-swc"
import tailwindcss from  "tailwindcss"
import { UserConfigExport, defineConfig } from "vite"

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [react()],
    css: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  })
}
// https://vitejs.dev/config/
export default app