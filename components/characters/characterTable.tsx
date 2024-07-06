import { IAllCharacters, ICharacter } from "@/types/characters";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useRouter } from "next/navigation";

const CharacterTable = ({ characters }: { characters: IAllCharacters }) => {
  const router = useRouter();
  return (
    <Table className="border border-gray-300 rounded-md">
      <TableHeader>
        <TableRow className="border border-gray-300">
          <TableHead>CharacterId</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {characters.results.map((character) => (
          <TableRow key={character.id} className="border border-gray-300 ">
            <TableCell
              className="text-red-600 font-bold cursor-pointer hover:bg-red-600 hover:text-gray-100 hover:rounded-sm"
              onClick={() => router.push(`/characters/${character.id}`)}
            >
              {character.id}
            </TableCell>
            <TableCell>{character.name}</TableCell>
            <TableCell>{character.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CharacterTable;
