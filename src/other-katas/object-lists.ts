interface objectProps {
  [OtherProps: string]: unknown; //any key that is a number must have a value of unknown type
  name: string;
  id: number;
}

export default function listMissingObjects(
  array1: objectProps[],
  array2: objectProps[]
): objectProps[] {
  const resultArr = array1.filter((array1object) => {
    const nameDoesNotMatch = array2.every(
      (array2object) => array2object.name !== array1object.name
    );
    const idDoesNotMatch = array2.every(
      (array2object) => array2object.id !== array1object.id
    );

    return nameDoesNotMatch && idDoesNotMatch;
  });
  return resultArr;
}
