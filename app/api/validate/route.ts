import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const id = searchParams.get("id") ?? "";
  const valid = validatePassword(id);
  return NextResponse.json(
    {
      valid,
    },
    {
      status: valid ? 200 : 401,
    }
  );
}

const validatePassword = (id: string) => {
  const SALT = process.env.SALT;
  const STORED_HASH = process.env.STORED_HASH;
  const saltedId = `${id}${SALT}`;
  const expectedHash = crypto
    .createHash("sha512")
    .update(saltedId)
    .digest("hex");
  return expectedHash === STORED_HASH;
};
