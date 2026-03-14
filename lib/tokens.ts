import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const TOKENS_FILE = path.join(process.cwd(), "data", "tokens.json");
const TTL_MS = 48 * 60 * 60 * 1000; // 48 heures

export interface DownloadToken {
  token: string;
  email: string;
  orderId: string;
  createdAt: number;
  expiresAt: number;
  downloaded: boolean;
}

function readTokens(): Record<string, DownloadToken> {
  try {
    const dir = path.dirname(TOKENS_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    if (!fs.existsSync(TOKENS_FILE)) {
      fs.writeFileSync(TOKENS_FILE, JSON.stringify({}));
      return {};
    }
    return JSON.parse(fs.readFileSync(TOKENS_FILE, "utf-8"));
  } catch {
    return {};
  }
}

function writeTokens(tokens: Record<string, DownloadToken>): void {
  const dir = path.dirname(TOKENS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(TOKENS_FILE, JSON.stringify(tokens, null, 2));
}

export function createDownloadToken(email: string, orderId: string): string {
  const tokens = readTokens();
  const token = uuidv4();
  const now = Date.now();

  tokens[token] = {
    token,
    email,
    orderId,
    createdAt: now,
    expiresAt: now + TTL_MS,
    downloaded: false,
  };

  writeTokens(tokens);
  return token;
}

export function validateToken(token: string): DownloadToken | null {
  const tokens = readTokens();
  const entry = tokens[token];

  if (!entry) return null;
  if (Date.now() > entry.expiresAt) return null;

  return entry;
}

export function markTokenUsed(token: string): void {
  const tokens = readTokens();
  if (tokens[token]) {
    tokens[token].downloaded = true;
    writeTokens(tokens);
  }
}
