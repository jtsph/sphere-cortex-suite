export const metadata = {
  title: 'Sphere Cortex Dev Suite',
  description: 'Sustainable Software Development Suite',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}