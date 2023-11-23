import { Metadata } from "next"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Knut Merch",
  description: "Explore all of Knuts merch!",
}

export default function StorePage() {
  return <StoreTemplate />
}
