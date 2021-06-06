import { useState } from "react";
import { Listbox } from "@headlessui/react";
import React from "react";

const people = [
  { id: 1, name: "1 star", unavailable: false },
  { id: 2, name: "2 star", unavailable: false },
  { id: 3, name: "3 star", unavailable: false },
  { id: 4, name: "4 star", unavailable: false },
  { id: 5, name: "5 star", unavailable: false },
];

export function MyListbox() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button>{selectedPerson.name}</Listbox.Button>
      <Listbox.Options>
        {people.map((person) => (
          <Listbox.Option
            key={person.id}
            value={person}
            disabled={person.unavailable}
          >
            {person.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
