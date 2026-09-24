import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import NeonAuthProvider from "@/providers/neon-auth-ui-provider";

import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Hive",
	description: "A heaven place for great minds alike..",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col bg-background text-foreground">
				<NeonAuthProvider>
					{children}
				</NeonAuthProvider>
			</body>
		</html>
	);
}
