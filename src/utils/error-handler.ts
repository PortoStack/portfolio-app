import { NextResponse } from "next/server";

export const handleApiError = (err: unknown) => {
  console.error(err);

  if (isPrismaError(err)) {
    return NextResponse.json(
      { message: "Database error occurred" },
      { status: 500 }
    );
  }

  if (err instanceof Error) {
    return NextResponse.json(
      { message: err.message || "Internal server error" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Unknow error occurred" },
    { status: 500 }
  );
};

const isPrismaError = (err: unknown): boolean =>
  !!(err && typeof err === "object" && "code" in err && "clientVersion" in err);
