import { flashNotification } from "@silverbulletmd/plugos-silverbullet-syscall/editor";

const loneRangerQuotes = [
  "Hi-Yo! Silver",
  "Hi-Yo! Silver! Away!",
  "Kemo Sabe",
  "Get-um up, Scout!",
];

export async function helloWorld() {
  flashNotification(loneRangerQuotes[Math.floor(Math.random() * loneRangerQuotes.length)]);
}