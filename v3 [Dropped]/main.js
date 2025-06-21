import { Client, Databases, ID } from "https://cdn.jsdelivr.net/npm/appwrite@18.1.1/+esm";

// Appwrite setup
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // or your Appwrite endpoint
  .setProject("6855bf2f0005ae17f1c6");

const databases = new Databases(client);
const DATABASE_ID = "algvs_db";
const COLLECTION_ID = "algvs";

// Utilities
function Timestamp(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function capitalizeWords(str) {
  return str?.toLowerCase()?.replace(/\b\w/g, l => l.toUpperCase()) || "";
}

function transformObjectKeys(obj) {
  const newObj = {};
  for (const [key, val] of Object.entries(obj)) {
    newObj[key.toLowerCase()] = val;
  }
  return newObj;
}

const CasesBg = { win: "emerald", loss: "rose", draw: "amber" };
const AlgFlag = "https://gxdpkrwfrlqnxjiqxrnh.supabase.co/storage/v1/object/sign/algvs/countries-flags/image_62.png";

if (location.pathname === "/" || location.pathname.includes("index.html")) {
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      const DataTable = document.querySelector("#DataTable tbody");
      const StatisticsTable = document.querySelector("#StatisticsTable tbody");

      const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
      const data = res.documents.filter(d => d.coachname === "Vladimir Petkovic").reverse();

      const TR = ({ opponentname, opponentflag, opponentscore, algeriascore, date, event }) => {
        const Case = algeriascore === opponentscore ? "draw" : algeriascore > opponentscore ? "win" : "loss";
        return `
          <tr class="bg-${CasesBg[Case]}-400">
            <td colspan="5" class="text-center"><span class="underline">${Timestamp(date)}</span> | ${event}</td>
          </tr>
          <tr class="bg-${CasesBg[Case]}-400 py-2 border-b-2 border-black text-xl text-center font-bold">
            <td>Algeria</td>
            <td><img src="${AlgFlag}" class="block object-cover size-8 ml-auto"/></td>
            <td>${algeriascore} - ${opponentscore}</td>
            <td><img src="${opponentflag}" class="block object-cover size-8 mr-auto"/></td>
            <td class="text-left">${opponentname}</td>
          </tr>`;
      };

      data.forEach(item => {
        DataTable.innerHTML += TR(item);
      });

      const win = data.filter(i => i.algeriascore > i.opponentscore).length;
      const loss = data.filter(i => i.algeriascore < i.opponentscore).length;
      const draw = data.filter(i => i.algeriascore === i.opponentscore).length;
      const scored = data.reduce((acc, cur) => acc + cur.algeriascore, 0);
      const received = data.reduce((acc, cur) => acc + cur.opponentscore, 0);

      StatisticsTable.innerHTML = `<tr>
        <td>${win}</td><td>${loss}</td><td>${draw}</td>
        <td>${scored}</td><td>${received}</td>
      </tr>`;
    } catch (err) {
      console.error("Appwrite fetch error:", err);
    }
  });

} else if (location.pathname.includes("admin.html")) {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const data = Object.fromEntries(new FormData(form));
      const payload = transformObjectKeys({
        date: data.date,
        opponentname: capitalizeWords(data.Opponent_02),
        opponentflag: data["Opponent Flag"],
        opponentscore: Number(data.Score_02),
        algeriascore: Number(data.Score_01),
        coachname: data.coach,
        event: data["game type"]
      });

      try {
        const res = await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), payload);
        alert("Match added successfully!");
        form.reset();
      } catch (err) {
        console.error("Appwrite insert error:", err);
        alert("Error saving match.");
      }
    });
  });
}
