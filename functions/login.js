const faunadb = require("faunadb");
const q = faunadb.query;

exports.handler = async function (event, context) {
  const adminClient = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  });

  const { dni } = JSON.parse(event.body);

  if (!dni) {
    return {
      statusCode: 401,
      body: JSON.stringify({
        message: "DNI requerido",
      }),
    };
  }

  return adminClient
    .query(
      q.Map(
        q.Paginate(q.Match(q.Index("clients_by_dni"), dni)),
        q.Lambda("client", q.Get(q.Var("client")))
      )
    )
    .then((ret) => ({
      statusCode: 200,
      body: JSON.stringify(ret),
    }))
    .catch((err) => ({
      statusCode: err.requestResult.statusCode,
      body: JSON.stringify({ message: err.description }),
    }));
};
