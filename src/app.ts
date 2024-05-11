import yargs from "yargs";
import { getMostFrequentSighting } from "../src/birds";
import { getLatestFirstSighting } from "../src/birds";

yargs
  .scriptName("birds")
  .options({
    sightings: {
      alias: ["sightings", "s"],
      describe: "list of bird sightings",
      type: "string",
      nargs: 1,
      demand: false,
      default: "1,1,2,2,3",
    },
  })
  .command(
    "birds [func]",
    "do data analyises on bird sightings",
    (args) => {
      args.positional("func", {
        type: "string",
        // default: "most",
        describe: "which type of data analysis you want to do: most, last",
      });
    },

    async (argv) => {
      const sightings = argv.sightings.split(",").map(Number);
      switch (argv.func) {
        case "most":
          try {
            const result = getMostFrequentSighting(sightings);
            console.log("Most seen bird is:", result);
          } catch (error) {
            if (error instanceof Error) {
              console.log(error.message);
            }
          }
          break;

        case "last":
          try {
            const result = getLatestFirstSighting(sightings);
            console.log("Latest seen bird is:", result);
          } catch (error) {
            if (error instanceof Error) {
              console.log(error.message);
            }
          }
          break;

        default:
          console.log("insert valid function value. Either 'most' or 'last'");
          break;
      }
    },
  )
  .help().argv;
