import Image from "next/image";

export default function FunctionCard() {
  return (
    <div className="p-5 border border-slate-100 rounded-lg to-[60%] bg-gradient-to-br from-slate-50">
      <div className="w-full text-center flex justify-center items-center mb-6">
        <Image
          src={"/svg/home/connect.svg"}
          width={190}
          height={190}
          alt="connectivity"
        />
      </div>
      <div className="text-2xl font-bold text-center">Propojené aplikace</div>
      <div className="text-center text-slate-600 mt-2">
        Aplikace s různými účely spolu chytře komunikují
      </div>
    </div>
  );
}
