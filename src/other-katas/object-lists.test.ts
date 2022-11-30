import listMissingObjects from "./object-lists";

test("duplicateTwo duplicates every element in an array of numbers", () => {
  expect(
    listMissingObjects(
      [
        { id: 1, name: "fred" },
        { id: 3, name: "omar" },
        { id: 17, name: "neto" },
      ],
      [
        { id: 2, name: "allie" },
        { id: 20, name: "omar" },
        { id: 17, name: "neto" },
      ]
    )
  ).toStrictEqual([{ id: 1, name: "fred" }]);
  expect(
    listMissingObjects(
      [
        { id: 1, name: "fred", quote: "should not work", 1: "but it does" },
        { id: 3, name: "omar" },
        { id: 17, name: "neto" },
      ],
      [
        { id: 2, name: "allie" },
        { id: 20, name: "omar" },
        { id: 17, name: "neto" },
      ]
    )
  ).toStrictEqual([
    { id: 1, name: "fred", quote: "should not work", 1: "but it does" },
  ]);
});
