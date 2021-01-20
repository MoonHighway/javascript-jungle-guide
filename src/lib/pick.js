const urlFriendly = (str) => str.trim().toLowerCase().replace(/ /g, "-");

const searchByTitle = (location) => ({ title }) =>
  urlFriendly(title) === urlFriendly(location);

export function pick(obj, ...path) {
  const [location, ...rest] = path;

  if (!rest.length) {
    return obj.agenda.find(searchByTitle(location));
  }

  return obj;
}

export function pickFirst(obj) {
  if (obj.agenda && obj.agenda.length) {
    const [topic] = obj.agenda;
    return pickFirst(topic);
  }
  return obj;
}

export function pickLast(obj) {
  if (obj.agenda) {
    const [topic] = [...obj.agenda].reverse();
    return pickLast(topic);
  }
  return obj;
}
