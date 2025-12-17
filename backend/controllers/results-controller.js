import Results from "../model/resultsModel.js";

export default async function getData(req, res) {

  try {

    const results = await Results.find({});

    if(!results) {
      return res.status(400).json({ message: 'No data found...'})
    }
    return res.status(200).json(results);

  } catch(error) {
    return res.status(500).json({ message: `Error: ${error.message}`})
  }
}