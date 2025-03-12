"use client"
import NavegadorAside from "@/components/aside/NavegadorAside";
import Diapositivas from "@/components/diapositivas/Diapositivas";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {

  return (
    <div className="w-full h-screen bg-[url('/fondo-general.png')] bg-cover bg-center">
      <div className="mx-auto px-4 sm:px-6 lg:px-8l">
        <Navbar />
        <NavegadorAside />
        <Diapositivas />
      </div>
    </div>
  );
}
