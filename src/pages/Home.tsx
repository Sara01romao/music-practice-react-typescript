import { FileMusic, Guitar, RadioReceiver } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  const linkPages = [
    { name: "Exercícios", path: "/exercise/major/a", icon: <Guitar size={30} /> },
    { name: "Acordes", path: "/chords/major", icon: <FileMusic size={30} /> },
    {
      name: "Metrônomo",
      path: "/metronome",
      icon: <RadioReceiver size={30} />,
    },
  ];

  return (
    <>
      <div className="my-auto flex flex-col justify-center items-center gap-4 px-2 mx-auto py-10 w-full">
        {linkPages.map((item) => (
          <Link
            key={item.path}
            className="max-w-[500px] shadow-md border border-neutral-200 rounded-md  flex flex-col gap-2 items-center justify-center p-4 py-2 w-full text-center h-[100px] hover:text-sky-600 hover:bg-gray-100 duration-300 ease-out "
            to={item.path}
          >
            {item.icon}
            <span className="font-bold">{item.name}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
