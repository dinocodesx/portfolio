/**
 * Injects print-specific CSS overrides for the Resume page.
 * Renders as null in the DOM — only affects @media print output.
 */
export function PrintStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        @media print {
          body { background: white !important; color: black !important; }
          .min-h-screen { padding: 0 !important; }
          main { max-width: 100% !important; }
          button, a svg, .group svg { display: none !important; }
          h1, h2, h3, p, span, li { color: black !important; }
          .text-white\\/40, .text-white\\/60, .text-white\\/30, .text-white\\/20 { color: #666 !important; }
          .border-white\\/5 { border-color: #eee !important; }
          a { text-decoration: none !important; color: black !important; }
        }
      `,
      }}
    />
  );
}
