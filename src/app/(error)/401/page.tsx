"use client"
import Error from "next/error";

export default function Page() {
  return <Error statusCode={401} title="You are unauthorized to access this page"/>;
}
