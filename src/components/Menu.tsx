import {
  ChevronDown,
  ChevronLeft,
  ChevronUp,
  FileMusic,
  MenuIcon,
  Metronome,
  Minus,
  Plus,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { progressionList } from "../data/progression";

interface Chord {
  id: string;
  name: string;
  type:string;
}

export function Menu() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(true);

  const chords: Chord[] =  progressionList.map((item)=> { return {id:item.id, type: item.type, name: item.type === "major" ? "Maior": "Menor"}});

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4  bg-white p-2 cursor-pointer hover:bg-gray-200 rounded shadow"
      >
        <MenuIcon size={24} />
      </button>

      <aside
        className={`
        absolute top-0 left-0
        min-h-[100vh] w-64
        bg-white
        border-r
        border-gray-100
        p-4
        overflow-y-scroll
        transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <button
        onClick={() => setOpen(!open)}
        className={`absolute right-0 z-40 top-2 cursor-pointer bg-white hover:bg-gray-200 p-2 rounded shadow ${open ? "block": "hidden"}`}
      >
        <ChevronLeft size={24} />
      </button>
        <div className="mb-4">
          <p className="text-gray-400 text-sm mb-2">FERRAMENTA</p>

          <NavLink
            to="/metronome"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded hover:bg-gray-200 ${
                isActive ? "bg-gray-200 font-semibold text-[#1788c5]" : ""
              }`
            }
          >
            <Metronome size={20} />
            <span>Metrônomo</span>
          </NavLink>
        </div>

        <div className="mb-4">
          <p className="text-gray-400 text-sm mb-2">ACORDES</p>

          <NavLink
            to="/chords/major"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded hover:bg-gray-200 ${
                isActive ? "bg-gray-200 font-semibold text-[#1788c5]" : ""
              }`}
          >
            <Plus size={20} />
            <span>Maiores</span>
          </NavLink>

          <NavLink
            to="/chords/minor"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded hover:bg-gray-200 ${
                isActive ? "bg-gray-200 font-semibold text-[#1788c5]" : ""
              }`}
          >
            <Minus size={20} />
            <span>Menores</span>
          </NavLink>
        </div>

        <hr className="mb-4 text-neutral-300" />

        <div className="mb-4">
          <p className="text-gray-400 text-sm mb-2">EXERCÍCIOS</p>

          <button
            onClick={() => setOpenDropdown(!openDropdown)}
            className="flex items-center justify-between w-full p-2 hover:bg-gray-200 rounded"
          >
            <div className="flex items-center gap-3">
              <FileMusic size={20} />
              <span>Progressão</span>
            </div>

            {openDropdown ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {openDropdown && (
            <div className="mt-2 flex flex-col gap-1">
              {chords.map((chord) => (
                <NavLink
                  key={chord.id}
                  to={`/exercise/${chord.type}/${chord.id}`}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-2 rounded hover:bg-gray-100 border-b-1 border-b-gray-200 ${
                      isActive
                        ? "bg-gray-200 font-semibold text-[#1788c5]"
                        : ""
                    }`
                  }
                >
                  <span className="font-semibold capitalize w-5">{chord.id}</span>
                  <span >{chord.name}</span>
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </aside>
    </>
  );
}