import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'], // Opção de subset conforme necessidade
  weight: ['200', '400', '500', '600', '700', '800'], // Pode definir os pesos que precisa
});

export const metadata: Metadata = {
  title: "Eclipit",
  description: "Sua softhouse no caminho para o futuro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <script type="text/javascript" async src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/756429b9-1b98-4282-a7ae-08bef1a6b99e-loader.js" ></script>
      <body
        className={`${jakartaSans.className} antialiased text-[#F5F5F5] w-full flex flex-col justify-center px-5 overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
