import { createHmac, randomBytes } from "crypto";

const BASE32 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

function b32encode(buf: Buffer): string {
  let out = "";
  let bits = 0;
  let val = 0;
  for (let i = 0; i < buf.length; i++) {
    val = (val << 8) | buf[i];
    bits += 8;
    while (bits >= 5) { out += BASE32[(val >>> (bits - 5)) & 31]; bits -= 5; }
  }
  if (bits > 0) out += BASE32[(val << (5 - bits)) & 31];
  return out;
}

function b32decode(str: string): Buffer {
  const s = str.toUpperCase().replace(/=+$/, "");
  const buf = Buffer.alloc(Math.floor(s.length * 5 / 8));
  let bits = 0, val = 0, idx = 0;
  for (let i = 0; i < s.length; i++) {
    const c = BASE32.indexOf(s[i]);
    if (c === -1) throw new Error(`Invalid base32 char: ${s[i]}`);
    val = (val << 5) | c;
    bits += 5;
    if (bits >= 8) { buf[idx++] = (val >>> (bits - 8)) & 0xff; bits -= 8; }
  }
  return buf;
}

function totpToken(secret: string, timeMsOffset = 0): string {
  const counter = Math.floor((Date.now() + timeMsOffset) / 1000 / 30);
  const keyBuf = b32decode(secret);
  const ctrBuf = Buffer.alloc(8);
  ctrBuf.writeUInt32BE(Math.floor(counter / 0x100000000), 0);
  ctrBuf.writeUInt32BE(counter >>> 0, 4);
  const hmac = createHmac("sha1", keyBuf).update(ctrBuf).digest();
  const off = hmac[hmac.length - 1] & 0xf;
  const code =
    ((hmac[off] & 0x7f) << 24) |
    (hmac[off + 1] << 16) |
    (hmac[off + 2] << 8) |
    hmac[off + 3];
  return String(code % 1_000_000).padStart(6, "0");
}

export function generateSecret(): string {
  return b32encode(randomBytes(20));
}

export function verifyToken(token: string, secret: string): boolean {
  for (let delta = -1; delta <= 1; delta++) {
    if (totpToken(secret, delta * 30_000) === String(token).trim()) return true;
  }
  return false;
}

export function totpUri(username: string, secret: string): string {
  const label = encodeURIComponent(`Accreditation Ready:${username}`);
  const issuer = encodeURIComponent("Accreditation Ready");
  return `otpauth://totp/${label}?secret=${secret}&issuer=${issuer}&algorithm=SHA1&digits=6&period=30`;
}
