export function pick(obj) {
  if (obj.agenda && obj.agenda.length) {
    const [topic] = obj.agenda;
    return pick(topic);
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
