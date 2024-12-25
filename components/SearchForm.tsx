import React from "react";
import Form from "next/form";
import { Button } from "./ui/button";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form
      action="/"
      scroll={false}
      className="search-form flex flex-row items-center  border-2 rounded-full p-2 border-black animate-in duration-500 transition-all"
    >
      <input
        name="query"
        defaultValue={query}
        placeholder="Search in Blog"
        className="bg-transparent placeholder-gray-800 focus:outline-none "
      />

      <div className="space-x-2 flex row items-center">
        {query && <SearchFormReset />}

        <button type="submit">
          <Search className="text-white bg-black rounded-full p-2 size-10" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
