"use client";
import { X } from "lucide-react";
import React from "react";
import Link from "next/link";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) form.reset();
  };

  return (
    <Link href="/" type="reset" onClick={reset}>
      <X className="text-white bg-black rounded-full p-2 size-10" />
    </Link>
  );
};

export default SearchFormReset;
