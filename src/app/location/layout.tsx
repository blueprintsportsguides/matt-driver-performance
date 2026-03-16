import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location | Matt Driver Performance",
  description: "Advance Guildford (main). Windsor and South East London coming soon. Elite strength and conditioning for young athletes.",
};

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
