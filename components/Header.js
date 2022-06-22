import React, { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
  const inputRef = useRef(null);
  const router = useRouter();
  const search = (e) => {
    e.preventDefault();
    const input = inputRef.current.value;
    if (!input) return;
    router.push(`/search?input=${input}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          onClick={() => router.push('/')}
          className="cursor-pointer"
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={inputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (inputRef.current.value = '')}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url={
            'https://www.freecodecamp.org/news/content/images/2021/03/Quincy-Larson-photo.jpg'
          }
        />
      </div>
      <HeaderOptions />
    </header>
  );
}

export default Header;
