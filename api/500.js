// Remove this file to use NotFound.tsx for handling 500 errors.
// Warning: This will impact SEO by allowing 200 OK responses on bad routes.

export const config = {
  runtime: "edge",
}

export default function handler() {
  return new Response(
    `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>500 - Internal Server Error | Drew Ball</title><meta name="description" content="An unexpected error occurred on the server. Please try again later or return to Drew Ball's website homepage."><style>body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;margin:0;padding:0;display:flex;justify-content:center;align-items:center;height:100vh;text-align:center;background-color:#fff;color:#171a20}@media (prefers-color-scheme:dark){body{background-color:#000;color:#fff}}h1{font-size:3.2em;margin-bottom:.5em}p{font-size:1.5em;margin-bottom:1em}a{color:#2ed158;text-decoration:none;font-size:1.2em}a:hover{text-decoration:underline}</style></head><body><div id="root"><h1>500</h1><p>An unexpected error occurred on the server. Please try again later.</p><a href="/">← Return to Homepage</a></div></body></html>`,
    {
      status: 500,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    }
  )
}
