import "@/styles/globals.scss";

export const metadata = {
  title: "Safe Space",
  description: "A calm place when things feel too much",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}