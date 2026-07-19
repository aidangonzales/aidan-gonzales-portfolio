import { redirect } from "next/navigation";

/**
 * NFC card redirect page.
 * Automatically redirects visitors from aidangonzales.com/card to the home page.
 * This allows you to point your NFC chip and QR code to /card, and then update
 * the redirect target here without reprogramming the card.
 */
export default function CardRedirect() {
  redirect("/");
}
