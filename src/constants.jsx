const CONTRACT_ADDRESS = '0xB54956Fd51a060D96f4b58b0D23d5Bb841A2Cb3e';

const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hasWorkout: characterData.hasWorkout.toNumber(),
  };
};

const transformTreeData = (treeData) => {
  return {
    name: treeData.name,
    imageURI: treeData.imageURI,
    level: treeData.level.toNumber(),
  };
};

export { CONTRACT_ADDRESS, transformCharacterData, transformTreeData };