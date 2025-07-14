import { NextResponse } from "next/server";

export interface ErrorResponseType {
  success: boolean;
  message: string;
  status: number;
}


//helper response function
export const response = ({
  success,
  message,
  status = 200,
}: ErrorResponseType) => {
  return NextResponse.json({ success, message }, { status });
};