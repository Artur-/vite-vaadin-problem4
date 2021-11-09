import styles from  './style.css?inline'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `<style>${styles}</style>
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
