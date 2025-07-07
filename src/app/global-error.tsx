'use client';

export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body>
        <h1>💥 Global Error</h1>
        <pre>{error.message}</pre>
      </body>
    </html>
  );
}
