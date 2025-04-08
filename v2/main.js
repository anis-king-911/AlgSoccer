import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://gxdpkrwfrlqnxjiqxrnh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4ZHBrcndmcmxxbnhqaXF4cm5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5NjYxMjYsImV4cCI6MjA1OTU0MjEyNn0.gn2XTQqAmWywHM-yFGjwnMFOcaydvJAFkTEhCq9Fk-0";
const supabase = createClient(supabaseUrl, supabaseKey);

function Timestamp(timestamp) {
  const date = new Date(timestamp);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

function capitalizeWords(string) {
  if (typeof string !== "string" || string.trim() === "") return "";

  return string
    .toLowerCase() // Convert entire string to lowercase first
    .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize first letter of each word
};

function transformObjectKeys(obj, mode = "lower", firstLetterOnly = false) {
  if (typeof obj !== "object" || obj === null) {
    throw new Error("Input must be an object.");
  }

  if (!["lower", "upper"].includes(mode)) {
    throw new Error("Mode must be either `lower` or `upper`.");
  }

  function transformKey(key) {
    if (firstLetterOnly) {
      return mode === "lower"
        ? key.charAt(0).toLowerCase() + key.slice(1)
        : key.charAt(0).toUpperCase() + key.slice(1);
    }
    return mode === "lower" ? key.toLowerCase() : key.toUpperCase();
  }

  function deepTransform(obj) {
    if (Array.isArray(obj)) {
      return obj.map(deepTransform);
    } else if (typeof obj === "object" && obj !== null) {
      return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [transformKey(key), deepTransform(value)])
      );
    }
    return obj;
  }

  return deepTransform(obj);
}

const CasesBg = {
  "win": "emerald",
  "loss": "rose",
  "draw": "amber"
}

console.log(window.document.location.pathname);


if (
  window.document.location.pathname === "/v2/"
  // ||
  // window.document.location.pathname === "/index.hmtl" ||
  // window.document.location.pathname.includes("./admin.html")
) {
  const DataTable = document?.querySelector("#DataTable tbody");
  const StatisticsTable = document?.querySelector("#StatisticsTable tbody");
  const AlgFlag = "https://gxdpkrwfrlqnxjiqxrnh.supabase.co/storage/v1/object/sign/algvs/countries-flags/image_62.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhbGd2cy9jb3VudHJpZXMtZmxhZ3MvaW1hZ2VfNjIucG5nIiwiaWF0IjoxNzQ0MDk0MzQ4LCJleHAiOjMxNzA3MjU1ODM0OH0.PseuJ2ugCkjnAfXmAJuvP0ahCa_tumTZSCIY-L0flus";

  function TR({ opponentname, opponentflag, opponentscore, algeriascore, date, coachname, event }) {
    const Case = algeriascore === opponentscore ? "draw" : algeriascore > opponentscore ? "win" : "loss";

    return `
      <tr class="bg-${CasesBg[Case]}-400">
        <td colspan="5" class="text-center">
          <span class="underline">${Timestamp(date)}</span> | ${event}
        </td>
      </tr>
      <tr class="bg-${CasesBg[Case]}-400 py-2 border-b-2 border-black text-xl text-center text-nowrap font-bold">
        <td class="">
          Algeria
        </td>
        <td class="">
          <img src="${AlgFlag}" class="block object-cover size-8 ml-auto" />
        </td>
        <td class="">
          ${algeriascore} - ${opponentscore}
        </td>
        <td class="">
          <img src="${opponentflag}" class="block object-cover size-8 mr-auto" />
        </td>
        <td class="text-left">
          ${opponentname}
        </td>
      </tr>`;
  }

  document.addEventListener("DOMContentLoaded", async event => {
    const { data, error } = await supabase.from("algvs").select("*").eq("coachname", "Vladimir Petkovic");

    if (error) {
      console.log(error);
      return
    }

    data?.reverse()?.map(item => DataTable.innerHTML += TR(item));

    const win = data.filter(item => item.opponentscore < item.algeriascore).length;
    const loss = data.filter(item => item.opponentscore > item.algeriascore).length;
    const draw = data.filter(item => item.opponentscore === item.algeriascore).length;

    const scored = data.map(i => i.algeriascore).map(i => Number(i)).reduce((a, b) => a + b);
    const received = data.map(i => i.opponentscore).map(i => Number(i)).reduce((a, b) => a + b);

    StatisticsTable.innerHTML = `<tr>
    <td>${win}</td>
    <td>${loss}</td>
    <td>${draw}</td>
    <td>${scored}</td>
    <td>${received}</td>
  </tr>`;
  });

} else if (window.document.location.pathname === "/admin.html") {
  function useFormsData(selector, keyType = "name") {
    if (typeof selector !== "string" && !(selector instanceof HTMLFormElement)) {
      throw new TypeError("useFormsData(): Selector must be a string or an HTMLFormElement");
    }

    // Get the form element
    const form = typeof selector === "string" ? document.querySelector(selector) : selector;

    if (!(form instanceof HTMLFormElement)) {
      throw new Error(`useFormsData(): No form found for selector "${selector}"`);
    }

    if (typeof keyType !== "string" || keyType.trim() === "") {
      throw new TypeError("useFormsData(): keyType must be a non-empty string");
    }

    const formData = new FormData(form);
    const dataObject = {};

    // Populate the object based on the key type
    for (const [name, value] of formData.entries()) {
      const inputElement = form.querySelector(`[name="${name}"]`);

      // Skip if no input is found (shouldn"t happen, but just in case)
      if (!inputElement) continue;

      const key = keyType === "name"
        ? inputElement.name
        : keyType === "id"
          ? inputElement.id
          : inputElement.getAttribute(keyType);

      if (!key) {
        throw new Error(`useFormsData(): Key type "${keyType}" not found on element "${name}"`);
      }

      dataObject[key] = value;
    }

    return dataObject;
  }

  const form = document?.querySelector("form");

  form.addEventListener("submit", async event => {
    event.preventDefault();
    const snap = useFormsData(form);
    const toInsert = transformObjectKeys({
      // Id: Number(),
      Date: Timestamp(snap.date),
      OpponentName: capitalizeWords(String(snap.Opponent_02).toLowerCase()),
      OpponentFlag: String(snap["Opponent Flag"]),
      OpponentScore: Number(snap.Score_02),
      AlgeriaScore: Number(snap.Score_01),
      CoachName: String(snap.coach),
      Event: String(snap["game type"])
    });

    const { data, error } = await supabase.from('algvs').insert([toInsert]).select();

    if (error) {
      console.log(error);
      return;
    }

    console.log(data);
  })
}