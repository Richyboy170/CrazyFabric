import Image from "next/image";
import { lusitana } from "@/app/fonts";
import React from 'react';
import './styles/global.css';
import { colonnaMT } from './fonts';

export default function Home() {
  return (
    <main className="bg-customGold">
      {/* Welcome Section */}
      <div className="flex h-screen justify-center items-center relative">
        <div className="bg-overlay"></div>
        <div className="text-center z-10">
          <div className="text-blue-500 text-9xl" style={{ fontFamily: colonnaMT.fontFamily }}>
            CrazyFabric
          </div>
          <div className="text-blue-500 text-xl mt-4" style={{ fontFamily: colonnaMT.fontFamily }}>
            Your hyped-up T-shirts for your everyday experience
          </div>
        </div>
      </div>

      {/* Shopping Section */}
      <div className="bg-gray-50 p-10">
        <div className="text-center text-blue-500 text-3xl mb-6" style={{ fontFamily: colonnaMT.fontFamily }}>
          Shopping Here!
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Product Cards */}
          <div className="border p-4 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <Image src="/images/GeaR Black.png" alt="Product 1" width={200} height={200} />
            <div className="mt-4 text-xl text-center" style={{ fontFamily: colonnaMT.fontFamily }}>Product 1</div>
            <div className="mt-2 text-blue-500 text-center">$19.99</div>
          </div>
          <div className="border p-4 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <Image src="/images/GeaR Black.png" alt="Product 2" width={200} height={200} />
            <div className="mt-4 text-xl text-center" style={{ fontFamily: colonnaMT.fontFamily }}>Product 2</div>
            <div className="mt-2 text-blue-500 text-center">$29.99</div>
          </div>
          <div className="border p-4 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <Image src="/images/GeaR Black.png" alt="Product 3" width={200} height={200} />
            <div className="mt-4 text-xl text-center" style={{ fontFamily: colonnaMT.fontFamily }}>Product 3</div>
            <div className="mt-2 text-blue-500 text-center">$39.99</div>
          </div>
        </div>
      </div>
    </main>
  );
}
