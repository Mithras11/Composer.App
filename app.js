//starts application
const keySelector = require("./random-generators/random-key-selector");
const colorizeSelector = require("./random-generators/randomizer");
const keyGenerator = require("./key-creator/key-generator");
const chordGenerator = require("./key-creator/chord-generator");
const progressionGenerator = require("./harmony-creator/progression-generator");
const chordMapper = require("./mappers/chord-mapper");

const [key, mode] = keySelector.selectKey();
const shouldApplyDominants = colorizeSelector.randomBit();

const scale = keyGenerator.generateKey(`${key} ${mode}`);
const chordsInKey = chordGenerator.generateChords(scale, mode);
const progression = progressionGenerator.generateProgression(chordsInKey, mode, shouldApplyDominants);
const result = chordMapper.display(progression, scale, mode);

console.log(progression);
result.forEach(chord => {
    console.log(JSON.stringify(chord));
});