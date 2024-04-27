import Image from "next/image";

export default function Home() {
  return (
    <main className="">

    <header className="flex p-4 justify-between bg-gray-400">
      <div>
        <a
          className="w-1/3"
          href="/"
        >
          <Image
            src="/logo.svg"
            alt="Liliart Logo"
            className=""
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
      <ul className="flex w-2/3 px-8">
        <li className="px-8">About</li>
        <li className="px-8">My Arts</li>
        <li className="px-8">Contact</li>
      </ul>
    </header>
      

    </main>
  );
}
