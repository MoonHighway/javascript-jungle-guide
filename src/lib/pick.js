import { withTheme } from "styled-components";

const urlFriendly = (str) => str.trim().toLowerCase().replace(/ /g, "-");

const searchByTitle = (location) => ({ title }) =>
  urlFriendly(title) === urlFriendly(location);

function argChecks(obj) {
  if (!obj) {
    throw new Error("data argument was not supplied");
  }

  if (typeof obj !== "object") {
    throw new Error(`requires an object for data you sent a ${typeof obj}`);
  }

  if (Array.isArray(obj)) {
    throw new Error(`requires an object for data you sent an array`);
  }

  if (!obj.title) {
    throw new Error("data must have at least a title field");
  }
}

export function pick(obj, ...path) {
  argChecks(obj);
  if (!path.length) {
    throw new Error("path to topic not supplied");
  }
  const [location, ...rest] = path;
  const topic = obj.agenda.find(searchByTitle(location));

  if (!topic) {
    throw new Error(`${location} was not found in "${obj.title}" agenda`);
  }

  if (rest.length > 0) {
    return pick(topic, ...rest);
  }

  return topic;
}

export const pickFirst = (function () {
  let route = [];
  function _pickFirst(obj) {
    argChecks(obj);
    if (obj.agenda && obj.agenda.length) {
      route.push(urlFriendly(obj.title));
      const [topic] = obj.agenda;
      return _pickFirst(topic);
    }
    const result = [obj, [...route, urlFriendly(obj.title)].join("/")];
    route = [];
    return result;
  }
  return _pickFirst;
})();

export const pickLast = (function () {
  let route = [];
  function _pickLast(obj) {
    argChecks(obj);
    if (obj.agenda) {
      route.push(urlFriendly(obj.title));
      const [topic] = [...obj.agenda].reverse();
      return _pickLast(topic);
    }
    const result = [obj, [...route, urlFriendly(obj.title)].join("/")];
    route = [];
    return result;
  }
  return _pickLast;
})();

export const pickNext = (function () {
  let route = [],
    tree = [];
  const climb = () => {
    if (!tree.length && !route.length) {
      return [null, null, null];
    }
    const lastTree = tree.pop();
    const lastRoute = route.pop();
    const n = lastTree.findIndex(searchByTitle(lastRoute));
    return [n, lastTree, lastRoute];
  };
  function _pickNext(obj, ...path) {
    const [location, ...rest] = path;
    const topic = obj.agenda.find(searchByTitle(location));
    if (rest.length > 0) {
      route.push(location);
      tree.push(obj.agenda);
      return _pickNext(topic, ...rest);
    }

    const index = obj.agenda.findIndex(searchByTitle(location));
    if (index + 1 >= obj.agenda.length) {
      let [n, lastTree, lastRoute] = climb();
      while (lastTree && n + 1 >= lastTree.length) {
        [n, lastTree, lastRoute] = climb();
      }

      if (!n && !lastTree && !lastRoute) {
        return [null, null];
      }

      const lastSection = lastTree[n + 1];
      const [xTopic, xRoute] = pickFirst(lastSection);

      const result = [xTopic, [...route, xRoute].join("/")];
      route = [];
      tree = [];
      return result;
    }

    const nextTopic = obj.agenda[index + 1];
    route.push(urlFriendly(nextTopic.title));
    const result = [nextTopic, route.join("/")];
    route = [];
    tree = [];
    return result;
  }
  return _pickNext;
})();

export const pickPrevious = (function () {
  let route = [];
  let tree = [];
  const climb = () => {
    if (!tree.length && !route.length) {
      return [null, null, null];
    }
    const lastTree = tree.pop();
    const lastRoute = route.pop();
    const n = lastTree.findIndex(searchByTitle(lastRoute));
    return [n, lastTree, lastRoute];
  };
  function _pickPrevious(obj, ...path) {
    const [location, ...rest] = path;
    const topic = obj.agenda.find(searchByTitle(location));
    if (rest.length > 0) {
      route.push(location);
      tree.push(obj.agenda);
      return _pickPrevious(topic, ...rest);
    }

    const index = obj.agenda.findIndex(searchByTitle(location));
    if (index - 1 <= 0) {
      let [n, lastTree, lastRoute] = climb();

      while (lastTree && n === 0) {
        [n, lastTree, lastRoute] = climb();
      }

      const lastSection = lastTree[n - 1];
      const result = pickLast(lastSection);
      route = [];
      tree = [];
      return result;
    }

    const nextTopic = obj.agenda[index - 1];
    route.push(urlFriendly(nextTopic.title));
    const result = [nextTopic, route.join("/")];
    route = [];
    tree = [];
    return result;
  }
  return _pickPrevious;
})();
