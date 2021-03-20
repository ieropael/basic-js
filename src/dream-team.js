module.exports = function createDreamTeam(members) {
  let dreamTeam = [];
  let dreamTeamTitle = '';
  if (!Array.isArray(members)) {
    return false;
  }
  for (let name of members) {
    if (typeof name == 'string') {
      dreamTeam.push(name.replace(/\s+/g, '').toUpperCase());
    }
  }
  for (let name of dreamTeam.sort()) {
    dreamTeamTitle += name[0];
  }
  return dreamTeamTitle;
};
