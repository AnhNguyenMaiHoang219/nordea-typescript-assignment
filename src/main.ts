import { Band, BandMember, BandPlays, ExpectedBand } from './type';
import { union } from './util';

const inputBand: Band = {
  members: {
    current: [
      {
        name: 'Sascha',
        age: 59,
        plays: ['vocals', 'synth', 'guitar', 'bass'],
      },
      {
        name: 'Lucia',
        age: 49,
        plays: ['vocals', 'synth'],
      },
      {
        name: 'Jules',
        age: 53,
        plays: ['guitar', 'bass', 'synth'],
      },
      {
        name: 'Steve',
        age: 55,
        plays: ['guitar'],
      },
    ],
    past: [
      {
        name: 'Raymond',
        age: 57,
        plays: ['vocals', 'synth'],
      },
      {
        name: 'En',
        age: 52,
        plays: ['vocals', 'drums', 'guitar', 'synth'],
      },
      {
        name: 'Gunter',
        age: 57,
        plays: ['guitar', 'synth'],
      },
    ],
  },
};

function transformData(band: Band): ExpectedBand {
  // Compose all band members and transform their name to lowercase format
  const allMembers: BandMember[] = [...inputBand.members.current, ...inputBand.members.past].map(
    member => ({
      ...member,
      name: member.name.toLowerCase(),
    }),
  );

  // Sort ascending all members by their name
  allMembers.sort((a, b) => a.name.localeCompare(b.name));

  // Sort descending all member by their age
  allMembers.sort((a, b) => b.age - a.age);

  // Extract band member names
  const allMemberNames = allMembers.map(member => member.name);

  // Compose plays object with play's name as the key
  const plays: BandPlays = {};
  const allPlays = allMembers.map(member => member.plays);
  const uniquePlays = union(allPlays);

  // Loop through plays, and find all members for each play
  uniquePlays.forEach(play => {
    const playMembers = allMembers
      .filter(member => member.plays.includes(play))
      .map(member => member.name);

    plays[play] = playMembers;
  });

  // Return the expected result
  return {
    ...band,
    members: {
      ...band.members,
      all: allMemberNames,
    },
    plays: plays,
  };
}

const transformedBand = transformData(inputBand);
console.log('Transformed band object');
console.log(transformedBand);
