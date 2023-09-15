"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import SearchButton from "./SearchButton";
import {
  SearchSelect,
  SearchSelectItem,
  Select,
  SelectItem,
} from "@tremor/react";

const SORT_BY_MAP = {
  r: "Recent",
  p: "Price: Low to High",
  h: "Price: High to Low",
  a: "Alphabetical",
};

function Header() {
  return (
    <header>
      <Link href="/">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1200px-Google_Images_2015_logo.svg.png"
          alt="logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </Link>
      <div className="w-full md:max-w-2xl">
        <form action="">
          <div className="flex items-center gap-2 w-full px-4">
            <div
              className="flex items-center space-x-2 bg-white shadow-xl 
            rounded-full border-0 px-6 py-4 flex-1"
            >
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
              <input
                type="text"
                name="searchTerm"
                placeholder="Search"
                className="outline-none flex-1"
              />
            </div>

            {/* searchButton */}
            <SearchButton />
          </div>

          <div>
            <SearchSelect className="min-w-4" placeholder="# of pages">
              {[...Array(100)].map((_, i) => (
                <SearchSelectItem key={i} value={(i + 1).toString()}>
                  {(i + 1).toString()} pages
                </SearchSelectItem>
              ))}
            </SearchSelect>

            <Select className="min-w-4" placeholder="Sort">
              {Object.entries(SORT_BY_MAP).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value}
                </SelectItem>
              ))}
            </Select>

            <SearchSelect className="min-w-4" placeholder="Min Price...">
              {[
                "",
                "100",
                "200",
                "300",
                "400",
                "500",
                "600",
                "700",
                "800",
                "900",
              ].map((_, i) => (
                <SearchSelectItem key={i} value={_.toString()}>
                  {i === 0 ? "No Minimum" : `$${_.toString()}`}
                </SearchSelectItem>
              ))}
            </SearchSelect>

            <SearchSelect className="min-w-4" placeholder="Max Price...">
              {[
                "",
                "100",
                "200",
                "300",
                "400",
                "500",
                "600",
                "700",
                "800",
                "900",
              ].map((_, i) => (
                <SearchSelectItem key={i} value={_.toString()}>
                  {i === 0 ? "No Maximum" : `$${_.toString()}`}
                </SearchSelectItem>
              ))}
            </SearchSelect>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Header;
